(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[57],{314:function(e,t,a){"use strict";var n=a(11),r=(a(0),a(19)),c=a(185),i=a(184),o=a(315),s=a.n(o),l=a(242),d=a(1),u=Object(l.a)((function(e){var t;return{buttonBox:(t={marginTop:e.spacing(4)},Object(n.a)(t,e.breakpoints.down("md"),{marginTop:e.spacing(3.5)}),Object(n.a)(t,e.breakpoints.down("sm"),{marginTop:e.spacing(3)}),Object(n.a)(t,"padding",e.spacing(1,0)),t),arrowIcon:{fontSize:e.spacing(2.2),marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.link,a=e.text,n=u();return Object(d.jsx)(c.a,{className:n.buttonBox,elevation:0,children:Object(d.jsx)(r.b,{to:t,style:{textDecoration:"none"},children:Object(d.jsxs)(i.a,{color:"primary",children:[Object(d.jsx)(s.a,{className:n.arrowIcon,color:"primary"}),a]})})})}},319:function(e,t,a){"use strict";var n=a(11),r=(a(0),a(122)),c=a(185),i=a(70),o=a(334),s=a(242),l=a.p+"static/media/loading.0655dbc7.svg",d=a(1),u=Object(s.a)((function(e){var t;return{loadingBox:{textAlign:"center",margin:"auto"},paper:{padding:e.spacing(5)},loadingIcon:{marginLeft:e.spacing(.75),verticalAlign:"text-top"},image:(t={width:300,height:300},Object(n.a)(t,e.breakpoints.down("md"),{width:275,height:275}),Object(n.a)(t,e.breakpoints.down("sm"),{width:250,height:250}),Object(n.a)(t,e.breakpoints.down(void 0),{width:200,height:200}),t)}}));t.a=function(e){var t=u(),a=e.children,n=e.hideImage;return Object(d.jsx)(r.a,{className:t.loadingBox,children:Object(d.jsxs)(c.a,{className:t.paper,elevation:0,children:[n||!0===n?null:Object(d.jsx)("img",{src:l,alt:"Loading...",className:t.image}),Object(d.jsxs)(i.a,{color:"primary",variant:"h6",children:[a," ",Object(d.jsx)(o.a,{size:24,color:"primary",className:t.loadingIcon})]})]})})}},323:function(e,t,a){"use strict";var n=a(124),r=a(1);t.a=function(e){var t=e.title,a=e.description,c=e.url,i=e.indexBehaviour;return Object(r.jsxs)(n.a,{children:[Object(r.jsx)("title",{children:t}),Object(r.jsx)("meta",{name:"description",content:a}),c&&Object(r.jsx)("link",{rel:"canonical",href:c}),Object(r.jsx)("meta",{name:"robots",content:i}),Object(r.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{property:"og:title",content:t}),Object(r.jsx)("meta",{property:"og:description",content:a}),c&&Object(r.jsx)("meta",{property:"og:url",content:c}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(r.jsx)("meta",{name:"twitter:description",content:a}),Object(r.jsx)("meta",{name:"twitter:title",content:t})]})}},749:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(43),c=a(385),i=a(122),o=a(304),s=a(296),l=a(242),d=a(292),u=a(63),j=a(314),b=a(323),m=a(319),h=a(127),p=a(131),x=a(70),O=a(291),g=a(390),y=a.n(g),f=a(1),v=Object(l.a)((function(e){return{messageBox:{padding:e.spacing(1.5)},arrowIcon:{fontSize:e.spacing(1.75),color:"rgba(0, 0, 0, 0.6)",verticalAlign:"middle"}}})),w=function(){var e=v();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(x.a,{color:"secondary",children:"Do you really want to delete this tournament?"}),Object(f.jsxs)(i.a,{className:e.messageBox,children:[Object(f.jsxs)(x.a,{variant:"body2",color:"textSecondary",children:[Object(f.jsx)(y.a,{className:e.arrowIcon})," All teams will be deleted."]}),Object(f.jsxs)(x.a,{variant:"body2",color:"textSecondary",children:[Object(f.jsx)(y.a,{className:e.arrowIcon})," No money will be refunded to any team."]})]}),Object(f.jsx)(O.a,{}),Object(f.jsx)(x.a,{color:"primary",sx:{marginTop:1.5},children:"We suggest you to do this instead of deleting:"}),Object(f.jsx)(i.a,{className:e.messageBox,children:Object(f.jsxs)(x.a,{variant:"body2",color:"textSecondary",children:[Object(f.jsx)(y.a,{className:e.arrowIcon})," Postponed the tournament by updating time or date."]})})]})},T=a(185),S=a(513),I=Object(l.a)((function(e){return{paper:{margin:e.spacing(1.5,0),backgroundColor:"#4A3F44",padding:e.spacing(2.5,0),borderRadius:e.spacing(0)},gridBox:{flexGrow:1},headingText:{color:"#FFFFFF",textAlign:"center",margin:e.spacing(.65,0,2.6,0),letterSpacing:e.spacing(.05),fontSize:e.spacing(3)},datagrid:{padding:e.spacing(1.5,0),textAlign:"center"}}})),F=function(e){var t=I(),a=e.title,n=e.value,r=e.secondaryValue;return Object(f.jsxs)(i.a,{className:t.datagrid,children:[Object(f.jsx)(x.a,{sx:{color:"#FFFFFF"},children:Object(f.jsx)("b",{children:a})}),Object(f.jsxs)(S.a,{direction:"row",spacing:1,sx:{marginTop:1,justifyContent:"center"},children:[Object(f.jsx)(x.a,{sx:{color:"#C0C0C0"},children:n}),r?Object(f.jsx)(x.a,{variant:"body2",sx:{color:"#C0C0C0",alignSelf:"flex-end"},children:Object(f.jsx)("del",{children:r})}):null]})]})},k=Object(n.memo)((function(e){var t=I(),a=e.title,n=e.matchTime,r=e.matchDate,i=e.teamType,l=e.perspective,d=e.map,u=e.server,j=e.entryFees,b=e.discountPercent,m=e.prizePool,h=Object(c.a)(new Date(r),"yyyy-MM-dd"),p="".concat(h," ").concat(n),O=[{id:1,title:"Date",value:Object(c.a)(new Date(h),"dd MMM yyyy")},{id:2,title:"Time",value:Object(c.a)(new Date(p),"hh:mm aa")},{id:3,title:"Team Type",value:i},{id:4,title:"Perspective",value:l},{id:5,title:"Map",value:d},{id:6,title:"Server",value:u},{id:7,title:"Entry Fees",value:j-j*b/100===0?"Free":"\u20b9 ".concat(j-j*b/100),secondaryValue:0===b||0===j?null:"\u20b9".concat(j)},{id:8,title:"Prize Pool",value:"\u20b9 ".concat(m)}];return Object(f.jsx)(T.a,{className:t.paper,elevation:0,children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(x.a,{className:t.headingText,children:a}),Object(f.jsx)(s.a,{container:!0,spacing:4,alignItems:"center",children:O.map((function(e){return Object(f.jsx)(s.a,{item:!0,xs:6,sm:4,md:3,className:t.gridBox,children:Object(f.jsx)(F,{title:e.title,value:e.value,secondaryValue:e.secondaryValue})},e.id)}))})]})})})),M=a(20),D=a(4),N=a(391),P=a(11),C=a(746),z=a(769),B=a(658),A=a.n(B),E=a(659),R=a.n(E),_=a(660),G=a.n(_),U=a(661),L=a.n(U),V=a(476),q=a(784),H=a(480),W=a(478),Y=a(477),J=a(479),K=[{_id:1,title:"RULES & TECHNICAL ISSUES",rules:["Only Mobile and Tab players are allowed to participate.","Once the tournament has started, no one can enter the tournament.","If someone leaves the tournament, no money will be refunded.","Any disconnection issue or network failure while in the lobby or game will not be considered unless the same problem is faced by a large number of players."]},{_id:2,title:"PREREQUISITES & TIPS",rules:["You must have the latest version of Battlegrounds Mobile India (BGMI) game installed on your Mobile/Tab.","You must have already downloaded the map on which the tournament will be played.","Please make sure your device is charged.","Make sure you have good internet connectivity.","It is recommended to turn on DND or Game Mode when playing tournaments.","Use earphones/headphones for a better gaming experience."]},{_id:3,title:"CHEATING",rules:["The use of emulators and/or any other device that gives players an unfair advantage is not permitted in the tournament. (Emulator is allowed only in emulator specific tournaments).","Players found to be using hacks and/or mods will be disqualified from the tournament and/or players will be banned from the platform for a certain period.","Teaming up with other players/teams in a tournament will result in disqualification and/or the players being banned from the platform for a certain period.","Any unfair means is strictly prohibited."]},{_id:4,title:"SCHEDULING",rules:["Players are advised to check their exact timings for their tournament on the day of the tournament.","Issues related to schedule change will not be entertained.","Any change in the timing of the tournament will be communicated to all players in advance."]},{_id:5,title:"REFUND",rules:["If you leave the team/tournament before the start of the tournament, only 90% of the entry fee will be refunded.","If someone leaves the tournament, no money will be refunded.","Participation/entry fee will not be refunded if you do not participate in the tournament for any reason."]},{_id:6,title:"PRIVACY",rules:["Do not share Room Id and Password with anyone.","If you wish to live-stream your gameplay on any video streaming platform, please ensure a delay of at least 5 minutes to avoid sharing your location."]},{_id:7,title:"IMPORTANT NOTE",rules:["Keep a screenshot of your score for proof."]}],Q=Object(n.memo)((function(){return Object(f.jsx)(f.Fragment,{children:K.map((function(e){return Object(f.jsx)(V.a,{component:T.a,variant:"outlined",elevation:0,sx:{marginBottom:3},children:Object(f.jsxs)(Y.a,{sx:{width:1},"aria-label":"rules-table",children:[Object(f.jsx)(q.a,{children:Object(f.jsx)(W.a,{sx:{backgroundColor:"#E3F2FD"},children:Object(f.jsx)(J.a,{sx:{color:"#0D47A1",fontWeight:"bold"},children:e.title})})}),Object(f.jsx)(H.a,{children:e.rules.map((function(e,t){return Object(f.jsx)(W.a,{children:Object(f.jsx)(J.a,{children:e})},t)}))})]})},e._id)}))})})),X=["children","value","index"],Z=Object(n.lazy)((function(){return a.e(69).then(a.bind(null,774))})),$=Object(n.lazy)((function(){return a.e(63).then(a.bind(null,775))})),ee=Object(n.lazy)((function(){return Promise.all([a.e(2),a.e(1),a.e(4),a.e(49)]).then(a.bind(null,747))})),te=Object(l.a)((function(e){var t;return{tabpanel:(t={padding:e.spacing(3)},Object(P.a)(t,e.breakpoints.down("md"),{padding:e.spacing(2.7,1.5)}),Object(P.a)(t,e.breakpoints.down("sm"),{padding:e.spacing(2.4,.7)}),t),tabheader:{backgroundColor:"#FFFFFF",marginTop:e.spacing(1),position:"sticky",top:0,bottom:8,zIndex:5}}})),ae=function(e){var t=te(),a=e.children,n=e.value,r=e.index,c=Object(N.a)(e,X);return Object(f.jsx)("div",Object(D.a)(Object(D.a)({role:"tabpanel",hidden:n!==r,id:"tournament-tabpanel-".concat(r),"aria-labelledby":"tournament-tab-".concat(r)},c),{},{children:n===r&&Object(f.jsx)(i.a,{className:t.tabpanel,children:a})}))},ne=function(e){return{id:"tournament-tab-".concat(e),"aria-controls":"tournament-tabpanel-".concat(e)}},re=function(e){var t=te(),a=e.tournamentId,r=e.teamType,c=e.entryFees,o=e.matchStatus,s=Object(n.useState)(0),l=Object(M.a)(s,2),u=l[0],j=l[1],b=Object(d.a)("(max-width:450px)");return Object(f.jsxs)(i.a,{sx:{width:"100%"},children:[Object(f.jsx)(i.a,{sx:{borderBottom:1,borderColor:"divider"},className:t.tabheader,children:Object(f.jsxs)(C.a,{value:u,onChange:function(e,t){j(t)},"aria-label":"tournament tabs",variant:"fullWidth",children:[Object(f.jsx)(z.a,Object(D.a)({icon:Object(f.jsx)(A.a,{}),label:b?"":"Rules"},ne(0))),Object(f.jsx)(z.a,Object(D.a)({icon:Object(f.jsx)(R.a,{}),label:b?"":"Prize"},ne(1))),Object(f.jsx)(z.a,Object(D.a)({icon:Object(f.jsx)(G.a,{}),label:b?"":"Participants"},ne(2))),Object(f.jsx)(z.a,Object(D.a)({icon:Object(f.jsx)(L.a,{}),label:b?"":"Result"},ne(3)))]})}),Object(f.jsx)(ae,{value:u,index:0,children:Object(f.jsx)(Q,{})}),Object(f.jsx)(ae,{value:u,index:1,children:Object(f.jsx)(n.Suspense,{fallback:Object(f.jsx)(h.a,{}),children:Object(f.jsx)(Z,{teamType:r,entry:c})})}),Object(f.jsx)(ae,{value:u,index:2,children:Object(f.jsx)(n.Suspense,{fallback:Object(f.jsx)(h.a,{}),children:Object(f.jsx)($,{tournamentId:a})})}),Object(f.jsx)(ae,{value:u,index:3,children:Object(f.jsx)(n.Suspense,{fallback:Object(f.jsx)(h.a,{}),children:Object(f.jsx)(ee,{tournamentId:a,matchStatus:o})})})]})},ce=Object(n.lazy)((function(){return a.e(0).then(a.bind(null,366))})),ie=Object(n.lazy)((function(){return a.e(75).then(a.bind(null,741))})),oe=Object(n.lazy)((function(){return a.e(56).then(a.bind(null,758))})),se=Object(l.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));t.default=Object(r.b)((function(e){return{user:e.auth.user,tournaments:e.match}}),(function(e){return{onGetMatch:function(t){return e(u.q(t))},onDeleteMatch:function(t,a){return e(u.i(t,a))}}}))((function(e){var t=se(),a=Object(n.useRef)(),r=e.tournaments,l=r.match,u=r.loadingMatch,x=r.matchError,O=e.user,g=e.onGetMatch,y=e.onDeleteMatch,v=e.history,T=e.match.params.tournamentId,S=Object(d.a)("(max-width:960px)"),I=Object(n.useCallback)((function(){a.current.openModal()}),[]);if(Object(n.useEffect)((function(){g(T)}),[g,T]),u||null===l)return Object(f.jsx)(m.a,{children:"Fetching Match Data..."});if(null===l&&x&&x.status)return Object(f.jsx)(n.Suspense,{children:Object(f.jsx)(ce,{status:x.status,statusText:x.msg})});if(l){var F=Object(c.a)(new Date(l.matchDate),"yyyy-MM-dd"),M="".concat(F," ").concat(l.matchTime),D=Object(c.a)(new Date(F),"dd MMM yyyy"),N=Object(c.a)(new Date(M),"hh:mm aa");return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{title:"Online ".concat(l.teamType," BGMI Tournament at ").concat(D," | Bluezone"),description:"The online ".concat(l.teamType," BGMI tournament of Rs ").concat(l.prizePool," prize pool will be played on ").concat(D," at ").concat(N," on the map of ").concat(l.map,"."),url:"https://www.bluezone.fun/tournaments/".concat(l._id),indexBehaviour:"index, follow"}),Object(f.jsxs)(i.a,{children:[Object(f.jsxs)(o.a,{children:[Object(f.jsx)(j.a,{link:"/tournaments",text:"Back To Tournaments"}),Object(f.jsx)(n.Suspense,{children:Object(f.jsx)(ie,{tournamentId:T,role:O.role,matchStatus:l.matchStatus,participantStatus:l.participantStatus,onDelete:I})})]}),Object(f.jsx)(k,{title:l.title,matchTime:l.matchTime,matchDate:l.matchDate,teamType:l.teamType,perspective:l.perspective,map:l.map,server:l.server,entryFees:l.entryFees,discountPercent:l.discountPercent,prizePool:l.prizePool})]}),Object(f.jsx)(i.a,{className:t.root,children:Object(f.jsx)(o.a,{children:Object(f.jsxs)(s.a,{container:!0,spacing:3,direction:S?"column-reverse":"row",children:[Object(f.jsx)(s.a,{item:!0,xs:12,sm:12,md:8,children:Object(f.jsx)(re,{tournamentId:l._id,teamType:l.teamType,entryFees:l.entryFees,matchStatus:l.matchStatus})}),Object(f.jsx)(s.a,{item:!0,xs:12,sm:12,md:4,children:Object(f.jsx)(n.Suspense,{fallback:Object(f.jsx)(h.a,{}),children:Object(f.jsx)(oe,{tournamentId:l._id,participantStatus:l.participantStatus,entryFees:l.entryFees,discountPercent:l.discountPercent,matchStatus:l.matchStatus,participationStatus:l.participationStatus,participants:l.participants})})})]})})}),Object(f.jsx)(p.a,{ref:a,title:"Delete Tournament",confirmText:"Delete",onConfirmClick:function(){y(T,v)},children:Object(f.jsx)(w,{})})]})}}))}}]);
//# sourceMappingURL=57.6569d3a5.chunk.js.map