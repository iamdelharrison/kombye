import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Shield, CheckCircle } from 'lucide-react';

const DatingPractices: React.FC = () => {
  const safetyPractices = [
    "Do a vibe check - trust your instincts about the person",
    "Be honest when approaching someone",
    "Show humility and respect in all interactions",
    "Never invite someone to your home or workplace on first meetings",
    "Avoid illegal substances completely",
    "Don't over-indulge in alcohol - stay alert and in control"
  ];

  const datingTips = [
    "Smile genuinely and make eye contact",
    "Ask open-ended questions about their interests",
    "Listen actively and show genuine curiosity",
    "Be yourself - authenticity is attractive",
    "Respect personal space and boundaries",
    "Choose public places for initial meetings",
    "Share your interests but don't dominate conversation",
    "Be punctual and dress appropriately",
    "Put your phone away and be present",
    "End gracefully if there's no connection"
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-black/80 border-purple-600">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-purple-400">
            <Shield className="w-5 h-5" />
            <span>Safe Dating Practices</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {safetyPractices.map((practice, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{practice}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/80 border-pink-600">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-pink-400">
            <Heart className="w-5 h-5" />
            <span>Dating Tips</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {datingTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Users className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{tip}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DatingPractices;