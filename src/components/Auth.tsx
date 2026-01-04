import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Heart, Mail, Lock, User, Phone, Loader2, Shield, Eye, EyeOff } from 'lucide-react';

const Auth: React.FC = () => {
  const { t, language } = useLanguage();
  const { login, register, verifyOtp, pendingVerification } = useAuth();
  const navigate = useNavigate();
  
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', phone: '', password: '' });
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(loginData.email, loginData.password);
    setLoading(false);
    if (success) {
      toast.success(language === 'hi' ? 'लॉगिन सफल!' : 'Login successful!');
      navigate('/');
    } else {
      toast.error(language === 'hi' ? 'गलत ईमेल या पासवर्ड' : 'Invalid email or password');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await register(registerData.name, registerData.email, registerData.phone, registerData.password);
    setLoading(false);
    toast.success(language === 'hi' ? 'OTP भेजा गया' : 'OTP sent');
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    const success = await verifyOtp(otp);
    setLoading(false);
    if (success) {
      toast.success(language === 'hi' ? 'रजिस्ट्रेशन सफल!' : 'Registration successful!');
      navigate('/');
    } else {
      toast.error(language === 'hi' ? 'गलत OTP' : 'Invalid OTP');
    }
  };

  const toggleLoginPasswordVisibility = () => {
    setShowLoginPassword(!showLoginPassword);
  };

  const toggleRegisterPasswordVisibility = () => {
    setShowRegisterPassword(!showRegisterPassword);
  };

  if (pendingVerification) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <Card className="w-full max-w-md shadow-xl border-0 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-500">
          <CardHeader className="text-center bg-gradient-to-br from-primary to-primary/90 text-primary-foreground pb-8 pt-10">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary-foreground/20 rounded-full backdrop-blur-sm">
                <Shield className="w-10 h-10 animate-pulse" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">{t.verifyOtp}</CardTitle>
            <CardDescription className="text-primary-foreground/90 mt-2 text-sm">
              {language === 'hi' ? 'आपके फोन पर OTP भेजा गया है' : 'OTP has been sent to your phone'}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 pb-8 px-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="otp" className="text-sm font-medium text-foreground">
                {language === 'hi' ? 'OTP कोड दर्ज करें' : 'Enter OTP Code'}
              </Label>
              <Input 
                id="otp"
                value={otp} 
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} 
                placeholder="● ● ● ● ● ●" 
                className="text-center text-3xl tracking-[0.5em] font-bold border-2 h-14 focus-visible:ring-2 focus-visible:ring-primary transition-all" 
                maxLength={6}
                autoFocus
              />
              <p className="text-xs text-muted-foreground text-center mt-2">
                {language === 'hi' ? '6 अंकों का कोड दर्ज करें' : 'Enter 6-digit code'}
              </p>
            </div>
            <Button 
              onClick={handleVerifyOtp} 
              className="w-full h-12 text-base font-medium shadow-md hover:shadow-lg transition-all" 
              disabled={loading || otp.length !== 6}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {language === 'hi' ? 'सत्यापित हो रहा है...' : 'Verifying...'}
                </>
              ) : (
                t.verifyOtp
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
      <Card className="w-full max-w-md shadow-xl border-0 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-500">
        <CardHeader className="text-center bg-gradient-to-br from-primary to-primary/90 text-primary-foreground pb-8 pt-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary-foreground/20 rounded-full backdrop-blur-sm animate-pulse">
              <Heart className="w-12 h-12" fill="currentColor" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">{t.appName}</CardTitle>
          <CardDescription className="text-primary-foreground/90 mt-2">
            {language === 'hi' ? 'अपने स्वास्थ्य का ख्याल रखें' : 'Take care of your health'}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8 pb-8 px-6">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-12 bg-muted p-1">
              <TabsTrigger 
                value="login" 
                className="text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
              >
                {t.login}
              </TabsTrigger>
              <TabsTrigger 
                value="register"
                className="text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
              >
                {t.register}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-0 animate-in fade-in-50 duration-300">
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-sm font-medium text-foreground">
                    {t.email}
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <Input 
                      id="login-email"
                      type="email" 
                      value={loginData.email} 
                      onChange={(e) => setLoginData(p => ({...p, email: e.target.value}))} 
                      className="pl-11 h-12 border-2 focus-visible:ring-2 focus-visible:ring-primary transition-all" 
                      placeholder={language === 'hi' ? 'आपका ईमेल' : 'your@email.com'}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-sm font-medium text-foreground">
                    {t.password}
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <Input 
                      id="login-password"
                      type={showLoginPassword ? "text" : "password"} 
                      value={loginData.password} 
                      onChange={(e) => setLoginData(p => ({...p, password: e.target.value}))} 
                      className="pl-11 pr-10 h-12 border-2 focus-visible:ring-2 focus-visible:ring-primary transition-all" 
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={toggleLoginPasswordVisibility}
                      aria-label={showLoginPassword ? 
                        (language === 'hi' ? 'पासवर्ड छिपाएं' : 'Hide password') : 
                        (language === 'hi' ? 'पासवर्ड दिखाएं' : 'Show password')}
                    >
                      {showLoginPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium shadow-md hover:shadow-lg transition-all mt-6" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {language === 'hi' ? 'लॉगिन हो रहा है...' : 'Logging in...'}
                    </>
                  ) : (
                    t.login
                  )}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register" className="space-y-0 animate-in fade-in-50 duration-300">
              <form onSubmit={handleRegister} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="register-name" className="text-sm font-medium text-foreground">
                    {t.name}
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <Input 
                      id="register-name"
                      value={registerData.name} 
                      onChange={(e) => setRegisterData(p => ({...p, name: e.target.value}))} 
                      className="pl-11 h-12 border-2 focus-visible:ring-2 focus-visible:ring-primary transition-all" 
                      placeholder={language === 'hi' ? 'आपका नाम' : 'Your full name'}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-sm font-medium text-foreground">
                    {t.email}
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <Input 
                      id="register-email"
                      type="email" 
                      value={registerData.email} 
                      onChange={(e) => setRegisterData(p => ({...p, email: e.target.value}))} 
                      className="pl-11 h-12 border-2 focus-visible:ring-2 focus-visible:ring-primary transition-all" 
                      placeholder={language === 'hi' ? 'आपका ईमेल' : 'your@email.com'}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-phone" className="text-sm font-medium text-foreground">
                    {t.phone}
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <Input 
                      id="register-phone"
                      type="tel" 
                      value={registerData.phone} 
                      onChange={(e) => setRegisterData(p => ({...p, phone: e.target.value}))} 
                      className="pl-11 h-12 border-2 focus-visible:ring-2 focus-visible:ring-primary transition-all" 
                      placeholder={language === 'hi' ? 'आपका फोन नंबर' : 'Your phone number'}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-sm font-medium text-foreground">
                    {t.password}
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <Input 
                      id="register-password"
                      type={showRegisterPassword ? "text" : "password"} 
                      value={registerData.password} 
                      onChange={(e) => setRegisterData(p => ({...p, password: e.target.value}))} 
                      className="pl-11 pr-10 h-12 border-2 focus-visible:ring-2 focus-visible:ring-primary transition-all" 
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={toggleRegisterPasswordVisibility}
                      aria-label={showRegisterPassword ? 
                        (language === 'hi' ? 'पासवर्ड छिपाएं' : 'Hide password') : 
                        (language === 'hi' ? 'पासवर्ड दिखाएं' : 'Show password')}
                    >
                      {showRegisterPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium shadow-md hover:shadow-lg transition-all mt-6" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {language === 'hi' ? 'रजिस्टर हो रहा है...' : 'Registering...'}
                    </>
                  ) : (
                    t.register
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;