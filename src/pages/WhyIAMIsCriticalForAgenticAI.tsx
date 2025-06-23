import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WhyIAMIsCriticalForAgenticAI = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <div className="mb-8">
        <Link to="/agentic-iam-vs-iam-for-agentic-ai" className="text-sm text-primary hover:underline">
          &larr; Back to Agentic IAM vs. IAM for Agentic AI
        </Link>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Why IAM is Critical for Agentic AI?</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Thinking about proper Identity and Access Management (IAM) patterns from the beginning is crucial for several reasons:
        </p>
      </div>
        
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">🛡️ Security by Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              If you design IAM early, you reduce the risk of unauthorized access, data breaches, and privilege escalation. Retroactively adding IAM is much harder and often leaves gaps.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-700">📈 Scalability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              As your system grows (more users, AI agents, services), a well-structured IAM makes it easier to manage permissions and onboard new entities without chaos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-purple-700">📋 Auditability & Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Early IAM planning ensures you can track who did what, when, and why - which is essential for audits, regulatory compliance, and incident response.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-orange-700">🔒 Least Privilege Principle</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Starting with IAM lets you enforce least privilege from day one, so entities only get the access they need, nothing more.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-indigo-700">⚡ Operational Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Proper IAM patterns automate access reviews, provisioning, and de-provisioning, saving time and reducing human error.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🤖 AI Agent Complexity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For agentic AI, agents act autonomously and at scale. Without robust IAM, it's nearly impossible to control, monitor, or revoke their access safely.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 space-y-6">
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="text-red-700">⚠️ Gotcha</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-800">
              If you delay IAM design, you'll likely face technical debt, security holes, and costly refactoring later. For AI agents, this risk is even higher due to their autonomy and speed.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">💡 Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Start with IAM to ensure your system is secure, manageable, and compliant as it evolves, especially when dealing with autonomous AI agents.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Business Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Consider the consequences of poor IAM design in agentic AI systems:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 bg-red-50/50 py-2 rounded-r">
                <h4 className="font-semibold text-red-900">Data Breaches</h4>
                <p className="text-sm text-red-800">An overprivileged AI agent could access and exfiltrate sensitive customer data, leading to regulatory fines and reputation damage.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50/50 py-2 rounded-r">
                <h4 className="font-semibold text-orange-900">Financial Loss</h4>
                <p className="text-sm text-orange-800">A compromised trading agent with excessive permissions could make unauthorized transactions, resulting in significant financial losses.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50/50 py-2 rounded-r">
                <h4 className="font-semibold text-yellow-900">Compliance Violations</h4>
                <p className="text-sm text-yellow-800">Without proper audit trails, organizations cannot demonstrate compliance with regulations like GDPR, SOX, or HIPAA.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50/50 py-2 rounded-r">
                <h4 className="font-semibold text-blue-900">Operational Chaos</h4>
                <p className="text-sm text-blue-800">As the number of agents grows without proper IAM, managing permissions becomes unmanageable, leading to security gaps and operational inefficiencies.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Now that you understand why IAM is critical for agentic AI, explore the specific challenges and solutions:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline">
                <Link to="/iam-challenges">
                  Explore IAM Challenges <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild>
                <Link to="/concepts">
                  Learn Core Concepts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhyIAMIsCriticalForAgenticAI;
