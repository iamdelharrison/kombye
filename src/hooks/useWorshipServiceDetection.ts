import { useState, useEffect, useCallback } from 'react';

interface Location {
  lat: number;
  lng: number;
}

interface WorshipLocation {
  id: string;
  name: string;
  location: Location;
  type: 'church' | 'mosque' | 'synagogue' | 'temple';
}

interface UseWorshipServiceDetectionProps {
  userLocation: Location | null;
  enabled: boolean;
}

// Mock worship locations - in production, this would come from a database
const WORSHIP_LOCATIONS: WorshipLocation[] = [
  {
    id: '1',
    name: 'First Baptist Church',
    location: { lat: 34.0522, lng: -118.2437 },
    type: 'church'
  },
  {
    id: '2',
    name: 'Islamic Center',
    location: { lat: 34.0622, lng: -118.2537 },
    type: 'mosque'
  }
];

export const useWorshipServiceDetection = ({
  userLocation,
  enabled
}: UseWorshipServiceDetectionProps) => {
  const [isNearWorship, setIsNearWorship] = useState(false);
  const [nearbyWorshipLocation, setNearbyWorshipLocation] = useState<WorshipLocation | null>(null);

  const calculateDistance = useCallback((loc1: Location, loc2: Location): number => {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = loc1.lat * Math.PI/180;
    const φ2 = loc2.lat * Math.PI/180;
    const Δφ = (loc2.lat-loc1.lat) * Math.PI/180;
    const Δλ = (loc2.lng-loc1.lng) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c; // Distance in meters
  }, []);

  const checkWorshipProximity = useCallback(() => {
    if (!userLocation || !enabled) {
      setIsNearWorship(false);
      setNearbyWorshipLocation(null);
      return;
    }

    const WORSHIP_RADIUS = 1609.34; // 1 mile in meters

    for (const worship of WORSHIP_LOCATIONS) {
      const distance = calculateDistance(userLocation, worship.location);
      
      if (distance <= WORSHIP_RADIUS) {
        setIsNearWorship(true);
        setNearbyWorshipLocation(worship);
        return;
      }
    }

    setIsNearWorship(false);
    setNearbyWorshipLocation(null);
  }, [userLocation, enabled, calculateDistance]);

  useEffect(() => {
    checkWorshipProximity();
  }, [checkWorshipProximity]);

  return {
    isNearWorship,
    nearbyWorshipLocation,
    shouldSuppressNotifications: isNearWorship
  };
};