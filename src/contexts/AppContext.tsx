import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

interface User {
  id: string;
  name: string;
  age: number;
  interests: string[];
  distance: number;
  lastSeen: number;
}

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  notificationsEnabled: boolean;
  locationEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;
  setLocationEnabled: (enabled: boolean) => void;
  nearbyUsers: User[];
  userLocation: { lat: number; lng: number } | null;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  notificationsEnabled: false,
  locationEnabled: false,
  setNotificationsEnabled: () => {},
  setLocationEnabled: () => {},
  nearbyUsers: [],
  userLocation: null,
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [nearbyUsers, setNearbyUsers] = useState<User[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  // Handle location updates
  useEffect(() => {
    if (locationEnabled && 'geolocation' in navigator) {
      const updateLocation = () => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          (error) => {
            console.warn('Location access denied:', error);
            toast({
              title: "Location Error",
              description: "Unable to access your location",
              variant: "destructive"
            });
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
        );
      };

      updateLocation();
      const interval = setInterval(updateLocation, 30000); // Update every 30 seconds
      return () => clearInterval(interval);
    }
  }, [locationEnabled]);

  // Mock nearby users simulation
  useEffect(() => {
    if (locationEnabled) {
      const mockUsers: User[] = [
        {
          id: '1',
          name: 'Angela',
          age: 42,
          interests: ['jazz', 'cooking', 'travel'],
          distance: Math.floor(Math.random() * 200) + 50,
          lastSeen: Date.now() - Math.floor(Math.random() * 600000)
        },
        {
          id: '2',
          name: 'Marcus',
          age: 48,
          interests: ['fitness', 'wine', 'art'],
          distance: Math.floor(Math.random() * 150) + 80,
          lastSeen: Date.now() - Math.floor(Math.random() * 300000)
        }
      ];
      
      const timer = setTimeout(() => {
        setNearbyUsers(mockUsers);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      setNearbyUsers([]);
    }
  }, [locationEnabled]);

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        notificationsEnabled,
        locationEnabled,
        setNotificationsEnabled,
        setLocationEnabled,
        nearbyUsers,
        userLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;