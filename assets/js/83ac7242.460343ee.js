(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[763],{7760:(s,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>l});var a=t(381),n=t.n(a);const l=function(){let s="";var e=function(){const s=n()().format("MMMM Do YYYY, h:mm:ss a");"undefined"!=typeof window&&localStorage.setItem("timeout",s)},t=function(){let s=n()(),e=n()();return"undefined"!=typeof window&&(e=n()(localStorage.getItem("timeout"),"MMMM Do YYYY, h:mm:ss a")),!(s.diff(e,"minutes")>30)};return{getEmail:function(){return!!t()&&("undefined"!=typeof window&&(s=localStorage.getItem("email")),s)},setEmail:function(s){"undefined"!=typeof window&&localStorage.setItem("email",s),e()},setTimeout:e}}()},3729:(s,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>w});var a=t(7294),n=t(9661),l=t(8122),j=t(6720),r=t(55),i=t(7998),o=t(6886),d=t(5616),m=t(3845),u=t(5861),c=t(5582),f=t(1265),h=t(2430),g=t(6040),p=t(1207),x=t(5121),b=t(7760),k=t(5893);const y=(0,f.createMuiTheme)({palette:{mode:"dark"}});function w(){b.default.setTimeout();const[s,e]=a.useState("Signup");const t=s=>{s.preventDefault();const t=new FormData(s.currentTarget);let a=t.get("email"),n=t.get("password");if(a)if(n){e("");let s={email:t.get("email"),password:t.get("password"),firstname:t.get("firstName"),lastname:t.get("lastName")};console.log(s),function(s){let t=`http://localhost:3000/api/signup_request?signup_data=${JSON.stringify(s)}`;console.log(t),x.default.get(t).then((s=>{let t=s.data.message;e(t),"User Registered"==t&&(console.log(t),window.location="/login")})).catch((s=>console.log(s)))}(s)}else e("Please enter password");else e("Please enter email")};return(0,k.jsx)(g.default,{title:"Python IDE",children:(0,k.jsx)("main",{className:p.default.signup,children:(0,k.jsx)("div",{className:p.default.heroContainer,children:(0,k.jsx)("div",{className:p.default.codeEditorWrapper,children:(0,k.jsx)(h.default,{theme:y,children:(0,k.jsxs)(c.default,{component:"main",maxWidth:"xs",children:[(0,k.jsx)(j.default,{}),(0,k.jsxs)(d.default,{sx:{marginTop:-4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,k.jsx)(n.default,{sx:{m:1,bgcolor:"secondary.main"},children:(0,k.jsx)(m.default,{})}),(0,k.jsx)(u.default,{component:"h1",variant:"h5",children:s}),(0,k.jsxs)(d.default,{component:"form",noValidate:!0,onSubmit:t,sx:{mt:3},children:[(0,k.jsxs)(o.default,{container:!0,spacing:2,children:[(0,k.jsx)(o.default,{item:!0,xs:12,sm:6,children:(0,k.jsx)(r.default,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,k.jsx)(o.default,{item:!0,xs:12,sm:6,children:(0,k.jsx)(r.default,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,k.jsx)(o.default,{item:!0,xs:12,children:(0,k.jsx)(r.default,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,k.jsx)(o.default,{item:!0,xs:12,children:(0,k.jsx)(r.default,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})}),(0,k.jsx)(o.default,{item:!0,xs:12})]}),(0,k.jsx)(l.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,k.jsx)(o.default,{container:!0,justifyContent:"flex-end",children:(0,k.jsx)(o.default,{item:!0,children:(0,k.jsx)(i.default,{href:"#",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})})})})})}},1207:(s,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});const a={heroContainer:"heroContainer_i2aB",signup:"signup_SFg6",tagline:"tagline_Bqj_",codePrompt:"codePrompt_HTth",random:"random_CLNT",codeEditorWrapper:"codeEditorWrapper_t3Dg"}},6700:(s,e,t)=>{var a={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-ps":315,"./ar-ps.js":315,"./ar-sa":2705,"./ar-sa.js":2705,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":864,"./da.js":864,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":6997,"./en-ca.js":6997,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":2088,"./es-do.js":2088,"./es-mx":6112,"./es-mx.js":6112,"./es-us":3939,"./es-us.js":3939,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku-kmr":563,"./ku-kmr.js":563,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5606,"./ss.js":5606,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function n(s){var e=l(s);return t(e)}function l(s){if(!t.o(a,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return a[s]}n.keys=function(){return Object.keys(a)},n.resolve=l,s.exports=n,n.id=6700}}]);