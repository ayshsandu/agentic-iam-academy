
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookOpen, Bot, Shield, Zap, Brain, Lock, Eye, GraduationCap, Users, Award } from "lucide-react";

const featuredSections = [
  {
    title: "Why IAM Matters",
    description:
      "Understand the fundamental importance of securing autonomous AI systems and the critical role of identity management.",
    link: "/why-iam-matters",
    icon: Shield,
  },
  {
    title: "Core Concepts",
    description:
      "Explore essential building blocks and terminology of Identity and Access Management for AI systems.",
    link: "/concepts",
    icon: Brain,
  },
  {
    title: "Real-World Challenges",
    description:
      "Discover practical challenges and solutions for securing autonomous agents in production environments.",
    link: "/iam-challenges",
    icon: Lock,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        
        <div className="container relative grid place-items-center gap-8 py-24 text-center md:py-32">
          <div className="animate-float">
            <Bot className="h-16 w-16 text-orange-500 mb-6" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl max-w-4xl whitespace-nowrap">
            Mastering <span className="text-orange-600">IAM</span> for <span className="text-orange-600">Agentic AI</span>
          </h1>
          
          <p className="max-w-4xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            Explore the principles, practices, and challenges of Identity and Access Management 
            for autonomous AI agents. From foundational concepts to advanced implementation strategies, 
            discover the knowledge needed to secure the future of AI.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="modern-button text-base px-8 py-3 h-auto">
              <Link to="/what-is-agentic-ai">
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Modules Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Explore Key <span className="text-orange-600">Topic Areas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover carefully organized content that covers essential concepts 
              from fundamental principles to advanced security implementations.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredSections.map((section, index) => (
              <Card 
                key={section.title} 
                className="bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-start mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-orange-600 transition-colors text-lg text-left">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-left">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-4">
                  <Button variant="outline" asChild className="w-full group-hover:bg-orange-600 group-hover:text-white group-hover:border-transparent transition-all">
                    <Link to={section.link}>
                      Explore Topic
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                What You'll <span className="text-orange-600">Discover</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our comprehensive content covers everything from basic concepts to advanced implementation strategies.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Foundational Knowledge</h3>
                    <p className="text-muted-foreground">Understand the principles of identity management, authentication, and authorization in AI systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Real-World Challenges</h3>
                    <p className="text-muted-foreground">Explore practical challenges faced when securing autonomous agents in production environments.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Implementation Strategies</h3>
                    <p className="text-muted-foreground">Learn proven approaches and best practices for implementing secure agentic systems.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Advanced Security Patterns</h3>
                    <p className="text-muted-foreground">Master complex security patterns including dynamic authorization and ephemeral credentials.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Risk Assessment & Mitigation</h3>
                    <p className="text-muted-foreground">Identify potential security risks and develop strategies to mitigate threats in agentic systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Future-Proof Architecture</h3>
                    <p className="text-muted-foreground">Design systems that can adapt to evolving AI capabilities and security requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100/50">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Award className="h-16 w-16 text-orange-600 mx-auto mb-4" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Explore <span className="text-orange-600">Agentic IAM</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of security professionals, developers, and researchers who are 
              building the secure foundation for autonomous AI systems. Explore our resources 
              today and contribute to the future of AI security.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="modern-button text-base px-8 py-3 h-auto">
                <Link to="/concepts">
                  Start Learning
                  <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-3 h-auto border-orange-200 text-orange-700 hover:bg-orange-50">
                <Link to="/iam-challenges">
                  Explore Challenges
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
