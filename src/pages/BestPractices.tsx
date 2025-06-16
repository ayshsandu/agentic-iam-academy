
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ShieldCheck, LockKeyhole, UserCog, Files, Users, Link2, Clock, Eye, Shield, AlertTriangle, RefreshCw, Fingerprint } from "lucide-react";

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
  {
    icon: Clock,
    title: "Implement Time-Based Access Controls",
    description:
      "Restrict agent operations to specific time windows when possible. Use session timeouts and implement automatic credential expiration. This limits the window of opportunity for attackers if credentials are compromised.",
  },
  {
    icon: Eye,
    title: "Enable Comprehensive Logging and Monitoring",
    description:
      "Log all agent activities, including authentication attempts, resource access, and API calls. Implement real-time monitoring to detect anomalous behavior and potential security breaches. Use structured logging for better analysis.",
  },
  {
    icon: Shield,
    title: "Implement Defense in Depth",
    description:
      "Use multiple layers of security controls rather than relying on a single mechanism. Combine network security, application-level controls, encryption, and monitoring to create overlapping protective measures.",
  },
  {
    icon: AlertTriangle,
    title: "Plan for Incident Response",
    description:
      "Develop clear procedures for responding to compromised agents. This includes rapid credential revocation, isolation of affected systems, and forensic analysis capabilities. Practice incident response scenarios regularly.",
  },
  {
    icon: RefreshCw,
    title: "Automate Credential Rotation",
    description:
      "Implement automated rotation of secrets, tokens, and certificates. Use tools like HashiCorp Vault or cloud-native secret managers to handle rotation without service interruption. Never rely on manual processes for critical security operations.",
  },
  {
    icon: Fingerprint,
    title: "Validate Agent Integrity and Provenance",
    description:
      "Verify that agents haven't been tampered with before deployment. Use code signing, checksums, and supply chain security practices. Implement runtime integrity checks to detect modifications during execution.",
  },
];

const BestPractices = () => {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">Best Practices</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Learn about industry-standard best practices for implementing secure and effective IAM solutions in your Agentic AI projects. These practices form the foundation of a robust security posture for autonomous AI systems.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {practices.map((practice, index) => {
          const Icon = practice.icon;
          return (
            <Card 
              key={practice.title} 
              className="flex flex-col glass-effect group hover:glow-effect transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{practice.title}</CardTitle>
                <CardDescription className="pt-2">{practice.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <div className="mt-16 glass-effect rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Implementation Priority</h2>
        <p className="text-muted-foreground mb-6">
          When implementing these best practices, consider this recommended order of priority:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-primary">Phase 1: Foundation</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Establish agent identities</li>
              <li>Implement strong authentication</li>
              <li>Apply principle of least privilege</li>
              <li>Enable basic logging</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-primary">Phase 2: Enhancement</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Centralize identity management</li>
              <li>Implement time-based controls</li>
              <li>Add comprehensive monitoring</li>
              <li>Secure communication channels</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-primary">Phase 3: Advanced</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Automate credential rotation</li>
              <li>Implement defense in depth</li>
              <li>Validate agent integrity</li>
              <li>Regular security reviews</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-primary">Phase 4: Operational</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Incident response planning</li>
              <li>Regular audits and reviews</li>
              <li>Continuous improvement</li>
              <li>Security awareness training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
