var F = Object.defineProperty;
var $ = (e, t, E) => t in e ? F(e, t, { enumerable: true, configurable: true, writable: true, value: E }) : e[t] = E;
var N = (e, t, E) => ($(e, typeof t != "symbol" ? t + "" : t, E), E), K = (e, t, E) => {
  if (!t.has(e))
    throw TypeError("Cannot " + E);
};
var S = (e, t, E) => (K(e, t, "read from private field"), E ? E.call(e) : t.get(e)), O = (e, t, E) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, E);
}, l = (e, t, E, s) => (K(e, t, "write to private field"), s ? s.call(e, E) : t.set(e, E), E);
function n() {
  return {
    COOKIE_NAMESPACE: "cookie",
    SESSION_STORAGE_NAMESPACE: "sessionStorage",
    LOCAL_STORAGE_NAMESPACE: "localStorage",
    COOKIE_STORE_NAMESPACE: "cookieStore",
    LOCATION_NAMESPACE: "location",
    NETWORK_NAMESPACE: "network",
    ELEMENT_NAMESPACE: "element",
    ELEMENTS_NAMESPACE: "elements",
    FORM_NAMESPACE: "form",
    INPUT_NAMESPACE: "input",
    CONNECTION_NAMESPACE: "connection",
    WINDOW_NAMESPACE: "window",
    ON: ".on",
    OFF: "off"
  };
}
const B = n().OFF;
function o(e) {
  return {
    WINDOW: {
      // Methods
      GET_URL: e.LOCATION_NAMESPACE + ".getUrl",
      // Events
      ON_URL_CHANGE: e.LOCATION_NAMESPACE + e.ON + "UrlChange"
    },
    NETWORK: {
      // Methods
      FETCH: e.NETWORK_NAMESPACE + ".fetch",
      // Events
      ON_FETCH: e.NETWORK_NAMESPACE + e.ON + "Fetch",
      ON_HTTP: e.NETWORK_NAMESPACE + e.ON + "HTTP"
    },
    STORE: {
      // Methods
      GET_COOKIE: e.COOKIE_NAMESPACE + ".getItem",
      SET_COOKIE: e.COOKIE_NAMESPACE + ".setItem",
      GET_SESSION_STORAGE_ITEM: e.SESSION_STORAGE_NAMESPACE + ".getItem",
      SET_SESSION_STORAGE_ITEM: e.SESSION_STORAGE_NAMESPACE + ".setItem",
      GET_LOCAL_STORAGE_ITEM: e.LOCAL_STORAGE_NAMESPACE + ".getItem",
      SET_LOCAL_STORAGE_ITEM: e.LOCAL_STORAGE_NAMESPACE + ".setItem",
      GET_COOKIE_STORE_ITEM: e.COOKIE_STORE_NAMESPACE + ".get",
      SET_COOKIE_STORE_ITEM: e.COOKIE_STORE_NAMESPACE + ".set",
      // Events
      ON_COOKIE_CHANGE: e.COOKIE_NAMESPACE + e.ON + "Change",
      ON_SESSION_STORAGE_CHANGE: e.SESSION_STORAGE_NAMESPACE + e.ON + "Change",
      ON_LOCAL_STORAGE_CHANGE: e.LOCAL_STORAGE_NAMESPACE + e.ON + "Change",
      ON_COOKIE_STORE_CHANGE: e.COOKIE_STORE_NAMESPACE + e.ON + "Change"
    },
    ELEMENT: {
      // Methods
      ADD: e.ELEMENT_NAMESPACE + ".add",
      FIND: e.ELEMENT_NAMESPACE + ".find",
      EXISTS: e.ELEMENT_NAMESPACE + ".exists",
      REMOVE: e.ELEMENT_NAMESPACE + ".remove",
      REPLACE: e.ELEMENT_NAMESPACE + ".replace",
      ADD_STYLES: e.ELEMENT_NAMESPACE + ".addStyles",
      RESTORE_STYLES: e.ELEMENT_NAMESPACE + ".restoreStyles",
      REMOVE_CLASSES: e.ELEMENT_NAMESPACE + ".removeClasses",
      // Events
      ON_TOGGLE: e.ELEMENT_NAMESPACE + e.ON + "Toggle",
      ON_MUTATION: e.ELEMENT_NAMESPACE + e.ON + "Mutation",
      ON_CLICK: e.ELEMENT_NAMESPACE + e.ON + "Click",
      ON_HOVER: e.ELEMENT_NAMESPACE + e.ON + "Hover",
      ON_MOUSEDOWN: e.ELEMENT_NAMESPACE + e.ON + "MouseDown",
      ON_MOUSEUP: e.ELEMENT_NAMESPACE + e.ON + "MouseUp"
    },
    ELEMENTS: {
      ADD: e.ELEMENTS_NAMESPACE + ".add",
      FIND: e.ELEMENTS_NAMESPACE + ".find",
      REMOVE: e.ELEMENTS_NAMESPACE + ".remove",
      REPLACE: e.ELEMENTS_NAMESPACE + ".replace",
      ADD_STYLES: e.ELEMENTS_NAMESPACE + ".addStyles",
      RESTORE_STYLES: e.ELEMENTS_NAMESPACE + ".restoreStyles",
      REMOVE_CLASSES: e.ELEMENTS_NAMESPACE + ".removeClasses"
    },
    FORM: {
      // Events
      ON_SUBMIT: e.FORM_NAMESPACE + e.ON + "Submit"
    },
    INPUT: {
      // Events
      ON_CHANGE: e.INPUT_NAMESPACE + e.ON + "Change",
      ON_FOCUS: e.INPUT_NAMESPACE + e.ON + "Focus",
      ON_BLUR: e.INPUT_NAMESPACE + e.ON + "Blur",
      ON_INPUT: e.INPUT_NAMESPACE + e.ON + "Input"
    },
    CONNECTION: {
      // Methods
      DISCONNECT: e.CONNECTION_NAMESPACE + ".disconnect",
      // Events
      ON_DISCONNECT: e.CONNECTION_NAMESPACE + e.ON + "Disconnect"
    }
  };
}
const _ = n(), Y = o(_).WINDOW;
o(_).NETWORK;
o(_).STORE;
o(_).ELEMENT;
o(_).ELEMENTS;
o(_).FORM;
o(_).INPUT;
const W = o(_).CONNECTION;
const T = () => ({
  SYSTEM: {
    // Methods
    ECHO: "echo",
    REQUEST_PERMISSIONS: "requestPermissions"
  },
  SESSION: {
    // Methods
    SET_APP_USER: "setAppUser",
    GET_SESSION: "getSession",
    // Events
    ON_CHANGE: "sessionChange"
  },
  APP: {
    // Methods
    MAXIMIZE: "maximize",
    MINIMIZE: "minimize",
    RESTORE: "restore",
    SHOW_BADGE: "showBadge",
    HIDE_BADGE: "hideBadge",
    CLOSE: "closeApp",
    // Events
    ON_MAXIMIZE: "maximize",
    ON_MINIMIZE: "minimize",
    ON_RESTORE: "restore"
  },
  ELEMENT: {
    // Methods - used by service since worker doesn't have access to DOM
    QUERY: "QUERY"
    // TODO: move to beam-client?
  },
  RESOURCE: {
    // Methods
    GET_RESOURCE: "getResource",
    SET_RESOURCE: "setResource",
    // Events
    ON_CHANGE: "resourceChange"
  },
  NOTIFICATION: {
    // Methods
    PUSH: "pushNotification",
    CLEAR: "clearNotifications",
    // Events
    ON_CLICK: "notificationClick",
    ON_CLEAR: "notificationClear"
  },
  STORE: {
    // Methods
    SET_ITEM: "setStoreItem",
    GET_ITEM: "getStoreItem",
    REMOVE_ITEM: "removeStoreItem"
  }
}), p = T().SYSTEM, x = T().SESSION, u = T().APP, v = T().ELEMENT, f = T().RESOURCE, h = T().NOTIFICATION, m = T().STORE, ne = self, D = !!ne.WorkerGlobalScope, Oe = D || `${self.name ?? ""}`.startsWith("portal"), H = "0.3.2";
var g, i, I, R, L, G, C, U, d;
class q {
  /**
   *
   * @param options Allows to set the request timeout in milliseconds. Default is 0 (no timeout).
   */
  constructor(t, E, s) {
    N(this, "id");
    O(this, g, null);
    O(this, i, []);
    O(this, I, /* @__PURE__ */ new Map());
    O(this, R, /* @__PURE__ */ new Map());
    O(this, L, 0);
    O(this, G, "*");
    O(this, C, void 0);
    N(this, "uuid", () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t2) {
      var E2 = Math.random() * 16 | 0, s2 = t2 == "x" ? E2 : E2 & 3 | 8;
      return s2.toString(16);
    }));
    O(this, U, (t2, E2, s2 = S(this, L)) => new Promise((M, A) => {
      let c = null;
      s2 && (c = setTimeout(() => {
        A(new Error("timeout"));
      }, s2)), S(this, I).set(t2, { path: E2, timer: c, resolve: M, reject: A });
    }));
    O(this, d, async (t2) => {
      if (S(this, i).push(t2), clearTimeout(S(this, g)), S(this, i).length >= 10) {
        this.postMessage({ batch: S(this, i) }), S(this, i).length = 0;
        return;
      }
      l(this, g, setTimeout(() => {
        this.postMessage({ batch: S(this, i) }), S(this, i).length = 0;
      }, 1));
    });
    N(this, "postMessage", (t2) => {
      D ? S(this, C).postMessage(t2) : Oe && S(this, C).postMessage(t2, S(this, G));
    });
    N(this, "setContext", (t2) => {
      l(this, C, t2);
    });
    N(this, "sendRequest", async (t2, ...E2) => {
      const s2 = this.uuid();
      return S(this, d).call(this, { id: s2, path: t2, version: H, args: E2 }), S(this, U).call(this, s2, t2);
    });
    N(this, "subscribe", (t2, E2 = "*", s2) => {
      const r = this.uuid();
      return S(this, R).set(r, s2), S(this, d).call(this, { id: r, version: H, path: "on." + t2, args: [E2] }), () => {
        S(this, R).delete(r), setTimeout(() => {
          this.postMessage({ id: r, path: B + "." + t2, args: [E2] });
        }, 0);
      };
    });
    N(this, "disconnect", () => {
      S(this, C) && this.postMessage({ id: this.id, path: W.DISCONNECT });
    });
    N(this, "echo", (t2) => this.sendRequest(p.ECHO, t2));
    N(this, "requestPermissions", (t2) => this.sendRequest(p.REQUEST_PERMISSIONS, t2));
    N(this, "getSession", async () => this.sendRequest(x.GET_SESSION));
    N(this, "getResource", (t2) => this.sendRequest(f.GET_RESOURCE, t2));
    N(this, "showBadge", (t2) => this.sendRequest(u.SHOW_BADGE, t2));
    N(this, "hideBadge", () => this.sendRequest(u.HIDE_BADGE, { count: 0 }));
    N(this, "closeApp", () => this.sendRequest(u.CLOSE));
    N(this, "pushNotification", (t2) => this.sendRequest(h.PUSH, t2));
    N(this, "clearNotifications", (t2) => this.sendRequest(h.CLEAR, t2));
    N(this, "setStoreItem", (t2, E2, s2) => this.sendRequest(m.SET_ITEM, t2, E2, s2));
    N(this, "getStoreItem", async (t2, E2, s2) => this.sendRequest(m.GET_ITEM, t2, s2).then((r) => r ?? E2 ? E2 : r));
    N(this, "removeStoreItem", (t2, E2) => this.sendRequest(m.REMOVE_ITEM, t2, E2));
    N(this, "onSessionChange", (t2) => this.subscribe(x.ON_CHANGE, "*", t2));
    N(this, "onMaximize", (t2) => this.subscribe(u.ON_MAXIMIZE, "*", t2));
    N(this, "onMinimize", (t2) => this.subscribe(u.MINIMIZE, "*", t2));
    N(this, "onRestore", (t2) => this.subscribe(u.RESTORE, "*", t2));
    N(this, "onResourceChange", (t2 = "*", E2) => this.subscribe(f.ON_CHANGE, t2, E2));
    N(this, "onNotificationClick", (t2 = "*", E2) => this.subscribe(h.ON_CLICK, t2, E2));
    N(this, "onNotificationClear", (t2 = "*", E2) => this.subscribe(h.ON_CLEAR, t2, E2));
    s && l(this, L, s.requestTimeout || 0), this.id = this.uuid(), l(this, C, t), E.addEventListener("message", (r) => {
      const { id: M, data: A, error: c } = r.data, a = S(this, I).get(M);
      if (a)
        a.timer && clearTimeout(a.timer), S(this, I).delete(M), c ? a.reject(c) : a.resolve(A);
      else {
        const P = S(this, R).get(M);
        P && P(A);
      }
    });
  }
}
g = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
class ie extends q {
  constructor(E, s) {
    super(E, E, s);
    N(this, "query", async (E2) => {
      const s2 = typeof E2 == "string" ? E2 : E2.toString();
      return await this.sendRequest(v.QUERY, s2);
    });
    N(this, "$", (E2) => {
      const s2 = new Proxy(() => {
      }, {});
      return this.generatePathFromProxy(s2).$(E2);
    });
    N(this, "setResource", (E2) => this.sendRequest(f.SET_RESOURCE, E2));
    N(this, "setAppUser", (E2) => this.sendRequest(x.SET_APP_USER, E2));
    N(this, "generatePathFromProxy", (E2) => {
      const s2 = [], r = {
        get(M, A) {
          return s2.push(A.toString()), new Proxy(() => {
          }, r);
        },
        apply(M, A, c) {
          const a = c.map((y) => JSON.stringify(y)).join(", "), P = s2[s2.length - 1];
          return P === "toString" ? s2.slice(0, -1).join(".") : (s2[s2.length - 1] = `${P}(${a})`, new Proxy(() => {
          }, r));
        }
        // Add a valueOf() method to return the string path when the proxy is coerced to a primitive value
        // valueOf() {
        //   return pathParts.join('.')
        // },
      };
      return new Proxy(() => {
      }, r);
    });
    N(this, "requestPermissions", (E2) => this.sendRequest(p.REQUEST_PERMISSIONS, E2));
  }
}
let w;
const Ce = () => {
  if (!D)
    throw new Error("usePortalService must be called from a web worker");
  return w || (w = new ie(self)), w;
}, ce = Y;
async function main() {
  try {
    const portal = Ce();
    const response = await portal.echo("Hello, world!");
    console.log(response);
    portal.subscribe(ce.ON_URL_CHANGE, "*", (url) => {
      if (!url)
        return;
      console.log("URL CHANGED:", url);
    });
  } catch (error) {
    console.error(error);
  }
}
main();
