import{A as GC,Dt as Rv,En as bt$1,Er as or,G as JE,Gn as gb,Gr as ts,Hr as su,K as Jr,Kt as Wv,M as Gh,Mn as cv,Pr as qr,Rn as ee$1,Ur as t_,Wt as Wm,_r as mv,bi as zC,bn as au,br as nr,ei as v,er as im,et as Le,fn as _v,fr as mH,h as Cs,hr as mf,jn as cu,k as Fy,kt as Sm,mi as yS,mn as aT,ni as vb,nn as ZC,nt as Lm,o as Av,oi as wm,pi as yI,pr as mb,qn as ge$1,ri as vv,sn as _,st as Nm,ti as vH,tn as Yw,tr as io$1,w as Eb,wt as Rd,xn as av,xr as nt$1,xt as Qw,y as Di,zt as Vm}from"./chunk-EhB_p97E.js";import{n as m,t as I}from"./chunk-Dpbfsnpd.js";import{E as at$1,L as rr,M as mt,U as xt$1,b as Ts,j as l,p as O}from"./chunk-CeHvoeK2.js";import{i as Pe,r as Ne,t as Ae}from"./chunk-BOWh0Px8.js";import{i as w,n as d,r as o,t as _$1}from"./chunk-CzqVAZUr.js";import{n as g}from"./chunk-KMIcC_Pp.js";var Dt=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var Ct=[`caption`,`colgroup, col`,`*`];function vt(i,n){i&1&&mb(0,2)}function Rt(i,n){i&1&&(ts(0,`thead`,0),Nm(1,1),su(),ts(2,`tbody`,0),Nm(3,2)(4,3),su(),ts(5,`tfoot`,0),Nm(6,4),su())}function bt(i,n){i&1&&Nm(0,1)(1,2)(2,3)(3,4)}var k=new _(`CDK_TABLE`);var ce=(()=>{class i{template=v(qr);static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[``,`cdkCellDef`,``]]})}return i})();var de=(()=>{class i{template=v(qr);static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[``,`cdkHeaderCellDef`,``]]})}return i})();var ue=(()=>{class i{template=v(qr);static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[``,`cdkFooterCellDef`,``]]})}return i})();var N=(()=>{class i{_table=v(k,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,o,r){if(t&1&&Vm(r,ce,5)(r,de,5)(r,ue,5),t&2){let s;vb(s=Eb())&&(o.cell=s.first),vb(s=Eb())&&(o.headerCell=s.first),vb(s=Eb())&&(o.footerCell=s.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,vH],stickyEnd:[2,`stickyEnd`,`stickyEnd`,vH]}})}return i})();var J=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}};var st=(()=>{class i extends J{constructor(){super(v(N),v(Jr))}static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[im]})}return i})();var at=(()=>{class i extends J{constructor(){let e=v(N),t=v(Jr);super(e,t);let o=e._table?._getCellRole();o&&t.nativeElement.setAttribute(`role`,o)}static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[`cdk-footer-cell`],[`td`,`cdk-footer-cell`,``]],hostAttrs:[1,`cdk-footer-cell`],features:[im]})}return i})();var lt=(()=>{class i extends J{constructor(){let e=v(N),t=v(Jr);super(e,t);let o=e._table?._getCellRole();o&&t.nativeElement.setAttribute(`role`,o)}static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[im]})}return i})();var ye=(()=>{class i{template=v(qr);_differs=v(yS);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ee?e.headerCell.template:this instanceof te?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,features:[JE]})}return i})();var ee=(()=>{class i extends ye{_table=v(k,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,vH]},features:[im,JE]})}return i})();var te=(()=>{class i extends ye{_table=v(k,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,vH]},features:[im,JE]})}return i})();var he=(()=>{class i extends ye{_table=v(k,{optional:!0});when;static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[im]})}return i})();var F=(()=>{class i{_viewContainer=v(Cs);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[``,`cdkCellOutlet`,``]]})}return i})();var ge=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=GC({type:i,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,o){t&1&&Nm(0,0)},dependencies:[F],encapsulation:2,changeDetection:1})}return i})();var we=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=GC({type:i,selectors:[[`cdk-footer-row`],[`tr`,`cdk-footer-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-footer-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,o){t&1&&Nm(0,0)},dependencies:[F],encapsulation:2,changeDetection:1})}return i})();var De=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=GC({type:i,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,o){t&1&&Nm(0,0)},dependencies:[F],encapsulation:2,changeDetection:1})}return i})();var ct=(()=>{class i{templateRef=v(qr);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return i})();var ot=[`top`,`bottom`,`left`,`right`];var pe=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,t=!0,o=!0,r,s,a){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=o,this.direction=r,this._positionListener=s,this._tableInjector=a,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(n);let t=[];for(let o of n)o.nodeType===o.ELEMENT_NODE&&t.push(o,...Array.from(o.children));Gh({write:()=>{for(let o of t)this._removeStickyStyle(o,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,t,o=!0,r=!0){if(!n.length||!this._isBrowser||!(e.some(R=>R)||t.some(R=>R))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=n[0],a=s.children.length,c=this.direction===`rtl`,u=c?`right`:`left`,h=c?`left`:`right`,_=e.lastIndexOf(!0),p=t.indexOf(!0),y,ke,xe;r&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...t]}),Gh({earlyRead:()=>{y=this._getCellWidths(s,o),ke=this._getStickyStartColumnPositions(y,e),xe=this._getStickyEndColumnPositions(y,t)},write:()=>{for(let R of n)for(let C=0;C<a;C++){let Me=R.children[C];e[C]&&this._addStickyStyle(Me,u,ke[C],C===_),t[C]&&this._addStickyStyle(Me,h,xe[C],C===p)}this._positionListener&&y.some(R=>!!R)&&(this._positionListener.stickyColumnsUpdated({sizes:_===-1?[]:y.slice(0,_+1).map((R,C)=>e[C]?R:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:p===-1?[]:y.slice(p).map((R,C)=>t[C+p]?R:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,t){if(!this._isBrowser)return;let o=t===`bottom`?n.slice().reverse():n,r=t===`bottom`?e.slice().reverse():e,s=[],a=[],c=[];Gh({earlyRead:()=>{for(let u=0,h=0;u<o.length;u++){if(!r[u])continue;s[u]=h;let _=o[u];c[u]=this._isNativeHtmlTable?Array.from(_.children):[_];let p=this._retrieveElementSize(_).height;h+=p,a[u]=p}},write:()=>{let u=r.lastIndexOf(!0);for(let h=0;h<o.length;h++){if(!r[h])continue;let _=s[h],p=h===u;for(let y of c[h])this._addStickyStyle(y,t,_,p)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:a,offsets:s,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:a,offsets:s,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&Gh({write:()=>{let t=n.querySelector(`tfoot`);t&&(e.some(o=>!o)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let o of e)n.style[o]=``,n.classList.remove(this._borderCellCss[o]);ot.some(o=>e.indexOf(o)===-1&&n.style[o])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex=``,this._needsPositionStickyOnElement&&(n.style.position=``),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,t,o){n.classList.add(this._stickCellCss),o&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${t}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},t=0;for(let o of ot)n.style[o]&&(t+=e[o]);return t?`${t}`:``}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],o=n.children;for(let r=0;r<o.length;r++){let s=o[r];t.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(n,e){let t=[],o=0;for(let r=0;r<n.length;r++)e[r]&&(t[r]=o,o+=n[r]);return t}_getStickyEndColumnPositions(n,e){let t=[],o=0;for(let r=n.length;r>0;r--)e[r]&&(t[r]=o,o+=n[r]);return t}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let t=n.getBoundingClientRect(),o={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(n,o),this._resizeObserver.observe(n,{box:`border-box`})),o}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(o=>!e.has(o));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(n){let e=!1;for(let t of n){let o=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};o.width!==this._elemSizeCache.get(t.target)?.width&&St(t.target)&&(e=!0),this._elemSizeCache.set(t.target,o)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function St(i){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(n=>i.classList.contains(n))}var Z=new _(`STICKY_POSITIONING_LISTENER`);var Ce=(()=>{class i{viewContainer=v(Cs);elementRef=v(Jr);constructor(){let e=v(k);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[``,`rowOutlet`,``]]})}return i})();var ve=(()=>{class i{viewContainer=v(Cs);elementRef=v(Jr);constructor(){let e=v(k);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[``,`headerRowOutlet`,``]]})}return i})();var Re=(()=>{class i{viewContainer=v(Cs);elementRef=v(Jr);constructor(){let e=v(k);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[``,`footerRowOutlet`,``]]})}return i})();var be=(()=>{class i{viewContainer=v(Cs);elementRef=v(Jr);constructor(){let e=v(k);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=ZC({type:i,selectors:[[``,`noDataRowOutlet`,``]]})}return i})();var Se=(()=>{class i{_differs=v(yS);_changeDetectorRef=v(mH);_elementRef=v(Jr);_dir=v(m,{optional:!0});_platform=v(l);_viewRepeater;_viewportRuler=v(Pe);_injector=v(ge$1);_virtualScrollViewport=v(Ne,{optional:!0,host:!0});_positionListener=v(Z,{optional:!0})||v(Z,{optional:!0,skipSelf:!0});_document=v(bt$1);_data;_renderedRange;_onDestroy=new ee$1;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new ee$1;_footerRowStickyUpdates=new ee$1;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new ee$1;_dataStream=new ee$1;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new nt$1;viewChange=new nr({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){v(new Fy(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,o)=>this.trackBy?this.trackBy(o.dataIndex,o.data):o)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Wv(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new _$1:new g,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),w(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(o,r,s)=>this._getEmbeddedViewArgs(o.item,s),o=>o.item.data,o$1=>{o$1.operation===o.INSERTED&&o$1.context&&this._renderCellTemplateForItem(o$1.record.item.rowDef,o$1.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(o=>{let r=t.get(o.currentIndex);r.context.$implicit=o.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let o=nt(this._headerRowOutlet,`thead`);o&&(o.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let o=nt(this._footerRowOutlet,`tfoot`);o&&(o.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...o],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,s)=>{this._addStickyColumnStyles([r],this._headerRowDefs[s])}),this._rowDefs.forEach(r=>{let s=[];for(let a=0;a<t.length;a++)this._renderRows[a].rowDef===r&&s.push(t[a]);this._addStickyColumnStyles(s,r)}),o.forEach((r,s)=>{this._addStickyColumnStyles([r],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),o=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let s=this._data[r],a=this._getRenderRowsForData(s,r,o.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let c=0;c<a.length;c++){let u=a[c],h=this._cachedRenderRowsMap.get(u.data);h.has(u.rowDef)?h.get(u.rowDef).push(u):h.set(u.rowDef,[u]),e.push(u)}}return e}_getRenderRowsForData(e,t,o){return this._getRowDefs(e,t).map(s=>{let a=o&&o.has(s)?o.get(s):[];if(a.length){let c=a.shift();return c.dataIndex=t,c}else return{data:e,rowDef:s,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),le(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=le(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=le(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=le(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,a)=>{let c=!!a.getColumnsDiff();return s||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(e,!1);o&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||o||r}_switchDataSource(e){this._data=[],w(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;w(this.dataSource)?e=this.dataSource.connect(this):vv(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=mv(this.dataSource)),this._renderChangeSubscription=_v([e,this.viewChange]).pipe(Wv(this._onDestroy)).subscribe(([t,o])=>{this._data=t||[],this._renderedRange=o,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let o=Array.from(t?.columns||[]).map(a=>{return this._columnDefsByName.get(a)}),r=o.map(a=>a.sticky),s=o.map(a=>a.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let o=0;o<e.viewContainer.length;o++){let r=e.viewContainer.get(o);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(s=>s.when&&s.when(t,e))||this._defaultRowDef;r&&o.push(r)}return o.length,o}_getEmbeddedViewArgs(e,t){let o=e.rowDef,r={$implicit:e.data};return{templateRef:o.template,context:r,index:t}}_renderRow(e,t,o,r={}){let s=e.viewContainer.createEmbeddedView(t.template,r,o);return this._renderCellTemplateForItem(t,r),s}_renderCellTemplateForItem(e,t){for(let o of this._getCellTemplates(e))F.mostRecentCellOutlet&&F.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,o=e.length;t<o;t++){let s=e.get(t).context;s.count=o,s.first=t===0,s.last=t===o-1,s.even=t%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[t].dataIndex,s.renderIndex=t):s.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let o=this._columnDefsByName.get(t);return e.extractCellTemplate(o)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,o)=>t||o.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new pe(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:mv()).pipe(Wv(this._onDestroy)).subscribe(o=>{this._stickyStyler.direction=o,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?cv:av;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Rv(0,t),Wv(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(o,r)=>this._measureRangeSize(o,r)}),_v([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Wv(this._onDestroy)).subscribe(([o,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let s=0;s<r.elements.length;s++){let a=r.elements[s];if(a){let c=r.offsets[s],u=o!==0?Math.max(o-c,c):-c;for(let h of a)h.style.top=`${-u}px`}}}),_v([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Wv(this._onDestroy)).subscribe(([o,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let s=0;s<r.elements.length;s++){let a=r.elements[s];if(a)for(let c of a)c.style.bottom=`${o+r.offsets[s]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(t){let r=o.createEmbeddedView(e.templateRef),s=r.rootNodes[0];if(r.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE){s.setAttribute(`role`,`row`),s.classList.add(...e._contentClassNames);let a=s.querySelectorAll(e._cellSelector);for(let c=0;c<a.length;c++)a[c].classList.add(...e._cellClassNames)}}else o.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let o=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<o.start||(e.end,o.end);let s=e.start-o.start,a=e.end-e.start,c,u;for(let p=0;p<a;p++){let y=r.get(p+s);if(y&&y.rootNodes.length){c=u=y.rootNodes[0];break}}for(let p=a-1;p>-1;p--){let y=r.get(p+s);if(y&&y.rootNodes.length){u=y.rootNodes[y.rootNodes.length-1];break}}let h=c?.getBoundingClientRect?.(),_=u?.getBoundingClientRect?.();return h&&_?_.bottom-h.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||i)};static ɵcmp=GC({type:i,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,o,r){if(t&1&&Vm(r,ct,5)(r,N,5)(r,he,5)(r,ee,5)(r,te,5),t&2){let s;vb(s=Eb())&&(o._noDataRow=s.first),vb(s=Eb())&&(o._contentColumnDefs=s),vb(s=Eb())&&(o._contentRowDefs=s),vb(s=Eb())&&(o._contentHeaderRowDefs=s),vb(s=Eb())&&(o._contentFooterRowDefs=s)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,o){t&2&&Wm(`cdk-table-fixed-layout`,o.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,vH],fixedLayout:[2,`fixedLayout`,`fixedLayout`,vH],recycleRows:[2,`recycleRows`,`recycleRows`,vH]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[t_([{provide:k,useExisting:i},{provide:Z,useValue:null}])],ngContentSelectors:Ct,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,o){t&1&&(gb(Dt),mb(0),mb(1,1),Qw(2,vt,1,0),Qw(3,Rt,7,0)(4,bt,4,0)),t&2&&(aT(2),Yw(o._isServer?2:-1),aT(),Yw(o._isNativeHtmlTable?3:4))},dependencies:[ve,Ce,be,Re],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return i})();function le(i,n){return i.concat(Array.from(n))}function nt(i,n){let e=n.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let o=t.nodeType===1?t.nodeName:null;if(o===e)return t;if(o===`TABLE`)break;t=t.parentNode}return null}var dt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=zC({type:i});static ɵinj=Rd({imports:[Ae]})}return i})();var kt=[`*`,[[``,`matSortHeaderIcon`,``]]];var xt=[`*`,`[matSortHeaderIcon]`];function Mt(i,n){i&1&&(mf(),au(0,`svg`,3),Sm(1,`path`,4),cu())}function Tt(i,n){i&1&&(au(0,`div`,2),mb(1,1,null,Mt,2,0),cu())}var ut=new _(`MAT_SORT_DEFAULT_OPTIONS`);var Ft=(()=>{class i{_defaultOptions;_initializedStream=new or(1);sortables=new Map;_stateChanges=new ee$1;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new nt$1;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,o=Nt(e.start||this.start,t),r=o.indexOf(this.direction)+1;return r>=o.length&&(r=0),o[r]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(t){return new(t||i)(io$1(ut,8))};static ɵdir=ZC({type:i,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,vH],disabled:[2,`matSortDisabled`,`disabled`,vH]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[JE]})}return i})();function Nt(i,n){let e=[`asc`,`desc`];return i==`desc`&&e.reverse(),n||e.push(``),e}var Si=(()=>{class i{_sort=v(Ft,{optional:!0});_columnDef=v(N,{optional:!0});_changeDetectorRef=v(mH);_focusMonitor=v(mt);_elementRef=v(Jr);_ariaDescriber=v(Ts,{optional:!0});_renderChanges;_animationsDisabled=xt$1();_recentlyCleared=Di(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){v(O).load(rr);let e=v(ut,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Av(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(t){return new(t||i)};static ɵcmp=GC({type:i,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(t,o){t&1&&Lm(`click`,function(){return o._toggleOnInteraction()})(`keydown`,function(s){return o._handleKeydown(s)})(`mouseleave`,function(){return o._recentlyCleared.set(null)}),t&2&&(wm(`aria-sort`,o._getAriaSortAttribute()),Wm(`mat-sort-header-disabled`,o._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,vH],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,vH]},exportAs:[`matSortHeader`],ngContentSelectors:xt,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(t,o){t&1&&(gb(kt),au(0,`div`,0)(1,`div`,1),mb(2),cu(),Qw(3,Tt,3,0,`div`,2),cu()),t&2&&(Wm(`mat-sort-header-sorted`,o._isSorted())(`mat-sort-header-position-before`,o.arrowPosition===`before`)(`mat-sort-header-descending`,o._sort.direction===`desc`)(`mat-sort-header-ascending`,o._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,o._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,o._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,o._animationsDisabled),wm(`tabindex`,o._isDisabled()?null:0)(`role`,o._isDisabled()?null:`button`),aT(3),Yw(o._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return i})();var ki=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=zC({type:i});static ɵinj=Rd({imports:[I]})}return i})();var Et=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var Ot=[`caption`,`colgroup, col`,`*`];function It(i,n){i&1&&mb(0,2)}function At(i,n){i&1&&(ts(0,`thead`,0),Nm(1,1),su(),ts(2,`tbody`,2),Nm(3,3)(4,4),su(),ts(5,`tfoot`,0),Nm(6,5),su())}function Ht(i,n){i&1&&Nm(0,1)(1,3)(2,4)(3,5)}var Ui=(()=>{class i extends Se{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵcmp=GC({type:i,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,o){t&2&&Wm(`mat-table-fixed-layout`,o.fixedLayout)},exportAs:[`matTable`],features:[t_([{provide:Se,useExisting:i},{provide:k,useExisting:i},{provide:Z,useValue:null}]),im],ngContentSelectors:Ot,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,o){t&1&&(gb(Et),mb(0),mb(1,1),Qw(2,It,1,0),Qw(3,At,7,0)(4,Ht,4,0)),t&2&&(aT(2),Yw(o._isServer?2:-1),aT(),Yw(o._isNativeHtmlTable?3:4))},dependencies:[ve,Ce,be,Re],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return i})();var Vi=(()=>{class i extends ce{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[``,`matCellDef`,``]],features:[t_([{provide:ce,useExisting:i}]),im]})}return i})();var Qi=(()=>{class i extends de{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[``,`matHeaderCellDef`,``]],features:[t_([{provide:de,useExisting:i}]),im]})}return i})();var Wi=(()=>{class i extends ue{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[``,`matFooterCellDef`,``]],features:[t_([{provide:ue,useExisting:i}]),im]})}return i})();var $i=(()=>{class i extends N{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[t_([{provide:N,useExisting:i}]),im]})}return i})();var qi=(()=>{class i extends st{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[im]})}return i})();var Ki=(()=>{class i extends at{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[`mat-footer-cell`],[`td`,`mat-footer-cell`,``]],hostAttrs:[1,`mat-mdc-footer-cell`,`mdc-data-table__cell`],features:[im]})}return i})();var Yi=(()=>{class i extends lt{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[im]})}return i})();var Gi=(()=>{class i extends ee{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,vH]},features:[t_([{provide:ee,useExisting:i}]),im]})}return i})();var Xi=(()=>{class i extends te{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[``,`matFooterRowDef`,``]],inputs:{columns:[0,`matFooterRowDef`,`columns`],sticky:[2,`matFooterRowDefSticky`,`sticky`,vH]},features:[t_([{provide:te,useExisting:i}]),im]})}return i})();var Zi=(()=>{class i extends he{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵdir=ZC({type:i,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[t_([{provide:he,useExisting:i}]),im]})}return i})();var Ji=(()=>{class i extends ge{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵcmp=GC({type:i,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[t_([{provide:ge,useExisting:i}]),im],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,o){t&1&&Nm(0,0)},dependencies:[F],encapsulation:2,changeDetection:1})}return i})();var eo=(()=>{class i extends we{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵcmp=GC({type:i,selectors:[[`mat-footer-row`],[`tr`,`mat-footer-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-footer-row`,`mdc-data-table__row`],exportAs:[`matFooterRow`],features:[t_([{provide:we,useExisting:i}]),im],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,o){t&1&&Nm(0,0)},dependencies:[F],encapsulation:2,changeDetection:1})}return i})();var to=(()=>{class i extends De{static ɵfac=(()=>{let e;return function(o){return(e||(e=yI(i)))(o||i)}})();static ɵcmp=GC({type:i,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[t_([{provide:De,useExisting:i}]),im],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,o){t&1&&Nm(0,0)},dependencies:[F],encapsulation:2,changeDetection:1})}return i})();var io=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=zC({type:i});static ɵinj=Rd({imports:[dt,I]})}return i})();var Pt=9007199254740991;var ht=class extends d{_data;_renderData=new nr([]);_filter=new nr(``);_internalPageChanges=new ee$1;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(n){n=Array.isArray(n)?n:[],this._data.next(n),this._renderChangesSubscription||this._filterData(n)}get filter(){return this._filter.value}set filter(n){this._filter.next(n),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(n){this._sort=n,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(n){this._paginator=n,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(n,e)=>{let t=n[e];if(at$1(t)){let o=Number(t);return o<Pt?o:t}return t};sortData=(n,e)=>{let t=e.active,o=e.direction;return!t||o==``?n:n.sort((r,s)=>{let a=this.sortingDataAccessor(r,t),c=this.sortingDataAccessor(s,t),u=typeof a,h=typeof c;u!==h&&(u===`number`&&(a+=``),h===`number`&&(c+=``));let _=0;return a!=null&&c!=null?a>c?_=1:a<c&&(_=-1):a!=null?_=1:c!=null&&(_=-1),_*(o==`asc`?1:-1)})};filterPredicate=(n,e)=>{let t=e.trim().toLowerCase();return Object.values(n).some(o=>`${o}`.toLowerCase().includes(t))};constructor(n=[]){super(),this._data=new nr(n),this._updateChangeSubscription()}_updateChangeSubscription(){let n=this._sort?Av(this._sort.sortChange,this._sort.initialized):mv(null),e=this._paginator?Av(this._paginator.page,this._internalPageChanges,this._paginator.initialized):mv(null),t=this._data,s=_v([_v([_v([t,this._filter]).pipe(Le(([a])=>this._filterData(a))),n]).pipe(Le(([a])=>this._orderData(a))),e]).pipe(Le(([a])=>this._pageData(a)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=s.subscribe(a=>this._renderData.next(a))}_filterData(n){return this.filteredData=this.filter==null||this.filter===``?n:n.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(n){return this.sort?this.sortData(n.slice(),this.sort):n}_pageData(n){if(!this.paginator)return n;let e=this.paginator.pageIndex*this.paginator.pageSize;return n.slice(e,e+this.paginator.pageSize)}_updatePaginator(n){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=n,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,o=Math.min(e.pageIndex,t);o!==e.pageIndex&&(e.pageIndex=o,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};export{ki as _,Ki as a,Ui as c,Xi as d,Yi as f,io as g,ht as h,Ji as i,Vi as l,eo as m,Ft as n,Qi as o,Zi as p,Gi as r,Si as s,$i as t,Wi as u,qi as v,to as y};