(this.webpackJsonpncov=this.webpackJsonpncov||[]).push([[0],{217:function(e,t,a){e.exports=a.p+"static/media/virus.b1b468f6.svg"},497:function(e,t,a){e.exports=a(816)},525:function(e,t){},539:function(e,t){},541:function(e,t){},720:function(e,t,a){},721:function(e,t,a){},722:function(e,t,a){},723:function(e,t,a){},810:function(e,t,a){},811:function(e,t,a){},814:function(e,t,a){},815:function(e,t,a){},816:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(17),i=a(111),s=a(99),u=a(479),m=a.n(u),d=a(44),f=a.n(d),h=a(78),p=a(126),E=a.n(p),v=a(79),b=a.n(v),w=a(217),g=a.n(w),y=(a(720),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"dot dot1"},r.a.createElement("i",null)),r.a.createElement("div",{className:"dot dot2"},r.a.createElement("i",null)),r.a.createElement("div",{className:"dot dot3"},r.a.createElement("i",null)),r.a.createElement("div",{className:"dot dot4"},r.a.createElement("i",null)),r.a.createElement("div",{className:"dot dot5"},r.a.createElement("i",null)),r.a.createElement("div",{className:"dot dot6"},r.a.createElement("i",null)),r.a.createElement("div",{className:"dot dot7"},r.a.createElement("i",null)),r.a.createElement("div",{className:"dot dot8"},r.a.createElement("i",null)),r.a.createElement("div",{className:"dot dot9"},r.a.createElement("i",null))))}),x=(a(721),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(h.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://bnonews.com/index.php/2020/02/the-latest-coronavirus-cases");case 2:t=e.sent,a=E.a.load(t.data),n=a("div#mvp-content-main"),n.find("h2").get().forEach((function(e){"Notes"===e.children[0].data&&l(e.next.next.children)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Notes"),r.a.createElement("ul",null,a.map((function(e,t){var a=e.children[0].data;return r.a.createElement("li",{key:t},r.a.createElement("img",{src:g.a}),r.a.createElement("span",null,a))})))):r.a.createElement(y,null);return r.a.createElement("section",{className:"notes"},i)}),N=(a(722),function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(h.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://cors-anywhere.herokuapp.com/https://bnonews.com/index.php/2020/02/the-latest-coronavirus-cases");case 2:t=e.sent,a=E.a.load(t.data),n=a("div#mvp-content-main"),n.find("h2").get().forEach((function(e){if("Timeline for major updates (GMT)"===e.children[0].data){var t=e.next.next.next.next.children[0].data||"",a=e.next.next.next.next.next.next.children||[];l({date:t,news:a})}}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"current"},a.news?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,a.date),r.a.createElement("ul",null,a.news.map((function(e,t){var a=e.children[0].data,n=e.children[1],l=n?n.attribs.href:"#",c=n?n.attribs.target:"";return r.a.createElement("li",{key:t},a,r.a.createElement("a",{href:l,target:c},"Source"),")")})))):r.a.createElement(y,null))}),C=(a(723),function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Timeline Coronavirus Epidemic"),r.a.createElement("nav",null,r.a.createElement("span",null,r.a.createElement(i.Link,{to:"/"},"Home")),r.a.createElement("span",null,r.a.createElement(i.Link,{to:"/timeline"},"Timeline")),r.a.createElement("span",null,r.a.createElement(i.Link,{to:"/news"},"News"))))}),k=a(481),j=a.n(k),O=(a(810),function(e){var t=e.tableData,a=e.setTableData;Object(n.useEffect)((function(){l()}),[]);var l=function(){var e=Object(h.a)(f.a.mark((function e(){var t,n,r,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/#countries");case 2:t=e.sent,n=E.a.load(t.data),(r=n(".tab-content table tbody").children().get().map((function(e){return e.children.filter((function(e){return"tag"===e.type})).filter((function(e){return e.children.filter((function(e){return"tag"===e.type}))}))})).map((function(e){return{country:e[0].children[0].data||e[0].children[0].children[0].data,totalCases:e[1].children[0]?e[1].children[0].data:"",newCases:e[2].children[0]?e[2].children[0].data:"",totalDeaths:e[3].children[0]?e[3].children[0].data:"",newDeaths:e[4].children[0]?e[4].children[0].data:"",totalRecovered:e[5].children[0]?e[5].children[0].data:"",activeCases:e[6].children[0]?e[6].children[0].data:"",criticalCases:e[7].children[0]?e[7].children[0].data:""}}))).pop(),l=r.filter((function(e){return void 0!==e.country})).filter((function(e,t,a){return a.findIndex((function(t){return t.country===e.country}))===t})),a(l);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"table"},t.length?r.a.createElement(j.a,{style:{color:"#fff",background:"#21252b",boxShadow:"0px 0px 27px -8px rgba(0,0,0,0.75)",borderRadius:"3px"},title:"Confirmed Cases by Country",columns:[{title:"Country",field:"country",cellStyle:{borderBottom:"1px solid #181a1f"}},{title:"Total Cases",field:"totalCases",cellStyle:{borderBottom:"1px solid #181a1f"}},{title:"New Cases",field:"newCases",cellStyle:{borderBottom:"1px solid #181a1f"}},{title:"New Deaths",field:"newDeaths",cellStyle:{borderBottom:"1px solid #181a1f"}},{title:"Critical Cases",field:"criticalCases",cellStyle:{borderBottom:"1px solid #181a1f"}},{title:"Total Deaths",field:"totalDeaths",cellStyle:{borderBottom:"1px solid #181a1f"}},{title:"Total Recovered",field:"totalRecovered",cellStyle:{borderBottom:"1px solid #181a1f"}}],data:t,options:{draggable:!1,pageSize:10,sorting:!1,headerStyle:{fontWeight:"bold",background:"#181a1f",color:"#fff",borderBottom:"none"},searchFieldStyle:{color:"#fff"}}}):r.a.createElement(y,null))}),D=(a(811),function(){return r.a.createElement("footer",null,"Made with \u2764\ufe0f in Israel")}),S=a(136),T=a.n(S),B=(a(814),function(e){var t=e.tableData,a=Object(n.useState)({}),l=Object(o.a)(a,2),c=l[0],i=l[1];Object(n.useEffect)((function(){s()}),[]);var s=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://ipapi.co/json/");case 2:t=e.sent,i({countryName:t.data.country_name,countryCode:t.data.country_code,emoji:t.data.emoji_flag});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=t.filter((function(e){return e.country&&c.countryName?e.country.trim().toLowerCase().indexOf(c.countryName.toLowerCase())>-1:[]})),a=e.length?r.a.createElement("div",{className:"current-country"},r.a.createElement("h2",null,c.countryName),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"Total Cases: "),r.a.createElement(T.a,{end:e[0].totalCases.trim().length?+e[0].totalCases.trim().replace(",",""):0,duration:2.75})),r.a.createElement("li",null,r.a.createElement("span",null,"New Cases: "),r.a.createElement(T.a,{end:e[0].newCases.trim().length?+e[0].newCases.trim().replace(",",""):0,duration:2.75})),r.a.createElement("li",null,r.a.createElement("span",null,"New Deaths: "),r.a.createElement(T.a,{end:e[0].newDeaths.trim().length?+e[0].newDeaths.trim().replace(",",""):0,duration:2.75})),r.a.createElement("li",null,r.a.createElement("span",null,"Total Deaths: "),r.a.createElement(T.a,{end:e[0].totalDeaths.trim().length?+e[0].totalDeaths.trim().replace(",",""):0,duration:2.75})),r.a.createElement("li",null,r.a.createElement("span",null,"Total Recovered: "),r.a.createElement(T.a,{end:e[0].totalRecovered.trim().length?+e[0].totalRecovered.trim().replace(",",""):0,duration:2.75})))):null;return r.a.createElement(r.a.Fragment,null,a)},m=t.length?u():null,d=m?!!m.props.children:null;return r.a.createElement("section",{hidden:!d,className:"country"},c&&t.length?u():r.a.createElement(y,null))}),R=a(488),F=a.n(R),L=(a(815),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://gnews.io/api/v3/search?q=coronavirus&token=4dcfb71a70cefd9b8a8a684fd6b88877",e.next=3,b.a.get("https://gnews.io/api/v3/search?q=coronavirus&token=4dcfb71a70cefd9b8a8a684fd6b88877");case 3:t=e.sent,l(t.data.articles);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"news"},a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"News"),a.map((function(e,t){return r.a.createElement("article",{key:t,onClick:function(){return t=e.url,void window.open(t,"_blank").focus();var t}},r.a.createElement("img",{src:e.image||g.a,alt:"news image"}),r.a.createElement("div",null,r.a.createElement("span",{className:"title"},e.title),r.a.createElement("p",{className:"desc"},e.description),r.a.createElement("span",{className:"time"},F()(e.publishedAt).fromNow())))}))):r.a.createElement(y,null))}),_=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"app"},r.a.createElement(i.BrowserRouter,null,r.a.createElement(s.g,null,r.a.createElement(m.a,{id:"UA-47906888-1"},r.a.createElement(C,null),r.a.createElement(s.d,{exact:!0,path:"/"},r.a.createElement(B,{tableData:a}),r.a.createElement(x,null),r.a.createElement(O,{tableData:a,setTableData:l})),r.a.createElement(s.d,{path:"/timeline"},r.a.createElement(N,null)),r.a.createElement(s.d,{path:"/news"},r.a.createElement(L,null)),r.a.createElement(D,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[497,1,2]]]);