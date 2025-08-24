import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Phone, MapPin, AlertTriangle, Shield } from 'lucide-react';

const EmergencyServices: React.FC = () => {
  const handleEmergencyCall = (number: string, service: string) => {
    // In a real app, this would integrate with the device's phone functionality
    if (confirm(`Call ${service} at ${number}?`)) {
      window.location.href = `tel:${number}`;
    }
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
          
          // In a real app, this would send location to emergency contacts
          if (confirm(`Share your location: ${locationUrl}?`)) {
            navigator.clipboard.writeText(locationUrl);
            alert('Location copied to clipboard. Share with trusted contacts.');
          }
        },
        (error) => {
          alert('Unable to get location. Please enable location services.');
        }
      );
    }
  };

  return (
    <Card className="bg-black/80 border-red-600">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-red-400">
          <Shield className="w-5 h-5" />
          <span>Emergency Services</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="border-red-600 bg-red-900/20">
          <AlertTriangle className="h-4 w-4 text-red-400" />
          <AlertDescription className="text-red-200">
            Use these features only in genuine emergencies
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Button
            onClick={() => handleEmergencyCall('911', 'Emergency Services')}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call 911
          </Button>

          <Button
            onClick={() => handleEmergencyCall('211', 'Crisis Helpline')}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3"
          >
            <Phone className="w-4 h-4 mr-2" />
            Crisis Line 211
          </Button>
        </div>

        <Button
          onClick={handleShareLocation}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
        >
          <MapPin className="w-4 h-4 mr-2" />
          Share Location with Emergency Contacts
        </Button>

        <div className="text-xs text-gray-400 space-y-1">
          <p>• 911: Police, Fire, Medical emergencies</p>
          <p>• 211: Crisis counseling and mental health support</p>
          <p>• Location sharing helps emergency responders find you</p>
          <p>• Always inform trusted contacts of your dating plans</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyServices;