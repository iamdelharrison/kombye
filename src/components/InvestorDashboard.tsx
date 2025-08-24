import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { TrendingUp, DollarSign, Users, Target } from 'lucide-react';

const InvestorDashboard: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    website: '',
    currentlyInvesting: false,
    investmentAmount: '',
    specialties: [] as string[],
    phone: ''
  });

  const investmentRanges = [
    '$50K - $100K',
    '$100K - $500K', 
    '$500K - $1M',
    '$1M - $5M',
    '$5M - $10M',
    '$10M+'
  ];

  const companyTypes = [
    'Tech/SaaS',
    'Dating/Social',
    'Mobile Apps',
    'Consumer Products',
    'B2B Services',
    'Healthcare',
    'Fintech',
    'E-commerce',
    'Media/Entertainment'
  ];

  const handleSpecialtyChange = (specialty: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        specialties: [...prev.specialties, specialty]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        specialties: prev.specialties.filter(s => s !== specialty)
      }));
    }
  };

  const isFormValid = formData.company && formData.email && formData.website && 
                     formData.investmentAmount && formData.specialties.length > 0 && formData.phone;

  const handleSubmit = () => {
    if (isFormValid) {
      setShowContent(true);
    }
  };

  if (showContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-red-800/60 backdrop-blur border-amber-400/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-300 text-2xl">
                <TrendingUp className="w-8 h-8" />
                <span>Kombyé Investment Opportunity</span>
              </CardTitle>
              <p className="text-amber-200">Elite Black Professional Dating Platform</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur border-green-400/50">
                  <CardHeader>
                    <CardTitle className="text-green-300 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Target Market
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-white space-y-2">
                    <p>• Mature Black singles 40+ years old</p>
                    <p>• $75K+ annual income professionals</p>
                    <p>• College-educated demographic</p>
                    <p>• Members of elite Black organizations</p>
                    <p>• High-value event attendees</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur border-blue-400/50">
                  <CardHeader>
                    <CardTitle className="text-blue-300 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Premium Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-white space-y-2">
                    <p>• The Gathering Spot events</p>
                    <p>• Black Enterprise conferences</p>
                    <p>• 100 Black Men gatherings</p>
                    <p>• Debutante balls & galas</p>
                    <p>• Black professional mixers</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white/10 backdrop-blur border-amber-400/50">
                <CardHeader>
                  <CardTitle className="text-amber-300 flex items-center gap-2">
                    <DollarSign className="w-6 h-6" />
                    Revenue Projections
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4 text-white">
                    <div className="text-center p-4 bg-green-500/20 rounded-lg">
                      <p className="text-2xl font-bold text-green-300">$2.4M</p>
                      <p className="text-sm">Year 1 Revenue</p>
                    </div>
                    <div className="text-center p-4 bg-blue-500/20 rounded-lg">
                      <p className="text-2xl font-bold text-blue-300">$8.7M</p>
                      <p className="text-sm">Year 2 Revenue</p>
                    </div>
                    <div className="text-center p-4 bg-purple-500/20 rounded-lg">
                      <p className="text-2xl font-bold text-purple-300">$18.5M</p>
                      <p className="text-sm">Year 3 Revenue</p>
                    </div>
                  </div>
                  
                  <div className="text-white space-y-3">
                    <h4 className="font-semibold text-amber-300">Revenue Streams:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p>• Premium subscriptions ($49-199/month)</p>
                        <p>• Event partnership fees (15-25%)</p>
                        <p>• Location boost features</p>
                        <p>• Virtual gift marketplace</p>
                      </div>
                      <div>
                        <p>• Elite event access fees</p>
                        <p>• Premium venue partnerships</p>
                        <p>• Corporate sponsorships</p>
                        <p>• Data insights for venues</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 p-4">
      <div className="max-w-md mx-auto">
        <Card className="bg-red-800/60 backdrop-blur border-amber-400/50">
          <CardHeader>
            <CardTitle className="text-amber-300 text-center">
              Investor Information Required
            </CardTitle>
            <p className="text-white/80 text-center text-sm">
              Please provide your details to access investment information
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-white">Company Name *</Label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="bg-white/20 border-amber-400 text-white"
                placeholder="Your investment firm"
              />
            </div>

            <div>
              <Label className="text-white">Email Address *</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-white/20 border-amber-400 text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label className="text-white">Company Website *</Label>
              <Input
                value={formData.website}
                onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                className="bg-white/20 border-amber-400 text-white"
                placeholder="https://yourcompany.com"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="investing"
                checked={formData.currentlyInvesting}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, currentlyInvesting: checked as boolean }))
                }
              />
              <Label htmlFor="investing" className="text-white text-sm">
                Currently investing in companies
              </Label>
            </div>

            <div>
              <Label className="text-white">Investment Range *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, investmentAmount: value }))}>
                <SelectTrigger className="bg-white/20 border-amber-400 text-white">
                  <SelectValue placeholder="Select investment range" />
                </SelectTrigger>
                <SelectContent>
                  {investmentRanges.map(range => (
                    <SelectItem key={range} value={range}>{range}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-white mb-2 block">Company Types You Invest In *</Label>
              <div className="grid grid-cols-2 gap-2">
                {companyTypes.map(type => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={formData.specialties.includes(type)}
                      onCheckedChange={(checked) => handleSpecialtyChange(type, checked as boolean)}
                    />
                    <Label htmlFor={type} className="text-white text-xs">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-white">Phone Number *</Label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="bg-white/20 border-amber-400 text-white"
                placeholder="(555) 123-4567"
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold disabled:bg-gray-600"
            >
              Access Investment Information
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestorDashboard;