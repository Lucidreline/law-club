(this.webpackJsonpprelawsociety=this.webpackJsonpprelawsociety||[]).push([[0],{25:function(e,a,t){e.exports=t(49)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),o=t.n(i),l=(t(30),t(31),t(3)),c=(t(32),t(7)),s=t(8),m=t(10),d=t(9),u=(t(33),t(11)),p=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).openCloseHambMenu=function(){e.setState({open:!e.state.open,linkFade:!e.state.linkFade},(function(){var a=document.body;e.state.open?(a.style.overflowY="hidden",a.style.position="fixed",a.style.width="100%"):(a.style.overflowY="scroll",a.style.position="relative")}))},e.handleLinkClicked=function(){var e=document.body;e.style.overflowY="scroll",e.style.position="relative"},e.state={open:!1,linkFade:!1},e}return Object(s.a)(t,[{key:"render",value:function(){var e=window.location.href;return r.a.createElement("nav",{id:"nav-bar"},r.a.createElement("i",{onClick:this.openCloseHambMenu,className:"fas fa-bars hamburger"}),r.a.createElement(u.b,{to:"/home"},r.a.createElement("img",{onClick:this.handleLinkClicked,className:"logo-img",src:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698419/PreLawSociety/White_Logo_tboydj.png",alt:""})),r.a.createElement("ul",{className:"nav-links ".concat(this.state.open?" open":"")},r.a.createElement("li",{onClick:this.handleLinkClicked,className:"nav-link ".concat(this.state.linkFade?" fade":""," ").concat(e.includes("/home")?"active":"")},r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement("li",{onClick:this.handleLinkClicked,className:"nav-link ".concat(this.state.linkFade?" fade":""," ").concat(e.includes("/events")?"active":"")},r.a.createElement(u.b,{to:"/events"},"Events")),r.a.createElement("li",{onClick:this.handleLinkClicked,className:"nav-link ".concat(this.state.linkFade?" fade":""," ").concat(e.includes("/members")?"active":"")},r.a.createElement(u.b,{to:"/members"},"Members")),r.a.createElement("li",{onClick:this.handleLinkClicked,className:"nav-link ".concat(this.state.linkFade?" fade":""," ").concat(e.includes("/about")?"active":"")},r.a.createElement(u.b,{to:"/about"},"About Us")),r.a.createElement("li",{onClick:this.handleLinkClicked,className:"nav-link ".concat(this.state.linkFade?" fade":""," ").concat(e.includes("/contact")?"active":"")},r.a.createElement(u.b,{to:"/contact"},"Contact Us"))))}}]),t}(r.a.Component),b=function(){return r.a.createElement("section",{id:"hero"},r.a.createElement(p,null))},g=(t(39),function(e){var a=e.title;return r.a.createElement("section",{className:"section-title"},r.a.createElement("h2",null,r.a.createElement("span",null,a)))}),h=(t(40),t(41),function(e){var a,t,n=e.data;return"board member"===n.type?(a=n.firstName,t="/members"):"event"===n.type?(a=n.name,t="/events"):(a="",t="/"),r.a.createElement("div",{className:"custom-card",style:{backgroundImage:"url(".concat(n.image,")")}},r.a.createElement("div",{className:"dark-hover"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h4",{className:"name"},a),r.a.createElement(u.b,{classname:"link",to:"".concat(t,"/").concat(n.id)},r.a.createElement("p",{className:"link-text"},"Click For More Info")))))}),y=function(e){var a=e.cards;return r.a.createElement("div",{className:"card-list"},a.map((function(e,a){return r.a.createElement("div",{"data-aos":"fade-up"},r.a.createElement(h,{key:a,data:e}))})))},f=[{id:"0",type:"event",name:"Latinos Changing America",image:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698418/PreLawSociety/Events/Events_Latinos_Changing_America_o5vapd.jpg"},{id:"1",type:"event",name:"Immigration Speaking Event",image:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698416/PreLawSociety/Events/Events_Immigration_Speaking_Event_yn8ewu.jpg"}],v=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={events:f},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"events"},r.a.createElement(g,{title:"Events"}),r.a.createElement(y,{cards:this.state.events}))}}]),t}(n.Component),E=[{id:"0",type:"board member",firstName:"Adriana",lastName:"Jimenez",position:"President",bio:"I am beyond excited to be part of Pre Law. I am excited to announce that I'm going to be the Co-President of Pre-Law for 2020-2021. I am a Junior and will graduate in Fall 2021. I am majoring in Political Science.",funFact:"I enjoy trying out creative skills such as bullet journalling, video recording and editing, and designing websites such as this one! \ud83c\udfa8",image:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698414/PreLawSociety/Board%20Members/Board_Members_Adriana_a6jtfs.jpg"},{id:"1",type:"board member",firstName:"Edwin",lastName:"Oyarce",position:"President",bio:"I'm you CSUDH Pre Law Society Co-President for 2020-2021. I am a Senior and will be graduating with the class of 2021 with a B.A. in Philosophy.",funFact:"I was the section head of the amphibious section of a US Marine Corps Force Reconnaissance unit. Oorah!",image:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698414/PreLawSociety/Board%20Members/Board_Members_Edwin_zoa8yg.jpg"},{id:"2",type:"board member",firstName:"Yulissa",lastName:"Jimenez",position:"Vice President",bio:"I am Vice President! I'm double majoring in Psychology and Criminal Justice. I\u2019m going go be a sophomore and will graduate with the class of 2023.",funFact:"I've ran 3 marathons! and I\u2019m still tired from them \ud83d\ude02",image:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698419/PreLawSociety/Board%20Members/Board_Members_Yulissa_lc7kmi.png"},{id:"3",type:"board member",firstName:"Josue",lastName:"",position:"Treasurer",bio:"I am the Treasurer for the Pre Law Society. I am currently a senior/2nd year transfer student. My major is psychology.",funFact:"Prior to my return to higher learning, I was litigation paralegal for two years, which is one of the reasons I am interested in pursuing a law degree.",image:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698415/PreLawSociety/Board%20Members/Board_Members_Josue_kzhg0k.jpg"},{id:"4",type:"board member",firstName:"Cynthia",lastName:"Villa",position:"Secretary",bio:"I am the new Secretary. I am a Senior and Sociology major. I will be graduating this Fall.",funFact:"I write poetry and recently two of my poems were published by Alegria Magazine.",image:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698416/PreLawSociety/Board%20Members/Board_Members_Cynthia_aturxz.jpg"},{id:"5",type:"board member",firstName:"Yazmine",lastName:"",position:"Secretary",bio:"My position is Co-Secretary \ud83d\ude0a I am currently a super senior at DH, I finally graduate Spring 2021! I major in Sociology, and minor in criminal justice.",funFact:"I am an identical twin! We're two minutes apart \ud83d\udc6f\u200d\u2640",image:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698415/PreLawSociety/Board%20Members/Board_Members_Yazmine_shucnb.png"},{id:"6",type:"board member",firstName:"Darlene",lastName:"Garcia",position:"Social Media Representative",bio:"I am the social media representative for the PLS for 2020-2021. I am a Junior and will graduate in Fall 2021. I am a Business major",funFact:"I love exploring in different countries.",image:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698418/PreLawSociety/Board%20Members/Board_Members_Darlene_gyff6p.png"},{id:"7",type:"board member",firstName:"Kimberly",lastName:"Villacorta",position:"Recruitment Director",bio:"I'm a Political Science major. I transferred to DH from Long Beach City College about a year ago. I am your new Recruitment Director. Spring semester should be my last at Dominguez and I\u2019m super excited to start my journey towards law school.",funFact:"I'm a foster parent \ud83d\ude0a",image:"https://res.cloudinary.com/dglxjd018/image/upload/v1597700223/PreLawSociety/Board%20Members/Kimbery_uue3c0.jpg"}],w=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={boardMembers:E},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"meet-the-board"},r.a.createElement(g,{title:"Meet the Board"}),r.a.createElement(y,{cards:this.state.boardMembers}))}}]),t}(n.Component),k=t(15),j=(t(42),t(43),function(e){var a=e.imageUrl,t=e.index;return r.a.createElement("div",{className:"gallery-image",id:"image-".concat(t),style:{backgroundImage:"url(".concat(a,")")}})}),N=function(e){var a=e.images;return r.a.createElement("div",{className:"gallery-list","data-aos":"flip-up"},r.a.createElement(k.a,null,a.map((function(e,a){return r.a.createElement(k.a.Item,{key:a,className:"carousel-item"},r.a.createElement(j,{index:a,imageUrl:e.url}),r.a.createElement(k.a.Caption,null,r.a.createElement("p",{className:"custom-carousel-caption"},e.caption)))}))))},_=(t(44),[{type:"gallery image",url:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698419/PreLawSociety/Gallery/Gallery_Working_on_Bulletin_Board_upbbvw.jpg",caption:"Working on our bulletin board on campus!"},{type:"gallery image",url:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698418/PreLawSociety/Gallery/Gallery_Group_Photo_In_Front_Of_Bulletin_qc358n.jpg",caption:"Group photo in front of our bulletin board!"},{type:"gallery image",url:"https://res.cloudinary.com/dglxjd018/image/upload/v1597698418/PreLawSociety/Gallery/Gallery_Old_Group_Photo_yfe0cs.jpg",caption:"General body meeting group selfie!"}]),I=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={images:_},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"gallery"},r.a.createElement(g,{title:"Gallery"}),r.a.createElement(N,{images:this.state.images}))}}]),t}(n.Component),C=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:"main-container"},r.a.createElement(v,null),r.a.createElement(w,null),r.a.createElement(I,null)))},S=t(23),M=(t(45),t(46),function(e){var a,t=e.boardMember,n=e.index,i=r.a.createElement("div",{className:"photo-side"},r.a.createElement("div",{className:"position-container header-containers"},r.a.createElement("h3",null,t.position)),r.a.createElement("div",{className:"photo",style:{backgroundImage:"url(".concat(t.image,")")}})),o=r.a.createElement("div",{className:"bio-side"},r.a.createElement("div",{className:"name-container header-containers"},r.a.createElement("h3",{className:"name"},t.firstName," ",t.lastName)),r.a.createElement("div",{className:"bio-container "},r.a.createElement("p",{className:"bio"},t.bio," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"fun-fact"},"  Fun Fact:"),"  ",t.funFact)));return a=n%2===0?r.a.createElement("div",{className:"left board-member-card-container"},i,o):r.a.createElement("div",{className:"right board-member-card-container"},o,i),r.a.createElement("div",{className:"board-member-card",id:"id-".concat(t.id)},a)}),P=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).handleScrollJump=function(){var e=window.location.href.split("/");e.length>4&&Object(S.a)("#id-".concat(e[4]),{offset:-120,duration:2e3})},e.state={boardMembers:E},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.handleScrollJump()}},{key:"render",value:function(){return r.a.createElement("div",{className:"board-members-page"},r.a.createElement(p,null),r.a.createElement("div",{className:"main-container"},r.a.createElement(g,{title:"Meet The Board"}),this.state.boardMembers.map((function(e,a){return r.a.createElement("div",{"data-aos":"fade-up"},r.a.createElement(M,{boardMember:e,index:a,key:a}))}))))}}]),t}(r.a.Component),x=function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("h3",null,"\ud83d\udea7 Under Construction!\ud83d\udc77\u200d\u2642 \ud83d\udea7"))},L=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("h3",null,"\ud83d\udea7 Under Construction!\ud83d\udc77\u200d\u2642 \ud83d\udea7"))}}]),t}(r.a.Component),O=function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("h3",null,"\ud83d\udea7 Under Construction!\ud83d\udc77\u200d\u2642 \ud83d\udea7"))};var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement(l.a,{to:"/home"})),r.a.createElement(l.b,{exact:!0,path:"/home",component:C}),r.a.createElement(l.b,{path:"/members",component:P}),r.a.createElement(l.b,{path:"/events",component:x}),r.a.createElement(l.b,{exact:!0,path:"/contact",component:L}),r.a.createElement(l.b,{exact:!0,path:"/about",component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(47);var F=t(24),G=t.n(F);t(48);G.a.init(),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.f9043687.chunk.js.map