import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, WifiOff, Users, Activity, Cross } from 'lucide-react';

interface StatusIndicatorProps {
  isActive: boolean;
  nearbyCount: number;
  isConnected: boolean;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  isActive, 
  nearbyCount, 
  isConnected 
}) => {
  return (
    <Card className="bg-red-800/80 backdrop-blur border-amber-400/50">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Activity className={`w-7 h-7 ${isActive ? 'text-green-400' : 'text-gray-400'}`} />
              {isActive && (
                <Cross className="w-3 h-3 absolute -top-1 -right-1 text-amber-300 opacity-60" />
              )}
            </div>
            <div>
              <p className="text-white font-bold text-lg">
                {isActive ? 'Discovering' : 'Inactive'}
              </p>
              <p className="text-white/90 text-base">
                {nearbyCount} Christian singles nearby
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {isConnected ? (
              <Wifi className="w-6 h-6 text-green-400" />
            ) : (
              <WifiOff className="w-6 h-6 text-red-400" />
            )}
            
            <Badge 
              className={`font-semibold text-base px-3 py-1 ${
                isActive 
                  ? 'bg-green-600 text-white' 
                  : 'bg-red-600 text-white'
              }`}
            >
              {isActive ? 'Active' : 'Paused'}
            </Badge>
          </div>
        </div>
        
        {isActive && nearbyCount > 0 && (
          <div className="mt-3 p-3 bg-red-700/60 rounded-lg border border-amber-400/30">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-amber-400" />
              <p className="text-white font-medium text-base">
                Ready to connect with {nearbyCount} mature Christian singles in your area
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatusIndicator;