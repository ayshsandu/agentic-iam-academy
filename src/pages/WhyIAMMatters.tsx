
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, ShieldCheck, Users, Clock, GitBranch, Cpu, Fingerprint, HelpCircle, Contact } from "lucide-react";

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

        <div className="pt-8">
          <h2 className="text-3xl font-bold">Deep Dive: The Agent Identity Problem</h2>
          <p className="mt-2 text-muted-foreground">
            Let's explore one of the most fundamental challenges: establishing a trustworthy identity for a non-human entity.
          </p>
          <div className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fingerprint className="h-6 w-6 text-primary" />
                  What is an AI Agent's Identity?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlike a human, an agent has no inherent, physical identity. It's just code executing. How do we distinguish one instance of that code from another? How do we know if it's a legitimate agent created by our system, or a malicious copy designed to steal data? This is the crux of the agent identity problem.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                   <HelpCircle className="h-6 w-6 text-destructive" />
                   Why Is This So Hard?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Traditional identity is often based on secrets (like passwords) or biometrics. Agents can't easily remember complex passwords, and they don't have fingerprints. They can store secrets like API keys, but managing these at scale becomes a massive challenge, especially for ephemeral agents that might only exist for a few seconds. Storing long-lived secrets in code or configuration is a major security risk.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                   <Contact className="h-6 w-6 text-yellow-500" />
                   Analogy: The Corporate Badge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Think of a human employee. They have an identity (name, employee ID) which is verified when they are hired. They are then issued a badge (a credential). This badge grants them access to specific doors (resources). The badge is temporary and can be revoked if they leave the company. We need a similar, digitally native concept for AI agents.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                   <ShieldCheck className="h-6 w-6 text-primary" />
                   The Solution: Workload Identity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The modern approach is called <strong>Workload Identity</strong>. The core idea is to shift identity from being based on a long-lived secret stored by the agent to a verifiable identity provided by the trusted platform it's running on (e.g., AWS, Google Cloud, Kubernetes).
                </p>
                <p className="mt-4 text-muted-foreground">
                  Instead of the agent holding a secret, the platform issues it a short-lived, cryptographically signed token when it starts. The agent can then present this token to other services to prove its identity. This is like the platform vouching for the agent, saying "I can confirm this is a legitimate instance of 'Data-Processor-v2' running in our secure environment."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>Why This Guide Exists</CardTitle>
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
