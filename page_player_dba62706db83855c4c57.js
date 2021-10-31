"use strict";(self.webpackChunkcicada_pwa=self.webpackChunkcicada_pwa||[]).push([[276],{9993:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),a=n(4910),l=n(6321),i=n(2570);const o=a.ZP.div`
  display: inline-block;
  font-size: 0;
  position: relative;
  > .outline {
    color: rgb(88 88 88);
    transition: all 300ms;
  }
  > .checked {
    position: absolute;
    top: 0;
    left: 0;
    color: rgb(49 194 124);
    transition: all 300ms;
  }
  ${({checked:e,disabled:t})=>a.iv`
    opacity: ${t?"0.5":"1"};
    cursor: ${t?"not-allowed":"pointer"};
    > .outline {
      opacity: ${e?"0":"1"};
    }
    > .checked {
      transform: scale(${e?"1":"0"});
    }
  `}
`,c=r.memo((({checked:e,onChange:t,disabled:n=!1,size:a=l.d.SMALL,...c})=>{const s=(0,r.useCallback)((()=>{t&&!n&&t(!e)}),[e,t,n]);return r.createElement(o,{...c,checked:e,disabled:n,onClick:s},r.createElement(i.Z,{className:"outline",name:i.V.CHECKBOX_OUTLINE,size:a}),r.createElement(i.Z,{className:"checked",name:i.V.CHECKBOX_FILL,size:a}))}))},8524:(e,t,n)=>{var r;n.d(t,{Z:()=>u}),function(e){e.CIRCLE="circle",e.SQUARE="square"}(r||(r={}));var a=n(7294),l=n(4910),i=n(6661),o=n(8794),c=n(7382);const s=l.ZP.img`
  box-sizing: border-box;
  aspect-ratio: 1;
  object-fit: cover;
`,m={[r.CIRCLE]:{style:{borderRadius:"50%"}},[r.SQUARE]:{style:{borderRadius:4}}},u=a.forwardRef((({src:e,shape:t=r.SQUARE,size:n=64,alt:l,...u},d)=>{const E=(0,a.useRef)(null),[p,f]=(0,a.useState)(o);return(0,a.useLayoutEffect)((()=>{if(e&&p!==e){let t=!1;const n=new IntersectionObserver((([n])=>{n.isIntersecting&&(0,i.Z)(e).then((()=>{t||f(e)})).catch((e=>c.Z.error(e,{description:"加载图片失败",report:!0})))}));return n.observe(E.current),()=>(t=!0,n.disconnect())}}),[p,e]),(0,a.useImperativeHandle)(d,(()=>E.current)),a.createElement(s,{...u,"data-src":e,src:p,style:{width:n,...m[t].style,...u.style},ref:E,alt:l})}))},6906:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(4910),l=n(8913),i=n(5051),o=n(5985);const c=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .placeholder {
    margin-bottom: 15px;
  }
  > .description {
    font-size: 12px;
    color: rgb(155 155 155);
  }
`,s=r.memo((({description:e="暂时没有数据",...t})=>{const n=(0,r.useMemo)((()=>l.Z.emptyImageList[(0,i.Z)(0,l.Z.emptyImageList.length)]),[]);return r.createElement(c,{...t},r.createElement(o.Z,{className:"placeholder",src:n,size:180,alt:"placeholder"}),r.createElement("div",{className:"description"},e))}))},4508:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7294),a=n(4910),l=n(5455),i=n(6885),o=n(2798),c=n(7877);const s=20,m=a.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > .page {
    margin: 0 4px;
  }
  > .ellipsis {
    font-size: 12px;
    color: rgb(222 222 222);
  }
  > .separator {
    width: 1px;
    height: ${s}px;
    background-color: rgb(244 244 244);
    margin: 0 10px;
  }
`,u=(0,a.ZP)(i.Z)`
  height: ${s}px;
  font-size: 12px;
  text-align: center;
  width: 40px;
  padding: 0 5px;
  appearance: textfield;
  margin: 0 4px;
  &::-webkit-inner-spin-button {
    appearance: none;
  }
`,d=({currentPage:e,pageCount:t,onPageChange:n,...a})=>{const[i,d]=(0,r.useState)(""),E=()=>{let e=+i;!e||e<=1?e=1:e>=t&&(e=t),d(e.toString()),n(e)};return r.createElement(m,{...a},e>2&&r.createElement(l.Z,{className:"page",label:"1",size:s,onClick:()=>n(1)}),e>=4?4===e?r.createElement(l.Z,{className:"page",label:"2",size:s,onClick:()=>n(2)}):r.createElement("div",{className:"ellipsis page"},"···"):null,e-1>=1&&r.createElement(l.Z,{className:"page",label:e-1,size:s,onClick:()=>n(e-1)}),r.createElement(l.Z,{className:"page",label:e,type:l.D.PRIMARY,size:s}),e+1<=t&&r.createElement(l.Z,{className:"page",label:e+1,size:s,onClick:()=>n(e+1)}),t-e>=3?t-e==3?r.createElement(l.Z,{className:"page",label:t-1,size:s,onClick:()=>n(t-1)}):r.createElement("div",{className:"ellipsis page"},"···"):null,t>e+1&&r.createElement(l.Z,{className:"page",label:t,size:s,onClick:()=>n(t)}),t>3&&r.createElement(r.Fragment,null,r.createElement("div",{className:"separator"}),r.createElement(u,{type:"number",value:i,onChange:e=>d(e.target.value),onKeyDown:e=>{"Enter"===e.key&&E()}}),r.createElement(c.Z,{title:"跳转到页面"},r.createElement(o.ZP,{name:o.VG.GOTO_OUTLINE,size:s,onClick:E}))))}},5029:(e,t,n)=>{n.d(t,{D:()=>r,Z:()=>s});var r,a=n(7294),l=n(4910);!function(e){e.SQ="sq",e.HQ="hq",e.AC="ac",e.MV="mv",e.FORK="fork",e.FORK_FROM="fork_from"}(r||(r={}));const i={[r.SQ]:{label:"sq",color:"var(--color-primary)"},[r.HQ]:{label:"hq",color:"rgb(235, 65, 65)"},[r.AC]:{label:"ac",color:"rgb(235, 150, 65)"},[r.MV]:{label:"mv",color:"rgb(65, 187, 235)"},[r.FORK]:{label:"fo",color:"rgb(226, 65, 235)"},[r.FORK_FROM]:{label:"ff",color:"rgb(102, 65, 235)"}},o=l.ZP.div`
  display: inline-block;
  font-size: 12px;
  line-height: 12px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  padding: 1px 3px;
  ${({color:e})=>l.iv`
    color: ${e};
    border-color: ${e};
  `}
`,c=a.forwardRef((({type:e,gray:t=!1,...n},r)=>{const{label:l,color:c}=i[e];return a.createElement(o,{...n,ref:r,color:t?"rgb(188 188 188)":c},l)})),s=a.memo(c)},7877:(e,t,n)=>{n.d(t,{u:()=>r,Z:()=>E});var r,a=n(7294),l=n(4910),i=n(4040),o=n(9920);!function(e){e.LEFT="left",e.TOP="top",e.BOTTOM="bottom",e.RIGHT="right"}(r||(r={}));const c="rgb(0 0 0 / 0.75)",s={tension:300,friction:15},m={opacity:1,transform:"translate(0%, 0%)"},u={[r.LEFT]:{spring:{opacity:0,transform:"translate(-50%, 0%)"},css:l.iv`
      top: calc(50% - 4px);
      left: 100%;
      border-color: transparent transparent transparent ${c};
    `},[r.TOP]:{spring:{opacity:0,transform:"translate(0%, -50%)"},css:l.iv`
      left: calc(50% - 4px);
      top: 100%;
      border-color: ${c} transparent transparent transparent;
    `},[r.BOTTOM]:{spring:{opacity:0,transform:"translate(0%, 50%)"},css:l.iv`
      left: calc(50% - 4px);
      bottom: 100%;
      border-color: transparent transparent ${c} transparent;
    `},[r.RIGHT]:{spring:{opacity:0,transform:"translate(50%, 0%)"},css:l.iv`
      top: calc(50% - 4px);
      right: 100%;
      border-color: transparent ${c} transparent transparent;
    `}},d=(0,l.ZP)(o.animated.div)`
  border-radius: 4px;
  position: relative;
  padding: 4px 8px;
  font-size: 12px;
  color: #fff;
  background-color: ${c};
  font-weight: lighter;
  &::after {
    content: '';
    position: absolute;
    border-width: 4px;
    border-style: solid;
  }
  ${({placement:e})=>l.iv`
    &::after {
      ${u[e].css}
    }
  `}
`,E=({title:e,placement:t=r.TOP,children:n})=>{const l=u[t],[c,E]=(0,o.useSpring)((()=>l.spring)),p=(0,a.useCallback)((()=>{E({...m,config:{...s,clamp:!1}})}),[E]),f=(0,a.useCallback)((({unmount:e})=>{E({...l.spring,config:{...s,clamp:!0},onRest:e})}),[E,l]);return a.createElement(i.ZP,{placement:t,render:n=>a.createElement(d,{placement:t,style:c,...n},e),animation:!0,onShow:p,onHide:f},n)}},7072:(e,t,n)=>{n.d(t,{IY:()=>r,Oh:()=>a,gf:()=>l,Z3:()=>i,Zw:()=>o,kF:()=>c,b5:()=>s,xL:()=>m,MW:()=>u,Eg:()=>d});const r=1e3,a=255,l=255,i=255,o={ACCEPT_MIMES:["audio/mpeg","audio/x-m4a","video/mp4"],MAX_SIZE:10485760},c={ACCEPT_MIMES:["audio/flac"],MAX_SIZE:52428800},s={ACCEPT_MIMES:["audio/mpeg","audio/x-m4a"],MAX_SIZE:10485760};var m;!function(e){e.NORMAL="normal",e.INSTRUMENT="instrument"}(m||(m={}));const u={[m.NORMAL]:"普通",[m.INSTRUMENT]:"纯音乐"},d=Object.keys(u)},9895:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(4910).ZP.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`},3062:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Uo});var r=n(7294),a=n(4910),l=n(4593),i=n(6345),o=n(3088);let c;o.D$&&(c=window.require("electron"));const s=c;var m,u=n(9895),d=n(5029);!function(e){e.SQ="sq",e.HQ="hq",e.AC="ac"}(m||(m={}));const E={[m.SQ]:{label:"标准音质",tagType:d.D.SQ},[m.HQ]:{label:"无损音质",tagType:d.D.HQ},[m.AC]:{label:"伴奏",tagType:d.D.AC}},p=Object.keys(E),f=(0,r.createContext)({smallView:!0,musicbillList:{loading:!0,error:null,value:[]},playMode:m.SQ,audioLoading:!1,audioPaused:!0,audioDuration:0,playlist:[],playqueue:[],currentPlayqueuePosition:-1,searchWord:"",volume:1}),_=a.iv`
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  scrollbar-width: none;
`;var g=n(8216),h=n(5985),v=n(7003),I=n(9717);const C=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > .avatar {
    cursor: pointer;
    border: 1px solid var(--color-primary);
  }

  > .nickname {
    font-size: 14px;
    color: var(--text-color-primary);
    cursor: pointer;

    padding: 0 15px;
    ${v.Z}

    &:hover {
      color: var(--color-primary);
    }
  }
`,L=()=>I.Z.emit(I.t.OPEN_PROFILE_DIALOG,{}),x=()=>{const e=(0,g.v9)((({user:e})=>e),g.wU);return r.createElement(C,null,r.createElement(h.Z,{className:"avatar",src:e.avatar,alt:"avatar",size:88,shape:h.b.CIRCLE,onClick:L}),r.createElement("div",{className:"nickname",onClick:L},e.nickname))};var y=n(5977),b=n(6272);const P=e=>o.D$?void(0,b.nG)({link:e}):void window.open(e);var T=n(2570),N=n(8307);const O=a.ZP.div`
  padding: 10px 20px;

  display: flex;
  align-items: center;
  gap: 15px;

  cursor: pointer;
  transition: all 300ms;

  > .icon {
    color: inherit;
  }

  > .label {
    font-size: 14px;
    color: inherit;
  }

  &:hover {
    background-color: rgb(0 0 0 / 0.05);
  }

  &:active {
    background-color: rgb(0 0 0 / 0.1);
  }

  ${({active:e})=>a.iv`
    background-color: ${e?"var(--color-primary) !important":"transparent"};
    color: ${e?"#fff":"var(--text-color-primary)"};
  `}
`,A=({icon:e,label:t,active:n=!1,...a})=>r.createElement(O,{...a,active:n},r.createElement(T.Z,{className:"icon",name:e,size:16}),r.createElement("div",{className:"label"},t));var S=n(8689);const Z=a.ZP.div``,R=()=>{const e=(0,S.Z)(),t=(0,y.TH)(),{smallView:n}=(0,r.useContext)(f);return r.createElement(Z,null,r.createElement(A,{icon:T.V.DISCOVER_OUTLINE,label:"发现",active:t.pathname===N.m$.DISCOVER,onClick:()=>e.push({pathname:N.m$.DISCOVER})}),r.createElement(A,{icon:T.V.SETTING_OUTLINE,label:"设置",active:t.pathname===N.m$.SETTING,onClick:()=>e.push({pathname:N.m$.SETTING})}),n||o.D$?null:r.createElement(A,{icon:T.V.DOWNLOAD_OUTLINE,label:"桌面客户端",onClick:e=>(e.preventDefault(),P(o.G4))}))};var k,w=n(9920),U=n(6906),D=n(2798),M=n(7022),G=n(6729),z=n.n(G);!function(e){e.AUDIO_WAITING="audio_waiting",e.AUDIO_CAN_PLAY_THROUGH="audio_can_play_through",e.AUDIO_PLAY="audio_play",e.AUDIO_PAUSE="audio_pause",e.AUDIO_TIME_UPDATED="audio_time_updated",e.AUDIO_ERROR="audio_error",e.ACTION_TOGGLE_PLAY="action_toggle_play",e.ACTION_PLAY="action_play",e.ACTION_PAUSE="action_pause",e.ACTION_SET_TIME="action_set_time",e.ACTION_PREVIOUS="action_previous",e.ACTION_NEXT="action_next",e.ACTION_PLAY_MUSIC="action_play_music",e.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST="action_add_music_list_to_playlist",e.ACTION_INSERT_MUSIC_TO_PLAYQUEUE="action_insert_music_to_playqueue",e.ACTION_PLAY_PLAYQUEUE_INDEX="action_playqueue_index",e.ACTION_CLEAR_PLAYLIST="action_clear_playlist",e.ACTION_REMOVE_PLAYLIST_MUSIC="action_remove_playlist_music",e.ACTION_REMOVE_PLAYQUEUE_MUSIC="action_remove_playqueue_music",e.ACTION_MOVE_PLAYQUEUE_MUSIC_LATER="action_move_playqueue_music_LATER",e.ACTION_MOVE_PLAYQUEUE_MUSIC_EARLY="action_move_playqueue_music_EARLY",e.ACTION_UPDATE_VOLUME="action_update_volume",e.RELOAD_MUSICBILL_LIST="update_musicbill_list",e.GET_MUSICBILL_DETAIL="get_musicbill_detail",e.ADD_MUSIC_TO_MUSICBILL="add_music_to_musicbill",e.REMOVE_MUSIC_FROM_MUSICBILL="remove_music_from_musicbill",e.CHANGE_PLAY_MODE="change_play_mode",e.TOGGEL_LYRIC="toggle_lyric",e.CLOSE_LYRIC="close_lyric",e.OPEN_MUSICBILL_LIST_OPERATE_DRAWER="open_musicbill_list_operate_drawer",e.CLOSE_MUSICBILL_LIST_OPERATE_DRAWER="close_musicbill_list_operate_drawer",e.OPEN_CREATE_MUSICBILL_DIALOG="open_create_musicbill_dialog",e.OPEN_MUSIC_OPERATE_POPUP="open_music_operate_popup",e.OPEN_MUSICBILL_LIST_DRAWER="open_musicbill_list_drawer",e.OPEN_SINGER_DRAWER="open_singer_drawer",e.OPEN_MUSIC_DRAWER="open_music_drawer",e.OPEN_USER_DRAWER="open_user_drawer",e.OPEN_ORIGINAL_MUSIC_DIALOG="open_original_music_dialog",e.OPEN_MUSICBILL_ORDER_DRAWER="open_musicbill_order_drawer",e.OPEN_PLAYLIST_PLAYQUEUE_DRAWER="open_playlist_playqueue_drawer",e.TOGGLE_PLAYLIST_PLAYQUEUE_DRAWER="toggle_playlist_playqueue_drawer",e.MUSICBILL_CREATED="musicbill_created",e.MUSICBILL_UPDATED="musicbill_updated",e.MUSICBILL_DELETED="musicbill_deleted",e.OPEN_SIDEBAR="open_sidebar",e.CLOSE_SIDEBAR="close_sidebar"}(k||(k={}));const $=new(z());var Y=n(8524),V=n(3727);const W=(0,a.ZP)(V.OL)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 20px;

  text-decoration: none;

  > .label {
    flex: 1;
    min-width: 0;

    font-size: 14px;
  }
`,B=(0,a.ZP)(W)`
  position: relative;

  > .background {
    display: none;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-size: cover;
    background-position: center;
    opacity: 0.5;
  }

  > .cover {
    position: relative;
  }

  > .label {
    color: var(--text-color-primary);
    ${v.Z}
  }

  &.active {
    > .background {
      display: block;
    }

    > .label {
      opacity: 0;
    }
  }

  &.publiz {
    > .cover {
      border: 2px solid var(--color-primary);
    }
  }

  &:hover {
    > .label {
      color: var(--color-primary);
    }
  }
`,q=({to:e,cover:t,label:n,publiz:a=!1,...l})=>r.createElement(B,{to:e,activeClassName:"active",className:a?"publiz":"",...l},r.createElement("div",{className:"background",style:{backgroundImage:`url(${t})`}}),r.createElement(Y.Z,{className:"cover",src:t,size:28,alt:"cover"}),r.createElement("div",{className:"label"},n)),H=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`,F=({musicbillList:e,style:t})=>r.createElement(H,{style:t},e.map((e=>r.createElement(q,{key:e.id,to:N.m$.MUSICBILL.replace(":id",e.id),cover:e.cover,label:e.name,publiz:e.public})))),Q="rgb(0 0 0 / 0.05)",j=a.F4`
  0% {
    background-color: ${Q};
  } 100% {
    background-color: rgb(0 0 0 / 0.08);
  }
`,K=a.ZP.div`
  display: inline-block;
  vertical-align: middle;
  border-radius: 4px;
  animation: ${j} 0.8s ease-in-out infinite alternate;
  background-color: ${Q};
`,X=r.memo((({width:e="100%",height:t="1em",style:n,...a})=>{const l=(0,r.useMemo)((()=>Math.random()),[]);return r.createElement(K,{...a,style:{width:e,height:t,animationDelay:`${l}s`,...n}})}));var J=n(5051);const ee=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`,te=e=>e.preventDefault(),ne=({style:e})=>{const t=(0,r.useMemo)((()=>new Array(5).fill(0).map((()=>({nameWidth:(0,J.Z)(30,80)})))),[]);return r.createElement(ee,{style:e},t.map((({nameWidth:e},t)=>r.createElement(W,{key:t,to:"/musicbill_list_loading",onClick:te},r.createElement(X,{width:28,height:28}),r.createElement("div",{className:"label"},r.createElement(X,{width:e}))))))},re=a.ZP.div`
  > .label {
    padding: 0 20px;
    margin-bottom: 6px;

    display: flex;
    align-items: center;
    gap: 5px;

    > .text {
      flex: 1;
      min-width: 0;

      font-size: 12px;
      color: var(--text-color-secondary);
    }
  }

  > .content {
    position: relative;
  }
`,ae=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0;
`,le=()=>$.emit(k.OPEN_CREATE_MUSICBILL_DIALOG,{}),ie=()=>$.emit(k.OPEN_MUSICBILL_LIST_OPERATE_DRAWER,{}),oe=()=>$.emit(k.RELOAD_MUSICBILL_LIST,{}),ce=()=>{const{musicbillList:e}=(0,r.useContext)(f),t=(0,w.useTransition)(e.loading,{initial:{opacity:1},from:{opacity:0},enter:{opacity:1},leave:{opacity:0}}),n=e.loading||e.error;return r.createElement(re,null,r.createElement("div",{className:"label"},r.createElement("div",{className:"text"},"我的歌单"),r.createElement(D.ZP,{name:D.VG.PLUS_OUTLINE,size:18,disabled:n,onClick:le}),r.createElement(D.ZP,{name:D.VG.MORE_OUTLINE,size:18,disabled:n,onClick:ie})),r.createElement("div",{className:"content"},t(((t,n)=>n?r.createElement(ne,{style:t}):e.error?r.createElement(ae,{style:t},r.createElement(M.Z,{errorMessage:e.error.message,retry:oe})):e.value.length?r.createElement(F,{musicbillList:e.value,style:t}):r.createElement(ae,{style:t},r.createElement(U.Z,{description:"空的歌单列表"}))))))},se=a.ZP.div`
  padding: 30px 0 0 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 20px;
`,me=e=>r.createElement(se,{...e},r.createElement(x,null),r.createElement(R,null),r.createElement(ce,null)),ue=(0,a.ZP)(me)`
  width: 240px;

  background-color: rgb(245, 245, 245);

  overflow: auto;
  ${_};
`;var de;!function(e){e.LEFT="left",e.RIGHT="right"}(de||(de={}));const Ee=a.ZP.div`
  font-size: 20px;
  font-weight: 600;
  padding: 40px 20px 20px 20px;
  color: rgb(55 55 55);
`;var pe=n(3935);const fe={[de.LEFT]:{transition:{from:{opacity:0,transform:"translate(-100%)"},enter:{opacity:1,transform:"translate(0%)"},leave:{opacity:0,transform:"translate(-100%)"}},bodyCSS:a.iv`
      left: 0;
    `},[de.RIGHT]:{transition:{from:{opacity:0,transform:"translate(100%)"},enter:{opacity:1,transform:"translate(0%)"},leave:{opacity:0,transform:"translate(100%)"}},bodyCSS:a.iv`
      right: 0;
    `}},_e=(0,a.ZP)(w.animated.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-app-region: no-drag;
`,ge=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  height: 100%;
  background-color: white;
  box-sizing: border-box;

  ${({direction:e})=>fe[e].bodyCSS}
`,he=({open:e,onClose:t,direction:n=de.RIGHT,maskProps:a={},bodyProps:l={},children:i})=>{const o=(0,r.useRef)(null),c=e=>{a.onClick&&a.onClick(e),t&&!o.current.contains(e.target)&&t()};return(0,w.useTransition)(e,fe[n].transition)((({opacity:e,transform:t},s)=>s?r.createElement(_e,{...a,style:{opacity:e,...a.style},onClick:c},r.createElement(ge,{...l,ref:o,direction:n,style:{transform:t,...l.style}},i)):null))},ve=r.memo((e=>pe.createPortal(r.createElement(he,{...e}),document.body)),((e,t)=>!e.open&&!t.open)),Ie=(0,a.ZP)(me)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  overflow: auto;
  ${_}
`,Ce=()=>$.emit(k.CLOSE_SIDEBAR,{}),Le={style:{width:240},onClick:Ce},xe=()=>{const e=(()=>{const[e,t]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=()=>t(!0),n=()=>t(!1);return $.on(k.OPEN_SIDEBAR,e),$.on(k.CLOSE_SIDEBAR,n),()=>{$.off(k.OPEN_SIDEBAR,e),$.off(k.CLOSE_SIDEBAR,n)}}),[]),e})();return r.createElement(ve,{open:e,onClose:Ce,bodyProps:Le,direction:de.LEFT},r.createElement(Ie,null))},ye=()=>{const{smallView:e}=(0,r.useContext)(f);return e?r.createElement(xe,null):r.createElement(ue,null)},be=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > .icon {
    height: 32px;
  }

  > .text {
    height: 20px;
  }
`,Pe=()=>r.createElement(be,null,r.createElement("img",{className:"icon",src:"/logo.png",alt:"logo"}),r.createElement("img",{className:"text",src:"/text_logo.png",alt:"logo"}));var Te=n(6053),Ne=n(6885),Oe=n(4839);const Ae=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 5px;

  ${({smallView:e})=>a.iv`
    > .input {
      width: ${e?160:180}px;
    }
  `}
`,Se=()=>{const e=(0,S.Z)(),{smallView:t,searchWord:n}=(0,r.useContext)(f),a=(0,r.useRef)(null),[l,i]=(0,r.useState)(""),c=()=>{const t=l||n;return t?e.push({pathname:N.m$.SEARCH,query:{keyword:t}}):Oe.ZP.error("请输入搜索内容")};return(0,r.useEffect)((()=>{const e=(0,Te.Z)((e=>{"f"===e.key&&(o.jm&&e.metaKey||o.qB&&e.ctrlKey)&&(e.preventDefault(),a.current.focus())}));return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[]),r.createElement(Ae,{smallView:t},r.createElement(Ne.Z,{className:"input",value:l,onChange:e=>i(e.target.value),onKeyDown:e=>{"Enter"===e.key&&c()},placeholder:n||"搜索",ref:a}),r.createElement(D.ZP,{name:D.VG.SEARCH_OUTLINE,onClick:c}))},Ze=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: ${o.D$?25:15}px 20px 10px 20px;

  -webkit-app-region: drag;

  > .blank {
    flex: 1;
    min-width: 0;
  }
`,Re=()=>$.emit(k.OPEN_SIDEBAR,{}),ke=()=>{const{smallView:e}=(0,r.useContext)(f);return r.createElement(Ze,null,e?r.createElement(D.ZP,{name:D.VG.MENU_OUTLINE,onClick:Re}):r.createElement(Pe,null),r.createElement("div",{className:"blank"}),r.createElement(Se,null),o.qB?r.createElement(r.Fragment,null,r.createElement(D.ZP,{name:D.VG.MINIMIZE_OUTLINE,onClick:b.er}),r.createElement(D.ZP,{name:D.VG.WRONG_OUTLINE,onClick:b.wz})):null)};var we=n(8175);const Ue=a.ZP.span`
  &::after {
    content: '|';
    color: var(--text-color-secondary);
    margin: 0 2px;
  }
  &:last-child::after {
    content: '';
    margin: 0;
  }
  > .singer {
    font-size: inherit;
    cursor: pointer;
    color: var(--text-color-secondary);
    &.unknown {
      color: var(--text-color-secondary) !important;
      cursor: not-allowed;
    }
    &:hover {
      color: var(--text-color-primary);
    }
  }
`,De=r.memo((({singer:e})=>r.createElement(Ue,null,e?r.createElement("span",{className:"singer",onClick:()=>$.emit(k.OPEN_SINGER_DRAWER,{id:e.id})},e.name):r.createElement("span",{className:"singer unknown"},"未知歌手")))),Me=a.ZP.div`
  flex: 1;
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 5px;

  > .left {
    min-width: 0;
    ${v.Z}

    color: var(--text-color-secondary);

    > .name {
      font-size: 14px;
      color: var(--text-color-primary);

      &.active {
        cursor: pointer;

        &:hover {
          color: var(--color-primary);
        }
      }
    }

    > .singer-list {
      margin-left: 5px;

      font-size: 12px;
    }
  }
`,Ge=({music:e})=>{const{playMode:t}=(0,r.useContext)(f);let n=null;if(e){switch(t){case m.HQ:e.hq&&(n=d.D.HQ);break;case m.AC:e.ac&&(n=d.D.AC)}n=n||d.D.SQ}return r.createElement(Me,null,r.createElement("div",{className:"left"},e?r.createElement(r.Fragment,null,r.createElement("span",{className:"name active",onClick:()=>{if(e)return $.emit(k.OPEN_MUSIC_DRAWER,{id:e.id})}},e.name),r.createElement("span",{className:"singer-list"},e.singers.length?e.singers.map((e=>r.createElement(De,{key:e.id,singer:e}))):r.createElement(De,null))):r.createElement("span",{className:"name"},"知了")),n?r.createElement(d.Z,{className:"tag",type:n}):null)},ze=26,$e=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 5px;

  > .divider {
    width: 1px;
    height: 20px;
    background-color: rgb(0 0 0 / 0.1);

    margin: 0 6px;
  }
`,Ye=()=>$.emit(k.OPEN_PLAYLIST_PLAYQUEUE_DRAWER,{}),Ve=()=>$.emit(k.ACTION_TOGGLE_PLAY,{}),We=()=>$.emit(k.ACTION_PREVIOUS,{}),Be=()=>$.emit(k.ACTION_NEXT,{}),qe=({music:e,paused:t,loading:n})=>r.createElement($e,null,r.createElement(D.ZP,{name:D.VG.INSERT_OUTLINE,onClick:()=>{if(e)return $.emit(k.ACTION_INSERT_MUSIC_TO_PLAYQUEUE,{music:e})},size:ze}),r.createElement(D.ZP,{name:D.VG.ADD_TO_OUTLINE,onClick:()=>{if(e)return $.emit(k.OPEN_MUSICBILL_LIST_DRAWER,{music:e})},size:ze}),r.createElement(D.ZP,{name:D.VG.MORE_OUTLINE,onClick:()=>{if(e)return $.emit(k.OPEN_MUSIC_OPERATE_POPUP,{music:e})},size:ze}),r.createElement("div",{className:"divider"}),r.createElement(D.ZP,{name:D.VG.LIST_OUTLINE,onClick:Ye,size:ze}),r.createElement("div",{className:"divider"}),r.createElement(D.ZP,{name:D.VG.PREVIOUS_FILL,onClick:We,size:ze}),r.createElement(D.ZP,{name:t?D.VG.PLAY_FILL:D.VG.PAUSE_FILL,loading:n,onClick:Ve,size:30}),r.createElement(D.ZP,{name:D.VG.NEXT_FILL,onClick:Be,size:ze})),He=a.ZP.div`
  position: relative;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;

  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 20px 2px 20px;

  > .left {
    flex: 1;
    min-width: 0;

    > .bottom {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  > .cover-placeholder {
    width: ${64}px;
  }

  > .cover {
    position: absolute;
    right: 20px;
    bottom: 5px;

    cursor: pointer;
    border: 1px solid var(--color-primary);
  }
`,Fe=()=>$.emit(k.TOGGEL_LYRIC,{}),Qe=()=>{const{playqueue:e,currentPlayqueuePosition:t,audioPaused:n,audioLoading:a}=(0,r.useContext)(f),l=e[t],i=(0,r.useMemo)(we.Z,[]);return r.createElement(He,null,r.createElement("div",{className:"left"},r.createElement("div",{className:"bottom"},r.createElement(Ge,{music:l?l.music:null}),r.createElement(qe,{music:l?l.music:null,paused:n,loading:a}))),r.createElement("div",{className:"cover-placeholder"}),r.createElement(h.Z,{className:"cover",src:l?l.music.cover:i,alt:"cover",size:64,onClick:Fe}))},je=a.ZP.div``,Ke=()=>r.createElement(je,null,"styled_function_component"),Xe=r.memo((()=>{const{smallView:e}=(0,r.useContext)(f);return e?r.createElement(Ke,null):r.createElement(Qe,null)}));var Je=n(5733);const et=a.ZP.div`
  width: 100%;
  height: 100%;
`,tt=a.ZP.div`
  padding: 0 40px;
  font-size: 16px;
  font-weight: bold;
  color: var(--text-color-primary);
`,nt=a.ZP.div`
  margin: 30px 0;
`;var rt=n(7382),at=n(6196);const lt=e=>{const{id:t,cover:n,name:r,type:a,alias:l,singers:i,sq:o,hq:c,ac:s,mv_link:m,fork:u,fork_from:d}=e;return{id:t,cover:n||(0,we.Z)(),name:r,type:a,alias:l,singers:i.map((e=>({...e,avatar:e.avatar||(0,we.Z)()}))),sq:o,ac:s,hq:c,mvLink:m,fork:u||[],forkFrom:d||[]}},it=150,ot=a.ZP.div`
  display: flex;
  align-items: flex-start;

  > .action-box {
    padding-top: ${73}px;
    width: 40px;

    display: flex;
    justify-content: center;
  }
`,ct=a.ZP.div`
  flex: 1;
  min-width: 0;

  overflow: auto;
  ${_}
  scroll-behavior: smooth;

  margin-top: ${10}px;

  display: flex;
  align-items: center;
  gap: ${10}px;
`,st=({children:e,...t})=>{const n=(0,r.useRef)(null),[a,l]=(0,r.useState)(!1),[i,o]=(0,r.useState)(!1),c=(0,r.useCallback)((()=>{const{scrollWidth:e,scrollLeft:t,clientWidth:r}=n.current;l(0===t),o(t+r===e)}),[]);return(0,r.useLayoutEffect)((()=>{c()}),[c,e]),r.createElement(ot,{...t},r.createElement("div",{className:"action-box"},r.createElement(D.ZP,{name:D.VG.LEFT_OUTLINE,size:24,disabled:a,onClick:()=>{const{scrollLeft:e,children:t}=n.current;let r=0;for(let a=0,{length:l}=t;a<l;a+=1){const l=t[a];if(r+=l.clientWidth+(a>0?10:0),r>=e){const i=r-l.clientWidth;n.current.scrollLeft=i===e?e-(t[a-1].clientWidth+10):i;break}}}})),r.createElement(ct,{ref:n,onScroll:()=>{c()}},e),r.createElement("div",{className:"action-box"},r.createElement(D.ZP,{name:D.VG.RIGHT_OUTLINE,size:24,disabled:i,onClick:()=>{const{scrollLeft:e,clientWidth:t,children:r}=n.current,a=e+t;let l=0;for(let e=0,{length:i}=r;e<i;e+=1)if(l+=r[e].clientWidth+(e>0?10:0),l>a){n.current.scrollLeft=l-t;break}}})))},mt=a.ZP.div`
  width: ${it}px;

  > .cover-box {
    position: relative;

    overflow: hidden;

    > .menu {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;

      box-sizing: border-box;
      padding: 5px;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 5px;

      transition: 300ms;
      opacity: 0;
      transform: translateY(100%);
      background: linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.7)
      );
    }
  }

  > .name {
    margin: 5px 0 2px 0;

    font-size: 14px;
    line-height: 1.3;

    cursor: pointer;
    color: var(--text-color-primary);
    ${v.Z}

    &:hover {
      color: #000;
    }
  }

  > .singers {
    line-height: 1.3;
    font-size: 12px;

    ${v.Z}
  }

  &:hover {
    > .cover-box {
      > .menu {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }
`,ut=r.memo((()=>r.createElement(r.Fragment,null,new Array(30).fill(0).map(((e,t)=>r.createElement(mt,{key:t},r.createElement("div",{className:"cover-box"},r.createElement(Y.Z,{size:it,alt:"cover"})),r.createElement("div",{className:"name"},r.createElement(X,{width:(0,J.Z)(30,it)})),r.createElement("div",{className:"singers"},r.createElement(X,{width:(0,J.Z)(30,it)}))))))));var dt=n(2983);const Et=(e,t)=>({onView:(0,r.useCallback)((()=>$.emit(k.OPEN_MUSIC_DRAWER,e)),[e]),onPlay:(0,r.useCallback)((()=>{$.emit(k.ACTION_PLAY_MUSIC,{music:e}),t&&t()}),[e,t]),onAddToPlayqueue:(0,r.useCallback)((()=>{$.emit(k.ACTION_INSERT_MUSIC_TO_PLAYQUEUE,{music:e}),t&&t()}),[e,t]),onAddToMusicbill:(0,r.useCallback)((()=>{$.emit(k.OPEN_MUSICBILL_LIST_DRAWER,{music:e}),t&&t()}),[e,t]),onAddToPlaylist:(0,r.useCallback)((()=>{$.emit(k.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,{musicList:[e]}),t&&t()}),[e,t]),onWatchMv:(0,r.useCallback)((()=>{$.emit(k.ACTION_PAUSE,{}),P(e.mvLink),t&&t()}),[e,t]),onOperate:(0,r.useCallback)((()=>$.emit(k.OPEN_MUSIC_OPERATE_POPUP,{music:e})),[e]),onCopyID:(0,r.useCallback)((()=>{window.navigator.clipboard.writeText(e.id).then((()=>Oe.ZP.success(`已复制「${e.id}」`))).catch((e=>dt.ZP.alert({title:"复制失败",content:e.message}))),t&&t()}),[e,t])});var pt=n(533),ft=n(6661),_t=n(7701),gt=n(6780),ht=n(9935);const vt=class{taskMinDuration;taskTimeout;taskInterval;abortErrorGenerator;timeoutErrorGenerator;running;taskQueue;constructor({taskMinDuration:e=0,taskTimeout:t=0,taskInterval:n=0,abortErrorGenerator:r,timeoutErrorGenerator:a}){this.taskMinDuration=e,this.taskTimeout=t,this.taskInterval=n,this.abortErrorGenerator=r,this.timeoutErrorGenerator=a,this.running=!1,this.taskQueue=[]}run(e){const t=(0,_t.Z)();let n,r=!1;return{promise:new Promise(((a,l)=>(n=()=>{if(r)throw new Error("The task is finished and can not be aborted.");return this.taskQueue=this.taskQueue.filter((e=>e.id!==t)),l(this.abortErrorGenerator?this.abortErrorGenerator():new Error("Task aborted."))},this.taskQueue.push({id:t,task:e,resolve:a,reject:l}),this.nextTask()))).finally((()=>{r=!0})),finished:()=>r,abort:n}}async nextTask(){if(this.running||!this.taskQueue.length)return;this.running=!0;const[{task:e,resolve:t,reject:n}]=this.taskQueue.splice(0,1);try{const[n]=await Promise.race([Promise.all([e(),(0,ht.Z)(this.taskMinDuration)]),(0,gt.Z)(this.taskTimeout,{errorGenerator:this.timeoutErrorGenerator})]);t(n)}catch(e){n(e)}this.running=!1,setTimeout(this.nextTask.bind(this),this.taskInterval)}};class It extends Error{}class Ct extends Error{}const Lt=new vt({taskMinDuration:500,taskTimeout:1e4,abortErrorGenerator:()=>new It("队列加载图片被主动阻断."),timeoutErrorGenerator:e=>new Ct(`队列加载图片超时 ${e}ms.`)}),xt=a.ZP.div`
  font-size: 0;
  > .cover {
    cursor: pointer;
  }
`,yt=({src:e,onClick:t})=>{const n=(0,r.useRef)(null),[a,l]=(0,r.useState)("");return(0,r.useEffect)((()=>()=>{n.current&&n.current()}),[]),r.createElement(pt.h,{onEnter:()=>{if(a===e)return;const{promise:t,abort:r,finished:i}=Lt.run((()=>(0,ft.Z)(e)));t.then((()=>l(e))).catch((e=>{if(!(e instanceof It))return rt.Z.error(e,{description:"加载图片失败",report:!0})})),n.current=()=>{if(!i())return r()}},horizontal:!0},r.createElement(xt,null,r.createElement(h.Z,{className:"cover",src:a,size:it,onClick:t,alt:"cover"})))},bt=({music:e})=>{const{onView:t,onPlay:n,onAddToPlayqueue:a,onAddToMusicbill:l,onOperate:i}=Et(e),{name:o,singers:c}=e;return r.createElement(mt,null,r.createElement("div",{className:"cover-box"},r.createElement(yt,{src:e.cover,onClick:t}),r.createElement("div",{className:"menu"},r.createElement(D.ZP,{name:D.VG.PLAY_OUTLINE,onClick:n,size:18}),r.createElement(D.ZP,{name:D.VG.INSERT_OUTLINE,onClick:a,size:18}),r.createElement(D.ZP,{name:D.VG.ADD_TO_OUTLINE,onClick:l,size:18}),r.createElement(D.ZP,{name:D.VG.MORE_OUTLINE,onClick:i,size:18}))),r.createElement("div",{className:"name",onClick:t},o),r.createElement("div",{className:"singers"},c.length?c.map((e=>r.createElement(De,{key:e.id,singer:e}))):r.createElement(De,null)))},Pt=r.memo((({musicList:e})=>r.createElement(r.Fragment,null,e.map((e=>r.createElement(bt,{key:e.id,music:e})))))),Tt={flex:1},Nt=()=>{const{error:e,loading:t,musicList:n,reload:a}=(()=>{const[e,t]=(0,r.useState)(null),[n,a]=(0,r.useState)(!1),[l,i]=(0,r.useState)([]),o=(0,r.useCallback)((async()=>{t(null),a(!0);try{const e=await at.Z.get("/api/get_recommendatory_music_list",{withToken:!0});i(e.map(lt))}catch(e){rt.Z.error(e,{description:"获取推荐音乐列表失败",report:!0}),t(e)}a(!1)}),[]);return(0,r.useEffect)((()=>{o()}),[o]),{error:e,loading:n,musicList:l,reload:o}})();let l=null;return l=e?r.createElement(M.Z,{errorMessage:e.message,retry:a,style:Tt}):t?r.createElement(ut,null):r.createElement(Pt,{musicList:n}),r.createElement(nt,null,r.createElement(tt,null,"推荐音乐"),r.createElement(st,{className:"list"},l))},Ot=a.ZP.div`
  width: ${it}px;

  > .name {
    margin: 5px 0 0 0;

    font-size: 14px;
    line-height: 1.3;

    cursor: pointer;
    color: var(--text-color-primary);
    ${v.Z}

    &:hover {
      color: #000;
    }
  }
`,At=r.memo((()=>r.createElement(r.Fragment,null,new Array(30).fill(0).map(((e,t)=>r.createElement(Ot,{key:t},r.createElement(Y.Z,{size:it,alt:"cover"}),r.createElement("div",{className:"name"},r.createElement(X,{width:(0,J.Z)(30,it)})))))))),St=({musicbill:e})=>{const t=(0,S.Z)(),{id:n,name:a,cover:l}=e,i=()=>t.push({pathname:N.m$.PUBLIC_MUSICBILL,query:{id:n}});return r.createElement(Ot,null,r.createElement(yt,{src:l,onClick:i}),r.createElement("div",{className:"name",onClick:i},a))},Zt=r.memo((({musicbillList:e})=>r.createElement(r.Fragment,null,e.map((e=>r.createElement(St,{key:e.id,musicbill:e})))))),Rt={flex:1},kt=()=>{const{error:e,loading:t,musicbillList:n,reload:a}=(()=>{const[e,t]=(0,r.useState)(null),[n,a]=(0,r.useState)(!1),[l,i]=(0,r.useState)([]),o=(0,r.useCallback)((async()=>{t(null),a(!0);try{const e=await at.Z.get("/api/get_recommendatory_musicbill_list",{withToken:!0});i(e.map((e=>({...e,cover:e.cover||(0,we.Z)()}))))}catch(e){rt.Z.error(e,{description:"获取推荐歌单列表失败",report:!0}),t(e)}a(!1)}),[]);return(0,r.useEffect)((()=>{o()}),[o]),{error:e,loading:n,musicbillList:l,reload:o}})();let l=null;return l=e?r.createElement(M.Z,{errorMessage:e.message,retry:a,style:Rt}):t?r.createElement(At,null):r.createElement(Zt,{musicbillList:n}),r.createElement(nt,null,r.createElement(tt,null,"推荐歌单"),r.createElement(st,{className:"list"},l))},wt=a.ZP.div`
  width: ${it}px;

  > .name {
    margin: 5px 0 0 0;

    font-size: 14px;
    line-height: 1.3;

    cursor: pointer;
    color: var(--text-color-primary);
    ${v.Z}

    &:hover {
      color: #000;
    }
  }
`,Ut=r.memo((()=>r.createElement(r.Fragment,null,new Array(30).fill(0).map(((e,t)=>r.createElement(wt,{key:t},r.createElement(Y.Z,{size:it,alt:"avatar"}),r.createElement("div",{className:"name"},r.createElement(X,{width:(0,J.Z)(30,it)})))))))),Dt=({singer:e})=>{const{id:t,name:n,avatar:a}=e,l=()=>$.emit(k.OPEN_SINGER_DRAWER,{id:t});return r.createElement(wt,null,r.createElement(yt,{src:a,onClick:l}),r.createElement("div",{className:"name",onClick:l},n))},Mt=r.memo((({singerList:e})=>r.createElement(r.Fragment,null,e.map((e=>r.createElement(Dt,{key:e.id,singer:e})))))),Gt={flex:1},zt=()=>{const{error:e,loading:t,singerList:n,reload:a}=(()=>{const[e,t]=(0,r.useState)(null),[n,a]=(0,r.useState)(!1),[l,i]=(0,r.useState)([]),o=(0,r.useCallback)((async()=>{t(null),a(!0);try{const e=await at.Z.get("/api/get_recommendatory_singer_list",{withToken:!0});i(e.map((e=>({...e,avatar:e.avatar||(0,we.Z)()}))))}catch(e){rt.Z.error(e,{description:"获取推荐歌手列表失败",report:!0}),t(e)}a(!1)}),[]);return(0,r.useEffect)((()=>{o()}),[o]),{error:e,loading:n,singerList:l,reload:o}})();let l=null;return l=e?r.createElement(M.Z,{errorMessage:e.message,retry:a,style:Gt}):t?r.createElement(Ut,null):r.createElement(Mt,{singerList:n}),r.createElement(nt,null,r.createElement(tt,null,"推荐歌手"),r.createElement(st,{className:"list"},l))},$t=(0,a.ZP)(et)`
  overflow: hidden auto;
  ${Je.Z}

  ${({topBoxShadow:e})=>a.iv`
    box-shadow: ${e?"inset 0px 5px 5px -5px rgb(0 0 0 / 10%)":"none"};
  `}
`,Yt=()=>{const[e,t]=(0,r.useState)(0);return r.createElement($t,{onScroll:e=>{const{scrollTop:n}=e.target;return t(0===n?0:1)},topBoxShadow:e},r.createElement(Nt,null),r.createElement(kt,null),r.createElement(zt,null))};var Vt,Wt=n(1579),Bt=n(687);!function(e){e.COMPOSITE="composite",e.LYRIC="lyric"}(Vt||(Vt={}));const qt=Object.values(Vt);var Ht;!function(e){e.SEARCH_TYPE="search_type",e.SEARCH_VALUE="search_value",e.PAGE="page"}(Ht||(Ht={}));var Ft=n(8079);var Qt=n(4508);const jt=(0,a.ZP)(et)`
  overflow: auto;
  ${Je.Z}

  ${({topBoxShadow:e})=>a.iv`
    box-shadow: ${e?"inset 0px 5px 5px -5px rgb(0 0 0 / 10%)":"none"};
  `}
`,Kt=({children:e,...t})=>{const[n,a]=(0,r.useState)(0);return r.createElement(jt,{...t,onScroll:e=>{const{scrollTop:t}=e.target;return a(0===t?0:1)},topBoxShadow:n},e)},Xt=r.memo((()=>{const[e]=(0,r.useState)((0,J.Z)(30,100));return r.createElement(X,{width:e})})),Jt=a.ZP.div`
  height: 46px;
  display: flex;
  gap: 10px;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  > .index {
    font-size: 12px;
    color: var(--text-color-secondary);
    width: 40px;
  }
  > .info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
    > .top {
      display: flex;
      align-items: center;
      gap: 5px;
      > .text {
        ${v.Z}
        >.name {
          font-size: 14px;
          color: var(--text-color-primary);
          cursor: pointer;
          &:hover {
            color: #000;
          }
        }
        > .alias {
          margin-left: 5px;
          font-size: 12px;
          color: var(--text-color-secondary);
        }
      }
    }
    > .singers {
      ${v.Z}
      font-size: 12px;
      color: var(--text-color-secondary);
    }
  }
  > .actions {
    opacity: 0;
  }
  &:hover {
    background-color: #f9f9f9;
    > .actions {
      opacity: 1;
    }
  }
`,en=r.memo((e=>{const t=(0,r.useMemo)((()=>(0,J.Z)(50,150)),[]);return r.createElement(Jt,{...e},r.createElement("div",{className:"index"},r.createElement(X,{width:25})),r.createElement("div",{className:"info"},r.createElement("div",{className:"top"},r.createElement("div",{className:"text"},r.createElement(X,{width:t}))),r.createElement("div",{className:"singers"},r.createElement(Xt,null))))})),tn=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 5px;

  &:empty {
    display: none;
  }
`,nn=({music:e,...t})=>{const{hq:n,ac:a,mvLink:l,fork:i,forkFrom:o}=e;return r.createElement(tn,{...t},n?r.createElement(d.Z,{type:d.D.HQ}):null,a?r.createElement(d.Z,{type:d.D.AC}):null,l?r.createElement(d.Z,{type:d.D.MV}):null,i.length?r.createElement(d.Z,{type:d.D.FORK}):null,o.length?r.createElement(d.Z,{type:d.D.FORK_FROM}):null)},rn=e=>r.createElement(De,{key:e.id,singer:e}),an=({musicWithIndex:e,style:t})=>{const{index:n,music:a}=e,{onPlay:l,onAddToMusicbill:i,onAddToPlayqueue:o,onOperate:c,onView:s}=Et(a),{name:m,alias:u,singers:d}=a;return r.createElement(Jt,{style:t},r.createElement("div",{className:"index"},n),r.createElement("div",{className:"info"},r.createElement("div",{className:"top"},r.createElement("div",{className:"text"},r.createElement("span",{className:"name",onClick:s},m),u?r.createElement("span",{className:"alias"},u):null),r.createElement(nn,{music:a})),r.createElement("div",{className:"singers"},d.length?d.map(rn):r.createElement(De,null))),r.createElement("div",{className:"actions"},r.createElement(D.ZP,{name:D.VG.PLAY_OUTLINE,size:22,onClick:l}),r.createElement(D.ZP,{name:D.VG.INSERT_OUTLINE,size:22,onClick:o}),r.createElement(D.ZP,{name:D.VG.ADD_TO_OUTLINE,size:22,onClick:i}),r.createElement(D.ZP,{name:D.VG.MORE_OUTLINE,size:22,onClick:c})))},ln={padding:"10px 0"},on=({page:e,musicList:t,total:n})=>{const a=(0,S.Z)();return r.createElement(Kt,null,r.createElement("div",{className:"list"},t.map((e=>r.createElement(an,{key:e.index,musicWithIndex:e})))),r.createElement(Qt.Z,{currentPage:e,pageCount:Math.ceil(n/30),onPageChange:e=>a.push({query:{[Ht.PAGE]:e.toString()}}),style:ln}))},cn=(0,a.ZP)(et)`
  display: flex;
  align-items: center;
  justify-content: center;
`;var sn=n(6608),mn=n(7856),un=n.n(mn);const dn=a.ZP.div`
  padding: 12px 20px;
  &:hover {
    background-color: #f9f9f9;
  }
  > .lyric {
    padding-left: 50px;
    margin-top: 10px;
    font-size: 12px;
    color: var(--text-color-primary);
    ${v.Z}
    > .line {
      margin-right: 10px;
      &:last-child,
      &:empty {
        margin-right: 0;
      }
      > .highlight {
        color: var(--color-primary);
      }
    }
  }
`,En={height:"auto",padding:0,backgroundColor:"transparent"},pn=({keyword:e,music:t})=>{const{music:{lrc:n}}=t,a=(0,r.useMemo)((()=>{const{lyrics:t}=(0,sn.parse)(n,{trimStart:!0,trimEnd:!0}),a=t.filter((e=>!!e.content)),l=e.toLowerCase(),i=a.findIndex((e=>e.content.toLowerCase().includes(l))),o=i-1<0?0:i-1,c=i+1>=a.length?a.length:i+1,s=a.slice(o,c+1);return r.createElement("div",{className:"lyric",dangerouslySetInnerHTML:{__html:un().sanitize(s.map((t=>`<span class="line">${((e,t,n)=>{const r=e.toLowerCase().indexOf(t.toLowerCase());if(r>=e.length)return e;const a=r+t.length,l=e.slice(r,a);return e.slice(0,r)+(e=>e?`<span class="highlight">${e}</span>`:"")(l)+e.slice(a)})(t.content,e)}</span>`)).join(""))}})}),[n,e]);return r.createElement(dn,null,r.createElement(an,{musicWithIndex:t,style:En}),a)},fn={padding:"10px 0"},_n=({searchValue:e,page:t,musicList:n,total:a})=>{const l=(0,S.Z)();return r.createElement(Kt,null,r.createElement("div",{className:"list"},n.map((t=>r.createElement(pn,{key:t.index,keyword:e,music:t})))),r.createElement(Qt.Z,{currentPage:t,pageCount:Math.ceil(a/30),onPageChange:e=>l.push({query:{[Ht.PAGE]:e.toString()}}),style:fn}))},gn=()=>{const e=(0,Bt.Z)();let t=e[Ht.SEARCH_TYPE];qt.includes(t)||(t=Vt.COMPOSITE);const n=e[Ht.SEARCH_VALUE]||"",a=(e[Ht.PAGE]?Number(e[Ht.PAGE]):1)||1,{error:l,loading:i,musicList:o,total:c,retry:s}=(({page:e,searchType:t,searchValue:n})=>{const[a,l]=(0,r.useState)(),[i,o]=(0,r.useState)(!1),[c,s]=(0,r.useState)([]),[m,u]=(0,r.useState)(0),d=(0,r.useCallback)((async()=>{if(!n)return l(new Error("请输入关键字进行搜索"));l(null),o(!0);try{if(t===Vt.COMPOSITE){const t=await(0,Ft.Z)({page:e,pageSize:30,keyword:n});u(t.total),s(t.list.map(((e,n)=>({index:t.list.length-n,music:lt(e)}))))}else if(t===Vt.LYRIC){const t=await function({keyword:e,page:t=1,pageSize:n=30}){return at.Z.get("/api/search_music_by_lrc",{withToken:!0,params:{keyword:e,page:t,page_size:n}})}({page:e,pageSize:30,keyword:n});u(t.total),s(t.list.map(((e,n)=>({index:t.list.length-n,music:{...lt(e),lrc:e.lrc}}))))}}catch(e){rt.Z.error(e,{description:"搜索音乐失败",report:!0}),l(e)}o(!1)}),[t,n,e]);return(0,r.useEffect)((()=>{d()}),[d]),{error:a,loading:i,musicList:c,total:m,retry:d}})({page:a,searchType:t,searchValue:n});return l?r.createElement(cn,null,r.createElement(M.Z,{errorMessage:l.message,retry:s})):i?r.createElement(cn,null,r.createElement(Wt.Z,null)):o.length?t===Vt.COMPOSITE?r.createElement(on,{page:a,musicList:o,total:c}):t===Vt.LYRIC?r.createElement(_n,{searchValue:n,page:a,musicList:o,total:c}):null:r.createElement(cn,null,r.createElement(U.Z,{description:"未找到相关音乐"}))};var hn,vn=n(7877);!function(e){e.OPEN_EDIT_DIALOG="open_edit_dialog",e.OPEN_COVER_EDIT_DIALOG="open_cover_edit_dialog",e.TOP_CONTENT_CHANGE="top_content_change",e.KEYWORD_CHANGE="keyword_change"}(hn||(hn={}));const In=new(z());var Cn;!function(e){e.INFO="info",e.SEARCH="search"}(Cn||(Cn={}));const Ln=28,xn=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  gap: 10px;
  padding: 10px 0;
`,yn=()=>In.emit(hn.TOP_CONTENT_CHANGE,{topContent:Cn.SEARCH}),bn=()=>In.emit(hn.OPEN_EDIT_DIALOG),Pn=({musicbill:e})=>{const{status:t}=e;return r.createElement(xn,null,r.createElement(vn.Z,{title:"重新加载",placement:vn.u.LEFT},r.createElement(D.ZP,{name:D.VG.REFRESH_OUTLINE,size:Ln,loading:t===o.eE.LOADING,onClick:()=>$.emit(k.GET_MUSICBILL_DETAIL,{id:e.id})})),r.createElement(vn.Z,{title:"全部添加到播放列表",placement:vn.u.LEFT},r.createElement(D.ZP,{name:D.VG.PLUS_OUTLINE,size:Ln,onClick:()=>{const{musicList:t}=e;return $.emit(k.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,{musicList:t.map((e=>e.music))})},disabled:t!==o.eE.SUCCESS||!e.musicList.length})),r.createElement(vn.Z,{title:"歌单内查找",placement:vn.u.LEFT},r.createElement(D.ZP,{onClick:yn,size:Ln,name:D.VG.SEARCH_LIST_OUTLINE})),r.createElement(vn.Z,{title:"更新歌单信息",placement:vn.u.LEFT},r.createElement(D.ZP,{name:D.VG.EDIT_OUTLINE,size:Ln,onClick:bn})),r.createElement(vn.Z,{title:"复制歌单 ID",placement:vn.u.LEFT},r.createElement(D.ZP,{name:D.VG.COPY_OUTLINE,size:Ln,onClick:()=>window.navigator.clipboard.writeText(e.id).then((()=>Oe.ZP.success(`已复制「${e.id}」`))).catch((e=>dt.ZP.alert({title:"复制失败",content:e.message})))})),r.createElement(vn.Z,{title:"删除歌单",placement:vn.u.LEFT},r.createElement(D.ZP,{name:D.VG.GARBAGE_OUTLINE,size:Ln,onClick:()=>dt.ZP.confirm({title:`确定删除歌单"${e.name}"?`,content:"注意, 歌单删除后无法恢复.",onConfirm:()=>dt.ZP.confirm({title:`确定删除歌单"${e.name}"?`,content:"注意, 歌单删除后无法恢复. 现在是第二次确认, 也是最后一次确认.",onConfirm:async()=>{try{await(t=e.id,at.Z.get("/api/delete_musicbill",{params:{id:t},withToken:!0})),$.emit(k.MUSICBILL_DELETED,{id:e.id})}catch(e){return rt.Z.error(e,{description:"删除歌单失败",report:!0}),dt.ZP.alert({title:"删除歌单失败",content:e.message}),!0}var t}})})})))};var Tn=n(6321);const Nn=a.ZP.div`
  position: relative;
  transition: 300ms;

  ${({open:e,disabled:t})=>a.iv`
    background-color: ${e?"var(--color-primary)":"rgb(0 0 0 / 0.2)"};
    opacity: ${t?.5:1};
    cursor: ${t?"not-allowed":"pointer"};
  `}
`,On=a.ZP.div`
  position: absolute;

  border-radius: 50%;
  background-color: #fff;
  transition: 300ms;
`,An=({open:e,onChange:t,disabled:n=!1,loading:a=!1,size:l=Tn.d.MINI,style:i})=>{const o=.7*l,c=.15*l;return r.createElement(Nn,{open:e,disabled:n||a,style:{width:2*l,height:l,borderRadius:l/2,...i},onClick:()=>{t&&t(!e)}},r.createElement(On,{open:e,style:{top:c,left:e?c:l*(1.85-.7),width:o,height:o}}))};var Sn,Zn=n(1894);!function(e){e.NAME="name",e.DESCRIPTION="description",e.COVER="cover",e.PUBLIC="public"}(Sn||(Sn={}));const Rn=async function({id:e,key:t,value:n}){const r=new FormData;return r.append("id",e),r.append("key",t),r.append("value",n),at.Z.post("/api/update_musicbill",{data:r,withToken:!0})},kn=33;var wn=n(3584),Un=n(5455),Dn=n(511);const Mn=()=>In.emit(hn.OPEN_COVER_EDIT_DIALOG),Gn=(0,a.ZP)(wn.VY)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,zn=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,$n={width:"100%"},Yn={...$n,height:75,resize:"vertical"},Vn=r.memo((({musicbill:e})=>{const{open:t,onClose:n}=(()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)((()=>t(!1)),[]);return(0,r.useEffect)((()=>{const e=()=>t(!0);return In.on(hn.OPEN_EDIT_DIALOG,e),()=>{In.off(hn.OPEN_EDIT_DIALOG,e)}}),[]),{open:e,onClose:n}})(),[a,l]=(0,r.useState)(""),[i,o]=(0,r.useState)(""),[c,s]=(0,r.useState)(!1),[m,u]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{t&&(l(e.name),o(e.description),s(e.public))}),[t,e]),r.createElement(wn.ZP,{open:t},r.createElement(Gn,null,r.createElement(Zn.Z,{label:"封面"},r.createElement(zn,null,r.createElement(h.Z,{src:e.cover,size:80,alt:"cover"}),r.createElement(D.ZP,{name:D.VG.EDIT_OUTLINE,onClick:Mn,disabled:m}))),r.createElement(Zn.Z,{label:"名字"},r.createElement(Ne.Z,{value:a,onChange:e=>l(e.target.value),style:$n,maxLength:kn,disabled:m,type:"text"})),r.createElement(Zn.Z,{label:"描述"},r.createElement(Dn.Z,{value:i,onChange:e=>o(e.target.value),className:"textarea",maxLength:255,disabled:m,style:Yn})),r.createElement(Zn.Z,{label:"公开"},r.createElement(An,{open:c,onChange:s,disabled:m}))),r.createElement(wn.aU,null,r.createElement(Un.Z,{label:"取消",onClick:n,disabled:m}),r.createElement(Un.Z,{label:"更新",loading:m,onClick:async()=>{if(a.length<1)return Oe.ZP.error('"歌单名字"长度应大于等于1');if(a.length>kn)return Oe.ZP.error('"歌单名字"长度应小于等于33');if(i.length>255)return Oe.ZP.error('"歌单描述"长度应小于等于33');u(!0);try{let t=!1;e.name!==a&&(await Rn({id:e.id,key:Sn.NAME,value:a}),t=!0),e.description!==i&&(await Rn({id:e.id,key:Sn.DESCRIPTION,value:i}),t=!0),e.public!==c&&(await Rn({id:e.id,key:Sn.PUBLIC,value:c?"1":"0"}),t=!0),t&&$.emit(k.MUSICBILL_UPDATED,{id:e.id}),n()}catch(e){rt.Z.error(e,{description:"更新歌单信息失败",report:!0}),dt.ZP.alert({title:"更新歌单信息失败",content:e.message})}u(!1)},type:Un.D.PRIMARY})))}));var Wn=n(4698);const Bn={width:1e3,height:1e3},qn=({musicbill:e})=>{const{open:t,onClose:n}=(()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)((()=>t(!1)),[]);return(0,r.useEffect)((()=>{const e=()=>t(!0);return In.on(hn.OPEN_COVER_EDIT_DIALOG,e),()=>{In.off(hn.OPEN_COVER_EDIT_DIALOG,e)}}),[]),{open:e,onClose:n}})(),a=(0,r.useCallback)((async t=>{await Rn({id:e.id,key:Sn.COVER,value:t}),$.emit(k.MUSICBILL_UPDATED,{id:e.id})}),[e]);return r.createElement(Wn.Z,{open:t,onClose:n,onUpdate:a,imageSize:Bn})};var Hn=n(4928);const Fn=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > .input-box {
    position: relative;
    > .input {
      width: 250px;
    }
    > .loader {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
`,Qn=()=>In.emit(hn.TOP_CONTENT_CHANGE,{topContent:Cn.INFO}),jn=({cover:e,style:t})=>{const n=(0,r.useRef)(null),[a,l]=(0,r.useState)(!1),[i,o]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(i){l(!0);const e=window.setTimeout((()=>{l(!1),In.emit(hn.KEYWORD_CHANGE,{keyword:i})}),1e3);return()=>window.clearTimeout(e)}l(!1),In.emit(hn.KEYWORD_CHANGE,{keyword:""})}),[i]),(0,r.useLayoutEffect)((()=>{const e=window.setTimeout((()=>n.current.focus()),1e3);return()=>window.clearTimeout(e)}),[]),r.createElement(Fn,{style:t},r.createElement(h.Z,{src:e,alt:"cover"}),r.createElement("div",{className:"input-box"},r.createElement(Ne.Z,{className:"input",value:i,onChange:e=>o(e.target.value),ref:n}),a?r.createElement(Wt.Z,{className:"loader",size:16}):null),r.createElement(D.ZP,{name:D.VG.DOWN_OUTLINE,onClick:Qn}))};var Kn=n(921);const Xn=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  box-sizing: border-box;

  > .info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    > .name {
      font-size: 16px;
      font-weight: bold;
      color: var(--text-color-primary);
    }
    > .description {
      ${v.Z}
      font-size: 12px;
      color: var(--text-color-secondary);
    }
  }
`,Jn=(0,a.ZP)(h.Z)`
  ${({publiz:e})=>a.iv`
    border: ${e?"3px solid var(--color-primary)":"none"};
  `}
`,er=({musicbill:e,style:t})=>r.createElement(Xn,{style:t},r.createElement(Jn,{src:e.cover,size:70,publiz:e.public,alt:"cover"}),r.createElement("div",{className:"info"},r.createElement("div",{className:"name"},e.name),e.description?r.createElement("div",{className:"description",title:e.description},e.description):null,r.createElement("div",{className:"description"},"创建于 ",(0,Kn.Z)(e.createTime).format("YYYY-MM-DD HH:mm"),e.status===o.eE.SUCCESS?r.createElement("span",null,", 共 ",e.musicList.length," 首音乐"):null))),tr=a.ZP.div`
  position: relative;
  height: 90px;
`,nr=({musicbill:e})=>{const t=(()=>{const[e,t]=(0,r.useState)(Cn.INFO);return(0,r.useEffect)((()=>{const e=({topContent:e})=>t(e);return In.on(hn.TOP_CONTENT_CHANGE,e),()=>{In.off(hn.TOP_CONTENT_CHANGE,e)}}),[]),e})(),n=(0,Hn.Yz)(t,{from:{transform:"translateY(-100%)",opacity:0},enter:{transform:"translateY(0%)",opacity:1},leave:{transform:"translateY(100%)",opacity:0}});return r.createElement(tr,null,n(((t,n)=>n===Cn.INFO?r.createElement(er,{musicbill:e,style:t}):n===Cn.SEARCH?r.createElement(jn,{cover:e.cover,style:t}):null)))};var rr;!function(e){e.LOADING="loading",e.ERROR="error",e.SUCCESS="success",e.EMPTY="empty"}(rr||(rr={}));const ar={status:rr.LOADING},lr={status:rr.EMPTY},ir=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`,or=({id:e,error:t,style:n})=>r.createElement(ir,{style:n},r.createElement(M.Z,{errorMessage:t.message,retry:()=>$.emit(k.GET_MUSICBILL_DETAIL,{id:e})})),cr=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  ${Je.Z}
`,sr=({style:e})=>{const t=(0,r.useMemo)((()=>new Array((0,J.Z)(5,15)).fill(0)),[]);return r.createElement(cr,{style:e},t.map(((e,t)=>r.createElement(en,{key:t}))))},mr=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`,ur=({keyword:e,style:t})=>r.createElement(mr,{style:t},r.createElement(U.Z,{description:e?"未匹配到音乐":"空的歌单"}));var dr=n(6970),Er=n.n(dr),pr=n(2827);const fr=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: auto;
  ${Je.Z}
`,_r=({id:e,musicList:t,style:n})=>{const a=(0,r.useRef)(null),[l,i]=(0,r.useState)(0),o=(0,r.useRef)(0);return(0,r.useLayoutEffect)((()=>{window.setTimeout((()=>{const t=sessionStorage.getItem(pr.Zq.replace("{{musicbill_id}}",e));t&&(a.current.scrollTop=+t||0)}),0)}),[e]),r.createElement(fr,{style:{...n,boxShadow:l?"inset 0px 5px 5px -5px rgb(0 0 0 / 10%)":"none"},onScroll:()=>{const{scrollTop:t}=a.current;i(0===t?0:1),window.clearTimeout(o.current),o.current=window.setTimeout((()=>window.sessionStorage.setItem(pr.Zq.replace("{{musicbill_id}}",e),t.toString())),1e3)},ref:a},r.createElement(Er(),{type:"uniform",length:t.length,itemRenderer:(e,n)=>r.createElement(an,{key:n,musicWithIndex:t[e]})}))},gr=a.ZP.div`
  flex: 1;
  min-width: 0;
  position: relative;
`,hr=({musicbill:e})=>{const t=(()=>{const[e,t]=(0,r.useState)("");return(0,r.useEffect)((()=>{const e=()=>t(""),n=({keyword:e})=>t(e);return In.on(hn.TOP_CONTENT_CHANGE,e),In.on(hn.KEYWORD_CHANGE,n),()=>{In.off(hn.TOP_CONTENT_CHANGE,e),In.off(hn.KEYWORD_CHANGE,n)}}),[]),e})(),n=((e,t)=>{const n=(0,r.useMemo)((()=>((e,t)=>{const{status:n,musicList:r,error:a}=e,l=((e,t)=>t?e.filter(function(e){return t=>{const{name:n,alias:r,singers:a}=t.music;if(n.toLowerCase().indexOf(e)>-1||r.toLowerCase().indexOf(e)>-1)return!0;for(const t of a){const{name:n,alias:r}=t;if(n.toLowerCase().indexOf(e)>-1||r.toLowerCase().indexOf(e)>-1)return!0}return!1}}(t)):e)(r,t);return n===o.eE.SUCCESS?l.length?{status:rr.SUCCESS,musicList:l}:lr:n===o.eE.NOT_START||n===o.eE.LOADING?ar:{status:rr.ERROR,error:a}})(e,t)),[e,t]);return n})(e,t),a=(0,w.useTransition)(n,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return r.createElement(gr,null,a(((n,a)=>a.status===rr.SUCCESS?r.createElement(_r,{style:n,id:e.id,musicList:a.musicList}):a.status===rr.EMPTY?r.createElement(ur,{keyword:t,style:n}):a.status===rr.LOADING?r.createElement(sr,{style:n}):a.status===rr.ERROR?r.createElement(or,{style:n,id:e.id,error:a.error}):null)))},vr=a.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > .content {
    flex: 1;
    min-width: 0;
    display: flex;
  }
`,Ir=({musicbill:e})=>((0,r.useEffect)((()=>{e.status===o.eE.NOT_START&&$.emit(k.GET_MUSICBILL_DETAIL,{id:e.id})}),[e]),r.createElement(vr,null,r.createElement(nr,{musicbill:e}),r.createElement("div",{className:"content"},r.createElement(hr,{musicbill:e}),r.createElement(Pn,{musicbill:e})),r.createElement(Vn,{musicbill:e}),r.createElement(qn,{musicbill:e}))),Cr=()=>{const{id:e}=(0,y.UO)(),{musicbillList:t}=(0,r.useContext)(f),n=(0,r.useMemo)((()=>t.value.find((t=>t.id===e))),[t,e]);return n?r.createElement(Ir,{musicbill:n}):r.createElement(y.l_,{to:N.Ql.PLAYER})},Lr=a.iv`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,xr=a.ZP.div`
  padding: 10px 20px;

  display: flex;
  align-items: center;
  gap: 20px;

  > .info {
    position: relative;

    flex: 1;
    min-width: 0;

    display: flex;
    flex-direction: column;
    gap: 15px;

    > .name {
      font-size: 24px;
      font-weight: bold;
      color: var(--text-color-primary);
      ${v.Z}
    }

    > .user {
      display: flex;
      align-items: center;
      gap: 10px;
      > .name {
        flex: 1;
        ${v.Z}

        font-size: 16px;
        color: var(--text-color-primary);
      }
    }

    > .description {
      font-size: 14px;
      color: var(--text-color-secondary);
      ${v.Z}
    }
  }
`,yr={cursor:"pointer"},br=a.ZP.span`
  cursor: pointer;
  color: inherit;
  &:hover {
    color: #000;
  }
`,Pr=({musicbill:e})=>{const{cover:t,name:n,user:a,description:l}=e,i=()=>$.emit(k.OPEN_USER_DRAWER,{id:a.id});return r.createElement(xr,null,r.createElement(h.Z,{src:t,size:140,alt:"cover"}),r.createElement("div",{className:"info"},r.createElement("div",{className:"name",title:n},n),l?r.createElement("div",{className:"description",title:l},l):null,r.createElement("div",{className:"user"},r.createElement(h.Z,{src:a.avatar,size:32,shape:h.b.CIRCLE,onClick:i,style:yr,alt:"avatar"}),r.createElement("div",{className:"name",title:a.nickname},r.createElement(br,{onClick:i},a.nickname)))))},Tr={borderRadius:"50%"},Nr=r.memo((()=>r.createElement(xr,null,r.createElement(X,{width:140,height:140}),r.createElement("div",{className:"info"},r.createElement("div",{className:"name"},r.createElement(X,{width:(0,J.Z)(100,250)})),r.createElement("div",{className:"description"},r.createElement(X,{width:(0,J.Z)(100,250)})),r.createElement("div",{className:"user"},r.createElement(X,{width:32,height:32,style:Tr}),r.createElement("div",{className:"name"},r.createElement(X,{width:(0,J.Z)(100,250)}))))))),Or=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  gap: 10px;
  padding: 10px 0;
`,Ar=({musicbill:e})=>{const{id:t,musicList:n}=e;return r.createElement(Or,null,r.createElement(vn.Z,{title:"全部添加到播放列表",placement:vn.u.LEFT},r.createElement(D.ZP,{name:D.VG.PLUS_OUTLINE,size:28,onClick:()=>$.emit(k.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,{musicList:n.map((e=>e.music))}),disabled:!n.length})),r.createElement(vn.Z,{title:"复制歌单 ID",placement:vn.u.LEFT},r.createElement(D.ZP,{name:D.VG.COPY_OUTLINE,size:28,onClick:()=>navigator.clipboard.writeText(t).then((()=>Oe.ZP.success(`已复制「${t}」`))).catch((e=>dt.ZP.alert({title:"复制失败",content:e.message})))})))},Sr=a.ZP.div`
  flex: 1;
  min-width: 0;

  overflow: auto;
  ${Je.Z}

  ${({topBoxShadow:e})=>a.iv`
    box-shadow: ${e?"inset 0px 5px 5px -5px rgb(0 0 0 / 10%)":"none"};
  `}
`,Zr=r.memo((()=>{const e=(0,r.useMemo)((()=>(0,J.Z)(10,30)),[]);return r.createElement(Sr,null,new Array(e).fill(0).map(((e,t)=>r.createElement(en,{key:t}))))})),Rr={display:"flex",alignItems:"center",justifyContent:"center"},kr=({musicbill:e})=>{const[t,n]=(0,r.useState)(!1),{musicList:a}=e;return a.length?r.createElement(Sr,{topBoxShadow:t,onScroll:e=>{const{scrollTop:t}=e.target;return n(0!==t)}},r.createElement(Er(),{type:"uniform",length:a.length,itemRenderer:(e,t)=>r.createElement(an,{key:t,musicWithIndex:a[e]})})):r.createElement(Sr,{style:Rr},r.createElement(U.Z,{description:"歌单暂无音乐"}))},wr=(0,a.ZP)(et)`
  position: relative;
`,Ur=(0,a.ZP)(w.animated.div)`
  ${Lr}

  display: flex;
  align-items: center;
  justify-content: center;
`,Dr=(0,a.ZP)(w.animated.div)`
  ${Lr}

  display: flex;
  flex-direction: column;

  > .bottom {
    flex: 1;
    min-height: 0;

    display: flex;
  }
`,Mr=({id:e})=>{const{data:t,reload:n}=(e=>{const[t,n]=(0,r.useState)({loading:!0,musicbill:null,error:null}),a=(0,r.useCallback)((async()=>{n({loading:!0,musicbill:null,error:null});try{const t=await function(e){return at.Z.get("/api/get_public_musicbill_detail",{withToken:!0,params:{id:e}})}(e);n({loading:!1,musicbill:{id:e,cover:t.cover||(0,we.Z)(),name:t.name,description:t.description,user:{...t.user,avatar:t.user.avatar||(0,we.Z)()},musicList:t.music_list.map(((e,n)=>({index:t.music_list.length-n,music:lt(e)})))},error:null})}catch(e){rt.Z.error(e,{description:"获取公共歌单失败",report:!0}),n({loading:!1,musicbill:null,error:e})}}),[e]);return(0,r.useEffect)((()=>{a()}),[a]),{data:t,reload:a}})(e),a=(0,w.useTransition)(t,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return r.createElement(wr,null,a(((e,t)=>t.error?r.createElement(Ur,{style:e},r.createElement(M.Z,{errorMessage:t.error.message,retry:n})):t.loading?r.createElement(Dr,{style:e},r.createElement(Nr,null),r.createElement("div",{className:"bottom"},r.createElement(Zr,null))):r.createElement(Dr,{style:e},r.createElement(Pr,{musicbill:t.musicbill}),r.createElement("div",{className:"bottom"},r.createElement(kr,{musicbill:t.musicbill}),r.createElement(Ar,{musicbill:t.musicbill}))))))},Gr=()=>{const{id:e}=(0,Bt.Z)();return e?r.createElement(Mr,{id:e}):r.createElement(y.l_,{to:N.m$.DISCOVER})},zr=a.ZP.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  border-radius: 4px;
  background-color: rgb(0 0 0 / 0.05);
  margin: 20px;
  > .label {
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: rgb(55 55 55);
  }
`,$r={marginLeft:10,cursor:"pointer"},Yr=({playMode:e})=>r.createElement(zr,null,r.createElement("div",{className:"label"},"播放模式"),p.map((t=>{const{label:n,tagType:a}=E[t];return r.createElement(vn.Z,{key:t,title:n},r.createElement(d.Z,{type:a,gray:e!==t,style:$r,onClick:()=>(e=>$.emit(k.CHANGE_PLAY_MODE,e))(t)}))})));var Vr=n(9011);const Wr=a.ZP.div`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  margin: 10px 20px;
  background-color: rgb(0 0 0 / 0.05);
  border-radius: 4px;
  > .label {
    flex: 1;
    min-width: 0;
    font-size: 12px;
    color: rgb(55 55 55);
  }
  > .shortcut {
    font-size: 12px;
    margin: 0 10px;
    color: rgb(155 155 155);
    > .key {
      &:not(:last-child)::after {
        content: ' + ';
        color: rgb(222 222 222);
      }
    }
  }
`,Br=({label:e,keys:t,onEdit:n})=>r.createElement(Wr,null,r.createElement("div",{className:"label"},e),t.length?r.createElement("div",{className:"shortcut"},t.map((e=>r.createElement("span",{key:e,className:"key"},e)))):null,r.createElement(D.ZP,{name:D.VG.EDIT_OUTLINE,size:20,onClick:n}));var qr=n(3503),Hr=n.n(qr),Fr=n(3582),Qr=n(2381);const jr=(0,a.ZP)(wn.VY)`
  > .content {
    padding: 15px 0;
    background-color: rgb(0 0 0 / 0.05);
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
    > .key {
      &:not(:last-child)::after {
        content: '  +  ';
      }
    }
  }
`,Kr=({globalShortcut:e,open:t,onClose:n,shortcut:a})=>{const[l,i]=(0,r.useState)([]),o=(0,r.useCallback)((()=>(Fr.Z.dispatch((0,Qr.Yk)(a,[])),n())),[a,n]),c=(0,r.useCallback)((()=>{let t=!1;for(const e of Vr.Rm)if(l.includes(e)){t=!0;break}if(!t)return Oe.ZP.error(`全局快捷键至少包含 ${Vr.Rm.join("/")} 中的一个`);if(s.remote.globalShortcut.isRegistered(l.join("+")))return Oe.ZP.error("当前快捷键已被其他程序占用");for(const t of Object.values(Vr.cK))if(t!==a&&e[t].length&&e[t].join(",")===l.join(","))return Oe.ZP.error(`当前快捷键已被"${Vr.RC[t]}"占用`);Fr.Z.dispatch((0,Qr.Yk)(a,l)),setTimeout(n,0)}),[e,a,l,n]);return(0,r.useEffect)((()=>{const e=e=>{e.preventDefault();const{pressedKeys:t}=e,n=Array.from(new Set(t.map((e=>Vr.W1[e]||"")).filter((e=>!!e)))).sort(((e,t)=>{const n=Vr.Rm.includes(e),r=Vr.Rm.includes(t);return n&&r?Vr.Rm.indexOf(e)-Vr.Rm.indexOf(t):n&&!r?-1:!n&&r||e<t?1:e>t?-1:0}));i(n)};return t?(Fr.Z.dispatch((0,Qr.yN)()),Hr().bind("",e)):(Fr.Z.dispatch((0,Qr.Cq)()),Hr().unbind("",e),i([])),()=>{Fr.Z.dispatch((0,Qr.Cq)()),Hr().unbind("",e)}}),[t]),r.createElement(wn.ZP,{open:t},r.createElement(wn.Dx,null,'"',Vr.RC[a],'" 全局快捷键'),r.createElement(jr,null,l.length?r.createElement("div",{className:"content"},l.map((e=>r.createElement("span",{className:"key",key:e},e)))):r.createElement("div",{className:"content empty"},"按下组合键")),r.createElement(wn.aU,null,r.createElement("div",{className:"left"},r.createElement(Un.Z,{label:"删除快捷键",size:32,onClick:o,type:Un.D.DANGER})),r.createElement(Un.Z,{label:"取消",size:32,onClick:n}),r.createElement(Un.Z,{label:"设置",size:32,type:Un.D.PRIMARY,onClick:c,disabled:!l.length})))},Xr={style:{width:350}},Jr=r.memo((({open:e,onClose:t})=>{const n=(0,g.v9)((({globalShortcut:e})=>e),g.wU),[a,l]=(0,r.useState)(""),[i,o]=(0,r.useState)(!1),c=(0,r.useCallback)((e=>{l(e),o(!0)}),[]),s=(0,r.useCallback)((()=>o(!1)),[]);return r.createElement(r.Fragment,null,r.createElement(ve,{open:e,onClose:t,bodyProps:Xr},r.createElement(Ee,null,"全局快捷键"),r.createElement("div",null,Object.values(Vr.cK).map((e=>r.createElement(Br,{key:e,label:Vr.RC[e],keys:n[e],onEdit:()=>c(e)}))))),a?r.createElement(Kr,{globalShortcut:n,open:i,onClose:s,shortcut:a}):null)})),ea=()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)((()=>t(!1)),[]),a=(0,r.useCallback)((()=>t(!0)),[]);return r.createElement(r.Fragment,null,r.createElement(zr,null,r.createElement("div",{className:"label"},"全局快捷键"),r.createElement(Un.Z,{label:"编辑",size:24,onClick:a})),r.createElement(Jr,{open:e,onClose:n}))};var ta=n(8466);const na=a.ZP.div`
  height: ${2}px;
  .thumb {
    margin-top: ${1}px;
    width: ${14}px;
    height: ${14}px;
    transform: translate(0, -50%);
    cursor: grab;
    outline: none;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid rgb(49 194 124);
  }
`,ra=a.ZP.div`
  height: ${2}px;
  border-radius: ${1}px;
  cursor: pointer;
  &.track-0 {
    background-color: rgb(49 194 124 / 0.5);
  }
  &.track-1 {
    background-color: rgb(0 0 0 / 0.05);
  }
`,aa=({value:e,onChange:t,step:n=.01,min:a=0,max:l=1,...i})=>r.createElement(na,{...i},r.createElement(ta.Z,{value:e,onChange:t,step:n,min:a,max:l,renderTrack:(e,t)=>r.createElement(ra,{...e,primary:0===t.index}),renderThumb:e=>r.createElement("div",{...e,className:"thumb"})})),la={width:200,padding:"15px 0"},ia=e=>$.emit(k.ACTION_UPDATE_VOLUME,e),oa=r.memo((({volume:e})=>r.createElement(zr,null,r.createElement("div",{className:"label"},"相对系统音量"),r.createElement(aa,{value:e,onChange:ia,step:.01,min:0,max:1,style:la})))),ca={margin:20,width:"calc(100% - 40px)"},sa=()=>dt.ZP.confirm({title:"即将打开新的页面, 是否继续?",onConfirm:()=>P(`${o.DC}/issues`)}),ma=()=>r.createElement(Un.Z,{block:!0,label:"反馈或建议",type:Un.D.PRIMARY,onClick:sa,size:32,style:ca}),ua=a.ZP.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  ${Je.Z}
`,da=r.memo((()=>{const{playMode:e,volume:t}=(0,r.useContext)(f);return r.createElement(ua,null,r.createElement(Yr,{playMode:e}),r.createElement(oa,{volume:t}),s?r.createElement(ea,null):null,r.createElement(ma,null))})),Ea=a.ZP.div`
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
`,pa=(0,a.ZP)(w.animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`,fa=()=>{const e=(0,y.TH)(),t=(0,w.useTransition)(e,{from:{opacity:0,transform:"translate(-100%)"},enter:{opacity:1,transform:"translate(0%)"},leave:{opacity:0,transform:"translate(100%)"}});return r.createElement(Ea,null,t(((e,t)=>r.createElement(pa,{style:e},r.createElement(y.rs,{location:t},r.createElement(y.AW,{path:N.m$.DISCOVER,component:Yt}),r.createElement(y.AW,{path:N.m$.SEARCH,component:gn}),r.createElement(y.AW,{path:N.m$.MUSICBILL,component:Cr}),r.createElement(y.AW,{path:N.m$.PUBLIC_MUSICBILL,component:Gr}),r.createElement(y.AW,{path:N.m$.SETTING,component:da}),r.createElement(y.l_,{to:N.m$.DISCOVER}))))))},_a=()=>{const e=localStorage.getItem(pr.kV);return e&&p.includes(e)?e:m.SQ};var ga;!function(e){e.SEARCH_WORD="search_word"}(ga||(ga={}));var ha=n(3279),va=n.n(ha);const Ia=()=>{const e=localStorage.getItem(pr.SL);if(!e)return 1;const t=Number(e);return t<0||t>1?1:t},Ca=va()((e=>localStorage.setItem(pr.SL,`${e}`)),1e3);var La=n(3493),xa=n.n(La),ya=n(8913),ba=n(586);const Pa={display:"none"},Ta=()=>$.emit(k.AUDIO_WAITING),Na=e=>{const{duration:t}=e.target;return $.emit(k.AUDIO_CAN_PLAY_THROUGH,{duration:t})},Oa=()=>$.emit(k.AUDIO_PLAY),Aa=()=>$.emit(k.AUDIO_PAUSE),Sa=()=>$.emit(k.ACTION_NEXT),Za=e=>(rt.Z.error(e,{description:"播放发生错误",report:!0}),dt.ZP.alert({title:"播放发生错误",content:e.message}),$.emit(k.AUDIO_ERROR));class Ra extends r.PureComponent{audioRef;constructor(e){super(e),this.audioRef=r.createRef()}componentDidMount(){this.audioRef.current.volume=this.props.volume,$.on(k.ACTION_SET_TIME,this.onActionSetTime),$.on(k.ACTION_TOGGLE_PLAY,this.onActionTogglePlay),$.on(k.ACTION_PLAY,this.onActionPlay),$.on(k.ACTION_PAUSE,this.onActionPause),window.addEventListener("beforeunload",this.beforeUnload)}getSnapshotBeforeUpdate(e){const{queueMusic:t}=this.props;return e.queueMusic.pid!==t.pid&&this.uploadPlayRecord(e.queueMusic.music),null}componentDidUpdate(e){const{volume:t,queueMusic:n}=this.props;this.audioRef.current.volume!==t&&(this.audioRef.current.volume=t),e.queueMusic.pid!==n.pid&&(this.audioRef.current.currentTime=0,this.audioRef.current.play().catch((e=>rt.Z.error(e,{description:"音频播放失败"}))),$.emit(k.AUDIO_TIME_UPDATED,{currentMillisecond:0}))}componentWillUnmount(){$.off(k.ACTION_SET_TIME,this.onActionSetTime),$.off(k.ACTION_TOGGLE_PLAY,this.onActionTogglePlay),$.off(k.ACTION_PLAY,this.onActionPlay),$.off(k.ACTION_PAUSE,this.onActionPause),window.removeEventListener("beforeunload",this.beforeUnload),this.uploadPlayRecord(this.props.queueMusic.music)}onActionSetTime=({second:e})=>(Ta(),window.setTimeout((()=>{this.audioRef.current.currentTime=e,this.audioRef.current.play().catch((e=>rt.Z.error(e,{description:"音频播放失败"}))),$.emit(k.AUDIO_TIME_UPDATED,{currentMillisecond:1e3*e})}),0));onActionTogglePlay=()=>this.audioRef.current.paused?this.audioRef.current.play().catch((e=>rt.Z.error(e,{description:"音频播放失败"}))):this.audioRef.current.pause();onActionPlay=()=>this.audioRef.current.play().catch((e=>rt.Z.error(e,{description:"音频播放失败"})));onActionPause=()=>this.audioRef.current.pause();onTimeUpdate=xa()((()=>{const{currentTime:e}=this.audioRef.current;return $.emit(k.AUDIO_TIME_UPDATED,{currentMillisecond:1e3*e})}),300);getAudioSrc=()=>{const{queueMusic:e,playMode:t}=this.props,{music:n}=e;switch(t){case m.HQ:return n.hq||n.sq;case m.AC:return n.ac||n.sq;default:return n.sq}};getPlayedSeconeds=()=>{const{played:e}=this.audioRef.current;let t=0;for(let n=0,{length:r}=e;n<r;n+=1){const r=e.start(n);t+=e.end(n)-r}return t};uploadPlayRecord=e=>{const{duration:t}=this.audioRef.current,n=this.getPlayedSeconeds();return function({musicId:e,percent:t}){const n=new Blob([JSON.stringify({music_id:e,percent:t,token:(0,ba.L)()})],{type:"application/json; charset=utf-8"});return window.navigator.sendBeacon(`${ya.Z.serverOrigin}/api/create_music_play_record`,n)}({musicId:e.id,percent:t?n/t:0})};beforeUnload=()=>this.uploadPlayRecord(this.props.queueMusic.music);render(){const{pid:e}=this.props.queueMusic,t=this.getAudioSrc();return r.createElement("audio",{key:e,ref:this.audioRef,style:Pa,src:t,autoPlay:!0,onPlay:Oa,onPause:Aa,onEnded:Sa,onWaiting:Ta,onCanPlayThrough:Na,onTimeUpdate:this.onTimeUpdate,onError:Za,preload:"auto"})}}const ka=Ra,wa={[Vr.cK.TOGGLE_VISIBLE]:()=>{const e=s.remote.getCurrentWindow();return e.isFocused()?e.minimize():e.show()},[Vr.cK.TOGGLE_PLAY]:()=>$.emit(k.ACTION_TOGGLE_PLAY),[Vr.cK.PREVIOUS]:()=>$.emit(k.ACTION_PREVIOUS),[Vr.cK.NEXT]:()=>$.emit(k.ACTION_NEXT)},Ua=r.memo((()=>{const e=(0,g.v9)((({globalShortcut:e})=>e),g.wU);return(0,r.useEffect)((()=>(e.on?Object.values(Vr.cK).forEach((t=>{e[t].length&&s.remote.globalShortcut.register(e[t].join("+"),wa[t])})):s.remote.globalShortcut.unregisterAll(),()=>s.remote.globalShortcut.unregisterAll())),[e]),(0,r.useEffect)((()=>{const e=()=>s.remote.globalShortcut.unregisterAll();return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e)}),[]),null}));var Da=n(2536);const Ma=()=>$.emit(k.ACTION_PLAY),Ga=()=>$.emit(k.ACTION_PAUSE),za=()=>$.emit(k.ACTION_PREVIOUS),$a=()=>$.emit(k.ACTION_NEXT),Ya=r.memo((({music:e})=>{const{onPlay:t,onPause:n,onPrevious:a,onNext:l}=((e=!1)=>{const t=(0,r.useCallback)((()=>{if(!e)return $.emit(k.ACTION_TOGGLE_PLAY,null)}),[e]);return{onPlay:Ma,onPause:Ga,onTogglePlay:t,onPrevious:za,onNext:$a}})();return r.createElement(Da.ZP,{title:e.name,artist:e.singers.map((e=>e.name)).join(",")||"未知歌手",artwork:[{src:e.cover,sizes:"512x512",type:"image/jpeg"}],onPlay:t,onPause:n,onPreviousTrack:a,onNextTrack:l})})),Va=200,Wa=a.ZP.div`
  position: relative;
  height: ${Va}px;

  margin: 20px;

  display: flex;
  align-items: center;
  > .info {
    flex: 1;
    min-width: 0;
    margin-right: 20px;
    > .name {
      font-size: 36px;
      color: rgb(55 55 55);
    }
    > .alias {
      font-size: 14px;
      margin-top: 10px;
      color: rgb(155 155 155);
    }
  }
`,Ba=({singer:e})=>r.createElement(Wa,null,r.createElement("div",{className:"info"},r.createElement("div",{className:"name"},e.name),e.alias?r.createElement("div",{className:"alias"},e.alias):null),r.createElement(h.Z,{src:e.avatar,size:Va,alt:"avatar"})),qa=r.memo((()=>{const e=(0,r.useMemo)((()=>(0,J.Z)(120,200)),[]);return r.createElement(Wa,null,r.createElement("div",{className:"info"},r.createElement("div",{className:"name"},r.createElement(X,{width:e}))),r.createElement(X,{width:Va,height:Va}))})),Ha=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`,Fa={margin:"5px 0"},Qa=({singer:e,reload:t})=>{const n=(0,r.useCallback)((()=>window.navigator.clipboard.writeText(e.id).then((()=>Oe.ZP.success(`已复制「${e.id}」`))).catch((e=>dt.ZP.alert({title:"复制失败",content:e.message})))),[e]);return r.createElement(Ha,null,r.createElement(vn.Z,{title:"重新加载",placement:vn.u.LEFT},r.createElement(D.ZP,{name:D.VG.REFRESH_OUTLINE,size:28,onClick:t,style:Fa})),r.createElement(vn.Z,{title:"全部添加到歌单",placement:vn.u.LEFT},r.createElement(D.ZP,{name:D.VG.PLUS_OUTLINE,size:28,onClick:()=>$.emit(k.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,{musicList:e.musicList.map((e=>e.music))}),style:Fa})),r.createElement(vn.Z,{title:"复制歌手 ID",placement:vn.u.LEFT},r.createElement(D.ZP,{name:D.VG.COPY_OUTLINE,size:28,onClick:n,style:Fa})))},ja=a.ZP.div`
  flex: 1;
  min-width: 0;

  overflow: auto;
  ${Je.Z}

  ${({topBoxShadow:e})=>a.iv`
    box-shadow: ${e?"inset 0px 5px 5px -5px rgb(0 0 0 / 10%)":"none"};
  `}
`,Ka=({musicList:e})=>{const[t,n]=(0,r.useState)(0);return r.createElement(ja,{topBoxShadow:t,onScroll:e=>{const{scrollTop:t}=e.target;return n(0===t?0:1)}},e.map((e=>r.createElement(an,{key:e.index,musicWithIndex:e}))))},Xa=r.memo((()=>{const e=(0,r.useMemo)((()=>(0,J.Z)(3,10)),[]);return r.createElement(ja,{topBoxShadow:0},new Array(e).fill(0).map(((e,t)=>r.createElement(en,{key:t}))))})),Ja=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,el=(0,a.ZP)(Ja)`
  display: flex;
  align-items: center;
  justify-content: center;
`,tl=(0,a.ZP)(Ja)`
  display: flex;
  flex-direction: column;
  > .bottom {
    flex: 1;
    min-height: 0;

    display: flex;
  }
`,nl={style:{width:550}},rl=r.memo((({open:e,onClose:t,id:n})=>{const{data:a,reload:l}=(({id:e})=>{const[t,n]=(0,r.useState)({error:null,loading:!0}),a=(0,r.useCallback)((async()=>{n({error:null,loading:!0});try{const t=await function(e){return at.Z.get("/api/get_singer_detail",{withToken:!0,params:{id:e}})}(e);n({error:null,loading:!1,singer:{id:t.id,avatar:t.avatar||(0,we.Z)(),name:t.name,alias:t.alias,musicList:t.music_list.map(((e,n)=>({index:t.music_list.length-n,music:lt(e)})))}})}catch(e){rt.Z.error(e,{description:"获取歌手音乐列表失败",report:!0}),n({error:e,loading:!1})}}),[e]);return(0,r.useEffect)((()=>{a()}),[a]),{data:t,reload:a}})({id:n}),i=(0,w.useTransition)(a,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return r.createElement(ve,{open:e,onClose:t,bodyProps:nl},i(((e,t)=>t.error?r.createElement(el,{style:e},r.createElement(M.Z,{errorMessage:t.error.message,retry:l})):t.loading?r.createElement(tl,{style:e},r.createElement(qa,null),r.createElement("div",{className:"bottom"},r.createElement(Xa,null))):r.createElement(tl,{style:e},r.createElement(Ba,{singer:t.singer}),r.createElement("div",{className:"bottom"},r.createElement(Ka,{musicList:t.singer.musicList}),r.createElement(Qa,{singer:t.singer,reload:l}))))))})),al=r.memo((()=>{const{open:e,onClose:t,id:n}=(()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)((()=>t(!1)),[]),[a,l]=(0,r.useState)("");return(0,r.useEffect)((()=>{const e=e=>(l(e.id),t(!0)),n=()=>t(!1);return $.on(k.OPEN_SINGER_DRAWER,e),$.on(k.OPEN_MUSIC_DRAWER,n),$.on(k.OPEN_MUSICBILL_LIST_DRAWER,n),$.on(k.OPEN_MUSIC_OPERATE_POPUP,n),()=>{$.off(k.OPEN_SINGER_DRAWER,e),$.off(k.OPEN_MUSIC_DRAWER,n),$.off(k.OPEN_MUSICBILL_LIST_DRAWER,n),$.off(k.OPEN_MUSIC_OPERATE_POPUP,n)}}),[]),{open:e,onClose:n,id:a}})();return n?r.createElement(rl,{open:e,onClose:t,id:n}):null})),ll=(0,a.ZP)(w.animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: flex-end;
  justify-content: center;
`,il=(0,a.ZP)(w.animated.div)`
  border-radius: 4px 4px 0 0;
  width: 100%;
  max-width: 375px;

  background-color: #fff;

  box-sizing: border-box;
`,ol=r.memo((({open:e,onClose:t,maskProps:n={},bodyProps:a={},children:l})=>{const i=(0,w.useTransition)(e,{from:{opacity:0,transform:"translateY(100%)"},enter:{opacity:1,transform:"translateY(0%)"},leave:{opacity:0,transform:"translateY(100%)"}}),o=(0,r.useRef)(null),c=e=>{if(n.onClick&&n.onClick(e),!o.current||!o.current.contains(e.target))return t()};return pe.createPortal(i((({opacity:e,transform:t},i)=>i?r.createElement(ll,{...n,style:{...n.style,opacity:e},onClick:c},r.createElement(il,{...a,ref:o,style:{...a.style,transform:t}},l)):null)),document.body)}),((e,t)=>!e.open&&!t.open)),cl=a.ZP.div`
  display: flex;
  align-items: center;
  > .info {
    margin-left: 10px;
    flex: 1;
    min-width: 0;
    > .top {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 3px;
      > .name {
        ${v.Z}
        font-size: 14px;
        cursor: pointer;
        color: rgb(55 55 55);
        &:hover {
          color: rgb(0 0 0);
        }
      }
    }
    > .singers {
      ${v.Z}
      font-size: 12px;
      color: rgb(155 155 155);
    }
  }
`,sl={cursor:"pointer"},ml=({music:e,...t})=>{const n=(0,r.useCallback)((()=>$.emit(k.OPEN_MUSIC_DRAWER,e)),[e]),{cover:a,name:l,singers:i}=e;return r.createElement(cl,{...t},r.createElement(h.Z,{style:sl,src:a,size:40,onClick:n,alt:"cover"}),r.createElement("div",{className:"info"},r.createElement("div",{className:"top"},r.createElement("div",{className:"name",onClick:n},l),r.createElement(nn,{music:e})),r.createElement("div",{className:"singers "},i.length?i.map((e=>r.createElement(De,{key:e.id,singer:e}))):r.createElement(De,null))))},ul=a.ZP.div`
  padding: 10px 20px;
`,dl={style:{padding:"10px 0 5px 0"}},El=r.memo((({open:e,onClose:t,music:n})=>{const{onPlay:a,onAddToPlayqueue:l,onAddToMusicbill:i,onAddToPlaylist:o,onWatchMv:c,onCopyID:s}=Et(n,t);return r.createElement(ol,{open:e,onClose:t,bodyProps:dl},n?r.createElement(ul,null,r.createElement(ml,{music:n})):null,r.createElement(A,{icon:T.V.PLAY_OUTLINE,label:"播放",onClick:a}),r.createElement(A,{icon:T.V.INSERT_OUTLINE,label:"下一首播放",onClick:l}),r.createElement(A,{icon:T.V.ADD_TO_OUTLINE,label:"添加到歌单",onClick:i}),r.createElement(A,{icon:T.V.PLUS_OUTLINE,label:"添加到播放列表",onClick:o}),n&&n.mvLink?r.createElement(A,{icon:T.V.VIDEO_OUTLINE,label:"观看MV",onClick:c}):null,r.createElement(A,{icon:T.V.COPY_OUTLINE,label:"复制 ID",onClick:s}))})),pl=r.memo((()=>{const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(null),l=(0,r.useCallback)((()=>t(!1)),[]);return(0,r.useEffect)((()=>{const e=({music:e})=>{a(e),t(!0)},n=()=>t(!1);return $.on(k.OPEN_MUSIC_OPERATE_POPUP,e),$.on(k.OPEN_MUSIC_DRAWER,n),$.on(k.OPEN_SINGER_DRAWER,n),()=>{$.off(k.OPEN_MUSIC_OPERATE_POPUP,e),$.off(k.OPEN_MUSIC_DRAWER,n),$.off(k.OPEN_SINGER_DRAWER,n)}}),[]),n?r.createElement(El,{open:e,onClose:l,music:n}):null}));var fl=n(7072);var _l=n(6257);const gl=a.ZP.div`
  padding: 10px;
  border-radius: 4px;
  background-color: #f6f6f6;
  > .title {
    font-size: 12px;
    color: rgb(155 155 155);
    margin-bottom: 10px;
  }
  > .list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`,hl=({label:e,musicList:t})=>r.createElement(gl,null,r.createElement("div",{className:"title"},e),r.createElement("div",{className:"list"},t.map((e=>r.createElement(ml,{key:e.id,music:e}))))),vl=({music:e})=>{const{fork:t,forkFrom:n}=e;return r.createElement(r.Fragment,null,t.length?r.createElement(hl,{label:"被以下音乐二次创作",musicList:t}):null,n.length?r.createElement(hl,{label:"二次创作自以下音乐",musicList:n}):null)},Il=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,Cl=({music:e,onClose:t})=>{const n=(0,r.useMemo)((()=>({...e,fork:e.fork.map((e=>e.id)),forkFrom:e.forkFrom.map((e=>e.id))})),[e]),{onPlay:a,onAddToPlayqueue:l,onAddToMusicbill:i,onWatchMv:o,onOperate:c}=Et(n);return r.createElement(Il,null,r.createElement(D.ZP,{name:D.VG.PLAY_OUTLINE,onClick:a,size:24}),r.createElement(vn.Z,{title:"下一首播放"},r.createElement(D.ZP,{name:D.VG.INSERT_OUTLINE,onClick:l,size:24})),r.createElement(vn.Z,{title:"添加到歌单"},r.createElement(D.ZP,{name:D.VG.ADD_TO_OUTLINE,onClick:i,size:24})),e.mvLink?r.createElement(vn.Z,{title:"观看MV"},r.createElement(D.ZP,{name:D.VG.VIDEO_OUTLINE,onClick:()=>{o(),t()},size:24})):null,r.createElement(D.ZP,{name:D.VG.MORE_OUTLINE,onClick:c,size:24}))},Ll=a.ZP.div`
  overflow: hidden;
  transition: 1s;
`,xl=a.ZP.div`
  font-size: 12px;
  line-height: 1.5;
  color: rgb(155 155 155);
`,yl=r.memo((({lrc:e})=>r.createElement(Ll,null,r.createElement(sn.Lrc,{lrc:e,lineRenderer:({line:e})=>r.createElement(xl,null,e.content),autoScroll:!1})))),bl={style:{width:360}},Pl=(0,a.ZP)(w.animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`,Tl=(0,a.ZP)(Pl)`
  display: flex;
  align-items: center;
  justify-content: center;
`,Nl=(0,a.ZP)(Pl)`
  overflow: auto;
  ${Je.Z}

  > .content {
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: ${20}px;

    > .cover {
      align-self: center;
    }

    > .name {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.3;
      color: var(--text-color-primary);
    }

    > .alias {
      font-size: 14px;
      color: var(--text-color-secondary);
      line-height: 1.3;
    }

    > .singers {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 5px;

      font-size: 14px;

      > .singer {
        cursor: pointer;
        color: var(--text-color-primary);
        &:hover {
          color: var(--color-primary);
        }
        &:not(:last-child)::after {
          content: '/';

          display: inline-block;
          color: var(--text-color-secondary);
          margin-left: 5px;
        }
      }
    }
  }
`,Ol=({id:e,open:t,onClose:n})=>{const{data:a,reload:l}=(e=>{const[t,n]=(0,r.useState)({error:null,loading:!0}),a=(0,r.useCallback)((async()=>{n({error:null,loading:!0});try{const t=await(0,_l.Z)(e);n({error:null,loading:!1,music:{...lt(t),fork:t.fork.map(lt),forkFrom:t.fork_from.map(lt),lrc:t.lrc}})}catch(e){n({error:e,loading:!1})}}),[e]);return(0,r.useEffect)((()=>{a()}),[a]),{data:t,reload:a}})(e),i=(0,w.useTransition)(a,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return r.createElement(ve,{open:t,onClose:n,bodyProps:bl},i(((e,t)=>t.error?r.createElement(Tl,{style:e},r.createElement(M.Z,{errorMessage:t.error.message,retry:l})):t.loading?r.createElement(Nl,{style:e},r.createElement("div",{className:"content"},r.createElement(X,{className:"cover",width:320,height:320}),r.createElement("div",{className:"name"},r.createElement(X,{width:150})),r.createElement("div",{className:"singers"},r.createElement(X,{width:100})))):r.createElement(Nl,{style:e},r.createElement("div",{className:"content"},r.createElement(h.Z,{className:"cover",src:t.music.cover,size:320,alt:"cover"}),r.createElement("div",{className:"name"},t.music.name),t.music.alias?r.createElement("div",{className:"alias"},t.music.alias):null,t.music.singers.length?r.createElement("div",{className:"singers"},t.music.singers.map((e=>r.createElement("div",{key:e.id,className:"singer",onClick:()=>$.emit(k.OPEN_SINGER_DRAWER,{id:e.id})},e.name)))):null,r.createElement(Cl,{music:t.music,onClose:n}),r.createElement(vl,{music:t.music}),t.music.lrc&&t.music.type===fl.xL.NORMAL?r.createElement(yl,{lrc:t.music.lrc}):null)))))},Al=r.memo((()=>{const{open:e,onClose:t,id:n}=(()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)((()=>t(!1)),[]),[a,l]=(0,r.useState)("");return(0,r.useEffect)((()=>{const e=e=>(l(e.id),t(!0)),n=()=>t(!1);return $.on(k.OPEN_MUSIC_DRAWER,e),$.on(k.OPEN_SINGER_DRAWER,n),$.on(k.OPEN_MUSICBILL_LIST_DRAWER,n),$.on(k.OPEN_MUSIC_OPERATE_POPUP,n),()=>{$.off(k.OPEN_MUSIC_DRAWER,e),$.off(k.OPEN_SINGER_DRAWER,n),$.off(k.OPEN_MUSICBILL_LIST_DRAWER,n),$.off(k.OPEN_MUSIC_OPERATE_POPUP,n)}}),[]),{open:e,onClose:n,id:a}})();return n?r.createElement(Ol,{open:e,onClose:t,id:n}):null}));var Sl;!function(e){e[e.PLAYLIST=0]="PLAYLIST",e[e.PLAYQUEUE=1]="PLAYQUEUE"}(Sl||(Sl={}));const Zl={[Sl.PLAYLIST]:{label:"播放列表"},[Sl.PLAYQUEUE]:{label:"播放队列"}},Rl=Object.keys(Zl).map((e=>Number(e))),kl=a.ZP.div`
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`,wl=a.ZP.div`
  margin-right: 20px;
  cursor: pointer;
  position: relative;
  padding: 8px 0;
  transition: all 300ms;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 1px;
    left: 0;
    transition: all 300ms;
    transform-origin: left;
    background-color: rgb(49 194 124);
  }
  > .icon {
    vertical-align: middle;
  }
  > .text {
    font-size: 14px;
    margin-left: 10px;
    vertical-align: middle;
  }
  ${({active:e})=>a.iv`
    color: ${e?"rgb(49 194 124)":"rgb(55 55 55)"};
    &::after {
      transform: scaleX(${e?1:0});
    }
  `}
`,Ul={[Sl.PLAYLIST]:r.createElement(T.Z,{className:"icon",name:T.V.LIST_OUTLINE,size:16}),[Sl.PLAYQUEUE]:r.createElement(T.Z,{className:"icon",name:T.V.ORDERED_LIST_OUTLINE,size:16})},Dl=({tab:e,onChange:t})=>r.createElement(kl,null,Rl.map((n=>{const a=n===e;return r.createElement(wl,{key:n,active:a,onClick:()=>t(n)},Ul[n],r.createElement("span",{className:"text"},Zl[n].label))}))),Ml=a.ZP.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`,Gl=a.ZP.div`
  height: ${36}px;
  display: flex;
  align-items: center;
  padding-top: 1px;
  border-bottom: 1px solid rgb(0 0 0 / 0.05);
  > .index {
    width: 45px;
    font-size: 12px;
    color: rgb(155 155 155);
  }
  > .info {
    ${v.Z}
    color: rgb(222 222 222);
    font-size: 12px;
    flex: 1;
    > .name {
      cursor: pointer;
      border: none;
      outline: none;
      background-color: transparent;
      padding: 0;
      margin: 0;
      color: rgb(55 55 55);
      &:hover {
        color: rgb(0 0 0);
      }
    }
    > .singers {
      margin-left: 5px;
    }
  }
  > .actions {
    transition: opacity 300ms;
    opacity: 0;
  }
  &:hover > .actions {
    opacity: 1;
  }
`,zl=e=>r.createElement(De,{key:e.id,singer:e}),$l=({listMusic:e})=>{const{onPlay:t,onView:n,onOperate:a,onAddToPlayqueue:l}=Et(e.music),i=(0,r.useCallback)((()=>$.emit(k.ACTION_REMOVE_PLAYLIST_MUSIC,e)),[e]),{index:o,music:{name:c,singers:s}}=e;return r.createElement(Gl,null,r.createElement("div",{className:"index"},o,"."),r.createElement("div",{className:"info"},r.createElement("button",{type:"button",className:"name",onClick:n},c),r.createElement("span",{className:"singers"},s.length?s.map(zl):r.createElement(De,null))),r.createElement("div",{className:"actions"},r.createElement(D.ZP,{name:D.VG.MORE_OUTLINE,size:20,onClick:a}),r.createElement(D.ZP,{name:D.VG.PLAY_OUTLINE,size:20,onClick:t}),r.createElement(D.ZP,{name:D.VG.INSERT_OUTLINE,size:20,onClick:l}),r.createElement(D.ZP,{name:D.VG.WRONG_OUTLINE,size:20,type:D.Dy.DANGER,onClick:i})))},Yl=a.ZP.div`
  flex: 1;
  min-height: 0;
  padding: 0 20px;
  overflow: auto;
  ${Je.Z}
`,Vl=({playlist:e})=>r.createElement(Yl,null,r.createElement(Er(),{length:e.length,type:"uniform",itemRenderer:(t,n)=>r.createElement($l,{key:n,listMusic:e[t]})})),Wl=a.ZP.div`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,Bl=({keyword:e})=>r.createElement(Wl,null,r.createElement(U.Z,{description:e?`没有"${e}"相关的音乐`:"空的播放列表"})),ql=(0,a.ZP)(Ml)`
  display: flex;
  flex-direction: column;
  > .action {
    display: flex;
    align-items: center;
    padding: 0 20px 10px 20px;
    > .search {
      flex: 1;
      min-width: 0;
      position: relative;
      > .input {
        width: 100%;
      }
      > .loader {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translate(0, -50%);
      }
    }
    > .clear {
      cursor: pointer;
      margin-left: 15px;
    }
  }
`,Hl=({playlist:e,onClear:t})=>{const[n,a]=(0,r.useState)(!1),[l,i]=(0,r.useState)(""),o=(0,r.useRef)(),c=(0,r.useCallback)((e=>{o.current&&window.clearTimeout(o.current);const{value:t}=e.target;a(!0),o.current=window.setTimeout((()=>{i(t?t.toLowerCase():t),a(!1)}),1e3)}),[]),s=(0,r.useRef)(null);(0,r.useLayoutEffect)((()=>{const e=window.setTimeout((()=>s.current.focus()),1e3);return()=>window.clearTimeout(e)}),[]);const m=((e,t)=>e.filter(function(e){return t=>{const{name:n,alias:r,singers:a}=t.music;if(n.toLowerCase().indexOf(e)>-1||r.toLowerCase().indexOf(e)>-1)return!0;for(const t of a){const{name:n,alias:r}=t;if(n.toLowerCase().indexOf(e)>-1||r.toLowerCase().indexOf(e)>-1)return!0}return!1}}(t)))(e,l);return r.createElement(ql,null,r.createElement("div",{className:"action"},r.createElement("div",{className:"search"},r.createElement(Ne.Z,{ref:s,className:"input",defaultValue:l,onChange:c,placeholder:"搜索播放列表",type:"text"}),n&&r.createElement(Wt.Z,{size:14,className:"loader"})),r.createElement(vn.Z,{title:"清空播放列表",placement:vn.u.LEFT},r.createElement(D.ZP,{className:"clear",name:D.VG.GARBAGE_OUTLINE,onClick:t}))),m.length?r.createElement(Vl,{playlist:m}):r.createElement(Bl,{keyword:l}))},Fl=(0,a.ZP)(Ml)`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ql=r.memo((()=>r.createElement(Fl,null,r.createElement(U.Z,{description:"空的播放队列"})))),jl=a.ZP.div`
  height: ${36}px;
  display: flex;
  align-items: center;
  padding-top: 1px;
  border-width: 0 0 1px 0;
  border-style: solid;
  > .index {
    display: inline-block;
    width: 45px;
    font-size: 12px;
  }
  > .info {
    ${v.Z}
    color: rgb(222 222 222);
    font-size: 12px;
    flex: 1;
    > .name {
      cursor: pointer;
      border: none;
      outline: none;
      background-color: transparent;
      padding: 0;
      margin: 0;
      color: rgb(55 55 55);
      &:hover {
        color: rgb(0 0 0);
      }
    }
    > .singers {
      margin-left: 5px;
    }
  }
  > .actions {
    opacity: 0;
    transition: transform 0.3s;
  }
  &:hover > .actions {
    opacity: 1;
  }
  ${({active:e})=>a.iv`
    border-color: ${e?"rgb(49 194 124)":"rgb(0 0 0 / 0.05)"};
    > .index {
      color: ${e?"rgb(49 194 124)":"rgb(155 155 155)"};
    }
  `}
`,Kl=e=>r.createElement(De,{key:e.id,singer:e}),Xl=({activeIndex:e,queueMusic:t,playqueueLength:n})=>{const{index:a}=t,{onView:l,onOperate:i}=Et(t.music),o=(0,r.useCallback)((()=>{if(a!==e)return $.emit(k.ACTION_PLAY_PLAYQUEUE_INDEX,a-1)}),[a,e]),c=(0,r.useCallback)((()=>$.emit(k.ACTION_REMOVE_PLAYQUEUE_MUSIC,t)),[t]),s=(0,r.useCallback)((()=>$.emit(k.ACTION_MOVE_PLAYQUEUE_MUSIC_LATER,t)),[t]),m=(0,r.useCallback)((()=>$.emit(k.ACTION_MOVE_PLAYQUEUE_MUSIC_EARLY,t)),[t]),{name:u,singers:d}=t.music,E=a===e;return r.createElement(jl,{active:E},r.createElement("span",{className:"index"},a,"."),r.createElement("div",{className:"info"},r.createElement("button",{type:"button",className:"name",onClick:l},u),r.createElement("span",{className:"singers"},d.length?d.map(Kl):r.createElement(De,null))),r.createElement("div",{className:"actions"},r.createElement(D.ZP,{name:D.VG.MORE_OUTLINE,size:20,onClick:i}),a>e&&r.createElement(D.ZP,{name:D.VG.WRONG_OUTLINE,size:20,type:D.Dy.DANGER,onClick:c}),a<n&&a>e&&r.createElement(D.ZP,{name:D.VG.UP_OUTLINE,size:20,onClick:s}),a>e+1&&r.createElement(D.ZP,{name:D.VG.DOWN_OUTLINE,size:20,onClick:m}),E?null:r.createElement(D.ZP,{name:D.VG.JUMP_FILL,size:20,onClick:o})))},Jl=(0,a.ZP)(Ml)`
  ${Je.Z}
  overflow: auto;
  padding: 0 20px;
`,ei=({playqueue:e,currentPlayqueuePosition:t})=>{const n=(0,r.useMemo)((()=>[...e].reverse()),[e]),{length:a}=n,l=t+1;return r.createElement(Jl,null,r.createElement(Er(),{length:a,type:"uniform",itemRenderer:(e,t)=>{const i=n[e];return r.createElement(Xl,{key:t,activeIndex:l,queueMusic:i,playqueueLength:a})}}))},ti=r.memo((()=>{const{playqueue:e,currentPlayqueuePosition:t}=(0,r.useContext)(f);return e.length?r.createElement(ei,{playqueue:e,currentPlayqueuePosition:t}):r.createElement(Ql,null)})),ni=a.ZP.div`
  flex: 1;
  min-height: 0;
  position: relative;
`,ri=(0,a.ZP)(w.animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`,ai={style:{width:450,display:"flex",flexDirection:"column"}},li=r.memo((()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)((()=>t(!1)),[]),{playlist:a}=(0,r.useContext)(f),l=(0,r.useCallback)((()=>dt.ZP.confirm({title:"确定清空播放列表吗?",onConfirm:()=>{$.emit(k.ACTION_CLEAR_PLAYLIST)}})),[]);(0,r.useEffect)((()=>{const e=()=>t(!0),n=()=>t((e=>!e));return $.on(k.OPEN_PLAYLIST_PLAYQUEUE_DRAWER,e),$.on(k.TOGGLE_PLAYLIST_PLAYQUEUE_DRAWER,n),()=>{$.off(k.OPEN_PLAYLIST_PLAYQUEUE_DRAWER,e),$.off(k.TOGGLE_PLAYLIST_PLAYQUEUE_DRAWER,n)}}),[]);const[i,o]=(0,r.useState)(Sl.PLAYQUEUE),c=(0,w.useTransition)(i,{from:{opacity:0,transform:"translate(100%)"},enter:{opacity:1,transform:"translate(0%)"},leave:{opacity:0,transform:"translate(-100%)"}});return r.createElement(ve,{open:e,onClose:n,bodyProps:ai},r.createElement(Dl,{tab:i,onChange:o}),r.createElement(ni,null,c(((e,t)=>{let n=null;switch(t){case Sl.PLAYLIST:n=r.createElement(Hl,{playlist:a,onClear:l});break;case Sl.PLAYQUEUE:n=r.createElement(ti,null);break;default:n=null}return r.createElement(ri,{style:e},n)}))))}));var ii=n(5233),oi=n(9993);const ci=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 10px 0;
  cursor: pointer;
  > .name {
    flex: 1;
    font-size: 14px;
    color: rgb(55 55 55);
    ${v.Z}
  }
`,si={color:"rgba(0, 0, 0, 0.7)",fontSize:20},mi=(0,a.ZP)(Y.Z)`
  ${({publiz:e})=>a.iv`
    border: ${e?"3px solid var(--color-primary)":"none"};
  `}
`,ui=({music:e,musicbill:t})=>{const n=(0,r.useCallback)((()=>{const{status:n}=t;return n===o.eE.LOADING?Oe.ZP.info("请等待歌单加载完毕..."):n===o.eE.NOT_START||n===o.eE.ERROR?$.emit(k.GET_MUSICBILL_DETAIL,{id:t.id}):Boolean(e&&!!t.musicList.find((t=>t.music.id===e.id)))?$.emit(k.REMOVE_MUSIC_FROM_MUSICBILL,{musicbill:t,music:e}):$.emit(k.ADD_MUSIC_TO_MUSICBILL,{musicbill:t,music:e})}),[t,e]),{cover:a,name:l,musicList:i,status:c}=t;let s=null;if(c===o.eE.SUCCESS){const t=Boolean(e&&!!i.find((t=>t.music.id===e.id)));s=r.createElement(oi.Z,{checked:t,size:20})}else s=c===o.eE.LOADING?r.createElement(Wt.Z,{size:20,style:si}):r.createElement(T.Z,{name:T.V.QUESTION_FILL,size:20,style:si});return r.createElement(ci,{onClick:n},s,r.createElement(mi,{src:a,size:24,publiz:t.public,alt:"cover"}),r.createElement("div",{className:"name"},l))},di=r.memo((()=>{const[e]=(0,r.useState)((0,we.Z)()),t=(0,r.useCallback)((()=>$.emit(k.OPEN_CREATE_MUSICBILL_DIALOG,null)),[]);return r.createElement(ci,{onClick:t},r.createElement(T.Z,{name:T.V.PLUS_OUTLINE,size:20,style:si}),r.createElement(Y.Z,{src:e,size:24,alt:"cover"}),r.createElement("div",{className:"name"},"创建歌单"))})),Ei=a.ZP.div`
  flex: 1;
  min-height: 0;

  padding: 0 20px;

  overflow: auto;
  ${Je.Z}

  ${({topBoxShadow:e})=>a.iv`
    box-shadow: ${e?"inset 0px 5px 5px -5px rgb(0 0 0 / 10%)":"none"};
  `}
`,pi=({musicbillList:e,music:t})=>{const[n,a]=(0,r.useState)(0);return r.createElement(Ei,{topBoxShadow:n,onScroll:e=>{const{scrollTop:t}=e.target;return a(0===t?0:1)}},e.map((e=>r.createElement(ui,{key:e.id,musicbill:e,music:t}))),r.createElement(di,null))},fi={style:{width:300,display:"flex",flexDirection:"column"}},_i={padding:"0 20px",marginBottom:20},gi={flex:1},hi=()=>$.emit(k.RELOAD_MUSICBILL_LIST),vi=r.memo((({open:e,onClose:t,music:n})=>{const{musicbillList:a}=(0,r.useContext)(f),l=a.error?r.createElement(M.Z,{errorMessage:a.error.message,retry:hi,style:gi}):a.loading?r.createElement(ii.Z,{message:"正在获取歌单列表...",style:gi}):r.createElement(pi,{music:n,musicbillList:a.value});return r.createElement(ve,{open:e,onClose:t,bodyProps:fi},r.createElement(Ee,null,"添加到歌单"),r.createElement(ml,{music:n,style:_i}),l)})),Ii=r.memo((()=>{const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(null),l=(0,r.useCallback)((()=>t(!1)),[]);return(0,r.useEffect)((()=>{const e=({music:e})=>{t(!0),a(e)},n=()=>t(!1);return $.on(k.OPEN_MUSICBILL_LIST_DRAWER,e),$.on(k.OPEN_MUSIC_DRAWER,n),$.on(k.OPEN_SINGER_DRAWER,n),()=>{$.off(k.OPEN_MUSICBILL_LIST_DRAWER,e),$.off(k.OPEN_MUSIC_DRAWER,n),$.off(k.OPEN_SINGER_DRAWER,n)}}),[]),n?r.createElement(vi,{open:e,onClose:l,music:n}):null}));var Ci=n(9862),Li=n(7865);var xi=n(8035),yi=n(1342);const bi=a.ZP.div`
  padding: 5px 20px;

  display: flex;
  align-items: center;
  gap: 10px;

  cursor: move;
  > .name {
    flex: 1;

    ${v.Z}
    font-size: 14px;
    color: rgb(55 55 55);
  }
`,Pi="musicbill",Ti=({index:e,musicbill:t,move:n})=>{const{id:a,name:l,cover:i}=t,o=(0,r.useRef)(null),[,c]=(0,xi.L)({accept:Pi,hover(t,r){if(!o.current)return;const a=t.index,l=e;if(a===l)return;const i=o.current.getBoundingClientRect(),c=(i.bottom-i.top)/2,s=r.getClientOffset().y-i.top;a<l&&s<c||a>l&&s>c||(n(a,l),t.index=l)}}),[{isDragging:s},m]=(0,yi.c)({item:{type:Pi,id:a,index:e},collect:e=>({isDragging:e.isDragging()})});return m(c(o)),r.createElement(bi,{ref:o,style:{opacity:s?0:1}},r.createElement(Y.Z,{src:i,size:24,alt:"cover"}),r.createElement("div",{className:"name"},l))},Ni={style:{width:350,display:"flex",flexDirection:"column"}},Oi=a.ZP.div`
  flex: 1;
  min-height: 0;

  padding-bottom: 10px;

  overflow: auto;
  ${Je.Z}

  ${({topBoxShadow:e})=>a.iv`
    box-shadow: ${e?"inset 0px 5px 5px -5px rgb(0 0 0 / 15%)":"none"};
  `}
`,Ai=r.memo((()=>{const{musicbillList:e}=(0,r.useContext)(f),[t,n]=(0,r.useState)([]),[a,l]=(0,r.useState)(!1),i=(e,t)=>n((n=>{const r=[...n],[a]=r.splice(e,1);return r.splice(t,0,a),r})),[o,c]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const t=()=>(n(e.value.map((e=>({id:e.id,cover:e.cover,name:e.name})))),l(!0));return $.on(k.OPEN_MUSICBILL_ORDER_DRAWER,t),()=>{$.off(k.OPEN_MUSICBILL_ORDER_DRAWER,t)}}),[e]),r.createElement(ve,{open:a,onClose:()=>{l(!1);const n=e.value.map((e=>e.id)).join(","),r=t.map((e=>e.id));if(n!==r.join(","))return function(e){return at.Z.post("/api/update_musicbill_order",{data:{ordered_musicbill_id_list:e},withToken:!0})}(r).then((()=>$.emit(k.RELOAD_MUSICBILL_LIST))).catch((e=>{rt.Z.error(e,{description:"更新歌单顺序失败",report:!0}),dt.ZP.alert({title:"更新歌单顺序失败",content:e.message})}))},bodyProps:Ni},r.createElement(Ee,null,"排序歌单"),r.createElement(Ci.W,{backend:Li.PD},r.createElement(Oi,{onScroll:e=>{const{scrollTop:t}=e.target;return c(0!==t)},topBoxShadow:o},t.map(((e,t)=>r.createElement(Ti,{key:e.id,index:t,musicbill:e,move:i}))))))}));var Si=n(8716);const Zi={duration:650,easing:Si.tw},Ri={display:"block",width:"100%"},ki=r.memo((()=>{const e=(0,y.k6)(),t=(0,r.useRef)(null),[n,a]=(0,r.useState)(!1),[l,i]=(0,r.useState)(!1),c=(0,r.useCallback)((()=>{t.current.value="",i(!1)}),[]);return(0,r.useEffect)((()=>{const e=()=>{i(!0),setTimeout((()=>t.current&&t.current.focus()),650)};return $.on(k.OPEN_CREATE_MUSICBILL_DIALOG,e),()=>{$.off(k.OPEN_CREATE_MUSICBILL_DIALOG,e)}}),[]),r.createElement(wn.ZP,{open:l,springConfig:Zi},r.createElement(wn.Dx,null,"创建歌单"),r.createElement(wn.VY,null,r.createElement(Ne.Z,{ref:t,type:"text",style:Ri,placeholder:"歌单名字",disabled:n})),r.createElement(wn.aU,null,r.createElement(Un.Z,{label:"取消",onClick:c,disabled:n}),r.createElement(Un.Z,{label:"创建",onClick:async()=>{const n=t.current.value;if(n.length<1)return Oe.ZP.error('"歌单名字"长度应大于等于1');if(n.length>kn)return Oe.ZP.error('"歌单名字"长度应小于等于33');a(!0);try{const t=await function(e){return at.Z.post("/api/create_musicbill",{withToken:!0,data:{name:e}})}(n),r={id:t.id,name:t.name,cover:(0,we.Z)(),order:t.order,description:"",createTime:new Date(t.create_time),musicList:[],public:!1,status:o.eE.SUCCESS,error:null};$.emit(k.MUSICBILL_CREATED,{musicbill:r}),c(),setTimeout((()=>e.push(N.m$.MUSICBILL.replace(":id",t.id))),0)}catch(e){rt.Z.error(e,{description:"创建歌单失败",report:!0}),dt.ZP.alert({title:"创建歌单失败",content:e.message})}a(!1)},loading:n,type:Un.D.PRIMARY})))}));var wi;!function(e){e.SCROLL_TO_CURRENT_LINE="scroll_to_current_line"}(wi||(wi={}));const Ui=new(z()),Di=a.ZP.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  background: rgb(255 255 255 / 0.7);
  transition: 300ms;
  &:hover {
    background: rgb(255 255 255 / 1);
  }
  > .action {
    cursor: pointer;
    -webkit-app-region: no-drag;
  }
`,Mi=()=>Ui.emit(wi.SCROLL_TO_CURRENT_LINE),Gi=({music:e,turntable:t,toggleTurntable:n,onClose:a})=>r.createElement(Di,null,r.createElement(D.ZP,{name:D.VG.AIM_OUTLINE,onClick:Mi,size:24,className:"action",disabled:t||e.type===fl.xL.INSTRUMENT}),r.createElement(D.ZP,{name:D.VG.EXCHANGE_OUTLINE,onClick:n,size:24,className:"action",disabled:e.type===fl.xL.INSTRUMENT}),r.createElement(D.ZP,{name:D.VG.DOWN_OUTLINE,onClick:a,size:24,className:"action"}));var zi=n(4862);const $i=a.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  > .child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  > .cover {
    background-size: cover;
    background-position: center;
  }
  > .mask {
    backdrop-filter: blur(30px);
  }
`,Yi=({cover:e})=>{const t=((e,t)=>{const[n,a]=(0,r.useState)(t);return(0,r.useEffect)((()=>{if(e){let n=!1;return(0,ft.Z)(e).then((()=>{if(!n)return a(e)})).catch((e=>{if(!n)return rt.Z.error(e,{description:"加载图片失败"}),a(t)})),()=>{n=!0}}}),[e,t]),n})(e,zi),n=(0,w.useTransition)(t,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return r.createElement($i,null,n((({opacity:e},t)=>r.createElement(w.animated.div,{className:"child cover",style:{opacity:e,backgroundImage:`url(${t})`}}))),r.createElement("div",{className:"child mask"}))},Vi=(0,a.ZP)(sn.Lrc)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${_}
`,Wi=a.ZP.div`
  text-align: center;
  padding: 5px 0;
  > .content {
    max-width: 80%;
    line-height: 1.5;
    display: inline-block;
    border-radius: 5px;
    padding: 7px 15px 5px 15px;
    font-size: 16px;
    text-align: center;
    transition: 300ms;
  }
  ${({active:e})=>a.iv`
    > .content {
      color: ${e?"var(--color-primary)":"var(--text-color-primary)"};
      background: rgb(255 255 255 / ${e?1:.7});
    }
  `}
`,Bi=({active:e,line:t})=>r.createElement(Wi,{active:e},r.createElement("div",{className:"content"},t.content)),qi=({lrc:e})=>{const t=(0,r.useRef)(null),n=function(){const[e,t]=(0,r.useState)(0);return(0,r.useEffect)((()=>{const e=({currentMillisecond:e})=>t(e);return $.on(k.AUDIO_TIME_UPDATED,e),()=>{$.off(k.AUDIO_TIME_UPDATED,e)}}),[]),e}();return(0,r.useEffect)((()=>{const e=()=>t.current.scrollToCurrentLine();return Ui.on(wi.SCROLL_TO_CURRENT_LINE,e),()=>{Ui.off(wi.SCROLL_TO_CURRENT_LINE,e)}}),[]),r.createElement(Vi,{ref:t,lrc:e,lineRenderer:Bi,currentMillisecond:n,topBlank:!0,bottomBlank:!0})},Hi=a.F4`
0% {
  transform: rotate(0deg);
} 100% {
  transform: rotate(360deg);
}
`,Fi=a.ZP.div`
  position: absolute;
  top: calc(50% - ${180}px);
  left: calc(50% - ${180}px);

  font-size: 0;
  border-radius: 50%;
  border: 5px solid rgb(155 155 155);
  animation: ${Hi} 48s linear infinite;

  > .cover {
    cursor: pointer;
    border: 30px solid #000;
  }

  ${({paused:e})=>a.iv`
    animation-play-state: ${e?"paused":"running"};
  `}
`,Qi=({paused:e,cover:t,toggleTurntable:n})=>r.createElement(Fi,{paused:e},r.createElement(h.Z,{className:"cover",src:t,size:360,shape:h.b.CIRCLE,onClick:n,alt:"cover"}));var ji,Ki=n(4326);!function(e){e.TURNTABLE="turntable",e.LRC_LOADING="lrc_loading",e.LRC_ERROR="lrc_error",e.LRC_SUCCESS="lrc_success",e.LRC_EMPTY="lrc_empty"}(ji||(ji={}));const Xi={status:ji.TURNTABLE},Ji={status:ji.LRC_LOADING},eo={status:ji.LRC_EMPTY},to=(0,a.ZP)(w.animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - ${60}px);
`,no=a.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #fff;
  color: var(--text-color-primary);
  border-radius: 4px;
  padding: 5px 15px;
  font-size: 12px;
  white-space: nowrap;
  > .retry {
    cursor: pointer;
    text-decoration: underline;
  }
`,ro=({turntable:e,toggleTurntable:t,music:n})=>{const{audioPaused:a}=(0,r.useContext)(f),l=((e,t)=>{const[n,a]=(0,r.useState)({status:ji.TURNTABLE});return(0,r.useEffect)((()=>{let n=!1;const r=async()=>{if(t||e.type===fl.xL.INSTRUMENT)return a(Xi);a(Ji);try{const t=await(0,Ki.Z)({musicId:e.id,defer:0});if(n)return;a(t?{status:ji.LRC_SUCCESS,lrc:t}:eo)}catch(e){if(n)return;rt.Z.error(e,{description:"获取音乐 LRC 失败",report:!0}),a({status:ji.LRC_ERROR,error:e,retry:r})}};return r(),()=>{n=!0}}),[t,e]),n})(n,e);return(0,w.useTransition)(l,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}})(((e,l)=>{let i=null;return l.status===ji.TURNTABLE?i=r.createElement(Qi,{paused:a,cover:n.cover,toggleTurntable:t}):l.status===ji.LRC_SUCCESS?i=r.createElement(qi,{lrc:l.lrc}):l.status===ji.LRC_EMPTY?i=r.createElement(no,{onClick:t},"暂未收录歌词"):l.status===ji.LRC_ERROR&&(i=r.createElement(no,null,"获取歌词失败, ",r.createElement("span",{className:"retry",onClick:l.retry},"重新获取"))),r.createElement(to,{style:e},i)}))},ao=(0,a.ZP)(w.animated.div)`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,lo=({music:e,onClose:t,style:n,turntable:a,toggleTurntable:l})=>r.createElement(ao,{style:n},r.createElement(Yi,{cover:e.cover}),r.createElement(ro,{music:e,turntable:a,toggleTurntable:l}),r.createElement(Gi,{music:e,onClose:t,turntable:a,toggleTurntable:l})),io=r.memo((({music:e})=>{const{open:t,onClose:n}=(()=>{const e=(0,y.k6)(),[t,n]=(0,r.useState)(!1),a=(0,r.useCallback)((()=>n(!1)),[]);return(0,r.useEffect)((()=>{const e=()=>n(!1),t=()=>n((e=>!e));return $.on(k.CLOSE_LYRIC,e),$.on(k.TOGGEL_LYRIC,t),()=>{$.off(k.CLOSE_LYRIC,e),$.off(k.TOGGEL_LYRIC,t)}}),[]),(0,r.useEffect)((()=>e.listen((()=>n(!1)))),[e]),(0,r.useEffect)((()=>{if(t){const e=e=>{"Escape"===e.key&&n(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}}),[t]),{open:t,onClose:a}})(),[a,l]=(0,r.useState)(!1),i=(0,r.useCallback)((()=>l((e=>!e))),[]),o=e&&t;return(0,w.useTransition)(o,{from:{transform:"translateY(100%)",opacity:0},enter:{transform:"translateY(0%)",opacity:1},leave:{transform:"translateY(100%)",opacity:0}})(((t,l)=>l?r.createElement(lo,{music:e,onClose:n,style:t,turntable:a,toggleTurntable:i}):null))})),oo=a.iv`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`,co=144,so=(0,a.ZP)(w.animated.div)`
  ${oo}

  display: flex;
  align-items: center;
  justify-content: center;
`,mo=({error:e,reload:t,style:n})=>r.createElement(so,{style:n},r.createElement(M.Z,{errorMessage:e.message,retry:t})),uo=(0,a.ZP)(w.animated.div)`
  ${oo}

  display: flex;
  flex-direction: column;
  gap: 20px;

  > .top {
    padding: 20px 20px 0 20px;

    display: flex;
    align-items: center;
    gap: 20px;

    > .info {
      flex: 1;
      min-width: 0;

      > .name {
        font-size: 24px;
        color: var(--text-color-primary);
        font-weight: bold;
        ${v.Z}
      }

      > .join-time {
        margin-top: 5px;

        font-size: 14px;
        color: var(--text-color-secondary);
      }

      > .condition {
        margin-top: 15px;

        font-size: 14px;
        color: var(--text-color-secondary);

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`,Eo=a.ZP.div`
  flex: 1;
  min-height: 0;

  overflow: auto;
  ${Je.Z}

  padding: 0 10px 10px 10px;
  font-size: 0;

  > .musicbill {
    display: inline-block;
    margin: 10px;

    > .name {
      margin-top: 3px;

      cursor: pointer;
      font-size: 14px;
      color: var(--text-color-primary);
      ${v.Z}

      &:hover {
        color: #000;
      }
    }
  }
`,po=r.memo((()=>r.createElement(Eo,null,new Array(6).fill(0).map(((e,t)=>r.createElement("div",{className:"musicbill",key:t},r.createElement(X,{width:co,height:co}),r.createElement("div",{className:"name"},r.createElement(X,{width:(0,J.Z)(50,co)})))))))),fo={borderRadius:"50%"},_o=({style:e})=>{const t=(0,r.useMemo)((()=>(0,J.Z)(100,200)),[]),n=(0,r.useMemo)((()=>(0,J.Z)(100,200)),[]);return r.createElement(uo,{style:e},r.createElement("div",{className:"top"},r.createElement(X,{width:co,height:co,style:fo}),r.createElement("div",{className:"info"},r.createElement("div",{className:"name"},r.createElement(X,{width:t})),r.createElement("div",{className:"join-time"},r.createElement(X,{width:n})))),r.createElement(po,null))};class go extends Error{}class ho extends Error{}const vo=new vt({taskMinDuration:500,taskTimeout:1e4,abortErrorGenerator:()=>new go("队列加载图片被主动阻断."),timeoutErrorGenerator:e=>new ho(`队列加载图片超时 ${e}ms.`)}),Io=a.ZP.div`
  cursor: pointer;
`,Co=({src:e,onClick:t})=>{const n=(0,r.useRef)(null),[a,l]=(0,r.useState)("");return(0,r.useEffect)((()=>()=>{n.current&&n.current()}),[]),r.createElement(pt.h,{onEnter:()=>{if(a===e)return;const{promise:t,abort:r,finished:i}=vo.run((()=>(0,ft.Z)(e)));t.then((()=>l(e))).catch((e=>{if(!(e instanceof go))return rt.Z.error(e,{description:"加载图片失败",report:!0})})),n.current=()=>{if(!i())return r()}}},r.createElement(Io,null,r.createElement(h.Z,{src:a,size:co,onClick:t,alt:"cover"})))},Lo=(0,a.ZP)(Eo)`
  ${({topBoxShadow:e})=>a.iv`
    box-shadow: ${e?"inset 0px 5px 5px -5px rgb(0 0 0 / 15%)":"none"};
  `}
`,xo=(0,a.ZP)(Eo)`
  display: flex;
  align-items: center;
  justify-content: center;
`,yo=({musicbillList:e,onCloseDrawer:t})=>{const n=(0,S.Z)(),[a,l]=(0,r.useState)(!1);return e.length?r.createElement(Lo,{onScroll:e=>{const{scrollTop:t}=e.target;return l(0!==t)},topBoxShadow:a},e.map((e=>{const a=()=>(n.push({pathname:N.m$.PUBLIC_MUSICBILL,query:{id:e.id}}),t());return r.createElement("div",{className:"musicbill",key:e.id},r.createElement(Co,{src:e.cover,onClick:a}),r.createElement("div",{className:"name",onClick:a},e.name))}))):r.createElement(xo,null,r.createElement(U.Z,{description:"暂无公开歌单"}))},bo=({user:e,style:t,onCloseDrawer:n})=>r.createElement(uo,{style:t},r.createElement("div",{className:"top"},r.createElement(h.Z,{src:e.avatar,size:co,shape:h.b.CIRCLE,alt:"avatar"}),r.createElement("div",{className:"info"},r.createElement("div",{className:"name"},e.nickname),r.createElement("div",{className:"join-time"},"于 ",e.joinTimeString," 加入"),e.condition?r.createElement("div",{className:"condition",title:e.condition},e.condition):null)),r.createElement(yo,{musicbillList:e.musicbillList,onCloseDrawer:n})),Po={style:{width:512}},To=({open:e,onClose:t,id:n})=>{const{data:a,reload:l}=(({id:e})=>{const[t,n]=(0,r.useState)({loading:!0,error:null}),a=(0,r.useCallback)((async()=>{n({loading:!0,error:null});try{const t=await function(e){return at.Z.get("/api/get_user_detail",{withToken:!0,params:{id:e}})}(e);n({loading:!1,error:null,user:{id:t.id,nickname:t.nickname,avatar:t.avatar||(0,we.Z)(),condition:t.condition,joinTimeString:(0,Kn.Z)(new Date(t.join_time)).format("YYYY-MM-DD"),musicbillList:t.musicbill_list.map((e=>({...e,cover:e.cover||(0,we.Z)()})))}})}catch(e){n({loading:!1,error:e})}}),[e]);return(0,r.useEffect)((()=>{a()}),[a]),{data:t,reload:a}})({id:n}),i=(0,w.useTransition)(a,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return r.createElement(ve,{open:e,onClose:t,bodyProps:Po},i(((e,n)=>n.error?r.createElement(mo,{error:n.error,reload:l,style:e}):n.loading?r.createElement(_o,{style:e}):r.createElement(bo,{user:n.user,style:e,onCloseDrawer:t}))))},No=()=>{const{open:e,onClose:t,id:n}=(()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)((()=>t(!1)),[]),[a,l]=(0,r.useState)("");return(0,r.useEffect)((()=>{const e=({id:e})=>(l(e),t(!0));return $.on(k.OPEN_USER_DRAWER,e),()=>{$.off(k.OPEN_USER_DRAWER,e)}}),[]),{open:e,onClose:n,id:a}})();return n?r.createElement(To,{open:e,onClose:t,id:n}):null};function Oo(){return window.innerWidth<=720}const Ao=()=>$.emit(k.CLOSE_MUSICBILL_LIST_OPERATE_DRAWER,{}),So=()=>$.emit(k.OPEN_CREATE_MUSICBILL_DIALOG,{}),Zo=()=>$.emit(k.OPEN_MUSICBILL_ORDER_DRAWER,{}),Ro=()=>$.emit(k.RELOAD_MUSICBILL_LIST,{}),ko=r.memo((()=>{const e=(()=>{const[e,t]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=()=>t(!0),n=()=>t(!1);return $.on(k.OPEN_MUSICBILL_LIST_OPERATE_DRAWER,e),$.on(k.CLOSE_MUSICBILL_LIST_OPERATE_DRAWER,n),()=>{$.off(k.OPEN_MUSICBILL_LIST_OPERATE_DRAWER,e),$.off(k.CLOSE_MUSICBILL_LIST_OPERATE_DRAWER,n)}}),[]),e})();return r.createElement(ol,{open:e,onClose:Ao,bodyProps:{style:{padding:"5px 0"},onClick:Ao}},r.createElement(A,{icon:T.V.PLUS_OUTLINE,label:"创建歌单",onClick:So}),r.createElement(A,{icon:T.V.EXCHANGE_OUTLINE,label:"排序歌单列表",onClick:Zo}),r.createElement(A,{icon:T.V.REFRESH_OUTLINE,label:"重新加载歌单列表",onClick:Ro}))})),wo=(0,a.ZP)(u.Z)`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > .container {
    flex: 1;
    min-height: 0;

    display: flex;

    > .content {
      flex: 1;
      min-width: 0;

      display: flex;
      flex-direction: column;
    }
  }
`,Uo=(0,i.Z)()((()=>{const e=(()=>{const[e,t]=(0,r.useState)(Oo);return(0,r.useEffect)((()=>{const e=va()((()=>t(Oo())),300);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e})(),t=(()=>{const[e,t]=(0,r.useState)({loading:!0,error:null,value:[]}),n=(0,r.useCallback)((async()=>{t((e=>({...e,loading:!0})));try{const e=await at.Z.get("/api/get_musicbill_list",{withToken:!0});t({loading:!1,error:null,value:e.map((e=>({id:e.id,name:e.name,cover:e.cover||(0,we.Z)(),order:e.order,description:e.description,createTime:new Date(e.create_time),musicList:[],public:!!e.public,status:o.eE.NOT_START,error:null})))})}catch(e){rt.Z.error(e,{description:"获取歌单列表失败",report:!0}),t({loading:!1,error:e,value:[]})}}),[]);return(0,r.useEffect)((()=>(n(),$.on(k.RELOAD_MUSICBILL_LIST,n),()=>{$.off(k.RELOAD_MUSICBILL_LIST,n)})),[n]),(0,r.useEffect)((()=>{const e=async({id:e})=>{t((t=>({...t,value:t.value.map((t=>t.id===e?{...t,status:o.eE.LOADING,error:null}:t))})));try{const n=await function(e){return at.Z.get("/api/get_musicbill_detail",{params:{id:e},withToken:!0})}(e);t((t=>({...t,value:t.value.map((t=>t.id===e?{...t,name:n.name,description:n.description,cover:n.cover||t.cover||(0,we.Z)(),musicList:n.music_list.map(((e,t)=>({music:lt(e),index:n.music_list.length-t}))),public:!!n.public,status:o.eE.SUCCESS,error:null}:t))})))}catch(n){rt.Z.error(n,{description:"获取歌单详情失败",report:!0}),t((t=>({...t,value:t.value.map((t=>t.id===e?{...t,status:o.eE.ERROR,error:n}:t))})))}},n=({musicbill:e})=>t((t=>({...t,value:[...t.value,e].sort(((e,t)=>e.order-t.order))}))),r=({id:e})=>t((t=>({...t,value:t.value.filter((t=>t.id!==e))}))),a=async({musicbill:e,music:n})=>{const{id:r,name:a}=e,{id:l,name:i}=n;t((e=>({...e,value:e.value.map((e=>{if(e.id===r){const t=[{index:0,music:n},...e.musicList],{length:r}=t;return{...e,musicList:t.map(((e,t)=>({music:e.music,index:r-t})))}}return e}))})));try{await function({musicbillId:e,musicId:t}){return at.Z.post("/api/add_music_to_musicbill",{data:{musicbill_id:e,music_id:t},withToken:!0})}({musicId:l,musicbillId:r})}catch(e){const n=`添加音乐"${i}"到歌单"${a}"失败`;rt.Z.error(e,{description:n,report:!0}),dt.ZP.alert({title:n,content:e.message}),t((e=>({...e,value:e.value.map((e=>{if(e.id===r){const t=e.musicList.filter((e=>e.music.id!==l)),{length:n}=t;return{...e,musicList:t.map(((e,t)=>({...e,index:n-t})))}}return e}))})))}},l=async({musicbill:e,music:n})=>{const{id:r,name:a}=e,{id:l,name:i}=n;t((e=>({...e,value:e.value.map((e=>{if(e.id===r){const t=e.musicList.filter((e=>e.music.id!==l)),{length:n}=t;return{...e,musicList:t.map(((e,t)=>({...e,index:n-t})))}}return e}))})));try{await function({musicbillId:e,musicId:t}){return at.Z.get("/api/remove_music_from_musicbill",{params:{musicbill_id:e,music_id:t},withToken:!0})}({musicId:l,musicbillId:r})}catch(e){const l=`从歌单"${a}"移除音乐"${i}"失败`;rt.Z.error(e,{description:l,report:!0}),dt.ZP.alert({title:l,content:e.message}),t((e=>({...e,value:e.value.map((e=>{if(e.id===r){const t=[{index:0,music:n},...e.musicList],{length:r}=t;return{...e,musicList:t.map(((e,t)=>({music:e.music,index:r-t})))}}return e}))})))}};return $.on(k.GET_MUSICBILL_DETAIL,e),$.on(k.MUSICBILL_UPDATED,e),$.on(k.MUSICBILL_CREATED,n),$.on(k.MUSICBILL_DELETED,r),$.on(k.ADD_MUSIC_TO_MUSICBILL,a),$.on(k.REMOVE_MUSIC_FROM_MUSICBILL,l),()=>{$.off(k.GET_MUSICBILL_DETAIL,e),$.off(k.MUSICBILL_UPDATED,e),$.off(k.MUSICBILL_CREATED,n),$.off(k.MUSICBILL_DELETED,r),$.off(k.ADD_MUSIC_TO_MUSICBILL,a),$.off(k.REMOVE_MUSIC_FROM_MUSICBILL,l)}}),[]),e})(),n=(()=>{const[e,t]=(0,r.useState)(_a);return(0,r.useEffect)((()=>{const e=e=>{t(e),window.requestIdleCallback((()=>window.localStorage.setItem(pr.kV,e)))};return $.on(k.CHANGE_PLAY_MODE,e),()=>{$.off(k.CHANGE_PLAY_MODE,e)}}),[]),e})(),{loading:a,paused:i,duration:c}=(()=>{const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(!0),[l,i]=(0,r.useState)(0);return(0,r.useEffect)((()=>{const e=()=>t(!0),n=({duration:e})=>{t(!1),i(e)},r=()=>{t(!1),a(!1)},l=()=>a(!0),o=()=>{t(!1),a(!0),i(0)};return $.on(k.AUDIO_WAITING,e),$.on(k.AUDIO_CAN_PLAY_THROUGH,n),$.on(k.AUDIO_PLAY,r),$.on(k.AUDIO_PAUSE,l),$.on(k.AUDIO_ERROR,o),()=>{$.off(k.AUDIO_WAITING,e),$.off(k.AUDIO_CAN_PLAY_THROUGH,n),$.off(k.AUDIO_PLAY,r),$.off(k.AUDIO_PAUSE,l),$.off(k.AUDIO_ERROR,o)}}),[]),{loading:e,paused:n,duration:l}})(),m=(()=>{const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{const e=({music:e})=>t((t=>{if(t.map((e=>e.music.id)).includes(e.id))return t;const n=[{index:0,music:e},...t],{length:r}=n;return n.map(((e,t)=>({music:e.music,index:r-t})))})),n=({musicList:e})=>t((t=>{const n=t.map((e=>e.music.id)),r=e.filter((e=>!n.includes(e.id)));if(!r.length)return Oe.ZP.info("播放列表已包含这些音乐"),t;const a=[...t,...r.map((e=>({index:0,music:e})))],{length:l}=a;return Oe.ZP.success(`已添加${r.length}首音乐到播放列表`),a.map(((e,t)=>({music:e.music,index:l-t})))})),r=e,a=()=>t([]),l=e=>{const{id:n}=e.music;return t((e=>{const t=e.filter((e=>e.music.id!==n)),{length:r}=t;return t.map(((e,t)=>({...e,index:r-t})))}))};return $.on(k.ACTION_PLAY_MUSIC,e),$.on(k.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,n),$.on(k.ACTION_INSERT_MUSIC_TO_PLAYQUEUE,r),$.on(k.ACTION_CLEAR_PLAYLIST,a),$.on(k.ACTION_REMOVE_PLAYLIST_MUSIC,l),()=>{$.off(k.ACTION_PLAY_MUSIC,e),$.off(k.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,n),$.off(k.ACTION_INSERT_MUSIC_TO_PLAYQUEUE,r),$.off(k.ACTION_CLEAR_PLAYLIST,a),$.off(k.ACTION_REMOVE_PLAYLIST_MUSIC,l)}}),[]),e})(),{playqueue:u,currentPosition:d}=(e=>{const[t,n]=(0,r.useState)([]),[a,l]=(0,r.useState)(-1);return(0,r.useEffect)((()=>{const e=()=>l((e=>e<=0?(Oe.ZP.error("已经是播放队列的第一首"),e):e-1)),t=e=>l(e),r=e=>{const{pid:t}=e;n((e=>e.filter((e=>e.pid!==t)).map(((e,t)=>({...e,index:t+1})))))},a=e=>n((t=>{const{index:n}=e;return[...t.slice(0,n-1),t[n],t[n-1],...t.slice(n+1,t.length)].map(((e,t)=>({...e,index:t+1})))})),i=({musicList:e})=>n((t=>{if(t.length)return t;const n=e[(0,J.Z)(0,e.length)];return setTimeout((()=>l(0)),0),[{music:n,index:1,pid:(0,_t.Z)()}]})),o=e=>n((t=>{const{index:n}=e;return[...t.slice(0,n-2),t[n-1],t[n-2],...t.slice(n,t.length)].map(((e,t)=>({...e,index:t+1})))}));return $.on(k.ACTION_PREVIOUS,e),$.on(k.ACTION_PLAY_PLAYQUEUE_INDEX,t),$.on(k.ACTION_REMOVE_PLAYQUEUE_MUSIC,r),$.on(k.ACTION_MOVE_PLAYQUEUE_MUSIC_LATER,a),$.on(k.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,i),$.on(k.ACTION_MOVE_PLAYQUEUE_MUSIC_EARLY,o),()=>{$.off(k.ACTION_PREVIOUS,e),$.off(k.ACTION_PLAY_PLAYQUEUE_INDEX,t),$.off(k.ACTION_REMOVE_PLAYQUEUE_MUSIC,r),$.off(k.ACTION_MOVE_PLAYQUEUE_MUSIC_LATER,a),$.off(k.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,i),$.off(k.ACTION_MOVE_PLAYQUEUE_MUSIC_EARLY,o)}}),[]),(0,r.useEffect)((()=>{const e=({music:e})=>{n((t=>[...t.slice(0,a+1),{music:e,pid:(0,_t.Z)()},...t.slice(a+1)].map(((e,t)=>({...e,index:t+1}))))),l((e=>e+1))};return $.on(k.ACTION_PLAY_MUSIC,e),()=>{$.off(k.ACTION_PLAY_MUSIC,e)}}),[a]),(0,r.useEffect)((()=>{const r=()=>{if(a===t.length-1){if(!e.length)return Oe.ZP.error("空的播放列表");const r=e[(0,J.Z)(0,e.length)];n([...t,{...r,index:t.length,pid:(0,_t.Z)()}].map(((e,t)=>({...e,index:t+1}))))}l(a+1)};return $.on(k.ACTION_NEXT,r),()=>{$.off(k.ACTION_NEXT,r)}}),[e,t,a]),(0,r.useEffect)((()=>{const e=({music:e})=>{if(!t.length)return n([{music:e,index:1,pid:(0,_t.Z)()}]),void l(0);Oe.ZP.info(`下一首将播放"${e.name}"`),n([...t.slice(0,a+1),{music:e,pid:(0,_t.Z)()},...t.slice(a+1)].map(((e,t)=>({...e,index:t+1}))))};return $.on(k.ACTION_INSERT_MUSIC_TO_PLAYQUEUE,e),()=>{$.off(k.ACTION_INSERT_MUSIC_TO_PLAYQUEUE,e)}}),[t,a]),{playqueue:t,currentPosition:a}})(m),E=(()=>{const[e,t]=(0,r.useState)(localStorage.getItem(pr.wy)||"");return(0,r.useEffect)((()=>{const e=window.setInterval((()=>window.requestIdleCallback((()=>{return(e=ga.SEARCH_WORD,at.Z.get("/api/get_public_config",{withToken:!0,params:{key:e}})).then((e=>(localStorage.setItem(pr.wy,e),t(e)))).catch((e=>rt.Z.error(e,{description:"获取搜索词失败",report:!0})));var e}))),9e5);return()=>window.clearInterval(e)}),[]),e})(),p=u[d],_=(()=>{const[e,t]=(0,r.useState)(Ia);return(0,r.useEffect)((()=>{const e=e=>{t(e),Ca(e)};return $.on(k.ACTION_UPDATE_VOLUME,e),()=>{$.off(k.ACTION_UPDATE_VOLUME,e)}}),[]),e})();return(e=>{const t=(0,S.Z)();(0,r.useEffect)((()=>{const n=(0,Te.Z)((n=>{if(["1","2","3","4","5","6","7","8","9"].includes(n.key)&&(o.jm&&n.metaKey||o.qB&&n.ctrlKey)){const r=e[Number(n.key)-1];r&&(n.preventDefault(),t.push({pathname:N.m$.MUSICBILL.replace(":id",r.id)}))}}));return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}),[e,t])})(t.value),r.createElement(f.Provider,{value:{smallView:e,musicbillList:t,audioLoading:a,audioPaused:i,audioDuration:c,playlist:m,playqueue:u,currentPlayqueuePosition:d,playMode:n,searchWord:E,volume:_}},r.createElement(l.q,null,r.createElement("title",null,"知了")),r.createElement(wo,null,r.createElement("div",{className:"container"},r.createElement(ye,null),r.createElement("div",{className:"content"},r.createElement(ke,null),r.createElement(fa,null))),r.createElement(Xe,null),r.createElement(io,{music:p?p.music:null})),r.createElement(al,null),r.createElement(Al,null),r.createElement(li,null),r.createElement(Ii,null),r.createElement(Ai,null),r.createElement(No,null),r.createElement(ki,null),r.createElement(pl,null),r.createElement(ko,null),p?r.createElement(r.Fragment,null,r.createElement(ka,{volume:_,playMode:n,queueMusic:p}),r.createElement(Ya,{music:p.music})):null,s?r.createElement(Ua,null):null)}))},6272:(e,t,n)=>{var r;n.d(t,{Rx:()=>l,nG:()=>i,er:()=>o,wz:()=>c,il:()=>s,nQ:()=>m,gi:()=>u}),function(e){e.RELAUNCH="relaunch",e.OPEN_LINK="open_link",e.MINIMIZE_PLAYER_WINDOW="minimize_player_window",e.HIDE_PLAYER_WINDOW="hide_player_window",e.CLOSE_CONFIG_WINDOW="close_config_window",e.GET_PWA_ORIGIN="get_pwa_origin",e.SET_PWA_ORIGIN="set_pwa_origin"}(r||(r={}));const a=()=>window.require("electron"),l=()=>a().ipcRenderer.invoke(r.RELAUNCH),i=({link:e})=>a().ipcRenderer.invoke(r.OPEN_LINK,{link:e}),o=()=>a().ipcRenderer.invoke(r.MINIMIZE_PLAYER_WINDOW),c=()=>a().ipcRenderer.invoke(r.HIDE_PLAYER_WINDOW),s=()=>a().ipcRenderer.invoke(r.CLOSE_CONFIG_WINDOW),m=()=>a().ipcRenderer.invoke(r.GET_PWA_ORIGIN),u=({pwaOrigin:e})=>a().ipcRenderer.invoke(r.SET_PWA_ORIGIN,{pwaOrigin:e})},6345:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(5977),l=n(8216),i=n(8307);const o=()=>e=>t=>{const n=(0,l.v9)((({user:e})=>e),l.wU),{pathname:o}=(0,a.TH)();return n?r.createElement(e,{...t}):r.createElement(a.l_,{to:`${i.Ql.SIGNIN}?redirect=${encodeURIComponent(o)}`})}},6257:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(6196);const a=function(e){return r.Z.get("/api/get_music_detail",{withToken:!0,params:{id:e}})}},4326:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(6196);const a=function({musicId:e,defer:t}){return r.Z.get("/api/get_music_lrc",{params:{music_id:e},withToken:!0,defer:t})}},8079:(e,t,n)=>{n.d(t,{Y:()=>a,Z:()=>l});var r=n(6196);const a=50,l=async function({keyword:e,page:t=1,pageSize:n=30}){return r.Z.get("/api/search_music",{params:{keyword:e,page:t,page_size:n},withToken:!0})}},7003:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(4910).iv`
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
  text-overflow: ellipsis;
`},6053:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>(...t)=>{(!document.activeElement||"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName)&&e(...t)}},1064:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>{const t={},n=e.replace(/\?/g,"");return n&&n.split("&").forEach((e=>{const[n,r]=e.split("=");t[n]=decodeURIComponent(r)})),t}},8689:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(5977),a=n(687);const l=()=>{const e=(0,r.TH)(),t=(0,r.k6)(),n=(0,a.Z)();return{push:({pathname:r=e.pathname,query:a})=>{const l={...n,...a};return t.push(`${r}?${Object.keys(l).map((e=>`${e}=${encodeURIComponent(l[e]||"")}`)).join("&")}`)}}}},687:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(5977),l=n(1064);const i=()=>{const{search:e}=(0,a.TH)();return(0,r.useMemo)((()=>(0,l.Z)(e)),[e])}},8794:(e,t,n)=>{e.exports=n.p+"30eb336bb42dece28fd8.jpeg"},4862:(e,t,n)=>{e.exports=n.p+"30eb336bb42dece28fd8.jpeg"}}]);
//# sourceMappingURL=page_player_dba62706db83855c4c57.js.map