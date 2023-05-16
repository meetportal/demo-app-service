(function(){"use strict";var K=Object.defineProperty,j=(n,t,o)=>t in n?K(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,s=(n,t,o)=>(j(n,typeof t!="symbol"?t+"":t,o),o),b=(n,t,o)=>{if(!t.has(n))throw TypeError("Cannot "+o)},E=(n,t,o)=>(b(n,t,"read from private field"),o?o.call(n):t.get(n)),c=(n,t,o)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,o)},I=(n,t,o,r)=>(b(n,t,"write to private field"),r?r.call(n,o):t.set(n,o),o);const B=self,M=!!B.WorkerGlobalScope,Q=M||`${self.name??""}`.startsWith("portal"),U={MAXIMIZE:"maximize",MINIMIZE:"minimize",RESTORE:"restore",SET_BADGE:"setBadge",CLOSE:"closeApp",ON_MAXIMIZE:"maximize",ON_MINIMIZE:"minimize",ON_RESTORE:"restore"},L="connection",V={DISCONNECT:L+".disconnect",ON_DISCONNECT:L+".onDisconnect"},a="element",Y={ADD:a+".add",FIND:a+".find",EXISTS:a+".exists",REMOVE:a+".remove",REPLACE:a+".replace",ADD_STYLES:a+".addStyles",RESTORE_STYLES:a+".restoreStyles",REMOVE_CLASSES:a+".removeClasses",QUERY:a+".query",ON_TOGGLE:a+".onToggle",ON_MUTATION:a+".onMutation",ON_CLICK:a+".onClick",ON_MOUSE_OVER:a+".onMouseOver",ON_HOVER:a+".onHover",ON_MOUSEDOWN:a+".onMouseDown",ON_MOUSEUP:a+".onMouseUp"},p="cookie",m="sessionStorage",A="localStorage",x="cookieStore",Z={GET_COOKIE:p+".getItem",SET_COOKIE:p+".setItem",GET_SESSION_STORAGE_ITEM:m+".getItem",SET_SESSION_STORAGE_ITEM:m+".setItem",GET_LOCAL_STORAGE_ITEM:A+".getItem",SET_LOCAL_STORAGE_ITEM:A+".setItem",GET_COOKIE_STORE_ITEM:x+".get",SET_COOKIE_STORE_ITEM:x+".set",ON_COOKIE_CHANGE:p+".onChange",ON_SESSION_STORAGE_CHANGE:m+".onChange",ON_LOCAL_STORAGE_CHANGE:A+".onChange",ON_COOKIE_STORE_CHANGE:x+".onChange"},G=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var t=Math.random()*16|0,o=n=="x"?t:t&3|8;return o.toString(16)}),f={PUSH:"pushNotification",CLEAR:"clearNotifications",ON_CLICK:"notificationClick"},w={SET_RESOURCE:"setResource",CLEAR_RESOURCE:"clearResource",ON_CHANGE:"resourceChange"},k={GET_SESSION:"getSession",ON_CHANGE:"sessionChange"},P={SET_ITEM:"setStoreItem",GET_ITEM:"getStoreItem",REMOVE_ITEM:"removeStoreItem",...Z},l={ECHO:"echo",REQUEST_PERMISSIONS:"requestPermissions",SEND_MESSAGE:"sendMessage",OPEN_APP:"openApp",ON_MESSAGE:"message"},D={SET_USER:"setUser",ON_CHANGE:"userChange"},H="0.4.6";var d,_,T,N,g,q,u,v,C;class z{constructor(t,o,r){s(this,"id"),c(this,d,null),c(this,_,[]),c(this,T,new Map),c(this,N,new Map),c(this,g,0),c(this,q,"*"),c(this,u,void 0),s(this,"openApp",(e,i)=>this.sendRequest(l.OPEN_APP,{appId:e,message:i})),c(this,v,(e,i,h=E(this,g))=>new Promise((S,O)=>{let R=null;h&&(R=setTimeout(()=>{O(new Error("timeout"))},h)),E(this,T).set(e,{path:i,timer:R,resolve:S,reject:O})})),c(this,C,async e=>{if(E(this,_).push(e),clearTimeout(E(this,d)),E(this,_).length>=10){this.postMessage({batch:E(this,_)}),E(this,_).length=0;return}I(this,d,setTimeout(()=>{this.postMessage({batch:E(this,_)}),E(this,_).length=0},1))}),s(this,"postMessage",e=>{M?E(this,u).postMessage(e):Q&&E(this,u).postMessage(e,E(this,q))}),s(this,"setContext",e=>{I(this,u,e)}),s(this,"sendRequest",async(e,...i)=>{const h=G();return E(this,C).call(this,{id:h,path:e,version:H,args:i}),E(this,v).call(this,h,e)}),s(this,"subscribe",(e,i="*",h)=>{const S=G();return E(this,N).set(S,h),E(this,C).call(this,{id:S,version:H,path:"on."+e,args:[i]}),()=>{E(this,N).delete(S),setTimeout(()=>{this.postMessage({id:S,path:"off."+e,args:[i]})},0)}}),s(this,"disconnect",()=>{E(this,u)&&this.postMessage({id:this.id,path:V.DISCONNECT})}),s(this,"echo",e=>this.sendRequest(l.ECHO,e)),s(this,"requestPermissions",e=>this.sendRequest(l.REQUEST_PERMISSIONS,e)),s(this,"getSession",async()=>this.sendRequest(k.GET_SESSION)),s(this,"setBadge",e=>this.sendRequest(U.SET_BADGE,e)),s(this,"pushNotification",e=>this.sendRequest(f.PUSH,e)),s(this,"clearNotifications",e=>this.sendRequest(f.CLEAR,e)),s(this,"setStoreItem",(e,i,h)=>this.sendRequest(P.SET_ITEM,e,i,h)),s(this,"getStoreItem",async(e,i,h)=>this.sendRequest(P.GET_ITEM,e,h).then(S=>S??i?i:S)),s(this,"removeStoreItem",(e,i)=>this.sendRequest(P.REMOVE_ITEM,e,i)),s(this,"onSessionChange",e=>this.subscribe(k.ON_CHANGE,"*",e)),s(this,"onResourceChange",(e="*",i)=>this.subscribe(w.ON_CHANGE,e,i)),s(this,"onMessage",e=>this.subscribe(f.ON_CLICK,"*",e)),s(this,"onUserChange",e=>()=>this.subscribe(D.ON_CHANGE,"*",e)),r&&I(this,g,r.requestTimeout||0),this.id=G(),I(this,u,t),o.addEventListener("message",e=>{const{id:i,data:h,error:S}=e.data,O=E(this,T).get(i);if(O)O.timer&&clearTimeout(O.timer),E(this,T).delete(i),S?O.reject(S):O.resolve(h);else{const R=E(this,N).get(i);R&&R(h)}})}}d=new WeakMap,_=new WeakMap,T=new WeakMap,N=new WeakMap,g=new WeakMap,q=new WeakMap,u=new WeakMap,v=new WeakMap,C=new WeakMap;class X extends z{constructor(t,o){super(t,t,o),s(this,"query",async r=>{const e=typeof r=="string"?r:r.toString();return await this.sendRequest(Y.QUERY,e)}),s(this,"openApp",(r,e)=>this.sendRequest(l.OPEN_APP,{appId:r,message:e})),s(this,"setResource",r=>this.sendRequest(w.SET_RESOURCE,r)),s(this,"clearResource",r=>this.sendRequest(w.CLEAR_RESOURCE,r)),s(this,"setUser",r=>this.sendRequest(D.SET_USER,r)),s(this,"sendMessage",r=>this.sendRequest(l.SEND_MESSAGE,r)),s(this,"generatePathFromProxy",r=>{const e=[],i={get(h,S){return e.push(S.toString()),new Proxy(()=>{},i)},apply(h,S,O){const R=O.map(J=>JSON.stringify(J)).join(", "),W=e[e.length-1];return W==="toString"?e.slice(0,-1).join("."):(e[e.length-1]=`${W}(${R})`,new Proxy(()=>{},i))}};return new Proxy(()=>{},i)}),s(this,"requestPermissions",r=>this.sendRequest(l.REQUEST_PERMISSIONS,r))}}let y;const $=(()=>{if(!M)throw new Error("usePortalService must be called from a web worker");return y||(y=new X(self)),y})(),F={show:!0,text:"2",color:"#f204d9"};$.sendRequest(U.SET_BADGE,F)})();
