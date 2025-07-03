import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LinkedInFeed } from "@/components/LinkedInFeed";
import { 
  Star, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Quote,
  ArrowRight,
  Calendar,
  Award,
  Globe,
  MessageCircle
} from "lucide-react";

export function HomePage() {
  const handleGetStarted = () => {
    window.open('https://calendly.com/zclarity/alignment?month=2025-06', '_blank');
  };

  const handleLearnMore = () => {
    const linkedinSection = document.getElementById('linkedin-feed-section');
    if (linkedinSection) {
      linkedinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutLearnMore = () => {
    window.open('https://calendly.com/zclarity/alignment?month=2025-06', '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://calendly.com/zclarity/alignment?month=2025-06', '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-4 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
        <div className="w-full px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
            <Award className="w-4 h-4 mr-2" />
            Evolution
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Do you crave{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              clarity
            </span>{' '}
            in your life?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Z Clarity Solutions helps individuals unlock their full potential through 
            guided insight, proven strategies, custom systems and breakthrough coaching that creates 
            lasting success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleLearnMore}
              className="rounded-full px-8 py-4 text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-1" />
              <span className="font-semibold">4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-1" />
              <span className="font-semibold">150+ Lives Transformed</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-1" />
              <span className="font-semibold">95% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Truth Alone, Triumphs */}
      <section id="about-section" className="py-24 bg-white">
        <div className="w-full px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <Badge className="mb-6 bg-purple-100 text-purple-800">
              Philosophy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="text-gray-900">
                Truth Alone,
              </span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Triumphs
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Truth alone triumphs because it is eternal, unchanging, and rooted in reality. 
              Lies may flourish briefly, but they crumble under scrutiny. 
              Truth brings clarity, justice, and peace, guiding humanity toward wisdom, unity, and prosperity.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Breakthrough limiting beliefs and mental barriers",
                "Create actionable plans aligned with your values",
                "Build sustainable habits for long-term success"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              onClick={handleAboutLearnMore}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-6 scale-90"></div>
              <img 
                src="/assets/5A93BCDE-329E-4EAD-B8C2-E1A338623C86.PNG" 
                alt="Professional coach in a modern office setting" 
                className="relative rounded-2xl shadow-2xl w-full h-auto transform -rotate-2 hover:rotate-0 transition-transform duration-500 scale-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community-section" className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800">
              <Users className="w-4 h-4 mr-2" />
              Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What We{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We help people gain clarity, build systems, and grow—personally, professionally, and financially.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Investment Consulting",
                description: "Master the markets through clarity. Weekly market breakdowns, mindset recalibration, and live signal sessions to help you trade with precision, not emotion.",
                icon: TrendingUp,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Life Consulting",
                description: "Master your inner operating system. This isn't about motivation it's about alignment. We help you see exactly where your system is out of sync physically, mentally, emotionally and give you the tools to recalibrate in real time.",
                icon: Globe,
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Business Consulting",
                description: "Build systems, not stress. Workshops, strategy labs, and tactical consulting to grow your business with structure, clarity, and creative control.",
                icon: MessageCircle,
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <CardContent className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={handleJoinCommunity}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 text-center">
          <Badge className="mb-6 bg-green-100 text-green-800">
            <TrendingUp className="w-4 h-4 mr-2" />
            Proven Results
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Real Results, Real Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                stat: "300%",
                label: "Increase in clarity & decision-making speed",
                description: "Clients report dramatically faster and more confident decision-making",
                icon: Target,
                color: "from-blue-500 to-blue-600"
              },
              {
                stat: "150+",
                label: "Lives transformed through custom programs",
                description: "Individuals who've experienced breakthrough transformations",
                icon: Users,
                color: "from-purple-500 to-purple-600"
              },
              {
                stat: "95%",
                label: "Of clients report greater confidence",
                description: "Sustained improvements in self-confidence and life satisfaction",
                icon: TrendingUp,
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <CardContent className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {item.stat}
                  </p>
                  <p className="text-xl font-semibold text-gray-900 mb-3">
                    {item.label}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800">
              <Star className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Real People, Real Growth
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about 
              their journey to clarity and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Kyle S.",
                quote: "Working with Zander brought a level of clarity I didn't realize I was missing. He helped me simplify the way I see myself, my decisions, and what actually matters. I've gotten way better at navigating pressure without collapsing or reacting. I make cleaner, healthier choices now, not from emotion, but from alignment. If you're serious about evolving, this is the kind of support that ACTUALLY moves the needle.",
                rating: 5
              },
              {
                name: "Braden W.",
                quote: "Working with Z-Clarity has brought about many positive changes in my life. I have gained clarity and confidence in my methods of action. Less than 2 years ago I was living paycheck to paycheck going into debt. As of June 2025 I am moved out of my hometown, living independently and have extra money for saving and investing. I plan on working with Z-Clarity INDEFINTELY.",
                rating: 5
              },
              {
                name: "Collin P.",
                quote: "My name is Collin Proksch I have been working with Zander for less than a month now and my life has changed drastically since woirking with him. I am meeting my goals in all aspects of life. I have been practicing Romainian everyday, growing plants that are thriving, my treading account is up 3x in the first week i started, and I've gained about 18 pounds eating healthier and working out more. If you're trying to get your shit together COME TO ZANDER.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border-0">
                <CardContent className="text-left space-y-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-blue-200 mb-2" />
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Feed Section - Now positioned after testimonials */}
      <LinkedInFeed />

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to create your breakthrough?
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90">
            Let's uncover the clarity and momentum you've been looking for. Book your 
            complimentary 1-on-1 consultation and take the first step toward the life you deserve.
          </p>
          
          <div className="flex justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 rounded-full px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Free Call
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-sm opacity-75">
            <span>✓ No sales pressure</span>
            <span>✓ 30-minute session</span>
            <span>✓ Immediate insights</span>
          </div>
        </div>
      </section>
    </div>
  );
}