"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[763],{3729:(e,a,t)=>{t.r(a),t.d(a,{default:()=>N});var l=t(7294),s=t(9661),i=t(1057),n=t(6720),d=t(1903),r=t(7998),o=t(6886),m=t(5616),u=t(3845),c=t(5861),f=t(5582),h=t(1265),x=t(2430),p=t(6040),g=t(1207),j=t(5121),w=t(2567),b=t(5893);const y=(0,h.createMuiTheme)({palette:{mode:"dark"}});function N(){(0,l.useEffect)((()=>{if(0!=w.default.getEmail()){const e=Array.from(document.getElementsByClassName("navbar__items navbar__items--right"));for(let a=0;a<e[0].children.length;a++){let t=e[0].children[a];"Login"==t.innerHTML?(t.innerHTML=w.default.getEmail(),t.href="#"):console.log(t.innerHTML)}}}),[]);const[e,a]=l.useState("Signup"),[t,h]=(0,l.useState)(!1);const N=e=>{e.preventDefault();const t=new FormData(e.currentTarget);let l=t.get("email"),s=t.get("password");if(l)if(s){a("");let e={email:t.get("email"),password:t.get("password"),firstname:t.get("firstName"),lastname:t.get("lastName")};console.log(e),function(e){let t=`https://ai-api-alpha.vercel.app/api/signup_request?signup_data=${JSON.stringify(e)}`;console.log(t),h(!0),j.default.get(t).then((t=>{let l=t.data.message;a(l),h(!1),"User Registered"==l&&(w.default.setEmail(e.email),console.log(l),window.location="/login")})).catch((e=>console.log(e)))}(e)}else a("Please enter password");else a("Please enter email")};return(0,b.jsx)(p.default,{title:"Python IDE",children:(0,b.jsx)("main",{className:g.default.signup,children:(0,b.jsx)("div",{className:g.default.heroContainer,children:(0,b.jsx)("div",{className:g.default.codeEditorWrapper,children:(0,b.jsxs)(x.default,{theme:y,children:[t&&(0,b.jsx)(DisplayLoader,{}),(0,b.jsxs)(f.default,{component:"main",maxWidth:"xs",children:[(0,b.jsx)(n.default,{}),(0,b.jsxs)(m.default,{sx:{marginTop:-4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(s.default,{sx:{m:1,bgcolor:"secondary.main"},children:(0,b.jsx)(u.default,{})}),(0,b.jsx)(c.default,{component:"h1",variant:"h5",children:e}),(0,b.jsxs)(m.default,{component:"form",noValidate:!0,onSubmit:N,sx:{mt:3},children:[(0,b.jsxs)(o.default,{container:!0,spacing:2,children:[(0,b.jsx)(o.default,{item:!0,xs:12,sm:6,children:(0,b.jsx)(d.default,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,b.jsx)(o.default,{item:!0,xs:12,sm:6,children:(0,b.jsx)(d.default,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,b.jsx)(o.default,{item:!0,xs:12,children:(0,b.jsx)(d.default,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,b.jsx)(o.default,{item:!0,xs:12,children:(0,b.jsx)(d.default,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})}),(0,b.jsx)(o.default,{item:!0,xs:12})]}),(0,b.jsx)(i.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,b.jsx)(o.default,{container:!0,justifyContent:"flex-end",children:(0,b.jsx)(o.default,{item:!0,children:(0,b.jsx)(r.default,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})]})})})})})}}}]);