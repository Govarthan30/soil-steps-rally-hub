
import { Palette, Sprout, Rocket, Users, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const WorkshopsPage = () => {
  const workshops = [
    {
      id: 1,
      title: "Art & Craft with Science",
      icon: Palette,
      description: "Blend creativity with scientific principles through hands-on art projects that teach physics, chemistry, and biology concepts.",
      highlights: [
        "Color chemistry experiments",
        "Physics of light and shadow",
        "Botanical art and plant science",
        "Geometric patterns in nature"
      ],
      activities: [
        "Natural dye extraction",
        "Crystallization art",
        "pH indicator paintings",
        "Solar system models"
      ],
      duration: "3 hours",
      participants: "15-25 students",
      ageGroup: "8-16 years",
      color: "soil-green",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      id: 2,
      title: "Smart Farming & Green Science",
      icon: Sprout,
      description: "Explore sustainable agriculture, environmental science, and green technology through practical farming experiments.",
      highlights: [
        "Soil science and testing",
        "Hydroponic farming systems",
        "Composting and waste management",
        "Weather monitoring and prediction"
      ],
      activities: [
        "Seed germination experiments",
        "Building mini greenhouses",
        "Water purification methods",
        "Creating organic fertilizers"
      ],
      duration: "4 hours",
      participants: "12-20 students",
      ageGroup: "10-18 years",
      color: "soil-yellow",
      bgGradient: "from-yellow-50 to-amber-50"
    },
    {
      id: 3,
      title: "Space & Beyond",
      icon: Rocket,
      description: "Journey through space science, astronomy, and aerospace engineering with interactive demonstrations and rocket building.",
      highlights: [
        "Solar system exploration",
        "Rocket science fundamentals",
        "Satellite technology",
        "Space missions and history"
      ],
      activities: [
        "Building and launching water rockets",
        "Creating constellation maps",
        "Simulating Mars missions",
        "Telescope observations"
      ],
      duration: "5 hours",
      participants: "10-18 students",
      ageGroup: "12-18 years",
      color: "soil-green",
      bgGradient: "from-blue-50 to-indigo-50"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Expert-Led Sessions",
      description: "Learn from experienced educators and industry professionals"
    },
    {
      icon: Clock,
      title: "Hands-On Learning",
      description: "Interactive experiments and practical demonstrations"
    },
    {
      icon: MapPin,
      title: "Open to All",
      description: "Free workshops accessible to students from all backgrounds"
    },
    {
      icon: Star,
      title: "Certificate of Participation",
      description: "Recognition for active participation and learning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-soil-green/10 rounded-full mb-6">
              <Rocket className="h-8 w-8 text-soil-green animate-pulse-glow" />
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-gray-900 mb-6">
              Learning <span className="text-gradient">Workshops</span>
            </h1>
            <div className="w-24 h-1 bg-soil-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immersive, hands-on workshops designed to spark curiosity, build practical skills, 
              and inspire the next generation of innovators through three exciting themes.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card 
                key={workshop.id} 
                className={`card-hover animate-fade-in bg-gradient-to-br ${workshop.bgGradient} border-0 shadow-lg`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${workshop.color}/10 rounded-full mb-4 mx-auto`}>
                    <workshop.icon className={`h-8 w-8 text-${workshop.color} animate-float`} />
                  </div>
                  <CardTitle className="font-poppins text-2xl text-gray-900">
                    {workshop.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 text-base">
                    {workshop.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {workshop.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className={`w-2 h-2 bg-${workshop.color} rounded-full mr-3 flex-shrink-0`}></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sample Activities */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Sample Activities:</h4>
                    <ul className="space-y-2">
                      {workshop.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <Star className="w-3 h-3 text-soil-yellow mr-3 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Workshop Details */}
                  <div className="grid grid-cols-1 gap-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-900">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Participants:</span>
                      <span className="font-medium text-gray-900">{workshop.participants}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Age Group:</span>
                      <span className="font-medium text-gray-900">{workshop.ageGroup}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full bg-${workshop.color} hover:bg-${workshop.color}-dark text-white`}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Register Interest
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Why Choose Our Workshops?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every workshop is designed to be engaging, educational, and accessible to all students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-soil-green/10 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-soil-green" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Learn and Explore?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us for an unforgettable learning experience. Register your interest and be the first to know 
            when we're coming to your city!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-soil-green hover:bg-gray-100 px-8 py-3"
              onClick={() => window.location.href = '/contact'}
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-soil-green px-8 py-3"
              onClick={() => window.location.href = '/contact'}
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;
