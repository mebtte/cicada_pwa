"use strict";(self.webpackChunkcicada_pwa=self.webpackChunkcicada_pwa||[]).push([[877],{6906:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(4910),r=a(8913),i=a(5051),c=a(5985);const o=l.ZP.div`
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
`,s=n.memo((({description:e="暂时没有数据",...t})=>{const a=(0,n.useMemo)((()=>r.Z.emptyImageList[(0,i.Z)(0,r.Z.emptyImageList.length)]),[]);return n.createElement(o,{...t},n.createElement(c.Z,{className:"placeholder",src:a,size:180,alt:"placeholder"}),n.createElement("div",{className:"description"},e))}))},4508:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(4910),r=a(5455),i=a(6885),c=a(2798),o=a(7877);const s=20,p=l.ZP.div`
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
`,m=(0,l.ZP)(i.Z)`
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
`,d=({currentPage:e,pageCount:t,onPageChange:a,...l})=>{const[i,d]=(0,n.useState)(""),E=()=>{let e=+i;!e||e<=1?e=1:e>=t&&(e=t),d(e.toString()),a(e)};return n.createElement(p,{...l},e>2&&n.createElement(r.Z,{className:"page",label:"1",size:s,onClick:()=>a(1)}),e>=4?4===e?n.createElement(r.Z,{className:"page",label:"2",size:s,onClick:()=>a(2)}):n.createElement("div",{className:"ellipsis page"},"···"):null,e-1>=1&&n.createElement(r.Z,{className:"page",label:e-1,size:s,onClick:()=>a(e-1)}),n.createElement(r.Z,{className:"page",label:e,type:r.D.PRIMARY,size:s}),e+1<=t&&n.createElement(r.Z,{className:"page",label:e+1,size:s,onClick:()=>a(e+1)}),t-e>=3?t-e==3?n.createElement(r.Z,{className:"page",label:t-1,size:s,onClick:()=>a(t-1)}):n.createElement("div",{className:"ellipsis page"},"···"):null,t>e+1&&n.createElement(r.Z,{className:"page",label:t,size:s,onClick:()=>a(t)}),t>3&&n.createElement(n.Fragment,null,n.createElement("div",{className:"separator"}),n.createElement(m,{type:"number",value:i,onChange:e=>d(e.target.value),onKeyDown:e=>{"Enter"===e.key&&E()}}),n.createElement(o.Z,{title:"跳转到页面"},n.createElement(c.ZP,{name:c.VG.GOTO_OUTLINE,size:s,onClick:E}))))}},9987:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(4910);const r=l.ZP.table`
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
  ${({stickyHeader:e})=>l.iv`
    th {
      position: ${e?"sticky":"static"};
    }
  `}
`,i=function({list:e,headers:t,rowRenderer:a,stickyHeader:l=!1,...i}){return n.createElement(r,{...i,stickyHeader:l},n.createElement("thead",null,n.createElement("tr",null,t.map(((e,t)=>n.createElement("th",{key:t},e))))),n.createElement("tbody",null,e.map(((e,t)=>n.createElement("tr",{key:t},a(e).map(((e,t)=>n.createElement("td",{key:t},e))))))))}},2526:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var n,l=a(7294),r=a(4910),i=a(687),c=a(464);!function(e){e.OPERATE_RECORD_DIALOG_OPEN="operate_record_dialog_open",e.OPERATE_RECORD_DIALOG_KEY="operate_record_dialog_key"}(n||(n={}));var o=a(6196);var s,p=a(7382),m=a(4839),d=a(1894),E=a(6885),u=a(511),g=a(5455),_=a(3584),y=a(6729),Z=a.n(y);!function(e){e.PUBLIC_CONFIG_UPDATED="public_config_updated",e.OPEN_UPDATE_DIALOG="open_update_dialog"}(s||(s={}));const h=new(Z()),f={marginBottom:20},b={width:"100%"},k={...b,height:100,resize:"vertical"},P=l.memo((()=>{const[e,t]=(0,l.useState)(null),a=()=>t(null),[n,r]=(0,l.useState)(""),[i,c]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=e=>{t(e),r(e.value)};return h.on(s.OPEN_UPDATE_DIALOG,e),()=>{h.off(s.OPEN_UPDATE_DIALOG,e)}}),[]),l.createElement(_.ZP,{open:!!e},l.createElement(_.Dx,null,"更新公共配置"),l.createElement(_.VY,null,l.createElement(d.Z,{label:"键",style:f},l.createElement(E.Z,{value:e?.key||"",style:b,disabled:!0})),l.createElement(d.Z,{label:"描述",style:f},l.createElement(E.Z,{value:e?.description||"",style:b,disabled:!0})),l.createElement(d.Z,{label:"值",style:f},l.createElement(u.Z,{value:n,onChange:e=>r(e.target.value),style:k,disabled:i}))),l.createElement(_.aU,null,l.createElement(g.Z,{label:"取消",onClick:a,disabled:i}),l.createElement(g.Z,{label:"更新",type:g.D.PRIMARY,onClick:async()=>{if(e.value===n)return a();c(!0);try{await function({key:e,value:t}){return o.Z.post("/api/cms/update_public_config",{withToken:!0,data:{key:e,value:t}})}({key:e.key,value:n}),a(),h.emit(s.PUBLIC_CONFIG_UPDATED)}catch(e){p.Z.error(e,{description:"更新公共配置失败",report:!0}),m.ZP.error(e.message)}c(!1)},loading:i})))}));var O=a(8689),v=a(2798),C=a(7877);const D=r.ZP.div`
  padding: 20px 0;
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,x=()=>{const e=(0,O.Z)();return l.createElement(D,null,l.createElement(C.Z,{title:"操作记录",placement:C.u.RIGHT},l.createElement(v.ZP,{name:v.VG.HISTORY_OUTLINE,onClick:()=>e.push({query:{[n.OPERATE_RECORD_DIALOG_OPEN]:"1",[n.OPERATE_RECORD_DIALOG_KEY]:""}})})))};var R=a(1579),I=a(4508),L=a(6906),A=a(7022);var N=a(921),w=a(9987);const T={width:"100%"},G=["键","值","操作用户","操作时间"],z=({recordList:e})=>l.createElement(w.Z,{list:e,headers:G,rowRenderer:e=>[e.key,e.value,l.createElement("span",{title:`ID:${e.operate_user.id}`},e.operate_user.nickname),(0,N.Z)(e.operate_time).format("YYYY-MM-DD HH:mm")],stickyHeader:!0,style:T}),U={style:{width:650}},S={padding:"50px 0"},$=r.ZP.div`
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
  ${({isLoading:e})=>r.iv`
    table {
      opacity: ${e?"0.5":"1"};
    }
  `}
`,Y=l.memo((({open:e,key:t})=>{const a=(0,O.Z)(),{error:r,retry:i,loading:c,recordList:s,page:m,onPageChange:d,total:E}=(({open:e,key:t})=>{const[a,n]=(0,l.useState)(null),[r,i]=(0,l.useState)(!1),[c,s]=(0,l.useState)(0),[m,d]=(0,l.useState)([]),[E,u]=(0,l.useState)(1),g=(0,l.useCallback)((async()=>{if(e){n(null),i(!0);try{const e=await function({key:e,page:t,pageSize:a}){return o.Z.get("/api/cms/get_public_config_operate_record_list",{withToken:!0,params:{key:e,page:t,page_size:a}})}({key:t,page:E,pageSize:20});s(e.total),d(e.list)}catch(e){p.Z.error(e,{description:"获取公共配置操作记录列表失败",report:!0}),n(e)}i(!1)}}),[e,t,E]);return(0,l.useEffect)((()=>{u(1),s(0),d([])}),[t]),(0,l.useEffect)((()=>{g()}),[g]),{error:a,loading:r,page:E,onPageChange:u,total:c,recordList:m,retry:g}})({open:e,key:t});let u;return u=r?l.createElement(A.Z,{errorMessage:r.message,retry:i,style:S}):c||s.length?l.createElement(l.Fragment,null,l.createElement($,{isLoading:c},l.createElement(z,{recordList:s}),c?l.createElement(R.Z,{className:"loader"}):null),l.createElement(I.Z,{currentPage:m,pageCount:Math.ceil(E/20),onPageChange:d})):l.createElement(L.Z,{description:"暂无操作记录",style:S}),l.createElement(_.ZP,{open:e,bodyProps:U},l.createElement(_.Dx,null,"操作记录"),l.createElement(_.VY,null,u),l.createElement(_.aU,null,l.createElement(g.Z,{label:"关闭",onClick:()=>a.push({query:{[n.OPERATE_RECORD_DIALOG_OPEN]:""}})})))})),H=r.iv`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;var M=a(5733);const F={flex:1,minWidth:0},V=r.ZP.div`
  flex: 1;
  min-width: 0;
  position: relative;

  > .table {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    box-sizing: border-box;
    padding: 20px 20px 20px 0;

    overflow: auto;
    ${M.Z}

    table {
      width: 100%;
    }
  }

  > .loader {
    ${H}
  }

  ${({isLoading:e})=>r.iv`
    > .table {
      opacity: ${e?.5:1};
    }
  `}
`,B=r.ZP.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,K=["键","描述","值","操作"],j=()=>{const e=(0,O.Z)(),{error:t,retry:a,loading:r,publicConfigList:i}=(()=>{const[e,t]=(0,l.useState)(null),[a,n]=(0,l.useState)(!1),[r,i]=(0,l.useState)([]),c=(0,l.useCallback)((async()=>{n(!0),t(null);try{const e=await o.Z.get("/api/cms/get_public_config_list",{withToken:!0});i(e)}catch(e){t(e)}n(!1)}),[]);return(0,l.useEffect)((()=>(c(),h.on(s.PUBLIC_CONFIG_UPDATED,c),()=>{h.off(s.PUBLIC_CONFIG_UPDATED,c)})),[c]),{error:e,loading:a,publicConfigList:r,retry:c}})();return t?l.createElement(A.Z,{errorMessage:new Error("test").message,retry:a,style:F}):l.createElement(V,{isLoading:r},l.createElement("div",{className:"table"},l.createElement(w.Z,{stickyHeader:!0,list:i,headers:K,rowRenderer:t=>[t.key,t.description,t.value,l.createElement(B,null,l.createElement(v.ZP,{name:v.VG.EDIT_OUTLINE,size:22,onClick:()=>h.emit(s.OPEN_UPDATE_DIALOG,t)}),l.createElement(v.ZP,{name:v.VG.HISTORY_OUTLINE,size:22,onClick:()=>e.push({query:{[n.OPERATE_RECORD_DIALOG_OPEN]:"1",[n.OPERATE_RECORD_DIALOG_KEY]:t.key}})}))]})),r?l.createElement(R.Z,{className:"loader"}):null)},q=r.ZP.div`
  ${c.i};
  display: flex;
`,W=()=>{const e=(0,i.Z)(),t=!!e[n.OPERATE_RECORD_DIALOG_OPEN],a=e[n.OPERATE_RECORD_DIALOG_KEY];return l.createElement(q,null,l.createElement(x,null),l.createElement(j,null),l.createElement(P,null),l.createElement(Y,{open:t,key:a}))}},1064:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>{const t={},a=e.replace(/\?/g,"");return a&&a.split("&").forEach((e=>{const[a,n]=e.split("=");t[a]=decodeURIComponent(n)})),t}},8689:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(5977),l=a(687);const r=()=>{const e=(0,n.TH)(),t=(0,n.k6)(),a=(0,l.Z)();return{push:({pathname:n=e.pathname,query:l})=>{const r={...a,...l};return t.push(`${n}?${Object.keys(r).map((e=>`${e}=${encodeURIComponent(r[e]||"")}`)).join("&")}`)}}}},687:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(5977),r=a(1064);const i=()=>{const{search:e}=(0,l.TH)();return(0,n.useMemo)((()=>(0,r.Z)(e)),[e])}}}]);
//# sourceMappingURL=cms_public_config_page_145f32339a19d3c0be9b.js.map