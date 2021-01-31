(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{237:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},246:function(e,t,n){},455:function(e,t,n){},456:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(4),r=n(11),c=n.n(r),s=(n(237),n(143)),l=n.n(s),u=n(8),d=n(42),h=n(43),j=n(66),b=n(65),f=n(215),g=(n(239),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).wrapperRef=a.createRef(),i.state={dimensions:null,eventListenerAttached:!1},i}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.padding,n=void 0===t?0:t,a=e.ratio,i=void 0===a?1:a,r=this.state,c=r.dimensions,s=null;if(r.eventListenerAttached&&null!==c){var l=c.width,u=c.height;if(l&&u){var d=Math.min(l/i,u),h={position:"absolute",width:"".concat(d*i-2*n,"px"),height:"".concat(d-2*n,"px"),left:"".concat((l-d*i)/2+n,"px"),top:"".concat((u-d)/2+n,"px")};s=Object(o.jsx)("div",{style:h,className:this.props.className,children:this.props.children})}else console.log("SquareFill error, found width/height to be: [".concat(l,", ").concat(u,"]"))}return Object(o.jsx)("div",{ref:this.wrapperRef,className:"rect-fill-js-wrapper-style",children:s})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.setState((function(){return{dimensions:e.wrapperRef.current.getBoundingClientRect()}}))})),this.setState((function(){return{eventListenerAttached:!0}}))}},{key:"componentDidUpdate",value:function(e,t,n){var a=this;null===this.state.dimensions&&this.setState((function(){return{dimensions:a.wrapperRef.current.getBoundingClientRect()}}))}},{key:"componentWillUnmount",value:function(){var e=this;this.state.eventListenerAttached&&window.removeEventListener("resize",(function(){console.log("resize"),e.setState((function(){return{dimensions:e.wrapperRef.current.getBoundingClientRect()}}))}))}}]),n}(a.Component)),m=n(112),O=n(499),v=n(503),p=n(458),x=n(520),k=n(522),T=n(217),S=n.n(T);n(240);function y(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),i=n[0],r=n[1],c=e.timeTillTakeoff,s=e.timeToGate,l=e.getNextLoc,u=Math.floor((c-s)/60),d="";return u<=15&&(d=" yellow"),u<=5&&(d=" red"),Object(o.jsx)(O.a,{color:"primary",className:"header-div"+d,position:"static",children:Object(o.jsx)(v.a,{children:Object(o.jsx)("div",{children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p.a,{color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(){return r(!i)},children:Object(o.jsx)(S.a,{})}),Object(o.jsxs)(x.a,{className:"header-drawer",anchor:"left",open:i,onClose:function(){return r(!1)},children:[Object(o.jsx)(k.a,{className:"header-drawer-button",href:"#timer-div",onClick:function(){return r(!1)},children:"Home"}),Object(o.jsx)(k.a,{className:"header-drawer-button",href:"#map-div",onClick:function(){return r(!1)},children:"Map"}),Object(o.jsx)(k.a,{className:"header-drawer-button",href:"#options-div",onClick:function(){return r(!1)},children:"Options"}),Object(o.jsx)(k.a,{className:"header-drawer-button",href:"#leaderboards-div",onClick:function(){return r(!1)},children:"Leaderboards"}),Object(o.jsx)(k.a,{className:"header-drawer-button",href:"#leaderboards-div",onClick:function(){l(),r(!1)},children:"Get Next Current Location"})]})]})})})})}var C=n(521),M=n(504),w=n(459),N=n(505);n(246);function L(e){var t=e.timeTillTakeoff,n=e.timeToGate,a=e.caloriesPerTime;return Object(o.jsxs)(C.a,{variant:"outlined",children:[Object(o.jsx)(M.a,{children:Object(o.jsxs)("div",{className:"style",children:[Object(o.jsx)(w.a,{variant:"body2",children:"Free time left:"}),Object(o.jsxs)(w.a,{variant:"h6",children:[Math.floor((t-n)/60/60)," hours ",Math.floor((t-n)/60%60)," minutes ",(t-n)%60," seconds"]})]})}),Object(o.jsx)(N.a,{className:"style2",children:Object(o.jsxs)("div",{className:"style",children:[Object(o.jsx)(w.a,{variant:"body2",children:"Plane takes off in:"}),Object(o.jsxs)(w.a,{variant:"h6",children:[Math.floor(t/60/60)," hours ",Math.floor(t/60%60)," minutes ",t%60," seconds"]}),Object(o.jsxs)(w.a,{variant:"body2",children:[Object(o.jsx)("br",{}),"Travel time to gate:"]}),Object(o.jsxs)(w.a,{variant:"h6",children:[Math.floor(n/60/60)," hours ",Math.floor(n/60%60)," minutes ",n%60," seconds"]}),Object(o.jsxs)(w.a,{variant:"body2",children:[Object(o.jsx)("br",{}),"Calories Burned:"]}),Object(o.jsxs)(w.a,{variant:"h6",children:[Math.floor(n*a/60/60)," hours ",Math.floor(n*a/60%60)," minutes ",n*a%60," seconds"]})]})})]})}var G=n(78),R=n(70),F=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={directions:null},a.directionsService=new window.google.maps.DirectionsService,a.routeMe=a.routeMe.bind(Object(G.a)(a)),a.routeMeCallback=a.routeMeCallback.bind(Object(G.a)(a)),a}return Object(h.a)(n,[{key:"routeMe",value:function(e,t){var n,a,i,o,r,c,s,l,d,h,j=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return null};console.log("RouteMe called: start, end:"),console.log(e),console.log(t);var b={lat:null!==(n=null!==(a=e.lat)&&void 0!==a?a:e.latitude)&&void 0!==n?n:0,lng:null!==(i=null!==(o=null!==(r=e.lng)&&void 0!==r?r:e.long)&&void 0!==o?o:e.longitude)&&void 0!==i?i:0},f={lat:null!==(c=null!==(s=t.lat)&&void 0!==s?s:t.latitude)&&void 0!==c?c:0,lng:null!==(l=null!==(d=null!==(h=t.lng)&&void 0!==h?h:t.long)&&void 0!==d?d:t.longitude)&&void 0!==l?l:0},g={origin:b,destination:f,travelMode:window.google.maps.TravelMode.WALKING};this.directionsService.route(Object(u.a)({},g),this.routeMeCallback(j))}},{key:"routeMeCallback",value:function(e){var t=this;return function(n,a){a===window.google.maps.DirectionsStatus.OK?(console.log(n),t.setState({directions:n}),e(n.routes[0].legs[0].duration.value)):console.error("error fetching directions ".concat(n))}}},{key:"componentDidMount",value:function(){var e=this;this.props.setRouteMe((function(t,n,a){return e.routeMe(t,n,a)}));this.routeMe({lat:40.756795,lng:-73.954298},{lat:40.857895,lng:-73.954298},(function(e){return console.log("Default routeMe returning ".concat(e," seconds"))}))}},{key:"render",value:function(){var e=this,t=Object(R.withGoogleMap)((function(t){return Object(o.jsx)(R.GoogleMap,{defaultCenter:{lat:40.756795,lng:-73.954298},defaultZoom:13,children:Object(o.jsx)(R.DirectionsRenderer,{directions:e.state.directions})})}));return Object(o.jsx)("div",{children:Object(o.jsx)(t,{containerElement:Object(o.jsx)("div",{style:{height:"400px",width:"340px"}}),mapElement:Object(o.jsx)("div",{style:{height:"100%"}})})})}}]),n}(a.Component),D=i.a.memo(F),B=n(506),I=n(507),U=n(508),A=n(519);function E(e){return Object(o.jsx)("div",{children:Object(o.jsxs)(B.a,{"aria-label":"position",children:[Object(o.jsx)(I.a,{control:Object(o.jsx)(A.a,{color:"primary",checked:e.state.bathroom,onChange:function(t){return e.setState(Object(u.a)(Object(u.a)({},e.state),{},{bathroom:t.target.checked}))}}),label:"Bathroom"}),Object(o.jsx)(U.a,{children:"Select to route you through a restroom on the way to your gate."}),Object(o.jsx)(I.a,{control:Object(o.jsx)(A.a,{color:"primary",checked:e.state.food,onChange:function(t){return e.setState(Object(u.a)(Object(u.a)({},e.state),{},{food:t.target.checked}))}}),label:"Eat in"}),Object(o.jsx)(I.a,{control:Object(o.jsx)(A.a,{color:"primary",checked:e.state.togo,onChange:function(t){return e.setState(Object(u.a)(Object(u.a)({},e.state),{},{togo:t.target.checked}))}}),label:"Food/Coffee To-go"})]})})}var z=n(509),q=n(5),K=n(220),P=n.n(K),W=n(513),H=n(515),J=n(510),Q=n(512),X=n(514),Z=n(511),V=n(457),Y=Object(z.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}})),$=Object(q.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(J.a),_=Object(q.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(Z.a);function ee(e,t,n){return{category:e,score:t,rank:n}}var te=[ee("Calories burned","832 calories","Bronze"),ee("Steps taken","2873 steps","Gold"),ee("Arrival to gate","3 minutes early","Silver")];function ne(){var e=Y();return Object(o.jsxs)(C.a,{variant:"outlined",children:[Object(o.jsx)(M.a,{expandIcon:Object(o.jsx)(P.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(o.jsx)(w.a,{className:e.heading,children:"Leaderboards"})}),Object(o.jsx)(N.a,{children:Object(o.jsx)(Q.a,{component:V.a,children:Object(o.jsxs)(W.a,{children:[Object(o.jsx)(X.a,{children:Object(o.jsxs)(Z.a,{children:[Object(o.jsx)($,{children:"Category"}),Object(o.jsx)($,{align:"right",children:"Score"}),Object(o.jsx)($,{align:"right",children:"Ranking"})]})}),Object(o.jsx)(H.a,{children:te.map((function(e){return Object(o.jsxs)(_,{children:[Object(o.jsx)($,{component:"th",scope:"row",children:e.category}),Object(o.jsx)($,{align:"right",children:e.score}),Object(o.jsx)($,{align:"right",children:e.rank})]},e.name)}))})]})})})]})}var ae=n(221),ie=n.n(ae),oe=n(516),re=n(517);function ce(e){var t=Object(a.useState)((function(){return""})),n=Object(m.a)(t,2),i=n[0],r=n[1];return Object(o.jsx)(re.a,Object(u.a)({value:i,onChange:function(t){r(t.target.value),e.tellChange(t.target.value)}},e))}n(455);var se=function(){function e(){Object(d.a)(this,e),this.index=-1,this.fakes=[{lat:41.97646727821397,lng:-87.90130965501601},{lat:41.97540730411563,lng:-87.90320274316586},{lat:41.9748141231429,lng:-87.90002753367936},{lat:41.97759762749232,lng:-87.907176288232}]}return Object(h.a)(e,[{key:"getNext",value:function(){return this.index++,console.log("mock returning"),console.log(this.fakes[this.index]),this.fakes[this.index]}}]),e}(),le=Object(R.withScriptjs)(D),ue="2021-01-31",de=new Set(["H18","H12","G20","G5","E14","B2","C3","C32","B18","B7","B1","K1"]);function he(e,t){return je.apply(this,arguments)}function je(){return(je=Object(f.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://tamuhack-2021.uc.r.appspot.com/flights?date=".concat(ue)).then((function(e){return e.json()})).then((function(e){e=e.filter((function(e){return de.has(e.gate.code)})),console.log(e);var a=e.filter((function(e){return e.flightNumber===t})),i=a.length?a[0]:null;n((function(e){return""!==e.queuedNum?(setTimeout((function(){return he(e.queuedNum,n)}),0),Object(u.a)(Object(u.a)({},e),{},{queuedNum:""})):{info:i,selecting:e.selecting,validating:!1,queuedNum:"",changed:!ie()(i,e.info)}}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).locMock=new se,a.routeMe=null,a.state={currentLocation:a.locMock.getNext(),currentLocationChanged:!0,flightState:{info:null,selecting:!0,validating:!1,queuedNum:"",changed:!1},checkboxes:{bathroom:!1,food:!1,togo:!1},time:{timeTillTakeoff:-1,timeToGate:-1},extraTime:0},a.setRouteMe=function(e){return a.routeMe=e},a.setFlightState=function(e){return a.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{flightState:e(t.flightState)})}))},a.setCheckboxes=function(e){return a.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{checkboxes:e})}))},a.updateInterval=null,a.numUpdates=0,a.update=function(){a.state.flightState.selecting||(a.setTimeTillTakeoff(),(a.state.flightState.changed||a.state.currentLocationChanged)&&(a.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentLocationChanged:!1,flightState:Object(u.a)(Object(u.a)({},e.flightState),{},{changed:!1})})})),a.setTimeToGate()),a.numUpdates++,a.numUpdates>60&&(a.numUpdates=0,he(a.state.flightState.info.flightNumber,(function(e){return a.setFlightState(e)}))))},a.updateLocation=function(){a.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentLocation:a.locMock.getNext(),currentLocationChanged:!0})}))},a.getFlightDepartureTimeUnix=function(){return new Date(a.state.flightState.info.departureTime)},a.setTimeTillTakeoff=function(){var e=Math.floor((a.getFlightDepartureTimeUnix()-new Date)/1e3);a.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{time:Object(u.a)(Object(u.a)({},t.time),{},{timeTillTakeoff:e})})}))},a.setTimeToGate=function(){a.routeMe(a.state.currentLocation,a.state.flightState.info.gate.location,(function(e){console.log("routeMe ans: ".concat(e)),a.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{time:Object(u.a)(Object(u.a)({},t.time),{},{timeToGate:e})})}))}))},a}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.flightState,a=t.checkboxes,i=(t.time,Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)(y,{timeTillTakeoff:this.state.time.timeTillTakeoff,timeToGate:this.state.time.timeToGate+this.state.extraTime,getNextLoc:function(){return e.updateLocation()}}),Object(o.jsx)("div",{id:"timer-div",children:Object(o.jsx)(L,{timeTillTakeoff:this.state.time.timeTillTakeoff,timeToGate:this.state.time.timeToGate+this.state.extraTime,caloriesPerTime:.22})}),Object(o.jsx)("div",{id:"map-div",children:Object(o.jsx)(g,{children:Object(o.jsx)(le,{setRouteMe:this.setRouteMe,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAOn4IKOryQBul-tiLGCvsXEzAJGNKtX9Q",loadingElement:Object(o.jsx)("div",{style:{height:"100%"}})})})}),Object(o.jsx)("div",{id:"options-div",children:Object(o.jsx)(E,{state:a,setState:this.setCheckboxes})}),Object(o.jsx)("div",{id:"leaderboards-div",children:Object(o.jsx)(ne,{})})]}));return Object(o.jsx)("div",{className:"App",children:n.selecting?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"blur-me",children:i}),Object(o.jsxs)("div",{className:"flight-number",children:[Object(o.jsx)(ce,{label:"Flight Number",variant:"outlined",tellChange:function(t){n.validating?e.setFlightState((function(e){return Object(u.a)(Object(u.a)({},e),{},{queuedNum:t})})):(e.setFlightState((function(e){return Object(u.a)(Object(u.a)({},e),{},{validating:!0})})),he(t,e.setFlightState))}}),Object(o.jsx)("div",{className:"submit-button",children:Object(o.jsx)(oe.a,{disabled:n.validating||!n.info,onClick:function(){n.validating||!n.info||e.setFlightState((function(e){return Object(u.a)(Object(u.a)({},e),{},{selecting:!1})}))},variant:"outlined",children:"Submit"})})]})]}):i})}},{key:"componentDidMount",value:function(){var e=this;this.updateInterval=setInterval((function(){return e.update()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateInterval)}},{key:"componentDidUpdate",value:function(e,t,n){this.state.flightState.selecting||-1!==this.state.time.timeTillTakeoff||-1!==this.state.time.timeToGate||(this.setTimeTillTakeoff(),this.setTimeToGate());var a=this.state.checkboxes,i=(a.bathroom?480:0)+(a.togo?720:0)+(a.food?1800:0);this.state.extraTime!==i&&this.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{extraTime:i})}))}}]),n}(i.a.Component),fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,524)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),o(e),r(e)}))};c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(be,{})}),document.getElementById("root")),fe()}},[[456,1,2]]]);
//# sourceMappingURL=main.4407b7a4.chunk.js.map