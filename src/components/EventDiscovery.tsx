import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Clock, Star, Eye, Crown } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  venue: string;
  date: string;
  time: string;
  attendees: number;
  category: string;
  distance: number;
  description: string;
  source: string;
}

interface EventDiscoveryProps {
  isPremium: boolean;
  trialEnded: boolean;
}

const EventDiscovery: React.FC<EventDiscoveryProps> = ({ isPremium, trialEnded }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEvents([
        {
          id: '1',
          title: 'The Gathering Spot Elite Mixer',
          venue: 'The Gathering Spot LA',
          date: '2024-02-15',
          time: '7:00 PM',
          attendees: 65,
          category: 'Private Club',
          distance: 0.8,
          description: 'Exclusive networking for accomplished Black professionals',
          source: 'The Gathering Spot'
        },
        {
          id: '2',
          title: 'Black Enterprise Tech Summit Reception',
          venue: 'Four Seasons Downtown',
          date: '2024-02-18',
          time: '6:30 PM',
          attendees: 120,
          category: 'Tech Conference',
          distance: 1.2,
          description: 'VIP reception for Black tech executives and entrepreneurs',
          source: 'Black Enterprise'
        },
        {
          id: '3',
          title: '100 Black Men Leadership Gala',
          venue: 'Beverly Hills Hotel',
          date: '2024-02-20',
          time: '7:30 PM',
          attendees: 150,
          category: 'Gala',
          distance: 2.1,
          description: 'Annual fundraising gala celebrating Black leadership',
          source: '100 Black Men'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (trialEnded && !isPremium) {
    return (
      <Card className="bg-orange-50 border-2 border-orange-200">
        <CardContent className="p-6 text-center">
          <Crown className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-orange-800 text-xl font-bold mb-2">
            {events.length} Elite Events This Week
          </h3>
          <p className="text-orange-700 text-base mb-4">
            Upgrade to Premium to see event details and exact locations
          </p>
        </CardContent>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="bg-white border-2 border-gray-300">
        <CardContent className="p-6 text-center">
          <div className="animate-spin w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Finding elite events where singles gather...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-purple-600 to-gold-600 text-white border-2 border-purple-700">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-xl">
            <Crown className="w-6 h-6" />
            <span>Elite Events Where Singles Gather</span>
          </CardTitle>
          <p className="text-purple-100 text-sm">
            Exclusive events from premier Black organizations and private clubs
          </p>
        </CardHeader>
      </Card>

      {events.map((event) => (
        <Card key={event.id} className="bg-white border-2 border-gray-300 hover:border-purple-400 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-black font-bold text-lg mb-1">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{event.venue} • {event.distance} miles</span>
                </div>
              </div>
              <Badge className="bg-purple-100 text-purple-800 text-xs">
                {event.source}
              </Badge>
            </div>
            
            <p className="text-gray-700 text-sm mb-3">{event.description}</p>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Badge className="bg-gold-100 text-gold-800 text-sm">
                {event.category}
              </Badge>
              <div className="flex space-x-2">
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Eye className="w-4 h-4 mr-1" />
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Star className="w-4 h-4 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventDiscovery;