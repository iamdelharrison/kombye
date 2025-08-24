import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MapPin, Heart, MessageCircle, Clock, Cross, Star } from 'lucide-react';

interface User {
  id: string;
  name: string;
  age: number;
  interests: string[];
  distance: number;
  lastSeen: number;
}

interface NearbyUsersProps {
  users: User[];
  onVibrate: () => void;
  isPremium: boolean;
  trialEnded: boolean;
}

const NearbyUsers: React.FC<NearbyUsersProps> = ({ users, onVibrate, isPremium, trialEnded }) => {
  const [likedUsers, setLikedUsers] = useState<Set<string>>(new Set());

  const handleLike = (userId: string) => {
    setLikedUsers(prev => new Set([...prev, userId]));
    onVibrate();
  };

  const formatLastSeen = (timestamp: number) => {
    const minutes = Math.floor((Date.now() - timestamp) / 60000);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${Math.floor(hours / 24)}d ago`;
  };

  // Show restrictions for non-premium users after trial
  // Show restrictions for non-premium users after trial
  if (trialEnded && !isPremium) {
    return (
      <Card className="bg-orange-50 border-2 border-orange-200">
        <CardContent className="p-6 text-center">
          <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-orange-800 text-xl font-bold mb-2">
            {users.length} Singles at Public Places Near You
          </h3>
          <p className="text-orange-700 text-base mb-4">
            Upgrade to Premium to see exact business locations and real-time counts
          </p>
          <div className="bg-orange-100 p-3 rounded-lg">
            <p className="text-orange-800 font-semibold text-sm">
              Premium: See who's at restaurants, cafés, gyms, community centers & more
            </p>
            <p className="text-orange-700 text-xs mt-1">
              🔒 Privacy Protected: Only public business locations shown, never home addresses
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (users.length === 0) {
    return (
      <Card className="bg-blue-600 text-white border-2 border-blue-700">
        <CardContent className="p-6 text-center">
          <MapPin className="w-12 h-12 text-blue-200 mx-auto mb-4" />
          <p className="text-white text-lg font-medium">
            Looking for singles at nearby public places...
          </p>
          <p className="text-blue-100 text-base mt-2">
            Make sure location is enabled to discover singles at cafés, restaurants & more
          </p>
          <p className="text-blue-200 text-xs mt-1">
            🔒 Privacy: Only public business locations shown, never home addresses
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="bg-blue-600 text-white border-2 border-blue-700">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <Heart className="w-6 h-6 text-blue-200" />
            <span>Singles at Nearby Places</span>
          </CardTitle>
        </CardHeader>
      </Card>

      {users.map((user) => (
        <Card key={user.id} className="bg-red-800/80 backdrop-blur border-amber-400/30">
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Avatar className="w-16 h-16 border-2 border-amber-400">
                <AvatarFallback className="bg-red-600 text-white text-xl font-bold">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-white font-bold text-lg">{user.name}</h3>
                    <p className="text-white/90 text-base">{user.age} years old</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-red-600 text-white font-medium text-sm mb-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {user.distance}m
                    </Badge>
                    <p className="text-white/70 text-sm flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {formatLastSeen(user.lastSeen)}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {user.interests.slice(0, 3).map((interest, index) => (
                    <Badge key={index} className="bg-red-700/60 text-white text-sm border border-amber-400/30">
                      {interest}
                    </Badge>
                  ))}
                  {user.interests.length > 3 && (
                    <Badge className="bg-red-700/60 text-white text-sm border border-amber-400/30">
                      +{user.interests.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleLike(user.id)}
                    disabled={likedUsers.has(user.id)}
                    className={`flex-1 text-base font-semibold ${
                      likedUsers.has(user.id)
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
                    }`}
                  >
                    {likedUsers.has(user.id) ? (
                      <>
                        <Star className="w-4 h-4 mr-2" />
                        Interested
                      </>
                    ) : (
                      <>
                        <Heart className="w-4 h-4 mr-2" />
                        Show Interest
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="bg-red-700/50 border-red-500 text-white hover:bg-red-600 text-base font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NearbyUsers;