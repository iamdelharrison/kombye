import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Building, Users, Calendar } from 'lucide-react';

const EliteEventSources: React.FC = () => {
  const eliteSources = [
    { name: 'The Gathering Spot', location: 'LA/ATL/DC', type: 'Private Club', status: 'Premium' },
    { name: '100 Black Men', location: 'National', type: 'Organization', status: 'Active' },
    { name: 'Black Enterprise', location: 'National', type: 'Conference', status: 'Premium' },
    { name: 'Brothers Crusade', location: 'Regional', type: 'Network', status: 'Active' },
    { name: 'Black Caucus Events', location: 'DC/National', type: 'Political', status: 'Elite' },
    { name: 'Black Broadcasting Assn', location: 'National', type: 'Media', status: 'Professional' }
  ];

  const eventTypes = [
    '👑 Debutante Balls',
    '🏛️ Black Caucus Galas',
    '💼 Black Enterprise Summit',
    '🎭 Cultural Foundation Events',
    '🍾 Private Club Mixers',
    '📺 Broadcasting Awards',
    '⚖️ Legal Society Events',
    '🏥 Medical Association Galas',
    '🎓 Alumni Association Events',
    '💰 Investment Club Meetings',
    '🏆 Achievement Awards',
    '🎪 Charity Fundraisers'
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-50 to-gold-50 border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-purple-800">
            <Crown className="w-6 h-6 text-gold-600" />
            <span>Elite Black Professional Networks</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-purple-700 mb-4">
            Kombye connects you with exclusive events from premier Black professional organizations and elite social clubs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-purple-800 mb-2 flex items-center">
                <Building className="w-4 h-4 mr-2" />
                Elite Organizations
              </h4>
              <div className="space-y-2">
                {eliteSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-2 rounded border">
                    <div>
                      <span className="text-sm font-medium">{source.name}</span>
                      <div className="text-xs text-gray-500">{source.location}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">{source.type}</Badge>
                      <Badge className="bg-gold-100 text-gold-800 text-xs">{source.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-purple-800 mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Target Demographics
              </h4>
              <div className="bg-white p-3 rounded border space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Income Level:</span> $75K+ annually
                </div>
                <div className="text-sm">
                  <span className="font-medium">Education:</span> College+ degree
                </div>
                <div className="text-sm">
                  <span className="font-medium">Age Range:</span> 28-55 years
                </div>
                <div className="text-sm">
                  <span className="font-medium">Professions:</span> Executives, Lawyers, Doctors, Entrepreneurs
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-gold-50 to-amber-50 border-2 border-gold-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-gold-800">
            <Calendar className="w-6 h-6" />
            <span>Premium Event Categories</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {eventTypes.map((eventType, index) => (
              <div key={index} className="bg-white p-3 rounded border text-center shadow-sm">
                <span className="text-sm font-medium text-gold-800">{eventType}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EliteEventSources;