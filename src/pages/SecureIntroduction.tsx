
import { Link } from "react-router-dom";

const SecureIntroduction = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="mb-8">
        <Link to="/iam-challenges" className="text-sm text-primary hover:underline">
          &larr; Back
        </Link>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Challenge: Secure Introduction
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          How two agents, or an agent and a service, can establish a trusted relationship for the first time.
        </p>
      </div>
      <div className="mt-8 space-y-6 text-base md:text-lg">
        <p>
          When a new agent is deployed or needs to communicate with a new service, how do they securely establish trust? This "secure introduction" problem, also known as bootstrapping trust, is a critical first step. Without a secure process, an attacker could impersonate a legitimate agent or service, leading to a man-in-the-middle (MITM) attack.
        </p>
        <h2 className="text-2xl font-semibold pt-4">The Trust Anchor</h2>
        <p>
          The solution relies on a common "trust anchor" - a system that both parties already trust. This could be a cloud provider's metadata service, a Kubernetes API server, or a dedicated identity provider. The trust anchor is responsible for vetting the identity of each party and issuing a cryptographic identity document, such as an X.509 certificate or a JWT.
        </p>
        <h2 className="text-2xl font-semibold pt-4">Common Approaches</h2>
        <p>
          Several approaches can be used to solve the secure introduction problem:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Certificate Authority (CA) based systems:</strong> A trusted CA issues certificates to agents, which can then be used for mutual authentication.</li>
          <li><strong>Cloud provider identity services:</strong> Services like AWS IAM Roles, Azure Managed Identity, or Google Cloud Service Accounts can provide cryptographic identity documents.</li>
          <li><strong>Hardware Security Modules (HSMs):</strong> For high-security environments, HSMs can provide tamper-resistant identity storage and cryptographic operations.</li>
          <li><strong>Distributed identity frameworks:</strong> Various open-source and commercial solutions provide standardized approaches to workload identity management.</li>
        </ul>
        <p>
          When two agents need to communicate, they can present their cryptographic identity documents to each other. By validating these documents against the trust anchor's public key, they can establish a mutually authenticated and encrypted communication channel (mTLS) without needing any pre-configured secrets.
        </p>
      </div>
    </div>
  );
};

export default SecureIntroduction;
