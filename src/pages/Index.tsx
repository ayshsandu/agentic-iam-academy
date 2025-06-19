
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
    title: "Core Concepts",
    description:
      "Explore the building blocks of Identity and Access Management for AI, including essential terminology.",
    link: "/concepts",
    icon: Brain,
  },
  {
    title: "Challenges",
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-50/30"></div>
        
        <div className="container relative grid place-items-center gap-8 py-24 text-center md:py-32">
          <div className="animate-float">
            <Bot className="h-16 w-16 text-primary mb-6" />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl max-w-4xl">
            Mastering <span className="gradient-text">IAM</span> for{" "}
            <span className="gradient-text">Agentic AI</span>
          </h1>
          
          <p className="max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            Your comprehensive guide to understanding and implementing Identity and
            Access Management in the age of autonomous AI agents. Secure the future,
            one agent at a time.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="modern-button text-base px-8 py-3 h-auto">
              <Link to="/what-is-agentic-ai">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50/30">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="modern-card p-8 text-center group hover:glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Explore the <span className="gradient-text">Academy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Dive into the key areas of IAM for Agentic AI and master the security patterns 
              that will define the next generation of autonomous systems.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredSections.map((section, index) => (
              <Card 
                key={section.title} 
                className="modern-card group hover:glow-effect border-gray-200/60 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <section.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-primary transition-colors text-lg">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-4">
                  <Button variant="outline" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
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
      <section className="py-20 bg-gray-50/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Secure the <span className="gradient-text">Agentic Future</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the community of developers building the secure foundation for autonomous AI systems.
          </p>
          <Button asChild size="lg" className="modern-button text-base px-8 py-3 h-auto glow-effect">
            <Link to="/concepts">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
