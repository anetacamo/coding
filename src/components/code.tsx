import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-colddark-dark.css';

type AppProps = {
  code: any;
  language: any;
};

export default function Code({ code, language }: AppProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className='Code'>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
