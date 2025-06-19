
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="IAM for Agentic AI Home">
      <div className="p-2 rounded-lg gradient-bg">
        <ShieldCheck className="h-6 w-6 text-white" />
      </div>
      <span className="font-bold text-xl tracking-tight gradient-text">IAM for Agentic AI</span>
    </Link>
  );
};

export default Logo;
