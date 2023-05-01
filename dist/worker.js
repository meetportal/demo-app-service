var Z = Object.defineProperty;
var Q = (s, e, t) => e in s ? Z(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t;
var n = (s, e, t) => (Q(s, typeof e != "symbol" ? e + "" : e, t), t), F = (s, e, t) => {
  if (!e.has(s))
    throw TypeError("Cannot " + t);
};
var o = (s, e, t) => (F(s, e, "read from private field"), t ? t.call(s) : e.get(s)), u = (s, e, t) => {
  if (e.has(s))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(s) : e.set(s, t);
}, C = (s, e, t, r) => (F(s, e, "write to private field"), r ? r.call(s, t) : e.set(s, t), t);
const X = self, k = !!X.WorkerGlobalScope, j = k || `${self.name ?? ""}`.startsWith("portal"), K = "connection", J = {
  // Methods
  DISCONNECT: K + ".disconnect",
  // Events
  ON_DISCONNECT: K + ".onDisconnect"
}, E = "element", ee = {
  // Methods
  ADD: E + ".add",
  FIND: E + ".find",
  EXISTS: E + ".exists",
  REMOVE: E + ".remove",
  REPLACE: E + ".replace",
  ADD_STYLES: E + ".addStyles",
  RESTORE_STYLES: E + ".restoreStyles",
  REMOVE_CLASSES: E + ".removeClasses",
  QUERY: E + ".query",
  // Events
  ON_TOGGLE: E + ".onToggle",
  ON_MUTATION: E + ".onMutation",
  ON_CLICK: E + ".onClick",
  ON_MOUSE_OVER: E + ".onMouseOver",
  ON_HOVER: E + ".onHover",
  ON_MOUSEDOWN: E + ".onMouseDown",
  ON_MOUSEUP: E + ".onMouseUp"
}, G = "cookie", U = "sessionStorage", L = "localStorage", w = "cookieStore", se = {
  // Methods
  GET_COOKIE: G + ".getItem",
  SET_COOKIE: G + ".setItem",
  GET_SESSION_STORAGE_ITEM: U + ".getItem",
  SET_SESSION_STORAGE_ITEM: U + ".setItem",
  GET_LOCAL_STORAGE_ITEM: L + ".getItem",
  SET_LOCAL_STORAGE_ITEM: L + ".setItem",
  GET_COOKIE_STORE_ITEM: w + ".get",
  SET_COOKIE_STORE_ITEM: w + ".set",
  // Events
  ON_COOKIE_CHANGE: G + ".onChange",
  ON_SESSION_STORAGE_CHANGE: U + ".onChange",
  ON_LOCAL_STORAGE_CHANGE: L + ".onChange",
  ON_COOKIE_STORE_CHANGE: w + ".onChange"
}, y = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(s) {
  var e = Math.random() * 16 | 0, t = s == "x" ? e : e & 3 | 8;
  return t.toString(16);
}), g = {
  // Methods
  MAXIMIZE: "maximize",
  MINIMIZE: "minimize",
  RESTORE: "restore",
  SET_BADGE: "setBadge",
  CLOSE: "closeApp",
  // Events
  ON_MAXIMIZE: "maximize",
  ON_MINIMIZE: "minimize",
  ON_RESTORE: "restore"
}, b = {
  // Methods
  PUSH: "pushNotification",
  CLEAR: "clearNotifications",
  // Events
  ON_CLICK: "notificationClick"
}, v = {
  // Methods
  // GET_RESOURCE: 'getResource',
  SET_RESOURCE: "setResource",
  CLEAR_RESOURCE: "clearResource",
  // Events
  ON_CHANGE: "resourceChange"
}, W = {
  GET_SESSION: "getSession",
  // Events
  ON_CHANGE: "sessionChange"
}, q = {
  // Methods
  SET_ITEM: "setStoreItem",
  GET_ITEM: "getStoreItem",
  REMOVE_ITEM: "removeStoreItem",
  ...se
}, T = {
  // Methods
  ECHO: "echo",
  REQUEST_PERMISSIONS: "requestPermissions",
  SEND_MESSAGE: "sendMessage",
  OPEN_APP: "openApp",
  // Events
  ON_MESSAGE: "message"
}, B = {
  // Methods
  // GET_USER: 'getUser',
  SET_USER: "setUser",
  // Events
  ON_CHANGE: "userChange"
}, $ = "0.4.1";
var M, h, R, I, m, A, N, x, p;
class Y {
  /**
   *
   * @param options Allows to set the request timeout in milliseconds. Default is 0 (no timeout).
   */
  constructor(e, t, r) {
    n(this, "id");
    u(this, M, null);
    u(this, h, []);
    u(this, R, /* @__PURE__ */ new Map());
    u(this, I, /* @__PURE__ */ new Map());
    u(this, m, 0);
    u(this, A, "*");
    u(this, N, void 0);
    n(this, "openApp", (e2, t2) => this.sendRequest(T.OPEN_APP, { appId: e2, message: t2 }));
    u(this, x, (e2, t2, r2 = o(this, m)) => new Promise((c, S) => {
      let a = null;
      r2 && (a = setTimeout(() => {
        S(new Error("timeout"));
      }, r2)), o(this, R).set(e2, { path: t2, timer: a, resolve: c, reject: S });
    }));
    u(this, p, async (e2) => {
      if (o(this, h).push(e2), clearTimeout(o(this, M)), o(this, h).length >= 10) {
        this.postMessage({ batch: o(this, h) }), o(this, h).length = 0;
        return;
      }
      C(this, M, setTimeout(() => {
        this.postMessage({ batch: o(this, h) }), o(this, h).length = 0;
      }, 1));
    });
    n(this, "postMessage", (e2) => {
      k ? o(this, N).postMessage(e2) : j && o(this, N).postMessage(e2, o(this, A));
    });
    n(this, "setContext", (e2) => {
      C(this, N, e2);
    });
    n(this, "sendRequest", async (e2, ...t2) => {
      const r2 = y();
      return o(this, p).call(this, { id: r2, path: e2, version: $, args: t2 }), o(this, x).call(this, r2, e2);
    });
    n(this, "subscribe", (e2, t2 = "*", r2) => {
      const i = y();
      return o(this, I).set(i, r2), o(this, p).call(this, { id: i, version: $, path: "on." + e2, args: [t2] }), () => {
        o(this, I).delete(i), setTimeout(() => {
          this.postMessage({ id: i, path: "off." + e2, args: [t2] });
        }, 0);
      };
    });
    n(this, "disconnect", () => {
      o(this, N) && this.postMessage({ id: this.id, path: J.DISCONNECT });
    });
    n(this, "echo", (e2) => this.sendRequest(T.ECHO, e2));
    n(this, "requestPermissions", (e2) => this.sendRequest(T.REQUEST_PERMISSIONS, e2));
    n(this, "getSession", async () => this.sendRequest(W.GET_SESSION));
    n(this, "setBadge", (e2) => this.sendRequest(g.SET_BADGE, e2));
    n(this, "closeApp", () => this.sendRequest(g.CLOSE));
    n(this, "pushNotification", (e2) => this.sendRequest(b.PUSH, e2));
    n(this, "clearNotifications", (e2) => this.sendRequest(b.CLEAR, e2));
    n(this, "setStoreItem", (e2, t2, r2) => this.sendRequest(q.SET_ITEM, e2, t2, r2));
    n(this, "getStoreItem", async (e2, t2, r2) => this.sendRequest(q.GET_ITEM, e2, r2).then((i) => i ?? t2 ? t2 : i));
    n(this, "removeStoreItem", (e2, t2) => this.sendRequest(q.REMOVE_ITEM, e2, t2));
    n(this, "onSessionChange", (e2) => this.subscribe(W.ON_CHANGE, "*", e2));
    n(this, "onMaximize", (e2) => this.subscribe(g.ON_MAXIMIZE, "*", e2));
    n(this, "onMinimize", (e2) => this.subscribe(g.MINIMIZE, "*", e2));
    n(this, "onRestore", (e2) => this.subscribe(g.RESTORE, "*", e2));
    n(this, "onResourceChange", (e2 = "*", t2) => this.subscribe(v.ON_CHANGE, e2, t2));
    n(this, "onMessage", (e2) => this.subscribe(b.ON_CLICK, "*", e2));
    n(this, "onUserChange", (e2) => () => this.subscribe(B.ON_CHANGE, "*", e2));
    r && C(this, m, r.requestTimeout || 0), this.id = y(), C(this, N, e), t.addEventListener("message", (i) => {
      const { id: c, data: S, error: a } = i.data, O = o(this, R).get(c);
      if (O)
        O.timer && clearTimeout(O.timer), o(this, R).delete(c), a ? O.reject(a) : O.resolve(S);
      else {
        const l = o(this, I).get(c);
        l && l(S);
      }
    });
  }
}
M = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
class re extends Y {
  constructor(t, r) {
    super(t, t, r);
    n(this, "query", async (t2) => {
      const r2 = typeof t2 == "string" ? t2 : t2.toString();
      return await this.sendRequest(ee.QUERY, r2);
    });
    n(this, "openApp", (t2, r2) => this.sendRequest(T.OPEN_APP, { appId: t2, message: r2 }));
    n(this, "setResource", (t2) => this.sendRequest(v.SET_RESOURCE, t2));
    n(this, "clearResource", (t2) => this.sendRequest(v.CLEAR_RESOURCE, t2));
    n(this, "setUser", (t2) => this.sendRequest(B.SET_USER, t2));
    n(this, "sendMessage", (t2) => this.sendRequest(T.SEND_MESSAGE, t2));
    n(this, "generatePathFromProxy", (t2) => {
      const r2 = [], i = {
        get(c, S) {
          return r2.push(S.toString()), new Proxy(() => {
          }, i);
        },
        apply(c, S, a) {
          const O = a.map((z) => JSON.stringify(z)).join(", "), l = r2[r2.length - 1];
          return l === "toString" ? r2.slice(0, -1).join(".") : (r2[r2.length - 1] = `${l}(${O})`, new Proxy(() => {
          }, i));
        }
        // Add a valueOf() method to return the string path when the proxy is coerced to a primitive value
        // valueOf() {
        //   return pathParts.join('.')
        // },
      };
      return new Proxy(() => {
      }, i);
    });
    n(this, "requestPermissions", (t2) => this.sendRequest(T.REQUEST_PERMISSIONS, t2));
  }
}
let D;
const _e = () => {
  if (!k)
    throw new Error("usePortalService must be called from a web worker");
  return D || (D = new re(self)), D;
};
async function main() {
  const portal = _e();
  const badge = {
    show: true,
    text: "2",
    color: "#f204d9"
  };
  portal.sendRequest(g.SET_BADGE, badge);
  portal.pushNotification({
    appId: "5",
    type: "app",
    title: "Please follow up with Nancy",
    text: "Nancy needs a follow up appointment.",
    data: {
      patientId: "6"
    },
    createdAt: /* @__PURE__ */ new Date()
  });
}
main();
