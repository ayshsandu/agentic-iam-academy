
import { Link } from "react-router-dom";

const AgentLifecycleManagement = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="mb-8">
        <Link to="/iam-challenges" className="text-sm text-primary hover:underline">
          &larr; Back to IAM Challenges
        </Link>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Agent Lifecycle Management
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Securely creating, managing, and decommissioning agents.
        </p>
      </div>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">An Agent's Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Just like employees, AI agents have a lifecycle. They are created (onboarded), they perform their duties, their permissions might change over time, and eventually, they are decommissioned (offboarded). Managing this entire lifecycle securely is a critical IAM function.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Challenges in Managing Agent Lifecycles</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The sheer number and ephemeral nature of agents can make manual lifecycle management impossible. An organization might deploy thousands of specialized agents, some of which may only exist for a few seconds. This requires a highly automated and policy-driven approach.
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Phases of Agent Lifecycle Management</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-muted-foreground">
              <li><span className="font-semibold">Creation/Onboarding:</span> Securely bootstrapping an agent's identity, assigning initial permissions based on its role, and provisioning necessary credentials.</li>
              <li><span className="font-semibold">Operational Management:</span> Modifying permissions as the agent's role evolves, rotating credentials, and monitoring its activity.</li>
              <li><span className="font-semibold">Decommissioning/Offboarding:</span> When an agent is no longer needed, it's crucial to completely and irrevocably terminate its identity and all associated permissions and credentials to prevent orphaned accounts.</li>
              <li><span className="font-semibold">Dormancy:</span> Handling agents that are temporarily inactive, perhaps by suspending their permissions until they are needed again.</li>
            </ul>
        </section>

        <section>
            <p className="mt-4 text-lg text-muted-foreground">
              Effective agent lifecycle management prevents the accumulation of stale, over-privileged accounts that are a common target for attackers. It ensures that the principle of least privilege is maintained throughout an agent's entire existence.
            </p>
        </section>
      </div>
    </div>
  );
};

export default AgentLifecycleManagement;
