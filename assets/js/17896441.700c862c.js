"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[918],{261:(n,e,t)=>{t.r(e),t.d(e,{default:()=>y});var i=t(7294),o=t(1262),r=t(2389),a=t(2949),s=t(7562),l=t(948),d=t(1233),u=t(5616),c=t(629),m=t(2804),f=t(5121),p=t(5893);const h=(0,l.default)(c.default)((n=>{let{theme:e}=n;return{backgroundColor:"dark"===e.palette.mode?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}})),g={enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,highlightActiveLine:!1,showPrintMargin:!1,showGutter:!1};function x(n,e,t){let i=n.commands.byName[e];i.bindKeyOriginal||(i.bindKeyOriginal=i.bindKey),i.bindKey=t?i.bindKeyOriginal:null,n.commands.addCommand(i)}const b=n=>{n.renderer.setScrollMargin(10,10,0,0),n.renderer.setPadding(16),n.moveCursorTo(0,0),x(n,"indent",!1),x(n,"outdent",!1),n.commands.on("afterExec",(e=>{"disable-indent"!==e.command.name&&(x(n,"indent",!0),x(n,"outdent",!0))})),n.on("click",(e=>{x(n,"indent",!0),x(n,"outdent",!0)})),n.on("blur",(e=>{x(n,"indent",!1),x(n,"outdent",!1)})),n.commands.addCommand({name:"disable-indent",bindKey:{win:"esc",mac:"esc"},exec:n=>{x(n,"indent",!1),x(n,"outdent",!1)}})},j=()=>!!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;function y(n){const[e,l]=(0,i.useState)(n.code.trimEnd()),[c,x]=(0,i.useState)(!1),[y,k]=(0,i.useState)(!1),[C,v]=(0,i.useState)(!1),[w,S]=(0,i.useState)(""),[E,A]=(0,i.useState)(""),[N,P]=(0,i.useState)(""),[T,L]=(0,i.useState)(!1),[B,I]=(0,i.useState)("");(0,i.useEffect)((()=>{l(n.code.trimEnd()),x(!0)}),[n.code]);const{runPython:K,stdout:M,stderr:R,isLoading:Y,isRunning:F,interruptExecution:O,isAwaitingInput:X,sendInput:_,prompt:G}=(0,s.usePython)(),{colorMode:z}=(0,a.useColorMode)(),V=(0,r.default)();let W=null;function $(n){S(n.target.value)}function q(){_(w.replace(G,"").trim())}function J(){let n={code:e};console.log("sent");let t=`https://ai-api-alpha.vercel.app/api/aicodeevaluation?question=${JSON.stringify(n)}`;f.default.get(t).then((n=>{console.log(n.data),L(!0),I(n.data.AI_Answer)})).catch((n=>console.log(n)))}function D(n){let e=n.target.id;if("1"==e){l('\n# Program to check if a number is prime or not\n\nnum = 29\n\n# To take input from the user\n#num = int(input("Enter a number: "))\n\n# define a flag variable\nflag = False\n\nif num == 1:\n    print(num, "is not a prime number")\nelif num > 1:\n# check for factors\n    for i in range(2, num):\n        if (num % i) == 0:\n            # if factor is found, set flag to True\n            flag = True\n            # break out of loop\n            break\n\n# check if flag is True\nif flag:\n    print(num, "is not a prime number")\nelse:\n    print(num, "is a prime number")\n  ')}else if("2"==e){l('\n# Python program to find the factorial of a number provided by the user.\n\n# change the value for a different result\nnum = 7\n\n# To take input from the user\n#num = int(input("Enter a number: "))\n\nfactorial = 1\n\n# check if the number is negative, positive or zero\nif num < 0:\n    print("Sorry, factorial does not exist for negative numbers")\nelif num == 0:\n    print("The factorial of 0 is 1")\nelse:\n    for i in range(1,num + 1):\n        factorial = factorial*i\n    print("The factorial of",num,"is",factorial)\n          ')}else if("3"==e){l("\n# Program to multiply two matrices using nested loops\n\n# 3x3 matrix\nX = [[12,7,3],\n    [4 ,5,6],\n    [7 ,8,9]]\n# 3x4 matrix\nY = [[5,8,1,2],\n    [6,7,3,0],\n    [4,5,9,1]]\n# result is 3x4\nresult = [[0,0,0,0],\n        [0,0,0,0],\n        [0,0,0,0]]\n\n# iterate through rows of X\nfor i in range(len(X)):\n    # iterate through columns of Y\n    for j in range(len(Y[0])):\n        # iterate through rows of Y\n        for k in range(len(Y)):\n            result[i][j] += X[i][k] * Y[k][j]\n\nfor r in result:\n    print(r)\n  \n          ")}else if("4"==e){l("\n# Simple Input\nprint('Enter input:')\nx  = input()\nprint(x)\n                    ")}else if("5"==e){l("\n# Simple Addition between two input numbers \nprint('Enter first Number:')\nx  = input()\nprint('Enter Second Number:')\ny = input()\nprint('sum:')\nprint(int(x)+int(y))\n                    ")}}function H(){x(!1),l(n.code.trimEnd())}function Q(){return x(!0),K(e)}function U(){x(!1),O()}V&&(W=t(4981).default,t(4007),t(2777),t(3783),t(2679));const Z=(0,p.jsx)("pre",{style:{margin:0,padding:"0.55rem"},children:e});return(0,p.jsx)(o.default,{fallback:Z,children:()=>(0,p.jsx)("div",{className:"code-editor",onMouseLeave:()=>{k(!1),v(!1)},children:(0,p.jsx)(u.default,{sx:{flexGrow:1},children:(0,p.jsxs)(m.default,{container:!0,spacing:2,children:[(0,p.jsxs)(m.default,{xs:6,children:[(0,p.jsxs)(d.default,{direction:"row",spacing:2,children:[(0,p.jsx)(h,{id:"1",onClick:D,children:"Example 1"}),(0,p.jsx)(h,{id:"2",onClick:D,children:"Example 2 "}),(0,p.jsx)(h,{id:"3",onClick:D,children:"Example 3"}),(0,p.jsx)(h,{id:"4",onClick:D,children:"Example 4"}),(0,p.jsx)(h,{id:"5",onClick:D,children:"Example 5"})]}),(0,p.jsxs)("div",{className:"code-editor-window",style:c?{borderRadius:".25em .25em 0 0"}:{},children:[(0,p.jsx)(W,{value:e,mode:"python",name:"CodeBlock",fontSize:"0.9rem",theme:"dark"===z?"idle_fingers":"textmate",onChange:(n,e)=>l(n),width:"100%",maxLines:1/0,style:{backgroundColor:"rgba(0, 0, 0, 0)"},onLoad:b,editorProps:{$blockScrolling:!0},setOptions:g}),(0,p.jsx)("div",{className:"button-container",style:n.showButtons||j()||y||C?{opacity:100}:{},children:Y?(0,p.jsx)("span",{children:"Loading..."}):(0,p.jsxs)(p.Fragment,{children:[F?(0,p.jsx)("button",{className:"icon-button",disabled:Y||!F,onClick:U,onFocus:()=>k(!0),onBlur:()=>k(!1),"aria-label":"Stop Code",title:"Stop Code",children:(0,p.jsx)("span",{className:"icon lsf-icon",title:"stop"})}):(0,p.jsx)("button",{className:"icon-button",disabled:Y||F,onClick:Q,onFocus:()=>k(!0),onBlur:()=>k(!1),"aria-label":"Run Code",title:"Run Code",children:(0,p.jsx)("span",{className:"icon lsf-icon",title:"play"})}),(0,p.jsx)("button",{className:"icon-button",onClick:H,onFocus:()=>v(!0),onBlur:()=>v(!1),"aria-label":"Reset Code Window",title:"Reset Code Window",children:(0,p.jsx)("span",{className:"icon lsf-icon",title:"refresh"})})]})})]})]}),(0,p.jsx)(m.default,{xs:6,children:c&&(0,p.jsxs)("pre",{className:"output-window",children:[(0,p.jsx)("span",{children:M}),(0,p.jsx)("span",{style:{color:"var(--text-code-error)"},children:R}),M&&(0,p.jsx)("div",{children:(0,p.jsx)("button",{type:"button",onClick:J,children:"Get AI feedback"})}),T&&(0,p.jsx)("span",{children:B})]})}),X&&(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{type:"text",id:"fname",name:"fname",defaultValue:G,onChange:$}),(0,p.jsx)("button",{type:"button",onClick:q,children:"Submit Input"})]})]})})})})}},8573:(n,e,t)=>{t.r(e),t.d(e,{default:()=>d});var i=t(7294),o=t(2389),r=t(1170),a=t(6110),s=t(261),l=t(5893);function d(n){let{children:e,...t}=n;const d=function(n){return i.Children.toArray(n).some((n=>(0,i.isValidElement)(n)))?n:Array.isArray(n)?n.join(""):n}(e);if("language-python"===t.className)return(0,l.jsx)(s.default,{code:d});{const n=(0,o.default)(),e="string"==typeof d?a.default:r.default;return(0,l.jsx)(e,{...t,children:d},String(n))}}}}]);