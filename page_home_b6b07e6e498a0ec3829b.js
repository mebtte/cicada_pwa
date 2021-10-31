"use strict";(self.webpackChunkcicada_pwa=self.webpackChunkcicada_pwa||[]).push([[523],{7877:(e,t,n)=>{n.d(t,{u:()=>a,Z:()=>g});var a,r=n(7294),l=n(4910),o=n(4040),c=n(9920);!function(e){e.LEFT="left",e.TOP="top",e.BOTTOM="bottom",e.RIGHT="right"}(a||(a={}));const i="rgb(0 0 0 / 0.75)",s={tension:300,friction:15},m={opacity:1,transform:"translate(0%, 0%)"},p={[a.LEFT]:{spring:{opacity:0,transform:"translate(-50%, 0%)"},css:l.iv`
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
      ${p[e].css}
    }
  `}
`,g=({title:e,placement:t=a.TOP,children:n})=>{const l=p[t],[i,g]=(0,c.useSpring)((()=>l.spring)),x=(0,r.useCallback)((()=>{g({...m,config:{...s,clamp:!1}})}),[g]),f=(0,r.useCallback)((({unmount:e})=>{g({...l.spring,config:{...s,clamp:!0},onRest:e})}),[g,l]);return r.createElement(o.ZP,{placement:t,render:n=>r.createElement(d,{placement:t,style:i,...n},e),animation:!0,onShow:x,onHide:f},n)}},3250:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(7294),r=n(5977),l=n(8307),o=n(3088),c=n(4910),i=n(8216),s=n(4593),m=n(5733),p=n(9895),d=n(3727),g=n(9717),x=n(5985),f=n(5455),E=n(2798),u=n(7877);const h=c.ZP.header`
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
  > .content {
    max-width: ${960}px;
    height: 80px;
    padding: 0 ${20}px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    > .logo {
      display: flex;
      align-items: center;
      gap: 20px;
      user-select: none;
      > .icon-logo {
        height: 36px;
      }
      > .text-logo {
        height: 24px;
      }
    }
    > .right {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;
    }
  }
`,v={marginLeft:40,cursor:"pointer"},b=()=>g.Z.emit(g.t.OPEN_PROFILE_DIALOG),Z=({user:e})=>a.createElement(h,null,a.createElement("div",{className:"content"},a.createElement("div",{className:"logo"},a.createElement("img",{className:"icon-logo",src:"/logo.png",alt:"logo"}),a.createElement("img",{className:"text-logo",src:"/text_logo.png",alt:"logo"})),a.createElement("div",{className:"right"},a.createElement(u.Z,{title:"源代码",placement:u.u.BOTTOM},a.createElement("a",{href:o.DC},a.createElement(E.ZP,{name:E.VG.GITHUB_FILL,size:28}))),e&&e.cms?a.createElement(u.Z,{title:"CMS",placement:u.u.BOTTOM},a.createElement(d.rU,{to:l.Ql.CMS},a.createElement(E.ZP,{name:E.VG.CMS_OUTLINE,size:28}))):null,a.createElement(u.Z,{title:"播放器",placement:u.u.BOTTOM},a.createElement(d.rU,{to:l.Ql.PLAYER},a.createElement(E.ZP,{name:E.VG.MUSIC_FILL,size:28}))),e?null:a.createElement(d.rU,{to:l.Ql.SIGNIN},a.createElement(f.Z,{label:"登录",size:28}))),e?a.createElement(x.Z,{src:e.avatar,size:48,style:v,onClick:b,alt:"cover"}):null));var T=n(2570);const O=c.ZP.a`
  text-decoration: none;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 10px;
  border-radius: 4px;
  &:hover {
    background: rgb(255 255 255 / 0.1);
  }
  > .icon {
    color: #555;
  }
  > .info {
    > .name {
      font-size: 14px;
      color: #333;
    }
    > .description {
      font-size: 12px;
      color: #555;
      margin-top: 5px;
    }
  }

  @media (max-width: ${720}px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,P=({project:e})=>a.createElement(O,{href:e.link},a.createElement(T.Z,{className:"icon",name:e.icon,size:32}),a.createElement("div",{className:"info"},a.createElement("div",{className:"name"},e.name),a.createElement("div",{className:"description"},e.description))),w=c.ZP.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: ${720}px) {
    align-items: center;
  }
`,y=[{icon:T.V.CLOUD_OUTLINE,name:"Cicada Server",link:o.vJ,description:"知了服务器端"},{icon:T.V.BROWSER_FILL,name:"Cicada PWA",link:o.DC,description:"知了浏览器端"},{icon:T.V.COMPUTER_FILL,name:"Cicada Electron",link:o.G4,description:"知了桌面客户端"}],L=()=>a.createElement(w,null,y.map(((e,t)=>a.createElement(P,{key:t,project:e}))));var N=n(8913);const k=c.ZP.div`
  flex: 1;
  font-size: 12px;
  color: #555;
  line-height: 2;
  text-align: center;
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #fff;
    }
  }
`,C=()=>a.createElement(k,null,a.createElement("div",{className:"version"},"知了 @ ",N.Z.version),a.createElement("div",{className:"copyright"},a.createElement("a",{href:"https://mebtte.com"},"MEBTTE")," © ",o.iW," ~ ",(new Date).getFullYear())),$=c.ZP.div`
  background-color: var(--color-primary);
  > .content {
    padding: 50px ${20}px;
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: ${720}px) {
    > .content {
      flex-direction: column;
    }
  }
`,I=()=>a.createElement($,null,a.createElement("div",{className:"content"},a.createElement(L,null),a.createElement(C,null))),_=(0,c.ZP)(p.Z)`
  background-color: #f3f3f3;
  overflow: auto;
  ${m.Z}
  >.content {
    max-width: ${960}px;
    margin: 0 auto;
  }
`,M=()=>{const e=(0,i.v9)((({user:e})=>e),i.wU);return a.createElement(_,null,a.createElement(s.q,null,a.createElement("title",null,"知了 - 在线音乐播放器")),a.createElement(Z,{user:e}),a.createElement("section",{className:"content"}),a.createElement(I,null))},z=()=>o.D$?a.createElement(r.l_,{to:l.Ql.PLAYER}):a.createElement(M,null)},9895:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(4910).ZP.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`}}]);
//# sourceMappingURL=page_home_b6b07e6e498a0ec3829b.js.map