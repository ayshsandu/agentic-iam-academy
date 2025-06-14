
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const terms = [
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
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">Glossary</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A comprehensive A-Z dictionary of IAM terms and acronyms to help you
        navigate the jargon.
      </p>
      <div className="mt-8 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {terms.sort((a, b) => a.title.localeCompare(b.title)).map((term) => (
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
