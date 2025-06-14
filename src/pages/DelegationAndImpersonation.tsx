
const DelegationAndImpersonation = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">
        Challenge: Delegation & Impersonation
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        How an agent can safely act on behalf of a user, with clearly defined and auditable constraints.
      </p>

      <div className="mt-8 space-y-6 text-base md:text-lg">
        <p>
          Many AI agents are designed to perform tasks on behalf of human users. For example, an agent might schedule meetings, book travel, or manage cloud infrastructure. This introduces the challenge of delegation: how can a user grant an agent the authority to act on their behalf, but only for specific tasks and within strict boundaries?
        </p>
        <p>
          Unconstrained impersonation is a massive security risk. We need mechanisms that allow for safe, auditable delegation of authority.
        </p>

        <h2 className="text-2xl font-semibold pt-4">The OAuth 2.0 Framework</h2>
        <p>
          The OAuth 2.0 authorization framework provides a robust and widely adopted standard for handling delegation. While often associated with user-facing "Log in with Google" flows, its core concepts are perfectly suited for agentic systems.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Resource Owner:</strong> The user who is granting permission.</li>
          <li><strong>Client:</strong> The AI agent that wants to act on the user's behalf.</li>
          <li><strong>Authorization Server:</strong> The system that issues access tokens after getting the user's consent.</li>
          <li><strong>Resource Server:</strong> The API or service the agent wants to access (e.g., Google Calendar API).</li>
        </ul>
        <p>
          The key idea is that the agent never handles the user's password. Instead, it directs the user to the Authorization Server to approve the request. In return, the agent receives an access token, which is a credential that grants it specific, limited permissions (defined by "scopes") to the Resource Server.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Constraining the Agent</h2>
        <p>
          Effective delegation goes beyond just granting access. It requires fine-grained control and auditability.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Scopes:</strong> Scopes limit what the agent can do. Instead of full access, an agent might only get the `calendar:read` and `calendar:write` scopes, but not `calendar:delete`.</li>
          <li><strong>Audience Restriction:</strong> Access tokens should be "audience-restricted," meaning a token issued for API A cannot be used to access API B.</li>
          <li><strong>Token Exchange:</strong> Advanced flows like the token exchange grant type (RFC 8693) allow an agent to exchange a token it has for a new, more narrowly-scoped token to call a downstream service, preserving the identity of the original user throughout the call chain. This creates a clear audit trail.</li>
        </ul>
        <p>
          By combining these techniques, we can build systems where agents have just enough power to do their jobs, the user remains in control, and every action is traceable back to the initial delegation.
        </p>
      </div>
    </div>
  );
};

export default DelegationAndImpersonation;
