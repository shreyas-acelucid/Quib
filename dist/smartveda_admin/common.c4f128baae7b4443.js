"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[592],{2482:(A,u,r)=>{r.d(u,{_w:()=>d,b3:()=>o});let d=[{id:1,title:"Arrival",director:"Denis Villeneuve",releaseyear:2016,length:6981,isActive:!1},{id:2,title:"Beasts of No Nation",director:"Cary Joji Fukunaga",releaseyear:2015,length:8243,isActive:!0},{id:10,title:"Beasts of No Nation",director:"Cary Joji Fukunaga",releaseyear:2015,length:8243,isActive:!0},{id:35,title:"Beasts of No Nation",director:"Cary Joji Fukunaga",releaseyear:2015,length:8243,isActive:!0},{id:3,title:"Birdman",director:"Alejandro Gonz\xe1lez I\xf1\xe1rritu",releaseyear:2014,length:7157,isActive:!1},{id:4,title:"Black Panther",director:"Ryan Coogler",releaseyear:2018,length:8072,isActive:!0}],o=[{id:12,user:"J Quibseed",movies:"Pulp Fiction",quib:"Definition of pulp",time:"0:00:15",createdDate:"06/23/2013",postedDate:"07/01/2013",isEnabled:"Approved",isBumped:"Saved",quibType:"SQ"},{id:13,user:"J Quibseed",movies:"Pulp Fiction",quib:"Alright. Same as last time, remember? You're crowd control. I handle employeesp",time:"0:00:15",createdDate:"06/23/2013",postedDate:"07/01/2013",isEnabled:"Approved",isBumped:"Decline",quibType:"SQ"},{id:14,user:"J Quibseed",movies:"Pulp Fiction",quib:"Alright. Same as last time, remember? You're crowd control. I handle employees",time:"0:00:15",createdDate:"06/23/2013",postedDate:"07/01/2013",isEnabled:"Decline",isBumped:"Decline",quibType:"SQ"},{id:16,user:"J Quibseed",movies:"Pulp Fiction",quib:"Alright. Same as last time, remember? You're crowd control. I handle employees",time:"0:00:15",createdDate:"06/23/2013",postedDate:"07/01/2013",isEnabled:"Approved",isBumped:"Saved",quibType:"SQ"},{id:17,user:"J Quibseed",movies:"Pulp Fiction",quib:"Alright. Same as last time, remember? You're crowd control. I handle employees",time:"0:00:15",createdDate:"06/23/2013",postedDate:"07/01/2013",isEnabled:"Decline",isBumped:"Decline",quibType:"SQ"}]},9996:(A,u,r)=>{r.d(u,{V:()=>N});var a=r(520),d=r(9646),o=r(2340),n=r(2482),g=r(5e3);let N=(()=>{class l{constructor(e){this.http=e,this.Quib_Admin=o.N.QUIB_ADMIN}getUserList(){const e=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",e),this.http.get(`${o.N.QUIB_ADMIN}/api/User/GetUserList`)}createNewUser(e){const t=`${o.N.QUIB_ADMIN}/api/User/Register`,s=new FormData;return s.append("About",e.About),s.append("ConfirmPassword",e.ConfirmPassword),s.append("Password",e.Password),s.append("Email",e.Email),s.append("FirstName",e.FirstName),s.append("LastName",e.LastName),s.append("Username",e.Username),s.append("IsEnabled",e.IsEnabled),s.append("AvatarBase256ImagePath",e.AvatarBase256ImagePath),this.http.post(t,s)}deleteUser(e){const t=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",t),this.http.delete(`${o.N.QUIB_ADMIN}/api/User/DeleteUser?Id=${e}`)}IsEnabled(e,t){const s=localStorage.getItem("token")||"";(new a.WM).set("x-access-token",s);let i=n.b3.findIndex(m=>m.id===e);return n.b3[i].isEnabled=!0===t?"Approved":"Decline",(0,d.of)(n.b3[i])}IsBumped(e,t){const s=localStorage.getItem("token")||"";(new a.WM).set("x-access-token",s);let i=n.b3.findIndex(m=>m.id===e);return n.b3[i].isBumped=!0===t?"Saved":"Decline",(0,d.of)(n.b3[i])}changeUserStatus(e,t){const s=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",s),this.http.put(`${o.N.QUIB_ADMIN}/api/User/ChangeStatus?Id=${e}&IsPending=${t}`,e)}getMostActiveQuibList(){const e=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",e),(0,d.of)(n.b3)}getRecentActiveQuibList(){const e=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",e),(0,d.of)(n.b3)}getAlphBeticQuibList(){const e=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",e),(0,d.of)(n.b3)}deleteQuib(e){const t=localStorage.getItem("token")||"";(new a.WM).set("x-access-token",t);let p=n.b3.findIndex(i=>i.id===e);return n.b3.splice(n.b3.findIndex(i=>(null==i?void 0:i.id)==e),1),(0,d.of)(n.b3[p])}AssignMovieToModeratorUser(e){const t=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",t),this.http.post(`${o.N.QUIB_ADMIN}/AssignMovies`,e)}markUserAsModerator(e,t){const s={userId:e,Status:t},c=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",c),this.http.put(`${o.N.QUIB_ADMIN}/UpdateModeratorStatus?UserId=${e}&Status=${t}`,s)}}return l.\u0275fac=function(e){return new(e||l)(g.LFG(a.eN))},l.\u0275prov=g.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},2866:(A,u,r)=>{r.d(u,{I:()=>N});var a=r(520),d=r(9646),o=r(2340),n=r(2482),g=r(5e3);let N=(()=>{class l{constructor(e){this.http=e}getMovieList(){const e=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",e),this.http.get(`${o.N.QUIB_ADMIN}/Movies`)}getActiveMoviesList(){const e=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",e),this.http.get(`${o.N.QUIB_ADMIN}/Movies`)}markAsActive(e,t){const s=localStorage.getItem("token")||"";(new a.WM).set("x-access-token",s);let i=n._w.findIndex(m=>m.id===e);return n._w[i].isActive=t,(0,d.of)(n._w)}deleteMovies(e){const t=localStorage.getItem("token")||"";(new a.WM).set("x-access-token",t);let p=n._w.findIndex(i=>i.id==e);return n._w.splice(n._w.findIndex(i=>i.id==e),1),(0,d.of)(n._w[p])}Submit(e){const t=new FormData;t.append("Title",e.Title),t.append("Director",e.Director),t.append("ReleaseYear",e.ReleaseYear),t.append("Time.Hour",e.Hour),t.append("Time.Minute",e.Minute),t.append("Time.Seconds",e.Seconds),t.append("IsActive",e.IsActive),t.append("PosterImage",e.PosterImage);const s=localStorage.getItem("token")||"";return(new a.WM).set("x-access-token",s),this.http.post(`${o.N.QUIB_ADMIN}/AddMovie`,t)}submitMoviePosterData(e){const t=new FormData;return t.append("PosterImage",e.PosterImage),t.append("Id",e.id),this.http.put(`${o.N.QUIB_ADMIN}/UpdateMoviePoster`,t)}editMovies(e,t){const s=localStorage.getItem("token")||"";(new a.WM).set("x-access-token",s);let i=n._w.findIndex(m=>m.id===t);return n._w[i]=e,(0,d.of)(e)}}return l.\u0275fac=function(e){return new(e||l)(g.LFG(a.eN))},l.\u0275prov=g.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);