(this.webpackJsonpdrum=this.webpackJsonpdrum||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),d=n(2),i=n.n(d),o=n(4),c=n.n(o),s=(n(14),n(5)),r=n(6),u=n(1),l=n(8),m=n(7),y=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={current:"Hit it!"},a.clickHandle=a.clickHandle.bind(Object(u.a)(a)),a.keyHandle=a.keyHandle.bind(Object(u.a)(a)),a.touchHandle=a.touchHandle.bind(Object(u.a)(a)),a.removeClass=a.removeClass.bind(Object(u.a)(a)),a.playSound=a.playSound.bind(Object(u.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyHandle),document.addEventListener("transitionend",this.removeClass)}},{key:"componentWillUnount",value:function(){document.removeEventListener("keydown",this.keyHandle),document.removeEventListener("transitionend",this.removeClass)}},{key:"clickHandle",value:function(e){this.setState({current:e.target.getAttribute("name")}),e.target.classList.add("active");var t=e.target.childNodes[1];this.playSound(t)}},{key:"keyHandle",value:function(e){if(document.getElementById(e.key.toUpperCase())){document.getElementById(e.keyCode).classList.add("active"),this.setState({current:document.getElementById(e.key.toUpperCase()).getAttribute("name")});var t=document.getElementById(e.key.toUpperCase());this.playSound(t)}}},{key:"touchHandle",value:function(e){this.setState({current:e.target.getAttribute("name")}),e.target.classList.add("active");var t=e.target.childNodes[1];this.playSound(t)}},{key:"removeClass",value:function(e){e.target.classList.remove("active")}},{key:"playSound",value:function(e){e.currentTime=0,e.play()}},{key:"render",value:function(){var e=this,t=this.props.data.map((function(t){return Object(a.jsxs)("div",{id:t.keyCode,className:"drum-pad",name:t.name,onClick:e.clickHandle,onTouchEnd:e.touchHandle,children:[t.key,Object(a.jsx)("audio",{id:t.key,src:t.sound,className:"clip",name:t.name},t.key)]},t.key)}));return Object(a.jsx)("div",{id:"drum-machine",children:Object(a.jsxs)("div",{id:"pad-display-container",children:[Object(a.jsx)("div",{id:"display",children:Object(a.jsx)("h1",{children:this.state.current})}),t]})})}}]),n}(i.a.Component),k=[{key:"Q",keyCode:81,sound:n.p+"static/media/boom.15f4fbec.ogg",name:"boom"},{key:"W",keyCode:87,sound:n.p+"static/media/clap.1132764d.ogg",name:"clap"},{key:"E",keyCode:69,sound:n.p+"static/media/hihat.841b3716.ogg",name:"hihat"},{key:"A",keyCode:65,sound:n.p+"static/media/kick.10d2a31a.ogg",name:"kick"},{key:"S",keyCode:83,sound:n.p+"static/media/openhat.33ed152b.ogg",name:"openhat"},{key:"D",keyCode:68,sound:n.p+"static/media/ride.c630c955.ogg",name:"ride"},{key:"Z",keyCode:90,sound:n.p+"static/media/snare.6ca4e2c6.ogg",name:"snare"},{key:"X",keyCode:88,sound:n.p+"static/media/tink.d5ffaf9a.ogg",name:"tink"},{key:"C",keyCode:67,sound:n.p+"static/media/tom.927d95f0.ogg",name:"tom"}];c.a.render(Object(a.jsx)(y,{data:k}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.137aca0e.chunk.js.map