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





export default function Home() {
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
`
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
const codePseudo = `

Take two arguments from user
Take the sum of two arguments
Return the sum

`
    const [modeIDE, setModeIDE] = React.useState(10);
    const [code, setCode] = React.useState(codePython);

    const handleChange = (event) => {
        setModeIDE(event.target.value);
        console.log(event.target.value)
        if (event.target.value == 10) {
            setCode(codePython)
     
        } else if (event.target.value == 20) {
            setCode(codeOCR)
        } else if (event.target.value == 30) {
            setCode(codePseudo)
        }
    };
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
                    <FormControl fullWidth>

                    <InputLabel id="demo-simple-select-label">Mode</InputLabel>

                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={modeIDE}
                    label="Mode"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Python</MenuItem>
                    <MenuItem value={20}>OCR</MenuItem>
                    <MenuItem value={30}>Pseudo</MenuItem>
                    </Select>
                    </FormControl>
                    {/* <p className={styles.tagline}>A no-nonsense markdown-only template with runnable and editable Python code blocks</p> */}
                    {/* <Link className={"button button--primary"} href={"docs/intro"}>Get Started</Link> */}
                    <div className={styles.codeEditorWrapper}>
                        {modeIDE == 10 && <CodeEditor code={code} showButtons/>}
                        {modeIDE == 20 && <CodeEditorOCR code={code} showButtons/>}
                        {modeIDE == 30 && <CodeEditorPseudo code={code} showButtons/>}
                    </div>
                </div>
            </main>
        </Layout>
    );
}
