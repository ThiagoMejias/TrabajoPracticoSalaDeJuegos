import{a as F}from"./chunk-3AWWX3VY.js";import{a as E}from"./chunk-MGAIFFLP.js";import{A as S,Fb as C,Ra as c,Sa as q,_ as b,cc as w,da as I,eb as x,g as v,gb as T,ia as _,jb as g,kb as O,lb as A,mb as P,nb as r,ob as s,qa as Q,qb as m,ra as d,rb as f,sa as p,sb as l,xb as u,ya as M,yb as y,zb as h}from"./chunk-N2RML6ZI.js";function R(e,t){if(e&1){let o=m();r(0,"a")(1,"button",3),f("click",function(){let n=d(o).$implicit,a=l();return p(a.selectAnswer(n))}),u(2),s()()}if(e&2){let o=t.$implicit;c(2),h(" ",o," ")}}var k=(()=>{let t=class t{constructor(){this.optionsAnswer=[],this.selectedAnswer="",this.answerSelected=new M}ngOnInit(){}ngOnChanges(i){i.question&&this.prepareQuestion()}prepareQuestion(){console.log(this.question),this.optionsAnswer=[this.question.correct_answer,...this.question.incorrect_answers],this.optionsAnswer.sort(()=>Math.random()-.5)}selectAnswer(i){this.selectedAnswer=i;let n=this.question.correct_answer==i;this.answerSelected.emit(n)}nextQuestion(){}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=_({type:t,selectors:[["app-question"]],inputs:{question:"question"},outputs:{answerSelected:"answerSelected"},standalone:!0,features:[Q,C],decls:7,vars:1,consts:[[1,"container-question","d-flex","flex-align-items-center","justify-content-center"],[1,"d-flex","justify-content-center"],[1,"container-options"],[1,"btn","btn-primary","answer-button","m-1",3,"click"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"div",1)(2,"h5"),u(3),s()(),r(4,"div",2),A(5,R,3,1,"a",null,O),s()()),n&2&&(c(3),h(" ",a.question.question," "),c(2),P(a.optionsAnswer))},dependencies:[w],styles:[".container-question[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff}.container-options[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center}.answer-button[_ngcontent-%COMP%]{transition:background-color .7s ease,color .7s ease}.answer-button[_ngcontent-%COMP%]:hover{background-color:#0056b3!important;color:#fff;transform:scale(1.05);box-shadow:0 4px 8px #0003}"]});let e=t;return e})();var V=(()=>{let t=class t{constructor(i){this.http=i,this.apiUrl="https://opentdb.com/api.php"}getRandomQuestions(i){let n=`${this.apiUrl}?amount=${i}&type=multiple`;return this.http.get(n).pipe(S(a=>a.results))}};t.\u0275fac=function(n){return new(n||t)(I(E))},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function $(e,t){if(e&1){let o=m();r(0,"div",3)(1,"h2"),u(2),s(),r(3,"p"),u(4),s(),r(5,"button",4),f("click",function(){d(o);let n=l(2);return p(n.restart())}),u(6,"Jugar de nuevo!"),s()()}if(e&2){let o=l(2);c(2),y(o.textFinal),c(2),h("Tuviste ",o.score," respuestas correctas ")}}function N(e,t){if(e&1){let o=m();r(0,"app-question",6),f("answerSelected",function(n){d(o);let a=l(3);return p(a.handleAnswerSelected(n))}),s()}if(e&2){let o=l(3);T("question",o.question)}}function U(e,t){if(e&1&&x(0,N,1,1,"app-question",5),e&2){let o=l(2);g(0,o.loading?-1:0)}}function W(e,t){if(e&1&&(r(0,"div",2),x(1,$,7,2,"div",3)(2,U,1,1),s()),e&2){let o=l();c(),g(1,o.showResult?1:2)}}var et=(()=>{let t=class t{constructor(i,n){this.triviaService=i,this._translationService=n,this.currentQuestionIndex=0,this.selectedAnswer="",this.showResult=!1,this.score=0,this.correctAnswer=!1,this.isWinner=!1,this.textFinal="",this.loading=!1}ngOnInit(){this.getTriviaQuestions()}getTriviaQuestions(){this.loading=!0,this.triviaService.getRandomQuestions(5).subscribe(i=>v(this,null,function*(){this.questions=i,this.questions=yield this._translationService.translateQuestions(this.questions),this.getOneQuestion(),this.loading=!1}))}getOneQuestion(){if(this.questions.length===0)return null;let i=Math.floor(Math.random()*this.questions.length),n=this.questions.splice(i,1)[0];return this.question=n,this.question}handleAnswerSelected(i){i?(this.score+=1,this.getOneQuestion()==null&&(this.loading=!0,this.isWinner=!0,this.showResult=!0,this.textFinal="Felcidades! respondiste todas las preguntas. y sumaste 10 puntos extra",this.score+=10)):(this.loading=!0,this.showResult=!0,this.textFinal="Lo siento, perdiste!")}restart(){return v(this,null,function*(){this.showResult=!1,this.currentQuestionIndex=0,this.selectedAnswer="",this.score=0,yield this.getTriviaQuestions()})}};t.\u0275fac=function(n){return new(n||t)(q(V),q(F))},t.\u0275cmp=_({type:t,selectors:[["app-preguntados"]],standalone:!0,features:[C],decls:7,vars:2,consts:[[1,"container-preguntas"],[1,"container-titles"],[1,"container-Question"],[1,"container-score"],[1,"btn","btn-primary",3,"click"],[3,"question"],[3,"answerSelected","question"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"div",1)(2,"h1"),u(3,"TRIVIA"),s(),r(4,"h5"),u(5),s()(),x(6,W,3,1,"div",2),s()),n&2&&(c(5),y(a.score),c(),g(6,a.question?6:-1))},dependencies:[w,k],styles:[".container-score[_ngcontent-%COMP%]{color:#fff!important}.container-preguntas[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column!important;align-items:center;justify-content:center}.container-titles[_ngcontent-%COMP%]{margin-bottom:10vh;color:#fff;font-family:Courier New,Courier,monospace}.container-Question[_ngcontent-%COMP%]{display:flex;flex-direction:center;align-items:center}"]});let e=t;return e})();export{et as a};