import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Crown, Calendar, Star, MessageSquare, Send } from 'lucide-react';

interface SubscriptionManagerProps {
  user: any;
  onSubscribe: () => void;
}

const SubscriptionManager: React.FC<SubscriptionManagerProps> = ({ user, onSubscribe }) => {
  const [trialDaysLeft, setTrialDaysLeft] = useState(90);
  const [showSurvey, setShowSurvey] = useState(false);
  const [surveyResponse, setSurveyResponse] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [surveySubmitted, setSurveySubmitted] = useState(false);

  useEffect(() => {
    // Simulate trial countdown
    const timer = setInterval(() => {
      setTrialDaysLeft(prev => Math.max(0, prev - 1));
    }, 86400000); // 24 hours

    // Show survey after 30 days (simulated as 60 days left)
    if (trialDaysLeft === 60 && !surveySubmitted) {
      setShowSurvey(true);
    }

    return () => clearInterval(timer);
  }, [trialDaysLeft, surveySubmitted]);

  const handleSurveySubmit = () => {
    setSurveySubmitted(true);
    setShowSurvey(false);
    // In real app, send to backend
    console.log('Survey submitted:', { surveyResponse, suggestions });
  };

  const trialProgress = ((90 - trialDaysLeft) / 90) * 100;

  if (user?.isPremium) {
    return (
      <Card className="bg-gradient-to-r from-red-700 to-red-800 border-amber-400/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className="w-6 h-6 text-amber-400" />
              <span className="text-white font-bold text-lg">Premium Member</span>
            </div>
            <Badge className="bg-amber-500 text-black font-semibold text-base">
              Active
            </Badge>
          </div>
          <p className="text-white/90 text-base mt-2">
            Unlimited connections & premium features
          </p>
        </CardContent>
      </Card>
    );
  }

  if (showSurvey) {
    return (
      <Card className="bg-red-800/80 backdrop-blur border-amber-400/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white text-xl">
            <MessageSquare className="w-6 h-6 text-amber-400" />
            <span>How are you enjoying Kombye?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-white text-base">
            You've been using Kombye for a month! We'd love your feedback.
          </p>
          
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {['Excellent', 'Good', 'Fair', 'Poor'].map((rating) => (
                <Button
                  key={rating}
                  variant={surveyResponse === rating ? "default" : "outline"}
                  onClick={() => setSurveyResponse(rating)}
                  className={`text-base font-medium ${
                    surveyResponse === rating 
                      ? 'bg-red-600 text-white' 
                      : 'bg-red-700/50 text-white border-red-500 hover:bg-red-600'
                  }`}
                >
                  {rating}
                </Button>
              ))}
            </div>
            
            <Textarea
              placeholder="Any suggestions for improvement? (optional)"
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
              className="bg-red-700/50 border-red-500 text-white placeholder-white/70 text-base"
            />
            
            <Button 
              onClick={handleSurveySubmit}
              disabled={!surveyResponse}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg font-semibold py-3"
            >
              <Send className="w-5 h-5 mr-2" />
              Submit Feedback
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-red-800/80 backdrop-blur border-amber-400/50">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-amber-400" />
            <span className="text-white font-bold text-lg">Free Trial</span>
          </div>
          <Badge className="bg-red-600 text-white font-semibold text-base px-3 py-1">
            {trialDaysLeft} days left
          </Badge>
        </div>
        
        <Progress value={trialProgress} className="mb-3 h-3" />
        
        <p className="text-white text-base mb-3">
          Enjoy all premium features during your 3-month trial
        </p>
        
        {trialDaysLeft <= 7 && (
          <div className="space-y-3">
            <p className="text-amber-300 font-medium text-base">
              Trial ending soon! Continue with premium for $19.99/month
            </p>
            <Button 
              onClick={onSubscribe}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg font-bold py-3"
            >
              <Crown className="w-5 h-5 mr-2" />
              Upgrade to Premium
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SubscriptionManager;