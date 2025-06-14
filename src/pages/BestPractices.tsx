
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ShieldCheck, LockKeyhole, UserCog, Files, Users, Link2 } from "lucide-react";

const practices = [
  {
    icon: ShieldCheck,
    title: "Enforce Strong Authentication for Agents",
    description:
      "Don't rely on static, long-lived credentials. Use short-lived tokens (e.g., OAuth 2.0, OIDC) and rotate credentials automatically. For critical operations, consider cryptographic methods like client certificates or signed JWTs.",
  },
  {
    icon: LockKeyhole,
    title: "Implement the Principle of Least Privilege (PoLP)",
    description:
      "Grant agents only the exact permissions they need to perform a specific task, for the shortest time necessary. Use fine-grained permissions and scope-based access to restrict what an agent can do.",
  },
  {
    icon: UserCog,
    title: "Establish and Manage Agent Identities",
    description:
      "Every agent should have a unique, auditable identity, separate from its human owner or creator. This allows for clear tracking of actions and accountability. Use service accounts or managed identities provided by cloud platforms.",
  },
  {
    icon: Files,
    title: "Regularly Audit and Review Permissions",
    description:
      "Continuously monitor agent activity and review their assigned permissions. Automate the detection of unused or overly permissive roles. Revoke unnecessary access promptly to reduce the attack surface.",
  },
  {
    icon: Link2,
    title: "Secure Agent-to-Service Communication",
    description:
      "All communication should be encrypted using protocols like mTLS (mutual TLS). This ensures that both parties are authenticated and that data in transit is protected from eavesdropping or tampering.",
  },
  {
    icon: Users,
    title: "Centralize Identity and Policy Management",
    description:
      "Use a centralized Identity Provider (IdP) to manage agent identities and access policies. This provides a single source of truth, simplifies administration, and ensures consistent policy enforcement across all systems.",
  },
];


const BestPractices = () => {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">Best Practices</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Learn about industry-standard best practices for implementing secure and effective IAM solutions in your Agentic AI projects.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {practices.map((practice) => {
          const Icon = practice.icon;
          return (
            <Card key={practice.title} className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle>{practice.title}</CardTitle>
                <CardDescription className="pt-2">{practice.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default BestPractices;
