function bv(r, a) {
  for (var s = 0; s < a.length; s++) {
    const l = a[s];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const d in l)
        if (d !== "default" && !(d in r)) {
          const f = Object.getOwnPropertyDescriptor(l, d);
          f &&
            Object.defineProperty(
              r,
              d,
              f.get ? f : { enumerable: !0, get: () => l[d] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) l(d);
  new MutationObserver((d) => {
    for (const f of d)
      if (f.type === "childList")
        for (const m of f.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && l(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(d) {
    const f = {};
    return (
      d.integrity && (f.integrity = d.integrity),
      d.referrerPolicy && (f.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function l(d) {
    if (d.ep) return;
    d.ep = !0;
    const f = s(d);
    fetch(d.href, f);
  }
})();
function Em(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var Kl = { exports: {} },
  ca = {},
  Yl = { exports: {} },
  _e = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ef;
function Sv() {
  if (Ef) return _e;
  Ef = 1;
  var r = Symbol.for("react.element"),
    a = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    m = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    g = Symbol.iterator;
  function C(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (g && E[g]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    P = Object.assign,
    b = {};
  function N(E, z, J) {
    (this.props = E),
      (this.context = z),
      (this.refs = b),
      (this.updater = J || S);
  }
  (N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (E, z) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, E, z, "setState");
    }),
    (N.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function O() {}
  O.prototype = N.prototype;
  function I(E, z, J) {
    (this.props = E),
      (this.context = z),
      (this.refs = b),
      (this.updater = J || S);
  }
  var j = (I.prototype = new O());
  (j.constructor = I), P(j, N.prototype), (j.isPureReactComponent = !0);
  var D = Array.isArray,
    F = Object.prototype.hasOwnProperty,
    Z = { current: null },
    B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(E, z, J) {
    var ee,
      he = {},
      ne = null,
      U = null;
    if (z != null)
      for (ee in (z.ref !== void 0 && (U = z.ref),
      z.key !== void 0 && (ne = "" + z.key),
      z))
        F.call(z, ee) && !B.hasOwnProperty(ee) && (he[ee] = z[ee]);
    var le = arguments.length - 2;
    if (le === 1) he.children = J;
    else if (1 < le) {
      for (var ye = Array(le), ke = 0; ke < le; ke++)
        ye[ke] = arguments[ke + 2];
      he.children = ye;
    }
    if (E && E.defaultProps)
      for (ee in ((le = E.defaultProps), le))
        he[ee] === void 0 && (he[ee] = le[ee]);
    return {
      $$typeof: r,
      type: E,
      key: ne,
      ref: U,
      props: he,
      _owner: Z.current,
    };
  }
  function ie(E, z) {
    return {
      $$typeof: r,
      type: E.type,
      key: z,
      ref: E.ref,
      props: E.props,
      _owner: E._owner,
    };
  }
  function de(E) {
    return typeof E == "object" && E !== null && E.$$typeof === r;
  }
  function xe(E) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (J) {
        return z[J];
      })
    );
  }
  var we = /\/+/g;
  function me(E, z) {
    return typeof E == "object" && E !== null && E.key != null
      ? xe("" + E.key)
      : z.toString(36);
  }
  function pe(E, z, J, ee, he) {
    var ne = typeof E;
    (ne === "undefined" || ne === "boolean") && (E = null);
    var U = !1;
    if (E === null) U = !0;
    else
      switch (ne) {
        case "string":
        case "number":
          U = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case r:
            case a:
              U = !0;
          }
      }
    if (U)
      return (
        (U = E),
        (he = he(U)),
        (E = ee === "" ? "." + me(U, 0) : ee),
        D(he)
          ? ((J = ""),
            E != null && (J = E.replace(we, "$&/") + "/"),
            pe(he, z, J, "", function (ke) {
              return ke;
            }))
          : he != null &&
            (de(he) &&
              (he = ie(
                he,
                J +
                  (!he.key || (U && U.key === he.key)
                    ? ""
                    : ("" + he.key).replace(we, "$&/") + "/") +
                  E
              )),
            z.push(he)),
        1
      );
    if (((U = 0), (ee = ee === "" ? "." : ee + ":"), D(E)))
      for (var le = 0; le < E.length; le++) {
        ne = E[le];
        var ye = ee + me(ne, le);
        U += pe(ne, z, J, ye, he);
      }
    else if (((ye = C(E)), typeof ye == "function"))
      for (E = ye.call(E), le = 0; !(ne = E.next()).done; )
        (ne = ne.value), (ye = ee + me(ne, le++)), (U += pe(ne, z, J, ye, he));
    else if (ne === "object")
      throw (
        ((z = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return U;
  }
  function fe(E, z, J) {
    if (E == null) return E;
    var ee = [],
      he = 0;
    return (
      pe(E, ee, "", "", function (ne) {
        return z.call(J, ne, he++);
      }),
      ee
    );
  }
  function W(E) {
    if (E._status === -1) {
      var z = E._result;
      (z = z()),
        z.then(
          function (J) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = J));
          },
          function (J) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = J));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = z));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var q = { current: null },
    R = { transition: null },
    Y = {
      ReactCurrentDispatcher: q,
      ReactCurrentBatchConfig: R,
      ReactCurrentOwner: Z,
    };
  function G() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (_e.Children = {
      map: fe,
      forEach: function (E, z, J) {
        fe(
          E,
          function () {
            z.apply(this, arguments);
          },
          J
        );
      },
      count: function (E) {
        var z = 0;
        return (
          fe(E, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (E) {
        return (
          fe(E, function (z) {
            return z;
          }) || []
        );
      },
      only: function (E) {
        if (!de(E))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return E;
      },
    }),
    (_e.Component = N),
    (_e.Fragment = s),
    (_e.Profiler = d),
    (_e.PureComponent = I),
    (_e.StrictMode = l),
    (_e.Suspense = v),
    (_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (_e.act = G),
    (_e.cloneElement = function (E, z, J) {
      if (E == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            E +
            "."
        );
      var ee = P({}, E.props),
        he = E.key,
        ne = E.ref,
        U = E._owner;
      if (z != null) {
        if (
          (z.ref !== void 0 && ((ne = z.ref), (U = Z.current)),
          z.key !== void 0 && (he = "" + z.key),
          E.type && E.type.defaultProps)
        )
          var le = E.type.defaultProps;
        for (ye in z)
          F.call(z, ye) &&
            !B.hasOwnProperty(ye) &&
            (ee[ye] = z[ye] === void 0 && le !== void 0 ? le[ye] : z[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) ee.children = J;
      else if (1 < ye) {
        le = Array(ye);
        for (var ke = 0; ke < ye; ke++) le[ke] = arguments[ke + 2];
        ee.children = le;
      }
      return {
        $$typeof: r,
        type: E.type,
        key: he,
        ref: ne,
        props: ee,
        _owner: U,
      };
    }),
    (_e.createContext = function (E) {
      return (
        (E = {
          $$typeof: m,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (E.Provider = { $$typeof: f, _context: E }),
        (E.Consumer = E)
      );
    }),
    (_e.createElement = H),
    (_e.createFactory = function (E) {
      var z = H.bind(null, E);
      return (z.type = E), z;
    }),
    (_e.createRef = function () {
      return { current: null };
    }),
    (_e.forwardRef = function (E) {
      return { $$typeof: p, render: E };
    }),
    (_e.isValidElement = de),
    (_e.lazy = function (E) {
      return { $$typeof: w, _payload: { _status: -1, _result: E }, _init: W };
    }),
    (_e.memo = function (E, z) {
      return { $$typeof: x, type: E, compare: z === void 0 ? null : z };
    }),
    (_e.startTransition = function (E) {
      var z = R.transition;
      R.transition = {};
      try {
        E();
      } finally {
        R.transition = z;
      }
    }),
    (_e.unstable_act = G),
    (_e.useCallback = function (E, z) {
      return q.current.useCallback(E, z);
    }),
    (_e.useContext = function (E) {
      return q.current.useContext(E);
    }),
    (_e.useDebugValue = function () {}),
    (_e.useDeferredValue = function (E) {
      return q.current.useDeferredValue(E);
    }),
    (_e.useEffect = function (E, z) {
      return q.current.useEffect(E, z);
    }),
    (_e.useId = function () {
      return q.current.useId();
    }),
    (_e.useImperativeHandle = function (E, z, J) {
      return q.current.useImperativeHandle(E, z, J);
    }),
    (_e.useInsertionEffect = function (E, z) {
      return q.current.useInsertionEffect(E, z);
    }),
    (_e.useLayoutEffect = function (E, z) {
      return q.current.useLayoutEffect(E, z);
    }),
    (_e.useMemo = function (E, z) {
      return q.current.useMemo(E, z);
    }),
    (_e.useReducer = function (E, z, J) {
      return q.current.useReducer(E, z, J);
    }),
    (_e.useRef = function (E) {
      return q.current.useRef(E);
    }),
    (_e.useState = function (E) {
      return q.current.useState(E);
    }),
    (_e.useSyncExternalStore = function (E, z, J) {
      return q.current.useSyncExternalStore(E, z, J);
    }),
    (_e.useTransition = function () {
      return q.current.useTransition();
    }),
    (_e.version = "18.3.1"),
    _e
  );
}
var jf;
function Ic() {
  return jf || ((jf = 1), (Yl.exports = Sv())), Yl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tf;
function Nv() {
  if (Tf) return ca;
  Tf = 1;
  var r = Ic(),
    a = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(p, v, x) {
    var w,
      g = {},
      C = null,
      S = null;
    x !== void 0 && (C = "" + x),
      v.key !== void 0 && (C = "" + v.key),
      v.ref !== void 0 && (S = v.ref);
    for (w in v) l.call(v, w) && !f.hasOwnProperty(w) && (g[w] = v[w]);
    if (p && p.defaultProps)
      for (w in ((v = p.defaultProps), v)) g[w] === void 0 && (g[w] = v[w]);
    return {
      $$typeof: a,
      type: p,
      key: C,
      ref: S,
      props: g,
      _owner: d.current,
    };
  }
  return (ca.Fragment = s), (ca.jsx = m), (ca.jsxs = m), ca;
}
var Pf;
function _v() {
  return Pf || ((Pf = 1), (Kl.exports = Nv())), Kl.exports;
}
var c = _v(),
  As = {},
  Gl = { exports: {} },
  St = {},
  Xl = { exports: {} },
  Ql = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rf;
function Cv() {
  return (
    Rf ||
      ((Rf = 1),
      (function (r) {
        function a(R, Y) {
          var G = R.length;
          R.push(Y);
          e: for (; 0 < G; ) {
            var E = (G - 1) >>> 1,
              z = R[E];
            if (0 < d(z, Y)) (R[E] = Y), (R[G] = z), (G = E);
            else break e;
          }
        }
        function s(R) {
          return R.length === 0 ? null : R[0];
        }
        function l(R) {
          if (R.length === 0) return null;
          var Y = R[0],
            G = R.pop();
          if (G !== Y) {
            R[0] = G;
            e: for (var E = 0, z = R.length, J = z >>> 1; E < J; ) {
              var ee = 2 * (E + 1) - 1,
                he = R[ee],
                ne = ee + 1,
                U = R[ne];
              if (0 > d(he, G))
                ne < z && 0 > d(U, he)
                  ? ((R[E] = U), (R[ne] = G), (E = ne))
                  : ((R[E] = he), (R[ee] = G), (E = ee));
              else if (ne < z && 0 > d(U, G)) (R[E] = U), (R[ne] = G), (E = ne);
              else break e;
            }
          }
          return Y;
        }
        function d(R, Y) {
          var G = R.sortIndex - Y.sortIndex;
          return G !== 0 ? G : R.id - Y.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var f = performance;
          r.unstable_now = function () {
            return f.now();
          };
        } else {
          var m = Date,
            p = m.now();
          r.unstable_now = function () {
            return m.now() - p;
          };
        }
        var v = [],
          x = [],
          w = 1,
          g = null,
          C = 3,
          S = !1,
          P = !1,
          b = !1,
          N = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          I = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function j(R) {
          for (var Y = s(x); Y !== null; ) {
            if (Y.callback === null) l(x);
            else if (Y.startTime <= R)
              l(x), (Y.sortIndex = Y.expirationTime), a(v, Y);
            else break;
            Y = s(x);
          }
        }
        function D(R) {
          if (((b = !1), j(R), !P))
            if (s(v) !== null) (P = !0), W(F);
            else {
              var Y = s(x);
              Y !== null && q(D, Y.startTime - R);
            }
        }
        function F(R, Y) {
          (P = !1), b && ((b = !1), O(H), (H = -1)), (S = !0);
          var G = C;
          try {
            for (
              j(Y), g = s(v);
              g !== null && (!(g.expirationTime > Y) || (R && !xe()));

            ) {
              var E = g.callback;
              if (typeof E == "function") {
                (g.callback = null), (C = g.priorityLevel);
                var z = E(g.expirationTime <= Y);
                (Y = r.unstable_now()),
                  typeof z == "function"
                    ? (g.callback = z)
                    : g === s(v) && l(v),
                  j(Y);
              } else l(v);
              g = s(v);
            }
            if (g !== null) var J = !0;
            else {
              var ee = s(x);
              ee !== null && q(D, ee.startTime - Y), (J = !1);
            }
            return J;
          } finally {
            (g = null), (C = G), (S = !1);
          }
        }
        var Z = !1,
          B = null,
          H = -1,
          ie = 5,
          de = -1;
        function xe() {
          return !(r.unstable_now() - de < ie);
        }
        function we() {
          if (B !== null) {
            var R = r.unstable_now();
            de = R;
            var Y = !0;
            try {
              Y = B(!0, R);
            } finally {
              Y ? me() : ((Z = !1), (B = null));
            }
          } else Z = !1;
        }
        var me;
        if (typeof I == "function")
          me = function () {
            I(we);
          };
        else if (typeof MessageChannel < "u") {
          var pe = new MessageChannel(),
            fe = pe.port2;
          (pe.port1.onmessage = we),
            (me = function () {
              fe.postMessage(null);
            });
        } else
          me = function () {
            N(we, 0);
          };
        function W(R) {
          (B = R), Z || ((Z = !0), me());
        }
        function q(R, Y) {
          H = N(function () {
            R(r.unstable_now());
          }, Y);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            P || S || ((P = !0), W(F));
          }),
          (r.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ie = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return s(v);
          }),
          (r.unstable_next = function (R) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = C;
            }
            var G = C;
            C = Y;
            try {
              return R();
            } finally {
              C = G;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (R, Y) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var G = C;
            C = R;
            try {
              return Y();
            } finally {
              C = G;
            }
          }),
          (r.unstable_scheduleCallback = function (R, Y, G) {
            var E = r.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? E + G : E))
                : (G = E),
              R)
            ) {
              case 1:
                var z = -1;
                break;
              case 2:
                z = 250;
                break;
              case 5:
                z = 1073741823;
                break;
              case 4:
                z = 1e4;
                break;
              default:
                z = 5e3;
            }
            return (
              (z = G + z),
              (R = {
                id: w++,
                callback: Y,
                priorityLevel: R,
                startTime: G,
                expirationTime: z,
                sortIndex: -1,
              }),
              G > E
                ? ((R.sortIndex = G),
                  a(x, R),
                  s(v) === null &&
                    R === s(x) &&
                    (b ? (O(H), (H = -1)) : (b = !0), q(D, G - E)))
                : ((R.sortIndex = z), a(v, R), P || S || ((P = !0), W(F))),
              R
            );
          }),
          (r.unstable_shouldYield = xe),
          (r.unstable_wrapCallback = function (R) {
            var Y = C;
            return function () {
              var G = C;
              C = Y;
              try {
                return R.apply(this, arguments);
              } finally {
                C = G;
              }
            };
          });
      })(Ql)),
    Ql
  );
}
var Mf;
function Ev() {
  return Mf || ((Mf = 1), (Xl.exports = Cv())), Xl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var If;
function jv() {
  if (If) return St;
  If = 1;
  var r = Ic(),
    a = Ev();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    d = {};
  function f(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    v = Object.prototype.hasOwnProperty,
    x =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    g = {};
  function C(e) {
    return v.call(g, e)
      ? !0
      : v.call(w, e)
      ? !1
      : x.test(e)
      ? (g[e] = !0)
      : ((w[e] = !0), !1);
  }
  function S(e, t, n, o) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function P(e, t, n, o) {
    if (t === null || typeof t > "u" || S(e, t, n, o)) return !0;
    if (o) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function b(e, t, n, o, i, u, h) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = h);
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      N[e] = new b(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      N[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      N[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      N[e] = new b(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        N[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      N[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      N[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      N[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      N[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var O = /[\-:]([a-z])/g;
  function I(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(O, I);
      N[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(O, I);
        N[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(O, I);
      N[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      N[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (N.xlinkHref = new b(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      N[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function j(e, t, n, o) {
    var i = N.hasOwnProperty(t) ? N[t] : null;
    (i !== null
      ? i.type !== 0
      : o ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (P(t, n, i, o) && (n = null),
      o || i === null
        ? C(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (o = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
  }
  var D = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    F = Symbol.for("react.element"),
    Z = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    ie = Symbol.for("react.profiler"),
    de = Symbol.for("react.provider"),
    xe = Symbol.for("react.context"),
    we = Symbol.for("react.forward_ref"),
    me = Symbol.for("react.suspense"),
    pe = Symbol.for("react.suspense_list"),
    fe = Symbol.for("react.memo"),
    W = Symbol.for("react.lazy"),
    q = Symbol.for("react.offscreen"),
    R = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (R && e[R]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var G = Object.assign,
    E;
  function z(e) {
    if (E === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        E = (t && t[1]) || "";
      }
    return (
      `
` +
      E +
      e
    );
  }
  var J = !1;
  function ee(e, t) {
    if (!e || J) return "";
    J = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (L) {
            var o = L;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (L) {
            o = L;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (L) {
          o = L;
        }
        e();
      }
    } catch (L) {
      if (L && o && typeof L.stack == "string") {
        for (
          var i = L.stack.split(`
`),
            u = o.stack.split(`
`),
            h = i.length - 1,
            k = u.length - 1;
          1 <= h && 0 <= k && i[h] !== u[k];

        )
          k--;
        for (; 1 <= h && 0 <= k; h--, k--)
          if (i[h] !== u[k]) {
            if (h !== 1 || k !== 1)
              do
                if ((h--, k--, 0 > k || i[h] !== u[k])) {
                  var _ =
                    `
` + i[h].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      _.includes("<anonymous>") &&
                      (_ = _.replace("<anonymous>", e.displayName)),
                    _
                  );
                }
              while (1 <= h && 0 <= k);
            break;
          }
      }
    } finally {
      (J = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? z(e) : "";
  }
  function he(e) {
    switch (e.tag) {
      case 5:
        return z(e.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ee(e.type, !1)), e;
      case 11:
        return (e = ee(e.type.render, !1)), e;
      case 1:
        return (e = ee(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ne(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case B:
        return "Fragment";
      case Z:
        return "Portal";
      case ie:
        return "Profiler";
      case H:
        return "StrictMode";
      case me:
        return "Suspense";
      case pe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case xe:
          return (e.displayName || "Context") + ".Consumer";
        case de:
          return (e._context.displayName || "Context") + ".Provider";
        case we:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case fe:
          return (
            (t = e.displayName || null), t !== null ? t : ne(e.type) || "Memo"
          );
        case W:
          (t = e._payload), (e = e._init);
          try {
            return ne(e(t));
          } catch {}
      }
    return null;
  }
  function U(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ne(t);
      case 8:
        return t === H ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function le(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ye(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ke(e) {
    var t = ye(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (h) {
            (o = "" + h), u.call(this, h);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (h) {
            o = "" + h;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ce(e) {
    e._valueTracker || (e._valueTracker = ke(e));
  }
  function Te(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      o = "";
    return (
      e && (o = ye(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ye(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ht(e, t) {
    var n = t.checked;
    return G({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function On(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    (n = le(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function yn(e, t) {
    (t = t.checked), t != null && j(e, "checked", t, !1);
  }
  function Tt(e, t) {
    yn(e, t);
    var n = le(t.value),
      o = t.type;
    if (n != null)
      o === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Pt(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Pt(e, t.type, le(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function No(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (
        !(
          (o !== "submit" && o !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Pt(e, t, n) {
    (t !== "number" || Ye(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var hr = Array.isArray;
  function Ln(e, t, n, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && o && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + le(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), o && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function at(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return G({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function xn(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (hr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: le(n) };
  }
  function Na(e, t) {
    var n = le(t.value),
      o = le(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      o != null && (e.defaultValue = "" + o);
  }
  function _a(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function gr(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function _o(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? gr(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var vr,
    Dr = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, o, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, o, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          vr = vr || document.createElement("div"),
            vr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = vr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Ht(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    zn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dn).forEach(function (e) {
    zn.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]);
    });
  });
  function Ca(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Ea(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var o = n.indexOf("--") === 0,
          i = Ca(n, t[n], o);
        n === "float" && (n = "cssFloat"), o ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var ja = G(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function zr(e, t) {
    if (t) {
      if (ja[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Co(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var yr = null;
  function Bt(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Eo = null,
    Fn = null,
    wn = null;
  function jo(e) {
    if ((e = Go(e))) {
      if (typeof Eo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Xa(t)), Eo(e.stateNode, e.type, t));
    }
  }
  function Se(e) {
    Fn ? (wn ? wn.push(e) : (wn = [e])) : (Fn = e);
  }
  function $e() {
    if (Fn) {
      var e = Fn,
        t = wn;
      if (((wn = Fn = null), jo(e), t)) for (e = 0; e < t.length; e++) jo(t[e]);
    }
  }
  function Ge(e, t) {
    return e(t);
  }
  function ct() {}
  var Hn = !1;
  function Ue(e, t, n) {
    if (Hn) return e(t, n);
    Hn = !0;
    try {
      return Ge(e, t, n);
    } finally {
      (Hn = !1), (Fn !== null || wn !== null) && (ct(), $e());
    }
  }
  function tt(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = Xa(n);
    if (o === null) return null;
    n = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Bn = !1;
  if (p)
    try {
      var st = {};
      Object.defineProperty(st, "passive", {
        get: function () {
          Bn = !0;
        },
      }),
        window.addEventListener("test", st, st),
        window.removeEventListener("test", st, st);
    } catch {
      Bn = !1;
    }
  function Rt(e, t, n, o, i, u, h, k, _) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, L);
    } catch (V) {
      this.onError(V);
    }
  }
  var $n = !1,
    $t = null,
    To = !1,
    di = null,
    Th = {
      onError: function (e) {
        ($n = !0), ($t = e);
      },
    };
  function Ph(e, t, n, o, i, u, h, k, _) {
    ($n = !1), ($t = null), Rt.apply(Th, arguments);
  }
  function Rh(e, t, n, o, i, u, h, k, _) {
    if ((Ph.apply(this, arguments), $n)) {
      if ($n) {
        var L = $t;
        ($n = !1), ($t = null);
      } else throw Error(s(198));
      To || ((To = !0), (di = L));
    }
  }
  function xr(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Xc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Qc(e) {
    if (xr(e) !== e) throw Error(s(188));
  }
  function Mh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = xr(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, o = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (((o = i.return), o !== null)) {
          n = o;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === n) return Qc(i), e;
          if (u === o) return Qc(i), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== o.return) (n = i), (o = u);
      else {
        for (var h = !1, k = i.child; k; ) {
          if (k === n) {
            (h = !0), (n = i), (o = u);
            break;
          }
          if (k === o) {
            (h = !0), (o = i), (n = u);
            break;
          }
          k = k.sibling;
        }
        if (!h) {
          for (k = u.child; k; ) {
            if (k === n) {
              (h = !0), (n = u), (o = i);
              break;
            }
            if (k === o) {
              (h = !0), (o = u), (n = i);
              break;
            }
            k = k.sibling;
          }
          if (!h) throw Error(s(189));
        }
      }
      if (n.alternate !== o) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Jc(e) {
    return (e = Mh(e)), e !== null ? Zc(e) : null;
  }
  function Zc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Zc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var qc = a.unstable_scheduleCallback,
    eu = a.unstable_cancelCallback,
    Ih = a.unstable_shouldYield,
    Ah = a.unstable_requestPaint,
    Ve = a.unstable_now,
    Oh = a.unstable_getCurrentPriorityLevel,
    fi = a.unstable_ImmediatePriority,
    tu = a.unstable_UserBlockingPriority,
    Ta = a.unstable_NormalPriority,
    Lh = a.unstable_LowPriority,
    nu = a.unstable_IdlePriority,
    Pa = null,
    an = null;
  function Dh(e) {
    if (an && typeof an.onCommitFiberRoot == "function")
      try {
        an.onCommitFiberRoot(Pa, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Xt = Math.clz32 ? Math.clz32 : Hh,
    zh = Math.log,
    Fh = Math.LN2;
  function Hh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((zh(e) / Fh) | 0)) | 0;
  }
  var Ra = 64,
    Ma = 4194304;
  function Po(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ia(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var o = 0,
      i = e.suspendedLanes,
      u = e.pingedLanes,
      h = n & 268435455;
    if (h !== 0) {
      var k = h & ~i;
      k !== 0 ? (o = Po(k)) : ((u &= h), u !== 0 && (o = Po(u)));
    } else (h = n & ~i), h !== 0 ? (o = Po(h)) : u !== 0 && (o = Po(u));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & i) === 0 &&
      ((i = o & -o), (u = t & -t), i >= u || (i === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; )
        (n = 31 - Xt(t)), (i = 1 << n), (o |= e[n]), (t &= ~i);
    return o;
  }
  function Bh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $h(e, t) {
    for (
      var n = e.suspendedLanes,
        o = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var h = 31 - Xt(u),
        k = 1 << h,
        _ = i[h];
      _ === -1
        ? ((k & n) === 0 || (k & o) !== 0) && (i[h] = Bh(k, t))
        : _ <= t && (e.expiredLanes |= k),
        (u &= ~k);
    }
  }
  function mi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ru() {
    var e = Ra;
    return (Ra <<= 1), (Ra & 4194240) === 0 && (Ra = 64), e;
  }
  function pi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ro(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Xt(t)),
      (e[t] = n);
  }
  function Vh(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Xt(n),
        u = 1 << i;
      (t[i] = 0), (o[i] = -1), (e[i] = -1), (n &= ~u);
    }
  }
  function hi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var o = 31 - Xt(n),
        i = 1 << o;
      (i & t) | (e[o] & t) && (e[o] |= t), (n &= ~i);
    }
  }
  var Pe = 0;
  function ou(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var au,
    gi,
    su,
    iu,
    lu,
    vi = !1,
    Aa = [],
    Vn = null,
    Wn = null,
    Un = null,
    Mo = new Map(),
    Io = new Map(),
    Kn = [],
    Wh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function cu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wn = null;
        break;
      case "mouseover":
      case "mouseout":
        Un = null;
        break;
      case "pointerover":
      case "pointerout":
        Mo.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Io.delete(t.pointerId);
    }
  }
  function Ao(e, t, n, o, i, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: o,
          nativeEvent: u,
          targetContainers: [i],
        }),
        t !== null && ((t = Go(t)), t !== null && gi(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Uh(e, t, n, o, i) {
    switch (t) {
      case "focusin":
        return (Vn = Ao(Vn, e, t, n, o, i)), !0;
      case "dragenter":
        return (Wn = Ao(Wn, e, t, n, o, i)), !0;
      case "mouseover":
        return (Un = Ao(Un, e, t, n, o, i)), !0;
      case "pointerover":
        var u = i.pointerId;
        return Mo.set(u, Ao(Mo.get(u) || null, e, t, n, o, i)), !0;
      case "gotpointercapture":
        return (
          (u = i.pointerId), Io.set(u, Ao(Io.get(u) || null, e, t, n, o, i)), !0
        );
    }
    return !1;
  }
  function uu(e) {
    var t = wr(e.target);
    if (t !== null) {
      var n = xr(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Xc(n)), t !== null)) {
            (e.blockedOn = t),
              lu(e.priority, function () {
                su(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Oa(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = xi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var o = new n.constructor(n.type, n);
        (yr = o), n.target.dispatchEvent(o), (yr = null);
      } else return (t = Go(n)), t !== null && gi(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function du(e, t, n) {
    Oa(e) && n.delete(t);
  }
  function Kh() {
    (vi = !1),
      Vn !== null && Oa(Vn) && (Vn = null),
      Wn !== null && Oa(Wn) && (Wn = null),
      Un !== null && Oa(Un) && (Un = null),
      Mo.forEach(du),
      Io.forEach(du);
  }
  function Oo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      vi ||
        ((vi = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Kh)));
  }
  function Lo(e) {
    function t(i) {
      return Oo(i, e);
    }
    if (0 < Aa.length) {
      Oo(Aa[0], e);
      for (var n = 1; n < Aa.length; n++) {
        var o = Aa[n];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Vn !== null && Oo(Vn, e),
        Wn !== null && Oo(Wn, e),
        Un !== null && Oo(Un, e),
        Mo.forEach(t),
        Io.forEach(t),
        n = 0;
      n < Kn.length;
      n++
    )
      (o = Kn[n]), o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < Kn.length && ((n = Kn[0]), n.blockedOn === null); )
      uu(n), n.blockedOn === null && Kn.shift();
  }
  var Fr = D.ReactCurrentBatchConfig,
    La = !0;
  function Yh(e, t, n, o) {
    var i = Pe,
      u = Fr.transition;
    Fr.transition = null;
    try {
      (Pe = 1), yi(e, t, n, o);
    } finally {
      (Pe = i), (Fr.transition = u);
    }
  }
  function Gh(e, t, n, o) {
    var i = Pe,
      u = Fr.transition;
    Fr.transition = null;
    try {
      (Pe = 4), yi(e, t, n, o);
    } finally {
      (Pe = i), (Fr.transition = u);
    }
  }
  function yi(e, t, n, o) {
    if (La) {
      var i = xi(e, t, n, o);
      if (i === null) Li(e, t, o, Da, n), cu(e, o);
      else if (Uh(i, e, t, n, o)) o.stopPropagation();
      else if ((cu(e, o), t & 4 && -1 < Wh.indexOf(e))) {
        for (; i !== null; ) {
          var u = Go(i);
          if (
            (u !== null && au(u),
            (u = xi(e, t, n, o)),
            u === null && Li(e, t, o, Da, n),
            u === i)
          )
            break;
          i = u;
        }
        i !== null && o.stopPropagation();
      } else Li(e, t, o, null, n);
    }
  }
  var Da = null;
  function xi(e, t, n, o) {
    if (((Da = null), (e = Bt(o)), (e = wr(e)), e !== null))
      if (((t = xr(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Xc(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Da = e), null;
  }
  function fu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Oh()) {
          case fi:
            return 1;
          case tu:
            return 4;
          case Ta:
          case Lh:
            return 16;
          case nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yn = null,
    wi = null,
    za = null;
  function mu() {
    if (za) return za;
    var e,
      t = wi,
      n = t.length,
      o,
      i = "value" in Yn ? Yn.value : Yn.textContent,
      u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var h = n - e;
    for (o = 1; o <= h && t[n - o] === i[u - o]; o++);
    return (za = i.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Fa(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ha() {
    return !0;
  }
  function pu() {
    return !1;
  }
  function Mt(e) {
    function t(n, o, i, u, h) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = o),
        (this.nativeEvent = u),
        (this.target = h),
        (this.currentTarget = null);
      for (var k in e)
        e.hasOwnProperty(k) && ((n = e[k]), (this[k] = n ? n(u) : u[k]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ha
          : pu),
        (this.isPropagationStopped = pu),
        this
      );
    }
    return (
      G(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ha));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ha));
        },
        persist: function () {},
        isPersistent: Ha,
      }),
      t
    );
  }
  var Hr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ki = Mt(Hr),
    Do = G({}, Hr, { view: 0, detail: 0 }),
    Xh = Mt(Do),
    bi,
    Si,
    zo,
    Ba = G({}, Do, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: _i,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== zo &&
              (zo && e.type === "mousemove"
                ? ((bi = e.screenX - zo.screenX), (Si = e.screenY - zo.screenY))
                : (Si = bi = 0),
              (zo = e)),
            bi);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Si;
      },
    }),
    hu = Mt(Ba),
    Qh = G({}, Ba, { dataTransfer: 0 }),
    Jh = Mt(Qh),
    Zh = G({}, Do, { relatedTarget: 0 }),
    Ni = Mt(Zh),
    qh = G({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eg = Mt(qh),
    tg = G({}, Hr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ng = Mt(tg),
    rg = G({}, Hr, { data: 0 }),
    gu = Mt(rg),
    og = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ag = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    sg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ig(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = sg[e])
      ? !!t[e]
      : !1;
  }
  function _i() {
    return ig;
  }
  var lg = G({}, Do, {
      key: function (e) {
        if (e.key) {
          var t = og[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? ag[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: _i,
      charCode: function (e) {
        return e.type === "keypress" ? Fa(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fa(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    cg = Mt(lg),
    ug = G({}, Ba, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    vu = Mt(ug),
    dg = G({}, Do, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _i,
    }),
    fg = Mt(dg),
    mg = G({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pg = Mt(mg),
    hg = G({}, Ba, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    gg = Mt(hg),
    vg = [9, 13, 27, 32],
    Ci = p && "CompositionEvent" in window,
    Fo = null;
  p && "documentMode" in document && (Fo = document.documentMode);
  var yg = p && "TextEvent" in window && !Fo,
    yu = p && (!Ci || (Fo && 8 < Fo && 11 >= Fo)),
    xu = " ",
    wu = !1;
  function ku(e, t) {
    switch (e) {
      case "keyup":
        return vg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function bu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Br = !1;
  function xg(e, t) {
    switch (e) {
      case "compositionend":
        return bu(t);
      case "keypress":
        return t.which !== 32 ? null : ((wu = !0), xu);
      case "textInput":
        return (e = t.data), e === xu && wu ? null : e;
      default:
        return null;
    }
  }
  function wg(e, t) {
    if (Br)
      return e === "compositionend" || (!Ci && ku(e, t))
        ? ((e = mu()), (za = wi = Yn = null), (Br = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return yu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var kg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kg[e.type] : t === "textarea";
  }
  function Nu(e, t, n, o) {
    Se(o),
      (t = Ka(t, "onChange")),
      0 < t.length &&
        ((n = new ki("onChange", "change", null, n, o)),
        e.push({ event: n, listeners: t }));
  }
  var Ho = null,
    Bo = null;
  function bg(e) {
    $u(e, 0);
  }
  function $a(e) {
    var t = Kr(e);
    if (Te(t)) return e;
  }
  function Sg(e, t) {
    if (e === "change") return t;
  }
  var _u = !1;
  if (p) {
    var Ei;
    if (p) {
      var ji = "oninput" in document;
      if (!ji) {
        var Cu = document.createElement("div");
        Cu.setAttribute("oninput", "return;"),
          (ji = typeof Cu.oninput == "function");
      }
      Ei = ji;
    } else Ei = !1;
    _u = Ei && (!document.documentMode || 9 < document.documentMode);
  }
  function Eu() {
    Ho && (Ho.detachEvent("onpropertychange", ju), (Bo = Ho = null));
  }
  function ju(e) {
    if (e.propertyName === "value" && $a(Bo)) {
      var t = [];
      Nu(t, Bo, e, Bt(e)), Ue(bg, t);
    }
  }
  function Ng(e, t, n) {
    e === "focusin"
      ? (Eu(), (Ho = t), (Bo = n), Ho.attachEvent("onpropertychange", ju))
      : e === "focusout" && Eu();
  }
  function _g(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return $a(Bo);
  }
  function Cg(e, t) {
    if (e === "click") return $a(t);
  }
  function Eg(e, t) {
    if (e === "input" || e === "change") return $a(t);
  }
  function jg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Qt = typeof Object.is == "function" ? Object.is : jg;
  function $o(e, t) {
    if (Qt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
      var i = n[o];
      if (!v.call(t, i) || !Qt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Tu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pu(e, t) {
    var n = Tu(e);
    e = 0;
    for (var o; n; ) {
      if (n.nodeType === 3) {
        if (((o = e + n.textContent.length), e <= t && o >= t))
          return { node: n, offset: t - e };
        e = o;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Tu(n);
    }
  }
  function Ru(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ru(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Mu() {
    for (var e = window, t = Ye(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ye(e.document);
    }
    return t;
  }
  function Ti(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Tg(e) {
    var t = Mu(),
      n = e.focusedElem,
      o = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ru(n.ownerDocument.documentElement, n)
    ) {
      if (o !== null && Ti(n)) {
        if (
          ((t = o.start),
          (e = o.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            u = Math.min(o.start, i);
          (o = o.end === void 0 ? u : Math.min(o.end, i)),
            !e.extend && u > o && ((i = o), (o = u), (u = i)),
            (i = Pu(n, u));
          var h = Pu(n, o);
          i &&
            h &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== h.node ||
              e.focusOffset !== h.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            u > o
              ? (e.addRange(t), e.extend(h.node, h.offset))
              : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Pg = p && "documentMode" in document && 11 >= document.documentMode,
    $r = null,
    Pi = null,
    Vo = null,
    Ri = !1;
  function Iu(e, t, n) {
    var o =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ri ||
      $r == null ||
      $r !== Ye(o) ||
      ((o = $r),
      "selectionStart" in o && Ti(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Vo && $o(Vo, o)) ||
        ((Vo = o),
        (o = Ka(Pi, "onSelect")),
        0 < o.length &&
          ((t = new ki("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: o }),
          (t.target = $r))));
  }
  function Va(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Vr = {
      animationend: Va("Animation", "AnimationEnd"),
      animationiteration: Va("Animation", "AnimationIteration"),
      animationstart: Va("Animation", "AnimationStart"),
      transitionend: Va("Transition", "TransitionEnd"),
    },
    Mi = {},
    Au = {};
  p &&
    ((Au = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Vr.animationend.animation,
      delete Vr.animationiteration.animation,
      delete Vr.animationstart.animation),
    "TransitionEvent" in window || delete Vr.transitionend.transition);
  function Wa(e) {
    if (Mi[e]) return Mi[e];
    if (!Vr[e]) return e;
    var t = Vr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Au) return (Mi[e] = t[n]);
    return e;
  }
  var Ou = Wa("animationend"),
    Lu = Wa("animationiteration"),
    Du = Wa("animationstart"),
    zu = Wa("transitionend"),
    Fu = new Map(),
    Hu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Gn(e, t) {
    Fu.set(e, t), f(t, [e]);
  }
  for (var Ii = 0; Ii < Hu.length; Ii++) {
    var Ai = Hu[Ii],
      Rg = Ai.toLowerCase(),
      Mg = Ai[0].toUpperCase() + Ai.slice(1);
    Gn(Rg, "on" + Mg);
  }
  Gn(Ou, "onAnimationEnd"),
    Gn(Lu, "onAnimationIteration"),
    Gn(Du, "onAnimationStart"),
    Gn("dblclick", "onDoubleClick"),
    Gn("focusin", "onFocus"),
    Gn("focusout", "onBlur"),
    Gn(zu, "onTransitionEnd"),
    m("onMouseEnter", ["mouseout", "mouseover"]),
    m("onMouseLeave", ["mouseout", "mouseover"]),
    m("onPointerEnter", ["pointerout", "pointerover"]),
    m("onPointerLeave", ["pointerout", "pointerover"]),
    f(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Wo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ig = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Wo)
    );
  function Bu(e, t, n) {
    var o = e.type || "unknown-event";
    (e.currentTarget = n), Rh(o, t, void 0, e), (e.currentTarget = null);
  }
  function $u(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var o = e[n],
        i = o.event;
      o = o.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var h = o.length - 1; 0 <= h; h--) {
            var k = o[h],
              _ = k.instance,
              L = k.currentTarget;
            if (((k = k.listener), _ !== u && i.isPropagationStopped()))
              break e;
            Bu(i, k, L), (u = _);
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((k = o[h]),
              (_ = k.instance),
              (L = k.currentTarget),
              (k = k.listener),
              _ !== u && i.isPropagationStopped())
            )
              break e;
            Bu(i, k, L), (u = _);
          }
      }
    }
    if (To) throw ((e = di), (To = !1), (di = null), e);
  }
  function Le(e, t) {
    var n = t[$i];
    n === void 0 && (n = t[$i] = new Set());
    var o = e + "__bubble";
    n.has(o) || (Vu(t, e, 2, !1), n.add(o));
  }
  function Oi(e, t, n) {
    var o = 0;
    t && (o |= 4), Vu(n, e, o, t);
  }
  var Ua = "_reactListening" + Math.random().toString(36).slice(2);
  function Uo(e) {
    if (!e[Ua]) {
      (e[Ua] = !0),
        l.forEach(function (n) {
          n !== "selectionchange" && (Ig.has(n) || Oi(n, !1, e), Oi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ua] || ((t[Ua] = !0), Oi("selectionchange", !1, t));
    }
  }
  function Vu(e, t, n, o) {
    switch (fu(t)) {
      case 1:
        var i = Yh;
        break;
      case 4:
        i = Gh;
        break;
      default:
        i = yi;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Bn ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      o
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function Li(e, t, n, o, i) {
    var u = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var h = o.tag;
        if (h === 3 || h === 4) {
          var k = o.stateNode.containerInfo;
          if (k === i || (k.nodeType === 8 && k.parentNode === i)) break;
          if (h === 4)
            for (h = o.return; h !== null; ) {
              var _ = h.tag;
              if (
                (_ === 3 || _ === 4) &&
                ((_ = h.stateNode.containerInfo),
                _ === i || (_.nodeType === 8 && _.parentNode === i))
              )
                return;
              h = h.return;
            }
          for (; k !== null; ) {
            if (((h = wr(k)), h === null)) return;
            if (((_ = h.tag), _ === 5 || _ === 6)) {
              o = u = h;
              continue e;
            }
            k = k.parentNode;
          }
        }
        o = o.return;
      }
    Ue(function () {
      var L = u,
        V = Bt(n),
        K = [];
      e: {
        var $ = Fu.get(e);
        if ($ !== void 0) {
          var te = ki,
            oe = e;
          switch (e) {
            case "keypress":
              if (Fa(n) === 0) break e;
            case "keydown":
            case "keyup":
              te = cg;
              break;
            case "focusin":
              (oe = "focus"), (te = Ni);
              break;
            case "focusout":
              (oe = "blur"), (te = Ni);
              break;
            case "beforeblur":
            case "afterblur":
              te = Ni;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              te = hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              te = Jh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              te = fg;
              break;
            case Ou:
            case Lu:
            case Du:
              te = eg;
              break;
            case zu:
              te = pg;
              break;
            case "scroll":
              te = Xh;
              break;
            case "wheel":
              te = gg;
              break;
            case "copy":
            case "cut":
            case "paste":
              te = ng;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              te = vu;
          }
          var ce = (t & 4) !== 0,
            We = !ce && e === "scroll",
            M = ce ? ($ !== null ? $ + "Capture" : null) : $;
          ce = [];
          for (var T = L, A; T !== null; ) {
            A = T;
            var X = A.stateNode;
            if (
              (A.tag === 5 &&
                X !== null &&
                ((A = X),
                M !== null &&
                  ((X = tt(T, M)), X != null && ce.push(Ko(T, X, A)))),
              We)
            )
              break;
            T = T.return;
          }
          0 < ce.length &&
            (($ = new te($, oe, null, n, V)),
            K.push({ event: $, listeners: ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            (($ = e === "mouseover" || e === "pointerover"),
            (te = e === "mouseout" || e === "pointerout"),
            $ &&
              n !== yr &&
              (oe = n.relatedTarget || n.fromElement) &&
              (wr(oe) || oe[kn]))
          )
            break e;
          if (
            (te || $) &&
            (($ =
              V.window === V
                ? V
                : ($ = V.ownerDocument)
                ? $.defaultView || $.parentWindow
                : window),
            te
              ? ((oe = n.relatedTarget || n.toElement),
                (te = L),
                (oe = oe ? wr(oe) : null),
                oe !== null &&
                  ((We = xr(oe)),
                  oe !== We || (oe.tag !== 5 && oe.tag !== 6)) &&
                  (oe = null))
              : ((te = null), (oe = L)),
            te !== oe)
          ) {
            if (
              ((ce = hu),
              (X = "onMouseLeave"),
              (M = "onMouseEnter"),
              (T = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ce = vu),
                (X = "onPointerLeave"),
                (M = "onPointerEnter"),
                (T = "pointer")),
              (We = te == null ? $ : Kr(te)),
              (A = oe == null ? $ : Kr(oe)),
              ($ = new ce(X, T + "leave", te, n, V)),
              ($.target = We),
              ($.relatedTarget = A),
              (X = null),
              wr(V) === L &&
                ((ce = new ce(M, T + "enter", oe, n, V)),
                (ce.target = A),
                (ce.relatedTarget = We),
                (X = ce)),
              (We = X),
              te && oe)
            )
              t: {
                for (ce = te, M = oe, T = 0, A = ce; A; A = Wr(A)) T++;
                for (A = 0, X = M; X; X = Wr(X)) A++;
                for (; 0 < T - A; ) (ce = Wr(ce)), T--;
                for (; 0 < A - T; ) (M = Wr(M)), A--;
                for (; T--; ) {
                  if (ce === M || (M !== null && ce === M.alternate)) break t;
                  (ce = Wr(ce)), (M = Wr(M));
                }
                ce = null;
              }
            else ce = null;
            te !== null && Wu(K, $, te, ce, !1),
              oe !== null && We !== null && Wu(K, We, oe, ce, !0);
          }
        }
        e: {
          if (
            (($ = L ? Kr(L) : window),
            (te = $.nodeName && $.nodeName.toLowerCase()),
            te === "select" || (te === "input" && $.type === "file"))
          )
            var ue = Sg;
          else if (Su($))
            if (_u) ue = Eg;
            else {
              ue = _g;
              var ge = Ng;
            }
          else
            (te = $.nodeName) &&
              te.toLowerCase() === "input" &&
              ($.type === "checkbox" || $.type === "radio") &&
              (ue = Cg);
          if (ue && (ue = ue(e, L))) {
            Nu(K, ue, n, V);
            break e;
          }
          ge && ge(e, $, L),
            e === "focusout" &&
              (ge = $._wrapperState) &&
              ge.controlled &&
              $.type === "number" &&
              Pt($, "number", $.value);
        }
        switch (((ge = L ? Kr(L) : window), e)) {
          case "focusin":
            (Su(ge) || ge.contentEditable === "true") &&
              (($r = ge), (Pi = L), (Vo = null));
            break;
          case "focusout":
            Vo = Pi = $r = null;
            break;
          case "mousedown":
            Ri = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ri = !1), Iu(K, n, V);
            break;
          case "selectionchange":
            if (Pg) break;
          case "keydown":
          case "keyup":
            Iu(K, n, V);
        }
        var ve;
        if (Ci)
          e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          Br
            ? ku(e, n) && (be = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (be = "onCompositionStart");
        be &&
          (yu &&
            n.locale !== "ko" &&
            (Br || be !== "onCompositionStart"
              ? be === "onCompositionEnd" && Br && (ve = mu())
              : ((Yn = V),
                (wi = "value" in Yn ? Yn.value : Yn.textContent),
                (Br = !0))),
          (ge = Ka(L, be)),
          0 < ge.length &&
            ((be = new gu(be, e, null, n, V)),
            K.push({ event: be, listeners: ge }),
            ve
              ? (be.data = ve)
              : ((ve = bu(n)), ve !== null && (be.data = ve)))),
          (ve = yg ? xg(e, n) : wg(e, n)) &&
            ((L = Ka(L, "onBeforeInput")),
            0 < L.length &&
              ((V = new gu("onBeforeInput", "beforeinput", null, n, V)),
              K.push({ event: V, listeners: L }),
              (V.data = ve)));
      }
      $u(K, t);
    });
  }
  function Ko(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ka(e, t) {
    for (var n = t + "Capture", o = []; e !== null; ) {
      var i = e,
        u = i.stateNode;
      i.tag === 5 &&
        u !== null &&
        ((i = u),
        (u = tt(e, n)),
        u != null && o.unshift(Ko(e, u, i)),
        (u = tt(e, t)),
        u != null && o.push(Ko(e, u, i))),
        (e = e.return);
    }
    return o;
  }
  function Wr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Wu(e, t, n, o, i) {
    for (var u = t._reactName, h = []; n !== null && n !== o; ) {
      var k = n,
        _ = k.alternate,
        L = k.stateNode;
      if (_ !== null && _ === o) break;
      k.tag === 5 &&
        L !== null &&
        ((k = L),
        i
          ? ((_ = tt(n, u)), _ != null && h.unshift(Ko(n, _, k)))
          : i || ((_ = tt(n, u)), _ != null && h.push(Ko(n, _, k)))),
        (n = n.return);
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Ag = /\r\n?/g,
    Og = /\u0000|\uFFFD/g;
  function Uu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ag,
        `
`
      )
      .replace(Og, "");
  }
  function Ya(e, t, n) {
    if (((t = Uu(t)), Uu(e) !== t && n)) throw Error(s(425));
  }
  function Ga() {}
  var Di = null,
    zi = null;
  function Fi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Hi = typeof setTimeout == "function" ? setTimeout : void 0,
    Lg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ku = typeof Promise == "function" ? Promise : void 0,
    Dg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ku < "u"
        ? function (e) {
            return Ku.resolve(null).then(e).catch(zg);
          }
        : Hi;
  function zg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Bi(e, t) {
    var n = t,
      o = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (o === 0) {
            e.removeChild(i), Lo(t);
            return;
          }
          o--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || o++;
      n = i;
    } while (n);
    Lo(t);
  }
  function Xn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Yu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Ur = Math.random().toString(36).slice(2),
    sn = "__reactFiber$" + Ur,
    Yo = "__reactProps$" + Ur,
    kn = "__reactContainer$" + Ur,
    $i = "__reactEvents$" + Ur,
    Fg = "__reactListeners$" + Ur,
    Hg = "__reactHandles$" + Ur;
  function wr(e) {
    var t = e[sn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[kn] || n[sn])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Yu(e); e !== null; ) {
            if ((n = e[sn])) return n;
            e = Yu(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Go(e) {
    return (
      (e = e[sn] || e[kn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Kr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Xa(e) {
    return e[Yo] || null;
  }
  var Vi = [],
    Yr = -1;
  function Qn(e) {
    return { current: e };
  }
  function De(e) {
    0 > Yr || ((e.current = Vi[Yr]), (Vi[Yr] = null), Yr--);
  }
  function Ae(e, t) {
    Yr++, (Vi[Yr] = e.current), (e.current = t);
  }
  var Jn = {},
    ut = Qn(Jn),
    yt = Qn(!1),
    kr = Jn;
  function Gr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      u;
    for (u in n) i[u] = t[u];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function xt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Qa() {
    De(yt), De(ut);
  }
  function Gu(e, t, n) {
    if (ut.current !== Jn) throw Error(s(168));
    Ae(ut, t), Ae(yt, n);
  }
  function Xu(e, t, n) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
      return n;
    o = o.getChildContext();
    for (var i in o) if (!(i in t)) throw Error(s(108, U(e) || "Unknown", i));
    return G({}, n, o);
  }
  function Ja(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Jn),
      (kr = ut.current),
      Ae(ut, e),
      Ae(yt, yt.current),
      !0
    );
  }
  function Qu(e, t, n) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    n
      ? ((e = Xu(e, t, kr)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        De(yt),
        De(ut),
        Ae(ut, e))
      : De(yt),
      Ae(yt, n);
  }
  var bn = null,
    Za = !1,
    Wi = !1;
  function Ju(e) {
    bn === null ? (bn = [e]) : bn.push(e);
  }
  function Bg(e) {
    (Za = !0), Ju(e);
  }
  function Zn() {
    if (!Wi && bn !== null) {
      Wi = !0;
      var e = 0,
        t = Pe;
      try {
        var n = bn;
        for (Pe = 1; e < n.length; e++) {
          var o = n[e];
          do o = o(!0);
          while (o !== null);
        }
        (bn = null), (Za = !1);
      } catch (i) {
        throw (bn !== null && (bn = bn.slice(e + 1)), qc(fi, Zn), i);
      } finally {
        (Pe = t), (Wi = !1);
      }
    }
    return null;
  }
  var Xr = [],
    Qr = 0,
    qa = null,
    es = 0,
    Vt = [],
    Wt = 0,
    br = null,
    Sn = 1,
    Nn = "";
  function Sr(e, t) {
    (Xr[Qr++] = es), (Xr[Qr++] = qa), (qa = e), (es = t);
  }
  function Zu(e, t, n) {
    (Vt[Wt++] = Sn), (Vt[Wt++] = Nn), (Vt[Wt++] = br), (br = e);
    var o = Sn;
    e = Nn;
    var i = 32 - Xt(o) - 1;
    (o &= ~(1 << i)), (n += 1);
    var u = 32 - Xt(t) + i;
    if (30 < u) {
      var h = i - (i % 5);
      (u = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (i -= h),
        (Sn = (1 << (32 - Xt(t) + i)) | (n << i) | o),
        (Nn = u + e);
    } else (Sn = (1 << u) | (n << i) | o), (Nn = e);
  }
  function Ui(e) {
    e.return !== null && (Sr(e, 1), Zu(e, 1, 0));
  }
  function Ki(e) {
    for (; e === qa; )
      (qa = Xr[--Qr]), (Xr[Qr] = null), (es = Xr[--Qr]), (Xr[Qr] = null);
    for (; e === br; )
      (br = Vt[--Wt]),
        (Vt[Wt] = null),
        (Nn = Vt[--Wt]),
        (Vt[Wt] = null),
        (Sn = Vt[--Wt]),
        (Vt[Wt] = null);
  }
  var It = null,
    At = null,
    ze = !1,
    Jt = null;
  function qu(e, t) {
    var n = Gt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ed(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (It = e), (At = Xn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (It = e), (At = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = br !== null ? { id: Sn, overflow: Nn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Gt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (It = e),
              (At = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Yi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Gi(e) {
    if (ze) {
      var t = At;
      if (t) {
        var n = t;
        if (!ed(e, t)) {
          if (Yi(e)) throw Error(s(418));
          t = Xn(n.nextSibling);
          var o = It;
          t && ed(e, t)
            ? qu(o, n)
            : ((e.flags = (e.flags & -4097) | 2), (ze = !1), (It = e));
        }
      } else {
        if (Yi(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (ze = !1), (It = e);
      }
    }
  }
  function td(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    It = e;
  }
  function ts(e) {
    if (e !== It) return !1;
    if (!ze) return td(e), (ze = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Fi(e.type, e.memoizedProps))),
      t && (t = At))
    ) {
      if (Yi(e)) throw (nd(), Error(s(418)));
      for (; t; ) qu(e, t), (t = Xn(t.nextSibling));
    }
    if ((td(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                At = Xn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        At = null;
      }
    } else At = It ? Xn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function nd() {
    for (var e = At; e; ) e = Xn(e.nextSibling);
  }
  function Jr() {
    (At = It = null), (ze = !1);
  }
  function Xi(e) {
    Jt === null ? (Jt = [e]) : Jt.push(e);
  }
  var $g = D.ReactCurrentBatchConfig;
  function Xo(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var o = n.stateNode;
        }
        if (!o) throw Error(s(147, e));
        var i = o,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (h) {
              var k = i.refs;
              h === null ? delete k[u] : (k[u] = h);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function ns(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function rd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function od(e) {
    function t(M, T) {
      if (e) {
        var A = M.deletions;
        A === null ? ((M.deletions = [T]), (M.flags |= 16)) : A.push(T);
      }
    }
    function n(M, T) {
      if (!e) return null;
      for (; T !== null; ) t(M, T), (T = T.sibling);
      return null;
    }
    function o(M, T) {
      for (M = new Map(); T !== null; )
        T.key !== null ? M.set(T.key, T) : M.set(T.index, T), (T = T.sibling);
      return M;
    }
    function i(M, T) {
      return (M = sr(M, T)), (M.index = 0), (M.sibling = null), M;
    }
    function u(M, T, A) {
      return (
        (M.index = A),
        e
          ? ((A = M.alternate),
            A !== null
              ? ((A = A.index), A < T ? ((M.flags |= 2), T) : A)
              : ((M.flags |= 2), T))
          : ((M.flags |= 1048576), T)
      );
    }
    function h(M) {
      return e && M.alternate === null && (M.flags |= 2), M;
    }
    function k(M, T, A, X) {
      return T === null || T.tag !== 6
        ? ((T = Hl(A, M.mode, X)), (T.return = M), T)
        : ((T = i(T, A)), (T.return = M), T);
    }
    function _(M, T, A, X) {
      var ue = A.type;
      return ue === B
        ? V(M, T, A.props.children, X, A.key)
        : T !== null &&
          (T.elementType === ue ||
            (typeof ue == "object" &&
              ue !== null &&
              ue.$$typeof === W &&
              rd(ue) === T.type))
        ? ((X = i(T, A.props)), (X.ref = Xo(M, T, A)), (X.return = M), X)
        : ((X = Cs(A.type, A.key, A.props, null, M.mode, X)),
          (X.ref = Xo(M, T, A)),
          (X.return = M),
          X);
    }
    function L(M, T, A, X) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== A.containerInfo ||
        T.stateNode.implementation !== A.implementation
        ? ((T = Bl(A, M.mode, X)), (T.return = M), T)
        : ((T = i(T, A.children || [])), (T.return = M), T);
    }
    function V(M, T, A, X, ue) {
      return T === null || T.tag !== 7
        ? ((T = Rr(A, M.mode, X, ue)), (T.return = M), T)
        : ((T = i(T, A)), (T.return = M), T);
    }
    function K(M, T, A) {
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return (T = Hl("" + T, M.mode, A)), (T.return = M), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case F:
            return (
              (A = Cs(T.type, T.key, T.props, null, M.mode, A)),
              (A.ref = Xo(M, null, T)),
              (A.return = M),
              A
            );
          case Z:
            return (T = Bl(T, M.mode, A)), (T.return = M), T;
          case W:
            var X = T._init;
            return K(M, X(T._payload), A);
        }
        if (hr(T) || Y(T))
          return (T = Rr(T, M.mode, A, null)), (T.return = M), T;
        ns(M, T);
      }
      return null;
    }
    function $(M, T, A, X) {
      var ue = T !== null ? T.key : null;
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return ue !== null ? null : k(M, T, "" + A, X);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case F:
            return A.key === ue ? _(M, T, A, X) : null;
          case Z:
            return A.key === ue ? L(M, T, A, X) : null;
          case W:
            return (ue = A._init), $(M, T, ue(A._payload), X);
        }
        if (hr(A) || Y(A)) return ue !== null ? null : V(M, T, A, X, null);
        ns(M, A);
      }
      return null;
    }
    function te(M, T, A, X, ue) {
      if ((typeof X == "string" && X !== "") || typeof X == "number")
        return (M = M.get(A) || null), k(T, M, "" + X, ue);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case F:
            return (
              (M = M.get(X.key === null ? A : X.key) || null), _(T, M, X, ue)
            );
          case Z:
            return (
              (M = M.get(X.key === null ? A : X.key) || null), L(T, M, X, ue)
            );
          case W:
            var ge = X._init;
            return te(M, T, A, ge(X._payload), ue);
        }
        if (hr(X) || Y(X)) return (M = M.get(A) || null), V(T, M, X, ue, null);
        ns(T, X);
      }
      return null;
    }
    function oe(M, T, A, X) {
      for (
        var ue = null, ge = null, ve = T, be = (T = 0), ot = null;
        ve !== null && be < A.length;
        be++
      ) {
        ve.index > be ? ((ot = ve), (ve = null)) : (ot = ve.sibling);
        var je = $(M, ve, A[be], X);
        if (je === null) {
          ve === null && (ve = ot);
          break;
        }
        e && ve && je.alternate === null && t(M, ve),
          (T = u(je, T, be)),
          ge === null ? (ue = je) : (ge.sibling = je),
          (ge = je),
          (ve = ot);
      }
      if (be === A.length) return n(M, ve), ze && Sr(M, be), ue;
      if (ve === null) {
        for (; be < A.length; be++)
          (ve = K(M, A[be], X)),
            ve !== null &&
              ((T = u(ve, T, be)),
              ge === null ? (ue = ve) : (ge.sibling = ve),
              (ge = ve));
        return ze && Sr(M, be), ue;
      }
      for (ve = o(M, ve); be < A.length; be++)
        (ot = te(ve, M, be, A[be], X)),
          ot !== null &&
            (e &&
              ot.alternate !== null &&
              ve.delete(ot.key === null ? be : ot.key),
            (T = u(ot, T, be)),
            ge === null ? (ue = ot) : (ge.sibling = ot),
            (ge = ot));
      return (
        e &&
          ve.forEach(function (ir) {
            return t(M, ir);
          }),
        ze && Sr(M, be),
        ue
      );
    }
    function ce(M, T, A, X) {
      var ue = Y(A);
      if (typeof ue != "function") throw Error(s(150));
      if (((A = ue.call(A)), A == null)) throw Error(s(151));
      for (
        var ge = (ue = null), ve = T, be = (T = 0), ot = null, je = A.next();
        ve !== null && !je.done;
        be++, je = A.next()
      ) {
        ve.index > be ? ((ot = ve), (ve = null)) : (ot = ve.sibling);
        var ir = $(M, ve, je.value, X);
        if (ir === null) {
          ve === null && (ve = ot);
          break;
        }
        e && ve && ir.alternate === null && t(M, ve),
          (T = u(ir, T, be)),
          ge === null ? (ue = ir) : (ge.sibling = ir),
          (ge = ir),
          (ve = ot);
      }
      if (je.done) return n(M, ve), ze && Sr(M, be), ue;
      if (ve === null) {
        for (; !je.done; be++, je = A.next())
          (je = K(M, je.value, X)),
            je !== null &&
              ((T = u(je, T, be)),
              ge === null ? (ue = je) : (ge.sibling = je),
              (ge = je));
        return ze && Sr(M, be), ue;
      }
      for (ve = o(M, ve); !je.done; be++, je = A.next())
        (je = te(ve, M, be, je.value, X)),
          je !== null &&
            (e &&
              je.alternate !== null &&
              ve.delete(je.key === null ? be : je.key),
            (T = u(je, T, be)),
            ge === null ? (ue = je) : (ge.sibling = je),
            (ge = je));
      return (
        e &&
          ve.forEach(function (kv) {
            return t(M, kv);
          }),
        ze && Sr(M, be),
        ue
      );
    }
    function We(M, T, A, X) {
      if (
        (typeof A == "object" &&
          A !== null &&
          A.type === B &&
          A.key === null &&
          (A = A.props.children),
        typeof A == "object" && A !== null)
      ) {
        switch (A.$$typeof) {
          case F:
            e: {
              for (var ue = A.key, ge = T; ge !== null; ) {
                if (ge.key === ue) {
                  if (((ue = A.type), ue === B)) {
                    if (ge.tag === 7) {
                      n(M, ge.sibling),
                        (T = i(ge, A.props.children)),
                        (T.return = M),
                        (M = T);
                      break e;
                    }
                  } else if (
                    ge.elementType === ue ||
                    (typeof ue == "object" &&
                      ue !== null &&
                      ue.$$typeof === W &&
                      rd(ue) === ge.type)
                  ) {
                    n(M, ge.sibling),
                      (T = i(ge, A.props)),
                      (T.ref = Xo(M, ge, A)),
                      (T.return = M),
                      (M = T);
                    break e;
                  }
                  n(M, ge);
                  break;
                } else t(M, ge);
                ge = ge.sibling;
              }
              A.type === B
                ? ((T = Rr(A.props.children, M.mode, X, A.key)),
                  (T.return = M),
                  (M = T))
                : ((X = Cs(A.type, A.key, A.props, null, M.mode, X)),
                  (X.ref = Xo(M, T, A)),
                  (X.return = M),
                  (M = X));
            }
            return h(M);
          case Z:
            e: {
              for (ge = A.key; T !== null; ) {
                if (T.key === ge)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === A.containerInfo &&
                    T.stateNode.implementation === A.implementation
                  ) {
                    n(M, T.sibling),
                      (T = i(T, A.children || [])),
                      (T.return = M),
                      (M = T);
                    break e;
                  } else {
                    n(M, T);
                    break;
                  }
                else t(M, T);
                T = T.sibling;
              }
              (T = Bl(A, M.mode, X)), (T.return = M), (M = T);
            }
            return h(M);
          case W:
            return (ge = A._init), We(M, T, ge(A._payload), X);
        }
        if (hr(A)) return oe(M, T, A, X);
        if (Y(A)) return ce(M, T, A, X);
        ns(M, A);
      }
      return (typeof A == "string" && A !== "") || typeof A == "number"
        ? ((A = "" + A),
          T !== null && T.tag === 6
            ? (n(M, T.sibling), (T = i(T, A)), (T.return = M), (M = T))
            : (n(M, T), (T = Hl(A, M.mode, X)), (T.return = M), (M = T)),
          h(M))
        : n(M, T);
    }
    return We;
  }
  var Zr = od(!0),
    ad = od(!1),
    rs = Qn(null),
    os = null,
    qr = null,
    Qi = null;
  function Ji() {
    Qi = qr = os = null;
  }
  function Zi(e) {
    var t = rs.current;
    De(rs), (e._currentValue = t);
  }
  function qi(e, t, n) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function eo(e, t) {
    (os = e),
      (Qi = qr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (wt = !0), (e.firstContext = null));
  }
  function Ut(e) {
    var t = e._currentValue;
    if (Qi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), qr === null)) {
        if (os === null) throw Error(s(308));
        (qr = e), (os.dependencies = { lanes: 0, firstContext: e });
      } else qr = qr.next = e;
    return t;
  }
  var Nr = null;
  function el(e) {
    Nr === null ? (Nr = [e]) : Nr.push(e);
  }
  function sd(e, t, n, o) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), el(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      _n(e, o)
    );
  }
  function _n(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var qn = !1;
  function tl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function id(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Cn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function er(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Ee & 2) !== 0)) {
      var i = o.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (o.pending = t),
        _n(e, n)
      );
    }
    return (
      (i = o.interleaved),
      i === null ? ((t.next = t), el(o)) : ((t.next = i.next), (i.next = t)),
      (o.interleaved = t),
      _n(e, n)
    );
  }
  function as(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var o = t.lanes;
      (o &= e.pendingLanes), (n |= o), (t.lanes = n), hi(e, n);
    }
  }
  function ld(e, t) {
    var n = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), n === o)) {
      var i = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var h = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          u === null ? (i = u = h) : (u = u.next = h), (n = n.next);
        } while (n !== null);
        u === null ? (i = u = t) : (u = u.next = t);
      } else i = u = t;
      (n = {
        baseState: o.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function ss(e, t, n, o) {
    var i = e.updateQueue;
    qn = !1;
    var u = i.firstBaseUpdate,
      h = i.lastBaseUpdate,
      k = i.shared.pending;
    if (k !== null) {
      i.shared.pending = null;
      var _ = k,
        L = _.next;
      (_.next = null), h === null ? (u = L) : (h.next = L), (h = _);
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (k = V.lastBaseUpdate),
        k !== h &&
          (k === null ? (V.firstBaseUpdate = L) : (k.next = L),
          (V.lastBaseUpdate = _)));
    }
    if (u !== null) {
      var K = i.baseState;
      (h = 0), (V = L = _ = null), (k = u);
      do {
        var $ = k.lane,
          te = k.eventTime;
        if ((o & $) === $) {
          V !== null &&
            (V = V.next =
              {
                eventTime: te,
                lane: 0,
                tag: k.tag,
                payload: k.payload,
                callback: k.callback,
                next: null,
              });
          e: {
            var oe = e,
              ce = k;
            switch ((($ = t), (te = n), ce.tag)) {
              case 1:
                if (((oe = ce.payload), typeof oe == "function")) {
                  K = oe.call(te, K, $);
                  break e;
                }
                K = oe;
                break e;
              case 3:
                oe.flags = (oe.flags & -65537) | 128;
              case 0:
                if (
                  ((oe = ce.payload),
                  ($ = typeof oe == "function" ? oe.call(te, K, $) : oe),
                  $ == null)
                )
                  break e;
                K = G({}, K, $);
                break e;
              case 2:
                qn = !0;
            }
          }
          k.callback !== null &&
            k.lane !== 0 &&
            ((e.flags |= 64),
            ($ = i.effects),
            $ === null ? (i.effects = [k]) : $.push(k));
        } else
          (te = {
            eventTime: te,
            lane: $,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null,
          }),
            V === null ? ((L = V = te), (_ = K)) : (V = V.next = te),
            (h |= $);
        if (((k = k.next), k === null)) {
          if (((k = i.shared.pending), k === null)) break;
          ($ = k),
            (k = $.next),
            ($.next = null),
            (i.lastBaseUpdate = $),
            (i.shared.pending = null);
        }
      } while (!0);
      if (
        (V === null && (_ = K),
        (i.baseState = _),
        (i.firstBaseUpdate = L),
        (i.lastBaseUpdate = V),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (h |= i.lane), (i = i.next);
        while (i !== t);
      } else u === null && (i.shared.lanes = 0);
      (Er |= h), (e.lanes = h), (e.memoizedState = K);
    }
  }
  function cd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          i = o.callback;
        if (i !== null) {
          if (((o.callback = null), (o = n), typeof i != "function"))
            throw Error(s(191, i));
          i.call(o);
        }
      }
  }
  var Qo = {},
    ln = Qn(Qo),
    Jo = Qn(Qo),
    Zo = Qn(Qo);
  function _r(e) {
    if (e === Qo) throw Error(s(174));
    return e;
  }
  function nl(e, t) {
    switch ((Ae(Zo, t), Ae(Jo, e), Ae(ln, Qo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : _o(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = _o(t, e));
    }
    De(ln), Ae(ln, t);
  }
  function to() {
    De(ln), De(Jo), De(Zo);
  }
  function ud(e) {
    _r(Zo.current);
    var t = _r(ln.current),
      n = _o(t, e.type);
    t !== n && (Ae(Jo, e), Ae(ln, n));
  }
  function rl(e) {
    Jo.current === e && (De(ln), De(Jo));
  }
  var Fe = Qn(0);
  function is(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ol = [];
  function al() {
    for (var e = 0; e < ol.length; e++)
      ol[e]._workInProgressVersionPrimary = null;
    ol.length = 0;
  }
  var ls = D.ReactCurrentDispatcher,
    sl = D.ReactCurrentBatchConfig,
    Cr = 0,
    He = null,
    Xe = null,
    nt = null,
    cs = !1,
    qo = !1,
    ea = 0,
    Vg = 0;
  function dt() {
    throw Error(s(321));
  }
  function il(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Qt(e[n], t[n])) return !1;
    return !0;
  }
  function ll(e, t, n, o, i, u) {
    if (
      ((Cr = u),
      (He = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ls.current = e === null || e.memoizedState === null ? Yg : Gg),
      (e = n(o, i)),
      qo)
    ) {
      u = 0;
      do {
        if (((qo = !1), (ea = 0), 25 <= u)) throw Error(s(301));
        (u += 1),
          (nt = Xe = null),
          (t.updateQueue = null),
          (ls.current = Xg),
          (e = n(o, i));
      } while (qo);
    }
    if (
      ((ls.current = fs),
      (t = Xe !== null && Xe.next !== null),
      (Cr = 0),
      (nt = Xe = He = null),
      (cs = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function cl() {
    var e = ea !== 0;
    return (ea = 0), e;
  }
  function cn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return nt === null ? (He.memoizedState = nt = e) : (nt = nt.next = e), nt;
  }
  function Kt() {
    if (Xe === null) {
      var e = He.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xe.next;
    var t = nt === null ? He.memoizedState : nt.next;
    if (t !== null) (nt = t), (Xe = e);
    else {
      if (e === null) throw Error(s(310));
      (Xe = e),
        (e = {
          memoizedState: Xe.memoizedState,
          baseState: Xe.baseState,
          baseQueue: Xe.baseQueue,
          queue: Xe.queue,
          next: null,
        }),
        nt === null ? (He.memoizedState = nt = e) : (nt = nt.next = e);
    }
    return nt;
  }
  function ta(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ul(e) {
    var t = Kt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var o = Xe,
      i = o.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (i !== null) {
        var h = i.next;
        (i.next = u.next), (u.next = h);
      }
      (o.baseQueue = i = u), (n.pending = null);
    }
    if (i !== null) {
      (u = i.next), (o = o.baseState);
      var k = (h = null),
        _ = null,
        L = u;
      do {
        var V = L.lane;
        if ((Cr & V) === V)
          _ !== null &&
            (_ = _.next =
              {
                lane: 0,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null,
              }),
            (o = L.hasEagerState ? L.eagerState : e(o, L.action));
        else {
          var K = {
            lane: V,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          };
          _ === null ? ((k = _ = K), (h = o)) : (_ = _.next = K),
            (He.lanes |= V),
            (Er |= V);
        }
        L = L.next;
      } while (L !== null && L !== u);
      _ === null ? (h = o) : (_.next = k),
        Qt(o, t.memoizedState) || (wt = !0),
        (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = _),
        (n.lastRenderedState = o);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (u = i.lane), (He.lanes |= u), (Er |= u), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function dl(e) {
    var t = Kt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch,
      i = n.pending,
      u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var h = (i = i.next);
      do (u = e(u, h.action)), (h = h.next);
      while (h !== i);
      Qt(u, t.memoizedState) || (wt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, o];
  }
  function dd() {}
  function fd(e, t) {
    var n = He,
      o = Kt(),
      i = t(),
      u = !Qt(o.memoizedState, i);
    if (
      (u && ((o.memoizedState = i), (wt = !0)),
      (o = o.queue),
      fl(hd.bind(null, n, o, e), [e]),
      o.getSnapshot !== t || u || (nt !== null && nt.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        na(9, pd.bind(null, n, o, i, t), void 0, null),
        rt === null)
      )
        throw Error(s(349));
      (Cr & 30) !== 0 || md(n, t, i);
    }
    return i;
  }
  function md(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = He.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (He.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function pd(e, t, n, o) {
    (t.value = n), (t.getSnapshot = o), gd(t) && vd(e);
  }
  function hd(e, t, n) {
    return n(function () {
      gd(t) && vd(e);
    });
  }
  function gd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Qt(e, n);
    } catch {
      return !0;
    }
  }
  function vd(e) {
    var t = _n(e, 1);
    t !== null && tn(t, e, 1, -1);
  }
  function yd(e) {
    var t = cn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ta,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Kg.bind(null, He, e)),
      [t.memoizedState, e]
    );
  }
  function na(e, t, n, o) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: o, next: null }),
      (t = He.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (He.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((o = n.next), (n.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function xd() {
    return Kt().memoizedState;
  }
  function us(e, t, n, o) {
    var i = cn();
    (He.flags |= e),
      (i.memoizedState = na(1 | t, n, void 0, o === void 0 ? null : o));
  }
  function ds(e, t, n, o) {
    var i = Kt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (Xe !== null) {
      var h = Xe.memoizedState;
      if (((u = h.destroy), o !== null && il(o, h.deps))) {
        i.memoizedState = na(t, n, u, o);
        return;
      }
    }
    (He.flags |= e), (i.memoizedState = na(1 | t, n, u, o));
  }
  function wd(e, t) {
    return us(8390656, 8, e, t);
  }
  function fl(e, t) {
    return ds(2048, 8, e, t);
  }
  function kd(e, t) {
    return ds(4, 2, e, t);
  }
  function bd(e, t) {
    return ds(4, 4, e, t);
  }
  function Sd(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Nd(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), ds(4, 4, Sd.bind(null, t, e), n)
    );
  }
  function ml() {}
  function _d(e, t) {
    var n = Kt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && il(t, o[1])
      ? o[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Cd(e, t) {
    var n = Kt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && il(t, o[1])
      ? o[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ed(e, t, n) {
    return (Cr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (wt = !0)), (e.memoizedState = n))
      : (Qt(n, t) ||
          ((n = ru()), (He.lanes |= n), (Er |= n), (e.baseState = !0)),
        t);
  }
  function Wg(e, t) {
    var n = Pe;
    (Pe = n !== 0 && 4 > n ? n : 4), e(!0);
    var o = sl.transition;
    sl.transition = {};
    try {
      e(!1), t();
    } finally {
      (Pe = n), (sl.transition = o);
    }
  }
  function jd() {
    return Kt().memoizedState;
  }
  function Ug(e, t, n) {
    var o = or(e);
    if (
      ((n = {
        lane: o,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Td(e))
    )
      Pd(t, n);
    else if (((n = sd(e, t, n, o)), n !== null)) {
      var i = vt();
      tn(n, e, o, i), Rd(n, t, o);
    }
  }
  function Kg(e, t, n) {
    var o = or(e),
      i = {
        lane: o,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Td(e)) Pd(t, i);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var h = t.lastRenderedState,
            k = u(h, n);
          if (((i.hasEagerState = !0), (i.eagerState = k), Qt(k, h))) {
            var _ = t.interleaved;
            _ === null
              ? ((i.next = i), el(t))
              : ((i.next = _.next), (_.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = sd(e, t, i, o)),
        n !== null && ((i = vt()), tn(n, e, o, i), Rd(n, t, o));
    }
  }
  function Td(e) {
    var t = e.alternate;
    return e === He || (t !== null && t === He);
  }
  function Pd(e, t) {
    qo = cs = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Rd(e, t, n) {
    if ((n & 4194240) !== 0) {
      var o = t.lanes;
      (o &= e.pendingLanes), (n |= o), (t.lanes = n), hi(e, n);
    }
  }
  var fs = {
      readContext: Ut,
      useCallback: dt,
      useContext: dt,
      useEffect: dt,
      useImperativeHandle: dt,
      useInsertionEffect: dt,
      useLayoutEffect: dt,
      useMemo: dt,
      useReducer: dt,
      useRef: dt,
      useState: dt,
      useDebugValue: dt,
      useDeferredValue: dt,
      useTransition: dt,
      useMutableSource: dt,
      useSyncExternalStore: dt,
      useId: dt,
      unstable_isNewReconciler: !1,
    },
    Yg = {
      readContext: Ut,
      useCallback: function (e, t) {
        return (cn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ut,
      useEffect: wd,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          us(4194308, 4, Sd.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return us(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return us(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = cn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var o = cn();
        return (
          (t = n !== void 0 ? n(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = Ug.bind(null, He, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = cn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: yd,
      useDebugValue: ml,
      useDeferredValue: function (e) {
        return (cn().memoizedState = e);
      },
      useTransition: function () {
        var e = yd(!1),
          t = e[0];
        return (e = Wg.bind(null, e[1])), (cn().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var o = He,
          i = cn();
        if (ze) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), rt === null)) throw Error(s(349));
          (Cr & 30) !== 0 || md(o, t, n);
        }
        i.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (i.queue = u),
          wd(hd.bind(null, o, u, e), [e]),
          (o.flags |= 2048),
          na(9, pd.bind(null, o, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = cn(),
          t = rt.identifierPrefix;
        if (ze) {
          var n = Nn,
            o = Sn;
          (n = (o & ~(1 << (32 - Xt(o) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ea++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Vg++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Gg = {
      readContext: Ut,
      useCallback: _d,
      useContext: Ut,
      useEffect: fl,
      useImperativeHandle: Nd,
      useInsertionEffect: kd,
      useLayoutEffect: bd,
      useMemo: Cd,
      useReducer: ul,
      useRef: xd,
      useState: function () {
        return ul(ta);
      },
      useDebugValue: ml,
      useDeferredValue: function (e) {
        var t = Kt();
        return Ed(t, Xe.memoizedState, e);
      },
      useTransition: function () {
        var e = ul(ta)[0],
          t = Kt().memoizedState;
        return [e, t];
      },
      useMutableSource: dd,
      useSyncExternalStore: fd,
      useId: jd,
      unstable_isNewReconciler: !1,
    },
    Xg = {
      readContext: Ut,
      useCallback: _d,
      useContext: Ut,
      useEffect: fl,
      useImperativeHandle: Nd,
      useInsertionEffect: kd,
      useLayoutEffect: bd,
      useMemo: Cd,
      useReducer: dl,
      useRef: xd,
      useState: function () {
        return dl(ta);
      },
      useDebugValue: ml,
      useDeferredValue: function (e) {
        var t = Kt();
        return Xe === null ? (t.memoizedState = e) : Ed(t, Xe.memoizedState, e);
      },
      useTransition: function () {
        var e = dl(ta)[0],
          t = Kt().memoizedState;
        return [e, t];
      },
      useMutableSource: dd,
      useSyncExternalStore: fd,
      useId: jd,
      unstable_isNewReconciler: !1,
    };
  function Zt(e, t) {
    if (e && e.defaultProps) {
      (t = G({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function pl(e, t, n, o) {
    (t = e.memoizedState),
      (n = n(o, t)),
      (n = n == null ? t : G({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ms = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? xr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var o = vt(),
        i = or(e),
        u = Cn(o, i);
      (u.payload = t),
        n != null && (u.callback = n),
        (t = er(e, u, i)),
        t !== null && (tn(t, e, i, o), as(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var o = vt(),
        i = or(e),
        u = Cn(o, i);
      (u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = er(e, u, i)),
        t !== null && (tn(t, e, i, o), as(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = vt(),
        o = or(e),
        i = Cn(n, o);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = er(e, i, o)),
        t !== null && (tn(t, e, o, n), as(t, e, o));
    },
  };
  function Md(e, t, n, o, i, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, h)
        : t.prototype && t.prototype.isPureReactComponent
        ? !$o(n, o) || !$o(i, u)
        : !0
    );
  }
  function Id(e, t, n) {
    var o = !1,
      i = Jn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Ut(u))
        : ((i = xt(t) ? kr : ut.current),
          (o = t.contextTypes),
          (u = (o = o != null) ? Gr(e, i) : Jn)),
      (t = new t(n, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ms),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function Ad(e, t, n, o) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, o),
      t.state !== e && ms.enqueueReplaceState(t, t.state, null);
  }
  function hl(e, t, n, o) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), tl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null
      ? (i.context = Ut(u))
      : ((u = xt(t) ? kr : ut.current), (i.context = Gr(e, u))),
      (i.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (pl(e, t, u, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && ms.enqueueReplaceState(i, i.state, null),
        ss(e, n, i, o),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function no(e, t) {
    try {
      var n = "",
        o = t;
      do (n += he(o)), (o = o.return);
      while (o);
      var i = n;
    } catch (u) {
      i =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function gl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function vl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Qg = typeof WeakMap == "function" ? WeakMap : Map;
  function Od(e, t, n) {
    (n = Cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var o = t.value;
    return (
      (n.callback = function () {
        ws || ((ws = !0), (Ml = o)), vl(e, t);
      }),
      n
    );
  }
  function Ld(e, t, n) {
    (n = Cn(-1, n)), (n.tag = 3);
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var i = t.value;
      (n.payload = function () {
        return o(i);
      }),
        (n.callback = function () {
          vl(e, t);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          vl(e, t),
            typeof o != "function" &&
              (nr === null ? (nr = new Set([this])) : nr.add(this));
          var h = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: h !== null ? h : "",
          });
        }),
      n
    );
  }
  function Dd(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Qg();
      var i = new Set();
      o.set(t, i);
    } else (i = o.get(t)), i === void 0 && ((i = new Set()), o.set(t, i));
    i.has(n) || (i.add(n), (e = uv.bind(null, e, t, n)), t.then(e, e));
  }
  function zd(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fd(e, t, n, o, i) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Cn(-1, 1)), (t.tag = 2), er(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = i), e);
  }
  var Jg = D.ReactCurrentOwner,
    wt = !1;
  function gt(e, t, n, o) {
    t.child = e === null ? ad(t, null, n, o) : Zr(t, e.child, n, o);
  }
  function Hd(e, t, n, o, i) {
    n = n.render;
    var u = t.ref;
    return (
      eo(t, i),
      (o = ll(e, t, n, o, u, i)),
      (n = cl()),
      e !== null && !wt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          En(e, t, i))
        : (ze && n && Ui(t), (t.flags |= 1), gt(e, t, o, i), t.child)
    );
  }
  function Bd(e, t, n, o, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !Fl(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), $d(e, t, u, o, i))
        : ((e = Cs(n.type, null, o, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), (e.lanes & i) === 0)) {
      var h = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : $o), n(h, o) && e.ref === t.ref)
      )
        return En(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = sr(u, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function $d(e, t, n, o, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if ($o(u, o) && e.ref === t.ref)
        if (((wt = !1), (t.pendingProps = o = u), (e.lanes & i) !== 0))
          (e.flags & 131072) !== 0 && (wt = !0);
        else return (t.lanes = e.lanes), En(e, t, i);
    }
    return yl(e, t, n, o, i);
  }
  function Vd(e, t, n) {
    var o = t.pendingProps,
      i = o.children,
      u = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ae(oo, Ot),
          (Ot |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ae(oo, Ot),
            (Ot |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = u !== null ? u.baseLanes : n),
          Ae(oo, Ot),
          (Ot |= o);
      }
    else
      u !== null ? ((o = u.baseLanes | n), (t.memoizedState = null)) : (o = n),
        Ae(oo, Ot),
        (Ot |= o);
    return gt(e, t, i, n), t.child;
  }
  function Wd(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function yl(e, t, n, o, i) {
    var u = xt(n) ? kr : ut.current;
    return (
      (u = Gr(t, u)),
      eo(t, i),
      (n = ll(e, t, n, o, u, i)),
      (o = cl()),
      e !== null && !wt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          En(e, t, i))
        : (ze && o && Ui(t), (t.flags |= 1), gt(e, t, n, i), t.child)
    );
  }
  function Ud(e, t, n, o, i) {
    if (xt(n)) {
      var u = !0;
      Ja(t);
    } else u = !1;
    if ((eo(t, i), t.stateNode === null))
      hs(e, t), Id(t, n, o), hl(t, n, o, i), (o = !0);
    else if (e === null) {
      var h = t.stateNode,
        k = t.memoizedProps;
      h.props = k;
      var _ = h.context,
        L = n.contextType;
      typeof L == "object" && L !== null
        ? (L = Ut(L))
        : ((L = xt(n) ? kr : ut.current), (L = Gr(t, L)));
      var V = n.getDerivedStateFromProps,
        K =
          typeof V == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function";
      K ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((k !== o || _ !== L) && Ad(t, h, o, L)),
        (qn = !1);
      var $ = t.memoizedState;
      (h.state = $),
        ss(t, o, h, i),
        (_ = t.memoizedState),
        k !== o || $ !== _ || yt.current || qn
          ? (typeof V == "function" && (pl(t, n, V, o), (_ = t.memoizedState)),
            (k = qn || Md(t, n, k, o, $, _, L))
              ? (K ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = _)),
            (h.props = o),
            (h.state = _),
            (h.context = L),
            (o = k))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            (o = !1));
    } else {
      (h = t.stateNode),
        id(e, t),
        (k = t.memoizedProps),
        (L = t.type === t.elementType ? k : Zt(t.type, k)),
        (h.props = L),
        (K = t.pendingProps),
        ($ = h.context),
        (_ = n.contextType),
        typeof _ == "object" && _ !== null
          ? (_ = Ut(_))
          : ((_ = xt(n) ? kr : ut.current), (_ = Gr(t, _)));
      var te = n.getDerivedStateFromProps;
      (V =
        typeof te == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((k !== K || $ !== _) && Ad(t, h, o, _)),
        (qn = !1),
        ($ = t.memoizedState),
        (h.state = $),
        ss(t, o, h, i);
      var oe = t.memoizedState;
      k !== K || $ !== oe || yt.current || qn
        ? (typeof te == "function" && (pl(t, n, te, o), (oe = t.memoizedState)),
          (L = qn || Md(t, n, L, o, $, oe, _) || !1)
            ? (V ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(o, oe, _),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, oe, _)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (k === e.memoizedProps && $ === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (k === e.memoizedProps && $ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = oe)),
          (h.props = o),
          (h.state = oe),
          (h.context = _),
          (o = L))
        : (typeof h.componentDidUpdate != "function" ||
            (k === e.memoizedProps && $ === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (k === e.memoizedProps && $ === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return xl(e, t, n, o, u, i);
  }
  function xl(e, t, n, o, i, u) {
    Wd(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return i && Qu(t, n, !1), En(e, t, u);
    (o = t.stateNode), (Jg.current = t);
    var k =
      h && typeof n.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = Zr(t, e.child, null, u)), (t.child = Zr(t, null, k, u)))
        : gt(e, t, k, u),
      (t.memoizedState = o.state),
      i && Qu(t, n, !0),
      t.child
    );
  }
  function Kd(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Gu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Gu(e, t.context, !1),
      nl(e, t.containerInfo);
  }
  function Yd(e, t, n, o, i) {
    return Jr(), Xi(i), (t.flags |= 256), gt(e, t, n, o), t.child;
  }
  var wl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function kl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gd(e, t, n) {
    var o = t.pendingProps,
      i = Fe.current,
      u = !1,
      h = (t.flags & 128) !== 0,
      k;
    if (
      ((k = h) ||
        (k = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      k
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      Ae(Fe, i & 1),
      e === null)
    )
      return (
        Gi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((h = o.children),
            (e = o.fallback),
            u
              ? ((o = t.mode),
                (u = t.child),
                (h = { mode: "hidden", children: h }),
                (o & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = h))
                  : (u = Es(h, o, 0, null)),
                (e = Rr(e, o, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = kl(n)),
                (t.memoizedState = wl),
                e)
              : bl(t, h))
      );
    if (((i = e.memoizedState), i !== null && ((k = i.dehydrated), k !== null)))
      return Zg(e, t, h, o, k, i, n);
    if (u) {
      (u = o.fallback), (h = t.mode), (i = e.child), (k = i.sibling);
      var _ = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== i
          ? ((o = t.child),
            (o.childLanes = 0),
            (o.pendingProps = _),
            (t.deletions = null))
          : ((o = sr(i, _)), (o.subtreeFlags = i.subtreeFlags & 14680064)),
        k !== null ? (u = sr(k, u)) : ((u = Rr(u, h, n, null)), (u.flags |= 2)),
        (u.return = t),
        (o.return = t),
        (o.sibling = u),
        (t.child = o),
        (o = u),
        (u = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? kl(n)
            : {
                baseLanes: h.baseLanes | n,
                cachePool: null,
                transitions: h.transitions,
              }),
        (u.memoizedState = h),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = wl),
        o
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (o = sr(u, { mode: "visible", children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = n),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function bl(e, t) {
    return (
      (t = Es({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ps(e, t, n, o) {
    return (
      o !== null && Xi(o),
      Zr(t, e.child, null, n),
      (e = bl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Zg(e, t, n, o, i, u, h) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (o = gl(Error(s(422)))), ps(e, t, h, o))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = o.fallback),
          (i = t.mode),
          (o = Es({ mode: "visible", children: o.children }, i, 0, null)),
          (u = Rr(u, i, h, null)),
          (u.flags |= 2),
          (o.return = t),
          (u.return = t),
          (o.sibling = u),
          (t.child = o),
          (t.mode & 1) !== 0 && Zr(t, e.child, null, h),
          (t.child.memoizedState = kl(h)),
          (t.memoizedState = wl),
          u);
    if ((t.mode & 1) === 0) return ps(e, t, h, null);
    if (i.data === "$!") {
      if (((o = i.nextSibling && i.nextSibling.dataset), o)) var k = o.dgst;
      return (
        (o = k), (u = Error(s(419))), (o = gl(u, o, void 0)), ps(e, t, h, o)
      );
    }
    if (((k = (h & e.childLanes) !== 0), wt || k)) {
      if (((o = rt), o !== null)) {
        switch (h & -h) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = (i & (o.suspendedLanes | h)) !== 0 ? 0 : i),
          i !== 0 &&
            i !== u.retryLane &&
            ((u.retryLane = i), _n(e, i), tn(o, e, i, -1));
      }
      return zl(), (o = gl(Error(s(421)))), ps(e, t, h, o);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = dv.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (At = Xn(i.nextSibling)),
        (It = t),
        (ze = !0),
        (Jt = null),
        e !== null &&
          ((Vt[Wt++] = Sn),
          (Vt[Wt++] = Nn),
          (Vt[Wt++] = br),
          (Sn = e.id),
          (Nn = e.overflow),
          (br = t)),
        (t = bl(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Xd(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), qi(e.return, t, n);
  }
  function Sl(e, t, n, o, i) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: n,
          tailMode: i,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = o),
        (u.tail = n),
        (u.tailMode = i));
  }
  function Qd(e, t, n) {
    var o = t.pendingProps,
      i = o.revealOrder,
      u = o.tail;
    if ((gt(e, t, o.children, n), (o = Fe.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xd(e, n, t);
          else if (e.tag === 19) Xd(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    if ((Ae(Fe, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && is(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Sl(t, !1, i, n, u);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && is(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          Sl(t, !0, n, null, u);
          break;
        case "together":
          Sl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function hs(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function En(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Er |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = sr(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = sr(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function qg(e, t, n) {
    switch (t.tag) {
      case 3:
        Kd(t), Jr();
        break;
      case 5:
        ud(t);
        break;
      case 1:
        xt(t.type) && Ja(t);
        break;
      case 4:
        nl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          i = t.memoizedProps.value;
        Ae(rs, o._currentValue), (o._currentValue = i);
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (Ae(Fe, Fe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? Gd(e, t, n)
            : (Ae(Fe, Fe.current & 1),
              (e = En(e, t, n)),
              e !== null ? e.sibling : null);
        Ae(Fe, Fe.current & 1);
        break;
      case 19:
        if (((o = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Qd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          Ae(Fe, Fe.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Vd(e, t, n);
    }
    return En(e, t, n);
  }
  var Jd, Nl, Zd, qd;
  (Jd = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Nl = function () {}),
    (Zd = function (e, t, n, o) {
      var i = e.memoizedProps;
      if (i !== o) {
        (e = t.stateNode), _r(ln.current);
        var u = null;
        switch (n) {
          case "input":
            (i = ht(e, i)), (o = ht(e, o)), (u = []);
            break;
          case "select":
            (i = G({}, i, { value: void 0 })),
              (o = G({}, o, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (i = at(e, i)), (o = at(e, o)), (u = []);
            break;
          default:
            typeof i.onClick != "function" &&
              typeof o.onClick == "function" &&
              (e.onclick = Ga);
        }
        zr(n, o);
        var h;
        n = null;
        for (L in i)
          if (!o.hasOwnProperty(L) && i.hasOwnProperty(L) && i[L] != null)
            if (L === "style") {
              var k = i[L];
              for (h in k) k.hasOwnProperty(h) && (n || (n = {}), (n[h] = ""));
            } else
              L !== "dangerouslySetInnerHTML" &&
                L !== "children" &&
                L !== "suppressContentEditableWarning" &&
                L !== "suppressHydrationWarning" &&
                L !== "autoFocus" &&
                (d.hasOwnProperty(L)
                  ? u || (u = [])
                  : (u = u || []).push(L, null));
        for (L in o) {
          var _ = o[L];
          if (
            ((k = i?.[L]),
            o.hasOwnProperty(L) && _ !== k && (_ != null || k != null))
          )
            if (L === "style")
              if (k) {
                for (h in k)
                  !k.hasOwnProperty(h) ||
                    (_ && _.hasOwnProperty(h)) ||
                    (n || (n = {}), (n[h] = ""));
                for (h in _)
                  _.hasOwnProperty(h) &&
                    k[h] !== _[h] &&
                    (n || (n = {}), (n[h] = _[h]));
              } else n || (u || (u = []), u.push(L, n)), (n = _);
            else
              L === "dangerouslySetInnerHTML"
                ? ((_ = _ ? _.__html : void 0),
                  (k = k ? k.__html : void 0),
                  _ != null && k !== _ && (u = u || []).push(L, _))
                : L === "children"
                ? (typeof _ != "string" && typeof _ != "number") ||
                  (u = u || []).push(L, "" + _)
                : L !== "suppressContentEditableWarning" &&
                  L !== "suppressHydrationWarning" &&
                  (d.hasOwnProperty(L)
                    ? (_ != null && L === "onScroll" && Le("scroll", e),
                      u || k === _ || (u = []))
                    : (u = u || []).push(L, _));
        }
        n && (u = u || []).push("style", n);
        var L = u;
        (t.updateQueue = L) && (t.flags |= 4);
      }
    }),
    (qd = function (e, t, n, o) {
      n !== o && (t.flags |= 4);
    });
  function ra(e, t) {
    if (!ze)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var o = null; n !== null; )
            n.alternate !== null && (o = n), (n = n.sibling);
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      o = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (o |= i.subtreeFlags & 14680064),
          (o |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (o |= i.subtreeFlags),
          (o |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = n), t;
  }
  function ev(e, t, n) {
    var o = t.pendingProps;
    switch ((Ki(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ft(t), null;
      case 1:
        return xt(t.type) && Qa(), ft(t), null;
      case 3:
        return (
          (o = t.stateNode),
          to(),
          De(yt),
          De(ut),
          al(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (ts(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Jt !== null && (Ol(Jt), (Jt = null)))),
          Nl(e, t),
          ft(t),
          null
        );
      case 5:
        rl(t);
        var i = _r(Zo.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Zd(e, t, n, o, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return ft(t), null;
          }
          if (((e = _r(ln.current)), ts(t))) {
            (o = t.stateNode), (n = t.type);
            var u = t.memoizedProps;
            switch (((o[sn] = t), (o[Yo] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Le("cancel", o), Le("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", o);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Wo.length; i++) Le(Wo[i], o);
                break;
              case "source":
                Le("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Le("error", o), Le("load", o);
                break;
              case "details":
                Le("toggle", o);
                break;
              case "input":
                On(o, u), Le("invalid", o);
                break;
              case "select":
                (o._wrapperState = { wasMultiple: !!u.multiple }),
                  Le("invalid", o);
                break;
              case "textarea":
                xn(o, u), Le("invalid", o);
            }
            zr(n, u), (i = null);
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var k = u[h];
                h === "children"
                  ? typeof k == "string"
                    ? o.textContent !== k &&
                      (u.suppressHydrationWarning !== !0 &&
                        Ya(o.textContent, k, e),
                      (i = ["children", k]))
                    : typeof k == "number" &&
                      o.textContent !== "" + k &&
                      (u.suppressHydrationWarning !== !0 &&
                        Ya(o.textContent, k, e),
                      (i = ["children", "" + k]))
                  : d.hasOwnProperty(h) &&
                    k != null &&
                    h === "onScroll" &&
                    Le("scroll", o);
              }
            switch (n) {
              case "input":
                Ce(o), No(o, u, !0);
                break;
              case "textarea":
                Ce(o), _a(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (o.onclick = Ga);
            }
            (o = i), (t.updateQueue = o), o !== null && (t.flags |= 4);
          } else {
            (h = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = gr(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == "string"
                  ? (e = h.createElement(n, { is: o.is }))
                  : ((e = h.createElement(n)),
                    n === "select" &&
                      ((h = e),
                      o.multiple
                        ? (h.multiple = !0)
                        : o.size && (h.size = o.size)))
                : (e = h.createElementNS(e, n)),
              (e[sn] = t),
              (e[Yo] = o),
              Jd(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((h = Co(n, o)), n)) {
                case "dialog":
                  Le("cancel", e), Le("close", e), (i = o);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", e), (i = o);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Wo.length; i++) Le(Wo[i], e);
                  i = o;
                  break;
                case "source":
                  Le("error", e), (i = o);
                  break;
                case "img":
                case "image":
                case "link":
                  Le("error", e), Le("load", e), (i = o);
                  break;
                case "details":
                  Le("toggle", e), (i = o);
                  break;
                case "input":
                  On(e, o), (i = ht(e, o)), Le("invalid", e);
                  break;
                case "option":
                  i = o;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!o.multiple }),
                    (i = G({}, o, { value: void 0 })),
                    Le("invalid", e);
                  break;
                case "textarea":
                  xn(e, o), (i = at(e, o)), Le("invalid", e);
                  break;
                default:
                  i = o;
              }
              zr(n, i), (k = i);
              for (u in k)
                if (k.hasOwnProperty(u)) {
                  var _ = k[u];
                  u === "style"
                    ? Ea(e, _)
                    : u === "dangerouslySetInnerHTML"
                    ? ((_ = _ ? _.__html : void 0), _ != null && Dr(e, _))
                    : u === "children"
                    ? typeof _ == "string"
                      ? (n !== "textarea" || _ !== "") && Ht(e, _)
                      : typeof _ == "number" && Ht(e, "" + _)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (d.hasOwnProperty(u)
                        ? _ != null && u === "onScroll" && Le("scroll", e)
                        : _ != null && j(e, u, _, h));
                }
              switch (n) {
                case "input":
                  Ce(e), No(e, o, !1);
                  break;
                case "textarea":
                  Ce(e), _a(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + le(o.value));
                  break;
                case "select":
                  (e.multiple = !!o.multiple),
                    (u = o.value),
                    u != null
                      ? Ln(e, !!o.multiple, u, !1)
                      : o.defaultValue != null &&
                        Ln(e, !!o.multiple, o.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Ga);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return ft(t), null;
      case 6:
        if (e && t.stateNode != null) qd(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((n = _r(Zo.current)), _r(ln.current), ts(t))) {
            if (
              ((o = t.stateNode),
              (n = t.memoizedProps),
              (o[sn] = t),
              (u = o.nodeValue !== n) && ((e = It), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ya(o.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ya(o.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            (o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o)),
              (o[sn] = t),
              (t.stateNode = o);
        }
        return ft(t), null;
      case 13:
        if (
          (De(Fe),
          (o = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ze && At !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            nd(), Jr(), (t.flags |= 98560), (u = !1);
          else if (((u = ts(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[sn] = t;
            } else
              Jr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ft(t), (u = !1);
          } else Jt !== null && (Ol(Jt), (Jt = null)), (u = !0);
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Fe.current & 1) !== 0
                  ? Qe === 0 && (Qe = 3)
                  : zl())),
            t.updateQueue !== null && (t.flags |= 4),
            ft(t),
            null);
      case 4:
        return (
          to(),
          Nl(e, t),
          e === null && Uo(t.stateNode.containerInfo),
          ft(t),
          null
        );
      case 10:
        return Zi(t.type._context), ft(t), null;
      case 17:
        return xt(t.type) && Qa(), ft(t), null;
      case 19:
        if ((De(Fe), (u = t.memoizedState), u === null)) return ft(t), null;
        if (((o = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (o) ra(u, !1);
          else {
            if (Qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((h = is(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      ra(u, !1),
                      o = h.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = n,
                      n = t.child;
                    n !== null;

                  )
                    (u = n),
                      (e = o),
                      (u.flags &= 14680066),
                      (h = u.alternate),
                      h === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = h.childLanes),
                          (u.lanes = h.lanes),
                          (u.child = h.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = h.memoizedProps),
                          (u.memoizedState = h.memoizedState),
                          (u.updateQueue = h.updateQueue),
                          (u.type = h.type),
                          (e = h.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Ae(Fe, (Fe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Ve() > ao &&
              ((t.flags |= 128), (o = !0), ra(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = is(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                ra(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !h.alternate &&
                  !ze)
              )
                return ft(t), null;
            } else
              2 * Ve() - u.renderingStartTime > ao &&
                n !== 1073741824 &&
                ((t.flags |= 128), (o = !0), ra(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((n = u.last),
              n !== null ? (n.sibling = h) : (t.child = h),
              (u.last = h));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Ve()),
            (t.sibling = null),
            (n = Fe.current),
            Ae(Fe, o ? (n & 1) | 2 : n & 1),
            t)
          : (ft(t), null);
      case 22:
      case 23:
        return (
          Dl(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (Ot & 1073741824) !== 0 &&
              (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ft(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function tv(e, t) {
    switch ((Ki(t), t.tag)) {
      case 1:
        return (
          xt(t.type) && Qa(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          to(),
          De(yt),
          De(ut),
          al(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return rl(t), null;
      case 13:
        if (
          (De(Fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Jr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return De(Fe), null;
      case 4:
        return to(), null;
      case 10:
        return Zi(t.type._context), null;
      case 22:
      case 23:
        return Dl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var gs = !1,
    mt = !1,
    nv = typeof WeakSet == "function" ? WeakSet : Set,
    re = null;
  function ro(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Be(e, t, o);
        }
      else n.current = null;
  }
  function _l(e, t, n) {
    try {
      n();
    } catch (o) {
      Be(e, t, o);
    }
  }
  var ef = !1;
  function rv(e, t) {
    if (((Di = La), (e = Mu()), Ti(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var o = n.getSelection && n.getSelection();
          if (o && o.rangeCount !== 0) {
            n = o.anchorNode;
            var i = o.anchorOffset,
              u = o.focusNode;
            o = o.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var h = 0,
              k = -1,
              _ = -1,
              L = 0,
              V = 0,
              K = e,
              $ = null;
            t: for (;;) {
              for (
                var te;
                K !== n || (i !== 0 && K.nodeType !== 3) || (k = h + i),
                  K !== u || (o !== 0 && K.nodeType !== 3) || (_ = h + o),
                  K.nodeType === 3 && (h += K.nodeValue.length),
                  (te = K.firstChild) !== null;

              )
                ($ = K), (K = te);
              for (;;) {
                if (K === e) break t;
                if (
                  ($ === n && ++L === i && (k = h),
                  $ === u && ++V === o && (_ = h),
                  (te = K.nextSibling) !== null)
                )
                  break;
                (K = $), ($ = K.parentNode);
              }
              K = te;
            }
            n = k === -1 || _ === -1 ? null : { start: k, end: _ };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      zi = { focusedElem: e, selectionRange: n }, La = !1, re = t;
      re !== null;

    )
      if (
        ((t = re), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (re = e);
      else
        for (; re !== null; ) {
          t = re;
          try {
            var oe = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (oe !== null) {
                    var ce = oe.memoizedProps,
                      We = oe.memoizedState,
                      M = t.stateNode,
                      T = M.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ce : Zt(t.type, ce),
                        We
                      );
                    M.__reactInternalSnapshotBeforeUpdate = T;
                  }
                  break;
                case 3:
                  var A = t.stateNode.containerInfo;
                  A.nodeType === 1
                    ? (A.textContent = "")
                    : A.nodeType === 9 &&
                      A.documentElement &&
                      A.removeChild(A.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (X) {
            Be(t, t.return, X);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (re = e);
            break;
          }
          re = t.return;
        }
    return (oe = ef), (ef = !1), oe;
  }
  function oa(e, t, n) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var i = (o = o.next);
      do {
        if ((i.tag & e) === e) {
          var u = i.destroy;
          (i.destroy = void 0), u !== void 0 && _l(t, n, u);
        }
        i = i.next;
      } while (i !== o);
    }
  }
  function vs(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var o = n.create;
          n.destroy = o();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Cl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function tf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), tf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[sn],
          delete t[Yo],
          delete t[$i],
          delete t[Fg],
          delete t[Hg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function nf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function rf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || nf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function El(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Ga));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (El(e, t, n), e = e.sibling; e !== null; )
        El(e, t, n), (e = e.sibling);
  }
  function jl(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && ((e = e.child), e !== null))
      for (jl(e, t, n), e = e.sibling; e !== null; )
        jl(e, t, n), (e = e.sibling);
  }
  var it = null,
    qt = !1;
  function tr(e, t, n) {
    for (n = n.child; n !== null; ) of(e, t, n), (n = n.sibling);
  }
  function of(e, t, n) {
    if (an && typeof an.onCommitFiberUnmount == "function")
      try {
        an.onCommitFiberUnmount(Pa, n);
      } catch {}
    switch (n.tag) {
      case 5:
        mt || ro(n, t);
      case 6:
        var o = it,
          i = qt;
        (it = null),
          tr(e, t, n),
          (it = o),
          (qt = i),
          it !== null &&
            (qt
              ? ((e = it),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : it.removeChild(n.stateNode));
        break;
      case 18:
        it !== null &&
          (qt
            ? ((e = it),
              (n = n.stateNode),
              e.nodeType === 8
                ? Bi(e.parentNode, n)
                : e.nodeType === 1 && Bi(e, n),
              Lo(e))
            : Bi(it, n.stateNode));
        break;
      case 4:
        (o = it),
          (i = qt),
          (it = n.stateNode.containerInfo),
          (qt = !0),
          tr(e, t, n),
          (it = o),
          (qt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !mt &&
          ((o = n.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
        ) {
          i = o = o.next;
          do {
            var u = i,
              h = u.destroy;
            (u = u.tag),
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && _l(n, t, h),
              (i = i.next);
          } while (i !== o);
        }
        tr(e, t, n);
        break;
      case 1:
        if (
          !mt &&
          (ro(n, t),
          (o = n.stateNode),
          typeof o.componentWillUnmount == "function")
        )
          try {
            (o.props = n.memoizedProps),
              (o.state = n.memoizedState),
              o.componentWillUnmount();
          } catch (k) {
            Be(n, t, k);
          }
        tr(e, t, n);
        break;
      case 21:
        tr(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((mt = (o = mt) || n.memoizedState !== null), tr(e, t, n), (mt = o))
          : tr(e, t, n);
        break;
      default:
        tr(e, t, n);
    }
  }
  function af(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new nv()),
        t.forEach(function (o) {
          var i = fv.bind(null, e, o);
          n.has(o) || (n.add(o), o.then(i, i));
        });
    }
  }
  function en(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var o = 0; o < n.length; o++) {
        var i = n[o];
        try {
          var u = e,
            h = t,
            k = h;
          e: for (; k !== null; ) {
            switch (k.tag) {
              case 5:
                (it = k.stateNode), (qt = !1);
                break e;
              case 3:
                (it = k.stateNode.containerInfo), (qt = !0);
                break e;
              case 4:
                (it = k.stateNode.containerInfo), (qt = !0);
                break e;
            }
            k = k.return;
          }
          if (it === null) throw Error(s(160));
          of(u, h, i), (it = null), (qt = !1);
          var _ = i.alternate;
          _ !== null && (_.return = null), (i.return = null);
        } catch (L) {
          Be(i, t, L);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) sf(t, e), (t = t.sibling);
  }
  function sf(e, t) {
    var n = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((en(t, e), un(e), o & 4)) {
          try {
            oa(3, e, e.return), vs(3, e);
          } catch (ce) {
            Be(e, e.return, ce);
          }
          try {
            oa(5, e, e.return);
          } catch (ce) {
            Be(e, e.return, ce);
          }
        }
        break;
      case 1:
        en(t, e), un(e), o & 512 && n !== null && ro(n, n.return);
        break;
      case 5:
        if (
          (en(t, e),
          un(e),
          o & 512 && n !== null && ro(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Ht(i, "");
          } catch (ce) {
            Be(e, e.return, ce);
          }
        }
        if (o & 4 && ((i = e.stateNode), i != null)) {
          var u = e.memoizedProps,
            h = n !== null ? n.memoizedProps : u,
            k = e.type,
            _ = e.updateQueue;
          if (((e.updateQueue = null), _ !== null))
            try {
              k === "input" && u.type === "radio" && u.name != null && yn(i, u),
                Co(k, h);
              var L = Co(k, u);
              for (h = 0; h < _.length; h += 2) {
                var V = _[h],
                  K = _[h + 1];
                V === "style"
                  ? Ea(i, K)
                  : V === "dangerouslySetInnerHTML"
                  ? Dr(i, K)
                  : V === "children"
                  ? Ht(i, K)
                  : j(i, V, K, L);
              }
              switch (k) {
                case "input":
                  Tt(i, u);
                  break;
                case "textarea":
                  Na(i, u);
                  break;
                case "select":
                  var $ = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!u.multiple;
                  var te = u.value;
                  te != null
                    ? Ln(i, !!u.multiple, te, !1)
                    : $ !== !!u.multiple &&
                      (u.defaultValue != null
                        ? Ln(i, !!u.multiple, u.defaultValue, !0)
                        : Ln(i, !!u.multiple, u.multiple ? [] : "", !1));
              }
              i[Yo] = u;
            } catch (ce) {
              Be(e, e.return, ce);
            }
        }
        break;
      case 6:
        if ((en(t, e), un(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (i = e.stateNode), (u = e.memoizedProps);
          try {
            i.nodeValue = u;
          } catch (ce) {
            Be(e, e.return, ce);
          }
        }
        break;
      case 3:
        if (
          (en(t, e), un(e), o & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Lo(t.containerInfo);
          } catch (ce) {
            Be(e, e.return, ce);
          }
        break;
      case 4:
        en(t, e), un(e);
        break;
      case 13:
        en(t, e),
          un(e),
          (i = e.child),
          i.flags & 8192 &&
            ((u = i.memoizedState !== null),
            (i.stateNode.isHidden = u),
            !u ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (Rl = Ve())),
          o & 4 && af(e);
        break;
      case 22:
        if (
          ((V = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((mt = (L = mt) || V), en(t, e), (mt = L)) : en(t, e),
          un(e),
          o & 8192)
        ) {
          if (
            ((L = e.memoizedState !== null),
            (e.stateNode.isHidden = L) && !V && (e.mode & 1) !== 0)
          )
            for (re = e, V = e.child; V !== null; ) {
              for (K = re = V; re !== null; ) {
                switch ((($ = re), (te = $.child), $.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    oa(4, $, $.return);
                    break;
                  case 1:
                    ro($, $.return);
                    var oe = $.stateNode;
                    if (typeof oe.componentWillUnmount == "function") {
                      (o = $), (n = $.return);
                      try {
                        (t = o),
                          (oe.props = t.memoizedProps),
                          (oe.state = t.memoizedState),
                          oe.componentWillUnmount();
                      } catch (ce) {
                        Be(o, n, ce);
                      }
                    }
                    break;
                  case 5:
                    ro($, $.return);
                    break;
                  case 22:
                    if ($.memoizedState !== null) {
                      uf(K);
                      continue;
                    }
                }
                te !== null ? ((te.return = $), (re = te)) : uf(K);
              }
              V = V.sibling;
            }
          e: for (V = null, K = e; ; ) {
            if (K.tag === 5) {
              if (V === null) {
                V = K;
                try {
                  (i = K.stateNode),
                    L
                      ? ((u = i.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((k = K.stateNode),
                        (_ = K.memoizedProps.style),
                        (h =
                          _ != null && _.hasOwnProperty("display")
                            ? _.display
                            : null),
                        (k.style.display = Ca("display", h)));
                } catch (ce) {
                  Be(e, e.return, ce);
                }
              }
            } else if (K.tag === 6) {
              if (V === null)
                try {
                  K.stateNode.nodeValue = L ? "" : K.memoizedProps;
                } catch (ce) {
                  Be(e, e.return, ce);
                }
            } else if (
              ((K.tag !== 22 && K.tag !== 23) ||
                K.memoizedState === null ||
                K === e) &&
              K.child !== null
            ) {
              (K.child.return = K), (K = K.child);
              continue;
            }
            if (K === e) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === e) break e;
              V === K && (V = null), (K = K.return);
            }
            V === K && (V = null),
              (K.sibling.return = K.return),
              (K = K.sibling);
          }
        }
        break;
      case 19:
        en(t, e), un(e), o & 4 && af(e);
        break;
      case 21:
        break;
      default:
        en(t, e), un(e);
    }
  }
  function un(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (nf(n)) {
              var o = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (o.tag) {
          case 5:
            var i = o.stateNode;
            o.flags & 32 && (Ht(i, ""), (o.flags &= -33));
            var u = rf(e);
            jl(e, u, i);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              k = rf(e);
            El(e, k, h);
            break;
          default:
            throw Error(s(161));
        }
      } catch (_) {
        Be(e, e.return, _);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ov(e, t, n) {
    (re = e), lf(e);
  }
  function lf(e, t, n) {
    for (var o = (e.mode & 1) !== 0; re !== null; ) {
      var i = re,
        u = i.child;
      if (i.tag === 22 && o) {
        var h = i.memoizedState !== null || gs;
        if (!h) {
          var k = i.alternate,
            _ = (k !== null && k.memoizedState !== null) || mt;
          k = gs;
          var L = mt;
          if (((gs = h), (mt = _) && !L))
            for (re = i; re !== null; )
              (h = re),
                (_ = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? df(i)
                  : _ !== null
                  ? ((_.return = h), (re = _))
                  : df(i);
          for (; u !== null; ) (re = u), lf(u), (u = u.sibling);
          (re = i), (gs = k), (mt = L);
        }
        cf(e);
      } else
        (i.subtreeFlags & 8772) !== 0 && u !== null
          ? ((u.return = i), (re = u))
          : cf(e);
    }
  }
  function cf(e) {
    for (; re !== null; ) {
      var t = re;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                mt || vs(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !mt)
                  if (n === null) o.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Zt(t.type, n.memoizedProps);
                    o.componentDidUpdate(
                      i,
                      n.memoizedState,
                      o.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = t.updateQueue;
                u !== null && cd(t, u, o);
                break;
              case 3:
                var h = t.updateQueue;
                if (h !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  cd(t, h, n);
                }
                break;
              case 5:
                var k = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = k;
                  var _ = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      _.autoFocus && n.focus();
                      break;
                    case "img":
                      _.src && (n.src = _.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var L = t.alternate;
                  if (L !== null) {
                    var V = L.memoizedState;
                    if (V !== null) {
                      var K = V.dehydrated;
                      K !== null && Lo(K);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          mt || (t.flags & 512 && Cl(t));
        } catch ($) {
          Be(t, t.return, $);
        }
      }
      if (t === e) {
        re = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (re = n);
        break;
      }
      re = t.return;
    }
  }
  function uf(e) {
    for (; re !== null; ) {
      var t = re;
      if (t === e) {
        re = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (re = n);
        break;
      }
      re = t.return;
    }
  }
  function df(e) {
    for (; re !== null; ) {
      var t = re;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              vs(4, t);
            } catch (_) {
              Be(t, n, _);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var i = t.return;
              try {
                o.componentDidMount();
              } catch (_) {
                Be(t, i, _);
              }
            }
            var u = t.return;
            try {
              Cl(t);
            } catch (_) {
              Be(t, u, _);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Cl(t);
            } catch (_) {
              Be(t, h, _);
            }
        }
      } catch (_) {
        Be(t, t.return, _);
      }
      if (t === e) {
        re = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        (k.return = t.return), (re = k);
        break;
      }
      re = t.return;
    }
  }
  var av = Math.ceil,
    ys = D.ReactCurrentDispatcher,
    Tl = D.ReactCurrentOwner,
    Yt = D.ReactCurrentBatchConfig,
    Ee = 0,
    rt = null,
    Ke = null,
    lt = 0,
    Ot = 0,
    oo = Qn(0),
    Qe = 0,
    aa = null,
    Er = 0,
    xs = 0,
    Pl = 0,
    sa = null,
    kt = null,
    Rl = 0,
    ao = 1 / 0,
    jn = null,
    ws = !1,
    Ml = null,
    nr = null,
    ks = !1,
    rr = null,
    bs = 0,
    ia = 0,
    Il = null,
    Ss = -1,
    Ns = 0;
  function vt() {
    return (Ee & 6) !== 0 ? Ve() : Ss !== -1 ? Ss : (Ss = Ve());
  }
  function or(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ee & 2) !== 0 && lt !== 0
      ? lt & -lt
      : $g.transition !== null
      ? (Ns === 0 && (Ns = ru()), Ns)
      : ((e = Pe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fu(e.type))),
        e);
  }
  function tn(e, t, n, o) {
    if (50 < ia) throw ((ia = 0), (Il = null), Error(s(185)));
    Ro(e, n, o),
      ((Ee & 2) === 0 || e !== rt) &&
        (e === rt && ((Ee & 2) === 0 && (xs |= n), Qe === 4 && ar(e, lt)),
        bt(e, o),
        n === 1 &&
          Ee === 0 &&
          (t.mode & 1) === 0 &&
          ((ao = Ve() + 500), Za && Zn()));
  }
  function bt(e, t) {
    var n = e.callbackNode;
    $h(e, t);
    var o = Ia(e, e === rt ? lt : 0);
    if (o === 0)
      n !== null && eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((n != null && eu(n), t === 1))
        e.tag === 0 ? Bg(mf.bind(null, e)) : Ju(mf.bind(null, e)),
          Dg(function () {
            (Ee & 6) === 0 && Zn();
          }),
          (n = null);
      else {
        switch (ou(o)) {
          case 1:
            n = fi;
            break;
          case 4:
            n = tu;
            break;
          case 16:
            n = Ta;
            break;
          case 536870912:
            n = nu;
            break;
          default:
            n = Ta;
        }
        n = kf(n, ff.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function ff(e, t) {
    if (((Ss = -1), (Ns = 0), (Ee & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (so() && e.callbackNode !== n) return null;
    var o = Ia(e, e === rt ? lt : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = _s(e, o);
    else {
      t = o;
      var i = Ee;
      Ee |= 2;
      var u = hf();
      (rt !== e || lt !== t) && ((jn = null), (ao = Ve() + 500), Tr(e, t));
      do
        try {
          lv();
          break;
        } catch (k) {
          pf(e, k);
        }
      while (!0);
      Ji(),
        (ys.current = u),
        (Ee = i),
        Ke !== null ? (t = 0) : ((rt = null), (lt = 0), (t = Qe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = mi(e)), i !== 0 && ((o = i), (t = Al(e, i)))),
        t === 1)
      )
        throw ((n = aa), Tr(e, 0), ar(e, o), bt(e, Ve()), n);
      if (t === 6) ar(e, o);
      else {
        if (
          ((i = e.current.alternate),
          (o & 30) === 0 &&
            !sv(i) &&
            ((t = _s(e, o)),
            t === 2 && ((u = mi(e)), u !== 0 && ((o = u), (t = Al(e, u)))),
            t === 1))
        )
          throw ((n = aa), Tr(e, 0), ar(e, o), bt(e, Ve()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Pr(e, kt, jn);
            break;
          case 3:
            if (
              (ar(e, o),
              (o & 130023424) === o && ((t = Rl + 500 - Ve()), 10 < t))
            ) {
              if (Ia(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & o) !== o)) {
                vt(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Hi(Pr.bind(null, e, kt, jn), t);
              break;
            }
            Pr(e, kt, jn);
            break;
          case 4:
            if ((ar(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, i = -1; 0 < o; ) {
              var h = 31 - Xt(o);
              (u = 1 << h), (h = t[h]), h > i && (i = h), (o &= ~u);
            }
            if (
              ((o = i),
              (o = Ve() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                  ? 480
                  : 1080 > o
                  ? 1080
                  : 1920 > o
                  ? 1920
                  : 3e3 > o
                  ? 3e3
                  : 4320 > o
                  ? 4320
                  : 1960 * av(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Hi(Pr.bind(null, e, kt, jn), o);
              break;
            }
            Pr(e, kt, jn);
            break;
          case 5:
            Pr(e, kt, jn);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return bt(e, Ve()), e.callbackNode === n ? ff.bind(null, e) : null;
  }
  function Al(e, t) {
    var n = sa;
    return (
      e.current.memoizedState.isDehydrated && (Tr(e, t).flags |= 256),
      (e = _s(e, t)),
      e !== 2 && ((t = kt), (kt = n), t !== null && Ol(t)),
      e
    );
  }
  function Ol(e) {
    kt === null ? (kt = e) : kt.push.apply(kt, e);
  }
  function sv(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var o = 0; o < n.length; o++) {
            var i = n[o],
              u = i.getSnapshot;
            i = i.value;
            try {
              if (!Qt(u(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ar(e, t) {
    for (
      t &= ~Pl,
        t &= ~xs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Xt(t),
        o = 1 << n;
      (e[n] = -1), (t &= ~o);
    }
  }
  function mf(e) {
    if ((Ee & 6) !== 0) throw Error(s(327));
    so();
    var t = Ia(e, 0);
    if ((t & 1) === 0) return bt(e, Ve()), null;
    var n = _s(e, t);
    if (e.tag !== 0 && n === 2) {
      var o = mi(e);
      o !== 0 && ((t = o), (n = Al(e, o)));
    }
    if (n === 1) throw ((n = aa), Tr(e, 0), ar(e, t), bt(e, Ve()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Pr(e, kt, jn),
      bt(e, Ve()),
      null
    );
  }
  function Ll(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      (Ee = n), Ee === 0 && ((ao = Ve() + 500), Za && Zn());
    }
  }
  function jr(e) {
    rr !== null && rr.tag === 0 && (Ee & 6) === 0 && so();
    var t = Ee;
    Ee |= 1;
    var n = Yt.transition,
      o = Pe;
    try {
      if (((Yt.transition = null), (Pe = 1), e)) return e();
    } finally {
      (Pe = o), (Yt.transition = n), (Ee = t), (Ee & 6) === 0 && Zn();
    }
  }
  function Dl() {
    (Ot = oo.current), De(oo);
  }
  function Tr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Lg(n)), Ke !== null))
      for (n = Ke.return; n !== null; ) {
        var o = n;
        switch ((Ki(o), o.tag)) {
          case 1:
            (o = o.type.childContextTypes), o != null && Qa();
            break;
          case 3:
            to(), De(yt), De(ut), al();
            break;
          case 5:
            rl(o);
            break;
          case 4:
            to();
            break;
          case 13:
            De(Fe);
            break;
          case 19:
            De(Fe);
            break;
          case 10:
            Zi(o.type._context);
            break;
          case 22:
          case 23:
            Dl();
        }
        n = n.return;
      }
    if (
      ((rt = e),
      (Ke = e = sr(e.current, null)),
      (lt = Ot = t),
      (Qe = 0),
      (aa = null),
      (Pl = xs = Er = 0),
      (kt = sa = null),
      Nr !== null)
    ) {
      for (t = 0; t < Nr.length; t++)
        if (((n = Nr[t]), (o = n.interleaved), o !== null)) {
          n.interleaved = null;
          var i = o.next,
            u = n.pending;
          if (u !== null) {
            var h = u.next;
            (u.next = i), (o.next = h);
          }
          n.pending = o;
        }
      Nr = null;
    }
    return e;
  }
  function pf(e, t) {
    do {
      var n = Ke;
      try {
        if ((Ji(), (ls.current = fs), cs)) {
          for (var o = He.memoizedState; o !== null; ) {
            var i = o.queue;
            i !== null && (i.pending = null), (o = o.next);
          }
          cs = !1;
        }
        if (
          ((Cr = 0),
          (nt = Xe = He = null),
          (qo = !1),
          (ea = 0),
          (Tl.current = null),
          n === null || n.return === null)
        ) {
          (Qe = 1), (aa = t), (Ke = null);
          break;
        }
        e: {
          var u = e,
            h = n.return,
            k = n,
            _ = t;
          if (
            ((t = lt),
            (k.flags |= 32768),
            _ !== null && typeof _ == "object" && typeof _.then == "function")
          ) {
            var L = _,
              V = k,
              K = V.tag;
            if ((V.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var $ = V.alternate;
              $
                ? ((V.updateQueue = $.updateQueue),
                  (V.memoizedState = $.memoizedState),
                  (V.lanes = $.lanes))
                : ((V.updateQueue = null), (V.memoizedState = null));
            }
            var te = zd(h);
            if (te !== null) {
              (te.flags &= -257),
                Fd(te, h, k, u, t),
                te.mode & 1 && Dd(u, L, t),
                (t = te),
                (_ = L);
              var oe = t.updateQueue;
              if (oe === null) {
                var ce = new Set();
                ce.add(_), (t.updateQueue = ce);
              } else oe.add(_);
              break e;
            } else {
              if ((t & 1) === 0) {
                Dd(u, L, t), zl();
                break e;
              }
              _ = Error(s(426));
            }
          } else if (ze && k.mode & 1) {
            var We = zd(h);
            if (We !== null) {
              (We.flags & 65536) === 0 && (We.flags |= 256),
                Fd(We, h, k, u, t),
                Xi(no(_, k));
              break e;
            }
          }
          (u = _ = no(_, k)),
            Qe !== 4 && (Qe = 2),
            sa === null ? (sa = [u]) : sa.push(u),
            (u = h);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var M = Od(u, _, t);
                ld(u, M);
                break e;
              case 1:
                k = _;
                var T = u.type,
                  A = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof T.getDerivedStateFromError == "function" ||
                    (A !== null &&
                      typeof A.componentDidCatch == "function" &&
                      (nr === null || !nr.has(A))))
                ) {
                  (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                  var X = Ld(u, k, t);
                  ld(u, X);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        vf(n);
      } catch (ue) {
        (t = ue), Ke === n && n !== null && (Ke = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function hf() {
    var e = ys.current;
    return (ys.current = fs), e === null ? fs : e;
  }
  function zl() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
      rt === null ||
        ((Er & 268435455) === 0 && (xs & 268435455) === 0) ||
        ar(rt, lt);
  }
  function _s(e, t) {
    var n = Ee;
    Ee |= 2;
    var o = hf();
    (rt !== e || lt !== t) && ((jn = null), Tr(e, t));
    do
      try {
        iv();
        break;
      } catch (i) {
        pf(e, i);
      }
    while (!0);
    if ((Ji(), (Ee = n), (ys.current = o), Ke !== null)) throw Error(s(261));
    return (rt = null), (lt = 0), Qe;
  }
  function iv() {
    for (; Ke !== null; ) gf(Ke);
  }
  function lv() {
    for (; Ke !== null && !Ih(); ) gf(Ke);
  }
  function gf(e) {
    var t = wf(e.alternate, e, Ot);
    (e.memoizedProps = e.pendingProps),
      t === null ? vf(e) : (Ke = t),
      (Tl.current = null);
  }
  function vf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = ev(n, t, Ot)), n !== null)) {
          Ke = n;
          return;
        }
      } else {
        if (((n = tv(n, t)), n !== null)) {
          (n.flags &= 32767), (Ke = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Qe = 6), (Ke = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ke = t;
        return;
      }
      Ke = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function Pr(e, t, n) {
    var o = Pe,
      i = Yt.transition;
    try {
      (Yt.transition = null), (Pe = 1), cv(e, t, n, o);
    } finally {
      (Yt.transition = i), (Pe = o);
    }
    return null;
  }
  function cv(e, t, n, o) {
    do so();
    while (rr !== null);
    if ((Ee & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = n.lanes | n.childLanes;
    if (
      (Vh(e, u),
      e === rt && ((Ke = rt = null), (lt = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        ks ||
        ((ks = !0),
        kf(Ta, function () {
          return so(), null;
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      (u = Yt.transition), (Yt.transition = null);
      var h = Pe;
      Pe = 1;
      var k = Ee;
      (Ee |= 4),
        (Tl.current = null),
        rv(e, n),
        sf(n, e),
        Tg(zi),
        (La = !!Di),
        (zi = Di = null),
        (e.current = n),
        ov(n),
        Ah(),
        (Ee = k),
        (Pe = h),
        (Yt.transition = u);
    } else e.current = n;
    if (
      (ks && ((ks = !1), (rr = e), (bs = i)),
      (u = e.pendingLanes),
      u === 0 && (nr = null),
      Dh(n.stateNode),
      bt(e, Ve()),
      t !== null)
    )
      for (o = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), o(i.value, { componentStack: i.stack, digest: i.digest });
    if (ws) throw ((ws = !1), (e = Ml), (Ml = null), e);
    return (
      (bs & 1) !== 0 && e.tag !== 0 && so(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === Il ? ia++ : ((ia = 0), (Il = e))) : (ia = 0),
      Zn(),
      null
    );
  }
  function so() {
    if (rr !== null) {
      var e = ou(bs),
        t = Yt.transition,
        n = Pe;
      try {
        if (((Yt.transition = null), (Pe = 16 > e ? 16 : e), rr === null))
          var o = !1;
        else {
          if (((e = rr), (rr = null), (bs = 0), (Ee & 6) !== 0))
            throw Error(s(331));
          var i = Ee;
          for (Ee |= 4, re = e.current; re !== null; ) {
            var u = re,
              h = u.child;
            if ((re.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var _ = 0; _ < k.length; _++) {
                  var L = k[_];
                  for (re = L; re !== null; ) {
                    var V = re;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        oa(8, V, u);
                    }
                    var K = V.child;
                    if (K !== null) (K.return = V), (re = K);
                    else
                      for (; re !== null; ) {
                        V = re;
                        var $ = V.sibling,
                          te = V.return;
                        if ((tf(V), V === L)) {
                          re = null;
                          break;
                        }
                        if ($ !== null) {
                          ($.return = te), (re = $);
                          break;
                        }
                        re = te;
                      }
                  }
                }
                var oe = u.alternate;
                if (oe !== null) {
                  var ce = oe.child;
                  if (ce !== null) {
                    oe.child = null;
                    do {
                      var We = ce.sibling;
                      (ce.sibling = null), (ce = We);
                    } while (ce !== null);
                  }
                }
                re = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null)
              (h.return = u), (re = h);
            else
              e: for (; re !== null; ) {
                if (((u = re), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oa(9, u, u.return);
                  }
                var M = u.sibling;
                if (M !== null) {
                  (M.return = u.return), (re = M);
                  break e;
                }
                re = u.return;
              }
          }
          var T = e.current;
          for (re = T; re !== null; ) {
            h = re;
            var A = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && A !== null)
              (A.return = h), (re = A);
            else
              e: for (h = T; re !== null; ) {
                if (((k = re), (k.flags & 2048) !== 0))
                  try {
                    switch (k.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vs(9, k);
                    }
                  } catch (ue) {
                    Be(k, k.return, ue);
                  }
                if (k === h) {
                  re = null;
                  break e;
                }
                var X = k.sibling;
                if (X !== null) {
                  (X.return = k.return), (re = X);
                  break e;
                }
                re = k.return;
              }
          }
          if (
            ((Ee = i),
            Zn(),
            an && typeof an.onPostCommitFiberRoot == "function")
          )
            try {
              an.onPostCommitFiberRoot(Pa, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (Pe = n), (Yt.transition = t);
      }
    }
    return !1;
  }
  function yf(e, t, n) {
    (t = no(n, t)),
      (t = Od(e, t, 1)),
      (e = er(e, t, 1)),
      (t = vt()),
      e !== null && (Ro(e, 1, t), bt(e, t));
  }
  function Be(e, t, n) {
    if (e.tag === 3) yf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (nr === null || !nr.has(o)))
          ) {
            (e = no(n, e)),
              (e = Ld(t, e, 1)),
              (t = er(t, e, 1)),
              (e = vt()),
              t !== null && (Ro(t, 1, e), bt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function uv(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t),
      (t = vt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      rt === e &&
        (lt & n) === n &&
        (Qe === 4 || (Qe === 3 && (lt & 130023424) === lt && 500 > Ve() - Rl)
          ? Tr(e, 0)
          : (Pl |= n)),
      bt(e, t);
  }
  function xf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ma), (Ma <<= 1), (Ma & 130023424) === 0 && (Ma = 4194304)));
    var n = vt();
    (e = _n(e, t)), e !== null && (Ro(e, t, n), bt(e, n));
  }
  function dv(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), xf(e, n);
  }
  function fv(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(t), xf(e, n);
  }
  var wf;
  wf = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || yt.current) wt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (wt = !1), qg(e, t, n);
        wt = (e.flags & 131072) !== 0;
      }
    else (wt = !1), ze && (t.flags & 1048576) !== 0 && Zu(t, es, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        hs(e, t), (e = t.pendingProps);
        var i = Gr(t, ut.current);
        eo(t, n), (i = ll(null, t, o, e, i, n));
        var u = cl();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              xt(o) ? ((u = !0), Ja(t)) : (u = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              tl(t),
              (i.updater = ms),
              (t.stateNode = i),
              (i._reactInternals = t),
              hl(t, o, e, n),
              (t = xl(null, t, o, !0, u, n)))
            : ((t.tag = 0), ze && u && Ui(t), gt(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (hs(e, t),
            (e = t.pendingProps),
            (i = o._init),
            (o = i(o._payload)),
            (t.type = o),
            (i = t.tag = pv(o)),
            (e = Zt(o, e)),
            i)
          ) {
            case 0:
              t = yl(null, t, o, e, n);
              break e;
            case 1:
              t = Ud(null, t, o, e, n);
              break e;
            case 11:
              t = Hd(null, t, o, e, n);
              break e;
            case 14:
              t = Bd(null, t, o, Zt(o.type, e), n);
              break e;
          }
          throw Error(s(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (i = t.pendingProps),
          (i = t.elementType === o ? i : Zt(o, i)),
          yl(e, t, o, i, n)
        );
      case 1:
        return (
          (o = t.type),
          (i = t.pendingProps),
          (i = t.elementType === o ? i : Zt(o, i)),
          Ud(e, t, o, i, n)
        );
      case 3:
        e: {
          if ((Kd(t), e === null)) throw Error(s(387));
          (o = t.pendingProps),
            (u = t.memoizedState),
            (i = u.element),
            id(e, t),
            ss(t, o, null, n);
          var h = t.memoizedState;
          if (((o = h.element), u.isDehydrated))
            if (
              ((u = {
                element: o,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              (i = no(Error(s(423)), t)), (t = Yd(e, t, o, n, i));
              break e;
            } else if (o !== i) {
              (i = no(Error(s(424)), t)), (t = Yd(e, t, o, n, i));
              break e;
            } else
              for (
                At = Xn(t.stateNode.containerInfo.firstChild),
                  It = t,
                  ze = !0,
                  Jt = null,
                  n = ad(t, null, o, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Jr(), o === i)) {
              t = En(e, t, n);
              break e;
            }
            gt(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ud(t),
          e === null && Gi(t),
          (o = t.type),
          (i = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = i.children),
          Fi(o, i) ? (h = null) : u !== null && Fi(o, u) && (t.flags |= 32),
          Wd(e, t),
          gt(e, t, h, n),
          t.child
        );
      case 6:
        return e === null && Gi(t), null;
      case 13:
        return Gd(e, t, n);
      case 4:
        return (
          nl(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Zr(t, null, o, n)) : gt(e, t, o, n),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (i = t.pendingProps),
          (i = t.elementType === o ? i : Zt(o, i)),
          Hd(e, t, o, i, n)
        );
      case 7:
        return gt(e, t, t.pendingProps, n), t.child;
      case 8:
        return gt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return gt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (i = t.pendingProps),
            (u = t.memoizedProps),
            (h = i.value),
            Ae(rs, o._currentValue),
            (o._currentValue = h),
            u !== null)
          )
            if (Qt(u.value, h)) {
              if (u.children === i.children && !yt.current) {
                t = En(e, t, n);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var k = u.dependencies;
                if (k !== null) {
                  h = u.child;
                  for (var _ = k.firstContext; _ !== null; ) {
                    if (_.context === o) {
                      if (u.tag === 1) {
                        (_ = Cn(-1, n & -n)), (_.tag = 2);
                        var L = u.updateQueue;
                        if (L !== null) {
                          L = L.shared;
                          var V = L.pending;
                          V === null
                            ? (_.next = _)
                            : ((_.next = V.next), (V.next = _)),
                            (L.pending = _);
                        }
                      }
                      (u.lanes |= n),
                        (_ = u.alternate),
                        _ !== null && (_.lanes |= n),
                        qi(u.return, n, t),
                        (k.lanes |= n);
                      break;
                    }
                    _ = _.next;
                  }
                } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((h = u.return), h === null)) throw Error(s(341));
                  (h.lanes |= n),
                    (k = h.alternate),
                    k !== null && (k.lanes |= n),
                    qi(h, n, t),
                    (h = u.sibling);
                } else h = u.child;
                if (h !== null) h.return = u;
                else
                  for (h = u; h !== null; ) {
                    if (h === t) {
                      h = null;
                      break;
                    }
                    if (((u = h.sibling), u !== null)) {
                      (u.return = h.return), (h = u);
                      break;
                    }
                    h = h.return;
                  }
                u = h;
              }
          gt(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (o = t.pendingProps.children),
          eo(t, n),
          (i = Ut(i)),
          (o = o(i)),
          (t.flags |= 1),
          gt(e, t, o, n),
          t.child
        );
      case 14:
        return (
          (o = t.type),
          (i = Zt(o, t.pendingProps)),
          (i = Zt(o.type, i)),
          Bd(e, t, o, i, n)
        );
      case 15:
        return $d(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (o = t.type),
          (i = t.pendingProps),
          (i = t.elementType === o ? i : Zt(o, i)),
          hs(e, t),
          (t.tag = 1),
          xt(o) ? ((e = !0), Ja(t)) : (e = !1),
          eo(t, n),
          Id(t, o, i),
          hl(t, o, i, n),
          xl(null, t, o, !0, e, n)
        );
      case 19:
        return Qd(e, t, n);
      case 22:
        return Vd(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function kf(e, t) {
    return qc(e, t);
  }
  function mv(e, t, n, o) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Gt(e, t, n, o) {
    return new mv(e, t, n, o);
  }
  function Fl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function pv(e) {
    if (typeof e == "function") return Fl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === we)) return 11;
      if (e === fe) return 14;
    }
    return 2;
  }
  function sr(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Gt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Cs(e, t, n, o, i, u) {
    var h = 2;
    if (((o = e), typeof e == "function")) Fl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case B:
          return Rr(n.children, i, u, t);
        case H:
          (h = 8), (i |= 8);
          break;
        case ie:
          return (
            (e = Gt(12, n, t, i | 2)), (e.elementType = ie), (e.lanes = u), e
          );
        case me:
          return (e = Gt(13, n, t, i)), (e.elementType = me), (e.lanes = u), e;
        case pe:
          return (e = Gt(19, n, t, i)), (e.elementType = pe), (e.lanes = u), e;
        case q:
          return Es(n, i, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case de:
                h = 10;
                break e;
              case xe:
                h = 9;
                break e;
              case we:
                h = 11;
                break e;
              case fe:
                h = 14;
                break e;
              case W:
                (h = 16), (o = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Gt(h, n, t, i)), (t.elementType = e), (t.type = o), (t.lanes = u), t
    );
  }
  function Rr(e, t, n, o) {
    return (e = Gt(7, e, o, t)), (e.lanes = n), e;
  }
  function Es(e, t, n, o) {
    return (
      (e = Gt(22, e, o, t)),
      (e.elementType = q),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Hl(e, t, n) {
    return (e = Gt(6, e, null, t)), (e.lanes = n), e;
  }
  function Bl(e, t, n) {
    return (
      (t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function hv(e, t, n, o, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = pi(0)),
      (this.expirationTimes = pi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = pi(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function $l(e, t, n, o, i, u, h, k, _) {
    return (
      (e = new hv(e, t, n, k, _)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = Gt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: o,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      tl(u),
      e
    );
  }
  function gv(e, t, n) {
    var o =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Z,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function bf(e) {
    if (!e) return Jn;
    e = e._reactInternals;
    e: {
      if (xr(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (xt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (xt(n)) return Xu(e, n, t);
    }
    return t;
  }
  function Sf(e, t, n, o, i, u, h, k, _) {
    return (
      (e = $l(n, o, !0, e, i, u, h, k, _)),
      (e.context = bf(null)),
      (n = e.current),
      (o = vt()),
      (i = or(n)),
      (u = Cn(o, i)),
      (u.callback = t ?? null),
      er(n, u, i),
      (e.current.lanes = i),
      Ro(e, i, o),
      bt(e, o),
      e
    );
  }
  function js(e, t, n, o) {
    var i = t.current,
      u = vt(),
      h = or(i);
    return (
      (n = bf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Cn(u, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = er(i, t, h)),
      e !== null && (tn(e, i, h, u), as(e, i, h)),
      h
    );
  }
  function Ts(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Nf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Vl(e, t) {
    Nf(e, t), (e = e.alternate) && Nf(e, t);
  }
  function vv() {
    return null;
  }
  var _f =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Wl(e) {
    this._internalRoot = e;
  }
  (Ps.prototype.render = Wl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      js(e, t, null, null);
    }),
    (Ps.prototype.unmount = Wl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          jr(function () {
            js(null, e, null, null);
          }),
            (t[kn] = null);
        }
      });
  function Ps(e) {
    this._internalRoot = e;
  }
  Ps.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = iu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Kn.length && t !== 0 && t < Kn[n].priority; n++);
      Kn.splice(n, 0, e), n === 0 && uu(e);
    }
  };
  function Ul(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Rs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Cf() {}
  function yv(e, t, n, o, i) {
    if (i) {
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var L = Ts(h);
          u.call(L);
        };
      }
      var h = Sf(t, o, e, 0, null, !1, !1, "", Cf);
      return (
        (e._reactRootContainer = h),
        (e[kn] = h.current),
        Uo(e.nodeType === 8 ? e.parentNode : e),
        jr(),
        h
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof o == "function") {
      var k = o;
      o = function () {
        var L = Ts(_);
        k.call(L);
      };
    }
    var _ = $l(e, 0, !1, null, null, !1, !1, "", Cf);
    return (
      (e._reactRootContainer = _),
      (e[kn] = _.current),
      Uo(e.nodeType === 8 ? e.parentNode : e),
      jr(function () {
        js(t, _, n, o);
      }),
      _
    );
  }
  function Ms(e, t, n, o, i) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof i == "function") {
        var k = i;
        i = function () {
          var _ = Ts(h);
          k.call(_);
        };
      }
      js(t, h, e, i);
    } else h = yv(n, t, e, i, o);
    return Ts(h);
  }
  (au = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Po(t.pendingLanes);
          n !== 0 &&
            (hi(t, n | 1),
            bt(t, Ve()),
            (Ee & 6) === 0 && ((ao = Ve() + 500), Zn()));
        }
        break;
      case 13:
        jr(function () {
          var o = _n(e, 1);
          if (o !== null) {
            var i = vt();
            tn(o, e, 1, i);
          }
        }),
          Vl(e, 1);
    }
  }),
    (gi = function (e) {
      if (e.tag === 13) {
        var t = _n(e, 134217728);
        if (t !== null) {
          var n = vt();
          tn(t, e, 134217728, n);
        }
        Vl(e, 134217728);
      }
    }),
    (su = function (e) {
      if (e.tag === 13) {
        var t = or(e),
          n = _n(e, t);
        if (n !== null) {
          var o = vt();
          tn(n, e, t, o);
        }
        Vl(e, t);
      }
    }),
    (iu = function () {
      return Pe;
    }),
    (lu = function (e, t) {
      var n = Pe;
      try {
        return (Pe = e), t();
      } finally {
        Pe = n;
      }
    }),
    (Eo = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Tt(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var o = n[t];
              if (o !== e && o.form === e.form) {
                var i = Xa(o);
                if (!i) throw Error(s(90));
                Te(o), Tt(o, i);
              }
            }
          }
          break;
        case "textarea":
          Na(e, n);
          break;
        case "select":
          (t = n.value), t != null && Ln(e, !!n.multiple, t, !1);
      }
    }),
    (Ge = Ll),
    (ct = jr);
  var xv = { usingClientEntryPoint: !1, Events: [Go, Kr, Xa, Se, $e, Ll] },
    la = {
      findFiberByHostInstance: wr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    wv = {
      bundleType: la.bundleType,
      version: la.version,
      rendererPackageName: la.rendererPackageName,
      rendererConfig: la.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: D.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Jc(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: la.findFiberByHostInstance || vv,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Is.isDisabled && Is.supportsFiber)
      try {
        (Pa = Is.inject(wv)), (an = Is);
      } catch {}
  }
  return (
    (St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xv),
    (St.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ul(t)) throw Error(s(200));
      return gv(e, t, null, n);
    }),
    (St.createRoot = function (e, t) {
      if (!Ul(e)) throw Error(s(299));
      var n = !1,
        o = "",
        i = _f;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = $l(e, 1, !1, null, null, n, !1, o, i)),
        (e[kn] = t.current),
        Uo(e.nodeType === 8 ? e.parentNode : e),
        new Wl(t)
      );
    }),
    (St.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = Jc(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (St.flushSync = function (e) {
      return jr(e);
    }),
    (St.hydrate = function (e, t, n) {
      if (!Rs(t)) throw Error(s(200));
      return Ms(null, e, t, !0, n);
    }),
    (St.hydrateRoot = function (e, t, n) {
      if (!Ul(e)) throw Error(s(405));
      var o = (n != null && n.hydratedSources) || null,
        i = !1,
        u = "",
        h = _f;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (h = n.onRecoverableError)),
        (t = Sf(t, null, e, 1, n ?? null, i, !1, u, h)),
        (e[kn] = t.current),
        Uo(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          (n = o[e]),
            (i = n._getVersion),
            (i = i(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i);
      return new Ps(t);
    }),
    (St.render = function (e, t, n) {
      if (!Rs(t)) throw Error(s(200));
      return Ms(null, e, t, !1, n);
    }),
    (St.unmountComponentAtNode = function (e) {
      if (!Rs(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (jr(function () {
            Ms(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[kn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (St.unstable_batchedUpdates = Ll),
    (St.unstable_renderSubtreeIntoContainer = function (e, t, n, o) {
      if (!Rs(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Ms(e, t, n, !1, o);
    }),
    (St.version = "18.3.1-next-f1338f8080-20240426"),
    St
  );
}
var Af;
function jm() {
  if (Af) return Gl.exports;
  Af = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), (Gl.exports = jv()), Gl.exports;
}
var Of;
function Tv() {
  if (Of) return As;
  Of = 1;
  var r = jm();
  return (As.createRoot = r.createRoot), (As.hydrateRoot = r.hydrateRoot), As;
}
var Pv = Tv(),
  y = Ic();
const Q = Em(y),
  Ac = bv({ __proto__: null, default: Q }, [y]),
  Rv = () => {
    if (!(typeof window > "u")) {
      if (!localStorage.getItem("kamar")) {
        const r = [
          {
            id_kamar: 1,
            tipe_kamar: "Deluxe",
            harga_per_malam: 3e5,
            status: "Tersedia",
            foto_kamar:
              "https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzYyMzMyMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id_kamar: 2,
            tipe_kamar: "Suite",
            harga_per_malam: 5e5,
            status: "Tersedia",
            foto_kamar:
              "https://images.unsplash.com/photo-1560703652-7838c2525e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjMyMzkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id_kamar: 3,
            tipe_kamar: "Standard",
            harga_per_malam: 2e5,
            status: "Tersedia",
            foto_kamar:
              "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YW5kYXJkJTIwcm9vbXxlbnwxfHx8fDE3NjIzNDMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id_kamar: 4,
            tipe_kamar: "Deluxe",
            harga_per_malam: 3e5,
            status: "Terisi",
            foto_kamar:
              "https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzYyMzMyMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id_kamar: 5,
            tipe_kamar: "Suite",
            harga_per_malam: 5e5,
            status: "Tersedia",
            foto_kamar:
              "https://images.unsplash.com/photo-1560703652-7838c2525e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjMyMzkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id_kamar: 6,
            tipe_kamar: "Standard",
            harga_per_malam: 2e5,
            status: "Tersedia",
            foto_kamar:
              "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YW5kYXJkJTIwcm9vbXxlbnwxfHx8fDE3NjIzNDMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id_kamar: 7,
            tipe_kamar: "Deluxe",
            harga_per_malam: 3e5,
            status: "Tersedia",
            foto_kamar:
              "https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzYyMzMyMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id_kamar: 8,
            tipe_kamar: "Suite",
            harga_per_malam: 5e5,
            status: "Tersedia",
            foto_kamar:
              "https://images.unsplash.com/photo-1560703652-7838c2525e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjMyMzkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id_kamar: 9,
            tipe_kamar: "Standard",
            harga_per_malam: 2e5,
            status: "Tersedia",
            foto_kamar:
              "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YW5kYXJkJTIwcm9vbXxlbnwxfHx8fDE3NjIzNDMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id_kamar: 10,
            tipe_kamar: "Deluxe",
            harga_per_malam: 3e5,
            status: "Tersedia",
            foto_kamar:
              "https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzYyMzMyMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          },
        ];
        localStorage.setItem("kamar", JSON.stringify(r));
      }
      if (!localStorage.getItem("fasilitas")) {
        const r = [
          { id_fasilitas: 1, id_kamar: 1, nama_fasilitas: "AC" },
          { id_fasilitas: 2, id_kamar: 1, nama_fasilitas: "TV" },
          { id_fasilitas: 3, id_kamar: 1, nama_fasilitas: "WiFi" },
          { id_fasilitas: 4, id_kamar: 2, nama_fasilitas: "AC" },
          { id_fasilitas: 5, id_kamar: 2, nama_fasilitas: "TV" },
          { id_fasilitas: 6, id_kamar: 2, nama_fasilitas: "WiFi" },
          { id_fasilitas: 7, id_kamar: 2, nama_fasilitas: "Bathtub" },
          { id_fasilitas: 8, id_kamar: 2, nama_fasilitas: "Mini Bar" },
          { id_fasilitas: 9, id_kamar: 3, nama_fasilitas: "AC" },
          { id_fasilitas: 10, id_kamar: 3, nama_fasilitas: "WiFi" },
          { id_fasilitas: 11, id_kamar: 4, nama_fasilitas: "AC" },
          { id_fasilitas: 12, id_kamar: 4, nama_fasilitas: "TV" },
          { id_fasilitas: 13, id_kamar: 4, nama_fasilitas: "WiFi" },
          { id_fasilitas: 14, id_kamar: 5, nama_fasilitas: "AC" },
          { id_fasilitas: 15, id_kamar: 5, nama_fasilitas: "TV" },
          { id_fasilitas: 16, id_kamar: 5, nama_fasilitas: "WiFi" },
          { id_fasilitas: 17, id_kamar: 5, nama_fasilitas: "Bathtub" },
          { id_fasilitas: 18, id_kamar: 5, nama_fasilitas: "Mini Bar" },
          { id_fasilitas: 19, id_kamar: 6, nama_fasilitas: "AC" },
          { id_fasilitas: 20, id_kamar: 6, nama_fasilitas: "WiFi" },
          { id_fasilitas: 21, id_kamar: 6, nama_fasilitas: "Bathtub" },
          { id_fasilitas: 22, id_kamar: 6, nama_fasilitas: "Mini Bar" },
          { id_fasilitas: 23, id_kamar: 7, nama_fasilitas: "AC" },
          { id_fasilitas: 24, id_kamar: 7, nama_fasilitas: "TV" },
          { id_fasilitas: 25, id_kamar: 7, nama_fasilitas: "WiFi" },
          { id_fasilitas: 26, id_kamar: 8, nama_fasilitas: "AC" },
          { id_fasilitas: 27, id_kamar: 8, nama_fasilitas: "TV" },
          { id_fasilitas: 28, id_kamar: 8, nama_fasilitas: "WiFi" },
          { id_fasilitas: 29, id_kamar: 8, nama_fasilitas: "Bathtub" },
          { id_fasilitas: 30, id_kamar: 8, nama_fasilitas: "Mini Bar" },
          { id_fasilitas: 31, id_kamar: 9, nama_fasilitas: "AC" },
          { id_fasilitas: 32, id_kamar: 9, nama_fasilitas: "WiFi" },
          { id_fasilitas: 33, id_kamar: 10, nama_fasilitas: "AC" },
          { id_fasilitas: 34, id_kamar: 10, nama_fasilitas: "TV" },
          { id_fasilitas: 35, id_kamar: 10, nama_fasilitas: "WiFi" },
        ];
        localStorage.setItem("fasilitas", JSON.stringify(r));
      }
      if (!localStorage.getItem("tamu")) {
        const r = [
          {
            id_tamu: 1,
            nama_tamu: "Maulana",
            email: "maulana@example.com",
            password: "tamu123",
            no_hp: "08123456789",
            alamat: "Malang",
          },
          {
            id_tamu: 2,
            nama_tamu: "Siti",
            email: "siti@example.com",
            password: "tamu123",
            no_hp: "08123456780",
            alamat: "Surabaya",
          },
          {
            id_tamu: 3,
            nama_tamu: "Budi",
            email: "budi@example.com",
            password: "tamu123",
            no_hp: "08123456781",
            alamat: "Jakarta",
          },
        ];
        localStorage.setItem("tamu", JSON.stringify(r));
      }
      if (!localStorage.getItem("petugas")) {
        const r = [
          { id_petugas: 1, nama_petugas: "Admin", password: "admin123" },
          { id_petugas: 2, nama_petugas: "Petugas 1", password: "admin123" },
          { id_petugas: 3, nama_petugas: "Petugas 2", password: "admin123" },
        ];
        localStorage.setItem("petugas", JSON.stringify(r));
      }
      if (!localStorage.getItem("reservasi")) {
        const r = [
          {
            id_reservasi: 1,
            id_kamar: 4,
            id_tamu: 1,
            id_petugas: 1,
            id_pembayaran: 1,
            tanggal_pesan: "2025-11-05T00:00:00Z",
            tanggal_checkin: "2025-11-06T00:00:00Z",
            tanggal_checkout: "2025-11-08T00:00:00Z",
            total_harga: 6e5,
            status_reservasi: "Dipesan",
          },
        ];
        localStorage.setItem("reservasi", JSON.stringify(r));
      }
      if (!localStorage.getItem("pembayaran")) {
        const r = [
          {
            id_pembayaran: 1,
            id_reservasi: 1,
            metode_pembayaran: "Transfer",
            jumlah_bayar: 6e5,
            tanggal_pembayaran: "2025-11-05T00:00:00Z",
            status_pembayaran: "Lunas",
          },
        ];
        localStorage.setItem("pembayaran", JSON.stringify(r));
      }
      if (!localStorage.getItem("laporanBulanan")) {
        const r = [
          {
            id_laporan: 1,
            id_petugas: 1,
            bulan: 11,
            tahun: 2025,
            total_pendapatan: 12e6,
            total_okupansi: 20,
            tanggal_dibuat: "2025-11-06T00:00:00Z",
            catatan_sistem: "Laporan otomatis",
          },
        ];
        localStorage.setItem("laporanBulanan", JSON.stringify(r));
      }
      if (!localStorage.getItem("hotelInfo")) {
        const r = {
          nama_hotel: "ikiAE",
          alamat: "Jl. Paradise No. 123, Malang, Jawa Timur",
          telepon: "+62 812 3456 7890",
          email: "info@hotelparadise.com",
          checkin_time: "14:00 WIB",
          checkout_time: "12:00 WIB",
          layanan_24jam: !0,
          tahun_pendirian: 2020,
          deskripsi:
            "Pengalaman menginap terbaik dengan pelayanan berkelas dan fasilitas premium.",
        };
        localStorage.setItem("hotelInfo", JSON.stringify(r));
      }
    }
  },
  Et = (r) => {
    if (typeof window > "u") return [];
    const a = localStorage.getItem(r);
    return a ? JSON.parse(a) : [];
  },
  Mv = () => {
    if (typeof window > "u") return null;
    const r = localStorage.getItem("hotelInfo");
    return r ? JSON.parse(r) : null;
  },
  Tm = (r, a) => {
    typeof window > "u" || localStorage.setItem(r, JSON.stringify(a));
  },
  hc = (r, a) => {
    const s = Et(r),
      l = `id_${r.replace("laporanBulanan", "laporan")}`,
      d = s.length > 0 ? Math.max(...s.map((m) => m[l] || 0)) : 0,
      f = { ...a, [l]: d + 1 };
    return s.push(f), Tm(r, s), f;
  },
  Lf = (r, a, s) => {
    const l = Et(r),
      d = `id_${r.replace("laporanBulanan", "laporan")}`,
      f = l.findIndex((m) => m[d] === a);
    return f === -1 ? null : ((l[f] = { ...l[f], ...s }), Tm(r, l), l[f]);
  },
  fn = (r) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(r),
  Os = (r) =>
    new Date(r).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  Pm = y.createContext(void 0),
  Iv = ({ children: r }) => {
    const [a, s] = y.useState("light");
    y.useEffect(() => {
      const d = localStorage.getItem("theme");
      d &&
        (s(d), document.documentElement.classList.toggle("dark", d === "dark"));
    }, []);
    const l = () => {
      const d = a === "light" ? "dark" : "light";
      s(d),
        localStorage.setItem("theme", d),
        document.documentElement.classList.toggle("dark", d === "dark");
    };
    return c.jsx(Pm.Provider, {
      value: { theme: a, toggleTheme: l },
      children: r,
    });
  },
  Av = () => {
    const r = y.useContext(Pm);
    if (r === void 0)
      throw new Error("useTheme must be used within a ThemeProvider");
    return r;
  };
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ov = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Lv = (r) =>
    r.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, s, l) =>
      l ? l.toUpperCase() : s.toLowerCase()
    ),
  Df = (r) => {
    const a = Lv(r);
    return a.charAt(0).toUpperCase() + a.slice(1);
  },
  Rm = (...r) =>
    r
      .filter((a, s, l) => !!a && a.trim() !== "" && l.indexOf(a) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Dv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zv = y.forwardRef(
  (
    {
      color: r = "currentColor",
      size: a = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: l,
      className: d = "",
      children: f,
      iconNode: m,
      ...p
    },
    v
  ) =>
    y.createElement(
      "svg",
      {
        ref: v,
        ...Dv,
        width: a,
        height: a,
        stroke: r,
        strokeWidth: l ? (Number(s) * 24) / Number(a) : s,
        className: Rm("lucide", d),
        ...p,
      },
      [
        ...m.map(([x, w]) => y.createElement(x, w)),
        ...(Array.isArray(f) ? f : [f]),
      ]
    )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Me = (r, a) => {
  const s = y.forwardRef(({ className: l, ...d }, f) =>
    y.createElement(zv, {
      ref: f,
      iconNode: a,
      className: Rm(`lucide-${Ov(Df(r))}`, `lucide-${r}`, l),
      ...d,
    })
  );
  return (s.displayName = Df(r)), s;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fv = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  Jl = Me("arrow-up-right", Fv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hv = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  zf = Me("award", Hv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bv = [
    ["path", { d: "M2 4v16", key: "vw9hq8" }],
    ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
    ["path", { d: "M2 17h20", key: "18nfp3" }],
    ["path", { d: "M6 8v9", key: "1yriud" }],
  ],
  Ff = Me("bed", Bv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $v = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  mo = Me("calendar", $v);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vv = [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }],
  ],
  Hf = Me("chart-column", Vv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wv = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Gs = Me("check", Wv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uv = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Mm = Me("chevron-down", Uv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kv = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  Yv = Me("chevron-up", Kv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gv = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  Bf = Me("circle-check-big", Gv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xv = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M8 12h8", key: "1wcyev" }],
    ["path", { d: "M12 8v8", key: "napkw2" }],
  ],
  Qv = Me("circle-plus", Xv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jv = [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ],
  ua = Me("credit-card", Jv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zv = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  Zl = Me("dollar-sign", Zv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qv = [
    ["path", { d: "M10 22v-6.57", key: "1wmca3" }],
    ["path", { d: "M12 11h.01", key: "z322tv" }],
    ["path", { d: "M12 7h.01", key: "1ivr5q" }],
    ["path", { d: "M14 15.43V22", key: "1q2vjd" }],
    ["path", { d: "M15 16a5 5 0 0 0-6 0", key: "o9wqvi" }],
    ["path", { d: "M16 11h.01", key: "xkw8gn" }],
    ["path", { d: "M16 7h.01", key: "1kdx03" }],
    ["path", { d: "M8 11h.01", key: "1dfujw" }],
    ["path", { d: "M8 7h.01", key: "1vti4s" }],
    [
      "rect",
      { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" },
    ],
  ],
  gc = Me("hotel", qv);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e0 = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt",
      },
    ],
  ],
  $f = Me("house", e0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t0 = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  ql = Me("lock", t0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n0 = [
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
    ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
    ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ],
  r0 = Me("log-out", n0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o0 = [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ],
  Oc = Me("mail", o0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a0 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Im = Me("map-pin", a0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s0 = [
    ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ],
  i0 = Me("moon", s0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l0 = [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ],
  Am = Me("phone", l0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c0 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  u0 = Me("shield", c0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d0 = [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx",
      },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
  ],
  Lc = Me("sparkles", d0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f0 = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  m0 = Me("star", f0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p0 = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  h0 = Me("sun", p0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g0 = [
    [
      "rect",
      {
        width: "20",
        height: "15",
        x: "2",
        y: "7",
        rx: "2",
        ry: "2",
        key: "10ag99",
      },
    ],
    ["polyline", { points: "17 2 12 7 7 2", key: "11pgbg" }],
  ],
  v0 = Me("tv", g0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y0 = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  ho = Me("user", y0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x0 = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ],
  vc = Me("users", x0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w0 = [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ],
  k0 = Me("wifi", w0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b0 = [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }],
  ],
  S0 = Me("wind", b0);
function Vf(r, a) {
  if (typeof r == "function") return r(a);
  r != null && (r.current = a);
}
function ya(...r) {
  return (a) => {
    let s = !1;
    const l = r.map((d) => {
      const f = Vf(d, a);
      return !s && typeof f == "function" && (s = !0), f;
    });
    if (s)
      return () => {
        for (let d = 0; d < l.length; d++) {
          const f = l[d];
          typeof f == "function" ? f() : Vf(r[d], null);
        }
      };
  };
}
function et(...r) {
  return y.useCallback(ya(...r), r);
}
var N0 = Symbol.for("react.lazy"),
  Xs = Ac[" use ".trim().toString()];
function _0(r) {
  return typeof r == "object" && r !== null && "then" in r;
}
function Om(r) {
  return (
    r != null &&
    typeof r == "object" &&
    "$$typeof" in r &&
    r.$$typeof === N0 &&
    "_payload" in r &&
    _0(r._payload)
  );
}
function Lm(r) {
  const a = C0(r),
    s = y.forwardRef((l, d) => {
      let { children: f, ...m } = l;
      Om(f) && typeof Xs == "function" && (f = Xs(f._payload));
      const p = y.Children.toArray(f),
        v = p.find(j0);
      if (v) {
        const x = v.props.children,
          w = p.map((g) =>
            g === v
              ? y.Children.count(x) > 1
                ? y.Children.only(null)
                : y.isValidElement(x)
                ? x.props.children
                : null
              : g
          );
        return c.jsx(a, {
          ...m,
          ref: d,
          children: y.isValidElement(x) ? y.cloneElement(x, void 0, w) : null,
        });
      }
      return c.jsx(a, { ...m, ref: d, children: f });
    });
  return (s.displayName = `${r}.Slot`), s;
}
var Dm = Lm("Slot");
function C0(r) {
  const a = y.forwardRef((s, l) => {
    let { children: d, ...f } = s;
    if (
      (Om(d) && typeof Xs == "function" && (d = Xs(d._payload)),
      y.isValidElement(d))
    ) {
      const m = P0(d),
        p = T0(f, d.props);
      return (
        d.type !== y.Fragment && (p.ref = l ? ya(l, m) : m),
        y.cloneElement(d, p)
      );
    }
    return y.Children.count(d) > 1 ? y.Children.only(null) : null;
  });
  return (a.displayName = `${r}.SlotClone`), a;
}
var E0 = Symbol("radix.slottable");
function j0(r) {
  return (
    y.isValidElement(r) &&
    typeof r.type == "function" &&
    "__radixId" in r.type &&
    r.type.__radixId === E0
  );
}
function T0(r, a) {
  const s = { ...a };
  for (const l in a) {
    const d = r[l],
      f = a[l];
    /^on[A-Z]/.test(l)
      ? d && f
        ? (s[l] = (...p) => {
            const v = f(...p);
            return d(...p), v;
          })
        : d && (s[l] = d)
      : l === "style"
      ? (s[l] = { ...d, ...f })
      : l === "className" && (s[l] = [d, f].filter(Boolean).join(" "));
  }
  return { ...r, ...s };
}
function P0(r) {
  let a = Object.getOwnPropertyDescriptor(r.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? r.ref
    : ((a = Object.getOwnPropertyDescriptor(r, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? r.props.ref : r.props.ref || r.ref);
}
function zm(r) {
  var a,
    s,
    l = "";
  if (typeof r == "string" || typeof r == "number") l += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var d = r.length;
      for (a = 0; a < d; a++)
        r[a] && (s = zm(r[a])) && (l && (l += " "), (l += s));
    } else for (s in r) r[s] && (l && (l += " "), (l += s));
  return l;
}
function Fm() {
  for (var r, a, s = 0, l = "", d = arguments.length; s < d; s++)
    (r = arguments[s]) && (a = zm(r)) && (l && (l += " "), (l += a));
  return l;
}
const Wf = (r) => (typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r),
  Uf = Fm,
  Hm = (r, a) => (s) => {
    var l;
    if (a?.variants == null) return Uf(r, s?.class, s?.className);
    const { variants: d, defaultVariants: f } = a,
      m = Object.keys(d).map((x) => {
        const w = s?.[x],
          g = f?.[x];
        if (w === null) return null;
        const C = Wf(w) || Wf(g);
        return d[x][C];
      }),
      p =
        s &&
        Object.entries(s).reduce((x, w) => {
          let [g, C] = w;
          return C === void 0 || (x[g] = C), x;
        }, {}),
      v =
        a == null || (l = a.compoundVariants) === null || l === void 0
          ? void 0
          : l.reduce((x, w) => {
              let { class: g, className: C, ...S } = w;
              return Object.entries(S).every((P) => {
                let [b, N] = P;
                return Array.isArray(N)
                  ? N.includes({ ...f, ...p }[b])
                  : { ...f, ...p }[b] === N;
              })
                ? [...x, g, C]
                : x;
            }, []);
    return Uf(r, m, v, s?.class, s?.className);
  },
  Dc = "-",
  R0 = (r) => {
    const a = I0(r),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: l } = r;
    return {
      getClassGroupId: (m) => {
        const p = m.split(Dc);
        return p[0] === "" && p.length !== 1 && p.shift(), Bm(p, a) || M0(m);
      },
      getConflictingClassGroupIds: (m, p) => {
        const v = s[m] || [];
        return p && l[m] ? [...v, ...l[m]] : v;
      },
    };
  },
  Bm = (r, a) => {
    if (r.length === 0) return a.classGroupId;
    const s = r[0],
      l = a.nextPart.get(s),
      d = l ? Bm(r.slice(1), l) : void 0;
    if (d) return d;
    if (a.validators.length === 0) return;
    const f = r.join(Dc);
    return a.validators.find(({ validator: m }) => m(f))?.classGroupId;
  },
  Kf = /^\[(.+)\]$/,
  M0 = (r) => {
    if (Kf.test(r)) {
      const a = Kf.exec(r)[1],
        s = a?.substring(0, a.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  I0 = (r) => {
    const { theme: a, classGroups: s } = r,
      l = { nextPart: new Map(), validators: [] };
    for (const d in s) yc(s[d], l, d, a);
    return l;
  },
  yc = (r, a, s, l) => {
    r.forEach((d) => {
      if (typeof d == "string") {
        const f = d === "" ? a : Yf(a, d);
        f.classGroupId = s;
        return;
      }
      if (typeof d == "function") {
        if (A0(d)) {
          yc(d(l), a, s, l);
          return;
        }
        a.validators.push({ validator: d, classGroupId: s });
        return;
      }
      Object.entries(d).forEach(([f, m]) => {
        yc(m, Yf(a, f), s, l);
      });
    });
  },
  Yf = (r, a) => {
    let s = r;
    return (
      a.split(Dc).forEach((l) => {
        s.nextPart.has(l) ||
          s.nextPart.set(l, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(l));
      }),
      s
    );
  },
  A0 = (r) => r.isThemeGetter,
  O0 = (r) => {
    if (r < 1) return { get: () => {}, set: () => {} };
    let a = 0,
      s = new Map(),
      l = new Map();
    const d = (f, m) => {
      s.set(f, m), a++, a > r && ((a = 0), (l = s), (s = new Map()));
    };
    return {
      get(f) {
        let m = s.get(f);
        if (m !== void 0) return m;
        if ((m = l.get(f)) !== void 0) return d(f, m), m;
      },
      set(f, m) {
        s.has(f) ? s.set(f, m) : d(f, m);
      },
    };
  },
  xc = "!",
  wc = ":",
  L0 = wc.length,
  D0 = (r) => {
    const { prefix: a, experimentalParseClassName: s } = r;
    let l = (d) => {
      const f = [];
      let m = 0,
        p = 0,
        v = 0,
        x;
      for (let P = 0; P < d.length; P++) {
        let b = d[P];
        if (m === 0 && p === 0) {
          if (b === wc) {
            f.push(d.slice(v, P)), (v = P + L0);
            continue;
          }
          if (b === "/") {
            x = P;
            continue;
          }
        }
        b === "[" ? m++ : b === "]" ? m-- : b === "(" ? p++ : b === ")" && p--;
      }
      const w = f.length === 0 ? d : d.substring(v),
        g = z0(w),
        C = g !== w,
        S = x && x > v ? x - v : void 0;
      return {
        modifiers: f,
        hasImportantModifier: C,
        baseClassName: g,
        maybePostfixModifierPosition: S,
      };
    };
    if (a) {
      const d = a + wc,
        f = l;
      l = (m) =>
        m.startsWith(d)
          ? f(m.substring(d.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: m,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (s) {
      const d = l;
      l = (f) => s({ className: f, parseClassName: d });
    }
    return l;
  },
  z0 = (r) =>
    r.endsWith(xc)
      ? r.substring(0, r.length - 1)
      : r.startsWith(xc)
      ? r.substring(1)
      : r,
  F0 = (r) => {
    const a = Object.fromEntries(r.orderSensitiveModifiers.map((l) => [l, !0]));
    return (l) => {
      if (l.length <= 1) return l;
      const d = [];
      let f = [];
      return (
        l.forEach((m) => {
          m[0] === "[" || a[m] ? (d.push(...f.sort(), m), (f = [])) : f.push(m);
        }),
        d.push(...f.sort()),
        d
      );
    };
  },
  H0 = (r) => ({
    cache: O0(r.cacheSize),
    parseClassName: D0(r),
    sortModifiers: F0(r),
    ...R0(r),
  }),
  B0 = /\s+/,
  $0 = (r, a) => {
    const {
        parseClassName: s,
        getClassGroupId: l,
        getConflictingClassGroupIds: d,
        sortModifiers: f,
      } = a,
      m = [],
      p = r.trim().split(B0);
    let v = "";
    for (let x = p.length - 1; x >= 0; x -= 1) {
      const w = p[x],
        {
          isExternal: g,
          modifiers: C,
          hasImportantModifier: S,
          baseClassName: P,
          maybePostfixModifierPosition: b,
        } = s(w);
      if (g) {
        v = w + (v.length > 0 ? " " + v : v);
        continue;
      }
      let N = !!b,
        O = l(N ? P.substring(0, b) : P);
      if (!O) {
        if (!N) {
          v = w + (v.length > 0 ? " " + v : v);
          continue;
        }
        if (((O = l(P)), !O)) {
          v = w + (v.length > 0 ? " " + v : v);
          continue;
        }
        N = !1;
      }
      const I = f(C).join(":"),
        j = S ? I + xc : I,
        D = j + O;
      if (m.includes(D)) continue;
      m.push(D);
      const F = d(O, N);
      for (let Z = 0; Z < F.length; ++Z) {
        const B = F[Z];
        m.push(j + B);
      }
      v = w + (v.length > 0 ? " " + v : v);
    }
    return v;
  };
function V0() {
  let r = 0,
    a,
    s,
    l = "";
  for (; r < arguments.length; )
    (a = arguments[r++]) && (s = $m(a)) && (l && (l += " "), (l += s));
  return l;
}
const $m = (r) => {
  if (typeof r == "string") return r;
  let a,
    s = "";
  for (let l = 0; l < r.length; l++)
    r[l] && (a = $m(r[l])) && (s && (s += " "), (s += a));
  return s;
};
function W0(r, ...a) {
  let s,
    l,
    d,
    f = m;
  function m(v) {
    const x = a.reduce((w, g) => g(w), r());
    return (s = H0(x)), (l = s.cache.get), (d = s.cache.set), (f = p), p(v);
  }
  function p(v) {
    const x = l(v);
    if (x) return x;
    const w = $0(v, s);
    return d(v, w), w;
  }
  return function () {
    return f(V0.apply(null, arguments));
  };
}
const Je = (r) => {
    const a = (s) => s[r] || [];
    return (a.isThemeGetter = !0), a;
  },
  Vm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Wm = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  U0 = /^\d+\/\d+$/,
  K0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Y0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  G0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  X0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Q0 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  io = (r) => U0.test(r),
  Ne = (r) => !!r && !Number.isNaN(Number(r)),
  lr = (r) => !!r && Number.isInteger(Number(r)),
  ec = (r) => r.endsWith("%") && Ne(r.slice(0, -1)),
  Tn = (r) => K0.test(r),
  J0 = () => !0,
  Z0 = (r) => Y0.test(r) && !G0.test(r),
  Um = () => !1,
  q0 = (r) => X0.test(r),
  ey = (r) => Q0.test(r),
  ty = (r) => !ae(r) && !se(r),
  ny = (r) => xo(r, Gm, Um),
  ae = (r) => Vm.test(r),
  Mr = (r) => xo(r, Xm, Z0),
  tc = (r) => xo(r, iy, Ne),
  Gf = (r) => xo(r, Km, Um),
  ry = (r) => xo(r, Ym, ey),
  Ls = (r) => xo(r, Qm, q0),
  se = (r) => Wm.test(r),
  da = (r) => wo(r, Xm),
  oy = (r) => wo(r, ly),
  Xf = (r) => wo(r, Km),
  ay = (r) => wo(r, Gm),
  sy = (r) => wo(r, Ym),
  Ds = (r) => wo(r, Qm, !0),
  xo = (r, a, s) => {
    const l = Vm.exec(r);
    return l ? (l[1] ? a(l[1]) : s(l[2])) : !1;
  },
  wo = (r, a, s = !1) => {
    const l = Wm.exec(r);
    return l ? (l[1] ? a(l[1]) : s) : !1;
  },
  Km = (r) => r === "position" || r === "percentage",
  Ym = (r) => r === "image" || r === "url",
  Gm = (r) => r === "length" || r === "size" || r === "bg-size",
  Xm = (r) => r === "length",
  iy = (r) => r === "number",
  ly = (r) => r === "family-name",
  Qm = (r) => r === "shadow",
  cy = () => {
    const r = Je("color"),
      a = Je("font"),
      s = Je("text"),
      l = Je("font-weight"),
      d = Je("tracking"),
      f = Je("leading"),
      m = Je("breakpoint"),
      p = Je("container"),
      v = Je("spacing"),
      x = Je("radius"),
      w = Je("shadow"),
      g = Je("inset-shadow"),
      C = Je("text-shadow"),
      S = Je("drop-shadow"),
      P = Je("blur"),
      b = Je("perspective"),
      N = Je("aspect"),
      O = Je("ease"),
      I = Je("animate"),
      j = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      D = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      F = () => [...D(), se, ae],
      Z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", "contain", "none"],
      H = () => [se, ae, v],
      ie = () => [io, "full", "auto", ...H()],
      de = () => [lr, "none", "subgrid", se, ae],
      xe = () => ["auto", { span: ["full", lr, se, ae] }, lr, se, ae],
      we = () => [lr, "auto", se, ae],
      me = () => ["auto", "min", "max", "fr", se, ae],
      pe = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      fe = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      W = () => ["auto", ...H()],
      q = () => [
        io,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...H(),
      ],
      R = () => [r, se, ae],
      Y = () => [...D(), Xf, Gf, { position: [se, ae] }],
      G = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      E = () => ["auto", "cover", "contain", ay, ny, { size: [se, ae] }],
      z = () => [ec, da, Mr],
      J = () => ["", "none", "full", x, se, ae],
      ee = () => ["", Ne, da, Mr],
      he = () => ["solid", "dashed", "dotted", "double"],
      ne = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      U = () => [Ne, ec, Xf, Gf],
      le = () => ["", "none", P, se, ae],
      ye = () => ["none", Ne, se, ae],
      ke = () => ["none", Ne, se, ae],
      Ce = () => [Ne, se, ae],
      Te = () => [io, "full", ...H()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Tn],
        breakpoint: [Tn],
        color: [J0],
        container: [Tn],
        "drop-shadow": [Tn],
        ease: ["in", "out", "in-out"],
        font: [ty],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Tn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Tn],
        shadow: [Tn],
        spacing: ["px", Ne],
        text: [Tn],
        "text-shadow": [Tn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", io, ae, se, N] }],
        container: ["container"],
        columns: [{ columns: [Ne, ae, se, p] }],
        "break-after": [{ "break-after": j() }],
        "break-before": [{ "break-before": j() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: F() }],
        overflow: [{ overflow: Z() }],
        "overflow-x": [{ "overflow-x": Z() }],
        "overflow-y": [{ "overflow-y": Z() }],
        overscroll: [{ overscroll: B() }],
        "overscroll-x": [{ "overscroll-x": B() }],
        "overscroll-y": [{ "overscroll-y": B() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: ie() }],
        "inset-x": [{ "inset-x": ie() }],
        "inset-y": [{ "inset-y": ie() }],
        start: [{ start: ie() }],
        end: [{ end: ie() }],
        top: [{ top: ie() }],
        right: [{ right: ie() }],
        bottom: [{ bottom: ie() }],
        left: [{ left: ie() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [lr, "auto", se, ae] }],
        basis: [{ basis: [io, "full", "auto", p, ...H()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Ne, io, "auto", "initial", "none", ae] }],
        grow: [{ grow: ["", Ne, se, ae] }],
        shrink: [{ shrink: ["", Ne, se, ae] }],
        order: [{ order: [lr, "first", "last", "none", se, ae] }],
        "grid-cols": [{ "grid-cols": de() }],
        "col-start-end": [{ col: xe() }],
        "col-start": [{ "col-start": we() }],
        "col-end": [{ "col-end": we() }],
        "grid-rows": [{ "grid-rows": de() }],
        "row-start-end": [{ row: xe() }],
        "row-start": [{ "row-start": we() }],
        "row-end": [{ "row-end": we() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": me() }],
        "auto-rows": [{ "auto-rows": me() }],
        gap: [{ gap: H() }],
        "gap-x": [{ "gap-x": H() }],
        "gap-y": [{ "gap-y": H() }],
        "justify-content": [{ justify: [...pe(), "normal"] }],
        "justify-items": [{ "justify-items": [...fe(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...fe()] }],
        "align-content": [{ content: ["normal", ...pe()] }],
        "align-items": [{ items: [...fe(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...fe(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": pe() }],
        "place-items": [{ "place-items": [...fe(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...fe()] }],
        p: [{ p: H() }],
        px: [{ px: H() }],
        py: [{ py: H() }],
        ps: [{ ps: H() }],
        pe: [{ pe: H() }],
        pt: [{ pt: H() }],
        pr: [{ pr: H() }],
        pb: [{ pb: H() }],
        pl: [{ pl: H() }],
        m: [{ m: W() }],
        mx: [{ mx: W() }],
        my: [{ my: W() }],
        ms: [{ ms: W() }],
        me: [{ me: W() }],
        mt: [{ mt: W() }],
        mr: [{ mr: W() }],
        mb: [{ mb: W() }],
        ml: [{ ml: W() }],
        "space-x": [{ "space-x": H() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": H() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: q() }],
        w: [{ w: [p, "screen", ...q()] }],
        "min-w": [{ "min-w": [p, "screen", "none", ...q()] }],
        "max-w": [
          { "max-w": [p, "screen", "none", "prose", { screen: [m] }, ...q()] },
        ],
        h: [{ h: ["screen", "lh", ...q()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...q()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...q()] }],
        "font-size": [{ text: ["base", s, da, Mr] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [l, se, tc] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              ec,
              ae,
            ],
          },
        ],
        "font-family": [{ font: [oy, ae, a] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [d, se, ae] }],
        "line-clamp": [{ "line-clamp": [Ne, "none", se, tc] }],
        leading: [{ leading: [f, ...H()] }],
        "list-image": [{ "list-image": ["none", se, ae] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", se, ae] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: R() }],
        "text-color": [{ text: R() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...he(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Ne, "from-font", "auto", se, Mr] },
        ],
        "text-decoration-color": [{ decoration: R() }],
        "underline-offset": [{ "underline-offset": [Ne, "auto", se, ae] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: H() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              se,
              ae,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", se, ae] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: Y() }],
        "bg-repeat": [{ bg: G() }],
        "bg-size": [{ bg: E() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  lr,
                  se,
                  ae,
                ],
                radial: ["", se, ae],
                conic: [lr, se, ae],
              },
              sy,
              ry,
            ],
          },
        ],
        "bg-color": [{ bg: R() }],
        "gradient-from-pos": [{ from: z() }],
        "gradient-via-pos": [{ via: z() }],
        "gradient-to-pos": [{ to: z() }],
        "gradient-from": [{ from: R() }],
        "gradient-via": [{ via: R() }],
        "gradient-to": [{ to: R() }],
        rounded: [{ rounded: J() }],
        "rounded-s": [{ "rounded-s": J() }],
        "rounded-e": [{ "rounded-e": J() }],
        "rounded-t": [{ "rounded-t": J() }],
        "rounded-r": [{ "rounded-r": J() }],
        "rounded-b": [{ "rounded-b": J() }],
        "rounded-l": [{ "rounded-l": J() }],
        "rounded-ss": [{ "rounded-ss": J() }],
        "rounded-se": [{ "rounded-se": J() }],
        "rounded-ee": [{ "rounded-ee": J() }],
        "rounded-es": [{ "rounded-es": J() }],
        "rounded-tl": [{ "rounded-tl": J() }],
        "rounded-tr": [{ "rounded-tr": J() }],
        "rounded-br": [{ "rounded-br": J() }],
        "rounded-bl": [{ "rounded-bl": J() }],
        "border-w": [{ border: ee() }],
        "border-w-x": [{ "border-x": ee() }],
        "border-w-y": [{ "border-y": ee() }],
        "border-w-s": [{ "border-s": ee() }],
        "border-w-e": [{ "border-e": ee() }],
        "border-w-t": [{ "border-t": ee() }],
        "border-w-r": [{ "border-r": ee() }],
        "border-w-b": [{ "border-b": ee() }],
        "border-w-l": [{ "border-l": ee() }],
        "divide-x": [{ "divide-x": ee() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ee() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...he(), "hidden", "none"] }],
        "divide-style": [{ divide: [...he(), "hidden", "none"] }],
        "border-color": [{ border: R() }],
        "border-color-x": [{ "border-x": R() }],
        "border-color-y": [{ "border-y": R() }],
        "border-color-s": [{ "border-s": R() }],
        "border-color-e": [{ "border-e": R() }],
        "border-color-t": [{ "border-t": R() }],
        "border-color-r": [{ "border-r": R() }],
        "border-color-b": [{ "border-b": R() }],
        "border-color-l": [{ "border-l": R() }],
        "divide-color": [{ divide: R() }],
        "outline-style": [{ outline: [...he(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Ne, se, ae] }],
        "outline-w": [{ outline: ["", Ne, da, Mr] }],
        "outline-color": [{ outline: R() }],
        shadow: [{ shadow: ["", "none", w, Ds, Ls] }],
        "shadow-color": [{ shadow: R() }],
        "inset-shadow": [{ "inset-shadow": ["none", g, Ds, Ls] }],
        "inset-shadow-color": [{ "inset-shadow": R() }],
        "ring-w": [{ ring: ee() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: R() }],
        "ring-offset-w": [{ "ring-offset": [Ne, Mr] }],
        "ring-offset-color": [{ "ring-offset": R() }],
        "inset-ring-w": [{ "inset-ring": ee() }],
        "inset-ring-color": [{ "inset-ring": R() }],
        "text-shadow": [{ "text-shadow": ["none", C, Ds, Ls] }],
        "text-shadow-color": [{ "text-shadow": R() }],
        opacity: [{ opacity: [Ne, se, ae] }],
        "mix-blend": [
          { "mix-blend": [...ne(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ne() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Ne] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": U() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": U() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": R() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": R() }],
        "mask-image-t-from-pos": [{ "mask-t-from": U() }],
        "mask-image-t-to-pos": [{ "mask-t-to": U() }],
        "mask-image-t-from-color": [{ "mask-t-from": R() }],
        "mask-image-t-to-color": [{ "mask-t-to": R() }],
        "mask-image-r-from-pos": [{ "mask-r-from": U() }],
        "mask-image-r-to-pos": [{ "mask-r-to": U() }],
        "mask-image-r-from-color": [{ "mask-r-from": R() }],
        "mask-image-r-to-color": [{ "mask-r-to": R() }],
        "mask-image-b-from-pos": [{ "mask-b-from": U() }],
        "mask-image-b-to-pos": [{ "mask-b-to": U() }],
        "mask-image-b-from-color": [{ "mask-b-from": R() }],
        "mask-image-b-to-color": [{ "mask-b-to": R() }],
        "mask-image-l-from-pos": [{ "mask-l-from": U() }],
        "mask-image-l-to-pos": [{ "mask-l-to": U() }],
        "mask-image-l-from-color": [{ "mask-l-from": R() }],
        "mask-image-l-to-color": [{ "mask-l-to": R() }],
        "mask-image-x-from-pos": [{ "mask-x-from": U() }],
        "mask-image-x-to-pos": [{ "mask-x-to": U() }],
        "mask-image-x-from-color": [{ "mask-x-from": R() }],
        "mask-image-x-to-color": [{ "mask-x-to": R() }],
        "mask-image-y-from-pos": [{ "mask-y-from": U() }],
        "mask-image-y-to-pos": [{ "mask-y-to": U() }],
        "mask-image-y-from-color": [{ "mask-y-from": R() }],
        "mask-image-y-to-color": [{ "mask-y-to": R() }],
        "mask-image-radial": [{ "mask-radial": [se, ae] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": U() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": U() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": R() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": R() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": D() }],
        "mask-image-conic-pos": [{ "mask-conic": [Ne] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": U() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": U() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": R() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": R() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: Y() }],
        "mask-repeat": [{ mask: G() }],
        "mask-size": [{ mask: E() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", se, ae] }],
        filter: [{ filter: ["", "none", se, ae] }],
        blur: [{ blur: le() }],
        brightness: [{ brightness: [Ne, se, ae] }],
        contrast: [{ contrast: [Ne, se, ae] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", S, Ds, Ls] }],
        "drop-shadow-color": [{ "drop-shadow": R() }],
        grayscale: [{ grayscale: ["", Ne, se, ae] }],
        "hue-rotate": [{ "hue-rotate": [Ne, se, ae] }],
        invert: [{ invert: ["", Ne, se, ae] }],
        saturate: [{ saturate: [Ne, se, ae] }],
        sepia: [{ sepia: ["", Ne, se, ae] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", se, ae] }],
        "backdrop-blur": [{ "backdrop-blur": le() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Ne, se, ae] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Ne, se, ae] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Ne, se, ae] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Ne, se, ae] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Ne, se, ae] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Ne, se, ae] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Ne, se, ae] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Ne, se, ae] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": H() }],
        "border-spacing-x": [{ "border-spacing-x": H() }],
        "border-spacing-y": [{ "border-spacing-y": H() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              se,
              ae,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Ne, "initial", se, ae] }],
        ease: [{ ease: ["linear", "initial", O, se, ae] }],
        delay: [{ delay: [Ne, se, ae] }],
        animate: [{ animate: ["none", I, se, ae] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [b, se, ae] }],
        "perspective-origin": [{ "perspective-origin": F() }],
        rotate: [{ rotate: ye() }],
        "rotate-x": [{ "rotate-x": ye() }],
        "rotate-y": [{ "rotate-y": ye() }],
        "rotate-z": [{ "rotate-z": ye() }],
        scale: [{ scale: ke() }],
        "scale-x": [{ "scale-x": ke() }],
        "scale-y": [{ "scale-y": ke() }],
        "scale-z": [{ "scale-z": ke() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Ce() }],
        "skew-x": [{ "skew-x": Ce() }],
        "skew-y": [{ "skew-y": Ce() }],
        transform: [{ transform: [se, ae, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: F() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Te() }],
        "translate-x": [{ "translate-x": Te() }],
        "translate-y": [{ "translate-y": Te() }],
        "translate-z": [{ "translate-z": Te() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: R() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: R() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              se,
              ae,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": H() }],
        "scroll-mx": [{ "scroll-mx": H() }],
        "scroll-my": [{ "scroll-my": H() }],
        "scroll-ms": [{ "scroll-ms": H() }],
        "scroll-me": [{ "scroll-me": H() }],
        "scroll-mt": [{ "scroll-mt": H() }],
        "scroll-mr": [{ "scroll-mr": H() }],
        "scroll-mb": [{ "scroll-mb": H() }],
        "scroll-ml": [{ "scroll-ml": H() }],
        "scroll-p": [{ "scroll-p": H() }],
        "scroll-px": [{ "scroll-px": H() }],
        "scroll-py": [{ "scroll-py": H() }],
        "scroll-ps": [{ "scroll-ps": H() }],
        "scroll-pe": [{ "scroll-pe": H() }],
        "scroll-pt": [{ "scroll-pt": H() }],
        "scroll-pr": [{ "scroll-pr": H() }],
        "scroll-pb": [{ "scroll-pb": H() }],
        "scroll-pl": [{ "scroll-pl": H() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", se, ae],
          },
        ],
        fill: [{ fill: ["none", ...R()] }],
        "stroke-w": [{ stroke: [Ne, da, Mr, tc] }],
        stroke: [{ stroke: ["none", ...R()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  uy = W0(cy);
function Oe(...r) {
  return uy(Fm(r));
}
const dy = Hm(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function jt({ className: r, variant: a, size: s, asChild: l = !1, ...d }) {
  const f = l ? Dm : "button";
  return c.jsx(f, {
    "data-slot": "button",
    className: Oe(dy({ variant: a, size: s, className: r })),
    ...d,
  });
}
const fy = ({ currentPage: r, onNavigate: a, user: s, onLogout: l }) => {
  const { theme: d, toggleTheme: f } = Av();
  return c.jsx("nav", {
    className:
      "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300",
    children: c.jsx("div", {
      className: "container mx-auto px-4 py-3 md:py-4",
      children: c.jsxs("div", {
        className: "flex items-center justify-between gap-4",
        children: [
          c.jsxs("div", {
            className: "flex items-center gap-2 md:gap-3 cursor-pointer group",
            onClick: () => a("home"),
            children: [
              c.jsxs("div", {
                className: "relative",
                children: [
                  c.jsx(gc, {
                    className:
                      "w-6 h-6 md:w-8 md:h-8 text-violet-600 dark:text-violet-400 transition-transform group-hover:scale-110",
                  }),
                  c.jsx(Lc, {
                    className:
                      "w-3 h-3 md:w-4 md:h-4 text-amber-400 absolute -top-1 -right-1 animate-pulse",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "hidden sm:block",
                children: [
                  c.jsx("span", {
                    className:
                      "text-lg md:text-xl bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent",
                    children: "ikiAE",
                  }),
                  c.jsx("p", {
                    className: "text-xs text-gray-500 dark:text-gray-400",
                    children: "Luxury & Comfort",
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "flex items-center gap-1 md:gap-2",
            children: [
              c.jsx("button", {
                onClick: () => a("home"),
                className: `px-3 md:px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                  r === "home"
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/50"
                    : "hover:bg-violet-50 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
                }`,
                children: "Home",
              }),
              s &&
                c.jsxs("button", {
                  onClick: () => a("reservasi"),
                  className: `px-3 md:px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                    r === "reservasi"
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/50"
                      : "hover:bg-violet-50 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
                  }`,
                  children: [
                    c.jsx("span", {
                      className: "hidden sm:inline",
                      children: "Reservasi",
                    }),
                    c.jsx("span", { className: "sm:hidden", children: "Book" }),
                  ],
                }),
              s?.role === "petugas" &&
                c.jsx("button", {
                  onClick: () => a("admin"),
                  className: `px-3 md:px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                    r === "admin"
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/50"
                      : "hover:bg-violet-50 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
                  }`,
                  children: "Admin",
                }),
              c.jsx("button", {
                onClick: f,
                className:
                  "p-2 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors",
                "aria-label": "Toggle theme",
                children:
                  d === "light"
                    ? c.jsx(i0, {
                        className: "w-5 h-5 text-gray-700 dark:text-gray-300",
                      })
                    : c.jsx(h0, {
                        className: "w-5 h-5 text-gray-700 dark:text-gray-300",
                      }),
              }),
              s
                ? c.jsxs("div", {
                    className: "flex items-center gap-2 md:gap-3",
                    children: [
                      c.jsxs("div", {
                        className:
                          "flex items-center gap-2 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 px-3 md:px-4 py-2 rounded-full",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white text-sm",
                            children: s.nama.charAt(0).toUpperCase(),
                          }),
                          c.jsx("span", {
                            className:
                              "text-sm hidden md:inline dark:text-white",
                            children: s.nama,
                          }),
                        ],
                      }),
                      c.jsx(jt, {
                        onClick: l,
                        variant: "outline",
                        size: "sm",
                        className:
                          "rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 hover:border-red-200 dark:border-gray-700 dark:text-gray-300",
                        children: c.jsx(r0, { className: "w-4 h-4" }),
                      }),
                    ],
                  })
                : c.jsxs(jt, {
                    onClick: () => a("login"),
                    className:
                      "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-200 dark:shadow-violet-900/50 text-sm md:text-base",
                    size: "sm",
                    children: [
                      c.jsx(ho, { className: "w-4 h-4 md:mr-2" }),
                      c.jsx("span", {
                        className: "hidden md:inline",
                        children: "Login",
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    }),
  });
};
function Nt({ className: r, ...a }) {
  return c.jsx("div", {
    "data-slot": "card",
    className: Oe(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
      r
    ),
    ...a,
  });
}
function Lt({ className: r, ...a }) {
  return c.jsx("div", {
    "data-slot": "card-header",
    className: Oe(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      r
    ),
    ...a,
  });
}
function Dt({ className: r, ...a }) {
  return c.jsx("h4", {
    "data-slot": "card-title",
    className: Oe("leading-none", r),
    ...a,
  });
}
function Ir({ className: r, ...a }) {
  return c.jsx("p", {
    "data-slot": "card-description",
    className: Oe("text-muted-foreground", r),
    ...a,
  });
}
function _t({ className: r, ...a }) {
  return c.jsx("div", {
    "data-slot": "card-content",
    className: Oe("px-6 [&:last-child]:pb-6", r),
    ...a,
  });
}
function my({ className: r, ...a }) {
  return c.jsx("div", {
    "data-slot": "card-footer",
    className: Oe("flex items-center px-6 pb-6 [.border-t]:pt-6", r),
    ...a,
  });
}
const py = Hm(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function Pn({ className: r, variant: a, asChild: s = !1, ...l }) {
  const d = s ? Dm : "span";
  return c.jsx(d, {
    "data-slot": "badge",
    className: Oe(py({ variant: a }), r),
    ...l,
  });
}
const hy =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function gy(r) {
  const [a, s] = y.useState(!1),
    l = () => {
      s(!0);
    },
    { src: d, alt: f, style: m, className: p, ...v } = r;
  return a
    ? c.jsx("div", {
        className: `inline-block bg-gray-100 text-center align-middle ${
          p ?? ""
        }`,
        style: m,
        children: c.jsx("div", {
          className: "flex items-center justify-center w-full h-full",
          children: c.jsx("img", {
            src: hy,
            alt: "Error loading image",
            ...v,
            "data-original-url": d,
          }),
        }),
      })
    : c.jsx("img", {
        src: d,
        alt: f,
        className: p,
        style: m,
        ...v,
        onError: l,
      });
}
const vy = ({ onNavigate: r, user: a }) => {
  const [s, l] = y.useState([]),
    [d, f] = y.useState([]),
    [m, p] = y.useState(null),
    [v, x] = y.useState({
      totalTamu: 0,
      kamarTersedia: 0,
      totalKamar: 0,
      okupansiRate: 0,
      totalReservasi: 0,
      rataRataHarga: 0,
    });
  y.useEffect(() => {
    const S = Et("kamar"),
      P = Et("fasilitas"),
      b = Et("reservasi"),
      N = Et("tamu"),
      O = Mv();
    l(S), f(P), p(O);
    const I = S.filter((B) => B.status === "Tersedia").length,
      j = S.length,
      D = S.filter((B) => B.status === "Terisi").length,
      F = j > 0 ? Math.round((D / j) * 100) : 0,
      Z =
        S.length > 0
          ? Math.round(S.reduce((B, H) => B + H.harga_per_malam, 0) / S.length)
          : 0;
    x({
      totalTamu: N.length,
      kamarTersedia: I,
      totalKamar: j,
      okupansiRate: F,
      totalReservasi: b.length,
      rataRataHarga: Z,
    });
  }, []);
  const w = (S) => d.filter((P) => P.id_kamar === S),
    g = (S) => {
      const P = S.toLowerCase();
      return P.includes("wifi")
        ? c.jsx(k0, { className: "w-4 h-4" })
        : P.includes("tv")
        ? c.jsx(v0, { className: "w-4 h-4" })
        : P.includes("ac")
        ? c.jsx(S0, { className: "w-4 h-4" })
        : c.jsx(Gs, { className: "w-4 h-4" });
    },
    C = (S) => {
      switch (S.toLowerCase()) {
        case "standard":
          return "2 Tamu";
        case "deluxe":
          return "3 Tamu";
        case "suite":
          return "4 Tamu";
        default:
          return "2 Tamu";
      }
    };
  return c.jsxs("div", {
    className: "min-h-screen dark:bg-gray-900 transition-colors duration-300",
    children: [
      c.jsxs("div", {
        className:
          "relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 dark:from-violet-900 dark:via-purple-900 dark:to-pink-900 text-white",
        children: [
          c.jsxs("div", {
            className: "absolute inset-0 opacity-20 dark:opacity-10",
            children: [
              c.jsx("div", {
                className:
                  "absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float",
              }),
              c.jsx("div", {
                className:
                  "absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-float",
                style: { animationDelay: "2s" },
              }),
            ],
          }),
          c.jsxs("div", {
            className: "container mx-auto px-4 py-16 md:py-24 relative z-10",
            children: [
              c.jsxs("div", {
                className: "max-w-3xl animate-slide-in-up",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [
                      c.jsx(zf, {
                        className: "w-5 h-5 md:w-6 md:h-6 text-amber-300",
                      }),
                      c.jsx("span", {
                        className: "text-amber-300 text-sm md:text-base",
                        children: m?.tahun_pendirian
                          ? `Melayani sejak ${m.tahun_pendirian}`
                          : "Awarded Best Hotel 2025",
                      }),
                    ],
                  }),
                  c.jsxs("h1", {
                    className:
                      "text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight",
                    children: [
                      "Pengalaman Menginap ",
                      c.jsx("br", {}),
                      c.jsx("span", {
                        className: "text-amber-300",
                        children: "Tak Terlupakan",
                      }),
                    ],
                  }),
                  c.jsxs("p", {
                    className:
                      "text-base md:text-xl mb-6 md:mb-8 text-violet-100",
                    children: [
                      m?.deskripsi ||
                        "Nikmati kenyamanan dan kemewahan di ikiAE.",
                      " ",
                      v.totalKamar,
                      " kamar mewah dengan fasilitas terbaik menanti Anda. Mulai dari",
                      " ",
                      fn(Math.min(...s.map((S) => S.harga_per_malam)) || 0),
                      " ",
                      "per malam.",
                    ],
                  }),
                  c.jsxs("div", {
                    className: "flex gap-3 md:gap-4 flex-wrap",
                    children: [
                      c.jsx(jt, {
                        onClick: () => r(a ? "reservasi" : "login"),
                        size: "lg",
                        className:
                          "bg-white text-violet-600 hover:bg-violet-50 shadow-xl",
                        children: "Pesan Sekarang",
                      }),
                      c.jsx(jt, {
                        size: "lg",
                        variant: "outline",
                        className: "border-white text-white hover:bg-white/10",
                        children: "Lihat Kamar",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12 md:mt-16 animate-fade-in",
                children: [
                  c.jsxs("div", {
                    className:
                      "bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20",
                    children: [
                      c.jsxs("div", {
                        className: "text-2xl md:text-3xl mb-1",
                        children: [v.totalTamu, "+"],
                      }),
                      c.jsx("div", {
                        className: "text-violet-200 text-xs md:text-sm",
                        children: "Tamu Terdaftar",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20",
                    children: [
                      c.jsx("div", {
                        className: "text-2xl md:text-3xl mb-1",
                        children: v.kamarTersedia,
                      }),
                      c.jsxs("div", {
                        className:
                          "text-violet-200 text-xs md:text-sm flex items-center gap-1",
                        children: [
                          c.jsx(gc, { className: "w-3 h-3 md:w-4 md:h-4" }),
                          "Kamar Tersedia",
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20",
                    children: [
                      c.jsxs("div", {
                        className: "text-2xl md:text-3xl mb-1",
                        children: [v.okupansiRate, "%"],
                      }),
                      c.jsx("div", {
                        className: "text-violet-200 text-xs md:text-sm",
                        children: "Tingkat Okupansi",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20",
                    children: [
                      c.jsx("div", {
                        className: "text-2xl md:text-3xl mb-1",
                        children: "24/7",
                      }),
                      c.jsx("div", {
                        className: "text-violet-200 text-xs md:text-sm",
                        children: "Layanan",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className:
          "container mx-auto px-4 py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900",
        children: [
          c.jsxs("div", {
            className: "text-center mb-8 md:mb-12 animate-slide-in-up",
            children: [
              c.jsxs("div", {
                className:
                  "inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm mb-4",
                children: [
                  v.kamarTersedia,
                  " dari ",
                  v.totalKamar,
                  " Kamar Tersedia",
                ],
              }),
              c.jsx("h2", {
                className: "text-3xl md:text-4xl mb-3 md:mb-4 dark:text-white",
                children: "Pilihan Kamar Terbaik",
              }),
              c.jsxs("p", {
                className:
                  "text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4",
                children: [
                  "Tersedia",
                  " ",
                  s.filter((S) => S.tipe_kamar === "Standard").length,
                  " kamar Standard,",
                  " ",
                  s.filter((S) => S.tipe_kamar === "Deluxe").length,
                  " kamar Deluxe, dan",
                  " ",
                  s.filter((S) => S.tipe_kamar === "Suite").length,
                  " kamar Suite. Semua dilengkapi dengan fasilitas modern dan kenyamanan maksimal.",
                ],
              }),
            ],
          }),
          c.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
            children: s.map((S, P) => {
              const b = w(S.id_kamar);
              return c.jsxs(
                Nt,
                {
                  className:
                    "group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg dark:shadow-gray-900 dark:bg-gray-800 animate-slide-in-up hover:-translate-y-2",
                  style: { animationDelay: `${P * 100}ms` },
                  children: [
                    c.jsx(Lt, {
                      className: "p-0 relative",
                      children: c.jsxs("div", {
                        className: "relative h-48 md:h-56 overflow-hidden",
                        children: [
                          c.jsx(gy, {
                            src: S.foto_kamar,
                            alt: S.tipe_kamar,
                            className:
                              "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                          }),
                          c.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                          }),
                          c.jsx(Pn, {
                            className: `absolute top-4 right-4 ${
                              S.status === "Tersedia"
                                ? "bg-emerald-500 hover:bg-emerald-600 shadow-lg"
                                : "bg-rose-500 hover:bg-rose-600 shadow-lg"
                            }`,
                            children: S.status,
                          }),
                          c.jsxs("div", {
                            className:
                              "absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1",
                            children: [
                              c.jsx(Gs, {
                                className: "w-4 h-4 text-emerald-500",
                              }),
                              c.jsxs("span", {
                                className: "text-sm",
                                children: [w(S.id_kamar).length, " Fasilitas"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    c.jsxs(_t, {
                      className: "pt-4 md:pt-6 pb-4",
                      children: [
                        c.jsxs("div", {
                          className:
                            "flex flex-col sm:flex-row justify-between items-start gap-3 mb-4",
                          children: [
                            c.jsxs("div", {
                              className: "flex-1",
                              children: [
                                c.jsx(Dt, {
                                  className:
                                    "mb-2 text-xl md:text-2xl dark:text-white",
                                  children: S.tipe_kamar,
                                }),
                                c.jsxs("div", {
                                  className:
                                    "flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm",
                                  children: [
                                    c.jsx(vc, { className: "w-4 h-4" }),
                                    c.jsx("span", {
                                      children: C(S.tipe_kamar),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className: "text-left sm:text-right",
                              children: [
                                c.jsx("div", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400 mb-1",
                                  children: "Mulai dari",
                                }),
                                c.jsx("div", {
                                  className:
                                    "text-xl md:text-2xl bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent",
                                  children: fn(S.harga_per_malam),
                                }),
                                c.jsx("div", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "/malam",
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            c.jsx("p", {
                              className:
                                "text-sm text-gray-600 dark:text-gray-400",
                              children: "Fasilitas:",
                            }),
                            c.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children: b.map((N) =>
                                c.jsxs(
                                  Pn,
                                  {
                                    variant: "outline",
                                    className:
                                      "gap-1 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/30 text-xs",
                                    children: [
                                      g(N.nama_fasilitas),
                                      N.nama_fasilitas,
                                    ],
                                  },
                                  N.id_fasilitas
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx(my, {
                      className: "pt-0",
                      children: c.jsx(jt, {
                        className:
                          "w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg group-hover:shadow-xl transition-all",
                        onClick: () => r("reservasi"),
                        disabled: S.status !== "Tersedia" || !a,
                        children: a
                          ? S.status === "Tersedia"
                            ? "Pesan Sekarang"
                            : "Tidak Tersedia"
                          : "Login untuk Reservasi",
                      }),
                    }),
                  ],
                },
                S.id_kamar
              );
            }),
          }),
        ],
      }),
      c.jsx("div", {
        className:
          "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-950 dark:to-black text-white py-12 md:py-16",
        children: c.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            c.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
              children: [
                c.jsxs("div", {
                  children: [
                    c.jsxs("h3", {
                      className: "text-xl mb-4 flex items-center gap-2",
                      children: [
                        c.jsx(gc, { className: "w-6 h-6" }),
                        m?.nama_hotel || "ikiAE",
                      ],
                    }),
                    c.jsxs("p", {
                      className: "text-gray-400 mb-4",
                      children: [
                        m?.deskripsi ||
                          "Pengalaman menginap terbaik dengan pelayanan berkelas dan fasilitas premium.",
                        " ",
                        "Melayani ",
                        v.totalReservasi,
                        "+ reservasi dengan kepuasan tamu terjamin.",
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        c.jsx("div", {
                          className:
                            "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors",
                          children: c.jsx(m0, { className: "w-5 h-5" }),
                        }),
                        c.jsx("div", {
                          className:
                            "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors",
                          children: c.jsx(zf, { className: "w-5 h-5" }),
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("h3", {
                      className: "text-xl mb-4",
                      children: "Kontak",
                    }),
                    c.jsxs("div", {
                      className: "space-y-3 text-gray-400",
                      children: [
                        c.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            c.jsx(Im, { className: "w-5 h-5 text-violet-400" }),
                            c.jsx("span", {
                              children:
                                m?.alamat || "Jl. Paradise No. 123, Malang",
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            c.jsx(Am, { className: "w-5 h-5 text-violet-400" }),
                            c.jsx("span", {
                              children: m?.telepon || "+62 812 3456 7890",
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            c.jsx(Oc, { className: "w-5 h-5 text-violet-400" }),
                            c.jsx("span", {
                              children: m?.email || "info@hotelparadise.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("h3", {
                      className: "text-xl mb-4",
                      children: "Jam Operasional",
                    }),
                    c.jsxs("div", {
                      className: "space-y-2 text-gray-400",
                      children: [
                        c.jsxs("p", {
                          children: [
                            "Check-in: ",
                            m?.checkin_time || "14:00 WIB",
                          ],
                        }),
                        c.jsxs("p", {
                          children: [
                            "Check-out: ",
                            m?.checkout_time || "12:00 WIB",
                          ],
                        }),
                        c.jsxs("p", {
                          children: [
                            "Resepsionis: ",
                            m?.layanan_24jam ? "24/7" : "Terbatas",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("div", {
              className:
                "border-t border-gray-700 mt-12 pt-8 text-center text-gray-400",
              children: c.jsxs("p", {
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " ",
                  m?.nama_hotel || "ikiAE",
                  ". All rights reserved.",
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
};
function po({ className: r, type: a, ...s }) {
  return c.jsx("input", {
    type: a,
    "data-slot": "input",
    className: Oe(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      r
    ),
    ...s,
  });
}
var xa = jm();
const Jm = Em(xa);
var yy = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  xy = yy.reduce((r, a) => {
    const s = Lm(`Primitive.${a}`),
      l = y.forwardRef((d, f) => {
        const { asChild: m, ...p } = d,
          v = m ? s : a;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(v, { ...p, ref: f })
        );
      });
    return (l.displayName = `Primitive.${a}`), { ...r, [a]: l };
  }, {}),
  wy = "Label",
  Zm = y.forwardRef((r, a) =>
    c.jsx(xy.label, {
      ...r,
      ref: a,
      onMouseDown: (s) => {
        s.target.closest("button, input, select, textarea") ||
          (r.onMouseDown?.(s),
          !s.defaultPrevented && s.detail > 1 && s.preventDefault());
      },
    })
  );
Zm.displayName = wy;
var ky = Zm;
function Rn({ className: r, ...a }) {
  return c.jsx(ky, {
    "data-slot": "label",
    className: Oe(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      r
    ),
    ...a,
  });
}
function Re(r, a, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (d) {
    if ((r?.(d), s === !1 || !d.defaultPrevented)) return a?.(d);
  };
}
function wa(r, a = []) {
  let s = [];
  function l(f, m) {
    const p = y.createContext(m),
      v = s.length;
    s = [...s, m];
    const x = (g) => {
      const { scope: C, children: S, ...P } = g,
        b = C?.[r]?.[v] || p,
        N = y.useMemo(() => P, Object.values(P));
      return c.jsx(b.Provider, { value: N, children: S });
    };
    x.displayName = f + "Provider";
    function w(g, C) {
      const S = C?.[r]?.[v] || p,
        P = y.useContext(S);
      if (P) return P;
      if (m !== void 0) return m;
      throw new Error(`\`${g}\` must be used within \`${f}\``);
    }
    return [x, w];
  }
  const d = () => {
    const f = s.map((m) => y.createContext(m));
    return function (p) {
      const v = p?.[r] || f;
      return y.useMemo(() => ({ [`__scope${r}`]: { ...p, [r]: v } }), [p, v]);
    };
  };
  return (d.scopeName = r), [l, by(d, ...a)];
}
function by(...r) {
  const a = r[0];
  if (r.length === 1) return a;
  const s = () => {
    const l = r.map((d) => ({ useScope: d(), scopeName: d.scopeName }));
    return function (f) {
      const m = l.reduce((p, { useScope: v, scopeName: x }) => {
        const g = v(f)[`__scope${x}`];
        return { ...p, ...g };
      }, {});
      return y.useMemo(() => ({ [`__scope${a.scopeName}`]: m }), [m]);
    };
  };
  return (s.scopeName = a.scopeName), s;
}
function Qf(r) {
  const a = Sy(r),
    s = y.forwardRef((l, d) => {
      const { children: f, ...m } = l,
        p = y.Children.toArray(f),
        v = p.find(_y);
      if (v) {
        const x = v.props.children,
          w = p.map((g) =>
            g === v
              ? y.Children.count(x) > 1
                ? y.Children.only(null)
                : y.isValidElement(x)
                ? x.props.children
                : null
              : g
          );
        return c.jsx(a, {
          ...m,
          ref: d,
          children: y.isValidElement(x) ? y.cloneElement(x, void 0, w) : null,
        });
      }
      return c.jsx(a, { ...m, ref: d, children: f });
    });
  return (s.displayName = `${r}.Slot`), s;
}
function Sy(r) {
  const a = y.forwardRef((s, l) => {
    const { children: d, ...f } = s;
    if (y.isValidElement(d)) {
      const m = Ey(d),
        p = Cy(f, d.props);
      return (
        d.type !== y.Fragment && (p.ref = l ? ya(l, m) : m),
        y.cloneElement(d, p)
      );
    }
    return y.Children.count(d) > 1 ? y.Children.only(null) : null;
  });
  return (a.displayName = `${r}.SlotClone`), a;
}
var Ny = Symbol("radix.slottable");
function _y(r) {
  return (
    y.isValidElement(r) &&
    typeof r.type == "function" &&
    "__radixId" in r.type &&
    r.type.__radixId === Ny
  );
}
function Cy(r, a) {
  const s = { ...a };
  for (const l in a) {
    const d = r[l],
      f = a[l];
    /^on[A-Z]/.test(l)
      ? d && f
        ? (s[l] = (...p) => {
            const v = f(...p);
            return d(...p), v;
          })
        : d && (s[l] = d)
      : l === "style"
      ? (s[l] = { ...d, ...f })
      : l === "className" && (s[l] = [d, f].filter(Boolean).join(" "));
  }
  return { ...r, ...s };
}
function Ey(r) {
  let a = Object.getOwnPropertyDescriptor(r.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? r.ref
    : ((a = Object.getOwnPropertyDescriptor(r, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? r.props.ref : r.props.ref || r.ref);
}
function qm(r) {
  const a = r + "CollectionProvider",
    [s, l] = wa(a),
    [d, f] = s(a, { collectionRef: { current: null }, itemMap: new Map() }),
    m = (b) => {
      const { scope: N, children: O } = b,
        I = Q.useRef(null),
        j = Q.useRef(new Map()).current;
      return c.jsx(d, { scope: N, itemMap: j, collectionRef: I, children: O });
    };
  m.displayName = a;
  const p = r + "CollectionSlot",
    v = Qf(p),
    x = Q.forwardRef((b, N) => {
      const { scope: O, children: I } = b,
        j = f(p, O),
        D = et(N, j.collectionRef);
      return c.jsx(v, { ref: D, children: I });
    });
  x.displayName = p;
  const w = r + "CollectionItemSlot",
    g = "data-radix-collection-item",
    C = Qf(w),
    S = Q.forwardRef((b, N) => {
      const { scope: O, children: I, ...j } = b,
        D = Q.useRef(null),
        F = et(N, D),
        Z = f(w, O);
      return (
        Q.useEffect(
          () => (
            Z.itemMap.set(D, { ref: D, ...j }), () => void Z.itemMap.delete(D)
          )
        ),
        c.jsx(C, { [g]: "", ref: F, children: I })
      );
    });
  S.displayName = w;
  function P(b) {
    const N = f(r + "CollectionConsumer", b);
    return Q.useCallback(() => {
      const I = N.collectionRef.current;
      if (!I) return [];
      const j = Array.from(I.querySelectorAll(`[${g}]`));
      return Array.from(N.itemMap.values()).sort(
        (Z, B) => j.indexOf(Z.ref.current) - j.indexOf(B.ref.current)
      );
    }, [N.collectionRef, N.itemMap]);
  }
  return [{ Provider: m, Slot: x, ItemSlot: S }, P, l];
}
var pt = globalThis?.document ? y.useLayoutEffect : () => {},
  jy = Ac[" useId ".trim().toString()] || (() => {}),
  Ty = 0;
function ka(r) {
  const [a, s] = y.useState(jy());
  return (
    pt(() => {
      s((l) => l ?? String(Ty++));
    }, [r]),
    r || (a ? `radix-${a}` : "")
  );
}
function Py(r) {
  const a = Ry(r),
    s = y.forwardRef((l, d) => {
      const { children: f, ...m } = l,
        p = y.Children.toArray(f),
        v = p.find(Iy);
      if (v) {
        const x = v.props.children,
          w = p.map((g) =>
            g === v
              ? y.Children.count(x) > 1
                ? y.Children.only(null)
                : y.isValidElement(x)
                ? x.props.children
                : null
              : g
          );
        return c.jsx(a, {
          ...m,
          ref: d,
          children: y.isValidElement(x) ? y.cloneElement(x, void 0, w) : null,
        });
      }
      return c.jsx(a, { ...m, ref: d, children: f });
    });
  return (s.displayName = `${r}.Slot`), s;
}
function Ry(r) {
  const a = y.forwardRef((s, l) => {
    const { children: d, ...f } = s;
    if (y.isValidElement(d)) {
      const m = Oy(d),
        p = Ay(f, d.props);
      return (
        d.type !== y.Fragment && (p.ref = l ? ya(l, m) : m),
        y.cloneElement(d, p)
      );
    }
    return y.Children.count(d) > 1 ? y.Children.only(null) : null;
  });
  return (a.displayName = `${r}.SlotClone`), a;
}
var My = Symbol("radix.slottable");
function Iy(r) {
  return (
    y.isValidElement(r) &&
    typeof r.type == "function" &&
    "__radixId" in r.type &&
    r.type.__radixId === My
  );
}
function Ay(r, a) {
  const s = { ...a };
  for (const l in a) {
    const d = r[l],
      f = a[l];
    /^on[A-Z]/.test(l)
      ? d && f
        ? (s[l] = (...p) => {
            const v = f(...p);
            return d(...p), v;
          })
        : d && (s[l] = d)
      : l === "style"
      ? (s[l] = { ...d, ...f })
      : l === "className" && (s[l] = [d, f].filter(Boolean).join(" "));
  }
  return { ...r, ...s };
}
function Oy(r) {
  let a = Object.getOwnPropertyDescriptor(r.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? r.ref
    : ((a = Object.getOwnPropertyDescriptor(r, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? r.props.ref : r.props.ref || r.ref);
}
var Ly = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ie = Ly.reduce((r, a) => {
    const s = Py(`Primitive.${a}`),
      l = y.forwardRef((d, f) => {
        const { asChild: m, ...p } = d,
          v = m ? s : a;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(v, { ...p, ref: f })
        );
      });
    return (l.displayName = `Primitive.${a}`), { ...r, [a]: l };
  }, {});
function Dy(r, a) {
  r && xa.flushSync(() => r.dispatchEvent(a));
}
function ur(r) {
  const a = y.useRef(r);
  return (
    y.useEffect(() => {
      a.current = r;
    }),
    y.useMemo(
      () =>
        (...s) =>
          a.current?.(...s),
      []
    )
  );
}
var zy = Ac[" useInsertionEffect ".trim().toString()] || pt;
function Qs({ prop: r, defaultProp: a, onChange: s = () => {}, caller: l }) {
  const [d, f, m] = Fy({ defaultProp: a, onChange: s }),
    p = r !== void 0,
    v = p ? r : d;
  {
    const w = y.useRef(r !== void 0);
    y.useEffect(() => {
      const g = w.current;
      g !== p &&
        console.warn(
          `${l} is changing from ${g ? "controlled" : "uncontrolled"} to ${
            p ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (w.current = p);
    }, [p, l]);
  }
  const x = y.useCallback(
    (w) => {
      if (p) {
        const g = Hy(w) ? w(r) : w;
        g !== r && m.current?.(g);
      } else f(w);
    },
    [p, r, f, m]
  );
  return [v, x];
}
function Fy({ defaultProp: r, onChange: a }) {
  const [s, l] = y.useState(r),
    d = y.useRef(s),
    f = y.useRef(a);
  return (
    zy(() => {
      f.current = a;
    }, [a]),
    y.useEffect(() => {
      d.current !== s && (f.current?.(s), (d.current = s));
    }, [s, d]),
    [s, l, f]
  );
}
function Hy(r) {
  return typeof r == "function";
}
var By = y.createContext(void 0);
function zc(r) {
  const a = y.useContext(By);
  return r || a || "ltr";
}
var nc = "rovingFocusGroup.onEntryFocus",
  $y = { bubbles: !1, cancelable: !0 },
  ba = "RovingFocusGroup",
  [kc, ep, Vy] = qm(ba),
  [Wy, tp] = wa(ba, [Vy]),
  [Uy, Ky] = Wy(ba),
  np = y.forwardRef((r, a) =>
    c.jsx(kc.Provider, {
      scope: r.__scopeRovingFocusGroup,
      children: c.jsx(kc.Slot, {
        scope: r.__scopeRovingFocusGroup,
        children: c.jsx(Yy, { ...r, ref: a }),
      }),
    })
  );
np.displayName = ba;
var Yy = y.forwardRef((r, a) => {
    const {
        __scopeRovingFocusGroup: s,
        orientation: l,
        loop: d = !1,
        dir: f,
        currentTabStopId: m,
        defaultCurrentTabStopId: p,
        onCurrentTabStopIdChange: v,
        onEntryFocus: x,
        preventScrollOnEntryFocus: w = !1,
        ...g
      } = r,
      C = y.useRef(null),
      S = et(a, C),
      P = zc(f),
      [b, N] = Qs({ prop: m, defaultProp: p ?? null, onChange: v, caller: ba }),
      [O, I] = y.useState(!1),
      j = ur(x),
      D = ep(s),
      F = y.useRef(!1),
      [Z, B] = y.useState(0);
    return (
      y.useEffect(() => {
        const H = C.current;
        if (H)
          return H.addEventListener(nc, j), () => H.removeEventListener(nc, j);
      }, [j]),
      c.jsx(Uy, {
        scope: s,
        orientation: l,
        dir: P,
        loop: d,
        currentTabStopId: b,
        onItemFocus: y.useCallback((H) => N(H), [N]),
        onItemShiftTab: y.useCallback(() => I(!0), []),
        onFocusableItemAdd: y.useCallback(() => B((H) => H + 1), []),
        onFocusableItemRemove: y.useCallback(() => B((H) => H - 1), []),
        children: c.jsx(Ie.div, {
          tabIndex: O || Z === 0 ? -1 : 0,
          "data-orientation": l,
          ...g,
          ref: S,
          style: { outline: "none", ...r.style },
          onMouseDown: Re(r.onMouseDown, () => {
            F.current = !0;
          }),
          onFocus: Re(r.onFocus, (H) => {
            const ie = !F.current;
            if (H.target === H.currentTarget && ie && !O) {
              const de = new CustomEvent(nc, $y);
              if ((H.currentTarget.dispatchEvent(de), !de.defaultPrevented)) {
                const xe = D().filter((W) => W.focusable),
                  we = xe.find((W) => W.active),
                  me = xe.find((W) => W.id === b),
                  fe = [we, me, ...xe]
                    .filter(Boolean)
                    .map((W) => W.ref.current);
                ap(fe, w);
              }
            }
            F.current = !1;
          }),
          onBlur: Re(r.onBlur, () => I(!1)),
        }),
      })
    );
  }),
  rp = "RovingFocusGroupItem",
  op = y.forwardRef((r, a) => {
    const {
        __scopeRovingFocusGroup: s,
        focusable: l = !0,
        active: d = !1,
        tabStopId: f,
        children: m,
        ...p
      } = r,
      v = ka(),
      x = f || v,
      w = Ky(rp, s),
      g = w.currentTabStopId === x,
      C = ep(s),
      {
        onFocusableItemAdd: S,
        onFocusableItemRemove: P,
        currentTabStopId: b,
      } = w;
    return (
      y.useEffect(() => {
        if (l) return S(), () => P();
      }, [l, S, P]),
      c.jsx(kc.ItemSlot, {
        scope: s,
        id: x,
        focusable: l,
        active: d,
        children: c.jsx(Ie.span, {
          tabIndex: g ? 0 : -1,
          "data-orientation": w.orientation,
          ...p,
          ref: a,
          onMouseDown: Re(r.onMouseDown, (N) => {
            l ? w.onItemFocus(x) : N.preventDefault();
          }),
          onFocus: Re(r.onFocus, () => w.onItemFocus(x)),
          onKeyDown: Re(r.onKeyDown, (N) => {
            if (N.key === "Tab" && N.shiftKey) {
              w.onItemShiftTab();
              return;
            }
            if (N.target !== N.currentTarget) return;
            const O = Qy(N, w.orientation, w.dir);
            if (O !== void 0) {
              if (N.metaKey || N.ctrlKey || N.altKey || N.shiftKey) return;
              N.preventDefault();
              let j = C()
                .filter((D) => D.focusable)
                .map((D) => D.ref.current);
              if (O === "last") j.reverse();
              else if (O === "prev" || O === "next") {
                O === "prev" && j.reverse();
                const D = j.indexOf(N.currentTarget);
                j = w.loop ? Jy(j, D + 1) : j.slice(D + 1);
              }
              setTimeout(() => ap(j));
            }
          }),
          children:
            typeof m == "function"
              ? m({ isCurrentTabStop: g, hasTabStop: b != null })
              : m,
        }),
      })
    );
  });
op.displayName = rp;
var Gy = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function Xy(r, a) {
  return a !== "rtl"
    ? r
    : r === "ArrowLeft"
    ? "ArrowRight"
    : r === "ArrowRight"
    ? "ArrowLeft"
    : r;
}
function Qy(r, a, s) {
  const l = Xy(r.key, s);
  if (
    !(a === "vertical" && ["ArrowLeft", "ArrowRight"].includes(l)) &&
    !(a === "horizontal" && ["ArrowUp", "ArrowDown"].includes(l))
  )
    return Gy[l];
}
function ap(r, a = !1) {
  const s = document.activeElement;
  for (const l of r)
    if (
      l === s ||
      (l.focus({ preventScroll: a }), document.activeElement !== s)
    )
      return;
}
function Jy(r, a) {
  return r.map((s, l) => r[(a + l) % r.length]);
}
var Zy = np,
  qy = op;
function ex(r, a) {
  return y.useReducer((s, l) => a[s][l] ?? s, r);
}
var sp = (r) => {
  const { present: a, children: s } = r,
    l = tx(a),
    d =
      typeof s == "function" ? s({ present: l.isPresent }) : y.Children.only(s),
    f = et(l.ref, nx(d));
  return typeof s == "function" || l.isPresent
    ? y.cloneElement(d, { ref: f })
    : null;
};
sp.displayName = "Presence";
function tx(r) {
  const [a, s] = y.useState(),
    l = y.useRef(null),
    d = y.useRef(r),
    f = y.useRef("none"),
    m = r ? "mounted" : "unmounted",
    [p, v] = ex(m, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    y.useEffect(() => {
      const x = zs(l.current);
      f.current = p === "mounted" ? x : "none";
    }, [p]),
    pt(() => {
      const x = l.current,
        w = d.current;
      if (w !== r) {
        const C = f.current,
          S = zs(x);
        r
          ? v("MOUNT")
          : S === "none" || x?.display === "none"
          ? v("UNMOUNT")
          : v(w && C !== S ? "ANIMATION_OUT" : "UNMOUNT"),
          (d.current = r);
      }
    }, [r, v]),
    pt(() => {
      if (a) {
        let x;
        const w = a.ownerDocument.defaultView ?? window,
          g = (S) => {
            const b = zs(l.current).includes(CSS.escape(S.animationName));
            if (S.target === a && b && (v("ANIMATION_END"), !d.current)) {
              const N = a.style.animationFillMode;
              (a.style.animationFillMode = "forwards"),
                (x = w.setTimeout(() => {
                  a.style.animationFillMode === "forwards" &&
                    (a.style.animationFillMode = N);
                }));
            }
          },
          C = (S) => {
            S.target === a && (f.current = zs(l.current));
          };
        return (
          a.addEventListener("animationstart", C),
          a.addEventListener("animationcancel", g),
          a.addEventListener("animationend", g),
          () => {
            w.clearTimeout(x),
              a.removeEventListener("animationstart", C),
              a.removeEventListener("animationcancel", g),
              a.removeEventListener("animationend", g);
          }
        );
      } else v("ANIMATION_END");
    }, [a, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(p),
      ref: y.useCallback((x) => {
        (l.current = x ? getComputedStyle(x) : null), s(x);
      }, []),
    }
  );
}
function zs(r) {
  return r?.animationName || "none";
}
function nx(r) {
  let a = Object.getOwnPropertyDescriptor(r.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? r.ref
    : ((a = Object.getOwnPropertyDescriptor(r, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? r.props.ref : r.props.ref || r.ref);
}
var ni = "Tabs",
  [rx] = wa(ni, [tp]),
  ip = tp(),
  [ox, Fc] = rx(ni),
  lp = y.forwardRef((r, a) => {
    const {
        __scopeTabs: s,
        value: l,
        onValueChange: d,
        defaultValue: f,
        orientation: m = "horizontal",
        dir: p,
        activationMode: v = "automatic",
        ...x
      } = r,
      w = zc(p),
      [g, C] = Qs({ prop: l, onChange: d, defaultProp: f ?? "", caller: ni });
    return c.jsx(ox, {
      scope: s,
      baseId: ka(),
      value: g,
      onValueChange: C,
      orientation: m,
      dir: w,
      activationMode: v,
      children: c.jsx(Ie.div, { dir: w, "data-orientation": m, ...x, ref: a }),
    });
  });
lp.displayName = ni;
var cp = "TabsList",
  up = y.forwardRef((r, a) => {
    const { __scopeTabs: s, loop: l = !0, ...d } = r,
      f = Fc(cp, s),
      m = ip(s);
    return c.jsx(Zy, {
      asChild: !0,
      ...m,
      orientation: f.orientation,
      dir: f.dir,
      loop: l,
      children: c.jsx(Ie.div, {
        role: "tablist",
        "aria-orientation": f.orientation,
        ...d,
        ref: a,
      }),
    });
  });
up.displayName = cp;
var dp = "TabsTrigger",
  fp = y.forwardRef((r, a) => {
    const { __scopeTabs: s, value: l, disabled: d = !1, ...f } = r,
      m = Fc(dp, s),
      p = ip(s),
      v = hp(m.baseId, l),
      x = gp(m.baseId, l),
      w = l === m.value;
    return c.jsx(qy, {
      asChild: !0,
      ...p,
      focusable: !d,
      active: w,
      children: c.jsx(Ie.button, {
        type: "button",
        role: "tab",
        "aria-selected": w,
        "aria-controls": x,
        "data-state": w ? "active" : "inactive",
        "data-disabled": d ? "" : void 0,
        disabled: d,
        id: v,
        ...f,
        ref: a,
        onMouseDown: Re(r.onMouseDown, (g) => {
          !d && g.button === 0 && g.ctrlKey === !1
            ? m.onValueChange(l)
            : g.preventDefault();
        }),
        onKeyDown: Re(r.onKeyDown, (g) => {
          [" ", "Enter"].includes(g.key) && m.onValueChange(l);
        }),
        onFocus: Re(r.onFocus, () => {
          const g = m.activationMode !== "manual";
          !w && !d && g && m.onValueChange(l);
        }),
      }),
    });
  });
fp.displayName = dp;
var mp = "TabsContent",
  pp = y.forwardRef((r, a) => {
    const { __scopeTabs: s, value: l, forceMount: d, children: f, ...m } = r,
      p = Fc(mp, s),
      v = hp(p.baseId, l),
      x = gp(p.baseId, l),
      w = l === p.value,
      g = y.useRef(w);
    return (
      y.useEffect(() => {
        const C = requestAnimationFrame(() => (g.current = !1));
        return () => cancelAnimationFrame(C);
      }, []),
      c.jsx(sp, {
        present: d || w,
        children: ({ present: C }) =>
          c.jsx(Ie.div, {
            "data-state": w ? "active" : "inactive",
            "data-orientation": p.orientation,
            role: "tabpanel",
            "aria-labelledby": v,
            hidden: !C,
            id: x,
            tabIndex: 0,
            ...m,
            ref: a,
            style: { ...r.style, animationDuration: g.current ? "0s" : void 0 },
            children: C && f,
          }),
      })
    );
  });
pp.displayName = mp;
function hp(r, a) {
  return `${r}-trigger-${a}`;
}
function gp(r, a) {
  return `${r}-content-${a}`;
}
var ax = lp,
  sx = up,
  ix = fp,
  lx = pp;
function vp({ className: r, ...a }) {
  return c.jsx(ax, {
    "data-slot": "tabs",
    className: Oe("flex flex-col gap-2", r),
    ...a,
  });
}
function yp({ className: r, ...a }) {
  return c.jsx(sx, {
    "data-slot": "tabs-list",
    className: Oe(
      "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
      r
    ),
    ...a,
  });
}
function pa({ className: r, ...a }) {
  return c.jsx(ix, {
    "data-slot": "tabs-trigger",
    className: Oe(
      "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      r
    ),
    ...a,
  });
}
function ha({ className: r, ...a }) {
  return c.jsx(lx, {
    "data-slot": "tabs-content",
    className: Oe("flex-1 outline-none", r),
    ...a,
  });
}
function cx(r) {
  if (typeof document > "u") return;
  let a = document.head || document.getElementsByTagName("head")[0],
    s = document.createElement("style");
  (s.type = "text/css"),
    a.appendChild(s),
    s.styleSheet
      ? (s.styleSheet.cssText = r)
      : s.appendChild(document.createTextNode(r));
}
const ux = (r) => {
    switch (r) {
      case "success":
        return mx;
      case "info":
        return hx;
      case "warning":
        return px;
      case "error":
        return gx;
      default:
        return null;
    }
  },
  dx = Array(12).fill(0),
  fx = ({ visible: r, className: a }) =>
    Q.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", a].filter(Boolean).join(" "),
        "data-visible": r,
      },
      Q.createElement(
        "div",
        { className: "sonner-spinner" },
        dx.map((s, l) =>
          Q.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${l}`,
          })
        )
      )
    ),
  mx = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  px = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  hx = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  gx = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  vx = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    Q.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    Q.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  yx = () => {
    const [r, a] = Q.useState(document.hidden);
    return (
      Q.useEffect(() => {
        const s = () => {
          a(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", s),
          () => window.removeEventListener("visibilitychange", s)
        );
      }, []),
      r
    );
  };
let bc = 1;
class xx {
  constructor() {
    (this.subscribe = (a) => (
      this.subscribers.push(a),
      () => {
        const s = this.subscribers.indexOf(a);
        this.subscribers.splice(s, 1);
      }
    )),
      (this.publish = (a) => {
        this.subscribers.forEach((s) => s(a));
      }),
      (this.addToast = (a) => {
        this.publish(a), (this.toasts = [...this.toasts, a]);
      }),
      (this.create = (a) => {
        var s;
        const { message: l, ...d } = a,
          f =
            typeof a?.id == "number" ||
            ((s = a.id) == null ? void 0 : s.length) > 0
              ? a.id
              : bc++,
          m = this.toasts.find((v) => v.id === f),
          p = a.dismissible === void 0 ? !0 : a.dismissible;
        return (
          this.dismissedToasts.has(f) && this.dismissedToasts.delete(f),
          m
            ? (this.toasts = this.toasts.map((v) =>
                v.id === f
                  ? (this.publish({ ...v, ...a, id: f, title: l }),
                    { ...v, ...a, id: f, dismissible: p, title: l })
                  : v
              ))
            : this.addToast({ title: l, ...d, dismissible: p, id: f }),
          f
        );
      }),
      (this.dismiss = (a) => (
        a
          ? (this.dismissedToasts.add(a),
            requestAnimationFrame(() =>
              this.subscribers.forEach((s) => s({ id: a, dismiss: !0 }))
            ))
          : this.toasts.forEach((s) => {
              this.subscribers.forEach((l) => l({ id: s.id, dismiss: !0 }));
            }),
        a
      )),
      (this.message = (a, s) => this.create({ ...s, message: a })),
      (this.error = (a, s) => this.create({ ...s, message: a, type: "error" })),
      (this.success = (a, s) =>
        this.create({ ...s, type: "success", message: a })),
      (this.info = (a, s) => this.create({ ...s, type: "info", message: a })),
      (this.warning = (a, s) =>
        this.create({ ...s, type: "warning", message: a })),
      (this.loading = (a, s) =>
        this.create({ ...s, type: "loading", message: a })),
      (this.promise = (a, s) => {
        if (!s) return;
        let l;
        s.loading !== void 0 &&
          (l = this.create({
            ...s,
            promise: a,
            type: "loading",
            message: s.loading,
            description:
              typeof s.description != "function" ? s.description : void 0,
          }));
        const d = Promise.resolve(a instanceof Function ? a() : a);
        let f = l !== void 0,
          m;
        const p = d
            .then(async (x) => {
              if (((m = ["resolve", x]), Q.isValidElement(x)))
                (f = !1), this.create({ id: l, type: "default", message: x });
              else if (kx(x) && !x.ok) {
                f = !1;
                const g =
                    typeof s.error == "function"
                      ? await s.error(`HTTP error! status: ${x.status}`)
                      : s.error,
                  C =
                    typeof s.description == "function"
                      ? await s.description(`HTTP error! status: ${x.status}`)
                      : s.description,
                  P =
                    typeof g == "object" && !Q.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: l, type: "error", description: C, ...P });
              } else if (x instanceof Error) {
                f = !1;
                const g =
                    typeof s.error == "function" ? await s.error(x) : s.error,
                  C =
                    typeof s.description == "function"
                      ? await s.description(x)
                      : s.description,
                  P =
                    typeof g == "object" && !Q.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: l, type: "error", description: C, ...P });
              } else if (s.success !== void 0) {
                f = !1;
                const g =
                    typeof s.success == "function"
                      ? await s.success(x)
                      : s.success,
                  C =
                    typeof s.description == "function"
                      ? await s.description(x)
                      : s.description,
                  P =
                    typeof g == "object" && !Q.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: l, type: "success", description: C, ...P });
              }
            })
            .catch(async (x) => {
              if (((m = ["reject", x]), s.error !== void 0)) {
                f = !1;
                const w =
                    typeof s.error == "function" ? await s.error(x) : s.error,
                  g =
                    typeof s.description == "function"
                      ? await s.description(x)
                      : s.description,
                  S =
                    typeof w == "object" && !Q.isValidElement(w)
                      ? w
                      : { message: w };
                this.create({ id: l, type: "error", description: g, ...S });
              }
            })
            .finally(() => {
              f && (this.dismiss(l), (l = void 0)),
                s.finally == null || s.finally.call(s);
            }),
          v = () =>
            new Promise((x, w) =>
              p.then(() => (m[0] === "reject" ? w(m[1]) : x(m[1]))).catch(w)
            );
        return typeof l != "string" && typeof l != "number"
          ? { unwrap: v }
          : Object.assign(l, { unwrap: v });
      }),
      (this.custom = (a, s) => {
        const l = s?.id || bc++;
        return this.create({ jsx: a(l), id: l, ...s }), l;
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((a) => !this.dismissedToasts.has(a.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set());
  }
}
const Ct = new xx(),
  wx = (r, a) => {
    const s = a?.id || bc++;
    return Ct.addToast({ title: r, ...a, id: s }), s;
  },
  kx = (r) =>
    r &&
    typeof r == "object" &&
    "ok" in r &&
    typeof r.ok == "boolean" &&
    "status" in r &&
    typeof r.status == "number",
  bx = wx,
  Sx = () => Ct.toasts,
  Nx = () => Ct.getActiveToasts(),
  Mn = Object.assign(
    bx,
    {
      success: Ct.success,
      info: Ct.info,
      warning: Ct.warning,
      error: Ct.error,
      custom: Ct.custom,
      message: Ct.message,
      promise: Ct.promise,
      dismiss: Ct.dismiss,
      loading: Ct.loading,
    },
    { getHistory: Sx, getToasts: Nx }
  );
cx(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
);
function Fs(r) {
  return r.label !== void 0;
}
const _x = 3,
  Cx = "24px",
  Ex = "16px",
  Jf = 4e3,
  jx = 356,
  Tx = 14,
  Px = 45,
  Rx = 200;
function dn(...r) {
  return r.filter(Boolean).join(" ");
}
function Mx(r) {
  const [a, s] = r.split("-"),
    l = [];
  return a && l.push(a), s && l.push(s), l;
}
const Ix = (r) => {
  var a, s, l, d, f, m, p, v, x;
  const {
      invert: w,
      toast: g,
      unstyled: C,
      interacting: S,
      setHeights: P,
      visibleToasts: b,
      heights: N,
      index: O,
      toasts: I,
      expanded: j,
      removeToast: D,
      defaultRichColors: F,
      closeButton: Z,
      style: B,
      cancelButtonStyle: H,
      actionButtonStyle: ie,
      className: de = "",
      descriptionClassName: xe = "",
      duration: we,
      position: me,
      gap: pe,
      expandByDefault: fe,
      classNames: W,
      icons: q,
      closeButtonAriaLabel: R = "Close toast",
    } = r,
    [Y, G] = Q.useState(null),
    [E, z] = Q.useState(null),
    [J, ee] = Q.useState(!1),
    [he, ne] = Q.useState(!1),
    [U, le] = Q.useState(!1),
    [ye, ke] = Q.useState(!1),
    [Ce, Te] = Q.useState(!1),
    [Ye, ht] = Q.useState(0),
    [On, yn] = Q.useState(0),
    Tt = Q.useRef(g.duration || we || Jf),
    No = Q.useRef(null),
    Pt = Q.useRef(null),
    hr = O === 0,
    Ln = O + 1 <= b,
    at = g.type,
    xn = g.dismissible !== !1,
    Na = g.className || "",
    _a = g.descriptionClassName || "",
    gr = Q.useMemo(
      () => N.findIndex((Se) => Se.toastId === g.id) || 0,
      [N, g.id]
    ),
    _o = Q.useMemo(() => {
      var Se;
      return (Se = g.closeButton) != null ? Se : Z;
    }, [g.closeButton, Z]),
    vr = Q.useMemo(() => g.duration || we || Jf, [g.duration, we]),
    Dr = Q.useRef(0),
    Ht = Q.useRef(0),
    Dn = Q.useRef(0),
    zn = Q.useRef(null),
    [Ca, Ea] = me.split("-"),
    ja = Q.useMemo(
      () => N.reduce((Se, $e, Ge) => (Ge >= gr ? Se : Se + $e.height), 0),
      [N, gr]
    ),
    zr = yx(),
    Co = g.invert || w,
    yr = at === "loading";
  (Ht.current = Q.useMemo(() => gr * pe + ja, [gr, ja])),
    Q.useEffect(() => {
      Tt.current = vr;
    }, [vr]),
    Q.useEffect(() => {
      ee(!0);
    }, []),
    Q.useEffect(() => {
      const Se = Pt.current;
      if (Se) {
        const $e = Se.getBoundingClientRect().height;
        return (
          yn($e),
          P((Ge) => [
            { toastId: g.id, height: $e, position: g.position },
            ...Ge,
          ]),
          () => P((Ge) => Ge.filter((ct) => ct.toastId !== g.id))
        );
      }
    }, [P, g.id]),
    Q.useLayoutEffect(() => {
      if (!J) return;
      const Se = Pt.current,
        $e = Se.style.height;
      Se.style.height = "auto";
      const Ge = Se.getBoundingClientRect().height;
      (Se.style.height = $e),
        yn(Ge),
        P((ct) =>
          ct.find((Ue) => Ue.toastId === g.id)
            ? ct.map((Ue) => (Ue.toastId === g.id ? { ...Ue, height: Ge } : Ue))
            : [{ toastId: g.id, height: Ge, position: g.position }, ...ct]
        );
    }, [J, g.title, g.description, P, g.id]);
  const Bt = Q.useCallback(() => {
    ne(!0),
      ht(Ht.current),
      P((Se) => Se.filter(($e) => $e.toastId !== g.id)),
      setTimeout(() => {
        D(g);
      }, Rx);
  }, [g, D, P, Ht]);
  Q.useEffect(() => {
    if (
      (g.promise && at === "loading") ||
      g.duration === 1 / 0 ||
      g.type === "loading"
    )
      return;
    let Se;
    return (
      j || S || zr
        ? (() => {
            if (Dn.current < Dr.current) {
              const ct = new Date().getTime() - Dr.current;
              Tt.current = Tt.current - ct;
            }
            Dn.current = new Date().getTime();
          })()
        : (() => {
            Tt.current !== 1 / 0 &&
              ((Dr.current = new Date().getTime()),
              (Se = setTimeout(() => {
                g.onAutoClose == null || g.onAutoClose.call(g, g), Bt();
              }, Tt.current)));
          })(),
      () => clearTimeout(Se)
    );
  }, [j, S, g, at, zr, Bt]),
    Q.useEffect(() => {
      g.delete && Bt();
    }, [Bt, g.delete]);
  function Eo() {
    var Se;
    if (q?.loading) {
      var $e;
      return Q.createElement(
        "div",
        {
          className: dn(
            W?.loader,
            g == null || ($e = g.classNames) == null ? void 0 : $e.loader,
            "sonner-loader"
          ),
          "data-visible": at === "loading",
        },
        q.loading
      );
    }
    return Q.createElement(fx, {
      className: dn(
        W?.loader,
        g == null || (Se = g.classNames) == null ? void 0 : Se.loader
      ),
      visible: at === "loading",
    });
  }
  const Fn = g.icon || q?.[at] || ux(at);
  var wn, jo;
  return Q.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Pt,
      className: dn(
        de,
        Na,
        W?.toast,
        g == null || (a = g.classNames) == null ? void 0 : a.toast,
        W?.default,
        W?.[at],
        g == null || (s = g.classNames) == null ? void 0 : s[at]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (wn = g.richColors) != null ? wn : F,
      "data-styled": !(g.jsx || g.unstyled || C),
      "data-mounted": J,
      "data-promise": !!g.promise,
      "data-swiped": Ce,
      "data-removed": he,
      "data-visible": Ln,
      "data-y-position": Ca,
      "data-x-position": Ea,
      "data-index": O,
      "data-front": hr,
      "data-swiping": U,
      "data-dismissible": xn,
      "data-type": at,
      "data-invert": Co,
      "data-swipe-out": ye,
      "data-swipe-direction": E,
      "data-expanded": !!(j || (fe && J)),
      style: {
        "--index": O,
        "--toasts-before": O,
        "--z-index": I.length - O,
        "--offset": `${he ? Ye : Ht.current}px`,
        "--initial-height": fe ? "auto" : `${On}px`,
        ...B,
        ...g.style,
      },
      onDragEnd: () => {
        le(!1), G(null), (zn.current = null);
      },
      onPointerDown: (Se) => {
        yr ||
          !xn ||
          ((No.current = new Date()),
          ht(Ht.current),
          Se.target.setPointerCapture(Se.pointerId),
          Se.target.tagName !== "BUTTON" &&
            (le(!0), (zn.current = { x: Se.clientX, y: Se.clientY })));
      },
      onPointerUp: () => {
        var Se, $e, Ge;
        if (ye || !xn) return;
        zn.current = null;
        const ct = Number(
            ((Se = Pt.current) == null
              ? void 0
              : Se.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          Hn = Number(
            (($e = Pt.current) == null
              ? void 0
              : $e.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Ue =
            new Date().getTime() -
            ((Ge = No.current) == null ? void 0 : Ge.getTime()),
          tt = Y === "x" ? ct : Hn,
          Bn = Math.abs(tt) / Ue;
        if (Math.abs(tt) >= Px || Bn > 0.11) {
          ht(Ht.current),
            g.onDismiss == null || g.onDismiss.call(g, g),
            z(Y === "x" ? (ct > 0 ? "right" : "left") : Hn > 0 ? "down" : "up"),
            Bt(),
            ke(!0);
          return;
        } else {
          var st, Rt;
          (st = Pt.current) == null ||
            st.style.setProperty("--swipe-amount-x", "0px"),
            (Rt = Pt.current) == null ||
              Rt.style.setProperty("--swipe-amount-y", "0px");
        }
        Te(!1), le(!1), G(null);
      },
      onPointerMove: (Se) => {
        var $e, Ge, ct;
        if (
          !zn.current ||
          !xn ||
          (($e = window.getSelection()) == null
            ? void 0
            : $e.toString().length) > 0
        )
          return;
        const Ue = Se.clientY - zn.current.y,
          tt = Se.clientX - zn.current.x;
        var Bn;
        const st = (Bn = r.swipeDirections) != null ? Bn : Mx(me);
        !Y &&
          (Math.abs(tt) > 1 || Math.abs(Ue) > 1) &&
          G(Math.abs(tt) > Math.abs(Ue) ? "x" : "y");
        let Rt = { x: 0, y: 0 };
        const $n = ($t) => 1 / (1.5 + Math.abs($t) / 20);
        if (Y === "y") {
          if (st.includes("top") || st.includes("bottom"))
            if (
              (st.includes("top") && Ue < 0) ||
              (st.includes("bottom") && Ue > 0)
            )
              Rt.y = Ue;
            else {
              const $t = Ue * $n(Ue);
              Rt.y = Math.abs($t) < Math.abs(Ue) ? $t : Ue;
            }
        } else if (Y === "x" && (st.includes("left") || st.includes("right")))
          if (
            (st.includes("left") && tt < 0) ||
            (st.includes("right") && tt > 0)
          )
            Rt.x = tt;
          else {
            const $t = tt * $n(tt);
            Rt.x = Math.abs($t) < Math.abs(tt) ? $t : tt;
          }
        (Math.abs(Rt.x) > 0 || Math.abs(Rt.y) > 0) && Te(!0),
          (Ge = Pt.current) == null ||
            Ge.style.setProperty("--swipe-amount-x", `${Rt.x}px`),
          (ct = Pt.current) == null ||
            ct.style.setProperty("--swipe-amount-y", `${Rt.y}px`);
      },
    },
    _o && !g.jsx && at !== "loading"
      ? Q.createElement(
          "button",
          {
            "aria-label": R,
            "data-disabled": yr,
            "data-close-button": !0,
            onClick:
              yr || !xn
                ? () => {}
                : () => {
                    Bt(), g.onDismiss == null || g.onDismiss.call(g, g);
                  },
            className: dn(
              W?.closeButton,
              g == null || (l = g.classNames) == null ? void 0 : l.closeButton
            ),
          },
          (jo = q?.close) != null ? jo : vx
        )
      : null,
    (at || g.icon || g.promise) &&
      g.icon !== null &&
      (q?.[at] !== null || g.icon)
      ? Q.createElement(
          "div",
          {
            "data-icon": "",
            className: dn(
              W?.icon,
              g == null || (d = g.classNames) == null ? void 0 : d.icon
            ),
          },
          g.promise || (g.type === "loading" && !g.icon)
            ? g.icon || Eo()
            : null,
          g.type !== "loading" ? Fn : null
        )
      : null,
    Q.createElement(
      "div",
      {
        "data-content": "",
        className: dn(
          W?.content,
          g == null || (f = g.classNames) == null ? void 0 : f.content
        ),
      },
      Q.createElement(
        "div",
        {
          "data-title": "",
          className: dn(
            W?.title,
            g == null || (m = g.classNames) == null ? void 0 : m.title
          ),
        },
        g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title
      ),
      g.description
        ? Q.createElement(
            "div",
            {
              "data-description": "",
              className: dn(
                xe,
                _a,
                W?.description,
                g == null || (p = g.classNames) == null ? void 0 : p.description
              ),
            },
            typeof g.description == "function" ? g.description() : g.description
          )
        : null
    ),
    Q.isValidElement(g.cancel)
      ? g.cancel
      : g.cancel && Fs(g.cancel)
      ? Q.createElement(
          "button",
          {
            "data-button": !0,
            "data-cancel": !0,
            style: g.cancelButtonStyle || H,
            onClick: (Se) => {
              Fs(g.cancel) &&
                xn &&
                (g.cancel.onClick == null ||
                  g.cancel.onClick.call(g.cancel, Se),
                Bt());
            },
            className: dn(
              W?.cancelButton,
              g == null || (v = g.classNames) == null ? void 0 : v.cancelButton
            ),
          },
          g.cancel.label
        )
      : null,
    Q.isValidElement(g.action)
      ? g.action
      : g.action && Fs(g.action)
      ? Q.createElement(
          "button",
          {
            "data-button": !0,
            "data-action": !0,
            style: g.actionButtonStyle || ie,
            onClick: (Se) => {
              Fs(g.action) &&
                (g.action.onClick == null ||
                  g.action.onClick.call(g.action, Se),
                !Se.defaultPrevented && Bt());
            },
            className: dn(
              W?.actionButton,
              g == null || (x = g.classNames) == null ? void 0 : x.actionButton
            ),
          },
          g.action.label
        )
      : null
  );
};
function Zf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const r = document.documentElement.getAttribute("dir");
  return r === "auto" || !r
    ? window.getComputedStyle(document.documentElement).direction
    : r;
}
function Ax(r, a) {
  const s = {};
  return (
    [r, a].forEach((l, d) => {
      const f = d === 1,
        m = f ? "--mobile-offset" : "--offset",
        p = f ? Ex : Cx;
      function v(x) {
        ["top", "right", "bottom", "left"].forEach((w) => {
          s[`${m}-${w}`] = typeof x == "number" ? `${x}px` : x;
        });
      }
      typeof l == "number" || typeof l == "string"
        ? v(l)
        : typeof l == "object"
        ? ["top", "right", "bottom", "left"].forEach((x) => {
            l[x] === void 0
              ? (s[`${m}-${x}`] = p)
              : (s[`${m}-${x}`] = typeof l[x] == "number" ? `${l[x]}px` : l[x]);
          })
        : v(p);
    }),
    s
  );
}
const Ox = Q.forwardRef(function (a, s) {
    const {
        invert: l,
        position: d = "bottom-right",
        hotkey: f = ["altKey", "KeyT"],
        expand: m,
        closeButton: p,
        className: v,
        offset: x,
        mobileOffset: w,
        theme: g = "light",
        richColors: C,
        duration: S,
        style: P,
        visibleToasts: b = _x,
        toastOptions: N,
        dir: O = Zf(),
        gap: I = Tx,
        icons: j,
        containerAriaLabel: D = "Notifications",
      } = a,
      [F, Z] = Q.useState([]),
      B = Q.useMemo(
        () =>
          Array.from(
            new Set(
              [d].concat(F.filter((E) => E.position).map((E) => E.position))
            )
          ),
        [F, d]
      ),
      [H, ie] = Q.useState([]),
      [de, xe] = Q.useState(!1),
      [we, me] = Q.useState(!1),
      [pe, fe] = Q.useState(
        g !== "system"
          ? g
          : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      ),
      W = Q.useRef(null),
      q = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      R = Q.useRef(null),
      Y = Q.useRef(!1),
      G = Q.useCallback((E) => {
        Z((z) => {
          var J;
          return (
            ((J = z.find((ee) => ee.id === E.id)) != null && J.delete) ||
              Ct.dismiss(E.id),
            z.filter(({ id: ee }) => ee !== E.id)
          );
        });
      }, []);
    return (
      Q.useEffect(
        () =>
          Ct.subscribe((E) => {
            if (E.dismiss) {
              requestAnimationFrame(() => {
                Z((z) =>
                  z.map((J) => (J.id === E.id ? { ...J, delete: !0 } : J))
                );
              });
              return;
            }
            setTimeout(() => {
              Jm.flushSync(() => {
                Z((z) => {
                  const J = z.findIndex((ee) => ee.id === E.id);
                  return J !== -1
                    ? [...z.slice(0, J), { ...z[J], ...E }, ...z.slice(J + 1)]
                    : [E, ...z];
                });
              });
            });
          }),
        [F]
      ),
      Q.useEffect(() => {
        if (g !== "system") {
          fe(g);
          return;
        }
        if (
          (g === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? fe("dark")
              : fe("light")),
          typeof window > "u")
        )
          return;
        const E = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          E.addEventListener("change", ({ matches: z }) => {
            fe(z ? "dark" : "light");
          });
        } catch {
          E.addListener(({ matches: J }) => {
            try {
              fe(J ? "dark" : "light");
            } catch (ee) {
              console.error(ee);
            }
          });
        }
      }, [g]),
      Q.useEffect(() => {
        F.length <= 1 && xe(!1);
      }, [F]),
      Q.useEffect(() => {
        const E = (z) => {
          var J;
          if (f.every((ne) => z[ne] || z.code === ne)) {
            var he;
            xe(!0), (he = W.current) == null || he.focus();
          }
          z.code === "Escape" &&
            (document.activeElement === W.current ||
              ((J = W.current) != null &&
                J.contains(document.activeElement))) &&
            xe(!1);
        };
        return (
          document.addEventListener("keydown", E),
          () => document.removeEventListener("keydown", E)
        );
      }, [f]),
      Q.useEffect(() => {
        if (W.current)
          return () => {
            R.current &&
              (R.current.focus({ preventScroll: !0 }),
              (R.current = null),
              (Y.current = !1));
          };
      }, [W.current]),
      Q.createElement(
        "section",
        {
          ref: s,
          "aria-label": `${D} ${q}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        B.map((E, z) => {
          var J;
          const [ee, he] = E.split("-");
          return F.length
            ? Q.createElement(
                "ol",
                {
                  key: E,
                  dir: O === "auto" ? Zf() : O,
                  tabIndex: -1,
                  ref: W,
                  className: v,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": pe,
                  "data-y-position": ee,
                  "data-lifted": de && F.length > 1 && !m,
                  "data-x-position": he,
                  style: {
                    "--front-toast-height": `${
                      ((J = H[0]) == null ? void 0 : J.height) || 0
                    }px`,
                    "--width": `${jx}px`,
                    "--gap": `${I}px`,
                    ...P,
                    ...Ax(x, w),
                  },
                  onBlur: (ne) => {
                    Y.current &&
                      !ne.currentTarget.contains(ne.relatedTarget) &&
                      ((Y.current = !1),
                      R.current &&
                        (R.current.focus({ preventScroll: !0 }),
                        (R.current = null)));
                  },
                  onFocus: (ne) => {
                    (ne.target instanceof HTMLElement &&
                      ne.target.dataset.dismissible === "false") ||
                      Y.current ||
                      ((Y.current = !0), (R.current = ne.relatedTarget));
                  },
                  onMouseEnter: () => xe(!0),
                  onMouseMove: () => xe(!0),
                  onMouseLeave: () => {
                    we || xe(!1);
                  },
                  onDragEnd: () => xe(!1),
                  onPointerDown: (ne) => {
                    (ne.target instanceof HTMLElement &&
                      ne.target.dataset.dismissible === "false") ||
                      me(!0);
                  },
                  onPointerUp: () => me(!1),
                },
                F.filter(
                  (ne) => (!ne.position && z === 0) || ne.position === E
                ).map((ne, U) => {
                  var le, ye;
                  return Q.createElement(Ix, {
                    key: ne.id,
                    icons: j,
                    index: U,
                    toast: ne,
                    defaultRichColors: C,
                    duration: (le = N?.duration) != null ? le : S,
                    className: N?.className,
                    descriptionClassName: N?.descriptionClassName,
                    invert: l,
                    visibleToasts: b,
                    closeButton: (ye = N?.closeButton) != null ? ye : p,
                    interacting: we,
                    position: E,
                    style: N?.style,
                    unstyled: N?.unstyled,
                    classNames: N?.classNames,
                    cancelButtonStyle: N?.cancelButtonStyle,
                    actionButtonStyle: N?.actionButtonStyle,
                    closeButtonAriaLabel: N?.closeButtonAriaLabel,
                    removeToast: G,
                    toasts: F.filter((ke) => ke.position == ne.position),
                    heights: H.filter((ke) => ke.position == ne.position),
                    setHeights: ie,
                    expandByDefault: m,
                    gap: I,
                    expanded: de,
                    swipeDirections: a.swipeDirections,
                  });
                })
              )
            : null;
        })
      )
    );
  }),
  Lx = ({ onLogin: r, onNavigate: a }) => {
    const [s, l] = y.useState(""),
      [d, f] = y.useState(""),
      [m, p] = y.useState(""),
      [v, x] = y.useState(""),
      w = (C) => {
        C.preventDefault();
        const P = Et("tamu").find((b) => b.email === s && b.password === d);
        P
          ? (r({
              id: P.id_tamu,
              nama: P.nama_tamu,
              email: P.email,
              role: "tamu",
              data: P,
            }),
            Mn.success(`Selamat datang, ${P.nama_tamu}!`),
            a("home"))
          : Mn.error("Email atau password salah!");
      },
      g = (C) => {
        C.preventDefault();
        const P = Et("petugas").find(
          (b) => b.nama_petugas === m && b.password === v
        );
        P
          ? (r({
              id: P.id_petugas,
              nama: P.nama_petugas,
              role: "petugas",
              data: P,
            }),
            Mn.success(`Selamat datang, ${P.nama_petugas}!`),
            a("admin"))
          : Mn.error("Nama atau password salah!");
      };
    return c.jsxs("div", {
      className:
        "min-h-screen relative overflow-hidden flex items-center justify-center p-4",
      children: [
        c.jsxs("div", {
          className:
            "absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 dark:from-violet-900 dark:via-purple-900 dark:to-pink-900",
          children: [
            c.jsx("div", {
              className:
                "absolute top-20 left-20 w-96 h-96 bg-white/20 dark:bg-white/10 rounded-full blur-3xl animate-float",
            }),
            c.jsx("div", {
              className:
                "absolute bottom-20 right-20 w-96 h-96 bg-pink-300/30 dark:bg-pink-300/20 rounded-full blur-3xl animate-float",
              style: { animationDelay: "2s" },
            }),
            c.jsx("div", {
              className:
                "absolute top-1/2 left-1/2 w-96 h-96 bg-violet-300/20 dark:bg-violet-300/10 rounded-full blur-3xl animate-float",
              style: { animationDelay: "4s" },
            }),
          ],
        }),
        c.jsxs(Nt, {
          className:
            "w-full max-w-md relative z-10 shadow-2xl border-0 dark:bg-gray-900 dark:shadow-gray-950 animate-slide-in-up",
          children: [
            c.jsxs(Lt, {
              className: "text-center pb-4",
              children: [
                c.jsx("div", {
                  className: "flex justify-center mb-4",
                  children: c.jsxs("div", {
                    className:
                      "w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center relative",
                    children: [
                      c.jsx(ql, {
                        className: "w-7 h-7 md:w-8 md:h-8 text-white",
                      }),
                      c.jsx(Lc, {
                        className:
                          "w-4 h-4 md:w-5 md:h-5 text-amber-300 absolute -top-1 -right-1 animate-pulse",
                      }),
                    ],
                  }),
                }),
                c.jsx(Dt, {
                  className:
                    "text-2xl md:text-3xl bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent",
                  children: "Selamat Datang",
                }),
                c.jsx(Ir, {
                  className: "text-sm md:text-base dark:text-gray-400",
                  children: "Login untuk mengakses sistem reservasi hotel",
                }),
              ],
            }),
            c.jsxs(_t, {
              children: [
                c.jsxs(vp, {
                  defaultValue: "tamu",
                  className: "w-full",
                  children: [
                    c.jsxs(yp, {
                      className:
                        "grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 p-1",
                      children: [
                        c.jsxs(pa, {
                          value: "tamu",
                          className:
                            "gap-2 text-sm md:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white",
                          children: [
                            c.jsx(ho, { className: "w-4 h-4" }),
                            c.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Tamu",
                            }),
                          ],
                        }),
                        c.jsxs(pa, {
                          value: "petugas",
                          className:
                            "gap-2 text-sm md:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white",
                          children: [
                            c.jsx(u0, { className: "w-4 h-4" }),
                            c.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Petugas",
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx(ha, {
                      value: "tamu",
                      className: "space-y-4 mt-6",
                      children: c.jsxs("form", {
                        onSubmit: w,
                        className: "space-y-4",
                        children: [
                          c.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              c.jsxs(Rn, {
                                htmlFor: "tamu-email",
                                className: "flex items-center gap-2",
                                children: [
                                  c.jsx(Oc, {
                                    className: "w-4 h-4 text-violet-600",
                                  }),
                                  "Email",
                                ],
                              }),
                              c.jsx(po, {
                                id: "tamu-email",
                                type: "email",
                                placeholder: "maulana@example.com",
                                value: s,
                                onChange: (C) => l(C.target.value),
                                className:
                                  "border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-violet-500 focus:ring-violet-500",
                                required: !0,
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              c.jsxs(Rn, {
                                htmlFor: "tamu-password",
                                className: "flex items-center gap-2",
                                children: [
                                  c.jsx(ql, {
                                    className: "w-4 h-4 text-violet-600",
                                  }),
                                  "Password",
                                ],
                              }),
                              c.jsx(po, {
                                id: "tamu-password",
                                type: "password",
                                placeholder: "••••••••",
                                value: d,
                                onChange: (C) => f(C.target.value),
                                className:
                                  "border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-violet-500 focus:ring-violet-500",
                                required: !0,
                              }),
                            ],
                          }),
                          c.jsx(jt, {
                            type: "submit",
                            className:
                              "w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all",
                            children: "Login sebagai Tamu",
                          }),
                          c.jsx("div", {
                            className:
                              "bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 p-4 rounded-lg border border-violet-100 dark:border-violet-800",
                            children: c.jsxs("p", {
                              className:
                                "text-xs md:text-sm text-center text-gray-700 dark:text-gray-300",
                              children: [
                                c.jsx("span", {
                                  className: "block mb-1",
                                  children: "Demo Credentials:",
                                }),
                                c.jsx("span", {
                                  className:
                                    "text-violet-600 dark:text-violet-400",
                                  children: "maulana@example.com / tamu123",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    c.jsx(ha, {
                      value: "petugas",
                      className: "space-y-4 mt-6",
                      children: c.jsxs("form", {
                        onSubmit: g,
                        className: "space-y-4",
                        children: [
                          c.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              c.jsxs(Rn, {
                                htmlFor: "petugas-name",
                                className: "flex items-center gap-2",
                                children: [
                                  c.jsx(ho, {
                                    className: "w-4 h-4 text-violet-600",
                                  }),
                                  "Nama Petugas",
                                ],
                              }),
                              c.jsx(po, {
                                id: "petugas-name",
                                type: "text",
                                placeholder: "Admin",
                                value: m,
                                onChange: (C) => p(C.target.value),
                                className:
                                  "border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-violet-500 focus:ring-violet-500",
                                required: !0,
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              c.jsxs(Rn, {
                                htmlFor: "petugas-password",
                                className: "flex items-center gap-2",
                                children: [
                                  c.jsx(ql, {
                                    className:
                                      "w-4 h-4 text-violet-600 dark:text-violet-400",
                                  }),
                                  "Password",
                                ],
                              }),
                              c.jsx(po, {
                                id: "petugas-password",
                                type: "password",
                                placeholder: "••••••••",
                                value: v,
                                onChange: (C) => x(C.target.value),
                                className:
                                  "border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-violet-500 focus:ring-violet-500",
                                required: !0,
                              }),
                            ],
                          }),
                          c.jsx(jt, {
                            type: "submit",
                            className:
                              "w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all",
                            children: "Login sebagai Petugas",
                          }),
                          c.jsx("div", {
                            className:
                              "bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 p-4 rounded-lg border border-violet-100 dark:border-violet-800",
                            children: c.jsxs("p", {
                              className:
                                "text-xs md:text-sm text-center text-gray-700 dark:text-gray-300",
                              children: [
                                c.jsx("span", {
                                  className: "block mb-1",
                                  children: "Demo Credentials:",
                                }),
                                c.jsx("span", {
                                  className:
                                    "text-violet-600 dark:text-violet-400",
                                  children: "Admin / admin123",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                c.jsx("div", {
                  className: "mt-6 text-center",
                  children: c.jsx(jt, {
                    variant: "ghost",
                    onClick: () => a("home"),
                    className:
                      "text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/30",
                    children: "Kembali ke Home",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function qf(r, [a, s]) {
  return Math.min(s, Math.max(a, r));
}
function Dx(r, a = globalThis?.document) {
  const s = ur(r);
  y.useEffect(() => {
    const l = (d) => {
      d.key === "Escape" && s(d);
    };
    return (
      a.addEventListener("keydown", l, { capture: !0 }),
      () => a.removeEventListener("keydown", l, { capture: !0 })
    );
  }, [s, a]);
}
var zx = "DismissableLayer",
  Sc = "dismissableLayer.update",
  Fx = "dismissableLayer.pointerDownOutside",
  Hx = "dismissableLayer.focusOutside",
  em,
  xp = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  wp = y.forwardRef((r, a) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: d,
        onFocusOutside: f,
        onInteractOutside: m,
        onDismiss: p,
        ...v
      } = r,
      x = y.useContext(xp),
      [w, g] = y.useState(null),
      C = w?.ownerDocument ?? globalThis?.document,
      [, S] = y.useState({}),
      P = et(a, (B) => g(B)),
      b = Array.from(x.layers),
      [N] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
      O = b.indexOf(N),
      I = w ? b.indexOf(w) : -1,
      j = x.layersWithOutsidePointerEventsDisabled.size > 0,
      D = I >= O,
      F = Vx((B) => {
        const H = B.target,
          ie = [...x.branches].some((de) => de.contains(H));
        !D || ie || (d?.(B), m?.(B), B.defaultPrevented || p?.());
      }, C),
      Z = Wx((B) => {
        const H = B.target;
        [...x.branches].some((de) => de.contains(H)) ||
          (f?.(B), m?.(B), B.defaultPrevented || p?.());
      }, C);
    return (
      Dx((B) => {
        I === x.layers.size - 1 &&
          (l?.(B), !B.defaultPrevented && p && (B.preventDefault(), p()));
      }, C),
      y.useEffect(() => {
        if (w)
          return (
            s &&
              (x.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((em = C.body.style.pointerEvents),
                (C.body.style.pointerEvents = "none")),
              x.layersWithOutsidePointerEventsDisabled.add(w)),
            x.layers.add(w),
            tm(),
            () => {
              s &&
                x.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (C.body.style.pointerEvents = em);
            }
          );
      }, [w, C, s, x]),
      y.useEffect(
        () => () => {
          w &&
            (x.layers.delete(w),
            x.layersWithOutsidePointerEventsDisabled.delete(w),
            tm());
        },
        [w, x]
      ),
      y.useEffect(() => {
        const B = () => S({});
        return (
          document.addEventListener(Sc, B),
          () => document.removeEventListener(Sc, B)
        );
      }, []),
      c.jsx(Ie.div, {
        ...v,
        ref: P,
        style: {
          pointerEvents: j ? (D ? "auto" : "none") : void 0,
          ...r.style,
        },
        onFocusCapture: Re(r.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: Re(r.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: Re(
          r.onPointerDownCapture,
          F.onPointerDownCapture
        ),
      })
    );
  });
wp.displayName = zx;
var Bx = "DismissableLayerBranch",
  $x = y.forwardRef((r, a) => {
    const s = y.useContext(xp),
      l = y.useRef(null),
      d = et(a, l);
    return (
      y.useEffect(() => {
        const f = l.current;
        if (f)
          return (
            s.branches.add(f),
            () => {
              s.branches.delete(f);
            }
          );
      }, [s.branches]),
      c.jsx(Ie.div, { ...r, ref: d })
    );
  });
$x.displayName = Bx;
function Vx(r, a = globalThis?.document) {
  const s = ur(r),
    l = y.useRef(!1),
    d = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const f = (p) => {
          if (p.target && !l.current) {
            let v = function () {
              kp(Fx, s, x, { discrete: !0 });
            };
            const x = { originalEvent: p };
            p.pointerType === "touch"
              ? (a.removeEventListener("click", d.current),
                (d.current = v),
                a.addEventListener("click", d.current, { once: !0 }))
              : v();
          } else a.removeEventListener("click", d.current);
          l.current = !1;
        },
        m = window.setTimeout(() => {
          a.addEventListener("pointerdown", f);
        }, 0);
      return () => {
        window.clearTimeout(m),
          a.removeEventListener("pointerdown", f),
          a.removeEventListener("click", d.current);
      };
    }, [a, s]),
    { onPointerDownCapture: () => (l.current = !0) }
  );
}
function Wx(r, a = globalThis?.document) {
  const s = ur(r),
    l = y.useRef(!1);
  return (
    y.useEffect(() => {
      const d = (f) => {
        f.target &&
          !l.current &&
          kp(Hx, s, { originalEvent: f }, { discrete: !1 });
      };
      return (
        a.addEventListener("focusin", d),
        () => a.removeEventListener("focusin", d)
      );
    }, [a, s]),
    {
      onFocusCapture: () => (l.current = !0),
      onBlurCapture: () => (l.current = !1),
    }
  );
}
function tm() {
  const r = new CustomEvent(Sc);
  document.dispatchEvent(r);
}
function kp(r, a, s, { discrete: l }) {
  const d = s.originalEvent.target,
    f = new CustomEvent(r, { bubbles: !1, cancelable: !0, detail: s });
  a && d.addEventListener(r, a, { once: !0 }),
    l ? Dy(d, f) : d.dispatchEvent(f);
}
var rc = 0;
function Ux() {
  y.useEffect(() => {
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", r[0] ?? nm()),
      document.body.insertAdjacentElement("beforeend", r[1] ?? nm()),
      rc++,
      () => {
        rc === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((a) => a.remove()),
          rc--;
      }
    );
  }, []);
}
function nm() {
  const r = document.createElement("span");
  return (
    r.setAttribute("data-radix-focus-guard", ""),
    (r.tabIndex = 0),
    (r.style.outline = "none"),
    (r.style.opacity = "0"),
    (r.style.position = "fixed"),
    (r.style.pointerEvents = "none"),
    r
  );
}
var oc = "focusScope.autoFocusOnMount",
  ac = "focusScope.autoFocusOnUnmount",
  rm = { bubbles: !1, cancelable: !0 },
  Kx = "FocusScope",
  bp = y.forwardRef((r, a) => {
    const {
        loop: s = !1,
        trapped: l = !1,
        onMountAutoFocus: d,
        onUnmountAutoFocus: f,
        ...m
      } = r,
      [p, v] = y.useState(null),
      x = ur(d),
      w = ur(f),
      g = y.useRef(null),
      C = et(a, (b) => v(b)),
      S = y.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    y.useEffect(() => {
      if (l) {
        let b = function (j) {
            if (S.paused || !p) return;
            const D = j.target;
            p.contains(D) ? (g.current = D) : cr(g.current, { select: !0 });
          },
          N = function (j) {
            if (S.paused || !p) return;
            const D = j.relatedTarget;
            D !== null && (p.contains(D) || cr(g.current, { select: !0 }));
          },
          O = function (j) {
            if (document.activeElement === document.body)
              for (const F of j) F.removedNodes.length > 0 && cr(p);
          };
        document.addEventListener("focusin", b),
          document.addEventListener("focusout", N);
        const I = new MutationObserver(O);
        return (
          p && I.observe(p, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", b),
              document.removeEventListener("focusout", N),
              I.disconnect();
          }
        );
      }
    }, [l, p, S.paused]),
      y.useEffect(() => {
        if (p) {
          am.add(S);
          const b = document.activeElement;
          if (!p.contains(b)) {
            const O = new CustomEvent(oc, rm);
            p.addEventListener(oc, x),
              p.dispatchEvent(O),
              O.defaultPrevented ||
                (Yx(Zx(Sp(p)), { select: !0 }),
                document.activeElement === b && cr(p));
          }
          return () => {
            p.removeEventListener(oc, x),
              setTimeout(() => {
                const O = new CustomEvent(ac, rm);
                p.addEventListener(ac, w),
                  p.dispatchEvent(O),
                  O.defaultPrevented || cr(b ?? document.body, { select: !0 }),
                  p.removeEventListener(ac, w),
                  am.remove(S);
              }, 0);
          };
        }
      }, [p, x, w, S]);
    const P = y.useCallback(
      (b) => {
        if ((!s && !l) || S.paused) return;
        const N = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey,
          O = document.activeElement;
        if (N && O) {
          const I = b.currentTarget,
            [j, D] = Gx(I);
          j && D
            ? !b.shiftKey && O === D
              ? (b.preventDefault(), s && cr(j, { select: !0 }))
              : b.shiftKey &&
                O === j &&
                (b.preventDefault(), s && cr(D, { select: !0 }))
            : O === I && b.preventDefault();
        }
      },
      [s, l, S.paused]
    );
    return c.jsx(Ie.div, { tabIndex: -1, ...m, ref: C, onKeyDown: P });
  });
bp.displayName = Kx;
function Yx(r, { select: a = !1 } = {}) {
  const s = document.activeElement;
  for (const l of r)
    if ((cr(l, { select: a }), document.activeElement !== s)) return;
}
function Gx(r) {
  const a = Sp(r),
    s = om(a, r),
    l = om(a.reverse(), r);
  return [s, l];
}
function Sp(r) {
  const a = [],
    s = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (l) => {
        const d = l.tagName === "INPUT" && l.type === "hidden";
        return l.disabled || l.hidden || d
          ? NodeFilter.FILTER_SKIP
          : l.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) a.push(s.currentNode);
  return a;
}
function om(r, a) {
  for (const s of r) if (!Xx(s, { upTo: a })) return s;
}
function Xx(r, { upTo: a }) {
  if (getComputedStyle(r).visibility === "hidden") return !0;
  for (; r; ) {
    if (a !== void 0 && r === a) return !1;
    if (getComputedStyle(r).display === "none") return !0;
    r = r.parentElement;
  }
  return !1;
}
function Qx(r) {
  return r instanceof HTMLInputElement && "select" in r;
}
function cr(r, { select: a = !1 } = {}) {
  if (r && r.focus) {
    const s = document.activeElement;
    r.focus({ preventScroll: !0 }), r !== s && Qx(r) && a && r.select();
  }
}
var am = Jx();
function Jx() {
  let r = [];
  return {
    add(a) {
      const s = r[0];
      a !== s && s?.pause(), (r = sm(r, a)), r.unshift(a);
    },
    remove(a) {
      (r = sm(r, a)), r[0]?.resume();
    },
  };
}
function sm(r, a) {
  const s = [...r],
    l = s.indexOf(a);
  return l !== -1 && s.splice(l, 1), s;
}
function Zx(r) {
  return r.filter((a) => a.tagName !== "A");
}
const qx = ["top", "right", "bottom", "left"],
  dr = Math.min,
  zt = Math.max,
  Js = Math.round,
  Hs = Math.floor,
  hn = (r) => ({ x: r, y: r }),
  ew = { left: "right", right: "left", bottom: "top", top: "bottom" },
  tw = { start: "end", end: "start" };
function Nc(r, a, s) {
  return zt(r, dr(a, s));
}
function In(r, a) {
  return typeof r == "function" ? r(a) : r;
}
function An(r) {
  return r.split("-")[0];
}
function ko(r) {
  return r.split("-")[1];
}
function Hc(r) {
  return r === "x" ? "y" : "x";
}
function Bc(r) {
  return r === "y" ? "height" : "width";
}
const nw = new Set(["top", "bottom"]);
function pn(r) {
  return nw.has(An(r)) ? "y" : "x";
}
function $c(r) {
  return Hc(pn(r));
}
function rw(r, a, s) {
  s === void 0 && (s = !1);
  const l = ko(r),
    d = $c(r),
    f = Bc(d);
  let m =
    d === "x"
      ? l === (s ? "end" : "start")
        ? "right"
        : "left"
      : l === "start"
      ? "bottom"
      : "top";
  return a.reference[f] > a.floating[f] && (m = Zs(m)), [m, Zs(m)];
}
function ow(r) {
  const a = Zs(r);
  return [_c(r), a, _c(a)];
}
function _c(r) {
  return r.replace(/start|end/g, (a) => tw[a]);
}
const im = ["left", "right"],
  lm = ["right", "left"],
  aw = ["top", "bottom"],
  sw = ["bottom", "top"];
function iw(r, a, s) {
  switch (r) {
    case "top":
    case "bottom":
      return s ? (a ? lm : im) : a ? im : lm;
    case "left":
    case "right":
      return a ? aw : sw;
    default:
      return [];
  }
}
function lw(r, a, s, l) {
  const d = ko(r);
  let f = iw(An(r), s === "start", l);
  return (
    d && ((f = f.map((m) => m + "-" + d)), a && (f = f.concat(f.map(_c)))), f
  );
}
function Zs(r) {
  return r.replace(/left|right|bottom|top/g, (a) => ew[a]);
}
function cw(r) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...r };
}
function Np(r) {
  return typeof r != "number"
    ? cw(r)
    : { top: r, right: r, bottom: r, left: r };
}
function qs(r) {
  const { x: a, y: s, width: l, height: d } = r;
  return {
    width: l,
    height: d,
    top: s,
    left: a,
    right: a + l,
    bottom: s + d,
    x: a,
    y: s,
  };
}
function cm(r, a, s) {
  let { reference: l, floating: d } = r;
  const f = pn(a),
    m = $c(a),
    p = Bc(m),
    v = An(a),
    x = f === "y",
    w = l.x + l.width / 2 - d.width / 2,
    g = l.y + l.height / 2 - d.height / 2,
    C = l[p] / 2 - d[p] / 2;
  let S;
  switch (v) {
    case "top":
      S = { x: w, y: l.y - d.height };
      break;
    case "bottom":
      S = { x: w, y: l.y + l.height };
      break;
    case "right":
      S = { x: l.x + l.width, y: g };
      break;
    case "left":
      S = { x: l.x - d.width, y: g };
      break;
    default:
      S = { x: l.x, y: l.y };
  }
  switch (ko(a)) {
    case "start":
      S[m] -= C * (s && x ? -1 : 1);
      break;
    case "end":
      S[m] += C * (s && x ? -1 : 1);
      break;
  }
  return S;
}
const uw = async (r, a, s) => {
  const {
      placement: l = "bottom",
      strategy: d = "absolute",
      middleware: f = [],
      platform: m,
    } = s,
    p = f.filter(Boolean),
    v = await (m.isRTL == null ? void 0 : m.isRTL(a));
  let x = await m.getElementRects({ reference: r, floating: a, strategy: d }),
    { x: w, y: g } = cm(x, l, v),
    C = l,
    S = {},
    P = 0;
  for (let b = 0; b < p.length; b++) {
    const { name: N, fn: O } = p[b],
      {
        x: I,
        y: j,
        data: D,
        reset: F,
      } = await O({
        x: w,
        y: g,
        initialPlacement: l,
        placement: C,
        strategy: d,
        middlewareData: S,
        rects: x,
        platform: m,
        elements: { reference: r, floating: a },
      });
    (w = I ?? w),
      (g = j ?? g),
      (S = { ...S, [N]: { ...S[N], ...D } }),
      F &&
        P <= 50 &&
        (P++,
        typeof F == "object" &&
          (F.placement && (C = F.placement),
          F.rects &&
            (x =
              F.rects === !0
                ? await m.getElementRects({
                    reference: r,
                    floating: a,
                    strategy: d,
                  })
                : F.rects),
          ({ x: w, y: g } = cm(x, C, v))),
        (b = -1));
  }
  return { x: w, y: g, placement: C, strategy: d, middlewareData: S };
};
async function ga(r, a) {
  var s;
  a === void 0 && (a = {});
  const { x: l, y: d, platform: f, rects: m, elements: p, strategy: v } = r,
    {
      boundary: x = "clippingAncestors",
      rootBoundary: w = "viewport",
      elementContext: g = "floating",
      altBoundary: C = !1,
      padding: S = 0,
    } = In(a, r),
    P = Np(S),
    N = p[C ? (g === "floating" ? "reference" : "floating") : g],
    O = qs(
      await f.getClippingRect({
        element:
          (s = await (f.isElement == null ? void 0 : f.isElement(N))) == null ||
          s
            ? N
            : N.contextElement ||
              (await (f.getDocumentElement == null
                ? void 0
                : f.getDocumentElement(p.floating))),
        boundary: x,
        rootBoundary: w,
        strategy: v,
      })
    ),
    I =
      g === "floating"
        ? { x: l, y: d, width: m.floating.width, height: m.floating.height }
        : m.reference,
    j = await (f.getOffsetParent == null
      ? void 0
      : f.getOffsetParent(p.floating)),
    D = (await (f.isElement == null ? void 0 : f.isElement(j)))
      ? (await (f.getScale == null ? void 0 : f.getScale(j))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    F = qs(
      f.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: p,
            rect: I,
            offsetParent: j,
            strategy: v,
          })
        : I
    );
  return {
    top: (O.top - F.top + P.top) / D.y,
    bottom: (F.bottom - O.bottom + P.bottom) / D.y,
    left: (O.left - F.left + P.left) / D.x,
    right: (F.right - O.right + P.right) / D.x,
  };
}
const dw = (r) => ({
    name: "arrow",
    options: r,
    async fn(a) {
      const {
          x: s,
          y: l,
          placement: d,
          rects: f,
          platform: m,
          elements: p,
          middlewareData: v,
        } = a,
        { element: x, padding: w = 0 } = In(r, a) || {};
      if (x == null) return {};
      const g = Np(w),
        C = { x: s, y: l },
        S = $c(d),
        P = Bc(S),
        b = await m.getDimensions(x),
        N = S === "y",
        O = N ? "top" : "left",
        I = N ? "bottom" : "right",
        j = N ? "clientHeight" : "clientWidth",
        D = f.reference[P] + f.reference[S] - C[S] - f.floating[P],
        F = C[S] - f.reference[S],
        Z = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(x));
      let B = Z ? Z[j] : 0;
      (!B || !(await (m.isElement == null ? void 0 : m.isElement(Z)))) &&
        (B = p.floating[j] || f.floating[P]);
      const H = D / 2 - F / 2,
        ie = B / 2 - b[P] / 2 - 1,
        de = dr(g[O], ie),
        xe = dr(g[I], ie),
        we = de,
        me = B - b[P] - xe,
        pe = B / 2 - b[P] / 2 + H,
        fe = Nc(we, pe, me),
        W =
          !v.arrow &&
          ko(d) != null &&
          pe !== fe &&
          f.reference[P] / 2 - (pe < we ? de : xe) - b[P] / 2 < 0,
        q = W ? (pe < we ? pe - we : pe - me) : 0;
      return {
        [S]: C[S] + q,
        data: {
          [S]: fe,
          centerOffset: pe - fe - q,
          ...(W && { alignmentOffset: q }),
        },
        reset: W,
      };
    },
  }),
  fw = function (r) {
    return (
      r === void 0 && (r = {}),
      {
        name: "flip",
        options: r,
        async fn(a) {
          var s, l;
          const {
              placement: d,
              middlewareData: f,
              rects: m,
              initialPlacement: p,
              platform: v,
              elements: x,
            } = a,
            {
              mainAxis: w = !0,
              crossAxis: g = !0,
              fallbackPlacements: C,
              fallbackStrategy: S = "bestFit",
              fallbackAxisSideDirection: P = "none",
              flipAlignment: b = !0,
              ...N
            } = In(r, a);
          if ((s = f.arrow) != null && s.alignmentOffset) return {};
          const O = An(d),
            I = pn(p),
            j = An(p) === p,
            D = await (v.isRTL == null ? void 0 : v.isRTL(x.floating)),
            F = C || (j || !b ? [Zs(p)] : ow(p)),
            Z = P !== "none";
          !C && Z && F.push(...lw(p, b, P, D));
          const B = [p, ...F],
            H = await ga(a, N),
            ie = [];
          let de = ((l = f.flip) == null ? void 0 : l.overflows) || [];
          if ((w && ie.push(H[O]), g)) {
            const pe = rw(d, m, D);
            ie.push(H[pe[0]], H[pe[1]]);
          }
          if (
            ((de = [...de, { placement: d, overflows: ie }]),
            !ie.every((pe) => pe <= 0))
          ) {
            var xe, we;
            const pe = (((xe = f.flip) == null ? void 0 : xe.index) || 0) + 1,
              fe = B[pe];
            if (
              fe &&
              (!(g === "alignment" ? I !== pn(fe) : !1) ||
                de.every((R) =>
                  pn(R.placement) === I ? R.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: pe, overflows: de },
                reset: { placement: fe },
              };
            let W =
              (we = de
                .filter((q) => q.overflows[0] <= 0)
                .sort((q, R) => q.overflows[1] - R.overflows[1])[0]) == null
                ? void 0
                : we.placement;
            if (!W)
              switch (S) {
                case "bestFit": {
                  var me;
                  const q =
                    (me = de
                      .filter((R) => {
                        if (Z) {
                          const Y = pn(R.placement);
                          return Y === I || Y === "y";
                        }
                        return !0;
                      })
                      .map((R) => [
                        R.placement,
                        R.overflows
                          .filter((Y) => Y > 0)
                          .reduce((Y, G) => Y + G, 0),
                      ])
                      .sort((R, Y) => R[1] - Y[1])[0]) == null
                      ? void 0
                      : me[0];
                  q && (W = q);
                  break;
                }
                case "initialPlacement":
                  W = p;
                  break;
              }
            if (d !== W) return { reset: { placement: W } };
          }
          return {};
        },
      }
    );
  };
function um(r, a) {
  return {
    top: r.top - a.height,
    right: r.right - a.width,
    bottom: r.bottom - a.height,
    left: r.left - a.width,
  };
}
function dm(r) {
  return qx.some((a) => r[a] >= 0);
}
const mw = function (r) {
    return (
      r === void 0 && (r = {}),
      {
        name: "hide",
        options: r,
        async fn(a) {
          const { rects: s } = a,
            { strategy: l = "referenceHidden", ...d } = In(r, a);
          switch (l) {
            case "referenceHidden": {
              const f = await ga(a, { ...d, elementContext: "reference" }),
                m = um(f, s.reference);
              return {
                data: { referenceHiddenOffsets: m, referenceHidden: dm(m) },
              };
            }
            case "escaped": {
              const f = await ga(a, { ...d, altBoundary: !0 }),
                m = um(f, s.floating);
              return { data: { escapedOffsets: m, escaped: dm(m) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  _p = new Set(["left", "top"]);
async function pw(r, a) {
  const { placement: s, platform: l, elements: d } = r,
    f = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)),
    m = An(s),
    p = ko(s),
    v = pn(s) === "y",
    x = _p.has(m) ? -1 : 1,
    w = f && v ? -1 : 1,
    g = In(a, r);
  let {
    mainAxis: C,
    crossAxis: S,
    alignmentAxis: P,
  } = typeof g == "number"
    ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: g.mainAxis || 0,
        crossAxis: g.crossAxis || 0,
        alignmentAxis: g.alignmentAxis,
      };
  return (
    p && typeof P == "number" && (S = p === "end" ? P * -1 : P),
    v ? { x: S * w, y: C * x } : { x: C * x, y: S * w }
  );
}
const hw = function (r) {
    return (
      r === void 0 && (r = 0),
      {
        name: "offset",
        options: r,
        async fn(a) {
          var s, l;
          const { x: d, y: f, placement: m, middlewareData: p } = a,
            v = await pw(a, r);
          return m === ((s = p.offset) == null ? void 0 : s.placement) &&
            (l = p.arrow) != null &&
            l.alignmentOffset
            ? {}
            : { x: d + v.x, y: f + v.y, data: { ...v, placement: m } };
        },
      }
    );
  },
  gw = function (r) {
    return (
      r === void 0 && (r = {}),
      {
        name: "shift",
        options: r,
        async fn(a) {
          const { x: s, y: l, placement: d } = a,
            {
              mainAxis: f = !0,
              crossAxis: m = !1,
              limiter: p = {
                fn: (N) => {
                  let { x: O, y: I } = N;
                  return { x: O, y: I };
                },
              },
              ...v
            } = In(r, a),
            x = { x: s, y: l },
            w = await ga(a, v),
            g = pn(An(d)),
            C = Hc(g);
          let S = x[C],
            P = x[g];
          if (f) {
            const N = C === "y" ? "top" : "left",
              O = C === "y" ? "bottom" : "right",
              I = S + w[N],
              j = S - w[O];
            S = Nc(I, S, j);
          }
          if (m) {
            const N = g === "y" ? "top" : "left",
              O = g === "y" ? "bottom" : "right",
              I = P + w[N],
              j = P - w[O];
            P = Nc(I, P, j);
          }
          const b = p.fn({ ...a, [C]: S, [g]: P });
          return {
            ...b,
            data: { x: b.x - s, y: b.y - l, enabled: { [C]: f, [g]: m } },
          };
        },
      }
    );
  },
  vw = function (r) {
    return (
      r === void 0 && (r = {}),
      {
        options: r,
        fn(a) {
          const { x: s, y: l, placement: d, rects: f, middlewareData: m } = a,
            { offset: p = 0, mainAxis: v = !0, crossAxis: x = !0 } = In(r, a),
            w = { x: s, y: l },
            g = pn(d),
            C = Hc(g);
          let S = w[C],
            P = w[g];
          const b = In(p, a),
            N =
              typeof b == "number"
                ? { mainAxis: b, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...b };
          if (v) {
            const j = C === "y" ? "height" : "width",
              D = f.reference[C] - f.floating[j] + N.mainAxis,
              F = f.reference[C] + f.reference[j] - N.mainAxis;
            S < D ? (S = D) : S > F && (S = F);
          }
          if (x) {
            var O, I;
            const j = C === "y" ? "width" : "height",
              D = _p.has(An(d)),
              F =
                f.reference[g] -
                f.floating[j] +
                ((D && ((O = m.offset) == null ? void 0 : O[g])) || 0) +
                (D ? 0 : N.crossAxis),
              Z =
                f.reference[g] +
                f.reference[j] +
                (D ? 0 : ((I = m.offset) == null ? void 0 : I[g]) || 0) -
                (D ? N.crossAxis : 0);
            P < F ? (P = F) : P > Z && (P = Z);
          }
          return { [C]: S, [g]: P };
        },
      }
    );
  },
  yw = function (r) {
    return (
      r === void 0 && (r = {}),
      {
        name: "size",
        options: r,
        async fn(a) {
          var s, l;
          const { placement: d, rects: f, platform: m, elements: p } = a,
            { apply: v = () => {}, ...x } = In(r, a),
            w = await ga(a, x),
            g = An(d),
            C = ko(d),
            S = pn(d) === "y",
            { width: P, height: b } = f.floating;
          let N, O;
          g === "top" || g === "bottom"
            ? ((N = g),
              (O =
                C ===
                ((await (m.isRTL == null ? void 0 : m.isRTL(p.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((O = g), (N = C === "end" ? "top" : "bottom"));
          const I = b - w.top - w.bottom,
            j = P - w.left - w.right,
            D = dr(b - w[N], I),
            F = dr(P - w[O], j),
            Z = !a.middlewareData.shift;
          let B = D,
            H = F;
          if (
            ((s = a.middlewareData.shift) != null && s.enabled.x && (H = j),
            (l = a.middlewareData.shift) != null && l.enabled.y && (B = I),
            Z && !C)
          ) {
            const de = zt(w.left, 0),
              xe = zt(w.right, 0),
              we = zt(w.top, 0),
              me = zt(w.bottom, 0);
            S
              ? (H =
                  P -
                  2 * (de !== 0 || xe !== 0 ? de + xe : zt(w.left, w.right)))
              : (B =
                  b -
                  2 * (we !== 0 || me !== 0 ? we + me : zt(w.top, w.bottom)));
          }
          await v({ ...a, availableWidth: H, availableHeight: B });
          const ie = await m.getDimensions(p.floating);
          return P !== ie.width || b !== ie.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ri() {
  return typeof window < "u";
}
function bo(r) {
  return Cp(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function Ft(r) {
  var a;
  return (
    (r == null || (a = r.ownerDocument) == null ? void 0 : a.defaultView) ||
    window
  );
}
function vn(r) {
  var a;
  return (a = (Cp(r) ? r.ownerDocument : r.document) || window.document) == null
    ? void 0
    : a.documentElement;
}
function Cp(r) {
  return ri() ? r instanceof Node || r instanceof Ft(r).Node : !1;
}
function rn(r) {
  return ri() ? r instanceof Element || r instanceof Ft(r).Element : !1;
}
function gn(r) {
  return ri() ? r instanceof HTMLElement || r instanceof Ft(r).HTMLElement : !1;
}
function fm(r) {
  return !ri() || typeof ShadowRoot > "u"
    ? !1
    : r instanceof ShadowRoot || r instanceof Ft(r).ShadowRoot;
}
const xw = new Set(["inline", "contents"]);
function Sa(r) {
  const { overflow: a, overflowX: s, overflowY: l, display: d } = on(r);
  return /auto|scroll|overlay|hidden|clip/.test(a + l + s) && !xw.has(d);
}
const ww = new Set(["table", "td", "th"]);
function kw(r) {
  return ww.has(bo(r));
}
const bw = [":popover-open", ":modal"];
function oi(r) {
  return bw.some((a) => {
    try {
      return r.matches(a);
    } catch {
      return !1;
    }
  });
}
const Sw = ["transform", "translate", "scale", "rotate", "perspective"],
  Nw = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  _w = ["paint", "layout", "strict", "content"];
function Vc(r) {
  const a = Wc(),
    s = rn(r) ? on(r) : r;
  return (
    Sw.some((l) => (s[l] ? s[l] !== "none" : !1)) ||
    (s.containerType ? s.containerType !== "normal" : !1) ||
    (!a && (s.backdropFilter ? s.backdropFilter !== "none" : !1)) ||
    (!a && (s.filter ? s.filter !== "none" : !1)) ||
    Nw.some((l) => (s.willChange || "").includes(l)) ||
    _w.some((l) => (s.contain || "").includes(l))
  );
}
function Cw(r) {
  let a = fr(r);
  for (; gn(a) && !yo(a); ) {
    if (Vc(a)) return a;
    if (oi(a)) return null;
    a = fr(a);
  }
  return null;
}
function Wc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ew = new Set(["html", "body", "#document"]);
function yo(r) {
  return Ew.has(bo(r));
}
function on(r) {
  return Ft(r).getComputedStyle(r);
}
function ai(r) {
  return rn(r)
    ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop }
    : { scrollLeft: r.scrollX, scrollTop: r.scrollY };
}
function fr(r) {
  if (bo(r) === "html") return r;
  const a = r.assignedSlot || r.parentNode || (fm(r) && r.host) || vn(r);
  return fm(a) ? a.host : a;
}
function Ep(r) {
  const a = fr(r);
  return yo(a)
    ? r.ownerDocument
      ? r.ownerDocument.body
      : r.body
    : gn(a) && Sa(a)
    ? a
    : Ep(a);
}
function va(r, a, s) {
  var l;
  a === void 0 && (a = []), s === void 0 && (s = !0);
  const d = Ep(r),
    f = d === ((l = r.ownerDocument) == null ? void 0 : l.body),
    m = Ft(d);
  if (f) {
    const p = Cc(m);
    return a.concat(
      m,
      m.visualViewport || [],
      Sa(d) ? d : [],
      p && s ? va(p) : []
    );
  }
  return a.concat(d, va(d, [], s));
}
function Cc(r) {
  return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
function jp(r) {
  const a = on(r);
  let s = parseFloat(a.width) || 0,
    l = parseFloat(a.height) || 0;
  const d = gn(r),
    f = d ? r.offsetWidth : s,
    m = d ? r.offsetHeight : l,
    p = Js(s) !== f || Js(l) !== m;
  return p && ((s = f), (l = m)), { width: s, height: l, $: p };
}
function Uc(r) {
  return rn(r) ? r : r.contextElement;
}
function go(r) {
  const a = Uc(r);
  if (!gn(a)) return hn(1);
  const s = a.getBoundingClientRect(),
    { width: l, height: d, $: f } = jp(a);
  let m = (f ? Js(s.width) : s.width) / l,
    p = (f ? Js(s.height) : s.height) / d;
  return (
    (!m || !Number.isFinite(m)) && (m = 1),
    (!p || !Number.isFinite(p)) && (p = 1),
    { x: m, y: p }
  );
}
const jw = hn(0);
function Tp(r) {
  const a = Ft(r);
  return !Wc() || !a.visualViewport
    ? jw
    : { x: a.visualViewport.offsetLeft, y: a.visualViewport.offsetTop };
}
function Tw(r, a, s) {
  return a === void 0 && (a = !1), !s || (a && s !== Ft(r)) ? !1 : a;
}
function Ar(r, a, s, l) {
  a === void 0 && (a = !1), s === void 0 && (s = !1);
  const d = r.getBoundingClientRect(),
    f = Uc(r);
  let m = hn(1);
  a && (l ? rn(l) && (m = go(l)) : (m = go(r)));
  const p = Tw(f, s, l) ? Tp(f) : hn(0);
  let v = (d.left + p.x) / m.x,
    x = (d.top + p.y) / m.y,
    w = d.width / m.x,
    g = d.height / m.y;
  if (f) {
    const C = Ft(f),
      S = l && rn(l) ? Ft(l) : l;
    let P = C,
      b = Cc(P);
    for (; b && l && S !== P; ) {
      const N = go(b),
        O = b.getBoundingClientRect(),
        I = on(b),
        j = O.left + (b.clientLeft + parseFloat(I.paddingLeft)) * N.x,
        D = O.top + (b.clientTop + parseFloat(I.paddingTop)) * N.y;
      (v *= N.x),
        (x *= N.y),
        (w *= N.x),
        (g *= N.y),
        (v += j),
        (x += D),
        (P = Ft(b)),
        (b = Cc(P));
    }
  }
  return qs({ width: w, height: g, x: v, y: x });
}
function si(r, a) {
  const s = ai(r).scrollLeft;
  return a ? a.left + s : Ar(vn(r)).left + s;
}
function Pp(r, a) {
  const s = r.getBoundingClientRect(),
    l = s.left + a.scrollLeft - si(r, s),
    d = s.top + a.scrollTop;
  return { x: l, y: d };
}
function Pw(r) {
  let { elements: a, rect: s, offsetParent: l, strategy: d } = r;
  const f = d === "fixed",
    m = vn(l),
    p = a ? oi(a.floating) : !1;
  if (l === m || (p && f)) return s;
  let v = { scrollLeft: 0, scrollTop: 0 },
    x = hn(1);
  const w = hn(0),
    g = gn(l);
  if (
    (g || (!g && !f)) &&
    ((bo(l) !== "body" || Sa(m)) && (v = ai(l)), gn(l))
  ) {
    const S = Ar(l);
    (x = go(l)), (w.x = S.x + l.clientLeft), (w.y = S.y + l.clientTop);
  }
  const C = m && !g && !f ? Pp(m, v) : hn(0);
  return {
    width: s.width * x.x,
    height: s.height * x.y,
    x: s.x * x.x - v.scrollLeft * x.x + w.x + C.x,
    y: s.y * x.y - v.scrollTop * x.y + w.y + C.y,
  };
}
function Rw(r) {
  return Array.from(r.getClientRects());
}
function Mw(r) {
  const a = vn(r),
    s = ai(r),
    l = r.ownerDocument.body,
    d = zt(a.scrollWidth, a.clientWidth, l.scrollWidth, l.clientWidth),
    f = zt(a.scrollHeight, a.clientHeight, l.scrollHeight, l.clientHeight);
  let m = -s.scrollLeft + si(r);
  const p = -s.scrollTop;
  return (
    on(l).direction === "rtl" && (m += zt(a.clientWidth, l.clientWidth) - d),
    { width: d, height: f, x: m, y: p }
  );
}
const mm = 25;
function Iw(r, a) {
  const s = Ft(r),
    l = vn(r),
    d = s.visualViewport;
  let f = l.clientWidth,
    m = l.clientHeight,
    p = 0,
    v = 0;
  if (d) {
    (f = d.width), (m = d.height);
    const w = Wc();
    (!w || (w && a === "fixed")) && ((p = d.offsetLeft), (v = d.offsetTop));
  }
  const x = si(l);
  if (x <= 0) {
    const w = l.ownerDocument,
      g = w.body,
      C = getComputedStyle(g),
      S =
        (w.compatMode === "CSS1Compat" &&
          parseFloat(C.marginLeft) + parseFloat(C.marginRight)) ||
        0,
      P = Math.abs(l.clientWidth - g.clientWidth - S);
    P <= mm && (f -= P);
  } else x <= mm && (f += x);
  return { width: f, height: m, x: p, y: v };
}
const Aw = new Set(["absolute", "fixed"]);
function Ow(r, a) {
  const s = Ar(r, !0, a === "fixed"),
    l = s.top + r.clientTop,
    d = s.left + r.clientLeft,
    f = gn(r) ? go(r) : hn(1),
    m = r.clientWidth * f.x,
    p = r.clientHeight * f.y,
    v = d * f.x,
    x = l * f.y;
  return { width: m, height: p, x: v, y: x };
}
function pm(r, a, s) {
  let l;
  if (a === "viewport") l = Iw(r, s);
  else if (a === "document") l = Mw(vn(r));
  else if (rn(a)) l = Ow(a, s);
  else {
    const d = Tp(r);
    l = { x: a.x - d.x, y: a.y - d.y, width: a.width, height: a.height };
  }
  return qs(l);
}
function Rp(r, a) {
  const s = fr(r);
  return s === a || !rn(s) || yo(s)
    ? !1
    : on(s).position === "fixed" || Rp(s, a);
}
function Lw(r, a) {
  const s = a.get(r);
  if (s) return s;
  let l = va(r, [], !1).filter((p) => rn(p) && bo(p) !== "body"),
    d = null;
  const f = on(r).position === "fixed";
  let m = f ? fr(r) : r;
  for (; rn(m) && !yo(m); ) {
    const p = on(m),
      v = Vc(m);
    !v && p.position === "fixed" && (d = null),
      (
        f
          ? !v && !d
          : (!v && p.position === "static" && !!d && Aw.has(d.position)) ||
            (Sa(m) && !v && Rp(r, m))
      )
        ? (l = l.filter((w) => w !== m))
        : (d = p),
      (m = fr(m));
  }
  return a.set(r, l), l;
}
function Dw(r) {
  let { element: a, boundary: s, rootBoundary: l, strategy: d } = r;
  const m = [
      ...(s === "clippingAncestors"
        ? oi(a)
          ? []
          : Lw(a, this._c)
        : [].concat(s)),
      l,
    ],
    p = m[0],
    v = m.reduce((x, w) => {
      const g = pm(a, w, d);
      return (
        (x.top = zt(g.top, x.top)),
        (x.right = dr(g.right, x.right)),
        (x.bottom = dr(g.bottom, x.bottom)),
        (x.left = zt(g.left, x.left)),
        x
      );
    }, pm(a, p, d));
  return {
    width: v.right - v.left,
    height: v.bottom - v.top,
    x: v.left,
    y: v.top,
  };
}
function zw(r) {
  const { width: a, height: s } = jp(r);
  return { width: a, height: s };
}
function Fw(r, a, s) {
  const l = gn(a),
    d = vn(a),
    f = s === "fixed",
    m = Ar(r, !0, f, a);
  let p = { scrollLeft: 0, scrollTop: 0 };
  const v = hn(0);
  function x() {
    v.x = si(d);
  }
  if (l || (!l && !f))
    if (((bo(a) !== "body" || Sa(d)) && (p = ai(a)), l)) {
      const S = Ar(a, !0, f, a);
      (v.x = S.x + a.clientLeft), (v.y = S.y + a.clientTop);
    } else d && x();
  f && !l && d && x();
  const w = d && !l && !f ? Pp(d, p) : hn(0),
    g = m.left + p.scrollLeft - v.x - w.x,
    C = m.top + p.scrollTop - v.y - w.y;
  return { x: g, y: C, width: m.width, height: m.height };
}
function sc(r) {
  return on(r).position === "static";
}
function hm(r, a) {
  if (!gn(r) || on(r).position === "fixed") return null;
  if (a) return a(r);
  let s = r.offsetParent;
  return vn(r) === s && (s = s.ownerDocument.body), s;
}
function Mp(r, a) {
  const s = Ft(r);
  if (oi(r)) return s;
  if (!gn(r)) {
    let d = fr(r);
    for (; d && !yo(d); ) {
      if (rn(d) && !sc(d)) return d;
      d = fr(d);
    }
    return s;
  }
  let l = hm(r, a);
  for (; l && kw(l) && sc(l); ) l = hm(l, a);
  return l && yo(l) && sc(l) && !Vc(l) ? s : l || Cw(r) || s;
}
const Hw = async function (r) {
  const a = this.getOffsetParent || Mp,
    s = this.getDimensions,
    l = await s(r.floating);
  return {
    reference: Fw(r.reference, await a(r.floating), r.strategy),
    floating: { x: 0, y: 0, width: l.width, height: l.height },
  };
};
function Bw(r) {
  return on(r).direction === "rtl";
}
const $w = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Pw,
  getDocumentElement: vn,
  getClippingRect: Dw,
  getOffsetParent: Mp,
  getElementRects: Hw,
  getClientRects: Rw,
  getDimensions: zw,
  getScale: go,
  isElement: rn,
  isRTL: Bw,
};
function Ip(r, a) {
  return (
    r.x === a.x && r.y === a.y && r.width === a.width && r.height === a.height
  );
}
function Vw(r, a) {
  let s = null,
    l;
  const d = vn(r);
  function f() {
    var p;
    clearTimeout(l), (p = s) == null || p.disconnect(), (s = null);
  }
  function m(p, v) {
    p === void 0 && (p = !1), v === void 0 && (v = 1), f();
    const x = r.getBoundingClientRect(),
      { left: w, top: g, width: C, height: S } = x;
    if ((p || a(), !C || !S)) return;
    const P = Hs(g),
      b = Hs(d.clientWidth - (w + C)),
      N = Hs(d.clientHeight - (g + S)),
      O = Hs(w),
      j = {
        rootMargin: -P + "px " + -b + "px " + -N + "px " + -O + "px",
        threshold: zt(0, dr(1, v)) || 1,
      };
    let D = !0;
    function F(Z) {
      const B = Z[0].intersectionRatio;
      if (B !== v) {
        if (!D) return m();
        B
          ? m(!1, B)
          : (l = setTimeout(() => {
              m(!1, 1e-7);
            }, 1e3));
      }
      B === 1 && !Ip(x, r.getBoundingClientRect()) && m(), (D = !1);
    }
    try {
      s = new IntersectionObserver(F, { ...j, root: d.ownerDocument });
    } catch {
      s = new IntersectionObserver(F, j);
    }
    s.observe(r);
  }
  return m(!0), f;
}
function Ww(r, a, s, l) {
  l === void 0 && (l = {});
  const {
      ancestorScroll: d = !0,
      ancestorResize: f = !0,
      elementResize: m = typeof ResizeObserver == "function",
      layoutShift: p = typeof IntersectionObserver == "function",
      animationFrame: v = !1,
    } = l,
    x = Uc(r),
    w = d || f ? [...(x ? va(x) : []), ...va(a)] : [];
  w.forEach((O) => {
    d && O.addEventListener("scroll", s, { passive: !0 }),
      f && O.addEventListener("resize", s);
  });
  const g = x && p ? Vw(x, s) : null;
  let C = -1,
    S = null;
  m &&
    ((S = new ResizeObserver((O) => {
      let [I] = O;
      I &&
        I.target === x &&
        S &&
        (S.unobserve(a),
        cancelAnimationFrame(C),
        (C = requestAnimationFrame(() => {
          var j;
          (j = S) == null || j.observe(a);
        }))),
        s();
    })),
    x && !v && S.observe(x),
    S.observe(a));
  let P,
    b = v ? Ar(r) : null;
  v && N();
  function N() {
    const O = Ar(r);
    b && !Ip(b, O) && s(), (b = O), (P = requestAnimationFrame(N));
  }
  return (
    s(),
    () => {
      var O;
      w.forEach((I) => {
        d && I.removeEventListener("scroll", s),
          f && I.removeEventListener("resize", s);
      }),
        g?.(),
        (O = S) == null || O.disconnect(),
        (S = null),
        v && cancelAnimationFrame(P);
    }
  );
}
const Uw = hw,
  Kw = gw,
  Yw = fw,
  Gw = yw,
  Xw = mw,
  gm = dw,
  Qw = vw,
  Jw = (r, a, s) => {
    const l = new Map(),
      d = { platform: $w, ...s },
      f = { ...d.platform, _c: l };
    return uw(r, a, { ...d, platform: f });
  };
var Zw = typeof document < "u",
  qw = function () {},
  Us = Zw ? y.useLayoutEffect : qw;
function ei(r, a) {
  if (r === a) return !0;
  if (typeof r != typeof a) return !1;
  if (typeof r == "function" && r.toString() === a.toString()) return !0;
  let s, l, d;
  if (r && a && typeof r == "object") {
    if (Array.isArray(r)) {
      if (((s = r.length), s !== a.length)) return !1;
      for (l = s; l-- !== 0; ) if (!ei(r[l], a[l])) return !1;
      return !0;
    }
    if (((d = Object.keys(r)), (s = d.length), s !== Object.keys(a).length))
      return !1;
    for (l = s; l-- !== 0; ) if (!{}.hasOwnProperty.call(a, d[l])) return !1;
    for (l = s; l-- !== 0; ) {
      const f = d[l];
      if (!(f === "_owner" && r.$$typeof) && !ei(r[f], a[f])) return !1;
    }
    return !0;
  }
  return r !== r && a !== a;
}
function Ap(r) {
  return typeof window > "u"
    ? 1
    : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vm(r, a) {
  const s = Ap(r);
  return Math.round(a * s) / s;
}
function ic(r) {
  const a = y.useRef(r);
  return (
    Us(() => {
      a.current = r;
    }),
    a
  );
}
function e1(r) {
  r === void 0 && (r = {});
  const {
      placement: a = "bottom",
      strategy: s = "absolute",
      middleware: l = [],
      platform: d,
      elements: { reference: f, floating: m } = {},
      transform: p = !0,
      whileElementsMounted: v,
      open: x,
    } = r,
    [w, g] = y.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: a,
      middlewareData: {},
      isPositioned: !1,
    }),
    [C, S] = y.useState(l);
  ei(C, l) || S(l);
  const [P, b] = y.useState(null),
    [N, O] = y.useState(null),
    I = y.useCallback((R) => {
      R !== Z.current && ((Z.current = R), b(R));
    }, []),
    j = y.useCallback((R) => {
      R !== B.current && ((B.current = R), O(R));
    }, []),
    D = f || P,
    F = m || N,
    Z = y.useRef(null),
    B = y.useRef(null),
    H = y.useRef(w),
    ie = v != null,
    de = ic(v),
    xe = ic(d),
    we = ic(x),
    me = y.useCallback(() => {
      if (!Z.current || !B.current) return;
      const R = { placement: a, strategy: s, middleware: C };
      xe.current && (R.platform = xe.current),
        Jw(Z.current, B.current, R).then((Y) => {
          const G = { ...Y, isPositioned: we.current !== !1 };
          pe.current &&
            !ei(H.current, G) &&
            ((H.current = G),
            xa.flushSync(() => {
              g(G);
            }));
        });
    }, [C, a, s, xe, we]);
  Us(() => {
    x === !1 &&
      H.current.isPositioned &&
      ((H.current.isPositioned = !1), g((R) => ({ ...R, isPositioned: !1 })));
  }, [x]);
  const pe = y.useRef(!1);
  Us(
    () => (
      (pe.current = !0),
      () => {
        pe.current = !1;
      }
    ),
    []
  ),
    Us(() => {
      if ((D && (Z.current = D), F && (B.current = F), D && F)) {
        if (de.current) return de.current(D, F, me);
        me();
      }
    }, [D, F, me, de, ie]);
  const fe = y.useMemo(
      () => ({ reference: Z, floating: B, setReference: I, setFloating: j }),
      [I, j]
    ),
    W = y.useMemo(() => ({ reference: D, floating: F }), [D, F]),
    q = y.useMemo(() => {
      const R = { position: s, left: 0, top: 0 };
      if (!W.floating) return R;
      const Y = vm(W.floating, w.x),
        G = vm(W.floating, w.y);
      return p
        ? {
            ...R,
            transform: "translate(" + Y + "px, " + G + "px)",
            ...(Ap(W.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: s, left: Y, top: G };
    }, [s, p, W.floating, w.x, w.y]);
  return y.useMemo(
    () => ({ ...w, update: me, refs: fe, elements: W, floatingStyles: q }),
    [w, me, fe, W, q]
  );
}
const t1 = (r) => {
    function a(s) {
      return {}.hasOwnProperty.call(s, "current");
    }
    return {
      name: "arrow",
      options: r,
      fn(s) {
        const { element: l, padding: d } = typeof r == "function" ? r(s) : r;
        return l && a(l)
          ? l.current != null
            ? gm({ element: l.current, padding: d }).fn(s)
            : {}
          : l
          ? gm({ element: l, padding: d }).fn(s)
          : {};
      },
    };
  },
  n1 = (r, a) => ({ ...Uw(r), options: [r, a] }),
  r1 = (r, a) => ({ ...Kw(r), options: [r, a] }),
  o1 = (r, a) => ({ ...Qw(r), options: [r, a] }),
  a1 = (r, a) => ({ ...Yw(r), options: [r, a] }),
  s1 = (r, a) => ({ ...Gw(r), options: [r, a] }),
  i1 = (r, a) => ({ ...Xw(r), options: [r, a] }),
  l1 = (r, a) => ({ ...t1(r), options: [r, a] });
var c1 = "Arrow",
  Op = y.forwardRef((r, a) => {
    const { children: s, width: l = 10, height: d = 5, ...f } = r;
    return c.jsx(Ie.svg, {
      ...f,
      ref: a,
      width: l,
      height: d,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: r.asChild ? s : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Op.displayName = c1;
var u1 = Op;
function d1(r) {
  const [a, s] = y.useState(void 0);
  return (
    pt(() => {
      if (r) {
        s({ width: r.offsetWidth, height: r.offsetHeight });
        const l = new ResizeObserver((d) => {
          if (!Array.isArray(d) || !d.length) return;
          const f = d[0];
          let m, p;
          if ("borderBoxSize" in f) {
            const v = f.borderBoxSize,
              x = Array.isArray(v) ? v[0] : v;
            (m = x.inlineSize), (p = x.blockSize);
          } else (m = r.offsetWidth), (p = r.offsetHeight);
          s({ width: m, height: p });
        });
        return l.observe(r, { box: "border-box" }), () => l.unobserve(r);
      } else s(void 0);
    }, [r]),
    a
  );
}
var Kc = "Popper",
  [Lp, Dp] = wa(Kc),
  [f1, zp] = Lp(Kc),
  Fp = (r) => {
    const { __scopePopper: a, children: s } = r,
      [l, d] = y.useState(null);
    return c.jsx(f1, { scope: a, anchor: l, onAnchorChange: d, children: s });
  };
Fp.displayName = Kc;
var Hp = "PopperAnchor",
  Bp = y.forwardRef((r, a) => {
    const { __scopePopper: s, virtualRef: l, ...d } = r,
      f = zp(Hp, s),
      m = y.useRef(null),
      p = et(a, m),
      v = y.useRef(null);
    return (
      y.useEffect(() => {
        const x = v.current;
        (v.current = l?.current || m.current),
          x !== v.current && f.onAnchorChange(v.current);
      }),
      l ? null : c.jsx(Ie.div, { ...d, ref: p })
    );
  });
Bp.displayName = Hp;
var Yc = "PopperContent",
  [m1, p1] = Lp(Yc),
  $p = y.forwardRef((r, a) => {
    const {
        __scopePopper: s,
        side: l = "bottom",
        sideOffset: d = 0,
        align: f = "center",
        alignOffset: m = 0,
        arrowPadding: p = 0,
        avoidCollisions: v = !0,
        collisionBoundary: x = [],
        collisionPadding: w = 0,
        sticky: g = "partial",
        hideWhenDetached: C = !1,
        updatePositionStrategy: S = "optimized",
        onPlaced: P,
        ...b
      } = r,
      N = zp(Yc, s),
      [O, I] = y.useState(null),
      j = et(a, (U) => I(U)),
      [D, F] = y.useState(null),
      Z = d1(D),
      B = Z?.width ?? 0,
      H = Z?.height ?? 0,
      ie = l + (f !== "center" ? "-" + f : ""),
      de =
        typeof w == "number"
          ? w
          : { top: 0, right: 0, bottom: 0, left: 0, ...w },
      xe = Array.isArray(x) ? x : [x],
      we = xe.length > 0,
      me = { padding: de, boundary: xe.filter(g1), altBoundary: we },
      {
        refs: pe,
        floatingStyles: fe,
        placement: W,
        isPositioned: q,
        middlewareData: R,
      } = e1({
        strategy: "fixed",
        placement: ie,
        whileElementsMounted: (...U) =>
          Ww(...U, { animationFrame: S === "always" }),
        elements: { reference: N.anchor },
        middleware: [
          n1({ mainAxis: d + H, alignmentAxis: m }),
          v &&
            r1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: g === "partial" ? o1() : void 0,
              ...me,
            }),
          v && a1({ ...me }),
          s1({
            ...me,
            apply: ({
              elements: U,
              rects: le,
              availableWidth: ye,
              availableHeight: ke,
            }) => {
              const { width: Ce, height: Te } = le.reference,
                Ye = U.floating.style;
              Ye.setProperty("--radix-popper-available-width", `${ye}px`),
                Ye.setProperty("--radix-popper-available-height", `${ke}px`),
                Ye.setProperty("--radix-popper-anchor-width", `${Ce}px`),
                Ye.setProperty("--radix-popper-anchor-height", `${Te}px`);
            },
          }),
          D && l1({ element: D, padding: p }),
          v1({ arrowWidth: B, arrowHeight: H }),
          C && i1({ strategy: "referenceHidden", ...me }),
        ],
      }),
      [Y, G] = Up(W),
      E = ur(P);
    pt(() => {
      q && E?.();
    }, [q, E]);
    const z = R.arrow?.x,
      J = R.arrow?.y,
      ee = R.arrow?.centerOffset !== 0,
      [he, ne] = y.useState();
    return (
      pt(() => {
        O && ne(window.getComputedStyle(O).zIndex);
      }, [O]),
      c.jsx("div", {
        ref: pe.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...fe,
          transform: q ? fe.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            R.transformOrigin?.x,
            R.transformOrigin?.y,
          ].join(" "),
          ...(R.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: r.dir,
        children: c.jsx(m1, {
          scope: s,
          placedSide: Y,
          onArrowChange: F,
          arrowX: z,
          arrowY: J,
          shouldHideArrow: ee,
          children: c.jsx(Ie.div, {
            "data-side": Y,
            "data-align": G,
            ...b,
            ref: j,
            style: { ...b.style, animation: q ? void 0 : "none" },
          }),
        }),
      })
    );
  });
$p.displayName = Yc;
var Vp = "PopperArrow",
  h1 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Wp = y.forwardRef(function (a, s) {
    const { __scopePopper: l, ...d } = a,
      f = p1(Vp, l),
      m = h1[f.placedSide];
    return c.jsx("span", {
      ref: f.onArrowChange,
      style: {
        position: "absolute",
        left: f.arrowX,
        top: f.arrowY,
        [m]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[f.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[f.placedSide],
        visibility: f.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(u1, {
        ...d,
        ref: s,
        style: { ...d.style, display: "block" },
      }),
    });
  });
Wp.displayName = Vp;
function g1(r) {
  return r !== null;
}
var v1 = (r) => ({
  name: "transformOrigin",
  options: r,
  fn(a) {
    const { placement: s, rects: l, middlewareData: d } = a,
      m = d.arrow?.centerOffset !== 0,
      p = m ? 0 : r.arrowWidth,
      v = m ? 0 : r.arrowHeight,
      [x, w] = Up(s),
      g = { start: "0%", center: "50%", end: "100%" }[w],
      C = (d.arrow?.x ?? 0) + p / 2,
      S = (d.arrow?.y ?? 0) + v / 2;
    let P = "",
      b = "";
    return (
      x === "bottom"
        ? ((P = m ? g : `${C}px`), (b = `${-v}px`))
        : x === "top"
        ? ((P = m ? g : `${C}px`), (b = `${l.floating.height + v}px`))
        : x === "right"
        ? ((P = `${-v}px`), (b = m ? g : `${S}px`))
        : x === "left" &&
          ((P = `${l.floating.width + v}px`), (b = m ? g : `${S}px`)),
      { data: { x: P, y: b } }
    );
  },
});
function Up(r) {
  const [a, s = "center"] = r.split("-");
  return [a, s];
}
var y1 = Fp,
  x1 = Bp,
  w1 = $p,
  k1 = Wp,
  b1 = "Portal",
  Kp = y.forwardRef((r, a) => {
    const { container: s, ...l } = r,
      [d, f] = y.useState(!1);
    pt(() => f(!0), []);
    const m = s || (d && globalThis?.document?.body);
    return m ? Jm.createPortal(c.jsx(Ie.div, { ...l, ref: a }), m) : null;
  });
Kp.displayName = b1;
function S1(r) {
  const a = N1(r),
    s = y.forwardRef((l, d) => {
      const { children: f, ...m } = l,
        p = y.Children.toArray(f),
        v = p.find(C1);
      if (v) {
        const x = v.props.children,
          w = p.map((g) =>
            g === v
              ? y.Children.count(x) > 1
                ? y.Children.only(null)
                : y.isValidElement(x)
                ? x.props.children
                : null
              : g
          );
        return c.jsx(a, {
          ...m,
          ref: d,
          children: y.isValidElement(x) ? y.cloneElement(x, void 0, w) : null,
        });
      }
      return c.jsx(a, { ...m, ref: d, children: f });
    });
  return (s.displayName = `${r}.Slot`), s;
}
function N1(r) {
  const a = y.forwardRef((s, l) => {
    const { children: d, ...f } = s;
    if (y.isValidElement(d)) {
      const m = j1(d),
        p = E1(f, d.props);
      return (
        d.type !== y.Fragment && (p.ref = l ? ya(l, m) : m),
        y.cloneElement(d, p)
      );
    }
    return y.Children.count(d) > 1 ? y.Children.only(null) : null;
  });
  return (a.displayName = `${r}.SlotClone`), a;
}
var _1 = Symbol("radix.slottable");
function C1(r) {
  return (
    y.isValidElement(r) &&
    typeof r.type == "function" &&
    "__radixId" in r.type &&
    r.type.__radixId === _1
  );
}
function E1(r, a) {
  const s = { ...a };
  for (const l in a) {
    const d = r[l],
      f = a[l];
    /^on[A-Z]/.test(l)
      ? d && f
        ? (s[l] = (...p) => {
            const v = f(...p);
            return d(...p), v;
          })
        : d && (s[l] = d)
      : l === "style"
      ? (s[l] = { ...d, ...f })
      : l === "className" && (s[l] = [d, f].filter(Boolean).join(" "));
  }
  return { ...r, ...s };
}
function j1(r) {
  let a = Object.getOwnPropertyDescriptor(r.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? r.ref
    : ((a = Object.getOwnPropertyDescriptor(r, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? r.props.ref : r.props.ref || r.ref);
}
function T1(r) {
  const a = y.useRef({ value: r, previous: r });
  return y.useMemo(
    () => (
      a.current.value !== r &&
        ((a.current.previous = a.current.value), (a.current.value = r)),
      a.current.previous
    ),
    [r]
  );
}
var Yp = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  P1 = "VisuallyHidden",
  R1 = y.forwardRef((r, a) =>
    c.jsx(Ie.span, { ...r, ref: a, style: { ...Yp, ...r.style } })
  );
R1.displayName = P1;
var M1 = function (r) {
    if (typeof document > "u") return null;
    var a = Array.isArray(r) ? r[0] : r;
    return a.ownerDocument.body;
  },
  lo = new WeakMap(),
  Bs = new WeakMap(),
  $s = {},
  lc = 0,
  Gp = function (r) {
    return r && (r.host || Gp(r.parentNode));
  },
  I1 = function (r, a) {
    return a
      .map(function (s) {
        if (r.contains(s)) return s;
        var l = Gp(s);
        return l && r.contains(l)
          ? l
          : (console.error(
              "aria-hidden",
              s,
              "in not contained inside",
              r,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (s) {
        return !!s;
      });
  },
  A1 = function (r, a, s, l) {
    var d = I1(a, Array.isArray(r) ? r : [r]);
    $s[s] || ($s[s] = new WeakMap());
    var f = $s[s],
      m = [],
      p = new Set(),
      v = new Set(d),
      x = function (g) {
        !g || p.has(g) || (p.add(g), x(g.parentNode));
      };
    d.forEach(x);
    var w = function (g) {
      !g ||
        v.has(g) ||
        Array.prototype.forEach.call(g.children, function (C) {
          if (p.has(C)) w(C);
          else
            try {
              var S = C.getAttribute(l),
                P = S !== null && S !== "false",
                b = (lo.get(C) || 0) + 1,
                N = (f.get(C) || 0) + 1;
              lo.set(C, b),
                f.set(C, N),
                m.push(C),
                b === 1 && P && Bs.set(C, !0),
                N === 1 && C.setAttribute(s, "true"),
                P || C.setAttribute(l, "true");
            } catch (O) {
              console.error("aria-hidden: cannot operate on ", C, O);
            }
        });
    };
    return (
      w(a),
      p.clear(),
      lc++,
      function () {
        m.forEach(function (g) {
          var C = lo.get(g) - 1,
            S = f.get(g) - 1;
          lo.set(g, C),
            f.set(g, S),
            C || (Bs.has(g) || g.removeAttribute(l), Bs.delete(g)),
            S || g.removeAttribute(s);
        }),
          lc--,
          lc ||
            ((lo = new WeakMap()),
            (lo = new WeakMap()),
            (Bs = new WeakMap()),
            ($s = {}));
      }
    );
  },
  O1 = function (r, a, s) {
    s === void 0 && (s = "data-aria-hidden");
    var l = Array.from(Array.isArray(r) ? r : [r]),
      d = M1(r);
    return d
      ? (l.push.apply(l, Array.from(d.querySelectorAll("[aria-live], script"))),
        A1(l, d, s, "aria-hidden"))
      : function () {
          return null;
        };
  },
  mn = function () {
    return (
      (mn =
        Object.assign ||
        function (a) {
          for (var s, l = 1, d = arguments.length; l < d; l++) {
            s = arguments[l];
            for (var f in s)
              Object.prototype.hasOwnProperty.call(s, f) && (a[f] = s[f]);
          }
          return a;
        }),
      mn.apply(this, arguments)
    );
  };
function Xp(r, a) {
  var s = {};
  for (var l in r)
    Object.prototype.hasOwnProperty.call(r, l) &&
      a.indexOf(l) < 0 &&
      (s[l] = r[l]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, l = Object.getOwnPropertySymbols(r); d < l.length; d++)
      a.indexOf(l[d]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, l[d]) &&
        (s[l[d]] = r[l[d]]);
  return s;
}
function L1(r, a, s) {
  if (s || arguments.length === 2)
    for (var l = 0, d = a.length, f; l < d; l++)
      (f || !(l in a)) &&
        (f || (f = Array.prototype.slice.call(a, 0, l)), (f[l] = a[l]));
  return r.concat(f || Array.prototype.slice.call(a));
}
var Ks = "right-scroll-bar-position",
  Ys = "width-before-scroll-bar",
  D1 = "with-scroll-bars-hidden",
  z1 = "--removed-body-scroll-bar-size";
function cc(r, a) {
  return typeof r == "function" ? r(a) : r && (r.current = a), r;
}
function F1(r, a) {
  var s = y.useState(function () {
    return {
      value: r,
      callback: a,
      facade: {
        get current() {
          return s.value;
        },
        set current(l) {
          var d = s.value;
          d !== l && ((s.value = l), s.callback(l, d));
        },
      },
    };
  })[0];
  return (s.callback = a), s.facade;
}
var H1 = typeof window < "u" ? y.useLayoutEffect : y.useEffect,
  ym = new WeakMap();
function B1(r, a) {
  var s = F1(null, function (l) {
    return r.forEach(function (d) {
      return cc(d, l);
    });
  });
  return (
    H1(
      function () {
        var l = ym.get(s);
        if (l) {
          var d = new Set(l),
            f = new Set(r),
            m = s.current;
          d.forEach(function (p) {
            f.has(p) || cc(p, null);
          }),
            f.forEach(function (p) {
              d.has(p) || cc(p, m);
            });
        }
        ym.set(s, r);
      },
      [r]
    ),
    s
  );
}
function $1(r) {
  return r;
}
function V1(r, a) {
  a === void 0 && (a = $1);
  var s = [],
    l = !1,
    d = {
      read: function () {
        if (l)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return s.length ? s[s.length - 1] : r;
      },
      useMedium: function (f) {
        var m = a(f, l);
        return (
          s.push(m),
          function () {
            s = s.filter(function (p) {
              return p !== m;
            });
          }
        );
      },
      assignSyncMedium: function (f) {
        for (l = !0; s.length; ) {
          var m = s;
          (s = []), m.forEach(f);
        }
        s = {
          push: function (p) {
            return f(p);
          },
          filter: function () {
            return s;
          },
        };
      },
      assignMedium: function (f) {
        l = !0;
        var m = [];
        if (s.length) {
          var p = s;
          (s = []), p.forEach(f), (m = s);
        }
        var v = function () {
            var w = m;
            (m = []), w.forEach(f);
          },
          x = function () {
            return Promise.resolve().then(v);
          };
        x(),
          (s = {
            push: function (w) {
              m.push(w), x();
            },
            filter: function (w) {
              return (m = m.filter(w)), s;
            },
          });
      },
    };
  return d;
}
function W1(r) {
  r === void 0 && (r = {});
  var a = V1(null);
  return (a.options = mn({ async: !0, ssr: !1 }, r)), a;
}
var Qp = function (r) {
  var a = r.sideCar,
    s = Xp(r, ["sideCar"]);
  if (!a)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var l = a.read();
  if (!l) throw new Error("Sidecar medium not found");
  return y.createElement(l, mn({}, s));
};
Qp.isSideCarExport = !0;
function U1(r, a) {
  return r.useMedium(a), Qp;
}
var Jp = W1(),
  uc = function () {},
  ii = y.forwardRef(function (r, a) {
    var s = y.useRef(null),
      l = y.useState({
        onScrollCapture: uc,
        onWheelCapture: uc,
        onTouchMoveCapture: uc,
      }),
      d = l[0],
      f = l[1],
      m = r.forwardProps,
      p = r.children,
      v = r.className,
      x = r.removeScrollBar,
      w = r.enabled,
      g = r.shards,
      C = r.sideCar,
      S = r.noRelative,
      P = r.noIsolation,
      b = r.inert,
      N = r.allowPinchZoom,
      O = r.as,
      I = O === void 0 ? "div" : O,
      j = r.gapMode,
      D = Xp(r, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      F = C,
      Z = B1([s, a]),
      B = mn(mn({}, D), d);
    return y.createElement(
      y.Fragment,
      null,
      w &&
        y.createElement(F, {
          sideCar: Jp,
          removeScrollBar: x,
          shards: g,
          noRelative: S,
          noIsolation: P,
          inert: b,
          setCallbacks: f,
          allowPinchZoom: !!N,
          lockRef: s,
          gapMode: j,
        }),
      m
        ? y.cloneElement(y.Children.only(p), mn(mn({}, B), { ref: Z }))
        : y.createElement(I, mn({}, B, { className: v, ref: Z }), p)
    );
  });
ii.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ii.classNames = { fullWidth: Ys, zeroRight: Ks };
var K1 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Y1() {
  if (!document) return null;
  var r = document.createElement("style");
  r.type = "text/css";
  var a = K1();
  return a && r.setAttribute("nonce", a), r;
}
function G1(r, a) {
  r.styleSheet
    ? (r.styleSheet.cssText = a)
    : r.appendChild(document.createTextNode(a));
}
function X1(r) {
  var a = document.head || document.getElementsByTagName("head")[0];
  a.appendChild(r);
}
var Q1 = function () {
    var r = 0,
      a = null;
    return {
      add: function (s) {
        r == 0 && (a = Y1()) && (G1(a, s), X1(a)), r++;
      },
      remove: function () {
        r--,
          !r && a && (a.parentNode && a.parentNode.removeChild(a), (a = null));
      },
    };
  },
  J1 = function () {
    var r = Q1();
    return function (a, s) {
      y.useEffect(
        function () {
          return (
            r.add(a),
            function () {
              r.remove();
            }
          );
        },
        [a && s]
      );
    };
  },
  Zp = function () {
    var r = J1(),
      a = function (s) {
        var l = s.styles,
          d = s.dynamic;
        return r(l, d), null;
      };
    return a;
  },
  Z1 = { left: 0, top: 0, right: 0, gap: 0 },
  dc = function (r) {
    return parseInt(r || "", 10) || 0;
  },
  q1 = function (r) {
    var a = window.getComputedStyle(document.body),
      s = a[r === "padding" ? "paddingLeft" : "marginLeft"],
      l = a[r === "padding" ? "paddingTop" : "marginTop"],
      d = a[r === "padding" ? "paddingRight" : "marginRight"];
    return [dc(s), dc(l), dc(d)];
  },
  ek = function (r) {
    if ((r === void 0 && (r = "margin"), typeof window > "u")) return Z1;
    var a = q1(r),
      s = document.documentElement.clientWidth,
      l = window.innerWidth;
    return {
      left: a[0],
      top: a[1],
      right: a[2],
      gap: Math.max(0, l - s + a[2] - a[0]),
    };
  },
  tk = Zp(),
  vo = "data-scroll-locked",
  nk = function (r, a, s, l) {
    var d = r.left,
      f = r.top,
      m = r.right,
      p = r.gap;
    return (
      s === void 0 && (s = "margin"),
      `
  .`
        .concat(
          D1,
          ` {
   overflow: hidden `
        )
        .concat(
          l,
          `;
   padding-right: `
        )
        .concat(p, "px ")
        .concat(
          l,
          `;
  }
  body[`
        )
        .concat(
          vo,
          `] {
    overflow: hidden `
        )
        .concat(
          l,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            a && "position: relative ".concat(l, ";"),
            s === "margin" &&
              `
    padding-left: `
                .concat(
                  d,
                  `px;
    padding-top: `
                )
                .concat(
                  f,
                  `px;
    padding-right: `
                )
                .concat(
                  m,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(p, "px ")
                .concat(
                  l,
                  `;
    `
                ),
            s === "padding" &&
              "padding-right: ".concat(p, "px ").concat(l, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Ks,
          ` {
    right: `
        )
        .concat(p, "px ")
        .concat(
          l,
          `;
  }
  
  .`
        )
        .concat(
          Ys,
          ` {
    margin-right: `
        )
        .concat(p, "px ")
        .concat(
          l,
          `;
  }
  
  .`
        )
        .concat(Ks, " .")
        .concat(
          Ks,
          ` {
    right: 0 `
        )
        .concat(
          l,
          `;
  }
  
  .`
        )
        .concat(Ys, " .")
        .concat(
          Ys,
          ` {
    margin-right: 0 `
        )
        .concat(
          l,
          `;
  }
  
  body[`
        )
        .concat(
          vo,
          `] {
    `
        )
        .concat(z1, ": ")
        .concat(
          p,
          `px;
  }
`
        )
    );
  },
  xm = function () {
    var r = parseInt(document.body.getAttribute(vo) || "0", 10);
    return isFinite(r) ? r : 0;
  },
  rk = function () {
    y.useEffect(function () {
      return (
        document.body.setAttribute(vo, (xm() + 1).toString()),
        function () {
          var r = xm() - 1;
          r <= 0
            ? document.body.removeAttribute(vo)
            : document.body.setAttribute(vo, r.toString());
        }
      );
    }, []);
  },
  ok = function (r) {
    var a = r.noRelative,
      s = r.noImportant,
      l = r.gapMode,
      d = l === void 0 ? "margin" : l;
    rk();
    var f = y.useMemo(
      function () {
        return ek(d);
      },
      [d]
    );
    return y.createElement(tk, { styles: nk(f, !a, d, s ? "" : "!important") });
  },
  Ec = !1;
if (typeof window < "u")
  try {
    var Vs = Object.defineProperty({}, "passive", {
      get: function () {
        return (Ec = !0), !0;
      },
    });
    window.addEventListener("test", Vs, Vs),
      window.removeEventListener("test", Vs, Vs);
  } catch {
    Ec = !1;
  }
var co = Ec ? { passive: !1 } : !1,
  ak = function (r) {
    return r.tagName === "TEXTAREA";
  },
  qp = function (r, a) {
    if (!(r instanceof Element)) return !1;
    var s = window.getComputedStyle(r);
    return (
      s[a] !== "hidden" &&
      !(s.overflowY === s.overflowX && !ak(r) && s[a] === "visible")
    );
  },
  sk = function (r) {
    return qp(r, "overflowY");
  },
  ik = function (r) {
    return qp(r, "overflowX");
  },
  wm = function (r, a) {
    var s = a.ownerDocument,
      l = a;
    do {
      typeof ShadowRoot < "u" && l instanceof ShadowRoot && (l = l.host);
      var d = eh(r, l);
      if (d) {
        var f = th(r, l),
          m = f[1],
          p = f[2];
        if (m > p) return !0;
      }
      l = l.parentNode;
    } while (l && l !== s.body);
    return !1;
  },
  lk = function (r) {
    var a = r.scrollTop,
      s = r.scrollHeight,
      l = r.clientHeight;
    return [a, s, l];
  },
  ck = function (r) {
    var a = r.scrollLeft,
      s = r.scrollWidth,
      l = r.clientWidth;
    return [a, s, l];
  },
  eh = function (r, a) {
    return r === "v" ? sk(a) : ik(a);
  },
  th = function (r, a) {
    return r === "v" ? lk(a) : ck(a);
  },
  uk = function (r, a) {
    return r === "h" && a === "rtl" ? -1 : 1;
  },
  dk = function (r, a, s, l, d) {
    var f = uk(r, window.getComputedStyle(a).direction),
      m = f * l,
      p = s.target,
      v = a.contains(p),
      x = !1,
      w = m > 0,
      g = 0,
      C = 0;
    do {
      if (!p) break;
      var S = th(r, p),
        P = S[0],
        b = S[1],
        N = S[2],
        O = b - N - f * P;
      (P || O) && eh(r, p) && ((g += O), (C += P));
      var I = p.parentNode;
      p = I && I.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? I.host : I;
    } while ((!v && p !== document.body) || (v && (a.contains(p) || a === p)));
    return ((w && Math.abs(g) < 1) || (!w && Math.abs(C) < 1)) && (x = !0), x;
  },
  Ws = function (r) {
    return "changedTouches" in r
      ? [r.changedTouches[0].clientX, r.changedTouches[0].clientY]
      : [0, 0];
  },
  km = function (r) {
    return [r.deltaX, r.deltaY];
  },
  bm = function (r) {
    return r && "current" in r ? r.current : r;
  },
  fk = function (r, a) {
    return r[0] === a[0] && r[1] === a[1];
  },
  mk = function (r) {
    return `
  .block-interactivity-`
      .concat(
        r,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        r,
        ` {pointer-events: all;}
`
      );
  },
  pk = 0,
  uo = [];
function hk(r) {
  var a = y.useRef([]),
    s = y.useRef([0, 0]),
    l = y.useRef(),
    d = y.useState(pk++)[0],
    f = y.useState(Zp)[0],
    m = y.useRef(r);
  y.useEffect(
    function () {
      m.current = r;
    },
    [r]
  ),
    y.useEffect(
      function () {
        if (r.inert) {
          document.body.classList.add("block-interactivity-".concat(d));
          var b = L1([r.lockRef.current], (r.shards || []).map(bm), !0).filter(
            Boolean
          );
          return (
            b.forEach(function (N) {
              return N.classList.add("allow-interactivity-".concat(d));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(d)),
                b.forEach(function (N) {
                  return N.classList.remove("allow-interactivity-".concat(d));
                });
            }
          );
        }
      },
      [r.inert, r.lockRef.current, r.shards]
    );
  var p = y.useCallback(function (b, N) {
      if (
        ("touches" in b && b.touches.length === 2) ||
        (b.type === "wheel" && b.ctrlKey)
      )
        return !m.current.allowPinchZoom;
      var O = Ws(b),
        I = s.current,
        j = "deltaX" in b ? b.deltaX : I[0] - O[0],
        D = "deltaY" in b ? b.deltaY : I[1] - O[1],
        F,
        Z = b.target,
        B = Math.abs(j) > Math.abs(D) ? "h" : "v";
      if ("touches" in b && B === "h" && Z.type === "range") return !1;
      var H = wm(B, Z);
      if (!H) return !0;
      if ((H ? (F = B) : ((F = B === "v" ? "h" : "v"), (H = wm(B, Z))), !H))
        return !1;
      if (
        (!l.current && "changedTouches" in b && (j || D) && (l.current = F), !F)
      )
        return !0;
      var ie = l.current || F;
      return dk(ie, N, b, ie === "h" ? j : D);
    }, []),
    v = y.useCallback(function (b) {
      var N = b;
      if (!(!uo.length || uo[uo.length - 1] !== f)) {
        var O = "deltaY" in N ? km(N) : Ws(N),
          I = a.current.filter(function (F) {
            return (
              F.name === N.type &&
              (F.target === N.target || N.target === F.shadowParent) &&
              fk(F.delta, O)
            );
          })[0];
        if (I && I.should) {
          N.cancelable && N.preventDefault();
          return;
        }
        if (!I) {
          var j = (m.current.shards || [])
              .map(bm)
              .filter(Boolean)
              .filter(function (F) {
                return F.contains(N.target);
              }),
            D = j.length > 0 ? p(N, j[0]) : !m.current.noIsolation;
          D && N.cancelable && N.preventDefault();
        }
      }
    }, []),
    x = y.useCallback(function (b, N, O, I) {
      var j = { name: b, delta: N, target: O, should: I, shadowParent: gk(O) };
      a.current.push(j),
        setTimeout(function () {
          a.current = a.current.filter(function (D) {
            return D !== j;
          });
        }, 1);
    }, []),
    w = y.useCallback(function (b) {
      (s.current = Ws(b)), (l.current = void 0);
    }, []),
    g = y.useCallback(function (b) {
      x(b.type, km(b), b.target, p(b, r.lockRef.current));
    }, []),
    C = y.useCallback(function (b) {
      x(b.type, Ws(b), b.target, p(b, r.lockRef.current));
    }, []);
  y.useEffect(function () {
    return (
      uo.push(f),
      r.setCallbacks({
        onScrollCapture: g,
        onWheelCapture: g,
        onTouchMoveCapture: C,
      }),
      document.addEventListener("wheel", v, co),
      document.addEventListener("touchmove", v, co),
      document.addEventListener("touchstart", w, co),
      function () {
        (uo = uo.filter(function (b) {
          return b !== f;
        })),
          document.removeEventListener("wheel", v, co),
          document.removeEventListener("touchmove", v, co),
          document.removeEventListener("touchstart", w, co);
      }
    );
  }, []);
  var S = r.removeScrollBar,
    P = r.inert;
  return y.createElement(
    y.Fragment,
    null,
    P ? y.createElement(f, { styles: mk(d) }) : null,
    S
      ? y.createElement(ok, { noRelative: r.noRelative, gapMode: r.gapMode })
      : null
  );
}
function gk(r) {
  for (var a = null; r !== null; )
    r instanceof ShadowRoot && ((a = r.host), (r = r.host)), (r = r.parentNode);
  return a;
}
const vk = U1(Jp, hk);
var nh = y.forwardRef(function (r, a) {
  return y.createElement(ii, mn({}, r, { ref: a, sideCar: vk }));
});
nh.classNames = ii.classNames;
var yk = [" ", "Enter", "ArrowUp", "ArrowDown"],
  xk = [" ", "Enter"],
  Or = "Select",
  [li, ci, wk] = qm(Or),
  [So] = wa(Or, [wk, Dp]),
  ui = Dp(),
  [kk, mr] = So(Or),
  [bk, Sk] = So(Or),
  rh = (r) => {
    const {
        __scopeSelect: a,
        children: s,
        open: l,
        defaultOpen: d,
        onOpenChange: f,
        value: m,
        defaultValue: p,
        onValueChange: v,
        dir: x,
        name: w,
        autoComplete: g,
        disabled: C,
        required: S,
        form: P,
      } = r,
      b = ui(a),
      [N, O] = y.useState(null),
      [I, j] = y.useState(null),
      [D, F] = y.useState(!1),
      Z = zc(x),
      [B, H] = Qs({ prop: l, defaultProp: d ?? !1, onChange: f, caller: Or }),
      [ie, de] = Qs({ prop: m, defaultProp: p, onChange: v, caller: Or }),
      xe = y.useRef(null),
      we = N ? P || !!N.closest("form") : !0,
      [me, pe] = y.useState(new Set()),
      fe = Array.from(me)
        .map((W) => W.props.value)
        .join(";");
    return c.jsx(y1, {
      ...b,
      children: c.jsxs(kk, {
        required: S,
        scope: a,
        trigger: N,
        onTriggerChange: O,
        valueNode: I,
        onValueNodeChange: j,
        valueNodeHasChildren: D,
        onValueNodeHasChildrenChange: F,
        contentId: ka(),
        value: ie,
        onValueChange: de,
        open: B,
        onOpenChange: H,
        dir: Z,
        triggerPointerDownPosRef: xe,
        disabled: C,
        children: [
          c.jsx(li.Provider, {
            scope: a,
            children: c.jsx(bk, {
              scope: r.__scopeSelect,
              onNativeOptionAdd: y.useCallback((W) => {
                pe((q) => new Set(q).add(W));
              }, []),
              onNativeOptionRemove: y.useCallback((W) => {
                pe((q) => {
                  const R = new Set(q);
                  return R.delete(W), R;
                });
              }, []),
              children: s,
            }),
          }),
          we
            ? c.jsxs(
                _h,
                {
                  "aria-hidden": !0,
                  required: S,
                  tabIndex: -1,
                  name: w,
                  autoComplete: g,
                  value: ie,
                  onChange: (W) => de(W.target.value),
                  disabled: C,
                  form: P,
                  children: [
                    ie === void 0 ? c.jsx("option", { value: "" }) : null,
                    Array.from(me),
                  ],
                },
                fe
              )
            : null,
        ],
      }),
    });
  };
rh.displayName = Or;
var oh = "SelectTrigger",
  ah = y.forwardRef((r, a) => {
    const { __scopeSelect: s, disabled: l = !1, ...d } = r,
      f = ui(s),
      m = mr(oh, s),
      p = m.disabled || l,
      v = et(a, m.onTriggerChange),
      x = ci(s),
      w = y.useRef("touch"),
      [g, C, S] = Eh((b) => {
        const N = x().filter((j) => !j.disabled),
          O = N.find((j) => j.value === m.value),
          I = jh(N, b, O);
        I !== void 0 && m.onValueChange(I.value);
      }),
      P = (b) => {
        p || (m.onOpenChange(!0), S()),
          b &&
            (m.triggerPointerDownPosRef.current = {
              x: Math.round(b.pageX),
              y: Math.round(b.pageY),
            });
      };
    return c.jsx(x1, {
      asChild: !0,
      ...f,
      children: c.jsx(Ie.button, {
        type: "button",
        role: "combobox",
        "aria-controls": m.contentId,
        "aria-expanded": m.open,
        "aria-required": m.required,
        "aria-autocomplete": "none",
        dir: m.dir,
        "data-state": m.open ? "open" : "closed",
        disabled: p,
        "data-disabled": p ? "" : void 0,
        "data-placeholder": Ch(m.value) ? "" : void 0,
        ...d,
        ref: v,
        onClick: Re(d.onClick, (b) => {
          b.currentTarget.focus(), w.current !== "mouse" && P(b);
        }),
        onPointerDown: Re(d.onPointerDown, (b) => {
          w.current = b.pointerType;
          const N = b.target;
          N.hasPointerCapture(b.pointerId) &&
            N.releasePointerCapture(b.pointerId),
            b.button === 0 &&
              b.ctrlKey === !1 &&
              b.pointerType === "mouse" &&
              (P(b), b.preventDefault());
        }),
        onKeyDown: Re(d.onKeyDown, (b) => {
          const N = g.current !== "";
          !(b.ctrlKey || b.altKey || b.metaKey) &&
            b.key.length === 1 &&
            C(b.key),
            !(N && b.key === " ") &&
              yk.includes(b.key) &&
              (P(), b.preventDefault());
        }),
      }),
    });
  });
ah.displayName = oh;
var sh = "SelectValue",
  ih = y.forwardRef((r, a) => {
    const {
        __scopeSelect: s,
        className: l,
        style: d,
        children: f,
        placeholder: m = "",
        ...p
      } = r,
      v = mr(sh, s),
      { onValueNodeHasChildrenChange: x } = v,
      w = f !== void 0,
      g = et(a, v.onValueNodeChange);
    return (
      pt(() => {
        x(w);
      }, [x, w]),
      c.jsx(Ie.span, {
        ...p,
        ref: g,
        style: { pointerEvents: "none" },
        children: Ch(v.value) ? c.jsx(c.Fragment, { children: m }) : f,
      })
    );
  });
ih.displayName = sh;
var Nk = "SelectIcon",
  lh = y.forwardRef((r, a) => {
    const { __scopeSelect: s, children: l, ...d } = r;
    return c.jsx(Ie.span, {
      "aria-hidden": !0,
      ...d,
      ref: a,
      children: l || "▼",
    });
  });
lh.displayName = Nk;
var _k = "SelectPortal",
  ch = (r) => c.jsx(Kp, { asChild: !0, ...r });
ch.displayName = _k;
var Lr = "SelectContent",
  uh = y.forwardRef((r, a) => {
    const s = mr(Lr, r.__scopeSelect),
      [l, d] = y.useState();
    if (
      (pt(() => {
        d(new DocumentFragment());
      }, []),
      !s.open)
    ) {
      const f = l;
      return f
        ? xa.createPortal(
            c.jsx(dh, {
              scope: r.__scopeSelect,
              children: c.jsx(li.Slot, {
                scope: r.__scopeSelect,
                children: c.jsx("div", { children: r.children }),
              }),
            }),
            f
          )
        : null;
    }
    return c.jsx(fh, { ...r, ref: a });
  });
uh.displayName = Lr;
var nn = 10,
  [dh, pr] = So(Lr),
  Ck = "SelectContentImpl",
  Ek = S1("SelectContent.RemoveScroll"),
  fh = y.forwardRef((r, a) => {
    const {
        __scopeSelect: s,
        position: l = "item-aligned",
        onCloseAutoFocus: d,
        onEscapeKeyDown: f,
        onPointerDownOutside: m,
        side: p,
        sideOffset: v,
        align: x,
        alignOffset: w,
        arrowPadding: g,
        collisionBoundary: C,
        collisionPadding: S,
        sticky: P,
        hideWhenDetached: b,
        avoidCollisions: N,
        ...O
      } = r,
      I = mr(Lr, s),
      [j, D] = y.useState(null),
      [F, Z] = y.useState(null),
      B = et(a, (U) => D(U)),
      [H, ie] = y.useState(null),
      [de, xe] = y.useState(null),
      we = ci(s),
      [me, pe] = y.useState(!1),
      fe = y.useRef(!1);
    y.useEffect(() => {
      if (j) return O1(j);
    }, [j]),
      Ux();
    const W = y.useCallback(
        (U) => {
          const [le, ...ye] = we().map((Te) => Te.ref.current),
            [ke] = ye.slice(-1),
            Ce = document.activeElement;
          for (const Te of U)
            if (
              Te === Ce ||
              (Te?.scrollIntoView({ block: "nearest" }),
              Te === le && F && (F.scrollTop = 0),
              Te === ke && F && (F.scrollTop = F.scrollHeight),
              Te?.focus(),
              document.activeElement !== Ce)
            )
              return;
        },
        [we, F]
      ),
      q = y.useCallback(() => W([H, j]), [W, H, j]);
    y.useEffect(() => {
      me && q();
    }, [me, q]);
    const { onOpenChange: R, triggerPointerDownPosRef: Y } = I;
    y.useEffect(() => {
      if (j) {
        let U = { x: 0, y: 0 };
        const le = (ke) => {
            U = {
              x: Math.abs(Math.round(ke.pageX) - (Y.current?.x ?? 0)),
              y: Math.abs(Math.round(ke.pageY) - (Y.current?.y ?? 0)),
            };
          },
          ye = (ke) => {
            U.x <= 10 && U.y <= 10
              ? ke.preventDefault()
              : j.contains(ke.target) || R(!1),
              document.removeEventListener("pointermove", le),
              (Y.current = null);
          };
        return (
          Y.current !== null &&
            (document.addEventListener("pointermove", le),
            document.addEventListener("pointerup", ye, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", le),
              document.removeEventListener("pointerup", ye, { capture: !0 });
          }
        );
      }
    }, [j, R, Y]),
      y.useEffect(() => {
        const U = () => R(!1);
        return (
          window.addEventListener("blur", U),
          window.addEventListener("resize", U),
          () => {
            window.removeEventListener("blur", U),
              window.removeEventListener("resize", U);
          }
        );
      }, [R]);
    const [G, E] = Eh((U) => {
        const le = we().filter((Ce) => !Ce.disabled),
          ye = le.find((Ce) => Ce.ref.current === document.activeElement),
          ke = jh(le, U, ye);
        ke && setTimeout(() => ke.ref.current.focus());
      }),
      z = y.useCallback(
        (U, le, ye) => {
          const ke = !fe.current && !ye;
          ((I.value !== void 0 && I.value === le) || ke) &&
            (ie(U), ke && (fe.current = !0));
        },
        [I.value]
      ),
      J = y.useCallback(() => j?.focus(), [j]),
      ee = y.useCallback(
        (U, le, ye) => {
          const ke = !fe.current && !ye;
          ((I.value !== void 0 && I.value === le) || ke) && xe(U);
        },
        [I.value]
      ),
      he = l === "popper" ? jc : mh,
      ne =
        he === jc
          ? {
              side: p,
              sideOffset: v,
              align: x,
              alignOffset: w,
              arrowPadding: g,
              collisionBoundary: C,
              collisionPadding: S,
              sticky: P,
              hideWhenDetached: b,
              avoidCollisions: N,
            }
          : {};
    return c.jsx(dh, {
      scope: s,
      content: j,
      viewport: F,
      onViewportChange: Z,
      itemRefCallback: z,
      selectedItem: H,
      onItemLeave: J,
      itemTextRefCallback: ee,
      focusSelectedItem: q,
      selectedItemText: de,
      position: l,
      isPositioned: me,
      searchRef: G,
      children: c.jsx(nh, {
        as: Ek,
        allowPinchZoom: !0,
        children: c.jsx(bp, {
          asChild: !0,
          trapped: I.open,
          onMountAutoFocus: (U) => {
            U.preventDefault();
          },
          onUnmountAutoFocus: Re(d, (U) => {
            I.trigger?.focus({ preventScroll: !0 }), U.preventDefault();
          }),
          children: c.jsx(wp, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: f,
            onPointerDownOutside: m,
            onFocusOutside: (U) => U.preventDefault(),
            onDismiss: () => I.onOpenChange(!1),
            children: c.jsx(he, {
              role: "listbox",
              id: I.contentId,
              "data-state": I.open ? "open" : "closed",
              dir: I.dir,
              onContextMenu: (U) => U.preventDefault(),
              ...O,
              ...ne,
              onPlaced: () => pe(!0),
              ref: B,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...O.style,
              },
              onKeyDown: Re(O.onKeyDown, (U) => {
                const le = U.ctrlKey || U.altKey || U.metaKey;
                if (
                  (U.key === "Tab" && U.preventDefault(),
                  !le && U.key.length === 1 && E(U.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(U.key))
                ) {
                  let ke = we()
                    .filter((Ce) => !Ce.disabled)
                    .map((Ce) => Ce.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(U.key) &&
                      (ke = ke.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(U.key))
                  ) {
                    const Ce = U.target,
                      Te = ke.indexOf(Ce);
                    ke = ke.slice(Te + 1);
                  }
                  setTimeout(() => W(ke)), U.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
fh.displayName = Ck;
var jk = "SelectItemAlignedPosition",
  mh = y.forwardRef((r, a) => {
    const { __scopeSelect: s, onPlaced: l, ...d } = r,
      f = mr(Lr, s),
      m = pr(Lr, s),
      [p, v] = y.useState(null),
      [x, w] = y.useState(null),
      g = et(a, (B) => w(B)),
      C = ci(s),
      S = y.useRef(!1),
      P = y.useRef(!0),
      {
        viewport: b,
        selectedItem: N,
        selectedItemText: O,
        focusSelectedItem: I,
      } = m,
      j = y.useCallback(() => {
        if (f.trigger && f.valueNode && p && x && b && N && O) {
          const B = f.trigger.getBoundingClientRect(),
            H = x.getBoundingClientRect(),
            ie = f.valueNode.getBoundingClientRect(),
            de = O.getBoundingClientRect();
          if (f.dir !== "rtl") {
            const Ce = de.left - H.left,
              Te = ie.left - Ce,
              Ye = B.left - Te,
              ht = B.width + Ye,
              On = Math.max(ht, H.width),
              yn = window.innerWidth - nn,
              Tt = qf(Te, [nn, Math.max(nn, yn - On)]);
            (p.style.minWidth = ht + "px"), (p.style.left = Tt + "px");
          } else {
            const Ce = H.right - de.right,
              Te = window.innerWidth - ie.right - Ce,
              Ye = window.innerWidth - B.right - Te,
              ht = B.width + Ye,
              On = Math.max(ht, H.width),
              yn = window.innerWidth - nn,
              Tt = qf(Te, [nn, Math.max(nn, yn - On)]);
            (p.style.minWidth = ht + "px"), (p.style.right = Tt + "px");
          }
          const xe = C(),
            we = window.innerHeight - nn * 2,
            me = b.scrollHeight,
            pe = window.getComputedStyle(x),
            fe = parseInt(pe.borderTopWidth, 10),
            W = parseInt(pe.paddingTop, 10),
            q = parseInt(pe.borderBottomWidth, 10),
            R = parseInt(pe.paddingBottom, 10),
            Y = fe + W + me + R + q,
            G = Math.min(N.offsetHeight * 5, Y),
            E = window.getComputedStyle(b),
            z = parseInt(E.paddingTop, 10),
            J = parseInt(E.paddingBottom, 10),
            ee = B.top + B.height / 2 - nn,
            he = we - ee,
            ne = N.offsetHeight / 2,
            U = N.offsetTop + ne,
            le = fe + W + U,
            ye = Y - le;
          if (le <= ee) {
            const Ce = xe.length > 0 && N === xe[xe.length - 1].ref.current;
            p.style.bottom = "0px";
            const Te = x.clientHeight - b.offsetTop - b.offsetHeight,
              Ye = Math.max(he, ne + (Ce ? J : 0) + Te + q),
              ht = le + Ye;
            p.style.height = ht + "px";
          } else {
            const Ce = xe.length > 0 && N === xe[0].ref.current;
            p.style.top = "0px";
            const Ye = Math.max(ee, fe + b.offsetTop + (Ce ? z : 0) + ne) + ye;
            (p.style.height = Ye + "px"), (b.scrollTop = le - ee + b.offsetTop);
          }
          (p.style.margin = `${nn}px 0`),
            (p.style.minHeight = G + "px"),
            (p.style.maxHeight = we + "px"),
            l?.(),
            requestAnimationFrame(() => (S.current = !0));
        }
      }, [C, f.trigger, f.valueNode, p, x, b, N, O, f.dir, l]);
    pt(() => j(), [j]);
    const [D, F] = y.useState();
    pt(() => {
      x && F(window.getComputedStyle(x).zIndex);
    }, [x]);
    const Z = y.useCallback(
      (B) => {
        B && P.current === !0 && (j(), I?.(), (P.current = !1));
      },
      [j, I]
    );
    return c.jsx(Pk, {
      scope: s,
      contentWrapper: p,
      shouldExpandOnScrollRef: S,
      onScrollButtonChange: Z,
      children: c.jsx("div", {
        ref: v,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: D,
        },
        children: c.jsx(Ie.div, {
          ...d,
          ref: g,
          style: { boxSizing: "border-box", maxHeight: "100%", ...d.style },
        }),
      }),
    });
  });
mh.displayName = jk;
var Tk = "SelectPopperPosition",
  jc = y.forwardRef((r, a) => {
    const {
        __scopeSelect: s,
        align: l = "start",
        collisionPadding: d = nn,
        ...f
      } = r,
      m = ui(s);
    return c.jsx(w1, {
      ...m,
      ...f,
      ref: a,
      align: l,
      collisionPadding: d,
      style: {
        boxSizing: "border-box",
        ...f.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
jc.displayName = Tk;
var [Pk, Gc] = So(Lr, {}),
  Tc = "SelectViewport",
  ph = y.forwardRef((r, a) => {
    const { __scopeSelect: s, nonce: l, ...d } = r,
      f = pr(Tc, s),
      m = Gc(Tc, s),
      p = et(a, f.onViewportChange),
      v = y.useRef(0);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: l,
        }),
        c.jsx(li.Slot, {
          scope: s,
          children: c.jsx(Ie.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...d,
            ref: p,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...d.style,
            },
            onScroll: Re(d.onScroll, (x) => {
              const w = x.currentTarget,
                { contentWrapper: g, shouldExpandOnScrollRef: C } = m;
              if (C?.current && g) {
                const S = Math.abs(v.current - w.scrollTop);
                if (S > 0) {
                  const P = window.innerHeight - nn * 2,
                    b = parseFloat(g.style.minHeight),
                    N = parseFloat(g.style.height),
                    O = Math.max(b, N);
                  if (O < P) {
                    const I = O + S,
                      j = Math.min(P, I),
                      D = I - j;
                    (g.style.height = j + "px"),
                      g.style.bottom === "0px" &&
                        ((w.scrollTop = D > 0 ? D : 0),
                        (g.style.justifyContent = "flex-end"));
                  }
                }
              }
              v.current = w.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
ph.displayName = Tc;
var hh = "SelectGroup",
  [Rk, Mk] = So(hh),
  Ik = y.forwardRef((r, a) => {
    const { __scopeSelect: s, ...l } = r,
      d = ka();
    return c.jsx(Rk, {
      scope: s,
      id: d,
      children: c.jsx(Ie.div, {
        role: "group",
        "aria-labelledby": d,
        ...l,
        ref: a,
      }),
    });
  });
Ik.displayName = hh;
var gh = "SelectLabel",
  Ak = y.forwardRef((r, a) => {
    const { __scopeSelect: s, ...l } = r,
      d = Mk(gh, s);
    return c.jsx(Ie.div, { id: d.id, ...l, ref: a });
  });
Ak.displayName = gh;
var ti = "SelectItem",
  [Ok, vh] = So(ti),
  yh = y.forwardRef((r, a) => {
    const {
        __scopeSelect: s,
        value: l,
        disabled: d = !1,
        textValue: f,
        ...m
      } = r,
      p = mr(ti, s),
      v = pr(ti, s),
      x = p.value === l,
      [w, g] = y.useState(f ?? ""),
      [C, S] = y.useState(!1),
      P = et(a, (I) => v.itemRefCallback?.(I, l, d)),
      b = ka(),
      N = y.useRef("touch"),
      O = () => {
        d || (p.onValueChange(l), p.onOpenChange(!1));
      };
    if (l === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return c.jsx(Ok, {
      scope: s,
      value: l,
      disabled: d,
      textId: b,
      isSelected: x,
      onItemTextChange: y.useCallback((I) => {
        g((j) => j || (I?.textContent ?? "").trim());
      }, []),
      children: c.jsx(li.ItemSlot, {
        scope: s,
        value: l,
        disabled: d,
        textValue: w,
        children: c.jsx(Ie.div, {
          role: "option",
          "aria-labelledby": b,
          "data-highlighted": C ? "" : void 0,
          "aria-selected": x && C,
          "data-state": x ? "checked" : "unchecked",
          "aria-disabled": d || void 0,
          "data-disabled": d ? "" : void 0,
          tabIndex: d ? void 0 : -1,
          ...m,
          ref: P,
          onFocus: Re(m.onFocus, () => S(!0)),
          onBlur: Re(m.onBlur, () => S(!1)),
          onClick: Re(m.onClick, () => {
            N.current !== "mouse" && O();
          }),
          onPointerUp: Re(m.onPointerUp, () => {
            N.current === "mouse" && O();
          }),
          onPointerDown: Re(m.onPointerDown, (I) => {
            N.current = I.pointerType;
          }),
          onPointerMove: Re(m.onPointerMove, (I) => {
            (N.current = I.pointerType),
              d
                ? v.onItemLeave?.()
                : N.current === "mouse" &&
                  I.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: Re(m.onPointerLeave, (I) => {
            I.currentTarget === document.activeElement && v.onItemLeave?.();
          }),
          onKeyDown: Re(m.onKeyDown, (I) => {
            (v.searchRef?.current !== "" && I.key === " ") ||
              (xk.includes(I.key) && O(), I.key === " " && I.preventDefault());
          }),
        }),
      }),
    });
  });
yh.displayName = ti;
var ma = "SelectItemText",
  xh = y.forwardRef((r, a) => {
    const { __scopeSelect: s, className: l, style: d, ...f } = r,
      m = mr(ma, s),
      p = pr(ma, s),
      v = vh(ma, s),
      x = Sk(ma, s),
      [w, g] = y.useState(null),
      C = et(
        a,
        (O) => g(O),
        v.onItemTextChange,
        (O) => p.itemTextRefCallback?.(O, v.value, v.disabled)
      ),
      S = w?.textContent,
      P = y.useMemo(
        () =>
          c.jsx(
            "option",
            { value: v.value, disabled: v.disabled, children: S },
            v.value
          ),
        [v.disabled, v.value, S]
      ),
      { onNativeOptionAdd: b, onNativeOptionRemove: N } = x;
    return (
      pt(() => (b(P), () => N(P)), [b, N, P]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(Ie.span, { id: v.textId, ...f, ref: C }),
          v.isSelected && m.valueNode && !m.valueNodeHasChildren
            ? xa.createPortal(f.children, m.valueNode)
            : null,
        ],
      })
    );
  });
xh.displayName = ma;
var wh = "SelectItemIndicator",
  kh = y.forwardRef((r, a) => {
    const { __scopeSelect: s, ...l } = r;
    return vh(wh, s).isSelected
      ? c.jsx(Ie.span, { "aria-hidden": !0, ...l, ref: a })
      : null;
  });
kh.displayName = wh;
var Pc = "SelectScrollUpButton",
  bh = y.forwardRef((r, a) => {
    const s = pr(Pc, r.__scopeSelect),
      l = Gc(Pc, r.__scopeSelect),
      [d, f] = y.useState(!1),
      m = et(a, l.onScrollButtonChange);
    return (
      pt(() => {
        if (s.viewport && s.isPositioned) {
          let p = function () {
            const x = v.scrollTop > 0;
            f(x);
          };
          const v = s.viewport;
          return (
            p(),
            v.addEventListener("scroll", p),
            () => v.removeEventListener("scroll", p)
          );
        }
      }, [s.viewport, s.isPositioned]),
      d
        ? c.jsx(Nh, {
            ...r,
            ref: m,
            onAutoScroll: () => {
              const { viewport: p, selectedItem: v } = s;
              p && v && (p.scrollTop = p.scrollTop - v.offsetHeight);
            },
          })
        : null
    );
  });
bh.displayName = Pc;
var Rc = "SelectScrollDownButton",
  Sh = y.forwardRef((r, a) => {
    const s = pr(Rc, r.__scopeSelect),
      l = Gc(Rc, r.__scopeSelect),
      [d, f] = y.useState(!1),
      m = et(a, l.onScrollButtonChange);
    return (
      pt(() => {
        if (s.viewport && s.isPositioned) {
          let p = function () {
            const x = v.scrollHeight - v.clientHeight,
              w = Math.ceil(v.scrollTop) < x;
            f(w);
          };
          const v = s.viewport;
          return (
            p(),
            v.addEventListener("scroll", p),
            () => v.removeEventListener("scroll", p)
          );
        }
      }, [s.viewport, s.isPositioned]),
      d
        ? c.jsx(Nh, {
            ...r,
            ref: m,
            onAutoScroll: () => {
              const { viewport: p, selectedItem: v } = s;
              p && v && (p.scrollTop = p.scrollTop + v.offsetHeight);
            },
          })
        : null
    );
  });
Sh.displayName = Rc;
var Nh = y.forwardRef((r, a) => {
    const { __scopeSelect: s, onAutoScroll: l, ...d } = r,
      f = pr("SelectScrollButton", s),
      m = y.useRef(null),
      p = ci(s),
      v = y.useCallback(() => {
        m.current !== null &&
          (window.clearInterval(m.current), (m.current = null));
      }, []);
    return (
      y.useEffect(() => () => v(), [v]),
      pt(() => {
        p()
          .find((w) => w.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [p]),
      c.jsx(Ie.div, {
        "aria-hidden": !0,
        ...d,
        ref: a,
        style: { flexShrink: 0, ...d.style },
        onPointerDown: Re(d.onPointerDown, () => {
          m.current === null && (m.current = window.setInterval(l, 50));
        }),
        onPointerMove: Re(d.onPointerMove, () => {
          f.onItemLeave?.(),
            m.current === null && (m.current = window.setInterval(l, 50));
        }),
        onPointerLeave: Re(d.onPointerLeave, () => {
          v();
        }),
      })
    );
  }),
  Lk = "SelectSeparator",
  Dk = y.forwardRef((r, a) => {
    const { __scopeSelect: s, ...l } = r;
    return c.jsx(Ie.div, { "aria-hidden": !0, ...l, ref: a });
  });
Dk.displayName = Lk;
var Mc = "SelectArrow",
  zk = y.forwardRef((r, a) => {
    const { __scopeSelect: s, ...l } = r,
      d = ui(s),
      f = mr(Mc, s),
      m = pr(Mc, s);
    return f.open && m.position === "popper"
      ? c.jsx(k1, { ...d, ...l, ref: a })
      : null;
  });
zk.displayName = Mc;
var Fk = "SelectBubbleInput",
  _h = y.forwardRef(({ __scopeSelect: r, value: a, ...s }, l) => {
    const d = y.useRef(null),
      f = et(l, d),
      m = T1(a);
    return (
      y.useEffect(() => {
        const p = d.current;
        if (!p) return;
        const v = window.HTMLSelectElement.prototype,
          w = Object.getOwnPropertyDescriptor(v, "value").set;
        if (m !== a && w) {
          const g = new Event("change", { bubbles: !0 });
          w.call(p, a), p.dispatchEvent(g);
        }
      }, [m, a]),
      c.jsx(Ie.select, {
        ...s,
        style: { ...Yp, ...s.style },
        ref: f,
        defaultValue: a,
      })
    );
  });
_h.displayName = Fk;
function Ch(r) {
  return r === "" || r === void 0;
}
function Eh(r) {
  const a = ur(r),
    s = y.useRef(""),
    l = y.useRef(0),
    d = y.useCallback(
      (m) => {
        const p = s.current + m;
        a(p),
          (function v(x) {
            (s.current = x),
              window.clearTimeout(l.current),
              x !== "" && (l.current = window.setTimeout(() => v(""), 1e3));
          })(p);
      },
      [a]
    ),
    f = y.useCallback(() => {
      (s.current = ""), window.clearTimeout(l.current);
    }, []);
  return y.useEffect(() => () => window.clearTimeout(l.current), []), [s, d, f];
}
function jh(r, a, s) {
  const d = a.length > 1 && Array.from(a).every((x) => x === a[0]) ? a[0] : a,
    f = s ? r.indexOf(s) : -1;
  let m = Hk(r, Math.max(f, 0));
  d.length === 1 && (m = m.filter((x) => x !== s));
  const v = m.find((x) =>
    x.textValue.toLowerCase().startsWith(d.toLowerCase())
  );
  return v !== s ? v : void 0;
}
function Hk(r, a) {
  return r.map((s, l) => r[(a + l) % r.length]);
}
var Bk = rh,
  $k = ah,
  Vk = ih,
  Wk = lh,
  Uk = ch,
  Kk = uh,
  Yk = ph,
  Gk = yh,
  Xk = xh,
  Qk = kh,
  Jk = bh,
  Zk = Sh;
function Sm({ ...r }) {
  return c.jsx(Bk, { "data-slot": "select", ...r });
}
function Nm({ ...r }) {
  return c.jsx(Vk, { "data-slot": "select-value", ...r });
}
function _m({ className: r, size: a = "default", children: s, ...l }) {
  return c.jsxs($k, {
    "data-slot": "select-trigger",
    "data-size": a,
    className: Oe(
      "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      r
    ),
    ...l,
    children: [
      s,
      c.jsx(Wk, {
        asChild: !0,
        children: c.jsx(Mm, { className: "size-4 opacity-50" }),
      }),
    ],
  });
}
function Cm({ className: r, children: a, position: s = "popper", ...l }) {
  return c.jsx(Uk, {
    children: c.jsxs(Kk, {
      "data-slot": "select-content",
      className: Oe(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        s === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        r
      ),
      position: s,
      ...l,
      children: [
        c.jsx(qk, {}),
        c.jsx(Yk, {
          className: Oe(
            "p-1",
            s === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          ),
          children: a,
        }),
        c.jsx(eb, {}),
      ],
    }),
  });
}
function fa({ className: r, children: a, ...s }) {
  return c.jsxs(Gk, {
    "data-slot": "select-item",
    className: Oe(
      "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      r
    ),
    ...s,
    children: [
      c.jsx("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: c.jsx(Qk, { children: c.jsx(Gs, { className: "size-4" }) }),
      }),
      c.jsx(Xk, { children: a }),
    ],
  });
}
function qk({ className: r, ...a }) {
  return c.jsx(Jk, {
    "data-slot": "select-scroll-up-button",
    className: Oe("flex cursor-default items-center justify-center py-1", r),
    ...a,
    children: c.jsx(Yv, { className: "size-4" }),
  });
}
function eb({ className: r, ...a }) {
  return c.jsx(Zk, {
    "data-slot": "select-scroll-down-button",
    className: Oe("flex cursor-default items-center justify-center py-1", r),
    ...a,
    children: c.jsx(Mm, { className: "size-4" }),
  });
}
const tb = ({ user: r, onNavigate: a }) => {
  const [s, l] = y.useState([]),
    [d, f] = y.useState(""),
    [m, p] = y.useState(""),
    [v, x] = y.useState(""),
    [w, g] = y.useState(""),
    [C, S] = y.useState(0),
    [P, b] = y.useState(0);
  y.useEffect(() => {
    const I = Et("kamar");
    l(I.filter((j) => j.status === "Tersedia"));
  }, []),
    y.useEffect(() => {
      if (d && m && v) {
        const I = s.find((j) => j.id_kamar === parseInt(d));
        if (I) {
          const j = Math.ceil(
            (new Date(v).getTime() - new Date(m).getTime()) / 864e5
          );
          b(j), S(j > 0 ? j * I.harga_per_malam : 0);
        }
      }
    }, [d, m, v, s]);
  const N = (I) => {
    if ((I.preventDefault(), !r || r.role !== "tamu")) {
      Mn.error("Anda harus login sebagai tamu!");
      return;
    }
    if (new Date(m) >= new Date(v)) {
      Mn.error("Tanggal checkout harus setelah check-in!");
      return;
    }
    const j = hc("pembayaran", {
        id_reservasi: 0,
        metode_pembayaran: w,
        jumlah_bayar: C,
        tanggal_pembayaran: new Date().toISOString(),
        status_pembayaran: "Lunas",
      }),
      D = hc("reservasi", {
        id_kamar: parseInt(d),
        id_tamu: r.id,
        id_petugas: null,
        id_pembayaran: j.id_pembayaran,
        tanggal_pesan: new Date().toISOString(),
        tanggal_checkin: new Date(m).toISOString(),
        tanggal_checkout: new Date(v).toISOString(),
        total_harga: C,
        status_reservasi: "Dipesan",
      });
    Lf("pembayaran", j.id_pembayaran, { id_reservasi: D.id_reservasi }),
      Lf("kamar", parseInt(d), { status: "Terisi" }),
      Mn.success("Reservasi berhasil dibuat!"),
      setTimeout(() => {
        a("home");
      }, 1500);
  };
  if (!r || r.role !== "tamu")
    return c.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4",
      children: c.jsxs(Nt, {
        className:
          "shadow-2xl border-0 dark:bg-gray-900 dark:shadow-gray-950 animate-slide-in-up",
        children: [
          c.jsxs(Lt, {
            className: "text-center",
            children: [
              c.jsx("div", {
                className:
                  "w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center mx-auto mb-4",
                children: c.jsx(ho, { className: "w-8 h-8 text-white" }),
              }),
              c.jsx(Dt, {
                className: "text-2xl dark:text-white",
                children: "Akses Ditolak",
              }),
              c.jsx(Ir, {
                className: "dark:text-gray-400",
                children:
                  "Anda harus login sebagai tamu untuk membuat reservasi",
              }),
            ],
          }),
          c.jsx(_t, {
            children: c.jsx(jt, {
              onClick: () => a("login"),
              className:
                "w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700",
              children: "Login",
            }),
          }),
        ],
      }),
    });
  const O = s.find((I) => I.id_kamar === parseInt(d));
  return c.jsx("div", {
    className:
      "min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 md:py-12",
    children: c.jsxs("div", {
      className: "container mx-auto px-4 max-w-4xl",
      children: [
        c.jsxs("div", {
          className: "text-center mb-6 md:mb-8 animate-slide-in-up",
          children: [
            c.jsxs("div", {
              className:
                "inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-full mb-4 text-sm md:text-base",
              children: [
                c.jsx(Lc, { className: "w-4 h-4" }),
                c.jsx("span", { children: "Reservasi Kamar" }),
              ],
            }),
            c.jsx("h1", {
              className: "text-3xl md:text-4xl mb-2 dark:text-white",
              children: "Pesan Kamar Anda",
            }),
            c.jsx("p", {
              className:
                "text-gray-600 dark:text-gray-400 text-sm md:text-base px-4",
              children: "Lengkapi form di bawah untuk menyelesaikan reservasi",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "grid md:grid-cols-3 gap-4 md:gap-6",
          children: [
            c.jsxs(Nt, {
              className:
                "md:col-span-2 shadow-xl border-0 dark:bg-gray-800 dark:shadow-gray-950 animate-slide-in-up",
              children: [
                c.jsxs(Lt, {
                  children: [
                    c.jsx(Dt, {
                      className: "text-xl md:text-2xl dark:text-white",
                      children: "Detail Reservasi",
                    }),
                    c.jsx(Ir, {
                      className: "dark:text-gray-400 text-sm md:text-base",
                      children: "Isi informasi pemesanan kamar hotel",
                    }),
                  ],
                }),
                c.jsx(_t, {
                  children: c.jsxs("form", {
                    onSubmit: N,
                    className: "space-y-6",
                    children: [
                      c.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          c.jsxs(Rn, {
                            className:
                              "text-base md:text-lg flex items-center gap-2 dark:text-white",
                            children: [
                              c.jsx(ho, {
                                className:
                                  "w-5 h-5 text-violet-600 dark:text-violet-400",
                              }),
                              "Informasi Tamu",
                            ],
                          }),
                          c.jsxs("div", {
                            className:
                              "bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 p-4 md:p-5 rounded-xl space-y-3 border border-violet-100 dark:border-violet-800",
                            children: [
                              c.jsxs("div", {
                                className:
                                  "flex items-center gap-2 text-xs md:text-sm",
                                children: [
                                  c.jsx(ho, {
                                    className:
                                      "w-4 h-4 text-violet-600 dark:text-violet-400",
                                  }),
                                  c.jsx("span", {
                                    className:
                                      "text-gray-600 dark:text-gray-400",
                                    children: "Nama:",
                                  }),
                                  c.jsx("span", {
                                    className: "dark:text-white",
                                    children:
                                      r.role === "tamu"
                                        ? r.data.nama_tamu
                                        : r.data.nama_petugas,
                                  }),
                                ],
                              }),
                              r.role === "tamu" &&
                                c.jsxs(c.Fragment, {
                                  children: [
                                    c.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 text-xs md:text-sm",
                                      children: [
                                        c.jsx(Oc, {
                                          className:
                                            "w-4 h-4 text-violet-600 dark:text-violet-400",
                                        }),
                                        c.jsx("span", {
                                          className:
                                            "text-gray-600 dark:text-gray-400",
                                          children: "Email:",
                                        }),
                                        c.jsx("span", {
                                          className: "dark:text-white",
                                          children: r.data.email,
                                        }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 text-xs md:text-sm",
                                      children: [
                                        c.jsx(Am, {
                                          className:
                                            "w-4 h-4 text-violet-600 dark:text-violet-400",
                                        }),
                                        c.jsx("span", {
                                          className:
                                            "text-gray-600 dark:text-gray-400",
                                          children: "No. HP:",
                                        }),
                                        c.jsx("span", {
                                          className: "dark:text-white",
                                          children: r.data.no_hp,
                                        }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 text-xs md:text-sm",
                                      children: [
                                        c.jsx(Im, {
                                          className:
                                            "w-4 h-4 text-violet-600 dark:text-violet-400",
                                        }),
                                        c.jsx("span", {
                                          className:
                                            "text-gray-600 dark:text-gray-400",
                                          children: "Alamat:",
                                        }),
                                        c.jsx("span", {
                                          className: "dark:text-white",
                                          children: r.data.alamat,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          c.jsxs(Rn, {
                            htmlFor: "kamar",
                            className:
                              "flex items-center gap-2 dark:text-white",
                            children: [
                              c.jsx($f, {
                                className:
                                  "w-5 h-5 text-violet-600 dark:text-violet-400",
                              }),
                              "Pilih Kamar",
                            ],
                          }),
                          c.jsxs(Sm, {
                            value: d,
                            onValueChange: f,
                            required: !0,
                            children: [
                              c.jsx(_m, {
                                id: "kamar",
                                className:
                                  "border-violet-200 dark:border-violet-800 dark:bg-gray-700 dark:text-white focus:border-violet-500",
                                children: c.jsx(Nm, {
                                  placeholder: "Pilih tipe kamar",
                                }),
                              }),
                              c.jsx(Cm, {
                                children: s.map((I) =>
                                  c.jsx(
                                    fa,
                                    {
                                      value: I.id_kamar.toString(),
                                      children: c.jsxs("div", {
                                        className:
                                          "flex justify-between items-center w-full",
                                        children: [
                                          c.jsx("span", {
                                            className: "dark:text-white",
                                            children: I.tipe_kamar,
                                          }),
                                          c.jsx("span", {
                                            className:
                                              "text-violet-600 dark:text-violet-400 ml-4",
                                            children: fn(I.harga_per_malam),
                                          }),
                                        ],
                                      }),
                                    },
                                    I.id_kamar
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          c.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              c.jsxs(Rn, {
                                htmlFor: "checkin",
                                className: "flex items-center gap-2",
                                children: [
                                  c.jsx(mo, {
                                    className: "w-4 h-4 text-violet-600",
                                  }),
                                  "Check-in",
                                ],
                              }),
                              c.jsx(po, {
                                id: "checkin",
                                type: "date",
                                value: m,
                                onChange: (I) => p(I.target.value),
                                min: new Date().toISOString().split("T")[0],
                                className:
                                  "border-violet-200 focus:border-violet-500",
                                required: !0,
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              c.jsxs(Rn, {
                                htmlFor: "checkout",
                                className: "flex items-center gap-2",
                                children: [
                                  c.jsx(mo, {
                                    className: "w-4 h-4 text-violet-600",
                                  }),
                                  "Check-out",
                                ],
                              }),
                              c.jsx(po, {
                                id: "checkout",
                                type: "date",
                                value: v,
                                onChange: (I) => x(I.target.value),
                                min:
                                  m || new Date().toISOString().split("T")[0],
                                className:
                                  "border-violet-200 focus:border-violet-500",
                                required: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          c.jsxs(Rn, {
                            htmlFor: "pembayaran",
                            className: "flex items-center gap-2",
                            children: [
                              c.jsx(ua, {
                                className: "w-5 h-5 text-violet-600",
                              }),
                              "Metode Pembayaran",
                            ],
                          }),
                          c.jsxs(Sm, {
                            value: w,
                            onValueChange: g,
                            required: !0,
                            children: [
                              c.jsx(_m, {
                                id: "pembayaran",
                                className:
                                  "border-violet-200 focus:border-violet-500",
                                children: c.jsx(Nm, {
                                  placeholder: "Pilih metode pembayaran",
                                }),
                              }),
                              c.jsxs(Cm, {
                                children: [
                                  c.jsx(fa, {
                                    value: "Transfer",
                                    children: c.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        c.jsx(ua, { className: "w-4 h-4" }),
                                        "Transfer Bank",
                                      ],
                                    }),
                                  }),
                                  c.jsx(fa, {
                                    value: "E-Wallet",
                                    children: c.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        c.jsx(ua, { className: "w-4 h-4" }),
                                        "E-Wallet",
                                      ],
                                    }),
                                  }),
                                  c.jsx(fa, {
                                    value: "Kartu Kredit",
                                    children: c.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        c.jsx(ua, { className: "w-4 h-4" }),
                                        "Kartu Kredit",
                                      ],
                                    }),
                                  }),
                                  c.jsx(fa, {
                                    value: "Cash",
                                    children: c.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        c.jsx(ua, { className: "w-4 h-4" }),
                                        "Cash",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex gap-3 pt-4",
                        children: [
                          c.jsx(jt, {
                            type: "button",
                            variant: "outline",
                            onClick: () => a("home"),
                            className:
                              "flex-1 border-violet-200 hover:bg-violet-50",
                            children: "Batal",
                          }),
                          c.jsxs(jt, {
                            type: "submit",
                            className:
                              "flex-1 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg",
                            children: [
                              c.jsx(Gs, { className: "w-4 h-4 mr-2" }),
                              "Konfirmasi Reservasi",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            c.jsx("div", {
              className: "space-y-4",
              children: c.jsxs(Nt, {
                className:
                  "shadow-xl border-0 sticky top-24 animate-slide-in-up",
                style: { animationDelay: "200ms" },
                children: [
                  c.jsx(Lt, {
                    className:
                      "bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-t-lg",
                    children: c.jsx(Dt, { children: "Ringkasan Pemesanan" }),
                  }),
                  c.jsxs(_t, {
                    className: "pt-6 space-y-4",
                    children: [
                      O &&
                        c.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            c.jsxs("div", {
                              className:
                                "flex justify-between items-center pb-3 border-b",
                              children: [
                                c.jsx("span", {
                                  className: "text-gray-600",
                                  children: "Tipe Kamar",
                                }),
                                c.jsx("span", { children: O.tipe_kamar }),
                              ],
                            }),
                            P > 0 &&
                              c.jsxs(c.Fragment, {
                                children: [
                                  c.jsxs("div", {
                                    className:
                                      "flex justify-between items-center pb-3 border-b",
                                    children: [
                                      c.jsx("span", {
                                        className: "text-gray-600",
                                        children: "Durasi",
                                      }),
                                      c.jsxs("span", {
                                        children: [P, " malam"],
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className:
                                      "flex justify-between items-center pb-3 border-b",
                                    children: [
                                      c.jsx("span", {
                                        className: "text-gray-600",
                                        children: "Harga/malam",
                                      }),
                                      c.jsx("span", {
                                        children: fn(O.harga_per_malam),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            w &&
                              c.jsxs("div", {
                                className:
                                  "flex justify-between items-center pb-3 border-b",
                                children: [
                                  c.jsx("span", {
                                    className: "text-gray-600",
                                    children: "Pembayaran",
                                  }),
                                  c.jsx("span", { children: w }),
                                ],
                              }),
                          ],
                        }),
                      C > 0 &&
                        c.jsx("div", {
                          className:
                            "bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-lg border border-violet-100",
                          children: c.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              c.jsx("span", {
                                className: "text-gray-700",
                                children: "Total Pembayaran",
                              }),
                              c.jsx("span", {
                                className:
                                  "text-2xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent",
                                children: fn(C),
                              }),
                            ],
                          }),
                        }),
                      !d &&
                        c.jsxs("div", {
                          className: "text-center text-gray-500 py-8",
                          children: [
                            c.jsx($f, {
                              className: "w-12 h-12 mx-auto mb-2 opacity-30",
                            }),
                            c.jsx("p", {
                              className: "text-sm",
                              children: "Pilih kamar untuk melihat ringkasan",
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
};
function fc({ className: r, ...a }) {
  return c.jsx("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: c.jsx("table", {
      "data-slot": "table",
      className: Oe("w-full caption-bottom text-sm", r),
      ...a,
    }),
  });
}
function mc({ className: r, ...a }) {
  return c.jsx("thead", {
    "data-slot": "table-header",
    className: Oe("[&_tr]:border-b", r),
    ...a,
  });
}
function pc({ className: r, ...a }) {
  return c.jsx("tbody", {
    "data-slot": "table-body",
    className: Oe("[&_tr:last-child]:border-0", r),
    ...a,
  });
}
function fo({ className: r, ...a }) {
  return c.jsx("tr", {
    "data-slot": "table-row",
    className: Oe(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      r
    ),
    ...a,
  });
}
function Ze({ className: r, ...a }) {
  return c.jsx("th", {
    "data-slot": "table-head",
    className: Oe(
      "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      r
    ),
    ...a,
  });
}
function qe({ className: r, ...a }) {
  return c.jsx("td", {
    "data-slot": "table-cell",
    className: Oe(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      r
    ),
    ...a,
  });
}
const nb = ({ user: r, onNavigate: a }) => {
  const [s, l] = y.useState([]),
    [d, f] = y.useState([]),
    [m, p] = y.useState([]),
    [v, x] = y.useState([]),
    [w, g] = y.useState([]);
  if (!r || r.role !== "petugas")
    return c.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: c.jsx(Nt, {
        className: "w-full max-w-md",
        children: c.jsxs(_t, {
          className: "p-6",
          children: [
            c.jsx("p", {
              className: "text-center text-red-600",
              children: "Akses ditolak. Halaman ini hanya untuk petugas.",
            }),
            c.jsx(jt, {
              onClick: () => a("home"),
              className: "w-full mt-4",
              children: "Kembali ke Beranda",
            }),
          ],
        }),
      }),
    });
  const C = () => {
    l(Et("reservasi")),
      f(Et("pembayaran")),
      p(Et("laporanBulanan")),
      x(Et("kamar")),
      g(Et("tamu"));
  };
  y.useEffect(() => {
    C();
  }, []);
  const S = (j) => {
      const D = v.find((F) => F.id_kamar === j);
      return D ? D.tipe_kamar : "Unknown";
    },
    P = (j) => {
      const D = w.find((F) => F.id_tamu === j);
      return D ? D.nama_tamu : "Unknown";
    },
    b = () => {
      const j = new Date(),
        D = j.getMonth() + 1,
        F = j.getFullYear();
      if (m.find((ie) => ie.bulan === D && ie.tahun === F)) {
        Mn.error("Laporan bulan ini sudah dibuat!");
        return;
      }
      const B = d
          .filter((ie) => {
            const de = new Date(ie.tanggal_pembayaran);
            return de.getMonth() + 1 === D && de.getFullYear() === F;
          })
          .reduce((ie, de) => ie + de.jumlah_bayar, 0),
        H = s.filter((ie) => {
          const de = new Date(ie.tanggal_pesan);
          return de.getMonth() + 1 === D && de.getFullYear() === F;
        }).length;
      hc("laporanBulanan", {
        id_petugas: r.id,
        bulan: D,
        tahun: F,
        total_pendapatan: B,
        total_okupansi: H,
        tanggal_dibuat: new Date().toISOString(),
        catatan_sistem: "Laporan dibuat manual oleh petugas",
      }),
        Mn.success("Laporan bulanan berhasil dibuat!"),
        C();
    };
  if (!r || r.role !== "petugas")
    return c.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center p-4",
      children: c.jsxs(Nt, {
        className: "shadow-2xl border-0 animate-slide-in-up",
        children: [
          c.jsxs(Lt, {
            className: "text-center",
            children: [
              c.jsx("div", {
                className:
                  "w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center mx-auto mb-4",
                children: c.jsx(vc, { className: "w-8 h-8 text-white" }),
              }),
              c.jsx(Dt, { className: "text-2xl", children: "Akses Ditolak" }),
              c.jsx(Ir, {
                children:
                  "Anda harus login sebagai petugas untuk mengakses halaman ini",
              }),
            ],
          }),
          c.jsx(_t, {
            children: c.jsx(jt, {
              onClick: () => a("login"),
              className:
                "w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700",
              children: "Login",
            }),
          }),
        ],
      }),
    });
  const N = v.filter((j) => j.status === "Tersedia").length,
    O = d.reduce((j, D) => j + D.jumlah_bayar, 0),
    I = d
      .filter(
        (j) =>
          new Date(j.tanggal_pembayaran).getMonth() === new Date().getMonth()
      )
      .reduce((j, D) => j + D.jumlah_bayar, 0);
  return c.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50",
    children: [
      c.jsx("div", {
        className:
          "bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white py-8",
        children: c.jsx("div", {
          className: "container mx-auto px-4",
          children: c.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              c.jsxs("div", {
                className: "animate-slide-in-up",
                children: [
                  c.jsx("h1", {
                    className: "text-4xl mb-2",
                    children: "Dashboard Admin",
                  }),
                  c.jsxs("p", {
                    className: "text-violet-100",
                    children: ["Selamat datang, ", r.nama],
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20",
                children: [
                  c.jsx("div", {
                    className: "text-sm text-violet-100",
                    children: "Hari ini",
                  }),
                  c.jsx("div", {
                    className: "text-xl",
                    children: new Date().toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      c.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [
          c.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
            children: [
              c.jsxs(Nt, {
                className:
                  "border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-up overflow-hidden",
                children: [
                  c.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-bl-full opacity-10",
                  }),
                  c.jsxs(Lt, {
                    className:
                      "flex flex-row items-center justify-between space-y-0 pb-2",
                    children: [
                      c.jsx(Dt, {
                        className: "text-sm",
                        children: "Total Reservasi",
                      }),
                      c.jsx(mo, { className: "h-5 w-5 text-blue-600" }),
                    ],
                  }),
                  c.jsxs(_t, {
                    children: [
                      c.jsx("div", {
                        className: "text-3xl mb-1",
                        children: s.length,
                      }),
                      c.jsxs("div", {
                        className: "flex items-center text-xs text-green-600",
                        children: [
                          c.jsx(Jl, { className: "w-4 h-4 mr-1" }),
                          c.jsx("span", { children: "+12% dari bulan lalu" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs(Nt, {
                className:
                  "border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-up overflow-hidden",
                style: { animationDelay: "100ms" },
                children: [
                  c.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-bl-full opacity-10",
                  }),
                  c.jsxs(Lt, {
                    className:
                      "flex flex-row items-center justify-between space-y-0 pb-2",
                    children: [
                      c.jsx(Dt, {
                        className: "text-sm",
                        children: "Total Pendapatan",
                      }),
                      c.jsx(Zl, { className: "h-5 w-5 text-emerald-600" }),
                    ],
                  }),
                  c.jsxs(_t, {
                    children: [
                      c.jsx("div", {
                        className: "text-2xl mb-1",
                        children: fn(O),
                      }),
                      c.jsxs("div", {
                        className: "flex items-center text-xs text-green-600",
                        children: [
                          c.jsx(Jl, { className: "w-4 h-4 mr-1" }),
                          c.jsxs("span", { children: ["Bulan ini: ", fn(I)] }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs(Nt, {
                className:
                  "border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-up overflow-hidden",
                style: { animationDelay: "200ms" },
                children: [
                  c.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-400 to-violet-600 rounded-bl-full opacity-10",
                  }),
                  c.jsxs(Lt, {
                    className:
                      "flex flex-row items-center justify-between space-y-0 pb-2",
                    children: [
                      c.jsx(Dt, {
                        className: "text-sm",
                        children: "Ketersediaan Kamar",
                      }),
                      c.jsx(Ff, { className: "h-5 w-5 text-violet-600" }),
                    ],
                  }),
                  c.jsxs(_t, {
                    children: [
                      c.jsxs("div", {
                        className: "text-3xl mb-1",
                        children: [N, "/", v.length],
                      }),
                      c.jsx("div", {
                        className: "flex items-center text-xs text-gray-600",
                        children: c.jsxs("span", {
                          children: [
                            Math.round((N / v.length) * 100),
                            "% tersedia",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs(Nt, {
                className:
                  "border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-up overflow-hidden",
                style: { animationDelay: "300ms" },
                children: [
                  c.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-bl-full opacity-10",
                  }),
                  c.jsxs(Lt, {
                    className:
                      "flex flex-row items-center justify-between space-y-0 pb-2",
                    children: [
                      c.jsx(Dt, {
                        className: "text-sm",
                        children: "Total Tamu",
                      }),
                      c.jsx(vc, { className: "h-5 w-5 text-amber-600" }),
                    ],
                  }),
                  c.jsxs(_t, {
                    children: [
                      c.jsx("div", {
                        className: "text-3xl mb-1",
                        children: w.length,
                      }),
                      c.jsxs("div", {
                        className: "flex items-center text-xs text-green-600",
                        children: [
                          c.jsx(Jl, { className: "w-4 h-4 mr-1" }),
                          c.jsx("span", { children: "Terdaftar" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs(vp, {
            defaultValue: "reservasi",
            className: "space-y-6",
            children: [
              c.jsxs(yp, {
                className: "bg-white shadow-md p-1 border-0",
                children: [
                  c.jsxs(pa, {
                    value: "reservasi",
                    className:
                      "data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white",
                    children: [
                      c.jsx(mo, { className: "w-4 h-4 mr-2" }),
                      "Reservasi",
                    ],
                  }),
                  c.jsxs(pa, {
                    value: "pembayaran",
                    className:
                      "data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white",
                    children: [
                      c.jsx(Zl, { className: "w-4 h-4 mr-2" }),
                      "Pembayaran",
                    ],
                  }),
                  c.jsxs(pa, {
                    value: "laporan",
                    className:
                      "data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white",
                    children: [
                      c.jsx(Hf, { className: "w-4 h-4 mr-2" }),
                      "Laporan",
                    ],
                  }),
                ],
              }),
              c.jsx(ha, {
                value: "reservasi",
                className: "space-y-4",
                children: c.jsxs(Nt, {
                  className: "border-0 shadow-xl",
                  children: [
                    c.jsxs(Lt, {
                      className:
                        "bg-gradient-to-r from-violet-50 to-purple-50 border-b",
                      children: [
                        c.jsxs(Dt, {
                          className: "flex items-center gap-2",
                          children: [
                            c.jsx(mo, { className: "w-5 h-5 text-violet-600" }),
                            "Daftar Reservasi",
                          ],
                        }),
                        c.jsx(Ir, { children: "Semua data reservasi hotel" }),
                      ],
                    }),
                    c.jsx(_t, {
                      className: "pt-6",
                      children: c.jsx("div", {
                        className: "overflow-x-auto",
                        children: c.jsxs(fc, {
                          children: [
                            c.jsx(mc, {
                              children: c.jsxs(fo, {
                                className: "bg-gray-50",
                                children: [
                                  c.jsx(Ze, { children: "ID" }),
                                  c.jsx(Ze, { children: "Tamu" }),
                                  c.jsx(Ze, { children: "Kamar" }),
                                  c.jsx(Ze, { children: "Check-in" }),
                                  c.jsx(Ze, { children: "Check-out" }),
                                  c.jsx(Ze, { children: "Total" }),
                                  c.jsx(Ze, { children: "Status" }),
                                ],
                              }),
                            }),
                            c.jsx(pc, {
                              children: s.map((j) =>
                                c.jsxs(
                                  fo,
                                  {
                                    className:
                                      "hover:bg-violet-50/50 transition-colors",
                                    children: [
                                      c.jsx(qe, {
                                        children: c.jsxs(Pn, {
                                          variant: "outline",
                                          className: "border-violet-200",
                                          children: ["#", j.id_reservasi],
                                        }),
                                      }),
                                      c.jsx(qe, { children: P(j.id_tamu) }),
                                      c.jsx(qe, {
                                        children: c.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            c.jsx(Ff, {
                                              className:
                                                "w-4 h-4 text-violet-600",
                                            }),
                                            S(j.id_kamar),
                                          ],
                                        }),
                                      }),
                                      c.jsx(qe, {
                                        children: Os(j.tanggal_checkin),
                                      }),
                                      c.jsx(qe, {
                                        children: Os(j.tanggal_checkout),
                                      }),
                                      c.jsx(qe, {
                                        className: "text-violet-600",
                                        children: fn(j.total_harga),
                                      }),
                                      c.jsx(qe, {
                                        children: c.jsxs(Pn, {
                                          variant:
                                            j.status_reservasi === "Dipesan"
                                              ? "default"
                                              : "secondary",
                                          className:
                                            j.status_reservasi === "Dipesan"
                                              ? "bg-emerald-500 hover:bg-emerald-600"
                                              : "",
                                          children: [
                                            c.jsx(Bf, {
                                              className: "w-3 h-3 mr-1",
                                            }),
                                            j.status_reservasi,
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  j.id_reservasi
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              c.jsx(ha, {
                value: "pembayaran",
                className: "space-y-4",
                children: c.jsxs(Nt, {
                  className: "border-0 shadow-xl",
                  children: [
                    c.jsxs(Lt, {
                      className:
                        "bg-gradient-to-r from-violet-50 to-purple-50 border-b",
                      children: [
                        c.jsxs(Dt, {
                          className: "flex items-center gap-2",
                          children: [
                            c.jsx(Zl, { className: "w-5 h-5 text-violet-600" }),
                            "Daftar Pembayaran",
                          ],
                        }),
                        c.jsx(Ir, { children: "Semua data pembayaran" }),
                      ],
                    }),
                    c.jsx(_t, {
                      className: "pt-6",
                      children: c.jsx("div", {
                        className: "overflow-x-auto",
                        children: c.jsxs(fc, {
                          children: [
                            c.jsx(mc, {
                              children: c.jsxs(fo, {
                                className: "bg-gray-50",
                                children: [
                                  c.jsx(Ze, { children: "ID" }),
                                  c.jsx(Ze, { children: "ID Reservasi" }),
                                  c.jsx(Ze, { children: "Metode" }),
                                  c.jsx(Ze, { children: "Jumlah" }),
                                  c.jsx(Ze, { children: "Tanggal" }),
                                  c.jsx(Ze, { children: "Status" }),
                                ],
                              }),
                            }),
                            c.jsx(pc, {
                              children: d.map((j) =>
                                c.jsxs(
                                  fo,
                                  {
                                    className:
                                      "hover:bg-violet-50/50 transition-colors",
                                    children: [
                                      c.jsx(qe, {
                                        children: c.jsxs(Pn, {
                                          variant: "outline",
                                          className: "border-violet-200",
                                          children: ["#", j.id_pembayaran],
                                        }),
                                      }),
                                      c.jsxs(qe, {
                                        children: ["#", j.id_reservasi],
                                      }),
                                      c.jsx(qe, {
                                        children: c.jsx(Pn, {
                                          variant: "outline",
                                          className:
                                            "border-blue-200 text-blue-700",
                                          children: j.metode_pembayaran,
                                        }),
                                      }),
                                      c.jsx(qe, {
                                        className: "text-violet-600",
                                        children: fn(j.jumlah_bayar),
                                      }),
                                      c.jsx(qe, {
                                        children: Os(j.tanggal_pembayaran),
                                      }),
                                      c.jsx(qe, {
                                        children: c.jsxs(Pn, {
                                          variant:
                                            j.status_pembayaran === "Lunas"
                                              ? "default"
                                              : "destructive",
                                          className:
                                            j.status_pembayaran === "Lunas"
                                              ? "bg-emerald-500 hover:bg-emerald-600"
                                              : "",
                                          children: [
                                            c.jsx(Bf, {
                                              className: "w-3 h-3 mr-1",
                                            }),
                                            j.status_pembayaran,
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  j.id_pembayaran
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              c.jsx(ha, {
                value: "laporan",
                className: "space-y-4",
                children: c.jsxs(Nt, {
                  className: "border-0 shadow-xl",
                  children: [
                    c.jsx(Lt, {
                      className:
                        "bg-gradient-to-r from-violet-50 to-purple-50 border-b",
                      children: c.jsxs("div", {
                        className: "flex justify-between items-center",
                        children: [
                          c.jsxs("div", {
                            children: [
                              c.jsxs(Dt, {
                                className: "flex items-center gap-2",
                                children: [
                                  c.jsx(Hf, {
                                    className: "w-5 h-5 text-violet-600",
                                  }),
                                  "Laporan Bulanan",
                                ],
                              }),
                              c.jsx(Ir, {
                                children: "Generate dan lihat laporan bulanan",
                              }),
                            ],
                          }),
                          c.jsxs(jt, {
                            onClick: b,
                            className:
                              "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg",
                            children: [
                              c.jsx(Qv, { className: "w-4 h-4 mr-2" }),
                              "Generate Laporan",
                            ],
                          }),
                        ],
                      }),
                    }),
                    c.jsx(_t, {
                      className: "pt-6",
                      children: c.jsx("div", {
                        className: "overflow-x-auto",
                        children: c.jsxs(fc, {
                          children: [
                            c.jsx(mc, {
                              children: c.jsxs(fo, {
                                className: "bg-gray-50",
                                children: [
                                  c.jsx(Ze, { children: "ID" }),
                                  c.jsx(Ze, { children: "Periode" }),
                                  c.jsx(Ze, { children: "Total Pendapatan" }),
                                  c.jsx(Ze, { children: "Total Okupansi" }),
                                  c.jsx(Ze, { children: "Tanggal Dibuat" }),
                                  c.jsx(Ze, { children: "Catatan" }),
                                ],
                              }),
                            }),
                            c.jsx(pc, {
                              children: m.map((j) =>
                                c.jsxs(
                                  fo,
                                  {
                                    className:
                                      "hover:bg-violet-50/50 transition-colors",
                                    children: [
                                      c.jsx(qe, {
                                        children: c.jsxs(Pn, {
                                          variant: "outline",
                                          className: "border-violet-200",
                                          children: ["#", j.id_laporan],
                                        }),
                                      }),
                                      c.jsx(qe, {
                                        children: c.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            c.jsx(mo, {
                                              className:
                                                "w-4 h-4 text-violet-600",
                                            }),
                                            j.bulan,
                                            "/",
                                            j.tahun,
                                          ],
                                        }),
                                      }),
                                      c.jsx(qe, {
                                        className: "text-violet-600",
                                        children: fn(j.total_pendapatan),
                                      }),
                                      c.jsx(qe, {
                                        children: c.jsxs(Pn, {
                                          variant: "outline",
                                          className:
                                            "border-emerald-200 text-emerald-700",
                                          children: [
                                            j.total_okupansi,
                                            " reservasi",
                                          ],
                                        }),
                                      }),
                                      c.jsx(qe, {
                                        children: Os(j.tanggal_dibuat),
                                      }),
                                      c.jsx(qe, {
                                        className:
                                          "text-sm text-gray-600 max-w-xs truncate",
                                        children: j.catatan_sistem,
                                      }),
                                    ],
                                  },
                                  j.id_laporan
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
var rb = (r, a, s, l, d, f, m, p) => {
    let v = document.documentElement,
      x = ["light", "dark"];
    function w(S) {
      (Array.isArray(r) ? r : [r]).forEach((P) => {
        let b = P === "class",
          N = b && f ? d.map((O) => f[O] || O) : d;
        b
          ? (v.classList.remove(...N), v.classList.add(f && f[S] ? f[S] : S))
          : v.setAttribute(P, S);
      }),
        g(S);
    }
    function g(S) {
      p && x.includes(S) && (v.style.colorScheme = S);
    }
    function C() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (l) w(l);
    else
      try {
        let S = localStorage.getItem(a) || s,
          P = m && S === "system" ? C() : S;
        w(P);
      } catch {}
  },
  ob = y.createContext(void 0),
  ab = { setTheme: (r) => {}, themes: [] },
  sb = () => {
    var r;
    return (r = y.useContext(ob)) != null ? r : ab;
  };
y.memo(
  ({
    forcedTheme: r,
    storageKey: a,
    attribute: s,
    enableSystem: l,
    enableColorScheme: d,
    defaultTheme: f,
    value: m,
    themes: p,
    nonce: v,
    scriptProps: x,
  }) => {
    let w = JSON.stringify([s, a, f, r, p, m, l, d]).slice(1, -1);
    return y.createElement("script", {
      ...x,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? v : "",
      dangerouslySetInnerHTML: { __html: `(${rb.toString()})(${w})` },
    });
  }
);
const ib = ({ ...r }) => {
  const { theme: a = "system" } = sb();
  return c.jsx(Ox, {
    theme: a,
    className: "toaster group",
    style: {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)",
    },
    ...r,
  });
};
function lb() {
  const [r, a] = y.useState("home"),
    [s, l] = y.useState(null);
  y.useEffect(() => {
    Rv();
    const p = sessionStorage.getItem("user");
    p && l(JSON.parse(p));
  }, []);
  const d = (p) => {
      l(p), sessionStorage.setItem("user", JSON.stringify(p));
    },
    f = () => {
      l(null), sessionStorage.removeItem("user"), a("home");
    },
    m = (p) => {
      a(p);
    };
  return c.jsx(Iv, {
    children: c.jsxs("div", {
      className:
        "min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",
      children: [
        c.jsx(fy, { currentPage: r, onNavigate: m, user: s, onLogout: f }),
        r === "home" && c.jsx(vy, { onNavigate: m, user: s }),
        r === "login" && c.jsx(Lx, { onLogin: d, onNavigate: m }),
        r === "reservasi" && c.jsx(tb, { user: s, onNavigate: m }),
        r === "admin" && c.jsx(nb, { user: s, onNavigate: m }),
        c.jsx(ib, {}),
      ],
    }),
  });
}
Pv.createRoot(document.getElementById("root")).render(c.jsx(lb, {}));
