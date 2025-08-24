import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { DollarSign, Crown, Play, MapPin, TrendingUp, Users } from 'lucide-react';

const RevenueModel = () => {
  const revenueStreams = [
    {
      name: 'Premium Subscriptions',
      price: '$14.99/month',
      features: ['Unlimited event details', 'See all attendees', 'Priority notifications', 'Advanced filters'],
      conversion: '12%',
      monthly: '$120K',
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: 'Ad-Supported Features',
      price: 'Watch 30s ad',
      features: ['Unlock event location', 'See attendee count', 'Get contact info', 'Event reminders'],
      conversion: '45%',
      monthly: '$85K',
      icon: <Play className="w-6 h-6" />
    },
    {
      name: 'Event Promotions',
      price: '$2.99-$19.99',
      features: ['Promote your event', 'Featured placement', 'Boost visibility', 'Analytics'],
      conversion: '8%',
      monthly: '$35K',
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  const metrics = [
    { label: 'Target Users', value: '75K', desc: 'Active monthly users' },
    { label: 'Revenue/User', value: '$3.20', desc: 'Average monthly ARPU' },
    { label: 'Total Revenue', value: '$240K', desc: 'Monthly recurring revenue' },
    { label: 'Ad Revenue', value: '$85K', desc: 'Monthly ad-supported revenue' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Revenue Model</h2>
        <p className="text-red-300">Event discovery monetization with ad-supported options</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-black/60 border-red-600">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm font-medium text-red-300 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-400">{metric.desc}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {revenueStreams.map((stream, index) => (
          <Card key={index} className="bg-black/80 border-red-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="text-red-400">{stream.icon}</div>
                {stream.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-1">{stream.price}</div>
                <Badge className="bg-green-600 text-white">{stream.conversion} conversion</Badge>
              </div>
              
              <ul className="space-y-2">
                {stream.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center pt-4 border-t border-gray-700">
                <div className="text-lg font-bold text-green-400">{stream.monthly}</div>
                <div className="text-xs text-gray-400">Monthly revenue potential</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RevenueModel;