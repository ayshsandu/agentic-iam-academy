
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Ban, RadioTower, PowerOff } from "lucide-react";

const TerminatingCompromisedAgentAccess = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="mb-8">
        <Link to="/iam-challenges" className="text-sm text-primary hover:underline">
          &larr; Back
        </Link>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Challenge: Terminating Compromised Agent Access
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          How to rapidly and reliably revoke an agent's access when it's suspected of being compromised.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">The Problem: A Rogue Agent</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            An autonomous agent, by its nature, can perform a vast number of operations in a very short time. If an agent's credentials are stolen or its logic is subverted, it can become a powerful weapon for an attacker. The damage could be catastrophic, from data exfiltration to infrastructure destruction. Traditional, manual revocation processes are far too slow to be effective against a rogue agent operating at machine speed.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight">The Goal: Instant and Total Revocation</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The objective is to have a mechanism to instantly and completely sever a compromised agent's access to all resources. This isn't just about revoking a single token; it's about ensuring that the agent's identity is invalidated across the entire ecosystem, preventing it from authenticating to any service or accessing any data.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Key Solution Patterns</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-1">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Ban className="h-6 w-6" />
                  </div>
                  <CardTitle>Centralized, Real-time Revocation List</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maintain a central, highly available Certificate Revocation List (CRL) or a similar mechanism. When an agent is compromised, its identity (e.g., its SPIFFE ID or client ID) is added to this list. Services must check this list in real-time as part of their authorization decision, before granting access. This is a core component of a <Link to="/dynamic-authorization" className="text-primary hover:underline">Dynamic Authorization</Link> system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <RadioTower className="h-6 w-6" />
                  </div>
                  <CardTitle>Event-Driven Propagation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use a publish-subscribe (pub/sub) messaging system. When a revocation event is published, all services and systems subscribed to the "revocation" topic are immediately notified. They can then update their local caches and terminate any active sessions for the compromised agent. This is much faster than waiting for polling-based checks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <PowerOff className="h-6 w-6" />
                  </div>
                  <CardTitle>Infrastructure-Level "Kill Switch"</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For the most critical situations, integrate with the underlying infrastructure (e.g., Kubernetes, cloud provider APIs). A "kill switch" can trigger automated actions to immediately terminate the agent's process, sever its network connections via firewall rules, or quarantine the instance it's running on, providing a final, brute-force layer of containment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
           <p className="mt-4 text-lg text-muted-foreground">
            Effective termination relies heavily on other IAM concepts. <Link to="/ephemeral-credentials" className="text-primary hover:underline">Ephemeral Credentials</Link> shrink the window of opportunity for an attacker, and comprehensive <Link to="/auditing-and-observability" className="text-primary hover:underline">Auditing & Observability</Link> is essential for detecting a compromise in the first place.
          </p>
        </section>

      </div>
    </div>
  );
};

export default TerminatingCompromisedAgentAccess;
