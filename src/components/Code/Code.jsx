import { PrismLight as SyntaxHighligter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Code = ({ children }) => {
  return (
    <div className='code'>
      <h2>haya</h2>
      <SyntaxHighligter style={nightOwl} showLineNumbers>
        {children}
      </SyntaxHighligter>
    </div>
  );
};
export default Code;
