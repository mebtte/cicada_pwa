"use strict";(self.webpackChunkcicada_pwa=self.webpackChunkcicada_pwa||[]).push([[254],{9993:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),r=a(4910),l=a(6321),i=a(2570);const s=r.ZP.div`
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
`,c=n.memo((({checked:e,onChange:t,disabled:a=!1,size:r=l.d.SMALL,...c})=>{const o=(0,n.useCallback)((()=>{t&&!a&&t(!e)}),[e,t,a]);return n.createElement(s,{...c,checked:e,disabled:a,onClick:o},n.createElement(i.Z,{className:"outline",name:i.V.CHECKBOX_OUTLINE,size:r}),n.createElement(i.Z,{className:"checked",name:i.V.CHECKBOX_FILL,size:r}))}))},8524:(e,t,a)=>{var n;a.d(t,{Z:()=>E}),function(e){e.CIRCLE="circle",e.SQUARE="square"}(n||(n={}));var r=a(7294),l=a(4910),i=a(6661),s=a(8794),c=a(7382);const o=l.ZP.img`
  box-sizing: border-box;
  aspect-ratio: 1;
  object-fit: cover;
`,m={[n.CIRCLE]:{style:{borderRadius:"50%"}},[n.SQUARE]:{style:{borderRadius:4}}},E=r.forwardRef((({src:e,shape:t=n.SQUARE,size:a=64,alt:l,...E},d)=>{const u=(0,r.useRef)(null),[p,_]=(0,r.useState)(s);return(0,r.useLayoutEffect)((()=>{if(e&&p!==e){let t=!1;const a=new IntersectionObserver((([a])=>{a.isIntersecting&&(0,i.Z)(e).then((()=>{t||_(e)})).catch((e=>c.Z.error(e,{description:"加载图片失败",report:!0})))}));return a.observe(u.current),()=>(t=!0,a.disconnect())}}),[p,e]),(0,r.useImperativeHandle)(d,(()=>u.current)),r.createElement(o,{...E,"data-src":e,src:p,style:{width:a,...m[t].style,...E.style},ref:u,alt:l})}))},6906:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(4910),l=a(8913),i=a(5051),s=a(5985);const c=r.ZP.div`
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
`,o=n.memo((({description:e="暂时没有数据",...t})=>{const a=(0,n.useMemo)((()=>l.Z.emptyImageList[(0,i.Z)(0,l.Z.emptyImageList.length)]),[]);return n.createElement(c,{...t},n.createElement(s.Z,{className:"placeholder",src:a,size:180,alt:"placeholder"}),n.createElement("div",{className:"description"},e))}))},4508:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),r=a(4910),l=a(5455),i=a(6885),s=a(2798),c=a(7877);const o=20,m=r.ZP.div`
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
`,E=(0,r.ZP)(i.Z)`
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
`,d=({currentPage:e,pageCount:t,onPageChange:a,...r})=>{const[i,d]=(0,n.useState)(""),u=()=>{let e=+i;!e||e<=1?e=1:e>=t&&(e=t),d(e.toString()),a(e)};return n.createElement(m,{...r},e>2&&n.createElement(l.Z,{className:"page",label:"1",size:o,onClick:()=>a(1)}),e>=4?4===e?n.createElement(l.Z,{className:"page",label:"2",size:o,onClick:()=>a(2)}):n.createElement("div",{className:"ellipsis page"},"···"):null,e-1>=1&&n.createElement(l.Z,{className:"page",label:e-1,size:o,onClick:()=>a(e-1)}),n.createElement(l.Z,{className:"page",label:e,type:l.D.PRIMARY,size:o}),e+1<=t&&n.createElement(l.Z,{className:"page",label:e+1,size:o,onClick:()=>a(e+1)}),t-e>=3?t-e==3?n.createElement(l.Z,{className:"page",label:t-1,size:o,onClick:()=>a(t-1)}):n.createElement("div",{className:"ellipsis page"},"···"):null,t>e+1&&n.createElement(l.Z,{className:"page",label:t,size:o,onClick:()=>a(t)}),t>3&&n.createElement(n.Fragment,null,n.createElement("div",{className:"separator"}),n.createElement(E,{type:"number",value:i,onChange:e=>d(e.target.value),onKeyDown:e=>{"Enter"===e.key&&u()}}),n.createElement(c.Z,{title:"跳转到页面"},n.createElement(s.ZP,{name:s.VG.GOTO_OUTLINE,size:o,onClick:u}))))}},9762:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7294),r=a(4910),l=a(5733),i=a(6885),s=a(1579),c=a(2570);const o=r.ZP.div`
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
`,E=function({value:e,onChange:t,array:a,itemRenderer:r,customInputDisabled:l=!1,onInputChange:E,loading:d=!1,placeholder:u,disabled:p,..._}){const[g,h]=(0,n.useState)(""),[I,Z]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{E&&E(g)}),[E,g]),n.createElement(o,{..._,arrayVisible:I},n.createElement("div",{className:"input-box"},n.createElement(i.Z,{className:"input",readOnly:l,value:I?g:null!==e?r(e,""):"",onChange:e=>h(e.target.value),onFocus:()=>Z(!0),onBlur:()=>window.setTimeout((()=>Z(!1)),350),placeholder:u,disabled:p}),I?null:n.createElement(c.Z,{className:"arrow",name:c.V.DOWN_OUTLINE,size:10})),n.createElement("div",{className:"array"},d?n.createElement("div",{className:"loading"},n.createElement(s.Z,null)):n.createElement("div",{className:"list"},a.map(((a,l)=>{const i=r(a,g);return i?n.createElement(m,{key:l,active:e===a,onClick:()=>t(a)},i):null})))))}},9987:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(4910);const l=r.ZP.table`
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
`,i=function({list:e,headers:t,rowRenderer:a,stickyHeader:r=!1,...i}){return n.createElement(l,{...i,stickyHeader:r},n.createElement("thead",null,n.createElement("tr",null,t.map(((e,t)=>n.createElement("th",{key:t},e))))),n.createElement("tbody",null,e.map(((e,t)=>n.createElement("tr",{key:t},a(e).map(((e,t)=>n.createElement("td",{key:t},e))))))))}},7891:(e,t,a)=>{a.d(t,{xK:()=>n,jQ:()=>r,Jx:()=>l});const n=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,r=/^https?:\/\/(?=.{1,254}(?::|$))(?:(?!\d|-)(?![a-z0-9-]{1,62}-(?:\.|:|$))[a-z0-9-]{1,63}\b(?!\.$)\.?)+(:\d+)?$/i,l=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/},7759:(e,t,a)=>{a.d(t,{I:()=>n,A:()=>r});const n=20;var r;!function(e){e.PAGE="page",e.SEARCH_KEY="search_key",e.SEARCH_VALUE="search_value",e.CREATE_DIALOG_OPEN="create_dialog_open",e.SELECTED_USER_LIST_DIALOG_OPEN="selected_user_list_dialog_open",e.SEND_EMAIL_NOTIFICATION_DIALOG_OPEN="send_email_notification_dialog_open",e.EMAIL_NOTIFICATION_HISTORY_DIALOG_OPEN="email_notification_history_dialog_oepn",e.EMAIL_NOTIFICATION_HISTORY_TO_USRE_ID="email_notification_history_to_user_id",e.OPERATE_RECORD_DIALOG_OPEN="operate_record_dialog_open",e.OPERATE_RECORD_DIALOG_USER_ID="operate_record_dialog_user_id"}(r||(r={}))},7015:(e,t,a)=>{a.r(t),a.d(t,{default:()=>We});var n,r=a(7294),l=a(4910),i=a(6196);!function(e){e.COMPOSITE="composite",e.ID="id",e.EMAIL="email",e.NICKNAME="nickname",e.REMARK="remark"}(n||(n={}));const s={[n.COMPOSITE]:{label:"综合"},[n.ID]:{label:"ID"},[n.EMAIL]:{label:"邮箱"},[n.NICKNAME]:{label:"昵称"},[n.REMARK]:{label:"备注"}},c=Object.keys(s);var o,m=a(687),E=a(464),d=a(8602),u=a(9762);!function(e){e.REMARK="remark",e.DISABLED="disabled"}(o||(o={}));const p=function({id:e,key:t,value:a}){return i.Z.post("/api/cms/update_user",{withToken:!0,data:{id:e,key:t,value:a}})};var _,g=a(7382),h=a(4839),I=a(1894),Z=a(511),f=a(5455),y=a(3584),O=a(6729),A=a.n(O);!function(e){e.USER_CREATED="user_created",e.USER_UPDATED="user_updated",e.OPEN_UPDATE_DIALOG="open_update_dialog",e.TOGGLE_SELECT_USER="toggle_select_user",e.UNSELECT_USER="unselect_user"}(_||(_={}));const L=new(A()),b={marginBottom:20},C={width:"100%"},T={...C,height:100,resize:"vertical"},R=[0,1],P=e=>1===e?"禁用":"可用",v=()=>{const[e,t]=(0,r.useState)(null),a=()=>t(null),[n,l]=(0,r.useState)(""),[i,s]=(0,r.useState)(1),[c,m]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=({user:e})=>{t(e),l(e.remark),s(e.disabled)};return L.on(_.OPEN_UPDATE_DIALOG,e),()=>{L.off(_.OPEN_UPDATE_DIALOG,e)}}),[]),r.createElement(y.ZP,{open:!!e},r.createElement(y.Dx,null,"更新用户",e?`"${e.nickname}"`:""),r.createElement(y.VY,null,r.createElement(I.Z,{label:"账号是否可用",style:b},r.createElement(u.Z,{value:i,onChange:e=>s(e),array:R,itemRenderer:P,disabled:c,style:C,customInputDisabled:!0})),r.createElement(I.Z,{label:"备注",style:b},r.createElement(Z.Z,{value:n,onChange:e=>l(e.target.value),style:T,disabled:c,maxLength:d.eQ}))),r.createElement(y.aU,null,r.createElement(f.Z,{label:"取消",onClick:a,disabled:c}),r.createElement(f.Z,{label:"更新",type:f.D.PRIMARY,onClick:async()=>{if(e){if(!n)return h.ZP.error("请输入备注");m(!0);try{let t=!1;e.disabled!==i&&(await p({id:e.id,key:o.DISABLED,value:i}),t=!0),e.remark!==n&&(await p({id:e.id,key:o.REMARK,value:n}),t=!0),t&&L.emit(_.USER_UPDATED,{id:e.id}),a()}catch(e){g.Z.error(e,{description:"更新用户失败",report:!0}),h.ZP.error(e.message)}m(!1)}},loading:c})))};var S=a(7022),N=a(7759),k=a(3088),D=a(6053),x=a(8689),U=a(6885),w=a(2798);const G=l.ZP.div`
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
`,z=e=>e?s[e].label:"",M=({searchKey:e,searchValue:t})=>{const a=(0,x.Z)(),n=(0,r.useRef)(null),[l,i]=(0,r.useState)(t),s=()=>a.push({query:{[N.A.PAGE]:"1",[N.A.SEARCH_VALUE]:l}});return(0,r.useEffect)((()=>{const e=(0,D.Z)((e=>{if(!("f"!==e.key||k.jm&&!e.metaKey||k.qB&&!e.ctrlKey))return e.preventDefault(),n.current.focus()}));return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[]),r.createElement(G,null,r.createElement(u.Z,{className:"key",value:e,onChange:e=>a.push({query:{[N.A.PAGE]:"1",[N.A.SEARCH_KEY]:e}}),onFocus:e=>e.target.select(),array:c,itemRenderer:z,customInputDisabled:!0}),r.createElement(U.Z,{className:"value",value:l,onChange:e=>i(e.target.value),onKeyDown:e=>{"Enter"===e.key&&s()},ref:n,maxLength:50}),r.createElement(w.ZP,{name:w.VG.SEARCH_OUTLINE,onClick:s}))};var H=a(4508);const V=({page:e,total:t})=>{const a=(0,x.Z)();return r.createElement(H.Z,{currentPage:e,pageCount:Math.ceil(t/N.I),onPageChange:e=>a.push({query:{[N.A.PAGE]:e.toString()}})})};var Y=a(7877),$=a(9993),K=a(921),F=a(2570),q=a(6906),j=a(1579),B=a(9987),W=a(5733),J=a(8524),Q=a(3375);const X=l.ZP.div`
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
    ${W.Z}
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
`,ee={position:"absolute",top:0,left:0,width:"100%",height:"100%"},te=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,ae={color:"var(--color-primary)"},ne={color:"rgb(220 0 78)"},re=l.ZP.div`
  font-size: 12px;
`,le=["选中","ID","邮箱","昵称","头像","注册","CMS","账号可用","备注","操作"],ie=({selectedUserList:e,userList:t,loading:a,page:n,searchKey:l,searchValue:i})=>{const s=(0,x.Z)(),c=(0,r.useRef)(null),o=e.map((e=>e.id));return(0,r.useEffect)((()=>{c.current?.scrollTo({top:0,behavior:"smooth"})}),[n,l,i]),r.createElement(X,{isLoading:a},a||t.length?r.createElement("div",{className:"content",ref:c},r.createElement(B.Z,{className:"table",list:t,headers:le,rowRenderer:e=>[r.createElement($.Z,{checked:o.includes(e.id),onChange:()=>L.emit(_.TOGGLE_SELECT_USER,{user:e})}),r.createElement(re,null,e.id),r.createElement(re,null,e.email),e.nickname,e.avatar?r.createElement(J.Z,{src:e.avatar,alt:"avatar"}):"-",r.createElement(re,null,(0,K.Z)(e.join_time).format("YYYY-MM-DD HH:mm")),r.createElement(F.Z,{name:e.cms?F.V.CORRECT_OUTLINE:F.V.WRONG_OUTLINE,style:e.cms?ae:ne}),r.createElement(F.Z,{name:e.disabled?F.V.WRONG_OUTLINE:F.V.CORRECT_OUTLINE,style:e.disabled?ne:ae}),r.createElement(re,null,e.remark),r.createElement(te,null,r.createElement(Y.Z,{title:"编辑"},r.createElement(w.ZP,{name:w.VG.EDIT_OUTLINE,size:22,onClick:()=>L.emit(_.OPEN_UPDATE_DIALOG,{user:e})})),r.createElement(Y.Z,{title:"详情"},r.createElement(w.ZP,{name:w.VG.VIEW_OUTLINE,size:22,onClick:()=>Q.Z.emit(Q.t.VIEW_JSON,{json:e})})),r.createElement(Y.Z,{title:"操作记录"},r.createElement(w.ZP,{name:w.VG.HISTORY_OUTLINE,size:22,onClick:()=>s.push({query:{[N.A.OPERATE_RECORD_DIALOG_OPEN]:"1",[N.A.OPERATE_RECORD_DIALOG_USER_ID]:e.id}})})),r.createElement(Y.Z,{title:"邮件通知记录"},r.createElement(w.ZP,{name:w.VG.EMAIL_LIST_FILL,size:22,onClick:()=>s.push({query:{[N.A.EMAIL_NOTIFICATION_HISTORY_DIALOG_OPEN]:"1",[N.A.EMAIL_NOTIFICATION_HISTORY_TO_USRE_ID]:e.id}})})))],stickyHeader:!0})):r.createElement(q.Z,{style:ee}),a&&r.createElement("div",{className:"loading"},r.createElement(j.Z,null)))},se=l.ZP.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  margin: 20px 20px 20px 0;
  gap: 10px;
`,ce={flex:1,minHeight:0},oe=({selectedUserList:e,searchKey:t,searchValue:a,page:n})=>{const{error:l,loading:s,total:c,retry:o,userList:m}=(({searchKey:e,searchValue:t,page:a})=>{const[n,l]=(0,r.useState)(null),[s,c]=(0,r.useState)(!1),[o,m]=(0,r.useState)([]),[E,d]=(0,r.useState)(0),u=(0,r.useCallback)((async()=>{l(null),c(!0);try{const{total:n,list:r}=await async function({page:e,pageSize:t,searchKey:a,searchValue:n}){return i.Z.get("/api/cms/get_user_list",{withToken:!0,params:{page:e,page_size:t,search_key:a,search_value:n}})}({page:a,pageSize:N.I,searchKey:e,searchValue:t});d(n),m(r)}catch(e){g.Z.error(e,{description:"获取角色列表失败",report:!0}),l(e)}c(!1)}),[e,t,a]);return(0,r.useEffect)((()=>(u(),L.on(_.USER_CREATED,u),L.on(_.USER_UPDATED,u),()=>{L.off(_.USER_CREATED,u),L.off(_.USER_UPDATED,u)})),[u]),{error:n,loading:s,page:a,total:E,userList:o,retry:u}})({searchKey:t,searchValue:a,page:n});return r.createElement(se,null,r.createElement(M,{searchKey:t,searchValue:a}),l?r.createElement(S.Z,{errorMessage:l.message,retry:o,style:ce}):r.createElement(ie,{selectedUserList:e,userList:m,loading:s,page:n,searchKey:t,searchValue:a}),r.createElement(V,{page:n,total:c}))},me=l.ZP.div`
  padding: 20px 0;
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Ee=({selectedUserList:e})=>{const t=(0,x.Z)();return r.createElement(me,null,r.createElement(Y.Z,{title:"已选中用户列表",placement:Y.u.RIGHT},r.createElement(w.ZP,{name:w.VG.CHECKBOX_FILL,onClick:()=>t.push({query:{[N.A.SELECTED_USER_LIST_DIALOG_OPEN]:"1"}}),disabled:!e.length})),r.createElement(Y.Z,{title:"创建用户",placement:Y.u.RIGHT},r.createElement(w.ZP,{name:w.VG.PLUS_OUTLINE,onClick:()=>t.push({query:{[N.A.CREATE_DIALOG_OPEN]:"1"}})})),r.createElement(Y.Z,{title:"操作记录",placement:Y.u.RIGHT},r.createElement(w.ZP,{name:w.VG.HISTORY_OUTLINE,onClick:()=>t.push({query:{[N.A.OPERATE_RECORD_DIALOG_OPEN]:"1",[N.A.OPERATE_RECORD_DIALOG_USER_ID]:""}})})),r.createElement(Y.Z,{title:"发送邮件通知",placement:Y.u.RIGHT},r.createElement(w.ZP,{name:w.VG.EMAIL_FILL,onClick:()=>t.push({query:{[N.A.SEND_EMAIL_NOTIFICATION_DIALOG_OPEN]:"1"}})})),r.createElement(Y.Z,{title:"邮件通知记录",placement:Y.u.RIGHT},r.createElement(w.ZP,{name:w.VG.EMAIL_LIST_FILL,onClick:()=>t.push({query:{[N.A.EMAIL_NOTIFICATION_HISTORY_DIALOG_OPEN]:"1",[N.A.EMAIL_NOTIFICATION_HISTORY_TO_USRE_ID]:""}})})))};var de=a(2983);var ue=a(7891);const pe={marginBottom:20},_e={width:"100%"},ge={..._e,height:100,resize:"vertical"},he=({open:e})=>{const t=(0,x.Z)(),[a,n]=(0,r.useState)(""),[l,s]=(0,r.useState)(""),[c,o]=(0,r.useState)(""),m=()=>{t.push({query:{[N.A.CREATE_DIALOG_OPEN]:""}}),setTimeout((()=>{n(""),s(""),o("")}),1e3)},[E,u]=(0,r.useState)(!1);return r.createElement(y.ZP,{open:e||E},r.createElement(y.Dx,null,"创建用户"),r.createElement(y.VY,null,r.createElement(I.Z,{label:"邮箱",style:pe},r.createElement(U.Z,{value:a,onChange:e=>n(e.target.value),style:_e,disabled:E})),r.createElement(I.Z,{label:"昵称",style:pe},r.createElement(U.Z,{value:l,onChange:e=>s(e.target.value),style:_e,disabled:E,maxLength:d.C_})),r.createElement(I.Z,{label:"备注",style:pe},r.createElement(Z.Z,{value:c,onChange:e=>o(e.target.value),style:ge,disabled:E}))),r.createElement(y.aU,null,r.createElement(f.Z,{label:"取消",onClick:m,disabled:E}),r.createElement(f.Z,{label:"创建",type:f.D.PRIMARY,onClick:async()=>{if(!a)return h.ZP.error("请输入邮箱");if(!ue.xK.test(a))return h.ZP.error("邮箱格式错误");if(!l)return h.ZP.error("请输入昵称");if(!c)return h.ZP.error("请输入备注");u(!0);try{await function({email:e,nickname:t,remark:a}){return i.Z.post("/api/cms/create_user",{withToken:!0,data:{email:e,nickname:t,remark:a}})}({email:a,nickname:l,remark:c}),L.emit(_.USER_CREATED,{}),m()}catch(e){g.Z.error(e,{description:"创建用户失败",report:!0}),de.ZP.alert({title:"创建用户失败",content:e.message})}u(!1)},loading:E})))};var Ie=a(3582);const Ze=l.ZP.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  > .label {
    font-size: 14px;
    color: var(--text-color-primary);
  }
  ${({disabled:e})=>l.iv`
    cursor: ${e?"not-allowed":"pointer"};
    > .label {
      opacity: ${e?"0.5":"1"};
    }
  `}
`,fe=r.memo((({label:e,checked:t,onChange:a,disabled:n=!1,onClick:l,...i})=>r.createElement(Ze,{...i,disabled:n,onClick:e=>{if(!n)return a(!t),l&&l(e)}},r.createElement($.Z,{checked:t,disabled:n}),r.createElement("div",{className:"label"},e)))),ye=l.ZP.div`
  font-size: 12px;
  color: var(--text-color-secondary);
  line-height: 1.3;
`,Oe={"{{to_user_nickname}}":"目标用户昵称","{{send_user_nickname}}":"你的用户昵称","{{create_time}}":"邮件通知创建时间, YYYY-MM-DD HH:mm"},Ae=r.memo((()=>r.createElement(ye,null,r.createElement("div",null,"内容 HTML 支持以下变量替换:"),Object.keys(Oe).map((e=>r.createElement("div",{key:e},e,": ",Oe[e])))))),Le=(0,l.ZP)(y.VY)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .user-range {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .input {
    width: 100%;
  }
  .textarea {
    height: 150px;
    resize: vertical;
  }
`,be={style:{width:650}},Ce=({open:e,selectedUserList:t})=>{const a=(0,x.Z)(),n=()=>a.push({query:{[N.A.SEND_EMAIL_NOTIFICATION_DIALOG_OPEN]:""}}),[l,s]=(0,r.useState)(!0),[c,o]=(0,r.useState)(""),[m,E]=(0,r.useState)(""),d=()=>c?!!m||(h.ZP.error("请输入内容 HTML"),!1):(h.ZP.error("请输入标题"),!1);return(0,r.useEffect)((()=>{t.length?s(!1):s(!0)}),[t]),r.createElement(y.ZP,{open:e,bodyProps:be},r.createElement(y.Dx,null,"发送邮件通知"),r.createElement(Le,null,r.createElement(I.Z,{label:"用户范围"},r.createElement("div",{className:"user-range"},r.createElement(fe,{label:"全部",checked:l,disabled:!t.length,onChange:()=>s(!0)}),r.createElement(fe,{label:"指定用户列表",checked:!l,disabled:!t.length,onChange:()=>s(!1)}))),r.createElement(I.Z,{label:"标题"},r.createElement(U.Z,{className:"input",value:c,onChange:e=>o(e.target.value),maxLength:255})),r.createElement(I.Z,{label:"内容 HTML"},r.createElement(Z.Z,{className:"input textarea",value:m,onChange:e=>E(e.target.value),maxLength:65535}),r.createElement(Ae,null))),r.createElement(y.aU,null,r.createElement("div",{className:"left"},r.createElement(f.Z,{label:"预览",type:f.D.PRIMARY,onClick:()=>{if(d())return de.ZP.confirm({title:"预览将会发送一封邮件通知给自己, 是否继续?",onConfirm:async()=>{try{const{user:e}=Ie.Z.getState();await function({toUserId:e,title:t,html:a}){return i.Z.post("/api/cms/send_email_notification",{withToken:!0,data:{to_user_id:e,title:t,html:a}})}({toUserId:e.id,title:c,html:m}),h.ZP.success("已发送到你的邮箱"),setTimeout((()=>{o(""),E("")}),0)}catch(e){g.Z.error(e,{description:"发送邮件通知失败",report:!0}),de.ZP.alert({title:"预览失败",content:e.message})}}})}}),l?null:r.createElement(f.Z,{label:"已选中用户列表",type:f.D.PRIMARY,onClick:()=>a.push({query:{[N.A.SELECTED_USER_LIST_DIALOG_OPEN]:"1"}})})),r.createElement(f.Z,{label:"取消",onClick:n}),r.createElement(f.Z,{label:"创建",type:f.D.PRIMARY,onClick:()=>{if(d())return l||t.length?de.ZP.confirm({title:"确定创建邮件通知吗?",onConfirm:async()=>{try{await function({all:e,toUserIdList:t,title:a,html:n}){return i.Z.post("/api/cms/create_email_notification",{withToken:!0,data:{to_user_ids:e?"all":t.join(","),title:a,html:n}})}({all:l,toUserIdList:t.map((e=>e.id)),title:c,html:m}),h.ZP.success("创建邮件通知成功, 将会排队发送, 用户实际接收时间将会有延迟"),n()}catch(e){g.Z.error(e,{description:"创建邮件通知失败",report:!0}),de.ZP.alert({title:"创建邮件通知失败",content:e.message})}}}):h.ZP.error("未选择任何用户")}})))},Te={style:{width:650}},Re={width:"100%"},Pe=["选择","ID","邮箱","昵称","备注"],ve=e=>[r.createElement($.Z,{checked:!0,onChange:()=>L.emit(_.UNSELECT_USER,{user:e})}),e.id,e.email,e.nickname,e.remark],Se=({open:e,selectedUserList:t})=>{const a=(0,x.Z)();return r.createElement(y.ZP,{open:e,bodyProps:Te},r.createElement(y.Dx,null,"已选中 ",t.length," 个用户"),r.createElement(y.VY,null,t.length?r.createElement(B.Z,{list:t,headers:Pe,rowRenderer:ve,style:Re}):r.createElement(q.Z,{description:"未选中任何用户"})),r.createElement(y.aU,null,r.createElement(f.Z,{label:"关闭",onClick:()=>a.push({query:{[N.A.SELECTED_USER_LIST_DIALOG_OPEN]:""}})})))};var Ne=a(7003);const ke=["目标用户 ID","发送用户","标题","创建时间","发送时间","尝试发送次数","详情"],De=l.ZP.div`
  max-width: 150px;
  ${Ne.Z}
`,xe=l.ZP.div`
  font-size: 12px;
`,Ue=({emailNotificationList:e})=>r.createElement(B.Z,{list:e,headers:ke,rowRenderer:e=>[e.to_user_id,r.createElement("span",{title:`ID:${e.send_user.id}`},e.send_user.nickname),r.createElement(De,null,e.title),r.createElement(xe,null,(0,K.Z)(e.create_time).format("YYYY-MM-DD HH:mm")),r.createElement(xe,null,e.send_time?(0,K.Z)(e.send_time).format("YYYY-MM-DD HH:mm"):"暂未发送"),e.send_attempt_times,r.createElement(w.ZP,{name:w.VG.VIEW_OUTLINE,size:22,onClick:()=>Q.Z.emit(Q.t.VIEW_JSON,{json:e})})],stickyHeader:!0}),we={style:{width:750}},Ge={padding:"50px 0"},ze=l.ZP.div`
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
`,Me=({open:e,toUserId:t})=>{const a=(0,x.Z)(),{error:n,retry:l,loading:s,page:c,onPageChange:o,total:m,emailNotificationList:E}=(({open:e,toUserId:t})=>{const[a,n]=(0,r.useState)(null),[l,s]=(0,r.useState)(!1),[c,o]=(0,r.useState)(0),[m,E]=(0,r.useState)(1),[d,u]=(0,r.useState)([]),p=(0,r.useCallback)((async()=>{if(e){n(null),s(!0);try{const e=await function({toUserId:e,page:t=1,pageSize:a=20}){return i.Z.get("/api/cms/get_email_notification_list",{withToken:!0,params:{to_user_id:e,page:t,page_size:a}})}({toUserId:t,page:m,pageSize:20});o(e.total),u(e.list)}catch(e){g.Z.error(e,{description:"获取邮件通知列表失败",report:!0}),n(e)}s(!1)}}),[e,m,t]);return(0,r.useEffect)((()=>{E(1),o(0),u([])}),[t]),(0,r.useEffect)((()=>{p()}),[p]),{error:a,loading:l,total:c,page:m,onPageChange:E,emailNotificationList:d,retry:p}})({open:e,toUserId:t});let d;return d=n?r.createElement(S.Z,{errorMessage:n.message,retry:l,style:Ge}):s||E.length?r.createElement(r.Fragment,null,r.createElement(ze,{isLoading:s},r.createElement(Ue,{emailNotificationList:E}),s?r.createElement(j.Z,{className:"loader"}):null),r.createElement(H.Z,{currentPage:c,pageCount:Math.ceil(m/20),onPageChange:o})):r.createElement(q.Z,{description:"暂无邮件通知记录",style:Ge}),r.createElement(y.ZP,{open:e,bodyProps:we},r.createElement(y.Dx,null,"邮件通知记录"),r.createElement(y.VY,null,d),r.createElement(y.aU,null,r.createElement(f.Z,{label:"关闭",onClick:()=>a.push({query:{[N.A.EMAIL_NOTIFICATION_HISTORY_DIALOG_OPEN]:""}})})))},He={create:"创建",modify:"更改"},Ve={width:"100%"},Ye=["目标用户 ID","操作用户","类型","操作时间","详情"],$e=({recordList:e})=>r.createElement(B.Z,{list:e,headers:Ye,rowRenderer:e=>[e.user_id,r.createElement("span",{title:`ID:${e.operate_user.id}`},e.operate_user.nickname),He[e.type]||"未知类型",(0,K.Z)(e.operate_time).format("YYYY-MM-DD HH:mm"),r.createElement(w.ZP,{name:w.VG.VIEW_OUTLINE,size:22,onClick:()=>Q.Z.emit(Q.t.VIEW_JSON,{json:{...e,content:JSON.parse(e.content)}})})],stickyHeader:!0,style:Ve}),Ke={style:{width:650}},Fe={padding:"50px 0"},qe=l.ZP.div`
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
`,je=({open:e,userId:t})=>{const a=(0,x.Z)(),{error:n,loading:l,page:s,onPageChange:c,total:o,recordList:m,retry:E}=(({open:e,userId:t})=>{const[a,n]=(0,r.useState)(null),[l,s]=(0,r.useState)(!1),[c,o]=(0,r.useState)(0),[m,E]=(0,r.useState)([]),[d,u]=(0,r.useState)(1),p=(0,r.useCallback)((async()=>{if(e){n(null),s(!0);try{const e=await function({userId:e,page:t=1,pageSize:a=20}){return i.Z.get("/api/cms/get_user_operate_record_list",{withToken:!0,params:e?{user_id:e,page:t,page_size:a}:{page:t,page_size:a}})}({userId:t,page:d,pageSize:20});o(e.total),E(e.list)}catch(e){g.Z.error(e,{description:"获取用户操作记录列表失败",report:!0}),n(e)}s(!1)}}),[e,t,d]);return(0,r.useEffect)((()=>{u(1),o(0),E([])}),[t]),(0,r.useEffect)((()=>{p()}),[p]),{error:a,loading:l,page:d,onPageChange:u,total:c,recordList:m,retry:p}})({open:e,userId:t});let d;return d=n?r.createElement(S.Z,{errorMessage:n.message,retry:E,style:Fe}):l||m.length?r.createElement(r.Fragment,null,r.createElement(qe,{isLoading:l},r.createElement($e,{recordList:m}),l?r.createElement(j.Z,{className:"loader"}):null),r.createElement(H.Z,{currentPage:s,pageCount:Math.ceil(o/20),onPageChange:c})):r.createElement(q.Z,{description:"暂无操作记录",style:Fe}),r.createElement(y.ZP,{open:e,bodyProps:Ke},r.createElement(y.Dx,null,"操作记录"),r.createElement(y.VY,null,d),r.createElement(y.aU,null,r.createElement(f.Z,{label:"关闭",onClick:()=>a.push({query:{[N.A.OPERATE_RECORD_DIALOG_OPEN]:""}})})))},Be=l.ZP.div`
  ${E.i};
  display: flex;
`,We=()=>{const e=(0,m.Z)();let t=e[N.A.SEARCH_KEY];c.includes(t)||(t=n.COMPOSITE);const a=e[N.A.SEARCH_VALUE]||"",l=e[N.A.PAGE],i=l?+l:1,s=!!e[N.A.CREATE_DIALOG_OPEN],o=!!e[N.A.SELECTED_USER_LIST_DIALOG_OPEN],E=!!e[N.A.SEND_EMAIL_NOTIFICATION_DIALOG_OPEN],d=!!e[N.A.EMAIL_NOTIFICATION_HISTORY_DIALOG_OPEN],u=e[N.A.EMAIL_NOTIFICATION_HISTORY_TO_USRE_ID],p=!!e[N.A.OPERATE_RECORD_DIALOG_OPEN],g=e[N.A.OPERATE_RECORD_DIALOG_USER_ID],h=(()=>{const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{const e=({id:e})=>t((t=>t.filter((t=>t.id===e)))),a=({user:e})=>t((t=>t.find((t=>t.id===e.id))?t.filter((t=>t.id!==e.id)):[...t,e])),n=({user:e})=>t((t=>t.filter((t=>t.id!==e.id))));return L.on(_.USER_UPDATED,e),L.on(_.TOGGLE_SELECT_USER,a),L.on(_.UNSELECT_USER,n),()=>{L.off(_.USER_UPDATED,e),L.off(_.TOGGLE_SELECT_USER,a),L.off(_.UNSELECT_USER,n)}}),[]),e})();return r.createElement(Be,null,r.createElement(Ee,{selectedUserList:h}),r.createElement(oe,{selectedUserList:h,searchKey:t,searchValue:a,page:i}),r.createElement(he,{open:s}),r.createElement(v,null),r.createElement(Ce,{open:E,selectedUserList:h}),r.createElement(Me,{open:d,toUserId:u}),r.createElement(Se,{open:o,selectedUserList:h}),r.createElement(je,{open:p,userId:g}))}},7003:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a(4910).iv`
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
  text-overflow: ellipsis;
`},6053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>(...t)=>{(!document.activeElement||"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName)&&e(...t)}},1064:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>{const t={},a=e.replace(/\?/g,"");return a&&a.split("&").forEach((e=>{const[a,n]=e.split("=");t[a]=decodeURIComponent(n)})),t}},8689:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(5977),r=a(687);const l=()=>{const e=(0,n.TH)(),t=(0,n.k6)(),a=(0,r.Z)();return{push:({pathname:n=e.pathname,query:r})=>{const l={...a,...r};return t.push(`${n}?${Object.keys(l).map((e=>`${e}=${encodeURIComponent(l[e]||"")}`)).join("&")}`)}}}},687:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(5977),l=a(1064);const i=()=>{const{search:e}=(0,r.TH)();return(0,n.useMemo)((()=>(0,l.Z)(e)),[e])}},8794:(e,t,a)=>{e.exports=a.p+"30eb336bb42dece28fd8.jpeg"}}]);
//# sourceMappingURL=cms_user_page_93077b9b414947b31280.js.map