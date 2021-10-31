"use strict";(self.webpackChunkcicada_pwa=self.webpackChunkcicada_pwa||[]).push([[916],{7891:(e,t,n)=>{n.d(t,{xK:()=>a,jQ:()=>r,Jx:()=>l});const a=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,r=/^https?:\/\/(?=.{1,254}(?::|$))(?:(?!\d|-)(?![a-z0-9-]{1,62}-(?:\.|:|$))[a-z0-9-]{1,63}\b(?!\.$)\.?)+(:\d+)?$/i,l=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/},9895:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(4910).ZP.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`},5129:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var a=n(7294),r=n(8216),l=n(5977),i=n(8307),o=n(1064),c=n(4910),s=n(4593),p=n(8175),m=n(3088),u=n(9895),d=n(2798),g=n(2570),E=n(7891),_=n(2827),I=n(4839),b=n(7382),N=n(6196);var w=n(5132),x=n(3582),Z=n(6416),f=n(2983),v=n(6885),k=n(5455),h=n(3727);const O=(0,c.ZP)(h.rU)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 30px 0;
  > .image {
    height: 45px;
  }
  > .text {
    height: 35px;
    margin-left: 15px;
  }
`,P=a.memo((()=>a.createElement(O,{to:i.Ql.HOME},a.createElement("img",{className:"image",src:"/logo.png",alt:"logo"}),a.createElement("img",{className:"text",src:"/text_logo.png",alt:"logo"})))),y=function(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t<10?"0":""}${t}:${n<10?"0":""}${n}`},R={marginLeft:10},S=({email:e})=>{const[t,n]=(0,a.useState)(""),[r,l]=(0,a.useState)(0),[i,o]=(0,a.useState)(!1),c=(0,a.useCallback)((async()=>{if(!E.xK.test(e))return I.ZP.error("邮箱格式错误");o(!0);try{await function(e){return N.Z.get("/api/get_signin_verify_code",{params:{email:e}})}(e),l(new Date(Date.now()+6e4).getTime()),n(y(60))}catch(e){b.Z.error(e,{description:"获取验证码失败",report:!0}),f.ZP.alert({title:"获取验证码失败",content:e.message})}o(!1)}),[e]);return(0,a.useEffect)((()=>{if(r){const e=window.setInterval((()=>{const t=Date.now();t>r?(n(""),clearInterval(e)):n(y((r-t)/1e3))}),900);return()=>window.clearInterval(e)}}),[r]),a.createElement(k.Z,{label:t||"获取验证码",loading:i,disabled:!e||i||!!t,onClick:c,style:R,type:k.D.PRIMARY,size:32})};var C,L=n(6729),A=n.n(L);!function(e){e.OPEN_SETTING_DIALOG="open_setting_dialog"}(C||(C={}));const G=new(A()),T=c.ZP.div`
  position: relative;

  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);

  border-radius: 4px;
  width: 350px;
  padding: 40px 30px;
  box-sizing: border-box;

  > .setting {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  > .input-box {
    display: flex;
    align-items: center;
    margin: 20px 0;
    > .input-wrapper {
      flex: 1;
      min-width: 0;
      position: relative;
      > .input {
        padding-right: ${28}px;
      }
      > .icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translate(0, -50%);
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
`,z={width:"100%",display:"block"},D=()=>G.emit(C.OPEN_SETTING_DIALOG),W=()=>{const[e,t]=(0,a.useState)(localStorage.getItem(_.fE)||""),n=(0,a.useCallback)((e=>t(e.target.value)),[]),[r,l]=(0,a.useState)(""),i=(0,a.useCallback)((e=>l(e.target.value)),[]),[o,c]=(0,a.useState)(!1);return a.createElement(T,null,a.createElement(d.ZP,{className:"setting",name:d.VG.SETTING_OUTLINE,onClick:D}),a.createElement(P,null),a.createElement("div",{className:"input-box"},a.createElement("div",{className:"input-wrapper"},a.createElement(v.Z,{style:z,className:"input",value:e,onChange:n,placeholder:"邮箱",type:"text"}),a.createElement(g.Z,{className:"icon",name:g.V.EMAIL_FILL,size:18}))),a.createElement("div",{className:"input-box"},a.createElement("div",{className:"input-wrapper"},a.createElement(v.Z,{style:z,className:"input",value:r,onChange:i,placeholder:"验证码",type:"text"}),a.createElement(g.Z,{className:"icon",name:g.V.SHIELD_FILL,size:18})),a.createElement(S,{email:e})),a.createElement(k.Z,{label:"登录",block:!0,loading:o,disabled:!e||!r,onClick:async()=>{if(!E.xK.test(e))return I.ZP.error("邮箱格式错误");c(!0);try{const{token:t,tokenExpiredAt:n}=await async function({email:e,verifyCode:t}){const{token:n,token_expired_at:a}=await N.Z.post("/api/signin",{data:{email:e,verify_code:t}});return{token:n,tokenExpiredAt:a}}({email:e,verifyCode:r});localStorage.setItem(_.RA,n),localStorage.setItem(_.o3,t),localStorage.setItem(_.fE,e);const a=await(0,w.Z)();setTimeout((()=>x.Z.dispatch((0,Z.av)(a))),0)}catch(e){b.Z.error(e,{description:"登录失败",report:!0}),f.ZP.alert({title:"登录失败",content:e.message})}c(!1)},type:k.D.PRIMARY,size:32}))},M=c.ZP.div`
  position: absolute;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  -webkit-app-region: drag;
  cursor: move;
`;var $=n(6272);const U=c.ZP.div`
  -webkit-app-region: no-drag;
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 2px 5px;
  border-radius: 2px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.6);
  > .button:not(:last-child) {
    margin-right: 5px;
  }
`,H=()=>a.createElement(U,null,a.createElement(d.ZP,{name:d.VG.MINIMIZE_OUTLINE,className:"button",onClick:$.er}),a.createElement(d.ZP,{name:d.VG.WRONG_OUTLINE,className:"button",onClick:$.wz}));var Y=n(8913),j=n(1894),V=n(3584);const F={width:"100%"},K=()=>{const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(Y.Z.serverOrigin),[l,i]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=()=>{t(!0)};return G.on(C.OPEN_SETTING_DIALOG,e),()=>{G.off(C.OPEN_SETTING_DIALOG,e)}}),[]),a.createElement(V.ZP,{open:e},a.createElement(V.Dx,null,"设置"),a.createElement(V.VY,null,a.createElement(j.Z,{label:"Server Origin"},a.createElement(v.Z,{value:n,onChange:e=>r(e.target.value),style:F,disabled:l}))),a.createElement(V.aU,null,a.createElement(k.Z,{label:"取消",onClick:()=>t(!1),disabled:l}),a.createElement(k.Z,{label:"确定",onClick:()=>{if(!E.jQ.test(n))return I.ZP.error("Server origin 格式错误");i(!0),localStorage.setItem(_.jM,n),setTimeout((()=>window.location.reload()),0)},loading:l})))},Q=(0,c.ZP)(u.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`,q=a.memo((()=>{const e=(0,a.useMemo)(p.Z,[]);return a.createElement(Q,{style:{backgroundImage:`url(${e})`}},a.createElement(s.q,null,a.createElement("title",null,"登录 - 知了")),m.D$?a.createElement(a.Fragment,null,a.createElement(M,null),m.qB&&a.createElement(H,null)):null,a.createElement(W,null),a.createElement(K,null))})),B=(0,r.$j)((({user:e})=>({user:e})))((({user:e})=>{const t=(0,l.TH)();if(e){const{redirect:e}=(0,o.Z)(t.search);return a.createElement(l.l_,{to:e?decodeURIComponent(e):i.Ql.HOME})}return a.createElement(q,null)}))},6272:(e,t,n)=>{var a;n.d(t,{Rx:()=>l,nG:()=>i,er:()=>o,wz:()=>c,il:()=>s,nQ:()=>p,gi:()=>m}),function(e){e.RELAUNCH="relaunch",e.OPEN_LINK="open_link",e.MINIMIZE_PLAYER_WINDOW="minimize_player_window",e.HIDE_PLAYER_WINDOW="hide_player_window",e.CLOSE_CONFIG_WINDOW="close_config_window",e.GET_PWA_ORIGIN="get_pwa_origin",e.SET_PWA_ORIGIN="set_pwa_origin"}(a||(a={}));const r=()=>window.require("electron"),l=()=>r().ipcRenderer.invoke(a.RELAUNCH),i=({link:e})=>r().ipcRenderer.invoke(a.OPEN_LINK,{link:e}),o=()=>r().ipcRenderer.invoke(a.MINIMIZE_PLAYER_WINDOW),c=()=>r().ipcRenderer.invoke(a.HIDE_PLAYER_WINDOW),s=()=>r().ipcRenderer.invoke(a.CLOSE_CONFIG_WINDOW),p=()=>r().ipcRenderer.invoke(a.GET_PWA_ORIGIN),m=({pwaOrigin:e})=>r().ipcRenderer.invoke(a.SET_PWA_ORIGIN,{pwaOrigin:e})},1064:(e,t,n)=>{n.d(t,{Z:()=>a});const a=e=>{const t={},n=e.replace(/\?/g,"");return n&&n.split("&").forEach((e=>{const[n,a]=e.split("=");t[n]=decodeURIComponent(a)})),t}}}]);
//# sourceMappingURL=page_signin_9aa69966bf611ef2cfd5.js.map