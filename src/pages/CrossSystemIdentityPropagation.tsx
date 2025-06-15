
const CrossSystemIdentityPropagation = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <article className="prose prose-lg dark:prose-invert">
        <h1>Cross-System Identity Propagation</h1>
        <p className="text-xl text-muted-foreground">
          Securely propagating an agent's identity and context across different services and platforms.
        </p>
        <p>
          Modern applications are rarely monolithic. An AI agent often needs to interact with multiple downstream services, APIs, and databases to complete a task. Cross-system identity propagation is the challenge of ensuring that the agent's original, verifiable identity and contextual information (like the user it's acting for) are securely passed along at each step of this distributed workflow.
        </p>
        <h2>The Broken Telephone Problem</h2>
        <p>
          Without proper identity propagation, each service in the chain only sees the identity of the service immediately calling it. This breaks the end-to-end audit trail and makes authorization decisions difficult. For example, a database might see a request from a "billing-service" agent but has no way of knowing that this request originated from a specific AI assistant acting on behalf of "user-123".
        </p>
        <h2>Key Technologies and Standards:</h2>
        <ul>
          <li><strong>OAuth 2.0 Token Exchange:</strong> A standard for exchanging one type of security token for another, allowing an identity to be securely passed between services.</li>
          <li><strong>JSON Web Tokens (JWTs):</strong> Signed tokens that can carry claims about the agent's identity and the user context, which can be verified by downstream services.</li>
          <li><strong>OpenID Connect (OIDC):</strong> A protocol built on top of OAuth 2.0 that provides standardized identity information.</li>
          <li><strong>Distributed Tracing Headers:</strong> While not a security mechanism itself, standards like W3C Trace Context can help correlate requests across services for observability.</li>
        </ul>
        <p>
          Solving this challenge is essential for maintaining security, observability, and accountability in complex, multi-service agentic systems.
        </p>
      </article>
    </div>
  );
};

export default CrossSystemIdentityPropagation;

