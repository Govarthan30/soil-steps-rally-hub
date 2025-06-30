
import { Target, Users, BookOpen, Bridge, Zap } from "lucide-react";

const MissionPage = () => {
  const missions = [
    {
      icon: Users,
      title: "Reach Every Child",
      description: "Breaking geographical and socio-economic barriers to ensure quality education reaches every corner of India, especially in underserved communities.",
      points: [
        "Rural and urban outreach programs",
        "Mobile learning units",
        "Community partnerships",
        "Inclusive education initiatives"
      ],
      color: "soil-green"
    },
    {
      icon: BookOpen,
      title: "Empower Through Learning",
      description: "Providing hands-on, practical education that builds confidence, critical thinking, and problem-solving skills in young minds.",
      points: [
        "Interactive workshops and experiments",
        "STEM education focus",
        "Skill development programs",
        "Mentorship opportunities"
      ],
      color: "soil-yellow"
    },
    {
      icon: Target,
      title: "Build a Movement",
      description: "Creating a self-sustaining network of student volunteers who become ambassadors of education in their communities.",
      points: [
        "Student volunteer training",
        "Leadership development",
        "Community engagement",
        "Peer-to-peer learning networks"
      ],
      color: "soil-green"
    },
    {
      icon: Bridge,
      title: "Bridge the Gap",
      description: "Connecting theoretical knowledge with practical applications, making learning relevant and immediately applicable to real-world challenges.",
      points: [
        "Theory to practice workshops",
        "Real-world problem solving",
        "Industry connections",
        "Career guidance and counseling"
      ],
      color: "soil-yellow"
    },
    {
      icon: Zap,
      title: "Ignite the Future",
      description: "Inspiring the next generation to become innovators, entrepreneurs, and change-makers who will shape tomorrow's world.",
      points: [
        "Innovation challenges",
        "Entrepreneurship workshops",
        "Future skills training",
        "Creative thinking development"
      ],
      color: "soil-green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-soil-yellow/10 rounded-full mb-6">
              <Target className="h-8 w-8 text-soil-yellow animate-pulse-glow" />
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-gray-900 mb-6">
              Our <span className="text-gradient">Mission</span>
            </h1>
            <div className="w-24 h-1 bg-soil-yellow mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Five core missions that drive our commitment to transforming education 
              and empowering the next generation of leaders, innovators, and changemakers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {missions.map((mission, index) => (
              <div
                key={index}
                className={`animate-fade-in ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex items-center gap-12`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="max-w-2xl">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-${mission.color}/10 rounded-full flex items-center justify-center mr-4`}>
                        <mission.icon className={`h-6 w-6 text-${mission.color}`} />
                      </div>
                      <h2 className="font-poppins font-bold text-3xl text-gray-900">
                        {mission.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {mission.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {mission.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-${mission.color} rounded-full flex-shrink-0`}></div>
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <div className={`w-64 h-64 bg-gradient-to-br from-${mission.color}/10 to-${mission.color}/20 rounded-2xl flex items-center justify-center card-hover`}>
                    <mission.icon className={`h-24 w-24 text-${mission.color} animate-float`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Mission in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our missions translate into real-world impact across communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-soil-green/5 to-soil-green/10 p-8 rounded-2xl text-center animate-fade-in">
              <div className="text-4xl font-bold text-soil-green mb-2">150+</div>
              <div className="text-gray-700 font-medium">Students Reached</div>
              <div className="text-sm text-gray-600 mt-2">Across 10+ cities in India</div>
            </div>

            <div className="bg-gradient-to-br from-soil-yellow/5 to-soil-yellow/10 p-8 rounded-2xl text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-soil-yellow mb-2">25+</div>
              <div className="text-gray-700 font-medium">Workshops Conducted</div>
              <div className="text-sm text-gray-600 mt-2">In science, farming & space</div>
            </div>

            <div className="bg-gradient-to-br from-soil-green/5 to-soil-green/10 p-8 rounded-2xl text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-soil-green mb-2">50+</div>
              <div className="text-gray-700 font-medium">Student Volunteers</div>
              <div className="text-sm text-gray-600 mt-2">Leading community initiatives</div>
            </div>

            <div className="bg-gradient-to-br from-soil-yellow/5 to-soil-yellow/10 p-8 rounded-2xl text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-soil-yellow mb-2">100%</div>
              <div className="text-gray-700 font-medium">Positive Feedback</div>
              <div className="text-sm text-gray-600 mt-2">From students and parents</div>
            </div>

            <div className="bg-gradient-to-br from-soil-green/5 to-soil-green/10 p-8 rounded-2xl text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl font-bold text-soil-green mb-2">15+</div>
              <div className="text-gray-700 font-medium">Innovation Projects</div>
              <div className="text-sm text-gray-600 mt-2">Student-led initiatives</div>
            </div>

            <div className="bg-gradient-to-br from-soil-yellow/5 to-soil-yellow/10 p-8 rounded-2xl text-center animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="text-4xl font-bold text-soil-yellow mb-2">3</div>
              <div className="text-gray-700 font-medium">Core Themes</div>
              <div className="text-sm text-gray-600 mt-2">Art, Farming & Space</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every mission needs passionate individuals who believe in the power of education. 
            Be part of this transformative journey and help us reach every child, every dream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-soil-green font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Become a Volunteer
            </a>
            <a
              href="/workshops"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-soil-green transition-colors"
            >
              Explore Workshops
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
