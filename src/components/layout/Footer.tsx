
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Agentic IAM Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
