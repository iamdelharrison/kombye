import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Users, MapPin, Smartphone, TrendingUp, Zap, Video } from 'lucide-react';

const MarketingStrategy = () => {
  const strategies = [
    {
      title: "Viral Social Media (2025 Strategy)",
      icon: <TrendingUp className="w-6 h-6" />,
      tactics: [
        "TikTok micro-challenges: #EventNearMe viral content",
        "Instagram Reels showcasing hidden local gems",
        "BeReal integration for authentic event moments",
        "User-generated content campaigns with rewards"
      ],
      priority: "Critical",
      cost: "$25K-45K/month",
      roi: "8.5x"
    },
    {
      title: "AI-Powered Micro-Targeting",
      icon: <Smartphone className="w-6 h-6" />,
      tactics: [
        "Hyper-local geo-fencing around event venues",
        "Behavioral targeting based on event attendance patterns",
        "Lookalike audiences from high-engagement users",
        "Dynamic creative optimization for ad performance"
      ],
      priority: "Critical",
      cost: "$18K-35K/month",
      roi: "6.2x"
    },
    {
      title: "Community-First Growth",
      icon: <Users className="w-6 h-6" />,
      tactics: [
        "Partner with local event organizers (revenue share)",
        "Sponsor community festivals and cultural events",
        "Create exclusive 'Event Ambassador' program",
        "Collaborate with neighborhood Facebook groups"
      ],
      priority: "High",
      cost: "$12K-25K/month",
      roi: "4.8x"
    },
    {
      title: "Content Creator Economy",
      icon: <Heart className="w-6 h-6" />,
      tactics: [
        "Pay creators $500-2K for event discovery content",
        "Launch 'Event Influencer' certification program",
        "Exclusive creator tools for event promotion",
        "Revenue sharing with top performing creators"
      ],
      priority: "High",
      cost: "$15K-30K/month",
      roi: "5.5x"
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">2025 Viral Marketing Strategy</h1>
        <p className="text-gray-300 text-lg">Event Discovery App Growth Blueprint</p>
        <div className="mt-4 flex justify-center gap-4">
          <Badge className="bg-green-600 text-white px-4 py-2">$240K Monthly Revenue Target</Badge>
          <Badge className="bg-blue-600 text-white px-4 py-2">75K Active Users Goal</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {strategies.map((strategy, index) => (
          <Card key={index} className="bg-gray-900 border-red-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                {strategy.icon}
                {strategy.title}
                <Badge variant={strategy.priority === 'Critical' ? 'destructive' : 'secondary'}>
                  {strategy.priority}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-red-400 font-semibold">{strategy.cost}</p>
                  <Badge className="bg-green-600 text-white">{strategy.roi} ROI</Badge>
                </div>
                <ul className="space-y-2">
                  {strategy.tactics.map((tactic, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      {tactic}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gray-900 border-red-600">
        <CardHeader>
          <CardTitle className="text-white">2025 Launch Budget & Timeline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="text-red-400 font-bold text-lg">Phase 1 (Months 1-2)</h3>
              <p className="text-gray-300">Viral Foundation</p>
              <p className="text-white font-bold">$70K-140K</p>
              <p className="text-green-400 text-sm">Expected: 15K users</p>
            </div>
            <div className="text-center">
              <h3 className="text-red-400 font-bold text-lg">Phase 2 (Months 3-4)</h3>
              <p className="text-gray-300">Scale & Optimize</p>
              <p className="text-white font-bold">$85K-170K</p>
              <p className="text-green-400 text-sm">Expected: 45K users</p>
            </div>
            <div className="text-center">
              <h3 className="text-red-400 font-bold text-lg">Phase 3 (Months 5-6)</h3>
              <p className="text-gray-300">Market Domination</p>
              <p className="text-white font-bold">$100K-200K</p>
              <p className="text-green-400 text-sm">Expected: 75K+ users</p>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-gray-700">
            <div className="mb-4">
              <p className="text-white text-lg">Total 6-Month Investment: <span className="text-green-400 font-bold">$255K-510K</span></p>
              <p className="text-gray-300">Break-even at month 4 with $240K monthly revenue</p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Launch Viral Campaign
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketingStrategy;