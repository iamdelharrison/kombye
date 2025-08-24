import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { DollarSign, TrendingUp, Users, Target, Crown, Zap, Heart, Calendar } from 'lucide-react';
import RevenueModel from './RevenueModel';

const MonetizationDashboard = () => {
  const quickMetrics = [
    { label: 'Monthly Revenue', value: '$320K', icon: <DollarSign className="w-5 h-5" />, change: '+23%' },
    { label: 'Paying Users', value: '15K', icon: <Users className="w-5 h-5" />, change: '+18%' },
    { label: 'ARPU', value: '$21.33', icon: <Target className="w-5 h-5" />, change: '+12%' },
    { label: 'Profit Margin', value: '71%', icon: <TrendingUp className="w-5 h-5" />, change: '+5%' }
  ];

  const pricingTiers = [
    {
      name: 'Free',
      price: 'Free',
      features: ['5 events per day', 'Basic event info', 'Watch ads for details'],
      users: '85K',
      conversion: 'Ad-supported model'
    },
    {
      name: 'Premium',
      price: '$14.99/mo',
      features: ['Unlimited events', 'Full event details', 'No ads', 'Priority notifications'],
      users: '12K',
      conversion: '12% from free'
    },
    {
      name: 'VIP',
      price: '$29.99/mo',
      features: ['All Premium features', 'Event promotion tools', 'Analytics dashboard', 'Early access'],
      users: '3K',
      conversion: '20% from premium'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="harlem-font text-4xl font-bold text-white mb-4">
            Komby<span className="relative">
              <span className="text-red-500">e</span>
              <span className="absolute -top-2 -right-1 text-xs text-red-400">🤫</span>
            </span> Revenue Hub
          </h1>
          <p className="text-green-300 text-lg italic">Sustainable Monetization Strategy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {quickMetrics.map((metric, index) => (
            <Card key={index} className="bg-black/80 border-green-600">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-green-400">{metric.icon}</div>
                  <Badge className="bg-green-600 text-white text-xs">{metric.change}</Badge>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-green-300">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 border-green-600 mb-6">
            <TabsTrigger value="revenue" className="text-white data-[state=active]:bg-green-600">Revenue Model</TabsTrigger>
            <TabsTrigger value="pricing" className="text-white data-[state=active]:bg-green-600">Pricing Tiers</TabsTrigger>
            <TabsTrigger value="features" className="text-white data-[state=active]:bg-green-600">Premium Features</TabsTrigger>
            <TabsTrigger value="projections" className="text-white data-[state=active]:bg-green-600">Projections</TabsTrigger>
          </TabsList>
          
          <TabsContent value="revenue">
            <RevenueModel />
          </TabsContent>
          
          <TabsContent value="pricing" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`${index === 1 ? 'border-green-400 bg-green-900/20' : 'bg-black/80 border-gray-600'}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-green-400">{tier.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center pt-4 border-t border-gray-700">
                      <div className="text-lg font-bold text-white">{tier.users} users</div>
                      <div className="text-xs text-gray-400">{tier.conversion}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/80 border-green-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Crown className="w-6 h-6 text-yellow-400" />
                    Premium Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Unlimited Events</span>
                    <Badge className="bg-green-600">$14.99/mo</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Full Event Details</span>
                    <Badge className="bg-green-600">Included</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Priority Notifications</span>
                    <Badge className="bg-green-600">Included</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">No Ads</span>
                    <Badge className="bg-green-600">Included</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/80 border-green-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Zap className="w-6 h-6 text-blue-400" />
                    Ad-Supported Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Event Location (Watch Ad)</span>
                    <Badge className="bg-blue-600">Free</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Attendee Count (Watch Ad)</span>
                    <Badge className="bg-blue-600">Free</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Contact Info (Watch Ad)</span>
                    <Badge className="bg-blue-600">Free</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Event Reminders (Watch Ad)</span>
                    <Badge className="bg-blue-600">Free</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="projections">
            <Card className="bg-black/80 border-green-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Calendar className="w-6 h-6 text-green-400" />
                  12-Month Revenue Projections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <Badge className="bg-green-600 text-white">Months 1-4</Badge>
                    <h3 className="text-white font-bold">Launch Phase</h3>
                    <div className="text-2xl font-bold text-green-400">$85K/mo</div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 25K active users</li>
                      <li>• 8% premium conversion</li>
                      <li>• $3.40 ARPU</li>
                    </ul>
                  </div>
                  <div className="text-center space-y-3">
                    <Badge className="bg-green-600 text-white">Months 5-8</Badge>
                    <h3 className="text-white font-bold">Growth Phase</h3>
                    <div className="text-2xl font-bold text-green-400">$180K/mo</div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 60K active users</li>
                      <li>• 12% premium conversion</li>
                      <li>• $3.00 ARPU</li>
                    </ul>
                  </div>
                  <div className="text-center space-y-3">
                    <Badge className="bg-green-600 text-white">Months 9-12</Badge>
                    <h3 className="text-white font-bold">Scale Phase</h3>
                    <div className="text-2xl font-bold text-green-400">$320K/mo</div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 100K active users</li>
                      <li>• 15% premium conversion</li>
                      <li>• $3.20 ARPU</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center pt-6 border-t border-gray-700">
                  <div className="text-4xl font-bold text-green-400 mb-2">$2.1M</div>
                  <div className="text-white font-semibold mb-2">Year 1 Total Revenue</div>
                  <div className="text-sm text-gray-400">Break-even at month 3, profitable by month 5</div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white mt-4 px-8 py-3">
                    Launch Revenue Strategy
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

export default MonetizationDashboard;