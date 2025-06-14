
const EphemeralCredentials = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">
        Challenge: Ephemeral Credentials
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Issuing short-lived, single-use credentials for agents that may only exist for seconds.
      </p>

      <div className="mt-8 space-y-6 text-base md:text-lg">
        <p>
          AI agents, especially those in serverless or containerized environments, can be incredibly transient. An agent might be spun up to perform a single task and then be destroyed, all within a matter of seconds. In such a dynamic environment, traditional long-lived credentials like API keys or static passwords represent a significant security risk. If compromised, they provide a persistent window of opportunity for an attacker.
        </p>
        <h2 className="text-2xl font-semibold pt-4">The Principle of Just-in-Time Access</h2>
        <p>
          Ephemeral credentials embody the principle of "just-in-time" access. Instead of pre-provisioning agents with credentials they might need, the credentials are created on-demand, for a specific purpose, and with a very short lifespan (Time-to-Live, or TTL).
        </p>
        <p>
          This approach dramatically reduces the attack surface. Even if a credential were to be intercepted, its value is minimal because it expires within seconds or minutes, and it's likely scoped to a very narrow set of permissions.
        </p>
        <h2 className="text-2xl font-semibold pt-4">How it Works</h2>
        <p>
          Issuing ephemeral credentials typically relies on a trusted identity provider or a secure vault. The process looks something like this:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>An agent authenticates itself to an identity provider using its primary identity (e.g., a workload identity like SPIFFE).</li>
          <li>The agent requests a temporary credential for a specific task (e.g., "read from database X").</li>
          <li>The identity provider, after validating the request, generates a short-lived, narrowly scoped credential (like an OAuth 2.0 token or a temporary cloud IAM role).</li>
          <li>The agent uses this credential to perform its task.</li>
          <li>The credential automatically expires after its short TTL.</li>
        </ul>
        <p>
          This model eliminates the need to manage, rotate, or revoke static secrets, leading to a more secure and automated operational posture.
        </p>
      </div>
    </div>
  );
};

export default EphemeralCredentials;
