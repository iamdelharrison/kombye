import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Clock, Coffee, Wine, Music } from 'lucide-react';
import MapView from './MapView';

interface Place {
  id: string;
  name: string;
  type: 'restaurant' | 'bar' | 'cafe' | 'lounge' | 'club';
  singlesCount: number;
  distance: string;
  address: string;
  isLive: boolean;
}

const FindTab: React.FC = () => {
  const nearbyPlaces: Place[] = [
    {
      id: '1',
      name: 'The Rooftop Lounge',
      type: 'lounge',
      singlesCount: 12,
      distance: '0.3 mi',
      address: '123 Main St',
      isLive: true
    },
    {
      id: '2',
      name: 'Jazz & Blues Café',
      type: 'cafe',
      singlesCount: 8,
      distance: '0.5 mi', 
      address: '456 Oak Ave',
      isLive: true
    },
    {
      id: '3',
      name: 'Upscale Wine Bar',
      type: 'bar',
      singlesCount: 15,
      distance: '0.7 mi',
      address: '789 Pine St',
      isLive: true
    },
    {
      id: '4',
      name: 'Downtown Bistro',
      type: 'restaurant',
      singlesCount: 6,
      distance: '0.9 mi',
      address: '321 Elm St',
      isLive: false
    }
  ];

  const getPlaceIcon = (type: string) => {
    switch (type) {
      case 'cafe': return <Coffee className="w-4 h-4" />;
      case 'bar': return <Wine className="w-4 h-4" />;
      case 'lounge': return <Music className="w-4 h-4" />;
      case 'club': return <Music className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'cafe': return 'bg-amber-600';
      case 'bar': return 'bg-purple-600';
      case 'lounge': return 'bg-red-600';
      case 'club': return 'bg-pink-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <CardContent className="p-4 text-center">
          <h2 className="text-xl font-bold mb-2">Find Singles Near You</h2>
          <p className="text-red-100">
            Real-time counts of mature Black singles at nearby venues
          </p>
        </CardContent>
      </Card>

      <MapView />

      <Card className="bg-black/80 border-red-600">
        <CardHeader>
          <CardTitle className="text-red-400 flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Live Venue Counts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {nearbyPlaces.map((place) => (
            <div
              key={place.id}
              className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-red-600/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${getTypeColor(place.type)} text-white`}>
                    {getPlaceIcon(place.type)}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{place.name}</h3>
                    <p className="text-gray-400 text-sm">{place.address}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-red-600 text-white mb-1">
                    <Users className="w-3 h-3 mr-1" />
                    {place.singlesCount} singles
                  </Badge>
                  <p className="text-gray-400 text-sm flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {place.distance}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge 
                  variant="outline" 
                  className={`capitalize ${place.isLive ? 'border-green-500 text-green-400' : 'border-gray-500 text-gray-400'}`}
                >
                  <div className={`w-2 h-2 rounded-full mr-2 ${place.isLive ? 'bg-green-500' : 'bg-gray-500'}`} />
                  {place.isLive ? 'Live Count' : 'Last Updated 2h ago'}
                </Badge>
                <p className="text-gray-400 text-sm capitalize">{place.type}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default FindTab;