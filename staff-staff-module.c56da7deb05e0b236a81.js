(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{kanD:function(t,e,i){"use strict";i.r(e),i.d(e,"COMPONENTS",(function(){return G})),i.d(e,"StaffModule",(function(){return X}));var s=i("2kYt"),n=i("nIj0"),o=i("sEIs"),c=i("EM62"),r=i("D57K"),l=i("mjT4"),a=i("C05f"),f=i("HM3f"),u=i("05Mk"),b=i("YtkY"),h=i("TLy2"),d=i("wqq/"),g=i("9MvL"),p=i("KuCG"),m=i("20lr"),_=i("dJst");let v=(()=>{class t extends m.b{constructor(t){super(),this._org=t,this._onsite={},this._events={},this._filters=new a.a({}),this._search=new a.a(""),this._loading=new a.a(!1),this._users=new a.a([]),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.users=this._filters.asObservable(),this.filtered_users=Object(f.b)([this._search,this._users,this._filters]).pipe(Object(b.a)(t=>{const[e,i,s]=t;return i.filter(t=>(!e||t.name.toLowerCase().includes(e)||t.email.toLowerCase().includes(e))&&(!s.only_onsite||this._onsite[t.email]))})),this.user_events=Object(f.b)([this._filters]).pipe(Object(h.a)(t=>Object(r.a)(this,void 0,void 0,(function*(){this._loading.next(!0);const t=yield Object(u.e)({period_start:Math.floor(Object(g.a)(new Date).valueOf()/1e3),period_end:Math.floor(Object(p.a)(new Date).valueOf()/1e3),type:"staff"}).toPromise(),e={},i=(new Date).valueOf();for(const s of t)Object(m.w)(i,i,s.date,s.date+60*s.duration*1e3)&&(e[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);return this._onsite=e,this._loading.next(!1),e}))),Object(d.a)()),this.loadUsers()}setFilters(t){this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),t))}setSearchString(t){this._search.next(t)}startPolling(t=3e4){this.setFilters(this._filters.getValue()),this.interval("poll",()=>this.setFilters(this._filters.getValue()),t)}stopPolling(){this.clearInterval("poll")}checkin(t){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield Object(u.g)({booking_start:Math.floor((new Date).valueOf()/1e3),booking_end:Math.floor(Object(p.a)(new Date).valueOf()/1e3),asset_id:t.email,title:"Checked-in Onsite",description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:"staff"}).toPromise();yield Object(u.d)(e.id,!0),this._events[t.email]=e,this._onsite[t.email]=!0}))}checkout(t){return Object(r.a)(this,void 0,void 0,(function*(){const e=this._events[t.email];if(e){const i=yield Object(u.g)(Object.assign(Object.assign({},e.toJSON()),{booking_end:Math.floor((new Date).valueOf()/1e3)})).toPromise();yield Object(u.d)(i.id,!1).toPromise(),this._events[t.email]=i,this._onsite[t.email]=!1}}))}loadUsers(){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield Object(l.f)("").toPromise();t.sort((t,e)=>t.name.localeCompare(e.name)),this._users.next(t)}))}}return t.\u0275fac=function(e){return new(e||t)(c.cc(_.c))},t.\u0275prov=c.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var O=i("UfDH"),y=i("jOdJ"),j=i("29Wa"),x=i("R7+U"),k=i("k8N0"),w=i("wobF"),M=i("mFH5");function P(t,e){if(1&t&&(c.Vb(0,"mat-option",7),c.Lc(1),c.Ub()),2&t){const t=e.$implicit;c.qc("value",t.id),c.Db(1),c.Nc(" ",t.display_name||t.name," ")}}let D=(()=>{class t extends m.b{constructor(t,e,i,s){super(),this._state=t,this._org=e,this._route=i,this._router=s,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=t=>this._state.setFilters({date:t}),this.setFilters=t=>this._state.setFilters(t),this.setSearch=t=>this._state.setSearchString(t),this.updateZones=t=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:t.join(",")}}),this._state.setFilters({zones:t})}}ngOnInit(){return Object(r.a)(this,void 0,void 0,(function*(){yield this._org.initialised.pipe(Object(y.a)(t=>t)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(t=>{if(t.has("zone_ids")){const e=t.get("zone_ids").split(",");if(e.length){const t=this._org.levelWithID(e);if(!t)return;this._org.building=this._org.buildings.find(e=>e.id===t.parent_id),this.zones=e}}})),this.subscription("levels",this._org.active_levels.subscribe(t=>{this.zones=this.zones.filter(e=>t.find(t=>t.id===e)),!this.zones.length&&t.length&&this.zones.push(t[0].id),this.updateZones(this.zones)})),this.setSearch("")}))}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(v),c.Pb(_.c),c.Pb(o.a),c.Pb(o.d))},t.\u0275cmp=c.Jb({type:t,selectors:[["staff-topbar"]],features:[c.Ab],decls:10,vars:7,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"value"]],template:function(t,e){if(1&t&&(c.Vb(0,"mat-form-field",0),c.Vb(1,"mat-select",1),c.fc("ngModelChange",(function(t){return e.zones=t}))("ngModelChange",(function(t){return e.updateZones(t)})),c.Jc(2,P,2,2,"mat-option",2),c.kc(3,"async"),c.Ub(),c.Ub(),c.Vb(4,"mat-slide-toggle",3),c.fc("ngModelChange",(function(t){return e.setFilters({only_onsite:t})})),c.kc(5,"async"),c.Vb(6,"div",4),c.Lc(7,"Onsite Only"),c.Ub(),c.Ub(),c.Qb(8,"div",5),c.Vb(9,"searchbar",6),c.fc("modelChange",(function(t){return e.setSearch(t)})),c.Ub()),2&t){let t=null;c.Db(1),c.qc("ngModel",e.zones),c.Db(1),c.qc("ngForOf",c.lc(3,3,e.levels)),c.Db(2),c.qc("ngModel",null==(t=c.lc(5,5,e.filters))?null:t.only_onsite)}},directives:[j.c,x.a,n.l,n.o,s.m,k.a,w.a,M.j],pipes:[s.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 1em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"]}),t})();var C=i("/ILR"),U=i("WKsi"),V=i("Y2X+"),q=i("PBFl"),S=i("0/Ep");function F(t,e){1&t&&(c.Vb(0,"div",11),c.Lc(1,"Onsite"),c.Ub())}let z=(()=>{class t{constructor(t){this._state=t,this.checkin=()=>Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0,yield this._state.checkin(this.user).catch(t=>Object(m.m)("Error checking in Staff member")),this.loading=!1})),this.checkout=()=>Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0,yield this._state.checkout(this.user).catch(t=>Object(m.m)("Error checking out Staff member")),this.loading=!1}))}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(v))},t.\u0275cmp=c.Jb({type:t,selectors:[["staff-details"]],inputs:{user:"user",onsite:"onsite"},decls:16,vars:11,consts:[[1,"w-full","flex","items-center","px-4","py-2","bg-white","border-b","border-gray-200"],[3,"user"],[1,"flex","flex-col","flex-1"],[1,"px-2"],[1,"px-2","text-xs","text-opacity-50"],["class","text-xs opacity-50 px-4",4,"ngIf"],[1,"flex","items-center"],["className","material-icons",3,"matTooltip","loading","content","click"],["mat-icon-button","","matTooltip","Email Staff",3,"disabled","href"],["className","material-icons"],["mat-icon-button","","matTooltip","Phone Staff",3,"disabled","href"],[1,"text-xs","opacity-50","px-4"]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.Qb(1,"a-user-avatar",1),c.Vb(2,"div",2),c.Vb(3,"div",3),c.Lc(4),c.Ub(),c.Vb(5,"div",4),c.Lc(6),c.Ub(),c.Ub(),c.Jc(7,F,2,0,"div",5),c.Vb(8,"div",6),c.Vb(9,"action-icon",7),c.fc("click",(function(){return e.onsite?e.checkout():e.checkin()})),c.Ub(),c.Vb(10,"a",8),c.Vb(11,"app-icon",9),c.Lc(12,"email"),c.Ub(),c.Ub(),c.Vb(13,"a",10),c.Vb(14,"app-icon",9),c.Lc(15,"call"),c.Ub(),c.Ub(),c.Ub(),c.Ub()),2&t&&(c.Db(1),c.qc("user",e.user),c.Db(3),c.Mc(null==e.user?null:e.user.name),c.Db(2),c.Mc(null==e.user?null:e.user.email),c.Db(1),c.qc("ngIf",e.onsite),c.Db(2),c.qc("matTooltip",e.onsite?"Checkout Staff":"Checkin Staff")("loading",e.loading)("content",e.onsite?"event_busy":"event_available"),c.Db(1),c.qc("disabled",!(null!=e.user&&e.user.email))("href","mailto:"+(null==e.user?null:e.user.email),c.Ac),c.Db(3),c.qc("disabled",!(null!=e.user&&e.user.phone))("href","tel:"+(null==e.user?null:e.user.phone),c.Ac))},directives:[C.a,s.n,U.a,V.a,q.a,S.a],styles:["[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n            background-color: #f0f0f0 !important;\n        }"]}),t})();var I=i("66mq");const J=["container"];function L(t,e){if(1&t){const t=c.Wb();c.Vb(0,"div",7),c.fc("click",(function(){c.yc(t);const i=e.$implicit;return c.jc().scrollTo(i)})),c.kc(1,"async"),c.Lc(2),c.Ub()}if(2&t){const t=e.$implicit,i=c.jc();c.Hb("disabled",c.lc(1,5,i.user_list)[t].length<=0)("active",t===i.active_group),c.Db(2),c.Nc(" ",t," ")}}function T(t,e){if(1&t&&(c.Qb(0,"staff-details",12),c.kc(1,"async"),c.kc(2,"async")),2&t){const t=e.$implicit,i=e.index,s=c.jc(2).$implicit,n=c.jc(2);c.qc("id","letter-"+s+"-"+i)("user",t)("onsite",!!c.lc(1,3,n.events)&&c.lc(2,5,n.events)[t.email])}}function N(t,e){if(1&t&&(c.Tb(0),c.Vb(1,"div",10),c.Lc(2),c.Ub(),c.Jc(3,T,3,7,"staff-details",11),c.kc(4,"async"),c.Sb()),2&t){const t=c.jc().$implicit,e=c.jc(2);c.Db(1),c.qc("id","letter-"+("#"===t?"0":t)),c.Db(1),c.Nc(" ",t," "),c.Db(1),c.qc("ngForOf",c.lc(4,3,e.user_list)[t])}}function E(t,e){if(1&t&&(c.Tb(0),c.Jc(1,N,5,5,"ng-container",9),c.kc(2,"async"),c.Sb()),2&t){const t=e.$implicit,i=c.jc(2);c.Db(1),c.qc("ngIf",c.lc(2,1,i.user_list)[t].length)}}function Q(t,e){if(1&t&&(c.Tb(0),c.Jc(1,E,3,3,"ng-container",8),c.Sb()),2&t){const t=c.jc();c.Db(1),c.qc("ngForOf",t.groups)}}function $(t,e){1&t&&c.Qb(0,"mat-progress-bar",13)}function A(t,e){1&t&&(c.Vb(0,"div",14),c.Vb(1,"p"),c.Lc(2,"No matching staff members"),c.Ub(),c.Ub())}const W="#abcdefghijklmnopqrstuvwxyz".split("");let H=(()=>{class t extends m.b{constructor(t){super(),this._state=t,this.active_group="#",this.groups=W,this.events=this._state.user_events,this.loading=this._state.loading,this.user_count=this._state.filtered_users.pipe(Object(b.a)(t=>t.length)),this.user_list=this._state.filtered_users.pipe(Object(b.a)(t=>{const e={};for(const i of W)e[i]=(t||[]).filter(t=>t.name.toLowerCase()[0].startsWith(i)||"#"===i&&!W.includes(t.name.toLowerCase()[0]));return this.timeout("scroll",()=>this.onScroll({}),30),e}))}onScroll(t){const e=this._el.nativeElement.scrollTop;for(const i of W){const t=document.querySelector("#letter-"+("#"===i?"0":i));if(t){if(t.offsetTop-e>0)break;this.active_group=i}}}scrollTo(t){const e=document.querySelector(`#letter-${t}-0`);e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group=t)}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(v))},t.\u0275cmp=c.Jb({type:t,selectors:[["staff-listings"]],viewQuery:function(t,e){if(1&t&&c.Qc(J,!0),2&t){let t;c.uc(t=c.gc())&&(e._el=t.first)}},features:[c.Ab],decls:10,vars:8,consts:[[1,"w-full","p-2","flex","items-center","justify-center"],["letter","","class","capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer",3,"disabled","active","click",4,"ngFor","ngForOf"],[1,"flex-1","overflow-auto","w-full","relative","bg-gray-100",2,"height","50%",3,"scroll"],["container",""],[4,"ngIf","ngIfElse"],["mode","indeterminate",4,"ngIf"],["empty_state",""],["letter","",1,"capitalize","h-6","w-6","flex","items-center","justify-center","text-xs","cursor-pointer",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["group","",1,"capitalize","bg-gray-300","border-b","text-sm","font-medium","sticky","top-0","z-10",3,"id"],[3,"id","user","onsite",4,"ngFor","ngForOf"],[3,"id","user","onsite"],["mode","indeterminate"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"]],template:function(t,e){if(1&t&&(c.Vb(0,"div",0),c.Jc(1,L,3,7,"div",1),c.Ub(),c.Vb(2,"div",2,3),c.fc("scroll",(function(t){return e.onScroll(t)})),c.Jc(4,Q,2,1,"ng-container",4),c.kc(5,"async"),c.Ub(),c.Jc(6,$,1,0,"mat-progress-bar",5),c.kc(7,"async"),c.Jc(8,A,3,0,"ng-template",null,6,c.Kc)),2&t){const t=c.vc(9);c.Db(1),c.qc("ngForOf",e.groups),c.Db(3),c.qc("ngIf",c.lc(5,4,e.user_count))("ngIfElse",t),c.Db(2),c.qc("ngIf",c.lc(7,6,e.loading))}},directives:[s.m,s.n,z,I.a],pipes:[s.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                height: 50%;\n            }\n\n            [letter][_ngcontent-%COMP%] {\n                transition: font-size 200ms, color 200ms;\n            }\n\n            [group][_ngcontent-%COMP%] {\n                border-color: #ccc;\n                padding: 0.5rem 1.65rem;\n            }\n\n            .disabled[_ngcontent-%COMP%] {\n                opacity: 0.2;\n                pointer-events: none;\n            }\n\n            .active[_ngcontent-%COMP%] {\n                font-size: 1.25rem;\n                opacity: 1;\n                color: #d81b60;\n            }"]}),t})();const K=["app-staff",""];function Y(t,e){1&t&&c.Qb(0,"mat-progress-bar",4)}let R=(()=>{class t{constructor(t){this._state=t,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(v))},t.\u0275cmp=c.Jb({type:t,selectors:[["","app-staff",""]],attrs:K,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(t,e){1&t&&(c.Qb(0,"sidebar"),c.Vb(1,"main",0),c.Qb(2,"staff-topbar",1),c.Qb(3,"staff-listings",2),c.Jc(4,Y,1,0,"mat-progress-bar",3),c.kc(5,"async"),c.Ub()),2&t&&(c.Db(4),c.qc("ngIf",c.lc(5,1,e.loading)))},directives:[O.a,D,H,s.n,I.a],pipes:[s.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--bg);\n            }"]}),t})();var Z=i("oRDy");const B=[{path:"",component:R}],G=[R,D,H,z];let X=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[s.c,n.h,Z.a,o.g.forChild(B)]]}),t})()}}]);
//# sourceMappingURL=staff-staff-module.c56da7deb05e0b236a81.js.map