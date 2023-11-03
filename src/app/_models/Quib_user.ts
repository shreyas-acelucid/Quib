export interface Quib_User {
  id: string | number;
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  isEnabled: boolean;
  createdDate: string;
  bumpCount: string | number;
  followeeCount: string | number;
  followerCount: string | number;
  unPostedQuibsCount: string | number;
  isPending: boolean;
  isModerator: boolean;
  isDeleted: boolean;
}

export interface Quib {
  id: number | any;
  user: string | number;
  movies: string;
  quib: string;
  time: string;
  createdDate: string;
  postedDate: string;
  isEnabled: string;
  isBumped: string;
  avr: string | any;
  rating: string | string;
  BumpIn: string | any;
  flage: string | any;
}

export interface QUIB_USER {
  Email: string;
  FirstName: string;
  LastName: string;
  Password: string;
  ConfirmPassword: string;
  AvatarBase256ImagePath: string;
  Username: string;
  About: string;
  IsEnabled: boolean | any;
  isDeleted: boolean;
}

export interface userSearchKeyWord {
  displayName: string | any;
  firstName: string | any;
  lastName: string | any;
  email: string | any;
  Gsearch: string | any;
}

export interface QUIB_SEARCH_WORD {
  displayName: string | any;
  title: string | any;
  body: string | any;
  time: string | any;
  createdDate: string | any;
  postedDate: string | any;
  averageRating: string | any;
  numOfRatings: string | any;
  Gseacrh: string | any;
}
export interface ADMIN_QUIB {
  currentPage: number | any;
  quibTotalPages: number | any;
  savedQuibs: ADMIN_QUIB_DATA[];
}

export interface ADMIN_QUIB_DATA {
  averageRating: number | any;
  bIn: number | any;
  body: string;
  bumpedBy: string | any;
  createdDate: string | any;
  displayName: string | any;
  flag: number | any;
  id: number | any;
  isBumped: string | any;
  isEnabled: boolean;
  isPosted: boolean;
  isQuibZero: boolean;
  isScreenshot: boolean;
  isSeedQuib: boolean;
  modifiedDate: string | any;
  movieId: number | any;
  newUserId: string | any;
  numOfRatings: number | any;
  parentId: string | any;
  postedDate: string | any;
  seedQuibType: string | any;
  time: number | any;
  title: string | any;
}

export interface QUIB_LIST {
  quibTotalPages: number | any;
  currentPage: number | any;
  savedQuibs: SAVE_QUIBS[];
}

export interface SAVE_QUIBS {
  id: number | any;
  movieId: number | any;
  title: string;
  body: string;
  time: number | any;
  displayName: string;
  isBumped: boolean;
  isEnabled: boolean;
  isSeedQuib: boolean;
  isQuibZero: boolean;
  newUserId: string;
  isPosted: boolean;
  bumpedBy: string | any;
  seedQuibType: string;
  isScreenshot: boolean;
  parentId: string | any;
  createdDate: string | any;
  postedDate: string | any;
  modifiedDate: string | any;
  averageRating: number | any;
  numOfRatings: number | any;
  MM: string | any;
  HH: string | any;
  SS: string | any;
}
export interface BUMP_IN_USER_LIST {
  id: string | any;
  userName: string | any;
  ccp: number | any;
}
export interface FLAG_IN_USER_LIST {
  id: string | any;
  userName: string | any;
  cfp: number | any;
}

export interface QUIB_USER_MOVIE_LIST {
  movieId: number | any;
  movieName: string;
  totalQuibByMovieId: number;
  ratedQuibByMovieId: number;
  totalRatingByMovieId: number;
  averageRatingByMovieId: number;
}
export interface QUIB_BY_USERID_MOVIE_ID {
  userId: string | any;
  movieId: number | any;
}

export interface STYLE_VALUE {
  height: string;
  width: string;
}
