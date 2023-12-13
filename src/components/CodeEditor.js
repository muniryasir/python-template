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

export default function CodeEditor(props) {
    const [input, setInput] = useState(props.code.trimEnd());
    const [showOutput, setShowOutput] = useState(false);
    const [playFocus, setplayFocus] = useState(false);
    const [resetFocus, setresetFocus] = useState(false);
    const [promptInput, setpromptInput] = useState('');
    const [example, setExample] = useState('')
    const [code, setCode] = useState('')


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
        sendInput(promptInput)

    }

    function handleItemClick (e)  {
        let value = e.target.id
        if(value == "1") {
          let primenumbers = 
  `
# Program to check if a number is prime or not

num = 29

# To take input from the user
#num = int(input("Enter a number: "))

# define a flag variable
flag = False

if num == 1:
    print(num, "is not a prime number")
elif num > 1:
# check for factors
    for i in range(2, num):
        if (num % i) == 0:
            # if factor is found, set flag to True
            flag = True
            # break out of loop
            break

# check if flag is True
if flag:
    print(num, "is not a prime number")
else:
    print(num, "is a prime number")
  `
          
          setInput(primenumbers)

        } else if(value == '2') {
          let factoralNumber = 
          `
# Python program to find the factorial of a number provided by the user.

# change the value for a different result
num = 7

# To take input from the user
#num = int(input("Enter a number: "))

factorial = 1

# check if the number is negative, positive or zero
if num < 0:
    print("Sorry, factorial does not exist for negative numbers")
elif num == 0:
    print("The factorial of 0 is 1")
else:
    for i in range(1,num + 1):
        factorial = factorial*i
    print("The factorial of",num,"is",factorial)
          `
          setInput(factoralNumber)

        } else if(value == '3') {
          let matrixMultiplication = 
          `
# Program to multiply two matrices using nested loops

# 3x3 matrix
X = [[12,7,3],
    [4 ,5,6],
    [7 ,8,9]]
# 3x4 matrix
Y = [[5,8,1,2],
    [6,7,3,0],
    [4,5,9,1]]
# result is 3x4
result = [[0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]]

# iterate through rows of X
for i in range(len(X)):
    # iterate through columns of Y
    for j in range(len(Y[0])):
        # iterate through rows of Y
        for k in range(len(Y)):
            result[i][j] += X[i][k] * Y[k][j]

for r in result:
    print(r)
  
          `

          setInput(matrixMultiplication)
        } else if(value=='4') {

            let simpleInput = `
# Simple Input
print('Enter input:')
x  = input()
print(x)
                    `;
            setInput(simpleInput);

        } else if(value=='5') {

            let simpleAddition = `
# Simple Addition between two input numbers 
print('Enter first Number:')
x  = input()
print('Enter Second Number:')
y = input()
print('sum:')
print(int(x)+int(y))
                    `;
            setInput(simpleAddition);

        }


      }

    function reset() {
        setShowOutput(false);
        setInput(props.code.trimEnd())
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
                    onClick={run}
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
                <span style={{color: "var(--text-code-error)"}}>{stderr}</span>
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
