import{A as GC,Ar as pb,Er as or,Gr as ts,Hr as su,Lr as rf,Q as Kw,Qt as Xw,Rn as ee,S as EH,Tr as of,Un as fu,Vr as sb,Yr as ty,Z as Kr,_ as Db,bi as zC,ei as v,fr as mH,gi as yf,hr as mf,m as Cm,mn as aT,n as $b,nt as Lm,oi as wm,q as Jw,sn as _,ti as vH,tn as Yw,un as _m,wn as bm,wt as Rd,xr as nt$1,xt as Qw}from"./chunk-EhB_p97E.js";import{y as Te}from"./chunk-CeHvoeK2.js";import{O as J,m as Ie}from"./main-4OSHSCWR.js";import{n as Nt,r as Pt}from"./chunk-CL1GelSu.js";import{n as mt,t as Yt}from"./chunk-BMJjIcL1.js";import{r as lt,t as Z}from"./chunk-DD9CN1Mf.js";function X(i,g){if(i&1&&(ts(0,`mat-option`,17),$b(1),su()),i&2){let t=g.$implicit;bm(`value`,t),aT(),fu(` `,t,` `)}}function Y(i,g){if(i&1){let t=sb();ts(0,`mat-form-field`,14)(1,`mat-select`,16,0),Lm(`selectionChange`,function(e){rf(t);return of(pb(2)._changePageSize(e.value))}),Jw(3,X,2,2,`mat-option`,17,Kw),su(),ts(5,`div`,18),Lm(`click`,function(){rf(t);return of(Db(2).open())}),su()()}if(i&2){let t=pb(2);bm(`appearance`,t._formFieldAppearance)(`color`,t.color),aT(),bm(`value`,t.pageSize)(`disabled`,t.disabled),Cm(`aria-labelledby`,t._pageSizeLabelId),bm(`panelClass`,t.selectConfig.panelClass||``)(`disableOptionCentering`,t.selectConfig.disableOptionCentering),aT(2),Xw(t._displayedPageSizeOptions)}}function tt(i,g){if(i&1&&(ts(0,`div`,15),$b(1),su()),i&2){let t=pb(2);aT(),ty(t.pageSize)}}function et(i,g){if(i&1&&(ts(0,`div`,3)(1,`div`,13),$b(2),su(),Qw(3,Y,6,7,`mat-form-field`,14),Qw(4,tt,2,1,`div`,15),su()),i&2){let t=pb();aT(),wm(`id`,t._pageSizeLabelId),aT(),fu(` `,t._intl.itemsPerPageLabel,` `),aT(),Yw(t._displayedPageSizeOptions.length>1?3:-1),aT(),Yw(t._displayedPageSizeOptions.length<=1?4:-1)}}function it(i,g){if(i&1){let t=sb();ts(0,`button`,19),Lm(`click`,function(){rf(t);let e=pb();return of(e._buttonClicked(0,e._previousButtonsDisabled()))}),mf(),ts(1,`svg`,8),_m(2,`path`,20),su()()}if(i&2){let t=pb();bm(`matTooltip`,t._intl.firstPageLabel)(`matTooltipDisabled`,t._previousButtonsDisabled())(`disabled`,t._previousButtonsDisabled())(`tabindex`,t._previousButtonsDisabled()?-1:null),wm(`aria-label`,t._intl.firstPageLabel)}}function at(i,g){if(i&1){let t=sb();ts(0,`button`,21),Lm(`click`,function(){rf(t);let e=pb();return of(e._buttonClicked(e.getNumberOfPages()-1,e._nextButtonsDisabled()))}),mf(),ts(1,`svg`,8),_m(2,`path`,22),su()()}if(i&2){let t=pb();bm(`matTooltip`,t._intl.lastPageLabel)(`matTooltipDisabled`,t._nextButtonsDisabled())(`disabled`,t._nextButtonsDisabled())(`tabindex`,t._nextButtonsDisabled()?-1:null),wm(`aria-label`,t._intl.lastPageLabel)}}var nt=(()=>{class i{changes=new ee;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(t,a,e)=>{if(e==0||a==0)return`0 of ${e}`;e=Math.max(e,0);let s=t*a,z=s<e?Math.min(s+a,e):s+a;return`${s+1} \u2013 ${z} of ${e}`};static ɵfac=function(a){return new(a||i)};static ɵprov=Kr({token:i,factory:i.ɵfac})}return i})();var ot=50;var rt=new _(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var st=(()=>{class i{_intl=v(nt);_changeDetectorRef=v(mH);_formFieldAppearance;_pageSizeLabelId=v(Te).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new or(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(a=>EH(a,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new nt$1;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,a=v(rt,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),a){let{pageSize:e,pageSizeOptions:s,hidePageSize:z,showFirstLastButtons:C}=a;e!=null&&(this._pageSize=e),s!=null&&(this._pageSizeOptions=s),z!=null&&(this.hidePageSize=z),C!=null&&(this.showFirstLastButtons=C)}this._formFieldAppearance=a?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let a=this.pageIndex*this.pageSize,e=this.pageIndex;this.pageIndex=Math.floor(a/t)||0,this.pageSize=t,this._emitPageEvent(e)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:ot),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,a)=>t-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let a=this.pageIndex;t!==a&&(this.pageIndex=t,this._emitPageEvent(a))}_buttonClicked(t,a){a||this._navigate(t)}static ɵfac=function(a){return new(a||i)};static ɵcmp=GC({type:i,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,EH],length:[2,`length`,`length`,EH],pageSize:[2,`pageSize`,`pageSize`,EH],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,vH],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,vH],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,vH]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(a,e){a&1&&(ts(0,`div`,1)(1,`div`,2),Qw(2,et,5,4,`div`,3),ts(3,`div`,4)(4,`div`,5),$b(5),su(),Qw(6,it,3,5,`button`,6),ts(7,`button`,7),Lm(`click`,function(){return e._buttonClicked(e.pageIndex-1,e._previousButtonsDisabled())}),mf(),ts(8,`svg`,8),_m(9,`path`,9),su()(),yf(),ts(10,`button`,10),Lm(`click`,function(){return e._buttonClicked(e.pageIndex+1,e._nextButtonsDisabled())}),mf(),ts(11,`svg`,8),_m(12,`path`,11),su()(),Qw(13,at,3,5,`button`,12),su()()()),a&2&&(aT(2),Yw(e.hidePageSize?-1:2),aT(3),fu(` `,e._intl.getRangeLabel(e.pageIndex,e.pageSize,e.length),` `),aT(),Yw(e.showFirstLastButtons?6:-1),aT(),bm(`matTooltip`,e._intl.previousPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),wm(`aria-label`,e._intl.previousPageLabel),aT(3),bm(`matTooltip`,e._intl.nextPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),wm(`aria-label`,e._intl.nextPageLabel),aT(3),Yw(e.showFirstLastButtons?13:-1))},dependencies:[Ie,Nt,J,Z,mt],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return i})();var It=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=zC({type:i});static ɵinj=Rd({imports:[lt,Pt,Yt,st]})}return i})();export{st as n,It as t};