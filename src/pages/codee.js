import React, {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CodeEditorC from "@site/src/components/CodeEditorC";
// import CodeEditorOCR from "@site/src/components/CodeEditorOCR";
// import CodeEditorPseudo from "@site/src/components/CodeEditorPseudo";
// import CodeEditor from "@site/src/components/CodeEditor";


import styles from './index.module.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import UserProfile from "../components/UserProfile";




export default function Home() {
    useEffect(() => {
        if(UserProfile.getEmail()!=false) {
            console.log(UserProfile.getEmail())
            const allWithClass = Array.from(
                document.getElementsByClassName('navbar__items navbar__items--right')
            
            );
            for (let x = 0; x< allWithClass[0].children.length; x++) {
                // Do stuff
                
                let element = allWithClass[0].children[x];
                
                if(element.innerHTML == 'Login') {
                    element.innerHTML = UserProfile.getEmail()
                    element.href = '#'
                } else {
                    console.log(element.innerHTML)
                }
            }
        } else {
    
        }
      }, []);
    const codePython = ``;



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
                        <CodeEditorC code={codePython} showButtons/>
                        
                    </div>
                </div>
            </main>
        </Layout>
    );
}
