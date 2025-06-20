
const About = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">
        About IAM for Agentic AI Knowledge Hub
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Empowering developers with knowledge to build secure and intelligent AI systems.
      </p>

      <div className="mt-8 space-y-6 text-base md:text-lg">
        <p>
          The rise of agentic AI systems introduces new and complex challenges for
          Identity and Access Management (IAM). Traditional IAM models were not
          designed for autonomous, non-human entities that act on behalf of
          users or organizations. IAM for Agentic AI Knowledge Hub was created to bridge this
          gap.
        </p>
        <p>
          Our mission is to provide developers, architects, and security
          professionals with a comprehensive, open-source resource for
          understanding and implementing robust IAM solutions for AI agents. We
          believe that secure AI starts with a strong identity foundation.
        </p>
        <h2 className="text-2xl font-semibold pt-4">Our Focus</h2>
        <p>
          This knowledge hub focuses on practical, developer-centric guidance. We
          delve into:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Core Concepts:</strong> Breaking down the fundamental
            principles of IAM and adapting them for agentic architectures.
          </li>
          <li>
            <strong>Best Practices:</strong> Offering actionable advice and
            industry standards for securing AI agents and their interactions.
          </li>
          <li>
            <strong>Real-World Scenarios:</strong> Exploring common use cases and
            providing patterns for solving them.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold pt-4">Why This Matters</h2>
        <p>
          As AI agents become more integrated into our digital lives and business
          processes, ensuring they operate securely and within their intended
          boundaries is paramount. A compromised AI agent could lead to data
          breaches, financial loss, or misuse of critical systems. By mastering
          IAM for agentic AI, developers can build innovative applications that are
          not only powerful but also trustworthy and secure.
        </p>
        <h2 className="text-2xl font-semibold pt-4">Get Involved</h2>
        <p>
          This project is open-source and community-driven. We welcome
          contributions, feedback, and discussions. Visit our{" "}
          <a
            href="https://github.com/ayshsandu/iam-for-agentic-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline hover:no-underline"
          >
            GitHub repository
          </a>{" "}
          to learn more about how you can contribute to this important work.
        </p>
      </div>
    </div>
  );
};

export default About;
