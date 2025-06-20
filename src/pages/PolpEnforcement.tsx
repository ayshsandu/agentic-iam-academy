
import { Link } from "react-router-dom";

const PolpEnforcement = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="mb-8">
        <Link to="/iam-challenges" className="text-sm text-primary hover:underline">
          &larr; Back
        </Link>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Principle of Least Privilege (PoLP) Enforcement
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ensuring agents have the minimum level of access required to perform their tasks.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">What is PoLP?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The Principle of Least Privilege (PoLP) is a foundational concept in information security. It dictates that any user, program, or process—including an AI agent—should have only the bare minimum privileges necessary to perform its function. The goal is to limit the potential damage that can be caused by accident, error, or a security breach.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight">PoLP in the Age of Agentic AI</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            In an agentic architecture, where agents can autonomously access data and execute actions, enforcing PoLP is more critical and complex than ever. An over-privileged agent represents a significant security risk. If compromised, it provides an attacker with a powerful foothold inside the system.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Key Aspects of PoLP Enforcement for Agents</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-muted-foreground">
            <li><span className="font-semibold">Fine-Grained Permissions:</span> Moving beyond simple read/write roles to define specific actions an agent can take on specific resources (e.g., "can read customer_email but not customer_pii").</li>
            <li><span className="font-semibold">Context-Aware Policies:</span> Permissions are not static; they can change based on context like time of day, agent's location, or the data being accessed.</li>
            <li><span className="font-semibold">Default-Deny Stance:</span> An agent should have no permissions by default. Access must be explicitly granted.</li>
            <li><span className="font-semibold">Regular Access Reviews:</span> Periodically reviewing and attesting to an agent's permissions to ensure they are still necessary and appropriate.</li>
          </ul>
        </section>
        
        <section>
            <p className="mt-4 text-lg text-muted-foreground">
              Enforcing PoLP requires a centralized authorization system that can manage and evaluate complex permission models, and it works hand-in-hand with concepts like <Link to="/jit-access" className="font-semibold text-primary hover:underline">Just-in-Time (JIT) access</Link> to provide a layered defense.
            </p>
        </section>
      </div>
    </div>
  );
};

export default PolpEnforcement;
