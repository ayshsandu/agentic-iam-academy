
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const concepts = [
  {
    title: "Authentication",
    description: "Verifying the identity of a user, process, or device.",
    link: "/concepts",
  },
  {
    title: "Authorization",
    description: "Determining what an authenticated user is allowed to do.",
    link: "/concepts",
  },
  {
    title: "Single Sign-On (SSO)",
    description: "One-click access to multiple systems with a single login.",
    link: "/concepts",
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
            <Link to="/concepts">
              Explore Concepts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/best-practices">View Best Practices</Link>
          </Button>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Core Concepts at a Glance</h2>
            <p className="mt-2 text-muted-foreground">
              Start with the fundamentals of IAM.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept) => (
              <Card key={concept.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{concept.title}</CardTitle>
                  <CardDescription>{concept.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button variant="outline" asChild className="w-full">
                    <Link to={concept.link}>
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
