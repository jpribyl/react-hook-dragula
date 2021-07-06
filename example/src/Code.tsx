import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import { useEffect } from 'react';

type CodeProps = React.HTMLAttributes<HTMLPreElement> & {
  language?: string;
  children: string;
};

const Code: React.FC<CodeProps> = ({
  language = 'tsx',
  children,
  ...props
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre {...props}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
};

export default Code;
