
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="IAM for Agentic AI Home">
      <ShieldCheck className="h-6 w-6 text-primary" />
      <span className="font-bold text-lg tracking-tight">IAM for Agentic AI</span>
    </Link>
  );
};

export default Logo;
