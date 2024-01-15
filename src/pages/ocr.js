import React, {useState} from 'react';
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





export default function HomeOCR() {

const codeOCR = `
function validate_user()
const pw = "pass"
pwguess = ""
attempts = 1
do
    print("Attempt number " + attempts)
    pwguess = input("Password: ")
    attempts += 1
until pwguess == pw OR attempts > 3

return pwguess == pw
endfunction

if validate_user() then
print("yay")
else
print("no")
endif
`
    const [modeIDE, setModeIDE] = React.useState(10);


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

                        <CodeEditorOCR code={codeOCR} showButtons/>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
