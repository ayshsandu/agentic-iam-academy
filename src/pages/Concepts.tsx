
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const conceptsAndTerms = [
  {
    value: "abac",
    title: "ABAC (Attribute-Based Access Control)",
    content: "An access control model where authorization decisions are based on attributes associated with the subject, object, resource, and environment, evaluated against policies. It allows for highly granular and context-aware permissions.",
  },
  {
    value: "agent-to-agent",
    title: "Agent-to-Agent Communication",
    content: "When agents need to collaborate, they must be able to securely communicate with each other. This requires a mechanism for agents to discover, authenticate, and authorize communication with other agents. Mutual TLS (mTLS) with short-lived certificates, based on verifiable agent identities, is a common pattern to establish secure and trusted channels.",
  },
  {
    value: "api-key",
    title: "API Key",
    content: "A simple secret token used to authenticate a client (like an agent) with an API. While easy to use, they are often long-lived and less secure than token-based authentication like OAuth 2.0.",
  },
  {
    value: "audit",
    title: "Auditing & Observability",
    content: "The practice of recording, monitoring, and analyzing all IAM-related events. A comprehensive audit trail logs who (or what agent) accessed what resource, when, from where, and with what permissions. For AI agents, robust and immutable audit logs are critical for security forensics, compliance, accountability, and debugging unexpected behavior."
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
    value: "bearer-token",
    title: "Bearer Token",
    content: "A type of security token where the 'bearer' (the one holding the token) can access protected resources without needing to prove their identity further. Possession of the token is sufficient for access, making its security paramount.",
  },
  {
    value: "compliance",
    title: "Compliance & Governance",
    content: "Organizations must ensure that their AI agents operate in compliance with legal, regulatory, and internal policy requirements (e.g., GDPR, HIPAA). IAM plays a vital role by enforcing data access policies, providing comprehensive audit logs to prove compliance, and managing agent permissions to prevent unauthorized actions. Governance frameworks define the rules, roles, and responsibilities for managing agent identities and access throughout their lifecycle.",
  },
  {
    value: "delegation",
    title: "Delegation",
    content: "The process of allowing one identity (the delegate, e.g., an AI agent) to act with the permissions of another identity (the delegator, e.g., a human user). This is fundamental for agents that perform tasks for users. The key challenge is to ensure that delegation is securely implemented, with clear constraints on what actions the delegate can perform and for how long."
  },
  {
    value: "dynamic-permissions",
    title: "Dynamic Permissions",
    content: "Instead of granting static, long-lived permissions, dynamic permissions are granted on-the-fly based on the specific context of a task. This aligns with Just-in-Time (JIT) access principles. For example, an agent might request and receive temporary permission to access a specific customer record only for the duration of handling a support ticket, with the permission being automatically revoked upon completion.",
  },
  {
    value: "identity",
    title: "Identity",
    content: "In IAM, an identity is a unique representation of a subject, which can be a user, a device, an application, or an AI agent. This identity consists of a set of attributes that describe the subject. For AI agents, key attributes might include its unique ID, its owner, its capabilities, and its operational constraints.",
  },
  {
    value: "jea",
    title: "Just-Enough-Access (JEA)",
    content: "A modern evolution of the Principle of Least Privilege (PoLP). JEA dictates that identities should be granted permissions not only with the minimum privilege but also for the minimum time required to complete a task. For AI agents, this means dynamically generating credentials and permissions that are valid only for a specific operation and expire immediately after, often called 'just-in-time' access."
  },
  {
    value: "jwt",
    title: "JSON Web Token (JWT)",
    content: "A compact, URL-safe standard for creating access tokens that assert a number of claims. A JWT is digitally signed, allowing the receiver to verify its authenticity and integrity. Often used in OAuth 2.0 and OIDC flows.",
  },
  {
    value: "lifecycle",
    title: "Identity Lifecycle Management",
    content: "This refers to the complete process of managing an agent's identity from creation to deletion. It includes provisioning (creating the identity and initial permissions), maintenance (updating attributes or roles), and de-provisioning (securely revoking access and deleting the identity when the agent is retired). Automating this lifecycle is crucial for security and operational efficiency.",
  },
  {
    value: "mfa",
    title: "Multi-Factor Authentication (MFA)",
    content: "MFA is a security practice that requires more than one method of authentication from independent categories of credentials to verify the user's identity. For critical agent actions, a form of MFA could be implemented, such as requiring a time-based one-time password (TOTP) or a secondary approval from a human supervisor.",
  },
  {
    value: "mtls",
    title: "mTLS (Mutual TLS)",
    content: "Mutual Transport Layer Security. A method of mutual authentication where both parties in a network connection (e.g., two agents) validate each other's certificates before establishing a secure communication channel.",
  },
  {
    value: "multi-tenancy",
    title: "Multi-Tenant Agent Platform",
    content: "In a multi-tenant platform, multiple customers (tenants) and their agents co-exist on shared infrastructure. Strong IAM is essential to enforce strict isolation between tenants, ensuring that one tenant's agents cannot access the data or resources of another. This involves tenant-specific roles, permissions, and data encryption keys.",
  },
  {
    value: "oauth2",
    title: "OAuth 2.0",
    content: "An authorization framework that enables applications (like AI agents) to obtain limited access to user accounts on an HTTP service. It delegates authorization from the user to the application without sharing credentials.",
  },
  {
    value: "obo",
    title: "On-Behalf-Of (OBO) Flow",
    content: "A specific type of delegation where an application or agent needs to call a downstream service while acting on behalf of a user. The agent authenticates the user and then uses that user's identity to obtain a separate, delegated token to access the downstream service. This ensures that the downstream service can enforce permissions based on the original user's rights, maintaining a clear chain of identity."
  },
  {
    value: "oidc",
    title: "OpenID Connect (OIDC)",
    content: "An identity layer built on top of the OAuth 2.0 framework. It allows clients to verify the identity of the end-user based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the end-user.",
  },
  {
    value: "opa",
    title: "OPA (Open Policy Agent)",
    content: "An open-source, general-purpose policy engine that enables you to decouple policy decision-making from your service's code. Used for fine-grained, context-aware authorization.",
  },
  {
    value: "polp",
    title: "Principle of Least Privilege (PoLP)",
    content: "This is a fundamental security principle which dictates that an identity should only be granted the minimum permissions necessary to perform its required tasks. For AI agents, this is crucial to limit the potential damage if an agent is compromised or behaves unexpectedly. Permissions should be fine-grained and time-bound whenever possible.",
  },
  {
    value: "rbac",
    title: "RBAC (Role-Based Access Control)",
    content: "An access control model where permissions are assigned to roles, and users (or agents) are assigned to roles, inheriting their permissions. It is simpler than ABAC but less flexible.",
  },
  {
    value: "saml",
    title: "Security Assertion Markup Language (SAML)",
    content: "An open standard for exchanging authentication and authorization data between parties, in particular, between an identity provider and a service provider. Commonly used in enterprise single sign-on (SSO) scenarios.",
  },
  {
    value: "scope",
    title: "Scope",
    content: "In OAuth 2.0, scopes are used to specify the exact permissions an application is requesting. For example, 'read:email' or 'write:calendar'. This aligns with the Principle of Least Privilege.",
  },
  {
    value: "sso",
    title: "Single Sign-On (SSO)",
    content: "SSO allows a user to log in with a single set of credentials to gain access to multiple related, yet independent, software systems. While typically user-centric, the principles can be adapted for agents that need to interact with various services within a trusted domain, simplifying credential management.",
  },
  {
    value: "verifiable-credentials",
    title: "Verifiable Credentials",
    content: "VCs are a W3C standard for tamper-evident, machine-verifiable digital credentials. An issuer (e.g., a university) can issue a credential (e.g., a diploma) to a holder (e.g., a person or agent), who can then present it to a verifier (e.g., an employer) to prove a claim. For agents, VCs can be used to prove attributes like their capabilities, training data provenance, or authorization from their owner, in a decentralized and privacy-preserving way.",
  },
  {
    value: "zero-trust",
    title: "Zero Trust Architecture (ZTA)",
    content: "A security model built on the principle of 'never trust, always verify.' It eliminates the idea of a trusted internal network and an untrusted external network. Every access request is treated as if it originates from an untrusted source and must be strictly authenticated, authorized, and encrypted before access is granted. For agents, this means they must continuously re-verify their identity and authorization for every interaction."
  },
];

const Concepts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedConceptsAndTerms = conceptsAndTerms.sort((a, b) => a.title.localeCompare(b.title));

  const filteredConceptsAndTerms = sortedConceptsAndTerms.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">Core Concepts</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Explore the fundamental building blocks of Identity and Access Management, tailored for the world of Agentic AI. This comprehensive guide includes core concepts, terminology, and essential IAM definitions.
      </p>
      <div className="mt-8 max-w-3xl">
        <Input
          type="text"
          placeholder="Search concepts and terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-6"
        />
        <Accordion type="single" collapsible className="w-full">
          {filteredConceptsAndTerms.map((item) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger className="text-xl text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Concepts;
