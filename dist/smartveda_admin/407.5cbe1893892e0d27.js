"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[407],{7407:(se,v,a)=>{a.r(v),a.d(v,{MoviesModule:()=>le});var p=a(9808),m=a(1083),u=a(8441),l=a(3075),d=a(9783),e=a(5e3),_=a(2866),Z=a(7650),A=a(7673),T=a(7398),g=a(4255),f=a(1424),M=a(845),b=a(4119),x=a(5315),S=a(7446),q=a(9114);const y=["ActiveMovieTable"];function C(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",38),e.TgZ(1,"span",39),e._UZ(2,"i",40),e.TgZ(3,"input",41),e.NdJ("input",function(o){return e.CHM(t),e.oxw().FilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("value",t.MovieSearchKeyWord.Gsearch)}}function w(n,s){if(1&n&&(e.TgZ(0,"th",49),e._uU(1),e._UZ(2,"p-sortIcon",50),e.qZA()),2&n){const t=s.$implicit;e.Q6J("pSortableColumn",t.field),e.xp6(1),e.hij("",t.headers," "),e.xp6(1),e.Q6J("field",t.field)}}function J(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"th"),e._uU(2,"S.no"),e.qZA(),e.YNc(3,w,3,3,"th",42),e.TgZ(4,"th"),e._uU(5,"Options"),e.qZA(),e.qZA(),e.TgZ(6,"tr"),e.TgZ(7,"th"),e._UZ(8,"input",43),e.qZA(),e.TgZ(9,"th"),e.TgZ(10,"input",44),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(11,"th"),e.TgZ(12,"input",45),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(13,"th"),e.TgZ(14,"input",46),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(15,"th"),e.TgZ(16,"input",47),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(17,"th"),e.TgZ(18,"input",48),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(19,"th"),e._UZ(20,"input",43),e.qZA(),e.qZA()}if(2&n){const t=s.$implicit,i=e.oxw();e.xp6(3),e.Q6J("ngForOf",t),e.xp6(7),e.Q6J("value",i.MovieSearchKeyWord.title),e.xp6(2),e.Q6J("value",i.MovieSearchKeyWord.director),e.xp6(2),e.Q6J("value",i.MovieSearchKeyWord.releaseYear),e.xp6(2),e.Q6J("value",i.MovieSearchKeyWord.length)}}function U(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e.TgZ(12,"button",51),e._uU(13,"Active"),e.qZA(),e.qZA(),e.TgZ(14,"td"),e.TgZ(15,"div",52),e.TgZ(16,"button",53),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().deleteMovies(null==r?null:r.id)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.rowIndex,i=s.$implicit;e.xp6(2),e.Oqu(t+1),e.xp6(2),e.Oqu(null==i?null:i.title),e.xp6(2),e.Oqu(null==i?null:i.director),e.xp6(2),e.Oqu(null==i?null:i.releaseYear),e.xp6(2),e.Oqu(null==i?null:i.length)}}function k(n,s){1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td",54),e._uU(2," No Records Found. "),e.qZA(),e.qZA())}function I(n,s){if(1&n&&(e.TgZ(0,"div",17),e.TgZ(1,"div",18),e._UZ(2,"img",55),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("src",t.imageUrl,e.LSH)}}const N=function(){return[10,50,100]},F=function(){return["title","length","isActive"]},Y=function(){return{width:"60vw",height:"100vh"}},H=function(){return{width:"40vw"}};let K=(()=>{class n{constructor(t,i,o,r,c,h){this.ngxLoader=t,this.MoviesService=i,this.toastr=o,this.CommonService=r,this.confirmationService=c,this.fb=h,this.moviesList=[],this.display=!1,this.ActiveMoviesForm=this.fb.group({Director:["",[l.kI.required]],File:["",[l.kI.required]],IsActive:["",[l.kI.required]],releaseYear:["",[l.kI.required]],Length:["",[l.kI.required]],PosterContent:["",[l.kI.required]],PosterContentThumb:["",[l.kI.required]],Title:["",[l.kI.required]],hours:["",[l.kI.required]],minutes:["",[l.kI.required]],seconds:["",[l.kI.required]],Rating:["",[l.kI.required]]})}ngOnInit(){this.sidebarSpacing="contracted",this.fgsType=u.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.cols=[{field:"title",show:!0,headers:"Movie title"},{field:"director",show:!0,headers:"Director"},{field:"releaseyear",show:!0,headers:"Release Year"},{field:"length",show:!0,headers:"Length"},{field:"isActive",show:!0,headers:"Is Active"}],this.MoviesService.MovieSearchKeyWord.subscribe(t=>{this.MovieSearchKeyWord=t}),this.getMovieList()}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}getMovieList(){this.MoviesService.getMovieList().subscribe(t=>{this.moviesList=t.filter(i=>!0===i.isActive),this.activeMovieSearch(),this.ngxLoader.stop()})}applyFilterGlobal(t,i){switch(t.target.id){case"title":this.MovieSearchKeyWord.title=t.target.value,this.ActiveMovieTable.filter(t.target.value,t.target.id,i);break;case"director":this.MovieSearchKeyWord.director=t.target.value,this.ActiveMovieTable.filter(t.target.value,t.target.id,i);break;case"releaseYear":this.MovieSearchKeyWord.releaseYear=t.target.value,this.ActiveMovieTable.filter(t.target.value,t.target.id,i);break;case"length":this.MovieSearchKeyWord.length=t.target.value,this.ActiveMovieTable.filter(t.target.value,t.target.id,i)}}EditMovies(t){let i=this.moviesList.filter(o=>o.id===t);this.ActiveMoviesForm.patchValue({Director:i[0].director,Title:i[0].title}),this.display=!0}AddMovies(){this.ActiveMoviesForm.reset(),this.display=!0}OnChange(t){this.image=t.target.files;var i=new FileReader;i.readAsDataURL(t.target.files[0]),i.onload=o=>{this.imageUrl=o.target.result}}deleteMovies(t){this.confirmationService.confirm({message:"Are you sure that you want to delete Active Movies ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.MoviesService.deleteMovies(t).subscribe(i=>{this.getMovieList()})}})}ngOnDestroy(){this.MoviesService.MovieSearchKeyWord.next(this.MovieSearchKeyWord),this.CommonService.setMovieSerachWord(this.MovieSearchKeyWord)}activeMovieSearch(){null!=this.MovieSearchKeyWord.title&&this.MovieSearchKeyWord.title.trim().length>0&&this.ActiveMovieTable.filter(this.MovieSearchKeyWord.title,"title","contains"),null!=this.MovieSearchKeyWord.director&&this.MovieSearchKeyWord.director.trim().length>0&&this.ActiveMovieTable.filter(this.MovieSearchKeyWord.director,"director","contains"),null!=this.MovieSearchKeyWord.releaseYear&&this.MovieSearchKeyWord.releaseYear.trim().length>0&&this.ActiveMovieTable.filter(this.MovieSearchKeyWord.releaseYear,"releaseYear","contains"),null!=this.MovieSearchKeyWord.length&&this.MovieSearchKeyWord.length.trim().length>0&&this.ActiveMovieTable.filter(this.MovieSearchKeyWord.length,"length","contains"),null!=this.MovieSearchKeyWord.Gsearch&&this.MovieSearchKeyWord.Gsearch.trim().length>0&&this.ActiveMovieTable.filterGlobal(this.MovieSearchKeyWord.Gsearch,"contains")}FilterGlobal(t,i){this.MovieSearchKeyWord.Gsearch=t.target.value,this.ActiveMovieTable.filterGlobal(t.target.value,i)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.LA),e.Y36(_.I),e.Y36(Z.$),e.Y36(A.v),e.Y36(d.YP),e.Y36(l.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-active-movies"]],viewQuery:function(t,i){if(1&t&&e.Gf(y,5),2&t){let o;e.iGM(o=e.CRH())&&(i.ActiveMovieTable=o.first)}},features:[e._Bn([d.YP])],decls:71,vars:30,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","dataKey","id","stateStorage","session","stateKey","activeMovie-session","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","rowsPerPageOptions","showCurrentPageReport","value","resizableColumns","responsive","globalFilterFields"],["ActiveMovieTable",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],["header","Add Movies","position","top",3,"visible","modal","baseZIndex","visibleChange"],[3,"formGroup"],[1,"card","col-sm-12"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-5"],[1,"card-body"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["type","text","formControlName","Title",1,"form-control"],["for","image"],["type","text","formControlName","Director",1,"form-control"],["for","Name"],["type","date","formControlName","releaseYear",1,"form-control"],["for","type","id","label"],["formControlName","Rating","placeholder","Select Rating",1,"form-control"],[3,"value"],[1,"example-section"],[1,"example-margin"],["type","file",1,"form-control",3,"change"],["class","col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",4,"ngIf"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"click"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success"],["header","Confirmation","position","top","icon","pi pi-exclamation-triangle",3,"baseZIndex"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search by columnName",3,"value","input"],[3,"pSortableColumn",4,"ngFor","ngForOf"],["pInputText","","type","text","disabled","","placeholder","No Search",1,"w-full","intputSearch"],["pInputText","","type","text","id","title","placeholder","Search by Title",1,"w-full","intputSearch",3,"value","input"],["pInputText","","type","text","id","director","placeholder","Search by Director",1,"w-full","intputSearch",3,"value","input"],["pInputText","","type","text","id","releaseYear","placeholder","Search by Year",1,"w-full","intputSearch",3,"value","input"],["pInputText","","type","text","id","length","placeholder","Search by Length",1,"w-full","intputSearch",3,"value","input"],["pInputText","","type","text","disabled","","placeholder","No Search",1,"w-full","intputSearch",3,"input"],[3,"pSortableColumn"],[3,"field"],["pButton","","type","button",1,"p-button-success",2,"height","30px"],[1,"btn-grp"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete movie","tooltipPosition","bottom",1,"p-button-danger",2,"margin-right","5px",3,"click"],["colspan","12",1,"text-center","text-danger","font-weight-700"],[1,"form-control",2,"width","80%","height","10vh",3,"src"]],template:function(t,i){1&t&&(e.TgZ(0,"app-header",0),e.NdJ("toggleSidebar",function(r){return i.onToggleSidebar(r)}),e.qZA(),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"p-table",3,4),e.YNc(5,C,4,1,"ng-template",5),e.YNc(6,J,21,5,"ng-template",6),e.YNc(7,U,17,5,"ng-template",7),e.YNc(8,k,3,0,"ng-template",8),e.qZA(),e._UZ(9,"ngx-ui-loader",9),e.qZA(),e.TgZ(10,"p-dialog",10),e.NdJ("visibleChange",function(r){return i.display=r}),e.TgZ(11,"form",11),e.TgZ(12,"div",12),e.TgZ(13,"div",13),e.TgZ(14,"div",14),e.TgZ(15,"div",15),e.TgZ(16,"div",16),e.TgZ(17,"div",13),e.TgZ(18,"div",17),e.TgZ(19,"div",18),e.TgZ(20,"label",19),e._uU(21,"Title"),e.qZA(),e._UZ(22,"input",20),e.qZA(),e.qZA(),e.TgZ(23,"div",17),e.TgZ(24,"div",18),e.TgZ(25,"label",21),e._uU(26,"Director "),e.qZA(),e._UZ(27,"input",22),e.qZA(),e.qZA(),e.TgZ(28,"div",17),e.TgZ(29,"div",18),e.TgZ(30,"label",23),e._uU(31,"Release Year"),e.qZA(),e._UZ(32,"input",24),e.qZA(),e.qZA(),e.TgZ(33,"div",17),e.TgZ(34,"div",13),e.TgZ(35,"div",17),e.TgZ(36,"label",25),e._uU(37,"Rating"),e.qZA(),e.TgZ(38,"div",18),e.TgZ(39,"select",26),e.TgZ(40,"option",27),e._uU(41,"1"),e.qZA(),e.TgZ(42,"option",27),e._uU(43,"2"),e.qZA(),e.TgZ(44,"option",27),e._uU(45,"3"),e.qZA(),e.TgZ(46,"option",27),e._uU(47,"5"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"div",17),e.TgZ(49,"section",28),e.TgZ(50,"mat-checkbox",29),e._uU(51,"Enabled"),e.qZA(),e.qZA(),e.TgZ(52,"section",28),e.TgZ(53,"mat-checkbox",29),e._uU(54,"Featured"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(55,"div",17),e.TgZ(56,"div",13),e.TgZ(57,"div",17),e.TgZ(58,"div",18),e.TgZ(59,"label",23),e._uU(60,"Movies Poster"),e.qZA(),e.TgZ(61,"input",30),e.NdJ("change",function(r){return i.OnChange(r)}),e.qZA(),e.qZA(),e.qZA(),e.YNc(62,I,3,1,"div",31),e.qZA(),e.qZA(),e.qZA(),e.TgZ(63,"div",32),e.TgZ(64,"div",33),e.TgZ(65,"div",34),e.TgZ(66,"button",35),e.NdJ("click",function(){return i.display=!1}),e._uU(67,"Cancel"),e.qZA(),e.TgZ(68,"button",36),e._uU(69,"Submit"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(70,"p-confirmDialog",37),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngClass",i.sidebarSpacing),e.xp6(2),e.Q6J("columns",i.cols)("paginator",!0)("rows",10)("rowsPerPageOptions",e.DdM(26,N))("showCurrentPageReport",!0)("value",i.moviesList)("resizableColumns",!0)("responsive",!0)("globalFilterFields",e.DdM(27,F)),e.xp6(6),e.Q6J("fgsColor","#000000")("fgsType",i.fgsType),e.xp6(1),e.Akn(e.DdM(28,Y)),e.Q6J("visible",i.display)("modal",!0)("baseZIndex",1e4),e.xp6(1),e.Q6J("formGroup",i.ActiveMoviesForm),e.xp6(29),e.Q6J("value",1),e.xp6(2),e.Q6J("value",2),e.xp6(2),e.Q6J("value",3),e.xp6(2),e.Q6J("value",5),e.xp6(16),e.Q6J("ngIf",null!=i.imageUrl),e.xp6(8),e.Akn(e.DdM(29,H)),e.Q6J("baseZIndex",1e4))},directives:[T.G,p.mk,g.iA,d.jx,f.o,p.sg,g.lQ,g.fz,M.Hq,b.u,u.Eo,x.V,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.EJ,l.YN,l.Kr,S.oG,p.O5,q.Q],styles:[".btn-grp[_ngcontent-%COMP%]{display:flex}th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:left!important;font-size:200!important}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}[_nghost-%COMP%]     .p-menuitem-link-active{background-color:#00008b!important;color:#fff}"]}),n})();const L=["AllMovieTable"];function P(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"span",14),e._UZ(2,"i",15),e.TgZ(3,"input",16),e.NdJ("input",function(o){return e.CHM(t),e.oxw().FilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(4,"span",14),e.TgZ(5,"button",17),e.NdJ("click",function(){return e.CHM(t),e.oxw().AddMovies()}),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("value",t.MovieSearchKeyWord.Gsearch)}}function W(n,s){if(1&n&&(e.TgZ(0,"th",27),e._uU(1),e._UZ(2,"p-sortIcon",28),e.qZA()),2&n){const t=s.$implicit;e.Q6J("pSortableColumn",t.field),e.xp6(1),e.hij("",t.headers," "),e.xp6(1),e.Q6J("field",t.field)}}function Q(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"th"),e._uU(2,"S.no"),e.qZA(),e.YNc(3,W,3,3,"th",18),e.TgZ(4,"th"),e._uU(5,"Options"),e.qZA(),e.qZA(),e.TgZ(6,"tr"),e.TgZ(7,"th"),e.TgZ(8,"input",19),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(9,"th"),e.TgZ(10,"input",20),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(11,"th"),e.TgZ(12,"input",21),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(13,"th"),e.TgZ(14,"input",22),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(15,"th"),e.TgZ(16,"input",23),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(17,"th"),e.TgZ(18,"input",24),e.NdJ("input",function(o){return e.CHM(t),e.oxw().applyFilterGlobal(o,"contains")}),e.qZA(),e.qZA(),e.TgZ(19,"th"),e._UZ(20,"input",25),e.qZA(),e.TgZ(21,"th"),e._UZ(22,"input",26),e.qZA(),e.TgZ(23,"th"),e._UZ(24,"input",26),e.qZA(),e.qZA()}if(2&n){const t=s.$implicit,i=e.oxw();e.xp6(3),e.Q6J("ngForOf",t),e.xp6(7),e.Q6J("value",i.MovieSearchKeyWord.title),e.xp6(2),e.Q6J("value",i.MovieSearchKeyWord.director),e.xp6(2),e.Q6J("value",i.MovieSearchKeyWord.releaseYear),e.xp6(2),e.Q6J("value",i.MovieSearchKeyWord.length)}}function G(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().markAsActive(null==o?null:o.id,!1)}),e._uU(1,"Active"),e.qZA()}}function O(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",38),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().markAsActive(null==o?null:o.id,!0)}),e._uU(1,"InActive"),e.qZA()}}function D(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e.TgZ(12,"div",29),e.YNc(13,G,2,0,"button",30),e.YNc(14,O,2,0,"button",31),e.qZA(),e.qZA(),e.TgZ(15,"td"),e.TgZ(16,"img",32),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().updateMoviePoster(null==r?null:r.id)}),e.qZA(),e.qZA(),e.TgZ(17,"td",33),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return[o.display=!0,o.screenshot=!0,o.moviePoster=!1,o.addEditMovie=!1]}),e.TgZ(18,"a",34),e._uU(19,"Screen_Shot"),e.qZA(),e.qZA(),e.TgZ(20,"td"),e.TgZ(21,"div",29),e.TgZ(22,"button",35),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().EditMovies(null==r?null:r.id)}),e.qZA(),e.TgZ(23,"button",36),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().deleteMovies(null==r?null:r.id)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.rowIndex,i=s.$implicit;e.xp6(2),e.Oqu(t+1),e.xp6(2),e.Oqu(null==i?null:i.title),e.xp6(2),e.Oqu(null==i?null:i.director),e.xp6(2),e.Oqu(null==i?null:i.releaseYear),e.xp6(2),e.lnq("",null==i?null:i.HH,":",null==i?null:i.MM,":",null==i?null:i.SS,""),e.xp6(3),e.Q6J("ngIf",1==i.isActive),e.xp6(1),e.Q6J("ngIf",0==i.isActive),e.xp6(2),e.Q6J("src",null==i?null:i.posterContentThumb,e.LSH)}}function R(n,s){1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td",39),e._uU(2," No Records Found. "),e.qZA(),e.qZA())}function E(n,s){if(1&n&&(e.TgZ(0,"div",46),e.TgZ(1,"div",47),e._UZ(2,"img",65),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("src",t.posterContentThumb,e.LSH)}}function B(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"form",40),e.TgZ(2,"div",41),e.TgZ(3,"div",42),e.TgZ(4,"div",43),e.TgZ(5,"div",44),e.TgZ(6,"div",45),e.TgZ(7,"div",42),e.TgZ(8,"div",46),e.TgZ(9,"div",47),e.TgZ(10,"label",48),e._uU(11,"Title"),e.qZA(),e._UZ(12,"input",49),e.qZA(),e.qZA(),e.TgZ(13,"div",46),e.TgZ(14,"div",47),e.TgZ(15,"label",50),e._uU(16,"Director "),e.qZA(),e._UZ(17,"input",51),e.qZA(),e.qZA(),e.TgZ(18,"div",46),e.TgZ(19,"div",47),e.TgZ(20,"label",52),e._uU(21,"Release Year"),e.qZA(),e._UZ(22,"input",53),e.qZA(),e.qZA(),e.TgZ(23,"div",46),e.TgZ(24,"div",42),e.TgZ(25,"div",46),e.TgZ(26,"div",47),e.TgZ(27,"label",52),e._uU(28,"Movie Poster"),e.qZA(),e.TgZ(29,"input",54),e.NdJ("change",function(o){return e.CHM(t),e.oxw().OnChangePosterContentthumb(o)}),e.qZA(),e.qZA(),e.qZA(),e.YNc(30,E,3,1,"div",55),e.qZA(),e.qZA(),e.TgZ(31,"div",46),e.TgZ(32,"div",42),e.TgZ(33,"div",56),e.TgZ(34,"div",47),e.TgZ(35,"label",52),e._uU(36,"HH"),e.qZA(),e._UZ(37,"input",57),e.qZA(),e.qZA(),e.TgZ(38,"div",56),e.TgZ(39,"div",47),e.TgZ(40,"label",52),e._uU(41,"MM"),e.qZA(),e._UZ(42,"input",58),e.qZA(),e.qZA(),e.TgZ(43,"div",56),e.TgZ(44,"div",47),e.TgZ(45,"label",52),e._uU(46,"SS"),e.qZA(),e._UZ(47,"input",59),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"div",60),e.TgZ(49,"div",61),e.TgZ(50,"div",62),e.TgZ(51,"button",63),e.NdJ("click",function(){return e.CHM(t),e.oxw().display=!1}),e._uU(52,"Cancel"),e.qZA(),e.TgZ(53,"button",64),e.NdJ("click",function(){return e.CHM(t),e.oxw().Submit()}),e._uU(54,"Submit"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.AllMoviesForm),e.xp6(29),e.Q6J("ngIf",null!=t.posterContentThumb)}}function z(n,s){if(1&n&&(e.TgZ(0,"div",46),e.TgZ(1,"div",47),e._UZ(2,"img",65),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("src",t.posterContentThumb,e.LSH)}}function j(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"form",40),e.TgZ(2,"div",66),e.TgZ(3,"div",42),e.TgZ(4,"div",43),e.TgZ(5,"div",44),e.TgZ(6,"div",45),e.TgZ(7,"div",42),e.TgZ(8,"div",46),e.TgZ(9,"div",47),e.TgZ(10,"label",48),e._uU(11,"Title"),e.qZA(),e._UZ(12,"input",49),e.qZA(),e.qZA(),e.TgZ(13,"div",46),e.TgZ(14,"div",42),e.TgZ(15,"div",46),e.TgZ(16,"div",47),e.TgZ(17,"label",52),e._uU(18,"Movie Poster"),e.qZA(),e.TgZ(19,"input",54),e.NdJ("change",function(o){return e.CHM(t),e.oxw().OnChangePosterContentthumb(o)}),e.qZA(),e.qZA(),e.qZA(),e.YNc(20,z,3,1,"div",55),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",60),e.TgZ(22,"div",61),e.TgZ(23,"div",62),e.TgZ(24,"button",63),e.NdJ("click",function(){return e.CHM(t),e.oxw().display=!1}),e._uU(25,"Cancel"),e.qZA(),e.TgZ(26,"button",64),e.NdJ("click",function(){return e.CHM(t),e.oxw().submitMoviePosterData()}),e._uU(27,"Submit"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.PosterForm),e.xp6(19),e.Q6J("ngIf",null!=t.posterContentThumb)}}function X(n,s){if(1&n&&(e.TgZ(0,"div",46),e.TgZ(1,"div",47),e._UZ(2,"img",65),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("src",t.screenShotImage,e.LSH)}}function V(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"form",40),e.TgZ(2,"div",66),e.TgZ(3,"div",42),e.TgZ(4,"div",43),e.TgZ(5,"div",44),e.TgZ(6,"div",45),e.TgZ(7,"div",42),e.TgZ(8,"div",46),e.TgZ(9,"div",47),e.TgZ(10,"label",48),e._uU(11,"Title"),e.qZA(),e._UZ(12,"input",49),e.qZA(),e.qZA(),e.TgZ(13,"div",46),e.TgZ(14,"div",42),e.TgZ(15,"div",46),e.TgZ(16,"div",47),e.TgZ(17,"label",52),e._uU(18,"Screenshot"),e.qZA(),e.TgZ(19,"input",54),e.NdJ("change",function(o){return e.CHM(t),e.oxw().OnchangeScreenShot(o)}),e.qZA(),e.qZA(),e.qZA(),e.YNc(20,X,3,1,"div",55),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",60),e.TgZ(22,"div",61),e.TgZ(23,"div",62),e.TgZ(24,"button",63),e.NdJ("click",function(){return e.CHM(t),e.oxw().display=!1}),e._uU(25,"Cancel"),e.qZA(),e.TgZ(26,"button",64),e.NdJ("click",function(){return e.CHM(t),e.oxw().submitMoviePosterData()}),e._uU(27,"Submit"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.PosterForm),e.xp6(19),e.Q6J("ngIf",null!=t.screenShotImage)}}const $=function(){return[10,50,100]},ee=function(){return["title","length","isActive","releaseYear","director","length"]},te=function(){return{width:"70vw",height:"100vh"}},ie=function(){return{width:"40vw"}},oe=[{path:"all-movies",component:(()=>{class n{constructor(t,i,o,r,c,h){this.ngxLoader=t,this.fb=i,this.MoviesService=o,this.CommonService=r,this.confirmationService=c,this.toastr=h,this.addEditMovie=!1,this.screenshot=!1,this.moviePoster=!1,this.display=!1,this.baseUrl="http://44.211.90.48",this.posterContent=void 0,this.posterContentThumb=void 0,this.screenShotImage=void 0,this.AllMoviesForm=this.fb.group({id:[""],title:["",[l.kI.required]],director:["",[l.kI.required]],releaseYear:["",[l.kI.required]],length:["",[l.kI.required]],posterContent:["",[l.kI.required]],posterContentThumb:[""],hours:["",[l.kI.required]],minutes:["",[l.kI.required]],seconds:["",[l.kI.required]],isActive:[""]}),this.PosterForm=this.fb.group({id:[""],title:[""]})}ngOnInit(){this.sidebarSpacing="contracted",this.fgsType=u.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.cols=[{field:"title",show:!0,headers:"Movie title"},{field:"director",show:!0,headers:"Director"},{field:"releaseYear",show:!0,headers:"Release Year"},{field:"length",show:!0,headers:"Length"},{field:"isActive",show:!0,headers:"Status"},{field:"posterContentThumb",show:!0,headers:"Movie Poster"},{field:"screenshot",show:!0,headers:"ScreenShot"}],this.MoviesService.MovieSearchKeyWord.subscribe(t=>{this.MovieSearchKeyWord=t}),this.getMovieList()}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}getMovieList(){this.MoviesService.getMovieList().subscribe(t=>{this.moviesList=t,this.moviesList.map(i=>{i.posterContentThumb=this.baseUrl.concat(i.posterContentThumb),i.HH=this.consverIntoHHMMSS(i.length).HH,i.MM=this.consverIntoHHMMSS(i.length).MM,i.SS=this.consverIntoHHMMSS(i.length).SS}),this.allMovieSearch(),this.ngxLoader.stop()})}applyFilterGlobal(t,i){switch(t.target.id){case"title":this.MovieSearchKeyWord.title=t.target.value,this.AllMovieTable.filter(t.target.value,t.target.id,i);break;case"director":this.MovieSearchKeyWord.director=t.target.value,this.AllMovieTable.filter(t.target.value,t.target.id,i);break;case"releaseYear":this.MovieSearchKeyWord.releaseYear=t.target.value,this.AllMovieTable.filter(t.target.value,t.target.id,i);break;case"length":this.MovieSearchKeyWord.length=t.target.value,this.AllMovieTable.filter(t.target.value,t.target.id,i)}}EditMovies(t){this.addEditMovie=!0;let i=this.moviesList.filter(o=>o.id===t);this.AllMoviesForm.patchValue({title:i[0].title,director:i[0].director,releaseYear:i[0].releaseYear,hours:this.consverIntoHHMMSS(i[0].length).HH,seconds:this.consverIntoHHMMSS(i[0].length).SS,minutes:this.consverIntoHHMMSS(i[0].length).MM}),this.posterContentThumb=i[0].posterContentThumb,this.headerMessage="Edit Movie",this.display=!0}AddMovies(){this.headerMessage="Add Movie",this.addEditMovie=!0,this.AllMoviesForm.reset(),this.display=!0,this.posterContentThumb=null}OnChangePosterContentthumb(t){var i=new FileReader;this.image=t.target.files[0],i.readAsDataURL(t.target.files[0]),i.onload=o=>{this.posterContentThumb=o.target.result}}OnchangeScreenShot(t){var i=new FileReader;this.image=t.target.files[0],i.readAsDataURL(t.target.files[0]),i.onload=o=>{this.screenShotImage=o.target.result}}deleteMovies(t){this.confirmationService.confirm({message:"Are you sure that you want to delete this Movies ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.MoviesService.deleteMovies(t).subscribe(i=>{this.getMovieList()})}})}markAsActive(t,i){this.message=i?"Are you sure that you want to mark as Active":"Are you sure that you want to mark as InActive",this.confirmationService.confirm({message:this.message,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start();let o=this.moviesList.filter(r=>r.id===t);o[0].posterContentThumb=o[0].posterContentThumb.split("http://44.211.90.48/")[1],o[0].isActive=i,console.log(o[0]),this.MoviesService.markAsActive(o[0]).subscribe(r=>{r&&(this.toastr.showSuccess(" Status change successfully","Status change"),this.getMovieList())})}})}consverIntoHHMMSS(t){const i=(t/3600).toString().split(".")[0],o=t%3600;return{MM:(o/60).toString().split(".")[0],HH:i,SS:o%60}}Submit(){const t={Title:this.AllMoviesForm.controls.title.value,Director:this.AllMoviesForm.controls.director.value,ReleaseYear:this.AllMoviesForm.controls.releaseYear.value,Hour:this.AllMoviesForm.controls.hours.value,Minute:this.AllMoviesForm.controls.minutes.value,Seconds:this.AllMoviesForm.controls.seconds.value,IsActive:!1,PosterImage:this.image};this.ngxLoader.start(),this.MoviesService.Submit(t).subscribe(i=>{i?(this.toastr.showSuccess(" Movie data is updated successfully","movie data"),this.display=!1,this.getMovieList()):(this.toastr.showSuccess("somthing going wrong","please check"),this.display=!1,this.getMovieList())})}updateMoviePoster(t){this.addEditMovie=!1,this.moviePoster=!0,this.screenshot=!1;let i=this.moviesList.filter(o=>o.id===t);this.PosterForm.patchValue({title:i[0].title,id:t}),this.posterContentThumb=i[0].posterContentThumb,this.display=!0}submitMoviePosterData(){this.display=!1;const t={id:this.PosterForm.controls.id.value,PosterImage:this.image};this.ngxLoader.start(),this.MoviesService.submitMoviePosterData(t).subscribe(i=>{i?(this.toastr.showSuccess(" Movie poster is updated successfully","movie poster"),this.display=!1,this.getMovieList()):(this.toastr.showSuccess("somthing going wrong","please check"),this.display=!1,this.getMovieList())})}ngOnDestroy(){this.MoviesService.MovieSearchKeyWord.next(this.MovieSearchKeyWord),this.CommonService.setMovieSerachWord(this.MovieSearchKeyWord)}allMovieSearch(){null!=this.MovieSearchKeyWord.title&&this.MovieSearchKeyWord.title.trim().length>0&&this.AllMovieTable.filter(this.MovieSearchKeyWord.title,"title","contains"),null!=this.MovieSearchKeyWord.director&&this.MovieSearchKeyWord.director.trim().length>0&&this.AllMovieTable.filter(this.MovieSearchKeyWord.director,"director","contains"),null!=this.MovieSearchKeyWord.releaseYear&&this.MovieSearchKeyWord.releaseYear.trim().length>0&&this.AllMovieTable.filter(this.MovieSearchKeyWord.releaseYear,"releaseYear","contains"),null!=this.MovieSearchKeyWord.length&&this.MovieSearchKeyWord.length.trim().length>0&&this.AllMovieTable.filter(this.MovieSearchKeyWord.length,"length","contains"),null!=this.MovieSearchKeyWord.Gsearch&&this.MovieSearchKeyWord.Gsearch.trim().length>0&&this.AllMovieTable.filterGlobal(this.MovieSearchKeyWord.Gsearch,"contains")}FilterGlobal(t,i){this.MovieSearchKeyWord.Gsearch=t.target.value,this.AllMovieTable.filterGlobal(t.target.value,i)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.LA),e.Y36(l.qu),e.Y36(_.I),e.Y36(A.v),e.Y36(d.YP),e.Y36(Z.$))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-all-movies"]],viewQuery:function(t,i){if(1&t&&e.Gf(L,5),2&t){let o;e.iGM(o=e.CRH())&&(i.AllMovieTable=o.first)}},features:[e._Bn([d.YP])],decls:15,vars:28,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","dataKey","id","stateStorage","session","stateKey","AllMovie-session","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","rowsPerPageOptions","showCurrentPageReport","value","resizableColumns","responsive","globalFilterFields"],["AllMovieTable",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],["position","top",3,"visible","modal","header","baseZIndex","visibleChange"],[4,"ngIf"],["header","Confirmation","position","top","icon","pi pi-exclamation-triangle",3,"baseZIndex"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search by columnName",3,"value","input"],["pButton","","type","button","label","Add Movie",1,"p-button-success",3,"click"],[3,"pSortableColumn",4,"ngFor","ngForOf"],["pInputText","","type","text","disabled","","placeholder"," No Search",1,"w-full","intputSearch",3,"input"],["pInputText","","type","text","id","title","placeholder","Search by Title",1,"w-full","intputSearch",3,"value","input"],["pInputText","","type","text","id","director","placeholder","Search by Director",1,"w-full","intputSearch",3,"value","input"],["pInputText","","type","text","id","releaseYear","placeholder","Search by Year",1,"w-full","intputSearch",3,"value","input"],["pInputText","","type","text","id","length","disabled","","placeholder","Search by Length",1,"w-full","intputSearch",3,"value","input"],["pInputText","","type","text","disabled","","placeholder","Search by Status",1,"w-full","intputSearch",3,"input"],["pInputText","","type","text","disabled","","placeholder","Movie Poster",1,"w-full","intputSearch"],["pInputText","","type","text","disabled","","placeholder","Action",1,"w-full","intputSearch"],[3,"pSortableColumn"],[3,"field"],[1,"btn-grp"],["pTooltip","mark as InActive","pButton","","type","button","class","p-button-success","style","height: 30px;",3,"click",4,"ngIf"],["pButton","","type","button","class","p-button-danger","pTooltip","mark as Active","style","height: 30px",3,"click",4,"ngIf"],[1,"form-control",2,"width","90%","height","8vh","cursor","pointer",3,"src","click"],[3,"click"],[2,"color","blue","cursor","pointer"],["pButton","","type","button","icon","pi pi-user-edit","pTooltip","Edit movie","tooltipPosition","bottom",1,"p-button-warning",2,"margin-right","5px",3,"click"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete movie","tooltipPosition","bottom",1,"p-button-danger",2,"margin-right","5px",3,"click"],["pTooltip","mark as InActive","pButton","","type","button",1,"p-button-success",2,"height","30px",3,"click"],["pButton","","type","button","pTooltip","mark as Active",1,"p-button-danger",2,"height","30px",3,"click"],["colspan","12",1,"text-center","text-danger","font-weight-700"],[3,"formGroup"],[1,"card","col-sm-12",2,"height","100vh"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-5"],[1,"card-body"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["type","text","placeholder","Title","formControlName","title",1,"form-control"],["for","image"],["type","text","placeholder","Director","formControlName","director",1,"form-control"],["for","Name"],["type","text","placeholder","Release Year","formControlName","releaseYear",1,"form-control"],["type","file","formControlName","posterContentThumb",1,"form-control",3,"change"],["class","col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",4,"ngIf"],[1,"col-xl-4","col-lg-4","col-md-4","col-sm-4","col-12"],["type","number","placeholder","Hours","formControlName","hours",1,"form-control"],["type","number","placeholder","Minutes","formControlName","minutes",1,"form-control"],["type","number","placeholder","Seconds","formControlName","seconds",1,"form-control"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"click"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",3,"click"],[1,"form-control",2,"width","80%","height","10vh",3,"src"],[1,"card","col-sm-12",2,"height","70vh"]],template:function(t,i){1&t&&(e.TgZ(0,"app-header",0),e.NdJ("toggleSidebar",function(r){return i.onToggleSidebar(r)}),e.qZA(),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"p-table",3,4),e.YNc(5,P,6,1,"ng-template",5),e.YNc(6,Q,25,5,"ng-template",6),e.YNc(7,D,24,10,"ng-template",7),e.YNc(8,R,3,0,"ng-template",8),e.qZA(),e._UZ(9,"ngx-ui-loader",9),e.qZA(),e.TgZ(10,"p-dialog",10),e.NdJ("visibleChange",function(r){return i.display=r}),e.YNc(11,B,55,2,"ng-container",11),e.YNc(12,j,28,2,"ng-container",11),e.YNc(13,V,28,2,"ng-container",11),e.qZA(),e._UZ(14,"p-confirmDialog",12),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngClass",i.sidebarSpacing),e.xp6(2),e.Q6J("columns",i.cols)("paginator",!0)("rows",10)("rowsPerPageOptions",e.DdM(24,$))("showCurrentPageReport",!0)("value",i.moviesList)("resizableColumns",!0)("responsive",!0)("globalFilterFields",e.DdM(25,ee)),e.xp6(6),e.Q6J("fgsColor","#000000")("fgsType",i.fgsType),e.xp6(1),e.Akn(e.DdM(26,te)),e.Q6J("visible",i.display)("modal",!0)("header",i.headerMessage)("baseZIndex",1e4),e.xp6(1),e.Q6J("ngIf",i.addEditMovie),e.xp6(1),e.Q6J("ngIf",i.moviePoster),e.xp6(1),e.Q6J("ngIf",i.screenshot),e.xp6(1),e.Akn(e.DdM(27,ie)),e.Q6J("baseZIndex",1e4))},directives:[T.G,p.mk,g.iA,d.jx,f.o,M.Hq,p.sg,g.lQ,g.fz,p.O5,b.u,u.Eo,x.V,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.wV,q.Q],styles:[".btn-grp[_ngcontent-%COMP%]{display:flex}.confirmation-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .p-dialog .p-button{min-width:6rem}th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:left!important;font-size:200!important}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}[_nghost-%COMP%]     .p-menuitem-link-active{background-color:#00008b!important;color:#fff}"]}),n})()},{path:"active-movies",component:K}];let ne=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.Bz.forChild(oe)],m.Bz]}),n})();var re=a(9005);let le=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,re.m,l.u5,l.UX,ne]]}),n})()}}]);