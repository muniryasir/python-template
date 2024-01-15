import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';

// var OutputBox = (function() {
    export default function OutputBox() {
    // const [outputValue, setoutputValue] = useState('')
    const [aiFeedbackValue, setAIFeedbackValue] = useState('')

    function output(stdout,stderr) {
        return (
            <Grid container >
                <Grid xs={12}>               
                    <pre className={"output-window"}>
                        <span>{stdout}</span>
                        <span style={{color: "var(--text-code-error)"}}>{stderr}</span>
                    </pre>
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
    function showAIButton() {
        return (
            <div>
                <button type="button" onClick={handleAIFeedback}>Get AI feedback</button>
            </div>
        );
    }

    function handleAIFeedback() {
        let code = {code: JSON.stringify(input)}
        
        console.log(input)
       
        let urlstring = `https://ai-api-alpha.vercel.app/api/aicodeevaluation?question=${JSON.stringify(code)}`
        // let urlstring = `http://localhost:3001/api/aicodeevaluation?question=${JSON.stringify(code)}`
        console.log(urlstring)
        axios.get(urlstring)
        .then((data) => { 
            console.log(data.data)
            setAIFeedback(true);
            setAIFeedbackValue(data.data.AI_Answer)
        })
        .catch(error => console.log(error));
     

    }

    return {
        // setoutputValue: setoutputValue,
         output:output
    }
    }
// })();
  
// export default OutputBox;