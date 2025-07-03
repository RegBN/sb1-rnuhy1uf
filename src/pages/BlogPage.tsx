import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Clock,
  Eye,
  Zap
} from "lucide-react";

export function BlogPage() {
  const handleGetStarted = () => {
    window.open('https://calendly.com/zclarity/alignment?month=2025-06', '_blank');
  };

  const featuredPost = {
    title: "The Science of Breakthrough: How Clarity Creates Exponential Results",
    excerpt: "Discover the neuroscience behind breakthrough moments and learn how to create the conditions for exponential growth in your life and business.",
    author: "Dr. Sarah Mitchell",
    date: "June 26, 2025",
    readTime: "8 min read",
    views: "2.3k views",
    category: "Psychology",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const blogPosts = [
    {
      title: "5 Daily Habits That Transform High-Performers",
      excerpt: "The simple yet powerful daily practices that separate extraordinary achievers from the rest.",
      author: "Marcus Chen",
      date: "June 14, 2025",
      readTime: "6 min read",
      views: "1.8k views",
      category: "Habits",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "From Confusion to Clarity: A Step-by-Step Framework",
      excerpt: "A proven methodology for cutting through mental fog and gaining crystal-clear direction in any situation.",
      author: "Jennifer Walsh",
      date: "May 23, 2025",
      readTime: "10 min read",
      views: "3.1k views",
      category: "Strategy",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "The Investment Mindset: Building Wealth Through Clarity",
      excerpt: "Master the markets through clarity. Weekly market breakdowns, mindset recalibration, and live signal sessions to help you trade with precision, not emotion.",
      author: "David Rodriguez",
      date: "January 8, 2025",
      readTime: "7 min read",
      views: "2.7k views",
      category: "Investment",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
        <div className="w-full px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
            <BookOpen className="w-4 h-4 mr-2" />
            Blog
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Insights for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Growth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover actionable insights, proven strategies, and breakthrough thinking 
            from our experts and successful community members.
          </p>
        </div>
      </section>

      {/* Featured Post & Recent Articles */}
      <section className="py-24 bg-white">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            {/* Featured Post */}
            <Badge className="mb-8 bg-yellow-100 text-yellow-800">
              <TrendingUp className="w-4 h-4 mr-2" />
              Featured Article
            </Badge>
            
            <Card className="overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0 mb-16">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 w-fit">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Recent Articles */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {post.date}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {post.views}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 rounded-3xl p-12 text-white">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Never Miss an Insight
                </h3>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Get our latest articles and breakthrough strategies delivered directly to your inbox.
                </p>
                
                <Button 
                  onClick={handleGetStarted}
                  className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 rounded-full px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Join Our Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}