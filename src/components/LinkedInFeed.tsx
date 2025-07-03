import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Calendar, 
  Eye, 
  RefreshCw,
  Linkedin,
  Clock
} from "lucide-react";

interface NewsletterPost {
  id: string;
  title: string;
  preview: string;
  publishedDate: string;
  readTime: string;
  views: string;
  linkedinUrl: string;
  category: string;
}

export function LinkedInFeed() {
  const [posts, setPosts] = useState<NewsletterPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Mock data - replace with actual LinkedIn API integration
  const mockPosts: NewsletterPost[] = [
    {
      id: '1',
      title: 'The Market Doesnt Reflect Value',
      preview: 'Most people think the markets reflect value. They don\'t. They reflect control, power, positioning, and leverage. You see this everywhere—not just in finance. Brands, people, and platforms win because of perception, not truth.',
      publishedDate: 'June 26, 2025',
      readTime: '5 min read',
      views: '2.1k views',
      linkedinUrl: 'https://www.linkedin.com/pulse/market-doesnt-reflect-value-zander-lang-vcwqc/?trackingId=3lbkSJkaTDO4WFdOeQt8eA%3D%3D',
      category: ''
    },
    {
      id: '2',
      title: 'The One System Controlling All Your Bad Habits',
      preview: `If you've ever asked: "Why can't I just change?" Here's the real reason: Your nervous system is in charge—not your willpower.

Most people try to change habits with more discipline. But if your body is stuck in survival mode, nothing sticks.`,
      publishedDate: 'June 14, 2025',
      readTime: '7 min read',
      views: '3.4k views',
      linkedinUrl: 'https://www.linkedin.com/pulse/one-system-controlling-all-your-bad-habits-zander-lang-jl45c/?trackingId=aGJh0Ttrmpbc7w75FM6NDQ%3D%3D',
      category: ''
    },
    {
      id: '3',
      title: 'The 7 Silent Diseases Blocking Your Success',
      preview: 'Emotional intelligence isn\'t just a skill. It\'s your internal compass. And most people? It\'s jammed with static. They think they\'re making smart moves… But it\'s just unregulated emotion disguised as logic...',
      publishedDate: 'March 23, 2025',
      readTime: '6 min read',
      views: '1.8k views',
      linkedinUrl: 'https://www.linkedin.com/pulse/7-silent-diseases-blocking-your-success-zander-lang-aauwc/?trackingId=wrsHXT8lra%2F53SEkt3K4Kw%3D%3D',
      category: ''
    },
    {
      id: '4',
      title: 'Make Believe Shapes Your Life',
      preview: 'Make Believe isn\'t just for kids—it\'s a natural cognitive process that shapes your actions and defines your lifestyle. Make: You create clearvision of whats possible. Believe: You trust in that vision...',
      publishedDate: 'January 8, 2025',
      readTime: '8 min read',
      views: '2.7k views',
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7274197610981158912/',
      category: ''
    }
  ];

  const fetchPosts = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, you would fetch from LinkedIn API here
    // const response = await fetch('/api/linkedin-newsletters');
    // const data = await response.json();
    
    setPosts(mockPosts);
    setLastUpdated(new Date());
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    
    // Auto-refresh every 30 minutes
    const interval = setInterval(fetchPosts, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    fetchPosts();
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <section id="linkedin-feed-section" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                Latest Insights
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Newsletter
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl">
                Stay updated with the latest insights, strategies, and breakthrough thinking 
                from our LinkedIn newsletter.
              </p>
            </div>
            
            <div className="flex flex-col items-end space-y-2 mt-6 md:mt-0">
              <Button
                onClick={handleRefresh}
                disabled={isLoading}
                variant="outline"
                className="rounded-full px-6 py-2 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <p className="text-sm text-gray-500">
                Last updated: {formatTimeAgo(lastUpdated)}
              </p>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-6 rounded-3xl animate-pulse">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Posts Grid */}
          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Card 
                  key={post.id} 
                  className="p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 group"
                >
                  <CardContent className="space-y-4">
                    {/* Category Badge - Only show if category exists */}
                    {post.category && (
                      <Badge className="bg-blue-100 text-blue-800 w-fit">
                        {post.category}
                      </Badge>
                    )}
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    
                    {/* Preview */}
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {post.preview}
                    </p>
                    
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.publishedDate}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views}
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <Button
                      onClick={() => window.open(post.linkedinUrl, '_blank')}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full py-3 font-semibold transition-all duration-300 hover:scale-105 group-hover:shadow-lg"
                    >
                      Read on LinkedIn
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              onClick={() => window.open('https://www.linkedin.com/in/zander-lang-9072a4258/', '_blank')}
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-4 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              View All on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}