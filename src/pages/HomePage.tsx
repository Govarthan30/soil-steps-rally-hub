
import { useState, useEffect } from "react";
import { BookOpen, Users, Rocket, ArrowRight, Star, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    { icon: BookOpen, text: "Equal Access to Learning", color: "text-soil-green" },
    { icon: Rocket, text: "Empowering the Next Generation", color: "text-soil-yellow" },
    { icon: Globe, text: "Creating Changemakers Through Education", color: "text-soil-green" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "150+", label: "Students Reached", icon: Users },
    { number: "25+", label: "Workshops Conducted", icon: Target },
    { number: "10+", label: "Cities Covered", icon: Globe },
    { number: "100%", label: "Success Rate", icon: Star },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
              Soil Steps presents
              <br />
              <span className="text-yellow-200">KARKAI INDREY</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-medium mb-4">
              A Rally of Education
            </div>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              A nationwide movement to bring education and inspiration to every child in India. 
              <br />
              <span className="font-semibold">Powered by Passion, Driven by Purpose.</span>
              <br />
              <span className="text-yellow-200">Learning for All, Dreams Without Limits.</span>
            </p>

            {/* Animated Taglines */}
            <div className="h-16 flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3 animate-fade-in" key={currentTagline}>
                {(() => {
                  const CurrentIcon = taglines[currentTagline].icon;
                  return <CurrentIcon className="h-8 w-8 text-yellow-200" />;
                })()}
                <span className="text-2xl font-medium text-yellow-200">
                  {taglines[currentTagline].text}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/workshops">
                <Button size="lg" className="bg-white text-soil-green hover:bg-gray-100 font-semibold px-8 py-3">
                  Explore Workshops
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-soil-green font-semibold px-8 py-3"
                >
                  Join as Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-soil-green" />
                </div>
                <div className="text-3xl font-bold text-gray-900 font-poppins">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Why Choose <span className="text-gradient">Soil Steps</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than just an educational program — we're creating a movement that transforms communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover animate-fade-in">
              <div className="w-12 h-12 bg-soil-green/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-soil-green" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Hands-on Learning</h3>
              <p className="text-gray-600">
                Interactive workshops that make complex concepts simple and engaging through practical experiments and activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-soil-yellow/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-soil-yellow" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Community Impact</h3>
              <p className="text-gray-600">
                Building a network of young leaders who carry forward the mission of education in their communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-soil-green/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-soil-green" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Future Ready</h3>
              <p className="text-gray-600">
                Preparing students for tomorrow's challenges with skills in science, technology, and innovative thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of something bigger. Help us reach every child, every dream, every possibility.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-soil-green hover:bg-soil-green-dark text-white px-8 py-3">
              Become a Volunteer Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
