
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const featuredSections = [
  {
    title: "Why IAM Matters",
    description:
      "Discover why securing the autonomous workforce is a critical first step in building safe AI systems.",
    link: "/why-iam-matters",
  },
  {
    title: "Core IAM Concepts",
    description:
      "Explore the building blocks of Identity and Access Management for AI.",
    link: "/concepts",
  },
  {
    title: "Security Best Practices",
    description:
      "Discover industry-standard practices for securing your AI agents.",
    link: "/best-practices",
  },
];

const Index = () => {
  return (
    <>
      <section className="container grid place-items-center gap-6 py-20 text-center md:py-32">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Mastering IAM for Agentic AI Developers
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Your comprehensive guide to understanding and implementing Identity and
          Access Management in the age of AI agents.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/what-is-agentic-ai">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Explore the Academy</h2>
            <p className="mt-2 text-muted-foreground">
              Dive into the key areas of IAM for Agentic AI.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredSections.map((section) => (
              <Card key={section.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button variant="outline" asChild className="w-full">
                    <Link to={section.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
