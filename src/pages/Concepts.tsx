import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const concepts = [
  {
    value: "identity",
    title: "Identity",
    content: "In IAM, an identity is a unique representation of a subject, which can be a user, a device, an application, or an AI agent. This identity consists of a set of attributes that describe the subject. For AI agents, key attributes might include its unique ID, its owner, its capabilities, and its operational constraints.",
  },
  {
    value: "authentication",
    title: "Authentication (AuthN)",
    content: "Authentication is the process of verifying a claimed identity. For human users, this is often done with passwords, biometrics, or security keys. For AI agents, authentication might involve API keys, client certificates, or signed requests. The goal is to prove that the agent is who it claims to be.",
  },
  {
    value: "authorization",
    title: "Authorization (AuthZ)",
    content: "Once an identity is authenticated, authorization determines what actions that identity is allowed to perform on which resources. This is a critical concept for agents, as it defines their operational boundaries. Policies like Role-Based Access Control (RBAC) or Attribute-Based Access Control (ABAC) are used to enforce authorization rules.",
  },
  {
    value: "sso",
    title: "Single Sign-On (SSO)",
    content: "SSO allows a user to log in with a single set of credentials to gain access to multiple related, yet independent, software systems. While typically user-centric, the principles can be adapted for agents that need to interact with various services within a trusted domain, simplifying credential management.",
  },
  {
    value: "mfa",
    title: "Multi-Factor Authentication (MFA)",
    content: "MFA is a security practice that requires more than one method of authentication from independent categories of credentials to verify the user's identity. For critical agent actions, a form of MFA could be implemented, such as requiring a time-based one-time password (TOTP) or a secondary approval from a human supervisor.",
  },
  {
    value: "polp",
    title: "Principle of Least Privilege (PoLP)",
    content: "This is a fundamental security principle which dictates that an identity should only be granted the minimum permissions necessary to perform its required tasks. For AI agents, this is crucial to limit the potential damage if an agent is compromised or behaves unexpectedly. Permissions should be fine-grained and time-bound whenever possible.",
  },
  {
    value: "jea",
    title: "Just-Enough-Access (JEA)",
    content: "A modern evolution of the Principle of Least Privilege (PoLP). JEA dictates that identities should be granted permissions not only with the minimum privilege but also for the minimum time required to complete a task. For AI agents, this means dynamically generating credentials and permissions that are valid only for a specific operation and expire immediately after, often called 'just-in-time' access."
  },
  {
    value: "zero-trust",
    title: "Zero Trust Architecture (ZTA)",
    content: "A security model built on the principle of 'never trust, always verify.' It eliminates the idea of a trusted internal network and an untrusted external network. Every access request is treated as if it originates from an untrusted source and must be strictly authenticated, authorized, and encrypted before access is granted. For agents, this means they must continuously re-verify their identity and authorization for every interaction."
  },
  {
    value: "obo",
    title: "On-Behalf-Of (OBO) Flow",
    content: "A specific type of delegation where an application or agent needs to call a downstream service while acting on behalf of a user. The agent authenticates the user and then uses that user's identity to obtain a separate, delegated token to access the downstream service. This ensures that the downstream service can enforce permissions based on the original user's rights, maintaining a clear chain of identity."
  },
  {
    value: "delegation",
    title: "Delegation",
    content: "The process of allowing one identity (the delegate, e.g., an AI agent) to act with the permissions of another identity (the delegator, e.g., a human user). This is fundamental for agents that perform tasks for users. The key challenge is to ensure that delegation is securely implemented, with clear constraints on what actions the delegate can perform and for how long."
  },
  {
    value: "audit",
    title: "Auditing & Observability",
    content: "The practice of recording, monitoring, and analyzing all IAM-related events. A comprehensive audit trail logs who (or what agent) accessed what resource, when, from where, and with what permissions. For AI agents, robust and immutable audit logs are critical for security forensics, compliance, accountability, and debugging unexpected behavior."
  }
];


const Concepts = () => {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">Core Concepts</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Explore the fundamental building blocks of Identity and Access Management, tailored for the world of Agentic AI.
      </p>
      <div className="mt-8 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {concepts.map((concept) => (
            <AccordionItem value={concept.value} key={concept.value}>
              <AccordionTrigger className="text-xl text-left">
                {concept.title}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {concept.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Concepts;
