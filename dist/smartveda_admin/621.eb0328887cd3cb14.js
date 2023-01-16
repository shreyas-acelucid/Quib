"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[621],{2621:(se,h,a)=>{a.r(h),a.d(h,{MoviesModule:()=>le});var u=a(9808),T=a(1083),m=a(8441),l=a(3075),v=a(9783),e=a(5e3),d=a(520),Z=a(9646),p=(a(2340),a(2482));let f=(()=>{class i{constructor(t){this.http=t}getMovieList(){const t=localStorage.getItem("token")||"";return(new d.WM).set("x-access-token",t),(0,Z.of)(p._w)}getActiveMoviesList(){const t=localStorage.getItem("token")||"";return(new d.WM).set("x-access-token",t),(0,Z.of)(p._w)}markAsActive(t,o){const n=localStorage.getItem("token")||"";(new d.WM).set("x-access-token",n);let g=p._w.findIndex(_=>_.id===t);return p._w[g].isActive=o,(0,Z.of)(p._w)}deleteMovies(t){const o=localStorage.getItem("token")||"";(new d.WM).set("x-access-token",o);let c=p._w.findIndex(g=>g.id==t);return p._w.splice(p._w.findIndex(g=>g.id==t),1),(0,Z.of)(p._w[c])}addMovies(t){const o=localStorage.getItem("token")||"";return(new d.WM).set("x-access-token",o),p._w.push(t),(0,Z.of)(t)}editMovies(t,o){const n=localStorage.getItem("token")||"";(new d.WM).set("x-access-token",n);let g=p._w.findIndex(_=>_.id===o);return p._w[g]=t,(0,Z.of)(t)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(d.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var q=a(7650),b=a(7398),x=a(4255),M=a(1424),C=a(4119),y=a(845),k=a(5315),U=a(7446),S=a(9114);const w=["dt"];function N(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",38),e.TgZ(1,"span",39),e._UZ(2,"i",40),e.TgZ(3,"input",41),e.NdJ("input",function(n){return e.CHM(t),e.oxw().applyFilterGlobal(n,"contains")}),e.qZA(),e.qZA(),e.qZA()}}function I(i,s){if(1&i&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&i){const t=s.$implicit;e.xp6(1),e.Oqu(t.headers)}}function J(i,s){if(1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"th"),e._uU(2,"S.no"),e.qZA(),e.YNc(3,I,2,1,"th",42),e.TgZ(4,"th"),e._uU(5,"Options"),e.qZA(),e.qZA()),2&i){const t=s.$implicit;e.xp6(3),e.Q6J("ngForOf",t)}}function L(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e.TgZ(12,"button",43),e._uU(13),e.qZA(),e.qZA(),e.TgZ(14,"td"),e.TgZ(15,"div",44),e.TgZ(16,"button",45),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().deleteMovies(null==r?null:r.id)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=s.rowIndex,o=s.$implicit;e.xp6(2),e.Oqu(t+1),e.xp6(2),e.Oqu(null==o?null:o.title),e.xp6(2),e.Oqu(null==o?null:o.director),e.xp6(2),e.Oqu(null==o?null:o.releaseyear),e.xp6(2),e.Oqu(null==o?null:o.length),e.xp6(3),e.Oqu(null==o?null:o.isActive)}}function F(i,s){1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"td",46),e._uU(2," No Records Found. "),e.qZA(),e.qZA())}function O(i,s){if(1&i&&(e.TgZ(0,"div",17),e.TgZ(1,"div",18),e._UZ(2,"img",47),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("src",t.imageUrl,e.LSH)}}const R=function(){return["title","length","isActive"]},Y=function(){return{width:"60vw",height:"100vh"}},Q=function(){return{width:"40vw"}};let P=(()=>{class i{constructor(t,o,n,r,c){this.ngxLoader=t,this.MoviesService=o,this.toastr=n,this.confirmationService=r,this.fb=c,this.moviesList=[],this.display=!1,this.ActiveMoviesForm=this.fb.group({Director:["",[l.kI.required]],File:["",[l.kI.required]],IsActive:["",[l.kI.required]],ReleaseYear:["",[l.kI.required]],Length:["",[l.kI.required]],PosterContent:["",[l.kI.required]],PosterContentThumb:["",[l.kI.required]],Title:["",[l.kI.required]],hours:["",[l.kI.required]],minutes:["",[l.kI.required]],seconds:["",[l.kI.required]],Rating:["",[l.kI.required]]})}ngOnInit(){this.fgsType=m.aS.squareLoader,this.sidebarSpacing="contracted",this.cols=[{field:"title",show:!0,headers:"Title"},{field:"director",show:!0,headers:"Director"},{field:"releaseyear",show:!0,headers:"Release Year"},{field:"length",show:!0,headers:"Length"},{field:"isActive",show:!0,headers:"Is Active"}],this.getMovieList()}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}getMovieList(){this.MoviesService.getMovieList().subscribe(t=>{console.log(t.filter(o=>!0===o.isActive)),this.moviesList=t.filter(o=>!0===o.isActive),console.log(this.moviesList),this.ngxLoader.stop()})}applyFilterGlobal(t,o){this.dt.filterGlobal(t.target.value,o)}EditMovies(t){let o=this.moviesList.filter(n=>n.id===t);console.log(o),this.ActiveMoviesForm.patchValue({Director:o[0].director,ReleaseYear:o[0].releaseyear,Title:o[0].title}),this.display=!0}AddMovies(){this.ActiveMoviesForm.reset(),this.display=!0}OnChange(t){this.image=t.target.files;var o=new FileReader;o.readAsDataURL(t.target.files[0]),o.onload=n=>{this.imageUrl=n.target.result}}deleteMovies(t){this.confirmationService.confirm({message:"Are you sure that you want to delete Active Movies ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.MoviesService.deleteMovies(t).subscribe(o=>{this.getMovieList()})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.LA),e.Y36(f),e.Y36(q.$),e.Y36(v.YP),e.Y36(l.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-active-movies"]],viewQuery:function(t,o){if(1&t&&e.Gf(w,5),2&t){let n;e.iGM(n=e.CRH())&&(o.dt=n.first)}},features:[e._Bn([v.YP])],decls:71,vars:28,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","resizableColumns","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],["header","Add Movies","position","top",3,"visible","modal","baseZIndex","visibleChange"],[3,"formGroup"],[1,"card","col-sm-12"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-5"],[1,"card-body"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["type","text","formControlName","Title",1,"form-control"],["for","image"],["type","text","formControlName","Director",1,"form-control"],["for","Name"],["type","date","formControlName","ReleaseYear",1,"form-control"],["for","type","id","label"],["formControlName","Rating","placeholder","Select Rating",1,"form-control"],[3,"value"],[1,"example-section"],[1,"example-margin"],["type","file",1,"form-control",3,"change"],["class","col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",4,"ngIf"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"click"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success"],["header","Confirmation","position","top","icon","pi pi-exclamation-triangle",3,"baseZIndex"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search by Title and Length",3,"input"],[4,"ngFor","ngForOf"],["pTooltip","mark as InActive","pButton","","type","button",1,"p-button-success",2,"height","30px"],[1,"btn-grp"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete movie","tooltipPosition","bottom",1,"p-button-danger",2,"margin-right","5px",3,"click"],["colspan","12",1,"text-center","text-danger","font-weight-700"],[1,"form-control",2,"width","80%","height","10vh",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"app-header",0),e.NdJ("toggleSidebar",function(r){return o.onToggleSidebar(r)}),e.qZA(),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"p-table",3,4),e.YNc(5,N,4,0,"ng-template",5),e.YNc(6,J,6,1,"ng-template",6),e.YNc(7,L,17,6,"ng-template",7),e.YNc(8,F,3,0,"ng-template",8),e.qZA(),e._UZ(9,"ngx-ui-loader",9),e.qZA(),e.TgZ(10,"p-dialog",10),e.NdJ("visibleChange",function(r){return o.display=r}),e.TgZ(11,"form",11),e.TgZ(12,"div",12),e.TgZ(13,"div",13),e.TgZ(14,"div",14),e.TgZ(15,"div",15),e.TgZ(16,"div",16),e.TgZ(17,"div",13),e.TgZ(18,"div",17),e.TgZ(19,"div",18),e.TgZ(20,"label",19),e._uU(21,"Title"),e.qZA(),e._UZ(22,"input",20),e.qZA(),e.qZA(),e.TgZ(23,"div",17),e.TgZ(24,"div",18),e.TgZ(25,"label",21),e._uU(26,"Director "),e.qZA(),e._UZ(27,"input",22),e.qZA(),e.qZA(),e.TgZ(28,"div",17),e.TgZ(29,"div",18),e.TgZ(30,"label",23),e._uU(31,"Release Year"),e.qZA(),e._UZ(32,"input",24),e.qZA(),e.qZA(),e.TgZ(33,"div",17),e.TgZ(34,"div",13),e.TgZ(35,"div",17),e.TgZ(36,"label",25),e._uU(37,"Rating"),e.qZA(),e.TgZ(38,"div",18),e.TgZ(39,"select",26),e.TgZ(40,"option",27),e._uU(41,"1"),e.qZA(),e.TgZ(42,"option",27),e._uU(43,"2"),e.qZA(),e.TgZ(44,"option",27),e._uU(45,"3"),e.qZA(),e.TgZ(46,"option",27),e._uU(47,"5"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"div",17),e.TgZ(49,"section",28),e.TgZ(50,"mat-checkbox",29),e._uU(51,"Enabled"),e.qZA(),e.qZA(),e.TgZ(52,"section",28),e.TgZ(53,"mat-checkbox",29),e._uU(54,"Featured"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(55,"div",17),e.TgZ(56,"div",13),e.TgZ(57,"div",17),e.TgZ(58,"div",18),e.TgZ(59,"label",23),e._uU(60,"Movies Poster"),e.qZA(),e.TgZ(61,"input",30),e.NdJ("change",function(r){return o.OnChange(r)}),e.qZA(),e.qZA(),e.qZA(),e.YNc(62,O,3,1,"div",31),e.qZA(),e.qZA(),e.qZA(),e.TgZ(63,"div",32),e.TgZ(64,"div",33),e.TgZ(65,"div",34),e.TgZ(66,"button",35),e.NdJ("click",function(){return o.display=!1}),e._uU(67,"Cancel"),e.qZA(),e.TgZ(68,"button",36),e._uU(69,"Submit"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(70,"p-confirmDialog",37),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngClass",o.sidebarSpacing),e.xp6(2),e.Q6J("columns",o.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("value",o.moviesList)("resizableColumns",!0)("responsive",!0)("globalFilterFields",e.DdM(25,R)),e.xp6(6),e.Q6J("fgsColor","#000000")("fgsType",o.fgsType),e.xp6(1),e.Akn(e.DdM(26,Y)),e.Q6J("visible",o.display)("modal",!0)("baseZIndex",1e4),e.xp6(1),e.Q6J("formGroup",o.ActiveMoviesForm),e.xp6(29),e.Q6J("value",1),e.xp6(2),e.Q6J("value",2),e.xp6(2),e.Q6J("value",3),e.xp6(2),e.Q6J("value",5),e.xp6(16),e.Q6J("ngIf",null!=o.imageUrl),e.xp6(8),e.Akn(e.DdM(27,Q)),e.Q6J("baseZIndex",1e4))},directives:[b.G,u.mk,x.iA,v.jx,M.o,u.sg,C.u,y.Hq,m.Eo,k.V,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.EJ,l.YN,l.Kr,U.oG,u.O5,S.Q],styles:[".btn-grp[_ngcontent-%COMP%]{display:flex}th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}"]}),i})();const E=["dt"];function B(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",45),e.TgZ(1,"span",46),e._UZ(2,"i",47),e.TgZ(3,"input",48),e.NdJ("input",function(n){return e.CHM(t),e.oxw().applyFilterGlobal(n,"contains")}),e.qZA(),e.qZA(),e.TgZ(4,"span",46),e.TgZ(5,"button",49),e.NdJ("click",function(){return e.CHM(t),e.oxw().AddMovies()}),e.qZA(),e.qZA(),e.qZA()}}function D(i,s){if(1&i&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&i){const t=s.$implicit;e.xp6(1),e.Oqu(t.headers)}}function G(i,s){if(1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"th"),e._uU(2,"S.no"),e.qZA(),e.YNc(3,D,2,1,"th",50),e.TgZ(4,"th"),e._uU(5,"Options"),e.qZA(),e.qZA()),2&i){const t=s.$implicit;e.xp6(3),e.Q6J("ngForOf",t)}}function $(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",56),e.NdJ("click",function(){e.CHM(t);const n=e.oxw().$implicit;return e.oxw().markAsActive(null==n?null:n.id,!1)}),e._uU(1),e.qZA()}if(2&i){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(null==t?null:t.isActive)}}function H(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",57),e.NdJ("click",function(){e.CHM(t);const n=e.oxw().$implicit;return e.oxw().markAsActive(null==n?null:n.id,!0)}),e._uU(1),e.qZA()}if(2&i){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(null==t?null:t.isActive)}}function V(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e.TgZ(12,"div",51),e.YNc(13,$,2,1,"button",52),e.YNc(14,H,2,1,"button",53),e.qZA(),e.qZA(),e.TgZ(15,"td"),e.TgZ(16,"div",51),e.TgZ(17,"button",54),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().EditMovies(null==r?null:r.id)}),e.qZA(),e.TgZ(18,"button",55),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().deleteMovies(null==r?null:r.id)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=s.rowIndex,o=s.$implicit;e.xp6(2),e.Oqu(t+1),e.xp6(2),e.Oqu(null==o?null:o.title),e.xp6(2),e.Oqu(null==o?null:o.director),e.xp6(2),e.Oqu(null==o?null:o.releaseyear),e.xp6(2),e.Oqu(null==o?null:o.length),e.xp6(3),e.Q6J("ngIf",1==o.isActive),e.xp6(1),e.Q6J("ngIf",0==o.isActive)}}function z(i,s){1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"td",58),e._uU(2," No Records Found. "),e.qZA(),e.qZA())}function j(i,s){if(1&i&&(e.TgZ(0,"div",17),e.TgZ(1,"div",18),e._UZ(2,"img",59),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("src",t.moviesPoster[0],e.LSH)}}function W(i,s){if(1&i&&(e.TgZ(0,"div",17),e.TgZ(1,"div",18),e._UZ(2,"img",59),e.qZA(),e.qZA()),2&i){const t=e.oxw().index,o=e.oxw();e.xp6(2),e.Q6J("src",o.imageBase64[t],e.LSH)}}function X(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",17),e.TgZ(1,"div",13),e.TgZ(2,"div",17),e.TgZ(3,"div",18),e.TgZ(4,"label",23),e._uU(5,"Screen Shot upload"),e.qZA(),e.TgZ(6,"input",60),e.NdJ("change",function(n){const c=e.CHM(t).index;return e.oxw().OnChange(n,!0,c)}),e.qZA(),e.qZA(),e.qZA(),e.YNc(7,W,3,1,"div",31),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(7),e.Q6J("ngIf",0!=t.imageBase64.length)}}const K=function(){return["title","length","isActive"]},ee=function(){return{width:"70vw",height:"100vh"}},te=function(){return{width:"40vw"}},oe=[{path:"all-movies",component:(()=>{class i{constructor(t,o,n,r,c){this.ngxLoader=t,this.fb=o,this.MoviesService=n,this.confirmationService=r,this.toastr=c,this.display=!1,this.imageBase64=[],this.moviesPoster=[],this.AllMoviesForm=this.fb.group({Director:["",[l.kI.required]],IsActive:["",[l.kI.required]],ReleaseYear:["",[l.kI.required]],Length:["",[l.kI.required]],PosterContent:["",[l.kI.required]],PosterContentThumb:["",[l.kI.required]],Title:["",[l.kI.required]],hours:["",[l.kI.required]],minutes:["",[l.kI.required]],seconds:["",[l.kI.required]],Rating:["",[l.kI.required]],moviesPoster:["",[l.kI.required]],screenShot:this.fb.array([])})}ngOnInit(){this.fgsType=m.aS.squareLoader,this.sidebarSpacing="contracted",this.cols=[{field:"title",show:!0,headers:"Title"},{field:"director",show:!0,headers:"Director"},{field:"releaseyear",show:!0,headers:"Release Year"},{field:"length",show:!0,headers:"Length"},{field:"isActive",show:!0,headers:"Status"}],this.getMovieList()}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}getMovieList(){this.MoviesService.getMovieList().subscribe(t=>{this.moviesList=t,this.ngxLoader.stop()})}applyFilterGlobal(t,o){this.dt.filterGlobal(t.target.value,o)}EditMovies(t){let o=this.moviesList.filter(n=>n.id===t);console.log(o),this.AllMoviesForm.patchValue({Director:o[0].director,ReleaseYear:o[0].releaseyear,Title:o[0].title}),this.moviesPoster.pop(),this.imageBase64.pop(),this.display=!0}AddMovies(){this.AllMoviesForm.reset(),this.display=!0,this.moviesPoster.pop(),this.imageBase64.pop()}OnChange(t,o,n){this.image=t.target.files;var r=new FileReader;r.readAsDataURL(t.target.files[0]),r.onload=c=>{o?this.imageBase64[n]=c.target.result:this.moviesPoster[0]=c.target.result}}addISchreenShotControl(){this.allmovies.push(this.AddFormGroup())}AddFormGroup(){return this.fb.group({skill:"",exp:""})}get allmovies(){return this.AllMoviesForm.get("screenShot")}deleteMovies(t){this.confirmationService.confirm({message:"Are you sure that you want to delete this Movies ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.MoviesService.deleteMovies(t).subscribe(o=>{this.getMovieList()})}})}markAsActive(t,o){this.message=o?"Are you sure that you want to mark as Active":"Are you sure that you want to mark as InActive",this.confirmationService.confirm({message:this.message,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ngxLoader.start(),this.MoviesService.markAsActive(t,o).subscribe(n=>{n&&(this.toastr.showSuccess(" Status change successfully","Status change"),this.getMovieList())})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.LA),e.Y36(l.qu),e.Y36(f),e.Y36(v.YP),e.Y36(q.$))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-all-movies"]],viewQuery:function(t,o){if(1&t&&e.Gf(E,5),2&t){let n;e.iGM(n=e.CRH())&&(o.dt=n.first)}},features:[e._Bn([v.YP])],decls:94,vars:30,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","resizableColumns","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],["header","Add Movies","position","top",3,"visible","modal","baseZIndex","visibleChange"],[3,"formGroup"],[1,"card","col-sm-12"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-5"],[1,"card-body"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["type","text","placeholder","Title","formControlName","Title",1,"form-control"],["for","image"],["type","text","placeholder","Director","formControlName","Director",1,"form-control"],["for","Name"],["type","date","placeholder","Release Year","formControlName","ReleaseYear",1,"form-control"],["for","type","id","label"],["formControlName","Rating","placeholder","Select Rating",1,"form-control"],[3,"value"],[1,"example-section"],[1,"example-margin"],["type","file","formControlName","moviesPoster",1,"form-control",3,"change"],["class","col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",4,"ngIf"],[1,"col-xl-4","col-lg-4","col-md-4","col-sm-4","col-12"],["type","number","placeholder","hours","formControlName","hours",1,"form-control"],["type","number","placeholder","minutes","formControlName","minutes",1,"form-control"],["type","number","placeholder","second","formControlName","seconds",1,"form-control"],["pButton","","type","button",1,"p-button-warning",3,"click"],["formArrayName","screenShot",1,"row","gutters"],["class","col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",4,"ngFor","ngForOf"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"click"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success"],["header","Confirmation","position","top","icon","pi pi-exclamation-triangle",3,"baseZIndex"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search by Title and Length",3,"input"],["pButton","","type","button","label","Add Movie",1,"p-button-success",3,"click"],[4,"ngFor","ngForOf"],[1,"btn-grp"],["pTooltip","mark as InActive","pButton","","type","button","class","p-button-success","style","height: 30px;",3,"click",4,"ngIf"],["pButton","","type","button","class","p-button-danger","pTooltip","mark as Active","style","height: 30px",3,"click",4,"ngIf"],["pButton","","type","button","icon","pi pi-user-edit","pTooltip","Edit movie","tooltipPosition","bottom",1,"p-button-warning",2,"margin-right","5px",3,"click"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete movie","tooltipPosition","bottom",1,"p-button-danger",2,"margin-right","5px",3,"click"],["pTooltip","mark as InActive","pButton","","type","button",1,"p-button-success",2,"height","30px",3,"click"],["pButton","","type","button","pTooltip","mark as Active",1,"p-button-danger",2,"height","30px",3,"click"],["colspan","12",1,"text-center","text-danger","font-weight-700"],[1,"form-control",2,"width","80%","height","10vh",3,"src"],["type","file","formControlName","i",1,"form-control",3,"change"]],template:function(t,o){1&t&&(e.TgZ(0,"app-header",0),e.NdJ("toggleSidebar",function(r){return o.onToggleSidebar(r)}),e.qZA(),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"p-table",3,4),e.YNc(5,B,6,0,"ng-template",5),e.YNc(6,G,6,1,"ng-template",6),e.YNc(7,V,19,7,"ng-template",7),e.YNc(8,z,3,0,"ng-template",8),e.qZA(),e._UZ(9,"ngx-ui-loader",9),e.qZA(),e.TgZ(10,"p-dialog",10),e.NdJ("visibleChange",function(r){return o.display=r}),e.TgZ(11,"form",11),e.TgZ(12,"div",12),e.TgZ(13,"div",13),e.TgZ(14,"div",14),e.TgZ(15,"div",15),e.TgZ(16,"div",16),e.TgZ(17,"div",13),e.TgZ(18,"div",17),e.TgZ(19,"div",18),e.TgZ(20,"label",19),e._uU(21,"Title"),e.qZA(),e._UZ(22,"input",20),e.qZA(),e.qZA(),e.TgZ(23,"div",17),e.TgZ(24,"div",18),e.TgZ(25,"label",21),e._uU(26,"Director "),e.qZA(),e._UZ(27,"input",22),e.qZA(),e.qZA(),e.TgZ(28,"div",17),e.TgZ(29,"div",18),e.TgZ(30,"label",23),e._uU(31,"Release Year"),e.qZA(),e._UZ(32,"input",24),e.qZA(),e.qZA(),e.TgZ(33,"div",17),e.TgZ(34,"div",13),e.TgZ(35,"div",17),e.TgZ(36,"label",25),e._uU(37,"Rating"),e.qZA(),e.TgZ(38,"div",18),e.TgZ(39,"select",26),e.TgZ(40,"option",27),e._uU(41,"1"),e.qZA(),e.TgZ(42,"option",27),e._uU(43,"2"),e.qZA(),e.TgZ(44,"option",27),e._uU(45,"3"),e.qZA(),e.TgZ(46,"option",27),e._uU(47,"4"),e.qZA(),e.TgZ(48,"option",27),e._uU(49,"5"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(50,"div",17),e.TgZ(51,"section",28),e.TgZ(52,"mat-checkbox",29),e._uU(53,"Enabled"),e.qZA(),e.qZA(),e.TgZ(54,"section",28),e.TgZ(55,"mat-checkbox",29),e._uU(56,"Featured"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(57,"div",17),e.TgZ(58,"div",13),e.TgZ(59,"div",17),e.TgZ(60,"div",18),e.TgZ(61,"label",23),e._uU(62,"Movies Poster"),e.qZA(),e.TgZ(63,"input",30),e.NdJ("change",function(r){return o.OnChange(r,!1,1)}),e.qZA(),e.qZA(),e.qZA(),e.YNc(64,j,3,1,"div",31),e.qZA(),e.qZA(),e.TgZ(65,"div",17),e.TgZ(66,"div",13),e.TgZ(67,"div",32),e.TgZ(68,"div",18),e.TgZ(69,"label",23),e._uU(70,"HH"),e.qZA(),e._UZ(71,"input",33),e.qZA(),e.qZA(),e.TgZ(72,"div",32),e.TgZ(73,"div",18),e.TgZ(74,"label",23),e._uU(75,"MM"),e.qZA(),e._UZ(76,"input",34),e.qZA(),e.qZA(),e.TgZ(77,"div",32),e.TgZ(78,"div",18),e.TgZ(79,"label",23),e._uU(80,"SS"),e.qZA(),e._UZ(81,"input",35),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(82,"button",36),e.NdJ("click",function(){return o.addISchreenShotControl()}),e._uU(83,"Add"),e.qZA(),e.TgZ(84,"div",37),e.YNc(85,X,8,1,"div",38),e.qZA(),e.TgZ(86,"div",39),e.TgZ(87,"div",40),e.TgZ(88,"div",41),e.TgZ(89,"button",42),e.NdJ("click",function(){return o.display=!1}),e._uU(90,"Cancel"),e.qZA(),e.TgZ(91,"button",43),e._uU(92,"Submit"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(93,"p-confirmDialog",44),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngClass",o.sidebarSpacing),e.xp6(2),e.Q6J("columns",o.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("value",o.moviesList)("resizableColumns",!0)("responsive",!0)("globalFilterFields",e.DdM(27,K)),e.xp6(6),e.Q6J("fgsColor","#000000")("fgsType",o.fgsType),e.xp6(1),e.Akn(e.DdM(28,ee)),e.Q6J("visible",o.display)("modal",!0)("baseZIndex",1e4),e.xp6(1),e.Q6J("formGroup",o.AllMoviesForm),e.xp6(29),e.Q6J("value",1),e.xp6(2),e.Q6J("value",2),e.xp6(2),e.Q6J("value",3),e.xp6(2),e.Q6J("value",4),e.xp6(2),e.Q6J("value",5),e.xp6(16),e.Q6J("ngIf",0!=o.moviesPoster.length),e.xp6(21),e.Q6J("ngForOf",o.allmovies.controls),e.xp6(8),e.Akn(e.DdM(29,te)),e.Q6J("baseZIndex",1e4))},directives:[b.G,u.mk,x.iA,v.jx,M.o,y.Hq,u.sg,u.O5,C.u,m.Eo,k.V,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.EJ,l.YN,l.Kr,U.oG,l.wV,l.CE,S.Q],styles:[".btn-grp[_ngcontent-%COMP%]{display:flex}.confirmation-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .p-dialog .p-button{min-width:6rem}th[_ngcontent-%COMP%]{background-color:#353d44!important;color:#fff!important}[_nghost-%COMP%]     .p-dialog .p-dialog-header{background-color:#c6c7cd94}"]}),i})()},{path:"active-movies",component:P}];let ie=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[T.Bz.forChild(oe)],T.Bz]}),i})();var ne=a(5899);let le=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[u.ez,ne.m,l.u5,l.UX,ie]]}),i})()}}]);