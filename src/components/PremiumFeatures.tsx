import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, MessageCircle, Eye, Heart, Star, Crown } from 'lucide-react';

interface PremiumFeaturesProps {
  isPremium: boolean;
  trialEnded: boolean;
}

export const PremiumFeatures: React.FC<PremiumFeaturesProps> = ({ isPremium, trialEnded }) => {
  const premiumFeatures = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Exact Location Access",
      description: "See specific venues, cafes, and gathering spots where singles meet",
      premium: true
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Detailed Singles Map",
      description: "View real-time locations and profiles of nearby singles",
      premium: true
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Unlimited Messaging",
      description: "Send unlimited messages and connect without restrictions",
      premium: true
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Advanced Matching",
      description: "AI-powered compatibility matching based on values and interests",
      premium: true
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Priority Profile Visibility",
      description: "Your profile gets featured and shown first to potential matches",
      premium: true
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Basic Area Count",
      description: "See how many singles are in your general area (free after trial)",
      premium: false
    }
  ];

  const freeTrialRestrictions = [
    "Can only see total count of singles in your area",
    "Cannot view specific locations or venues",
    "Limited to 3 messages per day",
    "No access to detailed profiles",
    "Cannot see who viewed your profile"
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-500 to-blue-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Crown className="w-8 h-8 mr-3 text-yellow-300" />
            Premium Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${feature.premium ? 'bg-yellow-400 text-purple-800' : 'bg-green-400 text-white'}`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    {feature.premium && <Badge className="bg-yellow-400 text-purple-800">Premium</Badge>}
                    {!feature.premium && <Badge className="bg-green-400 text-white">Free</Badge>}
                  </div>
                  <p className="text-purple-100 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {trialEnded && !isPremium && (
        <Card className="bg-orange-50 border-2 border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center">
              <Eye className="w-6 h-6 mr-2" />
              Free Version Limitations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {freeTrialRestrictions.map((restriction, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-orange-700 text-sm">{restriction}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-orange-100 rounded-lg">
              <p className="text-orange-800 font-semibold text-center">
                Upgrade to Premium to unlock all location-based features and unlimited connections!
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PremiumFeatures;