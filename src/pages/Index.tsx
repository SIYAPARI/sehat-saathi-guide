import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AppTutorial from '@/components/AppTutorial';
import HealthNewsPopup from '@/components/HealthNewsPopup';
import {
  Heart,
  Activity,
  Lightbulb,
  Store,
  MessageCircle,
  Building,
  MapPin,
  HelpCircle,
  Shield,
  Users,
  Clock,
  ArrowRight,
  Stethoscope,
  Pill,
  Bot,
  Hospital,
  Shield as ShieldIcon,
  Droplets,
  AlertTriangle,
  HeartPulse,
} from 'lucide-react';

const Index: React.FC = () => {
  const { t, language } = useLanguage();
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const tutorialCompleted = localStorage.getItem('tutorialCompleted');
    if (!tutorialCompleted) {
      const timer = setTimeout(() => setShowTutorial(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const features = [
    {
      path: '/symptoms',
      label: t.symptomTracker,
      labelHi: 'लक्षण ट्रैकर',
      descHi: 'अपनी तकलीफ लिखें',
      descEn: 'Record your symptoms',
      color: 'bg-gradient-to-br from-rose-500 to-pink-600',
      iconComponent: Stethoscope,
    },
    {
      path: '/tips',
      label: t.healthTips,
      labelHi: 'स्वास्थ्य सुझाव',
      descHi: 'सरल स्वास्थ्य टिप्स',
      descEn: 'Simple health tips',
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      iconComponent: Lightbulb,
    },
    {
      path: '/store',
      label: t.medicineStore,
      labelHi: 'दवाई दुकान',
      descHi: 'सस्ती दवाइयां खरीदें',
      descEn: 'Buy affordable medicines',
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      iconComponent: Pill,
    },
    {
      path: '/assistant',
      label: t.aiAssistant,
      labelHi: 'AI सहायक',
      descHi: 'स्वास्थ्य मार्गदर्शन',
      descEn: 'Health guidance',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      iconComponent: Bot,
    },
    {
      path: '/schemes',
      label: t.sarkariYojana,
      labelHi: 'सरकारी योजना',
      descHi: 'मुफ्त स्वास्थ्य सेवाएं',
      descEn: 'Free health services',
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      iconComponent: ShieldIcon,
    },
    {
      path: '/nearby',
      label: t.nearbyHospitals,
      labelHi: 'नजदीकी अस्पताल',
      descHi: 'अस्पताल खोजें',
      descEn: 'Find hospitals',
      color: 'bg-gradient-to-br from-cyan-500 to-sky-600',
      iconComponent: Hospital,
    },
  ];

  const stats = [
    { icon: Users, value: '10K+', labelHi: 'उपयोगकर्ता', labelEn: 'Users' },
    { icon: Shield, value: '100%', labelHi: 'सुरक्षित', labelEn: 'Secure' },
    { icon: Clock, value: '24/7', labelHi: 'उपलब्ध', labelEn: 'Available' },
  ];

  return (
    <div className="min-h-screen font-sans">
      <AppTutorial isOpen={showTutorial} onClose={() => setShowTutorial(false)} />
      <HealthNewsPopup />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-chart-2 text-primary-foreground py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <HeartPulse className="absolute top-10 left-10 w-32 h-32" />
          <Hospital className="absolute top-20 right-20 w-24 h-24" />
          <Pill className="absolute bottom-10 left-1/4 w-28 h-28" />
          <Stethoscope className="absolute bottom-20 right-10 w-20 h-20" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center bg-primary-foreground/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
            <div className="w-24 h-24 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 animate-float" />
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {t.appName}
            </h1>

            <p className="text-lg md:text-xl opacity-90 max-w-md mx-auto mb-8">
              {language === 'hi'
                ? 'आपका स्वास्थ्य, हमारी प्राथमिकता'
                : 'Your health, our priority'}
            </p>

            <Button
              onClick={() => setShowTutorial(true)}
              variant="secondary"
              size="lg"
              className="gap-2 shadow-lg"
            >
              <HelpCircle className="w-5 h-5" />
              {language === 'hi'
                ? 'ऐप कैसे इस्तेमाल करें?'
                : 'How to use this app?'}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto mt-12">
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-primary-foreground/10 rounded-xl p-4">
                <stat.icon className="w-6 h-6 mx-auto mb-2" />
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="text-sm opacity-80">
                  {language === 'hi' ? stat.labelHi : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          {language === 'hi' ? '🌟 हमारी सेवाएं' : '🌟 Our Services'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <Link key={feature.path} to={feature.path}>
              <Card className="border-2 hover:shadow-xl transition-all hover:-translate-y-1 h-full overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${feature.color} p-6 text-center`}>
                    <feature.iconComponent className="w-12 h-12 mx-auto text-white" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium mb-1">{feature.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'hi' ? feature.descHi : feature.descEn}
                    </p>
                    <div className="mt-4 flex items-center justify-center text-primary gap-1">
                      {language === 'hi' ? 'खोलें' : 'Open'}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Emergency */}
      <section className="container mx-auto px-4 pb-12">
        <Card className="border-2 border-destructive bg-destructive/10">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <div>
                <h4 className="font-semibold text-destructive">
                  {language === 'hi' ? 'आपातकालीन नंबर' : 'Emergency Number'}
                </h4>
                <p className="font-mono text-xl">108 / 112</p>
              </div>
            </div>
            <Button
              variant="destructive"
              size="lg"
              onClick={() => window.open('tel:108')}
            >
              {language === 'hi' ? 'कॉल करें' : 'Call Now'}
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
