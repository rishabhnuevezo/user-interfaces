(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Co8E:function(e,t,s){"use strict";s.r(t),s.d(t,"DesksModule",(function(){return ge}));var n=s("2kYt"),i=s("nIj0"),o=s("sEIs"),c=s("F1o0"),l=s("oRDy"),a=s("EM62"),r=s("D57K"),d=s("C05f"),b=s("mWib"),u=s("TLy2"),h=s("YtkY"),f=s("4e/d"),g=s("wqq/"),p=s("jOdJ"),m=s("9MvL"),k=s("KuCG"),v=s("CzDk"),_=s("05Mk"),j=s("20lr"),w=s("/It1"),O=s("dJst"),y=s("Rc+I"),V=s("OZ4H"),U=s("HM3f"),D=s("PBFl"),x=s("0/Ep"),M=s("wobF"),P=s("+Tre"),L=s("QP4N"),C=s("csyo");function q(e,t){if(1&e&&(a.Vb(0,"div",23),a.Vb(1,"div",15),a.Lc(2),a.Ub(),a.Vb(3,"div",16),a.Lc(4),a.Ub(),a.Vb(5,"div",17),a.Vb(6,"mat-checkbox",24),a.fc("ngModelChange",(function(e){return t.$implicit.bookable=e})),a.Ub(),a.Ub(),a.Vb(7,"div",25),a.Vb(8,"item-list-field",26),a.fc("ngModelChange",(function(e){return t.$implicit.groups=e})),a.Ub(),a.Ub(),a.Ub()),2&e){const e=t.$implicit;a.Db(2),a.Nc(" ",e.id," "),a.Db(2),a.Mc(e.name),a.Db(2),a.qc("ngModel",e.bookable),a.Db(2),a.qc("ngModel",e.groups)}}function I(e,t){if(1&e){const e=a.Wb();a.Tb(0),a.Vb(1,"main",6),a.Vb(2,"div",7),a.Vb(3,"searchbar",8),a.fc("modelChange",(function(t){return a.yc(e),a.jc().filter$.next(t)})),a.kc(4,"async"),a.Ub(),a.Qb(5,"div",9),a.Vb(6,"button",10),a.Lc(7," Upload List "),a.Vb(8,"input",11),a.fc("change",(function(t){return a.yc(e),a.jc().upload(t)})),a.Ub(),a.Ub(),a.Vb(9,"button",12),a.fc("click",(function(){return a.yc(e),a.jc().download()})),a.Lc(10," Download List "),a.Ub(),a.Ub(),a.Vb(11,"div",13),a.Vb(12,"div",14),a.Vb(13,"div",15),a.Lc(14,"ID"),a.Ub(),a.Vb(15,"div",16),a.Lc(16,"Name"),a.Ub(),a.Vb(17,"div",17),a.Lc(18,"Bookable"),a.Ub(),a.Vb(19,"div",18),a.Lc(20,"Groups"),a.Ub(),a.Ub(),a.Vb(21,"div",19),a.Jc(22,q,9,4,"div",20),a.kc(23,"async"),a.Ub(),a.Ub(),a.Ub(),a.Vb(24,"footer",21),a.Vb(25,"button",22),a.fc("click",(function(){return a.yc(e),a.jc().save()})),a.Lc(26,"Save"),a.Ub(),a.Ub(),a.Sb()}if(2&e){const e=a.jc();a.Db(3),a.qc("model",a.lc(4,2,e.filter$)),a.Db(19),a.qc("ngForOf",a.lc(23,4,e.desk_list))}}function z(e,t){if(1&e&&(a.Vb(0,"main",27),a.Qb(1,"mat-spinner",28),a.Vb(2,"p"),a.Lc(3),a.Ub(),a.Ub()),2&e){const e=a.jc();a.Db(1),a.qc("diameter",48),a.Db(2),a.Mc(e.loading)}}let F=(()=>{class e{constructor(e,t){this._data=e,this._dialog_ref=t,this.building=this._data.building,this.level=this._data.level,this.desks$=new d.a(this._data.desks),this.filter$=new d.a(""),this.desk_list=Object(U.b)([this.filter$,this.desks$]).pipe(Object(h.a)(e=>{const[t,s]=e;return s.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())||e.id.toLowerCase().includes(t.toLowerCase()))}))}download(){const e=this.desks$.getValue().map(e=>e.format()),t=Object(j.l)(e),s=this.level.display_name.split(" ").join("-").toLowerCase();Object(j.i)(`desks_${s}.csv`,t)}upload(e){if(e.target){const t=e.target.files[0];if(t){this.loading="Uploading...";const e=new FileReader;e.readAsText(t,"UTF-8"),e.onload=()=>{this.processCSV(e.result),this.loading=""},e.onerror=e=>{this.loading="",Object(j.m)("Error reading file.")}}}}save(){return Object(r.a)(this,void 0,void 0,(function*(){this.loading="Saving changes to desks...",yield Object(w.v)(this.level.id,{name:"desks",description:"desks",details:this.desks$.getValue()}).toPromise().catch(e=>{throw this.loading="",Object(j.m)("Error saving desk data. Error: "+(e.message||e)),e}),Object(j.o)("Successfully updated desks"),this.loading="",this._dialog_ref.close()}))}processCSV(e){const t=Object(j.f)(e);this.desks$.next(t.map(e=>new O.b(e))),Object(j.o)("Upload was sucessful. Click Save Button to save the changes")}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(V.a),a.Pb(V.g))},e.\u0275cmp=a.Jb({type:e,selectors:[["desk-list-modal"]],decls:11,vars:4,consts:[[1,"flex","items-center"],[2,"margin-right","1rem"],["mat-icon-button","","mat-dialog-close",""],["className","material-icons"],[4,"ngIf","ngIfElse"],["load_state",""],[1,"flex","flex-col"],[1,"flex","items-center","p-2","space-x-2","w-full","border-b","border-gray-300"],[3,"model","modelChange"],[1,"flex-1","w-0"],["mat-button","",1,"relative"],["type","file",1,"absolute","inset-0","opacity-0",3,"change"],["mat-button","",3,"click"],[1,"flex","flex-col","flex-1","w-full"],[1,"flex","items-center","p-2","border-b","border-gray-300","font-medium"],["flex","",1,"w-40","p-1","flex-1"],[1,"w-32","p-1"],[1,"w-24","p-1"],[1,"w-52","p-1"],["table","",1,"flex-1","overflow-auto"],["class","flex item-center p-2 border-b border-gray-200",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-center","space-x-2","p-2","border-t","border-gray-300"],["mat-button","",1,"w-32",3,"click"],[1,"flex","item-center","p-2","border-b","border-gray-200"],[3,"ngModel","ngModelChange"],[1,"w-52"],["hide-outline","","no-wrapper","",3,"ngModel","ngModelChange"],[1,"w-64","h-48","mx-auto","flex","flex-col","items-center","justify-center"],[1,"m-4",3,"diameter"]],template:function(e,t){if(1&e&&(a.Vb(0,"header",0),a.Vb(1,"h2",1),a.Vb(2,"strong"),a.Lc(3,"List of Desks"),a.Ub(),a.Lc(4),a.Ub(),a.Vb(5,"button",2),a.Vb(6,"app-icon",3),a.Lc(7,"close"),a.Ub(),a.Ub(),a.Ub(),a.Jc(8,I,27,6,"ng-container",4),a.Jc(9,z,4,2,"ng-template",null,5,a.Kc)),2&e){const e=a.vc(10);a.Db(4),a.Oc(" - ",t.building.display_name||t.building.name,", ",t.level.display_name||t.level.name," "),a.Db(4),a.qc("ngIf",!t.loading)("ngIfElse",e)}},directives:[D.b,V.d,x.a,n.n,M.a,n.m,P.a,i.l,i.o,L.a,C.b],pipes:[n.b],styles:["main[_ngcontent-%COMP%] {\n                max-height: 65vh;\n            }\n\n            [table][_ngcontent-%COMP%] {\n                height: 1px;\n                max-height: 50vh;\n            }"]}),e})(),A=(()=>{class e extends j.b{constructor(e,t){super(),this._org=e,this._dialog=t,this._filters=new d.a({}),this._desk_bookings=[],this._desks=[],this._loading=new d.a(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.desks=this._filters.pipe(Object(b.a)(500),Object(u.a)(e=>{var t;const s=e.zones||[];return s.includes("All")?Object(w.h)(null===(t=this._org.building)||void 0===t?void 0:t.id,{name:"desks"}).pipe(Object(h.a)(e=>e.map(e=>e.metadata.desks.details).reduce((e,t)=>[...e,...t],[]))):Object(w.s)(s[0],{name:"desks"}).pipe(Object(h.a)(e=>e.details))}),Object(f.a)(e=>[]),Object(h.a)(e=>(e instanceof Array||(e=[]),e.sort((e,t)=>e.name.localeCompare(t.name)),this._desks=e.map(e=>new O.b(e)),this._desks)),Object(g.a)()),this.bookings=this._filters.pipe(Object(b.a)(500),Object(u.a)(e=>{this._loading.next(!0);const t=e.date?new Date(e.date):new Date;let s=(e.zones||[]).filter(e=>-1!==e&&"-1"!==e&&"All"!==e);return(null==s?void 0:s.length)||(s=this._org.levelsForBuilding(this._org.building).map(e=>e.id)),Object(_.e)({period_start:Math.floor(Object(m.a)(t).valueOf()/1e3),period_end:Math.floor(Object(k.a)(t).valueOf()/1e3),type:"desk",zones:(s||[]).join(",")})}),Object(h.a)(e=>(e.sort((e,t)=>e.date-t.date),this._desk_bookings=e,this._loading.next(!1),e)),Object(g.a)())}setFilters(e){var t,s,n;(null===(t=e.zones)||void 0===t?void 0:t.includes("All"))?e.zones=["All",...this._org.levelsForBuilding(this._org.building).map(e=>e.id)]:e.zones&&(null===(n=null===(s=this._filters.getValue())||void 0===s?void 0:s.zones)||void 0===n?void 0:n.includes("All"))&&(e.zones=[]),console.warn("Zones:",e.zones),this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}startPolling(e=3e4){this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkinDesk(e){return Object(r.a)(this,void 0,void 0,(function*(){"failed"===(yield Object(_.d)(e.id,!0).toPromise().catch(e=>"failed"))?Object(j.m)("Error checking in desk booking"):Object(j.o)(`Checked in ${e.user_name}.`)}))}approveDesk(e){return Object(r.a)(this,void 0,void 0,(function*(){"failed"===(yield Object(_.c)(e.id).toPromise().catch(e=>"failed"))?Object(j.m)("Error approving in desk booking"):Object(j.o)(`Approved desk booking for ${e.user_name} on ${Object(v.a)(e.date,"MMM Do")}.`)}))}rejectDesk(e){return Object(r.a)(this,void 0,void 0,(function*(){"failed"===(yield Object(_.f)(e.id).toPromise().catch(e=>"failed"))?Object(j.m)("Error rejecting in desk booking"):Object(j.o)(`Rejected desk booking for ${e.user_name} on ${Object(v.a)(e.date,"MMM Do")}.`)}))}giveAccess(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield Object(_.g)(new _.a(Object.assign(Object.assign({},e),{access:!0}))).toPromise().catch(e=>"failed");if("failed"===t)return Object(j.m)("Error giving building access booking host");Object(j.o)(`Successfully gave building access to ${e.user_name} for desk booking.`),this._desk_bookings=[...this._desk_bookings,t]}))}rejectAllDesks(){return Object(r.a)(this,void 0,void 0,(function*(){const e=this._desk_bookings||[];if(e.length>0){const t=this._dialog.open(y.c,{data:{title:"Cancel all desk bookings",content:"Are you sure you want to cancel all bookings for the selected date?",icon:{type:"icon",class:"material-icons",content:"delete"}}});return new Promise((s,n)=>Object(r.a)(this,void 0,void 0,(function*(){let i=!1;t.componentInstance.event.pipe(Object(p.a)(e=>"done"===e.reason)).subscribe(()=>Object(r.a)(this,void 0,void 0,(function*(){t.componentInstance.loading="Rejecting all desks for selected date...",i=!0,yield Promise.all(e.map(e=>Object(_.f)(e.id).toPromise())),s(""),Object(j.o)("Successfull rejected all desk bookings for selected date."),t.close()}))),yield t.afterClosed().toPromise(),i||n()})))}Object(j.n)("No desks to reject for the selected date")}))}updateDesks(){return Object(r.a)(this,void 0,void 0,(function*(){const e=this._dialog.open(F,{data:{level:this._org.levelWithID(this._filters.getValue().zones)||this._org.level_list[0],building:this._org.building,desks:this._desks}});yield e.afterClosed().toPromise(),this._desks=e.componentInstance.desks$.getValue()}))}}return e.\u0275fac=function(t){return new(t||e)(a.cc(O.c),a.cc(V.b))},e.\u0275prov=a.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var J=s("UfDH"),$=s("J+dc"),E=s("29Wa"),N=s("R7+U"),S=s("mFH5"),Q=s("wrRZ");function T(e,t){if(1&e&&(a.Vb(0,"mat-option",7),a.Lc(1),a.Ub()),2&e){const e=t.$implicit;a.qc("value",e.id),a.Db(1),a.Nc(" ",e.display_name||e.name," ")}}const H=function(){return["/desks"]},R=function(e){return{show_map:e}};function W(e,t){if(1&e){const e=a.Wb();a.Vb(0,"a",8),a.fc("click",(function(){return a.yc(e),a.jc().toggleMapShow()})),a.kc(1,"async"),a.Lc(2),a.kc(3,"async"),a.Ub()}if(2&e){const e=a.jc();let t=null,s=null;a.qc("routerLink",a.rc(7,H))("queryParams",a.sc(8,R,!(null!=(t=a.lc(1,3,e.filters))&&t.show_map))),a.Db(2),a.Nc(" ",null!=(s=a.lc(3,5,e.filters))&&s.show_map?"Show List View":"Show Map View"," ")}}const Z=function(){return[]};let K=(()=>{class e extends j.b{constructor(e,t,s,n){super(),this._desks=e,this._org=t,this._route=s,this._router=n,this.levels=this._org.active_levels,this.filters=this._desks.filters,this.toggleMapShow=()=>{this._desks.setFilters({show_map:!this.show_map}),this.show_map=!this.show_map},this.setDate=e=>this._desks.setFilters({date:e}),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")},queryParamsHandling:"merge"}),this._desks.setFilters({zones:e})}}ngOnInit(){return Object(r.a)(this,void 0,void 0,(function*(){yield this._org.initialised.pipe(Object(p.a)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){const e=this._org.levelWithID(t);if(!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id),this.updateZones(t)}}e.has("date")&&this.setDate(new Date(+e.get("date"))),e.has("approve")?this.approve(e.get("approve")):e.has("reject")&&this.reject(e.get("reject")),this.show_map=e.has("show_map")&&"true"===e.get("show_map"),this._desks.setFilters({show_map:this.show_map})})),this.subscription("levels",this._org.active_levels.subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){var t;const s=(null===(t=(yield this.filters.pipe(Object($.a)(1)).toPromise()).zones)||void 0===t?void 0:t.filter(t=>e.find(e=>e.id===t)||"All"===t))||[];!s.length&&e.length&&s.push(e[0].id),this.updateZones(s)}))))}))}approve(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield Object(_.h)(e).toPromise();t&&this._desks.approveDesk(t)}))}reject(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield Object(_.h)(e).toPromise();t&&this._desks.rejectDesk(t)}))}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(A),a.Pb(O.c),a.Pb(o.a),a.Pb(o.d))},e.\u0275cmp=a.Jb({type:e,selectors:[["desks-topbar"]],features:[a.Ab],decls:11,vars:10,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],["value","All"],[3,"value",4,"ngFor","ngForOf"],["button","","mat-button","","queryParamsHandling","merge",3,"routerLink","queryParams","click",4,"ngIf"],[1,"flex-1","w-2"],[3,"dateChange"],[3,"value"],["button","","mat-button","","queryParamsHandling","merge",3,"routerLink","queryParams","click"]],template:function(e,t){1&e&&(a.Vb(0,"mat-form-field",0),a.Vb(1,"mat-select",1),a.fc("ngModelChange",(function(e){return t.updateZones(e)})),a.kc(2,"async"),a.Vb(3,"mat-option",2),a.Lc(4,"All Levels"),a.Ub(),a.Jc(5,T,2,2,"mat-option",3),a.kc(6,"async"),a.Ub(),a.Ub(),a.Jc(7,W,4,10,"a",4),a.kc(8,"async"),a.Qb(9,"div",5),a.Vb(10,"date-options",6),a.fc("dateChange",(function(e){return t.setDate(e)})),a.Ub()),2&e&&(a.Db(1),a.qc("ngModel",a.lc(2,3,t.filters).zones||a.rc(9,Z)),a.Db(4),a.qc("ngForOf",a.lc(6,5,t.levels)),a.Db(2),a.qc("ngIf",1===(null==a.lc(8,7,t.filters).zones?null:a.lc(8,7,t.filters).zones.length)))},directives:[E.c,N.a,i.l,i.o,S.j,n.m,n.n,Q.a,D.a,o.f],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 1em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"]}),e})();var B=s("Jb3d"),Y=s("WKsi");let G=(()=>{class e{constructor(e){this._state=e,this.checkin=()=>this.runMethod("checkin",()=>Object(r.a)(this,void 0,void 0,(function*(){return this._state.checkinDesk(this.desk)}))),this.approve=()=>this.runMethod("approve",()=>Object(r.a)(this,void 0,void 0,(function*(){return this._state.approveDesk(this.desk)}))),this.reject=()=>this.runMethod("reject",()=>Object(r.a)(this,void 0,void 0,(function*(){return this._state.rejectDesk(this.desk)})))}runMethod(e,t){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=e,yield t().catch(e=>null),this.loading=""}))}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(A))},e.\u0275cmp=a.Jb({type:e,selectors:[["desk-details"]],inputs:{desk:"desk"},decls:19,vars:18,consts:[[1,"w-32","p-2","bg"],[1,"w-32","p-2"],[1,"w-24","p-2"],["flex","",1,"p-2","flex-1","truncate"],[1,"w-32","p-2","flex","items-center"],["mat-icon-button","","className","material-icons","content","how_to_reg",3,"loading","state","click"],["mat-icon-button","","className","material-icons","content","event_available",3,"loading","state","click"],["mat-icon-button","","className","material-icons","content","event_busy",3,"loading","state","click"]],template:function(e,t){1&e&&(a.Vb(0,"div",0),a.Lc(1),a.Ub(),a.Vb(2,"div",1),a.Lc(3),a.Ub(),a.Vb(4,"div",2),a.Lc(5),a.kc(6,"date"),a.Ub(),a.Vb(7,"div",3),a.Lc(8),a.Ub(),a.Vb(9,"div"),a.Lc(10),a.Ub(),a.Vb(11,"div",1),a.Lc(12),a.Ub(),a.Vb(13,"div",1),a.Lc(14),a.Ub(),a.Vb(15,"div",4),a.Vb(16,"action-icon",5),a.fc("click",(function(){return t.checkin()})),a.Ub(),a.Vb(17,"action-icon",6),a.fc("click",(function(){return t.approve()})),a.Ub(),a.Vb(18,"action-icon",7),a.fc("click",(function(){return t.reject()})),a.Ub(),a.Ub()),2&e&&(a.Db(1),a.Mc(null==t.desk?null:t.desk.user_name),a.Db(2),a.Mc(null==t.desk||null==t.desk.extension_data?null:t.desk.extension_data.group),a.Db(2),a.Mc(a.mc(6,15,t.desk.date,"shortTime")),a.Db(3),a.Mc(null==t.desk?null:t.desk.description),a.Db(1),a.Fb("w-24 p-2 capitalize text-red-600 "+(null==t.desk?null:t.desk.status)),a.Db(1),a.Nc(" ",null==t.desk?null:t.desk.status," "),a.Db(2),a.Mc(null==t.desk?null:t.desk.approver_name),a.Db(2),a.Mc(null!=t.desk&&t.desk.checked_in?"Yes":"No"),a.Db(2),a.qc("loading","checkin"===t.loading)("state",null!=t.desk&&t.desk.checked_in?"success":""),a.Db(1),a.qc("loading","approve"===t.loading)("state",null!=t.desk&&t.desk.approved?"success":""),a.Db(1),a.qc("loading","reject"===t.loading)("state","declined"===(null==t.desk?null:t.desk.status)?"success":""))},directives:[Y.a],pipes:[n.f],styles:["[_nghost-%COMP%] {\n                width: 100%;\n                display: flex;\n                align-items: center;\n                padding: 0 0.5rem;\n                background-color: #f8f8f8;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]:hover {\n                background-color: #f0f0f0;\n            }\n\n            .tentative[_ngcontent-%COMP%] {\n                color: #ffa000;\n            }\n\n            .approved[_ngcontent-%COMP%] {\n                color: #388e3c;\n            }"]}),e})();var X=s("aAMe"),ee=s("lYMz"),te=s("gGs/"),se=s("1f93");let ne=(()=>{class e extends j.b{constructor(e,t,s){super(),this._state=e,this._desk=t,this._desks_state=s,this.url=this._state.map_url,this.styles=this._state.map_styles,this.positions=this._state.map_positions,this.actions=this._state.map_actions,this.features=this._state.map_features,this.setHost=e=>this._desks_state.setOptions({host:e})}ngOnInit(){this.subscription("date",this._desk.filters.subscribe(e=>{console.log("Desk Options:",e),this._desks_state.setOptions({date:e.date?new Date(e.date):new Date,zones:e.zones})}))}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(X.b),a.Pb(A),a.Pb(X.a))},e.\u0275cmp=a.Jb({type:e,selectors:[["desk-map-view"]],features:[a.Cb([X.a]),a.Ab],decls:13,vars:19,consts:[["map","",1,"h-full","w-full","relative"],[3,"src","zoom","center","styles","features","actions"],[1,"absolute","bottom-0","right-0"],[1,"absolute","top-0","left-0","p-2","text-black"],["placeholder","User for bookings...",3,"ngModel","ngModelChange"],["info","",1,"absolute","bottom-0","rounded","p-2","m-2","bg-white","shadow","text-center"]],template:function(e,t){1&e&&(a.Vb(0,"div",0),a.Qb(1,"i-map",1),a.kc(2,"async"),a.kc(3,"async"),a.kc(4,"async"),a.kc(5,"async"),a.kc(6,"async"),a.kc(7,"async"),a.Qb(8,"explore-zoom-controls",2),a.Vb(9,"div",3),a.Vb(10,"a-user-search-field",4),a.fc("ngModelChange",(function(e){return t.setHost(e)})),a.Ub(),a.Ub(),a.Vb(11,"div",5),a.Lc(12," Click/Tap an available desk to book it. "),a.Ub(),a.Ub()),2&e&&(a.Db(1),a.qc("src",a.lc(2,7,t.url))("zoom",a.lc(3,9,t.positions).zoom)("center",a.lc(4,11,t.positions).center)("styles",a.lc(5,13,t.styles))("features",a.lc(6,15,t.features))("actions",a.lc(7,17,t.actions)),a.Db(9),a.qc("ngModel",null))},directives:[ee.a,te.a,se.a,i.l,i.o],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                position: relative;\n                height: 100%;\n                width: 100%;\n            }\n\n            [info][_ngcontent-%COMP%] {\n                left: 50%;\n                transform: translateX(-50%);\n            }"]}),e})();function ie(e,t){if(1&e&&(a.Vb(0,"button",19),a.Vb(1,"app-icon",5),a.Lc(2,"more_vert"),a.Ub(),a.Ub()),2&e){a.jc(2);const e=a.vc(5);a.qc("matMenuTriggerFor",e)}}function oe(e,t){1&e&&a.Qb(0,"desk-details",21),2&e&&a.qc("desk",t.$implicit)}function ce(e,t){if(1&e&&(a.Tb(0),a.Jc(1,oe,1,1,"desk-details",20),a.kc(2,"async"),a.Sb()),2&e){const e=a.jc(2);a.Db(1),a.qc("ngForOf",a.lc(2,1,e.bookings))}}function le(e,t){if(1&e&&(a.Tb(0),a.Vb(1,"div",8),a.Qb(2,"div",9),a.Vb(3,"div",10),a.Lc(4),a.kc(5,"async"),a.Ub(),a.Vb(6,"div",11),a.Lc(7),a.kc(8,"async"),a.kc(9,"async"),a.Ub(),a.Jc(10,ie,3,1,"button",12),a.kc(11,"async"),a.Ub(),a.Vb(12,"div",13),a.Vb(13,"div",14),a.Vb(14,"div",15),a.Lc(15,"Person"),a.Ub(),a.Vb(16,"div",15),a.Lc(17,"Group"),a.Ub(),a.Vb(18,"div",16),a.Lc(19,"Date"),a.Ub(),a.Vb(20,"div",17),a.Lc(21,"Desk"),a.Ub(),a.Vb(22,"div",16),a.Lc(23,"Status"),a.Ub(),a.Vb(24,"div",15),a.Lc(25,"Approver"),a.Ub(),a.Vb(26,"div",15),a.Lc(27,"Checked In"),a.Ub(),a.Vb(28,"div",16),a.Lc(29,"Access"),a.Ub(),a.Qb(30,"div",15),a.Ub(),a.Vb(31,"div",18),a.Jc(32,ce,3,3,"ng-container",0),a.kc(33,"async"),a.Ub(),a.Ub(),a.Sb()),2&e){const e=a.jc(),t=a.vc(3);let s=null,n=null,i=null;a.Db(4),a.Nc(" Requests: ",(null==(s=a.lc(5,5,e.bookings))?null:s.length)||"0"," "),a.Db(3),a.Nc(" Free Desks: ",((null==(n=a.lc(8,7,e.desks))?null:n.length)||0)-((null==(n=a.lc(9,9,e.bookings))?null:n.length)||0)," "),a.Db(3),a.qc("ngIf",null==a.lc(11,11,e.filters).zones?null:a.lc(11,11,e.filters).zones.length),a.Db(22),a.qc("ngIf",null==(i=a.lc(33,13,e.bookings))?null:i.length)("ngIfElse",t)}}function ae(e,t){1&e&&(a.Vb(0,"div",22),a.Vb(1,"p",23),a.Lc(2," There are no desks for the currently selected date. "),a.Ub(),a.Ub())}function re(e,t){1&e&&(a.Vb(0,"div",24),a.Qb(1,"desk-map-view"),a.Ub())}let de=(()=>{class e{constructor(e){this._state=e,this.filters=this._state.filters,this.desks=this._state.desks.pipe(Object(h.a)(e=>e.filter(e=>e.bookable))),this.bookings=this._state.bookings,this.rejectAll=()=>this._state.rejectAllDesks(),this.updateDesks=()=>this._state.updateDesks()}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(A))},e.\u0275cmp=a.Jb({type:e,selectors:[["desk-listings"]],decls:20,vars:4,consts:[[4,"ngIf","ngIfElse"],["empty_state",""],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","items-center"],["className","material-icons"],[1,"pl-2"],["map_state",""],["details","",1,"w-full","bg-gray-900","text-white","flex","items-center","px-2"],[1,"flex-1","w-0"],[1,"p-2"],[1,"px-8"],["mat-icon-button","",3,"matMenuTriggerFor",4,"ngIf"],[1,"w-full","flex","flex-col","flex-1","text-sm","h-1/2"],[1,"w-full","flex","items-center","bg-white","border-b","border-gray-500","p-2","font-medium"],[1,"w-32","p-2"],[1,"w-24","p-2"],["flex","",1,"p-2","flex-1"],[1,"w-full","flex-1","overflow-auto","h-1/2"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"desk",4,"ngFor","ngForOf"],[3,"desk"],[1,"h-full","w-full","flex","items-center","justify-center"],[1,"p-8"],[1,"absolute","inset-0"]],template:function(e,t){if(1&e&&(a.Jc(0,le,34,15,"ng-container",0),a.kc(1,"async"),a.Jc(2,ae,3,0,"ng-template",null,1,a.Kc),a.Vb(4,"mat-menu",null,2),a.Vb(6,"button",3),a.fc("click",(function(){return t.updateDesks()})),a.Vb(7,"div",4),a.Vb(8,"app-icon",5),a.Lc(9,"edit"),a.Ub(),a.Vb(10,"span",6),a.Lc(11,"Edit Desks"),a.Ub(),a.Ub(),a.Ub(),a.Vb(12,"button",3),a.fc("click",(function(){return t.rejectAll()})),a.Vb(13,"div",4),a.Vb(14,"app-icon",5),a.Lc(15,"event_busy"),a.Ub(),a.Vb(16,"span",6),a.Lc(17,"Reject All"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Jc(18,re,2,0,"ng-template",null,7,a.Kc)),2&e){const e=a.vc(19);let s=null;a.qc("ngIf",!(null!=(s=a.lc(1,2,t.filters))&&s.show_map))("ngIfElse",e)}},directives:[n.n,B.a,B.b,x.a,D.b,B.d,n.m,G,ne],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                position: relative;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                overflow: hidden;\n            }\n\n            [details][_ngcontent-%COMP%] {\n                height: 3.5rem;\n            }\n\n            [flex][_ngcontent-%COMP%] {\n                min-width: 8rem;\n            }"]}),e})();var be=s("66mq");const ue=["app-desks",""];function he(e,t){1&e&&a.Qb(0,"mat-progress-bar",4)}const fe=[{path:"",component:(()=>{class e{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(A))},e.\u0275cmp=a.Jb({type:e,selectors:[["","app-desks",""]],attrs:ue,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,t){1&e&&(a.Qb(0,"sidebar"),a.Vb(1,"main",0),a.Qb(2,"desks-topbar",1),a.Qb(3,"desk-listings",2),a.Jc(4,he,1,0,"mat-progress-bar",3),a.kc(5,"async"),a.Ub()),2&e&&(a.Db(4),a.qc("ngIf",a.lc(5,1,t.loading)))},directives:[J.a,K,de,n.n,be.a],pipes:[n.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--bg);\n            }"]}),e})()}];let ge=(()=>{class e{}return e.\u0275mod=a.Nb({type:e}),e.\u0275inj=a.Mb({factory:function(t){return new(t||e)},imports:[[n.c,i.h,i.p,l.a,X.c,c.c,o.g.forChild(fe)]]}),e})()}}]);
//# sourceMappingURL=desks-desks-module.cb4c405fad858358ac37.js.map