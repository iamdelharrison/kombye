import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Search, MapPin, Calendar } from 'lucide-react';

const EventSources: React.FC = () => {
  const sources = [
    { name: 'The Gathering Spot', type: 'Private Club', status: 'Premium' },
    { name: 'Black Enterprise', type: 'Conference', status: 'Elite' },
    { name: '100 Black Men', type: 'Organization', status: 'Active' },
    { name: 'Black Caucus', type: 'Political Network', status: 'Elite' }
  ];

  const keywords = [
    'black professionals', 'elite black events', 'black executives', 'black entrepreneurs',
    'debutante balls', 'black galas', 'professional mixers', 'black tech conferences',
    'black medical association', 'black lawyers', 'black broadcasting', 'charity fundraisers',
    'alumni events', 'investment clubs', 'achievement awards', 'cultural foundations'
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-50 to-gold-50 border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-purple-800">
            <Crown className="w-6 h-6 text-gold-600" />
            <span>How We Find Elite Events</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-purple-700 mb-4">
            Kombye discovers exclusive events from premier Black professional organizations and elite social clubs where successful singles gather.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-purple-800 mb-2 flex items-center">
                <Crown className="w-4 h-4 mr-2" />
                Elite Sources
              </h4>
              <div className="space-y-2">
                {sources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-2 rounded border">
                    <span className="text-sm font-medium">{source.name}</span>
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
                <Search className="w-4 h-4 mr-2" />
                Target Keywords
              </h4>
              <div className="bg-white p-3 rounded border max-h-40 overflow-y-auto">
                <div className="flex flex-wrap gap-1">
                  {keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-gold-50 to-amber-50 border-2 border-gold-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-gold-800">
            <MapPin className="w-6 h-6" />
            <span>Premium Event Types</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              '👑 Debutante Balls',
              '🏛️ Black Caucus Galas',
              '💼 Executive Mixers',
              '🎭 Cultural Foundation Events',
              '🍾 Private Club Gatherings',
              '📺 Broadcasting Awards',
              '⚖️ Legal Society Events',
              '🏥 Medical Association Galas',
              '🎓 Alumni Association Events',
              '💰 Investment Club Meetings',
              '🏆 Achievement Awards',
              '🎪 Charity Fundraisers'
            ].map((eventType, index) => (
              <div key={index} className="bg-white p-3 rounded border text-center">
                <span className="text-sm font-medium text-gold-800">{eventType}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

export default EventSources;