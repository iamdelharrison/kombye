import { useState, useEffect, useCallback } from 'react';
import { toast } from '@/components/ui/use-toast';
import { useWorshipServiceDetection } from './useWorshipServiceDetection';
interface User {
  id: string;
  name: string;
  distance: number;
}

interface UseProximityNotificationsProps {
  enabled: boolean;
  locationEnabled: boolean;
  users: User[];
}

export const useProximityNotifications = ({
  enabled,
  locationEnabled,
  users
}: UseProximityNotificationsProps) => {
  const [lastNotifiedUsers, setLastNotifiedUsers] = useState<Set<string>>(new Set());
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  // Worship service detection
  const { shouldSuppressNotifications, nearbyWorshipLocation } = useWorshipServiceDetection({
    userLocation,
    enabled: locationEnabled
  });

  const vibrate = useCallback(() => {
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }
  }, []);

  const showNotification = useCallback((user: User) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification('Kombye Alert! 🔥', {
        body: `${user.name} is nearby (${user.distance}m away)`,
        icon: '/placeholder.svg',
        badge: '/placeholder.svg',
        tag: `proximity-${user.id}`,
        requireInteraction: false
      });

      setTimeout(() => notification.close(), 5000);
    }

    toast({
      title: "Single Nearby! 🔥",
      description: `${user.name} is ${user.distance}m away`,
      duration: 4000
    });

    vibrate();
  }, [vibrate]);

  const updateLocation = useCallback(() => {
    if (!locationEnabled || !('geolocation' in navigator)) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        console.warn('Location access denied:', error);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }, [locationEnabled]);

  // Update location every 30 seconds
  useEffect(() => {
    if (locationEnabled) {
      updateLocation();
      const interval = setInterval(updateLocation, 30000);
      return () => clearInterval(interval);
    }
  }, [locationEnabled, updateLocation]);

  // Check for nearby users and send notifications
  useEffect(() => {
    if (!enabled || !users.length || shouldSuppressNotifications) return;

    // Show worship suppression message if near worship location
    if (shouldSuppressNotifications && nearbyWorshipLocation) {
      toast({
        title: "Notifications Paused 🙏",
        description: `Notifications disabled near ${nearbyWorshipLocation.name}`,
        duration: 3000
      });
      return;
    }

    const nearbyUsers = users.filter(user => user.distance <= 100); // Within 100m
    
    nearbyUsers.forEach(user => {
      if (!lastNotifiedUsers.has(user.id)) {
        showNotification(user);
        setLastNotifiedUsers(prev => new Set([...prev, user.id]));
      }
    });

    // Clean up notifications for users no longer nearby
    const currentUserIds = new Set(nearbyUsers.map(u => u.id));
    setLastNotifiedUsers(prev => {
      const filtered = new Set([...prev].filter(id => currentUserIds.has(id)));
      return filtered;
    });
  }, [enabled, users, lastNotifiedUsers, showNotification, shouldSuppressNotifications, nearbyWorshipLocation]);

  return {
    userLocation,
    vibrate
  };
};