import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { User, Heart, Plus, X, Calendar, Cross } from 'lucide-react';
import GenderSelection from './GenderSelection';

interface ProfileSetupProps {
  onComplete: (profile: any) => void;
  isSetup: boolean;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ onComplete, isSetup }) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [bio, setBio] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [newInterest, setNewInterest] = useState('');
  const [gender, setGender] = useState('');
  const [preferredGender, setPreferredGender] = useState('');
  const [ageRangeMin, setAgeRangeMin] = useState(40);
  const [ageRangeMax, setAgeRangeMax] = useState(79);
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const age = birthDate ? calculateAge(birthDate) : 0;

  const suggestedInterests = [
    'Gospel Music', 'Church Activities', 'Bible Study', 'Jazz Music', 'Fine Dining', 
    'Travel', 'Wine Tasting', 'Art Galleries', 'Theater', 'Fitness', 'Cooking', 
    'Dancing', 'Reading', 'Golf', 'Gardening', 'Volunteering', 'Community Service'
  ];

  const addInterest = (interest: string) => {
    if (interest && !interests.includes(interest) && interests.length < 10) {
      setInterests([...interests, interest]);
      setNewInterest('');
    }
  };

  const removeInterest = (interest: string) => {
    setInterests(interests.filter(i => i !== interest));
  };

  const handleSubmit = () => {
    // Automatically set preferred gender to opposite of user's gender
    const autoPreferredGender = gender === 'Male' ? 'Female' : 'Male';
    
    if (name && birthDate && age >= 40 && gender) {
      const profile = {
        name,
        birthDate,
        age,
        bio,
        interests,
        gender,
        preferredGender: autoPreferredGender,
        ageRangeMin,
        ageRangeMax,
        createdAt: new Date().toISOString(),
        trialStartDate: new Date().toISOString(),
        trialEndDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
        isPremium: false
      };
      onComplete(profile);
    }
  };

  const isValid = name && birthDate && age >= 40 && gender;

  return (
    <Card className="bg-white/10 backdrop-blur border-gold-400 text-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gold-300">
          <User className="w-5 h-5" />
          <span>{isSetup ? 'Your Profile' : 'Create Your Profile'}</span>
          <Cross className="w-4 h-4 opacity-30" />
        </CardTitle>
        <p className="text-white/80 text-sm">
          For mature Black Christian singles seeking meaningful connections
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label htmlFor="name" className="text-white">Full Name</Label>
            <Input 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/20 border-gold-400 text-white placeholder:text-white/50"
              placeholder="Your full name"
            />
          </div>
          <div>
            <Label htmlFor="birthDate" className="text-white flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date of Birth (Must be 40+)
            </Label>
            <Input 
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date(Date.now() - 40 * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
              className="bg-white/20 border-gold-400 text-white"
            />
            {age > 0 && (
              <p className="text-sm text-gold-300 mt-1">Age: {age} years old</p>
            )}
          </div>
        </div>
        
        <div>
          <Label htmlFor="bio" className="text-white">About You</Label>
          <Textarea 
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="bg-white/20 border-gold-400 text-white placeholder:text-white/50 min-h-[80px]"
            placeholder="Share a bit about yourself, your faith, and what you're looking for..."
          />
        </div>
        
        <div>
          <Label className="text-white">Interests & Hobbies</Label>
          <div className="flex flex-wrap gap-2 mb-3">
            {interests.map((interest) => (
              <Badge 
                key={interest} 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 cursor-pointer"
                onClick={() => removeInterest(interest)}
              >
                {interest}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2 mb-3">
            <Input 
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              className="bg-white/20 border-gold-400 text-white placeholder:text-white/50 flex-1"
              placeholder="Add an interest"
              onKeyPress={(e) => e.key === 'Enter' && addInterest(newInterest)}
            />
            <Button 
              onClick={() => addInterest(newInterest)}
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {suggestedInterests.filter(s => !interests.includes(s)).slice(0, 8).map((interest) => (
              <Badge 
                key={interest}
                variant="outline"
                className="border-gold-400 text-gold-300 hover:bg-gold-400 hover:text-white cursor-pointer"
                onClick={() => addInterest(interest)}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
        
        <GenderSelection
          gender={gender}
          preferredGender={preferredGender}
          ageRangeMin={ageRangeMin}
          ageRangeMax={ageRangeMax}
          onGenderChange={setGender}
          onPreferredGenderChange={setPreferredGender}
          onAgeRangeChange={(min, max) => {
            setAgeRangeMin(min);
            setAgeRangeMax(max);
          }}
        />
        
        {age > 0 && age < 40 && (
          <div className="p-3 bg-red-500/20 border border-red-400 rounded-lg">
            <p className="text-red-300 text-sm">
              <Heart className="w-4 h-4 inline mr-1" />
              Kombye is designed for mature singles 40 and older.
            </p>
          </div>
        )}
        
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-400/20 p-3 rounded-lg border border-green-400">
          <p className="text-green-300 text-sm font-semibold">🎉 Welcome to your 3-month free trial!</p>
          <p className="text-green-200 text-xs">No credit card required. Full access to all features.</p>
        </div>
        
        <Button 
          onClick={handleSubmit}
          disabled={!isValid}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:bg-gray-600 disabled:text-gray-400"
        >
          {isSetup ? 'Update Profile' : 'Complete Profile & Start Trial'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileSetup;