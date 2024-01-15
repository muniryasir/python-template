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

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Loader from "react-js-loader";


let marks = [0,0]
let testQuesCount = 0;
let color = 'blue'

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
    const [questionValue, setQuestionValue] = useState('')
    const [testQuestions, setTestQuestions] = useState('')
    const [testStarted, setTestStarted] = useState(false);
    const [testStatus, setTestStatus] = useState('Begin Test')
    const [showResults, setShowResults] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

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
        let urlstring = `https://ai-api-alpha.vercel.app/api/ai_code_evaluation_ocr?question=${JSON.stringify(code)}`
        // let urlstring = `http://localhost:3000/api/ai_code_evaluation_ocr?question=${JSON.stringify(code)}`
        console.log(urlstring)
        setShowLoader(true)
        axios.get(urlstring)
        .then((data) => { 
            console.log(data.data)
            setShowLoader(false)
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
          
          setInput(userValidation)

        } else if(value == '2') {
          let factoralNumber = 
          `
a = real(input("Enter number: "))

op = ""
do
    op = input("Enter operation: ")
until op == "+" OR op == "-" OR op == "*" OR op == "/" OR op == "^" OR op == "sqrt"

b=0

if op != "sqrt" then
    b=real(input("Enter number: "))
endif

result = 0
switch op:
    case "+":
        result = a+b
    case "-":
        result = a-b
    case "*":
        result = a*b
    case "/":
        result = a/b
    case "^":
        result = a^b
    case "sqrt":
        result = sqrt(a)
    default:
        print("Operation " + op + " not implemented")
endswitch

print("Answer: " + result)
          `
          setInput(factoralNumber)

        } else if(value == '3') {
          let matrixMultiplication = 
          `

function lookup(char, base)
index = -1
symbols = [
    "0", "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", "A", "B",
    "C", "D", "E", "F"
]
if base > symbols.length then
    print("Sorry, only bases 1 to "+symbols.length+" are supported")
endif
for j = 0 to base - 1
    if char == symbols[j] then
        index = j
    endif
next j
if index == -1 then
    print("Invalid character "+char)
endif
return index
endfunction

function convert(hex, base)
out = 0
for i = 0 to hex.length-1
    out += base ^ (hex.length-1-i) * lookup(hex[i], base)
next i
return out
endfunction

print(convert("111101", 2)) //61
  
          `

          setInput(matrixMultiplication)
        } else if(value=='4') {

            let simpleInput = `
const bookingFee = 1.50
const childPrice = 2.50
const adultPrice = 5.00

function price(adults, children)
    return adults * adultPrice + childPrice * 2.5 + bookingFee
endfunction

function format(price)
    s = str(price)
    out = ""
    for i=0 to s.length - 1
        if s[i] == "." then
            if i+2 == s.length then //one dp
                return "£" +out + "." + s[i+1] + "0"
            else //two dp
                return "£" + out + "." + s[i+1] + s[i+2]
            endif
        endif
        out += s[i]
    next i
    //no dot, no dp
    return "£" + out + ".00"
endfunction

print(format(price(3, 5)))
                    `;
            setInput(simpleInput);

        } else if(value=='5') {

            let simpleAddition = `
alphabet = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf",
    "Hotel", "India", "Juliet", "Kilo", "Lima", "Mike", "November",
    "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform",
    "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"
]

x = input("Word:").lower
result = ""

for i=0 to x.length-1
    if i != 0 then
        result += " "
    endif
    result += alphabet[ASC(x[i])-97]
next i

print(result)
                    `;
            setInput(simpleAddition);

        }


      }

    function reset() {
        setShowOutput(false);
        setInput(props.code.trimEnd())
    }

    function sendCode() {

        let urlstring = `https://ai-api-alpha.vercel.app/api/ocr_code_interperation?question=${JSON.stringify(input)}`
        // let urlstring = `http://localhost:3000/api/ocr_code_interperation?question=${JSON.stringify(input)}`
        console.log(urlstring)
        setShowLoader(true)
        axios.get(urlstring)
        .then((data) => { 
            console.log(data.data)
            // setAIFeedback(true);
            // setAIFeedbackValue(data.data.AI_Answer)
            setShowLoader(false)
            setShowOutput(true);
            if(data.data.AI_Answer =="invalid") {
               setShowInvalidError(true);
               setInvalidError('Invalid Code, please enter valid OCR code')     
            } else {
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
            <Grid container >
                <Grid xs={12}>               
                    {!showResults && <pre className={"output-window"}>
                        <span>{stdout}</span>
                        <span style={{color: "var(--text-code-error)"}}>{stderr}</span>
                        <span style={{color: "var(--text-code-error)"}}>{InvalidError}</span>
                    </pre>}
                    {showResults && <pre className={"output-window"}>
                        <ResultCard />
                    </pre>} 
                </Grid>
                <Grid xs={12}>
                    <pre className={"output-window"}>
                        {stdout && showAIButton()}
                        <span >{aiFeedbackValue}</span>    
                    </pre>
                </Grid>
            </Grid>
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

    function handleStartTest() {
        setTestStarted(true)
        setShowResults(false)
        setTestStatus("End Test")
        testQuesCount = 0
        
        if(testStatus=="Begin Test") {
            setShowLoader(true)
            // setInput('')

            let urlstring = `https://ai-api-alpha.vercel.app/api/test_questions_request?q=1`
            // let urlstring = `http://localhost:3000/api/test_questions_request?q=1`
            console.log(urlstring)
            axios.get(urlstring)
            .then((data) => { 
                // console.log(data.data)
                setTestQuestions(data.data.message)
                setupQuestion(data.data.message)
                setShowLoader(false)
                testQuesCount++
                
            })
            .catch(error => console.log(error));
        } else {
            setTestStarted(false)
            setTestStatus('Begin Test')
            setQuestionValue('')
            createResultCard()
        }
        
    }

    function setupQuestion(questionArray) {
        console.log(testQuesCount)
        
        let description = questionArray[testQuesCount].Description;
        setQuestionValue(description.replace('\t',''))
        // testQuesCount++; 
        
    }

    function handleNextQuesRequest(e) {
        // console.log(e.target.)
        if(testQuesCount<2) {
           
            testQuesCount++
            if(testQuesCount>=2) {
                testQuesCount = 1
            } else if(testQuesCount<0) {
                testQuesCount = 0
            }
            setupQuestion(testQuestions)
            
            
            
        } 

    }
    function handlePrevQuesRequest(e) {
        // console.log(e.target.)
        
        if(testQuesCount>=0 ) {
            if(testQuesCount>=2) {
                testQuesCount = 0
            } else if(testQuesCount<0) {
                testQuesCount = 0
            }  
            setupQuestion(testQuestions)
            testQuesCount--
            
        } 

    }

    function question() {
        return (
            <pre className={"question-window"}>
                <span>{questionValue}</span>
                

            </pre>
        );
    }

    function CodeBox() {
        return (
            <Grid container spacing={1}>
      <Grid xs={3.5}>
        {showOutput && question()}
        </Grid>
        <Grid xs={5}>
        {!testStarted && <Stack direction="row" spacing={2}>
                  <Item id="1" onClick={handleItemClick}>Example 1</Item>
                  <Item id="2" onClick={handleItemClick}>Example 2 </Item>
                  <Item id="3" onClick={handleItemClick}>Example 3</Item>
                  <Item id="4" onClick={handleItemClick}>Example 4</Item>
                  <Item id="5" onClick={handleItemClick}>Example 5</Item>
                </Stack> }
        <div className={"code-editor-window"} style={showOutput ? {borderRadius: ".25em .25em 0 0"} : {}}>
                    {editor()}
                    <div className={"button-container"} style={showButtons() ? {opacity: 100} : {}}>
                        {isLoading ? <span>Loading...</span> : buttons()}
                    </div>
                </div>
        </Grid>
        <Grid xs={3.5}>
        {showOutput && output()}
        </Grid>
        {isAwaitingInput && showPrompt()}
      </Grid>
        )
    }

    function DisplayLoader() {

        return (
<div className='loaderC'>
                <Loader type="box-rotate-x" bgColor={color} color={color} title={"Loading"} size={100} />
                </div>
        )

    }
    const fallback = <pre style={{margin: 0, padding: "0.55rem"}}>{input}</pre>;

    return <BrowserOnly fallback={fallback}>
        {() => (
            <div className={"code-editor"} onMouseLeave={() => {
                setplayFocus(false);
                setresetFocus(false);
            }}>
                  {showLoader &&  <DisplayLoader />}
                { isLoading &&  <DisplayLoader />}
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}> 
                    <Grid xs={12}>
                    {/* <button type="button" onClick={handleStartTest}>Begin Test</button> */}
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        {testStarted && <Button onClick={handlePrevQuesRequest}>Previous</Button>}
                        <Button  onClick={handleStartTest}>{testStatus}</Button>
                        {testStarted && <Button>Template</Button>}
                        {testStarted && <Button>Outline</Button>}
                        {testStarted && <Button onClick={handleNextQuesRequest}>Next</Button>}
                        </ButtonGroup>
                    </Grid>
                    <Grid xs={12}>
                    <CodeBox />
                    </Grid>
                </Grid>
    </Box>
             
   
            </div>
        )}
            

    </BrowserOnly>

          

}
