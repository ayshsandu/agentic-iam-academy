
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Concepts from "./pages/Concepts";
import BestPractices from "./pages/BestPractices";
import Glossary from "./pages/Glossary";
import About from "./pages/About";
import Scenarios from "./pages/Scenarios";
import WhatIsAgenticAI from "./pages/WhatIsAgenticAI";
import WhyIAMMatters from "./pages/WhyIAMMatters";
import AgentIdentityProblem from "./pages/AgentIdentityProblem";
import IamChallenges from "./pages/IamChallenges";
import DynamicAuthorization from "./pages/DynamicAuthorization";
import EphemeralCredentials from "./pages/EphemeralCredentials";
import SecureIntroduction from "./pages/SecureIntroduction";
import DelegationAndImpersonation from "./pages/DelegationAndImpersonation";
import AuditingAndObservability from "./pages/AuditingAndObservability";
import SecuringSecretsAndTokens from "./pages/SecuringSecretsAndTokens";
import PreventingSensitiveDataExposure from "./pages/PreventingSensitiveDataExposure";
import TerminatingCompromisedAgentAccess from "./pages/TerminatingCompromisedAgentAccess";
import JitAccess from "./pages/JitAccess";
import PolpEnforcement from "./pages/PolpEnforcement";
import CrossSystemIdentityPropagation from "./pages/CrossSystemIdentityPropagation";
import SupplyChainSecurityForAgents from "./pages/SupplyChainSecurityForAgents";
import AgentLifecycleManagement from "./pages/AgentLifecycleManagement";
import ScrollToTop from "./components/shared/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/what-is-agentic-ai" element={<WhatIsAgenticAI />} />
            <Route path="/why-iam-matters" element={<WhyIAMMatters />} />
            <Route path="/agent-identity-problem" element={<AgentIdentityProblem />} />
            <Route path="/iam-challenges" element={<IamChallenges />} />
            <Route path="/dynamic-authorization" element={<DynamicAuthorization />} />
            <Route path="/ephemeral-credentials" element={<EphemeralCredentials />} />
            <Route path="/secure-introduction" element={<SecureIntroduction />} />
            <Route path="/delegation-and-impersonation" element={<DelegationAndImpersonation />} />
            <Route path="/auditing-and-observability" element={<AuditingAndObservability />} />
            <Route path="/securing-secrets-and-tokens" element={<SecuringSecretsAndTokens />} />
            <Route path="/preventing-sensitive-data-exposure" element={<PreventingSensitiveDataExposure />} />
            <Route path="/terminating-compromised-agent-access" element={<TerminatingCompromisedAgentAccess />} />
            <Route path="/jit-access" element={<JitAccess />} />
            <Route path="/polp-enforcement" element={<PolpEnforcement />} />
            <Route path="/cross-system-identity-propagation" element={<CrossSystemIdentityPropagation />} />
            <Route path="/supply-chain-security-for-agents" element={<SupplyChainSecurityForAgents />} />
            <Route path="/agent-lifecycle-management" element={<AgentLifecycleManagement />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/scenarios" element={<Scenarios />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

