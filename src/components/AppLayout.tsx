import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, Heart, Users, Settings, Bell, Map, TrendingUp, DollarSign, Shield, Cross } from 'lucide-react';
import StatusIndicator from './StatusIndicator';
import ProfileSetup from './ProfileSetup';
import NearbyUsers from './NearbyUsers';
import LoginScreen from './LoginScreen';
import ProfileLinking from './ProfileLinking';
import NotificationSettings from './NotificationSettings';
import SafetyFeatures from './SafetyFeatures';
import TermsAndConditions from './TermsAndConditions';
import MapView from './MapView';
import MarketingDashboard from './MarketingDashboard';
import MonetizationDashboard from './MonetizationDashboard';
import SubscriptionManager from './SubscriptionManager';
import EventDiscovery from './EventDiscovery';
import FindTab from './FindTab';
import InvestorDashboard from './InvestorDashboard';
import { useProximityNotifications } from '@/hooks/useProximityNotifications';

const AppLayout: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [profile, setProfile] = useState(null);
  const [nearbyUsers, setNearbyUsers] = useState([]);
  const [isConnected, setIsConnected] = useState(true);
  const [linkedProfiles, setLinkedProfiles] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [showMarketing, setShowMarketing] = useState(false);
  const [showMonetization, setShowMonetization] = useState(false);
  const [showInvestor, setShowInvestor] = useState(false);

  const mockUsers = [
    {
      id: '1',
      name: 'Angela',
      age: 42,
      interests: ['Gospel Music', 'Cooking', 'Travel', 'Church Activities'],
      distance: 85,
      lastSeen: Date.now() - 300000
    },
    {
      id: '2', 
      name: 'Marcus',
      age: 48,
      interests: ['Fitness', 'Bible Study', 'Art', 'Community Service'],
      distance: 120,
      lastSeen: Date.now() - 120000
    },
    {
      id: '3',
      name: 'Keisha',
      age: 44,
      interests: ['Jazz Music', 'Reading', 'Volunteering'],
      distance: 95,
      lastSeen: Date.now() - 180000
    }
  ];

  const { userLocation, vibrate } = useProximityNotifications({
    enabled: notificationsEnabled && isActive,
    locationEnabled,
    users: nearbyUsers
  });

  useEffect(() => {
    if (profile && isActive && locationEnabled) {
      const timer = setTimeout(() => {
        setNearbyUsers(mockUsers);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setNearbyUsers([]);
    }
  }, [profile, isActive, locationEnabled]);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleSubscribe = () => {
    setUser({ ...user, isPremium: true });
  };

  const toggleActive = () => {
    if (profile) {
      setIsActive(!isActive);
      if (!isActive) {
        vibrate();
      }
    }
  };

  const handleLocationToggle = (enabled: boolean) => {
    setLocationEnabled(enabled);
    if (!enabled) {
      setIsActive(false);
    }
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (showMarketing) {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <Button 
            onClick={() => setShowMarketing(false)}
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-lg font-semibold"
          >
            ← Back to App
          </Button>
        </div>
        <MarketingDashboard />
      </div>
    );
  }

  if (showMonetization) {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <Button 
            onClick={() => setShowMonetization(false)}
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-lg font-semibold"
          >
            ← Back to App
          </Button>
        </div>
        <MonetizationDashboard />
      </div>
    );
  }

  if (showInvestor) {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <Button 
            onClick={() => setShowInvestor(false)}
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-lg font-semibold"
          >
            ← Back to App
          </Button>
        </div>
        <InvestorDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center py-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Heart className="w-8 h-8 text-amber-400" />
            <h1 className="text-3xl font-bold text-white relative">
              Komby<span className="text-amber-400 relative">
                é
                <Cross className="w-3 h-3 absolute -top-1 -right-1 text-amber-300 opacity-40" />
              </span>
            </h1>
          </div>
          <p className="text-amber-200 text-sm italic mb-1">
            (Comb-BYE-YAY)
          </p>
          <p className="text-amber-300 text-lg italic font-medium">
            It's time to meet in person
          </p>
          <p className="text-amber-200 text-sm">
            For mature Black singles 40+
          </p>
        </div>
        <SubscriptionManager user={user} onSubscribe={handleSubscribe} />

        <StatusIndicator 
          isActive={isActive}
          nearbyCount={nearbyUsers.length}
          isConnected={isConnected}
        />

        <Tabs defaultValue="discover" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-red-800/40 backdrop-blur border-amber-400/50">
            <TabsTrigger value="discover" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-white text-sm font-medium">Find</TabsTrigger>
            <TabsTrigger value="meetups" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-white text-sm font-medium">Events</TabsTrigger>
            <TabsTrigger value="profile" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-white text-sm font-medium">Profile</TabsTrigger>
            <TabsTrigger value="link" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-white text-sm font-medium">Link</TabsTrigger>
            <TabsTrigger value="settings" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-white text-sm font-medium">Settings</TabsTrigger>
            <TabsTrigger value="revenue" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-white text-sm font-medium">Revenue</TabsTrigger>
          </TabsList>
          
          <TabsContent value="discover" className="space-y-4">
            {!profile ? (
              <Card className="bg-red-800/60 backdrop-blur border-amber-400/50">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-white mb-2">
                    Set up your profile first
                  </p>
                  <p className="text-base text-white/90">
                    Complete your profile to start finding mature Black singles nearby
                  </p>
                </CardContent>
              </Card>
            ) : (
              <FindTab />
            )}
          </TabsContent>

          <TabsContent value="meetups">
            <EventDiscovery isPremium={user?.isPremium || false} trialEnded={false} />
          </TabsContent>
          
          <TabsContent value="profile">
            <ProfileSetup 
              onComplete={setProfile} 
              isSetup={!!profile}
            />
          </TabsContent>
          
          <TabsContent value="link">
            <ProfileLinking 
              onComplete={setLinkedProfiles}
              existingLinks={linkedProfiles}
            />
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <SafetyFeatures 
              locationEnabled={locationEnabled}
              onLocationToggle={handleLocationToggle}
            />
            
            <NotificationSettings
              onNotificationToggle={setNotificationsEnabled}
              onLocationToggle={handleLocationToggle}
              notificationsEnabled={notificationsEnabled}
              locationEnabled={locationEnabled}
            />
            
            <TermsAndConditions />
          </TabsContent>
          
          <TabsContent value="revenue" className="space-y-4">
            <Card className="bg-red-800/60 backdrop-blur border-green-400/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-300 text-xl">
                  <DollarSign className="w-6 h-6" />
                  <span>Revenue Strategy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white text-base">
                  Elite Black professional dating platform targeting 40+ demographic with premium event partnerships
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <Button 
                    onClick={() => setShowInvestor(true)}
                    className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-base font-semibold"
                  >
                    💼 For Potential Investors
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      onClick={() => setShowMonetization(true)}
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base font-semibold"
                    >
                      Revenue Model
                    </Button>
                    <Button 
                      onClick={() => setShowMarketing(true)}
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base font-semibold"
                    >
                      Marketing Plan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AppLayout;