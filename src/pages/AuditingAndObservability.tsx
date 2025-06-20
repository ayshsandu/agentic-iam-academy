
import { Link } from "react-router-dom";

const AuditingAndObservability = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="mb-8">
        <Link to="/iam-challenges" className="text-sm text-primary hover:underline">
          &larr; Back
        </Link>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Challenge: Auditing & Observability
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Maintaining a comprehensive, tamper-proof log of every action an agent takes.
        </p>
      </div>

      <div className="mt-8 space-y-6 text-base md:text-lg">
        <p>
          When an autonomous agent takes an action, who is responsible? How can you prove what an agent did, and why? Without a reliable audit trail, troubleshooting errors, investigating security incidents, and ensuring compliance becomes impossible.
        </p>
        <p>
          Auditing in an agentic world is not just about logging events. It's about creating a cryptographically verifiable, tamper-proof record that links every action back to a specific agent identity, the authority under which it was operating, and the context of the decision.
        </p>
        <h2 className="text-2xl font-semibold pt-4">What to Log?</h2>
        <p>
          A meaningful audit log for an agent should capture:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Who:</strong> The strong, verifiable identity of the agent that performed the action (e.g., its SPIFFE ID).</li>
          <li><strong>What:</strong> The specific action that was taken (e.g., `CreateVM`, `UpdateDatabaseRecord`).</li>
          <li><strong>When:</strong> A secure, synchronized timestamp of when the event occurred.</li>
          <li><strong>Where:</strong> The resource or object that was affected.</li>
          <li><strong>Why:</strong> The authority for the action. Was it acting on behalf of a user? If so, which user? What were the scopes of the token it used?</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">Ensuring Log Integrity</h2>
        <p>
          Logs are only useful if they can be trusted. Attackers will often try to cover their tracks by altering or deleting log entries. Several techniques can be used to create tamper-proof logs:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Log Signing:</strong> Services can cryptographically sign their log entries, so any modification can be detected.</li>
          <li><strong>Immutable Ledgers:</strong> Using technologies like transparency logs (e.g., Sigstore's Rekor) or blockchains, logs can be structured in a way that makes tampering computationally infeasible.</li>
          <li><strong>Secure Log Aggregation:</strong> Centralizing logs in a secure, write-only system limits the ability of a compromised component to erase its own history.</li>
        </ul>
        <p>
          By combining comprehensive logging with strong integrity guarantees, we build the foundation for observability, which allows us to not only see what happened but also to understand the behavior of our complex, agent-driven systems.
        </p>
      </div>
    </div>
  );
};

export default AuditingAndObservability;
