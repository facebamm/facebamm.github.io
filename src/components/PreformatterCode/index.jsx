import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015  } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import './PreformattedCode.scss';


// https://github.com/react-syntax-highlighter/react-syntax-highlighter

export default ({id, language, children}) => (
    <div className="preformatterCode">
        <PreformattedCodeCopy copyData={children}/>
        <SyntaxHighlighter
            id={id}
            style={vs2015}
            showLineNumbers
            language={language || 'cpp'}
        >
            {children}
        </SyntaxHighlighter>
    </div>
);