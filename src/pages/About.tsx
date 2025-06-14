
    import matter from "gray-matter";
    import aboutContent from "@/content/about.md?raw";
    import MarkdownRenderer from "@/components/shared/MarkdownRenderer";

    const About = () => {
      const { data, content } = matter(aboutContent);

      return (
        <div className="container max-w-4xl py-8 md:py-12">
          <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {data.description}
          </p>

          <div className="mt-8 space-y-6 text-base md:text-lg">
            <MarkdownRenderer>{content}</MarkdownRenderer>
          </div>
        </div>
      );
    };

    export default About;

    