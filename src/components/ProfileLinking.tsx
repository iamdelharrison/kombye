import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Heart, Users, CheckCircle, Cross } from 'lucide-react';

interface ProfileLinkingProps {
  onComplete: (linkedProfiles: string[]) => void;
  existingLinks?: string[];
}

const ProfileLinking: React.FC<ProfileLinkingProps> = ({ onComplete, existingLinks = [] }) => {
  const [linkedProfiles, setLinkedProfiles] = useState<string[]>(existingLinks);
  const [isLinking, setIsLinking] = useState<string | null>(null);

  const platforms = [
    { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-700', icon: '💼' },
    { id: 'facebook', name: 'Facebook', color: 'bg-blue-600', icon: '👥' },
    { id: 'instagram', name: 'Instagram', color: 'bg-pink-600', icon: '📸' }
  ];

  const handleLinkProfile = async (platformId: string) => {
    setIsLinking(platformId);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (!linkedProfiles.includes(platformId)) {
      const updated = [...linkedProfiles, platformId];
      setLinkedProfiles(updated);
      onComplete(updated);
    }
    setIsLinking(null);
  };

  const handleUnlinkProfile = (platformId: string) => {
    const updated = linkedProfiles.filter(id => id !== platformId);
    setLinkedProfiles(updated);
    onComplete(updated);
  };

  return (
    <Card className="bg-white/10 backdrop-blur border-gold-400 text-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gold-300">
          <Linkedin className="w-5 h-5" />
          <span>Link Your Social Profiles</span>
          <Cross className="w-4 h-4 opacity-30" />
        </CardTitle>
        <p className="text-white/80 text-sm">
          Connect your social profiles to build trust and authenticity
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {platforms.map((platform) => {
          const isLinked = linkedProfiles.includes(platform.id);
          const isCurrentlyLinking = isLinking === platform.id;
          
          return (
            <div key={platform.id} className="flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/20">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${platform.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {platform.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{platform.name}</h3>
                  <p className="text-xs text-white/60">
                    {isLinked ? 'Connected' : 'Not connected'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {isLinked && (
                  <Badge className="bg-green-600 text-white">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Linked
                  </Badge>
                )}
                
                {isLinked ? (
                  <Button
                    onClick={() => handleUnlinkProfile(platform.id)}
                    variant="outline"
                    size="sm"
                    className="border-red-400 text-red-300 hover:bg-red-500 hover:text-white"
                  >
                    Unlink
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleLinkProfile(platform.id)}
                    disabled={isCurrentlyLinking}
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    {isCurrentlyLinking ? 'Linking...' : 'Link'}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
        
        <div className="mt-6 p-4 bg-blue-500/20 rounded-lg border border-blue-400">
          <div className="flex items-center space-x-2 mb-2">
            <Heart className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-semibold text-blue-300">Build Trust & Authenticity</span>
          </div>
          <p className="text-xs text-white/80">
            Linking your social profiles helps build trust and shows you're a real person looking for genuine connections.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileLinking;