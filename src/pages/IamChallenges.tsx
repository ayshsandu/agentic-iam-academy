
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Fingerprint, LockKeyhole, Hourglass, Handshake, KeyRound, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";

const challenges = [
  {
    title: "Agent Identity Problem",
    description: "How do we prove an agent is who it claims to be? The foundation of all other controls.",
    icon: Fingerprint,
    href: "/agent-identity-problem",
    status: "Published",
  },
  {
    title: "Dynamic Authorization",
    description: "Granting fine-grained, context-aware permissions that change in real-time.",
    icon: LockKeyhole,
    href: null,
    status: "Coming Soon",
  },
  {
    title: "Ephemeral Credentials",
    description: "Issuing short-lived, single-use credentials for agents that may only exist for seconds.",
    icon: Hourglass,
    href: null,
    status: "Coming Soon",
  },
  {
    title: "Secure Introduction",
    description: "How two agents, or an agent and a service, can establish a trusted relationship for the first time.",
    icon: Handshake,
    href: null,
    status: "Coming Soon",
  },
  {
    title: "Delegation & Impersonation",
    description: "How an agent can safely act on behalf of a user, with clearly defined and auditable constraints.",
    icon: KeyRound,
    href: null,
    status: "Coming Soon",
  },
  {
    title: "Auditing & Observability",
    description: "Maintaining a comprehensive, tamper-proof log of every action an agent takes.",
    icon: ListChecks,
    href: null,
    status: "Coming Soon",
  },
];

const IamChallenges = () => {
  return (
    <div className="container max-w-6xl py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">The Core Challenges of Agentic IAM</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Securing an autonomous workforce requires solving a set of interconnected challenges. This is our guide to understanding them.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => {
          const cardContent = (
            <Card
              className={`flex h-full flex-col transition-all ${
                challenge.href
                  ? "hover:border-primary hover:shadow-lg"
                  : "bg-muted/30"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                    <challenge.icon className={`h-8 w-8 mb-4 ${challenge.href ? 'text-primary' : 'text-muted-foreground'}`} />
                    <Badge variant={challenge.href ? "default" : "secondary"}>
                      {challenge.status}
                    </Badge>
                </div>
                <CardTitle>{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{challenge.description}</p>
              </CardContent>
            </Card>
          );

          if (challenge.href) {
            return (
              <Link to={challenge.href} key={challenge.title} className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg">
                {cardContent}
              </Link>
            );
          }
          return <div key={challenge.title}>{cardContent}</div>;
        })}
      </div>
    </div>
  );
};

export default IamChallenges;
