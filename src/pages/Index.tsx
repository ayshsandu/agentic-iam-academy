
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Bot, Shield, Zap, Brain, Lock, Eye } from "lucide-react";

const featuredSections = [
  {
    title: "Why IAM Matters",
    description:
      "Discover why securing the autonomous workforce is a critical first step in building safe AI systems.",
    link: "/why-iam-matters",
    icon: Shield,
  },
  {
    title: "Core IAM Concepts",
    description:
      "Explore the building blocks of Identity and Access Management for AI.",
    link: "/concepts",
    icon: Brain,
  },
  {
    title: "IAM Challenges",
    description:
      "A deep dive into the core challenges of securing autonomous agents, from identity to auditing.",
    link: "/iam-challenges",
    icon: Lock,
  },
];

const features = [
  {
    icon: Bot,
    title: "Agent-First Security",
    description: "Built for the autonomous AI workforce of tomorrow"
  },
  {
    icon: Zap,
    title: "Dynamic Authorization",
    description: "Real-time access control that adapts to context"
  },
  {
    icon: Eye,
    title: "Complete Observability",
    description: "Full audit trails for every agent interaction"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container relative grid place-items-center gap-12 py-20 text-center">
          <div className="animate-float">
            <div className="p-6 rounded-2xl glass-effect glow-effect">
              <Bot className="h-20 w-20 text-primary animate-pulse-slow mx-auto" />
            </div>
          </div>
          
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl xl:text-8xl leading-tight">
              Mastering <span className="gradient-text">IAM</span> for{" "}
              <span className="gradient-text">Agentic AI</span>
            </h1>
            
            <p className="max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed mx-auto">
              Your comprehensive guide to understanding and implementing Identity and
              Access Management in the age of autonomous AI agents. Secure the future,
              one agent at a time.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="gradient-bg text-white hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group glow-effect">
              <Link to="/what-is-agentic-ai">
                Get Started 
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 gradient-bg-subtle">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Our Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for the next generation of AI systems with security at its core
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="glass-effect rounded-2xl p-8 text-center group card-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-4 rounded-xl gradient-bg w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Explore the <span className="gradient-text">Academy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dive into the key areas of IAM for Agentic AI and master the security patterns 
              that will define the next generation of autonomous systems.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredSections.map((section, index) => (
              <Card 
                key={section.title} 
                className="glass-effect group card-hover border-0 rounded-2xl overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center p-8">
                  <div className="p-4 rounded-xl gradient-bg w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl gradient-text group-hover:text-primary transition-colors">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-lg mt-4 text-muted-foreground">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto p-8 pt-0">
                  <Button variant="outline" asChild className="w-full group-hover:gradient-bg group-hover:text-white group-hover:border-transparent transition-all rounded-xl py-3 text-lg font-medium">
                    <Link to={section.link}>
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 gradient-bg-subtle">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure the <span className="gradient-text">Agentic Future</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join the community of developers building the secure foundation for autonomous AI systems.
            </p>
            <Button asChild size="lg" className="gradient-bg text-white px-10 py-4 text-lg font-semibold rounded-xl glow-effect hover:opacity-90 transition-all">
              <Link to="/concepts">
                Start Learning
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
