
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Fingerprint, LockKeyhole, Hourglass, Handshake, KeyRound, ListChecks, ShieldAlert, EyeOff, ShieldOff, Clock, ShieldCheck, Share2, PackageCheck, Recycle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const challenges = [
  {
    title: "Agent Identity Problem",
    description: "How do you verify that an autonomous agent is truly who it claims to be in a distributed system?",
    icon: Fingerprint,
    href: "/agent-identity-problem",
  },
  {
    title: "Dynamic Authorization",
    description: "How do you make real-time access decisions when an agent's required permissions constantly change based on context?",
    icon: LockKeyhole,
    href: "/dynamic-authorization",
  },
  {
    title: "Ephemeral Credentials",
    description: "How do you securely authenticate agents that exist for only seconds without leaving long-lived credentials vulnerable?",
    icon: Hourglass,
    href: "/ephemeral-credentials",
  },
  {
    title: "Secure Introduction",
    description: "How do two agents establish trust when they've never interacted before and have no shared secrets?",
    icon: Handshake,
    href: "/secure-introduction",
  },
  {
    title: "Delegation & Impersonation",
    description: "How do you allow an agent to act on behalf of a user without compromising security or losing accountability?",
    icon: KeyRound,
    href: "/delegation-and-impersonation",
  },
  {
    title: "Auditing & Observability",
    description: "How do you track and verify every action an autonomous agent takes across distributed systems?",
    icon: ListChecks,
    href: "/auditing-and-observability",
  },
  {
    title: "Securing Secrets & Tokens",
    description: "How do you protect sensitive credentials when agents need to access multiple services autonomously?",
    icon: ShieldAlert,
    href: "/securing-secrets-and-tokens",
  },
  {
    title: "Preventing Sensitive Data Exposure to LLMs",
    description: "How do you ensure agents don't accidentally leak confidential information to third-party AI services?",
    icon: EyeOff,
    href: "/preventing-sensitive-data-exposure",
  },
  {
    title: "Terminating Compromised Agent Access",
    description: "How do you quickly revoke access for a potentially compromised agent across all systems it might touch?",
    icon: ShieldOff,
    href: "/terminating-compromised-agent-access",
  },
  {
    title: "Just-in-Time (JIT) Access",
    description: "How do you balance security with operational efficiency when agents need elevated permissions unpredictably?",
    icon: Clock,
    href: "/jit-access",
  },
  {
    title: "Principle of Least Privilege (PoLP) Enforcement",
    description: "How do you determine and enforce the minimum permissions an agent actually needs at any given moment?",
    icon: ShieldCheck,
    href: "/polp-enforcement",
  },
  {
    title: "Cross-System Identity Propagation",
    description: "How do you maintain an agent's identity and context as it moves through multiple interconnected services?",
    icon: Share2,
    href: "/cross-system-identity-propagation",
  },
  {
    title: "Supply Chain Security for Agents",
    description: "How do you ensure the agent code and dependencies haven't been tampered with before deployment?",
    icon: PackageCheck,
    href: "/supply-chain-security-for-agents",
  },
  {
    title: "Agent Lifecycle Management",
    description: "How do you securely manage agents from creation to decommissioning at scale without manual intervention?",
    icon: Recycle,
    href: "/agent-lifecycle-management",
  },
];

const IamChallenges = () => {
  return (
    <div className="container max-w-6xl py-8 md:py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">The Core Challenges of Agentic IAM</h1>
        <p className="text-lg text-muted-foreground">
          Securing an autonomous workforce requires solving a set of interconnected challenges. This is our guide to understanding them.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Identity & Authentication Challenges</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {challenges.slice(0, 3).map((challenge) => {
              const cardContent = (
                <Card
                  className={`flex h-full flex-col transition-all ${
                    challenge.href
                      ? "hover:border-primary hover:shadow-lg"
                      : "bg-muted/30"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <challenge.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground mb-4">{challenge.description}</p>
                    {challenge.href && (
                      <div className="flex justify-end">
                        <ArrowRight className="w-5 h-5 text-orange-500" />
                      </div>
                    )}
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
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Authorization & Access Control Challenges</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.slice(3, 8).map((challenge) => {
              const cardContent = (
                <Card
                  className={`flex h-full flex-col transition-all ${
                    challenge.href
                      ? "hover:border-primary hover:shadow-lg"
                      : "bg-muted/30"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <challenge.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground mb-4">{challenge.description}</p>
                    {challenge.href && (
                      <div className="flex justify-end">
                        <ArrowRight className="w-5 h-5 text-orange-500" />
                      </div>
                    )}
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
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Security & Risk Management Challenges</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {challenges.slice(8, 11).map((challenge) => {
              const cardContent = (
                <Card
                  className={`flex h-full flex-col transition-all ${
                    challenge.href
                      ? "hover:border-primary hover:shadow-lg"
                      : "bg-muted/30"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <challenge.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground mb-4">{challenge.description}</p>
                    {challenge.href && (
                      <div className="flex justify-end">
                        <ArrowRight className="w-5 h-5 text-orange-500" />
                      </div>
                    )}
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
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Operational & Governance Challenges</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.slice(11).map((challenge) => {
              const cardContent = (
                <Card
                  className={`flex h-full flex-col transition-all ${
                    challenge.href
                      ? "hover:border-primary hover:shadow-lg"
                      : "bg-muted/30"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <challenge.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground mb-4">{challenge.description}</p>
                    {challenge.href && (
                      <div className="flex justify-end">
                        <ArrowRight className="w-5 h-5 text-orange-500" />
                      </div>
                    )}
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
        </section>
      </div>
    </div>
  );
};

export default IamChallenges;
