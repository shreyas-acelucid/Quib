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
  isPending:boolean
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