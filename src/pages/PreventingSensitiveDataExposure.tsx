
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { ScanText, FileCog } from "lucide-react";
  import { Link } from "react-router-dom";
  
  const PreventingSensitiveDataExposure = () => {
    return (
      <div className="container max-w-4xl py-8 md:py-12">
        <div className="mb-8">
          <Link to="/iam-challenges" className="text-sm text-primary hover:underline">
            &larr; Back
          </Link>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Preventing Sensitive Data Exposure to LLMs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            How to ensure that prompts sent to third-party LLM providers are
            sanitized of Personally Identifiable Information (PII) and other
            confidential data.
          </p>
        </div>
  
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">
              The Problem: Leaky Prompts
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Autonomous agents frequently leverage Large Language Models (LLMs) for
              reasoning, summarization, and content generation. When an agent sends a
              prompt containing a user's personal details, company trade secrets,
              or other confidential information to a third-party LLM service (like
              OpenAI's GPT or Google's Gemini), that data can be logged, stored,
              and potentially used to train future models. This creates a massive
              risk of data leakage, privacy violations, and non-compliance with
              regulations like GDPR and HIPAA.
            </p>
          </section>
  
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">
              The Goal: Anonymize and Control
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We need to enable agents to use powerful third-party LLMs without
              exposing sensitive internal data. The goal is to build a "privacy
              firewall" that allows the agent to get the intelligence it needs while
              keeping confidential information secure within our trust boundary.
            </p>
          </section>
  
          <section>
            <h2 className="text-3xl font-semibold tracking-tight">
              Key Solution Patterns
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <ScanText className="h-6 w-6" />
                    </div>
                    <CardTitle>Data Sanitization Proxy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Route all outgoing LLM requests through a proxy service. This service inspects prompts for sensitive data using techniques like Named Entity Recognition (NER). It can then redact, replace, or pseudonymize the data before forwarding the prompt to the LLM. The proxy then de-anonymizes the LLM's response before returning it to the agent.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FileCog className="h-6 w-6" />
                    </div>
                    <CardTitle>Self-Hosted & Private LLMs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For maximum security, avoid third-party services entirely by hosting your own open-source LLMs (e.g., Llama 3, Mistral) on private infrastructure. While this requires more resources, it provides complete control over the data and model, eliminating the risk of third-party data exposure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default PreventingSensitiveDataExposure;
