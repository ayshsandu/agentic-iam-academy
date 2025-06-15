
import { Link } from "react-router-dom";

const CrossSystemIdentityPropagation = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="mb-8">
        <Link to="/iam-challenges" className="text-sm text-primary hover:underline">
          &larr; Back to IAM Challenges
        </Link>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Cross-System Identity Propagation
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Securely propagating an agent's identity and context across different services and platforms.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">The Challenge: Distributed Systems</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Modern applications are rarely monolithic. An AI agent often needs to interact with multiple downstream services, APIs, and databases to complete a task. Cross-system identity propagation is the challenge of ensuring that the agent's original, verifiable identity and contextual information (like the user it's acting for) are securely passed along at each step of this distributed workflow.
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">The "Broken Telephone" Problem</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Without proper identity propagation, each service in the chain only sees the identity of the service immediately calling it. This breaks the end-to-end audit trail and makes authorization decisions difficult. For example, a database might see a request from a "billing-service" agent but has no way of knowing that this request originated from a specific AI assistant acting on behalf of "user-123".
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Key Technologies and Standards</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-muted-foreground">
              <li><span className="font-semibold">OAuth 2.0 Token Exchange:</span> A standard for exchanging one type of security token for another, allowing an identity to be securely passed between services.</li>
              <li><span className="font-semibold">JSON Web Tokens (JWTs):</span> Signed tokens that can carry claims about the agent's identity and the user context, which can be verified by downstream services.</li>
              <li><span className="font-semibold">OpenID Connect (OIDC):</span> A protocol built on top of OAuth 2.0 that provides standardized identity information.</li>
              <li><span className="font-semibold">Distributed Tracing Headers:</span> While not a security mechanism itself, standards like W3C Trace Context can help correlate requests across services for observability.</li>
            </ul>
        </section>

        <section>
            <p className="mt-4 text-lg text-muted-foreground">
              Solving this challenge is essential for maintaining security, observability, and accountability in complex, multi-service agentic systems.
            </p>
        </section>
      </div>
    </div>
  );
};

export default CrossSystemIdentityPropagation;
