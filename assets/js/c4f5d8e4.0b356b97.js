"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[195],{9070:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N});var i=t(7294),o=t(1262),s=t(2389),a=t(2949),l=t(7562),r=t(948),d=t(1233),c=t(5616),u=t(629),p=t(7400),f=t(5893);var h=t(5121),x=t(8553),m=t(8122),g=t(7300);t(1146);let j=[0,0],b=0,y="blue";const C=(0,r.default)(u.default)((e=>{let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}})),w={enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,highlightActiveLine:!1,showPrintMargin:!1,showGutter:!1};function v(e,n,t){let i=e.commands.byName[n];i.bindKeyOriginal||(i.bindKeyOriginal=i.bindKey),i.bindKey=t?i.bindKeyOriginal:null,e.commands.addCommand(i)}const k=e=>{e.renderer.setScrollMargin(10,10,0,0),e.renderer.setPadding(16),e.moveCursorTo(0,0),v(e,"indent",!1),v(e,"outdent",!1),e.commands.on("afterExec",(n=>{"disable-indent"!==n.command.name&&(v(e,"indent",!0),v(e,"outdent",!0))})),e.on("click",(n=>{v(e,"indent",!0),v(e,"outdent",!0)})),e.on("blur",(n=>{v(e,"indent",!1),v(e,"outdent",!1)})),e.commands.addCommand({name:"disable-indent",bindKey:{win:"esc",mac:"esc"},exec:e=>{v(e,"indent",!1),v(e,"outdent",!1)}})},S=()=>!!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;function N(e){const[n,r]=(0,i.useState)(e.code.trimEnd()),[u,v]=(0,i.useState)(!1),[N,E]=(0,i.useState)(!1),[A,P]=(0,i.useState)(!1),[_,B]=(0,i.useState)(""),[O,L]=(0,i.useState)(""),[R,I]=(0,i.useState)(""),[T,q]=(0,i.useState)(!1),[K,M]=(0,i.useState)(""),[F,W]=(0,i.useState)(""),[G,J]=(0,i.useState)(""),[$,D]=(0,i.useState)(!1),[Q,z]=(0,i.useState)("Begin Test"),[Y,V]=(0,i.useState)(!1),[X,H]=(0,i.useState)(!1);(0,i.useEffect)((()=>{r(e.code.trimEnd()),v(!0)}),[e.code]);const{runPython:U,stdout:Z,stderr:ee,isLoading:ne,isRunning:te,interruptExecution:ie,isAwaitingInput:oe,sendInput:se,prompt:ae}=(0,l.usePython)(),{colorMode:le}=(0,a.useColorMode)(),re=(0,s.default)();let de=null;function ce(e){B(e.target.value)}function ue(){se(_.replace(ae,"").trim())}function pe(){let e={code:JSON.stringify(n)};console.log(n),H(!0);let t=`https://ai-api-alpha.vercel.app/api/aicodeevaluation?question=${JSON.stringify(e)}`;console.log(t),h.default.get(t).then((e=>{console.log(e.data),q(!0),H(!1),M(e.data.AI_Answer)})).catch((e=>console.log(e)))}function fe(e){M(""),q(!1),v(!1);let n=e.target.id;if("1"==n){r('\n\nnum = 29\n\nflag = False\n\nif num == 1:\n    print(num, "is not a prime number")\nelif num > 1:\n    for i in range(2, num):\n        if (num % i) == 0:\n            flag = True\n            break\n\nif flag:\n    print(num, "is not a prime number")\nelse:\n    print(num, "is a prime number")\n  ')}else if("2"==n){r('\nnum = 7\n\n\nfactorial = 1\n\nif num < 0:\n    print("Sorry, factorial does not exist for negative numbers")\nelif num == 0:\n    print("The factorial of 0 is 1")\nelse:\n    for i in range(1,num + 1):\n        factorial = factorial*i\n    print("The factorial of",num,"is",factorial)\n          ')}else if("3"==n){r("\n\nX = [[12,7,3],\n    [4 ,5,6],\n    [7 ,8,9]]\nY = [[5,8,1,2],\n    [6,7,3,0],\n    [4,5,9,1]]\nresult = [[0,0,0,0],\n        [0,0,0,0],\n        [0,0,0,0]]\n\nfor i in range(len(X)):\n    for j in range(len(Y[0])):\n\n        for k in range(len(Y)):\n            result[i][j] += X[i][k] * Y[k][j]\n\nfor r in result:\n    print(r)\n  \n          ")}else if("4"==n){r("\nprint('Enter input:')\nx  = input()\nprint(x)\n                    ")}else if("5"==n){r("\nprint('Enter first Number:')\nx  = input()\nprint('Enter Second Number:')\ny = input()\nprint('sum:')\nprint(int(x)+int(y))\n                    ")}}function he(){if(D(!0),V(!1),v(!0),z("End Test"),b=0,"Begin Test"==Q){H(!0);let e="https://ai-api-alpha.vercel.app/api/test_questions_request?q=1";console.log(e),h.default.get(e).then((e=>{J(e.data.message),ge(e.data.message),H(!1),b++})).catch((e=>console.log(e)))}else D(!1),z("Begin Test"),W(""),V(!0)}function xe(e){b<2&&(b++,b>=2?b=1:b<0&&(b=0),ge(G))}function me(e){b>=0&&((b>=2||b<0)&&(b=0),ge(G),b--)}function ge(e){console.log(b);let n=e[b].Description;W(n.replace("\t",""))}function je(){v(!1),r(e.code.trimEnd())}function be(){return V(!1),v(!0),console.log(n),U(n)}function ye(){v(!1),ie()}function Ce(){return(0,f.jsxs)(f.Fragment,{children:[te?(0,f.jsx)("button",{className:"icon-button",disabled:ne||!te,onClick:ye,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Stop Code",title:"Stop Code",children:(0,f.jsx)("span",{className:"icon lsf-icon",title:"stop"})}):(0,f.jsx)("button",{className:"icon-button",disabled:ne||te,onClick:be,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Run Code",title:"Run Code",children:(0,f.jsx)("span",{className:"icon lsf-icon",title:"play"})}),(0,f.jsx)("button",{className:"icon-button",onClick:je,onFocus:()=>P(!0),onBlur:()=>P(!1),"aria-label":"Reset Code Window",title:"Reset Code Window",children:(0,f.jsx)("span",{className:"icon lsf-icon",title:"refresh"})})]})}function we(){return(0,f.jsxs)("pre",{className:"output-window",children:[(0,f.jsxs)("p",{children:["Q1 ",j[0]]}),(0,f.jsxs)("p",{children:["Q2 ",j[1]]})]})}function ve(){return(0,f.jsxs)("div",{children:[!Y&&(0,f.jsxs)("pre",{className:"output-window",children:[(0,f.jsx)("span",{children:Z}),(0,f.jsx)("span",{style:{color:"var(--text-code-error)"},children:ee})]}),Y&&(0,f.jsx)("pre",{className:"output-window",children:(0,f.jsx)(we,{})}),(0,f.jsxs)("pre",{className:"output-window",children:[Z&&Ne(),(0,f.jsx)("span",{children:K})]})]})}function ke(){return(0,f.jsx)("pre",{className:"question-window",children:(0,f.jsx)("span",{children:F})})}function Se(){return(0,f.jsxs)("div",{children:[(0,f.jsx)("input",{type:"text",id:"fname",name:"fname",defaultValue:ae,onChange:ce}),(0,f.jsx)("button",{type:"button",onClick:ue,children:"Submit Input"})]})}function Ne(){return j[b],(0,f.jsx)("div",{children:(0,f.jsx)("button",{type:"button",onClick:pe,children:"Get AI feedback"})})}function Ee(){return(0,f.jsx)(de,{value:n,mode:"python",name:"CodeBlock",fontSize:"0.9rem",theme:"dark"===le?"idle_fingers":"textmate",onChange:(e,n)=>r(e),width:"100%",maxLines:1/0,style:{backgroundColor:"rgba(0, 0, 0, 0)"},onLoad:k,editorProps:{$blockScrolling:!0},setOptions:w})}function Ae(){return e.showButtons||S()||N||A}function Pe(){return(0,f.jsx)("div",{className:"loaderC",children:(0,f.jsx)(g.default,{type:"box-rotate-x",bgColor:y,color:y,title:"Loading",size:100})})}re&&(de=t(4981).default,t(4007),t(2777),t(3783),t(2679));const _e=(0,f.jsx)("pre",{style:{margin:0,padding:"0.55rem"},children:n});return(0,f.jsx)(o.default,{fallback:_e,children:()=>(0,f.jsxs)("div",{className:"code-editor",onMouseLeave:()=>{E(!1),P(!1)},children:[X&&(0,f.jsx)(Pe,{}),ne&&(0,f.jsx)(Pe,{}),(0,f.jsx)(c.default,{sx:{flexGrow:1},children:(0,f.jsxs)(p.default,{container:!0,spacing:1,children:[(0,f.jsx)(p.default,{xs:12,children:(0,f.jsxs)(x.default,{variant:"contained","aria-label":"outlined primary button group",children:[$&&(0,f.jsx)(m.default,{onClick:me,children:"Previous"}),(0,f.jsx)(m.default,{onClick:he,children:Q}),$&&(0,f.jsx)(m.default,{children:"Template"}),$&&(0,f.jsx)(m.default,{children:"Outline"}),$&&(0,f.jsx)(m.default,{onClick:xe,children:"Next"})]})}),(0,f.jsx)(p.default,{xs:12,children:(0,f.jsxs)(p.default,{container:!0,spacing:1,children:[(0,f.jsx)(p.default,{xs:3,children:u&&ke()}),(0,f.jsxs)(p.default,{xs:4,children:[!$&&(0,f.jsxs)(d.default,{direction:"row",spacing:2,children:[(0,f.jsx)(C,{id:"1",onClick:fe,children:"Example 1"}),(0,f.jsx)(C,{id:"2",onClick:fe,children:"Example 2 "}),(0,f.jsx)(C,{id:"3",onClick:fe,children:"Example 3"}),(0,f.jsx)(C,{id:"4",onClick:fe,children:"Example 4"}),(0,f.jsx)(C,{id:"5",onClick:fe,children:"Example 5"})]}),(0,f.jsxs)("div",{className:"code-editor-window",style:u?{borderRadius:".25em .25em 0 0"}:{},children:[Ee(),(0,f.jsx)("div",{className:"button-container",style:Ae()?{opacity:100}:{},children:ne?(0,f.jsx)("span",{children:"Loading..."}):Ce()})]})]}),(0,f.jsx)(p.default,{xs:3,children:u&&ve()}),oe&&Se()]})})]})})]})})}},4109:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N});var i=t(7294),o=t(1262),s=t(2389),a=t(2949),l=t(7562),r=t(948),d=t(1233),c=t(5616),u=t(629),p=t(7400),f=t(5121),h=t(8553),x=t(8122),m=t(7300),g=t(5893);let j=[0,0],b=0,y="blue";const C=(0,r.default)(u.default)((e=>{let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}})),w={enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,highlightActiveLine:!1,showPrintMargin:!1,showGutter:!1};function v(e,n,t){let i=e.commands.byName[n];i.bindKeyOriginal||(i.bindKeyOriginal=i.bindKey),i.bindKey=t?i.bindKeyOriginal:null,e.commands.addCommand(i)}const k=e=>{e.renderer.setScrollMargin(10,10,0,0),e.renderer.setPadding(16),e.moveCursorTo(0,0),v(e,"indent",!1),v(e,"outdent",!1),e.commands.on("afterExec",(n=>{"disable-indent"!==n.command.name&&(v(e,"indent",!0),v(e,"outdent",!0))})),e.on("click",(n=>{v(e,"indent",!0),v(e,"outdent",!0)})),e.on("blur",(n=>{v(e,"indent",!1),v(e,"outdent",!1)})),e.commands.addCommand({name:"disable-indent",bindKey:{win:"esc",mac:"esc"},exec:e=>{v(e,"indent",!1),v(e,"outdent",!1)}})},S=()=>!!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;function N(e){const[n,r]=(0,i.useState)(e.code.trimEnd()),[u,v]=(0,i.useState)(!1),[N,E]=(0,i.useState)(!1),[A,P]=(0,i.useState)(!1),[_,B]=(0,i.useState)(""),[O,L]=(0,i.useState)(""),[R,I]=(0,i.useState)(""),[T,q]=(0,i.useState)(!1),[K,M]=(0,i.useState)(""),[F,W]=(0,i.useState)(!1),[G,J]=(0,i.useState)(""),[$,D]=(0,i.useState)(""),[Q,z]=(0,i.useState)(""),[Y,V]=(0,i.useState)(!1),[X,H]=(0,i.useState)("Begin Test"),[U,Z]=(0,i.useState)(!1),[ee,ne]=(0,i.useState)(!1);(0,i.useEffect)((()=>{r(e.code.trimEnd()),v(!0)}),[e.code]);const{runPython:te,stdout:ie,stderr:oe,isLoading:se,isRunning:ae,interruptExecution:le,isAwaitingInput:re,sendInput:de,prompt:ce}=(0,l.usePython)(),{colorMode:ue}=(0,a.useColorMode)(),pe=(0,s.default)();let fe=null;function he(e){B(e.target.value)}function xe(){de(_.replace(ce,"").trim())}function me(){let e={code:JSON.stringify(n)};console.log(n);let t=`https://ai-api-alpha.vercel.app/api/ai_code_evaluation_ocr?question=${JSON.stringify(e)}`;console.log(t),ne(!0),f.default.get(t).then((e=>{console.log(e.data),ne(!1),q(!0),M(e.data.AI_Answer)})).catch((e=>console.log(e)))}function ge(){return(0,g.jsxs)("pre",{className:"output-window",children:[(0,g.jsxs)("p",{children:["Q1 ",j[0]]}),(0,g.jsxs)("p",{children:["Q2 ",j[1]]})]})}function je(e){M("");let n=e.target.id;if("1"==n){r('\n  function validate_user()\n  const pw = "pass"\n  pwguess = ""\n  attempts = 1\n  do\n      print("Attempt number " + attempts)\n      pwguess = input("Password: ")\n      attempts += 1\n  until pwguess == pw OR attempts > 3\n\n  return pwguess == pw\nendfunction\n\nif validate_user() then\n  print("yay")\nelse\n  print("no")\nendif\n\n  ')}else if("2"==n){r('\na = real(input("Enter number: "))\n\nop = ""\ndo\n    op = input("Enter operation: ")\nuntil op == "+" OR op == "-" OR op == "*" OR op == "/" OR op == "^" OR op == "sqrt"\n\nb=0\n\nif op != "sqrt" then\n    b=real(input("Enter number: "))\nendif\n\nresult = 0\nswitch op:\n    case "+":\n        result = a+b\n    case "-":\n        result = a-b\n    case "*":\n        result = a*b\n    case "/":\n        result = a/b\n    case "^":\n        result = a^b\n    case "sqrt":\n        result = sqrt(a)\n    default:\n        print("Operation " + op + " not implemented")\nendswitch\n\nprint("Answer: " + result)\n          ')}else if("3"==n){r('\n\nfunction lookup(char, base)\nindex = -1\nsymbols = [\n    "0", "1", "2", "3",\n    "4", "5", "6", "7",\n    "8", "9", "A", "B",\n    "C", "D", "E", "F"\n]\nif base > symbols.length then\n    print("Sorry, only bases 1 to "+symbols.length+" are supported")\nendif\nfor j = 0 to base - 1\n    if char == symbols[j] then\n        index = j\n    endif\nnext j\nif index == -1 then\n    print("Invalid character "+char)\nendif\nreturn index\nendfunction\n\nfunction convert(hex, base)\nout = 0\nfor i = 0 to hex.length-1\n    out += base ^ (hex.length-1-i) * lookup(hex[i], base)\nnext i\nreturn out\nendfunction\n\nprint(convert("111101", 2)) //61\n  \n          ')}else if("4"==n){r('\nconst bookingFee = 1.50\nconst childPrice = 2.50\nconst adultPrice = 5.00\n\nfunction price(adults, children)\n    return adults * adultPrice + childPrice * 2.5 + bookingFee\nendfunction\n\nfunction format(price)\n    s = str(price)\n    out = ""\n    for i=0 to s.length - 1\n        if s[i] == "." then\n            if i+2 == s.length then //one dp\n                return "\xa3" +out + "." + s[i+1] + "0"\n            else //two dp\n                return "\xa3" + out + "." + s[i+1] + s[i+2]\n            endif\n        endif\n        out += s[i]\n    next i\n    //no dot, no dp\n    return "\xa3" + out + ".00"\nendfunction\n\nprint(format(price(3, 5)))\n                    ')}else if("5"==n){r('\nalphabet = [\n    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf",\n    "Hotel", "India", "Juliet", "Kilo", "Lima", "Mike", "November",\n    "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform",\n    "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"\n]\n\nx = input("Word:").lower\nresult = ""\n\nfor i=0 to x.length-1\n    if i != 0 then\n        result += " "\n    endif\n    result += alphabet[ASC(x[i])-97]\nnext i\n\nprint(result)\n                    ')}}function be(){v(!1),r(e.code.trimEnd())}function ye(){Z(!1);let e=`https://ai-api-alpha.vercel.app/api/ocr_code_interperation?question=${JSON.stringify(n)}`;console.log(e),ne(!0),f.default.get(e).then((e=>{console.log(e.data),ne(!1),v(!0),"invalid"==e.data.AI_Answer?(W(!0),J("Invalid Code, please enter valid OCR code")):te(e.data.AI_Answer)})).catch((e=>{ne(!1),v(!0),W(!0),J("Error interperating please try again")}))}function Ce(){v(!1),le()}function we(){return(0,g.jsxs)(g.Fragment,{children:[ae?(0,g.jsx)("button",{className:"icon-button",disabled:se||!ae,onClick:Ce,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Stop Code",title:"Stop Code",children:(0,g.jsx)("span",{className:"icon lsf-icon",title:"stop"})}):(0,g.jsx)("button",{className:"icon-button",disabled:se||ae,onClick:ye,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Run Code",title:"Run Code",children:(0,g.jsx)("span",{className:"icon lsf-icon",title:"play"})}),(0,g.jsx)("button",{className:"icon-button",onClick:be,onFocus:()=>P(!0),onBlur:()=>P(!1),"aria-label":"Reset Code Window",title:"Reset Code Window",children:(0,g.jsx)("span",{className:"icon lsf-icon",title:"refresh"})})]})}function ve(){return(0,g.jsxs)("div",{children:[!U&&(0,g.jsxs)("pre",{className:"output-window",children:[(0,g.jsx)("span",{children:ie}),(0,g.jsx)("span",{style:{color:"var(--text-code-error)"},children:oe}),(0,g.jsx)("span",{style:{color:"var(--text-code-error)"},children:G})]}),U&&(0,g.jsx)("pre",{className:"output-window",children:(0,g.jsx)(ge,{})}),(0,g.jsxs)("pre",{className:"output-window",children:[ie&&(0,g.jsx)("div",{children:(0,g.jsx)("button",{type:"button",onClick:me,children:"Get AI feedback"})}),(0,g.jsx)("span",{children:K})]})]})}function ke(){return(0,g.jsxs)("div",{children:[(0,g.jsx)("input",{type:"text",id:"fname",name:"fname",defaultValue:ce,onChange:he}),(0,g.jsx)("button",{type:"button",onClick:xe,children:"Submit Input"})]})}function Se(){return(0,g.jsx)(fe,{value:n,mode:"python",name:"CodeBlock",fontSize:"0.9rem",theme:"dark"===ue?"idle_fingers":"textmate",onChange:(e,n)=>r(e),width:"100%",maxLines:1/0,style:{backgroundColor:"rgba(0, 0, 0, 0)"},onLoad:k,editorProps:{$blockScrolling:!0},setOptions:w})}function Ne(){return e.showButtons||S()||N||A}function Ee(){if(V(!0),Z(!1),v(!0),H("End Test"),b=0,"Begin Test"==X){ne(!0);let e="https://ai-api-alpha.vercel.app/api/test_questions_request?q=1";console.log(e),f.default.get(e).then((e=>{z(e.data.message),Ae(e.data.message),ne(!1),b++})).catch((e=>console.log(e)))}else V(!1),H("Begin Test"),D(""),Z(!0)}function Ae(e){console.log(b);let n=e[b].Description;D(n.replace("\t",""))}function Pe(e){b<2&&(b++,b>=2?b=1:b<0&&(b=0),Ae(Q))}function _e(e){b>=0&&((b>=2||b<0)&&(b=0),Ae(Q),b--)}function Be(){return(0,g.jsx)("pre",{className:"question-window",children:(0,g.jsx)("span",{children:$})})}function Oe(){return(0,g.jsx)("div",{className:"loaderC",children:(0,g.jsx)(m.default,{type:"box-rotate-x",bgColor:y,color:y,title:"Loading",size:100})})}pe&&(fe=t(4981).default,t(4007),t(2777),t(3783),t(2679));const Le=(0,g.jsx)("pre",{style:{margin:0,padding:"0.55rem"},children:n});return(0,g.jsx)(o.default,{fallback:Le,children:()=>(0,g.jsxs)("div",{className:"code-editor",onMouseLeave:()=>{E(!1),P(!1)},children:[ee&&(0,g.jsx)(Oe,{}),se&&(0,g.jsx)(Oe,{}),(0,g.jsx)(c.default,{sx:{flexGrow:1},children:(0,g.jsxs)(p.default,{container:!0,spacing:1,children:[(0,g.jsx)(p.default,{xs:12,children:(0,g.jsxs)(h.default,{variant:"contained","aria-label":"outlined primary button group",children:[Y&&(0,g.jsx)(x.default,{onClick:_e,children:"Previous"}),(0,g.jsx)(x.default,{onClick:Ee,children:X}),Y&&(0,g.jsx)(x.default,{children:"Template"}),Y&&(0,g.jsx)(x.default,{children:"Outline"}),Y&&(0,g.jsx)(x.default,{onClick:Pe,children:"Next"})]})}),(0,g.jsx)(p.default,{xs:12,children:(0,g.jsxs)(p.default,{container:!0,spacing:1,children:[(0,g.jsx)(p.default,{xs:3,children:u&&Be()}),(0,g.jsxs)(p.default,{xs:5,style:{width:"50%"},children:[!Y&&(0,g.jsxs)(d.default,{direction:"row",spacing:2,children:[(0,g.jsx)(C,{id:"1",onClick:je,children:"Example 1"}),(0,g.jsx)(C,{id:"2",onClick:je,children:"Example 2 "}),(0,g.jsx)(C,{id:"3",onClick:je,children:"Example 3"}),(0,g.jsx)(C,{id:"4",onClick:je,children:"Example 4"}),(0,g.jsx)(C,{id:"5",onClick:je,children:"Example 5"})]}),(0,g.jsxs)("div",{className:"code-editor-window",style:u?{borderRadius:".25em .25em 0 0"}:{},children:[Se(),(0,g.jsx)("div",{className:"button-container",style:Ne()?{opacity:100}:{},children:se?(0,g.jsx)("span",{children:"Loading..."}):we()})]})]}),(0,g.jsx)(p.default,{xs:3,children:u&&ve()}),re&&ke()]})})]})})]})})}},722:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N});var i=t(7294),o=t(1262),s=t(2389),a=t(2949),l=t(7562),r=t(948),d=t(1233),c=t(5616),u=t(629),p=t(7400),f=t(5121),h=t(8553),x=t(8122),m=t(7300),g=t(5893);let j=[0,0],b=0,y="blue";const C=(0,r.default)(u.default)((e=>{let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}})),w={enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,highlightActiveLine:!1,showPrintMargin:!1,showGutter:!1};function v(e,n,t){let i=e.commands.byName[n];i.bindKeyOriginal||(i.bindKeyOriginal=i.bindKey),i.bindKey=t?i.bindKeyOriginal:null,e.commands.addCommand(i)}const k=e=>{e.renderer.setScrollMargin(10,10,0,0),e.renderer.setPadding(16),e.moveCursorTo(0,0),v(e,"indent",!1),v(e,"outdent",!1),e.commands.on("afterExec",(n=>{"disable-indent"!==n.command.name&&(v(e,"indent",!0),v(e,"outdent",!0))})),e.on("click",(n=>{v(e,"indent",!0),v(e,"outdent",!0)})),e.on("blur",(n=>{v(e,"indent",!1),v(e,"outdent",!1)})),e.commands.addCommand({name:"disable-indent",bindKey:{win:"esc",mac:"esc"},exec:e=>{v(e,"indent",!1),v(e,"outdent",!1)}})},S=()=>!!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;function N(e){const[n,r]=(0,i.useState)(e.code.trimEnd()),[u,v]=(0,i.useState)(!1),[N,E]=(0,i.useState)(!1),[A,P]=(0,i.useState)(!1),[_,B]=(0,i.useState)(""),[O,L]=(0,i.useState)(""),[R,I]=(0,i.useState)(""),[T,q]=(0,i.useState)(!1),[K,M]=(0,i.useState)(""),[F,W]=(0,i.useState)(!1),[G,J]=(0,i.useState)(""),[$,D]=(0,i.useState)(""),[Q,z]=(0,i.useState)(""),[Y,V]=(0,i.useState)(!1),[X,H]=(0,i.useState)("Begin Test"),[U,Z]=(0,i.useState)(!1),[ee,ne]=(0,i.useState)(!1);(0,i.useEffect)((()=>{r(e.code.trimEnd()),v(!0)}),[e.code]);const{runPython:te,stdout:ie,stderr:oe,isLoading:se,isRunning:ae,interruptExecution:le,isAwaitingInput:re,sendInput:de,prompt:ce}=(0,l.usePython)(),{colorMode:ue}=(0,a.useColorMode)(),pe=(0,s.default)();let fe=null;function he(e){B(e.target.value)}function xe(){de(_.replace(ce,"").trim())}function me(){let e={code:JSON.stringify(n)};console.log(n);let t=`https://ai-api-alpha.vercel.app/api/ai_code_evaluation_pseudo?question=${JSON.stringify(e)}`;console.log(t),ne(!0),f.default.get(t).then((e=>{console.log(e.data),ne(!1),q(!0),M(e.data.AI_Answer)})).catch((e=>console.log(e)))}function ge(e){M(""),q(!1),v(!1);let n=e.target.id;if("1"==n){r("\n\n\n  ")}else if("2"==n){r("\n\n          ")}else if("3"==n){r("\n\n\n  \n          ")}else if("4"==n){r("\n\n                    ")}else if("5"==n){r("\n ")}}function je(){v(!1),r(e.code.trimEnd())}function be(){Z(!1);let e=`https://ai-api-alpha.vercel.app/api/pseudo_code_interperation?question=${JSON.stringify(n)}`;console.log(e),ne(!0),f.default.get(e).then((e=>{console.log(e.data),v(!0),ne(!1),"invalid"==e.data.AI_Answer?(W(!0),J("Invalid Code, please enter valid Pseudo code")):(W(!1),te(e.data.AI_Answer))})).catch((e=>console.log(e)))}function ye(){v(!1),le()}function Ce(){return(0,g.jsxs)(g.Fragment,{children:[ae?(0,g.jsx)("button",{className:"icon-button",disabled:se||!ae,onClick:ye,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Stop Code",title:"Stop Code",children:(0,g.jsx)("span",{className:"icon lsf-icon",title:"stop"})}):(0,g.jsx)("button",{className:"icon-button",disabled:se||ae,onClick:be,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Run Code",title:"Run Code",children:(0,g.jsx)("span",{className:"icon lsf-icon",title:"play"})}),(0,g.jsx)("button",{className:"icon-button",onClick:je,onFocus:()=>P(!0),onBlur:()=>P(!1),"aria-label":"Reset Code Window",title:"Reset Code Window",children:(0,g.jsx)("span",{className:"icon lsf-icon",title:"refresh"})})]})}function we(){return(0,g.jsxs)("pre",{className:"output-window",children:[(0,g.jsxs)("p",{children:["Q1 ",j[0]]}),(0,g.jsxs)("p",{children:["Q2 ",j[1]]})]})}function ve(){return(0,g.jsxs)("div",{children:[!U&&(0,g.jsxs)("pre",{className:"output-window",children:[(0,g.jsx)("span",{children:ie}),(0,g.jsx)("span",{style:{color:"var(--text-code-error)"},children:oe}),(0,g.jsx)("span",{style:{color:"var(--text-code-error)"},children:G})]}),U&&(0,g.jsx)("pre",{className:"output-window",children:(0,g.jsx)(we,{})}),(0,g.jsxs)("pre",{className:"output-window",children:[ie&&(0,g.jsx)("div",{children:(0,g.jsx)("button",{type:"button",onClick:me,children:"Get AI feedback"})}),(0,g.jsx)("span",{children:K})]})]})}function ke(){return(0,g.jsxs)("div",{children:[(0,g.jsx)("input",{type:"text",id:"fname",name:"fname",defaultValue:ce,onChange:he}),(0,g.jsx)("button",{type:"button",onClick:xe,children:"Submit Input"})]})}function Se(){return(0,g.jsx)(fe,{value:n,mode:"python",name:"CodeBlock",fontSize:"0.9rem",theme:"dark"===ue?"idle_fingers":"textmate",onChange:(e,n)=>r(e),width:"100%",maxLines:1/0,style:{backgroundColor:"rgba(0, 0, 0, 0)"},onLoad:k,editorProps:{$blockScrolling:!0},setOptions:w})}function Ne(){return e.showButtons||S()||N||A}function Ee(){if(V(!0),Z(!1),v(!1),H("End Test"),b=0,"Begin Test"==X){ne(!0);let e="https://ai-api-alpha.vercel.app/api/test_questions_request?q=1";console.log(e),f.default.get(e).then((e=>{z(e.data.message),Ae(e.data.message),ne(!1),b++})).catch((e=>console.log(e)))}else V(!1),H("Begin Test"),D(""),Z(!0)}function Ae(e){console.log(b);let n=e[b].Description;D(n.replace("\t",""))}function Pe(e){b<2&&(b++,b>=2?b=1:b<0&&(b=0),Ae(Q))}function _e(e){b>=0&&((b>=2||b<0)&&(b=0),Ae(Q),b--)}function Be(){return(0,g.jsx)("pre",{className:"question-window",children:(0,g.jsx)("span",{children:$})})}function Oe(){return(0,g.jsx)("div",{className:"loaderC",children:(0,g.jsx)(m.default,{type:"box-rotate-x",bgColor:y,color:y,title:"Loading",size:100})})}pe&&(fe=t(4981).default,t(4007),t(2777),t(3783),t(2679));const Le=(0,g.jsx)("pre",{style:{margin:0,padding:"0.55rem"},children:n});return(0,g.jsx)(o.default,{fallback:Le,children:()=>(0,g.jsxs)("div",{className:"code-editor",onMouseLeave:()=>{E(!1),P(!1)},children:[ee&&(0,g.jsx)(Oe,{}),se&&(0,g.jsx)(Oe,{}),(0,g.jsx)(c.default,{sx:{flexGrow:1},children:(0,g.jsxs)(p.default,{container:!0,spacing:1,children:[(0,g.jsx)(p.default,{xs:12,children:(0,g.jsxs)(h.default,{variant:"contained","aria-label":"outlined primary button group",children:[Y&&(0,g.jsx)(x.default,{onClick:_e,children:"Previous"}),(0,g.jsx)(x.default,{onClick:Ee,children:X}),Y&&(0,g.jsx)(x.default,{children:"Template"}),Y&&(0,g.jsx)(x.default,{children:"Outline"}),Y&&(0,g.jsx)(x.default,{onClick:Pe,children:"Next"})]})}),(0,g.jsx)(p.default,{xs:12,children:(0,g.jsxs)(p.default,{container:!0,spacing:1,children:[(0,g.jsx)(p.default,{xs:3,children:u&&Be()}),(0,g.jsxs)(p.default,{xs:5,style:{width:"50%"},children:[!Y&&(0,g.jsxs)(d.default,{direction:"row",spacing:2,children:[(0,g.jsx)(C,{id:"1",onClick:ge,children:"Example 1"}),(0,g.jsx)(C,{id:"2",onClick:ge,children:"Example 2 "}),(0,g.jsx)(C,{id:"3",onClick:ge,children:"Example 3"}),(0,g.jsx)(C,{id:"4",onClick:ge,children:"Example 4"}),(0,g.jsx)(C,{id:"5",onClick:ge,children:"Example 5"})]}),(0,g.jsxs)("div",{className:"code-editor-window",style:u?{borderRadius:".25em .25em 0 0"}:{},children:[Se(),(0,g.jsx)("div",{className:"button-container",style:Ne()?{opacity:100}:{},children:se?(0,g.jsx)("span",{children:"Loading..."}):Ce()})]})]}),(0,g.jsx)(p.default,{xs:3,children:u&&ve()}),re&&ke()]})})]})})]})})}},2841:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});t(7294),t(3692);var i=t(6040),o=t(9070),s=(t(4109),t(722),t(1207)),a=t(5893);function l(){return(0,a.jsx)(i.default,{title:"Python IDE",children:(0,a.jsx)("main",{children:(0,a.jsx)("div",{className:s.default.heroContainer,children:(0,a.jsx)("div",{className:s.default.codeEditorWrapper,children:(0,a.jsx)(o.default,{code:'def foo():\n    print("How much foo")\n    print("would a foo bar bar")\n    print("if a foo bar could bar foo?")\n    \n    \ndef bar():\n    print("A foo bar would bar")\n    print("as much foo as a foo bar could bar")\n    print("if a foo bar could bar foo.")\n    \n\nfoo()\nprint()\nbar()\n',showButtons:!0})})})})})}},1207:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});const i={heroContainer:"heroContainer_i2aB",signup:"signup_SFg6",tagline:"tagline_Bqj_",codePrompt:"codePrompt_HTth",random:"random_CLNT",codeEditorWrapper:"codeEditorWrapper_t3Dg"}}}]);