
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fingerprint, HelpCircle, Contact, ShieldCheck } from "lucide-react";

const AgentIdentityProblem = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">Deep Dive: The Agent Identity Problem</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Let's explore one of the most fundamental challenges: establishing a trustworthy identity for a non-human entity.
      </p>
      <div className="mt-12 space-y-6">
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
  );
};

export default AgentIdentityProblem;
