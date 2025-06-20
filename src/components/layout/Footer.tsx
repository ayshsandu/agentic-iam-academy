
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Agentic IAM Academy. All Rights Reserved.</p>
        <p className="mt-2">
          Powered by{" "}
          <a 
            href="https://wso2.com/identity-and-access-management/ai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            WSO2
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
