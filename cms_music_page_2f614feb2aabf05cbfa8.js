(self.webpackChunkcicada_pwa=self.webpackChunkcicada_pwa||[]).push([[935],{2705:(e,t,a)=>{var n=a(5639).Symbol;e.exports=n},4239:(e,t,a)=>{var n=a(2705),r=a(9607),l=a(2333),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?r(e):l(e)}},7561:(e,t,a)=>{var n=a(7990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(r,""):e}},1957:(e,t,a)=>{var n="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g;e.exports=n},9607:(e,t,a)=>{var n=a(2705),r=Object.prototype,l=r.hasOwnProperty,i=r.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=l.call(e,s),a=e[s];try{e[s]=void 0;var n=!0}catch(e){}var r=i.call(e);return n&&(t?e[s]=a:delete e[s]),r}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:(e,t,a)=>{var n=a(1957),r="object"==typeof self&&self&&self.Object===Object&&self,l=n||r||Function("return this")();e.exports=l},7990:e=>{var t=/\s/;e.exports=function(e){for(var a=e.length;a--&&t.test(e.charAt(a)););return a}},3279:(e,t,a)=>{var n=a(3218),r=a(7771),l=a(4841),i=Math.max,s=Math.min;e.exports=function(e,t,a){var c,o,m,u,E,d,p=0,g=!1,_=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var a=c,n=o;return c=o=void 0,p=t,u=e.apply(n,a)}function Z(e){return p=e,E=setTimeout(I,t),g?y(e):u}function h(e){var a=e-d;return void 0===d||a>=t||a<0||_&&e-p>=m}function I(){var e=r();if(h(e))return O(e);E=setTimeout(I,function(e){var a=t-(e-d);return _?s(a,m-(e-p)):a}(e))}function O(e){return E=void 0,f&&c?y(e):(c=o=void 0,u)}function v(){var e=r(),a=h(e);if(c=arguments,o=this,d=e,a){if(void 0===E)return Z(d);if(_)return clearTimeout(E),E=setTimeout(I,t),y(d)}return void 0===E&&(E=setTimeout(I,t)),u}return t=l(t)||0,n(a)&&(g=!!a.leading,m=(_="maxWait"in a)?i(l(a.maxWait)||0,t):m,f="trailing"in a?!!a.trailing:f),v.cancel=function(){void 0!==E&&clearTimeout(E),p=0,c=d=o=E=void 0},v.flush=function(){return void 0===E?u:O(r())},v}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,t,a)=>{var n=a(4239),r=a(7005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==n(e)}},7771:(e,t,a)=>{var n=a(5639);e.exports=function(){return n.Date.now()}},4841:(e,t,a)=>{var n=a(7561),r=a(3218),l=a(3448),i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,o=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(l(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var a=s.test(e);return a||c.test(e)?o(e.slice(2),a?2:8):i.test(e)?NaN:+e}},9993:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(7294),r=a(4910),l=a(6321),i=a(2570);const s=r.ZP.div`
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
  ${({checked:e,disabled:t})=>r.iv`
    opacity: ${t?"0.5":"1"};
    cursor: ${t?"not-allowed":"pointer"};
    > .outline {
      opacity: ${e?"0":"1"};
    }
    > .checked {
      transform: scale(${e?"1":"0"});
    }
  `}
`,c=n.memo((({checked:e,onChange:t,disabled:a=!1,size:r=l.d.SMALL,...c})=>{const o=(0,n.useCallback)((()=>{t&&!a&&t(!e)}),[e,t,a]);return n.createElement(s,{...c,checked:e,disabled:a,onClick:o},n.createElement(i.Z,{className:"outline",name:i.V.CHECKBOX_OUTLINE,size:r}),n.createElement(i.Z,{className:"checked",name:i.V.CHECKBOX_FILL,size:r}))}))},8524:(e,t,a)=>{"use strict";var n;a.d(t,{Z:()=>u}),function(e){e.CIRCLE="circle",e.SQUARE="square"}(n||(n={}));var r=a(7294),l=a(4910),i=a(6661),s=a(8794),c=a(7382);const o=l.ZP.img`
  box-sizing: border-box;
  aspect-ratio: 1;
  object-fit: cover;
`,m={[n.CIRCLE]:{style:{borderRadius:"50%"}},[n.SQUARE]:{style:{borderRadius:4}}},u=r.forwardRef((({src:e,shape:t=n.SQUARE,size:a=64,alt:l,...u},E)=>{const d=(0,r.useRef)(null),[p,g]=(0,r.useState)(s);return(0,r.useLayoutEffect)((()=>{if(e&&p!==e){let t=!1;const a=new IntersectionObserver((([a])=>{a.isIntersecting&&(0,i.Z)(e).then((()=>{t||g(e)})).catch((e=>c.Z.error(e,{description:"加载图片失败",report:!0})))}));return a.observe(d.current),()=>(t=!0,a.disconnect())}}),[p,e]),(0,r.useImperativeHandle)(E,(()=>d.current)),r.createElement(o,{...u,"data-src":e,src:p,style:{width:a,...m[t].style,...u.style},ref:d,alt:l})}))},6906:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(7294),r=a(4910),l=a(8913),i=a(5051),s=a(5985);const c=r.ZP.div`
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
`,o=n.memo((({description:e="暂时没有数据",...t})=>{const a=(0,n.useMemo)((()=>l.Z.emptyImageList[(0,i.Z)(0,l.Z.emptyImageList.length)]),[]);return n.createElement(c,{...t},n.createElement(s.Z,{className:"placeholder",src:a,size:180,alt:"placeholder"}),n.createElement("div",{className:"description"},e))}))},4508:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var n=a(7294),r=a(4910),l=a(5455),i=a(6885),s=a(2798),c=a(7877);const o=20,m=r.ZP.div`
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
    height: ${o}px;
    background-color: rgb(244 244 244);
    margin: 0 10px;
  }
`,u=(0,r.ZP)(i.Z)`
  height: ${o}px;
  font-size: 12px;
  text-align: center;
  width: 40px;
  padding: 0 5px;
  appearance: textfield;
  margin: 0 4px;
  &::-webkit-inner-spin-button {
    appearance: none;
  }
`,E=({currentPage:e,pageCount:t,onPageChange:a,...r})=>{const[i,E]=(0,n.useState)(""),d=()=>{let e=+i;!e||e<=1?e=1:e>=t&&(e=t),E(e.toString()),a(e)};return n.createElement(m,{...r},e>2&&n.createElement(l.Z,{className:"page",label:"1",size:o,onClick:()=>a(1)}),e>=4?4===e?n.createElement(l.Z,{className:"page",label:"2",size:o,onClick:()=>a(2)}):n.createElement("div",{className:"ellipsis page"},"···"):null,e-1>=1&&n.createElement(l.Z,{className:"page",label:e-1,size:o,onClick:()=>a(e-1)}),n.createElement(l.Z,{className:"page",label:e,type:l.D.PRIMARY,size:o}),e+1<=t&&n.createElement(l.Z,{className:"page",label:e+1,size:o,onClick:()=>a(e+1)}),t-e>=3?t-e==3?n.createElement(l.Z,{className:"page",label:t-1,size:o,onClick:()=>a(t-1)}):n.createElement("div",{className:"ellipsis page"},"···"):null,t>e+1&&n.createElement(l.Z,{className:"page",label:t,size:o,onClick:()=>a(t)}),t>3&&n.createElement(n.Fragment,null,n.createElement("div",{className:"separator"}),n.createElement(u,{type:"number",value:i,onChange:e=>E(e.target.value),onKeyDown:e=>{"Enter"===e.key&&d()}}),n.createElement(c.Z,{title:"跳转到页面"},n.createElement(s.ZP,{name:s.VG.GOTO_OUTLINE,size:o,onClick:d}))))}},9762:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(7294),r=a(4910),l=a(5733),i=a(6885),s=a(1579),c=a(2570);const o=r.ZP.div`
  position: relative;
  display: inline-block;
  > .input-box {
    position: relative;
    > .input {
      width: 100%;
    }
    > .arrow {
      pointer-events: none;
      position: absolute;
      right: 12px;
      top: calc(50% - ${5}px);
      color: rgb(155 155 155);
    }
  }
  > .array {
    z-index: 1;
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 0px 15px rgb(0 0 0 / 15%);
    transition: ${350}ms;
    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 10px;
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent #fff transparent;
    }
    > .loading {
      padding: 12px;
    }
    > .list {
      border-radius: 4px;
      max-height: 300px;
      overflow: auto;
      ${l.Z}
      &:empty::after {
        content: '空';
        display: block;
        font-size: 12px;
        padding: 10px 12px;
        color: rgb(155 155 155);
        cursor: not-allowed;
      }
    }
  }
  ${({arrayVisible:e})=>r.iv`
    > .array {
      opacity: ${e?1:0};
      transform: translate(0, ${e?0:"32px"});
      pointer-events: ${e?"auto":"none"};
    }
  `}
`,m=r.ZP.div`
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: ${350}ms;
  &:hover {
    background-color: rgb(49 194 124 / 0.05);
  }
  ${({active:e})=>r.iv`
    background-color: ${e?"var(--color-primary) !important":"#fff"};
    color: ${e?"#fff":"#333"};
  `}
`,u=function({value:e,onChange:t,array:a,itemRenderer:r,customInputDisabled:l=!1,onInputChange:u,loading:E=!1,placeholder:d,disabled:p,...g}){const[_,f]=(0,n.useState)(""),[y,Z]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{u&&u(_)}),[u,_]),n.createElement(o,{...g,arrayVisible:y},n.createElement("div",{className:"input-box"},n.createElement(i.Z,{className:"input",readOnly:l,value:y?_:null!==e?r(e,""):"",onChange:e=>f(e.target.value),onFocus:()=>Z(!0),onBlur:()=>window.setTimeout((()=>Z(!1)),350),placeholder:d,disabled:p}),y?null:n.createElement(c.Z,{className:"arrow",name:c.V.DOWN_OUTLINE,size:10})),n.createElement("div",{className:"array"},E?n.createElement("div",{className:"loading"},n.createElement(s.Z,null)):n.createElement("div",{className:"list"},a.map(((a,l)=>{const i=r(a,_);return i?n.createElement(m,{key:l,active:e===a,onClick:()=>t(a)},i):null})))))}},9987:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(7294),r=a(4910);const l=r.ZP.table`
  border-spacing: 0;
  tr:hover {
    td {
      background-color: #f9f9f9;
    }
  }
  th,
  td {
    font-size: 14px;
    text-align: left;
  }
  th {
    z-index: 1;
    padding: 20px;
    color: #000;
    background-color: #f6f6f6;
    font-weight: bold;
    top: 0;
    white-space: nowrap;
  }
  td {
    padding: 10px 20px;
    color: #333;
  }
  ${({stickyHeader:e})=>r.iv`
    th {
      position: ${e?"sticky":"static"};
    }
  `}
`,i=function({list:e,headers:t,rowRenderer:a,stickyHeader:r=!1,...i}){return n.createElement(l,{...i,stickyHeader:r},n.createElement("thead",null,n.createElement("tr",null,t.map(((e,t)=>n.createElement("th",{key:t},e))))),n.createElement("tbody",null,e.map(((e,t)=>n.createElement("tr",{key:t},a(e).map(((e,t)=>n.createElement("td",{key:t},e))))))))}},5029:(e,t,a)=>{"use strict";a.d(t,{D:()=>n,Z:()=>o});var n,r=a(7294),l=a(4910);!function(e){e.SQ="sq",e.HQ="hq",e.AC="ac",e.MV="mv",e.FORK="fork",e.FORK_FROM="fork_from"}(n||(n={}));const i={[n.SQ]:{label:"sq",color:"var(--color-primary)"},[n.HQ]:{label:"hq",color:"rgb(235, 65, 65)"},[n.AC]:{label:"ac",color:"rgb(235, 150, 65)"},[n.MV]:{label:"mv",color:"rgb(65, 187, 235)"},[n.FORK]:{label:"fo",color:"rgb(226, 65, 235)"},[n.FORK_FROM]:{label:"ff",color:"rgb(102, 65, 235)"}},s=l.ZP.div`
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
`,c=r.forwardRef((({type:e,gray:t=!1,...a},n)=>{const{label:l,color:c}=i[e];return r.createElement(s,{...a,ref:n,color:t?"rgb(188 188 188)":c},l)})),o=r.memo(c)},7072:(e,t,a)=>{"use strict";a.d(t,{IY:()=>n,Oh:()=>r,gf:()=>l,Z3:()=>i,Zw:()=>s,kF:()=>c,b5:()=>o,xL:()=>m,MW:()=>u,Eg:()=>E});const n=1e3,r=255,l=255,i=255,s={ACCEPT_MIMES:["audio/mpeg","audio/x-m4a","video/mp4"],MAX_SIZE:10485760},c={ACCEPT_MIMES:["audio/flac"],MAX_SIZE:52428800},o={ACCEPT_MIMES:["audio/mpeg","audio/x-m4a"],MAX_SIZE:10485760};var m;!function(e){e.NORMAL="normal",e.INSTRUMENT="instrument"}(m||(m={}));const u={[m.NORMAL]:"普通",[m.INSTRUMENT]:"纯音乐"},E=Object.keys(u)},7891:(e,t,a)=>{"use strict";a.d(t,{xK:()=>n,jQ:()=>r,Jx:()=>l});const n=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,r=/^https?:\/\/(?=.{1,254}(?::|$))(?:(?!\d|-)(?![a-z0-9-]{1,62}-(?:\.|:|$))[a-z0-9-]{1,63}\b(?!\.$)\.?)+(:\d+)?$/i,l=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/},1619:(e,t,a)=>{"use strict";var n;a.d(t,{A:()=>n,I:()=>r}),function(e){e.PAGE="page",e.SEARCH_KEY="search_key",e.SEARCH_VALUE="search_value",e.CREATE_DIALOG_OPEN="create_dialog_open",e.OPERATE_RECORD_DIALOG_OPEN="operate_record_dialog_open",e.OPERATE_RECORD_DIALOG_SEARCH_FIGURE_ID="operate_record_dialog_search_figure_id"}(n||(n={}));const r=20},6588:(e,t,a)=>{"use strict";var n;a.d(t,{AE:()=>n,IV:()=>r,sB:()=>l}),function(e){e.SEARCH_KEY="search_key",e.SEARCH_VALUE="search_value",e.PAGE="page",e.CREATE_DIALOG_OPEN="create_dialog_open",e.OPERATE_RECORD_DIALOG_OPEN="operate_record_dialog_open",e.OPERATE_RECORD_DIALOG_MUSIC_ID="operate_record_dialog_music_id"}(n||(n={}));const r=20;var l;!function(e){e.SQ="sq",e.HQ="hq",e.AC="ac"}(l||(l={}))},8235:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ct});var n,r=a(7294),l=a(4910),i=a(6196);!function(e){e.COMPOSITE="composite",e.ID="id",e.NAME="name",e.ALIAS="alias",e.SINGER_ID="singer_id",e.SINGER_NAME="singer_name"}(n||(n={}));const s={[n.COMPOSITE]:"综合",[n.ID]:"音乐ID",[n.NAME]:"音乐名",[n.ALIAS]:"音乐别名",[n.SINGER_ID]:"歌手 ID",[n.SINGER_NAME]:"歌手名"},c=Object.keys(s);var o=a(687),m=a(464),u=a(8689),E=a(2798),d=a(7877),p=a(6588);const g=l.ZP.div`
  padding: 20px 0;
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,_=()=>{const e=(0,u.Z)();return r.createElement(g,null,r.createElement(d.Z,{title:"创建音乐",placement:d.u.RIGHT},r.createElement(E.ZP,{name:E.VG.PLUS_OUTLINE,onClick:()=>e.push({query:{[p.AE.CREATE_DIALOG_OPEN]:"1"}})})),r.createElement(d.Z,{title:"操作记录",placement:d.u.RIGHT},r.createElement(E.ZP,{name:E.VG.HISTORY_OUTLINE,onClick:()=>e.push({query:{[p.AE.OPERATE_RECORD_DIALOG_OPEN]:"1",[p.AE.OPERATE_RECORD_DIALOG_MUSIC_ID]:""}})})))};var f=a(9993),y=a(9762);var Z=a(4839),h=a(2983),I=a(7382),O=a(5738),v=a(7072),b=a(1894),R=a(6885),A=a(3584),C=a(5455),D=a(3279),S=a.n(D),x=a(5977),P=a(8307),T=a(7003);var k=a(1619);const N=l.ZP.div`
  > .input {
    display: flex;
    align-items: center;
    gap: 10px;
    > .select {
      flex: 1;
      min-width: 0;
    }
  }
  > .singer-list {
    > .singer {
      display: flex;
      gap: 10px;
      padding: 10px 12px;
      background-color: #f6f6f6;
      border-radius: 4px;
      margin: 5px 0;
      > .name {
        flex: 1;
        min-width: 0;
        font-size: 14px;
        color: #333;
        ${T.Z}
      }
    }
  }
`,L=e=>e?`${e.name}${e.alias?`(${e.alias})`:""}`:"",M=({singerList:e,onSingerSelect:t,onSingerRemove:a,disabled:n,...l})=>{const s=(0,x.k6)(),[c,o]=(0,r.useState)(0),[m,u]=(0,r.useState)([]),d=(0,r.useRef)(S()((async e=>{if(!e)return u([]);o((e=>e+1));try{const t=await async function({keyword:e,size:t=30}){return(await i.Z.get("/api/cms/search_figure_list",{params:{keyword:e,size:t},withToken:!0})).map((({id:e,name:t,alias:a,avatar:n,create_time:r})=>({id:e,name:t,alias:a,avatar:n,createTime:new Date(r)})))}({keyword:e.slice(0,50),size:50});u(t)}catch(e){I.Z.error(e,{description:"搜索角色列表失败",report:!0}),Z.ZP.error(e.message)}o((e=>e-1))}),500));return r.createElement(b.Z,{...l,label:"歌手列表"},r.createElement(N,null,r.createElement("div",{className:"input"},r.createElement(y.Z,{className:"select",value:null,onChange:t,array:m,itemRenderer:L,onInputChange:d.current,loading:c>0,placeholder:"搜索歌手",disabled:n}),r.createElement(C.Z,{label:"创建歌手",type:C.D.PRIMARY,onClick:()=>s.push(`${P.Nj.FIGURE}?${k.A.CREATE_DIALOG_OPEN}=1`),disabled:n})),r.createElement("div",{className:"singer-list"},e.map((e=>r.createElement("div",{className:"singer",key:e.id},r.createElement("div",{className:"name"},e.name,e.alias?`(${e.alias})`:""),r.createElement(E.ZP,{name:E.VG.WRONG_OUTLINE,size:18,type:E.Dy.DANGER,onClick:()=>a(e),disabled:n})))))))};var w,G=a(6729),z=a.n(G);!function(e){e.MUSIC_CREATED_OR_UPDATED_OR_DELETED="music_created_or_updated_or_deleted",e.OPEN_EDIT_COVER_DIALOG="open_edit_cover_dialog",e.OPEN_EDIT_DIALOG="open_edit_dialog",e.OPEN_EDIT_SINGER_LIST_DIALOG="open_edit_singer_list_dialog",e.OPEN_EDIT_LRC_DIALOG="open_edit_lrc_dialog",e.OPEN_EDIT_RESOURCE_DIALOG="open_edit_resource_dialog",e.OPEN_EDIT_FORK_FROM_DIALOG="open_edit_fork_from_dialog"}(w||(w={}));const U=new(z()),$=e=>e?v.MW[e]:"",V=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    flex: 1;
    min-width: 0;
  }
`,Y={marginBottom:20},F={width:"100%"},H=r.memo((({open:e})=>{const t=(0,u.Z)(),[a,n]=(0,r.useState)([]),[l,s]=(0,r.useState)(""),[c,o]=(0,r.useState)(v.xL.NORMAL),[m,E]=(0,r.useState)(!1),[d,g]=(0,r.useState)(null),_=()=>{t.push({query:{[p.AE.CREATE_DIALOG_OPEN]:""}}),setTimeout((()=>{n([]),s(""),g(null)}),1e3)},[D,S]=(0,r.useState)(!1);return r.createElement(A.ZP,{open:e||D},r.createElement(A.Dx,null,"创建音乐"),r.createElement(A.VY,null,r.createElement(M,{style:Y,singerList:a,onSingerSelect:e=>n((t=>t.find((t=>t.id===e.id))?t:[...t,e])),onSingerRemove:e=>n((t=>t.filter((t=>t.id!==e.id)))),disabled:D}),r.createElement(b.Z,{label:"音乐名",style:Y},r.createElement(R.Z,{value:l,onChange:e=>s(e.target.value),placeholder:`最长不超过 ${v.Oh} 个字符`,maxLength:v.Oh,disabled:D,style:F})),r.createElement(b.Z,{label:"音乐类型",style:Y},r.createElement(y.Z,{value:c,onChange:e=>o(e),array:v.Eg,itemRenderer:$,disabled:D,customInputDisabled:!0})),r.createElement(b.Z,{label:"是否可推荐",style:Y},r.createElement(f.Z,{checked:m,onChange:e=>E(e),disabled:D})),r.createElement(b.Z,{label:"标准音质",style:Y},r.createElement(V,null,r.createElement(C.Z,{label:"选取文件",type:C.D.PRIMARY,onClick:()=>(0,O.Z)({acceptTypes:v.Zw.ACCEPT_MIMES,onSelect:e=>v.Zw.ACCEPT_MIMES.includes(e.type)?e.size>v.Zw.MAX_SIZE?Z.ZP.error(`文件过大, 最大不超过 ${v.Zw.MAX_SIZE/1024/1024}MB`):g(e):Z.ZP.error(`标准音质支持的文件类型为 ${v.Zw.ACCEPT_MIMES.join(",")}`)}),disabled:D}),d?r.createElement(R.Z,{value:d.name,readOnly:!0}):null))),r.createElement(A.aU,null,r.createElement(C.Z,{label:"取消",onClick:_,disabled:D}),r.createElement(C.Z,{label:"创建",type:C.D.PRIMARY,onClick:async()=>{if(!a.length)return Z.ZP.error("请选择歌手列表");if(!l)return Z.ZP.error("请输入音乐名字");if(!d)return Z.ZP.error("请选择标准音质");S(!0);try{await function({singerIdList:e,name:t,type:a,sq:n,recommendable:r}){const l=new FormData;return l.append("singer_ids",e.join(",")),l.append("name",t),l.append("type",a.toString()),l.append("sq",n),l.append("recommendable",(r?1:0).toString()),i.Z.post("/api/cms/create_music",{data:l,withToken:!0,timeout:18e4})}({singerIdList:a.map((e=>e.id)),name:l,type:c,sq:d,recommendable:m}),Z.ZP.success(`音乐"${l}"已创建`),U.emit(w.MUSIC_CREATED_OR_UPDATED_OR_DELETED),_()}catch(e){I.Z.error(e,{description:"创建音乐失败",report:!0}),h.ZP.alert({title:"创建音乐失败",content:e.message})}S(!1)},loading:D})))}));var K=a(7022),j=a(3088),q=a(6053);const B=l.ZP.div`
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 5px;
  > .key {
    width: 150px;
  }
  > .value {
    flex: 1;
    min-width: 0;
  }
`,Q=e=>e?s[e]:"",W=({searchKey:e,searchValue:t})=>{const a=(0,u.Z)(),n=(0,r.useRef)(null),[l,i]=(0,r.useState)(t),s=()=>a.push({query:{[p.AE.PAGE]:"1",[p.AE.SEARCH_VALUE]:l}});return(0,r.useEffect)((()=>{const e=(0,q.Z)((e=>{if(!("f"!==e.key||j.jm&&!e.metaKey||j.qB&&!e.ctrlKey))return e.preventDefault(),n.current.focus()}));return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[]),r.createElement(B,null,r.createElement(y.Z,{className:"key",value:e,onChange:e=>a.push({query:{[p.AE.PAGE]:"1",[p.AE.SEARCH_KEY]:e}}),array:c,itemRenderer:Q,customInputDisabled:!0}),r.createElement(R.Z,{className:"value",value:l,onChange:e=>i(e.target.value),onKeyDown:e=>{"Enter"===e.key&&s()},onFocus:e=>e.target.select(),ref:n,maxLength:50}),r.createElement(E.ZP,{name:E.VG.SEARCH_OUTLINE,onClick:s}))};var X=a(3727),J=a(921),ee=a(5029),te=a(2625),ae=a(8524),ne=a(1579),re=a(6906),le=a(9987),ie=a(5733);const se=l.ZP.div`
  flex: 1;
  min-height: 0;
  position: relative;
  > .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
    ${ie.Z}
    >.table {
      width: 100%;
    }
  }
  > .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${({isLoading:e})=>l.iv`
    > .content {
      opacity: ${e?.5:1};
    }
  `}
`,ce={position:"absolute",top:0,left:0,width:"100%",height:"100%"},oe=l.ZP.span`
  font-size: 12px;
`,me=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-color-secondary);
`,ue=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 5px;
  > .singer-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    > .singer {
      text-decoration: none;
      color: #333;
      display: inline-block;
      border: 1px solid rgb(49 194 124 / 0.3);
      border-radius: 2px;
      padding: 2px 8px;
      font-size: 12px;
      cursor: pointer;
      white-space: nowrap;
    }
  }
`,Ee=["ID","名字","封面","类型","歌手","别名","资源","是否可推荐","创建时间","操作"],de=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 5px;
  > .action {
    cursor: pointer;
  }
`,pe=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 3px;
`,ge=({loading:e,musicList:t,page:a,searchKey:n,searchValue:l})=>{const i=(0,u.Z)(),s=(0,r.useRef)(null);return(0,r.useEffect)((()=>{s.current?.scrollTo({top:0,behavior:"smooth"})}),[a,n,l]),r.createElement(se,{isLoading:e},e||t.length?r.createElement("div",{className:"content",ref:s},r.createElement(le.Z,{className:"table",list:t,headers:Ee,rowRenderer:e=>[r.createElement(oe,null,e.id),e.name,r.createElement(me,null,e.cover?r.createElement(ae.Z,{src:e.cover,alt:"cover"}):"-",r.createElement(E.ZP,{name:E.VG.EDIT_OUTLINE,size:22,onClick:()=>U.emit(w.OPEN_EDIT_COVER_DIALOG,e)})),r.createElement(oe,null,v.MW[e.type]),r.createElement(ue,null,r.createElement("div",{className:"singer-list"},e.singers.map((e=>r.createElement(X.rU,{key:e.id,className:"singer",to:`${P.Nj.FIGURE}?${p.AE.SEARCH_KEY}=${te.xP.ID}&${p.AE.SEARCH_VALUE}=${e.id}`},e.name)))),r.createElement(E.ZP,{name:E.VG.EDIT_OUTLINE,size:22,onClick:()=>U.emit(w.OPEN_EDIT_SINGER_LIST_DIALOG,e)})),r.createElement(oe,null,e.alias||"-"),r.createElement(de,null,r.createElement(d.Z,{title:"标准音质"},r.createElement(ee.Z,{className:"action",type:ee.D.SQ,onClick:()=>U.emit(w.OPEN_EDIT_RESOURCE_DIALOG,{music:e,type:p.sB.SQ})})),r.createElement(d.Z,{title:"无损音质"},r.createElement(ee.Z,{className:"action",type:ee.D.HQ,gray:!e.hq,onClick:()=>U.emit(w.OPEN_EDIT_RESOURCE_DIALOG,{music:e,type:p.sB.HQ})})),e.type===v.xL.NORMAL?r.createElement(d.Z,{title:"伴奏"},r.createElement(ee.Z,{className:"action",type:ee.D.AC,gray:!e.ac,onClick:()=>U.emit(w.OPEN_EDIT_RESOURCE_DIALOG,{music:e,type:p.sB.AC})})):null,r.createElement(ee.Z,{className:"action",type:ee.D.MV,gray:!e.mvLink,onClick:()=>U.emit(w.OPEN_EDIT_DIALOG,e)}),r.createElement(d.Z,{title:"二次创作"},r.createElement(ee.Z,{className:"action",type:ee.D.FORK_FROM,gray:!e.forkFrom.length,onClick:()=>U.emit(w.OPEN_EDIT_FORK_FROM_DIALOG,e)}))),r.createElement(oe,null,e.recommendable?"√":"×"),r.createElement(oe,null,(0,J.Z)(e.createTime).format("YYYY-MM-DD HH:mm")),r.createElement(pe,null,r.createElement(E.ZP,{name:E.VG.EDIT_OUTLINE,size:22,onClick:()=>U.emit(w.OPEN_EDIT_DIALOG,e)}),r.createElement(E.ZP,{name:E.VG.HISTORY_OUTLINE,size:22,onClick:()=>i.push({query:{[p.AE.OPERATE_RECORD_DIALOG_OPEN]:"1",[p.AE.OPERATE_RECORD_DIALOG_MUSIC_ID]:e.id}})}),e.type===v.xL.NORMAL?r.createElement(E.ZP,{name:E.VG.LYRIC_OUTLINE,size:22,onClick:()=>U.emit(w.OPEN_EDIT_LRC_DIALOG,e)}):null)],stickyHeader:!0})):r.createElement(re.Z,{style:ce}),e&&r.createElement("div",{className:"loading"},r.createElement(ne.Z,null)))};var _e=a(4508);const fe=({page:e,total:t})=>{const a=(0,u.Z)();return r.createElement(_e.Z,{currentPage:e,pageCount:Math.ceil(t/p.IV),onPageChange:e=>a.push({query:{[p.AE.PAGE]:e.toString()}})})},ye=l.ZP.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  margin: 20px 20px 20px 0;
  gap: 10px;
`,Ze={flex:1,minHeight:0},he=({page:e,searchKey:t,searchValue:a})=>{const{error:n,loading:l,musicList:s,retry:c,total:o}=(({page:e,searchKey:t,searchValue:a})=>{const[n,l]=(0,r.useState)(null),[s,c]=(0,r.useState)(!1),[o,m]=(0,r.useState)([]),[u,E]=(0,r.useState)(0),d=(0,r.useCallback)((async()=>{l(null),c(!0);try{const n=await function({page:e=1,pageSize:t=30,searchKey:a,searchValue:n}){return i.Z.get("/api/cms/get_music_list",{withToken:!0,defer:0,params:{page:e,page_size:t,search_key:a,search_value:n}})}({page:e,pageSize:p.IV,searchKey:t,searchValue:a});E(n.total),m(n.list.map((e=>({id:e.id,cover:e.cover,name:e.name,alias:e.alias,type:e.type,singers:e.singers,createTime:new Date(e.create_time),sq:e.sq,hq:e.hq,ac:e.ac,mvLink:e.mv_link,forkFrom:e.fork_from,recommendable:!!e.recommendable}))))}catch(e){I.Z.error(e,{description:"获取音乐列表失败",report:!0}),l(e)}c(!1)}),[t,a,e]);return(0,r.useEffect)((()=>(d(),U.on(w.MUSIC_CREATED_OR_UPDATED_OR_DELETED,d),()=>{U.off(w.MUSIC_CREATED_OR_UPDATED_OR_DELETED,d)})),[d]),{error:n,loading:s,musicList:o,total:u,retry:d}})({page:e,searchKey:t,searchValue:a});return r.createElement(ye,null,r.createElement(W,{searchKey:t,searchValue:a}),n?r.createElement(K.Z,{errorMessage:n.message,retry:c,style:Ze}):r.createElement(ge,{loading:l,musicList:s,page:e,searchKey:t,searchValue:a}),r.createElement(fe,{total:o,page:e}))};var Ie;!function(e){e.COVER="cover",e.NAME="name",e.TYPE="type",e.ALIAS="alias",e.LRC="lrc",e.SINGER="singer",e.SQ="sq",e.HQ="hq",e.AC="ac",e.MV_LINK="mv_link",e.FORK_FROM="fork_from",e.RECOMMENDABLE="recommendable"}(Ie||(Ie={}));const Oe=function({id:e,key:t,value:a}){const n=new FormData;return n.append("id",e),n.append("key",t),n.append("value",a),i.Z.post("/api/cms/update_music",{data:n,withToken:!0,timeout:18e4})};var ve=a(4698);const be={width:v.IY,height:v.IY},Re=()=>{const[e,t]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=e=>t(e);return U.on(w.OPEN_EDIT_COVER_DIALOG,e),()=>{U.off(w.OPEN_EDIT_COVER_DIALOG,e)}}),[]),r.createElement(ve.Z,{open:!!e,onClose:()=>t(null),imageSize:be,onUpdate:async t=>{await Oe({id:e.id,key:Ie.COVER,value:t}),U.emit(w.MUSIC_CREATED_OR_UPDATED_OR_DELETED)}})};var Ae=a(7891);const Ce={marginBottom:20},De={width:"100%"},Se=e=>e?v.MW[e]:"",xe=r.memo((()=>{const[e,t]=(0,r.useState)(null),[a,n]=(0,r.useState)(""),[l,i]=(0,r.useState)(v.xL.NORMAL),[s,c]=(0,r.useState)(!1),[o,m]=(0,r.useState)(""),[u,E]=(0,r.useState)(""),d=()=>t(null);(0,r.useEffect)((()=>{const e=e=>{t(e),n(e.name),i(e.type),c(e.recommendable),m(e.alias),E(e.mvLink)};return U.on(w.OPEN_EDIT_DIALOG,e),()=>{U.off(w.OPEN_EDIT_DIALOG,e)}}),[]);const[p,g]=(0,r.useState)(!1);return r.createElement(A.ZP,{open:!!e},r.createElement(A.Dx,null,e?`编辑"${e.name}"`:"编辑音乐"),r.createElement(A.VY,null,r.createElement(b.Z,{label:"名字",style:Ce},r.createElement(R.Z,{value:a,onChange:e=>n(e.target.value),placeholder:`名字不超过 ${v.Oh} 个字符`,maxLength:v.Oh,disabled:p,style:De})),r.createElement(b.Z,{label:"类型",style:Ce},r.createElement(y.Z,{value:l,onChange:e=>i(e),array:v.Eg,itemRenderer:Se,disabled:p,style:De,customInputDisabled:!0})),r.createElement(b.Z,{label:"是否可推荐",style:Ce},r.createElement(f.Z,{checked:s,onChange:e=>c(e)})),r.createElement(b.Z,{label:"别名",style:Ce},r.createElement(R.Z,{value:o,onChange:e=>m(e.target.value),placeholder:`别名不超过 ${v.gf} 个字符`,maxLength:v.gf,disabled:p,style:De})),r.createElement(b.Z,{label:"MV 链接",style:Ce},r.createElement(R.Z,{value:u,onChange:e=>E(e.target.value),placeholder:`MV 链接不超过 ${v.Z3} 个字符`,maxLength:v.Z3,disabled:p,style:De}))),r.createElement(A.aU,null,r.createElement(C.Z,{label:"取消",onClick:d,disabled:p}),r.createElement(C.Z,{label:"更新",onClick:async()=>{if(!e)return;const t=a.trim();if(!t)return Z.ZP.error("请输入名字");const n=u.trim();if(n&&!Ae.Jx.test(n))return Z.ZP.error("MV 链接格式错误");g(!0);try{let a=!1;e.name!==t&&(a=!0,await Oe({id:e.id,key:Ie.NAME,value:t})),e.type!==l&&(a=!0,await Oe({id:e.id,key:Ie.TYPE,value:l.toString()})),e.recommendable!==s&&(a=!0,await Oe({id:e.id,key:Ie.RECOMMENDABLE,value:s?"1":"0"}));const r=o.trim();e.alias!==r&&(a=!0,await Oe({id:e.id,key:Ie.ALIAS,value:r})),e.mvLink!==n&&(a=!0,await Oe({id:e.id,key:Ie.MV_LINK,value:n})),a&&U.emit(w.MUSIC_CREATED_OR_UPDATED_OR_DELETED),d()}catch(e){I.Z.error(e,{description:"更新音乐失败",report:!0}),h.ZP.alert({title:"更新音乐失败",content:e.message})}g(!1)},type:C.D.PRIMARY,loading:p})))}));var Pe=a(4326),Te=a(511);const ke={width:"100%",height:"350px",resize:"vertical"},Ne={padding:"50px 0"},Le=({music:e,onClose:t})=>{const{lrc:a,retry:n}=(e=>{const t=(0,r.useRef)(e);t.current=e;const[a,n]=(0,r.useState)({status:j.eE.LOADING}),l=(0,r.useCallback)((async()=>{n({status:j.eE.LOADING});try{const a=await(0,Pe.Z)({musicId:e});t.current===e&&n({status:j.eE.SUCCESS,value:a})}catch(a){I.Z.error(a,{description:"获取音乐 lrc 失败",report:!0}),t.current===e&&n({status:j.eE.ERROR,error:a})}}),[e]);return(0,r.useEffect)((()=>{l()}),[l]),{lrc:a,retry:l}})(e.id),[l,i]=(0,r.useState)(""),[s,c]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{a.status===j.eE.SUCCESS?i(a.value):a.status===j.eE.LOADING?i("正在获取歌词..."):i("")}),[a]),r.createElement(r.Fragment,null,r.createElement(A.Dx,null,'编辑"',e.name,'"歌词'),r.createElement(A.VY,null,a.status===j.eE.ERROR?r.createElement(K.Z,{style:Ne,errorMessage:a.error.message,retry:n}):r.createElement(Te.Z,{value:l,onChange:e=>i(e.target.value),placeholder:"输入歌词",disabled:s||a.status===j.eE.LOADING,rows:15,style:ke})),r.createElement(A.aU,null,r.createElement(C.Z,{label:"取消",onClick:t,disabled:s||a.status===j.eE.LOADING}),r.createElement(C.Z,{label:"更新",type:C.D.PRIMARY,onClick:async()=>{if(l===a.value)return t();c(!0);try{await Oe({id:e.id,key:Ie.LRC,value:l}),t()}catch(e){I.Z.error(e,{description:"更新音乐 lrc 失败",report:!0}),h.ZP.alert({title:"更新歌词失败",content:e.message})}c(!1)},disabled:a.status!==j.eE.SUCCESS,loading:s})))},Me={style:{width:720}},we=r.memo((()=>{const[e,t]=(0,r.useState)(!1),a=(0,r.useCallback)((()=>t(!1)),[]),[n,l]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=e=>{l(e),t(!0)};return U.on(w.OPEN_EDIT_LRC_DIALOG,e),()=>{U.off(w.OPEN_EDIT_LRC_DIALOG,e)}}),[]),r.createElement(A.ZP,{open:e,bodyProps:Me},n?r.createElement(Le,{music:n,onClose:a}):null)})),Ge=()=>{const[e,t]=(0,r.useState)(null),[a,n]=(0,r.useState)([]),l=()=>{t(null),setTimeout((()=>{n([])}),1e3)},[i,s]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{t(e),n(e.singers)};return U.on(w.OPEN_EDIT_SINGER_LIST_DIALOG,e),()=>{U.off(w.OPEN_EDIT_SINGER_LIST_DIALOG,e)}}),[]),r.createElement(A.ZP,{open:!!e},r.createElement(A.Dx,null,e?`编辑"${e.name}"歌手列表`:"编辑音乐歌手列表"),r.createElement(A.VY,null,r.createElement(M,{singerList:a,onSingerSelect:e=>n((t=>t.find((t=>t.id===e.id))?t:[...t,e])),onSingerRemove:e=>n((t=>t.filter((t=>t.id!==e.id)))),disabled:i})),r.createElement(A.aU,null,r.createElement(C.Z,{label:"取消",onClick:l,disabled:i}),r.createElement(C.Z,{label:"更新",onClick:async()=>{if(e){if(a===e.singers)return l();s(!0);try{await Oe({id:e.id,key:Ie.SINGER,value:a.map((e=>e.id)).join(",")}),U.emit(w.MUSIC_CREATED_OR_UPDATED_OR_DELETED),l()}catch(e){I.Z.error(e,{description:"更新音乐歌手列表失败",report:!0}),h.ZP.alert({title:"更新音乐歌手列表失败",content:e.message})}s(!1)}},type:C.D.PRIMARY,loading:i})))},ze={[p.sB.SQ]:{label:"标准音质",mimes:v.Zw.ACCEPT_MIMES,maxSize:v.Zw.MAX_SIZE},[p.sB.HQ]:{label:"无损音质",mimes:v.kF.ACCEPT_MIMES,maxSize:v.kF.MAX_SIZE},[p.sB.AC]:{label:"伴奏",mimes:v.b5.ACCEPT_MIMES,maxSize:v.b5.MAX_SIZE}},Ue={width:"100%"},$e={marginBottom:20},Ve=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > .input {
    flex: 1;
  }
`,Ye=()=>{const[e,t]=(0,r.useState)(null),[a,n]=(0,r.useState)(p.sB.SQ),[l,i]=(0,r.useState)(""),{label:s,mimes:c,maxSize:o}=ze[a],[m,u]=(0,r.useState)(null),E=()=>{t(null),setTimeout((()=>{u(null),i("")}),1e3)},[d,g]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=({music:e,type:a})=>{t(e),n(a),i(e[a]||"")};return U.on(w.OPEN_EDIT_RESOURCE_DIALOG,e),()=>{U.off(w.OPEN_EDIT_RESOURCE_DIALOG,e)}}),[]),r.createElement(A.ZP,{open:!!e},r.createElement(A.Dx,null,"编辑",e?`"${e.name}"`:"音乐",s),r.createElement(A.VY,null,l?r.createElement(b.Z,{label:`原${s}`,style:$e},r.createElement(Ve,null,r.createElement(R.Z,{className:"input",readOnly:!0,value:l}),r.createElement(C.Z,{type:C.D.PRIMARY,label:"新页面打开",onClick:()=>window.open(l)}))):null,m?r.createElement(b.Z,{label:"选择文件",style:$e},r.createElement(R.Z,{style:Ue,readOnly:!0,value:m.name})):null),r.createElement(A.aU,null,r.createElement("div",{className:"left"},r.createElement(C.Z,{label:"选择文件",type:C.D.PRIMARY,onClick:()=>(0,O.Z)({acceptTypes:c,onSelect:e=>a===p.sB.SQ&&!v.Zw.ACCEPT_MIMES.includes(e.type)||a===p.sB.HQ&&!v.kF.ACCEPT_MIMES.includes(e.type)||a===p.sB.AC&&!v.b5.ACCEPT_MIMES.includes(e.type)?Z.ZP.error(`不支持的文件类型, 支持的文件类型为 ${c.join(",")}`):e.size>o?Z.ZP.error(`文件过大, 最大不超过 ${o/1024/1024}MB`):u(e)}),disabled:d})),r.createElement(C.Z,{label:"取消",onClick:E,disabled:d}),r.createElement(C.Z,{label:"更新",type:C.D.PRIMARY,onClick:async()=>{if(!m)return Z.ZP.error("请选择资源文件");g(!0);try{await Oe({id:e.id,key:a,value:m}),E(),U.emit(w.MUSIC_CREATED_OR_UPDATED_OR_DELETED)}catch(e){I.Z.error(e,{description:"更新音乐资源失败",report:!0}),h.ZP.alert({title:`更新${s}失败`,content:e.message})}g(!1)},loading:d})))};var Fe=a(5233),He=a(6257),Ke=a(8079);const je=l.ZP.div`
  > .select {
    width: 100%;
  }
  > .music-list {
    > .music {
      display: flex;
      gap: 10px;
      padding: 10px 12px;
      background-color: #f6f6f6;
      border-radius: 4px;
      margin: 5px 0;
      > .name {
        flex: 1;
        min-width: 0;
        font-size: 14px;
        color: #333;
        ${T.Z}
      }
    }
  }
`,qe=e=>e?`${e.name} - ${e.singers.map((e=>e.name)).join(",")||"未知歌手"}`:"",Be=({musicList:e,onMusicSelect:t,onMusicRemove:a,disabled:n,...l})=>{const[i,s]=(0,r.useState)(0),[c,o]=(0,r.useState)([]),m=(0,r.useRef)(S()((async e=>{if(!e)return o([]);s((e=>e+1));try{const{list:t}=await(0,Ke.Z)({keyword:e.slice(0,Ke.Y),pageSize:50});o(t.map((({id:e,name:t,singers:a})=>({id:e,name:t,singers:a}))))}catch(e){I.Z.error(e,{description:"搜索音乐失败",report:!0}),Z.ZP.error(e.message)}s((e=>e-1))}),500));return r.createElement(b.Z,{...l,label:"音乐列表"},r.createElement(je,null,r.createElement(y.Z,{className:"select",value:null,onChange:t,array:c,itemRenderer:qe,onInputChange:m.current,loading:i>0,placeholder:"搜索音乐",disabled:n}),r.createElement("div",{className:"music-list"},e.map((e=>r.createElement("div",{className:"music",key:e.id},r.createElement("div",{className:"name"},qe(e)),r.createElement(E.ZP,{name:E.VG.WRONG_OUTLINE,size:18,type:E.Dy.DANGER,onClick:()=>a(e),disabled:n})))))))},Qe={padding:"50px 0"},We=()=>{const[e,t]=(0,r.useState)(null),a=()=>{t(null),setTimeout((()=>{}),0)},[n,l]=(0,r.useState)([]),[i,s]=(0,r.useState)(null),[c,o]=(0,r.useState)(!1),m=(0,r.useCallback)((async()=>{if(e){if(s(null),!e.forkFrom.length)return l([]);o(!0);try{const t=await(0,He.Z)(e.id);l(t.fork_from)}catch(e){I.Z.error(e,{description:"获取音乐二次创作来源失败",report:!0}),s(e)}o(!1)}}),[e]),[u,E]=(0,r.useState)(!1);let d;return(0,r.useEffect)((()=>{const e=e=>t(e);return U.on(w.OPEN_EDIT_FORK_FROM_DIALOG,e),()=>{U.off(w.OPEN_EDIT_FORK_FROM_DIALOG,e)}}),[]),(0,r.useEffect)((()=>{m()}),[m]),d=i?r.createElement(K.Z,{errorMessage:i.message,retry:m,style:Qe}):c?r.createElement(Fe.Z,{style:Qe}):r.createElement(Be,{musicList:n,onMusicSelect:e=>{if(!n.map((e=>e.id)).includes(e.id))return l([...n,e])},onMusicRemove:e=>l((t=>t.filter((t=>t.id!==e.id)))),disabled:u}),r.createElement(A.ZP,{open:!!e},r.createElement(A.Dx,null,e?`"${e.name}"`:"","二次创作自"),r.createElement(A.VY,null,d),r.createElement(A.aU,null,r.createElement(C.Z,{label:"取消",onClick:a,disabled:c||u}),r.createElement(C.Z,{label:"更新",type:C.D.PRIMARY,onClick:async()=>{E(!0);try{await Oe({id:e.id,key:Ie.FORK_FROM,value:n.map((e=>e.id)).join(",")}),a(),U.emit(w.MUSIC_CREATED_OR_UPDATED_OR_DELETED)}catch(e){I.Z.error(e,{description:"更新音乐二次创作来源失败",report:!0}),h.ZP.alert({title:"更新音乐二次创作来源失败",content:e.message})}E(!1)},disabled:c,loading:u})))};var Xe=a(3375);const Je={create:"创建",modify:"更改"},et={width:"100%"},tt=["音乐 ID","操作用户","类型","操作时间","详情"],at=({recordList:e})=>r.createElement(le.Z,{list:e,headers:tt,rowRenderer:e=>[e.music_id,r.createElement("span",{title:e.operate_user.id},e.operate_user.nickname),Je[e.type]||"未知类型",(0,J.Z)(e.operate_time).format("YYYY-MM-DD HH:mm"),r.createElement(E.ZP,{name:E.VG.VIEW_OUTLINE,size:22,onClick:()=>Xe.Z.emit(Xe.t.VIEW_JSON,{json:{...e,content:JSON.parse(e.content)}})})],stickyHeader:!0,style:et}),nt={style:{width:650}},rt={padding:"50px 0"},lt=l.ZP.div`
  position: relative;
  min-height: 150px;
  margin-bottom: 10px;
  table {
    width: 100%;
  }
  > .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${({isLoading:e})=>l.iv`
    table {
      opacity: ${e?"0.5":"1"};
    }
  `}
`,it=({open:e,musicId:t})=>{const a=(0,u.Z)(),{error:n,loading:l,page:s,onPageChange:c,total:o,recordList:m,retry:E}=(({open:e,musicId:t})=>{const[a,n]=(0,r.useState)(null),[l,s]=(0,r.useState)(!1),[c,o]=(0,r.useState)(0),[m,u]=(0,r.useState)([]),[E,d]=(0,r.useState)(1),p=(0,r.useCallback)((async()=>{if(e){n(null),s(!0);try{const e=await function({musicId:e,page:t=1,pageSize:a=20}={}){return i.Z.get("/api/cms/get_music_operate_record_list",{withToken:!0,params:e?{music_id:e,page:t,page_size:a}:{page:t,page_size:a}})}({musicId:t,page:E,pageSize:20});o(e.total),u(e.list)}catch(e){I.Z.error(e,{description:"获取音乐操作记录列表失败",report:!0}),n(e)}s(!1)}}),[e,t,E]);return(0,r.useEffect)((()=>{d(1),o(0),u([])}),[t]),(0,r.useEffect)((()=>{p()}),[p]),{error:a,loading:l,page:E,onPageChange:d,total:c,recordList:m,retry:p}})({open:e,musicId:t});let d;return d=n?r.createElement(K.Z,{errorMessage:n.message,retry:E,style:rt}):l||m.length?r.createElement(r.Fragment,null,r.createElement(lt,{isLoading:l},r.createElement(at,{recordList:m}),l?r.createElement(ne.Z,{className:"loader"}):null),r.createElement(_e.Z,{currentPage:s,pageCount:Math.ceil(o/20),onPageChange:c})):r.createElement(re.Z,{description:"暂无操作记录",style:rt}),r.createElement(A.ZP,{open:e,bodyProps:nt},r.createElement(A.Dx,null,"操作记录"),r.createElement(A.VY,null,d),r.createElement(A.aU,null,r.createElement(C.Z,{label:"关闭",onClick:()=>a.push({query:{[p.AE.OPERATE_RECORD_DIALOG_OPEN]:""}})})))},st=l.ZP.div`
  ${m.i};
  display: flex;
`,ct=()=>{const e=(0,o.Z)();let t=e[p.AE.SEARCH_KEY];c.includes(t)||(t=n.COMPOSITE);const a=e[p.AE.SEARCH_VALUE]||"",l=e[p.AE.PAGE],i=l?+l:1,s=!!e[p.AE.CREATE_DIALOG_OPEN],m=!!e[p.AE.OPERATE_RECORD_DIALOG_OPEN],u=e[p.AE.OPERATE_RECORD_DIALOG_MUSIC_ID];return r.createElement(st,null,r.createElement(_,null),r.createElement(he,{page:i,searchKey:t,searchValue:a}),r.createElement(H,{open:s}),r.createElement(Re,null),r.createElement(xe,null),r.createElement(we,null),r.createElement(Ge,null),r.createElement(Ye,null),r.createElement(We,null),r.createElement(it,{open:m,musicId:u}))}},2625:(e,t,a)=>{"use strict";a.d(t,{xP:()=>n,mf:()=>l,dQ:()=>i,nP:()=>s,ZP:()=>c});var n,r=a(6196);!function(e){e.COMPOSITE="composite",e.ID="id",e.NAME="name",e.ALIAS="alias"}(n||(n={}));const l={[n.COMPOSITE]:"综合",[n.ID]:"ID",[n.NAME]:"名字",[n.ALIAS]:"别名"},i=Object.keys(l),s=50,c=async function({page:e=1,pageSize:t=30,searchKey:a,searchValue:n}){const l=await r.Z.get("/api/cms/get_figure_list",{withToken:!0,params:{page:e,page_size:t,search_key:a,search_value:n}});return{total:l.total,list:l.list.map((({id:e,name:t,alias:a,avatar:n,create_time:r})=>({id:e,name:t,alias:a,avatar:n,createTime:new Date(r)})))}}},6257:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(6196);const r=function(e){return n.Z.get("/api/get_music_detail",{withToken:!0,params:{id:e}})}},4326:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(6196);const r=function({musicId:e,defer:t}){return n.Z.get("/api/get_music_lrc",{params:{music_id:e},withToken:!0,defer:t})}},8079:(e,t,a)=>{"use strict";a.d(t,{Y:()=>r,Z:()=>l});var n=a(6196);const r=50,l=async function({keyword:e,page:t=1,pageSize:a=30}){return n.Z.get("/api/search_music",{params:{keyword:e,page:t,page_size:a},withToken:!0})}},7003:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a(4910).iv`
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
  text-overflow: ellipsis;
`},6053:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=e=>(...t)=>{(!document.activeElement||"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName)&&e(...t)}},1064:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=e=>{const t={},a=e.replace(/\?/g,"");return a&&a.split("&").forEach((e=>{const[a,n]=e.split("=");t[a]=decodeURIComponent(n)})),t}},8689:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(5977),r=a(687);const l=()=>{const e=(0,n.TH)(),t=(0,n.k6)(),a=(0,r.Z)();return{push:({pathname:n=e.pathname,query:r})=>{const l={...a,...r};return t.push(`${n}?${Object.keys(l).map((e=>`${e}=${encodeURIComponent(l[e]||"")}`)).join("&")}`)}}}},687:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(7294),r=a(5977),l=a(1064);const i=()=>{const{search:e}=(0,r.TH)();return(0,n.useMemo)((()=>(0,l.Z)(e)),[e])}},8794:(e,t,a)=>{"use strict";e.exports=a.p+"30eb336bb42dece28fd8.jpeg"}}]);
//# sourceMappingURL=cms_music_page_2f614feb2aabf05cbfa8.js.map