export interface Quib_User {
  id: string | number
  displayName: string,
  firstName: string,
  lastName: string,
  email: string,
  isEnabled: boolean,
  createdDate: string,
  bumpCount: string | number,
  followeeCount: string | number,
  followerCount: string | number,
  unPostedQuibsCount: string | number
  isPending:boolean,
  isModerator:boolean
}

export interface Quib {
  id:number | any
  user: string | number,
  movies: string,
  quib: string,
  time: string,
  createdDate: string,
  postedDate: string,
  isEnabled: string,
  isBumped: string,
  avr:string |any,
  rating:string |string,
  BumpIn:string |any,
  flage:string|any
}

export interface QUIB_USER {
  Email: string,
  FirstName: string,
  LastName: string,
  Password: string,
  ConfirmPassword: string,
  AvatarBase256ImagePath: string,
  Username: string,
  About: string,
  IsEnabled: boolean |any,
  // status: boolean,
}

export interface userSearchKeyWord {
  displayName: string |any,
  firstName: string |any,
  lastName: string |any,
  email: string | any
  Gsearch:string |any
}

export interface QUIB_SEARCH_WORD {
  displayName: string | any,
  title: string | any,
  body: string | any,
  time: string | any,
  createdDate: string | any,
  postedDate: string | any,
  avr: string | any,
  rating: string | any,
  Gseacrh:string|any
}
export interface ADMIN_QUIB {
  id: number | any,
  body: string,
  userId: number | any,
  parentId: number | any,
  time: number | any,
  isQuibZero: boolean | any,
  createdDate: string | any,
  modifiedDate: string | any,
  movieId: number | any,
  postedDate: string | any,
  isPosted: boolean | any,
  isEnabled: boolean | any,
  isBumped: boolean | any,
  bumpedBy: string | any,
  isSeedQuib: boolean | any,
  seedQuibType: string | any,
  isScreenshot: boolean | any,
  displayName: string | any,
  avatarBase32ImagePath: string | any,
  newUserId: string | any
}


export interface QUIB_LIST {
  quibTotalPages: number | any,
  currentPage: number | any,
  savedQuibs: SAVE_QUIBS[],

}

export interface SAVE_QUIBS {
  id: number |any,
  movieId: number |any,
  title: string,
  body: string,
  time: number |any,
  displayName: string,
  isBumped: boolean,
  isEnabled: boolean,
  isSeedQuib: boolean,
  isQuibZero: boolean,
  newUserId: string,
  isPosted: boolean,
  bumpedBy: string |any,
  seedQuibType: string,
  isScreenshot: boolean,
  parentId: string |any,
  createdDate: string |any,
  postedDate: string |any,
  modifiedDate: string |any
}
export interface BUMP_IN_USER_LIST {
  id: string | any,
  userName: string | any,
  ccp: number | any
}
export interface FLAG_IN_USER_LIST {
  id: string | any,
  userName: string | any,
  cfp: number | any
}