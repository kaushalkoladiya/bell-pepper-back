(this["webpackJsonpbell-pepper"] = this["webpackJsonpbell-pepper"] || []).push([
  [0],
  {
    543: function (e, t, a) {
      "use strict";
      a.r(t);
      var c = a(1),
        n = a(0),
        r = a(17),
        i = a.n(r),
        s = a(24);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(388);
      var o = a(14),
        l = a(622),
        d = a(53),
        j = a.n(d),
        b = a(19),
        h = a(94),
        x = a(335),
        O = a(7),
        u = "GET_USERS",
        m = { data: [] },
        p = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : m,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case u:
              return Object(O.a)(Object(O.a)({}, e), {}, { data: c });
            default:
              return e;
          }
        },
        g = "GET_VENDOR",
        f = { data: [] },
        v = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : f,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case g:
              return Object(O.a)(Object(O.a)({}, e), {}, { data: c });
            default:
              return e;
          }
        },
        y = "GET_SERVICE",
        C = "OPEN_SERVICE_DIALOG",
        N = "CLOSE_SERVICE_DIALOG",
        w = { data: [], dialogId: null, isDialogOpen: !1 },
        S = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : w,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case y:
              return Object(O.a)(Object(O.a)({}, e), {}, { data: c });
            case C:
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { dialogId: c, isDialogOpen: !0 }
              );
            case N:
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { dialogId: null, isDialogOpen: !1 }
              );
            default:
              return e;
          }
        },
        k = "GET_BOOKING",
        T = "OPEN_BOOKING_DIALOG",
        D = "CLOSE_BOOKING_DIALOG",
        L = { data: [], dialogId: null, isDialogOpen: !1 },
        I = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : L,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            c = t.payload;
          switch (a) {
            case k:
              return Object(O.a)(Object(O.a)({}, e), {}, { data: c });
            case T:
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { dialogId: c, isDialogOpen: !0 }
              );
            case D:
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { dialogId: null, isDialogOpen: !1 }
              );
            default:
              return e;
          }
        },
        P = [x.a],
        A = Object(h.c)({ user: p, vendor: v, service: S, booking: I }),
        _ = ("object" === typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
          : h.d)(h.a.apply(void 0, P)),
        B = Object(h.e)(A, {}, _),
        W = a(610),
        M = a(624),
        E = Object(W.a)(function () {
          return Object(M.a)({
            "@global": {
              "*": { boxSizing: "border-box", margin: 0, padding: 0 },
              html: {
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",
                height: "100%",
                width: "100%",
              },
              body: {
                backgroundColor: "#f4f6f8",
                height: "100%",
                width: "100%",
              },
              a: { textDecoration: "none" },
              "#root": { height: "100%", width: "100%" },
            },
          });
        }),
        R = function () {
          return E(), null;
        },
        q = a(90);
      q.Chart.helpers.extend(q.Chart.elements.Rectangle.prototype, {
        draw: function () {
          var e,
            t,
            a,
            c,
            n,
            r,
            i,
            s,
            o = this._chart.ctx,
            l = this._view,
            d = l.borderWidth,
            j = this._chart.config.options.cornerRadius;
          if (
            (j < 0 && (j = 0),
            "undefined" === typeof j && (j = 0),
            l.horizontal
              ? ((e = l.base),
                (t = l.x),
                (a = l.y - l.height / 2),
                (c = l.y + l.height / 2),
                (n = t > e ? 1 : -1),
                (r = 1),
                (i = l.borderSkipped || "left"))
              : ((e = l.x - l.width / 2),
                (t = l.x + l.width / 2),
                (a = l.y),
                (n = 1),
                (r = (c = l.base) > a ? 1 : -1),
                (i = l.borderSkipped || "bottom")),
            d)
          ) {
            var b = Math.min(Math.abs(e - t), Math.abs(a - c)),
              h = (d = d > b ? b : d) / 2,
              x = e + ("left" !== i ? h * n : 0),
              O = t + ("right" !== i ? -h * n : 0),
              u = a + ("top" !== i ? h * r : 0),
              m = c + ("bottom" !== i ? -h * r : 0);
            x !== O && ((a = u), (c = m)), u !== m && ((e = x), (t = O));
          }
          o.beginPath(),
            (o.fillStyle = l.backgroundColor),
            (o.strokeStyle = l.borderColor),
            (o.lineWidth = d);
          var p = [
              [e, c],
              [e, a],
              [t, a],
              [t, c],
            ],
            g = ["bottom", "left", "top", "right"].indexOf(i, 0);
          function f(e) {
            return p[(g + e) % 4];
          }
          -1 === g && (g = 0);
          var v = f(0);
          o.moveTo(v[0], v[1]);
          for (var y = 1; y < 4; y += 1) {
            v = f(y);
            var C = y + 1;
            4 === C && (C = 0);
            var N = p[2][0] - p[1][0],
              w = p[0][1] - p[1][1],
              S = p[1][0],
              k = p[1][1];
            if (
              ((s = j) > Math.abs(w) / 2 && (s = Math.floor(Math.abs(w) / 2)),
              s > Math.abs(N) / 2 && (s = Math.floor(Math.abs(N) / 2)),
              w < 0)
            ) {
              var T = S,
                D = S + N,
                L = k + w,
                I = k + w,
                P = S,
                A = S + N,
                _ = k,
                B = k;
              o.moveTo(P + s, _),
                o.lineTo(A - s, B),
                o.quadraticCurveTo(A, B, A, B - s),
                o.lineTo(D, I + s),
                o.quadraticCurveTo(D, I, D - s, I),
                o.lineTo(T + s, L),
                o.quadraticCurveTo(T, L, T, L + s),
                o.lineTo(P, _ - s),
                o.quadraticCurveTo(P, _, P + s, _);
            } else if (N < 0) {
              var W = S + N,
                M = S,
                E = k,
                R = k,
                q = S + N,
                z = S,
                U = k + w,
                G = k + w;
              o.moveTo(q + s, U),
                o.lineTo(z - s, G),
                o.quadraticCurveTo(z, G, z, G - s),
                o.lineTo(M, R + s),
                o.quadraticCurveTo(M, R, M - s, R),
                o.lineTo(W + s, E),
                o.quadraticCurveTo(W, E, W, E + s),
                o.lineTo(q, U - s),
                o.quadraticCurveTo(q, U, q + s, U);
            } else
              o.moveTo(S + s, k),
                o.lineTo(S + N - s, k),
                o.quadraticCurveTo(S + N, k, S + N, k + s),
                o.lineTo(S + N, k + w - s),
                o.quadraticCurveTo(S + N, k + w, S + N - s, k + w),
                o.lineTo(S + s, k + w),
                o.quadraticCurveTo(S, k + w, S, k + w - s),
                o.lineTo(S, k + s),
                o.quadraticCurveTo(S, k, S + s, k);
          }
          o.fill(), d && o.stroke();
        },
      });
      var z = a(373),
        U = a(9),
        G = Object(z.a)({
          palette: {
            background: {
              dark: "#F4F6F8",
              default: U.a.common.white,
              paper: U.a.common.white,
            },
            primary: { main: U.a.indigo[500] },
            secondary: { main: U.a.indigo[500] },
            text: { primary: U.a.blueGrey[900], secondary: U.a.blueGrey[600] },
          },
          shadows: [
            "none",
            "0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)",
            "0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)",
          ],
          typography: {
            h1: { fontWeight: 500, fontSize: 35, letterSpacing: "-0.24px" },
            h2: { fontWeight: 500, fontSize: 29, letterSpacing: "-0.24px" },
            h3: { fontWeight: 500, fontSize: 24, letterSpacing: "-0.06px" },
            h4: { fontWeight: 500, fontSize: 20, letterSpacing: "-0.06px" },
            h5: { fontWeight: 500, fontSize: 16, letterSpacing: "-0.05px" },
            h6: { fontWeight: 500, fontSize: 14, letterSpacing: "-0.05px" },
            overline: { fontWeight: 500 },
          },
          overrides: {
            MuiTableCell: {
              root: { padding: 0 },
              body: { textAlign: "center" },
              head: { textAlign: "center" },
            },
          },
        }),
        V = a(16),
        F = a(72),
        Y = a(544),
        H = a(548),
        K = a(41),
        $ = a(505),
        X = a(337),
        J = a(547),
        Z = a(507),
        Q = a(612),
        ee = a(613),
        te = a(614),
        ae = a(615),
        ce = a(616),
        ne = a(617),
        re = a(618),
        ie = a(619),
        se = a(620),
        oe = a(12),
        le = a(3),
        de = a(336),
        je = a(504),
        be = Object(W.a)(function (e) {
          return {
            item: { display: "flex", paddingTop: 0, paddingBottom: 0 },
            button: {
              color: e.palette.text.secondary,
              fontWeight: e.typography.fontWeightMedium,
              justifyContent: "flex-start",
              letterSpacing: 0,
              padding: "10px 8px",
              textTransform: "none",
              width: "100%",
            },
            icon: { marginRight: e.spacing(1) },
            title: { marginRight: "auto" },
            active: {
              color: e.palette.primary.main,
              "& $title": { fontWeight: e.typography.fontWeightMedium },
              "& $icon": { color: e.palette.primary.main },
            },
          };
        }),
        he = function (e) {
          var t = e.className,
            a = e.href,
            n = e.icon,
            r = e.title,
            i = Object(oe.a)(e, ["className", "href", "icon", "title"]),
            o = be();
          return Object(c.jsx)(
            de.a,
            Object(O.a)(
              Object(O.a)(
                { className: Object(le.a)(o.item, t), disableGutters: !0 },
                i
              ),
              {},
              {
                children: Object(c.jsxs)(je.a, {
                  activeClassName: o.active,
                  className: o.button,
                  component: s.c,
                  to: a,
                  children: [
                    n && Object(c.jsx)(n, { className: o.icon, size: "20" }),
                    Object(c.jsx)("span", { className: o.title, children: r }),
                  ],
                }),
              }
            )
          );
        },
        xe = "/static/images/avatars/avatar_6.png",
        Oe = "Root Admin",
        ue = "Dummy User",
        me = [
          { href: "/app/dashboard", icon: Q.a, title: "Dashboard" },
          { href: "/app/customers", icon: ee.a, title: "Customers" },
          { href: "/app/vendors", icon: ee.a, title: "Vendors" },
          { href: "/app/services", icon: te.a, title: "Services" },
          { href: "/app/bookings", icon: ae.a, title: "Bookings" },
          { href: "/app/account", icon: ce.a, title: "Account" },
          { href: "/app/settings", icon: ne.a, title: "Settings" },
          { href: "/login", icon: re.a, title: "Login" },
          { href: "/register", icon: ie.a, title: "Register" },
          { href: "/404", icon: se.a, title: "Error" },
        ],
        pe = Object(W.a)(function () {
          return {
            mobileDrawer: { width: 256 },
            desktopDrawer: { width: 256, top: 64, height: "calc(100% - 64px)" },
            avatar: { cursor: "pointer", width: 64, height: 64 },
          };
        }),
        ge = function (e) {
          var t = e.onMobileClose,
            a = e.openMobile,
            r = pe(),
            i = Object(o.f)();
          Object(n.useEffect)(
            function () {
              a && t && t();
            },
            [i.pathname]
          );
          var l = Object(c.jsxs)(Y.a, {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            children: [
              Object(c.jsxs)(Y.a, {
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                p: 2,
                children: [
                  Object(c.jsx)(H.a, {
                    className: r.avatar,
                    component: s.b,
                    src: xe,
                    to: "/app/account",
                  }),
                  Object(c.jsx)(K.a, {
                    className: r.name,
                    color: "textPrimary",
                    variant: "h5",
                    children: ue,
                  }),
                  Object(c.jsx)(K.a, {
                    color: "textSecondary",
                    variant: "body2",
                    children: Oe,
                  }),
                ],
              }),
              Object(c.jsx)($.a, {}),
              Object(c.jsx)(Y.a, {
                p: 2,
                children: Object(c.jsx)(X.a, {
                  children: me.map(function (e) {
                    return Object(c.jsx)(
                      he,
                      { href: e.href, title: e.title, icon: e.icon },
                      e.title
                    );
                  }),
                }),
              }),
              Object(c.jsx)(Y.a, { flexGrow: 1 }),
            ],
          });
          return Object(c.jsxs)(c.Fragment, {
            children: [
              Object(c.jsx)(J.a, {
                lgUp: !0,
                children: Object(c.jsx)(Z.a, {
                  anchor: "left",
                  classes: { paper: r.mobileDrawer },
                  onClose: t,
                  open: a,
                  variant: "temporary",
                  children: l,
                }),
              }),
              Object(c.jsx)(J.a, {
                mdDown: !0,
                children: Object(c.jsx)(Z.a, {
                  anchor: "left",
                  classes: { paper: r.desktopDrawer },
                  open: !0,
                  variant: "persistent",
                  children: l,
                }),
              }),
            ],
          });
        };
      ge.defaultProps = { onMobileClose: function () {}, openMobile: !1 };
      var fe = ge,
        ve = a(509),
        ye = a(510),
        Ce = a(341),
        Ne = a(511),
        we = a(344),
        Se = a.n(we),
        ke = a(342),
        Te = a.n(ke),
        De = a(343),
        Le = a.n(De),
        Ie = function (e) {
          return Object(c.jsx)(
            "img",
            Object(O.a)({ alt: "Logo", src: "/static/logo.svg" }, e)
          );
        },
        Pe = Object(W.a)(function () {
          return { root: {}, avatar: { width: 60, height: 60 } };
        }),
        Ae = function (e) {
          var t = e.className,
            a = e.onMobileNavOpen,
            r = Object(oe.a)(e, ["className", "onMobileNavOpen"]),
            i = Pe(),
            o = Object(n.useState)([]),
            l = Object(V.a)(o, 1)[0];
          return Object(c.jsx)(
            ve.a,
            Object(O.a)(
              Object(O.a)(
                { className: Object(le.a)(i.root, t), elevation: 0 },
                r
              ),
              {},
              {
                children: Object(c.jsxs)(ye.a, {
                  children: [
                    Object(c.jsx)(s.b, {
                      to: "/",
                      children: Object(c.jsx)(Ie, {}),
                    }),
                    Object(c.jsx)(Y.a, { flexGrow: 1 }),
                    Object(c.jsxs)(J.a, {
                      mdDown: !0,
                      children: [
                        Object(c.jsx)(Ce.a, {
                          color: "inherit",
                          children: Object(c.jsx)(Ne.a, {
                            badgeContent: l.length,
                            color: "primary",
                            variant: "dot",
                            children: Object(c.jsx)(Te.a, {}),
                          }),
                        }),
                        Object(c.jsx)(Ce.a, {
                          color: "inherit",
                          children: Object(c.jsx)(Le.a, {}),
                        }),
                      ],
                    }),
                    Object(c.jsx)(J.a, {
                      lgUp: !0,
                      children: Object(c.jsx)(Ce.a, {
                        color: "inherit",
                        onClick: a,
                        children: Object(c.jsx)(Se.a, {}),
                      }),
                    }),
                  ],
                }),
              }
            )
          );
        },
        _e = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              display: "flex",
              height: "100%",
              overflow: "hidden",
              width: "100%",
            },
            wrapper: Object(F.a)(
              {
                display: "flex",
                flex: "1 1 auto",
                overflow: "hidden",
                paddingTop: 64,
              },
              e.breakpoints.up("lg"),
              { paddingLeft: 256 }
            ),
            contentContainer: {
              display: "flex",
              flex: "1 1 auto",
              overflow: "hidden",
            },
            content: { flex: "1 1 auto", height: "100%", overflow: "auto" },
          };
        }),
        Be = function () {
          var e = _e(),
            t = Object(n.useState)(!1),
            a = Object(V.a)(t, 2),
            r = a[0],
            i = a[1];
          return Object(c.jsxs)("div", {
            className: e.root,
            children: [
              Object(c.jsx)(Ae, {
                onMobileNavOpen: function () {
                  return i(!0);
                },
              }),
              Object(c.jsx)(fe, {
                onMobileClose: function () {
                  return i(!1);
                },
                openMobile: r,
              }),
              Object(c.jsx)("div", {
                className: e.wrapper,
                children: Object(c.jsx)("div", {
                  className: e.contentContainer,
                  children: Object(c.jsx)("div", {
                    className: e.content,
                    children: Object(c.jsx)(o.b, {}),
                  }),
                }),
              }),
            ],
          });
        },
        We = Object(W.a)({ root: {}, toolbar: { height: 64 } }),
        Me = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            n = We();
          return Object(c.jsx)(
            ve.a,
            Object(O.a)(
              Object(O.a)(
                { className: Object(le.a)(n.root, t), elevation: 0 },
                a
              ),
              {},
              {
                children: Object(c.jsx)(ye.a, {
                  className: n.toolbar,
                  children: Object(c.jsx)(s.b, {
                    to: "/",
                    children: Object(c.jsx)(Ie, {}),
                  }),
                }),
              }
            )
          );
        },
        Ee = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.default,
              display: "flex",
              height: "100%",
              overflow: "hidden",
              width: "100%",
            },
            wrapper: {
              display: "flex",
              flex: "1 1 auto",
              overflow: "hidden",
              paddingTop: 64,
            },
            contentContainer: {
              display: "flex",
              flex: "1 1 auto",
              overflow: "hidden",
            },
            content: { flex: "1 1 auto", height: "100%", overflow: "auto" },
          };
        }),
        Re = function () {
          var e = Ee();
          return Object(c.jsxs)("div", {
            className: e.root,
            children: [
              Object(c.jsx)(Me, {}),
              Object(c.jsx)("div", {
                className: e.wrapper,
                children: Object(c.jsx)("div", {
                  className: e.contentContainer,
                  children: Object(c.jsx)("div", {
                    className: e.content,
                    children: Object(c.jsx)(o.b, {}),
                  }),
                }),
              }),
            ],
          });
        },
        qe = a(520),
        ze = a(517),
        Ue = a(345),
        Ge = Object(n.forwardRef)(function (e, t) {
          var a = e.children,
            n = e.title,
            r = void 0 === n ? "" : n,
            i = Object(oe.a)(e, ["children", "title"]);
          return Object(c.jsxs)(
            "div",
            Object(O.a)(
              Object(O.a)({ ref: t }, i),
              {},
              {
                children: [
                  Object(c.jsx)(Ue.a, {
                    children: Object(c.jsx)("title", { children: r }),
                  }),
                  a,
                ],
              }
            )
          );
        }),
        Ve = a(32),
        Fe = a.n(Ve),
        Ye = a(513),
        He = a(514),
        Ke = a(515),
        $e = "/static/images/avatars/avatar_6.png",
        Xe = "Los Angeles",
        Je = "USA",
        Ze = "Katarina Smith",
        Qe = "GTM-7",
        et = Object(W.a)(function () {
          return { root: {}, avatar: { height: 100, width: 100 } };
        }),
        tt = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            n = et();
          return Object(c.jsxs)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(n.root, t) }, a),
              {},
              {
                children: [
                  Object(c.jsx)(He.a, {
                    children: Object(c.jsxs)(Y.a, {
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      children: [
                        Object(c.jsx)(H.a, { className: n.avatar, src: $e }),
                        Object(c.jsx)(K.a, {
                          color: "textPrimary",
                          gutterBottom: !0,
                          variant: "h3",
                          children: Ze,
                        }),
                        Object(c.jsx)(K.a, {
                          color: "textSecondary",
                          variant: "body1",
                          children: "".concat(Xe, " ").concat(Je),
                        }),
                        Object(c.jsx)(K.a, {
                          className: n.dateText,
                          color: "textSecondary",
                          variant: "body1",
                          children: ""
                            .concat(Fe()().format("hh:mm A"), " ")
                            .concat(Qe),
                        }),
                      ],
                    }),
                  }),
                  Object(c.jsx)($.a, {}),
                  Object(c.jsx)(Ke.a, {
                    children: Object(c.jsx)(je.a, {
                      color: "primary",
                      fullWidth: !0,
                      variant: "text",
                      children: "Upload picture",
                    }),
                  }),
                ],
              }
            )
          );
        },
        at = a(516),
        ct = a(518),
        nt = [
          { value: "alabama", label: "Alabama" },
          { value: "new-york", label: "New York" },
          { value: "san-francisco", label: "San Francisco" },
        ],
        rt = Object(W.a)(function () {
          return { root: {} };
        }),
        it = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            r = rt(),
            i = Object(n.useState)({
              firstName: "Katarina",
              lastName: "Smith",
              email: "demo@devias.io",
              phone: "",
              state: "Alabama",
              country: "USA",
            }),
            s = Object(V.a)(i, 2),
            o = s[0],
            l = s[1],
            d = function (e) {
              l(
                Object(O.a)(
                  Object(O.a)({}, o),
                  {},
                  Object(F.a)({}, e.target.name, e.target.value)
                )
              );
            };
          return Object(c.jsx)(
            "form",
            Object(O.a)(
              Object(O.a)(
                {
                  autoComplete: "off",
                  noValidate: !0,
                  className: Object(le.a)(r.root, t),
                },
                a
              ),
              {},
              {
                children: Object(c.jsxs)(Ye.a, {
                  children: [
                    Object(c.jsx)(at.a, {
                      subheader: "The information can be edited",
                      title: "Profile",
                    }),
                    Object(c.jsx)($.a, {}),
                    Object(c.jsx)(He.a, {
                      children: Object(c.jsxs)(ze.a, {
                        container: !0,
                        spacing: 3,
                        children: [
                          Object(c.jsx)(ze.a, {
                            item: !0,
                            md: 6,
                            xs: 12,
                            children: Object(c.jsx)(ct.a, {
                              fullWidth: !0,
                              helperText: "Please specify the first name",
                              label: "First name",
                              name: "firstName",
                              onChange: d,
                              required: !0,
                              value: o.firstName,
                              variant: "outlined",
                            }),
                          }),
                          Object(c.jsx)(ze.a, {
                            item: !0,
                            md: 6,
                            xs: 12,
                            children: Object(c.jsx)(ct.a, {
                              fullWidth: !0,
                              label: "Last name",
                              name: "lastName",
                              onChange: d,
                              required: !0,
                              value: o.lastName,
                              variant: "outlined",
                            }),
                          }),
                          Object(c.jsx)(ze.a, {
                            item: !0,
                            md: 6,
                            xs: 12,
                            children: Object(c.jsx)(ct.a, {
                              fullWidth: !0,
                              label: "Email Address",
                              name: "email",
                              onChange: d,
                              required: !0,
                              value: o.email,
                              variant: "outlined",
                            }),
                          }),
                          Object(c.jsx)(ze.a, {
                            item: !0,
                            md: 6,
                            xs: 12,
                            children: Object(c.jsx)(ct.a, {
                              fullWidth: !0,
                              label: "Phone Number",
                              name: "phone",
                              onChange: d,
                              type: "number",
                              value: o.phone,
                              variant: "outlined",
                            }),
                          }),
                          Object(c.jsx)(ze.a, {
                            item: !0,
                            md: 6,
                            xs: 12,
                            children: Object(c.jsx)(ct.a, {
                              fullWidth: !0,
                              label: "Country",
                              name: "country",
                              onChange: d,
                              required: !0,
                              value: o.country,
                              variant: "outlined",
                            }),
                          }),
                          Object(c.jsx)(ze.a, {
                            item: !0,
                            md: 6,
                            xs: 12,
                            children: Object(c.jsx)(ct.a, {
                              fullWidth: !0,
                              label: "Select State",
                              name: "state",
                              onChange: d,
                              required: !0,
                              select: !0,
                              SelectProps: { native: !0 },
                              value: o.state,
                              variant: "outlined",
                              children: nt.map(function (e) {
                                return Object(c.jsx)(
                                  "option",
                                  { value: e.value, children: e.label },
                                  e.value
                                );
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(c.jsx)($.a, {}),
                    Object(c.jsx)(Y.a, {
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 2,
                      children: Object(c.jsx)(je.a, {
                        color: "primary",
                        variant: "contained",
                        children: "Save details",
                      }),
                    }),
                  ],
                }),
              }
            )
          );
        },
        st = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              minHeight: "100%",
              paddingBottom: e.spacing(3),
              paddingTop: e.spacing(3),
            },
          };
        }),
        ot = function () {
          var e = st();
          return Object(c.jsx)(Ge, {
            className: e.root,
            title: "Account",
            children: Object(c.jsx)(qe.a, {
              maxWidth: "lg",
              children: Object(c.jsxs)(ze.a, {
                container: !0,
                spacing: 3,
                children: [
                  Object(c.jsx)(ze.a, {
                    item: !0,
                    lg: 4,
                    md: 6,
                    xs: 12,
                    children: Object(c.jsx)(tt, {}),
                  }),
                  Object(c.jsx)(ze.a, {
                    item: !0,
                    lg: 8,
                    md: 6,
                    xs: 12,
                    children: Object(c.jsx)(it, {}),
                  }),
                ],
              }),
            }),
          });
        },
        lt = a(48),
        dt = a.n(lt),
        jt = a(76),
        bt = a(55),
        ht = a.n(bt),
        xt = a(524),
        Ot = a(525),
        ut = a(526),
        mt = a(527),
        pt = a(545),
        gt = a(528),
        ft = a(546),
        vt = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return e
            .replace(/\s+/, " ")
            .split(" ")
            .slice(0, 2)
            .map(function (e) {
              return e && e[0].toUpperCase();
            })
            .join("");
        },
        yt = function (e) {
          return e || "-";
        },
        Ct = Object(W.a)(function (e) {
          return {
            root: {},
            avatar: { margin: e.spacing(1), marginRight: e.spacing(2) },
          };
        });
      var Nt = function (e) {
          var t = e.image,
            a = e.name,
            n = Ct();
          return Object(c.jsxs)(Y.a, {
            alignItems: "center",
            display: "flex",
            children: [
              Object(c.jsx)(H.a, {
                className: n.avatar,
                src: t,
                children: vt(a),
              }),
              Object(c.jsx)(K.a, {
                color: "textPrimary",
                variant: "body1",
                children: yt(a),
              }),
            ],
          });
        },
        wt = Object(W.a)(function (e) {
          return { root: {} };
        }),
        St = function (e) {
          var t = e.className,
            a = e.customers,
            r = Object(oe.a)(e, ["className", "customers"]),
            i = wt(),
            s = Object(n.useState)([]),
            o = Object(V.a)(s, 2),
            l = o[0],
            d = o[1],
            j = Object(n.useState)(10),
            b = Object(V.a)(j, 2),
            h = b[0],
            x = b[1],
            u = Object(n.useState)(0),
            m = Object(V.a)(u, 2),
            p = m[0],
            g = m[1];
          return Object(c.jsxs)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(i.root, t) }, r),
              {},
              {
                children: [
                  Object(c.jsx)(ht.a, {
                    children: Object(c.jsx)(Y.a, {
                      minWidth: 1050,
                      children: Object(c.jsxs)(xt.a, {
                        children: [
                          Object(c.jsx)(Ot.a, {
                            children: Object(c.jsxs)(ut.a, {
                              children: [
                                Object(c.jsx)(mt.a, {
                                  padding: "checkbox",
                                  children: Object(c.jsx)(pt.a, {
                                    checked: l.length === a.length,
                                    color: "primary",
                                    indeterminate:
                                      l.length > 0 && l.length < a.length,
                                    onChange: function (e) {
                                      var t;
                                      (t = e.target.checked
                                        ? a.map(function (e) {
                                            return e._id;
                                          })
                                        : []),
                                        d(t);
                                    },
                                  }),
                                }),
                                Object(c.jsx)(mt.a, { children: "Name" }),
                                Object(c.jsx)(mt.a, { children: "Email" }),
                                Object(c.jsx)(mt.a, { children: "Location" }),
                                Object(c.jsx)(mt.a, { children: "Phone" }),
                                Object(c.jsx)(mt.a, { children: "Gender" }),
                                Object(c.jsx)(mt.a, { children: "DOB" }),
                                Object(c.jsx)(mt.a, { children: "Lon-Lat" }),
                                Object(c.jsx)(mt.a, { children: "City" }),
                                Object(c.jsx)(mt.a, {
                                  children: "Registration date",
                                }),
                              ],
                            }),
                          }),
                          Object(c.jsx)(gt.a, {
                            children: a.slice(0, h).map(function (e) {
                              return Object(c.jsxs)(
                                ut.a,
                                {
                                  hover: !0,
                                  selected: -1 !== l.indexOf(e._id),
                                  children: [
                                    Object(c.jsx)(mt.a, {
                                      padding: "checkbox",
                                      children: Object(c.jsx)(pt.a, {
                                        checked: -1 !== l.indexOf(e._id),
                                        onChange: function (t) {
                                          return (function (e, t) {
                                            var a = l.indexOf(t),
                                              c = [];
                                            -1 === a
                                              ? (c = c.concat(l, t))
                                              : 0 === a
                                              ? (c = c.concat(l.slice(1)))
                                              : a === l.length - 1
                                              ? (c = c.concat(l.slice(0, -1)))
                                              : a > 0 &&
                                                (c = c.concat(
                                                  l.slice(0, a),
                                                  l.slice(a + 1)
                                                )),
                                              d(c);
                                          })(0, e._id);
                                        },
                                        value: "true",
                                      }),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Object(c.jsx)(Nt, {
                                        name: e.name,
                                      }),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.email),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.location),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.mobile),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.gender),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.dob),
                                    }),
                                    Object(c.jsxs)(mt.a, {
                                      children: [e.lon, "-", e.lat],
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.city),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Fe()(e.createdAt).format(
                                        "DD/MM/YYYY"
                                      ),
                                    }),
                                  ],
                                },
                                e._id
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(c.jsx)(ft.a, {
                    component: "div",
                    count: a.length,
                    onChangePage: function (e, t) {
                      g(t);
                    },
                    onChangeRowsPerPage: function (e) {
                      x(e.target.value);
                    },
                    page: p,
                    rowsPerPage: h,
                    rowsPerPageOptions: [5, 10, 25],
                  }),
                ],
              }
            )
          );
        },
        kt = a(530),
        Tt = a(220),
        Dt = a(621),
        Lt = Object(W.a)(function (e) {
          return {
            root: {},
            importButton: { marginRight: e.spacing(1) },
            exportButton: { marginRight: e.spacing(1) },
          };
        });
      var It = function (e) {
          var t = e.className,
            a = e.title,
            n = e.hideAddButton,
            r = Object(oe.a)(e, ["className", "title", "hideAddButton"]),
            i = Lt();
          return Object(c.jsxs)(
            "div",
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(i.root, t) }, r),
              {},
              {
                children: [
                  !n &&
                    Object(c.jsx)(Y.a, {
                      display: "flex",
                      justifyContent: "flex-end",
                      children: Object(c.jsxs)(je.a, {
                        color: "primary",
                        variant: "contained",
                        children: ["Add ", a],
                      }),
                    }),
                  Object(c.jsx)(Y.a, {
                    mt: 3,
                    children: Object(c.jsx)(Ye.a, {
                      children: Object(c.jsx)(He.a, {
                        children: Object(c.jsx)(Y.a, {
                          maxWidth: 500,
                          children: Object(c.jsx)(ct.a, {
                            fullWidth: !0,
                            InputProps: {
                              startAdornment: Object(c.jsx)(kt.a, {
                                position: "start",
                                children: Object(c.jsx)(Tt.a, {
                                  fontSize: "small",
                                  color: "action",
                                  children: Object(c.jsx)(Dt.a, {}),
                                }),
                              }),
                            },
                            placeholder: "Search ".concat(a),
                            variant: "outlined",
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              }
            )
          );
        },
        Pt = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              minHeight: "100%",
              paddingBottom: e.spacing(3),
              paddingTop: e.spacing(3),
            },
          };
        }),
        At = function () {
          var e = Pt(),
            t = Object(b.b)(),
            a = Object(b.c)(function (e) {
              return e.user.data;
            });
          Object(n.useEffect)(function () {
            r();
          }, []);
          var r = (function () {
            var e = Object(jt.a)(
              dt.a.mark(function e() {
                var a, c;
                return dt.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), j.a.get("/user");
                        case 3:
                          (a = e.sent),
                            (c = a.data),
                            t(((n = c.data.users), { type: u, payload: n })),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                    var n;
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return Object(c.jsx)(Ge, {
            className: e.root,
            title: "Customers",
            children: Object(c.jsxs)(qe.a, {
              maxWidth: !1,
              children: [
                Object(c.jsx)(It, { title: "Customer", hideAddButton: !0 }),
                Object(c.jsx)(Y.a, {
                  mt: 3,
                  children: Object(c.jsx)(St, { customers: a }),
                }),
              ],
            }),
          });
        },
        _t = a(357),
        Bt = a.n(_t),
        Wt = a(356),
        Mt = a.n(Wt),
        Et = Object(W.a)(function (e) {
          return {
            root: { height: "100%" },
            avatar: { backgroundColor: U.a.red[600], height: 56, width: 56 },
            differenceIcon: { color: U.a.red[900] },
            differenceValue: { color: U.a.red[900], marginRight: e.spacing(1) },
          };
        }),
        Rt = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            n = Et();
          return Object(c.jsx)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(n.root, t) }, a),
              {},
              {
                children: Object(c.jsxs)(He.a, {
                  children: [
                    Object(c.jsxs)(ze.a, {
                      container: !0,
                      justify: "space-between",
                      spacing: 3,
                      children: [
                        Object(c.jsxs)(ze.a, {
                          item: !0,
                          children: [
                            Object(c.jsx)(K.a, {
                              color: "textSecondary",
                              gutterBottom: !0,
                              variant: "h6",
                              children: "BUDGET",
                            }),
                            Object(c.jsx)(K.a, {
                              color: "textPrimary",
                              variant: "h3",
                              children: "$24,000",
                            }),
                          ],
                        }),
                        Object(c.jsx)(ze.a, {
                          item: !0,
                          children: Object(c.jsx)(H.a, {
                            className: n.avatar,
                            children: Object(c.jsx)(Mt.a, {}),
                          }),
                        }),
                      ],
                    }),
                    Object(c.jsxs)(Y.a, {
                      mt: 2,
                      display: "flex",
                      alignItems: "center",
                      children: [
                        Object(c.jsx)(Bt.a, { className: n.differenceIcon }),
                        Object(c.jsx)(K.a, {
                          className: n.differenceValue,
                          variant: "body2",
                          children: "12%",
                        }),
                        Object(c.jsx)(K.a, {
                          color: "textSecondary",
                          variant: "caption",
                          children: "Since last month",
                        }),
                      ],
                    }),
                  ],
                }),
              }
            )
          );
        },
        qt = a(623),
        zt = a(531),
        Ut = a(549),
        Gt = a(550),
        Vt = a(106),
        Ft = a.n(Vt),
        Yt = [
          {
            id: Object(qt.a)(),
            ref: "CDD1049",
            amount: 30.5,
            customer: { name: "Ekaterina Tankova" },
            createdAt: 15550164e5,
            status: "pending",
          },
          {
            id: Object(qt.a)(),
            ref: "CDD1048",
            amount: 25.1,
            customer: { name: "Cao Yu" },
            createdAt: 15550164e5,
            status: "delivered",
          },
          {
            id: Object(qt.a)(),
            ref: "CDD1047",
            amount: 10.99,
            customer: { name: "Alexa Richardson" },
            createdAt: 155493e7,
            status: "refunded",
          },
          {
            id: Object(qt.a)(),
            ref: "CDD1046",
            amount: 96.43,
            customer: { name: "Anje Keizer" },
            createdAt: 15547572e5,
            status: "pending",
          },
          {
            id: Object(qt.a)(),
            ref: "CDD1045",
            amount: 32.54,
            customer: { name: "Clarke Gillebert" },
            createdAt: 15546708e5,
            status: "delivered",
          },
          {
            id: Object(qt.a)(),
            ref: "CDD1044",
            amount: 16.76,
            customer: { name: "Adam Denisov" },
            createdAt: 15546708e5,
            status: "delivered",
          },
        ],
        Ht = Object(W.a)(function () {
          return { root: {}, actions: { justifyContent: "flex-end" } };
        }),
        Kt = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            r = Ht(),
            i = Object(n.useState)(Yt),
            s = Object(V.a)(i, 1)[0];
          return Object(c.jsxs)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(r.root, t) }, a),
              {},
              {
                children: [
                  Object(c.jsx)(at.a, { title: "Latest Orders" }),
                  Object(c.jsx)($.a, {}),
                  Object(c.jsx)(ht.a, {
                    children: Object(c.jsx)(Y.a, {
                      minWidth: 800,
                      children: Object(c.jsxs)(xt.a, {
                        children: [
                          Object(c.jsx)(Ot.a, {
                            children: Object(c.jsxs)(ut.a, {
                              children: [
                                Object(c.jsx)(mt.a, { children: "Order Ref" }),
                                Object(c.jsx)(mt.a, { children: "Customer" }),
                                Object(c.jsx)(mt.a, {
                                  sortDirection: "desc",
                                  children: Object(c.jsx)(zt.a, {
                                    enterDelay: 300,
                                    title: "Sort",
                                    children: Object(c.jsx)(Ut.a, {
                                      active: !0,
                                      direction: "desc",
                                      children: "Date",
                                    }),
                                  }),
                                }),
                                Object(c.jsx)(mt.a, { children: "Status" }),
                              ],
                            }),
                          }),
                          Object(c.jsx)(gt.a, {
                            children: s.map(function (e) {
                              return Object(c.jsxs)(
                                ut.a,
                                {
                                  hover: !0,
                                  children: [
                                    Object(c.jsx)(mt.a, { children: e.ref }),
                                    Object(c.jsx)(mt.a, {
                                      children: e.customer.name,
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Fe()(e.createdAt).format(
                                        "DD/MM/YYYY"
                                      ),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Object(c.jsx)(Gt.a, {
                                        color: "primary",
                                        label: e.status,
                                        size: "small",
                                      }),
                                    }),
                                  ],
                                },
                                e._id
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(c.jsx)(Y.a, {
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                    children: Object(c.jsx)(je.a, {
                      color: "primary",
                      endIcon: Object(c.jsx)(Ft.a, {}),
                      size: "small",
                      variant: "text",
                      children: "View all",
                    }),
                  }),
                ],
              }
            )
          );
        },
        $t = a(532),
        Xt = a(533),
        Jt = a(360),
        Zt = a.n(Jt),
        Qt = [
          {
            id: Object(qt.a)(),
            name: "Dropbox",
            imageUrl: "/static/images/products/product_1.png",
            updatedAt: Fe()().subtract(2, "hours"),
          },
          {
            id: Object(qt.a)(),
            name: "Medium Corporation",
            imageUrl: "/static/images/products/product_2.png",
            updatedAt: Fe()().subtract(2, "hours"),
          },
          {
            id: Object(qt.a)(),
            name: "Slack",
            imageUrl: "/static/images/products/product_3.png",
            updatedAt: Fe()().subtract(3, "hours"),
          },
          {
            id: Object(qt.a)(),
            name: "Lyft",
            imageUrl: "/static/images/products/product_4.png",
            updatedAt: Fe()().subtract(5, "hours"),
          },
          {
            id: Object(qt.a)(),
            name: "GitHub",
            imageUrl: "/static/images/products/product_5.png",
            updatedAt: Fe()().subtract(9, "hours"),
          },
        ],
        ea = Object(W.a)({
          root: { height: "100%" },
          image: { height: 48, width: 48 },
        }),
        ta = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            r = ea(),
            i = Object(n.useState)(Qt),
            s = Object(V.a)(i, 1)[0];
          return Object(c.jsxs)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(r.root, t) }, a),
              {},
              {
                children: [
                  Object(c.jsx)(at.a, {
                    subtitle: "".concat(s.length, " in total"),
                    title: "Latest Products",
                  }),
                  Object(c.jsx)($.a, {}),
                  Object(c.jsx)(X.a, {
                    children: s.map(function (e, t) {
                      return Object(c.jsxs)(
                        de.a,
                        {
                          divider: t < s.length - 1,
                          children: [
                            Object(c.jsx)($t.a, {
                              children: Object(c.jsx)("img", {
                                alt: "Product",
                                className: r.image,
                                src: e.imageUrl,
                              }),
                            }),
                            Object(c.jsx)(Xt.a, {
                              primary: e.name,
                              secondary: "Updated ".concat(
                                e.updatedAt.fromNow()
                              ),
                            }),
                            Object(c.jsx)(Ce.a, {
                              edge: "end",
                              size: "small",
                              children: Object(c.jsx)(Zt.a, {}),
                            }),
                          ],
                        },
                        e._id
                      );
                    }),
                  }),
                  Object(c.jsx)($.a, {}),
                  Object(c.jsx)(Y.a, {
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                    children: Object(c.jsx)(je.a, {
                      color: "primary",
                      endIcon: Object(c.jsx)(Ft.a, {}),
                      size: "small",
                      variant: "text",
                      children: "View all",
                    }),
                  }),
                ],
              }
            )
          );
        },
        aa = a(18),
        ca = a(361),
        na = a.n(ca),
        ra = Object(W.a)(function () {
          return { root: {} };
        }),
        ia = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            n = ra(),
            r = Object(aa.a)(),
            i = {
              datasets: [
                {
                  backgroundColor: U.a.indigo[500],
                  data: [18, 5, 19, 27, 29, 19, 20],
                  label: "This year",
                },
                {
                  backgroundColor: U.a.grey[200],
                  data: [11, 20, 12, 29, 30, 25, 13],
                  label: "Last year",
                },
              ],
              labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"],
            },
            s = {
              animation: !1,
              cornerRadius: 20,
              layout: { padding: 0 },
              legend: { display: !1 },
              maintainAspectRatio: !1,
              responsive: !0,
              scales: {
                xAxes: [
                  {
                    barThickness: 12,
                    maxBarThickness: 10,
                    barPercentage: 0.5,
                    categoryPercentage: 0.5,
                    ticks: { fontColor: r.palette.text.secondary },
                    gridLines: { display: !1, drawBorder: !1 },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      fontColor: r.palette.text.secondary,
                      beginAtZero: !0,
                      min: 0,
                    },
                    gridLines: {
                      borderDash: [2],
                      borderDashOffset: [2],
                      color: r.palette.divider,
                      drawBorder: !1,
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2],
                      zeroLineColor: r.palette.divider,
                    },
                  },
                ],
              },
              tooltips: {
                backgroundColor: r.palette.background.default,
                bodyFontColor: r.palette.text.secondary,
                borderColor: r.palette.divider,
                borderWidth: 1,
                enabled: !0,
                footerFontColor: r.palette.text.secondary,
                intersect: !1,
                mode: "index",
                titleFontColor: r.palette.text.primary,
              },
            };
          return Object(c.jsxs)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(n.root, t) }, a),
              {},
              {
                children: [
                  Object(c.jsx)(at.a, {
                    action: Object(c.jsx)(je.a, {
                      endIcon: Object(c.jsx)(na.a, {}),
                      size: "small",
                      variant: "text",
                      children: "Last 7 days",
                    }),
                    title: "Latest Sales",
                  }),
                  Object(c.jsx)($.a, {}),
                  Object(c.jsx)(He.a, {
                    children: Object(c.jsx)(Y.a, {
                      height: 400,
                      position: "relative",
                      children: Object(c.jsx)(q.Bar, { data: i, options: s }),
                    }),
                  }),
                  Object(c.jsx)($.a, {}),
                  Object(c.jsx)(Y.a, {
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                    children: Object(c.jsx)(je.a, {
                      color: "primary",
                      endIcon: Object(c.jsx)(Ft.a, {}),
                      size: "small",
                      variant: "text",
                      children: "Overview",
                    }),
                  }),
                ],
              }
            )
          );
        },
        sa = a(534),
        oa = a(362),
        la = a.n(oa),
        da = Object(W.a)(function () {
          return {
            root: { height: "100%" },
            avatar: { backgroundColor: U.a.orange[600], height: 56, width: 56 },
          };
        }),
        ja = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            n = da();
          return Object(c.jsx)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(n.root, t) }, a),
              {},
              {
                children: Object(c.jsxs)(He.a, {
                  children: [
                    Object(c.jsxs)(ze.a, {
                      container: !0,
                      justify: "space-between",
                      spacing: 3,
                      children: [
                        Object(c.jsxs)(ze.a, {
                          item: !0,
                          children: [
                            Object(c.jsx)(K.a, {
                              color: "textSecondary",
                              gutterBottom: !0,
                              variant: "h6",
                              children: "TASKS PROGRESS",
                            }),
                            Object(c.jsx)(K.a, {
                              color: "textPrimary",
                              variant: "h3",
                              children: "75.5%",
                            }),
                          ],
                        }),
                        Object(c.jsx)(ze.a, {
                          item: !0,
                          children: Object(c.jsx)(H.a, {
                            className: n.avatar,
                            children: Object(c.jsx)(la.a, {}),
                          }),
                        }),
                      ],
                    }),
                    Object(c.jsx)(Y.a, {
                      mt: 3,
                      children: Object(c.jsx)(sa.a, {
                        value: 75.5,
                        variant: "determinate",
                      }),
                    }),
                  ],
                }),
              }
            )
          );
        },
        ba = a(364),
        ha = a.n(ba),
        xa = a(363),
        Oa = a.n(xa),
        ua = Object(W.a)(function (e) {
          return {
            root: { height: "100%" },
            avatar: { backgroundColor: U.a.green[600], height: 56, width: 56 },
            differenceIcon: { color: U.a.green[900] },
            differenceValue: {
              color: U.a.green[900],
              marginRight: e.spacing(1),
            },
          };
        }),
        ma = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            n = ua();
          return Object(c.jsx)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(n.root, t) }, a),
              {},
              {
                children: Object(c.jsxs)(He.a, {
                  children: [
                    Object(c.jsxs)(ze.a, {
                      container: !0,
                      justify: "space-between",
                      spacing: 3,
                      children: [
                        Object(c.jsxs)(ze.a, {
                          item: !0,
                          children: [
                            Object(c.jsx)(K.a, {
                              color: "textSecondary",
                              gutterBottom: !0,
                              variant: "h6",
                              children: "TOTAL CUSTOMERS",
                            }),
                            Object(c.jsx)(K.a, {
                              color: "textPrimary",
                              variant: "h3",
                              children: "1,600",
                            }),
                          ],
                        }),
                        Object(c.jsx)(ze.a, {
                          item: !0,
                          children: Object(c.jsx)(H.a, {
                            className: n.avatar,
                            children: Object(c.jsx)(Oa.a, {}),
                          }),
                        }),
                      ],
                    }),
                    Object(c.jsxs)(Y.a, {
                      mt: 2,
                      display: "flex",
                      alignItems: "center",
                      children: [
                        Object(c.jsx)(ha.a, { className: n.differenceIcon }),
                        Object(c.jsx)(K.a, {
                          className: n.differenceValue,
                          variant: "body2",
                          children: "16%",
                        }),
                        Object(c.jsx)(K.a, {
                          color: "textSecondary",
                          variant: "caption",
                          children: "Since last month",
                        }),
                      ],
                    }),
                  ],
                }),
              }
            )
          );
        },
        pa = a(365),
        ga = a.n(pa),
        fa = Object(W.a)(function () {
          return {
            root: { height: "100%" },
            avatar: { backgroundColor: U.a.indigo[600], height: 56, width: 56 },
          };
        }),
        va = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            n = fa();
          return Object(c.jsx)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(n.root, t) }, a),
              {},
              {
                children: Object(c.jsx)(He.a, {
                  children: Object(c.jsxs)(ze.a, {
                    container: !0,
                    justify: "space-between",
                    spacing: 3,
                    children: [
                      Object(c.jsxs)(ze.a, {
                        item: !0,
                        children: [
                          Object(c.jsx)(K.a, {
                            color: "textSecondary",
                            gutterBottom: !0,
                            variant: "h6",
                            children: "TOTAL PROFIT",
                          }),
                          Object(c.jsx)(K.a, {
                            color: "textPrimary",
                            variant: "h3",
                            children: "$23,200",
                          }),
                        ],
                      }),
                      Object(c.jsx)(ze.a, {
                        item: !0,
                        children: Object(c.jsx)(H.a, {
                          className: n.avatar,
                          children: Object(c.jsx)(ga.a, {}),
                        }),
                      }),
                    ],
                  }),
                }),
              }
            )
          );
        },
        ya = a(366),
        Ca = a.n(ya),
        Na = a(368),
        wa = a.n(Na),
        Sa = a(367),
        ka = a.n(Sa),
        Ta = Object(W.a)(function () {
          return { root: { height: "100%" } };
        }),
        Da = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            n = Ta(),
            r = Object(aa.a)(),
            i = {
              datasets: [
                {
                  data: [63, 15, 22],
                  backgroundColor: [
                    U.a.indigo[500],
                    U.a.red[600],
                    U.a.orange[600],
                  ],
                  borderWidth: 8,
                  borderColor: U.a.common.white,
                  hoverBorderColor: U.a.common.white,
                },
              ],
              labels: ["Desktop", "Tablet", "Mobile"],
            },
            s = {
              animation: !1,
              cutoutPercentage: 80,
              layout: { padding: 0 },
              legend: { display: !1 },
              maintainAspectRatio: !1,
              responsive: !0,
              tooltips: {
                backgroundColor: r.palette.background.default,
                bodyFontColor: r.palette.text.secondary,
                borderColor: r.palette.divider,
                borderWidth: 1,
                enabled: !0,
                footerFontColor: r.palette.text.secondary,
                intersect: !1,
                mode: "index",
                titleFontColor: r.palette.text.primary,
              },
            },
            o = [
              {
                title: "Desktop",
                value: 63,
                icon: Ca.a,
                color: U.a.indigo[500],
              },
              { title: "Tablet", value: 15, icon: ka.a, color: U.a.red[600] },
              {
                title: "Mobile",
                value: 23,
                icon: wa.a,
                color: U.a.orange[600],
              },
            ];
          return Object(c.jsxs)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(n.root, t) }, a),
              {},
              {
                children: [
                  Object(c.jsx)(at.a, { title: "Traffic by Device" }),
                  Object(c.jsx)($.a, {}),
                  Object(c.jsxs)(He.a, {
                    children: [
                      Object(c.jsx)(Y.a, {
                        height: 300,
                        position: "relative",
                        children: Object(c.jsx)(q.Doughnut, {
                          data: i,
                          options: s,
                        }),
                      }),
                      Object(c.jsx)(Y.a, {
                        display: "flex",
                        justifyContent: "center",
                        mt: 2,
                        children: o.map(function (e) {
                          var t = e.color,
                            a = e.icon,
                            n = e.title,
                            r = e.value;
                          return Object(c.jsxs)(
                            Y.a,
                            {
                              p: 1,
                              textAlign: "center",
                              children: [
                                Object(c.jsx)(a, { color: "action" }),
                                Object(c.jsx)(K.a, {
                                  color: "textPrimary",
                                  variant: "body1",
                                  children: n,
                                }),
                                Object(c.jsxs)(K.a, {
                                  style: { color: t },
                                  variant: "h2",
                                  children: [r, "%"],
                                }),
                              ],
                            },
                            n
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }
            )
          );
        },
        La = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              minHeight: "100%",
              paddingBottom: e.spacing(3),
              paddingTop: e.spacing(3),
            },
          };
        }),
        Ia = function () {
          var e = La();
          return Object(c.jsx)(Ge, {
            className: e.root,
            title: "Dashboard",
            children: Object(c.jsx)(qe.a, {
              maxWidth: !1,
              children: Object(c.jsxs)(ze.a, {
                container: !0,
                spacing: 3,
                children: [
                  Object(c.jsx)(ze.a, {
                    item: !0,
                    lg: 3,
                    sm: 6,
                    xl: 3,
                    xs: 12,
                    children: Object(c.jsx)(Rt, {}),
                  }),
                  Object(c.jsx)(ze.a, {
                    item: !0,
                    lg: 3,
                    sm: 6,
                    xl: 3,
                    xs: 12,
                    children: Object(c.jsx)(ma, {}),
                  }),
                  Object(c.jsx)(ze.a, {
                    item: !0,
                    lg: 3,
                    sm: 6,
                    xl: 3,
                    xs: 12,
                    children: Object(c.jsx)(ja, {}),
                  }),
                  Object(c.jsx)(ze.a, {
                    item: !0,
                    lg: 3,
                    sm: 6,
                    xl: 3,
                    xs: 12,
                    children: Object(c.jsx)(va, {}),
                  }),
                  Object(c.jsx)(ze.a, {
                    item: !0,
                    lg: 8,
                    md: 12,
                    xl: 9,
                    xs: 12,
                    children: Object(c.jsx)(ia, {}),
                  }),
                  Object(c.jsx)(ze.a, {
                    item: !0,
                    lg: 4,
                    md: 6,
                    xl: 3,
                    xs: 12,
                    children: Object(c.jsx)(Da, {}),
                  }),
                  Object(c.jsx)(ze.a, {
                    item: !0,
                    lg: 4,
                    md: 6,
                    xl: 3,
                    xs: 12,
                    children: Object(c.jsx)(ta, {}),
                  }),
                  Object(c.jsx)(ze.a, {
                    item: !0,
                    lg: 8,
                    md: 12,
                    xl: 9,
                    xs: 12,
                    children: Object(c.jsx)(Kt, {}),
                  }),
                ],
              }),
            }),
          });
        },
        Pa = a(51),
        Aa = a(178),
        _a = a(535),
        Ba = function (e) {
          return Object(c.jsx)(
            Tt.a,
            Object(O.a)(
              Object(O.a)({}, e),
              {},
              {
                children: Object(c.jsx)("path", {
                  d:
                    "M9.53144612,22.005 L9.53144612,13.0552149 L6.44166667,13.0552149 L6.44166667,9.49875 L9.53144612,9.49875 L9.53144612,6.68484375 C9.53144612,5.19972656 9.95946769,4.04680661 10.8155103,3.22608401 C11.6715529,2.4053613 12.808485,1.995 14.2263057,1.995 C15.3766134,1.995 16.3129099,2.04710915 17.0351961,2.15132812 L17.0351961,5.3169726 L15.1090998,5.3169726 C14.3868137,5.3169726 13.8919142,5.47330073 13.6244006,5.78595698 C13.4103902,6.04650407 13.3033846,6.46337874 13.3033846,7.03658198 L13.3033846,9.49875 L16.71418,9.49875 L16.2326559,13.0552149 L13.3033846,13.0552149 L13.3033846,22.005 L9.53144612,22.005 Z",
                }),
              }
            )
          );
        },
        Wa = function (e) {
          return Object(c.jsx)(
            Tt.a,
            Object(O.a)(
              Object(O.a)({}, e),
              {},
              {
                children: Object(c.jsx)("path", {
                  d:
                    "M21,12.2177419 C21,13.9112905 20.6311475,15.4233869 19.8934426,16.7540323 C19.1557377,18.0846776 18.1168031,19.1249998 16.7766393,19.875 C15.4364756,20.6250002 13.8934424,21 12.147541,21 C10.4999998,21 8.97540984,20.5947579 7.57377049,19.7842742 C6.17213115,18.9737905 5.05942604,17.8790323 4.23565574,16.5 C3.41188543,15.1209677 3,13.6209679 3,12 C3,10.3790321 3.41188543,8.87903226 4.23565574,7.5 C5.05942604,6.12096774 6.17213115,5.02620949 7.57377049,4.21572581 C8.97540984,3.40524212 10.4999998,3 12.147541,3 C14.5327871,3 16.5737705,3.78629051 18.2704918,5.35887097 L15.7991803,7.71774194 C15.0122953,6.96774175 14.0655738,6.52016129 12.9590164,6.375 C11.9262295,6.22983871 10.9057375,6.375 9.89754098,6.81048387 C8.88934445,7.24596774 8.07786904,7.89919355 7.46311475,8.77016129 C6.79918033,9.71370968 6.46721311,10.7903228 6.46721311,12 C6.46721311,13.0403228 6.72540984,13.9899192 7.24180328,14.8487903 C7.75819672,15.7076615 8.4467215,16.3971776 9.30737705,16.9173387 C10.1680326,17.4374998 11.1147541,17.6975806 12.147541,17.6975806 C13.2540984,17.6975806 14.2254096,17.455645 15.0614754,16.9717742 C15.7254098,16.5846772 16.2786885,16.0645161 16.7213115,15.4112903 C17.0409838,14.8790321 17.2499998,14.3467744 17.3483607,13.8145161 L12.147541,13.8145161 L12.147541,10.6935484 L20.852459,10.6935484 C20.9508199,11.2258066 21,11.7338712 21,12.2177419 Z",
                }),
              }
            )
          );
        },
        Ma = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              height: "100%",
              paddingBottom: e.spacing(3),
              paddingTop: e.spacing(3),
            },
          };
        }),
        Ea = function () {
          var e = Ma(),
            t = Object(o.g)();
          return Object(c.jsx)(Ge, {
            className: e.root,
            title: "Login",
            children: Object(c.jsx)(Y.a, {
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              children: Object(c.jsx)(qe.a, {
                maxWidth: "sm",
                children: Object(c.jsx)(Aa.a, {
                  initialValues: {
                    email: "demo@devias.io",
                    password: "Password123",
                  },
                  validationSchema: Pa.b().shape({
                    email: Pa.c()
                      .email("Must be a valid email")
                      .max(255)
                      .required("Email is required"),
                    password: Pa.c().max(255).required("Password is required"),
                  }),
                  onSubmit: function () {
                    t("/app/dashboard", { replace: !0 });
                  },
                  children: function (e) {
                    var t = e.errors,
                      a = e.handleBlur,
                      n = e.handleChange,
                      r = e.handleSubmit,
                      i = e.isSubmitting,
                      o = e.touched,
                      l = e.values;
                    return Object(c.jsxs)("form", {
                      onSubmit: r,
                      children: [
                        Object(c.jsxs)(Y.a, {
                          mb: 3,
                          children: [
                            Object(c.jsx)(K.a, {
                              color: "textPrimary",
                              variant: "h2",
                              children: "Sign in",
                            }),
                            Object(c.jsx)(K.a, {
                              color: "textSecondary",
                              gutterBottom: !0,
                              variant: "body2",
                              children: "Sign in on the internal platform",
                            }),
                          ],
                        }),
                        Object(c.jsxs)(ze.a, {
                          container: !0,
                          spacing: 3,
                          children: [
                            Object(c.jsx)(ze.a, {
                              item: !0,
                              xs: 12,
                              md: 6,
                              children: Object(c.jsx)(je.a, {
                                color: "primary",
                                fullWidth: !0,
                                startIcon: Object(c.jsx)(Ba, {}),
                                onClick: r,
                                size: "large",
                                variant: "contained",
                                children: "Login with Facebook",
                              }),
                            }),
                            Object(c.jsx)(ze.a, {
                              item: !0,
                              xs: 12,
                              md: 6,
                              children: Object(c.jsx)(je.a, {
                                fullWidth: !0,
                                startIcon: Object(c.jsx)(Wa, {}),
                                onClick: r,
                                size: "large",
                                variant: "contained",
                                children: "Login with Google",
                              }),
                            }),
                          ],
                        }),
                        Object(c.jsx)(Y.a, {
                          mt: 3,
                          mb: 1,
                          children: Object(c.jsx)(K.a, {
                            align: "center",
                            color: "textSecondary",
                            variant: "body1",
                            children: "or login with email address",
                          }),
                        }),
                        Object(c.jsx)(ct.a, {
                          error: Boolean(o.email && t.email),
                          fullWidth: !0,
                          helperText: o.email && t.email,
                          label: "Email Address",
                          margin: "normal",
                          name: "email",
                          onBlur: a,
                          onChange: n,
                          type: "email",
                          value: l.email,
                          variant: "outlined",
                        }),
                        Object(c.jsx)(ct.a, {
                          error: Boolean(o.password && t.password),
                          fullWidth: !0,
                          helperText: o.password && t.password,
                          label: "Password",
                          margin: "normal",
                          name: "password",
                          onBlur: a,
                          onChange: n,
                          type: "password",
                          value: l.password,
                          variant: "outlined",
                        }),
                        Object(c.jsx)(Y.a, {
                          my: 2,
                          children: Object(c.jsx)(je.a, {
                            color: "primary",
                            disabled: i,
                            fullWidth: !0,
                            size: "large",
                            type: "submit",
                            variant: "contained",
                            children: "Sign in now",
                          }),
                        }),
                        Object(c.jsxs)(K.a, {
                          color: "textSecondary",
                          variant: "body1",
                          children: [
                            "Don't have an account?",
                            " ",
                            Object(c.jsx)(_a.a, {
                              component: s.b,
                              to: "/register",
                              variant: "h6",
                              children: "Sign up",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                }),
              }),
            }),
          });
        },
        Ra = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              height: "100%",
              paddingBottom: e.spacing(3),
              paddingTop: e.spacing(3),
            },
            image: {
              marginTop: 50,
              display: "inline-block",
              maxWidth: "100%",
              width: 560,
            },
          };
        }),
        qa = function () {
          var e = Ra();
          return Object(c.jsx)(Ge, {
            className: e.root,
            title: "404",
            children: Object(c.jsx)(Y.a, {
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              children: Object(c.jsxs)(qe.a, {
                maxWidth: "md",
                children: [
                  Object(c.jsx)(K.a, {
                    align: "center",
                    color: "textPrimary",
                    variant: "h1",
                    children:
                      "404: The page you are looking for isn\u2019t here",
                  }),
                  Object(c.jsx)(K.a, {
                    align: "center",
                    color: "textPrimary",
                    variant: "subtitle2",
                    children:
                      "You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation",
                  }),
                  Object(c.jsx)(Y.a, {
                    textAlign: "center",
                    children: Object(c.jsx)("img", {
                      alt: "Under development",
                      className: e.image,
                      src: "/static/images/undraw_page_not_found_su7k.svg",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        za = a(175),
        Ua = a.n(za),
        Ga = function (e) {
          return e.length >= 10 ? e.substr(0, 7) + "..." : e;
        },
        Va = "http://localhost:5000/",
        Fa = "".concat(Va, "api"),
        Ya = function (e) {
          var t = e.image,
            a = e.extraLarge,
            n = Object(oe.a)(e, ["image", "extraLarge"]);
          return Object(c.jsx)(
            "img",
            Object(O.a)(
              {
                src: "".concat(Va).concat(t),
                alt: t,
                style: {
                  width: a ? 200 : 80,
                  height: a ? 200 : 80,
                  objectFit: "cover",
                  borderRadius: 5,
                  margin: 2,
                  boxShadow: "rgba(0, 0, 0, 0.3) 2px 3px 5px 1px",
                },
              },
              n
            )
          );
        },
        Ha = a(372),
        Ka = a.n(Ha),
        $a = function (e) {
          return Ka()(e).format("DD/MM/YYYY");
        },
        Xa = Object(W.a)(function (e) {
          return { root: {}, avatar: { marginRight: e.spacing(2) } };
        }),
        Ja = function (e) {
          var t = e.className,
            a = e.services,
            r = Object(oe.a)(e, ["className", "services"]),
            i = Xa(),
            s = Object(b.b)(),
            o = Object(n.useState)([]),
            l = Object(V.a)(o, 2),
            d = l[0],
            j = l[1],
            h = Object(n.useState)(10),
            x = Object(V.a)(h, 2),
            u = x[0],
            m = x[1],
            p = Object(n.useState)(0),
            g = Object(V.a)(p, 2),
            f = g[0],
            v = g[1],
            y = function (e) {
              s({ type: C, payload: e });
            };
          return Object(c.jsxs)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(i.root, t) }, r),
              {},
              {
                children: [
                  Object(c.jsx)(ht.a, {
                    children: Object(c.jsx)(Y.a, {
                      minWidth: 1050,
                      children: Object(c.jsxs)(xt.a, {
                        children: [
                          Object(c.jsx)(Ot.a, {
                            children: Object(c.jsxs)(ut.a, {
                              children: [
                                Object(c.jsx)(mt.a, {
                                  padding: "checkbox",
                                  children: Object(c.jsx)(pt.a, {
                                    checked: d.length === a.length,
                                    color: "primary",
                                    indeterminate:
                                      d.length > 0 && d.length < a.length,
                                    onChange: function (e) {
                                      var t;
                                      (t = e.target.checked
                                        ? a.map(function (e) {
                                            return e._id;
                                          })
                                        : []),
                                        j(t);
                                    },
                                  }),
                                }),
                                Object(c.jsx)(mt.a, {
                                  children: "Vendor's Company Name",
                                }),
                                Object(c.jsx)(mt.a, { children: "Image" }),
                                Object(c.jsx)(mt.a, { children: "Title" }),
                                Object(c.jsx)(mt.a, {
                                  children: "Description",
                                }),
                                Object(c.jsx)(mt.a, { children: "Price" }),
                                Object(c.jsx)(mt.a, {
                                  children: "Registration date",
                                }),
                                Object(c.jsx)(mt.a, { children: "Actions" }),
                              ],
                            }),
                          }),
                          Object(c.jsx)(gt.a, {
                            children: a.slice(0, u).map(function (e) {
                              return Object(c.jsxs)(
                                ut.a,
                                {
                                  hover: !0,
                                  selected: -1 !== d.indexOf(e._id),
                                  children: [
                                    Object(c.jsx)(mt.a, {
                                      padding: "checkbox",
                                      children: Object(c.jsx)(pt.a, {
                                        checked: -1 !== d.indexOf(e._id),
                                        onChange: function (t) {
                                          return (function (e, t) {
                                            var a = d.indexOf(t),
                                              c = [];
                                            -1 === a
                                              ? (c = c.concat(d, t))
                                              : 0 === a
                                              ? (c = c.concat(d.slice(1)))
                                              : a === d.length - 1
                                              ? (c = c.concat(d.slice(0, -1)))
                                              : a > 0 &&
                                                (c = c.concat(
                                                  d.slice(0, a),
                                                  d.slice(a + 1)
                                                )),
                                              j(c);
                                          })(0, e._id);
                                        },
                                        value: "true",
                                      }),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Object(c.jsx)(Nt, {
                                        name: e.vendorId.companyName,
                                      }),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Object(c.jsx)(Ya, {
                                        image: e.image,
                                      }),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.title),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Ga(yt(e.description)),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.price),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: $a(e.createdAt),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Object(c.jsx)(Ce.a, {
                                        onClick: function () {
                                          return y(e._id);
                                        },
                                        children: Object(c.jsx)(Ua.a, {
                                          color: "primary",
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                e._id
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(c.jsx)(ft.a, {
                    component: "div",
                    count: a.length,
                    onChangePage: function (e, t) {
                      v(t);
                    },
                    onChangeRowsPerPage: function (e) {
                      m(e.target.value);
                    },
                    page: f,
                    rowsPerPage: u,
                    rowsPerPageOptions: [5, 10, 25],
                  }),
                ],
              }
            )
          );
        },
        Za = a(537),
        Qa = a(536),
        ec = a(538),
        tc = a(551),
        ac = a(540),
        cc = a(541),
        nc = a(120),
        rc = a.n(nc),
        ic = a(104),
        sc = a(176),
        oc = a.n(sc),
        lc = function (e) {
          var t = e.onClick,
            a = e.tipClass,
            n = e.btnClass,
            r = e.title,
            i = e.children,
            s = e.placement;
          return Object(c.jsx)(zt.a, {
            title: r,
            placement: s,
            className: a,
            children: Object(c.jsx)(Ce.a, {
              onClick: t,
              className: n,
              children: i,
            }),
          });
        },
        dc = Object(W.a)(function (e) {
          return {
            accordion: { width: "100%" },
            heading: {
              fontSize: e.typography.pxToRem(15),
              fontWeight: e.typography.fontWeightRegular,
            },
            avatar: { backgroundColor: ic.a[100], color: ic.a[600] },
            imageContainer: {
              alignItems: "center",
              textAlign: "center",
              marginTop: 10,
            },
            closeButton: { position: "absolute", right: "10px", top: "5px" },
            textCenter: { textAlign: "center", padding: 5 },
            dataLine: {
              margin: "5px 0",
              display: "flex",
              alignItems: "baseline",
            },
            accordionDetails: {},
          };
        }),
        jc = function () {
          var e = dc(),
            t = Object(b.b)(),
            a = Object(n.useState)({}),
            r = Object(V.a)(a, 2),
            i = r[0],
            s = r[1],
            o = Object(b.c)(function (e) {
              return e.service;
            }),
            l = o.dialogId,
            d = o.isDialogOpen,
            j = o.data;
          Object(n.useEffect)(
            function () {
              if (l) {
                var e = j.findIndex(function (e) {
                  return e._id === l;
                });
                -1 !== e && s(j[e]);
              }
            },
            [l, j]
          );
          var h = function () {
            t({ type: N });
          };
          return Object(c.jsxs)(Qa.a, {
            onClose: h,
            "aria-labelledby": "simple-dialog-title",
            open: d,
            maxWidth: "md",
            children: [
              Object(c.jsxs)(Za.a, {
                id: "simple-dialog-title",
                children: [
                  Object(c.jsx)(lc, {
                    title: "Close",
                    onClick: h,
                    btnClass: e.closeButton,
                    children: Object(c.jsx)(oc.a, {}),
                  }),
                  Object(c.jsx)(K.a, {
                    variant: "h3",
                    children: "Service Details",
                  }),
                ],
              }),
              Object(c.jsx)(ec.a, {
                children:
                  i.title &&
                  Object(c.jsxs)(ze.a, {
                    container: !0,
                    children: [
                      Object(c.jsxs)(ze.a, {
                        item: !0,
                        md: 12,
                        children: [
                          Object(c.jsx)("div", {
                            className: e.imageContainer,
                            children: Object(c.jsx)(Ya, {
                              image: i.image,
                              extraLarge: !0,
                            }),
                          }),
                          Object(c.jsxs)("div", {
                            className: e.dataLine,
                            children: [
                              Object(c.jsx)(K.a, {
                                variant: "h5",
                                children: "Title:\xa0",
                              }),
                              Object(c.jsx)(K.a, {
                                variant: "h6",
                                color: "textSecondary",
                                children: i.title,
                              }),
                            ],
                          }),
                          Object(c.jsxs)("div", {
                            className: e.dataLine,
                            children: [
                              Object(c.jsx)(K.a, {
                                variant: "h5",
                                children: "Description:\xa0",
                              }),
                              Object(c.jsx)(K.a, {
                                variant: "h6",
                                color: "textSecondary",
                                children: i.description,
                              }),
                            ],
                          }),
                          Object(c.jsxs)("div", {
                            className: e.dataLine,
                            children: [
                              Object(c.jsx)(K.a, {
                                variant: "h5",
                                children: "Price:\xa0",
                              }),
                              Object(c.jsx)(K.a, {
                                variant: "h6",
                                color: "textSecondary",
                                children: i.price,
                              }),
                            ],
                          }),
                          Object(c.jsxs)(K.a, {
                            className: e.dataLine,
                            variant: "caption",
                            color: "textSecondary",
                            children: ["Registration Date: ", $a(i.createdAt)],
                          }),
                        ],
                      }),
                      Object(c.jsx)(ze.a, {
                        item: !0,
                        md: 12,
                        children: Object(c.jsx)("div", {
                          className: e.accordion,
                          children: Object(c.jsxs)(tc.a, {
                            disabled: !(null === i || void 0 === i
                              ? void 0
                              : i.vendorId),
                            children: [
                              Object(c.jsx)(ac.a, {
                                expandIcon: Object(c.jsx)(rc.a, {}),
                                "aria-controls": "panel1a-content",
                                id: "panel1a-header",
                                children: Object(c.jsx)(K.a, {
                                  className: e.heading,
                                  children: "Vendor Details",
                                }),
                              }),
                              Object(c.jsx)(cc.a, {
                                className: e.accordionDetails,
                                children: Object(c.jsxs)("div", {
                                  children: [
                                    Object(c.jsx)(Nt, {
                                      name: i.vendorId.companyName,
                                    }),
                                    Object(c.jsxs)("div", {
                                      className: e.dataLine,
                                      children: [
                                        Object(c.jsx)(K.a, {
                                          variant: "h5",
                                          children: "Mobile:\xa0",
                                        }),
                                        Object(c.jsx)(K.a, {
                                          variant: "h6",
                                          color: "textSecondary",
                                          children: yt(i.vendorId.mobile),
                                        }),
                                      ],
                                    }),
                                    Object(c.jsxs)("div", {
                                      className: e.dataLine,
                                      children: [
                                        Object(c.jsx)(K.a, {
                                          variant: "h5",
                                          children: "Address:\xa0",
                                        }),
                                        Object(c.jsx)(K.a, {
                                          variant: "h6",
                                          color: "textSecondary",
                                          children: yt(i.vendorId.address),
                                        }),
                                      ],
                                    }),
                                    Object(c.jsxs)("div", {
                                      className: e.dataLine,
                                      children: [
                                        Object(c.jsx)(K.a, {
                                          variant: "h5",
                                          children: "City:\xa0",
                                        }),
                                        Object(c.jsx)(K.a, {
                                          variant: "h6",
                                          color: "textSecondary",
                                          children: yt(i.vendorId.city),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
              }),
            ],
          });
        },
        bc = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              minHeight: "100%",
              paddingBottom: e.spacing(3),
              paddingTop: e.spacing(3),
            },
          };
        }),
        hc = function () {
          var e = bc(),
            t = Object(b.b)(),
            a = Object(b.c)(function (e) {
              return e.service.data;
            });
          Object(n.useEffect)(function () {
            r();
          }, []);
          var r = (function () {
            var e = Object(jt.a)(
              dt.a.mark(function e() {
                var a, c;
                return dt.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), j.a.get("/service")
                          );
                        case 3:
                          (a = e.sent),
                            (c = a.data),
                            t(((n = c.data.services), { type: y, payload: n })),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                    var n;
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return Object(c.jsxs)(Ge, {
            className: e.root,
            title: "Services",
            children: [
              Object(c.jsxs)(qe.a, {
                maxWidth: !1,
                children: [
                  Object(c.jsx)(It, { title: "Service", hideAddButton: !0 }),
                  Object(c.jsx)(Y.a, {
                    mt: 3,
                    children: Object(c.jsx)(Ja, { services: a }),
                  }),
                ],
              }),
              Object(c.jsx)(jc, {}),
            ],
          });
        },
        xc = Object(W.a)(function (e) {
          return { root: {}, avatar: { marginRight: e.spacing(2) } };
        }),
        Oc = function (e) {
          var t = e.className,
            a = e.bookings,
            r = Object(oe.a)(e, ["className", "bookings"]),
            i = xc(),
            s = Object(b.b)(),
            o = Object(n.useState)([]),
            l = Object(V.a)(o, 2),
            d = l[0],
            j = l[1],
            h = Object(n.useState)(10),
            x = Object(V.a)(h, 2),
            u = x[0],
            m = x[1],
            p = Object(n.useState)(0),
            g = Object(V.a)(p, 2),
            f = g[0],
            v = g[1],
            y = function (e) {
              s({ type: T, payload: e });
            };
          return Object(c.jsxs)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(i.root, t) }, r),
              {},
              {
                children: [
                  Object(c.jsx)(ht.a, {
                    children: Object(c.jsx)(Y.a, {
                      minWidth: 1050,
                      children: Object(c.jsxs)(xt.a, {
                        children: [
                          Object(c.jsx)(Ot.a, {
                            children: Object(c.jsxs)(ut.a, {
                              children: [
                                Object(c.jsx)(mt.a, {
                                  padding: "checkbox",
                                  children: Object(c.jsx)(pt.a, {
                                    checked: d.length === a.length,
                                    color: "primary",
                                    indeterminate:
                                      d.length > 0 && d.length < a.length,
                                    onChange: function (e) {
                                      var t;
                                      (t = e.target.checked
                                        ? a.map(function (e) {
                                            return e._id;
                                          })
                                        : []),
                                        j(t);
                                    },
                                  }),
                                }),
                                Object(c.jsx)(mt.a, {
                                  children: "Vendor's Company Name",
                                }),
                                Object(c.jsx)(mt.a, {
                                  children: "Service Name",
                                }),
                                Object(c.jsx)(mt.a, { children: "User Name" }),
                                Object(c.jsx)(mt.a, {
                                  children: "Description",
                                }),
                                Object(c.jsx)(mt.a, { children: "Material" }),
                                Object(c.jsx)(mt.a, { children: "Frequency" }),
                                Object(c.jsx)(mt.a, { children: "Hours" }),
                                Object(c.jsx)(mt.a, { children: "Profession" }),
                                Object(c.jsx)(mt.a, { children: "Days" }),
                                Object(c.jsx)(mt.a, {
                                  children: "Time Duration",
                                }),
                                Object(c.jsx)(mt.a, { children: "Actions" }),
                              ],
                            }),
                          }),
                          Object(c.jsx)(gt.a, {
                            children: a.slice(0, u).map(function (e) {
                              return Object(c.jsxs)(
                                ut.a,
                                {
                                  hover: !0,
                                  selected: -1 !== d.indexOf(e._id),
                                  children: [
                                    Object(c.jsx)(mt.a, {
                                      padding: "checkbox",
                                      children: Object(c.jsx)(pt.a, {
                                        checked: -1 !== d.indexOf(e._id),
                                        onChange: function (t) {
                                          return (function (e, t) {
                                            var a = d.indexOf(t),
                                              c = [];
                                            -1 === a
                                              ? (c = c.concat(d, t))
                                              : 0 === a
                                              ? (c = c.concat(d.slice(1)))
                                              : a === d.length - 1
                                              ? (c = c.concat(d.slice(0, -1)))
                                              : a > 0 &&
                                                (c = c.concat(
                                                  d.slice(0, a),
                                                  d.slice(a + 1)
                                                )),
                                              j(c);
                                          })(0, e._id);
                                        },
                                        value: "true",
                                      }),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: e.vendorId.companyName,
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: e.serviceId.title,
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.userId.name),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Ga(yt(e.description)),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: e.isMaterialRequired
                                        ? "on"
                                        : "off",
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.frequency),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.howManyHours),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.howManyProfessions),
                                    }),
                                    Object(c.jsx)(mt.a, { children: e.date }),
                                    Object(c.jsx)(mt.a, { children: e.time }),
                                    Object(c.jsx)(mt.a, {
                                      children: Object(c.jsx)(Ce.a, {
                                        onClick: function () {
                                          return y(e._id);
                                        },
                                        children: Object(c.jsx)(Ua.a, {
                                          color: "primary",
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                e._id
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(c.jsx)(ft.a, {
                    component: "div",
                    count: a.length,
                    onChangePage: function (e, t) {
                      v(t);
                    },
                    onChangeRowsPerPage: function (e) {
                      m(e.target.value);
                    },
                    page: f,
                    rowsPerPage: u,
                    rowsPerPageOptions: [5, 10, 25],
                  }),
                ],
              }
            )
          );
        },
        uc = Object(W.a)(function (e) {
          return {
            accordion: { width: "100%" },
            heading: {
              fontSize: e.typography.pxToRem(15),
              fontWeight: e.typography.fontWeightRegular,
            },
            avatar: { backgroundColor: ic.a[100], color: ic.a[600] },
            imageContainer: {
              alignItems: "center",
              textAlign: "center",
              marginTop: 10,
            },
            closeButton: { position: "absolute", right: "10px", top: "5px" },
            textCenter: { textAlign: "center", padding: 5 },
            dataLine: {
              margin: "5px 0",
              display: "flex",
              alignItems: "baseline",
            },
            accordionDetails: {},
          };
        }),
        mc = function () {
          var e = uc(),
            t = Object(b.b)(),
            a = Object(n.useState)({}),
            r = Object(V.a)(a, 2),
            i = r[0],
            s = r[1],
            o = Object(b.c)(function (e) {
              return e.booking;
            }),
            l = o.dialogId,
            d = o.isDialogOpen,
            j = o.data;
          Object(n.useEffect)(
            function () {
              if (l) {
                var e = j.findIndex(function (e) {
                  return e._id === l;
                });
                -1 !== e && s(j[e]);
              }
            },
            [l, j]
          );
          var h = function () {
            t({ type: D });
          };
          return Object(c.jsxs)(Qa.a, {
            onClose: h,
            "aria-labelledby": "simple-dialog-title",
            open: d,
            maxWidth: "md",
            children: [
              Object(c.jsxs)(Za.a, {
                id: "simple-dialog-title",
                children: [
                  Object(c.jsx)(lc, {
                    title: "Close",
                    onClick: h,
                    btnClass: e.closeButton,
                    children: Object(c.jsx)(oc.a, {}),
                  }),
                  Object(c.jsx)(K.a, {
                    variant: "h3",
                    children: "Booking Details",
                  }),
                ],
              }),
              Object(c.jsx)(ec.a, {
                children:
                  i.vendorId &&
                  Object(c.jsxs)(ze.a, {
                    container: !0,
                    children: [
                      Object(c.jsxs)(ze.a, {
                        item: !0,
                        md: 12,
                        children: [
                          Object(c.jsxs)("div", {
                            className: e.dataLine,
                            children: [
                              Object(c.jsx)(K.a, {
                                variant: "h5",
                                children: "Instruction:\xa0",
                              }),
                              Object(c.jsx)(K.a, {
                                variant: "h6",
                                color: "textSecondary",
                                children: i.description,
                              }),
                            ],
                          }),
                          Object(c.jsxs)("div", {
                            className: e.dataLine,
                            children: [
                              Object(c.jsx)(K.a, {
                                variant: "h5",
                                children: "Frequency:\xa0",
                              }),
                              Object(c.jsx)(K.a, {
                                variant: "h6",
                                color: "textSecondary",
                                children: i.frequency,
                              }),
                            ],
                          }),
                          Object(c.jsxs)("div", {
                            className: e.dataLine,
                            children: [
                              Object(c.jsx)(K.a, {
                                variant: "h5",
                                children: "Hours:\xa0",
                              }),
                              Object(c.jsx)(K.a, {
                                variant: "h6",
                                color: "textSecondary",
                                children: i.howManyHours,
                              }),
                            ],
                          }),
                          Object(c.jsxs)("div", {
                            className: e.dataLine,
                            children: [
                              Object(c.jsx)(K.a, {
                                variant: "h5",
                                children: "Professions:\xa0",
                              }),
                              Object(c.jsx)(K.a, {
                                variant: "h6",
                                color: "textSecondary",
                                children: i.howManyProfessions,
                              }),
                            ],
                          }),
                          Object(c.jsxs)("div", {
                            className: e.dataLine,
                            children: [
                              Object(c.jsx)(K.a, {
                                variant: "h5",
                                children: "Date & Time:\xa0",
                              }),
                              Object(c.jsxs)(K.a, {
                                variant: "h6",
                                color: "textSecondary",
                                children: [i.date, ",\xa0", i.time],
                              }),
                            ],
                          }),
                          Object(c.jsxs)(K.a, {
                            className: [
                              e.dataLine,
                              { marginLeft: "auto" },
                            ].join(" "),
                            variant: "caption",
                            color: "textSecondary",
                            children: ["Registration Date: ", $a(i.createdAt)],
                          }),
                        ],
                      }),
                      Object(c.jsx)(ze.a, {
                        item: !0,
                        md: 12,
                        children: Object(c.jsxs)("div", {
                          className: e.accordion,
                          children: [
                            Object(c.jsxs)(tc.a, {
                              disabled: !(null === i || void 0 === i
                                ? void 0
                                : i.userId),
                              children: [
                                Object(c.jsx)(ac.a, {
                                  expandIcon: Object(c.jsx)(rc.a, {}),
                                  children: Object(c.jsx)(K.a, {
                                    className: e.heading,
                                    children: "User Details",
                                  }),
                                }),
                                Object(c.jsx)(cc.a, {
                                  children: Object(c.jsxs)("div", {
                                    children: [
                                      Object(c.jsxs)("div", {
                                        className: e.dataLine,
                                        children: [
                                          Object(c.jsx)(K.a, {
                                            variant: "h5",
                                            children: "Name:\xa0",
                                          }),
                                          Object(c.jsx)(K.a, {
                                            variant: "h6",
                                            color: "textSecondary",
                                            children: i.userId.name,
                                          }),
                                        ],
                                      }),
                                      Object(c.jsxs)("div", {
                                        className: e.dataLine,
                                        children: [
                                          Object(c.jsx)(K.a, {
                                            variant: "h5",
                                            children: "Email:\xa0",
                                          }),
                                          Object(c.jsx)(K.a, {
                                            variant: "h6",
                                            color: "textSecondary",
                                            children: i.userId.email,
                                          }),
                                        ],
                                      }),
                                      Object(c.jsxs)("div", {
                                        className: e.dataLine,
                                        children: [
                                          Object(c.jsx)(K.a, {
                                            variant: "h5",
                                            children: "Location:\xa0",
                                          }),
                                          Object(c.jsx)(K.a, {
                                            variant: "h6",
                                            color: "textSecondary",
                                            children: yt(i.userId.location),
                                          }),
                                        ],
                                      }),
                                      Object(c.jsxs)("div", {
                                        className: e.dataLine,
                                        children: [
                                          Object(c.jsx)(K.a, {
                                            variant: "h5",
                                            children: "Gender:\xa0",
                                          }),
                                          Object(c.jsx)(K.a, {
                                            variant: "h6",
                                            color: "textSecondary",
                                            children: yt(i.userId.gender),
                                          }),
                                        ],
                                      }),
                                      Object(c.jsxs)(K.a, {
                                        className: e.dataLine,
                                        variant: "caption",
                                        color: "textSecondary",
                                        children: [
                                          "Joined Date:\xa0",
                                          $a(i.serviceId.createdAt),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            Object(c.jsxs)(tc.a, {
                              disabled: !(null === i || void 0 === i
                                ? void 0
                                : i.serviceId),
                              children: [
                                Object(c.jsx)(ac.a, {
                                  expandIcon: Object(c.jsx)(rc.a, {}),
                                  children: Object(c.jsx)(K.a, {
                                    className: e.heading,
                                    children: "Service Details",
                                  }),
                                }),
                                Object(c.jsx)(cc.a, {
                                  children: Object(c.jsxs)("div", {
                                    style: { margin: "auto" },
                                    children: [
                                      Object(c.jsx)("div", {
                                        className: e.imageContainer,
                                        children: Object(c.jsx)(Ya, {
                                          image: i.serviceId.image,
                                          extraLarge: !0,
                                        }),
                                      }),
                                      Object(c.jsxs)("div", {
                                        className: e.dataLine,
                                        children: [
                                          Object(c.jsx)(K.a, {
                                            variant: "h5",
                                            children: "Title:\xa0",
                                          }),
                                          Object(c.jsx)(K.a, {
                                            variant: "h6",
                                            color: "textSecondary",
                                            children: i.serviceId.title,
                                          }),
                                        ],
                                      }),
                                      Object(c.jsxs)("div", {
                                        className: e.dataLine,
                                        children: [
                                          Object(c.jsx)(K.a, {
                                            variant: "h5",
                                            children: "Description:\xa0",
                                          }),
                                          Object(c.jsx)(K.a, {
                                            variant: "h6",
                                            color: "textSecondary",
                                            children: i.serviceId.description,
                                          }),
                                        ],
                                      }),
                                      Object(c.jsxs)("div", {
                                        className: e.dataLine,
                                        children: [
                                          Object(c.jsx)(K.a, {
                                            variant: "h5",
                                            children: "Price:\xa0",
                                          }),
                                          Object(c.jsx)(K.a, {
                                            variant: "h6",
                                            color: "textSecondary",
                                            children: i.serviceId.price,
                                          }),
                                        ],
                                      }),
                                      Object(c.jsxs)(K.a, {
                                        className: e.dataLine,
                                        variant: "caption",
                                        color: "textSecondary",
                                        children: [
                                          "Created At:\xa0",
                                          $a(i.serviceId.createdAt),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            Object(c.jsxs)(tc.a, {
                              disabled: !(null === i || void 0 === i
                                ? void 0
                                : i.vendorId),
                              children: [
                                Object(c.jsx)(ac.a, {
                                  expandIcon: Object(c.jsx)(rc.a, {}),
                                  "aria-controls": "panel1a-content",
                                  id: "panel1a-header",
                                  children: Object(c.jsx)(K.a, {
                                    className: e.heading,
                                    children: "Vendor Details",
                                  }),
                                }),
                                Object(c.jsx)(cc.a, {
                                  children: Object(c.jsxs)("div", {
                                    children: [
                                      Object(c.jsx)(Nt, {
                                        name: i.vendorId.companyName,
                                      }),
                                      Object(c.jsxs)("div", {
                                        className: e.dataLine,
                                        children: [
                                          Object(c.jsx)(K.a, {
                                            variant: "h5",
                                            children: "Mobile:\xa0",
                                          }),
                                          Object(c.jsx)(K.a, {
                                            variant: "h6",
                                            color: "textSecondary",
                                            children: yt(i.vendorId.mobile),
                                          }),
                                        ],
                                      }),
                                      Object(c.jsxs)("div", {
                                        className: e.dataLine,
                                        children: [
                                          Object(c.jsx)(K.a, {
                                            variant: "h5",
                                            children: "Address:\xa0",
                                          }),
                                          Object(c.jsx)(K.a, {
                                            variant: "h6",
                                            color: "textSecondary",
                                            children: yt(i.vendorId.address),
                                          }),
                                        ],
                                      }),
                                      Object(c.jsxs)("div", {
                                        className: e.dataLine,
                                        children: [
                                          Object(c.jsx)(K.a, {
                                            variant: "h5",
                                            children: "City:\xa0",
                                          }),
                                          Object(c.jsx)(K.a, {
                                            variant: "h6",
                                            color: "textSecondary",
                                            children: yt(i.vendorId.city),
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
                      }),
                    ],
                  }),
              }),
            ],
          });
        },
        pc = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              minHeight: "100%",
              paddingBottom: e.spacing(3),
              paddingTop: e.spacing(3),
            },
          };
        }),
        gc = function () {
          var e = pc(),
            t = Object(b.b)(),
            a = Object(b.c)(function (e) {
              return e.booking.data;
            });
          Object(n.useEffect)(function () {
            r();
          }, []);
          var r = (function () {
            var e = Object(jt.a)(
              dt.a.mark(function e() {
                var a, c;
                return dt.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), j.a.get("/booking")
                          );
                        case 3:
                          (a = e.sent),
                            (c = a.data),
                            console.log(c),
                            t(((n = c.data.bookings), { type: k, payload: n })),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                    var n;
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return Object(c.jsxs)(Ge, {
            className: e.root,
            title: "Bookings",
            children: [
              Object(c.jsxs)(qe.a, {
                maxWidth: !1,
                children: [
                  Object(c.jsx)(It, { title: "Booking", hideAddButton: !0 }),
                  Object(c.jsx)(Y.a, {
                    mt: 3,
                    children: Object(c.jsx)(Oc, { bookings: a }),
                  }),
                ],
              }),
              Object(c.jsx)(mc, {}),
            ],
          });
        },
        fc = a(355),
        vc = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              height: "100%",
              paddingBottom: e.spacing(3),
              paddingTop: e.spacing(3),
            },
          };
        }),
        yc = function () {
          var e = vc(),
            t = Object(o.g)();
          return Object(c.jsx)(Ge, {
            className: e.root,
            title: "Register",
            children: Object(c.jsx)(Y.a, {
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              children: Object(c.jsx)(qe.a, {
                maxWidth: "sm",
                children: Object(c.jsx)(Aa.a, {
                  initialValues: {
                    email: "",
                    firstName: "",
                    lastName: "",
                    password: "",
                    policy: !1,
                  },
                  validationSchema: Pa.b().shape({
                    email: Pa.c()
                      .email("Must be a valid email")
                      .max(255)
                      .required("Email is required"),
                    firstName: Pa.c()
                      .max(255)
                      .required("First name is required"),
                    lastName: Pa.c().max(255).required("Last name is required"),
                    password: Pa.c().max(255).required("password is required"),
                    policy: Pa.a().oneOf([!0], "This field must be checked"),
                  }),
                  onSubmit: function () {
                    t("/app/dashboard", { replace: !0 });
                  },
                  children: function (e) {
                    var t = e.errors,
                      a = e.handleBlur,
                      n = e.handleChange,
                      r = e.handleSubmit,
                      i = e.isSubmitting,
                      o = e.touched,
                      l = e.values;
                    return Object(c.jsxs)("form", {
                      onSubmit: r,
                      children: [
                        Object(c.jsxs)(Y.a, {
                          mb: 3,
                          children: [
                            Object(c.jsx)(K.a, {
                              color: "textPrimary",
                              variant: "h2",
                              children: "Create new account",
                            }),
                            Object(c.jsx)(K.a, {
                              color: "textSecondary",
                              gutterBottom: !0,
                              variant: "body2",
                              children: "Use your email to create new account",
                            }),
                          ],
                        }),
                        Object(c.jsx)(ct.a, {
                          error: Boolean(o.firstName && t.firstName),
                          fullWidth: !0,
                          helperText: o.firstName && t.firstName,
                          label: "First name",
                          margin: "normal",
                          name: "firstName",
                          onBlur: a,
                          onChange: n,
                          value: l.firstName,
                          variant: "outlined",
                        }),
                        Object(c.jsx)(ct.a, {
                          error: Boolean(o.lastName && t.lastName),
                          fullWidth: !0,
                          helperText: o.lastName && t.lastName,
                          label: "Last name",
                          margin: "normal",
                          name: "lastName",
                          onBlur: a,
                          onChange: n,
                          value: l.lastName,
                          variant: "outlined",
                        }),
                        Object(c.jsx)(ct.a, {
                          error: Boolean(o.email && t.email),
                          fullWidth: !0,
                          helperText: o.email && t.email,
                          label: "Email Address",
                          margin: "normal",
                          name: "email",
                          onBlur: a,
                          onChange: n,
                          type: "email",
                          value: l.email,
                          variant: "outlined",
                        }),
                        Object(c.jsx)(ct.a, {
                          error: Boolean(o.password && t.password),
                          fullWidth: !0,
                          helperText: o.password && t.password,
                          label: "Password",
                          margin: "normal",
                          name: "password",
                          onBlur: a,
                          onChange: n,
                          type: "password",
                          value: l.password,
                          variant: "outlined",
                        }),
                        Object(c.jsxs)(Y.a, {
                          alignItems: "center",
                          display: "flex",
                          ml: -1,
                          children: [
                            Object(c.jsx)(pt.a, {
                              checked: l.policy,
                              name: "policy",
                              onChange: n,
                            }),
                            Object(c.jsxs)(K.a, {
                              color: "textSecondary",
                              variant: "body1",
                              children: [
                                "I have read the",
                                " ",
                                Object(c.jsx)(_a.a, {
                                  color: "primary",
                                  component: s.b,
                                  to: "#",
                                  underline: "always",
                                  variant: "h6",
                                  children: "Terms and Conditions",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Boolean(o.policy && t.policy) &&
                          Object(c.jsx)(fc.a, {
                            error: !0,
                            children: t.policy,
                          }),
                        Object(c.jsx)(Y.a, {
                          my: 2,
                          children: Object(c.jsx)(je.a, {
                            color: "primary",
                            disabled: i,
                            fullWidth: !0,
                            size: "large",
                            type: "submit",
                            variant: "contained",
                            children: "Sign up now",
                          }),
                        }),
                        Object(c.jsxs)(K.a, {
                          color: "textSecondary",
                          variant: "body1",
                          children: [
                            "Have an account?",
                            " ",
                            Object(c.jsx)(_a.a, {
                              component: s.b,
                              to: "/login",
                              variant: "h6",
                              children: "Sign in",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                }),
              }),
            }),
          });
        },
        Cc = a(542),
        Nc = Object(W.a)({
          root: {},
          item: { display: "flex", flexDirection: "column" },
        }),
        wc = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            n = Nc();
          return Object(c.jsx)(
            "form",
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(n.root, t) }, a),
              {},
              {
                children: Object(c.jsxs)(Ye.a, {
                  children: [
                    Object(c.jsx)(at.a, {
                      subheader: "Manage the notifications",
                      title: "Notifications",
                    }),
                    Object(c.jsx)($.a, {}),
                    Object(c.jsx)(He.a, {
                      children: Object(c.jsxs)(ze.a, {
                        container: !0,
                        spacing: 6,
                        wrap: "wrap",
                        children: [
                          Object(c.jsxs)(ze.a, {
                            className: n.item,
                            item: !0,
                            md: 4,
                            sm: 6,
                            xs: 12,
                            children: [
                              Object(c.jsx)(K.a, {
                                color: "textPrimary",
                                gutterBottom: !0,
                                variant: "h6",
                                children: "Notifications",
                              }),
                              Object(c.jsx)(Cc.a, {
                                control: Object(c.jsx)(pt.a, {
                                  defaultChecked: !0,
                                }),
                                label: "Email",
                              }),
                              Object(c.jsx)(Cc.a, {
                                control: Object(c.jsx)(pt.a, {
                                  defaultChecked: !0,
                                }),
                                label: "Push Notifications",
                              }),
                              Object(c.jsx)(Cc.a, {
                                control: Object(c.jsx)(pt.a, {}),
                                label: "Text message",
                              }),
                              Object(c.jsx)(Cc.a, {
                                control: Object(c.jsx)(pt.a, {
                                  defaultChecked: !0,
                                }),
                                label: "Phone calls",
                              }),
                            ],
                          }),
                          Object(c.jsxs)(ze.a, {
                            className: n.item,
                            item: !0,
                            md: 4,
                            sm: 6,
                            xs: 12,
                            children: [
                              Object(c.jsx)(K.a, {
                                color: "textPrimary",
                                gutterBottom: !0,
                                variant: "h6",
                                children: "message",
                              }),
                              Object(c.jsx)(Cc.a, {
                                control: Object(c.jsx)(pt.a, {
                                  defaultChecked: !0,
                                }),
                                label: "Email",
                              }),
                              Object(c.jsx)(Cc.a, {
                                control: Object(c.jsx)(pt.a, {}),
                                label: "Push Notifications",
                              }),
                              Object(c.jsx)(Cc.a, {
                                control: Object(c.jsx)(pt.a, {
                                  defaultChecked: !0,
                                }),
                                label: "Phone calls",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(c.jsx)($.a, {}),
                    Object(c.jsx)(Y.a, {
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 2,
                      children: Object(c.jsx)(je.a, {
                        color: "primary",
                        variant: "contained",
                        children: "Save",
                      }),
                    }),
                  ],
                }),
              }
            )
          );
        },
        Sc = Object(W.a)({ root: {} }),
        kc = function (e) {
          var t = e.className,
            a = Object(oe.a)(e, ["className"]),
            r = Sc(),
            i = Object(n.useState)({ password: "", confirm: "" }),
            s = Object(V.a)(i, 2),
            o = s[0],
            l = s[1],
            d = function (e) {
              l(
                Object(O.a)(
                  Object(O.a)({}, o),
                  {},
                  Object(F.a)({}, e.target.name, e.target.value)
                )
              );
            };
          return Object(c.jsx)(
            "form",
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(r.root, t) }, a),
              {},
              {
                children: Object(c.jsxs)(Ye.a, {
                  children: [
                    Object(c.jsx)(at.a, {
                      subheader: "Update password",
                      title: "Password",
                    }),
                    Object(c.jsx)($.a, {}),
                    Object(c.jsxs)(He.a, {
                      children: [
                        Object(c.jsx)(ct.a, {
                          fullWidth: !0,
                          label: "Password",
                          margin: "normal",
                          name: "password",
                          onChange: d,
                          type: "password",
                          value: o.password,
                          variant: "outlined",
                        }),
                        Object(c.jsx)(ct.a, {
                          fullWidth: !0,
                          label: "Confirm password",
                          margin: "normal",
                          name: "confirm",
                          onChange: d,
                          type: "password",
                          value: o.confirm,
                          variant: "outlined",
                        }),
                      ],
                    }),
                    Object(c.jsx)($.a, {}),
                    Object(c.jsx)(Y.a, {
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 2,
                      children: Object(c.jsx)(je.a, {
                        color: "primary",
                        variant: "contained",
                        children: "Update",
                      }),
                    }),
                  ],
                }),
              }
            )
          );
        },
        Tc = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              minHeight: "100%",
              paddingBottom: e.spacing(3),
              paddingTop: e.spacing(3),
            },
          };
        }),
        Dc = function () {
          var e = Tc();
          return Object(c.jsx)(Ge, {
            className: e.root,
            title: "Settings",
            children: Object(c.jsxs)(qe.a, {
              maxWidth: "lg",
              children: [
                Object(c.jsx)(wc, {}),
                Object(c.jsx)(Y.a, { mt: 3, children: Object(c.jsx)(kc, {}) }),
              ],
            }),
          });
        },
        Lc = Object(W.a)(function (e) {
          return { root: {}, avatar: { marginRight: e.spacing(2) } };
        }),
        Ic = function (e) {
          var t = e.className,
            a = e.vendors,
            r = Object(oe.a)(e, ["className", "vendors"]),
            i = Lc(),
            s = Object(n.useState)([]),
            o = Object(V.a)(s, 2),
            l = o[0],
            d = o[1],
            j = Object(n.useState)(10),
            b = Object(V.a)(j, 2),
            h = b[0],
            x = b[1],
            u = Object(n.useState)(0),
            m = Object(V.a)(u, 2),
            p = m[0],
            g = m[1];
          return Object(c.jsxs)(
            Ye.a,
            Object(O.a)(
              Object(O.a)({ className: Object(le.a)(i.root, t) }, r),
              {},
              {
                children: [
                  Object(c.jsx)(ht.a, {
                    children: Object(c.jsx)(Y.a, {
                      minWidth: 1050,
                      children: Object(c.jsxs)(xt.a, {
                        children: [
                          Object(c.jsx)(Ot.a, {
                            children: Object(c.jsxs)(ut.a, {
                              children: [
                                Object(c.jsx)(mt.a, {
                                  padding: "checkbox",
                                  children: Object(c.jsx)(pt.a, {
                                    checked: l.length === a.length,
                                    color: "primary",
                                    indeterminate:
                                      l.length > 0 && l.length < a.length,
                                    onChange: function (e) {
                                      var t;
                                      (t = e.target.checked
                                        ? a.map(function (e) {
                                            return e._id;
                                          })
                                        : []),
                                        d(t);
                                    },
                                  }),
                                }),
                                Object(c.jsx)(mt.a, {
                                  children: "Company Name",
                                }),
                                Object(c.jsx)(mt.a, { children: "Phone" }),
                                Object(c.jsx)(mt.a, { children: "Address" }),
                                Object(c.jsx)(mt.a, { children: "Staff" }),
                                Object(c.jsx)(mt.a, {
                                  children: "Registration date",
                                }),
                              ],
                            }),
                          }),
                          Object(c.jsx)(gt.a, {
                            children: a.slice(0, h).map(function (e) {
                              return Object(c.jsxs)(
                                ut.a,
                                {
                                  hover: !0,
                                  selected: -1 !== l.indexOf(e._id),
                                  children: [
                                    Object(c.jsx)(mt.a, {
                                      padding: "checkbox",
                                      children: Object(c.jsx)(pt.a, {
                                        checked: -1 !== l.indexOf(e._id),
                                        onChange: function (t) {
                                          return (function (e, t) {
                                            var a = l.indexOf(t),
                                              c = [];
                                            -1 === a
                                              ? (c = c.concat(l, t))
                                              : 0 === a
                                              ? (c = c.concat(l.slice(1)))
                                              : a === l.length - 1
                                              ? (c = c.concat(l.slice(0, -1)))
                                              : a > 0 &&
                                                (c = c.concat(
                                                  l.slice(0, a),
                                                  l.slice(a + 1)
                                                )),
                                              d(c);
                                          })(0, e._id);
                                        },
                                        value: "true",
                                      }),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Object(c.jsx)(Nt, {
                                        name: e.companyName,
                                      }),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.mobile),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.address),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: yt(e.city),
                                    }),
                                    Object(c.jsx)(mt.a, {
                                      children: Fe()(e.createdAt).format(
                                        "DD/MM/YYYY"
                                      ),
                                    }),
                                  ],
                                },
                                e._id
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(c.jsx)(ft.a, {
                    component: "div",
                    count: a.length,
                    onChangePage: function (e, t) {
                      g(t);
                    },
                    onChangeRowsPerPage: function (e) {
                      x(e.target.value);
                    },
                    page: p,
                    rowsPerPage: h,
                    rowsPerPageOptions: [5, 10, 25],
                  }),
                ],
              }
            )
          );
        },
        Pc = Object(W.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.background.dark,
              minHeight: "100%",
              paddingBottom: e.spacing(3),
              paddingTop: e.spacing(3),
            },
          };
        }),
        Ac = function () {
          var e = Pc(),
            t = Object(b.b)(),
            a = Object(b.c)(function (e) {
              return e.vendor.data;
            });
          Object(n.useEffect)(function () {
            r();
          }, []);
          var r = (function () {
            var e = Object(jt.a)(
              dt.a.mark(function e() {
                var a, c;
                return dt.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), j.a.get("/vendor");
                        case 3:
                          (a = e.sent),
                            (c = a.data),
                            t(((n = c.data.vendors), { type: g, payload: n })),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                    var n;
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return Object(c.jsx)(Ge, {
            className: e.root,
            title: "Vendors",
            children: Object(c.jsxs)(qe.a, {
              maxWidth: !1,
              children: [
                Object(c.jsx)(It, { title: "Vendor", hideAddButton: !0 }),
                Object(c.jsx)(Y.a, {
                  mt: 3,
                  children: Object(c.jsx)(Ic, { vendors: a }),
                }),
              ],
            }),
          });
        },
        _c = [
          {
            path: "app",
            element: Object(c.jsx)(Be, {}),
            children: [
              { path: "account", element: Object(c.jsx)(ot, {}) },
              { path: "customers", element: Object(c.jsx)(At, {}) },
              { path: "vendors", element: Object(c.jsx)(Ac, {}) },
              { path: "dashboard", element: Object(c.jsx)(Ia, {}) },
              { path: "services", element: Object(c.jsx)(hc, {}) },
              { path: "bookings", element: Object(c.jsx)(gc, {}) },
              { path: "settings", element: Object(c.jsx)(Dc, {}) },
              { path: "*", element: Object(c.jsx)(o.a, { to: "/404" }) },
            ],
          },
          {
            path: "/",
            element: Object(c.jsx)(Re, {}),
            children: [
              { path: "login", element: Object(c.jsx)(Ea, {}) },
              { path: "register", element: Object(c.jsx)(yc, {}) },
              { path: "404", element: Object(c.jsx)(qa, {}) },
              {
                path: "/",
                element: Object(c.jsx)(o.a, { to: "/app/dashboard" }),
              },
              { path: "*", element: Object(c.jsx)(o.a, { to: "/404" }) },
            ],
          },
        ];
      j.a.defaults.baseURL = Fa;
      var Bc = function () {
        var e = Object(o.i)(_c);
        return Object(c.jsx)(b.a, {
          store: B,
          children: Object(c.jsxs)(l.a, {
            theme: G,
            children: [Object(c.jsx)(R, {}), e],
          }),
        });
      };
      i.a.render(
        Object(c.jsx)(s.a, { children: Object(c.jsx)(Bc, {}) }),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[543, 1, 2]],
]);
//# sourceMappingURL=main.b1c7c003.chunk.js.map
