"use strict";(self.webpackChunkcicada_pwa=self.webpackChunkcicada_pwa||[]).push([[742],{5869:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(7294),r=a(4910),l=a(5733),o=a(3088),c=a(7022),s=a(1579),i=a(464),E=a(6196);var _=a(8307),p=a(8689),u=a(7877),m=a(2798),d=a(2570);const I=r.ZP.div`
  margin: 15px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: inline-flex;
  gap: 30px;
  padding: 40px 0;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 4px;
  transition: 300ms;
  &:hover {
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }
  > .label {
    font-size: 12px;
    color: #888;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  > .value {
    font-size: 56px;
    font-weight: bold;
    color: #333;
  }
  > .action {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,A=({icon:e,label:t,value:a,children:r,...l})=>n.createElement(I,{...l},n.createElement("div",{className:"label"},n.createElement(d.Z,{name:e,size:16}),n.createElement("div",{className:"text"},t)),n.createElement("div",{className:"value"},a),n.createElement("div",{className:"action"},r));var O=a(7759);const g={cursor:"pointer"},R=({total:e})=>{const t=(0,p.Z)();return n.createElement(A,{onClick:()=>t.push({pathname:_.Nj.USER}),icon:d.V.ID_FILL,label:"用户数",value:e.toString(),style:g},n.createElement(u.Z,{title:"创建用户",placement:u.u.BOTTOM},n.createElement(m.ZP,{name:m.VG.PLUS_OUTLINE,size:24,onClick:e=>(e.stopPropagation(),t.push({pathname:_.Nj.USER,query:{[O.A.CREATE_DIALOG_OPEN]:"1"}}))})))};var x=a(1619);const L={cursor:"pointer"},N=({total:e})=>{const t=(0,p.Z)();return n.createElement(A,{onClick:()=>t.push({pathname:_.Nj.FIGURE}),icon:d.V.FIGURE_FILL,label:"角色数",value:e.toString(),style:L},n.createElement(u.Z,{title:"创建角色",placement:u.u.BOTTOM},n.createElement(m.ZP,{name:m.VG.PLUS_OUTLINE,size:24,onClick:e=>(e.stopPropagation(),t.push({pathname:_.Nj.FIGURE,query:{[x.A.CREATE_DIALOG_OPEN]:"1"}}))})))};var h=a(6588);const C={cursor:"pointer"},S=({total:e})=>{const t=(0,p.Z)();return n.createElement(A,{onClick:()=>t.push({pathname:_.Nj.MUSIC}),icon:d.V.MUSIC_FILL,label:"音乐数",value:e.toString(),style:C},n.createElement(u.Z,{title:"创建音乐",placement:u.u.BOTTOM},n.createElement(m.ZP,{name:m.VG.PLUS_OUTLINE,size:24,onClick:e=>(e.stopPropagation(),t.push({pathname:_.Nj.MUSIC,query:{[h.AE.CREATE_DIALOG_OPEN]:"1"}}))})))},v=({total:e})=>n.createElement(A,{label:"歌单数",icon:d.V.ORDERED_LIST_OUTLINE,value:e.toString()}),T=({total:e})=>n.createElement(A,{label:"发送验证码次数",icon:d.V.SHIELD_FILL,value:e.toString()}),f=({total:e})=>n.createElement(A,{label:"音乐播放次数",icon:d.V.MUSIC_FILL,value:e.toString()});var y=a(1894),D=a(6885);const b=r.ZP.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  > .part {
    flex: 1;
    .input {
      width: 100%;
    }
  }
`,U=()=>{const e=(0,p.Z)(),t=(0,n.useRef)(null),a=(0,n.useRef)(null),r=(0,n.useRef)(null);return n.createElement(b,null,n.createElement(y.Z,{label:"搜索音乐",className:"part"},n.createElement(D.Z,{className:"input",ref:t,onKeyDown:a=>{"Enter"===a.key&&e.push({pathname:_.Nj.MUSIC,query:{[h.AE.SEARCH_VALUE]:t.current.value}})},autoFocus:!0})),n.createElement(y.Z,{label:"搜索角色",className:"part"},n.createElement(D.Z,{className:"input",ref:a,onKeyDown:t=>{"Enter"===t.key&&e.push({pathname:_.Nj.FIGURE,query:{[x.A.SEARCH_VALUE]:a.current.value}})}})),n.createElement(y.Z,{label:"搜索用户",className:"part"},n.createElement(D.Z,{className:"input",ref:r,onKeyDown:t=>{"Enter"===t.key&&e.push({pathname:_.Nj.USER,query:{[O.A.SEARCH_VALUE]:r.current.value}})}})))},P={cursor:"pointer"},Z=({total:e})=>{const t=(0,p.Z)();return n.createElement(A,{onClick:()=>t.push({pathname:_.Nj.USER,query:{[O.A.EMAIL_NOTIFICATION_HISTORY_DIALOG_OPEN]:"1"}}),icon:d.V.EMAIL_LIST_FILL,label:"邮件通知次数",value:e.toString(),style:P})},G=r.ZP.div`
  ${i.i};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  ${l.Z}
  > .loading {
    padding: 50px 0;
    text-align: center;
  }
  > .error-card {
    padding: 50px 0;
  }
  > .paper-list {
    padding: 0 20px;
    box-sizing: border-box;
    text-align: center;
  }
`,k=()=>{const{data:e,retry:t}=(()=>{const[e,t]=(0,n.useState)({status:o.eE.LOADING}),a=(0,n.useCallback)((async()=>{t({status:o.eE.LOADING});try{const e=await E.Z.get("/api/cms/get_summary_data",{withToken:!0});t({status:o.eE.SUCCESS,value:e})}catch(e){t({status:o.eE.ERROR,error:e})}}),[]);return(0,n.useEffect)((()=>{a()}),[a]),{data:e,retry:a}})();let a=null;return a=e.status===o.eE.SUCCESS?n.createElement("div",{className:"paper-list"},n.createElement(R,{total:e.value.user_total}),n.createElement(N,{total:e.value.figure_total}),n.createElement(S,{total:e.value.music_total}),n.createElement(f,{total:e.value.music_play_record_total}),n.createElement(v,{total:e.value.musicbill_total}),n.createElement(T,{total:e.value.verify_code_total}),n.createElement(Z,{total:e.value.email_notification_total})):e.status===o.eE.ERROR?n.createElement(c.Z,{className:"error-card",errorMessage:e.error.message,retry:t}):n.createElement("div",{className:"loading"},n.createElement(s.Z,null)),n.createElement(G,null,n.createElement(U,null),a)}},1619:(e,t,a)=>{var n;a.d(t,{A:()=>n,I:()=>r}),function(e){e.PAGE="page",e.SEARCH_KEY="search_key",e.SEARCH_VALUE="search_value",e.CREATE_DIALOG_OPEN="create_dialog_open",e.OPERATE_RECORD_DIALOG_OPEN="operate_record_dialog_open",e.OPERATE_RECORD_DIALOG_SEARCH_FIGURE_ID="operate_record_dialog_search_figure_id"}(n||(n={}));const r=20},6588:(e,t,a)=>{var n;a.d(t,{AE:()=>n,IV:()=>r,sB:()=>l}),function(e){e.SEARCH_KEY="search_key",e.SEARCH_VALUE="search_value",e.PAGE="page",e.CREATE_DIALOG_OPEN="create_dialog_open",e.OPERATE_RECORD_DIALOG_OPEN="operate_record_dialog_open",e.OPERATE_RECORD_DIALOG_MUSIC_ID="operate_record_dialog_music_id"}(n||(n={}));const r=20;var l;!function(e){e.SQ="sq",e.HQ="hq",e.AC="ac"}(l||(l={}))},7759:(e,t,a)=>{a.d(t,{I:()=>n,A:()=>r});const n=20;var r;!function(e){e.PAGE="page",e.SEARCH_KEY="search_key",e.SEARCH_VALUE="search_value",e.CREATE_DIALOG_OPEN="create_dialog_open",e.SELECTED_USER_LIST_DIALOG_OPEN="selected_user_list_dialog_open",e.SEND_EMAIL_NOTIFICATION_DIALOG_OPEN="send_email_notification_dialog_open",e.EMAIL_NOTIFICATION_HISTORY_DIALOG_OPEN="email_notification_history_dialog_oepn",e.EMAIL_NOTIFICATION_HISTORY_TO_USRE_ID="email_notification_history_to_user_id",e.OPERATE_RECORD_DIALOG_OPEN="operate_record_dialog_open",e.OPERATE_RECORD_DIALOG_USER_ID="operate_record_dialog_user_id"}(r||(r={}))},1064:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>{const t={},a=e.replace(/\?/g,"");return a&&a.split("&").forEach((e=>{const[a,n]=e.split("=");t[a]=decodeURIComponent(n)})),t}},8689:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(5977),r=a(687);const l=()=>{const e=(0,n.TH)(),t=(0,n.k6)(),a=(0,r.Z)();return{push:({pathname:n=e.pathname,query:r})=>{const l={...a,...r};return t.push(`${n}?${Object.keys(l).map((e=>`${e}=${encodeURIComponent(l[e]||"")}`)).join("&")}`)}}}},687:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(5977),l=a(1064);const o=()=>{const{search:e}=(0,r.TH)();return(0,n.useMemo)((()=>(0,l.Z)(e)),[e])}}}]);
//# sourceMappingURL=cms_dashboard_page_7eed490efdd206737466.js.map