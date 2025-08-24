import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Calendar, ExternalLink, Crown } from 'lucide-react';

interface EliteEvent {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  attendees: number;
  category: string;
  distance: number;
  organization: string;
  dresscode: string;
}

const EliteEventIntegration: React.FC = () => {
  const [events, setEvents] = useState<EliteEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockEvents: EliteEvent[] = [
      {
        id: '1',
        name: 'Black Enterprise Tech Summit VIP Reception',
        description: 'Exclusive networking for Black tech executives and entrepreneurs',
        date: '2024-03-15',
        location: 'San Francisco, CA',
        attendees: 85,
        category: 'Tech Conference',
        distance: 2.1,
        organization: 'Black Enterprise',
        dresscode: 'Business Formal'
      },
      {
        id: '2',
        name: 'The Gathering Spot Elite Singles Mixer',
        description: 'Private club event for accomplished professionals 35+',
        date: '2024-03-18',
        location: 'Atlanta, GA',
        attendees: 65,
        category: 'Private Club',
        distance: 1.8,
        organization: 'The Gathering Spot',
        dresscode: 'Cocktail Attire'
      },
      {
        id: '3',
        name: '100 Black Men Leadership Gala',
        description: 'Annual fundraising gala with networking reception',
        date: '2024-03-22',
        location: 'Washington, DC',
        attendees: 120,
        category: 'Gala',
        distance: 5.2,
        organization: '100 Black Men',
        dresscode: 'Black Tie'
      },
      {
        id: '4',
        name: 'Black Medical Association Awards Dinner',
        description: 'Celebrating excellence in healthcare with networking',
        date: '2024-03-25',
        location: 'Chicago, IL',
        attendees: 95,
        category: 'Awards',
        distance: 8.7,
        organization: 'National Medical Assn',
        dresscode: 'Formal'
      }
    ];

    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Card className="bg-white/10 backdrop-blur border-gold-400">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-white/20 rounded w-3/4"></div>
            <div className="h-4 bg-white/20 rounded w-1/2"></div>
            <div className="h-4 bg-white/20 rounded w-2/3"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-purple-500/20 to-gold-500/20 border-gold-400">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Crown className="w-5 h-5 text-gold-400" />
            Elite Black Professional Events
          </CardTitle>
          <p className="text-white/80 text-sm">
            Exclusive gatherings from premier Black organizations and private clubs
          </p>
        </CardHeader>
      </Card>

      {events.map((event) => (
        <Card key={event.id} className="bg-white/10 backdrop-blur border-gold-400/50">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-white font-semibold text-lg">{event.name}</h3>
              <Badge className="bg-purple-600 text-white">
                {event.category}
              </Badge>
            </div>
            
            <p className="text-white/80 text-sm mb-2">{event.description}</p>
            <p className="text-gold-300 text-xs mb-3">Hosted by {event.organization}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
                <span className="text-gold-300">• {event.dresscode}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{event.location} • {event.distance} miles away</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Users className="w-4 h-4" />
                <span>{event.attendees} attending</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-purple-600 to-gold-600 hover:from-purple-700 hover:to-gold-700 flex-1"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Event
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-gold-400 text-gold-300 hover:bg-gold-400 hover:text-white"
              >
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EliteEventIntegration;