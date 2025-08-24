import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Bell, Vibrate, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface NotificationSettingsProps {
  onNotificationToggle: (enabled: boolean) => void;
  onLocationToggle: (enabled: boolean) => void;
  notificationsEnabled: boolean;
  locationEnabled: boolean;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  onNotificationToggle,
  onLocationToggle,
  notificationsEnabled,
  locationEnabled
}) => {
  const handleNotificationChange = (checked: boolean) => {
    if (checked && 'Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          onNotificationToggle(true);
          toast({
            title: "Notifications Enabled",
            description: "You'll be notified when singles are nearby"
          });
        } else {
          toast({
            title: "Permission Denied",
            description: "Please enable notifications in browser settings",
            variant: "destructive"
          });
        }
      });
    } else {
      onNotificationToggle(false);
    }
  };

  const handleLocationChange = (checked: boolean) => {
    if (checked && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          onLocationToggle(true);
          toast({
            title: "Location Enabled",
            description: "Your location will be used to find nearby singles"
          });
        },
        () => {
          toast({
            title: "Location Access Denied",
            description: "Please enable location access in browser settings",
            variant: "destructive"
          });
        }
      );
    } else {
      onLocationToggle(false);
    }
  };

  return (
    <Card className="bg-black/80 border-red-600">
      <CardHeader>
        <CardTitle className="text-red-400 flex items-center space-x-2">
          <Bell className="w-5 h-5" />
          <span>Proximity Notifications</span>
        </CardTitle>
        <p className="text-sm text-gray-400 mt-2">
          Notifications automatically pause when near places of worship (within 1 mile radius)
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="text-white font-medium">Buzz Notifications</Label>
            <p className="text-sm text-gray-300">
              Get notified when other singles are nearby
            </p>
          </div>
          <Switch
            checked={notificationsEnabled}
            onCheckedChange={handleNotificationChange}
            className="data-[state=checked]:bg-red-600"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="text-white font-medium">Location Sharing</Label>
            <p className="text-sm text-gray-300">
              Share your location to find nearby singles
            </p>
          </div>
          <Switch
            checked={locationEnabled}
            onCheckedChange={handleLocationChange}
            className="data-[state=checked]:bg-red-600"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;