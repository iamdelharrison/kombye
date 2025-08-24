import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { FileText, Shield, AlertTriangle } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-black/80 border-red-600">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-red-400">
          <FileText className="w-5 h-5" />
          <span>Terms & Conditions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          className="w-full mb-4 border-red-600 text-red-400 hover:bg-red-900/20"
        >
          {isExpanded ? 'Hide' : 'Show'} Terms & Conditions
        </Button>
        
        {isExpanded && (
          <ScrollArea className="h-64 w-full border border-gray-700 rounded p-4">
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <h3 className="font-semibold text-red-400 flex items-center mb-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Dating Match Guarantee
                </h3>
                <p>
                  Kombye does NOT guarantee successful dating matches or romantic outcomes. 
                  Dating success depends on individual compatibility, communication, and personal choices.
                </p>
              </div>
              
              <Separator className="bg-gray-700" />
              
              <div>
                <h3 className="font-semibold text-green-400 flex items-center mb-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Location Accuracy Guarantee
                </h3>
                <p>
                  Kombye GUARANTEES the accuracy of registered singles and their real-time locations 
                  within our app. All user locations are verified and updated in real-time.
                </p>
              </div>
              
              <Separator className="bg-gray-700" />
              
              <div>
                <h3 className="font-semibold text-orange-400 flex items-center mb-2">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Liability Disclaimer
                </h3>
                <p className="mb-2">
                  Kombye, its employees, subsidiaries, and partnership entities will NOT be held liable for:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Personal safety incidents or outcomes</li>
                  <li>Dating results or relationship outcomes</li>
                  <li>User interactions or meetings</li>
                  <li>Third-party actions or behaviors</li>
                </ul>
              </div>
              
              <Separator className="bg-gray-700" />
              
              <div>
                <h3 className="font-semibold text-red-400 mb-2">User Responsibility</h3>
                <p>
                  Users are responsible for their own safety and decisions when meeting others. 
                  Always meet in public places and inform friends/family of your plans.
                </p>
              </div>
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};

export default TermsAndConditions;