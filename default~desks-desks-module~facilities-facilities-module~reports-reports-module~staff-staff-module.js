(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+QaA":function(e,t,i){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=function(t,i){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,n,o){var a=o&&o.toUpperCase();return n||i[o]||e[o]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,i){return t||i.slice(1)})})},i=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,o=/\d\d?/,a=/\d*[^\s\d-_:/()]+/,r={},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;var t=e.match(/([+-]|\d\d)/g),i=60*t[1]+(+t[2]||0);return 0===i?0:"+"===t[0]?-i:i}(e)}],d=function(e){var t=r[e];return t&&(t.indexOf?t:t.s.concat(t.f))},l=function(e,t){var i,n=r.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){i=o>12;break}}else i=e===(t?"pm":"PM");return i},u={A:[a,function(e){this.afternoon=l(e,!1)}],a:[a,function(e){this.afternoon=l(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[o,s("seconds")],ss:[o,s("seconds")],m:[o,s("minutes")],mm:[o,s("minutes")],H:[o,s("hours")],h:[o,s("hours")],HH:[o,s("hours")],hh:[o,s("hours")],D:[o,s("day")],DD:[n,s("day")],Do:[a,function(e){var t=r.ordinal,i=e.match(/\d+/);if(this.day=i[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[o,s("month")],MM:[n,s("month")],MMM:[a,function(e){var t=d("months"),i=(d("monthsShort")||t.map(function(e){return e.substr(0,3)})).indexOf(e)+1;if(i<1)throw new Error;this.month=i%12||i}],MMMM:[a,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=(e=+e)+(e>68?1900:2e3)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c},h=function(e,n,o){try{var a=function(e){for(var n=(e=t(e,r&&r.formats)).match(i),o=n.length,a=0;a<o;a+=1){var s=n[a],c=u[s],d=c&&c[1];n[a]=d?{regex:c&&c[0],parser:d}:s.replace(/^\[|\]$/g,"")}return function(e){for(var t={},i=0,a=0;i<o;i+=1){var r=n[i];if("string"==typeof r)a+=r.length;else{var s=r.regex,c=r.parser,d=e.substr(a),l=s.exec(d)[0];c.call(t,l),e=e.replace(l,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var i=e.hours;t?i<12&&(e.hours+=12):12===i&&(e.hours=0),delete e.afternoon}}(t),t}}(n)(e),s=a.year,c=a.month,d=a.day,l=a.hours,h=a.minutes,b=a.seconds,p=a.milliseconds,m=a.zone,f=new Date,_=d||(s||c?1:f.getDate()),g=s||f.getFullYear(),v=0;s&&!c||(v=c>0?c-1:f.getMonth());var k=l||0,y=h||0,w=b||0,x=p||0;return m?new Date(Date.UTC(g,v,_,k,y,w,x+60*m.offset*1e3)):o?new Date(Date.UTC(g,v,_,k,y,w,x)):new Date(g,v,_,k,y,w,x)}catch(e){return new Date("")}};return function(e,t,i){i.p.customParseFormat=!0;var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var c=!0===a[2],d=!0===a[3],l=c||d,u=a[2];d&&(u=a[2]),r=this.$locale(),!c&&u&&(r=i.Ls[u]),this.$d=h(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),l&&t!==this.format(s)&&(this.$d=new Date("")),r={}}else if(s instanceof Array)for(var b=s.length,p=1;p<=b;p+=1){a[1]=s[p-1];var m=i.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===b&&(this.$d=new Date(""))}else o.call(this,e)}}}()},Qfz5:function(e,t,i){"use strict";i.d(t,"a",function(){return W}),i.d(t,"e",function(){return q}),i.d(t,"h",function(){return P}),i.d(t,"g",function(){return S}),i.d(t,"c",function(){return z}),i.d(t,"f",function(){return $}),i.d(t,"d",function(){return A}),i.d(t,"b",function(){return Q});var n=i("SVse"),o=i("s7LF"),a=i("Dxy4"),r=(i("TN/R"),i("iELJ")),s=(i("Q2Ze"),i("e6WT"),i("pu8Q")),c=i("zQhy"),d=(i("xnnP"),i("8Y7J")),l=i("grfs"),u=i("+QZd"),h=i("g31h");function b(e,t){1&e&&(d.Xb(0,"button",4),d.Xb(1,"i",5),d.Nc(2,"close"),d.Wb(),d.Wb())}function p(e,t){if(1&e){const e=d.Yb();d.Xb(0,"div",14),d.Xb(1,"label"),d.Nc(2,"Host"),d.Wb(),d.Xb(3,"a-user-search-field",15),d.ic("ngModelChange",function(t){return d.Cc(e),d.mc(2).host=t}),d.Wb(),d.Wb()}if(2&e){const e=d.mc(2);d.Fb(3),d.tc("ngModel",e.host)}}function m(e,t){if(1&e&&(d.Xb(0,"div"),d.Nc(1),d.nc(2,"date"),d.Wb()),2&e){const e=d.mc(2);d.Fb(1),d.Pc(" ",d.pc(2,1,e.date,"mediumDate")," ")}}function f(e,t){if(1&e){const e=d.Yb();d.Xb(0,"a-date-field",15),d.ic("ngModelChange",function(t){return d.Cc(e),d.mc(2).date=t}),d.Wb()}if(2&e){const e=d.mc(2);d.tc("ngModel",e.date)}}function _(e,t){if(1&e&&(d.Xb(0,"div",16),d.Xb(1,"label"),d.Nc(2,"Reason"),d.Wb(),d.Xb(3,"div"),d.Nc(4),d.Wb(),d.Wb()),2&e){const e=d.mc(2);d.Fb(4),d.Oc(e.reason||"~No set reason~")}}function g(e,t){if(1&e){const e=d.Yb();d.Vb(0),d.Xb(1,"main",6),d.Lc(2,p,4,1,"div",7),d.Xb(3,"div",8),d.Xb(4,"label"),d.Nc(5,"Date"),d.Wb(),d.Lc(6,m,3,4,"div",9),d.Lc(7,f,1,1,"a-date-field",10),d.Wb(),d.Lc(8,_,5,1,"div",11),d.Xb(9,"p"),d.Nc(10),d.Wb(),d.Wb(),d.Xb(11,"footer",12),d.Xb(12,"button",13),d.ic("click",function(){return d.Cc(e),d.mc().confirm()}),d.Nc(13,"Confirm"),d.Wb(),d.Wb(),d.Ub()}if(2&e){const e=d.mc();d.Fb(2),d.tc("ngIf",e.can_set_host),d.Fb(4),d.tc("ngIf",!e.can_set_date),d.Fb(1),d.tc("ngIf",e.can_set_date),d.Fb(1),d.tc("ngIf",!e.hide_reason),d.Fb(2),d.Rc(" Your desk",1===e.desks.length?"":"s"," will be ",e.desk_list," on ",(null==e.level?null:e.level.display_name)||(null==e.level?null:e.level.name)," ")}}function v(e,t){if(1&e&&(d.Xb(0,"main",17),d.Sb(1,"mat-spinner",18),d.Xb(2,"p"),d.Nc(3),d.Wb(),d.Wb()),2&e){const e=d.mc();d.Fb(1),d.tc("diameter",48),d.Fb(2),d.Oc(e.loading)}}let k=(()=>{class e{constructor(e,t){this._data=e,this._settings=t,this.event=new d.p,this.desks=this._data.desks||[],this.date=this._data.date,this.host=this._data.host,this.can_set_date=this._data.can_set_date,this.reason=this._data.reason,this.level=this._data.level}get desk_list(){return this.desks.map(e=>e.name).join(", ")}get hide_reason(){return!!this._settings.get("app.desks.hide_reason")}get can_set_host(){return!!this._settings.get("app.desks.can_set_host")}confirm(){this.loading="Requesting desk booking...",this.event.emit({reason:"done"})}}return e.\u0275fac=function(t){return new(t||e)(d.Rb(r.a),d.Rb(l.d))},e.\u0275cmp=d.Lb({type:e,selectors:[["desk-flow-confirm-modal-component"]],outputs:{event:"event"},decls:8,vars:3,consts:[[1,"flex-1"],["mat-icon-button","","mat-dialog-close","",4,"ngIf"],[4,"ngIf","ngIfElse"],["load_state",""],["mat-icon-button","","mat-dialog-close",""],[1,"material-icons"],[1,"p-4"],["host","","class","flex flex-col",4,"ngIf"],["date","",1,"mb-4"],[4,"ngIf"],[3,"ngModel","ngModelChange",4,"ngIf"],["reason","","class","mb-4",4,"ngIf"],[1,"flex","items-center","justify-center","p-2"],["mat-button","",3,"click"],["host","",1,"flex","flex-col"],[3,"ngModel","ngModelChange"],["reason","",1,"mb-4"],["load","",1,"flex","flex-col","p-12","items-center","justify-center"],[1,"mb-4",3,"diameter"]],template:function(e,t){if(1&e&&(d.Xb(0,"header"),d.Xb(1,"h2"),d.Nc(2,"Confirm Booking"),d.Wb(),d.Sb(3,"div",0),d.Lc(4,b,3,0,"button",1),d.Wb(),d.Lc(5,g,14,7,"ng-container",2),d.Lc(6,v,4,2,"ng-template",null,3,d.Mc)),2&e){const e=d.yc(7);d.Fb(4),d.tc("ngIf",!t.loading),d.Fb(1),d.tc("ngIf",!t.loading)("ngIfElse",e)}},directives:[n.n,a.b,r.c,u.a,o.l,o.o,h.a,s.b],pipes:[n.f],styles:["main[_ngcontent-%COMP%] {\n                width: 24rem;\n                max-width: calc(100vw - 4.5rem);\n            }"]}),e})();function y(e,t){if(1&e){const e=d.Yb();d.Xb(0,"div",2),d.Xb(1,"h2",3),d.Nc(2,"COVID-19 Questionnaire"),d.Wb(),d.Xb(3,"main",4),d.Xb(4,"div",5),d.Xb(5,"label"),d.Nc(6," Have you travelled overseas within the last 14 days?"),d.Xb(7,"span"),d.Nc(8,"*"),d.Wb(),d.Wb(),d.Xb(9,"mat-radio-group",6),d.Xb(10,"mat-radio-button",7),d.Nc(11,"Yes"),d.Wb(),d.Xb(12,"mat-radio-button",7),d.Nc(13,"No"),d.Wb(),d.Wb(),d.Wb(),d.Xb(14,"div",5),d.Xb(15,"label"),d.Nc(16," Are you unwell or experiencing any cold or flu-like symptoms?"),d.Xb(17,"span"),d.Nc(18,"*"),d.Wb(),d.Wb(),d.Xb(19,"mat-radio-group",8),d.Xb(20,"mat-radio-button",7),d.Nc(21,"Yes"),d.Wb(),d.Xb(22,"mat-radio-button",7),d.Nc(23,"No"),d.Wb(),d.Wb(),d.Wb(),d.Xb(24,"div",9),d.Xb(25,"label"),d.Nc(26," Have you had contact with anyone with suspected COVID-19?"),d.Xb(27,"span"),d.Nc(28,"*"),d.Wb(),d.Wb(),d.Xb(29,"mat-radio-group",10),d.Xb(30,"mat-radio-button",7),d.Nc(31,"Yes"),d.Wb(),d.Xb(32,"mat-radio-button",7),d.Nc(33,"No"),d.Wb(),d.Wb(),d.Wb(),d.Wb(),d.Xb(34,"footer",11),d.Xb(35,"button",12),d.ic("click",function(){return d.Cc(e),d.mc().submit()}),d.Nc(36,"Submit"),d.Wb(),d.Wb(),d.Xb(37,"button",13),d.Xb(38,"i",14),d.Nc(39,"close"),d.Wb(),d.Wb(),d.Wb()}if(2&e){const e=d.mc();d.Fb(3),d.tc("formGroup",e.form),d.Fb(7),d.tc("value",!0),d.Fb(2),d.tc("value",!1),d.Fb(8),d.tc("value",!0),d.Fb(2),d.tc("value",!1),d.Fb(8),d.tc("value",!0),d.Fb(2),d.tc("value",!1)}}function w(e,t){1&e&&(d.Xb(0,"main",15),d.Xb(1,"p",16),d.Nc(2," Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. "),d.Wb(),d.Xb(3,"button",13),d.Xb(4,"app-icon"),d.Nc(5,"close"),d.Wb(),d.Wb(),d.Wb())}let x=(()=>{class e{constructor(){this.event=new d.p}ngOnInit(){this.form=new o.f({travelled:new o.d("",[o.q.required]),unwell:new o.d("",[o.q.required]),contact:new o.d("",[o.q.required])})}submit(){this.form.markAllAsTouched(),this.form.valid?Object.keys(this.form.value).find(e=>!0===this.form.value[e]||"true"===this.form.value[e])?this.failure=!0:this.event.emit({reason:"done"}):Object(l.l)("All the questions must be answered")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Lb({type:e,selectors:[["desk-question-modal"]],outputs:{event:"event"},decls:3,vars:2,consts:[["class","relative",4,"ngIf","ngIfElse"],["fail_state",""],[1,"relative"],[1,"p-4","text-xl"],[1,"p-4",3,"formGroup"],[1,"flex","flex-col","mb-4"],["formControlName","travelled",1,"space-x-2"],[3,"value"],["formControlName","unwell",1,"space-x-2"],[1,"flex","flex-col"],["formControlName","contact",1,"space-x-2"],[1,"flex","justify-center","items-center","p-2"],["mat-button","",3,"click"],["close","","mat-icon-button","","mat-dialog-close",""],[1,"material-icons"],["failure","",1,"pt-8","relative"],[1,"p-4"]],template:function(e,t){if(1&e&&(d.Lc(0,y,40,7,"div",0),d.Lc(1,w,6,0,"ng-template",null,1,d.Mc)),2&e){const e=d.yc(2);d.tc("ngIf",!t.failure)("ngIfElse",e)}},directives:[n.n,o.m,o.g,c.b,o.l,o.e,c.a,a.b,r.c],styles:["main[_ngcontent-%COMP%] {\n                width: 24rem;\n                max-width: calc(100vw - 4.5rem);\n            }\n\n            [close][_ngcontent-%COMP%] {\n                position: absolute;\n                top: 0.5rem;\n                right: 0.5rem;\n            }"]}),e})();var O=i("odh7"),j=i("ILtH"),D=i("IYaI"),C=i("jG/O"),I=i("G6Tw"),M=i("Da6A"),R=i("EhJz");class W{constructor(e={}){var t,i;this.id=e.id||"",this.asset_id=e.asset_id||"",this.zones=e.zones||[],this.booking_start=e.booking_start||Object(O.a)(e.date||Object(j.a)(Object(D.a)(new Date,2),{nearestTo:5})),this.booking_end=e.booking_end||Object(O.a)(Object(D.a)(this.booking_start,e.duration||60)),this.booking_type=e.booking_type||"",this.type=e.type||"booking",this.date=e.date||1e3*this.booking_start,this.duration=e.duration||Object(C.a)(1e3*this.booking_start,1e3*this.booking_end),this.timezone=e.timezone||Intl.DateTimeFormat().resolvedOptions().timeZone,this.user_email=e.user_email||"",this.user_id=e.user_id||"",this.user_name=e.user_name||"",this.title=e.title||"Desk booking",this.description=e.description||"",this.checked_in=!!e.checked_in,this.rejected=!!e.rejected,this.approved=!!e.approved,this.approver_id=e.approver_id||"",this.approver_email=e.approver_email||"",this.approver_name=e.approver_name||"",this.extension_data=e.extension_data||{},this.access=!!(null===(t=e.extension_data)||void 0===t?void 0:t.access),this.all_day=null===(i=e.all_day)||void 0===i||i,this.status=this.rejected?"declined":this.approved?"approved":"tentative"}toJSON(){const e=Object.assign({},this);return this.id||delete e.id,delete e.date,delete e.duration,e}get location(){return this.description}get is_today(){return Object(I.a)(this.date,new Date)}get is_done(){const e=new Date,t=this.all_day?Object(M.a)(this.date,24):Object(D.a)(this.date,this.duration);return Object(R.a)(e,t)}}i("rtnF"),i("u0+b");var X=i("Wgwc"),F=i("+QaA");X.extend(F),X().hour(6).minute(0).subtract(1,"d").startOf("m");var L=i("K2Fw"),Y=i("lJxs"),N=i("shWC");const G="/api/staff/v1/bookings";function q(e){const t=Object(N.a)(e);return Object(L.e)(`${G}${t?"?"+t:""}`).pipe(Object(Y.a)(e=>e.map(e=>new W(e))))}function P(e){return Object(L.e)(`${G}/${encodeURIComponent(e)}`).pipe(Object(Y.a)(e=>new W(e)))}const S=e=>e.id?function(e,t,i="patch"){return("patch"===i?L.k:L.m)(`${G}/${encodeURIComponent(e)}`,t).pipe(Object(Y.a)(e=>new W(e)))}(e.id,e):function(e){return Object(L.l)(`${G}`,e).pipe(Object(Y.a)(e=>new W(e)))}(e);function z(e){return Object(L.l)(`${G}/${encodeURIComponent(e)}/approve`,"").pipe(Object(Y.a)(e=>new W(e)))}function $(e){return Object(L.l)(`${G}/${encodeURIComponent(e)}/reject`,"").pipe(Object(Y.a)(e=>new W(e)))}function A(e,t){const i=Object(N.a)({state:t});return Object(L.l)(`${G}/${encodeURIComponent(e)}/check_in?${i}`,"").pipe(Object(Y.a)(e=>new W(e)))}var E=i("mrSG"),T=i("M34a"),V=i("piIK"),U=i("SxV6"),B=i("InVF");let Q=(()=>{class e{constructor(e,t){this._org=e,this._dialog=t,this.can_set_date=!0,this.error_on_host=!0}bookDesk({desks:e,host:t,reason:i,attendees:n,date:o}){var a;return Object(E.a)(this,void 0,void 0,function*(){if(this.error_on_host&&!t)return Object(l.l)("You need to select a host to book a desk.");i=i||"";const r=this._org.levelWithID(e[0].zone instanceof Array?e[0].zone:[null===(a=e[0].zone)||void 0===a?void 0:a.id]);let s=this._dialog.open(x),c=yield Promise.race([s.componentInstance.event.pipe(Object(U.a)(e=>"done"===e.reason)).toPromise(),s.afterClosed().pipe(Object(Y.a)(e=>null)).toPromise()]);if(!c)return;if(s.close(),s=this._dialog.open(k,{data:{host:t,desks:e,date:o?new Date(o):new Date,reason:i,level:r,can_set_date:this.can_set_date}}),c=yield Promise.race([s.componentInstance.event.pipe(Object(U.a)(e=>"done"===e.reason)).toPromise(),s.afterClosed().pipe(Object(Y.a)(e=>null)).toPromise()]),!c)return;if(o=s.componentInstance.date||o,!(t=s.componentInstance.host||t))return s.close(),Object(l.l)("You need to select a host to book a desk. ");s.componentInstance.loading="Checking for existing desk bookings...";const d=(yield q({type:"desk",period_start:Object(O.a)(Object(T.a)(o||new Date)),period_end:Object(O.a)(Object(V.a)(o||new Date))}).toPromise()).filter(e=>e.user_email.toLowerCase()===t.email.toLowerCase());if(null==d?void 0:d.length)return s.close(),Object(l.l)("You currently already have a desk booked for the selected date.");s.componentInstance.loading="Booking desk...";const u=[t,...n||[]];return yield Promise.all([e.map((e,n)=>this.makeDeskBooking(e,t,o.valueOf()||(new Date).valueOf(),i,u[n]))]),Object(l.n)("Successfully booked desk"),s.close(),!0})}makeDeskBooking(e,t,i,n,o=null){var a,r,s,c;return Object(E.a)(this,void 0,void 0,function*(){const d=`${null===(a=e.zone)||void 0===a?void 0:a.name}-${e.id}`,l=this._org.levelWithID(e.zone instanceof Array?e.zone:[null===(r=e.zone)||void 0===r?void 0:r.id]),u=(null===(s=e.zone)||void 0===s?void 0:s.id)?[null===(c=e.zone)||void 0===c?void 0:c.id,null==l?void 0:l.parent_id]:[null==l?void 0:l.parent_id],h={booking_start:Object(O.a)(Object(T.a)(i)),user_id:(null==o?void 0:o.id)||t.id,user_name:(null==o?void 0:o.name)||t.name,user_email:(null==o?void 0:o.email)||t.email,booking_end:Math.floor(Object(V.a)(i).valueOf()/1e3),asset_id:e.id,title:n,description:d,zones:u,booking_type:"desk",extension_data:{groups:e.groups,for_user:null==o?void 0:o.email}};return S(h).toPromise()})}}return e.\u0275fac=function(t){return new(t||e)(d.ec(B.c),d.ec(r.b))},e.\u0275prov=d.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},zQhy:function(e,t,i){"use strict";i.d(t,"a",function(){return O}),i.d(t,"b",function(){return v}),i.d(t,"c",function(){return j});var n=i("8Y7J"),o=i("UhP/"),a=i("8LU1"),r=i("s7LF"),s=i("omvX"),c=i("YEUz"),d=i("CtHx");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const l=["input"],u=function(){return{enterDuration:150}},h=["*"],b=new n.u("mat-radio-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let p=0;const m={provide:r.j,useExisting:Object(n.Y)(()=>v),multi:!0};class f{constructor(e,t){this.source=e,this.value=t}}const _=new n.u("MatRadioGroup");let g=(()=>{class e{constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+p++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new n.p}get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(a.c)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=Object(a.c)(e),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new f(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(n.Rb(n.h))},e.\u0275dir=n.Mb({type:e,inputs:{name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"}}),e})(),v=(()=>{class e extends g{}return e.\u0275fac=function(t){return k(t||e)},e.\u0275dir=n.Mb({type:e,selectors:[["mat-radio-group"]],contentQueries:function(e,t,i){if(1&e&&n.Kb(i,O,1),2&e){let e;n.xc(e=n.jc())&&(t._radios=e)}},hostAttrs:["role","radiogroup",1,"mat-radio-group"],exportAs:["matRadioGroup"],features:[n.Eb([m,{provide:_,useExisting:e}]),n.Cb]}),e})();const k=n.Zb(v);class y{constructor(e){this._elementRef=e}}const w=Object(o.v)(Object(o.z)(y));let x=(()=>{class e extends w{constructor(e,t,i,o,r,s,c,d){super(t),this._changeDetector=i,this._focusMonitor=o,this._radioDispatcher=r,this._animationMode=s,this._providerOverride=c,this._uniqueId="mat-radio-"+ ++p,this.id=this._uniqueId,this.change=new n.p,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,d&&(this.tabIndex=Object(a.f)(d,0)),this._removeUniqueSelectionListener=r.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(e){const t=Object(a.c)(e);this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled(Object(a.c)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=Object(a.c)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return`${this.id||this._uniqueId}-input`}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new f(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputChange(e){e.stopPropagation();const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(n.Rb(g),n.Rb(n.m),n.Rb(n.h),n.Rb(c.h),n.Rb(d.d),n.Rb(String),n.Rb(void 0),n.Rb(String))},e.\u0275dir=n.Mb({type:e,viewQuery:function(e,t){if(1&e&&n.Sc(l,1),2&e){let e;n.xc(e=n.jc())&&(t._inputElement=e.first)}},inputs:{id:"id",checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change"},features:[n.Cb]}),e})(),O=(()=>{class e extends x{constructor(e,t,i,n,o,a,r,s){super(e,t,i,n,o,a,r,s)}}return e.\u0275fac=function(t){return new(t||e)(n.Rb(_,8),n.Rb(n.m),n.Rb(n.h),n.Rb(c.h),n.Rb(d.d),n.Rb(s.a,8),n.Rb(b,8),n.fc("tabindex"))},e.\u0275cmp=n.Lb({type:e,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(e,t){1&e&&n.ic("focus",function(){return t._inputElement.nativeElement.focus()}),2&e&&(n.Gb("tabindex",null)("id",t.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),n.Jb("mat-radio-checked",t.checked)("mat-radio-disabled",t.disabled)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-primary","primary"===t.color)("mat-accent","accent"===t.color)("mat-warn","warn"===t.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[n.Cb],ngContentSelectors:h,decls:13,vars:19,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input","cdk-visually-hidden",3,"id","checked","disabled","tabIndex","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(e,t){if(1&e&&(n.sc(),n.Xb(0,"label",0,1),n.Xb(2,"span",2),n.Sb(3,"span",3),n.Sb(4,"span",4),n.Xb(5,"input",5,6),n.ic("change",function(e){return t._onInputChange(e)})("click",function(e){return t._onInputClick(e)}),n.Wb(),n.Xb(7,"span",7),n.Sb(8,"span",8),n.Wb(),n.Wb(),n.Xb(9,"span",9),n.Xb(10,"span",10),n.Nc(11,"\xa0"),n.Wb(),n.rc(12),n.Wb(),n.Wb()),2&e){const e=n.yc(1);n.Gb("for",t.inputId),n.Fb(5),n.tc("id",t.inputId)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex)("required",t.required),n.Gb("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby),n.Fb(2),n.tc("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",n.uc(18,u)),n.Fb(2),n.Jb("mat-radio-label-before","before"==t.labelPosition)}},directives:[o.o],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),e})(),j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Pb({type:e}),e.\u0275inj=n.Ob({imports:[[o.p,o.j],o.j]}),e})()}}]);
//# sourceMappingURL=default~desks-desks-module~facilities-facilities-module~reports-reports-module~staff-staff-module.js.map