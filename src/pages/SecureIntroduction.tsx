
const SecureIntroduction = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">
        Challenge: Secure Introduction
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        How two agents, or an agent and a service, can establish a trusted relationship for the first time.
      </p>
      <div className="mt-8 space-y-6 text-base md:text-lg">
        <p>
          When a new agent is deployed or needs to communicate with a new service, how do they securely establish trust? This "secure introduction" problem, also known as bootstrapping trust, is a critical first step. Without a secure process, an attacker could impersonate a legitimate agent or service, leading to a man-in-the-middle (MITM) attack.
        </p>
        <h2 className="text-2xl font-semibold pt-4">The Trust Anchor</h2>
        <p>
          The solution relies on a common "trust anchor" - a system that both parties already trust. This could be a cloud provider's metadata service, a Kubernetes API server, or a dedicated identity provider. The trust anchor is responsible for vetting the identity of each party and issuing a cryptographic identity document, such as an X.509 certificate or a JWT.
        </p>
        <h2 className="text-2xl font-semibold pt-4">A Common Protocol: SPIFFE/SPIRE</h2>
        <p>
          The Secure Production Identity Framework for Everyone (SPIFFE) and its reference implementation, the SPIFFE Runtime Environment (SPIRE), provide an open-source standard for solving this problem.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>SPIRE Server:</strong> Acts as the trust anchor. It's responsible for attesting the identity of workloads (agents, services) and issuing SPIFFE Verifiable Identity Documents (SVIDs) to them.</li>
          <li><strong>SPIRE Agent:</strong> A daemon that runs on each node. It performs node and workload attestation, requests SVIDs from the server on behalf of workloads, and exposes them through a local API (the Workload API).</li>
          <li><strong>SVID:</strong> A cryptographic identity document (either an X.509 certificate or a JWT) that contains the agent's unique SPIFFE ID.</li>
        </ul>
        <p>
          When two agents need to communicate, they can present their SVIDs to each other. By validating the SVID against the trust anchor's public key, they can establish a mutually authenticated and encrypted communication channel (mTLS) without needing any pre-configured secrets.
        </p>
      </div>
    </div>
  );
};

export default SecureIntroduction;
