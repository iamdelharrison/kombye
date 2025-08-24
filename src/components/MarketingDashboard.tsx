import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { TrendingUp, Users, DollarSign, Target, Facebook, Instagram, Radio, MapPin } from 'lucide-react';
import MarketingStrategy from './MarketingStrategy';

const MarketingDashboard = () => {
  const quickStats = [
    { label: 'Target Audience', value: '15M+', icon: <Users className="w-5 h-5" />, desc: 'Event discovery users nationwide' },
    { label: 'Monthly Budget', value: '$70-200K', icon: <DollarSign className="w-5 h-5" />, desc: '2025 viral marketing spend' },
    { label: 'Revenue Target', value: '$240K', icon: <TrendingUp className="w-5 h-5" />, desc: 'Monthly recurring revenue' },
    { label: 'Expected ROI', value: '6.5x', icon: <Target className="w-5 h-5" />, desc: 'Average return on ad spend' }
  ];

  const channels = [
    { name: 'TikTok Viral', reach: '12M', cost: '$2.50 CPM', icon: <Instagram className="w-5 h-5" /> },
    { name: 'Instagram Reels', reach: '8M', cost: '$3.20 CPM', icon: <Instagram className="w-5 h-5" /> },
    { name: 'Creator Partnerships', reach: '5M', cost: '$1K-2K/creator', icon: <Users className="w-5 h-5" /> },
    { name: 'Geo-Targeted Ads', reach: '3M', cost: '$4.50 CPC', icon: <MapPin className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="harlem-font text-4xl font-bold text-white mb-4">
            Komby<span className="relative">
              <span className="text-red-500">e</span>
              <span className="absolute -top-2 -right-1 text-xs text-red-400">🤫</span>
            </span> Marketing Hub
          </h1>
          <p className="text-red-300 text-lg italic">Connecting Mature Black Singles Nationwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="bg-black/80 border-red-600">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2 text-red-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-red-300 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="strategy" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 border-red-600 mb-6">
            <TabsTrigger value="strategy" className="text-white data-[state=active]:bg-red-600">Strategy</TabsTrigger>
            <TabsTrigger value="channels" className="text-white data-[state=active]:bg-red-600">Channels</TabsTrigger>
            <TabsTrigger value="launch" className="text-white data-[state=active]:bg-red-600">Launch Plan</TabsTrigger>
          </TabsList>
          
          <TabsContent value="strategy">
            <MarketingStrategy />
          </TabsContent>
          
          <TabsContent value="channels" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {channels.map((channel, index) => (
                <Card key={index} className="bg-black/80 border-red-600">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-white">
                      {channel.icon}
                      {channel.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Reach:</span>
                        <span className="text-red-400 font-semibold">{channel.reach}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Cost:</span>
                        <span className="text-white font-semibold">{channel.cost}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="launch">
            <Card className="bg-black/80 border-red-600">
              <CardHeader>
                <CardTitle className="text-white text-center">90-Day Launch Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <Badge className="bg-red-600 text-white">Days 1-30</Badge>
                    <h3 className="text-white font-bold">Foundation</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• App store optimization</li>
                      <li>• Facebook ad campaigns</li>
                      <li>• Influencer outreach</li>
                      <li>• Community partnerships</li>
                    </ul>
                  </div>
                  <div className="text-center space-y-3">
                    <Badge className="bg-red-600 text-white">Days 31-60</Badge>
                    <h3 className="text-white font-bold">Expansion</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Radio advertising</li>
                      <li>• PR & media coverage</li>
                      <li>• Event sponsorships</li>
                      <li>• Referral programs</li>
                    </ul>
                  </div>
                  <div className="text-center space-y-3">
                    <Badge className="bg-red-600 text-white">Days 61-90</Badge>
                    <h3 className="text-white font-bold">Scale</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• National campaigns</li>
                      <li>• TV partnerships</li>
                      <li>• Success story features</li>
                      <li>• Premium features launch</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center pt-6">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    Start Marketing Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MarketingDashboard;