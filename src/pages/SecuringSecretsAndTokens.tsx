
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Server, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const SecuringSecretsAndTokens = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="mb-8">
        <Link to="/iam-challenges" className="text-sm text-primary hover:underline">
          &larr; Back
        </Link>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Securing Secrets & Tokens
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          How to securely store, transmit, and manage sensitive credentials like
          API keys, OAuth tokens, and service account keys.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">
            The Problem: Digital Keys Under the Doormat
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AI agents, like any application, need credentials—secrets, tokens,
            API keys—to access resources and services. The challenge is that these
            agents are often autonomous and distributed, making traditional
            secret management methods insufficient. Hardcoding secrets in code is a
            major security risk. Storing them in configuration files or
            environment variables is better, but still leaves them vulnerable in
            many environments, especially if an agent's host is compromised.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight">
            The Goal: A Centralized, Dynamic & Auditable Vault
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The ideal approach is to treat secrets as first-class citizens with their own lifecycle. We need a system where secrets are:
          </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-muted-foreground">
                <li>
                    <span className="font-semibold">Centrally Managed:</span> A single source
                    of truth for all secrets, making management and rotation easier.
                </li>
                <li>
                    <span className="font-semibold">Dynamically Injected:</span> Secrets are
                    provided to agents only when needed (Just-in-Time) and are never
                    stored permanently on the agent's file system.
                </li>
                <li>
                    <span className="font-semibold">Tightly Scoped:</span> Agents only receive
                    the specific secrets they need for a specific task.
                </li>
                <li>
                    <span className="font-semibold">Auditable:</span> Every access to a secret
                    is logged, providing a clear trail of who accessed what, and when.
                </li>
            </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight">
            Key Solution Patterns
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Server className="h-6 w-6" />
                  </div>
                  <CardTitle>Secrets Management Systems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use dedicated tools like HashiCorp Vault, AWS Secrets Manager, or Google Secret Manager. These platforms provide secure storage, fine-grained access control, auditing, and automated secret rotation. Agents authenticate to the secrets manager to fetch credentials at runtime.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle>Workload Identity & JIT Access</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instead of giving an agent a long-lived API key, give the workload itself an identity (e.g., using SPIFFE/SPIRE or a cloud provider's workload identity mechanism). This identity can then be used to request short-lived, narrowly-scoped credentials from a trust source. This is a core principle of <Link to="/ephemeral-credentials" className="font-semibold text-primary hover:underline">Ephemeral Credentials</Link>.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecuringSecretsAndTokens;
