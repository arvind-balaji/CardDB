(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{308:function(e,t,a){e.exports=a(554)},313:function(e,t,a){},554:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(69),c=a.n(o),i=a(27),s=a(35),l=a(29),d=a(28),p=a(30),u=a(558),h=(a(313),a(94)),m=a(557),v=a(9),E=a(307),b=a(36),f=a.n(b),g=a(72),O=a(68),w=a(70),y=a.n(w),j=a(137),S=a.n(j),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).getCard=function(){var t=Object(g.a)(f.a.mark(function t(a){var n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isCardLoading:!0}),t.prev=1,t.next=4,y.a.get("".concat(e.API_BASE_URL,"/card/").concat(a));case 4:n=t.sent,e.setState({card:n.data.data}),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(1),Error("Card Not Found");case 11:e.setState({isCardLoading:!1});case 12:case"end":return t.stop()}},t,this,[[1,8]])}));return function(e){return t.apply(this,arguments)}}(),e.search=function(){var t=Object(g.a)(f.a.mark(function t(a){var n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isSearchLoading:!0}),t.prev=1,t.next=4,y.a.get("".concat(e.API_BASE_URL,"/search"),{params:a});case 4:if(!("error"in(n=t.sent).data)){t.next=7;break}throw Error("Bad Request");case 7:e.setState({search:n.data.data}),t.next=14;break;case 11:throw t.prev=11,t.t0=t.catch(1),Error("Search Failed");case 14:e.setState({isSearchLoading:!1});case 15:case"end":return t.stop()}},t,this,[[1,11]])}));return function(e){return t.apply(this,arguments)}}(),e.download=Object(g.a)(f.a.mark(function t(){var a,n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.saved.map(function(e){return e._id}),t.prev=1,t.next=4,y.a.post("".concat(e.API_BASE_URL,"/save"),{ids:a},{responseType:"blob"});case 4:n=t.sent,S()(n.data,"Evidence.docx"),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(1),Error("Download Failed");case 11:case"end":return t.stop()}},t,this,[[1,8]])})),e.downloadOne=function(){var t=Object(g.a)(f.a.mark(function t(a){var n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post("".concat(e.API_BASE_URL,"/save"),{ids:[a]},{responseType:"blob"});case 3:n=t.sent,S()(n.data,"Card.docx"),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),Error("Download Failed");case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),e.showCardModal=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.setState({showCardModal:t})},e.saveCard=function(t){var a=[].concat(Object(h.a)(e.state.saved),[t]);e.setState({saved:a}),localStorage.setItem("saved",JSON.stringify(a))},e.removeCard=function(t){var a=[];if(t){var n=(a=Object(h.a)(e.state.saved)).indexOf(t);a.splice(n,1)}e.setState({saved:a}),localStorage.setItem("saved",JSON.stringify(a))},e.reorder=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.saved,a=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=Array.from(t),o=r.splice(a,1),c=Object(E.a)(o,1)[0];return r.splice(n,0,c),console.log(r),r},e.API_BASE_URL="http://api.debate.cards/api",e.state={isSearchLoading:!1,isCardLoading:!1,search:[],saved:localStorage.getItem("saved")?JSON.parse(localStorage.getItem("saved")):[],card:{},showCardModal:!1},e}return Object(p.a)(t,e),t}(O.Container),x=a(43),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=Object(g.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(0,a.props.appStore.getCard)(a.props.match.params.id);case 2:case"end":return e.stop()}},e,this)})),a.goBack=function(){var e=a.props.history;console.log(e.length),e.length<=1?e.push("/"):e.goBack()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.appStore,a=(t.closeModal,t.downloadOne),n=t.state;return r.a.createElement(v.m,{open:!0},r.a.createElement(v.m.Content,{scrolling:!0},r.a.createElement(v.m.Description,null,n.isCardLoading&&r.a.createElement(v.e,{active:!0,inverted:!0},r.a.createElement(v.l,{inverted:!0,content:"Loading"})),r.a.createElement("div",{style:{padding:"10px"},dangerouslySetInnerHTML:{__html:n.card.fullCard}}))),r.a.createElement(v.m.Actions,null,r.a.createElement(v.b,{primary:!0,onClick:function(){return a([e.props.match.params.id])}},"Download"),r.a.createElement(v.b,{secondary:!0,onClick:function(){return e.goBack()}},"Done")))}}]),t}(n.Component),D=Object(x.a)(k,{appStore:C}),L=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).openModal=function(){e.setState({modalOpen:!0}),e.getData()},e.state={modalOpen:!1,modalData:""},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.appStore,a=t.removeCard,n=t.saveCard,o=(t.showCardModal,this.props),c=o.data,i=o.history,s=["set","fileName","pocket","hat","block"].map(function(t){return e.props.data[t]}).filter(Boolean).join(" > ");return r.a.createElement(v.c,{fluid:!0,className:"card card-view"},r.a.createElement(v.c.Content,null,r.a.createElement(v.c.Header,null," ",c.tag," "),r.a.createElement(v.c.Description,{className:"card-cite"},c.cite),r.a.createElement(v.c.Meta,null,s)),!this.props.simple&&r.a.createElement(v.c.Content,{extra:!0},r.a.createElement("div",{style:{},className:"ui  buttons"},r.a.createElement(v.b,{style:{margin:"5px 0 5px 0"},onClick:function(){return n(c)},icon:!0,color:"blue",labelPosition:"right"}," Save ",r.a.createElement(v.j,{name:"arrow right"}))),r.a.createElement("div",{style:{},className:"ui  buttons"},r.a.createElement(v.b,{style:{margin:"5px 0 5px 0"},onClick:function(){return i.push("/card/".concat(c._id))},icon:!0,active:!0,basic:!0,color:"blue",primary:!0,labelPosition:"right"}," View ",r.a.createElement(v.j,{name:"eye"})))),this.props.simple&&r.a.createElement(v.c.Content,{extra:!0},r.a.createElement("div",{style:{},className:"ui  buttons"},r.a.createElement(v.b,{style:{margin:"5px 0 5px 0"},onClick:function(){return a(c._id)},icon:!0,basic:!0,color:"red",labelPosition:"right"}," Remove ",r.a.createElement(v.j,{name:"remove"}))),r.a.createElement("div",{style:{},className:"ui  buttons"},r.a.createElement(v.b,{style:{margin:"5px 0 5px 0"},onClick:function(){return i.push("/card/".concat(c._id))},icon:!0,active:!0,basic:!0,color:"blue",primary:!0,labelPosition:"right"}," View ",r.a.createElement(v.j,{name:"eye"})))))}}]),t}(n.Component),N=Object(x.a)(Object(m.a)(L),{appStore:C}),_=a(306),A=a(196),M=a(540),B=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).componentDidMount=function(){var t=e.props.history.location.search;if(t){var a=A.parse(t);console.log(a),e.props.appStore.search(a),console.log({search:a.q,field:a.f?a.f.split(","):[],set:a.s?a.s.split(","):[]}),e.setState({search:a.q,field:a.f?a.f.split(","):[],set:a.s?a.s.split(","):[]})}},e.handleChange=function(t,a){e.setState(Object(_.a)({},a.name,a.value))},e.handleSubmit=function(){var t=e.state,a=t.search,n=t.set,r=t.field,o={q:a,s:n.join(","),f:r.join(",")},c=A.stringify(o,{sort:!1}).replace(/\%20/g,"+");e.props.history.push({pathname:"/search",search:"?".concat(c)}),e.props.appStore.search(o)},e.serialize=function(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")},e.state={data:[],search:"",field:[],set:[],expanded:!1},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.expanded,a=this.props.appStore.state.isSearchLoading;return r.a.createElement("div",null,r.a.createElement(v.g,null,r.a.createElement(v.g.Group,null,r.a.createElement(v.g.Field,{control:v.k,width:12,onChange:this.handleChange,value:this.state.search,name:"search",placeholder:"Search for a cite or tag..."}),r.a.createElement(v.g.Field,{primary:!0,loading:a,onClick:this.handleSubmit,disabled:a,control:v.b,width:4},"Search")),r.a.createElement(v.a,{className:"search-dropdown"},r.a.createElement(v.a.Title,{onClick:function(){return e.setState({expanded:!t})},active:t},r.a.createElement(v.b,null,r.a.createElement(v.j,{name:"sliders"}),"Options"),r.a.createElement(v.j,{name:"dropdown"})),r.a.createElement(v.a.Content,{active:t},r.a.createElement(v.g.Group,null,r.a.createElement(v.g.Dropdown,{width:8,name:"set",value:this.state.set,onChange:this.handleChange,placeholder:"Evidence Set",fluid:!0,selection:!0,multiple:!0,options:[{key:"Open Ev 2018",value:"Open Ev 2018",text:"OpenEv '18"},{key:"Open Ev 2017",value:"Open Ev 2017",text:"OpenEv '17"},{key:"Open Ev 2016",value:"Open Ev 2016",text:"OpenEv '16"},{key:"Open Ev 2015",value:"Open Ev 2015",text:"OpenEv '15"},{key:"Open Ev 2014",value:"Open Ev 2014",text:"OpenEv '14"},{key:"Open Ev 2013",value:"Open Ev 2013",text:"OpenEv '13"},{key:"Open Ev 2012",value:"Open Ev 2012",text:"OpenEv '12"},{key:"User Contributed",value:"User Contributed",text:"User Contributed"}]}),r.a.createElement(v.g.Dropdown,{disabled:!0,width:8,name:"field",onChange:this.handleChange,placeholder:"Search Fields (Coming soon!)",fluid:!0,selection:!0,multiple:!0,options:[{key:"tag",value:"tag",text:"Tag"},{key:"cite",value:"cite",text:"Cite"},{key:"meta",value:"meta",text:"Document Map"}]}))))))}}]),t}(n.Component),I=Object(x.a)(Object(M.a)(B),{appStore:C}),P=a(139),R=a.n(P),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).saveCard=function(e){a.props.setSaved([].concat(Object(h.a)(a.props.saved),[e]))},a.searchResults=function(e){return r.a.createElement(v.c.Group,{style:{padding:"5px",paddingLeft:"1px"}},e.map(function(e,t){return r.a.createElement(N,{key:e._id,data:e})}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.appStore.state.search;return r.a.createElement("div",{className:"SearchPane"},r.a.createElement(v.i,{as:"h3",dividing:!0},"Search"),r.a.createElement(R.a,{hasMore:!1,height:this.props.height-200,style:{overflowX:"hidden"}},r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(u.a,{path:"/search",component:function(){return e.searchResults(t)}}))))}}]),t}(n.Component),F=Object(x.a)(U,{appStore:C}),T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).state={collections:"My Evidence"},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.height,t=this.props.appStore.state.saved,a=this.props.appStore,n=a.download,o=a.removeCard;return r.a.createElement("div",{className:"SearchPane"},r.a.createElement(v.i,{className:"tubpane-header",as:"h3",dividing:!0},"Saved"),r.a.createElement(R.a,{hasMore:!1,height:e-220,style:{overflowX:"hidden"}},r.a.createElement(v.c.Group,{style:{padding:"5px",paddingLeft:"1px"}},t.map(function(e,t){return r.a.createElement(N,{key:t,data:e,simple:!0})}))),r.a.createElement(v.f,null),r.a.createElement(v.g,null,r.a.createElement(v.g.Group,null,r.a.createElement(v.g.Field,{disabled:t.length<1,primary:!0,control:v.b,onClick:function(){return n()}},"Download"),r.a.createElement(v.g.Field,{disabled:t.length<1,control:v.b,onClick:function(){return o()}},"Clear"))))}}]),t}(n.Component),W=Object(x.a)(T,{appStore:C}),G=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).componentDidMount=function(){e.updateWindowDimensions(),window.addEventListener("resize",e.updateWindowDimensions)},e.componentWillUnmount=function(){window.removeEventListener("resize",e.updateWindowDimensions)},e.updateWindowDimensions=function(){e.setState({height:window.innerHeight})},e.state={data:[],saved:[],height:"0"},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,{path:"/card/:id",component:D}),r.a.createElement(v.d,{style:{marginTop:"2em"}},r.a.createElement(v.i,{as:"h1"},r.a.createElement("span",{className:"logo-card"},"Debate "," "),r.a.createElement("span",{className:"logo-vault"},"Cards")),r.a.createElement("br",null),r.a.createElement(v.h,{columns:2},r.a.createElement(v.h.Column,null,r.a.createElement(F,{height:this.state.height+30,setSaved:this.setSaved,saved:this.state.saved})),r.a.createElement(v.h.Column,null,r.a.createElement(W,{height:this.state.height-15,setSaved:this.setSaved,saved:this.state.saved})))),",",r.a.createElement(v.b,{href:"https://github.com/arvind-balaji/debate-cards",style:{position:"absolute",top:"10px",right:"10px"},color:"black"},r.a.createElement(v.j,{name:"github"}),"Source"),",",r.a.createElement("div",{style:{position:"absolute",bottom:"10px",textAlign:"center",width:"100%",color:"#525252"}}," The Card Database | Arvind Balaji | 2018 "))}}]),t}(n.Component),J=(a(547),a(559));a(551),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O.Provider,null,r.a.createElement(J.a,null,r.a.createElement(G,null))),document.getElementById("react-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[308,2,1]]]);
//# sourceMappingURL=main.97aef545.chunk.js.map