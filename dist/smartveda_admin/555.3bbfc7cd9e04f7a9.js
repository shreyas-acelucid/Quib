"use strict";
(self.webpackChunkAdmin_Panel = self.webpackChunkAdmin_Panel || []).push([
  [555],
  {
    1555: (gt, k, d) => {
      d.r(k), d.d(k, { MoviesModule: () => ct });
      var _ = d(9808),
        T = d(4521),
        h = d(8441),
        l = d(3075),
        v = d(9783),
        e = d(5e3),
        U = d(2866),
        b = d(7650),
        D = d(7673),
        I = d(7398),
        Z = d(6697),
        J = d(1424),
        S = d(6526),
        A = d(845),
        q = d(4119),
        M = d(5315),
        P = d(7446),
        C = d(9114);
      const F = ["ActiveMovieTable"];
      function H(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "span", 38),
            e.TgZ(1, "h2", 39),
            e._uU(2, "Active Movies"),
            e.qZA(),
            e.qZA(),
            e.TgZ(3, "div", 40),
            e.TgZ(4, "span", 38),
            e._UZ(5, "i", 41),
            e.TgZ(6, "input", 42),
            e.NdJ("input", function (i) {
              return e.CHM(t), e.oxw().FilterGlobal(i, "contains");
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "div", 38),
            e.TgZ(8, "form", 11),
            e._UZ(9, "p-multiSelect", 43),
            e.TgZ(10, "button", 44),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().SelectRequestedColumns();
            }),
            e._uU(11, "Submit"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(6),
            e.Q6J("value", t.MovieSearchKeyWord.Gsearch),
            e.xp6(2),
            e.Q6J("formGroup", t.columnSelectorForm),
            e.xp6(1),
            e.Q6J("options", t.colsOptions)("virtualScroll", !0);
        }
      }
      function Q(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "th", 49), e._uU(1), e._UZ(2, "p-sortIcon", 50), e.qZA()),
          2 & n)
        ) {
          const t = r.$implicit;
          e.Q6J("pSortableColumn", t.field),
            e.xp6(1),
            e.hij("", t.headers, " "),
            e.xp6(1),
            e.Q6J("field", t.field);
        }
      }
      function Y(n, r) {
        1 & n && e._UZ(0, "th", 45);
      }
      function R(n, r) {
        if (
          (1 & n &&
            (e.ynx(0),
            e._UZ(1, "th", 45),
            e.YNc(2, Y, 1, 0, "th", 51),
            e._UZ(3, "th", 45),
            e.BQk()),
          2 & n)
        ) {
          const t = e.oxw(2);
          e.xp6(2), e.Q6J("ngForOf", t.cols);
        }
      }
      function L(n, r) {
        1 & n && e._UZ(0, "th", 45);
      }
      function E(n, r) {
        if (
          (1 & n &&
            (e._UZ(0, "th", 45),
            e.YNc(1, L, 1, 0, "th", 51),
            e._UZ(2, "th", 45)),
          2 & n)
        ) {
          const t = e.oxw(2);
          e.xp6(1), e.Q6J("ngForOf", t.filteredCols);
        }
      }
      function W(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "th", 45),
            e._uU(2, "S.no"),
            e.qZA(),
            e.YNc(3, Q, 3, 3, "th", 46),
            e.TgZ(4, "th"),
            e._uU(5, "Options"),
            e.qZA(),
            e.qZA(),
            e.TgZ(6, "tr"),
            e.YNc(7, R, 4, 1, "ng-container", 47),
            e.qZA(),
            e.YNc(8, E, 3, 1, "ng-template", null, 48, e.W1O)),
          2 & n)
        ) {
          const t = e.MAs(9),
            o = e.oxw();
          e.xp6(3),
            e.Q6J(
              "ngForOf",
              0 == o.filteredCols.length ? o.cols : o.filteredCols
            ),
            e.xp6(4),
            e.Q6J("ngIf", 0 === o.filteredCols.length)("ngIfElse", t);
        }
      }
      function B(n, r) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1), e.Oqu(null == t ? null : t.title);
        }
      }
      function K(n, r) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1), e.Oqu(null == t ? null : t.director);
        }
      }
      function j(n, r) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1), e.Oqu(null == t ? null : t.releaseYear);
        }
      }
      function G(n, r) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1),
            e.lnq(
              "",
              null == t ? null : t.HH,
              ":",
              null == t ? null : t.MM,
              ":",
              null == t ? null : t.SS,
              ""
            );
        }
      }
      function z(n, r) {
        1 & n &&
          (e.TgZ(0, "td"),
          e.TgZ(1, "button", 55),
          e._uU(2, "Active"),
          e.qZA(),
          e.qZA());
      }
      function $(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.YNc(3, B, 2, 1, "td", 52),
            e.YNc(4, K, 2, 1, "td", 52),
            e.YNc(5, j, 2, 1, "td", 52),
            e.YNc(6, G, 2, 3, "td", 52),
            e.YNc(7, z, 3, 0, "td", 52),
            e.TgZ(8, "td"),
            e.TgZ(9, "div", 53),
            e.TgZ(10, "button", 54),
            e.NdJ("click", function () {
              const s = e.CHM(t).$implicit;
              return e.oxw().deleteMovies(null == s ? null : s.id);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = r.rowIndex,
            o = e.oxw();
          e.xp6(2),
            e.Oqu(t + 1),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Movie title")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Director")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Release Year")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Length")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Is Active"));
        }
      }
      function X(n, r) {
        1 & n &&
          (e.TgZ(0, "tr"),
          e.TgZ(1, "td", 56),
          e._uU(2, " No Records Found. "),
          e.qZA(),
          e.qZA());
      }
      function V(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 17),
            e.TgZ(1, "div", 18),
            e._UZ(2, "img", 57),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(2), e.Q6J("src", t.imageUrl, e.LSH);
        }
      }
      const ee = function () {
          return [20, 50, 100];
        },
        te = function () {
          return ["title", "length", "isActive", "director", "releaseYear"];
        },
        oe = function () {
          return { width: "60vw", height: "100vh" };
        },
        ie = function () {
          return { width: "40vw" };
        };
      let ne = (() => {
        class n {
          constructor(t, o, i, s, c, a) {
            (this.ngxLoader = t),
              (this.MoviesService = o),
              (this.toastr = i),
              (this.CommonService = s),
              (this.confirmationService = c),
              (this.fb = a),
              (this.moviesList = []),
              (this.display = !1),
              (this.columnSelectorForm = new l.cw({})),
              (this.selectedColumns = []),
              (this.filteredCols = []),
              (this.colsOptions = []),
              (this.ActiveMoviesForm = this.fb.group({
                Director: ["", [l.kI.required]],
                File: ["", [l.kI.required]],
                IsActive: ["", [l.kI.required]],
                releaseYear: ["", [l.kI.required]],
                Length: ["", [l.kI.required]],
                PosterContent: ["", [l.kI.required]],
                PosterContentThumb: ["", [l.kI.required]],
                Title: ["", [l.kI.required]],
                hours: ["", [l.kI.required]],
                minutes: ["", [l.kI.required]],
                seconds: ["", [l.kI.required]],
                Rating: ["", [l.kI.required]],
              }));
          }
          ngOnInit() {
            (this.sidebarSpacing = "expanded"),
              (this.fgsType = h.aS.squareLoader),
              this.ngxLoader.start(),
              (this.cols = [
                { field: "title", show: !0, headers: "Movie title" },
                { field: "director", show: !0, headers: "Director" },
                { field: "releaseyear", show: !0, headers: "Release Year" },
                { field: "length", show: !0, headers: "Length" },
                { field: "isActive", show: !0, headers: "Is Active" },
              ]),
              (this.colsOptions = this.cols.map((t) => ({
                label: t.headers,
                value: t.field,
              }))),
              this.MoviesService.MovieSearchKeyWord.subscribe((t) => {
                this.MovieSearchKeyWord = t;
              }),
              this.getMovieList(),
              (this.columnSelectorForm = this.fb.group({
                selectedColumns: new l.NI([]),
              }));
          }
          SelectRequestedColumns() {
            (this.selectedColumns =
              this.columnSelectorForm.controls.selectedColumns.value),
              (this.filteredCols = this.cols
                .filter((t) =>
                  this.selectedColumns.some((o) => o.value === t.field)
                )
                .map((t) => ({ headers: t.headers })));
          }
          onToggleSidebar(t) {
            this.sidebarSpacing = "open" === t ? "contracted" : "expanded";
          }
          shouldDisplayColumn(t) {
            return (
              0 === this.filteredCols.length ||
              this.filteredCols.some((o) => o.headers === t)
            );
          }
          getMovieList() {
            this.MoviesService.getMovieList().subscribe((t) => {
              (this.moviesList = t.filter((o) => !0 === o.isActive)),
                this.moviesList.map((o) => {
                  (o.HH = this.CommonService.consverIntoHHMMSS(o.length).HH),
                    (o.MM = this.CommonService.consverIntoHHMMSS(o.length).MM),
                    (o.SS = this.CommonService.consverIntoHHMMSS(o.length).SS);
                }),
                this.activeMovieSearch(),
                this.ngxLoader.stop();
            });
          }
          applyFilterGlobal(t, o) {
            switch (t.target.id) {
              case "title":
                (this.MovieSearchKeyWord.title = t.target.value),
                  this.ActiveMovieTable.filter(t.target.value, t.target.id, o);
                break;
              case "director":
                (this.MovieSearchKeyWord.director = t.target.value),
                  this.ActiveMovieTable.filter(t.target.value, t.target.id, o);
                break;
              case "releaseYear":
                (this.MovieSearchKeyWord.releaseYear = t.target.value),
                  this.ActiveMovieTable.filter(t.target.value, t.target.id, o);
                break;
              case "length":
                (this.MovieSearchKeyWord.length = t.target.value),
                  this.ActiveMovieTable.filter(t.target.value, t.target.id, o);
            }
          }
          EditMovies(t) {
            let o = this.moviesList.filter((i) => i.id === t);
            this.ActiveMoviesForm.patchValue({
              Director: o[0].director,
              Title: o[0].title,
            }),
              (this.display = !0);
          }
          AddMovies() {
            this.ActiveMoviesForm.reset(), (this.display = !0);
          }
          OnChange(t) {
            this.image = t.target.files;
            var o = new FileReader();
            o.readAsDataURL(t.target.files[0]),
              (o.onload = (i) => {
                this.imageUrl = i.target.result;
              });
          }
          deleteMovies(t) {
            this.confirmationService.confirm({
              message: "Are you sure that you want to delete Active Movies ?",
              header: "Confirmation",
              icon: "pi pi-exclamation-triangle",
              accept: () => {
                this.ngxLoader.start(),
                  this.MoviesService.deleteMovies(t).subscribe((o) => {
                    this.getMovieList();
                  });
              },
            });
          }
          ngOnDestroy() {
            this.MoviesService.MovieSearchKeyWord.next(this.MovieSearchKeyWord),
              this.CommonService.setMovieSerachWord(this.MovieSearchKeyWord);
          }
          activeMovieSearch() {
            null != this.MovieSearchKeyWord.title &&
              this.MovieSearchKeyWord.title.trim().length > 0 &&
              this.ActiveMovieTable.filter(
                this.MovieSearchKeyWord.title,
                "title",
                "contains"
              ),
              null != this.MovieSearchKeyWord.director &&
                this.MovieSearchKeyWord.director.trim().length > 0 &&
                this.ActiveMovieTable.filter(
                  this.MovieSearchKeyWord.director,
                  "director",
                  "contains"
                ),
              null != this.MovieSearchKeyWord.releaseYear &&
                this.MovieSearchKeyWord.releaseYear.trim().length > 0 &&
                this.ActiveMovieTable.filter(
                  this.MovieSearchKeyWord.releaseYear,
                  "releaseYear",
                  "contains"
                ),
              null != this.MovieSearchKeyWord.length &&
                this.MovieSearchKeyWord.length.trim().length > 0 &&
                this.ActiveMovieTable.filter(
                  this.MovieSearchKeyWord.length,
                  "length",
                  "contains"
                ),
              null != this.MovieSearchKeyWord.Gsearch &&
                this.MovieSearchKeyWord.Gsearch.trim().length > 0 &&
                this.ActiveMovieTable.filterGlobal(
                  this.MovieSearchKeyWord.Gsearch,
                  "contains"
                );
          }
          FilterGlobal(t, o) {
            (this.MovieSearchKeyWord.Gsearch = t.target.value),
              this.ActiveMovieTable.filterGlobal(t.target.value, o);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.Y36(h.LA),
              e.Y36(U.I),
              e.Y36(b.$),
              e.Y36(D.v),
              e.Y36(v.YP),
              e.Y36(l.qu)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-active-movies"]],
            viewQuery: function (t, o) {
              if ((1 & t && e.Gf(F, 5), 2 & t)) {
                let i;
                e.iGM((i = e.CRH())) && (o.ActiveMovieTable = i.first);
              }
            },
            features: [e._Bn([v.YP])],
            decls: 71,
            vars: 31,
            consts: [
              [3, "toggleSidebar"],
              [1, "body", "bcard", 3, "ngClass"],
              [1, "card", "col-sm-12", 2, "border", "none"],
              [
                "id",
                "customerTable",
                "columnResizeMode",
                "expand",
                "responsiveLayout",
                "scroll",
                "dataKey",
                "id",
                "stateStorage",
                "session",
                "stateKey",
                "activeMovie-session",
                "currentPageReportTemplate",
                "Showing {first} to {last} of {totalRecords} entries",
                "styleClass",
                "p-datatable-striped",
                3,
                "columns",
                "resizableColumns",
                "paginator",
                "rows",
                "rowsPerPageOptions",
                "showCurrentPageReport",
                "value",
                "responsive",
                "globalFilterFields",
              ],
              ["ActiveMovieTable", ""],
              ["pTemplate", "caption"],
              ["pTemplate", "header"],
              ["pTemplate", "body"],
              ["pTemplate", "emptymessage"],
              [3, "fgsColor", "fgsType"],
              [
                "header",
                "Add Movies",
                "position",
                "top",
                3,
                "visible",
                "modal",
                "baseZIndex",
                "visibleChange",
              ],
              [3, "formGroup"],
              [1, "card", "col-sm-12"],
              [1, "row", "gutters"],
              [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12"],
              [1, "h-100", "mt-5"],
              [1, "card-body"],
              [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12"],
              [1, "form-group"],
              ["for", "name"],
              ["type", "text", "formControlName", "Title", 1, "form-control"],
              ["for", "image"],
              [
                "type",
                "text",
                "formControlName",
                "Director",
                1,
                "form-control",
              ],
              ["for", "Name"],
              [
                "type",
                "date",
                "formControlName",
                "releaseYear",
                1,
                "form-control",
              ],
              ["for", "type", "id", "label"],
              [
                "formControlName",
                "Rating",
                "placeholder",
                "Select Rating",
                1,
                "form-control",
              ],
              [3, "value"],
              [1, "example-section"],
              [1, "example-margin"],
              ["type", "file", 1, "form-control", 3, "change"],
              [
                "class",
                "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",
                4,
                "ngIf",
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
              [1, "text-right"],
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
              ],
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
              [1, "p-input-icon-right", "ml-5"],
              [2, "font-family", "'Times New Roman', Times, serif"],
              [1, "row"],
              [1, "pi", "pi-search"],
              [
                "pInputText",
                "",
                "type",
                "text",
                "placeholder",
                "Search by columnName",
                3,
                "value",
                "input",
              ],
              [
                "optionLabel",
                "label",
                "formControlName",
                "selectedColumns",
                "display",
                "chip",
                "defaultLabel",
                "Select Columns to display",
                3,
                "options",
                "virtualScroll",
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
                "p-button-primary",
                2,
                "margin-left",
                "8px",
                "margin-bottom",
                "6.7px",
                "height",
                "30px",
                3,
                "click",
              ],
              ["pResizableColumn", ""],
              [
                "pResizableColumn",
                "",
                3,
                "pSortableColumn",
                4,
                "ngFor",
                "ngForOf",
              ],
              [4, "ngIf", "ngIfElse"],
              ["colsTemplate", ""],
              ["pResizableColumn", "", 3, "pSortableColumn"],
              [3, "field"],
              ["pResizableColumn", "", 4, "ngFor", "ngForOf"],
              [4, "ngIf"],
              [1, "btn-grp"],
              [
                "pButton",
                "",
                "type",
                "button",
                "icon",
                "pi pi-trash",
                "pTooltip",
                "Delete movie",
                "tooltipPosition",
                "bottom",
                1,
                "p-button-danger",
                2,
                "margin-right",
                "5px",
                3,
                "click",
              ],
              [
                "pButton",
                "",
                "type",
                "button",
                1,
                "p-button-success",
                2,
                "height",
                "30px",
              ],
              [
                "colspan",
                "12",
                1,
                "text-center",
                "text-danger",
                "font-weight-700",
              ],
              [
                1,
                "form-control",
                2,
                "width",
                "80%",
                "height",
                "10vh",
                3,
                "src",
              ],
            ],
            template: function (t, o) {
              1 & t &&
                (e.TgZ(0, "app-header", 0),
                e.NdJ("toggleSidebar", function (s) {
                  return o.onToggleSidebar(s);
                }),
                e.qZA(),
                e.TgZ(1, "div", 1),
                e.TgZ(2, "div", 2),
                e.TgZ(3, "p-table", 3, 4),
                e.YNc(5, H, 12, 4, "ng-template", 5),
                e.YNc(6, W, 10, 3, "ng-template", 6),
                e.YNc(7, $, 11, 6, "ng-template", 7),
                e.YNc(8, X, 3, 0, "ng-template", 8),
                e.qZA(),
                e._UZ(9, "ngx-ui-loader", 9),
                e.qZA(),
                e.TgZ(10, "p-dialog", 10),
                e.NdJ("visibleChange", function (s) {
                  return (o.display = s);
                }),
                e.TgZ(11, "form", 11),
                e.TgZ(12, "div", 12),
                e.TgZ(13, "div", 13),
                e.TgZ(14, "div", 14),
                e.TgZ(15, "div", 15),
                e.TgZ(16, "div", 16),
                e.TgZ(17, "div", 13),
                e.TgZ(18, "div", 17),
                e.TgZ(19, "div", 18),
                e.TgZ(20, "label", 19),
                e._uU(21, "Title"),
                e.qZA(),
                e._UZ(22, "input", 20),
                e.qZA(),
                e.qZA(),
                e.TgZ(23, "div", 17),
                e.TgZ(24, "div", 18),
                e.TgZ(25, "label", 21),
                e._uU(26, "Director "),
                e.qZA(),
                e._UZ(27, "input", 22),
                e.qZA(),
                e.qZA(),
                e.TgZ(28, "div", 17),
                e.TgZ(29, "div", 18),
                e.TgZ(30, "label", 23),
                e._uU(31, "Release Year"),
                e.qZA(),
                e._UZ(32, "input", 24),
                e.qZA(),
                e.qZA(),
                e.TgZ(33, "div", 17),
                e.TgZ(34, "div", 13),
                e.TgZ(35, "div", 17),
                e.TgZ(36, "label", 25),
                e._uU(37, "Rating"),
                e.qZA(),
                e.TgZ(38, "div", 18),
                e.TgZ(39, "select", 26),
                e.TgZ(40, "option", 27),
                e._uU(41, "1"),
                e.qZA(),
                e.TgZ(42, "option", 27),
                e._uU(43, "2"),
                e.qZA(),
                e.TgZ(44, "option", 27),
                e._uU(45, "3"),
                e.qZA(),
                e.TgZ(46, "option", 27),
                e._uU(47, "5"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(48, "div", 17),
                e.TgZ(49, "section", 28),
                e.TgZ(50, "mat-checkbox", 29),
                e._uU(51, "Enabled"),
                e.qZA(),
                e.qZA(),
                e.TgZ(52, "section", 28),
                e.TgZ(53, "mat-checkbox", 29),
                e._uU(54, "Featured"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(55, "div", 17),
                e.TgZ(56, "div", 13),
                e.TgZ(57, "div", 17),
                e.TgZ(58, "div", 18),
                e.TgZ(59, "label", 23),
                e._uU(60, "Movies Poster"),
                e.qZA(),
                e.TgZ(61, "input", 30),
                e.NdJ("change", function (s) {
                  return o.OnChange(s);
                }),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.YNc(62, V, 3, 1, "div", 31),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(63, "div", 32),
                e.TgZ(64, "div", 33),
                e.TgZ(65, "div", 34),
                e.TgZ(66, "button", 35),
                e.NdJ("click", function () {
                  return (o.display = !1);
                }),
                e._uU(67, "Cancel"),
                e.qZA(),
                e.TgZ(68, "button", 36),
                e._uU(69, "Submit"),
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
                e.qZA(),
                e._UZ(70, "p-confirmDialog", 37),
                e.qZA()),
                2 & t &&
                  (e.xp6(1),
                  e.Q6J("ngClass", o.sidebarSpacing),
                  e.xp6(2),
                  e.Q6J("columns", o.cols)("resizableColumns", !0)(
                    "paginator",
                    !0
                  )("rows", 20)("rowsPerPageOptions", e.DdM(27, ee))(
                    "showCurrentPageReport",
                    !0
                  )("value", o.moviesList)("resizableColumns", !0)(
                    "responsive",
                    !0
                  )("globalFilterFields", e.DdM(28, te)),
                  e.xp6(6),
                  e.Q6J("fgsColor", "#000000")("fgsType", o.fgsType),
                  e.xp6(1),
                  e.Akn(e.DdM(29, oe)),
                  e.Q6J("visible", o.display)("modal", !0)("baseZIndex", 1e4),
                  e.xp6(1),
                  e.Q6J("formGroup", o.ActiveMoviesForm),
                  e.xp6(29),
                  e.Q6J("value", 1),
                  e.xp6(2),
                  e.Q6J("value", 2),
                  e.xp6(2),
                  e.Q6J("value", 3),
                  e.xp6(2),
                  e.Q6J("value", 5),
                  e.xp6(16),
                  e.Q6J("ngIf", null != o.imageUrl),
                  e.xp6(8),
                  e.Akn(e.DdM(30, ie)),
                  e.Q6J("baseZIndex", 1e4));
            },
            directives: [
              I.G,
              _.mk,
              Z.iA,
              v.jx,
              J.o,
              l._Y,
              l.JL,
              l.sg,
              S.NU,
              l.JJ,
              l.u,
              A.Hq,
              Z.Q7,
              _.sg,
              Z.lQ,
              Z.fz,
              _.O5,
              q.u,
              h.Eo,
              M.V,
              l.Fj,
              l.EJ,
              l.YN,
              l.Kr,
              P.oG,
              C.Q,
            ],
            styles: [
              ".btn-grp[_ngcontent-%COMP%]{display:flex}th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:left!important;font-size:200!important}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}[_nghost-%COMP%]     .p-menuitem-link-active{background-color:#900!important;color:#fff}",
            ],
          })),
          n
        );
      })();
      var y = d(9996);
      const se = ["AllMovieTable"];
      function re(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 13),
            e.TgZ(1, "span", 14),
            e.TgZ(2, "h2", 15),
            e._uU(3, " All Movies "),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "span", 14),
            e._UZ(5, "i", 16),
            e.TgZ(6, "input", 17),
            e.NdJ("input", function (i) {
              return e.CHM(t), e.oxw().FilterGlobal(i, "contains");
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "div", 14),
            e.TgZ(8, "form", 18),
            e._UZ(9, "p-multiSelect", 19),
            e.TgZ(10, "button", 20),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().SelectRequestedColumns();
            }),
            e._uU(11, " Submit "),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(12, "span", 14),
            e.TgZ(13, "button", 21),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().AddMovies();
            }),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(6),
            e.Q6J("value", t.MovieSearchKeyWord.Gsearch),
            e.xp6(2),
            e.Q6J("formGroup", t.columnSelectorForm),
            e.xp6(1),
            e.Q6J("options", t.colsOptions)("virtualScroll", !0);
        }
      }
      function le(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "th", 24), e._uU(1), e._UZ(2, "p-sortIcon", 25), e.qZA()),
          2 & n)
        ) {
          const t = r.$implicit;
          e.Q6J("pSortableColumn", t.field),
            e.xp6(1),
            e.hij(" ", t.headers, " "),
            e.xp6(1),
            e.Q6J("field", t.field);
        }
      }
      function ce(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "th", 22),
            e._uU(2, "S.no"),
            e.qZA(),
            e.YNc(3, le, 3, 3, "th", 23),
            e.TgZ(4, "th", 22),
            e._uU(5, "Action"),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(3),
            e.Q6J(
              "ngForOf",
              0 == t.filteredCols.length ? t.cols : t.filteredCols
            );
        }
      }
      function ae(n, r) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1), e.hij(" ", null == t ? null : t.title, " ");
        }
      }
      function de(n, r) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1), e.hij(" ", null == t ? null : t.director, " ");
        }
      }
      function ge(n, r) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1), e.hij(" ", null == t ? null : t.releaseYear, " ");
        }
      }
      function ue(n, r) {
        if ((1 & n && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & n)) {
          const t = e.oxw().$implicit;
          e.xp6(1),
            e.lnq(
              " ",
              null == t ? null : t.HH,
              ":",
              null == t ? null : t.MM,
              ":",
              null == t ? null : t.SS,
              " "
            );
        }
      }
      function me(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 32),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw(2).$implicit;
              return e.oxw().markAsActive(null == i ? null : i.id, !1);
            }),
            e._uU(1, " Active "),
            e.qZA();
        }
      }
      function pe(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 33),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw(2).$implicit;
              return e.oxw().markAsActive(null == i ? null : i.id, !0);
            }),
            e._uU(1, " InActive "),
            e.qZA();
        }
      }
      function he(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "td"),
            e.TgZ(1, "div", 27),
            e.YNc(2, me, 2, 0, "button", 30),
            e.YNc(3, pe, 2, 0, "button", 31),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(2),
            e.Q6J("ngIf", 1 == t.isActive),
            e.xp6(1),
            e.Q6J("ngIf", 0 == t.isActive);
        }
      }
      function _e(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 36),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw(2).$implicit;
              return e.oxw().Recommended(null == i ? null : i.id, !1);
            }),
            e._uU(1, " Remove "),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw(2).$implicit;
          e.Q6J("disabled", 0 == t.isActive);
        }
      }
      function fe(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "button", 37),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw(2).$implicit;
              return e.oxw().Recommended(null == i ? null : i.id, !0);
            }),
            e._uU(1, " Add "),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw(2).$implicit;
          e.Q6J("disabled", 0 == t.isActive);
        }
      }
      function ve(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "td"),
            e.TgZ(1, "div", 27),
            e.YNc(2, _e, 2, 1, "button", 34),
            e.YNc(3, fe, 2, 1, "button", 35),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(2),
            e.Q6J("ngIf", 1 == t.isRecommended),
            e.xp6(1),
            e.Q6J("ngIf", 0 == t.isRecommended);
        }
      }
      function Ze(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "td"),
            e.TgZ(1, "select", 38, 39),
            e.NdJ("change", function () {
              e.CHM(t);
              const i = e.MAs(2),
                s = e.oxw().$implicit;
              return e.oxw().editThreshold(null == s ? null : s.id, i.value);
            }),
            e.TgZ(3, "option", 40),
            e._uU(4, "0"),
            e.qZA(),
            e.TgZ(5, "option", 41),
            e._uU(6, "0.5"),
            e.qZA(),
            e.TgZ(7, "option", 42),
            e._uU(8, "1"),
            e.qZA(),
            e.TgZ(9, "option", 43),
            e._uU(10, "1.5"),
            e.qZA(),
            e.TgZ(11, "option", 44),
            e._uU(12, "2"),
            e.qZA(),
            e.TgZ(13, "option", 45),
            e._uU(14, "2.5"),
            e.qZA(),
            e.TgZ(15, "option", 46),
            e._uU(16, "3"),
            e.qZA(),
            e.TgZ(17, "option", 47),
            e._uU(18, "3.5"),
            e.qZA(),
            e.TgZ(19, "option", 48),
            e._uU(20, "4"),
            e.qZA(),
            e.TgZ(21, "option", 49),
            e._uU(22, "4.5"),
            e.qZA(),
            e.TgZ(23, "option", 50),
            e._uU(24, "5"),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("disabled", 0 == t.isActive)(
              "value",
              null == t ? null : t.threshold
            );
        }
      }
      function Te(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "td"),
            e.TgZ(1, "img", 51),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw().$implicit;
              return e.oxw().updateMoviePoster(null == i ? null : i.id);
            }),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw().$implicit,
            o = e.oxw();
          e.xp6(1), e.Q6J("src", o.getFullImageUrl(t.posterContent), e.LSH);
        }
      }
      function xe(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "td", 52),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw().$implicit;
              return e.oxw().redirectToAdminSS(i.id, i.title);
            }),
            e.TgZ(1, "a", 53),
            e._uU(2, "ScreenShots"),
            e.qZA(),
            e.qZA();
        }
      }
      function be(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "td", 52),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw().$implicit;
              return e.oxw().redirectToAdminDialogues(i.id, i.title);
            }),
            e.TgZ(1, "a", 53),
            e._uU(2, "Dialogues"),
            e.qZA(),
            e.qZA();
        }
      }
      function Ae(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.YNc(3, ae, 2, 1, "td", 11),
            e.YNc(4, de, 2, 1, "td", 11),
            e.YNc(5, ge, 2, 1, "td", 11),
            e.YNc(6, ue, 2, 3, "td", 11),
            e.YNc(7, he, 4, 2, "td", 11),
            e.YNc(8, ve, 4, 2, "td", 11),
            e.YNc(9, Ze, 25, 2, "td", 11),
            e.YNc(10, Te, 2, 1, "td", 11),
            e.YNc(11, xe, 3, 0, "td", 26),
            e.YNc(12, be, 3, 0, "td", 26),
            e.TgZ(13, "td"),
            e.TgZ(14, "div", 27),
            e.TgZ(15, "button", 28),
            e.NdJ("click", function () {
              const s = e.CHM(t).$implicit;
              return e.oxw().EditMovies(null == s ? null : s.id);
            }),
            e.qZA(),
            e.TgZ(16, "button", 29),
            e.NdJ("click", function () {
              const s = e.CHM(t).$implicit;
              return e.oxw().deleteMovies(null == s ? null : s.id);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = r.rowIndex,
            o = e.oxw();
          e.xp6(2),
            e.Oqu(t + 1),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Movie Title")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Director")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Release Year")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Length")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Status")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("R Movies")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Threshold")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("Movie Poster")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("admin-ss")),
            e.xp6(1),
            e.Q6J("ngIf", o.shouldDisplayColumn("dialogues"));
        }
      }
      function Me(n, r) {
        1 & n &&
          (e.TgZ(0, "tr"),
          e.TgZ(1, "td", 54),
          e._uU(2, " No Records Found. "),
          e.qZA(),
          e.qZA());
      }
      function Ce(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 60),
            e.TgZ(1, "div", 61),
            e._UZ(2, "img", 79),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw(2);
          e.xp6(2), e.Q6J("src", t.posterContentThumb, e.LSH);
        }
      }
      function Se(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "form", 18),
            e.TgZ(2, "div", 55),
            e.TgZ(3, "div", 56),
            e.TgZ(4, "div", 57),
            e.TgZ(5, "div", 58),
            e.TgZ(6, "div", 59),
            e.TgZ(7, "div", 56),
            e.TgZ(8, "div", 60),
            e.TgZ(9, "div", 61),
            e.TgZ(10, "label", 62),
            e._uU(11, "Title"),
            e.qZA(),
            e._UZ(12, "input", 63),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "div", 60),
            e.TgZ(14, "div", 61),
            e.TgZ(15, "label", 64),
            e._uU(16, "Director "),
            e.qZA(),
            e._UZ(17, "input", 65),
            e.qZA(),
            e.qZA(),
            e.TgZ(18, "div", 60),
            e.TgZ(19, "div", 61),
            e.TgZ(20, "label", 66),
            e._uU(21, "Release Year"),
            e.qZA(),
            e._UZ(22, "input", 67),
            e.qZA(),
            e.qZA(),
            e.TgZ(23, "div", 60),
            e.TgZ(24, "div", 56),
            e.TgZ(25, "div", 60),
            e.TgZ(26, "div", 61),
            e.TgZ(27, "label", 66),
            e._uU(28, "Movie Poster"),
            e.qZA(),
            e.TgZ(29, "input", 68),
            e.NdJ("change", function (i) {
              return e.CHM(t), e.oxw().OnChangePosterContentthumb(i);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.YNc(30, Ce, 3, 1, "div", 69),
            e.qZA(),
            e.qZA(),
            e.TgZ(31, "div", 60),
            e.TgZ(32, "div", 56),
            e.TgZ(33, "div", 70),
            e.TgZ(34, "div", 61),
            e.TgZ(35, "label", 66),
            e._uU(36, "HH"),
            e.qZA(),
            e._UZ(37, "input", 71),
            e.qZA(),
            e.qZA(),
            e.TgZ(38, "div", 70),
            e.TgZ(39, "div", 61),
            e.TgZ(40, "label", 66),
            e._uU(41, "MM"),
            e.qZA(),
            e._UZ(42, "input", 72),
            e.qZA(),
            e.qZA(),
            e.TgZ(43, "div", 70),
            e.TgZ(44, "div", 61),
            e.TgZ(45, "label", 66),
            e._uU(46, "SS"),
            e.qZA(),
            e._UZ(47, "input", 73),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(48, "div", 74),
            e.TgZ(49, "div", 75),
            e.TgZ(50, "div", 76),
            e.TgZ(51, "button", 77),
            e.NdJ("click", function () {
              return e.CHM(t), (e.oxw().display = !1);
            }),
            e._uU(52, " Cancel "),
            e.qZA(),
            e.TgZ(53, "button", 78),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().Submit();
            }),
            e._uU(54, " Submit "),
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
            e.BQk();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("formGroup", t.AllMoviesForm),
            e.xp6(29),
            e.Q6J("ngIf", null != t.posterContentThumb);
        }
      }
      function qe(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 60),
            e.TgZ(1, "div", 61),
            e._UZ(2, "img", 79),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw(2);
          e.xp6(2), e.Q6J("src", t.posterContentThumb, e.LSH);
        }
      }
      function ye(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "form", 18),
            e.TgZ(2, "div", 80),
            e.TgZ(3, "div", 56),
            e.TgZ(4, "div", 57),
            e.TgZ(5, "div", 58),
            e.TgZ(6, "div", 59),
            e.TgZ(7, "div", 56),
            e.TgZ(8, "div", 60),
            e.TgZ(9, "div", 61),
            e.TgZ(10, "label", 62),
            e._uU(11, "Title"),
            e.qZA(),
            e._UZ(12, "input", 63),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "div", 60),
            e.TgZ(14, "div", 56),
            e.TgZ(15, "div", 60),
            e.TgZ(16, "div", 61),
            e.TgZ(17, "label", 66),
            e._uU(18, "Movie Poster"),
            e.qZA(),
            e.TgZ(19, "input", 68),
            e.NdJ("change", function (i) {
              return e.CHM(t), e.oxw().OnChangePosterContentthumb(i);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.YNc(20, qe, 3, 1, "div", 69),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(21, "div", 74),
            e.TgZ(22, "div", 75),
            e.TgZ(23, "div", 76),
            e.TgZ(24, "button", 77),
            e.NdJ("click", function () {
              return e.CHM(t), (e.oxw().display = !1);
            }),
            e._uU(25, " Cancel "),
            e.qZA(),
            e.TgZ(26, "button", 78),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().submitMoviePosterData();
            }),
            e._uU(27, " Submit "),
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
            e.BQk();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("formGroup", t.PosterForm),
            e.xp6(19),
            e.Q6J("ngIf", null != t.posterContentThumb);
        }
      }
      function we(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 60),
            e.TgZ(1, "div", 61),
            e._UZ(2, "img", 79),
            e.qZA(),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw(2);
          e.xp6(2), e.Q6J("src", t.screenShotImage, e.LSH);
        }
      }
      function ke(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "form", 18),
            e.TgZ(2, "div", 80),
            e.TgZ(3, "div", 56),
            e.TgZ(4, "div", 57),
            e.TgZ(5, "div", 58),
            e.TgZ(6, "div", 59),
            e.TgZ(7, "div", 56),
            e.TgZ(8, "div", 60),
            e.TgZ(9, "div", 61),
            e.TgZ(10, "label", 62),
            e._uU(11, "Title"),
            e.qZA(),
            e._UZ(12, "input", 63),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "div", 60),
            e.TgZ(14, "div", 56),
            e.TgZ(15, "div", 60),
            e.TgZ(16, "div", 61),
            e.TgZ(17, "label", 66),
            e._uU(18, "Screenshot"),
            e.qZA(),
            e.TgZ(19, "input", 68),
            e.NdJ("change", function (i) {
              return e.CHM(t), e.oxw().OnchangeScreenShot(i);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.YNc(20, we, 3, 1, "div", 69),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(21, "div", 74),
            e.TgZ(22, "div", 75),
            e.TgZ(23, "div", 76),
            e.TgZ(24, "button", 77),
            e.NdJ("click", function () {
              return e.CHM(t), (e.oxw().display = !1);
            }),
            e._uU(25, " Cancel "),
            e.qZA(),
            e.TgZ(26, "button", 78),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().submitMoviePosterData();
            }),
            e._uU(27, " Submit "),
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
            e.BQk();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("formGroup", t.PosterForm),
            e.xp6(19),
            e.Q6J("ngIf", null != t.screenShotImage);
        }
      }
      const Ue = function () {
          return [20, 50, 100];
        },
        De = function () {
          return ["title", "length", "isActive", "releaseYear", "director"];
        },
        Ie = function () {
          return { width: "70vw", height: "100vh" };
        },
        Je = function () {
          return { width: "40vw" };
        };
      let N = (() => {
        class n {
          constructor(t, o, i, s, c, a, g, u) {
            (this.ngxLoader = t),
              (this.fb = o),
              (this.MoviesService = i),
              (this.CommonService = s),
              (this.confirmationService = c),
              (this.toastr = a),
              (this.QuibService = g),
              (this.router = u),
              (this.addEditMovie = !1),
              (this.editMode = !1),
              (this.screenshot = !1),
              (this.moviePoster = !1),
              (this.display = !1),
              (this.baseUrl = "https://quibs.com"),
              (this.posterContent = void 0),
              (this.posterContentThumb = void 0),
              (this.screenShotImage = void 0),
              (this.columnSelectorForm = new l.cw({})),
              (this.colsOptions = []),
              (this.selectedColumns = []),
              (this.filteredCols = []),
              (this.selectedThreshold = void 0),
              (this.AllMoviesForm = this.fb.group({
                id: [""],
                title: ["", [l.kI.required]],
                director: ["", [l.kI.required]],
                releaseYear: ["", [l.kI.required]],
                length: ["", [l.kI.required]],
                posterContent: ["", [l.kI.required]],
                posterContentThumb: [""],
                hours: ["", [l.kI.required]],
                minutes: ["", [l.kI.required]],
                seconds: ["", [l.kI.required]],
                isActive: [""],
              })),
              (this.PosterForm = this.fb.group({ id: [""], title: [""] })),
              (this.columnSelectorForm = this.fb.group({
                selectedColumns: new l.NI([]),
              }));
          }
          ngOnInit() {
            (this.sidebarSpacing = "expanded"),
              (this.fgsType = h.aS.squareLoader),
              this.ngxLoader.start(),
              (this.cols = [
                { field: "title", show: !0, headers: "Movie Title" },
                { field: "director", show: !0, headers: "Director" },
                { field: "releaseYear", show: !0, headers: "Release Year" },
                { field: "length", show: !0, headers: "Length" },
                { field: "isActive", show: !0, headers: "Status" },
                { field: "isRecommended", show: !0, headers: "R Movies" },
                { field: "threshold", show: !0, headers: "Threshold" },
                {
                  field: "posterContentThumb",
                  show: !0,
                  headers: "Movie Poster",
                },
                { field: "admin-ss", show: !0, headers: "Screenshots" },
                { field: "dialogues", show: !0, headers: "Dialogues" },
              ]),
              this.MoviesService.MovieSearchKeyWord.subscribe((t) => {
                (this.MovieSearchKeyWord = t),
                  (this.MovieSearchKeyWord.Gsearch = "");
              }),
              (this.colsOptions = this.cols.map((t) => ({
                label: t.headers,
                value: t.field,
              }))),
              this.getMovieList();
          }
          getFullImageUrl(t) {
            return this.baseUrl + t;
          }
          SelectRequestedColumns() {
            (this.selectedColumns =
              this.columnSelectorForm.controls.selectedColumns.value),
              (this.filteredCols = this.cols
                .filter((t) =>
                  this.selectedColumns.some((o) => o.value === t.field)
                )
                .map((t) => ({ headers: t.headers })));
          }
          shouldDisplayColumn(t) {
            return (
              0 === this.filteredCols.length ||
              this.filteredCols.some((o) => o.headers === t)
            );
          }
          onToggleSidebar(t) {
            this.sidebarSpacing = "open" === t ? "contracted" : "expanded";
          }
          getMovieList() {
            this.MoviesService.getMovieList().subscribe((t) => {
              (this.moviesList = t),
                this.moviesList.map((o) => {
                  (o.posterContentThumb = this.baseUrl.concat(
                    o.posterContentThumb
                  )),
                    (o.HH = this.CommonService.consverIntoHHMMSS(o.length).HH),
                    (o.MM = this.CommonService.consverIntoHHMMSS(o.length).MM),
                    (o.SS = this.CommonService.consverIntoHHMMSS(o.length).SS);
                }),
                this.allMovieSearch(),
                this.ngxLoader.stop();
            });
          }
          applyFilterGlobal(t, o) {
            switch (t.target.id) {
              case "title":
                (this.MovieSearchKeyWord.title = t.target.value),
                  this.AllMovieTable.filter(t.target.value, t.target.id, o);
                break;
              case "director":
                (this.MovieSearchKeyWord.director = t.target.value),
                  this.AllMovieTable.filter(t.target.value, t.target.id, o);
                break;
              case "releaseYear":
                (this.MovieSearchKeyWord.releaseYear = t.target.value),
                  this.AllMovieTable.filter(t.target.value, t.target.id, o);
                break;
              case "length":
                (this.MovieSearchKeyWord.length = t.target.value),
                  this.AllMovieTable.filter(t.target.value, t.target.id, o);
            }
          }
          EditMovies(t) {
            (this.addEditMovie = !0), (this.editMode = !0);
            let o = this.moviesList.filter((i) => i.id === t);
            this.AllMoviesForm.patchValue({
              id: t,
              title: o[0].title,
              director: o[0].director,
              releaseYear: o[0].releaseYear,
              hours: this.CommonService.consverIntoHHMMSS(o[0].length).HH,
              seconds: this.CommonService.consverIntoHHMMSS(o[0].length).SS,
              minutes: this.CommonService.consverIntoHHMMSS(o[0].length).MM,
            }),
              (this.posterContentThumb = o[0].posterContentThumb),
              (this.headerMessage = "Edit Movie"),
              (this.display = !0);
          }
          AddMovies() {
            (this.headerMessage = "Add Movie"),
              (this.addEditMovie = !0),
              (this.editMode = !1),
              this.AllMoviesForm.reset(),
              (this.display = !0),
              (this.posterContentThumb = null);
          }
          OnChangePosterContentthumb(t) {
            var o = new FileReader();
            (this.image = t.target.files[0]),
              o.readAsDataURL(t.target.files[0]),
              (o.onload = (i) => {
                this.posterContentThumb = i.target.result;
              });
          }
          OnchangeScreenShot(t) {
            var o = new FileReader();
            (this.image = t.target.files[0]),
              o.readAsDataURL(t.target.files[0]),
              (o.onload = (i) => {
                this.screenShotImage = i.target.result;
              });
          }
          deleteMovies(t) {
            this.confirmationService.confirm({
              message: "Are you sure that you want to delete this Movies ?",
              header: "Confirmation",
              icon: "pi pi-exclamation-triangle",
              accept: () => {
                this.ngxLoader.start(),
                  this.MoviesService.deleteMovies(t).subscribe((o) => {
                    this.getMovieList();
                  });
              },
            });
          }
          redirectToAdminSS(t, o) {
            this.router.navigate([`/Movies/admin-screenshots/${t}/${o}`]);
          }
          redirectToAdminDialogues(t, o) {
            this.router.navigate([`/Movies/admin-dailogues/${t}/${o}/`]);
          }
          markAsActive(t, o) {
            (this.message = o
              ? "Are you sure that you want to mark as Active"
              : "Are you sure that you want to mark as InActive"),
              this.confirmationService.confirm({
                message: this.message,
                header: "Confirmation",
                icon: "pi pi-exclamation-triangle",
                accept: () => {
                  this.ngxLoader.start();
                  let i = this.moviesList.filter((s) => s.id === t);
                  (i[0].posterContentThumb =
                    i[0].posterContentThumb.split("https://quibs.com/")[1]),
                    (i[0].isActive = o),
                    this.MoviesService.markAsActive(i[0]).subscribe((s) => {
                      s &&
                        (this.toastr.showSuccess(
                          " Status change successfully",
                          "Status change"
                        ),
                        this.getMovieList());
                    });
                },
              });
          }
          Recommended(t, o) {
            (this.message = o
              ? "Are you sure that you want to add  as Recommended"
              : "Are you sure that you want to remove  Recommended movie"),
              this.confirmationService.confirm({
                message: this.message,
                header: "Confirmation",
                icon: "pi pi-exclamation-triangle",
                accept: () => {
                  this.QuibService.AddToRecommendedMovies(t, o).subscribe(
                    (i) => {
                      i &&
                        (this.toastr.showSuccess(
                          " Status change successfully",
                          "Status change"
                        ),
                        this.getMovieList());
                    }
                  );
                },
              });
          }
          editThreshold(t, o) {
            (this.message = "Are you sure that you want to edit the Threshold"),
              this.confirmationService.confirm({
                message: this.message,
                header: "Confirmation",
                icon: "pi pi-exclamation-triangle",
                accept: () => {
                  this.QuibService.EditThreshold(t, o).subscribe((i) => {
                    i &&
                      (this.toastr.showSuccess(
                        "Threshold changed successfully",
                        "Threshold change"
                      ),
                      this.getMovieList());
                  });
                },
                reject: () => {
                  this.getMovieList();
                },
              });
          }
          Submit() {
            const o = this.AllMoviesForm.controls.title.value,
              i = this.AllMoviesForm.controls.director.value,
              s = this.AllMoviesForm.controls.releaseYear.value,
              c = this.AllMoviesForm.controls.hours.value,
              a = this.AllMoviesForm.controls.minutes.value,
              g = this.AllMoviesForm.controls.seconds.value;
            if (o && i && s && c && a && g) {
              const f = {
                id: this.AllMoviesForm.controls.id.value,
                Title: o,
                Director: i,
                ReleaseYear: s,
                Hour: c,
                Minute: a,
                Seconds: g,
                IsActive: !1,
                PosterImage: this.image,
              };
              this.ngxLoader.start(),
                this.editMode &&
                  this.MoviesService.editMovies(f).subscribe((p) => {
                    p
                      ? (this.toastr.showSuccess(
                          "Movie data is updated successfully",
                          "movie data"
                        ),
                        (this.display = !1),
                        this.getMovieList())
                      : (this.toastr.showSuccess(
                          "Something going wrong",
                          "Please check"
                        ),
                        (this.display = !1),
                        this.getMovieList());
                  }),
                this.editMode ||
                  this.MoviesService.Submit(f).subscribe({
                    next: (p) => {
                      this.toastr.showSuccess(
                        "Movie is added successfully",
                        "Movie data"
                      ),
                        (this.display = !1),
                        this.getMovieList();
                    },
                    error: (p) => {
                      (this.display = !1),
                        this.getMovieList(),
                        alert(p.error.message),
                        console.log(p.error.message),
                        this.toastr.showWarning(
                          "Something going wrong",
                          "Please check"
                        ),
                        (this.display = !1),
                        this.getMovieList();
                    },
                    complete: () => {},
                  });
            } else
              this.toastr.showWarning(
                "Please fill out all the fields before submitting the form",
                "Form incomplete"
              );
          }
          updateMoviePoster(t) {
            (this.headerMessage = "Upload Movie Poster"),
              (this.addEditMovie = !1),
              (this.moviePoster = !0),
              (this.screenshot = !1);
            let o = this.moviesList.filter((i) => i.id === t);
            this.PosterForm.patchValue({ title: o[0].title, id: t }),
              (this.posterContentThumb = o[0].posterContentThumb),
              (this.display = !0);
          }
          submitMoviePosterData() {
            const t = this.PosterForm.controls.id.value,
              o = this.image;
            if (t && o) {
              const i = { id: t, PosterImage: o };
              (this.display = !1),
                this.ngxLoader.start(),
                this.MoviesService.submitMoviePosterData(i).subscribe((s) => {
                  s
                    ? (this.toastr.showSuccess(
                        "Movie poster is updated successfully",
                        "Movie poster"
                      ),
                      (this.display = !1),
                      this.getMovieList())
                    : (this.toastr.showSuccess(
                        "somthing going wrong",
                        "please check"
                      ),
                      (this.display = !1),
                      this.getMovieList());
                });
            } else
              this.toastr.showWarning(
                "Please fill out all the fields before submitting the form",
                "Form incomplete"
              );
          }
          ngOnDestroy() {
            this.MoviesService.MovieSearchKeyWord.next(this.MovieSearchKeyWord),
              this.CommonService.setMovieSerachWord(this.MovieSearchKeyWord);
          }
          allMovieSearch() {
            null != this.MovieSearchKeyWord.title &&
              this.MovieSearchKeyWord.title.trim().length > 0 &&
              this.AllMovieTable.filter(
                this.MovieSearchKeyWord.title,
                "title",
                "contains"
              ),
              null != this.MovieSearchKeyWord.director &&
                this.MovieSearchKeyWord.director.trim().length > 0 &&
                this.AllMovieTable.filter(
                  this.MovieSearchKeyWord.director,
                  "director",
                  "contains"
                ),
              null != this.MovieSearchKeyWord.releaseYear &&
                this.MovieSearchKeyWord.releaseYear.trim().length > 0 &&
                this.AllMovieTable.filter(
                  this.MovieSearchKeyWord.releaseYear,
                  "releaseYear",
                  "contains"
                ),
              null != this.MovieSearchKeyWord.length &&
                this.MovieSearchKeyWord.length.trim().length > 0 &&
                this.AllMovieTable.filter(
                  this.MovieSearchKeyWord.length,
                  "length",
                  "contains"
                ),
              null != this.MovieSearchKeyWord.Gsearch &&
                this.MovieSearchKeyWord.Gsearch.trim().length > 0 &&
                this.AllMovieTable.filterGlobal(
                  this.MovieSearchKeyWord.Gsearch,
                  "contains"
                );
          }
          FilterGlobal(t, o) {
            (this.MovieSearchKeyWord.Gsearch = t.target.value),
              this.AllMovieTable.filterGlobal(t.target.value, o);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.Y36(h.LA),
              e.Y36(l.qu),
              e.Y36(U.I),
              e.Y36(D.v),
              e.Y36(v.YP),
              e.Y36(b.$),
              e.Y36(y.V),
              e.Y36(T.F0)
            );
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [["app-all-movies"]],
            viewQuery: function (t, o) {
              if ((1 & t && e.Gf(se, 5), 2 & t)) {
                let i;
                e.iGM((i = e.CRH())) && (o.AllMovieTable = i.first);
              }
            },
            features: [e._Bn([v.YP])],
            decls: 15,
            vars: 28,
            consts: [
              [3, "toggleSidebar"],
              [1, "body", "bcard", 3, "ngClass"],
              [1, "card", "col-sm-12", 2, "border", "none"],
              [
                "id",
                "customerTable",
                "responsiveLayout",
                "scroll",
                "scrollHeight",
                "70vh",
                "dataKey",
                "id",
                "stateStorage",
                "session",
                "stateKey",
                "AllMovie-session",
                "columnResizeMode",
                "expand",
                "currentPageReportTemplate",
                "Showing {first} to {last} of {totalRecords} entries",
                "styleClass",
                "p-datatable-striped",
                3,
                "columns",
                "paginator",
                "rows",
                "rowsPerPageOptions",
                "showCurrentPageReport",
                "value",
                "resizableColumns",
                "responsive",
                "globalFilterFields",
              ],
              ["AllMovieTable", ""],
              ["pTemplate", "caption"],
              ["pTemplate", "header"],
              ["pTemplate", "body"],
              ["pTemplate", "emptymessage"],
              [3, "fgsColor", "fgsType"],
              [
                "position",
                "top",
                3,
                "visible",
                "modal",
                "header",
                "baseZIndex",
                "visibleChange",
              ],
              [4, "ngIf"],
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
              [1, "row"],
              [1, "p-input-icon-right", "ml-5"],
              [2, "font-family", "'Times New Roman', Times, serif"],
              [1, "pi", "pi-search"],
              [
                "pInputText",
                "",
                "type",
                "text",
                "placeholder",
                "Search...",
                3,
                "value",
                "input",
              ],
              [3, "formGroup"],
              [
                "optionLabel",
                "label",
                "formControlName",
                "selectedColumns",
                "display",
                "chip",
                "defaultLabel",
                "Select Columns to display",
                3,
                "options",
                "virtualScroll",
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
                "p-button-primary",
                2,
                "margin-left",
                "8px",
                "margin-bottom",
                "6.7px",
                "height",
                "30px",
                3,
                "click",
              ],
              [
                "pButton",
                "",
                "type",
                "button",
                "label",
                "Add Movie",
                1,
                "p-button-success",
                2,
                "margin-left",
                "2rem",
                "width",
                "10rem",
                3,
                "click",
              ],
              ["pResizableColumn", ""],
              [
                "pResizableColumn",
                "",
                3,
                "pSortableColumn",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["pResizableColumn", "", 3, "pSortableColumn"],
              [3, "field"],
              [3, "click", 4, "ngIf"],
              [1, "btn-grp"],
              [
                "pButton",
                "",
                "type",
                "button",
                "icon",
                "pi pi-user-edit",
                "pTooltip",
                "Edit movie",
                "tooltipPosition",
                "bottom",
                1,
                "p-button-warning",
                2,
                "margin-right",
                "5px",
                3,
                "click",
              ],
              [
                "pButton",
                "",
                "type",
                "button",
                "icon",
                "pi pi-trash",
                "pTooltip",
                "Delete movie",
                "tooltipPosition",
                "bottom",
                1,
                "p-button-danger",
                2,
                "margin-right",
                "5px",
                3,
                "click",
              ],
              [
                "pTooltip",
                "mark as InActive",
                "pButton",
                "",
                "type",
                "button",
                "class",
                "p-button-success",
                "style",
                "height: 30px; width: 6rem; padding-left: 1.63rem",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "pButton",
                "",
                "type",
                "button",
                "class",
                "p-button-danger",
                "pTooltip",
                "mark as Active",
                "style",
                "height: 30px",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "pTooltip",
                "mark as InActive",
                "pButton",
                "",
                "type",
                "button",
                1,
                "p-button-success",
                2,
                "height",
                "30px",
                "width",
                "6rem",
                "padding-left",
                "1.63rem",
                3,
                "click",
              ],
              [
                "pButton",
                "",
                "type",
                "button",
                "pTooltip",
                "mark as Active",
                1,
                "p-button-danger",
                2,
                "height",
                "30px",
                3,
                "click",
              ],
              [
                "pTooltip",
                "Remove from Recommended Movies",
                "pButton",
                "",
                "type",
                "button",
                "class",
                "p-button-success",
                "style",
                "height: 30px; width: 6rem; padding-left: 1.63rem; padding-right: 5.12rem",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              [
                "pButton",
                "",
                "type",
                "button",
                "class",
                "p-button-danger",
                "pTooltip",
                "Add to Recommended Movies",
                "style",
                "height: 30px; width: 6rem; padding-left: 2.43rem; padding-right: 4.32rem",
                3,
                "disabled",
                "click",
                4,
                "ngIf",
              ],
              [
                "pTooltip",
                "Remove from Recommended Movies",
                "pButton",
                "",
                "type",
                "button",
                1,
                "p-button-success",
                2,
                "height",
                "30px",
                "width",
                "6rem",
                "padding-left",
                "1.63rem",
                "padding-right",
                "5.12rem",
                3,
                "disabled",
                "click",
              ],
              [
                "pButton",
                "",
                "type",
                "button",
                "pTooltip",
                "Add to Recommended Movies",
                1,
                "p-button-danger",
                2,
                "height",
                "30px",
                "width",
                "6rem",
                "padding-left",
                "2.43rem",
                "padding-right",
                "4.32rem",
                3,
                "disabled",
                "click",
              ],
              [
                "id",
                "threshold",
                1,
                "form-select",
                "form-select-sm",
                3,
                "disabled",
                "value",
                "change",
              ],
              ["input", ""],
              ["value", "0"],
              ["value", "0.5"],
              ["value", "1"],
              ["value", "1.5"],
              ["value", "2"],
              ["value", "2.5"],
              ["value", "3"],
              ["value", "3.5"],
              ["value", "4"],
              ["value", "4.5"],
              ["value", "5"],
              [
                2,
                "width",
                "60px",
                "height",
                "75px",
                "object-fit",
                "cover",
                "max-width",
                "100%",
                "max-height",
                "100%",
                "cursor",
                "pointer",
                "padding",
                "6px",
                "border",
                "1px solid rgba(0, 0, 0, 0.271)",
                "border-radius",
                "5px",
                "margin-left",
                "35px",
                3,
                "src",
                "click",
              ],
              [3, "click"],
              ["target", "_blank", 2, "color", "blue", "cursor", "pointer"],
              [
                "colspan",
                "12",
                1,
                "text-center",
                "text-danger",
                "font-weight-700",
              ],
              [1, "card", "col-sm-12", 2, "height", "100vh"],
              [1, "row", "gutters"],
              [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12"],
              [1, "h-100", "mt-5"],
              [1, "card-body"],
              [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12"],
              [1, "form-group"],
              ["for", "name"],
              [
                "type",
                "text",
                "placeholder",
                "Title",
                "formControlName",
                "title",
                1,
                "form-control",
              ],
              ["for", "image"],
              [
                "type",
                "text",
                "placeholder",
                "Director",
                "formControlName",
                "director",
                1,
                "form-control",
              ],
              ["for", "Name"],
              [
                "type",
                "text",
                "placeholder",
                "Release Year",
                "formControlName",
                "releaseYear",
                1,
                "form-control",
              ],
              [
                "type",
                "file",
                "formControlName",
                "posterContentThumb",
                1,
                "form-control",
                3,
                "change",
              ],
              [
                "class",
                "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",
                4,
                "ngIf",
              ],
              [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-12"],
              [
                "type",
                "number",
                "placeholder",
                "Hours",
                "formControlName",
                "hours",
                1,
                "form-control",
              ],
              [
                "type",
                "number",
                "placeholder",
                "Minutes",
                "formControlName",
                "minutes",
                1,
                "form-control",
              ],
              [
                "type",
                "number",
                "placeholder",
                "Seconds",
                "formControlName",
                "seconds",
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
              [1, "text-right"],
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
                "form-control",
                2,
                "width",
                "80%",
                "height",
                "10vh",
                3,
                "src",
              ],
              [1, "card", "col-sm-12", 2, "height", "70vh"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.TgZ(0, "app-header", 0),
                e.NdJ("toggleSidebar", function (s) {
                  return o.onToggleSidebar(s);
                }),
                e.qZA(),
                e.TgZ(1, "div", 1),
                e.TgZ(2, "div", 2),
                e.TgZ(3, "p-table", 3, 4),
                e.YNc(5, re, 14, 4, "ng-template", 5),
                e.YNc(6, ce, 6, 1, "ng-template", 6),
                e.YNc(7, Ae, 17, 11, "ng-template", 7),
                e.YNc(8, Me, 3, 0, "ng-template", 8),
                e.qZA(),
                e._UZ(9, "ngx-ui-loader", 9),
                e.qZA(),
                e.TgZ(10, "p-dialog", 10),
                e.NdJ("visibleChange", function (s) {
                  return (o.display = s);
                }),
                e.YNc(11, Se, 55, 2, "ng-container", 11),
                e.YNc(12, ye, 28, 2, "ng-container", 11),
                e.YNc(13, ke, 28, 2, "ng-container", 11),
                e.qZA(),
                e._UZ(14, "p-confirmDialog", 12),
                e.qZA()),
                2 & t &&
                  (e.xp6(1),
                  e.Q6J("ngClass", o.sidebarSpacing),
                  e.xp6(2),
                  e.Q6J("columns", o.cols)("paginator", !0)("rows", 20)(
                    "rowsPerPageOptions",
                    e.DdM(24, Ue)
                  )("showCurrentPageReport", !0)("value", o.moviesList)(
                    "resizableColumns",
                    !0
                  )("responsive", !0)("globalFilterFields", e.DdM(25, De)),
                  e.xp6(6),
                  e.Q6J("fgsColor", "#000000")("fgsType", o.fgsType),
                  e.xp6(1),
                  e.Akn(e.DdM(26, Ie)),
                  e.Q6J("visible", o.display)("modal", !0)(
                    "header",
                    o.headerMessage
                  )("baseZIndex", 1e4),
                  e.xp6(1),
                  e.Q6J("ngIf", o.addEditMovie),
                  e.xp6(1),
                  e.Q6J("ngIf", o.moviePoster),
                  e.xp6(1),
                  e.Q6J("ngIf", o.screenshot),
                  e.xp6(1),
                  e.Akn(e.DdM(27, Je)),
                  e.Q6J("baseZIndex", 1e4));
            },
            directives: [
              I.G,
              _.mk,
              Z.iA,
              v.jx,
              J.o,
              l._Y,
              l.JL,
              l.sg,
              S.NU,
              l.JJ,
              l.u,
              A.Hq,
              Z.Q7,
              _.sg,
              Z.lQ,
              Z.fz,
              _.O5,
              q.u,
              l.YN,
              l.Kr,
              h.Eo,
              M.V,
              l.Fj,
              l.wV,
              C.Q,
            ],
            styles: [
              ".btn-grp[_ngcontent-%COMP%]{display:flex}.confirmation-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .p-datatable .p-datatable-thead>tr>th{position:sticky;top:0;z-index:9}[_nghost-%COMP%]     .p-dialog .p-button{min-width:6rem}th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:left!important;font-size:200!important}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}[_nghost-%COMP%]     .p-menuitem-link-active{background-color:#900!important;color:#fff}[_nghost-%COMP%]     .p-multiselect{min-width:20rem;max-width:20rem;height:auto}#threshold[_ngcontent-%COMP%]{width:75px}",
            ],
          })),
          n
        );
      })();
      var m = d(5861),
        w = d(2368);
      function Pe(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "a", 2),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw();
              return [
                (i.display = !0),
                (i.timeRangeSelector = !0),
                (i.AddScreenshot = !1),
                (i.message = "Select Time Range"),
              ];
            }),
            e._uU(1, "Select Time Range"),
            e.qZA();
        }
      }
      function Ne(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "a", 2),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw();
              return [
                (i.display = !0),
                (i.timeRangeSelector = !0),
                (i.AddScreenshot = !1),
                (i.message = "Select Time Range"),
              ];
            }),
            e._uU(1),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(1), e.hij("Select Time Range(", t.timeRangeSelectedcount, ")");
        }
      }
      function Oe(n, r) {
        1 & n &&
          (e.TgZ(0, "div", 20),
          e._UZ(1, "i", 21),
          e._uU(2, " Unselect "),
          e.qZA());
      }
      function Fe(n, r) {
        1 & n &&
          (e.TgZ(0, "div", 20),
          e._UZ(1, "i", 22),
          e._uU(2, " Select "),
          e.qZA());
      }
      function He(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 11),
            e.TgZ(1, "div", 12),
            e.TgZ(2, "div", 13),
            e.TgZ(3, "div", 14),
            e._uU(4),
            e.qZA(),
            e.qZA(),
            e.TgZ(5, "div", 15),
            e.TgZ(6, "mat-slide-toggle", 16),
            e.NdJ("change", function () {
              const s = e.CHM(t).$implicit;
              return e.oxw().triggerUpdateIsSelected(s.id, s.isSelected);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "div", 17),
            e.NdJ("click", function () {
              const s = e.CHM(t).$implicit;
              return e.oxw().triggerUpdateIsSelected(s.id, s.isSelected);
            }),
            e._UZ(8, "img", 18),
            e.YNc(9, Oe, 3, 0, "div", 19),
            e.YNc(10, Fe, 3, 0, "div", 19),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = r.$implicit,
            o = e.oxw();
          e.xp6(3),
            e.Q6J("ngClass", o.shouldApplyClass(t.isSelected)),
            e.xp6(1),
            e.Oqu(o.getTime(t.time)),
            e.xp6(2),
            e.Q6J("color", o.color)("checked", t.isSelected)(
              "disabled",
              o.disabled
            ),
            e.xp6(2),
            e.Q6J("src", o.getFullImageUrl(t.body), e.LSH),
            e.xp6(1),
            e.Q6J("ngIf", t.isSelected),
            e.xp6(1),
            e.Q6J("ngIf", !t.isSelected);
        }
      }
      function Qe(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "form", 23),
            e.TgZ(2, "div", 24),
            e.TgZ(3, "div", 25),
            e.TgZ(4, "div", 26),
            e.TgZ(5, "div", 27),
            e.TgZ(6, "div", 28),
            e.TgZ(7, "div", 25),
            e.TgZ(8, "div", 29),
            e.TgZ(9, "h5"),
            e._uU(10, "From:"),
            e.qZA(),
            e.TgZ(11, "div", 25),
            e.TgZ(12, "div", 30),
            e.TgZ(13, "div", 31),
            e.TgZ(14, "label", 32),
            e._uU(15, "HH"),
            e.qZA(),
            e._UZ(16, "input", 33),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "div", 30),
            e.TgZ(18, "div", 31),
            e.TgZ(19, "label", 32),
            e._uU(20, "MM"),
            e.qZA(),
            e._UZ(21, "input", 34),
            e.qZA(),
            e.qZA(),
            e.TgZ(22, "div", 30),
            e.TgZ(23, "div", 31),
            e.TgZ(24, "label", 32),
            e._uU(25, "SS"),
            e.qZA(),
            e._UZ(26, "input", 35),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(27, "h5"),
            e._uU(28, "To:"),
            e.qZA(),
            e.TgZ(29, "div", 25),
            e.TgZ(30, "div", 30),
            e.TgZ(31, "div", 31),
            e.TgZ(32, "label", 32),
            e._uU(33, "HH"),
            e.qZA(),
            e._UZ(34, "input", 36),
            e.qZA(),
            e.qZA(),
            e.TgZ(35, "div", 30),
            e.TgZ(36, "div", 31),
            e.TgZ(37, "label", 32),
            e._uU(38, "MM"),
            e.qZA(),
            e._UZ(39, "input", 37),
            e.qZA(),
            e.qZA(),
            e.TgZ(40, "div", 30),
            e.TgZ(41, "div", 31),
            e.TgZ(42, "label", 32),
            e._uU(43, "SS"),
            e.qZA(),
            e._UZ(44, "input", 38),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(45, "div", 39),
            e.TgZ(46, "div", 40),
            e.TgZ(47, "div", 41),
            e.TgZ(48, "button", 42),
            e.NdJ("click", function () {
              return e.CHM(t), (e.oxw().display = !1);
            }),
            e._uU(49, " Cancel "),
            e.qZA(),
            e.TgZ(50, "button", 43),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().fetchScreenshotsbyTime();
            }),
            e._uU(51, " Submit "),
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
            e.BQk();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("formGroup", t.timeRangeSelectionForm);
        }
      }
      function Ye(n, r) {
        if ((1 & n && (e.TgZ(0, "div"), e._uU(1), e.qZA()), 2 & n)) {
          const t = r.$implicit;
          e.xp6(1), e.hij(" ", t.name, " ");
        }
      }
      function Re(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "form", 23),
            e.TgZ(2, "div", 44),
            e.TgZ(3, "div", 25),
            e.TgZ(4, "div", 26),
            e.TgZ(5, "div", 27),
            e.TgZ(6, "div", 28),
            e.TgZ(7, "div", 25),
            e.TgZ(8, "div", 26),
            e.TgZ(9, "h5"),
            e._uU(10, "Rules:"),
            e.qZA(),
            e.TgZ(11, "p", 45),
            e._uU(12, " Max file size allowed is 500 KB"),
            e._UZ(13, "br"),
            e._uU(
              14,
              " A filename must be in a format of MovieName_hh_mm_ss.ext"
            ),
            e._UZ(15, "br"),
            e._uU(
              16,
              " Timestamp (hh_mm_ss) must be lesser than or equal to the total movie length "
            ),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "div", 25),
            e.TgZ(18, "div", 46),
            e.TgZ(19, "div", 31),
            e.TgZ(20, "h5"),
            e._uU(21, "Screenshot:"),
            e.qZA(),
            e.TgZ(22, "input", 47),
            e.NdJ("change", function (i) {
              return e.CHM(t), e.oxw().OnchangeScreenShot(i);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(23, "div", 46),
            e.TgZ(24, "div", 31),
            e.YNc(25, Ye, 2, 1, "div", 48),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(26, "div", 39),
            e.TgZ(27, "div", 40),
            e.TgZ(28, "div", 41),
            e.TgZ(29, "button", 42),
            e.NdJ("click", function () {
              return e.CHM(t), (e.oxw().display = !1);
            }),
            e._uU(30, " Cancel "),
            e.qZA(),
            e.TgZ(31, "button", 43),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().SubmitScreenshots();
            }),
            e._uU(32, " Submit "),
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
            e.BQk();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("formGroup", t.AddScreenshotForm),
            e.xp6(24),
            e.Q6J("ngForOf", t.imagelist);
        }
      }
      const Le = function () {
        return { width: "60vw", height: "77vh" };
      };
      function We(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "a", 2),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw();
              return [
                (i.display = !0),
                (i.AddDialogue = !1),
                (i.timeRangeSelector = !0),
                (i.message = "Select Time Range"),
              ];
            }),
            e._uU(1, "Select Time Range"),
            e.qZA();
        }
      }
      function Be(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "a", 2),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw();
              return [
                (i.display = !0),
                (i.AddDialogue = !1),
                (i.timeRangeSelector = !0),
                (i.message = "Select Time Range"),
              ];
            }),
            e._uU(1),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(1), e.hij("Select Time Range(", t.timeRangeSelectedcount, ")");
        }
      }
      function Ke(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 28),
            e.TgZ(1, "button", 29),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw().$implicit;
              return e.oxw().mergeDialogues(i);
            }),
            e._UZ(2, "i", 30),
            e._uU(3, "Merge "),
            e.qZA(),
            e.qZA();
        }
      }
      function je(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 31),
            e.TgZ(1, "button", 32),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw().$implicit;
              return e.oxw().confirmUnmergeDialog(i.id);
            }),
            e._UZ(2, "i", 33),
            e._uU(3),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = e.oxw().$implicit;
          e.xp6(3), e.hij("Unmerge(", t.mergeLevel, ") ");
        }
      }
      function Ge(n, r) {
        1 & n &&
          (e.TgZ(0, "div", 34),
          e._UZ(1, "i", 35),
          e._uU(2, " Select "),
          e.qZA());
      }
      function ze(n, r) {
        1 & n &&
          (e.TgZ(0, "div", 34),
          e._UZ(1, "i", 36),
          e._uU(2, " Unselect "),
          e.qZA());
      }
      function $e(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 14),
            e.YNc(1, Ke, 4, 0, "div", 15),
            e.YNc(2, je, 4, 1, "div", 16),
            e.TgZ(3, "div", 17),
            e.TgZ(4, "div", 18),
            e.TgZ(5, "div", 19),
            e._uU(6),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "div", 20),
            e.TgZ(8, "mat-slide-toggle", 21),
            e.NdJ("change", function () {
              const s = e.CHM(t).$implicit;
              return e.oxw().triggerUpdateIsSelected(s.id, s.isSelected);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(9, "div", 22),
            e.NdJ("click", function () {
              const s = e.CHM(t).$implicit;
              return e.oxw().triggerUpdateIsSelected(s.id, s.isSelected);
            }),
            e.TgZ(10, "div", 23),
            e.TgZ(11, "i", 24),
            e.NdJ("click", function (i) {
              const c = e.CHM(t).$implicit,
                a = e.oxw();
              return a.stopPropagation(i), a.EditDialog(c);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(12, "div", 25),
            e._UZ(13, "p", 26),
            e.qZA(),
            e.YNc(14, Ge, 3, 0, "div", 27),
            e.YNc(15, ze, 3, 0, "div", 27),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = r.$implicit,
            o = r.first,
            i = e.oxw();
          e.xp6(1),
            e.Q6J("ngIf", !o),
            e.xp6(1),
            e.Q6J("ngIf", t.isMerged),
            e.xp6(3),
            e.Q6J("ngClass", i.shouldApplyClass(t.isSelected)),
            e.xp6(1),
            e.Oqu(i.getTime(t.time)),
            e.xp6(2),
            e.Q6J("color", i.color)("checked", t.isSelected)(
              "disabled",
              i.disabled
            ),
            e.xp6(5),
            e.Q6J("innerHTML", t.body, e.oJD),
            e.xp6(1),
            e.Q6J("ngIf", !t.isSelected),
            e.xp6(1),
            e.Q6J("ngIf", t.isSelected);
        }
      }
      function Xe(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 37),
            e.TgZ(2, "div", 38),
            e.TgZ(3, "div", 39),
            e.TgZ(4, "div", 40),
            e.TgZ(5, "div", 41),
            e.TgZ(6, "div", 38),
            e.TgZ(7, "div", 42),
            e.TgZ(8, "div", 43),
            e.TgZ(9, "h5"),
            e._uU(10, "Dialogues Text File:"),
            e.qZA(),
            e.TgZ(11, "input", 44, 45),
            e.NdJ("change", function (i) {
              return e.CHM(t), e.oxw().onFileSelected(i);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "div", 39),
            e.TgZ(14, "h5"),
            e._uU(15, "Rules:"),
            e.qZA(),
            e.TgZ(16, "p", 46),
            e._uU(
              17,
              " When the txt file is uploaded, the system will retain the start time of each individual unit, ignoring the comma and the following characters in that line. The characters in the second and subsequent lines of the unit will be added as the dialogue with line spaces converted to a space , and it will consider any blank lines as the start of a new unit. The system will ignore the numbers that identify the individual units."
            ),
            e._UZ(18, "br"),
            e._uU(
              19,
              " For example, only the characters shown in bold below will be considered:"
            ),
            e._UZ(20, "br"),
            e._UZ(21, "br"),
            e._uU(22, " 1"),
            e._UZ(23, "br"),
            e.TgZ(24, "strong"),
            e._uU(25, "00:00:31"),
            e.qZA(),
            e._uU(26, ",240 --\x3e 00:00:37,203"),
            e._UZ(27, "br"),
            e.TgZ(28, "strong"),
            e._uU(29, "Example text 1"),
            e.qZA(),
            e._UZ(30, "br"),
            e._UZ(31, "br"),
            e._uU(32, " 2"),
            e._UZ(33, "br"),
            e.TgZ(34, "strong"),
            e._uU(35, "00:00:37"),
            e.qZA(),
            e._uU(36, ",287 --\x3e 00:00:41,416"),
            e._UZ(37, "br"),
            e.TgZ(38, "strong"),
            e._uU(39, "Example text 2"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(40, "div", 47),
            e.TgZ(41, "div", 48),
            e.TgZ(42, "button", 49),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.MAs(12);
              return e.oxw().cancelForm(i);
            }),
            e._uU(43, " Cancel "),
            e.qZA(),
            e.TgZ(44, "button", 50),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.MAs(12);
              return e.oxw().submitDialogues(i);
            }),
            e._uU(45, " Submit "),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.BQk();
        }
      }
      function Ve(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "form", 51),
            e.TgZ(2, "div", 52),
            e.TgZ(3, "div", 38),
            e.TgZ(4, "div", 39),
            e.TgZ(5, "div", 40),
            e.TgZ(6, "div", 41),
            e.TgZ(7, "div", 38),
            e.TgZ(8, "div", 53),
            e.TgZ(9, "h5"),
            e._uU(10, "From:"),
            e.qZA(),
            e.TgZ(11, "div", 38),
            e.TgZ(12, "div", 54),
            e.TgZ(13, "div", 43),
            e.TgZ(14, "label", 55),
            e._uU(15, "HH"),
            e.qZA(),
            e._UZ(16, "input", 56),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "div", 54),
            e.TgZ(18, "div", 43),
            e.TgZ(19, "label", 55),
            e._uU(20, "MM"),
            e.qZA(),
            e._UZ(21, "input", 57),
            e.qZA(),
            e.qZA(),
            e.TgZ(22, "div", 54),
            e.TgZ(23, "div", 43),
            e.TgZ(24, "label", 55),
            e._uU(25, "SS"),
            e.qZA(),
            e._UZ(26, "input", 58),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(27, "h5"),
            e._uU(28, "To:"),
            e.qZA(),
            e.TgZ(29, "div", 38),
            e.TgZ(30, "div", 54),
            e.TgZ(31, "div", 43),
            e.TgZ(32, "label", 55),
            e._uU(33, "HH"),
            e.qZA(),
            e._UZ(34, "input", 59),
            e.qZA(),
            e.qZA(),
            e.TgZ(35, "div", 54),
            e.TgZ(36, "div", 43),
            e.TgZ(37, "label", 55),
            e._uU(38, "MM"),
            e.qZA(),
            e._UZ(39, "input", 60),
            e.qZA(),
            e.qZA(),
            e.TgZ(40, "div", 54),
            e.TgZ(41, "div", 43),
            e.TgZ(42, "label", 55),
            e._uU(43, "SS"),
            e.qZA(),
            e._UZ(44, "input", 61),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(45, "div", 62),
            e.TgZ(46, "div", 47),
            e.TgZ(47, "div", 63),
            e.TgZ(48, "button", 64),
            e.NdJ("click", function () {
              return e.CHM(t), (e.oxw().display = !1);
            }),
            e._uU(49, " Cancel "),
            e.qZA(),
            e.TgZ(50, "button", 65),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().fetchDialoguesbyTime();
            }),
            e._uU(51, " Submit "),
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
            e.BQk();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("formGroup", t.timeRangeSelectionForm);
        }
      }
      function et(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div", 66),
            e.TgZ(2, "label", 67),
            e._uU(3, "Edit timer: "),
            e.qZA(),
            e.TgZ(4, "button", 68),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().editTimer(!1);
            }),
            e._uU(5, "-"),
            e.qZA(),
            e.TgZ(6, "input", 69),
            e.NdJ("ngModelChange", function (i) {
              return e.CHM(t), (e.oxw().editedTimer = i);
            }),
            e.qZA(),
            e.TgZ(7, "button", 70),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().editTimer(!0);
            }),
            e._uU(8, "+"),
            e.qZA(),
            e.qZA(),
            e.TgZ(9, "div"),
            e.TgZ(10, "label", 71),
            e._uU(11, "Edit text:"),
            e.qZA(),
            e.TgZ(12, "textarea", 72),
            e.NdJ("ngModelChange", function (i) {
              return e.CHM(t), (e.oxw().editedText = i);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "div", 73),
            e.TgZ(14, "button", 74),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw();
              return i.submitEdit(i.editedText);
            }),
            e.qZA(),
            e.TgZ(15, "button", 75),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().closeEditDialog();
            }),
            e.qZA(),
            e.qZA(),
            e.BQk();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(6),
            e.Q6J("ngModel", t.editedTimer),
            e.xp6(6),
            e.Q6J("ngModel", t.editedText);
        }
      }
      function tt(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "div"),
            e.TgZ(2, "label", 71),
            e._uU(3, "Edit:"),
            e.qZA(),
            e.TgZ(4, "textarea", 72),
            e.NdJ("ngModelChange", function (i) {
              return e.CHM(t), (e.oxw().editedText = i);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(5, "div", 73),
            e.TgZ(6, "button", 74),
            e.NdJ("click", function () {
              e.CHM(t);
              const i = e.oxw();
              return i.submitMerged(i.editedText);
            }),
            e.qZA(),
            e.TgZ(7, "button", 75),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw().closeEditDialog();
            }),
            e.qZA(),
            e.qZA(),
            e.BQk();
        }
        if (2 & n) {
          const t = e.oxw();
          e.xp6(4), e.Q6J("ngModel", t.editedText);
        }
      }
      function ot(n, r) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, "div", 76),
            e.TgZ(1, "div", 77),
            e._UZ(2, "i", 78),
            e.qZA(),
            e.TgZ(3, "span", 79),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "p", 80),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "div", 81),
            e.TgZ(8, "button", 82),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw(), e.MAs(27).accept();
            }),
            e.qZA(),
            e.TgZ(9, "button", 83),
            e.NdJ("click", function () {
              return e.CHM(t), e.oxw(), e.MAs(27).reject();
            }),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & n) {
          const t = r.$implicit;
          e.xp6(4), e.Oqu(t.header), e.xp6(2), e.Oqu(t.message);
        }
      }
      const it = function () {
          return { width: "50vw", height: "77vh" };
        },
        nt = function () {
          return { width: "36vw", height: "57vh" };
        },
        st = [
          { path: "", component: N },
          { path: "all-movies", component: N },
          { path: "active-movies", component: ne },
          {
            path: "admin-screenshots/:movieId/:movieTitle",
            component: (() => {
              class n {
                constructor(t, o, i, s, c, a) {
                  (this.ngxLoader = t),
                    (this.QuibService = o),
                    (this.route = i),
                    (this.renderer = s),
                    (this.toastr = c),
                    (this.fb = a),
                    (this.allScreenshots = []),
                    (this.checked = !0),
                    (this.disabled = !1),
                    (this.color = "accent"),
                    (this.serverBaseUrl = "https://quibs.com/"),
                    (this.timeRangeSelectionForm = new l.cw({})),
                    (this.timeRangeSelector = !1),
                    (this.display = !1),
                    (this.message = ""),
                    (this.AddScreenshot = !1),
                    (this.AddScreenshotForm = new l.cw({})),
                    (this.posterContentThumb = void 0),
                    (this.slideState = "left"),
                    (this.allCount = 0),
                    (this.selectedCount = 0),
                    (this.unselectedCount = 0),
                    (this.timeRangeSelectedcount = 0),
                    (this.timeRangeSelected = !1),
                    (this.timeRangeSelectionForm = this.fb.group({
                      fromHours: ["", [l.kI.required]],
                      fromMinutes: ["", [l.kI.required]],
                      fromSeconds: ["", [l.kI.required]],
                      toHours: ["", [l.kI.required]],
                      toMinutes: ["", [l.kI.required]],
                      toSeconds: ["", [l.kI.required]],
                    })),
                    (this.AddScreenshotForm = this.fb.group({
                      posterContentThumb: ["", [l.kI.required]],
                      posterContent: ["", [l.kI.required]],
                      hours: ["", [l.kI.required]],
                      minutes: ["", [l.kI.required]],
                      seconds: ["", [l.kI.required]],
                    }));
                }
                ngOnInit() {
                  (this.fgsType = h.aS.squareLoader),
                    this.ngxLoader.start(),
                    this.route.paramMap.subscribe((t) => {
                      (this.movieId = Number(t.get("movieId")) || 0),
                        (this.movieTitle = t.get("movieTitle") || ""),
                        this.getAdminScreenshots();
                    });
                }
                onTouchStart(t) {
                  this.pageX = t.touches[0].pageX;
                }
                onTouchMove(t) {
                  this.renderer.setStyle(
                    document.body,
                    "transform",
                    `translateX(-${this.pageX - t.touches[0].pageX}px)`
                  );
                }
                onTouchEnd() {}
                getAdminScreenshots() {
                  var t = this;
                  return (0, m.Z)(function* () {
                    (t.timeRangeSelected = !1),
                      (yield t.QuibService.getAdminScreenshots(
                        t.movieId
                      )).subscribe({
                        next: (o) => {
                          (t.allScreenshots = o),
                            t.toastr.showSuccess(
                              "All screenshots fetched successfully",
                              "Screenshots"
                            ),
                            t.ngxLoader.stop(),
                            (t.allCount = t.allScreenshots.length),
                            (t.selectedCount = t.allScreenshots.filter(
                              (i) => i.isSelected
                            ).length),
                            (t.unselectedCount = t.allScreenshots.filter(
                              (i) => !i.isSelected
                            ).length);
                        },
                        error: (o) => {
                          console.log(o),
                            console.log(o.error.message),
                            t.ngxLoader.stop();
                        },
                        complete: () => {},
                      });
                  })();
                }
                getFullImageUrl(t) {
                  return this.serverBaseUrl + t;
                }
                getTitle() {
                  return `${this.movieTitle} Screenshots`;
                }
                getTime(t) {
                  const o = Math.floor(t / 3600),
                    i = Math.floor((t % 3600) / 60),
                    s = t % 60;
                  return `${this.padZero(o)}:${this.padZero(i)}:${this.padZero(
                    s
                  )}`;
                }
                padZero(t) {
                  return t < 10 ? `0${t}` : `${t}`;
                }
                updateIsSelected(t, o) {
                  var i = this;
                  return (0, m.Z)(function* () {
                    const s = o.checked;
                    s
                      ? (i.selectedCount++, i.unselectedCount--)
                      : (i.unselectedCount++, i.selectedCount--),
                      (yield i.QuibService.updateIsSelected(t, s)).subscribe({
                        next: (c) => {
                          console.log(c),
                            s
                              ? i.toastr.showSuccess(
                                  "Screenshot selected",
                                  "Screenshot"
                                )
                              : i.toastr.showWarning(
                                  "Screenshot unselected",
                                  "Screenshot"
                                );
                        },
                        error: (c) => {
                          console.log(c);
                        },
                        complete: () => {},
                      });
                  })();
                }
                triggerUpdateIsSelected(t, o) {
                  const i = this.allScreenshots.find((s) => s.id === t);
                  i &&
                    (this.updateIsSelected(t, { checked: !o, source: null }),
                    (i.isSelected = !o));
                }
                getSelectedScreenshots() {
                  var t = this;
                  return (0, m.Z)(function* () {
                    (t.timeRangeSelected = !1),
                      (yield t.QuibService.getSelectedScreenshots(
                        t.movieId,
                        !0
                      )).subscribe({
                        next: (o) => {
                          (t.allScreenshots = o),
                            t.toastr.showSuccess(
                              "Selected screenshots fetched successfully",
                              "Screenshots"
                            );
                        },
                        error: (o) => {
                          console.log(o);
                        },
                        complete: () => {},
                      });
                  })();
                }
                getUnSelectedScreenshots() {
                  var t = this;
                  return (0, m.Z)(function* () {
                    (t.timeRangeSelected = !1),
                      (yield t.QuibService.getSelectedScreenshots(
                        t.movieId,
                        !1
                      )).subscribe({
                        next: (o) => {
                          (t.allScreenshots = o),
                            0 == t.allScreenshots.length
                              ? t.toastr.showError(
                                  "Oops there are no unselected screenshots",
                                  "Screenshots"
                                )
                              : t.toastr.showWarning(
                                  "Unselected screenshots fetched successfully",
                                  "Screenshots"
                                );
                        },
                        error: (o) => {
                          console.log(o);
                        },
                        complete: () => {},
                      });
                  })();
                }
                fetchScreenshotsbyTime() {
                  var t = this;
                  return (0, m.Z)(function* () {
                    const u =
                        3600 *
                          t.timeRangeSelectionForm.controls.fromHours.value +
                        60 *
                          t.timeRangeSelectionForm.controls.fromMinutes.value +
                        t.timeRangeSelectionForm.controls.fromSeconds.value,
                      f =
                        3600 * t.timeRangeSelectionForm.controls.toHours.value +
                        60 * t.timeRangeSelectionForm.controls.toMinutes.value +
                        t.timeRangeSelectionForm.controls.toSeconds.value;
                    u > f
                      ? t.toastr.showError(
                          "From Time should be less than To time",
                          "Oops!"
                        )
                      : ((t.display = !1),
                        (t.timeRangeSelector = !1),
                        (yield t.QuibService.fetchScreenshotsByTimeRange(
                          t.movieId,
                          u,
                          f
                        )).subscribe({
                          next: (p) => {
                            (t.allScreenshots = p),
                              0 == t.allScreenshots.length
                                ? t.toastr.showError(
                                    "Oops! there are no screenshots in this particular time range",
                                    "Screenshots"
                                  )
                                : t.toastr.showSuccess(
                                    "Screenshots fetched for a particular time range",
                                    "Screenshots"
                                  );
                          },
                          error: (p) => {
                            console.log(p);
                          },
                          complete: () => {},
                        }));
                  })();
                }
                OnchangeScreenShot(t) {
                  this.imagelist = t.target.files;
                  const o = /^[\w-]+_\d{2}_\d{2}_\d{2}\.(jpg|png)$/;
                  for (let i = 0; i < this.imagelist.length; i++)
                    o.exec(t.target.files[i].name) &&
                    t.target.files[i].size <= 512e3
                      ? console.log(t.target.files[i])
                      : (this.toastr.showWarning(
                          "Extension must be of type jpg or png  and name should be movieName_hh_mm_ss and maximum size of the image should be 500kb",
                          "Invalid File extension"
                        ),
                        this.AddScreenshotForm.controls.posterContentThumb.reset());
                }
                SubmitScreenshots() {
                  var t = this;
                  return (0, m.Z)(function* () {
                    const o = /([^_]+)/g,
                      i = t.imagelist;
                    let s = 0,
                      c = !1;
                    if (i.length > 0) {
                      (t.fgsType = h.aS.squareLoader), t.ngxLoader.start();
                      for (let a = 0; a < i.length; a++) {
                        if (c) {
                          t.toastr.showError(
                            "Could not Upload all Screenshots",
                            "Screenshots"
                          );
                          break;
                        }
                        const u = i[a].name.match(o);
                        if (u) {
                          const dt =
                              3600 * parseInt(u[1], 10) +
                              60 * parseInt(u[2], 10) +
                              parseInt(u[3], 10),
                            x = new FormData();
                          x.append("MovieId", t.movieId.toString()),
                            x.append("Screenshot", i[a]),
                            x.append("UserId", localStorage.getItem("adminId")),
                            x.append("Time", dt.toString()),
                            (yield t.QuibService.addScreenShots(x)).subscribe({
                              next: (O) => {
                                s++,
                                  s == i.length && t.getAdminScreenshots(),
                                  (t.display = !1),
                                  (t.AddScreenshot = !1),
                                  t.toastr.showSuccess(
                                    "All Screenshots Uploaded Succesfully",
                                    "Screenshots"
                                  ),
                                  (t.imagelist = null);
                              },
                              error: (O) => {
                                console.log(O), t.ngxLoader.stop(), (c = !0);
                              },
                              complete: () => {},
                            });
                        }
                      }
                    }
                  })();
                }
                shouldApplyClass(t) {
                  return t ? "selected" : "unselected";
                }
              }
              return (
                (n.ɵfac = function (t) {
                  return new (t || n)(
                    e.Y36(h.LA),
                    e.Y36(y.V),
                    e.Y36(T.gz),
                    e.Y36(e.Qsj),
                    e.Y36(b.$),
                    e.Y36(l.qu)
                  );
                }),
                (n.ɵcmp = e.Xpm({
                  type: n,
                  selectors: [["app-admin-screenshots"]],
                  hostBindings: function (t, o) {
                    1 & t &&
                      e.NdJ("touchstart", function (s) {
                        return o.onTouchStart(s);
                      })("touchmove", function (s) {
                        return o.onTouchMove(s);
                      })("touchend", function () {
                        return o.onTouchEnd();
                      });
                  },
                  decls: 24,
                  vars: 18,
                  consts: [
                    ["id", "top-bar"],
                    ["id", "navbar"],
                    [2, "cursor", "pointer", 3, "click"],
                    ["style", "cursor: pointer", 3, "click", 4, "ngIf"],
                    [1, "main-container"],
                    [1, "main-container-inner"],
                    [1, "screenshots-container"],
                    ["class", "main-div", 4, "ngFor", "ngForOf"],
                    [3, "fgsColor", "fgsType"],
                    [
                      "position",
                      "top",
                      3,
                      "visible",
                      "modal",
                      "header",
                      "baseZIndex",
                      "visibleChange",
                    ],
                    [4, "ngIf"],
                    [1, "main-div"],
                    [1, "sub-div-1"],
                    [1, "center-text"],
                    [1, "timer-div", 3, "ngClass"],
                    [1, "right-text"],
                    [3, "color", "checked", "disabled", "change"],
                    [1, "image-div", 3, "click"],
                    [1, "image-style", 3, "src"],
                    ["class", "overlay-text", 4, "ngIf"],
                    [1, "overlay-text"],
                    [1, "pi", "pi-times", "select-unselect-icon"],
                    [1, "pi", "pi-check-circle", "select-unselect-icon"],
                    [3, "formGroup"],
                    [1, "card", "col-sm-12", 2, "height", "58vh"],
                    [1, "row", "gutters"],
                    [
                      1,
                      "col-xl-12",
                      "col-lg-12",
                      "col-md-12",
                      "col-sm-12",
                      "col-12",
                    ],
                    [1, "h-100", "mt-5"],
                    [1, "card-body"],
                    [
                      1,
                      "col-xl-6",
                      "col-lg-6",
                      "col-md-6",
                      "col-sm-6",
                      "col-12",
                      2,
                      "margin-right",
                      "350px",
                    ],
                    [
                      1,
                      "col-xl-4",
                      "col-lg-4",
                      "col-md-4",
                      "col-sm-4",
                      "col-12",
                    ],
                    [1, "form-group"],
                    ["for", "Name"],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Hours",
                      "formControlName",
                      "fromHours",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                    ],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Minutes",
                      "formControlName",
                      "fromMinutes",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                    ],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Seconds",
                      "formControlName",
                      "fromSeconds",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                    ],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Hours",
                      "formControlName",
                      "toHours",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                      "margin-right",
                      "15px",
                    ],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Minutes",
                      "formControlName",
                      "toMinutes",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                      "margin-right",
                      "15px",
                    ],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Seconds",
                      "formControlName",
                      "toSeconds",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
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
                    [1, "text-right"],
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
                    [1, "card", "col-sm-12", 2, "height", "55vh"],
                    [2, "color", "red"],
                    [
                      1,
                      "col-xl-6",
                      "col-lg-6",
                      "col-md-6",
                      "col-sm-6",
                      "col-12",
                    ],
                    [
                      "type",
                      "file",
                      "formControlName",
                      "posterContentThumb",
                      "multiple",
                      "",
                      1,
                      "form-control",
                      2,
                      "width",
                      "15vw",
                      3,
                      "change",
                    ],
                    [4, "ngFor", "ngForOf"],
                  ],
                  template: function (t, o) {
                    1 & t &&
                      (e.TgZ(0, "body"),
                      e.TgZ(1, "div", 0),
                      e.TgZ(2, "h1"),
                      e._uU(3),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(4, "div", 1),
                      e.TgZ(5, "a", 2),
                      e.NdJ("click", function () {
                        return [
                          (o.display = !0),
                          (o.AddScreenshot = !0),
                          (o.timeRangeSelector = !1),
                          (o.message = "Upload ScreenShot"),
                        ];
                      }),
                      e._uU(6, "Upload"),
                      e.qZA(),
                      e.TgZ(7, "a", 2),
                      e.NdJ("click", function () {
                        return o.getAdminScreenshots();
                      }),
                      e._uU(8),
                      e.qZA(),
                      e.TgZ(9, "a", 2),
                      e.NdJ("click", function () {
                        return o.getSelectedScreenshots();
                      }),
                      e._uU(10),
                      e.qZA(),
                      e.TgZ(11, "a", 2),
                      e.NdJ("click", function () {
                        return o.getUnSelectedScreenshots();
                      }),
                      e._uU(12),
                      e.qZA(),
                      e.YNc(13, Pe, 2, 0, "a", 3),
                      e.YNc(14, Ne, 2, 1, "a", 3),
                      e.qZA(),
                      e.TgZ(15, "div", 4),
                      e.TgZ(16, "div", 5),
                      e.TgZ(17, "div", 6),
                      e.YNc(18, He, 11, 8, "div", 7),
                      e.qZA(),
                      e.qZA(),
                      e._UZ(19, "ngx-ui-loader", 8),
                      e.qZA(),
                      e._UZ(20, "footer"),
                      e.qZA(),
                      e.TgZ(21, "p-dialog", 9),
                      e.NdJ("visibleChange", function (s) {
                        return (o.display = s);
                      }),
                      e.YNc(22, Qe, 52, 1, "ng-container", 10),
                      e.YNc(23, Re, 33, 2, "ng-container", 10),
                      e.qZA()),
                      2 & t &&
                        (e.xp6(3),
                        e.Oqu(o.getTitle()),
                        e.xp6(5),
                        e.hij("Show all(", o.allCount, ")"),
                        e.xp6(2),
                        e.hij("Show Selected(", o.selectedCount, ")"),
                        e.xp6(2),
                        e.hij("Show Unselected(", o.unselectedCount, ")"),
                        e.xp6(1),
                        e.Q6J("ngIf", !o.timeRangeSelected),
                        e.xp6(1),
                        e.Q6J("ngIf", o.timeRangeSelected),
                        e.xp6(4),
                        e.Q6J("ngForOf", o.allScreenshots),
                        e.xp6(1),
                        e.Q6J("fgsColor", "#000000")("fgsType", o.fgsType),
                        e.xp6(2),
                        e.Akn(e.DdM(17, Le)),
                        e.Q6J("visible", o.display)("modal", !0)(
                          "header",
                          o.message
                        )("baseZIndex", 1e4),
                        e.xp6(1),
                        e.Q6J("ngIf", o.timeRangeSelector),
                        e.xp6(1),
                        e.Q6J("ngIf", o.AddScreenshot));
                  },
                  directives: [
                    _.O5,
                    _.sg,
                    _.mk,
                    w.Rr,
                    h.Eo,
                    M.V,
                    l._Y,
                    l.JL,
                    l.sg,
                    l.wV,
                    l.Fj,
                    l.JJ,
                    l.u,
                    A.Hq,
                  ],
                  styles: [
                    "body[_ngcontent-%COMP%]{margin:0;padding:0;font-family:Arial,sans-serif;background-color:#e2e5de;display:flex;flex-direction:column;min-height:100vh;overflow-x:hidden;overscroll-behavior-x:none;touch-action:pan-y}#top-bar[_ngcontent-%COMP%]{background-color:#353d44;text-align:center;color:#fff;padding:1px;line-height:1}#navbar[_ngcontent-%COMP%]{background-color:#555;overflow:hidden;box-shadow:0 4px 8px #0000001a}#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left;display:block;color:#fff;text-align:center;padding:14px 16px;text-decoration:none}#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ddd;color:#000}.quib-panel[_ngcontent-%COMP%]{background-color:#fdfdfd;width:97.5%;border-radius:0;box-shadow:none;margin:20px auto 0;overflow:hidden;max-height:calc(100% - 90px);position:relative;padding:0 10px;z-index:0}.row[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-grow:1}.quib-container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:auto;justify-content:center;align-items:center;width:100%}.quib-item-inner[_ngcontent-%COMP%]{flex:0 0 auto;margin-right:10px}.panel-body[_ngcontent-%COMP%]{max-height:337px;border:1px;padding:0;height:250px;min-height:250px}.quib-compose-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.quib-compose-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;z-index:1}.main-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;overflow-x:auto;flex-grow:1;margin-left:5px;margin-right:5px}.main-container-inner[_ngcontent-%COMP%]{display:flex;flex-direction:row;min-width:100%}.panel-body[_ngcontent-%COMP%]{position:relative;height:300px}.main-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;overflow-x:auto}.main-div[_ngcontent-%COMP%]{flex-shrink:0;background-color:#67676c;width:400px;height:211px;margin-right:10px;justify-content:center;align-items:center;max-width:100%;box-sizing:border-box;box-shadow:0 4px 8px #0000001a;border-radius:10px}.sub-div-1[_ngcontent-%COMP%]{background-color:#67676c;width:100%;height:20px;display:flex;justify-content:space-between;align-items:center;border-top-left-radius:10px;border-top-right-radius:10px}.center-text[_ngcontent-%COMP%]{display:flex;align-items:center;flex-grow:1}.timer-div.selected[_ngcontent-%COMP%]{width:80px;height:20px;border-radius:10px;background-color:#fff530;text-align:center;margin:0 auto;color:#000}.timer-div.unselected[_ngcontent-%COMP%]{width:80px;height:20px;border-radius:10px;background-color:#fff;text-align:center;margin:0 auto;color:#000}.right-text[_ngcontent-%COMP%]{margin:0;text-align:right}.image-style[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover}.screenshots-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;transition:transform .3s ease}.image-div[_ngcontent-%COMP%]{position:relative;cursor:pointer}.image-div[_ngcontent-%COMP%]:hover{background-color:#333}.image-div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(50%)}.image-div[_ngcontent-%COMP%]:hover   .overlay-text[_ngcontent-%COMP%]{display:block}.overlay-text[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:16px;font-family:Arial,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;display:none}.select-unselect-icon[_ngcontent-%COMP%]{font-size:19px}footer[_ngcontent-%COMP%]{background-color:#353d44;color:#fff;text-align:center;padding:30px;margin-top:auto}.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:#f5ff408a}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff530}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#f5ff408a}",
                  ],
                })),
                n
              );
            })(),
          },
          {
            path: "admin-dailogues/:movieId/:movieTitle",
            component: (() => {
              class n {
                constructor(t, o, i, s, c, a) {
                  (this.ngxLoader = t),
                    (this.QuibService = o),
                    (this.route = i),
                    (this.toastr = s),
                    (this.fb = c),
                    (this.confirmationService = a),
                    (this.AddDialogue = !1),
                    (this.dialogueList = []),
                    (this.allDialogues = []),
                    (this.movieTitle = ""),
                    (this.movieId = 0),
                    (this.checked = !0),
                    (this.disabled = !1),
                    (this.color = "accent"),
                    (this.display = !1),
                    (this.message = ""),
                    (this.timeRangeSelectionForm = new l.cw({})),
                    (this.timeRangeSelector = !1),
                    (this.displayEditDialog = !1),
                    (this.editedText = ""),
                    (this.editedTimer = ""),
                    (this.editedTimerSeconds = 0),
                    (this.editDialogueHeaderMessage = ""),
                    (this.editTextPopup = !1),
                    (this.mergeDialoguePopup = !1),
                    (this.confirmPopup = !1),
                    (this.allCount = 0),
                    (this.selectedCount = 0),
                    (this.unselectedCount = 0),
                    (this.timeRangeSelectedcount = 0),
                    (this.timeRangeSelected = !1),
                    (this.timeRangeSelectionForm = this.fb.group({
                      fromHours: ["", [l.kI.required]],
                      fromMinutes: ["", [l.kI.required]],
                      fromSeconds: ["", [l.kI.required]],
                      toHours: ["", [l.kI.required]],
                      toMinutes: ["", [l.kI.required]],
                      toSeconds: ["", [l.kI.required]],
                    }));
                }
                ngOnInit() {
                  (this.fgsType = h.aS.squareLoader),
                    this.ngxLoader.start(),
                    this.route.paramMap.subscribe((t) => {
                      (this.movieId = Number(t.get("movieId")) || 0),
                        (this.movieTitle = t.get("movieTitle") || ""),
                        this.fetchMovieDialogues();
                    });
                }
                getTime(t) {
                  const o = Math.floor(t / 3600),
                    i = Math.floor((t % 3600) / 60),
                    s = t % 60;
                  return `${this.padZero(o)}:${this.padZero(i)}:${this.padZero(
                    s
                  )}`;
                }
                padZero(t) {
                  return t < 10 ? `0${t}` : `${t}`;
                }
                fetchMovieDialogues() {
                  var t = this;
                  return (0, m.Z)(function* () {
                    (t.timeRangeSelected = !1),
                      (yield t.QuibService.fetchDialogues(t.movieId)).subscribe(
                        {
                          next: (o) => {
                            (t.allDialogues = o.filter((i) => !i.isScreenshot)),
                              t.allDialogues.forEach((i) => {
                                i.body = i.body.replace(/\n/g, "<br>");
                              }),
                              t.toastr.showSuccess(
                                "All dialogues fetched successfully!",
                                "Dialogues"
                              ),
                              (t.allCount = t.allDialogues.length),
                              (t.selectedCount = t.allDialogues.filter(
                                (i) => i.isSelected
                              ).length),
                              (t.unselectedCount = t.allDialogues.filter(
                                (i) => !i.isSelected
                              ).length),
                              t.ngxLoader.stop();
                          },
                          error: (o) => {
                            console.log(o), t.ngxLoader.stop();
                          },
                          complete: () => {},
                        }
                      );
                  })();
                }
                updateIsSelected(t, o) {
                  var i = this;
                  return (0, m.Z)(function* () {
                    const s = o.checked;
                    s
                      ? (i.selectedCount++, i.unselectedCount--)
                      : (i.unselectedCount++, i.selectedCount--),
                      (yield i.QuibService.updateIsSelected(t, s)).subscribe({
                        next: (c) => {
                          console.log(c),
                            s
                              ? i.toastr.showSuccess(
                                  "Dialogue selected",
                                  "Dialogue"
                                )
                              : i.toastr.showWarning(
                                  "Dialogue unselected",
                                  "Dialogue"
                                );
                        },
                        error: (c) => {
                          console.log(c);
                        },
                        complete: () => {},
                      });
                  })();
                }
                triggerUpdateIsSelected(t, o) {
                  const i = this.allDialogues.find((s) => s.id === t);
                  i &&
                    (this.updateIsSelected(t, { checked: !o, source: null }),
                    (i.isSelected = !o));
                }
                stopPropagation(t) {
                  t.stopPropagation();
                }
                getDialoguesByStatus(t) {
                  var o = this;
                  return (0, m.Z)(function* () {
                    (o.timeRangeSelected = !1),
                      (yield o.QuibService.fetchDialoguesBySelectedStatus(
                        o.movieId,
                        t
                      )).subscribe({
                        next: (i) => {
                          (o.allDialogues = i),
                            0 == o.allDialogues.length
                              ? o.toastr.showError(
                                  "Oops! there are no unselected dialogues",
                                  "Dialogues"
                                )
                              : o.toastr.showSuccess(
                                  t
                                    ? "Fetched all selected dialogues"
                                    : "Fetched all unselected dialogues",
                                  "Dialogues"
                                );
                        },
                        error: (i) => {
                          console.log(i);
                        },
                        complete: () => {},
                      });
                  })();
                }
                fetchDialoguesbyTime() {
                  var t = this;
                  return (0, m.Z)(function* () {
                    const u =
                        3600 *
                          t.timeRangeSelectionForm.controls.fromHours.value +
                        60 *
                          t.timeRangeSelectionForm.controls.fromMinutes.value +
                        t.timeRangeSelectionForm.controls.fromSeconds.value,
                      f =
                        3600 * t.timeRangeSelectionForm.controls.toHours.value +
                        60 * t.timeRangeSelectionForm.controls.toMinutes.value +
                        t.timeRangeSelectionForm.controls.toSeconds.value;
                    u > f
                      ? t.toastr.showError(
                          "From Time should be less than To time",
                          "Oops!"
                        )
                      : ((t.display = !1),
                        (t.timeRangeSelector = !1),
                        (yield t.QuibService.fetchDialoguesByTimeRange(
                          t.movieId,
                          u,
                          f
                        )).subscribe({
                          next: (p) => {
                            (t.allDialogues = p),
                              0 == t.allDialogues.length
                                ? t.toastr.showError(
                                    "Oops! there are no dialogues in this particular time range",
                                    "Dialogues"
                                  )
                                : t.toastr.showSuccess(
                                    "Dialogues fetched for a particular time range",
                                    "Dialogues"
                                  ),
                              (t.timeRangeSelected = !0),
                              (t.timeRangeSelectedcount =
                                t.allDialogues.length);
                          },
                          error: (p) => {
                            console.log(p);
                          },
                          complete: () => {},
                        }));
                  })();
                }
                EditDialog(t) {
                  (this.editedText = t.body.replaceAll("<br>", "")),
                    (this.editedTimerSeconds = t.time),
                    (this.editedTimer = this.getTime(t.time)),
                    (this.displayEditDialog = !0),
                    (this.editTextPopup = !0),
                    (this.mergeDialoguePopup = !1),
                    (this.currentDialogueIndex = this.allDialogues.indexOf(t)),
                    (this.editDialogueHeaderMessage = "Edit Dialogue");
                }
                closeEditDialog() {
                  this.displayEditDialog = !1;
                }
                editTimer(t) {
                  t
                    ? ((this.editedTimerSeconds += 1),
                      (this.editedTimer = this.getTime(
                        this.editedTimerSeconds
                      )))
                    : this.editedTimerSeconds > 0 &&
                      ((this.editedTimerSeconds -= 1),
                      (this.editedTimer = this.getTime(
                        this.editedTimerSeconds
                      )));
                }
                convertTimeToSeconds(t) {
                  const [o, i, s] = t.split(":").map(Number);
                  return 3600 * o + 60 * i + s;
                }
                submitEdit(t) {
                  var o = this;
                  return (0, m.Z)(function* () {
                    const i = o.allDialogues[o.currentDialogueIndex],
                      s = o.convertTimeToSeconds(o.editedTimer),
                      c = new FormData();
                    c.append("Id", i.id),
                      c.append("Body", t),
                      c.append("Time", `${s}`),
                      c.append("IsEnabled", i.isEnabled),
                      c.append("IsPosted", i.isPosted),
                      (yield o.QuibService.editDialogue(c)).subscribe({
                        next: (a) => {
                          o.fetchMovieDialogues();
                        },
                        error: (a) => {
                          console.log(a);
                        },
                        complete: () => {},
                      }),
                      o.closeEditDialog();
                  })();
                }
                mergeDialogues(t) {
                  var o = this;
                  const s =
                      this.allDialogues[this.allDialogues.indexOf(t) - 1].id,
                    c = t.id;
                  var a;
                  this.confirmationService.confirm({
                    message: "Are you sure you want to merge dialogues?",
                    header: "Confirmation",
                    icon: "pi pi-exclamation-triangle",
                    acceptLabel: "Yes",
                    rejectLabel: "No",
                    accept:
                      ((a = (0, m.Z)(function* () {
                        (yield o.QuibService.submitMerged(s, c)).subscribe({
                          next: (g) => {
                            o.fetchMovieDialogues(),
                              o.toastr.showSuccess(
                                "Merge",
                                "Dialogues merged sussessfully"
                              );
                          },
                          error: (g) => {
                            console.log(g);
                          },
                          complete: () => {},
                        });
                      })),
                      function () {
                        return a.apply(this, arguments);
                      }),
                    reject: () => {},
                  });
                }
                submitMerged(t) {
                  var o = this;
                  return (0, m.Z)(function* () {
                    const i = o.allDialogues[o.currentDialogueIndex].id,
                      s = o.allDialogues[o.previousDialogueIndex].id;
                    (yield o.QuibService.submitMerged(s, i)).subscribe({
                      next: (a) => {
                        o.fetchMovieDialogues(),
                          o.toastr.showSuccess(
                            "Merge",
                            "Dialogues merged successfully"
                          );
                      },
                      error: (a) => {},
                      complete: () => {},
                    }),
                      o.closeEditDialog();
                  })();
                }
                submitMergedEdit(t, o) {
                  var i = this;
                  return (0, m.Z)(function* () {
                    const s = new FormData();
                    s.append("Id", o.id),
                      s.append("Body", t),
                      s.append("Time", o.time),
                      s.append("IsEnabled", o.isEnabled),
                      s.append("IsPosted", o.isPosted),
                      (yield i.QuibService.editDialogue(s)).subscribe({
                        next: (c) => {
                          i.fetchMovieDialogues(),
                            i.toastr.showSuccess(
                              "Merge",
                              "Dialogues merged successfully"
                            );
                        },
                        error: (c) => {
                          console.log(c);
                        },
                        complete: () => {},
                      });
                  })();
                }
                confirmUnmergeDialog(t) {
                  var i,
                    o = this;
                  this.confirmationService.confirm({
                    message: "Are you sure you want to unmerge dialogues?",
                    header: "Confirmation",
                    icon: "pi pi-exclamation-triangle",
                    acceptLabel: "Yes",
                    rejectLabel: "No",
                    accept:
                      ((i = (0, m.Z)(function* () {
                        (yield o.QuibService.unmergeDialogues(t)).subscribe({
                          next: (s) => {
                            o.fetchMovieDialogues(),
                              o.toastr.showSuccess(
                                "Unmerge",
                                "Dialogues unmerged sussessfully"
                              );
                          },
                          error: (s) => {
                            console.log(s);
                          },
                          complete: () => {},
                        });
                      })),
                      function () {
                        return i.apply(this, arguments);
                      }),
                    reject: () => {},
                  });
                }
                shouldApplyClass(t) {
                  return t ? "selected" : "unselected";
                }
                onFileSelected(t) {
                  const o = t.target.files[0];
                  if (o) {
                    const i = new FileReader();
                    i.readAsText(o),
                      (i.onload = () => {
                        const c = this.parseTextFile(i.result);
                        console.log(c), (this.dialogueList = c);
                      });
                  }
                }
                parseTextFile(t) {
                  const o = t.split("\n"),
                    i = [],
                    s = localStorage.getItem("adminId");
                  let c = 0;
                  for (; c < o.length; ) {
                    const a = o[c + 1].trim().slice(0, 8),
                      g = this.getTimeInSeconds(a),
                      u = [];
                    for (c += 2; c < o.length && "" !== o[c].trim(); )
                      u.push(o[c].trim()), c++;
                    const f = u.join(" ");
                    i.push({
                      MovieId: this.movieId.toString(),
                      Dialogue: f,
                      UserId: s,
                      Time: g,
                    }),
                      c++;
                  }
                  return i;
                }
                getTimeInSeconds(t) {
                  const [o, i, s] = t.split(/[:,]/).map(Number);
                  return 3600 * o + 60 * i + s;
                }
                submitDialogues(t) {
                  var o = this;
                  return (0, m.Z)(function* () {
                    "" != t.value
                      ? ((o.display = !1),
                        o &&
                          ((o.fgsType = h.aS.squareLoader),
                          o.ngxLoader.start()),
                        (yield o.QuibService.addDialogues(
                          o.dialogueList
                        )).subscribe({
                          next: (i) => {
                            o.toastr.showSuccess(`${i.message}`, "Dialogues"),
                              o.ngxLoader.stop(),
                              o.fetchMovieDialogues(),
                              o.cancelForm(t);
                          },
                          error: (i) => {
                            console.log(i),
                              o.toastr.showError(
                                "Failed to add Dialogues",
                                "Dialogues"
                              ),
                              o.ngxLoader.stop();
                          },
                          complete: () => {},
                        }))
                      : o.toastr.showWarning(
                          "File cannot be empty",
                          "Dialogues"
                        );
                  })();
                }
                cancelForm(t) {
                  (this.display = !1),
                    (this.dialogueList = null),
                    (t.value = null);
                }
              }
              return (
                (n.ɵfac = function (t) {
                  return new (t || n)(
                    e.Y36(h.LA),
                    e.Y36(y.V),
                    e.Y36(T.gz),
                    e.Y36(b.$),
                    e.Y36(l.qu),
                    e.Y36(v.YP)
                  );
                }),
                (n.ɵcmp = e.Xpm({
                  type: n,
                  selectors: [["app-admin-dailogues"]],
                  decls: 29,
                  vars: 29,
                  consts: [
                    ["id", "top-bar"],
                    ["id", "navbar"],
                    [2, "cursor", "pointer", 3, "click"],
                    ["style", "cursor: pointer", 3, "click", 4, "ngIf"],
                    [1, "main-container"],
                    [1, "main-container-inner"],
                    ["class", "main-div", 4, "ngFor", "ngForOf"],
                    [3, "fgsColor", "fgsType"],
                    [
                      "position",
                      "top",
                      3,
                      "visible",
                      "modal",
                      "header",
                      "baseZIndex",
                      "visibleChange",
                    ],
                    [4, "ngIf"],
                    [
                      3,
                      "header",
                      "visible",
                      "modal",
                      "closable",
                      "responsive",
                      "visibleChange",
                    ],
                    [
                      "id",
                      "dialog",
                      "message",
                      "Are you sure you want to proceed?",
                      "header",
                      "Confirmation",
                      "icon",
                      "pi pi-exclamation-triangle",
                      3,
                      "visible",
                      "onHide",
                    ],
                    ["cd", ""],
                    ["pTemplate", "headless"],
                    [1, "main-div"],
                    ["class", "merge-button-container", 4, "ngIf"],
                    ["class", "unmerge-button-container", 4, "ngIf"],
                    [1, "sub-div-1"],
                    [1, "center-text"],
                    [1, "timer-div", 3, "ngClass"],
                    [1, "right-text"],
                    [3, "color", "checked", "disabled", "change"],
                    [1, "dialogue-content-container", "selected", 3, "click"],
                    [1, "file-edit-icon-container"],
                    [
                      "pTooltip",
                      "Edit Dialogue",
                      1,
                      "pi",
                      "pi-pencil",
                      "file-edit-icon",
                      3,
                      "click",
                    ],
                    [1, "dialogue-body", "custom-dialogue-body"],
                    [
                      2,
                      "margin-left",
                      "8px",
                      "margin-top",
                      "6px",
                      "margin-right",
                      "8px",
                      3,
                      "innerHTML",
                    ],
                    ["class", "overlay-text", 4, "ngIf"],
                    [1, "merge-button-container"],
                    [1, "merge-button", 3, "click"],
                    [1, "pi", "pi-arrow-circle-left", "arrow-icon"],
                    [1, "unmerge-button-container"],
                    [1, "unmerge-button", 3, "click"],
                    [1, "pi", "pi-arrow-circle-right", "arrow-icon"],
                    [1, "overlay-text"],
                    [1, "pi", "pi-check-circle", "select-unselect-icon"],
                    [1, "pi", "pi-times", "select-unselect-icon"],
                    [1, "card", "col-sm-12", 2, "height", "auto"],
                    [1, "row", "gutters"],
                    [
                      1,
                      "col-xl-12",
                      "col-lg-12",
                      "col-md-12",
                      "col-sm-12",
                      "col-12",
                    ],
                    [1, "h-100", "mt-5"],
                    [1, "card-body"],
                    [
                      1,
                      "col-xl-6",
                      "col-lg-6",
                      "col-md-6",
                      "col-sm-6",
                      "col-12",
                    ],
                    [1, "form-group"],
                    ["type", "file", 2, "width", "15vw", 3, "change"],
                    ["fileinput", ""],
                    [2, "color", "red"],
                    [
                      1,
                      "col-xl-12",
                      "col-lg-12",
                      "col-md-12",
                      "col-sm-12",
                      "col-12",
                      "mt-4",
                    ],
                    [1, "text-center"],
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
                    [3, "formGroup"],
                    [1, "card", "col-sm-12", 2, "height", "58vh"],
                    [
                      1,
                      "col-xl-6",
                      "col-lg-6",
                      "col-md-6",
                      "col-sm-6",
                      "col-12",
                      2,
                      "margin-right",
                      "350px",
                    ],
                    [
                      1,
                      "col-xl-4",
                      "col-lg-4",
                      "col-md-4",
                      "col-sm-4",
                      "col-12",
                    ],
                    ["for", "Name"],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Hours",
                      "formControlName",
                      "fromHours",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                    ],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Minutes",
                      "formControlName",
                      "fromMinutes",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                    ],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Seconds",
                      "formControlName",
                      "fromSeconds",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                    ],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Hours",
                      "formControlName",
                      "toHours",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                      "margin-right",
                      "15px",
                    ],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Minutes",
                      "formControlName",
                      "toMinutes",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                      "margin-right",
                      "15px",
                    ],
                    [
                      "type",
                      "number",
                      "placeholder",
                      "Seconds",
                      "formControlName",
                      "toSeconds",
                      1,
                      "form-control",
                      2,
                      "width",
                      "7vw",
                    ],
                    [1, "row", "gutters", "mt-4"],
                    [1, "text-right"],
                    [
                      "pButton",
                      "",
                      "type",
                      "button",
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
                      1,
                      "p-button-success",
                      3,
                      "click",
                    ],
                    [1, "timer-adjuster"],
                    ["for", "editTimer", 2, "margin-right", "8px"],
                    [1, "minus", 3, "click"],
                    [
                      "type",
                      "text",
                      1,
                      "timer-input",
                      3,
                      "ngModel",
                      "ngModelChange",
                    ],
                    [1, "plus", 3, "click"],
                    ["for", "editTextArea"],
                    ["id", "editTextArea", 3, "ngModel", "ngModelChange"],
                    [1, "dialog-buttons"],
                    [
                      "pButton",
                      "",
                      "type",
                      "button",
                      "label",
                      "Submit",
                      3,
                      "click",
                    ],
                    [
                      "pButton",
                      "",
                      "type",
                      "button",
                      "label",
                      "Cancel",
                      1,
                      "custom-cancel-button",
                      3,
                      "click",
                    ],
                    [
                      1,
                      "flex",
                      "flex-column",
                      "align-items-center",
                      "p-5",
                      "surface-overlay",
                      "border-round",
                    ],
                    [
                      1,
                      "border-circle",
                      "bg-primary",
                      "inline-flex",
                      "justify-content-center",
                      "align-items-center",
                      "h-6rem",
                      "w-6rem",
                      "-mt-8",
                    ],
                    [1, "pi", "pi-question", "text-5xl"],
                    [1, "font-bold", "text-2xl", "block", "mb-2", "mt-4"],
                    [1, "mb-0"],
                    [1, "flex", "align-items-center", "gap-2", "mt-4"],
                    ["pButton", "", "label", "Save", 1, "w-8rem", 3, "click"],
                    [
                      "pButton",
                      "",
                      "label",
                      "Cancel",
                      1,
                      "p-button-outlined",
                      "w-8rem",
                      3,
                      "click",
                    ],
                  ],
                  template: function (t, o) {
                    1 & t &&
                      (e.TgZ(0, "body"),
                      e.TgZ(1, "div", 0),
                      e.TgZ(2, "h1"),
                      e._uU(3),
                      e.qZA(),
                      e.qZA(),
                      e.TgZ(4, "div", 1),
                      e.TgZ(5, "a", 2),
                      e.NdJ("click", function () {
                        return [
                          (o.display = !0),
                          (o.AddDialogue = !0),
                          (o.timeRangeSelector = !1),
                          (o.message = "Upload Dialogue"),
                        ];
                      }),
                      e._uU(6, "Upload"),
                      e.qZA(),
                      e.TgZ(7, "a", 2),
                      e.NdJ("click", function () {
                        return o.fetchMovieDialogues();
                      }),
                      e._uU(8),
                      e.qZA(),
                      e.TgZ(9, "a", 2),
                      e.NdJ("click", function () {
                        return o.getDialoguesByStatus(!0);
                      }),
                      e._uU(10),
                      e.qZA(),
                      e.TgZ(11, "a", 2),
                      e.NdJ("click", function () {
                        return o.getDialoguesByStatus(!1);
                      }),
                      e._uU(12),
                      e.qZA(),
                      e.YNc(13, We, 2, 0, "a", 3),
                      e.YNc(14, Be, 2, 1, "a", 3),
                      e.qZA(),
                      e.TgZ(15, "div", 4),
                      e.TgZ(16, "div", 5),
                      e.YNc(17, $e, 16, 10, "div", 6),
                      e.qZA(),
                      e._UZ(18, "ngx-ui-loader", 7),
                      e.qZA(),
                      e._UZ(19, "footer"),
                      e.qZA(),
                      e.TgZ(20, "p-dialog", 8),
                      e.NdJ("visibleChange", function (s) {
                        return (o.display = s);
                      }),
                      e.YNc(21, Xe, 46, 0, "ng-container", 9),
                      e.YNc(22, Ve, 52, 1, "ng-container", 9),
                      e.qZA(),
                      e.TgZ(23, "p-dialog", 10),
                      e.NdJ("visibleChange", function (s) {
                        return (o.displayEditDialog = s);
                      }),
                      e.YNc(24, et, 16, 2, "ng-container", 9),
                      e.YNc(25, tt, 8, 1, "ng-container", 9),
                      e.qZA(),
                      e.TgZ(26, "p-confirmDialog", 11, 12),
                      e.NdJ("onHide", function () {
                        return (o.confirmPopup = !1);
                      }),
                      e.YNc(28, ot, 10, 2, "ng-template", 13),
                      e.qZA()),
                      2 & t &&
                        (e.xp6(3),
                        e.hij("", o.movieTitle, " Dialogues"),
                        e.xp6(5),
                        e.hij("Show all(", o.allCount, ")"),
                        e.xp6(2),
                        e.hij("Show Selected(", o.selectedCount, ")"),
                        e.xp6(2),
                        e.hij("Show Unselected(", o.unselectedCount, ")"),
                        e.xp6(1),
                        e.Q6J("ngIf", !o.timeRangeSelected),
                        e.xp6(1),
                        e.Q6J("ngIf", o.timeRangeSelected),
                        e.xp6(3),
                        e.Q6J("ngForOf", o.allDialogues),
                        e.xp6(1),
                        e.Q6J("fgsColor", "#000000")("fgsType", o.fgsType),
                        e.xp6(2),
                        e.Akn(e.DdM(27, it)),
                        e.Q6J("visible", o.display)("modal", !0)(
                          "header",
                          o.message
                        )("baseZIndex", 1e4),
                        e.xp6(1),
                        e.Q6J("ngIf", o.AddDialogue),
                        e.xp6(1),
                        e.Q6J("ngIf", o.timeRangeSelector),
                        e.xp6(1),
                        e.Akn(e.DdM(28, nt)),
                        e.Q6J("header", o.editDialogueHeaderMessage)(
                          "visible",
                          o.displayEditDialog
                        )("modal", !0)("closable", !0)("responsive", !0),
                        e.xp6(1),
                        e.Q6J("ngIf", o.editTextPopup),
                        e.xp6(1),
                        e.Q6J("ngIf", o.mergeDialoguePopup),
                        e.xp6(1),
                        e.Q6J("visible", o.confirmPopup));
                  },
                  directives: [
                    _.O5,
                    _.sg,
                    _.mk,
                    w.Rr,
                    q.u,
                    h.Eo,
                    M.V,
                    A.Hq,
                    l._Y,
                    l.JL,
                    l.sg,
                    l.wV,
                    l.Fj,
                    l.JJ,
                    l.u,
                    l.On,
                    C.Q,
                    v.jx,
                  ],
                  styles: [
                    "body[_ngcontent-%COMP%]{margin:0;padding:0;font-family:Arial,sans-serif;background-color:#e2e5de;display:flex;flex-direction:column;min-height:100vh;overflow-x:hidden;overscroll-behavior-x:none;touch-action:pan-y}#top-bar[_ngcontent-%COMP%]{background-color:#353d44;text-align:center;color:#fff;padding:1px;line-height:1}#navbar[_ngcontent-%COMP%]{background-color:#555;overflow:hidden;box-shadow:0 4px 8px #0000001a}#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left;display:block;color:#fff;text-align:center;padding:14px 16px;text-decoration:none}#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ddd;color:#000}.main-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;overflow-x:auto;flex-grow:1;margin-left:5px;margin-right:5px}.main-container-inner[_ngcontent-%COMP%]{display:flex;flex-direction:row;min-width:100%}.panel-body[_ngcontent-%COMP%]{position:relative;height:300px}.main-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;overflow-x:auto}.main-div[_ngcontent-%COMP%]{position:relative;flex-shrink:0;background-color:#fefefe;width:400px;min-height:200px;height:100%;margin-right:10px;justify-content:center;align-items:center;max-width:100%;box-sizing:border-box;box-shadow:0 4px 8px #0000001a;border-radius:10px}.sub-div-1[_ngcontent-%COMP%]{background-color:#67676c;width:100%;height:20px;display:flex;justify-content:space-between;align-items:center;border-top-left-radius:10px;border-top-right-radius:10px}.center-text[_ngcontent-%COMP%]{display:flex;align-items:center;flex-grow:1}.timer-div.selected[_ngcontent-%COMP%]{width:80px;height:20px;border-radius:10px;background-color:#fff530;text-align:center;margin:0 auto;color:#000}.timer-div.unselected[_ngcontent-%COMP%]{width:80px;height:20px;border-radius:10px;background-color:#fff;text-align:center;margin:0 auto;color:#000}.right-text[_ngcontent-%COMP%]{margin:0;text-align:right}.image-style[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover}.screenshots-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;transition:transform .3s ease}footer[_ngcontent-%COMP%]{background-color:#353d44;color:#fff;text-align:center;padding:30px;margin-top:auto}.merge-button[_ngcontent-%COMP%]{display:flex;align-items:center;padding:3px;background-color:#3f5062;color:#fff;border:none;border-radius:5px;cursor:pointer}.arrow-icon[_ngcontent-%COMP%]{font-size:19px;margin-right:5px}.merge-button-container[_ngcontent-%COMP%]{position:absolute;top:-32px;left:10px}.unmerge-button-container[_ngcontent-%COMP%]{position:absolute;top:-32px;right:10px}.unmerge-button[_ngcontent-%COMP%]{display:flex;align-items:center;padding:3px;background-color:#267c89;color:#fff;border:none;border-radius:5px;cursor:pointer}.file-edit-icon-container[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;margin:5px;z-index:10}.file-edit-icon[_ngcontent-%COMP%]{font-size:24px;cursor:pointer;color:#5193d9}textarea[_ngcontent-%COMP%]{width:100%;height:28vh;border-radius:5px;border-color:#babac0}.dialog-buttons[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;margin:10px}button[_ngcontent-%COMP%]{margin-right:8px;height:27px}.custom-cancel-button[_ngcontent-%COMP%]{background-color:silver;color:#000;border:none}.custom-cancel-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#9a9999;color:#000}.dialogue-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;height:100%;min-height:200px;position:relative;cursor:pointer;transition:background-color .3s;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.dialogue-content-container[_ngcontent-%COMP%]:hover{background-color:#abaaaa}.dialogue-body[_ngcontent-%COMP%], .custom-dialogue-body[_ngcontent-%COMP%]{flex:1}.overlay-text[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:16px;font-family:Arial,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;display:none}.dialogue-content-container.selected[_ngcontent-%COMP%]   .overlay-text[_ngcontent-%COMP%]{display:none}.dialogue-content-container.selected[_ngcontent-%COMP%]:hover   .overlay-text[_ngcontent-%COMP%], .selected[_ngcontent-%COMP%]   .overlay-text[_ngcontent-%COMP%]{display:block}.select-unselect-icon[_ngcontent-%COMP%]{font-size:19px}.dialogue-content-container.selected[_ngcontent-%COMP%]:hover{background-color:#abaaaa}.file-edit-icon-container[_ngcontent-%COMP%]:hover + .dialogue-content-container.selected[_ngcontent-%COMP%]{background-color:transparent}.file-edit-icon-container[_ngcontent-%COMP%]:hover + .dialogue-content-container.selected[_ngcontent-%COMP%]   .overlay-text[_ngcontent-%COMP%]{display:block}.timer-adjuster[_ngcontent-%COMP%]{display:inline-block;position:relative}.timer-input[_ngcontent-%COMP%]{width:100px;text-align:center;height:34px;font-size:26px;border:1px solid #ddd;border-radius:4px;display:inline-block;vertical-align:middle}.minus[_ngcontent-%COMP%], .plus[_ngcontent-%COMP%]{width:25px;height:25px;background:#f2f2f2;border-radius:4px;border:1px solid #ddd;display:inline-flex;align-items:center;justify-content:center;cursor:pointer}.minus[_ngcontent-%COMP%]{margin-right:5px}.plus[_ngcontent-%COMP%]{margin-left:5px}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff530}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#f5ff408a}",
                  ],
                })),
                n
              );
            })(),
          },
        ];
      let rt = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [[T.Bz.forChild(st)], T.Bz] })),
          n
        );
      })();
      var lt = d(5366);
      let ct = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({
            imports: [[_.ez, lt.m, l.u5, l.UX, rt, S.q4, w.rP, P.p9, C.D]],
          })),
          n
        );
      })();
    },
  },
]);
