import { useRef, useEffect, ReactNode } from "react";
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';

export const CodeHighlighter = ({ children, language }: { children:ReactNode, language:string }) => {
    const codeRef = useRef(null);

    useEffect(() => {
        const languageMap: any = {
            javascript,
            xml,
            css,
        };

        if (codeRef.current) {
            const languageFn = languageMap[language];
            if (languageFn) {
                hljs.registerLanguage(language, languageFn);
                hljs.highlightElement(codeRef.current);
            }
        }
    }, [language, children]); 
    return (
        <pre>
            <code ref={codeRef} className={language}>
                {children}
            </code>
        </pre>
    );
};
