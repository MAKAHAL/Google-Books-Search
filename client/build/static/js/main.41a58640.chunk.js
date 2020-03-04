(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,a,t){e.exports=t(61)},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(30),c=t.n(r),l=t(7),s=t(8),i=t(10),m=t(9),u=t(11),d=t(14),v=t(6),b=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},o.a.createElement("div",{className:"navbar-brand mr-auto gbooks-search"},o.a.createElement("h5",null,"Google Books Search")),o.a.createElement("div",{className:"navbar-nav text-white gbooks-link"},o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},o.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(d.b,{to:"/",className:"nav-link"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{to:"/saved",className:"nav-link"},"Saved"))))))};var h=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))},g=t(33),p=function(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",null,o.a.createElement("div",{className:"row m-3"},o.a.createElement("div",{className:"form-group col-md-10"},o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search a Book",id:"search"})),o.a.createElement("div",{className:"form-group col-md-2"},o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-dark mt-3 mb-5"},"Search"))))))))};var f=function(e){return o.a.createElement("div",{className:"row mb-5"},o.a.createElement("div",{className:"col-12"},e.books.map(function(a){return o.a.createElement("div",{className:"card mt-4",key:a._id?a._id:a.googleId},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},a.title),o.a.createElement("div",{className:"media"},o.a.createElement("img",{src:a.image,className:"align-self-center mr-3",alt:a.title}),o.a.createElement("div",{className:"media-body"},o.a.createElement("h6",{className:"mt-0"},a.authors),o.a.createElement("p",{className:"mb-0"},a.description))),o.a.createElement("a",{className:"btn btn-info mr-1 mt-2",href:a.link,target:"_blank",rel:"noopener noreferrer"},"View Book"),o.a.createElement("button",{className:e.buttonType,onClick:e.buttonAction,id:a._id?a._id:a.googleId},e.buttonText)))})))},k=t(15),E=t.n(k),N={getBooks:function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},deleteBook:function(e){return E.a.delete("/api/books/"+e).then(function(e){return e.data})},saveBook:function(e){return E.a.post("/api/books",e).then(function(e){return e.data})},savedBooks:function(){return E.a.get("/api/books").then(function(e){return e.data})}},w=function(e){var a=[];return e.map(function(e){var t={title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,googleId:e.id,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.canonicalVolumeLink};return a.push(t),a}),a},y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={search:"",results:[],error:""},t.saveBook=function(e){var a=t.state.results.find(function(a){return a.googleId===e.target.id}),n={title:a.title,authors:a.authors,description:a.description,googleId:a.googleId,image:a.image,link:a.link};N.saveBook(n),console.log(n)},t.handleInputChange=function(e){var a=e.target.name,n=e.target.value;t.setState(Object(g.a)({},a,n))},t.handleFormSubmit=function(e){e.preventDefault(),N.getBooks(t.state.search).then(function(e){var a=w(e.data.items);t.setState({results:a})}).catch(function(e){return console.log(e)})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(p,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),o.a.createElement(f,{books:this.state.results,buttonAction:this.saveBook,buttonType:"btn btn-success mt-2",buttonText:"Save Book"}))}}]),a}(o.a.Component),B=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.savedBooks().then(function(a){return e.setState({savedBooks:a})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Saved books"),o.a.createElement(f,{books:this.state.savedBooks}))}}]),a}(n.Component),j=(t(60),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(b,null),o.a.createElement(h,null,o.a.createElement(v.a,{exact:!0,path:"/",component:y}),o.a.createElement(v.a,{exact:!0,path:"/search",component:y}),o.a.createElement(v.a,{exact:!0,path:"/saved",component:B}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.41a58640.chunk.js.map