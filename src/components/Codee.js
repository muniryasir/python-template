
import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import "./Codee.css"
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import parse from 'html-react-parser';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useColorMode} from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';
import TextField from '@mui/material/TextField';
import {usePython} from "react-py";
import axios from "axios";
import DisplayLoader from './DisplayLoader';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'rgba(18,37,64,1)',
    borderColor: '#0063cc',
    width: '100%',
    textAlign: 'left',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  const listStyle = {
    backgroundColor: '#d2f5f3',
    marginTop: '0.2%'
  }

  const PracticeQuestionsList = [
    {
      'Title':'Hello World',
      'Question':'Write a program that outputs the message "Hello World" to the screen.',
      'option': 'any',
      'Marks':'10',
      'Topic':'Hello World'
    },
    {
      'Title':'Input and Output',
      'Question':'Create a program that prompts the user to enter their name, stores it in a variable, and then outputs a greeting message with their name.',
      'option': 'Python',
      'Marks':'10',
      'Topic':'Input and Output'
    },
    {
      'Title':'Addition',
      'Question':'Write a program that takes two numbers as input, adds them together, and then outputs the result.',
      'option': 'OCR/ ERL',
      'Marks':'10',
      'Topic':'Addition'
    },
    {
      'Title':'Addition (In-program)',
      'Question':'Write a program that adds two numbers stored in variables and then displays the result.',
      'option': 'Pseudo',
      'Marks':'10',
      'Topic':'Addition (In-program)'
    },
    {
      'Title':'Multiplication',
      'Question':'Design a program that requests two numbers from the user, multiplies them, and then displays the product.',
      'option': 'any',
      'Marks':'10',
      'Topic':'Multiplication'
    }
  ]

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

function WelcomeMsg({codingActive, showButtons, questionIndex, languageMode}) {

  const [input, setInput] = React.useState();
  const [aiFeedback, setAIFeedback] = React.useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus urna nibh, in convallis urna mattis eget. Nulla non luctus massa, a semper orci. Vivamus gravida, mi tincidunt sodales aliquam, dolor diam rhoncus nunc, quis malesuada nunc mauris nec diam. Nam aliquet pulvinar magna eget pretium. Cras erat turpis, dapibus eu felis ut, efficitur laoreet augue. Aenean at erat vel justo commodo rhoncus sed a urna. Integer eu orci venenatis, lobortis nibh at, laoreet ipsum. Nam fringilla libero at felis blandit volutpat. Quisque dapibus tortor vitae elit porta, eget sollicitudin nunc interdum. Phasellus eu erat eget ex cursus tristique. Integer suscipit mauris at magna tristique, id tristique augue euismod. Aliquam eu sollicitudin eros. Mauris at felis in dui mattis pretium. In blandit metus eget arcu rutrum, convallis pharetra dolor porta.')
  const [mode, setMode] = React.useState('Python');
  

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
  const [playFocus, setplayFocus] = React.useState(false);
  const [showPError, setshowPError] = React.useState(false)
  const [showLoader, setShowLoader] = React.useState(false)
  const [promptInput, setpromptInput] = React.useState('');
  const [validCode, setValidCode] = React.useState(false);

  // if(!codingActive){
  //   resetDev()
  // }

  function run() {
    
    return runPython(input);
}

function reset() {
   setInput('')
}

function convertToJSON(str) {
  let jsonresponse;
    try {
      jsonresponse = JSON.parse(str);
      return jsonresponse
  } catch (e) {
    jsonresponse = str;
  return jsonresponse
}
}

function resetDev() {
  setAIFeedback('')
  setInput('')
  
}

function indexChecker(index,jsonObj) {
  let indexValue = ''
  if(index=='Reasoning') {
      if(jsonObj.hasOwnProperty('Reasoning'))
         { 
          indexValue = jsonObj.Reasoning 
          }
      else {
          indexValue = jsonObj.reasoning
      }
  }
  // console.log(indexValue)
  return indexValue;

}

const handleSubmitCode = (event) => {
  console.log('hello11 '+codingActive)
 setshowPError(false)
 let practiceTestCount = 0;

//  setshowPracticeResult(false)
 if(input=='') {} else {
      if(codingActive == true) {
          let requestPackage = {
              mode: languageMode,
              code: input.replace('+', "plus_plus"),
              marks: PracticeQuestionsList[questionIndex].Marks,
              topic: PracticeQuestionsList[questionIndex].Topic,
              test: 'yes'
          }
          console.log(PracticeQuestionsList[questionIndex])
          let urlstring = `https://ai-api-alpha.vercel.app/api/evaluate_code?question=${JSON.stringify(requestPackage)}`
          // let urlstring = `http://localhost:3000/api/evaluate_code?question=${JSON.stringify(requestPackage)}`
          console.log(urlstring)
          setShowLoader(true)
          axios.get(urlstring)
          .then((data) => { 
              // console.log(data.data)
              // setShowOutput(true);
              setShowLoader(false);
              let resObj = convertToJSON(data.data)

              // setEvaluationResult(true)
              let isValid = resObj.valid
              if(isValid == 'valid')
                  { 
                      setValidCode(false)
                      if(mode=='Python'){
                          run()
                      } else {
                          runPython(resObj.code)
                      }
                      
                      // setEvaluationResult(indexChecker('Reasoning',resObj))

                      // marks.push(resObj.marks)
              } else {
                  console.log('here invalid')
                  setValidCode(true)
                  // setEvaluationResult(indexChecker('Reasoning',resObj))
                  setAIFeedback(indexChecker('Reasoning',resObj))

              }
              
          })
          .catch(error => {
              console.log(error)
              setShowLoader(false)
              setshowPError(true)
              // setShowOutput(true);
          });
      } else {

          let requestPackage = {
              mode: mode,
              code: input.replace('+', "plus_plus"),
              test: 'no'
          }

           let urlstring = `https://ai-api-alpha.vercel.app/api/evaluate_code?question=${JSON.stringify(requestPackage)}`

          // let urlstring = `http://localhost:3000/api/evaluate_code?question=${JSON.stringify(requestPackage)}`
          console.log(urlstring)
          setShowLoader(true)
          axios.get(urlstring)
          .then((data) => { 
              console.log(data.data)
              // setShowOutput(true);
              setShowLoader(false);
              let resObj = convertToJSON(data.data)
              // setEvaluationResult(true)
              let isValid = resObj.valid
              console.log("meow1 " + typeof(resObj))
              console.log("meow2 " + JSON.stringify(resObj))


              if(isValid == 'valid')
                  { 
                      // setValidCode(true)
                      if(mode=='Python'){
                          run()
                      } else {
                          runPython(resObj.code)
                      }

                      // setEvaluationResult(indexChecker('Reasoning',resObj))

                      
                      
              } else {
                  console.log("meow " + resObj.Reasoning)
                  // setValidCode(false)
                  // setEvaluationResult(indexChecker('Reasoning',resObj))
              }
              
          })
          .catch(error => {
              console.log(error)
              setShowLoader(false)

              setshowPError(true)
              setShowOutput(true);
          });
          
      } 
  }
};

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
    </>;
}

function showButtons() {
  return showButtons || isMobile() || playFocus || resetFocus;
}

function handleInputSubmission() {
   sendInput(promptInput.replace(prompt,'').trim())

}

function onChangeIS (event) {
  setpromptInput(event.target.value)
}

  function Editor() {
    const {colorMode} = useColorMode();
    const isBrowser = useIsBrowser();
  // alert(isBrowser)
    let AceEditor = null;
    // if (isBrowser) {
        AceEditor = require('react-ace').default;
        require("ace-builds/src-noconflict/mode-python");
        require("ace-builds/src-noconflict/theme-textmate");
        require("ace-builds/src-noconflict/theme-idle_fingers");
        require("ace-builds/src-noconflict/ext-language_tools");
    // }
  
  
    const editorOptions = {
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      highlightActiveLine: false,
      showPrintMargin: false,
      showGutter: false,
  };

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

const fallback = <pre style={{margin: 0, padding: "0.55rem"}}>{input}</pre>;


  return(
     <div className='welcomeText' style={codingActive ? {width: "100%"} : {}}>
      {showLoader &&  <DisplayLoader />}
      { isLoading &&  <DisplayLoader />}
    {!codingActive && <p className='greetings'>Greetings From Codee</p>}
    {!codingActive && <p className='message'>Navigate to the right to pick the type of question you wish to practice.</p>}
    {codingActive &&<Grid container >
        <Grid xs={4} style={{height:"100vh"}}>
          <BrowserOnly fallback={fallback}>
            {() => (
                <div className={"Ceditor"} onMouseLeave={() => {
                    // setplayFocus(false);
                    // setresetFocus(false);
                }}>
                    
                    <div className={"Ceditor-window"}>
                      {Editor()}
                    
                    <div className={"btnContainer"} style={showButtons() ? {opacity: 100} : {}}>
                         {isLoading ? <span>Loading...</span> : buttons()}
                     </div>
                    
                    </div>
                
      
                </div>
            )}
          </BrowserOnly>
        </Grid>
        <Grid xs={4} style={{height:"100vh"}}>
        <div className='codeOutput'>
         
            <Stack spacing={2}>
            { stdout &&<label style={{  fontWeight: "bold",  color:"black", fontSize: "24px" }}>
              Output
            </label> }
            { stdout &&<p style={{  fontFamily: "Arial", fontWeight: "regular", color:"black" }}>{stdout}</p> } 
          {isAwaitingInput && <p style={{  fontFamily: "Arial", fontWeight: "regular", color:"black" }}>Enter Input: </p>}
            {isAwaitingInput &&  <TextField id="standard-basic" label="Standard" variant="standard" size="small" defaultValue={prompt} onChange={onChangeIS}/>}
            {isAwaitingInput && <Button variant="contained" onClick={handleInputSubmission}>Submit Input</Button>}

          </Stack>
          
        </div>
        <Divider />
        <div className='codeFeedback'>
          <Stack spacing={2}>
            {validCode && <label style={{  fontWeight: "bold",  color:"black", fontSize: "32px" }}>
              Feedback
            </label>}
            {validCode && <p>{aiFeedback}</p>}
          </Stack>
        </div>
        </Grid>
      </Grid>}
     
    </div>
  )
}

function LeftMenu({sendValueToRightMenu, sendQuestionIndex, sendLanguageMode}) {

  const [practiceList, setPracticeList] = React.useState(false)
  const [examList, setExamList] = React.useState(false)
  const [questionView, setQuestionView] = React.useState(false)
  const [language, setLanguage] = React.useState('');
  const [selectedQuestion, setSelectedQuestion] = React.useState({'Title':'','Question':'','option':''});
  const [enabledOption, setEnabledOption] = React.useState(false);
  const handleLanguageSelection = (event) => {
    setLanguage(event.target.value);
    sendLanguageMode(event.target.value)
    sendValueToRightMenu(true)
  };

  const expandPracticeQuestions = () => {
     setPracticeList(practiceList=>!practiceList)
  }
  const expandExamQuestions = () => {
    setExamList(examList=>!examList)
 }

 const handlePracticeQuestion = (event, index) => {
  // alert(index)
    setQuestionView(questionView=>!questionView)
    setSelectedQuestion(PracticeQuestionsList[index])
    sendQuestionIndex(index)
    
    if(PracticeQuestionsList[index].option=='any') {
        setEnabledOption(false)
        
    } else {

      setEnabledOption(true)
      setLanguage(PracticeQuestionsList[index].option)
      sendValueToRightMenu(true)
    }
 }

 const handleBackListView  = () => {
  setQuestionView(questionView=>!questionView)
  sendValueToRightMenu(false)
  setLanguage('');
  sendLanguageMode('')


 }

 const listView = `


 `

  return (
    <Box sx={{ width: '100%' }}>
      {!questionView && <Stack spacing={2}>
        <p className='categoryTitle'>Categories</p>
        <p className='categoryMsg'>Select a question from the below categories to get started with Codee:</p>

        <div className='practiceMenu'>

          <BootstrapButton variant="contained" disableRipple onClick={expandPracticeQuestions}> 
            <span>Practice Questions (5)</span>
          </BootstrapButton>
          {practiceList &&
          <List style={listStyle}>          
          {PracticeQuestionsList.map((obj, index) => (  
            <ListItem key={index} disablePadding>
            <ListItemButton onClick={(event) => handlePracticeQuestion(event, index)}>
            
              <ListItemText primary={index+1+'. '+obj.Title} />
            </ListItemButton>
            <Divider />
          </ListItem>
            ))}
          </List>
          }
        </div>
        <div className='practiceMenu'>

          <BootstrapButton onClick={expandExamQuestions} variant="contained" disableRipple>
            <span>Exam Questions (5)</span>
          </BootstrapButton>
          {examList &&
          <List style={listStyle}>          
          {['1. a', '2. a', '3. a', '4. a','5. a'].map((text, index) => (  
            <ListItem key={text} disablePadding>
            <ListItemButton>
            
              <ListItemText primary={text} />
            </ListItemButton>
            <Divider />
          </ListItem>
            ))}
          </List> 
          }
        </div>
        
        </Stack > }
       
        {questionView && <Stack spacing={2} style={{padding: '5%' }} >
        <Grid container >
        <Grid xs={10}><p className='questionLabel'>Question</p></Grid>
        <Grid xs={2}>
          <IconButton aria-label="back" onClick={handleBackListView}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        </Grid>
          
        <p className='questionTitle'>{selectedQuestion.Title}</p>
        <p className='questionText'>{selectedQuestion.Question}</p>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Select Language"
          onChange={handleLanguageSelection}
          style={{width: "50%"}}
          disabled={enabledOption}
        >
          <MenuItem value={"Python"}>Python</MenuItem>
          <MenuItem value={"OCR"}>OCR/ERL</MenuItem>
          <MenuItem value={"Pseudo"}>Pseudo</MenuItem>
        </Select>
      </FormControl>
        </Stack>
        }

     </Box>
  )

}


export default function Codee() {

  const [activateCoding, setActivateCoding] = React.useState(false)
  const [questionIndex, setQuestionIndex] = React.useState(0)
  const [LMode, setLMode] = React.useState('Python')
  const getValuefromLeftMenu = (value) => {
    setActivateCoding(value)
  }
  const getIndexfromLeftMenu = (value) => {
    setQuestionIndex(value)
  }
  const getLmodefromLeftMenu = (value) => {
    setLMode(value)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container >
        <Grid xs={4}>
          {/* <Item>xs=8</Item> */}
         <div className={"leftCell"}>
          <LeftMenu sendValueToRightMenu={getValuefromLeftMenu} sendQuestionIndex={getIndexfromLeftMenu} sendLanguageMode={getLmodefromLeftMenu}/>
         </div>
        </Grid>
        <Grid xs={8}>
          {/* <Item>xs=4</Item> */}
          <div className={"rightCell"}>
            <WelcomeMsg codingActive={activateCoding} questionIndex={questionIndex} languageMode={LMode}/>
          </div>
        </Grid>
       
      </Grid>
    </Box>
)
}