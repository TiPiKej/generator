(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},16:function(e,t,n){},23:function(e,t,n){e.exports=n(41)},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"lettersArray",function(){return b}),n.d(a,"specialArray",function(){return v}),n.d(a,"numbersArray",function(){return w});var r=n(0),o=n.n(r),c=n(18),s=n.n(c),i=n(19),l=n(3),u=n(4),h=n(7),p=n(5),g=n(8),d=(n(16),n(10),n(2)),m=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={password:e.password,lang:"pl"},n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){e.lang!==this.props.lang&&this.setState({lang:this.props.lang}),e.password!==this.props.password&&this.setState({password:this.props.password})}},{key:"render",value:function(){return o.a.createElement("div",{className:"divsStyles"},o.a.createElement("p",{className:"title"},"pl"===this.state.lang?"Has\u0142o":"Password",": "),o.a.createElement("textarea",{className:"inputStyles",type:"text",value:this.state.password,readOnly:"true"}),o.a.createElement("button",{className:"buttonClipboard",onClick:this.props.copy},"pl"===this.state.lang?"Kopiuj do schowka!":"Copy to clipboard!"))}}]),t}(r.Component),f=Object(d.b)(function(e){return{lang:e.lang}})(m),b=(n(37),["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),v=["!",'"',"'","#","$","%","&","(",")","*","+","-",",",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}"],w=[0,1,2,3,4,5,6,7,8,9],y=function(e){function t(e){var n;switch(Object(l.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={checked:e.checkedArray,lang:"pl",blocked:{}},n.props.whichOne){case"special":n.whichOne={pl:"Znaki specjalne: ",en:"Special characters: "};break;case"numbers":n.whichOne={pl:"Cyfry: ",en:"Numbers: "};break;case"letters":n.whichOne={pl:"Litery: ",en:"Letters: "};break;default:n.whichOne={pl:"Ile liczb: ",en:"How long: "}}return n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){e.checkedArray!==this.props.checkedArray&&this.setState({checked:this.props.checkedArray}),e.lang!==this.props.lang&&this.setState({lang:this.props.lang}),e.blocked!==this.props.blocked&&this.setState({blocked:this.props.blocked})}},{key:"render",value:function(){var e=this;return void 0===this.props.whichOne?o.a.createElement("div",{className:"divsStyles"},o.a.createElement("p",{className:"title"},this.whichOne[this.state.lang]),o.a.createElement("div",{className:"inputWrapper"},o.a.createElement("button",{className:"changingValue",onClick:function(t){return e.props.changingCounts(t,"down")}},"\u2190"),o.a.createElement("input",{className:"inputStyles left_input right_input",type:"text",value:this.props.counts,onChange:this.props.changingCounts}),o.a.createElement("button",{className:"changingValue",onClick:function(t){return e.props.changingCounts(t,"up")}},"\u2192"))):o.a.createElement("span",{className:"wraplabel",onClick:function(t){return e.props.changingCounts(t,e.props.whichOne)}},o.a.createElement("span",{onClick:function(){return!1},className:"infoStyles",title:a[this.props.whichOne+"Array"].join(", ")},this.whichOne[this.state.lang]),o.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:function(t){return e.props.changingCounts(t,e.props.whichOne)}}))}}]),t}(r.Component),k=Object(d.b)(function(e){return{lang:e.lang,blocked:e.blocked}})(y),C=function(e){var t=e.lang,n=e.letters,a=e.numbers,r=e.special,o=e.counts,c=[];n&&(Array.from(b).forEach(function(e){return c.push(e)}),Array.from(b).forEach(function(e){return c.push(e.toUpperCase())})),a&&Array.from(w).forEach(function(e){return c.push(e)}),r&&Array.from(v).forEach(function(e){return c.push(e)});for(var s="",i=1;i<=o;i++){var l=Math.floor(Math.random()*c.length),u=void 0;if(u="pl"===t?"Brak danych ":"No data ",void 0===c[l]){s+=u;break}s+=c[l]}return s},O=function(e,t,n){var a=n.counts,r=n.limit;switch(t){case"up":r.max>a&&a++,r.max===a&&(e.className+=" disable"),e.previousSibling.previousSibling.className="changingValue";break;case"down":r.min<a&&a--,r.min===a&&(e.className+=" disable"),e.nextSibling.nextSibling.className="changingValue";break;default:switch(e.type){case"text":var o=e.value;o>=r.min&&o<=r.max?a=o:o<r.min?a=r.min:o>r.max&&(a=r.max),e.previousSibling.className="changingValue",e.nextSibling.className="changingValue",Number(a)===Number(r.min)?e.previousSibling.className+=" disable":Number(a)===Number(r.max)&&(e.nextSibling.className+=" disable")}}return a},N=(n(39),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).changingCounts=function(t,n){var a=t.currentTarget,r=e.state.counts,o=e.state.limit;"wraplabel"===a.className&&e.setState(Object(i.a)({},n,!e.state[n]));var c=O(a,n,{counts:r,limit:o});e.setState({counts:c})},e.password=function(){var t=C({lang:e.state.lang,letters:e.state.letters,numbers:e.state.numbers,special:e.state.special,counts:e.state.counts});e.setState({password:t})},e.clipboard=function(t){var n,a=t.currentTarget,r=a.parentNode.children,o=Array.from(r).filter(function(e){return"textarea"===e.type});Array.from(o).forEach(function(e){n=e.value,e.select(),document.execCommand("copy")});var c=document.createElement("div");c.className="tooltip","pl"===e.state.lang?c.innerHTML="Skopiono do chowka: ".concat(n):c.innerHTML="Copied to clipboard: ".concat(n),setTimeout(function(){return c.style.opacity=1},10),setTimeout(function(){c.style.opacity=0,setTimeout(function(){return c.remove()},500)},3e3),a.appendChild(c)},e.changeLang=function(t){t.currentTarget;var n=e.state.lang;n="pl"===n?"en":"pl",e.props.changeLang(n)},e.blockCharacter=function(e,t,n,a){var r=e.currentTarget;console.log(r,t,n,a)},e.state={lang:"pl",limit:{min:1,max:36},counts:8,password:"",special:!0,numbers:!0,letters:!0},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.lang!==this.props.lang&&this.setState({lang:this.props.lang})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"divsStyles"},o.a.createElement(k,{counts:this.state.counts,changingCounts:this.changingCounts}),o.a.createElement(k,{whichOne:"special",checkedArray:this.state.special,changingCounts:this.changingCounts}),o.a.createElement(k,{whichOne:"numbers",checkedArray:this.state.numbers,changingCounts:this.changingCounts}),o.a.createElement(k,{whichOne:"letters",checkedArray:this.state.letters,changingCounts:this.changingCounts}),o.a.createElement("button",{className:"passButton",onClick:this.password},"pl"===this.state.lang?"Generuj has\u0142o":"Random password")),o.a.createElement(f,{password:this.state.password,copy:function(t){return function(e,t){var n,a=e.currentTarget,r=a.parentNode.children,o=Array.from(r).filter(function(e){return"textarea"===e.type});Array.from(o).forEach(function(e){n=e.value,e.select(),document.execCommand("copy")});var c=document.createElement("div");c.className="tooltip",c.innerHTML="pl"===t?"Skopiono do schowka: ".concat(n):"Copied to clipboard: ".concat(n),setTimeout(function(){return c.style.opacity=1},10),setTimeout(function(){c.style.opacity=0,setTimeout(function(){return c.remove()},500)},3e3),a.appendChild(c)}(t,e.state.lang)}}),o.a.createElement("button",{style:{width:"100px",lineHeight:"1.5em",height:"1.5em",position:"absolute",top:"5px",right:"5px",cursor:"pointer"},onClick:this.changeLang},"pl"===this.state.lang?"English":"Polski"))}}]),t}(r.Component)),E={changeLang:function(e){return{type:"CHANGE_LANG",lang:e}}},A=Object(d.b)(function(e){return{lang:e.lang}},E)(N),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var S=n(6),T=Object(S.b)({lang:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pl",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LANG":return t.lang;default:return e}},blocked:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{character:"",nrFromArray:null,whichOne:null},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.character;t.nrFromArray,t.whichOne;switch(n){case"BLOCK_CHARACTER":var r,o=e.character.indexOf(a),c=o>=0;return console.log(o),c?console.log(e.character.split(" "),o):r=(null===e.character?"":e.character)+" "+a,{character:r};default:return e}}}),L=Object(S.c)(T);s.a.render(o.a.createElement(d.a,{store:L},o.a.createElement(A,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/generator",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/generator","/service-worker.js");j?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):x(e)})}}()}},[[23,2,1]]]);
//# sourceMappingURL=main.681f1403.chunk.js.map