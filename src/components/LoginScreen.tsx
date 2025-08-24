import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Linkedin, Heart, Users2, Cross, MapPin, Eye } from 'lucide-react';
import PhotoSlideshow from './PhotoSlideshow';

interface LoginScreenProps {
  onLogin: (profile: any) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLinkedInLogin = () => {
    onLogin({ 
      name: 'Demo User', 
      age: 45, 
      provider: 'linkedin',
      trialStartDate: new Date().toISOString(),
      trialEndDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
      isPremium: false,
      linkedProfiles: []
    });
  };

  const handleEmailLogin = () => {
    if (email && password) {
      onLogin({ 
        name: email.split('@')[0], 
        age: 45, 
        provider: 'email',
        trialStartDate: new Date().toISOString(),
        trialEndDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
        isPremium: false,
        linkedProfiles: []
      });
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 flex items-center justify-center">
      <div className="max-w-md w-full space-y-6">
        {/* Header with couples image and logo */}
        <div className="text-center py-8">
          <div className="bg-white rounded-lg p-6 mb-4 relative overflow-hidden border-2 border-gray-200 shadow-lg">
            <div className="relative">
              {/* Happy mature black couple slideshow */}
              <PhotoSlideshow />
              
              {/* Logo */}
              <h1 className="text-6xl font-black text-black mb-3 relative">
                Komby<span className="text-red-600 relative">
                  e
                  <Cross className="w-4 h-4 absolute -top-1 -right-1 text-red-400 opacity-40" />
                </span>
              </h1>
              
              {/* Slogan */}

              <p className="text-gray-700 text-2xl italic font-bold">
                It's Time To Meet in Person
              </p>
              
              {/* Location-based description */}
              <div className="bg-blue-50 p-4 rounded-lg mt-4 border-2 border-blue-200">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold text-blue-800">Find Events Where Singles Gather</h3>
                </div>
                <p className="text-blue-700 text-sm font-semibold text-center">
                  Discover jazz lounges, gospel brunches, professional mixers, and cultural events where singles meet in person.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <Card className="bg-white border-2 border-gray-300 shadow-lg">
          <CardHeader>
            <h2 className="text-3xl font-black text-black text-center">
              {isSignUp ? 'Join Kombye' : 'Welcome Back'}
            </h2>
            <div className="bg-gradient-to-r from-green-500 to-emerald-400 p-4 rounded-lg text-center">
              <p className="text-white font-bold text-lg">🎉 3 Months FREE Premium</p>
              <div className="text-white text-sm mt-1">
                <p>✓ See exact event locations</p>
                <p>✓ View detailed event info</p>
                <p>✓ RSVP to events & save favorites</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg border-2 border-yellow-200 mt-2">
              <div className="flex items-center justify-center mb-1">
                <Eye className="w-4 h-4 text-yellow-600 mr-1" />
                <p className="text-yellow-800 font-bold text-sm">After trial:</p>
              </div>
              <p className="text-yellow-700 text-xs text-center">
                See singles count in your area, but upgrade for specific locations
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleLinkedInLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-bold text-lg"
            >
              <Linkedin className="w-6 h-6 mr-3" />
              Continue with LinkedIn
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t-2 border-gray-300" />
              </div>
              <div className="relative flex justify-center text-lg">
                <span className="bg-white px-3 text-gray-600 font-semibold">or</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-black font-bold text-lg">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-2 border-gray-300 text-black text-lg"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-black font-bold text-lg">Password</Label>
                <Input 
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white border-2 border-gray-300 text-black text-lg"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleEmailLogin}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-bold text-lg"
            >
              {isSignUp ? 'Start Free Trial' : 'Sign In'}
            </Button>
            
            <div className="text-center">
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-600 hover:text-blue-700 text-lg underline font-semibold"
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Start free trial"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginScreen;