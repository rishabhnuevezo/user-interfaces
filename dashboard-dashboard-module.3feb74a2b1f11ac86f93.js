(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{TDBs:function(t,e,n){"use strict";n.r(e),n.d(e,"DashboardModule",(function(){return G}));var c=n("2kYt"),a=n("nIj0"),o=n("sEIs"),i=n("R3Ii"),s=n("CzDk"),r=n("EM62"),l=n("20lr"),b=n("e81E"),u=n("D57K"),m=n("woo0"),d=n("ukpX"),p=n("PBFl");const f=function(){return["/explore"]},g=function(t){return{level:t}};function h(t,e){if(1&t&&(r.Vb(0,"a",9),r.Nc(1),r.Ub()),2&t){const t=e.$implicit;r.qc("routerLink",r.tc(3,f))("queryParams",r.uc(4,g,t.id)),r.Db(1),r.Pc(" ",t.display_name||t.name," ")}}const x=function(t){return{space:t}};function v(t,e){if(1&t&&(r.Vb(0,"a",9),r.Nc(1),r.Ub()),2&t){const t=e.$implicit;r.qc("routerLink",r.tc(3,f))("queryParams",r.uc(4,x,t.id)),r.Db(1),r.Pc("",t.display_name||t.name," ")}}function _(t,e){1&t&&(r.Vb(0,"span",10),r.Nc(1,"No free spaces"),r.Ub())}const w=function(){return{class:"material-icons",content:"crop_free"}},U=function(){return{class:"material-icons",content:"av_timer"}};let V=(()=>{class t{constructor(t){this._state=t,this.space_list=this._state.free_spaces,this.levels_free=this._state.level_occupancy}ngOnInit(){return Object(u.a)(this,void 0,void 0,(function*(){this._state.pollFreeSpaces()}))}ngOnDestroy(){this._state.stopPollingFreeSpaces()}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(m.a))},t.\u0275cmp=r.Jb({type:t,selectors:[["dashboard-availability"]],decls:22,vars:21,consts:[[1,"m-0","font-medium","text-xl"],[1,"flex","flex-col","items-center","p-2","bg-white","my-4","rounded-lg"],[1,"flex","items-center","w-full","mb-2"],[1,"bg-darken","rounded-lg","mr-2","text-2xl",3,"icon"],[1,"items","space-y-2","w-full"],["button","","mat-button","","class","w-full",3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"flex","items-center","flex-col","rounded-lg","bg-white","my-4","p-2"],[1,"items","space-y-2"],["class","text-dark-fade text-sm mb-2",4,"ngIf"],["button","","mat-button","",1,"w-full",3,"routerLink","queryParams"],[1,"text-dark-fade","text-sm","mb-2"]],template:function(t,e){1&t&&(r.Vb(0,"h3",0),r.Nc(1,"Available Now"),r.Ub(),r.Vb(2,"div",1),r.Vb(3,"div",2),r.Qb(4,"app-icon",3),r.Vb(5,"div"),r.Nc(6,"Most free space:"),r.Ub(),r.Ub(),r.Vb(7,"div",4),r.Lc(8,h,2,6,"a",5),r.kc(9,"slice"),r.kc(10,"async"),r.Ub(),r.Ub(),r.Vb(11,"div",6),r.Vb(12,"div",2),r.Qb(13,"app-icon",3),r.Vb(14,"div"),r.Nc(15,"Free rooms now:"),r.Ub(),r.Ub(),r.Vb(16,"div",7),r.Lc(17,v,2,6,"a",5),r.kc(18,"slice"),r.kc(19,"async"),r.Lc(20,_,2,0,"span",8),r.kc(21,"async"),r.Ub(),r.Ub()),2&t&&(r.Db(4),r.qc("icon",r.tc(19,w)),r.Db(4),r.qc("ngForOf",r.nc(9,5,r.lc(10,9,e.levels_free),0,2)),r.Db(5),r.qc("icon",r.tc(20,U)),r.Db(4),r.qc("ngForOf",r.nc(18,11,r.lc(19,15,e.space_list),0,3)),r.Db(3),r.qc("ngIf",!r.lc(21,17,e.space_list).length))},directives:[d.a,c.m,c.n,p.a,o.f],pipes:[c.v,c.b],styles:["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }"]}),t})();var O=n("ceWj"),y=n("OZ4H"),k=n("Y2X+"),D=n("FGQ9");function C(t,e){1&t&&r.Qb(0,"a-user-avatar",15),2&t&&r.qc("user",e.$implicit)}function P(t,e){if(1&t&&(r.Vb(0,"a",16),r.Nc(1,"Join Call"),r.Ub()),2&t){const t=r.jc().$implicit;r.qc("href",t.meeting_link,r.Cc)}}const q=function(){return{class:"material-icons",content:"room"}},M=function(){return{class:"material-icons",content:"group"}};function N(t,e){if(1&t){const t=r.Wb();r.Vb(0,"div",3),r.Qb(1,"div",4),r.Vb(2,"div",5),r.Vb(3,"div",6),r.Nc(4),r.Ub(),r.Vb(5,"div",7),r.Nc(6),r.Ub(),r.Vb(7,"div",8),r.Qb(8,"app-icon",9),r.Vb(9,"a",10),r.fc("click",(function(){r.Ac(t);const n=e.$implicit,c=r.jc();return n.space?c.locateSpace(n.space):""})),r.Nc(10),r.Ub(),r.Ub(),r.Vb(11,"div",11),r.Qb(12,"app-icon",9),r.Nc(13),r.Ub(),r.Vb(14,"div",12),r.Lc(15,C,1,1,"a-user-avatar",13),r.Ub(),r.Ub(),r.Lc(16,P,2,1,"a",14),r.Ub()}if(2&t){const t=e.$implicit;r.Db(4),r.Oc(t.time_period),r.Db(2),r.Oc(t.title),r.Db(2),r.qc("icon",r.tc(13,q)),r.Db(1),r.Hb("underline",!!t.space),r.qc("matTooltip",t.space?"Locate Space":""),r.Db(1),r.Qc(" ",(null==t.space?null:t.space.display_name)||(null==t.space?null:t.space.name)||"<No Location>"," ",null!=t.space&&null!=t.space.level&&t.space.level.display_name||null!=t.space&&null!=t.space.level&&t.space.level.name?", "+t.space.level.display_name||!1:""," "),r.Db(2),r.qc("icon",r.tc(14,M)),r.Db(1),r.Qc(" ",t.guests.length," Guest",1===t.guests.length?"":"s"," "),r.Db(2),r.qc("ngForOf",t.guests),r.Db(1),r.qc("ngIf",t.meeting_link)}}function F(t,e){1&t&&(r.Vb(0,"p",17),r.Nc(1," No upcoming events for today "),r.Ub())}let L=(()=>{class t{constructor(t,e){this._state=t,this._dialog=e,this.upcoming_events=this._state.upcoming_events}ngOnInit(){this._state.pollUpcomingEvents()}ngOnDestroy(){this._state.stopPollingUpcomingEvents()}locateSpace(t){this._dialog.open(O.a,{data:{space:t}})}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(m.a),r.Pb(y.b))},t.\u0275cmp=r.Jb({type:t,selectors:[["dashboard-upcoming"]],decls:7,vars:10,consts:[[1,"m-0","mb-4","font-medium","text-xl"],["name","event","class","flex bg-white rounded-lg relative overflow-hidden mb-4",4,"ngFor","ngForOf"],["class","text-dark-fade text-center w-full",4,"ngIf"],["name","event",1,"flex","bg-white","rounded-lg","relative","overflow-hidden","mb-4"],["name","status",1,"absolute","rounded-lg"],["name","details",1,"flex-1","mr-2"],["name","time",1,"text-sm","text-bold","mb-2"],["name","title",1,"text-sm","text-bold","mb-2"],["name","space",1,"text-xs","flex","items-center","mb-2"],[1,"mr-2",3,"icon"],[1,"text-black",3,"matTooltip","click"],["name","attendees",1,"text-xs","flex","items-center","mb-2"],["name","guests",1,"flex","space-x-2","text-sm"],[3,"user",4,"ngFor","ngForOf"],["button","","mat-button","","class","uppercase h-12",3,"href",4,"ngIf"],[3,"user"],["button","","mat-button","",1,"uppercase","h-12",3,"href"],[1,"text-dark-fade","text-center","w-full"]],template:function(t,e){1&t&&(r.Vb(0,"h3",0),r.Nc(1,"Today's Events"),r.Ub(),r.Lc(2,N,17,15,"div",1),r.kc(3,"slice"),r.kc(4,"async"),r.Lc(5,F,2,0,"p",2),r.kc(6,"async")),2&t&&(r.Db(2),r.qc("ngForOf",r.nc(3,2,r.lc(4,6,e.upcoming_events),0,3)),r.Db(3),r.qc("ngIf",!r.lc(6,8,e.upcoming_events).length))},directives:[c.m,c.n,d.a,k.a,D.a,p.a],pipes:[c.v,c.b],styles:["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n\n            [name='time'][_ngcontent-%COMP%] {\n                color: #00529b;\n            }\n\n            [name='event'][_ngcontent-%COMP%] {\n                padding: 1rem 1rem 1rem 2rem;\n            }\n\n            [name='status'][_ngcontent-%COMP%] {\n                top: 1rem;\n                left: -0.8rem;\n                height: 2.5rem;\n                width: 1.6rem;\n                background-color: #00529b;\n            }\n\n            button[_ngcontent-%COMP%] {\n                height: 3em;\n            }\n\n            app-icon[_ngcontent-%COMP%] {\n                margin-left: -0.25rem;\n            }"]}),t})();var Q=n("Jb3d");const I=["input"],j=function(){return{class:"material-icons",content:"close"}};function E(t,e){if(1&t){const t=r.Wb();r.Vb(0,"div",14),r.Qb(1,"a-user-avatar",15),r.Vb(2,"div",16),r.Nc(3),r.Ub(),r.Vb(4,"div",17),r.Qb(5,"div",18),r.Nc(6," Level 12 "),r.Ub(),r.Vb(7,"button",19),r.fc("click",(function(){r.Ac(t);const n=e.$implicit;return r.jc().removeUser(n)})),r.Qb(8,"app-icon",20),r.Ub(),r.Ub()}if(2&t){const t=e.$implicit;r.Db(1),r.qc("user",t),r.Db(2),r.Oc(t.name),r.Db(5),r.qc("icon",r.tc(3,j))}}function S(t,e){if(1&t&&(r.Vb(0,"button",21),r.Nc(1),r.Ub()),2&t){const t=r.jc();r.Db(1),r.Pc(" ",t.search_str?'No matches for "'+t.search_str+'"':"Type to search for users..."," ")}}function $(t,e){if(1&t){const t=r.Wb();r.Vb(0,"button",22),r.fc("click",(function(){r.Ac(t);const n=e.$implicit;return r.jc().addUser(n)})),r.Vb(1,"div",23),r.Qb(2,"a-user-avatar",24),r.Vb(3,"div",25),r.Vb(4,"div"),r.Nc(5),r.Ub(),r.Vb(6,"div",26),r.Nc(7),r.Ub(),r.Ub(),r.Ub(),r.Ub()}if(2&t){const t=e.$implicit;r.Db(2),r.qc("user",t),r.Db(3),r.Oc(t.name),r.Db(2),r.Oc(t.email)}}const J=function(){return{class:"material-icons",content:"person_add"}};let T=(()=>{class t extends l.c{constructor(t){super(),this._state=t,this.contacts=this._state.contacts,this.search_results=this._state.contacts_search,this.addUser=t=>this._state.addContact(t),this.removeUser=t=>this._state.removeContact(t),this.updateSearch=t=>this._state.updateContactSearch(t),this.search_str=""}ngOnInit(){this._state.updateContacts()}focusInput(){this.timeout("focus",()=>{this._input_el&&this._input_el.nativeElement.focus()})}clearInput(){this.search_str="",this._state.clearContactSearch()}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(m.a))},t.\u0275cmp=r.Jb({type:t,selectors:[["dashboard-contacts"]],viewQuery:function(t,e){if(1&t&&r.Rc(I,!0),2&t){let t;r.wc(t=r.gc())&&(e._input_el=t.first)}},features:[r.Ab],decls:20,vars:17,consts:[[1,"m-0","mb-2","font-medium","text-xl"],["name","contact-list",1,"bg-gray-400","rounded-lg","p-2","pl-0","space-y-2","flex","flex-wrap"],["name","contact","class","bg-white rounded-lg flex-1 flex flex-col items-center p-2 relative",4,"ngFor","ngForOf"],["name","contact","mat-button","",1,"rounded-lg","flex-1","w-full",3,"matMenuTriggerFor","menuOpened","menuClosed"],[1,"flex","flex-col","items-center","p-4","text-black","w-full"],[1,"text-2xl",3,"icon"],[1,"w-full","leading-tight","whitespace-normal"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",1,"p-0",3,"click"],["placeholder","Search for user...",1,"w-full","p-2","text-base",3,"ngModel","ngModelChange"],["input",""],["mat-menu-item","",4,"ngIf"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["name","contact",1,"bg-white","rounded-lg","flex-1","flex","flex-col","items-center","p-2","relative"],[1,"text-2xl","mb-2",3,"user"],["name","contact-name",1,"text-sm","mb-2"],["name","location",1,"flex","items-center","text-sm"],["name","dot",1,"mr-2"],["mat-icon-button","","name","close",3,"click"],[3,"icon"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"flex","items-center","leading-tight"],[1,"text-xl","mr-2",3,"user"],[1,"flex-1"],[1,"text-xs","text-dark-fade"]],template:function(t,e){if(1&t&&(r.Vb(0,"h3",0),r.Nc(1,"Contacts"),r.Ub(),r.Vb(2,"div",1),r.Lc(3,E,9,4,"div",2),r.kc(4,"async"),r.Vb(5,"button",3),r.fc("menuOpened",(function(){return e.focusInput()}))("menuClosed",(function(){return e.clearInput()})),r.Vb(6,"div",4),r.Qb(7,"app-icon",5),r.Vb(8,"span",6),r.Nc(9,"Click to add a person to contacts"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(10,"mat-menu",7,8),r.Vb(12,"div",9),r.fc("click",(function(t){return t.stopPropagation(),t.preventDefault()})),r.Vb(13,"input",10,11),r.fc("ngModelChange",(function(t){return e.search_str=t}))("ngModelChange",(function(){return e.updateSearch(e.search_str)})),r.Ub(),r.Ub(),r.Lc(15,S,2,1,"button",12),r.kc(16,"async"),r.Lc(17,$,8,3,"button",13),r.kc(18,"slice"),r.kc(19,"async"),r.Ub()),2&t){const t=r.xc(11);r.Db(3),r.qc("ngForOf",r.lc(4,6,e.contacts)),r.Db(2),r.qc("matMenuTriggerFor",t),r.Db(2),r.qc("icon",r.tc(16,J)),r.Db(6),r.qc("ngModel",e.search_str),r.Db(2),r.qc("ngIf",!r.lc(16,8,e.search_results).length),r.Db(2),r.qc("ngForOf",r.nc(18,10,r.lc(19,14,e.search_results),0,8))}},directives:[c.m,p.b,Q.d,d.a,Q.a,Q.b,a.c,a.l,a.o,c.n,D.a],pipes:[c.b,c.v],styles:["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n\n            [name='contact-list'][_ngcontent-%COMP%] {\n                padding: 0 0.5rem 0.5rem 0;\n            }\n\n            [name='contact'][_ngcontent-%COMP%] {\n                min-width: 8rem;\n                width: 8rem;\n                margin-left: 0.5rem;\n                margin-top: 0.5rem;\n            }\n\n            [name='contact-name'][_ngcontent-%COMP%] {\n                font-weight: 400;\n            }\n\n            [name='dot'][_ngcontent-%COMP%] {\n                height: 8px;\n                width: 8px;\n                border-radius: 8px;\n                background-color: #22992e;\n            }\n\n            button[name='close'][_ngcontent-%COMP%] {\n                position: absolute;\n                display: none;\n                top: .25rem;\n                right: .25rem;\n            }\n\n            [name='contact'][_ngcontent-%COMP%]:hover   button[name='close'][_ngcontent-%COMP%] {\n                display: initial;\n            }\n\n            button[name='contact'][_ngcontent-%COMP%] {\n                background-color: #f0f0f0;\n                border: none;\n                min-width: calc(100% - 0.5rem) !important;\n            }"]}),t})();var A=n("d4mj");function W(t,e){if(1&t&&(r.Vb(0,"a",9),r.Vb(1,"div",10),r.Qb(2,"app-icon",11),r.Vb(3,"span",12),r.Nc(4),r.Ub(),r.Ub(),r.Ub()),2&t){const t=e.$implicit;r.qc("routerLink",t.route),r.Db(2),r.qc("icon",t.icon),r.Db(2),r.Oc(t.name)}}const B=[{path:"",component:(()=>{class t{constructor(t){this._settings=t}get tiles(){return this._settings.get("app.home.tiles")||[]}get datetime(){return Object(s.a)(new Date,"EEEE, h:mma")}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(l.f))},t.\u0275cmp=r.Jb({type:t,selectors:[["dashboard"]],decls:14,vars:4,consts:[[3,"menu","menuChange"],[1,"top","relative","flex","flex-col","justify-center","text-white","px-12","py-4"],[1,"row","location"],[1,"row","text-2xl","text-bold","uppercase"],[1,"flex","flex-1","px-8","flex-wrap","overflow-auto"],[1,"flex-1","min-w-64"],[1,"flex"],["button","","mat-button","","class","tile text-2xl",3,"routerLink",4,"ngFor","ngForOf"],[3,"show","showChange"],["button","","mat-button","",1,"tile","text-2xl",3,"routerLink"],[1,"flex","flex-col","items-center"],[3,"icon"],[1,"text-lg"]],template:function(t,e){1&t&&(r.Vb(0,"header"),r.Vb(1,"a-topbar-header",0),r.fc("menuChange",(function(t){return e.show_menu=t})),r.Ub(),r.Vb(2,"div",1),r.Vb(3,"div",2),r.Nc(4,"Sydney"),r.Ub(),r.Vb(5,"div",3),r.Nc(6),r.Ub(),r.Ub(),r.Ub(),r.Vb(7,"main",4),r.Qb(8,"dashboard-availability",5),r.Qb(9,"dashboard-upcoming",5),r.Qb(10,"dashboard-contacts",5),r.Ub(),r.Vb(11,"footer",6),r.Lc(12,W,5,3,"a",7),r.Ub(),r.Vb(13,"a-overlay-menu",8),r.fc("showChange",(function(t){return e.show_menu=t})),r.Ub()),2&t&&(r.Db(1),r.qc("menu",e.show_menu),r.Db(5),r.Oc(e.datetime),r.Db(6),r.qc("ngForOf",e.tiles),r.Db(1),r.qc("show",e.show_menu))},directives:[b.a,V,L,T,c.m,A.a,p.a,o.f,d.a],styles:["[_nghost-%COMP%] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            overflow: hidden;\n            display: flex;\n            flex-direction: column;\n        }\n\n        main[_ngcontent-%COMP%] {\n            min-height: 50%;\n        }\n\n        .top[_ngcontent-%COMP%] {\n            background: transparent linear-gradient(89deg, #004a86 0%, #00a1d8 70%, #6eb95c 100%) 0% 0%\n                no-repeat padding-box;\n        }\n\n        a[button].tile[_ngcontent-%COMP%] {\n            flex: 1;\n            border-radius: 0;\n            background-color: #fff;\n            color: rgba(0,0,0,.85);\n            border: none;\n            border-right: 1px solid #ccc;\n        }\n\n        a[button].tile[_ngcontent-%COMP%]:last-child {\n            border: none;\n        }"]}),t})()}];let G=(()=>{class t{}return t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({factory:function(e){return new(e||t)},imports:[[c.c,a.h,i.a,o.g.forChild(B)]]}),t})()}}]);
//# sourceMappingURL=dashboard-dashboard-module.3feb74a2b1f11ac86f93.js.map