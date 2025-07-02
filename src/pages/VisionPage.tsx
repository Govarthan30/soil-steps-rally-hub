
import { Lightbulb, Users, Globe, ArrowRight, BookOpen } from "lucide-react";
const backgroundGradient = "bg-gradient-to-br from-green-900 via-emerald-900 to-green-800";
const VisionPage = () => {
  return (
    <div className={`min-h-screen ${backgroundGradient} relative overflow-hidden`}>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-soil-green/10 rounded-full mb-6">
              <Lightbulb className="h-8 w-8 text-soil-green animate-pulse-glow" />
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-gray-900 mb-6">
              Our <span className="text-gradient">Vision</span>
            </h1>
            <div className="w-24 h-1 bg-soil-green mx-auto mb-8"></div>
          </div>

          {/* Main Vision Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in border border-soil-green/10">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-relaxed text-center">
                "We envision a future where education becomes a{" "}
                <span className="text-soil-green font-semibold">contagious force</span> — where every learner becomes a{" "}
                <span className="text-soil-yellow font-semibold">teacher</span>, every question sparks{" "}
                <span className="text-soil-green font-semibold">innovation</span>, and every child leads with{" "}
                <span className="text-soil-yellow font-semibold">knowledge</span>."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Built on Strong Foundations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our vision is supported by three fundamental pillars that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pillar 1: Contagious Learning */}
            <div className="group">
              <div className="bg-gradient-to-br from-soil-green/5 to-soil-green/10 p-8 rounded-2xl h-full card-hover animate-fade-in">
                <div className="flex items-center justify-center w-16 h-16 bg-soil-green/20 rounded-full mb-6 group-hover:animate-float">
                  <BookOpen className="h-8 w-8 text-soil-green" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-4">
                  Contagious Learning
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We believe learning should spread like wildfire. When one child discovers the joy of knowledge, 
                  they naturally want to share it with others, creating a ripple effect throughout their community.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-soil-green">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Peer-to-peer teaching</span>
                  </div>
                  <div className="flex items-center text-soil-green">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Community engagement</span>
                  </div>
                  <div className="flex items-center text-soil-green">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Knowledge sharing culture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Innovation Catalyst */}
            <div className="group">
              <div className="bg-gradient-to-br from-soil-yellow/5 to-soil-yellow/10 p-8 rounded-2xl h-full card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center w-16 h-16 bg-soil-yellow/20 rounded-full mb-6 group-hover:animate-float">
                  <Lightbulb className="h-8 w-8 text-soil-yellow" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-4">
                  Innovation Catalyst
                </h3>
                <p className="text-yellow-700 mb-6 leading-relaxed">
                  Every question is a seed of innovation. We nurture curiosity and encourage students to think beyond 
                  conventional boundaries, fostering the next generation of problem-solvers and inventors.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-soil-yellow">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Critical thinking skills</span>
                  </div>
                  <div className="flex items-center text-soil-yellow">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Creative problem solving</span>
                  </div>
                  <div className="flex items-center text-soil-yellow">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Future-ready mindset</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Knowledge Leadership */}
            <div className="group">
              <div className="bg-gradient-to-br from-soil-green/5 to-soil-green/10 p-8 rounded-2xl h-full card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center w-16 h-16 bg-soil-green/20 rounded-full mb-6 group-hover:animate-float">
                  <Users className="h-8 w-8 text-soil-green" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-4">
                  Knowledge Leadership
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We empower children to become leaders in their communities, using knowledge as their foundation 
                  to create positive change and inspire others to pursue lifelong learning.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-soil-green">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Leadership development</span>
                  </div>
                  <div className="flex items-center text-soil-green">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Community impact</span>
                  </div>
                  <div className="flex items-center text-soil-green">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Sustainable change</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Vision */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              The Future We're Building
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#0a1d2c] py-20 px-6 md:px-12 text-white rounded-t-[3rem]">
  <div className="animate-fade-in">
    <div className="space-y-6">
      {/* Item 1 */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#2e5339] rounded-full flex items-center justify-center">
          <Globe className="h-6 w-6 text-[#9bcf78]" />
        </div>
        <div>
          <h3 className="font-poppins font-semibold text-xl text-white mb-2">
            Global Impact, Local Roots
          </h3>
          <p className="text-gray-300">
            Starting from Indian communities and expanding globally, creating a network of educated, 
            empowered young leaders who understand both their local heritage and global opportunities.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#3a3219] rounded-full flex items-center justify-center">
          <Users className="h-6 w-6 text-[#decf78]" />
        </div>
        <div>
          <h3 className="font-poppins font-semibold text-xl text-white mb-2">
            Self-Sustaining Communities
          </h3>
          <p className="text-gray-300">
            Communities where education flows naturally from person to person, where knowledge is shared freely, 
            and where every individual contributes to collective growth and prosperity.
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#2e5339] rounded-full flex items-center justify-center">
          <Lightbulb className="h-6 w-6 text-[#9bcf78]" />
        </div>
        <div>
          <h3 className="font-poppins font-semibold text-xl text-white mb-2">
            Innovation Ecosystem
          </h3>
          <p className="text-gray-300">
            A thriving ecosystem where curiosity drives discovery, where students become researchers, 
            and where local innovations address global challenges.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right side - Vision card */}
  <div className="animate-slide-in-right">
    <div className="bg-[#13283c] rounded-2xl shadow-xl p-8 border border-[#2a4b68]">
      <h3 className="font-poppins font-bold text-2xl text-white mb-6 text-center">
        By 2030, We Envision:
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-[#1b3c2e] rounded-lg">
          <span className="font-medium text-gray-200">Students Impacted</span>
          <span className="font-bold text-[#9bcf78] text-xl">10,000+</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-[#3f3a21] rounded-lg">
          <span className="font-medium text-gray-200">Communities Reached</span>
          <span className="font-bold text-[#decf78] text-xl">100+</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-[#1b3c2e] rounded-lg">
          <span className="font-medium text-gray-200">Student Teachers</span>
          <span className="font-bold text-[#9bcf78] text-xl">1,000+</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-[#3f3a21] rounded-lg">
          <span className="font-medium text-gray-200">Innovation Projects</span>
          <span className="font-bold text-[#decf78] text-xl">500+</span>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
