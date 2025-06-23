import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const characteristics = [
  {
    title: "Goal-Oriented",
    description: "Operates with a specific objective in mind, whether it's booking a flight or analyzing a dataset.",
  },
  {
    title: "Autonomous",
    description: "Can make decisions and take actions on its own to achieve its goals, without step-by-step human instructions.",
  },
  {
    title: "Proactive",
    description: "Doesn't just wait for a command. It can initiate actions to move closer to its objective.",
  },
  {
    title: "Adaptive",
    description: "Learns from its interactions and the environment, adjusting its strategy as circumstances change.",
  },
  {
    title: "Interactive",
    description: "Can communicate and collaborate with users, other AI agents, and external systems and tools.",
  },
];

const WhatIsAgenticAI = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">What is Agentic AI?</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Agentic AI refers to a type of artificial intelligence system that can act autonomously and proactively to achieve specified goals. Unlike traditional AI models that simply respond to prompts, agentic systems can create plans, execute multi-step tasks, and adapt to new information without constant human oversight.
      </p>

      <div className="mt-12">
        <h2 className="text-3xl font-bold">Key Characteristics</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {characteristics.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="mt-12 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Why Agentic AI Matters Now</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The rise of powerful Large Language Models (LLMs) like GPT-4 has been the catalyst. These models provide the "brain" for agents, giving them advanced reasoning, comprehension, and generation capabilities. When you combine this cognitive power with the ability to take actions (like browsing the web, using APIs, or running code), you get agentic AI. It's the shift from a "thinking" AI to a "doing" AI.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Understanding IAM and Agentic AI</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              There's an important distinction between using AI to improve IAM systems versus managing AI agents as digital identities. This guide focuses on the latter - treating AI agents as entities that need proper identity, authentication, and access controls.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link to="/agentic-iam-vs-iam-for-agentic-ai">
                Learn the Key Distinction <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default WhatIsAgenticAI;
