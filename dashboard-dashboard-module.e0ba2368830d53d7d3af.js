(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{TDBs:function(e,t,n){"use strict";n.r(t),n.d(t,"DashboardModule",(function(){return Y}));var c=n("EM62"),a=n("2kYt"),o=n("nIj0"),s=n("sEIs"),i=n("R3Ii"),l=n("CzDk"),r=n("20lr"),m=n("e81E"),d=n("D57K"),u=n("woo0"),p=n("0/Ep"),f=n("PBFl");const g=function(){return["/explore"]},h=function(e){return{level:e}};function b(e,t){if(1&e&&(c.mc(0,"a",9),c.cd(1),c.lc()),2&e){const e=t.$implicit;c.Hc("routerLink",c.Kc(3,g))("queryParams",c.Lc(4,h,e.id)),c.Ub(1),c.ed(" ",e.display_name||e.name," ")}}const x=function(e){return{space:e}};function v(e,t){if(1&e&&(c.mc(0,"a",9),c.cd(1),c.lc()),2&e){const e=t.$implicit;c.Hc("routerLink",c.Kc(3,g))("queryParams",c.Lc(4,x,e.id)),c.Ub(1),c.ed("",e.display_name||e.name," ")}}function _(e,t){1&e&&(c.mc(0,"span",10),c.cd(1,"No free spaces"),c.lc())}const w=function(){return{class:"material-icons",content:"crop_free"}},y=function(){return{class:"material-icons",content:"av_timer"}};let O=(()=>{class e{constructor(e){this._state=e,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){return Object(d.a)(this,void 0,void 0,(function*(){this._state.pollFreeSpaces()}))}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return e.\u0275fac=function(t){return new(t||e)(c.gc(u.a))},e.\u0275cmp=c.ac({type:e,selectors:[["dashboard-availability"]],decls:22,vars:21,consts:[[1,"m-0","font-medium","text-xl"],[1,"flex","flex-col","items-center","p-2","bg-white","my-4","rounded-lg"],[1,"flex","items-center","w-full","mb-2"],[1,"bg-darken","rounded-lg","mr-2","text-2xl",3,"icon"],["free-levels","",1,"items","space-y-2","w-full"],["button","","mat-button","","class","w-full",3,"routerLink","queryParams",4,"ngFor","ngForOf"],["free-spaces","",1,"flex","items-center","flex-col","rounded-lg","bg-white","my-4","p-2"],[1,"items","space-y-2"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],["button","","mat-button","",1,"w-full",3,"routerLink","queryParams"],[1,"text-dark-fade","text-sm","mb-2"]],template:function(e,t){1&e&&(c.mc(0,"h3",0),c.cd(1,"Available Now"),c.lc(),c.mc(2,"div",1),c.mc(3,"div",2),c.hc(4,"app-icon",3),c.mc(5,"div"),c.cd(6,"Most free space:"),c.lc(),c.lc(),c.mc(7,"div",4),c.ad(8,b,2,6,"a",5),c.Bc(9,"slice"),c.Bc(10,"async"),c.lc(),c.lc(),c.mc(11,"div",6),c.mc(12,"div",2),c.hc(13,"app-icon",3),c.mc(14,"div"),c.cd(15,"Free rooms now:"),c.lc(),c.lc(),c.mc(16,"div",7),c.ad(17,v,2,6,"a",5),c.Bc(18,"slice"),c.Bc(19,"async"),c.ad(20,_,2,0,"span",8),c.Bc(21,"async"),c.lc(),c.lc()),2&e&&(c.Ub(4),c.Hc("icon",c.Kc(19,w)),c.Ub(4),c.Hc("ngForOf",c.Ec(9,5,c.Cc(10,9,t.levels_free),0,2)),c.Ub(5),c.Hc("icon",c.Kc(20,y)),c.Ub(4),c.Hc("ngForOf",c.Ec(18,11,c.Cc(19,15,t.space_list),0,3)),c.Ub(3),c.Hc("ngIf",!c.Cc(21,17,t.space_list).length))},directives:[p.a,a.n,a.o,f.a,s.f],pipes:[a.w,a.b],styles:["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }"]}),e})();var C=n("Wc1D"),U=n("OZ4H"),k=n("Y2X+"),M=n("/ILR");function H(e,t){1&e&&c.hc(0,"a-user-avatar",15),2&e&&c.Hc("user",t.$implicit)}function P(e,t){if(1&e&&(c.mc(0,"a",16),c.cd(1,"Join Call"),c.lc()),2&e){const e=c.Ac().$implicit;c.Hc("href",e.meeting_link,c.Tc)}}const F=function(){return{class:"material-icons",content:"room"}},I=function(){return{class:"material-icons",content:"group"}};function E(e,t){if(1&e){const e=c.nc();c.mc(0,"div",3),c.hc(1,"div",4),c.mc(2,"div",5),c.mc(3,"div",6),c.cd(4),c.Bc(5,"date"),c.lc(),c.mc(6,"div",7),c.cd(7),c.lc(),c.mc(8,"div",8),c.hc(9,"app-icon",9),c.mc(10,"a",10),c.wc("click",(function(){c.Rc(e);const n=t.$implicit,a=c.Ac();return n.space?a.locateSpace(n.space):""})),c.cd(11),c.lc(),c.lc(),c.mc(12,"div",11),c.hc(13,"app-icon",9),c.cd(14),c.lc(),c.mc(15,"div",12),c.ad(16,H,1,1,"a-user-avatar",13),c.lc(),c.lc(),c.ad(17,P,2,1,"a",14),c.lc()}if(2&e){const e=t.$implicit;c.Ub(4),c.dd(c.Dc(5,13,e.date,"shortTime")),c.Ub(3),c.dd(e.title),c.Ub(2),c.Hc("icon",c.Kc(16,F)),c.Ub(1),c.Yb("underline",!!e.space),c.Hc("matTooltip",e.space?"Locate Space":""),c.Ub(1),c.fd(" ",(null==e.space?null:e.space.display_name)||(null==e.space?null:e.space.name)||"<No Location>"," ",null!=e.space&&null!=e.space.level&&e.space.level.display_name||null!=e.space&&null!=e.space.level&&e.space.level.name?", "+e.space.level.display_name||!1:""," "),c.Ub(2),c.Hc("icon",c.Kc(17,I)),c.Ub(1),c.fd(" ",e.guests.length," Guest",1===e.guests.length?"":"s"," "),c.Ub(2),c.Hc("ngForOf",e.guests),c.Ub(1),c.Hc("ngIf",e.meeting_link)}}function B(e,t){1&e&&(c.mc(0,"p",17),c.cd(1," No upcoming events for today "),c.lc())}let L=(()=>{class e{constructor(e,t){this._state=e,this._dialog=t,this.upcoming_events=this._state.upcoming_events}ngOnInit(){this._state.pollUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}locateSpace(e){this._dialog.open(C.a,{data:{space:e}})}}return e.\u0275fac=function(t){return new(t||e)(c.gc(u.a),c.gc(U.b))},e.\u0275cmp=c.ac({type:e,selectors:[["dashboard-upcoming"]],decls:7,vars:10,consts:[[1,"m-0","mb-4","font-medium","text-xl"],["name","event","class","flex bg-white rounded-lg relative overflow-hidden mb-4",4,"ngFor","ngForOf"],["class","text-dark-fade text-center w-full",4,"ngIf"],["name","event",1,"flex","bg-white","rounded-lg","relative","overflow-hidden","mb-4"],["name","status",1,"absolute","rounded-lg"],["name","details",1,"flex-1","mr-2"],["name","time",1,"text-sm","text-bold","mb-2"],["name","title",1,"text-sm","text-bold","mb-2"],["name","space",1,"text-xs","flex","items-center","mb-2"],[1,"mr-2",3,"icon"],[1,"text-black",3,"matTooltip","click"],["name","attendees",1,"text-xs","flex","items-center","mb-2"],["name","guests",1,"flex","space-x-2","text-sm"],[3,"user",4,"ngFor","ngForOf"],["button","","mat-button","","class","uppercase h-12",3,"href",4,"ngIf"],[3,"user"],["button","","mat-button","",1,"uppercase","h-12",3,"href"],[1,"text-dark-fade","text-center","w-full"]],template:function(e,t){1&e&&(c.mc(0,"h3",0),c.cd(1,"Today's Events"),c.lc(),c.ad(2,E,18,18,"div",1),c.Bc(3,"slice"),c.Bc(4,"async"),c.ad(5,B,2,0,"p",2),c.Bc(6,"async")),2&e&&(c.Ub(2),c.Hc("ngForOf",c.Ec(3,2,c.Cc(4,6,t.upcoming_events),0,3)),c.Ub(3),c.Hc("ngIf",!c.Cc(6,8,t.upcoming_events).length))},directives:[a.n,a.o,p.a,k.a,M.a,f.a],pipes:[a.w,a.b,a.f],styles:["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n\n            [name='time'][_ngcontent-%COMP%] {\n                color: #00529b;\n            }\n\n            [name='event'][_ngcontent-%COMP%] {\n                padding: 1rem 1rem 1rem 2rem;\n            }\n\n            [name='status'][_ngcontent-%COMP%] {\n                top: 1rem;\n                left: -0.8rem;\n                height: 2.5rem;\n                width: 1.6rem;\n                background-color: #00529b;\n            }\n\n            button[_ngcontent-%COMP%] {\n                height: 3em;\n            }\n\n            app-icon[_ngcontent-%COMP%] {\n                margin-left: -0.25rem;\n            }"]}),e})();var $=n("Jb3d");const D=["input"],K=function(){return{class:"material-icons",content:"close"}};function S(e,t){if(1&e){const e=c.nc();c.mc(0,"div",14),c.hc(1,"a-user-avatar",15),c.mc(2,"div",16),c.cd(3),c.lc(),c.mc(4,"div",17),c.hc(5,"div",18),c.cd(6," Level 12 "),c.lc(),c.mc(7,"button",19),c.wc("click",(function(){c.Rc(e);const n=t.$implicit;return c.Ac().removeUser(n)})),c.hc(8,"app-icon",20),c.lc(),c.lc()}if(2&e){const e=t.$implicit;c.Ub(1),c.Hc("user",e),c.Ub(2),c.dd(e.name),c.Ub(5),c.Hc("icon",c.Kc(3,K))}}function T(e,t){if(1&e&&(c.mc(0,"button",21),c.cd(1),c.lc()),2&e){const e=c.Ac();c.Ub(1),c.ed(" ",e.search_str?'No matches for "'+e.search_str+'"':"Type to search for users..."," ")}}function j(e,t){if(1&e){const e=c.nc();c.mc(0,"button",22),c.wc("click",(function(){c.Rc(e);const n=t.$implicit;return c.Ac().addUser(n)})),c.mc(1,"div",23),c.hc(2,"a-user-avatar",24),c.mc(3,"div",25),c.mc(4,"div"),c.cd(5),c.lc(),c.mc(6,"div",26),c.cd(7),c.lc(),c.lc(),c.lc(),c.lc()}if(2&e){const e=t.$implicit;c.Ub(2),c.Hc("user",e),c.Ub(3),c.dd(e.name),c.Ub(2),c.dd(e.email)}}const A=function(){return{class:"material-icons",content:"person_add"}};let N=(()=>{class e extends r.b{constructor(e){super(),this._state=e,this.contacts=this._state.contacts,this.search_results=this._state.search_results,this.addUser=e=>this._state.addContact(e),this.removeUser=e=>this._state.removeContact(e),this.updateSearch=e=>this._state.setOptions({search:e}),this.search_str=""}ngOnInit(){this._state.updateContacts()}focusInput(){this.timeout("focus",()=>{this._input_el&&this._input_el.nativeElement.focus()})}clearInput(){this.search_str="",this._state.setOptions({search:""})}}return e.\u0275fac=function(t){return new(t||e)(c.gc(u.a))},e.\u0275cmp=c.ac({type:e,selectors:[["dashboard-contacts"]],viewQuery:function(e,t){if(1&e&&c.hd(D,1),2&e){let e;c.Nc(e=c.xc())&&(t._input_el=e.first)}},features:[c.Rb],decls:20,vars:17,consts:[[1,"m-0","mb-2","font-medium","text-xl"],["name","contact-list",1,"bg-gray-400","rounded-lg","p-2","pl-0","space-y-2","flex","flex-wrap"],["name","contact","class","bg-white rounded-lg flex-1 flex flex-col items-center p-2 relative",4,"ngFor","ngForOf"],["name","contact","mat-button","",1,"rounded-lg","flex-1","w-full",3,"matMenuTriggerFor","menuOpened","menuClosed"],[1,"flex","flex-col","items-center","p-4","text-black","w-full"],[1,"text-2xl",3,"icon"],[1,"w-full","leading-tight","whitespace-normal"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"p-0",3,"click"],["placeholder","Search for user...",1,"w-full","p-2","text-base",3,"ngModel","ngModelChange"],["input",""],["mat-menu-item","",4,"ngIf"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["name","contact",1,"bg-white","rounded-lg","flex-1","flex","flex-col","items-center","p-2","relative"],[1,"text-2xl","mb-2",3,"user"],["name","contact-name",1,"text-sm","mb-2"],["name","location",1,"flex","items-center","text-sm"],["name","dot",1,"mr-2"],["mat-icon-button","","name","close",3,"click"],[3,"icon"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"flex","items-center","leading-tight"],[1,"text-xl","mr-2",3,"user"],[1,"flex-1"],[1,"text-xs","text-dark-fade"]],template:function(e,t){if(1&e&&(c.mc(0,"h3",0),c.cd(1,"Contacts"),c.lc(),c.mc(2,"div",1),c.ad(3,S,9,4,"div",2),c.Bc(4,"async"),c.mc(5,"button",3),c.wc("menuOpened",(function(){return t.focusInput()}))("menuClosed",(function(){return t.clearInput()})),c.mc(6,"div",4),c.hc(7,"app-icon",5),c.mc(8,"span",6),c.cd(9,"Click to add a person to contacts"),c.lc(),c.lc(),c.lc(),c.lc(),c.mc(10,"mat-menu",7,8),c.mc(12,"div",9),c.wc("click",(function(e){return e.stopPropagation(),e.preventDefault()})),c.mc(13,"input",10,11),c.wc("ngModelChange",(function(e){return t.search_str=e}))("ngModelChange",(function(){return t.updateSearch(t.search_str)})),c.lc(),c.lc(),c.ad(15,T,2,1,"button",12),c.Bc(16,"async"),c.ad(17,j,8,3,"button",13),c.Bc(18,"slice"),c.Bc(19,"async"),c.lc()),2&e){const e=c.Oc(11);let n=null;c.Ub(3),c.Hc("ngForOf",c.Cc(4,6,t.contacts)),c.Ub(2),c.Hc("matMenuTriggerFor",e),c.Ub(2),c.Hc("icon",c.Kc(16,A)),c.Ub(6),c.Hc("ngModel",t.search_str),c.Ub(2),c.Hc("ngIf",!(null!=(n=c.Cc(16,8,t.search_results))&&n.length)),c.Ub(2),c.Hc("ngForOf",c.Ec(18,10,c.Cc(19,14,t.search_results),0,8))}},directives:[a.n,f.b,$.d,p.a,$.a,$.b,o.c,o.l,o.o,a.o,M.a],pipes:[a.b,a.w],styles:["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n\n            [name='contact-list'][_ngcontent-%COMP%] {\n                padding: 0 0.5rem 0.5rem 0;\n            }\n\n            [name='contact'][_ngcontent-%COMP%] {\n                min-width: 8rem;\n                width: 8rem;\n                margin-left: 0.5rem;\n                margin-top: 0.5rem;\n            }\n\n            [name='contact-name'][_ngcontent-%COMP%] {\n                font-weight: 400;\n            }\n\n            [name='dot'][_ngcontent-%COMP%] {\n                height: 8px;\n                width: 8px;\n                border-radius: 8px;\n                background-color: #22992e;\n            }\n\n            button[name='close'][_ngcontent-%COMP%] {\n                position: absolute;\n                display: none;\n                top: .25rem;\n                right: .25rem;\n            }\n\n            [name='contact'][_ngcontent-%COMP%]:hover   button[name='close'][_ngcontent-%COMP%] {\n                display: initial;\n            }\n\n            button[name='contact'][_ngcontent-%COMP%] {\n                background-color: #f0f0f0;\n                border: none;\n                min-width: calc(100% - 0.5rem) !important;\n            }"]}),e})();var R=n("d4mj");function q(e,t){if(1&e&&(c.mc(0,"a",9),c.mc(1,"div",10),c.hc(2,"app-icon",11),c.mc(3,"span",12),c.cd(4),c.lc(),c.lc(),c.lc()),2&e){const e=t.$implicit;c.Hc("routerLink",e.route),c.Ub(2),c.Hc("icon",e.icon),c.Ub(2),c.dd(e.name)}}const J=[{path:"",component:(()=>{class e{constructor(e){this._settings=e}get tiles(){return this._settings.get("app.home.tiles")||[]}get datetime(){return Object(l.a)(new Date,"EEEE, h:mma")}}return e.\u0275fac=function(t){return new(t||e)(c.gc(r.e))},e.\u0275cmp=c.ac({type:e,selectors:[["dashboard"]],decls:14,vars:4,consts:[[3,"menu","menuChange"],[1,"top","relative","flex","flex-col","justify-center","text-white","px-12","py-4"],[1,"row","location"],[1,"row","text-2xl","text-bold","uppercase"],[1,"flex","flex-1","px-8","flex-wrap","overflow-auto"],[1,"flex-1","min-w-64"],[1,"flex"],["button","","mat-button","","class","tile text-2xl",3,"routerLink",4,"ngFor","ngForOf"],[3,"show","showChange"],["button","","mat-button","",1,"tile","text-2xl",3,"routerLink"],[1,"flex","flex-col","items-center"],[3,"icon"],[1,"text-lg"]],template:function(e,t){1&e&&(c.mc(0,"header"),c.mc(1,"a-topbar-header",0),c.wc("menuChange",(function(e){return t.show_menu=e})),c.lc(),c.mc(2,"div",1),c.mc(3,"div",2),c.cd(4,"Sydney"),c.lc(),c.mc(5,"div",3),c.cd(6),c.lc(),c.lc(),c.lc(),c.mc(7,"main",4),c.hc(8,"dashboard-availability",5),c.hc(9,"dashboard-upcoming",5),c.hc(10,"dashboard-contacts",5),c.lc(),c.mc(11,"footer",6),c.ad(12,q,5,3,"a",7),c.lc(),c.mc(13,"a-overlay-menu",8),c.wc("showChange",(function(e){return t.show_menu=e})),c.lc()),2&e&&(c.Ub(1),c.Hc("menu",t.show_menu),c.Ub(5),c.dd(t.datetime),c.Ub(6),c.Hc("ngForOf",t.tiles),c.Ub(1),c.Hc("show",t.show_menu))},directives:[m.a,O,L,N,a.n,R.a,f.a,s.f,p.a],styles:["[_nghost-%COMP%] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            overflow: hidden;\n            display: flex;\n            flex-direction: column;\n        }\n\n        main[_ngcontent-%COMP%] {\n            min-height: 50%;\n            background: #f0f0f0;\n        }\n\n        .top[_ngcontent-%COMP%] {\n            background: transparent linear-gradient(89deg, #004a86 0%, #00a1d8 70%, #6eb95c 100%) 0% 0%\n                no-repeat padding-box;\n        }\n\n        a[button].tile[_ngcontent-%COMP%] {\n            flex: 1;\n            border-radius: 0;\n            background-color: #fff;\n            color: rgba(0,0,0,.85);\n            border: none;\n            border-right: 1px solid #ccc;\n        }\n\n        a[button].tile[_ngcontent-%COMP%]:last-child {\n            border: none;\n        }"]}),e})()}];let Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.ec({type:e}),e.\u0275inj=c.dc({imports:[[a.c,o.h,i.a,s.g.forChild(J)]]}),e})()}}]);
//# sourceMappingURL=dashboard-dashboard-module.e0ba2368830d53d7d3af.js.map