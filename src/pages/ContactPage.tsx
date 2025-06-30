
import { useState, useEffect } from "react";
import { Mail, Instagram, Linkedin, MapPin, Users, Send, CheckCircle, Sparkles, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    motivation: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [showMotivationBoost, setShowMotivationBoost] = useState(false);
  const { toast } = useToast();

  // Interactive counter for engagement
  useEffect(() => {
    const timer = setInterval(() => {
      setInteractionCount(prev => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Show motivation boost when user starts typing motivation
    if (name === 'motivation' && value.length > 10) {
      setShowMotivationBoost(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.location || !formData.motivation) {
      toast({
        title: "Mission Incomplete! 🎯",
        description: "Every field is a step towards our vision. Please complete all fields.",
        variant: "destructive"
      });
      return;
    }

    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Welcome to the Rally! 🚀",
        description: "Your journey towards transforming education begins now!",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Mission Control",
      details: ["karkaiindrey@outlook.com", "karkaiindrey@gmail.com"],
      color: "primary",
      animation: "mission-float"
    },
    {
      icon: Instagram,
      title: "Visual Journey",
      details: ["@soil_steps"],
      link: "https://instagram.com/soil_steps",
      color: "secondary",
      animation: "vision-glow"
    },
    {
      icon: Linkedin,
      title: "Professional Network",
      details: ["soil steps"],
      link: "https://linkedin.com/company/soil-steps",
      color: "primary",
      animation: "education-wave"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center dark:from-primary/20 dark:to-secondary/20">
        <div className="max-w-2xl mx-auto px-4 text-center animate-fade-in">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-primary/20 vision-glow">
            <div className="relative">
              <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6 rally-pulse" />
              <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-secondary animate-spin" />
            </div>
            <h1 className="font-poppins font-bold text-4xl text-foreground mb-4 text-gradient">
              Welcome to the Movement! 🌱
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you, <span className="font-semibold text-primary mission-float inline-block">{formData.name}</span>, 
              for joining Soil Steps as a student volunteer. Your passion for education will help us reach more children and create lasting impact.
            </p>
            
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 mb-8 dark:from-primary/10 dark:to-secondary/10">
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-4 flex items-center justify-center">
                <Target className="h-6 w-6 mr-2 text-primary" />
                Your Mission Journey
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 education-wave">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Application review within 2-3 days</span>
                </div>
                <div className="flex items-center space-x-3 mission-float">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Welcome package with guidelines</span>
                </div>
                <div className="flex items-center space-x-3 vision-glow">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Orientation session invitation</span>
                </div>
                <div className="flex items-center space-x-3 education-wave">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Workshop matching in your area</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/workshops'}
                className="bg-primary hover:bg-primary/90 rally-pulse"
              >
                <Rocket className="mr-2 h-4 w-4" />
                Explore Workshops
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mission-float"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10 dark:from-primary/10 dark:to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 mission-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 vision-glow">
              <Users className="h-10 w-10 text-primary rally-pulse" />
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-foreground mb-6">
              Join the <span className="text-gradient mission-float inline-block">Rally</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 education-wave"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Be a Student Volunteer and become part of a movement that's transforming education across India. 
              Your passion can light up young minds and create lasting change.
            </p>
            
            {/* Interactive counter */}
            <div className="mt-8 inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/20">
              <Sparkles className="h-4 w-4 text-secondary animate-spin" />
              <span className="text-sm font-medium text-muted-foreground">
                {interactionCount * 3}+ students inspired while you're here!
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm border border-primary/10">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
                <CardTitle className="font-poppins text-2xl text-foreground flex items-center">
                  <Send className="h-6 w-6 text-primary mr-3 mission-float" />
                  Student Volunteer Registration
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Fill out this form to join our team of passionate student volunteers. 
                  Together, we'll bring quality education to every child.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <Label htmlFor="name" className="text-foreground font-medium flex items-center">
                        Full Name *
                        <Sparkles className="h-3 w-3 ml-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="mt-1 border-primary/20 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="email" className="text-foreground font-medium flex items-center">
                        Email Address *
                        <Sparkles className="h-3 w-3 ml-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="mt-1 border-primary/20 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <Label htmlFor="phone" className="text-foreground font-medium flex items-center">
                        Phone Number *
                        <Sparkles className="h-3 w-3 ml-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="mt-1 border-primary/20 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="location" className="text-foreground font-medium flex items-center">
                        Location (City, State) *
                        <Sparkles className="h-3 w-3 ml-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g., Mumbai, Maharashtra"
                        className="mt-1 border-primary/20 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <Label htmlFor="motivation" className="text-foreground font-medium flex items-center">
                      Why do you want to volunteer? *
                      <Sparkles className="h-3 w-3 ml-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      placeholder="Share your motivation for joining Soil Steps and how you'd like to contribute to our mission..."
                      className="mt-1 min-h-[120px] border-primary/20 focus:border-primary transition-colors"
                      required
                    />
                    {showMotivationBoost && (
                      <div className="mt-2 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-l-4 border-primary animate-fade-in">
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Target className="h-4 w-4 mr-2 text-primary" />
                          Your passion is the first step towards creating change! 🌟
                        </p>
                      </div>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground py-3 text-lg font-semibold rally-pulse"
                  >
                    Join the Movement
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className={`shadow-lg border-0 card-hover bg-card/80 backdrop-blur-sm border border-primary/10 ${contact.animation}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${contact.color}/10 rounded-full flex items-center justify-center flex-shrink-0 vision-glow`}>
                        <contact.icon className={`h-6 w-6 text-${contact.color}`} />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                          {contact.title}
                        </h3>
                        <div className="space-y-1">
                          {contact.details.map((detail, idx) => (
                            <div key={idx}>
                              {contact.link ? (
                                <a
                                  href={contact.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`text-${contact.color} hover:underline font-medium transition-colors hover:text-${contact.color}/80`}
                                >
                                  {detail}
                                </a>
                              ) : (
                                <span className="text-muted-foreground">{detail}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Volunteer */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-primary/10 vision-glow">
              <CardHeader>
                <CardTitle className="font-poppins text-xl text-foreground flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2 mission-float" />
                  Why Volunteer with Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Make a direct impact on children's education",
                    "Develop leadership and teaching skills",
                    "Connect with like-minded peers",
                    "Get certificates and recognition",
                    "Be part of a nationwide movement"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground group">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 group-hover:animate-pulse"></div>
                      <span className="group-hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-secondary/5 to-primary/5 backdrop-blur-sm border border-secondary/10 education-wave">
              <CardHeader>
                <CardTitle className="font-poppins text-xl text-foreground flex items-center">
                  <Sparkles className="h-5 w-5 text-secondary mr-2 animate-spin" />
                  Join 50+ Student Volunteers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[
                    { value: "150+", label: "Students Reached", color: "primary" },
                    { value: "25+", label: "Workshops", color: "secondary" },
                    { value: "10+", label: "Cities", color: "primary" },
                    { value: "100%", label: "Impact", color: "secondary" }
                  ].map((stat, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className={`text-2xl font-bold text-${stat.color} group-hover:scale-110 transition-transform`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
