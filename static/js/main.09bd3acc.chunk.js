(this.webpackJsonppokeindex=this.webpackJsonppokeindex||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(6),i=t.n(c),o=(t(13),t(1)),s=t(2),p=t(4),l=t(3),m=t(7),u=(t(14),function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e,n="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return r.a.createElement("div",{className:"PokeCard"},r.a.createElement("h1",{className:"PokeCard-title"},this.props.name),r.a.createElement("div",{className:"PokeCard-img"},r.a.createElement("img",{src:n,alt:this.props.name})),r.a.createElement("div",{className:"PokeCard-data"},"Type: ",this.props.type),r.a.createElement("div",{className:"PokeCard-data"},"Exp: ",this.props.exp))}}]),t}(a.Component)),d=(t(15),function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e;return e=this.props.isWinner?r.a.createElement("h1",{className:"Pokedex-winner"},"Winning Hand!"):r.a.createElement("h1",{className:"Pokedex-loser"},"Losing Hand!"),r.a.createElement("div",{className:"Pokedex"},r.a.createElement("h1",null,"Pok\xe9dex Game! (v1)"),r.a.createElement("h4",null,"Total Experience: ",this.props.exp),e,r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map((function(e){return r.a.createElement(u,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))))}}]),t}(a.Component)),h=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){for(var e=[],n=Object(m.a)(this.props.pokemon);e.length<n.length;){var t=Math.floor(Math.random()*n.length),a=n.splice(t,1)[0];e.push(a)}var c=e.reduce((function(e,n){return e+n.base_experience}),0),i=n.reduce((function(e,n){return e+n.base_experience}),0);return r.a.createElement("div",null,r.a.createElement(d,{pokemon:e,exp:c,isWinner:c>i}),r.a.createElement(d,{pokemon:n,exp:i,isWinner:i>c}))}}]),t}(a.Component);h.defaultProps={pokemon:[{id:4,name:"Charmander",type:"Fire",base_experience:62},{id:1,name:"Bulbasaur",type:"Seed",base_experience:64},{id:95,name:"Onix",type:" Rock",base_experience:77},{id:12,name:"Butterfree",type:"Flying",base_experience:178},{id:25,name:"Pikachu",type:"Electric",base_experience:112},{id:39,name:"Jigglypuff",type:"Normal",base_experience:95},{id:54,name:"Psyduck",type:"Water",base_experience:64},{id:143,name:"Snorlax",type:"Normal",base_experience:189}]};var b=h,k=(t(16),function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.09bd3acc.chunk.js.map