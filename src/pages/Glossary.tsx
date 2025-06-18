
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const terms = [
  {
    value: "abac",
    title: "ABAC (Attribute-Based Access Control)",
    content: "An access control model where authorization decisions are based on attributes associated with the subject, object, resource, and environment, evaluated against policies. It allows for highly granular and context-aware permissions.",
  },
  {
    value: "api-key",
    title: "API Key",
    content: "A simple secret token used to authenticate a client (like an agent) with an API. While easy to use, they are often long-lived and less secure than token-based authentication like OAuth 2.0.",
  },
  {
    value: "bearer-token",
    title: "Bearer Token",
    content: "A type of security token where the 'bearer' (the one holding the token) can access protected resources without needing to prove their identity further. Possession of the token is sufficient for access, making its security paramount.",
  },
  {
    value: "jwt",
    title: "JSON Web Token (JWT)",
    content: "A compact, URL-safe standard for creating access tokens that assert a number of claims. A JWT is digitally signed, allowing the receiver to verify its authenticity and integrity. Often used in OAuth 2.0 and OIDC flows.",
  },
  {
    value: "mtls",
    title: "mTLS (Mutual TLS)",
    content: "Mutual Transport Layer Security. A method of mutual authentication where both parties in a network connection (e.g., two agents) validate each other's certificates before establishing a secure communication channel.",
  },
  {
    value: "oauth2",
    title: "OAuth 2.0",
    content: "An authorization framework that enables applications (like AI agents) to obtain limited access to user accounts on an HTTP service. It delegates authorization from the user to the application without sharing credentials.",
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
];


const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedTerms = terms.sort((a, b) => a.title.localeCompare(b.title));

  const filteredTerms = sortedTerms.filter(
    (term) =>
      term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">Glossary</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A comprehensive A-Z dictionary of IAM terms and acronyms to help you
        navigate the jargon.
      </p>
      <div className="mt-8 max-w-3xl">
        <Input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-6"
        />
        <Accordion type="single" collapsible className="w-full">
          {filteredTerms.map((term) => (
            <AccordionItem value={term.value} key={term.value}>
              <AccordionTrigger className="text-xl text-left">
                {term.title}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {term.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Glossary;
