import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AgenticIAMvsIAMForAgenticAI = () => {
  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <h1 className="text-4xl font-bold tracking-tight">Agentic IAM vs. IAM for Agentic AI</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Understanding the critical distinction between using AI to enhance IAM systems versus managing AI agents as digital entities that require governance and access control.
      </p>

      <div className="mt-12">
        <h2 className="text-3xl font-bold">The Key Distinction</h2>
        <div className="mt-6 space-y-8">
          <div className="border-l-4 border-blue-500 pl-6 bg-blue-50/50 py-4 rounded-r-lg">
            <h3 className="font-semibold text-xl text-blue-900">Agentic IAM</h3>
            <p className="mt-2 text-blue-800">
              Refers to Identity and Access Management systems that themselves use AI agents to enhance and automate IAM processes. This includes AI-powered user provisioning, automated access reviews, intelligent threat detection in access patterns, and self-healing permission systems,
              as well as AI-assisted developer and user experience enhancements.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-blue-900">Examples:</h4>
              <ul className="mt-2 space-y-1 text-sm text-blue-800">
                <li>• AI that automatically provisions user accounts based on HR data</li>
                <li>• Machine learning models that detect anomalous access patterns</li>
                <li>• Automated access certification and review processes</li>
                <li>• Intelligent role mining and RBAC optimization</li>
                <li>• Copilots for configuring and managing IAM policies</li>
              </ul>
            </div>
          </div>
          
          <div className="border-l-4 border-primary pl-6 bg-primary/5 py-4 rounded-r-lg">
            <h3 className="font-semibold text-xl">IAM for Agentic AI <span className="text-sm font-normal text-primary">(Our Focus)</span></h3>
            <p className="mt-2 text-muted-foreground">
              Refers to managing the identity and access rights of AI agents themselves. This is about treating AI agents as digital identities that need proper authentication, authorization, and governance. How do we securely identify an AI agent? What resources should it access? How do we audit its actions?
            </p>
            <div className="mt-4">
              <h4 className="font-medium">Examples:</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Issuing digital certificates or API keys to AI agents</li>
                <li>• Defining permissions for different types of agents</li>
                <li>• Implementing just-in-time access for agent operations</li>
                <li>• Enabling explicit user consent and human-in-the-loop verification</li>
                <li>• Auditing and monitoring agent activities across systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Why IAM is Critical for Agentic AI?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Understanding why proper Identity and Access Management patterns are essential from the beginning when building agentic AI systems. Learn about security by design, scalability, compliance, and the unique challenges that autonomous AI agents present.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to="/why-iam-is-critical-for-agentic-ai">
                Explore Why IAM is Critical <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>The Agent Identity Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              One of the most fundamental challenges in securing agentic AI systems is establishing a trustworthy identity for non-human entities. Unlike traditional users, AI agents operate autonomously without inherent physical identity markers, making authentication and authorization uniquely complex.
            </p>
            <p className="text-muted-foreground">
              Learn about the core challenges of agent identity management, from establishing trust chains to managing permissions for entities that may only exist for seconds.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to="/agent-identity-problem">
                Explore the Agent Identity Problem <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div> */}
    </div>
  );
};

export default AgenticIAMvsIAMForAgenticAI;
