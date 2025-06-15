
import { Link } from "react-router-dom";

const SupplyChainSecurityForAgents = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="mb-8">
        <Link to="/iam-challenges" className="text-sm text-primary hover:underline">
          &larr; Back to IAM Challenges
        </Link>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Supply Chain Security for Agents
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Verifying the integrity and origin of the agent's code and its dependencies.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">What is Supply Chain Security?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            An AI agent is software, and like any software, it is built from source code, libraries, and dependencies. The "software supply chain" refers to everything that goes into building and running this software. Securing this supply chain is critical to ensure that the agent itself has not been tampered with or does not contain malicious components.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Why is this a unique challenge for agents?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The dynamic nature of agents, which can be updated frequently or even constructed on-the-fly, makes supply chain security even more important. A compromised dependency could lead to an agent that exfiltrates data, performs unauthorized actions, or provides a backdoor for attackers.
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Key Aspects of Agent Supply Chain Security</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-muted-foreground">
              <li><span className="font-semibold">Code Signing:</span> Cryptographically signing the agent's code to ensure it hasn't been altered since it was published by a trusted developer.</li>
              <li><span className="font-semibold">Dependency Scanning:</span> Automatically scanning all third-party libraries and packages for known vulnerabilities (CVEs).</li>
              <li><span className="font-semibold">Software Bill of Materials (SBOM):</span> Maintaining a complete inventory of all components that make up the agent, which is crucial for responding to new vulnerabilities.</li>
              <li><span className="font-semibold">Secure Build Pipelines:</span> Ensuring the CI/CD pipeline that builds and deploys the agent is itself secure from tampering.</li>
              <li><span className="font-semibold">Verified Provenance:</span> Using frameworks like SLSA (Supply-chain Levels for Software Artifacts) to generate verifiable metadata about how the agent was built.</li>
            </ul>
        </section>
        
        <section>
            <p className="mt-4 text-lg text-muted-foreground">
              By securing the supply chain, we can have greater confidence that the agent running in our environment is the agent we intended to run, free from malicious modifications.
            </p>
        </section>
      </div>
    </div>
  );
};

export default SupplyChainSecurityForAgents;
