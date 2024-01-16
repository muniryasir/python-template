import React, {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CodeEditor from "@site/src/components/CodeEditor";
import CodeEditorOCR from "@site/src/components/CodeEditorOCR";
import CodeEditorPseudo from "@site/src/components/CodeEditorPseudo";
// import CodeEditor from "@site/src/components/CodeEditor";


import styles from './index.module.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';





export default function Home() {
    // useEffect(() => {
    //     const allWithClass = Array.from(
    //         document.getElementsByClassName('navbar__items navbar__items--right')
        
    //     );
    //     for (let x = 0; x< allWithClass[0].children.length; x++) {
    //         // Do stuff
            
    //         let element = allWithClass[0].children[x];
            
    //         if(element.innerHTML == 'Login') {
    //             element.innerHTML = 'userName'
    //             element.href = '#'
    //         } else {
    //             console.log(element.innerHTML)
    //         }
    //     }
       
    //   }, []);
    const codePython = `def foo():
    print("How much foo")
    print("would a foo bar bar")
    print("if a foo bar could bar foo?")
    
    
def bar():
    print("A foo bar would bar")
    print("as much foo as a foo bar could bar")
    print("if a foo bar could bar foo.")
    

foo()
print()
bar()
`;



    // const EditorType = () => {
    //     console.log(modeIDE)
    //     if (modeIDE == 10) {
    //         setCode(codePython)
    //         return ( 
    //           <div className={styles.codeEditorWrapper}>
    //             <CodeEditor code={code} showButtons/> 
    //           </div>
    //         )
    //     } else if (modeIDE == 20) {
    //         setCode(codeOCR)
    //         return ( <CodeEditorOCR code={code} showButtons/>)
    //     } else if (modeIDE == 30) {
    //         return ( <CodeEditor code={code} showButtons/>)
    //     }
    // } 
    return (
        <Layout title="Python IDE">
            <main>
                <div className={styles.heroContainer}>
                    {/* <h1>Python IDE</h1> */}
  
                    {/* <p className={styles.tagline}>A no-nonsense markdown-only template with runnable and editable Python code blocks</p> */}
                    {/* <Link className={"button button--primary"} href={"docs/intro"}>Get Started</Link> */}
                    <div className={styles.codeEditorWrapper}>
                        <CodeEditor code={codePython} showButtons/>
                        
                    </div>
                </div>
            </main>
        </Layout>
    );
}
