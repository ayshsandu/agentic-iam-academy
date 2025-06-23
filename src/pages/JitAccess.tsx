
import { Link } from "react-router-dom";

const JitAccess = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="mb-8">
        <Link to="/iam-challenges" className="text-sm text-primary hover:underline">
          &larr; Back
        </Link>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Just-in-Time (JIT) Access
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Dynamically providing access to resources for a limited time, only when needed.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">The Problem: Standing Privileges</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Just-in-Time (JIT) access is a security model that dramatically reduces the standing permissions available to any user or system, 
            including AI agents. Instead of granting long-lived, persistent access, JIT grants temporary, elevated permissions on-demand to perform a specific task.
            Once the task is complete, the access is automatically revoked.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Why JIT is Crucial for Agentic AI</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            For autonomous agents that may operate with little direct supervision, JIT access is a critical safeguard. 
            It minimizes the attack surface by ensuring that an agent or an attacker who compromises it, only has elevated privileges for the briefest possible moment. 
            This contains the potential damage from a compromised agent.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Key Aspects of JIT Access for Agents</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-muted-foreground">
            <li>
                <span className="font-semibold">On-Demand Provisioning:</span> Access is granted programmatically based on a specific, verified need.
            </li>
            <li>
                <span className="font-semibold">Time-Bound Access:</span> Permissions expire automatically after a pre-defined duration.
            </li>
            <li>
                <span className="font-semibold">Scope Limitation:</span> The granted access is narrowly scoped to only the resources required for the specific task.
            </li>
            <li>
                <span className="font-semibold">Full Audit Trail:</span> Every JIT access request, grant, and revocation is logged for security and compliance review.
            </li>
          </ul>
        </section>

        <section>
            <p className="mt-4 text-lg text-muted-foreground">
              Implementing a robust JIT access system requires a sophisticated policy engine that can evaluate requests in real-time, based on the agent's identity, the context of the request, and the sensitivity of the resource. This works closely with <Link to="/dynamic-authorization" className="font-semibold text-primary hover:underline">Dynamic Authorization</Link>.
            </p>
        </section>
      </div>
    </div>
  );
};

export default JitAccess;
