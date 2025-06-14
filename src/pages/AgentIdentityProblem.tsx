import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fingerprint, HelpCircle, Contact, ClipboardList } from "lucide-react";

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

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-6 w-6 text-primary" />
              The Broader Problem Space
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Agent Identity is just one piece of the puzzle. Securing an autonomous workforce requires solving a set of interconnected challenges:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              <li className="flex items-center gap-2">
                <span className="font-semibold text-primary">✓ Agent Identity Problem</span>
                <span className="text-xs text-muted-foreground">(This Page)</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">∙ Dynamic Authorization</li>
              <li className="flex items-center gap-2 text-muted-foreground">∙ Ephemeral Credentials</li>
              <li className="flex items-center gap-2 text-muted-foreground">∙ Secure Introduction</li>
              <li className="flex items-center gap-2 text-muted-foreground">∙ Delegation & Impersonation</li>
              <li className="flex items-center gap-2 text-muted-foreground">∙ Auditing & Observability</li>
            </ul>
             <p className="mt-4 text-sm text-muted-foreground">
              This guide will be expanded to include deep dives on each of these topics.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgentIdentityProblem;
