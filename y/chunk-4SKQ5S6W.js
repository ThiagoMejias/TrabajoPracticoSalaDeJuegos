import{a as B}from"./chunk-7GW3R6KP.js";import{a as F}from"./chunk-3AWWX3VY.js";import{a as $}from"./chunk-MGAIFFLP.js";import{$b as I,Ab as j,Fb as A,Gb as D,Pa as P,Ra as c,Sa as _,_ as v,_b as E,cc as V,da as y,e as U,eb as f,g,gb as x,ia as T,jb as b,kb as O,lb as k,mb as M,nb as a,ob as s,pb as C,qb as u,ra as m,rb as h,sa as p,sb as l,wb as L,xb as d,yb as G,zb as S}from"./chunk-N2RML6ZI.js";var w=U(B());var W=(()=>{let i=class i{constructor(t){this.http=t,this.apiUrl="https://random-word-api.vercel.app/api?words="}getRandomWord(){return this.http.get(`${this.apiUrl}`)}};i.\u0275fac=function(e){return new(e||i)(y($))},i.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var N=n=>({"used-button":n});function q(n,i){if(n&1&&(a(0,"span",12),d(1),s()),n&2){let o=l().$implicit;c(),G(o.toLocaleUpperCase())}}function K(n,i){n&1&&C(0,"span",13)}function Q(n,i){if(n&1&&(a(0,"span",11),f(1,q,2,1,"span",12)(2,K,1,0),s()),n&2){let o=i.$implicit,t=l();c(),b(1,t.isLetterVisible(o)?1:2)}}function X(n,i){if(n&1){let o=u();a(0,"a")(1,"button",14),h("click",function(){let e=m(o),r=e.$implicit,z=e.$index,R=l();return p(R.checkLetter(r,z))}),d(2),s()()}if(n&2){let o=i.$implicit,t=i.$index,e=l();c(),x("disabled",e.isLetterDisabled[t]||!e.inGame)("ngClass",D(3,N,e.isLetterDisabled[t]||!e.inGame)),c(),S(" ",o.toUpperCase()," ")}}function Y(n,i){if(n&1){let o=u();a(0,"button",15),h("click",function(){m(o);let e=l();return p(e.startGame())}),d(1,"Reiniciar"),s()}}function Z(n,i){if(n&1){let o=u();a(0,"button",15),h("click",function(){m(o);let e=l();return p(e.startGame())}),d(1,"Empezar"),s()}}var rt=(()=>{let i=class i{constructor(t,e){this.wordService=t,this._translateService=e,this.title="Ahorcado",this.idioma="es",this.wordToGuess="",this.palabraOculta="",this.tries=0,this.inGame=!1,this.maxTries=7,this.letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","\xF1","o","p","q","r","s","t","u","v","w","x","y","z"],this.isLetterDisabled=Array(this.letters.length).fill(!1),this.correctLetters={}}startGame(){return g(this,null,function*(){this.inGame=!0,this.tries=0,this.correctLetters={},this.isLetterDisabled.fill(!1),this.wordToGuess=(yield this.getRandomWord())[0],this.wordToGuess=yield this._translateService.translate(this.wordToGuess),this.correctLetters={};for(let t of this.wordToGuess)this.correctLetters[t]=!1;this.lettersWordToGuess=this.wordToGuess.split("")})}isLetterVisible(t){return this.correctLetters[t]}checkLetter(t,e){this.wordToGuess.includes(t)?this.correctLetters[t]=!0:this.tries++,this.isLetterDisabled[e]=!0,this.checkPlayerWin()}checkPlayerWin(){return g(this,null,function*(){let t="",e="";Object.values(this.correctLetters).every(r=>r==!0)?(t="\xA1Felicidades!",e="\xA1Has ganado! \xBFDesea jugar de nuevo?"):this.tries==this.maxTries&&(this.isLetterDisabled.fill(!0),yield new Promise(r=>setTimeout(r,800)),t="\xA1Lo siento!",e=`\xA1Has perdido! La palabra correcta era ${this.wordToGuess} 
 \xBFDesea jugar de nuevo?`),t!=""&&(this.isLetterDisabled.fill(!0),w.default.fire({backdrop:!1,background:"#fff !important",color:"white",title:`${t}`,text:`${e}`,confirmButtonText:"Jugar nuevamente",cancelButtonText:"Volver al men\xFA principal",showCancelButton:!0}).then(r=>{r.value?this.startGame():r.dismiss===w.default.DismissReason.cancel&&(window.location.href="")}))})}getRandomWord(){return new Promise((t,e)=>{this.wordService.getRandomWord().subscribe(r=>{this.wordToGuess=r,t(r)},r=>{console.error("Error fetching random word:",r),e("-1")})})}};i.\u0275fac=function(e){return new(e||i)(_(W),_(F))},i.\u0275cmp=T({type:i,selectors:[["app-ahorcado"]],standalone:!0,features:[A],decls:16,vars:6,consts:[[1,""],[1,"container-ahorcado"],[1,"text-center","p-3","border-round-sm","font-bold"],[1,"text-title"],[1,"ahorcado-img",3,"src"],[1,"letters-words"],["class","letter-container ",4,"ngFor","ngForOf"],[1,"try-text"],[1,"container-buttons"],[1,"mt-5","text-center"],["type","button",1,"btn","btn-primary","mt-2"],[1,"letter-container"],[1,"letter-to-guess"],[1,"no-content"],[1,"btn","btn-primary","m-1",3,"click","disabled","ngClass"],["type","button",1,"btn","btn-primary","mt-2",3,"click"]],template:function(e,r){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),d(4,"Juego del Ahorcado"),s(),C(5,"img",4),a(6,"div",5),f(7,Q,3,1,"span",6),s(),a(8,"h3",7),d(9),s()(),a(10,"div",8),k(11,X,3,5,"a",null,O),s()(),a(13,"div",9),f(14,Y,2,0,"button",10)(15,Z,2,0),s()()),e&2&&(c(5),L("src","/assets/ahorcado/AhorcadoImg",r.tries,".png",P),c(2),x("ngForOf",r.lettersWordToGuess),c(2),j("Intentos: ",r.tries," - ",r.maxTries," "),c(2),M(r.letters),c(3),b(14,r.inGame?14:15))},dependencies:[V,E,I],styles:[".used-button[_ngcontent-%COMP%]{background-color:#a7a7a7c5!important;border:none!important}.swal-no-background[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important}.swal-message[_ngcontent-%COMP%]{background-color:#fff!important}.text-title[_ngcontent-%COMP%]{color:#fff}.try-text[_ngcontent-%COMP%]{color:#fff!important}.letter-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.letter-to-guess[_ngcontent-%COMP%]{margin:0 0 2px;font-size:2rem}.no-content[_ngcontent-%COMP%]{display:inline-block;height:2rem;width:2rem;border-bottom:#fff .1rem solid}.letters-words[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.5em;color:#fff}.hidden[_ngcontent-%COMP%]{visibility:hidden}.container-buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;max-width:10vw;margin-top:2em}.btn[_ngcontent-%COMP%]{margin:1px}.container-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;max-width:65vw}.ahorcado-img[_ngcontent-%COMP%]{margin:2vw;height:25rem}.container-ahorcado[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:6vw}.oculta[_ngcontent-%COMP%]{margin-top:12rem}.btn-primario[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;margin-top:5px;margin-left:5px;border-radius:50%;padding:3px;width:5rem}.btn-secundario[_ngcontent-%COMP%]{background-color:#787d6c;color:#fff;border:none;margin-top:5px;margin-left:5px;border-radius:20%;padding:3px;width:5rem}.center-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}a[_ngcontent-%COMP%]{color:#fff!important;text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#4472c4}"]});let n=i;return n})();export{rt as a};
