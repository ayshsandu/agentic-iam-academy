
const JitAccess = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <article className="prose prose-lg dark:prose-invert">
        <h1>Just-in-Time (JIT) Access</h1>
        <p className="text-xl text-muted-foreground">
          Dynamically providing access to resources for a limited time, only when needed.
        </p>
        <p>
          Just-in-Time (JIT) access is a security model that dramatically reduces the standing permissions available to any user or system, including AI agents. Instead of granting long-lived, persistent access, JIT grants temporary, elevated permissions on-demand to perform a specific task. Once the task is complete, the access is automatically revoked.
        </p>
        <h2>Why JIT is Crucial for Agentic AI</h2>
        <p>
          For autonomous agents that may operate with little direct supervision, JIT access is a critical safeguard. It minimizes the attack surface by ensuring that an agent—or an attacker who compromises it—only has elevated privileges for the briefest possible moment. This contains the potential damage from a compromised agent.
        </p>
        <h2>Key Aspects of JIT Access for Agents:</h2>
        <ul>
          <li><strong>On-Demand Provisioning:</strong> Access is granted programmatically based on a specific, verified need.</li>
          <li><strong>Time-Bound Access:</strong> Permissions expire automatically after a pre-defined duration.</li>
          <li><strong>Scope Limitation:</strong> The granted access is narrowly scoped to only the resources required for the specific task.</li>
          <li><strong>Full Audit Trail:</strong> Every JIT access request, grant, and revocation is logged for security and compliance review.</li>
        </ul>
        <p>
          Implementing a robust JIT access system requires a sophisticated policy engine that can evaluate requests in real-time, based on the agent's identity, the context of the request, and the sensitivity of the resource.
        </p>
      </article>
    </div>
  );
};

export default JitAccess;

