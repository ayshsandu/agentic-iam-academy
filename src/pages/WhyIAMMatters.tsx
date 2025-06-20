import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, ShieldCheck, Users, Clock, GitBranch, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const challenges = [
  {
    title: "Scale",
    description: "You might have thousands of human employees, but you could have millions of short-lived, single-purpose AI agents.",
    icon: Users,
  },
  {
    title: "Temporality",
    description: "An agent might exist for only a few seconds to complete a single task. Traditional, long-lived user accounts don't fit this model.",
    icon: Clock,
  },
  {
    title: "Context",
    description: "An agent's permissions might need to change dynamically based on the specific task it's performing for a specific user.",
    icon: GitBranch,
  },
  {
    title: "Non-Person Entities (NPEs)",
    description: "Agents are not people. They don't have a manager to approve their access requests or a password they can remember. Their identities are purely digital and must be managed programmatically.",
    icon: Cpu,
  },
];

const WhyIAMMatters = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">Why IAM Matters for Agentic AI</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Securing the Autonomous Workforce
      </p>

      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              The Double-Edged Sword of Autonomy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              An agent that can book flights is useful. An agent that can access and leak your entire email history is a catastrophic liability. The very autonomy that makes agents powerful also makes them a significant security risk. Without robust identity and access controls, we are essentially deploying powerful, unpredictable actors into our digital environments with unclear permissions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              The Core Problem: Who Are You, and What Can You Do?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              At its heart, the problem is the same one Identity and Access Management (IAM) has always solved for humans:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Identity (Authentication):</strong> How do we verify that an agent is who it claims to be? Is it a legitimate instance of our "Travel Booker Bot" or a malicious imposter?
              </li>
              <li>
                <strong>Access (Authorization):</strong> Once authenticated, what is this specific agent instance allowed to do? Which APIs can it call? What data can it read or write? What actions can it take?
              </li>
            </ul>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-3xl font-bold">Traditional IAM vs. Agentic IAM</h2>
          <p className="mt-2 text-muted-foreground">
            While the core principles are the same, agentic IAM presents unique challenges:
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {challenges.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <item.icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Deep Dive: The Agent Identity Problem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              One of the most fundamental challenges is establishing a trustworthy identity for a non-human entity. How do you know an agent is who it claims to be, and how can you manage its permissions at scale?
            </p>
            <Button asChild>
              <Link to="/agent-identity-problem">
                Explore The Agent Identity Problem
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>Why This Guide Exists?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This guide is designed for developers building applications that leverage agentic AI. It's not just for security experts. If you are creating, deploying, or managing AI agents, you are on the front lines of this new security paradigm. We will provide you with the concepts, best practices, and practical patterns you need to securely identify your agents, grant them the precise, least-privilege permissions they need, and build systems that are both powerful and safe.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhyIAMMatters;
