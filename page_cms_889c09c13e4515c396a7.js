"use strict";(self.webpackChunkcicada_pwa=self.webpackChunkcicada_pwa||[]).push([[988],{7877:(e,t,n)=>{n.d(t,{u:()=>a,Z:()=>u});var a,r=n(7294),l=n(4910),o=n(4040),c=n(9920);!function(e){e.LEFT="left",e.TOP="top",e.BOTTOM="bottom",e.RIGHT="right"}(a||(a={}));const i="rgb(0 0 0 / 0.75)",s={tension:300,friction:15},p={opacity:1,transform:"translate(0%, 0%)"},m={[a.LEFT]:{spring:{opacity:0,transform:"translate(-50%, 0%)"},css:l.iv`
      top: calc(50% - 4px);
      left: 100%;
      border-color: transparent transparent transparent ${i};
    `},[a.TOP]:{spring:{opacity:0,transform:"translate(0%, -50%)"},css:l.iv`
      left: calc(50% - 4px);
      top: 100%;
      border-color: ${i} transparent transparent transparent;
    `},[a.BOTTOM]:{spring:{opacity:0,transform:"translate(0%, 50%)"},css:l.iv`
      left: calc(50% - 4px);
      bottom: 100%;
      border-color: transparent transparent ${i} transparent;
    `},[a.RIGHT]:{spring:{opacity:0,transform:"translate(50%, 0%)"},css:l.iv`
      top: calc(50% - 4px);
      right: 100%;
      border-color: transparent ${i} transparent transparent;
    `}},d=(0,l.ZP)(c.animated.div)`
  border-radius: 4px;
  position: relative;
  padding: 4px 8px;
  font-size: 12px;
  color: #fff;
  background-color: ${i};
  font-weight: lighter;
  &::after {
    content: '';
    position: absolute;
    border-width: 4px;
    border-style: solid;
  }
  ${({placement:e})=>l.iv`
    &::after {
      ${m[e].css}
    }
  `}
`,u=({title:e,placement:t=a.TOP,children:n})=>{const l=m[t],[i,u]=(0,c.useSpring)((()=>l.spring)),E=(0,r.useCallback)((()=>{u({...p,config:{...s,clamp:!1}})}),[u]),f=(0,r.useCallback)((({unmount:e})=>{u({...l.spring,config:{...s,clamp:!0},onRest:e})}),[u,l]);return r.createElement(o.ZP,{placement:t,render:n=>r.createElement(d,{placement:t,style:i,...n},e),animation:!0,onShow:E,onHide:f},n)}},3375:(e,t,n)=>{n.d(t,{t:()=>a,Z:()=>o});var a,r=n(6729),l=n.n(r);!function(e){e.VIEW_JSON="view_json"}(a||(a={}));const o=new(l())},9490:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var a=n(7294),r=n(4910),l=n(5977),o=n(8356),c=n.n(o),i=n(8216),s=n(4593),p=n(4839),m=n(8307),d=n(6345),u=n(9895),E=n(7022),f=n(1579),g=n(464);const h=r.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${g.i};
`,b=({error:e})=>a.createElement(h,null,e?a.createElement(E.Z,{errorMessage:e.message,retry:()=>window.location.reload()}):a.createElement(f.Z,null));var x=n(3727),v=n(7877),N=n(2798),I=n(5985),y=n(9717);const O=r.ZP.div`
  z-index: 1;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 2px #f6f6f6;
  gap: 20px;
  > .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    > .icon {
      height: 28px;
    }
    > .text {
      height: 20px;
    }
  }
  > .blank {
    flex: 1;
    min-width: 0;
  }
`,Z={cursor:"pointer"},w=()=>y.Z.emit(y.t.OPEN_PROFILE_DIALOG),P=()=>{const e=(0,i.v9)((({user:e})=>e),i.wU);return a.createElement(O,null,a.createElement(x.rU,{className:"logo",to:m.Ql.HOME},a.createElement("img",{className:"icon",src:"/logo.png",alt:"logo"}),a.createElement("img",{className:"text",src:"/text_logo.png",alt:"text logo"})),a.createElement("div",{className:"blank"}),a.createElement(v.Z,{title:"播放器",placement:v.u.BOTTOM},a.createElement(x.rU,{to:m.Ql.PLAYER},a.createElement(N.ZP,{name:N.VG.MUSIC_FILL,size:24}))),a.createElement(I.Z,{src:e.avatar,onClick:w,style:Z,size:28,alt:"avatar"}))};var S=n(2570);const U=(0,r.ZP)((({active:e,...t})=>a.createElement(x.rU,{...t})))`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  transition: 300ms;
  > .icon {
    color: inherit;
  }
  > .label {
    font-size: 14px;
    margin-left: 20px;
    color: inherit;
  }
  &:hover {
    background-color: rgb(49 194 124 / 0.05);
  }
  ${({active:e})=>r.iv`
    color: ${e?"#fff":"var(--color-primary)"};
    background-color: ${e?"var(--color-primary) !important":"transparent"};
  `}
`,_=({menu:e,pathname:t})=>{const{icon:n,path:r,label:l}=e;return a.createElement(U,{to:r,active:r===t},a.createElement(S.Z,{className:"icon",name:n,size:16}),a.createElement("div",{className:"label"},l))},T=r.ZP.div`
  width: 200px;
  background: #f6f6f6;
`,k=[{label:"总览",icon:S.V.DASHBOARD_OUTLINE,path:m.Nj.DASHBOARD},{label:"用户",icon:S.V.ID_FILL,path:m.Nj.USER},{label:"角色",icon:S.V.FIGURE_FILL,path:m.Nj.FIGURE},{label:"音乐",icon:S.V.MUSIC_FILL,path:m.Nj.MUSIC},{label:"公共配置",icon:S.V.SETTING_OUTLINE,path:m.Nj.PUBLIC_CONFIG}],C=()=>{const{pathname:e}=(0,l.TH)();return a.createElement(T,null,k.map((t=>a.createElement(_,{key:t.path,pathname:e,menu:t}))))};var L=n(5171),j=n.n(L),R=n(5455),A=n(3584),$=n(3375);const D={style:{width:750}},F=a.memo((()=>{const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)({});return(0,a.useEffect)((()=>{const e=({json:e})=>(r(e),t(!0));return $.Z.on($.t.VIEW_JSON,e),()=>{$.Z.off($.t.VIEW_JSON,e)}}),[]),a.createElement(A.ZP,{open:e,bodyProps:D},a.createElement(A.VY,null,a.createElement(j(),{src:n,enableClipboard:!1})),a.createElement(A.aU,null,a.createElement(R.Z,{label:"关闭",onClick:()=>t(!1)})))})),H={[m.Nj.DASHBOARD]:c()({loader:()=>n.e(742).then(n.bind(n,5869)),loading:b,timeout:3e4,delay:300}),[m.Nj.USER]:c()({loader:()=>n.e(254).then(n.bind(n,7015)),loading:b,timeout:3e4,delay:300}),[m.Nj.FIGURE]:c()({loader:()=>n.e(969).then(n.bind(n,400)),loading:b,timeout:3e4,delay:300}),[m.Nj.MUSIC]:c()({loader:()=>n.e(935).then(n.bind(n,8235)),loading:b,timeout:3e4,delay:300}),[m.Nj.PUBLIC_CONFIG]:c()({loader:()=>n.e(877).then(n.bind(n,2526)),loading:b,timeout:3e4,delay:300})},G=(0,r.ZP)(u.Z)`
  overflow: auto;
`,M=r.ZP.div`
  width: 100%;
  height: 100%;
  min-width: 1024px;
  display: flex;
  > .container {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }
`,B=Object.keys(H).map((e=>a.createElement(l.AW,{key:e,path:e,component:H[e],exact:e===m.Nj.DASHBOARD}))),V=(0,d.Z)()((()=>(0,i.v9)((e=>e.user),i.wU).cms?a.createElement(G,null,a.createElement(s.q,null,a.createElement("title",null,"内容管理系统 - 知了")),a.createElement(M,null,a.createElement(C,null),a.createElement("div",{className:"container"},a.createElement(P,null),a.createElement(l.rs,null,B,a.createElement(l.l_,{to:m.Nj.DASHBOARD})))),a.createElement(F,null)):(p.ZP.error("抱歉, 当前账号暂无 CMS 权限"),a.createElement(l.l_,{to:m.Ql.HOME}))))},464:(e,t,n)=>{n.d(t,{i:()=>a});const a=n(4910).iv`
  flex: 1;
  min-width: 0;
`},9895:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(4910).ZP.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`},6345:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(5977),l=n(8216),o=n(8307);const c=()=>e=>t=>{const n=(0,l.v9)((({user:e})=>e),l.wU),{pathname:c}=(0,r.TH)();return n?a.createElement(e,{...t}):a.createElement(r.l_,{to:`${o.Ql.SIGNIN}?redirect=${encodeURIComponent(c)}`})}}}]);
//# sourceMappingURL=page_cms_889c09c13e4515c396a7.js.map