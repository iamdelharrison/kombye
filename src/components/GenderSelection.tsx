import React from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface GenderSelectionProps {
  gender: string;
  preferredGender: string;
  ageRangeMin: number;
  ageRangeMax: number;
  onGenderChange: (gender: string) => void;
  onPreferredGenderChange: (gender: string) => void;
  onAgeRangeChange: (min: number, max: number) => void;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({
  gender,
  preferredGender,
  ageRangeMin,
  ageRangeMax,
  onGenderChange,
  onPreferredGenderChange,
  onAgeRangeChange
}) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white mb-2 block">Your Gender *</Label>
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            onClick={() => onGenderChange('Male')}
            className={`${
              gender === 'Male'
                ? 'bg-gradient-to-r from-red-600 to-red-700'
                : 'bg-white/20 hover:bg-white/30'
            } text-white border-amber-400`}
          >
            Male
          </Button>
          <Button
            type="button"
            onClick={() => onGenderChange('Female')}
            className={`${
              gender === 'Female'
                ? 'bg-gradient-to-r from-red-600 to-red-700'
                : 'bg-white/20 hover:bg-white/30'
            } text-white border-amber-400`}
          >
            Female
          </Button>
        </div>
      </div>


      <div>
        <Label className="text-white mb-2 block">Age Range Preference</Label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-white/80 text-sm">Min Age</Label>
            <select
              value={ageRangeMin}
              onChange={(e) => onAgeRangeChange(Number(e.target.value), ageRangeMax)}
              className="w-full bg-white/20 border-amber-400 text-white rounded-md p-2"
            >
              {Array.from({ length: 40 }, (_, i) => 40 + i).map(age => (
                <option key={age} value={age} className="bg-red-800 text-white">
                  {age}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label className="text-white/80 text-sm">Max Age</Label>
            <select
              value={ageRangeMax}
              onChange={(e) => onAgeRangeChange(ageRangeMin, Number(e.target.value))}
              className="w-full bg-white/20 border-amber-400 text-white rounded-md p-2"
            >
              {Array.from({ length: 40 }, (_, i) => 40 + i).map(age => (
                <option key={age} value={age} className="bg-red-800 text-white">
                  {age}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;