import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, MapPin, AlertTriangle } from 'lucide-react';
import DatingPractices from './DatingPractices';
import EmergencyServices from './EmergencyServices';

interface SafetyFeaturesProps {
  locationEnabled: boolean;
  onLocationToggle: (enabled: boolean) => void;
}

const SafetyFeatures: React.FC<SafetyFeaturesProps> = ({
  locationEnabled,
  onLocationToggle
}) => {
  const handleEmergencyLocationOff = () => {
    onLocationToggle(false);
    alert('Location sharing has been turned off for your safety.');
  };

  return (
    <div className="space-y-6">
      <Card className="bg-black/80 border-red-600">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-400">
            <Shield className="w-5 h-5" />
            <span>Emergency Safety Controls</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-orange-600 bg-orange-900/20">
            <AlertTriangle className="h-4 w-4 text-orange-400" />
            <AlertDescription className="text-orange-200">
              If you feel unsafe or being followed, use the emergency button below
            </AlertDescription>
          </Alert>
          
          <Button
            onClick={handleEmergencyLocationOff}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
            disabled={!locationEnabled}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Emergency: Turn Off Location
          </Button>
          
          <div className="text-xs text-gray-400 space-y-1">
            <p>• This will immediately stop sharing your location</p>
            <p>• You will no longer appear to other users</p>
            <p>• You can re-enable location in settings when safe</p>
          </div>
          
          {!locationEnabled && (
            <Alert className="border-green-600 bg-green-900/20">
              <Shield className="h-4 w-4 text-green-400" />
              <AlertDescription className="text-green-200">
                Location sharing is currently OFF. You are not visible to other users.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      <EmergencyServices />
      <DatingPractices />
    </div>
  );
};

export default SafetyFeatures;