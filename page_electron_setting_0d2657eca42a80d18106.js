"use strict";(self.webpackChunkcicada_pwa=self.webpackChunkcicada_pwa||[]).push([[842],{8524:(e,t,r)=>{var n;r.d(t,{Z:()=>p}),function(e){e.CIRCLE="circle",e.SQUARE="square"}(n||(n={}));var a=r(7294),i=r(4910),l=r(6661),o=r(8794),s=r(7382);const c=i.ZP.img`
  box-sizing: border-box;
  aspect-ratio: 1;
  object-fit: cover;
`,d={[n.CIRCLE]:{style:{borderRadius:"50%"}},[n.SQUARE]:{style:{borderRadius:4}}},p=a.forwardRef((({src:e,shape:t=n.SQUARE,size:r=64,alt:i,...p},u)=>{const E=(0,a.useRef)(null),[g,m]=(0,a.useState)(o);return(0,a.useLayoutEffect)((()=>{if(e&&g!==e){let t=!1;const r=new IntersectionObserver((([r])=>{r.isIntersecting&&(0,l.Z)(e).then((()=>{t||m(e)})).catch((e=>s.Z.error(e,{description:"加载图片失败",report:!0})))}));return r.observe(E.current),()=>(t=!0,r.disconnect())}}),[g,e]),(0,a.useImperativeHandle)(u,(()=>E.current)),a.createElement(c,{...p,"data-src":e,src:g,style:{width:r,...d[t].style,...p.style},ref:E,alt:i})}))},7891:(e,t,r)=>{r.d(t,{xK:()=>n,jQ:()=>a,Jx:()=>i});const n=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,a=/^https?:\/\/(?=.{1,254}(?::|$))(?:(?!\d|-)(?![a-z0-9-]{1,62}-(?:\.|:|$))[a-z0-9-]{1,63}\b(?!\.$)\.?)+(:\d+)?$/i,i=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/},5184:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(7294),a=r(5977),i=r(3088),l=r(8307),o=r(4593),s=r(6272),c=r(7382),d=r(4910),p=r(1579),u=r(9895);const E=(0,d.ZP)(u.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
`,g=()=>n.createElement(E,null,n.createElement(p.Z,null));var m=r(7022);const f=(0,d.ZP)(u.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
`,w=({error:e,retry:t})=>n.createElement(f,null,n.createElement(m.Z,{errorMessage:`${e.message}\n获取设置失败, 失败的原因通常是客户端版本过低, 你可以尝试重试获取设置, 如尝试多次仍失败, 请更新客户端到最新版本`,retry:t}));var x=r(7891),b=r(5733),_=r(6885),v=r(2983),I=r(8524);const R=d.ZP.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  height: ${60}px;
  width: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
  -webkit-app-region: drag;
  cursor: move;
  > .title {
    font-size: 18px;
    margin-left: 20px;
    user-select: none;
  }
`,h=n.memo((()=>n.createElement(R,null,n.createElement(I.Z,{src:"/logo.png",size:32,alt:"logo"}),n.createElement("div",{className:"title"},"配置"))));var O=r(5455);const N=d.ZP.div`
  z-index: 2;
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 30px;
  width: 100%;
  height: ${60}px;
  display: flex;
  align-items: center;
  gap: 20px;
  backdrop-filter: blur(5px);
  > .action {
    flex: 1;
  }
`,Z=({loading:e,onSave:t})=>n.createElement(N,null,n.createElement(O.Z,{className:"action",label:"取消",size:32,onClick:s.il,disabled:e}),n.createElement(O.Z,{className:"action",label:"保存配置",size:32,type:O.D.PRIMARY,onClick:t,loading:e})),k=(0,d.ZP)(u.Z)`
  ${b.Z}
  overflow: auto;
  box-sizing: border-box;
  padding: ${60}px 0 ${60}px 0;
  background-color: rgba(0, 0, 0, 0.02);
  > .part {
    margin: 20px 0;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    border-radius: 2px;
    background-color: #fff;
    > .label {
      font-size: 12px;
    }
    > .value-wrapper {
      flex: 1;
      text-align: right;
      > .value {
        width: 220px;
        text-align: right;
      }
    }
  }
`,y=({pwaOrigin:e})=>{const[t,r]=(0,n.useState)(e),a=(0,n.useCallback)((e=>r(e.target.value)),[]),[i,l]=(0,n.useState)(!1);return n.createElement(k,null,n.createElement(h,null),n.createElement("div",{className:"part"},n.createElement("div",{className:"label"},"PWA Origin"),n.createElement("div",{className:"value-wrapper"},n.createElement(_.Z,{className:"value",value:t,onChange:a,disabled:i}))),n.createElement(Z,{loading:i,onSave:()=>v.ZP.confirm({title:"警告",content:"保存配置将会重启客户端, 是否继续?",onConfirm:async()=>{l(!0);try{if(t!==e){if(!x.jQ.test(t))throw new Error("PWA Origin 校验失败");await(0,s.gi)({pwaOrigin:t})}setTimeout((()=>(0,s.Rx)()),0)}catch(e){c.Z.error(e,{description:"保存桌面客户端配置失败",report:!0}),v.ZP.alert({title:"保存配置失败",content:e.message})}l(!1)}})}))},z=()=>{const{status:e,error:t,retry:r,pwaOrigin:a}=(()=>{const[e,t]=(0,n.useState)(i.eE.LOADING),[r,a]=(0,n.useState)(new Error("TypeError: sdfhkas, dskhfk, sdjfhksdh,sdhfjk")),[l,o]=(0,n.useState)(""),d=(0,n.useCallback)((async()=>{t(i.eE.LOADING);try{const[e]=await Promise.all([(0,s.nQ)()]);o(e),t(i.eE.SUCCESS)}catch(e){c.Z.error(e,{description:"获取 electron 初始设置信息失败",report:!0}),a(e),t(i.eE.ERROR)}}),[]);return(0,n.useEffect)((()=>{d()}),[d]),{status:e,error:r,retry:d,pwaOrigin:l}})();let l;return l=e===i.eE.SUCCESS?n.createElement(y,{pwaOrigin:a}):e===i.eE.LOADING?n.createElement(g,null):n.createElement(w,{error:t,retry:r}),n.createElement(n.Fragment,null,n.createElement(o.q,null,n.createElement("title",null,"配置")),l)},P=()=>i.D$?n.createElement(z,null):n.createElement(a.l_,{to:l.Ql.HOME})},9895:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r(4910).ZP.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`},6272:(e,t,r)=>{var n;r.d(t,{Rx:()=>i,nG:()=>l,er:()=>o,wz:()=>s,il:()=>c,nQ:()=>d,gi:()=>p}),function(e){e.RELAUNCH="relaunch",e.OPEN_LINK="open_link",e.MINIMIZE_PLAYER_WINDOW="minimize_player_window",e.HIDE_PLAYER_WINDOW="hide_player_window",e.CLOSE_CONFIG_WINDOW="close_config_window",e.GET_PWA_ORIGIN="get_pwa_origin",e.SET_PWA_ORIGIN="set_pwa_origin"}(n||(n={}));const a=()=>window.require("electron"),i=()=>a().ipcRenderer.invoke(n.RELAUNCH),l=({link:e})=>a().ipcRenderer.invoke(n.OPEN_LINK,{link:e}),o=()=>a().ipcRenderer.invoke(n.MINIMIZE_PLAYER_WINDOW),s=()=>a().ipcRenderer.invoke(n.HIDE_PLAYER_WINDOW),c=()=>a().ipcRenderer.invoke(n.CLOSE_CONFIG_WINDOW),d=()=>a().ipcRenderer.invoke(n.GET_PWA_ORIGIN),p=({pwaOrigin:e})=>a().ipcRenderer.invoke(n.SET_PWA_ORIGIN,{pwaOrigin:e})},8794:(e,t,r)=>{e.exports=r.p+"30eb336bb42dece28fd8.jpeg"}}]);
//# sourceMappingURL=page_electron_setting_0d2657eca42a80d18106.js.map