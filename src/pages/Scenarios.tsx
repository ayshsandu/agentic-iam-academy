
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blocks, ServerCog, UserRoundCog } from "lucide-react";

const scenarios = [
  {
    icon: ServerCog,
    title: "Agent Accessing Internal APIs",
    problem:
      "An autonomous agent (e.g., a data processing pipeline) needs to securely access internal microservices.",
    solution:
      "Use the OAuth 2.0 Client Credentials flow. The agent is a confidential client with its own identity. It authenticates with the auth server using its client ID and secret to get an access token, which it then uses to call the APIs.",
    why: "This decouples the agent from user credentials and provides a clear, auditable identity for the service itself.",
  },
  {
    icon: Blocks,
    title: "Agent Accessing Third-Party SaaS",
    problem:
      "An AI assistant needs to post messages to Slack or create issues in GitHub on behalf of the organization.",
    solution:
      "Use a service account or a specific bot user from the third-party provider. Store the long-lived API key or token securely using a secrets manager (e.g., AWS Secrets Manager, HashiCorp Vault).",
    why: "Avoids using a human user's account, which can cause issues if the user leaves the company. Provides a dedicated identity for the automation.",
  },
  {
    icon: UserRoundCog,
    title: "Agent Acting on Behalf of a User",
    problem:
      "A 'personal AI assistant' needs to read a user's emails and schedule meetings in their calendar.",
    solution:
      "Use the OAuth 2.0 Authorization Code flow with PKCE. The user logs in once and grants consent (scopes) to the agent. The agent receives a refresh token to maintain access without repeatedly asking the user to log in.",
    why: "This is the standard for delegated authorization. It ensures the user is in control, can revoke access at any time, and never shares their password with the agent.",
  },
];

const Scenarios = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">
        Real-World Scenarios
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Explore common use cases and architectural patterns for applying IAM
        principles to AI agents.
      </p>

      <div className="mt-12 space-y-8">
        {scenarios.map((scenario) => {
          const Icon = scenario.icon;
          return (
            <Card key={scenario.title}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle>{scenario.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="-mt-2 space-y-6 pl-[72px] text-base">
                <div className="space-y-1">
                  <h3 className="font-semibold">The Problem</h3>
                  <p className="text-muted-foreground">{scenario.problem}</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">The Solution Pattern</h3>
                  <p className="text-muted-foreground">{scenario.solution}</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Why It Works</h3>
                  <p className="text-muted-foreground">{scenario.why}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Scenarios;
