
    import ReactMarkdown from "react-markdown";
    import remarkGfm from "remark-gfm";
    import { Link } from "react-router-dom";

    interface MarkdownRendererProps {
      children: string;
    }

    const MarkdownRenderer = ({ children }: MarkdownRendererProps) => {
      return (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="mt-8 text-2xl font-semibold pt-4" {...props} />
            ),
            p: ({ node, ...props }) => <p className="leading-7" {...props} />,
            ul: ({ node, ...props }) => (
              <ul className="list-disc space-y-2 pl-6" {...props} />
            ),
            li: ({ node, ...props }) => <li className="my-2" {...props} />,
            a: ({ node, ...props }) => {
              // Internal links use React Router's Link
              if (props.href && props.href.startsWith("/")) {
                return <Link to={props.href} {...props} className="font-medium text-primary underline hover:no-underline" />;
              }
              // External links open in a new tab
              return (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline hover:no-underline"
                />
              );
            },
          }}
        >
          {children}
        </ReactMarkdown>
      );
    };

    export default MarkdownRenderer;

    