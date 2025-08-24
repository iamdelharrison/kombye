import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Navigation } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  userCount: number;
  type: 'hotspot' | 'event' | 'gathering';
}

interface MapViewProps {
  userLocation?: { lat: number; lng: number };
}

const MapView: React.FC<MapViewProps> = ({ userLocation }) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // Mock locations data - ONLY public business venues, never residential addresses
  const mockLocations: Location[] = [
    {
      id: '1',
      name: 'The Rooftop Lounge',
      lat: 40.7589,
      lng: -73.9851,
      userCount: 12,
      type: 'hotspot'
    },
    {
      id: '2', 
      name: 'Upscale Wine Bar',
      lat: 40.7505,
      lng: -73.9934,
      userCount: 8,
      type: 'hotspot'
    },
    {
      id: '3',
      name: 'Jazz & Blues Club',
      lat: 40.7614,
      lng: -73.9776,
      userCount: 15,
      type: 'hotspot'
    },
    {
      id: '4',
      name: 'Uptown Coffee House',
      lat: 40.7505,
      lng: -73.9934,
      userCount: 6,
      type: 'gathering'
    },
    {
      id: '5',
      name: 'Art Gallery Opening',
      lat: 40.7614,
      lng: -73.9776,
      userCount: 23,
      type: 'event'
    },
    {
      id: '6',
      name: 'Bookstore & Café',
      lat: 40.7589,
      lng: -73.9851,
      userCount: 4,
      type: 'gathering'
    },
    {
      id: '7',
      name: 'Community Center',
      lat: 40.7520,
      lng: -73.9800,
      userCount: 9,
      type: 'gathering'
    },
    {
      id: '8',
      name: 'Fitness Center',
      lat: 40.7600,
      lng: -73.9900,
      userCount: 7,
      type: 'gathering'
    }
  ];

  useEffect(() => {
    // Simulate loading locations
    const timer = setTimeout(() => {
      setLocations(mockLocations);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getLocationTypeColor = (type: string) => {
    switch (type) {
      case 'hotspot': return 'bg-red-600';
      case 'event': return 'bg-yellow-600';
      case 'gathering': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getLocationTypeIcon = (type: string) => {
    switch (type) {
      case 'hotspot': return '🔥';
      case 'event': return '🎉';
      case 'gathering': return '👥';
      default: return '📍';
    }
  };

  return (
    <Card className="bg-black/80 border-red-600">
      <CardHeader>
        <CardTitle className="text-red-400 flex items-center space-x-2">
          <MapPin className="w-5 h-5" />
          <span>Singles Nearby</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Simplified map representation */}
        <div className="bg-gray-900 rounded-lg p-4 mb-4 h-48 relative border border-red-600/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Navigation className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Interactive Map View</p>
              <p className="text-xs text-gray-400">Showing {locations.length} locations</p>
            </div>
          </div>
          
          {/* Mock location markers */}
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`absolute w-3 h-3 rounded-full ${getLocationTypeColor(location.type)} cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
              style={{
                left: `${20 + index * 25}%`,
                top: `${30 + index * 15}%`
              }}
              onClick={() => setSelectedLocation(location)}
            />
          ))}
        </div>

        {/* Location list */}
        <div className="space-y-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                selectedLocation?.id === location.id
                  ? 'bg-red-600/20 border-red-500'
                  : 'bg-gray-800/50 border-gray-700 hover:border-red-600/50'
              }`}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{getLocationTypeIcon(location.type)}</span>
                  <div>
                    <h3 className="text-white font-medium text-sm">{location.name}</h3>
                    <p className="text-gray-400 text-xs capitalize">{location.type}</p>
                  </div>
                </div>
                <Badge className={`${getLocationTypeColor(location.type)} text-white`}>
                  <Users className="w-3 h-3 mr-1" />
                  {location.userCount}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {locations.length === 0 && (
          <div className="text-center py-8">
            <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400">Loading nearby locations...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MapView;