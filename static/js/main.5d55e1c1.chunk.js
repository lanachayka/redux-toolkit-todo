(this["webpackJsonpredux-toolkit"]=this["webpackJsonpredux-toolkit"]||[]).push([[0],{17:function(e,t,r){},24:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),c=r(7),a=r.n(c),s=(r(17),r(12)),u=r(2),d=(r(24),r(1));function i(e){var t=e.text,r=e.handleSubmit,n=e.handleInput;return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("button",{onClick:r,children:"Add Todo"})]})}var l,p=r(11),j=r(3),h=r(4),b=r.n(h),f=r(6),O=r(5),x=Object(O.b)("todos/fetchTodos",function(){var e=Object(f.a)(b.a.mark((function e(t,r){var n,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");case 4:if((o=e.sent).ok){e.next=7;break}throw new Error("Server Error!");case 7:return e.next=9,o.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,r){return e.apply(this,arguments)}}()),v=Object(O.b)("todos/deleteTodo",function(){var e=Object(f.a)(b.a.mark((function e(t,r){var n,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,o=r.dispatch,e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/todos/".concat(t),{method:"DELETE"});case 4:if(e.sent.ok){e.next=7;break}throw new Error("Can`t delete task. Server Error.");case 7:o(S({id:t})),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}()),m=Object(O.b)("todos/toogleStatus",function(){var e=Object(f.a)(b.a.mark((function e(t,r){var n,o,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,o=r.dispatch,c=r.getState,a=c().todos.todos.find((function(e){return e.id===t})),e.prev=2,e.next=5,fetch("https://jsonplaceholder.typicode.com/todos/".concat(t),{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({completed:!a.completed})});case 5:if(e.sent.ok){e.next=8;break}throw new Error("Can`t toogle status. Server Error.");case 8:o(E({id:t})),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",n(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,r){return e.apply(this,arguments)}}()),k=Object(O.b)("todos/addNewTodo",function(){var e=Object(f.a)(b.a.mark((function e(t,r){var n,o,c,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,o=r.dispatch,e.prev=1,c={userId:1,title:t,completed:!1},e.next=5,fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json; charset=UTF-8"}});case 5:if((a=e.sent).ok){e.next=8;break}throw new Error("Can`t add task. Server Error.");case 8:return e.next=11,a.json();case 11:s=e.sent,o(T(s)),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,r){return e.apply(this,arguments)}}()),y=function(e,t){e.status="rejected",e.error=t.payload},g=Object(O.c)({name:"todoSlice",initialState:{todos:[],status:null,error:null},reducers:{addTodo:function(e,t){e.todos.push(t.payload)},removeTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t.payload.id}))},toogleTodoComplete:function(e,t){var r=e.todos.find((function(e){return e.id===t.payload.id}));r.completed=!r.completed}},extraReducers:(l={},Object(j.a)(l,x.pending,(function(e){e.status="Loading",e.error=null})),Object(j.a)(l,x.fulfilled,(function(e,t){e.status="resolved",e.todos=t.payload})),Object(j.a)(l,x.rejected,y),Object(j.a)(l,v.rejected,y),Object(j.a)(l,m.rejected,y),Object(j.a)(l,k.rejected,y),l)}),w=g.actions,T=w.addTodo,S=w.removeTodo,E=w.toogleTodoComplete,C=g.reducer;function L(e){var t=e.id,r=e.completed,n=e.title,o=Object(u.b)();return Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"checkbox",checked:r,onChange:function(){return o(m(t))}}),Object(d.jsx)("span",{children:n}),Object(d.jsx)("span",{className:"delete",onClick:function(){return o(v(t))},children:"\xd7"})]})}function N(){var e=Object(u.c)((function(e){return e.todos.todos}));return Object(d.jsx)("ul",{children:e.map((function(e){return Object(d.jsx)(L,Object(p.a)({},e),e.id)}))})}var A=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),r=t[0],o=t[1],c=Object(u.c)((function(e){return e.todos})),a=c.status,l=c.error,p=Object(u.b)();return Object(n.useEffect)((function(){p(x())}),[p]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Todo List"}),Object(d.jsx)(i,{handleSubmit:function(){r.trim().length&&(p(k(r)),o(""))},handleInput:o,text:r}),"Loading"===a&&Object(d.jsx)("h2",{children:"Loading..."}),l&&Object(d.jsxs)("h2",{children:["An error occured ",l]}),Object(d.jsx)(N,{})]})},I=Object(O.a)({reducer:{todos:C}});a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(u.a,{store:I,children:Object(d.jsx)(A,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5d55e1c1.chunk.js.map