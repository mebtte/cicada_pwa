"use strict";(self.webpackChunkcicada_pwa=self.webpackChunkcicada_pwa||[]).push([[969],{8524:(e,t,a)=>{var n;a.d(t,{Z:()=>u}),function(e){e.CIRCLE="circle",e.SQUARE="square"}(n||(n={}));var r=a(7294),l=a(4910),i=a(6661),o=a(8794),c=a(7382);const s=l.ZP.img`
  box-sizing: border-box;
  aspect-ratio: 1;
  object-fit: cover;
`,E={[n.CIRCLE]:{style:{borderRadius:"50%"}},[n.SQUARE]:{style:{borderRadius:4}}},u=r.forwardRef((({src:e,shape:t=n.SQUARE,size:a=64,alt:l,...u},m)=>{const p=(0,r.useRef)(null),[d,g]=(0,r.useState)(o);return(0,r.useLayoutEffect)((()=>{if(e&&d!==e){let t=!1;const a=new IntersectionObserver((([a])=>{a.isIntersecting&&(0,i.Z)(e).then((()=>{t||g(e)})).catch((e=>c.Z.error(e,{description:"加载图片失败",report:!0})))}));return a.observe(p.current),()=>(t=!0,a.disconnect())}}),[d,e]),(0,r.useImperativeHandle)(m,(()=>p.current)),r.createElement(s,{...u,"data-src":e,src:d,style:{width:a,...E[t].style,...u.style},ref:p,alt:l})}))},6906:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(4910),l=a(8913),i=a(5051),o=a(5985);const c=r.ZP.div`
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
`,s=n.memo((({description:e="暂时没有数据",...t})=>{const a=(0,n.useMemo)((()=>l.Z.emptyImageList[(0,i.Z)(0,l.Z.emptyImageList.length)]),[]);return n.createElement(c,{...t},n.createElement(o.Z,{className:"placeholder",src:a,size:180,alt:"placeholder"}),n.createElement("div",{className:"description"},e))}))},4508:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),r=a(4910),l=a(5455),i=a(6885),o=a(2798),c=a(7877);const s=20,E=r.ZP.div`
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
`,u=(0,r.ZP)(i.Z)`
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
`,m=({currentPage:e,pageCount:t,onPageChange:a,...r})=>{const[i,m]=(0,n.useState)(""),p=()=>{let e=+i;!e||e<=1?e=1:e>=t&&(e=t),m(e.toString()),a(e)};return n.createElement(E,{...r},e>2&&n.createElement(l.Z,{className:"page",label:"1",size:s,onClick:()=>a(1)}),e>=4?4===e?n.createElement(l.Z,{className:"page",label:"2",size:s,onClick:()=>a(2)}):n.createElement("div",{className:"ellipsis page"},"···"):null,e-1>=1&&n.createElement(l.Z,{className:"page",label:e-1,size:s,onClick:()=>a(e-1)}),n.createElement(l.Z,{className:"page",label:e,type:l.D.PRIMARY,size:s}),e+1<=t&&n.createElement(l.Z,{className:"page",label:e+1,size:s,onClick:()=>a(e+1)}),t-e>=3?t-e==3?n.createElement(l.Z,{className:"page",label:t-1,size:s,onClick:()=>a(t-1)}):n.createElement("div",{className:"ellipsis page"},"···"):null,t>e+1&&n.createElement(l.Z,{className:"page",label:t,size:s,onClick:()=>a(t)}),t>3&&n.createElement(n.Fragment,null,n.createElement("div",{className:"separator"}),n.createElement(u,{type:"number",value:i,onChange:e=>m(e.target.value),onKeyDown:e=>{"Enter"===e.key&&p()}}),n.createElement(c.Z,{title:"跳转到页面"},n.createElement(o.ZP,{name:o.VG.GOTO_OUTLINE,size:s,onClick:p}))))}},9762:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(4910),l=a(5733),i=a(6885),o=a(1579),c=a(2570);const s=r.ZP.div`
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
`,E=r.ZP.div`
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
`,u=function({value:e,onChange:t,array:a,itemRenderer:r,customInputDisabled:l=!1,onInputChange:u,loading:m=!1,placeholder:p,disabled:d,...g}){const[_,h]=(0,n.useState)(""),[f,A]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{u&&u(_)}),[u,_]),n.createElement(s,{...g,arrayVisible:f},n.createElement("div",{className:"input-box"},n.createElement(i.Z,{className:"input",readOnly:l,value:f?_:null!==e?r(e,""):"",onChange:e=>h(e.target.value),onFocus:()=>A(!0),onBlur:()=>window.setTimeout((()=>A(!1)),350),placeholder:p,disabled:d}),f?null:n.createElement(c.Z,{className:"arrow",name:c.V.DOWN_OUTLINE,size:10})),n.createElement("div",{className:"array"},m?n.createElement("div",{className:"loading"},n.createElement(o.Z,null)):n.createElement("div",{className:"list"},a.map(((a,l)=>{const i=r(a,_);return i?n.createElement(E,{key:l,active:e===a,onClick:()=>t(a)},i):null})))))}},9987:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(4910);const l=r.ZP.table`
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
`,i=function({list:e,headers:t,rowRenderer:a,stickyHeader:r=!1,...i}){return n.createElement(l,{...i,stickyHeader:r},n.createElement("thead",null,n.createElement("tr",null,t.map(((e,t)=>n.createElement("th",{key:t},e))))),n.createElement("tbody",null,e.map(((e,t)=>n.createElement("tr",{key:t},a(e).map(((e,t)=>n.createElement("td",{key:t},e))))))))}},1619:(e,t,a)=>{var n;a.d(t,{A:()=>n,I:()=>r}),function(e){e.PAGE="page",e.SEARCH_KEY="search_key",e.SEARCH_VALUE="search_value",e.CREATE_DIALOG_OPEN="create_dialog_open",e.OPERATE_RECORD_DIALOG_OPEN="operate_record_dialog_open",e.OPERATE_RECORD_DIALOG_SEARCH_FIGURE_ID="operate_record_dialog_search_figure_id"}(n||(n={}));const r=20},400:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_e});var n,r=a(7294),l=a(4910),i=a(2625),o=a(687),c=a(464),s=a(7022),E=a(7382),u=a(1619),m=a(6729),p=a.n(m);!function(e){e.FIGURE_CREATED_OR_UPDATED_OR_DELETED="figure_created_or_updated_or_deleted",e.OPEN_EDIT_FIGURE_DIALOG="open_edit_figure_dialog",e.OPEN_EDIT_FIGURE_AVATAR_DIALOG="open_edit_figure_avatar_dialog"}(n||(n={}));const d=new(p());var g=a(3088),_=a(6053),h=a(9762),f=a(8689),A=a(6885),y=a(2798);const R=l.ZP.div`
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 5px;
  > .key {
    width: 120px;
  }
  > .value {
    flex: 1;
    min-width: 0;
  }
`,Z=e=>e?i.mf[e]:"",I=({searchKey:e,searchValue:t})=>{const a=(0,f.Z)(),n=(0,r.useRef)(null),[l,o]=(0,r.useState)(t),c=()=>a.push({query:{[u.A.PAGE]:"1",[u.A.SEARCH_VALUE]:l}});return(0,r.useEffect)((()=>{const e=(0,_.Z)((e=>{if(!("f"!==e.key||g.jm&&!e.metaKey||g.qB&&!e.ctrlKey))return e.preventDefault(),n.current.focus()}));return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[]),r.createElement(R,null,r.createElement(h.Z,{className:"key",value:e,onChange:e=>a.push({query:{[u.A.PAGE]:"1",[u.A.SEARCH_KEY]:e}}),onFocus:e=>e.target.select(),array:i.dQ,itemRenderer:Z,customInputDisabled:!0}),r.createElement(A.Z,{className:"value",value:l,onChange:e=>o(e.target.value),onKeyDown:e=>{"Enter"===e.key&&c()},ref:n,maxLength:i.nP}),r.createElement(y.ZP,{name:y.VG.SEARCH_OUTLINE,onClick:c}))};var v=a(4508);const D=({page:e,total:t})=>{const a=(0,f.Z)();return r.createElement(v.Z,{currentPage:e,pageCount:Math.ceil(t/u.I),onPageChange:e=>a.push({query:{[u.A.PAGE]:e.toString()}})})};var O=a(921),P=a(6906),b=a(1579),x=a(9987),C=a(5733),T=a(8524);const k=l.ZP.div`
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
    ${C.Z}
    > .table {
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
`,L=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-color-secondary);
`,N={position:"absolute",top:0,left:0,width:"100%",height:"100%"},w=["ID","名字","头像","别名","创建时间","操作"],G=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 3px;
`,S=({figureList:e,loading:t,page:a,searchKey:l,searchValue:i})=>{const o=(0,f.Z)(),c=(0,r.useRef)(null);return(0,r.useEffect)((()=>{c.current?.scrollTo({top:0,behavior:"smooth"})}),[a,l,i]),r.createElement(k,{isLoading:t},t||e.length?r.createElement("div",{className:"content",ref:c},r.createElement(x.Z,{className:"table",list:e,headers:w,rowRenderer:e=>[e.id,e.name,r.createElement(L,null,e.avatar?r.createElement(T.Z,{src:e.avatar,alt:"avatar"}):"-",r.createElement(y.ZP,{name:y.VG.EDIT_OUTLINE,size:22,onClick:()=>d.emit(n.OPEN_EDIT_FIGURE_AVATAR_DIALOG,e)})),e.alias||"-",(0,O.Z)(e.createTime).format("YYYY-MM-DD HH:mm"),r.createElement(G,null,r.createElement(y.ZP,{name:y.VG.EDIT_OUTLINE,size:22,onClick:()=>d.emit(n.OPEN_EDIT_FIGURE_DIALOG,e)}),r.createElement(y.ZP,{name:y.VG.HISTORY_OUTLINE,size:22,onClick:()=>o.push({query:{[u.A.OPERATE_RECORD_DIALOG_OPEN]:"1",[u.A.OPERATE_RECORD_DIALOG_SEARCH_FIGURE_ID]:e.id}})}))],stickyHeader:!0})):r.createElement(P.Z,{style:N}),t&&r.createElement("div",{className:"loading"},r.createElement(b.Z,null)))},U=l.ZP.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  margin: 20px 20px 20px 0;
  gap: 10px;
`,V={flex:1,minHeight:0},z=({searchKey:e,searchValue:t,page:a})=>{const{error:l,loading:o,total:c,retry:m,figureList:p}=(({searchKey:e,searchValue:t,page:a})=>{const[l,o]=(0,r.useState)(null),[c,s]=(0,r.useState)(!1),[m,p]=(0,r.useState)([]),[g,_]=(0,r.useState)(0),h=(0,r.useCallback)((async()=>{o(null),s(!0);try{const{total:n,list:r}=await(0,i.ZP)({page:a,pageSize:u.I,searchKey:e,searchValue:t});_(n),p(r)}catch(e){E.Z.error(e,{description:"获取角色列表失败",report:!0}),o(e)}s(!1)}),[e,t,a]);return(0,r.useEffect)((()=>(h(),d.on(n.FIGURE_CREATED_OR_UPDATED_OR_DELETED,h),()=>{d.off(n.FIGURE_CREATED_OR_UPDATED_OR_DELETED,h)})),[h]),{error:l,loading:c,page:a,total:g,figureList:m,retry:h}})({searchKey:e,searchValue:t,page:a});return r.createElement(U,null,r.createElement(I,{searchKey:e,searchValue:t}),l?r.createElement(s.Z,{errorMessage:l.message,retry:m,style:V}):r.createElement(S,{figureList:p,loading:o,page:a,searchKey:e,searchValue:t}),r.createElement(D,{page:a,total:c}))};var H=a(7877);const $=l.ZP.div`
  padding: 20px 0;
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,F=()=>{const e=(0,f.Z)();return r.createElement($,null,r.createElement(H.Z,{title:"创建角色",placement:H.u.RIGHT},r.createElement(y.ZP,{name:y.VG.PLUS_OUTLINE,onClick:()=>e.push({query:{[u.A.CREATE_DIALOG_OPEN]:"1"}})})),r.createElement(H.Z,{title:"操作记录",placement:H.u.RIGHT},r.createElement(y.ZP,{name:y.VG.HISTORY_OUTLINE,onClick:()=>e.push({query:{[u.A.OPERATE_RECORD_DIALOG_OPEN]:"1",[u.A.OPERATE_RECORD_DIALOG_SEARCH_FIGURE_ID]:""}})})))};var M=a(6196);var Y=a(2983),K=a(4839);var q=a(5455),j=a(1894),Q=a(3584);const B={width:"100%"},W=r.memo((({open:e})=>{const t=(0,f.Z)(),[a,l]=(0,r.useState)(""),i=()=>{t.push({query:{[u.A.CREATE_DIALOG_OPEN]:""}}),setTimeout((()=>l("")),1e3)},[o,c]=(0,r.useState)(!1);return r.createElement(Q.ZP,{open:e||o},r.createElement(Q.Dx,null,"创建角色"),r.createElement(Q.VY,null,r.createElement(j.Z,{label:"角色名字"},r.createElement(A.Z,{value:a,onChange:e=>l(e.target.value),placeholder:"角色名字不超过 255 个字符",maxLength:255,style:B}))),r.createElement(Q.aU,null,r.createElement(q.Z,{label:"取消",onClick:i,disabled:o}),r.createElement(q.Z,{label:"创建",type:q.D.PRIMARY,onClick:async()=>{if(!a)return K.ZP.error("请输入角色名字");c(!0);try{await function(e){return M.Z.post("/api/cms/create_figure",{data:{name:e},withToken:!0})}(a),K.ZP.success(`角色"${a}"已创建`),i(),d.emit(n.FIGURE_CREATED_OR_UPDATED_OR_DELETED)}catch(e){E.Z.error(e,{description:"创建角色失败"}),Y.ZP.alert({title:"创建角色失败",content:e.message})}c(!1)},loading:o})))}));var J;!function(e){e.NAME="name",e.ALIAS="alias",e.AVATAR="avatar"}(J||(J={}));const X=function({id:e,key:t,value:a}){const n=new FormData;return n.append("id",e),n.append("key",t),n.append("value",a),M.Z.post("/api/cms/update_figure",{data:n,withToken:!0})};var ee=a(4698);const te={width:1e3,height:1e3},ae=r.memo((()=>{const[e,t]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=e=>t(e);return d.on(n.OPEN_EDIT_FIGURE_AVATAR_DIALOG,e),()=>{d.off(n.OPEN_EDIT_FIGURE_AVATAR_DIALOG,e)}}),[]),r.createElement(ee.Z,{open:!!e,onClose:()=>t(null),imageSize:te,onUpdate:async t=>{await X({id:e.id,key:J.AVATAR,value:t}),d.emit(n.FIGURE_CREATED_OR_UPDATED_OR_DELETED)}})})),ne={marginBottom:"20px"},re={width:"100%"},le=r.memo((()=>{const[e,t]=(0,r.useState)(null),a=()=>t(null),[l,i]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[s,u]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{t(e),i(e.name),c(e.alias)};return d.on(n.OPEN_EDIT_FIGURE_DIALOG,e),()=>{d.off(n.OPEN_EDIT_FIGURE_DIALOG,e)}}),[]),r.createElement(Q.ZP,{open:!!e},r.createElement(Q.Dx,null,e?`编辑"${e.name}"资料`:"编辑角色资料"),r.createElement(Q.VY,null,r.createElement(j.Z,{label:"名字",style:ne},r.createElement(A.Z,{value:l,onChange:e=>i(e.target.value),placeholder:"名字不超过 255 个字符",maxLength:255,disabled:s,style:re})),r.createElement(j.Z,{label:"别名",style:ne},r.createElement(A.Z,{value:o,onChange:e=>c(e.target.value),placeholder:"别名不超过 255 个字符",maxLength:255,disabled:s,style:re}))),r.createElement(Q.aU,null,r.createElement(q.Z,{label:"取消",onClick:a,disabled:s}),r.createElement(q.Z,{label:"更新",type:q.D.PRIMARY,onClick:async()=>{const t=l.trim();if(!t)return K.ZP.error("请输入角色名字");u(!0);try{let r=!1;e.name!==t&&(r=!0,await X({id:e.id,key:J.NAME,value:t}));const i=o.trim();e.alias!==i&&(r=!0,await X({id:e.id,key:J.ALIAS,value:i})),r&&(K.ZP.success(`角色"${l}"已更新`),d.emit(n.FIGURE_CREATED_OR_UPDATED_OR_DELETED)),a()}catch(e){E.Z.error(e,{description:"更新角色失败",report:!0}),Y.ZP.alert({title:"更新角色失败",content:e.message})}u(!1)},loading:s})))}));var ie=a(3375);const oe={create:"创建",modify:"更改"},ce={width:"100%"},se=["角色 ID","操作用户","类型","操作时间","详情"],Ee=({recordList:e})=>r.createElement(x.Z,{list:e,headers:se,rowRenderer:e=>[e.figure_id,r.createElement("span",{title:e.operate_user.id},e.operate_user.nickname),oe[e.type]||"未知类型",(0,O.Z)(e.operate_time).format("YYYY-MM-DD HH:mm"),r.createElement(y.ZP,{name:y.VG.VIEW_OUTLINE,size:22,onClick:()=>ie.Z.emit(ie.t.VIEW_JSON,{json:{...e,content:e.content?JSON.parse(e.content):null}})})],stickyHeader:!0,style:ce}),ue={style:{width:650}},me={padding:"50px 0"},pe=l.ZP.div`
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
`,de=({open:e,searchFigureId:t})=>{const a=(0,f.Z)(),{error:n,loading:l,page:i,onPageChange:o,total:c,recordList:m,retry:p}=(({open:e,searchFigureId:t})=>{const[a,n]=(0,r.useState)(null),[l,i]=(0,r.useState)(!1),[o,c]=(0,r.useState)(0),[s,u]=(0,r.useState)([]),[m,p]=(0,r.useState)(1),d=(0,r.useCallback)((async()=>{if(e){n(null),i(!0);try{const e=await function({figureId:e,page:t=1,pageSize:a=20}={}){return M.Z.get("/api/cms/get_figure_operate_record_list",{withToken:!0,params:{figure_id:e,page:t,page_size:a}})}({figureId:t,page:m,pageSize:20});c(e.total),u(e.list)}catch(e){E.Z.error(e,{description:"获取角色操作记录列表失败",report:!0}),n(e)}i(!1)}}),[e,t,m]);return(0,r.useEffect)((()=>{p(1),c(0),u([])}),[t]),(0,r.useEffect)((()=>{d()}),[d]),{error:a,loading:l,page:m,onPageChange:p,total:o,recordList:s,retry:d}})({open:e,searchFigureId:t});let d;return d=n?r.createElement(s.Z,{errorMessage:n.message,retry:p,style:me}):l||m.length?r.createElement(r.Fragment,null,r.createElement(pe,{isLoading:l},r.createElement(Ee,{recordList:m}),l?r.createElement(b.Z,{className:"loader"}):null),r.createElement(v.Z,{currentPage:i,pageCount:Math.ceil(c/20),onPageChange:o})):r.createElement(P.Z,{description:"暂无操作记录",style:me}),r.createElement(Q.ZP,{open:e,bodyProps:ue},r.createElement(Q.Dx,null,"操作记录"),r.createElement(Q.VY,null,d),r.createElement(Q.aU,null,r.createElement(q.Z,{label:"关闭",onClick:()=>a.push({query:{[u.A.OPERATE_RECORD_DIALOG_OPEN]:""}})})))},ge=l.ZP.div`
  ${c.i};
  display: flex;
`,_e=()=>{const e=(0,o.Z)();let t=e[u.A.SEARCH_KEY];i.dQ.includes(t)||(t=i.xP.COMPOSITE);const a=e[u.A.SEARCH_VALUE]||"",n=e[u.A.PAGE],l=n?+n:1,c=!!e[u.A.CREATE_DIALOG_OPEN],s=!!e[u.A.OPERATE_RECORD_DIALOG_OPEN],E=e[u.A.OPERATE_RECORD_DIALOG_SEARCH_FIGURE_ID];return r.createElement(ge,null,r.createElement(F,null),r.createElement(z,{searchKey:t,searchValue:a,page:l}),r.createElement(W,{open:c}),r.createElement(ae,null),r.createElement(le,null),r.createElement(de,{open:s,searchFigureId:E}))}},2625:(e,t,a)=>{a.d(t,{xP:()=>n,mf:()=>l,dQ:()=>i,nP:()=>o,ZP:()=>c});var n,r=a(6196);!function(e){e.COMPOSITE="composite",e.ID="id",e.NAME="name",e.ALIAS="alias"}(n||(n={}));const l={[n.COMPOSITE]:"综合",[n.ID]:"ID",[n.NAME]:"名字",[n.ALIAS]:"别名"},i=Object.keys(l),o=50,c=async function({page:e=1,pageSize:t=30,searchKey:a,searchValue:n}){const l=await r.Z.get("/api/cms/get_figure_list",{withToken:!0,params:{page:e,page_size:t,search_key:a,search_value:n}});return{total:l.total,list:l.list.map((({id:e,name:t,alias:a,avatar:n,create_time:r})=>({id:e,name:t,alias:a,avatar:n,createTime:new Date(r)})))}}},6053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>(...t)=>{(!document.activeElement||"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName)&&e(...t)}},1064:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>{const t={},a=e.replace(/\?/g,"");return a&&a.split("&").forEach((e=>{const[a,n]=e.split("=");t[a]=decodeURIComponent(n)})),t}},8689:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(5977),r=a(687);const l=()=>{const e=(0,n.TH)(),t=(0,n.k6)(),a=(0,r.Z)();return{push:({pathname:n=e.pathname,query:r})=>{const l={...a,...r};return t.push(`${n}?${Object.keys(l).map((e=>`${e}=${encodeURIComponent(l[e]||"")}`)).join("&")}`)}}}},687:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(5977),l=a(1064);const i=()=>{const{search:e}=(0,r.TH)();return(0,n.useMemo)((()=>(0,l.Z)(e)),[e])}},8794:(e,t,a)=>{e.exports=a.p+"30eb336bb42dece28fd8.jpeg"}}]);
//# sourceMappingURL=cms_figure_page_374fcf6e0d97c49f2625.js.map