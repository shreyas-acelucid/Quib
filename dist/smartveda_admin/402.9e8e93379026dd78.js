"use strict";
(self.webpackChunkAdmin_Panel = self.webpackChunkAdmin_Panel || []).push([
  [402],
  {
    3402: (te, D, m) => {
      m.r(D), m.d(D, { SettingModule: () => Vt });
      var b = m(9808),
        j = m(4521),
        w = m(5861),
        T = m(8441),
        e = m(5e3),
        Z = m(9996),
        O = m(7650),
        I = m(9783),
        z = m(7398),
        u = m(3075),
        J = m(5315);
      function A(r, s, t, i) {
        return new (t || (t = Promise))(function (n, a) {
          function c(p) {
            try {
              l(i.next(p));
            } catch (g) {
              a(g);
            }
          }
          function h(p) {
            try {
              l(i.throw(p));
            } catch (g) {
              a(g);
            }
          }
          function l(p) {
            p.done
              ? n(p.value)
              : (function o(n) {
                  return n instanceof t
                    ? n
                    : new t(function (a) {
                        a(n);
                      });
                })(p.value).then(c, h);
          }
          l((i = i.apply(r, s || [])).next());
        });
      }
      var V = m(2313),
        lt = m(2722),
        ht = m(590),
        X = m(6451),
        H = m(4968);
      const pt = ["wrapper"],
        dt = ["sourceImage"];
      function gt(r, s) {
        if (1 & r) {
          const t = e.EpF();
          e.TgZ(0, "img", 4, 5),
            e.NdJ("load", function () {
              return e.CHM(t), e.oxw().imageLoadedInView();
            })("mousedown", function (o) {
              e.CHM(t);
              const n = e.oxw();
              return n.startMove(o, n.moveTypes.Drag);
            })("touchstart", function (o) {
              e.CHM(t);
              const n = e.oxw();
              return n.startMove(o, n.moveTypes.Drag);
            })("error", function (o) {
              return e.CHM(t), e.oxw().loadImageError(o);
            }),
            e.qZA();
        }
        if (2 & r) {
          const t = e.oxw();
          e.Udp("visibility", t.imageVisible ? "visible" : "hidden")(
            "transform",
            t.safeTransformStyle
          ),
            e.ekj("ngx-ic-draggable", !t.disabled && t.allowMoveImage),
            e.Q6J("src", t.safeImgDataUrl, e.LSH),
            e.uIk("alt", t.imageAltText);
        }
      }
      function mt(r, s) {
        if (1 & r) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "span", 9),
            e.NdJ("mousedown", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "topleft");
            })("touchstart", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "topleft");
            }),
            e._UZ(2, "span", 10),
            e.qZA(),
            e.TgZ(3, "span", 11),
            e._UZ(4, "span", 10),
            e.qZA(),
            e.TgZ(5, "span", 12),
            e.NdJ("mousedown", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "topright");
            })("touchstart", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "topright");
            }),
            e._UZ(6, "span", 10),
            e.qZA(),
            e.TgZ(7, "span", 13),
            e._UZ(8, "span", 10),
            e.qZA(),
            e.TgZ(9, "span", 14),
            e.NdJ("mousedown", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "bottomright");
            })("touchstart", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "bottomright");
            }),
            e._UZ(10, "span", 10),
            e.qZA(),
            e.TgZ(11, "span", 15),
            e._UZ(12, "span", 10),
            e.qZA(),
            e.TgZ(13, "span", 16),
            e.NdJ("mousedown", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "bottomleft");
            })("touchstart", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "bottomleft");
            }),
            e._UZ(14, "span", 10),
            e.qZA(),
            e.TgZ(15, "span", 17),
            e._UZ(16, "span", 10),
            e.qZA(),
            e.TgZ(17, "span", 18),
            e.NdJ("mousedown", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "top");
            })("touchstart", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "top");
            }),
            e.qZA(),
            e.TgZ(18, "span", 19),
            e.NdJ("mousedown", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "right");
            })("touchstart", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "right");
            }),
            e.qZA(),
            e.TgZ(19, "span", 20),
            e.NdJ("mousedown", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "bottom");
            })("touchstart", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "bottom");
            }),
            e.qZA(),
            e.TgZ(20, "span", 21),
            e.NdJ("mousedown", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "left");
            })("touchstart", function (o) {
              e.CHM(t);
              const n = e.oxw(2);
              return n.startMove(o, n.moveTypes.Resize, "left");
            }),
            e.qZA(),
            e.BQk();
        }
      }
      function ut(r, s) {
        if (1 & r) {
          const t = e.EpF();
          e.TgZ(0, "div", 6),
            e.NdJ("keydown", function (o) {
              return e.CHM(t), e.oxw().keyboardAccess(o);
            }),
            e.TgZ(1, "div", 7),
            e.NdJ("mousedown", function (o) {
              e.CHM(t);
              const n = e.oxw();
              return n.startMove(o, n.moveTypes.Move);
            })("touchstart", function (o) {
              e.CHM(t);
              const n = e.oxw();
              return n.startMove(o, n.moveTypes.Move);
            }),
            e.qZA(),
            e.YNc(2, mt, 21, 0, "ng-container", 8),
            e.qZA();
        }
        if (2 & r) {
          const t = e.oxw();
          e.Udp("top", t.cropper.y1, "px")("left", t.cropper.x1, "px")(
            "width",
            t.cropper.x2 - t.cropper.x1,
            "px"
          )(
            "height",
            t.cropper.y2 - t.cropper.y1,
            "px"
          )("margin-left", "center" === t.alignImage ? t.marginLeft : null)(
            "visibility",
            t.imageVisible ? "visible" : "hidden"
          ),
            e.ekj("ngx-ic-round", t.roundCropper),
            e.uIk("aria-label", t.cropperFrameAriaLabel),
            e.xp6(2),
            e.Q6J("ngIf", !t.hideResizeSquares);
        }
      }
      class ft {
        constructor() {
          (this.format = "png"),
            (this.output = "blob"),
            (this.maintainAspectRatio = !0),
            (this.transform = {}),
            (this.aspectRatio = 1),
            (this.resetCropOnAspectRatioChange = !0),
            (this.resizeToWidth = 0),
            (this.resizeToHeight = 0),
            (this.cropperMinWidth = 0),
            (this.cropperMinHeight = 0),
            (this.cropperMaxHeight = 0),
            (this.cropperMaxWidth = 0),
            (this.cropperStaticWidth = 0),
            (this.cropperStaticHeight = 0),
            (this.canvasRotation = 0),
            (this.initialStepSize = 3),
            (this.roundCropper = !1),
            (this.onlyScaleDown = !1),
            (this.imageQuality = 92),
            (this.autoCrop = !0),
            (this.backgroundColor = null),
            (this.containWithinAspectRatio = !1),
            (this.hideResizeSquares = !1),
            (this.alignImage = "center"),
            (this.cropperFrameAriaLabel = "Crop photo"),
            (this.cropperScaledMinWidth = 20),
            (this.cropperScaledMinHeight = 20),
            (this.cropperScaledMaxWidth = 20),
            (this.cropperScaledMaxHeight = 20),
            (this.stepSize = this.initialStepSize);
        }
        setOptions(s) {
          Object.keys(s)
            .filter((t) => t in this)
            .forEach((t) => (this[t] = s[t])),
            this.validateOptions();
        }
        setOptionsFromChanges(s) {
          Object.keys(s)
            .filter((t) => t in this)
            .forEach((t) => (this[t] = s[t].currentValue)),
            this.validateOptions();
        }
        validateOptions() {
          if (this.maintainAspectRatio && !this.aspectRatio)
            throw new Error(
              "`aspectRatio` should > 0 when `maintainAspectRatio` is enabled"
            );
        }
      }
      var x = (() => {
        return (
          ((r = x || (x = {})).Drag = "drag"),
          (r.Move = "move"),
          (r.Resize = "resize"),
          (r.Pinch = "pinch"),
          x
        );
        var r;
      })();
      function G(r, s) {
        return (r / 100) * s;
      }
      let bt = (() => {
          class r {
            crop(t, i, o, n, a) {
              const c = this.getImagePosition(t, i, o, a),
                h = c.x2 - c.x1,
                l = c.y2 - c.y1,
                p = document.createElement("canvas");
              (p.width = h), (p.height = l);
              const g = p.getContext("2d");
              if (!g) return null;
              null != o.backgroundColor &&
                ((g.fillStyle = o.backgroundColor), g.fillRect(0, 0, h, l));
              const d = (o.transform.scale || 1) * (o.transform.flipH ? -1 : 1),
                f = (o.transform.scale || 1) * (o.transform.flipV ? -1 : 1),
                { translateH: v, translateV: C } = this.getCanvasTranslate(
                  t,
                  o,
                  a
                ),
                M = t.transformed;
              g.setTransform(
                d,
                0,
                0,
                f,
                M.size.width / 2 + v,
                M.size.height / 2 + C
              ),
                g.translate(-c.x1 / d, -c.y1 / f),
                g.rotate(((o.transform.rotate || 0) * Math.PI) / 180),
                g.drawImage(M.image, -M.size.width / 2, -M.size.height / 2);
              const y = {
                width: h,
                height: l,
                imagePosition: c,
                cropperPosition: Object.assign({}, i),
              };
              o.containWithinAspectRatio &&
                (y.offsetImagePosition = this.getOffsetImagePosition(
                  t,
                  i,
                  o,
                  a
                ));
              const _ = this.getResizeRatio(h, l, o);
              return (
                1 !== _ &&
                  ((y.width = Math.round(h * _)),
                  (y.height = o.maintainAspectRatio
                    ? Math.round(y.width / o.aspectRatio)
                    : Math.round(l * _)),
                  (function yt(r, s, t) {
                    const i = r.width,
                      o = r.height,
                      n = i / (s = Math.round(s)),
                      a = o / (t = Math.round(t)),
                      c = Math.ceil(n / 2),
                      h = Math.ceil(a / 2),
                      l = r.getContext("2d");
                    if (l) {
                      const p = l.getImageData(0, 0, i, o),
                        g = l.createImageData(s, t),
                        d = p.data,
                        f = g.data;
                      for (let v = 0; v < t; v++)
                        for (let C = 0; C < s; C++) {
                          const M = 4 * (C + v * s),
                            y = v * a;
                          let _ = 0,
                            F = 0,
                            tt = 0,
                            et = 0,
                            it = 0,
                            ot = 0,
                            nt = 0;
                          const Xt = Math.floor(C * n),
                            Gt = Math.floor(v * a);
                          let L = Math.ceil((C + 1) * n),
                            W = Math.ceil((v + 1) * a);
                          (L = Math.min(L, i)), (W = Math.min(W, o));
                          for (let k = Gt; k < W; k++) {
                            const rt = Math.abs(y - k) / h,
                              $t = C * n,
                              Kt = rt * rt;
                            for (let B = Xt; B < L; B++) {
                              const at = Math.abs($t - B) / c,
                                S = Math.sqrt(Kt + at * at);
                              if (S >= 1) continue;
                              _ = 2 * S * S * S - 3 * S * S + 1;
                              const R = 4 * (B + k * i);
                              (nt += _ * d[R + 3]),
                                (tt += _),
                                d[R + 3] < 255 && (_ = (_ * d[R + 3]) / 250),
                                (et += _ * d[R]),
                                (it += _ * d[R + 1]),
                                (ot += _ * d[R + 2]),
                                (F += _);
                            }
                          }
                          (f[M] = et / F),
                            (f[M + 1] = it / F),
                            (f[M + 2] = ot / F),
                            (f[M + 3] = nt / tt);
                        }
                      (r.width = s), (r.height = t), l.putImageData(g, 0, 0);
                    }
                  })(p, y.width, y.height)),
                "blob" === n
                  ? this.cropToBlob(y, p, o)
                  : ((y.base64 = p.toDataURL(
                      "image/" + o.format,
                      this.getQuality(o)
                    )),
                    y)
              );
            }
            cropToBlob(t, i, o) {
              return A(this, void 0, void 0, function* () {
                return (
                  (t.blob = yield new Promise((n) =>
                    i.toBlob(n, "image/" + o.format, this.getQuality(o))
                  )),
                  t.blob && (t.objectUrl = URL.createObjectURL(t.blob)),
                  t
                );
              });
            }
            getCanvasTranslate(t, i, o) {
              if ("px" === i.transform.translateUnit) {
                const n = this.getRatio(t, o);
                return {
                  translateH: (i.transform.translateH || 0) * n,
                  translateV: (i.transform.translateV || 0) * n,
                };
              }
              return {
                translateH: i.transform.translateH
                  ? G(i.transform.translateH, t.transformed.size.width)
                  : 0,
                translateV: i.transform.translateV
                  ? G(i.transform.translateV, t.transformed.size.height)
                  : 0,
              };
            }
            getRatio(t, i) {
              return t.transformed.size.width / i.width;
            }
            getImagePosition(t, i, o, n) {
              const a = this.getRatio(t, n),
                c = {
                  x1: Math.round(i.x1 * a),
                  y1: Math.round(i.y1 * a),
                  x2: Math.round(i.x2 * a),
                  y2: Math.round(i.y2 * a),
                };
              return (
                o.containWithinAspectRatio ||
                  ((c.x1 = Math.max(c.x1, 0)),
                  (c.y1 = Math.max(c.y1, 0)),
                  (c.x2 = Math.min(c.x2, t.transformed.size.width)),
                  (c.y2 = Math.min(c.y2, t.transformed.size.height))),
                c
              );
            }
            getOffsetImagePosition(t, i, o, n) {
              const a = o.canvasRotation + t.exifTransform.rotate,
                c = this.getRatio(t, n);
              let h, l;
              a % 2
                ? ((h =
                    (t.transformed.size.width - t.original.size.height) / 2),
                  (l = (t.transformed.size.height - t.original.size.width) / 2))
                : ((h = (t.transformed.size.width - t.original.size.width) / 2),
                  (l =
                    (t.transformed.size.height - t.original.size.height) / 2));
              const p = {
                x1: Math.round(i.x1 * c) - h,
                y1: Math.round(i.y1 * c) - l,
                x2: Math.round(i.x2 * c) - h,
                y2: Math.round(i.y2 * c) - l,
              };
              return (
                o.containWithinAspectRatio ||
                  ((p.x1 = Math.max(p.x1, 0)),
                  (p.y1 = Math.max(p.y1, 0)),
                  (p.x2 = Math.min(p.x2, t.transformed.size.width)),
                  (p.y2 = Math.min(p.y2, t.transformed.size.height))),
                p
              );
            }
            getResizeRatio(t, i, o) {
              const n = o.resizeToWidth / t,
                a = o.resizeToHeight / i,
                c = new Array();
              o.resizeToWidth > 0 && c.push(n),
                o.resizeToHeight > 0 && c.push(a);
              const h = 0 === c.length ? 1 : Math.min(...c);
              return h > 1 && !o.onlyScaleDown ? h : Math.min(h, 1);
            }
            getQuality(t) {
              return Math.min(1, Math.max(0, t.imageQuality / 100));
            }
          }
          return (
            (r.ɵfac = function (t) {
              return new (t || r)();
            }),
            (r.ɵprov = e.Yz7({
              token: r,
              factory: r.ɵfac,
              providedIn: "root",
            })),
            r
          );
        })(),
        At = (() => {
          class r {
            resetCropperPosition(t, i, o, n) {
              if (null == t ? void 0 : t.nativeElement)
                if (o.cropperStaticHeight && o.cropperStaticWidth)
                  (i.x1 = 0),
                    (i.x2 =
                      n.width > o.cropperStaticWidth
                        ? o.cropperStaticWidth
                        : n.width),
                    (i.y1 = 0),
                    (i.y2 =
                      n.height > o.cropperStaticHeight
                        ? o.cropperStaticHeight
                        : n.height);
                else {
                  const a = Math.min(o.cropperScaledMaxWidth, n.width),
                    c = Math.min(o.cropperScaledMaxHeight, n.height);
                  if (o.maintainAspectRatio)
                    if (n.width / o.aspectRatio < n.height) {
                      (i.x1 = 0), (i.x2 = a);
                      const h = a / o.aspectRatio;
                      (i.y1 = (n.height - h) / 2), (i.y2 = i.y1 + h);
                    } else {
                      (i.y1 = 0), (i.y2 = c);
                      const h = c * o.aspectRatio;
                      (i.x1 = (n.width - h) / 2), (i.x2 = i.x1 + h);
                    }
                  else (i.x1 = 0), (i.x2 = a), (i.y1 = 0), (i.y2 = c);
                }
            }
            move(t, i, o) {
              const n = this.getClientX(t) - i.clientX,
                a = this.getClientY(t) - i.clientY;
              (o.x1 = i.x1 + n),
                (o.y1 = i.y1 + a),
                (o.x2 = i.x2 + n),
                (o.y2 = i.y2 + a);
            }
            resize(t, i, o, n, a) {
              const c = this.getClientX(t) - i.clientX,
                h = this.getClientY(t) - i.clientY;
              switch (i.position) {
                case "left":
                  o.x1 = Math.min(
                    Math.max(i.x1 + c, o.x2 - a.cropperScaledMaxWidth),
                    o.x2 - a.cropperScaledMinWidth
                  );
                  break;
                case "topleft":
                  (o.x1 = Math.min(
                    Math.max(i.x1 + c, o.x2 - a.cropperScaledMaxWidth),
                    o.x2 - a.cropperScaledMinWidth
                  )),
                    (o.y1 = Math.min(
                      Math.max(i.y1 + h, o.y2 - a.cropperScaledMaxHeight),
                      o.y2 - a.cropperScaledMinHeight
                    ));
                  break;
                case "top":
                  o.y1 = Math.min(
                    Math.max(i.y1 + h, o.y2 - a.cropperScaledMaxHeight),
                    o.y2 - a.cropperScaledMinHeight
                  );
                  break;
                case "topright":
                  (o.x2 = Math.max(
                    Math.min(i.x2 + c, o.x1 + a.cropperScaledMaxWidth),
                    o.x1 + a.cropperScaledMinWidth
                  )),
                    (o.y1 = Math.min(
                      Math.max(i.y1 + h, o.y2 - a.cropperScaledMaxHeight),
                      o.y2 - a.cropperScaledMinHeight
                    ));
                  break;
                case "right":
                  o.x2 = Math.max(
                    Math.min(i.x2 + c, o.x1 + a.cropperScaledMaxWidth),
                    o.x1 + a.cropperScaledMinWidth
                  );
                  break;
                case "bottomright":
                  (o.x2 = Math.max(
                    Math.min(i.x2 + c, o.x1 + a.cropperScaledMaxWidth),
                    o.x1 + a.cropperScaledMinWidth
                  )),
                    (o.y2 = Math.max(
                      Math.min(i.y2 + h, o.y1 + a.cropperScaledMaxHeight),
                      o.y1 + a.cropperScaledMinHeight
                    ));
                  break;
                case "bottom":
                  o.y2 = Math.max(
                    Math.min(i.y2 + h, o.y1 + a.cropperScaledMaxHeight),
                    o.y1 + a.cropperScaledMinHeight
                  );
                  break;
                case "bottomleft":
                  (o.x1 = Math.min(
                    Math.max(i.x1 + c, o.x2 - a.cropperScaledMaxWidth),
                    o.x2 - a.cropperScaledMinWidth
                  )),
                    (o.y2 = Math.max(
                      Math.min(i.y2 + h, o.y1 + a.cropperScaledMaxHeight),
                      o.y1 + a.cropperScaledMinHeight
                    ));
                  break;
                case "center":
                  const l = t.scale,
                    p = Math.min(
                      Math.max(
                        a.cropperScaledMinWidth,
                        Math.abs(i.x2 - i.x1) * l
                      ),
                      a.cropperScaledMaxWidth
                    ),
                    g = Math.min(
                      Math.max(
                        a.cropperScaledMinHeight,
                        Math.abs(i.y2 - i.y1) * l
                      ),
                      a.cropperScaledMaxHeight
                    );
                  (o.x1 = i.clientX - p / 2),
                    (o.x2 = i.clientX + p / 2),
                    (o.y1 = i.clientY - g / 2),
                    (o.y2 = i.clientY + g / 2),
                    o.x1 < 0
                      ? ((o.x2 -= o.x1), (o.x1 = 0))
                      : o.x2 > n.width &&
                        ((o.x1 -= o.x2 - n.width), (o.x2 = n.width)),
                    o.y1 < 0
                      ? ((o.y2 -= o.y1), (o.y1 = 0))
                      : o.y2 > n.height &&
                        ((o.y1 -= o.y2 - n.height), (o.y2 = n.height));
              }
              a.maintainAspectRatio &&
                this.checkAspectRatio(i.position, o, n, a);
            }
            checkAspectRatio(t, i, o, n) {
              let a = 0,
                c = 0;
              switch (t) {
                case "top":
                  (i.x2 = i.x1 + (i.y2 - i.y1) * n.aspectRatio),
                    (a = Math.max(i.x2 - o.width, 0)),
                    (c = Math.max(0 - i.y1, 0)),
                    (a > 0 || c > 0) &&
                      ((i.x2 -= c * n.aspectRatio > a ? c * n.aspectRatio : a),
                      (i.y1 += c * n.aspectRatio > a ? c : a / n.aspectRatio));
                  break;
                case "bottom":
                  (i.x2 = i.x1 + (i.y2 - i.y1) * n.aspectRatio),
                    (a = Math.max(i.x2 - o.width, 0)),
                    (c = Math.max(i.y2 - o.height, 0)),
                    (a > 0 || c > 0) &&
                      ((i.x2 -= c * n.aspectRatio > a ? c * n.aspectRatio : a),
                      (i.y2 -= c * n.aspectRatio > a ? c : a / n.aspectRatio));
                  break;
                case "topleft":
                  (i.y1 = i.y2 - (i.x2 - i.x1) / n.aspectRatio),
                    (a = Math.max(0 - i.x1, 0)),
                    (c = Math.max(0 - i.y1, 0)),
                    (a > 0 || c > 0) &&
                      ((i.x1 += c * n.aspectRatio > a ? c * n.aspectRatio : a),
                      (i.y1 += c * n.aspectRatio > a ? c : a / n.aspectRatio));
                  break;
                case "topright":
                  (i.y1 = i.y2 - (i.x2 - i.x1) / n.aspectRatio),
                    (a = Math.max(i.x2 - o.width, 0)),
                    (c = Math.max(0 - i.y1, 0)),
                    (a > 0 || c > 0) &&
                      ((i.x2 -= c * n.aspectRatio > a ? c * n.aspectRatio : a),
                      (i.y1 += c * n.aspectRatio > a ? c : a / n.aspectRatio));
                  break;
                case "right":
                case "bottomright":
                  (i.y2 = i.y1 + (i.x2 - i.x1) / n.aspectRatio),
                    (a = Math.max(i.x2 - o.width, 0)),
                    (c = Math.max(i.y2 - o.height, 0)),
                    (a > 0 || c > 0) &&
                      ((i.x2 -= c * n.aspectRatio > a ? c * n.aspectRatio : a),
                      (i.y2 -= c * n.aspectRatio > a ? c : a / n.aspectRatio));
                  break;
                case "left":
                case "bottomleft":
                  (i.y2 = i.y1 + (i.x2 - i.x1) / n.aspectRatio),
                    (a = Math.max(0 - i.x1, 0)),
                    (c = Math.max(i.y2 - o.height, 0)),
                    (a > 0 || c > 0) &&
                      ((i.x1 += c * n.aspectRatio > a ? c * n.aspectRatio : a),
                      (i.y2 -= c * n.aspectRatio > a ? c : a / n.aspectRatio));
                  break;
                case "center":
                  (i.x2 = i.x1 + (i.y2 - i.y1) * n.aspectRatio),
                    (i.y2 = i.y1 + (i.x2 - i.x1) / n.aspectRatio);
                  const h = Math.max(0 - i.x1, 0),
                    l = Math.max(i.x2 - o.width, 0),
                    p = Math.max(i.y2 - o.height, 0),
                    g = Math.max(0 - i.y1, 0);
                  (h > 0 || l > 0 || p > 0 || g > 0) &&
                    ((i.x1 += p * n.aspectRatio > h ? p * n.aspectRatio : h),
                    (i.x2 -= g * n.aspectRatio > l ? g * n.aspectRatio : l),
                    (i.y1 += g * n.aspectRatio > l ? g : l / n.aspectRatio),
                    (i.y2 -= p * n.aspectRatio > h ? p : h / n.aspectRatio));
              }
            }
            getClientX(t) {
              var i;
              return (
                (null === (i = t.touches) || void 0 === i
                  ? void 0
                  : i[0].clientX) ||
                t.clientX ||
                0
              );
            }
            getClientY(t) {
              var i;
              return (
                (null === (i = t.touches) || void 0 === i
                  ? void 0
                  : i[0].clientY) ||
                t.clientY ||
                0
              );
            }
          }
          return (
            (r.ɵfac = function (t) {
              return new (t || r)();
            }),
            (r.ɵprov = e.Yz7({
              token: r,
              factory: r.ɵfac,
              providedIn: "root",
            })),
            r
          );
        })();
      let St = (() => {
          class r {
            constructor() {
              this.autoRotateSupported = (function Mt() {
                return new Promise((r) => {
                  const s = new Image();
                  (s.onload = () => {
                    r(1 === s.width && 2 === s.height);
                  }),
                    (s.src =
                      "data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==");
                });
              })();
            }
            loadImageFile(t, i) {
              return A(this, void 0, void 0, function* () {
                const o = yield t.arrayBuffer();
                return yield this.checkImageTypeAndLoadImageFromArrayBuffer(
                  o,
                  t.type,
                  i
                );
              });
            }
            checkImageTypeAndLoadImageFromArrayBuffer(t, i, o) {
              return this.isValidImageType(i)
                ? this.loadImageFromArrayBuffer(t, o, i)
                : Promise.reject(new Error("Invalid image type"));
            }
            isValidImageType(t) {
              return /image\/(png|jpg|jpeg|bmp|gif|tiff|svg|webp|x-icon|vnd.microsoft.icon)/.test(
                t
              );
            }
            loadImageFromURL(t, i) {
              return A(this, void 0, void 0, function* () {
                const n = yield (yield fetch(t)).blob(),
                  a = yield n.arrayBuffer();
                return yield this.loadImageFromArrayBuffer(a, i, n.type);
              });
            }
            loadBase64Image(t, i) {
              const o = this.base64ToArrayBuffer(t);
              return this.loadImageFromArrayBuffer(o, i);
            }
            base64ToArrayBuffer(t) {
              t = t.replace(/^data:([^;]+);base64,/gim, "");
              const i = atob(t),
                o = i.length,
                n = new Uint8Array(o);
              for (let a = 0; a < o; a++) n[a] = i.charCodeAt(a);
              return n.buffer;
            }
            loadImageFromArrayBuffer(t, i, o) {
              return A(this, void 0, void 0, function* () {
                const n = yield new Promise((a, c) =>
                  A(this, void 0, void 0, function* () {
                    try {
                      const h = new Blob([t], o ? { type: o } : void 0),
                        l = URL.createObjectURL(h),
                        p = new Image(),
                        d =
                          "image/svg+xml" === o
                            ? yield this.getSvgImageSize(h)
                            : void 0;
                      (p.onload = () =>
                        a({
                          originalImage: p,
                          originalImageSize: d,
                          originalObjectUrl: l,
                          originalArrayBuffer: t,
                        })),
                        (p.onerror = c),
                        (p.src = l);
                    } catch (h) {
                      c(h);
                    }
                  })
                );
                return yield this.transformImageFromArrayBuffer(
                  n,
                  i,
                  null != n.originalImageSize
                );
              });
            }
            getSvgImageSize(t) {
              return A(this, void 0, void 0, function* () {
                const n = new DOMParser()
                  .parseFromString(yield t.text(), "image/svg+xml")
                  .querySelector("svg");
                if (!n) throw Error("Failed to parse SVG image");
                const a = n.getAttribute("width"),
                  c = n.getAttribute("height");
                if (a && c) return null;
                const h =
                  n.getAttribute("viewBox") || n.getAttribute("viewbox");
                if (h) {
                  const l = h.split(" ");
                  return { width: +l[2], height: +l[3] };
                }
                throw Error(
                  "Failed to load SVG image. SVG must have width + height or viewBox definition."
                );
              });
            }
            transformImageFromArrayBuffer(t, i, o = !1) {
              var n;
              return A(this, void 0, void 0, function* () {
                const c = (function wt(r) {
                  switch (
                    ("object" == typeof r &&
                      (r = (function Tt(r) {
                        const s = new DataView(r);
                        if (65496 !== s.getUint16(0, !1)) return -2;
                        const t = s.byteLength;
                        let i = 2;
                        for (; i < t; ) {
                          if (s.getUint16(i + 2, !1) <= 8) return -1;
                          const o = s.getUint16(i, !1);
                          if (((i += 2), 65505 == o)) {
                            if (1165519206 !== s.getUint32((i += 2), !1))
                              return -1;
                            const n = 18761 == s.getUint16((i += 6), !1);
                            i += s.getUint32(i + 4, n);
                            const a = s.getUint16(i, n);
                            i += 2;
                            for (let c = 0; c < a; c++)
                              if (274 == s.getUint16(i + 12 * c, n))
                                return s.getUint16(i + 12 * c + 8, n);
                          } else {
                            if (65280 != (65280 & o)) break;
                            i += s.getUint16(i, !1);
                          }
                        }
                        return -1;
                      })(r)),
                    r)
                  ) {
                    case 2:
                      return { rotate: 0, flip: !0 };
                    case 3:
                      return { rotate: 2, flip: !1 };
                    case 4:
                      return { rotate: 2, flip: !0 };
                    case 5:
                      return { rotate: 1, flip: !0 };
                    case 6:
                      return { rotate: 1, flip: !1 };
                    case 7:
                      return { rotate: 3, flip: !0 };
                    case 8:
                      return { rotate: 3, flip: !1 };
                    default:
                      return { rotate: 0, flip: !1 };
                  }
                })(
                  (yield this.autoRotateSupported) ? -1 : t.originalArrayBuffer
                );
                if (!t.originalImage || !t.originalImage.complete)
                  return Promise.reject(new Error("No image loaded"));
                const h = {
                  original: {
                    objectUrl: t.originalObjectUrl,
                    image: t.originalImage,
                    size:
                      null !== (n = t.originalImageSize) && void 0 !== n
                        ? n
                        : {
                            width: t.originalImage.naturalWidth,
                            height: t.originalImage.naturalHeight,
                          },
                  },
                  exifTransform: c,
                };
                return this.transformLoadedImage(h, i, o);
              });
            }
            transformLoadedImage(t, i, o = !1) {
              return A(this, void 0, void 0, function* () {
                const n = i.canvasRotation + t.exifTransform.rotate,
                  a = t.original.size;
                if (
                  !o &&
                  0 === n &&
                  !t.exifTransform.flip &&
                  !i.containWithinAspectRatio
                )
                  return {
                    original: {
                      objectUrl: t.original.objectUrl,
                      image: t.original.image,
                      size: Object.assign({}, a),
                    },
                    transformed: {
                      objectUrl: t.original.objectUrl,
                      image: t.original.image,
                      size: Object.assign({}, a),
                    },
                    exifTransform: t.exifTransform,
                  };
                const c = this.getTransformedSize(a, t.exifTransform, i),
                  h = document.createElement("canvas");
                (h.width = c.width), (h.height = c.height);
                const l = h.getContext("2d");
                null == l ||
                  l.setTransform(
                    t.exifTransform.flip ? -1 : 1,
                    0,
                    0,
                    1,
                    h.width / 2,
                    h.height / 2
                  ),
                  null == l || l.rotate(Math.PI * (n / 2)),
                  null == l ||
                    l.drawImage(t.original.image, -a.width / 2, -a.height / 2);
                const p = yield new Promise((f) => h.toBlob(f, i.format));
                if (!p)
                  throw new Error("Failed to get Blob for transformed image.");
                const g = URL.createObjectURL(p),
                  d = yield this.loadImageFromObjectUrl(g);
                return {
                  original: {
                    objectUrl: t.original.objectUrl,
                    image: t.original.image,
                    size: Object.assign({}, a),
                  },
                  transformed: {
                    objectUrl: g,
                    image: d,
                    size: { width: d.width, height: d.height },
                  },
                  exifTransform: t.exifTransform,
                };
              });
            }
            loadImageFromObjectUrl(t) {
              return new Promise((i, o) => {
                const n = new Image();
                (n.onload = () => i(n)), (n.onerror = o), (n.src = t);
              });
            }
            getTransformedSize(t, i, o) {
              const n = o.canvasRotation + i.rotate;
              if (o.containWithinAspectRatio) {
                if (n % 2) {
                  const c = t.height / o.aspectRatio;
                  return {
                    width: Math.max(t.height, t.width * o.aspectRatio),
                    height: Math.max(t.width, c),
                  };
                }
                {
                  const c = t.width / o.aspectRatio;
                  return {
                    width: Math.max(t.width, t.height * o.aspectRatio),
                    height: Math.max(t.height, c),
                  };
                }
              }
              return n % 2
                ? { height: t.width, width: t.height }
                : { width: t.width, height: t.height };
            }
          }
          return (
            (r.ɵfac = function (t) {
              return new (t || r)();
            }),
            (r.ɵprov = e.Yz7({
              token: r,
              factory: r.ɵfac,
              providedIn: "root",
            })),
            r
          );
        })(),
        Rt = (() => {
          class r {
            constructor(t, i, o, n, a, c, h) {
              (this.cropService = t),
                (this.cropperPositionService = i),
                (this.loadImageService = o),
                (this.sanitizer = n),
                (this.cd = a),
                (this.zone = c),
                (this.hammerLoader = h),
                (this.settings = new ft()),
                (this.setImageMaxSizeRetries = 0),
                (this.resizedWhileHidden = !1),
                (this.marginLeft = "0px"),
                (this.maxSize = { width: 0, height: 0 }),
                (this.moveTypes = x),
                (this.imageVisible = !1),
                (this.cropperFrameAriaLabel =
                  this.settings.cropperFrameAriaLabel),
                (this.output = this.settings.output),
                (this.format = this.settings.format),
                (this.transform = {}),
                (this.maintainAspectRatio = this.settings.maintainAspectRatio),
                (this.aspectRatio = this.settings.aspectRatio),
                (this.resetCropOnAspectRatioChange =
                  this.settings.resetCropOnAspectRatioChange),
                (this.resizeToWidth = this.settings.resizeToWidth),
                (this.resizeToHeight = this.settings.resizeToHeight),
                (this.cropperMinWidth = this.settings.cropperMinWidth),
                (this.cropperMinHeight = this.settings.cropperMinHeight),
                (this.cropperMaxHeight = this.settings.cropperMaxHeight),
                (this.cropperMaxWidth = this.settings.cropperMaxWidth),
                (this.cropperStaticWidth = this.settings.cropperStaticWidth),
                (this.cropperStaticHeight = this.settings.cropperStaticHeight),
                (this.canvasRotation = this.settings.canvasRotation),
                (this.initialStepSize = this.settings.initialStepSize),
                (this.roundCropper = this.settings.roundCropper),
                (this.onlyScaleDown = this.settings.onlyScaleDown),
                (this.imageQuality = this.settings.imageQuality),
                (this.autoCrop = this.settings.autoCrop),
                (this.backgroundColor = this.settings.backgroundColor),
                (this.containWithinAspectRatio =
                  this.settings.containWithinAspectRatio),
                (this.hideResizeSquares = this.settings.hideResizeSquares),
                (this.allowMoveImage = !1),
                (this.cropper = { x1: -100, y1: -100, x2: 1e4, y2: 1e4 }),
                (this.alignImage = this.settings.alignImage),
                (this.disabled = !1),
                (this.hidden = !1),
                (this.imageCropped = new e.vpe()),
                (this.startCropImage = new e.vpe()),
                (this.imageLoaded = new e.vpe()),
                (this.cropperReady = new e.vpe()),
                (this.loadImageFailed = new e.vpe()),
                (this.transformChange = new e.vpe()),
                this.reset();
            }
            ngOnChanges(t) {
              var i;
              this.onChangesUpdateSettings(t),
                this.onChangesInputImage(t),
                (null === (i = this.loadedImage) || void 0 === i
                  ? void 0
                  : i.original.image.complete) &&
                  (t.containWithinAspectRatio || t.canvasRotation) &&
                  this.loadImageService
                    .transformLoadedImage(this.loadedImage, this.settings)
                    .then((o) => this.setLoadedImage(o))
                    .catch((o) => this.loadImageError(o)),
                (t.cropper || t.maintainAspectRatio || t.aspectRatio) &&
                  (this.setMaxSize(),
                  this.setCropperScaledMinSize(),
                  this.setCropperScaledMaxSize(),
                  !this.maintainAspectRatio ||
                  (!this.resetCropOnAspectRatioChange &&
                    this.aspectRatioIsCorrect()) ||
                  (!t.maintainAspectRatio && !t.aspectRatio)
                    ? t.cropper &&
                      (this.checkCropperPosition(!1), this.doAutoCrop())
                    : this.resetCropperPosition()),
                t.transform &&
                  ((this.transform = this.transform || {}),
                  this.setCssTransform(),
                  this.doAutoCrop()),
                t.hidden &&
                  this.resizedWhileHidden &&
                  !this.hidden &&
                  setTimeout(() => {
                    this.onResize(), (this.resizedWhileHidden = !1);
                  });
            }
            onChangesUpdateSettings(t) {
              this.settings.setOptionsFromChanges(t),
                this.settings.cropperStaticHeight &&
                  this.settings.cropperStaticWidth &&
                  ((this.hideResizeSquares = !0),
                  this.settings.setOptions({
                    hideResizeSquares: !0,
                    cropperMinWidth: this.settings.cropperStaticWidth,
                    cropperMinHeight: this.settings.cropperStaticHeight,
                    cropperMaxHeight: this.settings.cropperStaticHeight,
                    cropperMaxWidth: this.settings.cropperStaticWidth,
                    maintainAspectRatio: !1,
                  }));
            }
            onChangesInputImage(t) {
              (t.imageChangedEvent ||
                t.imageURL ||
                t.imageBase64 ||
                t.imageFile) &&
                this.reset(),
                t.imageChangedEvent &&
                  this.isValidImageChangedEvent() &&
                  this.loadImageFile(this.imageChangedEvent.target.files[0]),
                t.imageURL &&
                  this.imageURL &&
                  this.loadImageFromURL(this.imageURL),
                t.imageBase64 &&
                  this.imageBase64 &&
                  this.loadBase64Image(this.imageBase64),
                t.imageFile &&
                  this.imageFile &&
                  this.loadImageFile(this.imageFile);
            }
            isValidImageChangedEvent() {
              var t, i, o;
              return (
                (null ===
                  (o =
                    null ===
                      (i =
                        null === (t = this.imageChangedEvent) || void 0 === t
                          ? void 0
                          : t.target) || void 0 === i
                      ? void 0
                      : i.files) || void 0 === o
                  ? void 0
                  : o.length) > 0
              );
            }
            setCssTransform() {
              var t;
              const i =
                (null === (t = this.transform) || void 0 === t
                  ? void 0
                  : t.translateUnit) || "%";
              this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle(
                `translate(${this.transform.translateH || 0}${i}, ${
                  this.transform.translateV || 0
                }${i}) scaleX(` +
                  (this.transform.scale || 1) *
                    (this.transform.flipH ? -1 : 1) +
                  ") scaleY(" +
                  (this.transform.scale || 1) *
                    (this.transform.flipV ? -1 : 1) +
                  ") rotate(" +
                  (this.transform.rotate || 0) +
                  "deg)"
              );
            }
            ngOnInit() {
              (this.settings.stepSize = this.initialStepSize),
                this.activatePinchGesture();
            }
            reset() {
              (this.imageVisible = !1),
                (this.loadedImage = void 0),
                (this.safeImgDataUrl =
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII="),
                (this.moveStart = {
                  active: !1,
                  type: null,
                  position: null,
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 0,
                  clientX: 0,
                  clientY: 0,
                }),
                (this.maxSize = { width: 0, height: 0 }),
                (this.cropper.x1 = -100),
                (this.cropper.y1 = -100),
                (this.cropper.x2 = 1e4),
                (this.cropper.y2 = 1e4);
            }
            loadImageFile(t) {
              this.loadImageService
                .loadImageFile(t, this.settings)
                .then((i) => this.setLoadedImage(i))
                .catch((i) => this.loadImageError(i));
            }
            loadBase64Image(t) {
              this.loadImageService
                .loadBase64Image(t, this.settings)
                .then((i) => this.setLoadedImage(i))
                .catch((i) => this.loadImageError(i));
            }
            loadImageFromURL(t) {
              this.loadImageService
                .loadImageFromURL(t, this.settings)
                .then((i) => this.setLoadedImage(i))
                .catch((i) => this.loadImageError(i));
            }
            setLoadedImage(t) {
              (this.loadedImage = t),
                (this.safeImgDataUrl =
                  this.sanitizer.bypassSecurityTrustResourceUrl(
                    t.transformed.objectUrl
                  )),
                this.cd.markForCheck();
            }
            loadImageError(t) {
              console.error(t), this.loadImageFailed.emit();
            }
            imageLoadedInView() {
              null != this.loadedImage &&
                (this.imageLoaded.emit(this.loadedImage),
                (this.setImageMaxSizeRetries = 0),
                setTimeout(() => this.checkImageMaxSizeRecursively()));
            }
            checkImageMaxSizeRecursively() {
              this.setImageMaxSizeRetries > 40
                ? this.loadImageFailed.emit()
                : this.sourceImageLoaded()
                ? (this.setMaxSize(),
                  this.setCropperScaledMinSize(),
                  this.setCropperScaledMaxSize(),
                  this.resetCropperPosition(),
                  this.cropperReady.emit(Object.assign({}, this.maxSize)),
                  this.cd.markForCheck())
                : (this.setImageMaxSizeRetries++,
                  setTimeout(() => this.checkImageMaxSizeRecursively(), 50));
            }
            sourceImageLoaded() {
              var t, i;
              return (
                (null ===
                  (i =
                    null === (t = this.sourceImage) || void 0 === t
                      ? void 0
                      : t.nativeElement) || void 0 === i
                  ? void 0
                  : i.offsetWidth) > 0
              );
            }
            onResize() {
              if (this.loadedImage)
                if (this.hidden) this.resizedWhileHidden = !0;
                else {
                  const t = Object.assign({}, this.maxSize);
                  this.setMaxSize(),
                    this.resizeCropperPosition(t),
                    this.setCropperScaledMinSize(),
                    this.setCropperScaledMaxSize();
                }
            }
            activatePinchGesture() {
              var t;
              return A(this, void 0, void 0, function* () {
                yield null === (t = this.hammerLoader) || void 0 === t
                  ? void 0
                  : t.call(this);
                const i = (null == window ? void 0 : window.Hammer) || null;
                if (i) {
                  const o = new i(this.wrapper.nativeElement);
                  o.get("pinch").set({ enable: !0 }),
                    o.on("pinchmove", this.onPinch.bind(this)),
                    o.on("pinchend", this.pinchStop.bind(this)),
                    o.on("pinchstart", this.startPinch.bind(this));
                } else (0, e.X6Q)() && console.warn("[NgxImageCropper] Could not find HammerJS - Pinch Gesture won't work");
              });
            }
            resizeCropperPosition(t) {
              (t.width !== this.maxSize.width ||
                t.height !== this.maxSize.height) &&
                ((this.cropper.x1 =
                  (this.cropper.x1 * this.maxSize.width) / t.width),
                (this.cropper.x2 =
                  (this.cropper.x2 * this.maxSize.width) / t.width),
                (this.cropper.y1 =
                  (this.cropper.y1 * this.maxSize.height) / t.height),
                (this.cropper.y2 =
                  (this.cropper.y2 * this.maxSize.height) / t.height));
            }
            resetCropperPosition() {
              this.cropperPositionService.resetCropperPosition(
                this.sourceImage,
                this.cropper,
                this.settings,
                this.maxSize
              ),
                this.doAutoCrop(),
                (this.imageVisible = !0);
            }
            keyboardAccess(t) {
              this.changeKeyboardStepSize(t), this.keyboardMoveCropper(t);
            }
            changeKeyboardStepSize(t) {
              const i = +t.key;
              i >= 1 && i <= 9 && (this.settings.stepSize = i);
            }
            keyboardMoveCropper(t) {
              if (
                !["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"].includes(
                  t.key
                )
              )
                return;
              const o = t.shiftKey ? x.Resize : x.Move,
                n = t.altKey
                  ? (function _t(r) {
                      switch (r) {
                        case "ArrowUp":
                          return "bottom";
                        case "ArrowRight":
                          return "left";
                        case "ArrowDown":
                          return "top";
                        default:
                          return "right";
                      }
                    })(t.key)
                  : (function xt(r) {
                      switch (r) {
                        case "ArrowUp":
                          return "top";
                        case "ArrowRight":
                          return "right";
                        case "ArrowDown":
                          return "bottom";
                        default:
                          return "left";
                      }
                    })(t.key),
                a = (function vt(r, s) {
                  switch (r) {
                    case "ArrowUp":
                      return { clientX: 0, clientY: -1 * s };
                    case "ArrowRight":
                      return { clientX: s, clientY: 0 };
                    case "ArrowDown":
                      return { clientX: 0, clientY: s };
                    default:
                      return { clientX: -1 * s, clientY: 0 };
                  }
                })(t.key, this.settings.stepSize);
              t.preventDefault(),
                t.stopPropagation(),
                this.startMove({ clientX: 0, clientY: 0 }, o, n),
                this.handleMouseMove(a),
                this.handleMouseUp();
            }
            startMove(t, i, o = null) {
              var n, a;
              this.disabled ||
                ((null === (n = this.moveStart) || void 0 === n
                  ? void 0
                  : n.active) &&
                  (null === (a = this.moveStart) || void 0 === a
                    ? void 0
                    : a.type) === x.Pinch) ||
                (i === x.Drag && !this.allowMoveImage) ||
                (t.preventDefault && t.preventDefault(),
                (this.moveStart = Object.assign(
                  {
                    active: !0,
                    type: i,
                    position: o,
                    transform: Object.assign({}, this.transform),
                    clientX: this.cropperPositionService.getClientX(t),
                    clientY: this.cropperPositionService.getClientY(t),
                  },
                  this.cropper
                )),
                this.initMouseMove());
            }
            initMouseMove() {
              (0, X.T)(
                (0, H.R)(document, "mousemove"),
                (0, H.R)(document, "touchmove")
              )
                .pipe(
                  (0, lt.R)(
                    (0, X.T)(
                      (0, H.R)(document, "mouseup"),
                      (0, H.R)(document, "touchend")
                    ).pipe((0, ht.P)())
                  )
                )
                .subscribe({
                  next: (t) =>
                    this.zone.run(() => {
                      this.handleMouseMove(t), this.cd.markForCheck();
                    }),
                  complete: () =>
                    this.zone.run(() => {
                      this.handleMouseUp(), this.cd.markForCheck();
                    }),
                });
            }
            startPinch(t) {
              !this.safeImgDataUrl ||
                (t.preventDefault && t.preventDefault(),
                (this.moveStart = Object.assign(
                  {
                    active: !0,
                    type: x.Pinch,
                    position: "center",
                    clientX:
                      this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
                    clientY:
                      this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2,
                  },
                  this.cropper
                )));
            }
            handleMouseMove(t) {
              var i, o;
              if (this.moveStart.active)
                if (
                  (t.stopPropagation && t.stopPropagation(),
                  t.preventDefault && t.preventDefault(),
                  this.moveStart.type === x.Move)
                )
                  this.cropperPositionService.move(
                    t,
                    this.moveStart,
                    this.cropper
                  ),
                    this.checkCropperPosition(!0);
                else if (this.moveStart.type === x.Resize)
                  !this.cropperStaticWidth &&
                    !this.cropperStaticHeight &&
                    this.cropperPositionService.resize(
                      t,
                      this.moveStart,
                      this.cropper,
                      this.maxSize,
                      this.settings
                    ),
                    this.checkCropperPosition(!1);
                else if (this.moveStart.type === x.Drag) {
                  const n =
                      this.cropperPositionService.getClientX(t) -
                      this.moveStart.clientX,
                    a =
                      this.cropperPositionService.getClientY(t) -
                      this.moveStart.clientY;
                  (this.transform = Object.assign(
                    Object.assign({}, this.transform),
                    {
                      translateH:
                        ((null === (i = this.moveStart.transform) ||
                        void 0 === i
                          ? void 0
                          : i.translateH) || 0) + n,
                      translateV:
                        ((null === (o = this.moveStart.transform) ||
                        void 0 === o
                          ? void 0
                          : o.translateV) || 0) + a,
                    }
                  )),
                    this.setCssTransform();
                }
            }
            onPinch(t) {
              this.moveStart.active &&
                (t.stopPropagation && t.stopPropagation(),
                t.preventDefault && t.preventDefault(),
                this.moveStart.type === x.Pinch &&
                  (this.cropperPositionService.resize(
                    t,
                    this.moveStart,
                    this.cropper,
                    this.maxSize,
                    this.settings
                  ),
                  this.checkCropperPosition(!1)),
                this.cd.markForCheck());
            }
            setMaxSize() {
              if (this.sourceImage) {
                const t = getComputedStyle(this.sourceImage.nativeElement);
                (this.maxSize.width = parseFloat(t.width)),
                  (this.maxSize.height = parseFloat(t.height)),
                  (this.marginLeft = this.sanitizer.bypassSecurityTrustStyle(
                    "calc(50% - " + this.maxSize.width / 2 + "px)"
                  ));
              }
            }
            setCropperScaledMinSize() {
              var t, i;
              (
                null ===
                  (i =
                    null === (t = this.loadedImage) || void 0 === t
                      ? void 0
                      : t.transformed) || void 0 === i
                  ? void 0
                  : i.image
              )
                ? (this.setCropperScaledMinWidth(),
                  this.setCropperScaledMinHeight())
                : ((this.settings.cropperScaledMinWidth = 20),
                  (this.settings.cropperScaledMinHeight = 20));
            }
            setCropperScaledMinWidth() {
              this.settings.cropperScaledMinWidth =
                this.cropperMinWidth > 0
                  ? Math.max(
                      20,
                      (this.cropperMinWidth /
                        this.loadedImage.transformed.image.width) *
                        this.maxSize.width
                    )
                  : 20;
            }
            setCropperScaledMinHeight() {
              this.settings.cropperScaledMinHeight = this.maintainAspectRatio
                ? Math.max(
                    20,
                    this.settings.cropperScaledMinWidth / this.aspectRatio
                  )
                : this.cropperMinHeight > 0
                ? Math.max(
                    20,
                    (this.cropperMinHeight /
                      this.loadedImage.transformed.image.height) *
                      this.maxSize.height
                  )
                : 20;
            }
            setCropperScaledMaxSize() {
              var t, i;
              if (
                null ===
                  (i =
                    null === (t = this.loadedImage) || void 0 === t
                      ? void 0
                      : t.transformed) || void 0 === i
                  ? void 0
                  : i.image
              ) {
                const o =
                  this.loadedImage.transformed.size.width / this.maxSize.width;
                (this.settings.cropperScaledMaxWidth =
                  this.cropperMaxWidth > 20
                    ? this.cropperMaxWidth / o
                    : this.maxSize.width),
                  (this.settings.cropperScaledMaxHeight =
                    this.cropperMaxHeight > 20
                      ? this.cropperMaxHeight / o
                      : this.maxSize.height),
                  this.maintainAspectRatio &&
                    (this.settings.cropperScaledMaxWidth >
                    this.settings.cropperScaledMaxHeight * this.aspectRatio
                      ? (this.settings.cropperScaledMaxWidth =
                          this.settings.cropperScaledMaxHeight *
                          this.aspectRatio)
                      : this.settings.cropperScaledMaxWidth <
                          this.settings.cropperScaledMaxHeight *
                            this.aspectRatio &&
                        (this.settings.cropperScaledMaxHeight =
                          this.settings.cropperScaledMaxWidth /
                          this.aspectRatio));
              } else
                (this.settings.cropperScaledMaxWidth = this.maxSize.width),
                  (this.settings.cropperScaledMaxHeight = this.maxSize.height);
            }
            checkCropperPosition(t = !1) {
              this.cropper.x1 < 0 &&
                ((this.cropper.x2 -= t ? this.cropper.x1 : 0),
                (this.cropper.x1 = 0)),
                this.cropper.y1 < 0 &&
                  ((this.cropper.y2 -= t ? this.cropper.y1 : 0),
                  (this.cropper.y1 = 0)),
                this.cropper.x2 > this.maxSize.width &&
                  ((this.cropper.x1 -= t
                    ? this.cropper.x2 - this.maxSize.width
                    : 0),
                  (this.cropper.x2 = this.maxSize.width)),
                this.cropper.y2 > this.maxSize.height &&
                  ((this.cropper.y1 -= t
                    ? this.cropper.y2 - this.maxSize.height
                    : 0),
                  (this.cropper.y2 = this.maxSize.height));
            }
            handleMouseUp() {
              var t;
              this.moveStart.active &&
                ((this.moveStart.active = !1),
                (null === (t = this.moveStart) || void 0 === t
                  ? void 0
                  : t.type) === x.Drag
                  ? this.transformChange.emit(this.transform)
                  : this.doAutoCrop());
            }
            pinchStop() {
              this.moveStart.active &&
                ((this.moveStart.active = !1), this.doAutoCrop());
            }
            doAutoCrop() {
              this.autoCrop && this.crop();
            }
            crop(t = this.settings.output) {
              var i, o;
              if (
                null !=
                (null ===
                  (o =
                    null === (i = this.loadedImage) || void 0 === i
                      ? void 0
                      : i.transformed) || void 0 === o
                  ? void 0
                  : o.image)
              ) {
                if ((this.startCropImage.emit(), "blob" === t))
                  return this.cropToBlob();
                if ("base64" === t) return this.cropToBase64();
              }
              return null;
            }
            cropToBlob() {
              return new Promise((t, i) =>
                this.zone.run(() =>
                  A(this, void 0, void 0, function* () {
                    const o = yield this.cropService.crop(
                      this.loadedImage,
                      this.cropper,
                      this.settings,
                      "blob",
                      this.maxSize
                    );
                    o
                      ? (this.imageCropped.emit(o), t(o))
                      : i("Crop image failed");
                  })
                )
              );
            }
            cropToBase64() {
              const t = this.cropService.crop(
                this.loadedImage,
                this.cropper,
                this.settings,
                "base64",
                this.maxSize
              );
              return t ? (this.imageCropped.emit(t), t) : null;
            }
            aspectRatioIsCorrect() {
              return (
                (this.cropper.x2 - this.cropper.x1) /
                  (this.cropper.y2 - this.cropper.y1) ===
                this.aspectRatio
              );
            }
          }
          return (
            (r.ɵfac = function (t) {
              return new (t || r)(
                e.Y36(bt),
                e.Y36(At),
                e.Y36(St),
                e.Y36(V.H7),
                e.Y36(e.sBO),
                e.Y36(e.R0b),
                e.Y36(V.vm, 8)
              );
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
              selectors: [["image-cropper"]],
              viewQuery: function (t, i) {
                if ((1 & t && (e.Gf(pt, 7), e.Gf(dt, 5)), 2 & t)) {
                  let o;
                  e.iGM((o = e.CRH())) && (i.wrapper = o.first),
                    e.iGM((o = e.CRH())) && (i.sourceImage = o.first);
                }
              },
              hostVars: 6,
              hostBindings: function (t, i) {
                1 & t &&
                  e.NdJ(
                    "resize",
                    function () {
                      return i.onResize();
                    },
                    !1,
                    e.Jf7
                  ),
                  2 & t &&
                    (e.Udp("text-align", i.alignImage),
                    e.ekj("disabled", i.disabled)("ngx-ix-hidden", i.hidden));
              },
              inputs: {
                imageChangedEvent: "imageChangedEvent",
                imageURL: "imageURL",
                imageBase64: "imageBase64",
                imageFile: "imageFile",
                imageAltText: "imageAltText",
                cropperFrameAriaLabel: "cropperFrameAriaLabel",
                output: "output",
                format: "format",
                transform: "transform",
                maintainAspectRatio: "maintainAspectRatio",
                aspectRatio: "aspectRatio",
                resetCropOnAspectRatioChange: "resetCropOnAspectRatioChange",
                resizeToWidth: "resizeToWidth",
                resizeToHeight: "resizeToHeight",
                cropperMinWidth: "cropperMinWidth",
                cropperMinHeight: "cropperMinHeight",
                cropperMaxHeight: "cropperMaxHeight",
                cropperMaxWidth: "cropperMaxWidth",
                cropperStaticWidth: "cropperStaticWidth",
                cropperStaticHeight: "cropperStaticHeight",
                canvasRotation: "canvasRotation",
                initialStepSize: "initialStepSize",
                roundCropper: "roundCropper",
                onlyScaleDown: "onlyScaleDown",
                imageQuality: "imageQuality",
                autoCrop: "autoCrop",
                backgroundColor: "backgroundColor",
                containWithinAspectRatio: "containWithinAspectRatio",
                hideResizeSquares: "hideResizeSquares",
                allowMoveImage: "allowMoveImage",
                cropper: "cropper",
                alignImage: "alignImage",
                disabled: "disabled",
                hidden: "hidden",
              },
              outputs: {
                imageCropped: "imageCropped",
                startCropImage: "startCropImage",
                imageLoaded: "imageLoaded",
                cropperReady: "cropperReady",
                loadImageFailed: "loadImageFailed",
                transformChange: "transformChange",
              },
              features: [e.TTD],
              decls: 5,
              vars: 10,
              consts: [
                ["wrapper", ""],
                [
                  "class",
                  "ngx-ic-source-image",
                  "role",
                  "presentation",
                  3,
                  "src",
                  "visibility",
                  "transform",
                  "ngx-ic-draggable",
                  "load",
                  "mousedown",
                  "touchstart",
                  "error",
                  4,
                  "ngIf",
                ],
                [1, "ngx-ic-overlay"],
                [
                  "class",
                  "ngx-ic-cropper",
                  "tabindex",
                  "0",
                  3,
                  "ngx-ic-round",
                  "top",
                  "left",
                  "width",
                  "height",
                  "margin-left",
                  "visibility",
                  "keydown",
                  4,
                  "ngIf",
                ],
                [
                  "role",
                  "presentation",
                  1,
                  "ngx-ic-source-image",
                  3,
                  "src",
                  "load",
                  "mousedown",
                  "touchstart",
                  "error",
                ],
                ["sourceImage", ""],
                ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"],
                [
                  "role",
                  "presentation",
                  1,
                  "ngx-ic-move",
                  3,
                  "mousedown",
                  "touchstart",
                ],
                [4, "ngIf"],
                [
                  "role",
                  "presentation",
                  1,
                  "ngx-ic-resize",
                  "ngx-ic-topleft",
                  3,
                  "mousedown",
                  "touchstart",
                ],
                [1, "ngx-ic-square"],
                [1, "ngx-ic-resize", "ngx-ic-top"],
                [
                  "role",
                  "presentation",
                  1,
                  "ngx-ic-resize",
                  "ngx-ic-topright",
                  3,
                  "mousedown",
                  "touchstart",
                ],
                [1, "ngx-ic-resize", "ngx-ic-right"],
                [
                  "role",
                  "presentation",
                  1,
                  "ngx-ic-resize",
                  "ngx-ic-bottomright",
                  3,
                  "mousedown",
                  "touchstart",
                ],
                [1, "ngx-ic-resize", "ngx-ic-bottom"],
                [
                  "role",
                  "presentation",
                  1,
                  "ngx-ic-resize",
                  "ngx-ic-bottomleft",
                  3,
                  "mousedown",
                  "touchstart",
                ],
                [1, "ngx-ic-resize", "ngx-ic-left"],
                [
                  "role",
                  "presentation",
                  1,
                  "ngx-ic-resize-bar",
                  "ngx-ic-top",
                  3,
                  "mousedown",
                  "touchstart",
                ],
                [
                  "role",
                  "presentation",
                  1,
                  "ngx-ic-resize-bar",
                  "ngx-ic-right",
                  3,
                  "mousedown",
                  "touchstart",
                ],
                [
                  "role",
                  "presentation",
                  1,
                  "ngx-ic-resize-bar",
                  "ngx-ic-bottom",
                  3,
                  "mousedown",
                  "touchstart",
                ],
                [
                  "role",
                  "presentation",
                  1,
                  "ngx-ic-resize-bar",
                  "ngx-ic-left",
                  3,
                  "mousedown",
                  "touchstart",
                ],
              ],
              template: function (t, i) {
                1 & t &&
                  (e.TgZ(0, "div", null, 0),
                  e.YNc(2, gt, 2, 8, "img", 1),
                  e._UZ(3, "div", 2),
                  e.YNc(4, ut, 3, 16, "div", 3),
                  e.qZA()),
                  2 & t &&
                    (e.Udp("background", i.imageVisible && i.backgroundColor),
                    e.xp6(2),
                    e.Q6J("ngIf", i.safeImgDataUrl),
                    e.xp6(1),
                    e.Udp("width", i.maxSize.width, "px")(
                      "height",
                      i.maxSize.height,
                      "px"
                    )(
                      "margin-left",
                      "center" === i.alignImage ? i.marginLeft : null
                    ),
                    e.xp6(1),
                    e.Q6J("ngIf", i.imageVisible));
              },
              directives: [b.O5],
              styles: [
                '[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image.ngx-ic-draggable[_ngcontent-%COMP%]{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{position:absolute;content:"";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{display:inline-block;background:#53535C;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{display:none}.ngx-ix-hidden[_nghost-%COMP%]{display:none}',
              ],
              changeDetection: 0,
            })),
            r
          );
        })(),
        Zt = (() => {
          class r {}
          return (
            (r.ɵfac = function (t) {
              return new (t || r)();
            }),
            (r.ɵmod = e.oAB({ type: r })),
            (r.ɵinj = e.cJS({ imports: [[b.ez]] })),
            r
          );
        })();
      var Q = m(845),
        Ot = m(9114);
      function It(r, s) {
        if (1 & r) {
          const t = e.EpF();
          e.TgZ(0, "div", 21),
            e.TgZ(1, "div", 22),
            e._UZ(2, "img", 23),
            e.TgZ(3, "div", 24),
            e.TgZ(4, "i", 25),
            e.NdJ("click", function (o) {
              const a = e.CHM(t).$implicit;
              return e.oxw().confirmdelete(o, a.avatarId);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const t = s.$implicit,
            i = e.oxw();
          e.xp6(2),
            e.Q6J("src", i.getFullImageUrl(t.avatarBase256ImagePath), e.LSH);
        }
      }
      const zt = function () {
          return { width: "50vw", height: "70vh" };
        },
        Et = function () {
          return { width: "40vw" };
        };
      let $ = (() => {
        class r {
          constructor(t, i, o, n) {
            (this.ngxLoader = t),
              (this.QuibService = i),
              (this.toastr = o),
              (this.confirmationService = n),
              (this.checked2 = !0),
              (this.allAvatars = []),
              (this.serverBaseUrl = "https://quibs.com/"),
              (this.display = !1),
              (this.imageChangedEvent = ""),
              (this.croppedImage = "");
          }
          ngOnInit() {
            (this.sidebarSpacing = "expanded"),
              (this.fgsType = T.aS.squareLoader),
              this.ngxLoader.start(),
              this.getAvatar();
          }
          confirmdelete(t, i) {
            this.confirmationService.confirm({
              target: t.target,
              message: "Are you sure that you want to delete this  Avatar?",
              icon: "pi pi-exclamation-triangle",
              accept: () => {
                this.deleteAvatar(i);
              },
              reject: () => {},
            });
          }
          getAvatar() {
            var t = this;
            return (0, w.Z)(function* () {
              t.ngxLoader.start(),
                (yield t.QuibService.getAvatar()).subscribe({
                  next: (i) => {
                    (t.allAvatars = i), t.ngxLoader.stop();
                  },
                  error: (i) => {
                    t.toastr.showError("Avatars could not be fetched", "Error"),
                      t.ngxLoader.stop();
                  },
                  complete: () => {},
                });
            })();
          }
          getFullImageUrl(t) {
            return this.serverBaseUrl + t;
          }
          deleteAvatar(t) {
            var i = this;
            return (0, w.Z)(function* () {
              (yield i.QuibService.deleteAvatar(t)).subscribe({
                next: (o) => {
                  i.getAvatar(),
                    i.toastr.showSuccess(
                      "Avatar deleted successfully",
                      "Success"
                    );
                },
                error: (o) => {
                  i.toastr.showError("Failed to delete Avatar", ""),
                    console.log(o);
                },
                complete: () => {},
              });
            })();
          }
          imageCropped(t) {
            this.croppedImage = t.blob;
            const i = this.imageChangedEvent.target.files[0];
            this.image = new File([this.croppedImage], i.name, {
              type: i.type,
            });
          }
          onChangeAvatar(t, i) {
            (this.image = t.target.files[0]),
              (this.imageChangedEvent = t),
              [".png", ".jpeg", ".jpg", ".gif"].some((o) =>
                this.image.name.endsWith(o)
              )
                ? (this.display = !0)
                : (this.resetForm(i),
                  this.toastr.showWarning(
                    "Extension must be of type jpeg, jpg, png or gif ",
                    "Invalid File extension"
                  ));
          }
          addAvatar(t) {
            var i = this;
            return (0, w.Z)(function* () {
              const o = new FormData();
              null != i.image
                ? (o.append("AvatarImage", i.image),
                  (yield i.QuibService.addAvatar(o)).subscribe({
                    next: (a) => {
                      i.getAvatar();
                    },
                    error: (a) => {
                      i.toastr.showError(
                        "Avatar Filename Already Exists",
                        "Duplicate Filename"
                      );
                    },
                    complete: () => {
                      i.resetForm(t);
                    },
                  }))
                : i.toastr.showWarning(
                    "File cannot be empty",
                    "Cannot Add Avatar"
                  );
            })();
          }
          resetForm(t) {
            (t.value = null), (this.image = null), (this.display = !1);
          }
          onToggleSidebar(t) {
            this.sidebarSpacing = "open" === t ? "contracted" : "expanded";
          }
        }
        return (
          (r.ɵfac = function (t) {
            return new (t || r)(
              e.Y36(T.LA),
              e.Y36(Z.V),
              e.Y36(O.$),
              e.Y36(I.YP)
            );
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-avatar"]],
            decls: 27,
            vars: 15,
            consts: [
              [3, "toggleSidebar"],
              [1, "body", "bcard", 3, "ngClass"],
              [1, "card", "col-sm-12", 2, "height", "100vh"],
              [1, "row", "gutters"],
              [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12"],
              [1, "h-100", "mt-0"],
              [1, "card-body"],
              ["name", "AvatarForm"],
              [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-12"],
              [1, "form-group"],
              ["for", "name", 1, "txt-style"],
              [
                "type",
                "file",
                "placeholder",
                "avatar",
                1,
                "form-control",
                3,
                "change",
              ],
              ["fileinput", ""],
              [
                "header",
                "Edit Avatar",
                3,
                "closable",
                "visible",
                "modal",
                "visibleChange",
              ],
              [
                3,
                "imageChangedEvent",
                "maintainAspectRatio",
                "aspectRatio",
                "imageCropped",
              ],
              [1, "text-center"],
              [
                "pButton",
                "",
                "type",
                "button",
                "id",
                "reset",
                "name",
                "reset",
                1,
                "p-button-danger",
                "mr-4",
                3,
                "click",
              ],
              [
                "pButton",
                "",
                "type",
                "button",
                "id",
                "submit",
                "name",
                "submit",
                1,
                "p-button-success",
                3,
                "click",
              ],
              [1, "txt-style"],
              ["class", "avatar", 4, "ngFor", "ngForOf"],
              [
                "header",
                "Confirmation",
                "position",
                "top",
                "icon",
                "pi pi-exclamation-triangle",
                3,
                "baseZIndex",
              ],
              [1, "avatar"],
              [1, "image-div"],
              [3, "src"],
              [1, "overlay-text"],
              [
                1,
                "pi",
                "pi-times",
                2,
                "color",
                "red",
                "font-weight",
                "bolder",
                3,
                "click",
              ],
            ],
            template: function (t, i) {
              if (1 & t) {
                const o = e.EpF();
                e.TgZ(0, "app-header", 0),
                  e.NdJ("toggleSidebar", function (a) {
                    return i.onToggleSidebar(a);
                  }),
                  e.qZA(),
                  e.TgZ(1, "div", 1),
                  e.TgZ(2, "div", 2),
                  e.TgZ(3, "div", 3),
                  e.TgZ(4, "div", 4),
                  e.TgZ(5, "div", 5),
                  e.TgZ(6, "div", 6),
                  e.TgZ(7, "form", 7),
                  e.TgZ(8, "div", 3),
                  e.TgZ(9, "div", 8),
                  e.TgZ(10, "div", 9),
                  e.TgZ(11, "label", 10),
                  e._uU(12, "Upload Image"),
                  e.qZA(),
                  e.TgZ(13, "input", 11, 12),
                  e.NdJ("change", function (a) {
                    e.CHM(o);
                    const c = e.MAs(14);
                    return i.onChangeAvatar(a, c);
                  }),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(15, "p-dialog", 13),
                  e.NdJ("visibleChange", function (a) {
                    return (i.display = a);
                  }),
                  e.TgZ(16, "image-cropper", 14),
                  e.NdJ("imageCropped", function (a) {
                    return i.imageCropped(a);
                  }),
                  e.qZA(),
                  e.TgZ(17, "div", 15),
                  e.TgZ(18, "button", 16),
                  e.NdJ("click", function () {
                    e.CHM(o);
                    const a = e.MAs(14);
                    return i.resetForm(a);
                  }),
                  e._uU(19, " Cancel "),
                  e.qZA(),
                  e.TgZ(20, "button", 17),
                  e.NdJ("click", function () {
                    e.CHM(o);
                    const a = e.MAs(14);
                    return i.addAvatar(a);
                  }),
                  e._uU(21, " Submit "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(22, "p", 18),
                  e._uU(23, "List of All Avatar Images"),
                  e.qZA(),
                  e.TgZ(24, "div", 3),
                  e.YNc(25, It, 5, 1, "div", 19),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e._UZ(26, "p-confirmDialog", 20),
                  e.qZA();
              }
              2 & t &&
                (e.xp6(1),
                e.Q6J("ngClass", i.sidebarSpacing),
                e.xp6(14),
                e.Akn(e.DdM(13, zt)),
                e.Q6J("closable", !1)("visible", i.display)("modal", !0),
                e.xp6(1),
                e.Q6J("imageChangedEvent", i.imageChangedEvent)(
                  "maintainAspectRatio",
                  !0
                )("aspectRatio", 1),
                e.xp6(9),
                e.Q6J("ngForOf", i.allAvatars),
                e.xp6(1),
                e.Akn(e.DdM(14, Et)),
                e.Q6J("baseZIndex", 1e4));
            },
            directives: [z.G, b.mk, u._Y, u.JL, u.F, J.V, Rt, Q.Hq, b.sg, Ot.Q],
            styles: [
              '.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#ccc;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:green}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px green}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(26px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}.avatar[_ngcontent-%COMP%]{height:150px;border-radius:5px}.txt-style[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif;font-size:18px}.image-div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{object-fit:cover;width:100%;max-height:100%}.image-div[_ngcontent-%COMP%]{position:relative;cursor:pointer;height:100px;width:80px}.image-div[_ngcontent-%COMP%]:hover{background-color:#333}.image-div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(50%)}.image-div[_ngcontent-%COMP%]:hover   .overlay-text[_ngcontent-%COMP%]{display:block}.overlay-text[_ngcontent-%COMP%]{position:absolute;top:0%;right:0%}.avatar[_ngcontent-%COMP%]{width:100px;height:100px;display:inline-block;vertical-align:top}',
            ],
          })),
          r
        );
      })();
      var q = m(2841),
        Ht = m(6697);
      function Ft(r, s) {
        1 & r &&
          (e.TgZ(0, "tr"),
          e.TgZ(1, "th"),
          e._uU(2, "Title"),
          e.qZA(),
          e.TgZ(3, "th"),
          e._uU(4, "Director"),
          e.qZA(),
          e.TgZ(5, "th"),
          e._uU(6, "Release Year"),
          e.qZA(),
          e.qZA());
      }
      function kt(r, s) {
        if (
          (1 & r &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.qZA(),
            e.qZA()),
          2 & r)
        ) {
          const t = s.$implicit;
          e.xp6(2),
            e.Oqu(t.title),
            e.xp6(2),
            e.Oqu(t.director),
            e.xp6(2),
            e.Oqu(t.releaseYear);
        }
      }
      let Bt = (() => {
        class r {
          constructor(t, i, o) {
            (this.ngxLoader = t),
              (this.QuibService = i),
              (this.toastr = o),
              (this.checked2 = !0),
              (this.RecommendedMovies = []);
          }
          ngOnInit() {
            (this.sidebarSpacing = "expanded"),
              (this.fgsType = T.aS.squareLoader),
              this.ngxLoader.start(),
              this.Getdisplay(),
              this.GetRecommendedMovies();
          }
          onToggleSidebar(t) {
            this.sidebarSpacing = "open" === t ? "contracted" : "expanded";
          }
          GetRecommendedMovies() {
            var t = this;
            return (0, w.Z)(function* () {
              t.ngxLoader.start(),
                (yield t.QuibService.GetRecommendedMovies()).subscribe({
                  next: (i) => {
                    (t.RecommendedMovies = i),
                      t.toastr.showSuccess(
                        "Recommended Movies fetched successfully",
                        "Movie"
                      ),
                      t.ngxLoader.stop();
                  },
                  error: (i) => {
                    t.toastr.showError(
                      "Failed to fetch Recommended Movies fetched",
                      "Movie"
                    ),
                      t.ngxLoader.stop();
                  },
                  complete: () => {},
                });
            })();
          }
          Getdisplay() {
            this.QuibService.Getdisplay().subscribe((t) => {
              this.checked = t.isVisible;
            });
          }
          DisplayRecommendedMovies() {
            this.QuibService.DisplayRecommendedMovies(this.checked).subscribe(
              (i) => {
                this.Getdisplay(),
                  this.toastr.showSuccess(
                    "Recommended Movies list status changed successfully",
                    "Recommended"
                  );
              }
            );
          }
        }
        return (
          (r.ɵfac = function (t) {
            return new (t || r)(e.Y36(T.LA), e.Y36(Z.V), e.Y36(O.$));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-recommended-movies"]],
            decls: 13,
            vars: 8,
            consts: [
              [3, "toggleSidebar"],
              [1, "body", "bcard", 3, "ngClass"],
              [1, "card", "col-sm-12", 2, "height", "100vh"],
              [1, "row", "gutters", "mt-2"],
              [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12"],
              [1, "txt-style"],
              [1, "text-right"],
              [
                "onLabel",
                "Hide\xa0R\xa0Movies",
                "offLabel",
                "Show\xa0R\xa0Movies",
                3,
                "ngModel",
                "ngModelChange",
                "click",
              ],
              [
                "id",
                "customerTable",
                "responsiveLayout",
                "scroll",
                "scrollHeight",
                "70vh",
                "columnResizeMode",
                "expand",
                "styleClass",
                "p-datatable-striped",
                3,
                "value",
                "paginator",
                "rows",
                "showCurrentPageReport",
                "resizableColumns",
                "responsive",
              ],
              ["pTemplate", "header"],
              ["pTemplate", "body"],
            ],
            template: function (t, i) {
              1 & t &&
                (e.TgZ(0, "app-header", 0),
                e.NdJ("toggleSidebar", function (n) {
                  return i.onToggleSidebar(n);
                }),
                e.qZA(),
                e.TgZ(1, "div", 1),
                e.TgZ(2, "div", 2),
                e.TgZ(3, "div", 3),
                e.TgZ(4, "div", 4),
                e.TgZ(5, "p", 5),
                e._uU(6, "All Recommended movies list !"),
                e.qZA(),
                e.qZA(),
                e.TgZ(7, "div", 4),
                e.TgZ(8, "div", 6),
                e.TgZ(9, "p-toggleButton", 7),
                e.NdJ("ngModelChange", function (n) {
                  return (i.checked = n);
                })("click", function () {
                  return i.DisplayRecommendedMovies();
                }),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(10, "p-table", 8),
                e.YNc(11, Ft, 7, 0, "ng-template", 9),
                e.YNc(12, kt, 7, 3, "ng-template", 10),
                e.qZA(),
                e.qZA(),
                e.qZA()),
                2 & t &&
                  (e.xp6(1),
                  e.Q6J("ngClass", i.sidebarSpacing),
                  e.xp6(8),
                  e.Q6J("ngModel", i.checked),
                  e.xp6(1),
                  e.Q6J("value", i.RecommendedMovies)("paginator", !0)(
                    "rows",
                    20
                  )("showCurrentPageReport", !0)("resizableColumns", !0)(
                    "responsive",
                    !0
                  ));
            },
            directives: [z.G, b.mk, q.CO, u.JJ, u.On, Ht.iA, I.jx],
            styles: [
              ".txt-style[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif;font-size:18px}",
            ],
          })),
          r
        );
      })();
      function Ut(r, s) {
        if (1 & r) {
          const t = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "textarea", 11),
            e.NdJ("ngModelChange", function (o) {
              return e.CHM(t), (e.oxw().tos = o);
            }),
            e._uU(2, "            "),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngModel", t.tos);
        }
      }
      const Qt = function () {
        return { width: "10em" };
      };
      function qt(r, s) {
        if (1 & r) {
          const t = e.EpF();
          e.TgZ(0, "p-toggleButton", 12),
            e.NdJ("ngModelChange", function (o) {
              return e.CHM(t), (e.oxw().checked2 = o);
            }),
            e.qZA();
        }
        if (2 & r) {
          const t = e.oxw();
          e.Akn(e.DdM(3, Qt)), e.Q6J("ngModel", t.checked2);
        }
      }
      function Lt(r, s) {
        if (1 & r) {
          const t = e.EpF();
          e.TgZ(0, "textarea", 13),
            e.NdJ("ngModelChange", function (o) {
              return e.CHM(t), (e.oxw().tos = o);
            }),
            e._uU(1, "            "),
            e.qZA(),
            e.TgZ(2, "div", 3),
            e.TgZ(3, "div", 7),
            e.TgZ(4, "div", 8),
            e.TgZ(5, "button", 14),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().cancelForm();
            }),
            e._uU(6, " Cancel "),
            e.qZA(),
            e.TgZ(7, "button", 15),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().submitForm();
            }),
            e._uU(8, " Submit "),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const t = e.oxw();
          e.Q6J("ngModel", t.tos);
        }
      }
      let Wt = (() => {
        class r {
          constructor(t, i, o) {
            (this.ngxLoader = t),
              (this.QuibService = i),
              (this.toastr = o),
              (this.checked2 = !0);
          }
          ngOnInit() {
            (this.sidebarSpacing = "expanded"),
              (this.fgsType = T.aS.squareLoader),
              this.ngxLoader.start(),
              this.getForm();
          }
          onToggleSidebar(t) {
            this.sidebarSpacing = "open" === t ? "contracted" : "expanded";
          }
          getForm() {
            var t = this;
            return (0, w.Z)(function* () {
              t.ngxLoader.start(),
                (yield t.QuibService.GetTos()).subscribe({
                  next: (i) => {
                    (t.tos = JSON.parse(i.tosText).TOSText),
                      console.log("Fetched Succesfully"),
                      t.ngxLoader.stop();
                  },
                  error: (i) => {
                    console.log(i),
                      console.log(i.error.message),
                      t.toastr.showError("Failed to fetch TOS", "TOS"),
                      t.ngxLoader.stop();
                  },
                  complete: () => {},
                });
            })();
          }
          cancelForm() {
            this.checked2 = !0;
          }
          submitForm() {
            var t = this;
            return (0, w.Z)(function* () {
              (yield t.QuibService.EditTos(t.tos)).subscribe({
                next: (i) => {
                  t.toastr.showSuccess("TOS Updated", "TOS");
                },
                error: (i) => {
                  t.toastr.showError("TOS failed to update", "TOS");
                },
                complete: () => {
                  t.cancelForm();
                },
              });
            })();
          }
        }
        return (
          (r.ɵfac = function (t) {
            return new (t || r)(e.Y36(T.LA), e.Y36(Z.V), e.Y36(O.$));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-tos"]],
            decls: 15,
            vars: 4,
            consts: [
              [3, "toggleSidebar"],
              [1, "body", "bcard", 3, "ngClass"],
              [1, "card", "col-sm-12", 2, "height", "100vh"],
              [1, "row", "gutters", "mt-2"],
              [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12"],
              [1, "txt-style"],
              [4, "ngIf", "ngIfElse"],
              [
                1,
                "col-xl-12",
                "col-lg-12",
                "col-md-12",
                "col-sm-12",
                "col-12",
                "mt-4",
              ],
              [1, "text-right"],
              [
                "onLabel",
                "Edit",
                3,
                "ngModel",
                "style",
                "ngModelChange",
                4,
                "ngIf",
              ],
              ["elseBlock", ""],
              [
                "id",
                "txt-style",
                "readonly",
                "",
                "rows",
                "12",
                "cols",
                "158",
                1,
                "txt-style",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["onLabel", "Edit", 3, "ngModel", "ngModelChange"],
              [
                "id",
                "TOS",
                "name",
                "TOS",
                "rows",
                "20",
                "cols",
                "20",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [
                "pButton",
                "",
                "type",
                "button",
                "id",
                "reset",
                "name",
                "reset",
                1,
                "p-button-danger",
                "mr-4",
                3,
                "click",
              ],
              [
                "pButton",
                "",
                "type",
                "button",
                "id",
                "submit",
                "name",
                "submit",
                1,
                "p-button-success",
                3,
                "click",
              ],
            ],
            template: function (t, i) {
              if (
                (1 & t &&
                  (e.TgZ(0, "app-header", 0),
                  e.NdJ("toggleSidebar", function (n) {
                    return i.onToggleSidebar(n);
                  }),
                  e.qZA(),
                  e.TgZ(1, "div", 1),
                  e.TgZ(2, "div", 2),
                  e.TgZ(3, "div", 3),
                  e.TgZ(4, "div", 4),
                  e.TgZ(5, "p", 5),
                  e._uU(6, "Terms And Service of Quib.... !"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e._UZ(7, "hr"),
                  e.YNc(8, Ut, 3, 1, "div", 6),
                  e.TgZ(9, "div", 3),
                  e.TgZ(10, "div", 7),
                  e.TgZ(11, "div", 8),
                  e.YNc(12, qt, 1, 4, "p-toggleButton", 9),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(13, Lt, 9, 1, "ng-template", null, 10, e.W1O),
                  e.qZA(),
                  e.qZA()),
                2 & t)
              ) {
                const o = e.MAs(14);
                e.xp6(1),
                  e.Q6J("ngClass", i.sidebarSpacing),
                  e.xp6(7),
                  e.Q6J("ngIf", i.checked2)("ngIfElse", o),
                  e.xp6(4),
                  e.Q6J("ngIf", i.checked2);
              }
            },
            directives: [z.G, b.mk, b.O5, u.Fj, u.JJ, u.On, q.CO, Q.Hq],
            styles: [
              ".txt-style[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif;font-size:18px;border-style:none;border-color:Transparent;overflow:auto}",
            ],
          })),
          r
        );
      })();
      var K = m(2368),
        Dt = m(4297);
      function jt(r, s) {
        if (1 & r) {
          const t = e.EpF();
          e.TgZ(0, "div", 20),
            e.TgZ(1, "div", 21),
            e.TgZ(2, "mat-slide-toggle", 22),
            e.NdJ("change", function (o) {
              const a = e.CHM(t).$implicit;
              return e.oxw().EditTooltipDisplay(a.buttonId, o);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(3, "p-card", 23),
            e._UZ(4, "p", 24),
            e.TgZ(5, "button", 25),
            e.NdJ("click", function () {
              const n = e.CHM(t).$implicit;
              return e.oxw().EditToolTips(n);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const t = s.$implicit,
            i = e.oxw();
          e.xp6(2),
            e.Q6J("color", i.color)("checked", !t.isDisabled)(
              "disabled",
              i.disabled
            ),
            e.xp6(1),
            e.s9C("header", t.buttonName),
            e.xp6(1),
            e.Q6J("innerHTML", t.tooltipText, e.oJD);
        }
      }
      const Jt = function () {
          return { width: "50vw", height: "50vh" };
        },
        Yt = [
          { path: "", component: $ },
          { path: "avatar", component: $ },
          { path: "recommended-movie", component: Bt },
          { path: "tos", component: Wt },
          {
            path: "tooltips",
            component: (() => {
              class r {
                constructor(t, i, o, n, a) {
                  (this.ngxLoader = t),
                    (this.QuibService = i),
                    (this.toastr = o),
                    (this.fb = n),
                    (this.confirmationService = a),
                    (this.allTooltips = []),
                    (this.display = !1),
                    (this.color = "primary"),
                    (this.disabled = !1),
                    (this.checked = !0),
                    (this.TooltipsForm = this.fb.group({
                      buttonId: ["", [u.kI.required]],
                      buttonName: ["", [u.kI.required]],
                      tooltipText: ["", [u.kI.required]],
                    }));
                }
                ngOnInit() {
                  (this.sidebarSpacing = "expanded"),
                    (this.fgsType = T.aS.squareLoader),
                    this.ngxLoader.start(),
                    this.getTooltips(),
                    this.GetTooltipDisplay();
                }
                onToggleSidebar(t) {
                  this.sidebarSpacing =
                    "open" === t ? "contracted" : "expanded";
                }
                getTooltips() {
                  var t = this;
                  return (0, w.Z)(function* () {
                    t.ngxLoader.start(),
                      (yield t.QuibService.GetTooltips()).subscribe({
                        next: (i) => {
                          (t.allTooltips = i), t.ngxLoader.stop();
                        },
                        error: (i) => {
                          t.ngxLoader.stop();
                        },
                        complete: () => {},
                      });
                  })();
                }
                onSubmit() {
                  var t = this;
                  return (0, w.Z)(function* () {
                    (yield t.QuibService.EditTooltip(
                      t.TooltipsForm.controls.buttonId.value,
                      t.TooltipsForm.controls.tooltipText.value,
                      t.TooltipsForm.controls.buttonName.value
                    )).subscribe({
                      next: (i) => {
                        t.toastr.showSuccess("Tooltip Updated", "TOS");
                      },
                      error: (i) => {
                        t.toastr.showError("Tooltip failed to update", "TOS");
                      },
                      complete: () => {
                        t.getTooltips(), (t.display = !1);
                      },
                    });
                  })();
                }
                EditToolTips(t) {
                  (this.display = !0),
                    this.TooltipsForm.get("buttonName").setValue(t.buttonName),
                    this.TooltipsForm.get("tooltipText").setValue(
                      t.tooltipText
                    ),
                    this.TooltipsForm.get("buttonId").setValue(t.buttonId);
                }
                GetTooltipDisplay() {
                  this.QuibService.GetTooltipDisplay().subscribe((t) => {
                    this.checked2 = t.isVisible;
                  });
                }
                DisplayAllTooltips() {
                  this.QuibService.DisplayTooltips(this.checked2).subscribe(
                    (i) => {
                      this.GetTooltipDisplay(),
                        this.toastr.showSuccess(
                          "Tooltip status changed successfully",
                          "Tooltips"
                        );
                    }
                  );
                }
                EditTooltipDisplay(t, i) {
                  var o = this;
                  return (0, w.Z)(function* () {
                    const n = i.checked;
                    yield o.QuibService.EditTooltipDisplay(t, !n).subscribe({
                      next: (a) => {
                        console.log(a),
                          n
                            ? o.toastr.showSuccess("Tooltip enabled", "Tooltip")
                            : o.toastr.showWarning(
                                "Tooltip disabled",
                                "Tooltip"
                              );
                      },
                      error: (a) => {
                        console.log(a),
                          o.toastr.showError(
                            "There was a problem updating tooltip display",
                            "Error"
                          );
                      },
                      complete: () => {},
                    });
                  })();
                }
              }
              return (
                (r.ɵfac = function (t) {
                  return new (t || r)(
                    e.Y36(T.LA),
                    e.Y36(Z.V),
                    e.Y36(O.$),
                    e.Y36(u.qu),
                    e.Y36(I.YP)
                  );
                }),
                (r.ɵcmp = e.Xpm({
                  type: r,
                  selectors: [["app-tooltips"]],
                  features: [e._Bn([I.YP])],
                  decls: 32,
                  vars: 9,
                  consts: [
                    [3, "toggleSidebar"],
                    [1, "body", "bcard", 3, "ngClass"],
                    [1, "row", "gutters"],
                    [
                      1,
                      "col-xl-12",
                      "col-lg-12",
                      "col-md-12",
                      "col-sm-12",
                      "col-12",
                    ],
                    [
                      1,
                      "col-xl-6",
                      "col-lg-6",
                      "col-md-6",
                      "col-sm-6",
                      "col-12",
                    ],
                    [1, "txt-style"],
                    [1, "text-right"],
                    [
                      "onLabel",
                      "Hide\xa0Tooltips",
                      "offLabel",
                      "Show\xa0Tooltips",
                      3,
                      "ngModel",
                      "ngModelChange",
                      "click",
                    ],
                    [
                      "class",
                      "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 tooltipcontainer",
                      4,
                      "ngFor",
                      "ngForOf",
                    ],
                    [
                      "header",
                      "Edit tooltips",
                      3,
                      "visible",
                      "modal",
                      "visibleChange",
                    ],
                    [3, "formGroup"],
                    [1, "h-100", "mt-0"],
                    [1, "card-body"],
                    [1, "form-group"],
                    [
                      "type",
                      "text",
                      "placeholder",
                      "heading",
                      "formControlName",
                      "buttonName",
                      1,
                      "form-control",
                    ],
                    [
                      "type",
                      "text",
                      "placeholder",
                      "tooltip text",
                      "formControlName",
                      "tooltipText",
                      1,
                      "form-control",
                    ],
                    [1, "row", "gutters", "mt-4"],
                    [
                      1,
                      "col-xl-12",
                      "col-lg-12",
                      "col-md-12",
                      "col-sm-12",
                      "col-12",
                      "mt-4",
                    ],
                    [
                      "pButton",
                      "",
                      "type",
                      "button",
                      "id",
                      "submit",
                      "name",
                      "submit",
                      1,
                      "p-button-danger",
                      "mr-4",
                      3,
                      "click",
                    ],
                    [
                      "pButton",
                      "",
                      "type",
                      "button",
                      "id",
                      "submit",
                      "name",
                      "submit",
                      1,
                      "p-button-success",
                      3,
                      "click",
                    ],
                    [
                      1,
                      "col-xl-6",
                      "col-lg-6",
                      "col-md-6",
                      "col-sm-6",
                      "col-12",
                      "tooltipcontainer",
                    ],
                    [1, "text-right", 2, "transform", "translate(-1%,6vh)"],
                    [3, "color", "checked", "disabled", "change"],
                    [3, "header"],
                    ["id", "txt-style", 1, "txt-style", 3, "innerHTML"],
                    [
                      "pButton",
                      "",
                      "type",
                      "button",
                      "label",
                      "Edit",
                      1,
                      "p-button-secondary",
                      3,
                      "click",
                    ],
                  ],
                  template: function (t, i) {
                    1 & t &&
                      (e.TgZ(0, "app-header", 0),
                      e.NdJ("toggleSidebar", function (n) {
                        return i.onToggleSidebar(n);
                      }),
                      e.qZA(),
                      e.TgZ(1, "div", 1),
                      e.TgZ(2, "div", 2),
                      e.TgZ(3, "div", 3),
                      e.TgZ(4, "div", 2),
                      e.TgZ(5, "div", 4),
                      e.TgZ(6, "p", 5),
                      e._uU(7, "A list of all the Tooltips!"),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(8, "div", 4),
                      e.TgZ(9, "div", 6),
                      e.TgZ(10, "p-toggleButton", 7),
                      e.NdJ("ngModelChange", function (n) {
                        return (i.checked2 = n);
                      })("click", function () {
                        return i.DisplayAllTooltips();
                      }),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.YNc(11, jt, 6, 5, "div", 8),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(12, "p-dialog", 9),
                      e.NdJ("visibleChange", function (n) {
                        return (i.display = n);
                      }),
                      e.TgZ(13, "form", 10),
                      e.TgZ(14, "div", 2),
                      e.TgZ(15, "div", 3),
                      e.TgZ(16, "div", 11),
                      e.TgZ(17, "div", 12),
                      e.TgZ(18, "div", 2),
                      e.TgZ(19, "div", 4),
                      e.TgZ(20, "div", 13),
                      e._UZ(21, "input", 14),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(22, "div", 4),
                      e.TgZ(23, "div", 13),
                      e._UZ(24, "input", 15),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(25, "div", 16),
                      e.TgZ(26, "div", 17),
                      e.TgZ(27, "div", 6),
                      e.TgZ(28, "button", 18),
                      e.NdJ("click", function () {
                        return (i.display = !1);
                      }),
                      e._uU(29, " Cancel "),
                      e.qZA(),
                      e.TgZ(30, "button", 19),
                      e.NdJ("click", function () {
                        return i.onSubmit();
                      }),
                      e._uU(31, " Submit "),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA(),
                      e.qZA()),
                      2 & t &&
                        (e.xp6(1),
                        e.Q6J("ngClass", i.sidebarSpacing),
                        e.xp6(9),
                        e.Q6J("ngModel", i.checked2),
                        e.xp6(1),
                        e.Q6J("ngForOf", i.allTooltips),
                        e.xp6(1),
                        e.Akn(e.DdM(8, Jt)),
                        e.Q6J("visible", i.display)("modal", !0),
                        e.xp6(1),
                        e.Q6J("formGroup", i.TooltipsForm));
                  },
                  directives: [
                    z.G,
                    b.mk,
                    q.CO,
                    u.JJ,
                    u.On,
                    b.sg,
                    K.Rr,
                    Dt.Z,
                    Q.Hq,
                    J.V,
                    u._Y,
                    u.JL,
                    u.sg,
                    u.Fj,
                    u.u,
                  ],
                  styles: [
                    ".txt-style[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif;font-size:18px}.tooltipcontainer[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;margin-top:5px}",
                  ],
                })),
                r
              );
            })(),
          },
        ];
      let Pt = (() => {
        class r {}
        return (
          (r.ɵfac = function (t) {
            return new (t || r)();
          }),
          (r.ɵmod = e.oAB({ type: r })),
          (r.ɵinj = e.cJS({ imports: [[j.Bz.forChild(Yt)], j.Bz] })),
          r
        );
      })();
      var Nt = m(5366);
      let Vt = (() => {
        class r {}
        return (
          (r.ɵfac = function (t) {
            return new (t || r)();
          }),
          (r.ɵmod = e.oAB({ type: r })),
          (r.ɵinj = e.cJS({ imports: [[b.ez, Nt.m, Pt, K.rP, Zt]] })),
          r
        );
      })();
    },
  },
]);
