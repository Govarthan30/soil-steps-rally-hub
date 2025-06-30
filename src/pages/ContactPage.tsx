
import { useState } from "react";
import { Mail, Instagram, Linkedin, MapPin, Users, Send, CheckCircle } from "lucide-react";
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
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.location || !formData.motivation) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to complete your registration.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Registration Successful! 🎉",
        description: "Thank you for joining the Soil Steps movement. We'll be in touch soon!",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["karkaiindrey@outlook.com", "karkaiindrey@gmail.com"],
      color: "soil-green"
    },
    {
      icon: Instagram,
      title: "Follow Us",
      details: ["@soil_steps"],
      link: "https://instagram.com/soil_steps",
      color: "soil-yellow"
    },
    {
      icon: Linkedin,
      title: "Connect",
      details: ["soil steps"],
      link: "https://linkedin.com/company/soil-steps",
      color: "soil-green"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-soil-green/10">
            <CheckCircle className="h-16 w-16 text-soil-green mx-auto mb-6 animate-pulse-glow" />
            <h1 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
              Welcome to the Movement! 🌱
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Thank you, <span className="font-semibold text-soil-green">{formData.name}</span>, 
              for joining Soil Steps as a student volunteer. Your passion for education will help us reach more children and create lasting impact.
            </p>
            <div className="bg-soil-green/5 rounded-lg p-6 mb-8">
              <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">What's Next?</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soil-green rounded-full mr-3"></div>
                  Our team will review your application within 2-3 days
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soil-green rounded-full mr-3"></div>
                  You'll receive a welcome package with volunteer guidelines
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soil-green rounded-full mr-3"></div>
                  We'll invite you to our next orientation session
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soil-green rounded-full mr-3"></div>
                  You'll be matched with workshops in your area
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/workshops'}
                className="bg-soil-green hover:bg-soil-green-dark"
              >
                Explore Workshops
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="border-soil-green text-soil-green hover:bg-soil-green hover:text-white"
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-soil-green/10 rounded-full mb-6">
              <Users className="h-8 w-8 text-soil-green animate-pulse-glow" />
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-gray-900 mb-6">
              Join the <span className="text-gradient">Rally</span>
            </h1>
            <div className="w-24 h-1 bg-soil-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be a Student Volunteer and become part of a movement that's transforming education across India. 
              Your passion can light up young minds and create lasting change.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl text-gray-900 flex items-center">
                  <Send className="h-6 w-6 text-soil-green mr-3" />
                  Student Volunteer Registration
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out this form to join our team of passionate student volunteers. 
                  Together, we'll bring quality education to every child.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-gray-700 font-medium">
                        Location (City, State) *
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g., Mumbai, Maharashtra"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="motivation" className="text-gray-700 font-medium">
                      Why do you want to volunteer? *
                    </Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      placeholder="Share your motivation for joining Soil Steps and how you'd like to contribute to our mission..."
                      className="mt-1 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-soil-green hover:bg-soil-green-dark text-white py-3 text-lg font-semibold"
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
                <Card key={index} className="shadow-lg border-0 card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${contact.color}/10 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <contact.icon className={`h-6 w-6 text-${contact.color}`} />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
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
                                  className={`text-${contact.color} hover:underline font-medium`}
                                >
                                  {detail}
                                </a>
                              ) : (
                                <span className="text-gray-700">{detail}</span>
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
            <Card className="shadow-lg border-0 bg-gradient-to-br from-soil-green/5 to-soil-green/10">
              <CardHeader>
                <CardTitle className="font-poppins text-xl text-gray-900 flex items-center">
                  <MapPin className="h-5 w-5 text-soil-green mr-2" />
                  Why Volunteer with Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-soil-green rounded-full mr-3 flex-shrink-0"></div>
                    Make a direct impact on children's education
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-soil-green rounded-full mr-3 flex-shrink-0"></div>
                    Develop leadership and teaching skills
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-soil-green rounded-full mr-3 flex-shrink-0"></div>
                    Connect with like-minded peers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-soil-green rounded-full mr-3 flex-shrink-0"></div>
                    Get certificates and recognition
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-soil-green rounded-full mr-3 flex-shrink-0"></div>
                    Be part of a nationwide movement
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-soil-yellow/5 to-soil-yellow/10">
              <CardHeader>
                <CardTitle className="font-poppins text-xl text-gray-900">
                  Join 50+ Student Volunteers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-soil-green">150+</div>
                    <div className="text-sm text-gray-600">Students Reached</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-soil-yellow">25+</div>
                    <div className="text-sm text-gray-600">Workshops</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-soil-green">10+</div>
                    <div className="text-sm text-gray-600">Cities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-soil-yellow">100%</div>
                    <div className="text-sm text-gray-600">Impact</div>
                  </div>
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
