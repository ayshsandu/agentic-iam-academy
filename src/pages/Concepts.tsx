
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
