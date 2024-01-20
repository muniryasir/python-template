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
import OutputBox from './outputBox';
import axios from "axios";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import LoadingOverlay from 'react-loading-overlay-ts';
import DisplayLoader from './DisplayLoader';


let marks = []
let testQuesCount = 0;
let practiceTestCount = 0;
// let practiceQ = []



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

export default function CodeEditorC(props) {
    const [input, setInput] = useState(props.code.trimEnd());
    const [showOutput, setShowOutput] = useState(false);
    const [playFocus, setplayFocus] = useState(false);
    const [resetFocus, setresetFocus] = useState(false);
    const [promptInput, setpromptInput] = useState('');
    const [example, setExample] = useState('')
    const [code, setCode] = useState('')
    const [aiFeedback, setAIFeedback] = useState(false)
    const [aiFeedbackValue, setAIFeedbackValue] = useState('')
    const [questionValue, setQuestionValue] = useState('')
    const [testQuestions, setTestQuestions] = useState('')
    const [testStarted, setTestStarted] = useState(false);
    const [testStatus, setTestStatus] = useState('Begin Test')
    const [practiceStatus, setPracticeStatus] = useState('Practice')
    const [showQuestion, setShowQuestion] = useState(false)


    const [showResults, setShowResults] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    const [mode, setMode] = useState('Python');
    const [evaluationResult, setEvaluationResult] =useState(false)
    const [validCode, setValidCode]= useState(false)
    const [practiceQ, setPracticeQ] = useState([])
    const [practiceQuestion, setPracticeQuestion] = useState('')
    const [showPError, setshowPError] = useState(false)


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

    const handleChangeMode = (event) => {
        setMode(event.target.value);
      };

      const handleSubmitCode = (event) => {
       setshowPError(false)
        if(showQuestion == true) {
            let requestPackage = {
                mode: mode,
                code: input,
                marks: practiceQ[practiceTestCount].Marks,
                topic: practiceQ[practiceTestCount].Topic,
                test: 'yes'
            }
            console.log(practiceQ[practiceTestCount])
            // let urlstring = `https://ai-api-alpha.vercel.app/api/evaluate_code?question=${JSON.stringify(handleSubmitCode)}`
            let urlstring = `http://localhost:3000/api/evaluate_code?question=${JSON.stringify(requestPackage)}`
            console.log(urlstring)
            setShowLoader(true)
            axios.get(urlstring)
            .then((data) => { 
                console.log(data.data)
                setShowOutput(true);
                setShowLoader(false);
                // setEvaluationResult(true)
                let isValid = data.data.valid
                if(isValid == 'valid')
                    { 
                        setValidCode(true)
                        run()
                        setEvaluationResult(data.data.Reasoning)
                        marks.push(data.data.marks)
                } else {
                    setValidCode(false)
                    setEvaluationResult(data.data.Reasoning)
                }
                
            })
            .catch(error => {
                console.log(error)
                setshowPError(true)
                setShowOutput(true);
            });
        } else {

            let requestPackage = {
                mode: mode,
                code: input,
                test: 'no'
            }

             // let urlstring = `https://ai-api-alpha.vercel.app/api/evaluate_code?question=${JSON.stringify(handleSubmitCode)}`
             let urlstring = `http://localhost:3000/api/evaluate_code?question=${JSON.stringify(requestPackage)}`
             console.log(urlstring)
             setShowLoader(true)
             axios.get(urlstring)
             .then((data) => { 
                 console.log(data.data)
                 setShowOutput(true);
                 setShowLoader(false);
                 // setEvaluationResult(true)
                 let isValid = data.data.valid
                 if(isValid == 'valid')
                     { 
                         setValidCode(true)
                         run()
                         setEvaluationResult(data.data.reasoning)
                 } else {
                     setValidCode(false)
                     setEvaluationResult(data.data.reasoning)
                 }
                 
             })
             .catch(error => {
                console.log(error)
                setshowPError(true)
                setShowOutput(true);
            });
            
        }
      };


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
        setShowLoader(true)
        let urlstring = `https://ai-api-alpha.vercel.app/api/aicodeevaluation?question=${JSON.stringify(code)}`
        // let urlstring = `http://localhost:3001/api/aicodeevaluation?question=${JSON.stringify(code)}`
        console.log(urlstring)
        axios.get(urlstring)
        .then((data) => { 
            console.log(data.data)
            setAIFeedback(true);
            setShowLoader(false)
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
          let primenumbers = 
  `

num = 29

flag = False

if num == 1:
    print(num, "is not a prime number")
elif num > 1:
    for i in range(2, num):
        if (num % i) == 0:
            flag = True
            break

if flag:
    print(num, "is not a prime number")
else:
    print(num, "is a prime number")
  `
          
          setInput(primenumbers)

        } else if(value == '2') {
          let factoralNumber = 
          `
num = 7


factorial = 1

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

X = [[12,7,3],
    [4 ,5,6],
    [7 ,8,9]]
Y = [[5,8,1,2],
    [6,7,3,0],
    [4,5,9,1]]
result = [[0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]]

for i in range(len(X)):
    for j in range(len(Y[0])):

        for k in range(len(Y)):
            result[i][j] += X[i][k] * Y[k][j]

for r in result:
    print(r)
  
          `

          setInput(matrixMultiplication)
        } else if(value=='4') {

            let simpleInput = `
print('Enter input:')
x  = input()
print(x)
                    `;
            setInput(simpleInput);

        } else if(value=='5') {

            let simpleAddition = `
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
    
    function createResultCard() {
        setShowResults(true)

    }
    function handleStartTest() {
        setTestStarted(true)
        setShowResults(false)
        setShowOutput(true);

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
    function setupQuestion(questionArray) {
        console.log(testQuesCount)
        
        let description = questionArray[testQuesCount].Description;
        setQuestionValue(description.replace('\t',''))
        // testQuesCount++; 
        
    }
    function handleStartPractice() {

        if(practiceStatus=='Practice')
            {
                // setShowQuestion(true)
                // let urlstring = `https://ai-api-alpha.vercel.app/api/test_questions_request?q=1`
                let urlstring = `http://localhost:3000/api/get_practice_questions?q=1`
                console.log(urlstring)
                setShowLoader(true)
                axios.get(urlstring)
                .then((data) => { 
                    
                    setPracticeQ(data.data.message)
                    setPracticeStatus('End Practice')
                    setShowQuestion(true)
                    setShowLoader(false)
                    // testQuesCount++
                    currentPracticeQ(data.data.message)
                    
                })
                .catch(error => console.log(error));
        } else {

        }

    }

    function currentPracticeQ(ques) {
        console.log(ques)
        setPracticeQuestion(ques[practiceTestCount].question)
    }
    function handleNPracticeQ() {
        console.log(practiceTestCount)
        console.log(practiceQ)
        if(practiceTestCount<practiceQ.length-1)
            {
                
                practiceTestCount++
                setShowOutput(false)
                currentPracticeQ(practiceQ)
            }
        

        setShowQuestion(true)

    }
    function handlePPracticeQ() {

        practiceTestCount--

        setShowQuestion(true)

    }
    function reset() {
        setShowOutput(false);
        setInput(props.code.trimEnd())
    }

    function run() {
        setShowResults(false)

        setShowOutput(true);
        // setShowLoader(true)
        console.log(input)
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
                    
                        
                        onClick={handleSubmitCode}
                    
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
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Mode</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={mode}
                label="Mode"
                onChange={handleChangeMode}
                >
                <MenuItem value="OCR">OCR</MenuItem>
                <MenuItem value="Pseudo">Pseudo</MenuItem>
                <MenuItem value="Python">Python</MenuItem>

                {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
            </Box>
        </>;
    }

    function ResultCard() {
        // let card = document.createElement('span');
        // card.innerText = '10 / '+marks[1]
        // for(x=0; x<marks.len-1; x++) {
            

        // }
        return (
            <pre className={"output-window"}> 
                <p>Q1 {marks[0]}</p>
                <p>Q2 {marks[1]}</p>
            </pre>
        )
    }

    function output() {
        return (
            // <Grid container >
            //     <Grid xs={12}> 
            <div>              
                    {(!showResults && validCode) && <pre className={"output-window"}>
                         
                        <span>{stdout}</span>
                        <span>{evaluationResult}</span>
                        <span style={{color: "var(--text-code-error)"}}>{stderr}</span> 
                    </pre>}
                    {(!showResults && !validCode) && <pre className={"output-window"}>
                         
                         <span>{evaluationResult}</span>
                         {/* <span style={{color: "var(--text-code-error)"}}>{stderr}</span>  */}
                    </pre>}
                    {showResults && <pre className={"output-window"}>
                        <ResultCard />
                    </pre>} 
                    {showPError && <pre className={"output-window"}>
                    <span>Could Not Process, please try again</span>
                    </pre>} 

                 {/* </Grid>  
                 <Grid xs={12}> */}
                 {/*   <pre className={"output-window"}>
                        {stdout && showAIButton()}
                        <span >{aiFeedbackValue}</span>    
                </pre> */}
                {/* </Grid>
             </Grid> */}
            </div>
            );
    }

    function question() {
        return (
            <pre className={"question-window"}>
                {/* <span>{questionValue}</span> */}
                <span>{practiceQuestion}</span>

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

    function getMarks() {

        marks[testQuesCount]

    }

    function showAIButton() {
        getMarks()
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

    function CodeBox() {
        return (
            <Grid container spacing={1}>
      <Grid xs={3}>
        {showOutput && question()}
        </Grid>
        <Grid xs={5} style={{width: "50%"}}>
        {/* {!testStarted && <Stack direction="row" spacing={2}>
                  <Item id="1" onClick={handleItemClick}>Example 1</Item>
                  <Item id="2" onClick={handleItemClick}>Example 2 </Item>
                  <Item id="3" onClick={handleItemClick}>Example 3</Item>
                  <Item id="4" onClick={handleItemClick}>Example 4</Item>
                  <Item id="5" onClick={handleItemClick}>Example 5</Item>
                </Stack> } */}
        <div className={"code-editor-window"} style={showOutput ? {borderRadius: ".25em .25em 0 0"} : {}}>
                    {editor()}
                     <div className={"button-container"} style={showButtons() ? {opacity: 100} : {}}>
                         {isLoading ? <span>Loading...</span> : buttons()}
                     </div>
                 </div>
         </Grid>
         <Grid xs={3}>
         {showOutput && output()}
         </Grid>
         {isAwaitingInput && showPrompt()}
    </Grid>
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
                        {/* testStarted && <Button onClick={handlePrevQuesRequest}>Previous</Button> */}
                        {/* <Button  onClick={handleStartTest}>{testStatus}</Button> */}
                        <Button  onClick={handleStartPractice}>{practiceStatus}</Button>
                        {/* testStarted && <Button>Template</Button> */}
                        {/* testStarted && <Button>Outline</Button> */}
                        { <Button onClick={handleNPracticeQ}>Next</Button>}
                        </ButtonGroup>
                    </Grid>
                    <Grid xs={12}>
                        <Grid container spacing={1}>
                            <Grid xs={3}>
                                {showQuestion && question()}
                                </Grid>
                                <Grid xs={5} style={{width:"50%"}}>
                                {/* {!testStarted && <Stack direction="row" spacing={2}>
                                        <Item id="1" onClick={handleItemClick}>Example 1</Item>
                                        <Item id="2" onClick={handleItemClick}>Example 2 </Item>
                                        <Item id="3" onClick={handleItemClick}>Example 3</Item>
                                        <Item id="4" onClick={handleItemClick}>Example 4</Item>
                                        <Item id="5" onClick={handleItemClick}>Example 5</Item>
                                        </Stack> } */}
                                <div className={"code-editor-window"} style={showOutput ? {borderRadius: ".25em .25em 0 0"} : {}}>
                                            {editor()}
                                            <div className={"button-container"} style={showButtons() ? {opacity: 100} : {}}>
                                                {isLoading ? <span>Loading...</span> : buttons()}
                                            </div>
                                        </div>
                                </Grid>
                                <Grid xs={3}>
                                {showOutput && output()}
                                </Grid>
                                {isAwaitingInput && showPrompt()}
                            </Grid>
                        </Grid>
                    </Grid>

                    
                </Box>
             
   
            </div>
        )}
            

    </BrowserOnly>

          

}
