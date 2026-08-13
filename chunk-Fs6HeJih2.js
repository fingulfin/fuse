import{A as GC,Ar as pb,Ct as Rb,Gr as ts,Hr as su,Ir as rC,K as Jr,L as Hm,N as Gm,Q as Kw,Qn as iC,Qt as Xw,S as EH,Un as fu,Wt as Wm,Yn as h_,_ as Db,_n as am,bi as zC,ei as v,gi as yf,hr as mf,mn as aT,n as $b,ni as vb,nt as Lm,oi as wm,q as Jw,sn as _,st as Nm,tn as Yw,un as _m,w as Eb,wn as bm,wt as Rd,xt as Qw,y as Di}from"./chunk-EhB_p97E.js";import{t as I}from"./chunk-Dpbfsnpd.js";import{y as pi}from"./chunk-DanRzVYM.js";import{O as hi}from"./chunk-CeHvoeK2.js";import{b as q,g as Vt,m as Ie,y as pt}from"./main-EDUNU2K4.js";import"./chunk-DI6-wc3q.js";import{i as qt,n as Wr,o as zr,r as qr}from"./chunk-Fmxs-7t2.js";import{n as dt,r as lt}from"./chunk-DINxw8UU.js";import{n as ge$1,r as ye$1}from"./chunk-DDvfdbYr.js";import{r as w}from"./chunk-DoGGOGyc.js";var le=[`determinateSpinner`];function de(r,a){if(r&1&&(mf(),ts(0,`svg`,11),_m(1,`circle`,12),su()),r&2){let e=pb();wm(`viewBox`,e._viewBox()),aT(),Gm(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),wm(`r`,e._circleRadius())}}var pe=new _(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:ae})});var ae=100;var ge=10;var se=(()=>{class r{_elementRef=v(Jr);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=v(pe),i=hi(),n=this._elementRef.nativeElement;this._noopAnimations=i===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&i===`reduced-motion`&&n.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=ae;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-ge)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(i){return new(i||r)};static ɵcmp=GC({type:r,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(i,n){if(i&1&&Hm(le,5),i&2){let l;vb(l=Eb())&&(n._determinateCircle=l.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(i,n){i&2&&(wm(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,n.mode===`determinate`?n.value:null)(`mode`,n.mode),Rb(`mat-`+n.color),Gm(`width`,n.diameter,`px`)(`height`,n.diameter,`px`)(`--%NS%mat-progress-spinner-size`,n.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,n.diameter+`px`),Wm(`_mat-animation-noopable`,n._noopAnimations)(`mdc-circular-progress--indeterminate`,n.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,EH],diameter:[2,`diameter`,`diameter`,EH],strokeWidth:[2,`strokeWidth`,`strokeWidth`,EH]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(i,n){if(i&1&&(am(0,de,2,8,`ng-template`,null,0,h_),ts(2,`div`,2,1),mf(),ts(4,`svg`,3),_m(5,`circle`,4),su()(),yf(),ts(6,`div`,5)(7,`div`,6)(8,`div`,7),Nm(9,8),su(),ts(10,`div`,9),Nm(11,8),su(),ts(12,`div`,10),Nm(13,8),su()()()),i&2){let l=Db(1);aT(4),wm(`viewBox`,n._viewBox()),aT(),Gm(`stroke-dasharray`,n._strokeCircumference(),`px`)(`stroke-dashoffset`,n._strokeDashOffset(),`px`)(`stroke-width`,n._circleStrokeWidth(),`%`),wm(`r`,n._circleRadius()),aT(4),bm(`ngTemplateOutlet`,l),aT(2),bm(`ngTemplateOutlet`,l),aT(2),bm(`ngTemplateOutlet`,l)}},dependencies:[pi],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return r})();var ce=(()=>{class r{static ɵfac=function(i){return new(i||r)};static ɵmod=zC({type:r});static ɵinj=Rd({imports:[I]})}return r})();function fe(r,a){r&1&&(ts(0,`div`,6),$b(1,` Thank you for registering! We will notify you when we launch. `),su())}function _e(r,a){if(r&1&&$b(0),r&2){let e=a.$implicit;fu(` `,e.message,` `)}}function he(r,a){if(r&1&&Jw(0,_e,1,1,null,null,Kw),r&2)Xw(pb().comingSoonForm.email().errors())}function ve(r,a){r&1&&_m(0,`mat-progress-spinner`,11),r&2&&bm(`diameter`,24)}function ye(r,a){r&1&&$b(0,` Notify me when you launch `)}var k=class r{isRegistered=Di(!1);isLoading=Di(!1);comingSoonFormModel=Di({email:``});comingSoonForm=qt(this.comingSoonFormModel,a=>{zr(a.email,{message:`Email address is required`}),qr(a.email,{message:`Please enter a valid email address`})});register(a){a.preventDefault(),this.isRegistered.set(!1),this.isLoading.set(!0),setTimeout(()=>{this.isRegistered.set(!0),this.comingSoonForm().reset({email:``}),this.isLoading.set(!1)},1500)}static ɵfac=function(e){return new(e||r)};static ɵcmp=GC({type:r,selectors:[[`coming-soon`]],decls:44,vars:5,consts:[[1,`flex`,`flex-auto`,`items-center`,`justify-center`,`p-4`,`sm:p-12`],[1,`flex`,`flex-row`],[1,`flex`,`w-full`,`max-w-md`,`flex-col`,`p-8`,`sm:p-12`],[`src`,`images/logo/logo.svg`,`alt`,`Fuse logo`,1,`w-12`],[1,`leading-tight`,`mt-8`,`text-4xl`,`font-extrabold`,`tracking-tight`],[1,`mt-0.5`,`font-medium`],[1,`mt-8`,`rounded-lg`,`bg-green-200`,`p-4`,`text-green-700`,`dark:bg-green-800`,`dark:text-green-50`],[1,`mt-8`,3,`submit`],[1,`w-full`],[`id`,`email`,`matInput`,``,3,`formField`],[`type`,`submit`,`matButton`,`filled`,1,`mt-6`,`w-full`,3,`disabledInteractive`],[`mode`,`indeterminate`,1,`[--mat-progress-spinner-active-indicator-color:var(--color-white)]`,3,`diameter`],[1,`mt-8`,`text-sm`,`text-neutral-500`],[1,`relative`,`hidden`,`flex-auto`,`items-center`,`justify-center`,`overflow-hidden`,`rounded-r-xl`,`border-l`,`bg-neutral-950`,`p-8`,`sm:p-16`,`md:flex`],[`viewBox`,`0 0 960 540`,`width`,`100%`,`height`,`100%`,`preserveAspectRatio`,`xMidYMax slice`,`xmlns`,`http://www.w3.org/2000/svg`,1,`absolute`,`inset-0`,`pointer-events-none`],[`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`100`,1,`text-gray-700`,`opacity-25`],[`r`,`234`,`cx`,`196`,`cy`,`23`],[`r`,`234`,`cx`,`790`,`cy`,`491`],[`viewBox`,`0 0 220 192`,`width`,`220`,`height`,`192`,`fill`,`none`,1,`absolute`,`-top-16`,`-right-16`,`text-gray-700`],[`id`,`837c3e70-6c3a-44e6-8854-cc48c737b659`,`x`,`0`,`y`,`0`,`width`,`20`,`height`,`20`,`patternUnits`,`userSpaceOnUse`],[`x`,`0`,`y`,`0`,`width`,`4`,`height`,`4`,`fill`,`currentColor`],[`width`,`220`,`height`,`192`,`fill`,`url(#837c3e70-6c3a-44e6-8854-cc48c737b659)`],[1,`relative`,`z-10`,`w-full`,`max-w-2xl`],[1,`text-5xl`,`font-bold`,`text-white`],[1,`text-medium`,`mt-6`,`text-xl`,`text-neutral-500`],[1,`mt-12`,`flex`,`items-center`],[1,`flex`,`shrink-0`,`items-center`,`-space-x-1.5`],[`src`,`images/photos/female-18.jpg`,`alt`,`Avatar image`,1,`h-10`,`w-10`,`rounded-full`,`object-cover`,`ring-1`],[`src`,`images/photos/female-11.jpg`,`alt`,`Avatar image`,1,`h-10`,`w-10`,`rounded-full`,`object-cover`,`ring-1`],[`src`,`images/photos/male-09.jpg`,`alt`,`Avatar image`,1,`h-10`,`w-10`,`rounded-full`,`object-cover`,`ring-1`],[`src`,`images/photos/male-16.jpg`,`alt`,`Avatar image`,1,`h-10`,`w-10`,`rounded-full`,`object-cover`,`ring-1`],[1,`ml-4`,`font-medium`,`tracking-tight`,`text-neutral-500`]],template:function(e,i){e&1&&(ts(0,`div`,0)(1,`mat-card`,1)(2,`div`,2),_m(3,`img`,3),ts(4,`div`,4),$b(5,` Almost there! `),su(),ts(6,`div`,5),$b(7,` Do you want to be notified when we are ready? Register below so we can notify you about the launch! `),su(),Qw(8,fe,2,0,`div`,6),ts(9,`form`,7),Lm(`submit`,function(l){return i.register(l)}),ts(10,`mat-form-field`,8)(11,`mat-label`),$b(12,`Email address`),su(),_m(13,`input`,9),rC(),ts(14,`mat-error`),Qw(15,he,2,0),su()(),ts(16,`button`,10),Qw(17,ve,1,1,`mat-progress-spinner`,11)(18,ye,1,0),su(),ts(19,`div`,12),$b(20,` This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list. `),su()()(),ts(21,`div`,13),mf(),ts(22,`svg`,14)(23,`g`,15),_m(24,`circle`,16)(25,`circle`,17),su()(),ts(26,`svg`,18)(27,`defs`)(28,`pattern`,19),_m(29,`rect`,20),su()(),_m(30,`rect`,21),su(),yf(),ts(31,`div`,22)(32,`div`,23),$b(33,` Welcome to our community `),su(),ts(34,`div`,24),$b(35,` Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. `),su(),ts(36,`div`,25)(37,`div`,26),_m(38,`img`,27)(39,`img`,28)(40,`img`,29)(41,`img`,30),su(),ts(42,`div`,31),$b(43,` More than 17k people joined us, it's your turn `),su()()()()()()),e&2&&(aT(8),Yw(i.isRegistered()?8:-1),aT(5),bm(`formField`,i.comingSoonForm.email),iC(),aT(2),Yw(i.comingSoonForm.email().touched()&&i.comingSoonForm.email().invalid()?15:-1),aT(),bm(`disabledInteractive`,i.isLoading()),aT(),Yw(i.isLoading()?17:18))},dependencies:[Vt,Ie,q,pt,ye$1,ge$1,lt,dt,ce,se,Wr,w],encapsulation:2})};export{k as default};