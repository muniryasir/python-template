import React, {useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useColorMode} from '@docusaurus/theme-common';
import {usePython} from "react-py";

import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import "./CodeEditor.css"

import axios from "axios";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const editorOptions = {
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    highlightActiveLine: false,
    showPrintMargin: false,
    showGutter: false,
};

function setCommandEnabled(editor, name, enabled) {
    // See: https://stackoverflow.com/a/24963811/18307756
    let command = editor.commands.byName[name]
    if (!command.bindKeyOriginal)
        command.bindKeyOriginal = command.bindKey
    command.bindKey = enabled ? command.bindKeyOriginal : null;
    editor.commands.addCommand(command);
}

const editorOnLoad = editor => {
    editor.renderer.setScrollMargin(10, 10, 0, 0);
    editor.renderer.setPadding(16);
    editor.moveCursorTo(0, 0);

    setCommandEnabled(editor, "indent", false);
    setCommandEnabled(editor, "outdent", false);

    editor.commands.on("afterExec", eventData => {
        if (eventData.command.name !== "disable-indent") {
            setCommandEnabled(editor, "indent", true);
            setCommandEnabled(editor, "outdent", true);
        }
    });

    editor.on("click", (e) => {
        setCommandEnabled(editor, "indent", true);
        setCommandEnabled(editor, "outdent", true);
    })

    editor.on("blur", (e) => {
        setCommandEnabled(editor, "indent", false);
        setCommandEnabled(editor, "outdent", false);
    })

    editor.commands.addCommand({
        name: 'disable-indent',
        bindKey: {win: "esc", mac: "esc"},
        exec: (editor) => {
            setCommandEnabled(editor, "indent", false);
            setCommandEnabled(editor, "outdent", false);
        }
    })
};

const isMobile = () => (
    !!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
)

export default function CodeEditorOCR(props) {
    const [input, setInput] = useState(props.code.trimEnd());
    const [showOutput, setShowOutput] = useState(false);
    const [playFocus, setplayFocus] = useState(false);
    const [resetFocus, setresetFocus] = useState(false);
    const [promptInput, setpromptInput] = useState('');
    const [example, setExample] = useState('')
    const [code, setCode] = useState('')
    const [aiFeedback, setAIFeedback] = useState(false)
    const [aiFeedbackValue, setAIFeedbackValue] = useState('')
    const [showInvalidError, setShowInvalidError] = useState(false)
    const [InvalidError, setInvalidError] = useState('')


    useEffect(() => {
        setInput(props.code.trimEnd());
        setShowOutput(true)
    }, [props.code])

    const {
        runPython,
        stdout,
        stderr,
        isLoading,
        isRunning,
        interruptExecution,
        isAwaitingInput,
        sendInput,
        prompt
    } = usePython();

    const {colorMode} = useColorMode();
    const isBrowser = useIsBrowser();

    let AceEditor = null;
    if (isBrowser) {
        AceEditor = require('react-ace').default;
        require("ace-builds/src-noconflict/mode-python");
        require("ace-builds/src-noconflict/theme-textmate");
        require("ace-builds/src-noconflict/theme-idle_fingers");
        require("ace-builds/src-noconflict/ext-language_tools");
    }

    function onChangeIS (event) {
        setpromptInput(event.target.value)
    }

    function handleInputSubmission() {
        // alert(prompt)
        // alert()
        sendInput(promptInput.replace(prompt,'').trim())

    }
    
    function handleAIFeedback() {
        let code = {code: JSON.stringify(input)}
        
        console.log(input)
        // const data = {
        //     code,
        // };
        // let headerconfig =  {
            
        //     'Content-Type': 'application/json; charset=utf-8',
        //     "Access-Control-Allow-Credentials": "true" ,
        //     "Access-Control-Allow-Origin" :"*" , // replace this your actual origin
        //     "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT" ,
        //     "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With" ,
        //     "Cache-Control": "public, max-age=0, must-revalidate",
        //     "Connection":"keep-alive"
            
        //   };
        // let headerconfig = {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //     "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
        // };

        // axios
        // .put("https://ai-api-alpha.vercel.app/api/aicodeevaluation", code, headerconfig)
        // .then(data => console.log(data.data))
        // .catch(error => console.log(error));
        let urlstring = `https://ai-api-alpha.vercel.app/api/ai_code_evaluation_pseudo?question=${JSON.stringify(code)}`
        // let urlstring = `http://localhost:3000/api/ai_code_evaluation_pseudo?question=${JSON.stringify(code)}`
        console.log(urlstring)
        axios.get(urlstring)
        .then((data) => { 
            console.log(data.data)
            setAIFeedback(true);
            setAIFeedbackValue(data.data.AI_Answer)
        })
        .catch(error => console.log(error));
        // alert()
        // let data = JSON.stringify({
        //     "name": "Add your name in the body"
        //   });
        // let config = {
        //     method: 'put',
        //     maxBodyLength: Infinity,
        //     // url: 'https://ai-api-alpha.vercel.app/api/aicodeevaluation',
        //     url: 'http://localhost:3001//api/aicodeevaluation',
        //     headers: { 
        //       'Content-Type': 'application/json',
        //       "Access-Control-Allow-Origin": "*",
        //       "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //       "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
        //     },
        //     data : data
        //   };
          
        //   axios.request(config)
        //   .then((response) => {
        //     console.log(JSON.stringify(response.data));
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

    }

    function handleItemClick (e)  {
        setAIFeedbackValue('')
        setAIFeedback(false)
        setShowOutput(false)
        let value = e.target.id
        if(value == "1") {
          let userValidation = 
  `


  `
          
          setInput(userValidation)

        } else if(value == '2') {
          let factoralNumber = 
          `

          `
          setInput(factoralNumber)

        } else if(value == '3') {
          let matrixMultiplication = 
          `


  
          `

          setInput(matrixMultiplication)
        } else if(value=='4') {

            let simpleInput = `

                    `;
            setInput(simpleInput);

        } else if(value=='5') {

            let simpleAddition = `
 `;
            setInput(simpleAddition);

        }


      }

    function reset() {
        setShowOutput(false);
        setInput(props.code.trimEnd())
    }

    function sendCode() {

        let urlstring = `https://ai-api-alpha.vercel.app/api/pseudo_code_interperation?question=${JSON.stringify(code)}`
        // let urlstring = `http://localhost:3000/api/pseudo_code_interperation?question=${JSON.stringify(input)}`
        console.log(urlstring)
        axios.get(urlstring)
        .then((data) => { 
            console.log(data.data)
            // setAIFeedback(true);
            // setAIFeedbackValue(data.data.AI_Answer)
            setShowOutput(true);
            if(data.data.AI_Answer =="invalid") {
               setShowInvalidError(true);
               setInvalidError('Invalid Code, please enter valid OCR code')     
            } else {
                setShowInvalidError(false);
                runPython(data.data.AI_Answer); 
            }
        })
        .catch(error => console.log(error));

    }

    function run() {
        setShowOutput(true);
        return runPython(input);
    }

    function stop() {
        setShowOutput(false);
        interruptExecution();
    }

    function buttons() {
        return <>
            {!isRunning ?
                <button
                    className={"icon-button"}
                    disabled={isLoading || isRunning}
                    onClick={sendCode}
                    onFocus={() => setplayFocus(true)}
                    onBlur={() => setplayFocus(false)}
                    aria-label={"Run Code"}
                    title={"Run Code"}
                >
                    <span className={"icon lsf-icon"} title={"play"}></span>
                </button>
                :
                <button
                    className={"icon-button"}
                    disabled={isLoading || !isRunning}
                    onClick={stop}
                    onFocus={() => setplayFocus(true)}
                    onBlur={() => setplayFocus(false)}
                    aria-label={"Stop Code"}
                    title={"Stop Code"}
                >
                    <span className={"icon lsf-icon"} title={"stop"}></span>
                </button>
            }
            <button
                className={"icon-button"}
                onClick={reset}
                onFocus={() => setresetFocus(true)}
                onBlur={() => setresetFocus(false)}
                aria-label={"Reset Code Window"}
                title={"Reset Code Window"}
            >
                <span className={"icon lsf-icon"} title={"refresh"}></span>
            </button>
        </>;
    }

    function output() {
        return (
            <pre className={"output-window"}>
                <span>{stdout}</span>
                {showInvalidError && <span> ${InvalidError} </span>}
                <span style={{color: "var(--text-code-error)"}}>{stderr}</span>
                {stdout && showAIButton()}
                {aiFeedback && <span >{aiFeedbackValue}</span>}

            </pre>
        );
    }

    function showPrompt() {
        return (
            <div>
            <input type="text" id="fname" name="fname" defaultValue={prompt} onChange={onChangeIS} />
            <button type="button" onClick={handleInputSubmission}>Submit Input</button>
            </div>
        );
    }

    function showAIButton() {
        return (
            <div>
                <button type="button" onClick={handleAIFeedback}>Get AI feedback</button>
            </div>
        );
    }

    function editor() {
        return <AceEditor
            value={input}
            mode="python"
            name="CodeBlock"
            fontSize={'0.9rem'}
            theme={colorMode === 'dark' ? "idle_fingers" : "textmate"}
            onChange={(newValue, e) => setInput(newValue)}
            width='100%'
            maxLines={Infinity}
            style={{backgroundColor: "rgba(0, 0, 0, 0)"}}
            onLoad={editorOnLoad}
            editorProps={{$blockScrolling: true}}
            setOptions={editorOptions}
        />;
    }

    function showButtons() {
        return props.showButtons || isMobile() || playFocus || resetFocus;
    }

    const fallback = <pre style={{margin: 0, padding: "0.55rem"}}>{input}</pre>;

    return <BrowserOnly fallback={fallback}>
        {() => (
            <div className={"code-editor"} onMouseLeave={() => {
                setplayFocus(false);
                setresetFocus(false);
            }}>
                <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
        <Stack direction="row" spacing={2}>
                  <Item id="1" onClick={handleItemClick}>Example 1</Item>
                  <Item id="2" onClick={handleItemClick}>Example 2 </Item>
                  <Item id="3" onClick={handleItemClick}>Example 3</Item>
                  <Item id="4" onClick={handleItemClick}>Example 4</Item>
                  <Item id="5" onClick={handleItemClick}>Example 5</Item>
                </Stack>
        <div className={"code-editor-window"} style={showOutput ? {borderRadius: ".25em .25em 0 0"} : {}}>
                    {editor()}
                    <div className={"button-container"} style={showButtons() ? {opacity: 100} : {}}>
                        {isLoading ? <span>Loading...</span> : buttons()}
                    </div>
                </div>
        </Grid>
        <Grid xs={6}>
        {showOutput && output()}
        </Grid>
        {isAwaitingInput && showPrompt()}
      </Grid>
    </Box>
             
   
            </div>
        )}
            

    </BrowserOnly>

          

}
