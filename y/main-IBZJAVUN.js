import{a as le,b as me,c as pe,d as de,e as he,f as ue,g as fe,h as ge,i as f,j as Ce,k as g,l as ye,m as A,n as ve,o as F,p as Me,q as E,r as be,s as j,t as xe,u as _e,v as we,w as k,x as D,y as Oe}from"./chunk-ERQJNYPK.js";import{a as Pe}from"./chunk-4SKQ5S6W.js";import{a as Ie}from"./chunk-2JCD7Z6B.js";import"./chunk-7GW3R6KP.js";import{a as Se}from"./chunk-DFHTSZJR.js";import"./chunk-3AWWX3VY.js";import{b as ce}from"./chunk-MGAIFFLP.js";import{$b as ne,A as P,Bb as Z,Cb as q,Da as z,Db as G,Fb as u,Hb as Q,Ib as ee,Jb as te,Ra as h,Sa as v,Ta as H,Ua as U,Va as W,Xa as Y,Xb as ie,Y as L,Ya as K,_ as p,_b as oe,ac as re,bc as ae,cc as se,ea as s,eb as M,g as R,gb as I,hb as J,ia as d,jb as X,la as $,ma as T,nb as c,ob as l,pb as b,qb as S,ra as C,rb as x,sa as y,sb as m,xb as _,z as B,zb as N}from"./chunk-N2RML6ZI.js";var Ae=[{path:"",component:Oe},{path:"login",loadComponent:()=>import("./chunk-VYDQ4YDP.js").then(()=>we)},{path:"ahorcado",loadComponent:()=>import("./chunk-F46N7J7E.js").then(()=>Pe)},{path:"mayorOMenor",loadComponent:()=>import("./chunk-ERWZ6VUC.js").then(()=>Ie)},{path:"preguntados",loadComponent:()=>import("./chunk-MZ6Q76DP.js").then(()=>Se)}];var Ve="@",Be=(()=>{let e=class e{constructor(t,i,r,a,O){this.doc=t,this.delegate=i,this.zone=r,this.animationType=a,this.moduleImpl=O,this._rendererFactoryPromise=null,this.scheduler=s(U,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-XWHN2IQX.js")).catch(i=>{throw new L(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,i){let r=this.delegate.createRenderer(t,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new V(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(O=>{let Ne=O.createRenderer(t,i);a.use(Ne)}).catch(O=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){H()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let n=e;return n})(),V=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,t,i){this.delegate.insertBefore(e,o,t,i)}removeChild(e,o,t){this.delegate.removeChild(e,o,t)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,t,i){this.delegate.setAttribute(e,o,t,i)}removeAttribute(e,o,t){this.delegate.removeAttribute(e,o,t)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,t,i){this.delegate.setStyle(e,o,t,i)}removeStyle(e,o,t){this.delegate.removeStyle(e,o,t)}setProperty(e,o,t){this.shouldReplay(o)&&this.replay.push(i=>i.setProperty(e,o,t)),this.delegate.setProperty(e,o,t)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,t){return this.shouldReplay(o)&&this.replay.push(i=>i.listen(e,o,t)),this.delegate.listen(e,o,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(Ve)}};function Fe(n="animations"){return Y("NgAsyncAnimations"),$([{provide:W,useFactory:(e,o,t)=>new Be(e,o,t,n),deps:[ie,le,K]},{provide:z,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Le={apiKey:"AIzaSyBOuj60P-u85SfMIKV2MP0rbEv1v02LS9k",authDomain:"trabajopracticojuegos.firebaseapp.com",projectId:"trabajopracticojuegos",storageBucket:"trabajopracticojuegos.appspot.com",messagingSenderId:"687233855117",appId:"1:687233855117:web:8f3d5fcd2f05f3a754fcc4"},Ee={providers:[_e(Ae),Fe(),T(ce),T([fe(()=>ge(Le)),ve(()=>be()),Ce(()=>ye())])]};var je=(()=>{let e=class e{constructor(){this.firebaseAuth=s(f),this.firestore=s(A),this.user$=g(this.firebaseAuth),this.userCollection=E(this.firestore,"users")}getUsernameByEmail(t){return F(this.userCollection).pipe(P(i=>{let r=i.find(a=>a.email===t);return r?r.username:null}))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ke=(()=>{let e=class e{constructor(){this._userService=s(je),this.firebaseAuth=s(f),this.firestore=s(A),this.user$=g(this.firebaseAuth),this.chatCollection=E(this.firestore,"chat")}getMessages(){return F(this.chatCollection).pipe(P(t=>(t.sort((i,r)=>i.timestamp-r.timestamp),t)))}sendMessage(t){return R(this,null,function*(){this.user$&&this.user$.subscribe(i=>R(this,null,function*(){if(i?.email){let r=yield B(this._userService.getUsernameByEmail(i.email));Me(this.chatCollection,{text:t,username:r,email:i?.email,timestamp:new Date}).then(a=>{console.log(a)}).catch(a=>{console.log(a)})}}))})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Ue=(n,e)=>({"user-message":n,"other-message":e});function We(n,e){if(n&1&&(c(0,"div",9)(1,"strong"),_(2),l(),_(3),l()),n&2){let o=e.$implicit,t=m(2);I("ngClass",Q(3,Ue,o.email==t.actualEmail,o.email!=t.actualEmail)),h(2),N("",o.username,":"),h(),N(" ",o.text," ")}}function Ye(n,e){if(n&1){let o=S();c(0,"div",3)(1,"div",4),M(2,We,4,6,"div",5),ee(3,"async"),l(),c(4,"div",6)(5,"input",7),G("ngModelChange",function(i){C(o);let r=m();return q(r.newMessage,i)||(r.newMessage=i),y(i)}),l(),c(6,"a",8),x("click",function(){C(o);let i=m();return y(i.sendMessage())}),c(7,"mat-icon"),_(8,"send"),l()()()()}if(n&2){let o=m();h(2),I("ngForOf",te(3,2,o.messages$)),h(3),Z("ngModel",o.newMessage)}}var De=(()=>{let e=class e{constructor(t,i){this.chatService=t,this.authService=i,this.newMessage="",this.isOpen=!1,this.actualEmail=null,this.firebaseAuth=s(f),this.user$=g(this.firebaseAuth)}ngOnInit(){this.authService.currentUserSig!=null&&(this.user$.subscribe(t=>{this.actualEmail=t.email}),this.messages$=this.chatService.getMessages())}toggleChat(){this.isOpen=!this.isOpen}sendMessage(){this.newMessage.trim()&&(this.chatService.sendMessage(this.newMessage),this.newMessage="")}};e.\u0275fac=function(i){return new(i||e)(v(ke),v(j))},e.\u0275cmp=d({type:e,selectors:[["app-chat"]],standalone:!0,features:[u],decls:5,vars:3,consts:[[1,"chat-box"],[1,"chat-header",3,"click"],["class","chat-content",4,"ngIf"],[1,"chat-content"],[1,"messages"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"chat-input"],["placeholder","Ingrese un mensaje",3,"ngModelChange","ngModel"],[1,"btn",3,"click"],[3,"ngClass"]],template:function(i,r){i&1&&(c(0,"div",0)(1,"div",1),x("click",function(){return r.toggleChat()}),c(2,"span"),_(3,"Chat"),l()(),M(4,Ye,9,4,"div",2),l()),i&2&&(J("open",r.isOpen),h(4),I("ngIf",r.isOpen))},dependencies:[ue,pe,de,he,se,oe,ne,re,ae,D,k],styles:["mat-icon[_ngcontent-%COMP%]{color:#fff!important}.chat-box[_ngcontent-%COMP%]{position:fixed;bottom:0;right:3px;width:45vw;max-width:350px!important;transition:transform .3s ease-in-out;transform:translateY(calc(100% - 40px))}.user-message[_ngcontent-%COMP%]{text-align:right;color:#fff}.other-message[_ngcontent-%COMP%]{text-align:left;color:#fff}.chat-box.open[_ngcontent-%COMP%]{transform:translateY(0)}.chat-header[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:10px;cursor:pointer}.chat-content[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #007bff;height:400px;display:flex;flex-direction:column}.messages[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:10px}.messages[_ngcontent-%COMP%]::-webkit-scrollbar{width:.5vw}.messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#007bff;border-radius:1px}.chat-input[_ngcontent-%COMP%]{display:flex;padding:10px}.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none!important;color:#fff;width:90%;outline:none}.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active{border:none!important}.chat-input[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:13%}.icon-send[_ngcontent-%COMP%]{background-color:#fff!important}"]});let n=e;return n})();function Ke(n,e){if(n&1){let o=S();c(0,"div",0)(1,"div",1)(2,"a",2),b(3,"mat-icon",3),l()(),c(4,"div",4)(5,"a",5),x("click",function(){C(o);let i=m();return y(i.logout())}),b(6,"mat-icon",6),l()()()}}var Re=(()=>{let e=class e{constructor(t){this.authService=t,this.userLogin=!1}ngOnInit(){this.authService.user$.subscribe(t=>{t?this.userLogin=!0:this.userLogin=!1})}logout(){this.authService.singOut()}};e.\u0275fac=function(i){return new(i||e)(v(j))},e.\u0275cmp=d({type:e,selectors:[["app-header"]],standalone:!0,features:[u],decls:1,vars:1,consts:[[1,"d-flex","justify-content-between","mt-4"],[1,"d-flex","justify-content-start"],["title","Inicio","href","/"],["aria-hidden","false","aria-label","Example home icon","fontIcon","home",1,"home"],[1,"d-flex","justify-content-end"],["title","Salir",3,"click"],["aria-hidden","false","aria-label","Example home icon","fontIcon","logout",1,"logout"]],template:function(i,r){i&1&&M(0,Ke,7,0,"div",0),i&2&&X(0,r.userLogin?0:-1)},dependencies:[D,k],styles:["mat-icon[_ngcontent-%COMP%]{font-size:24px;margin:0 4px;cursor:pointer}.logout[_ngcontent-%COMP%]{color:red}.header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:20px}"]});let n=e;return n})();var Te=(()=>{let e=class e{constructor(){this.title="TrabajoPracticoSalaDeJuegos"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[u],decls:3,vars:0,template:function(i,r){i&1&&b(0,"app-header")(1,"router-outlet")(2,"app-chat")},dependencies:[xe,De,Re]});let n=e;return n})();me(Te,Ee).catch(n=>console.error(n));