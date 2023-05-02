export interface Movies {
  id:number | string
  title:string ,
  director:string ,
  releaseYear:string|number,
  length:string 
  createdDate:Date
  modifiedDate:Date,
  posterContent:string
  posterContentThumb:string,
  isActive:boolean |any,
  MM:string | any,
  HH:string |any,
  SS:string |any
}

export interface MovieSearchKeyWord {
  id:number | string |any
  title:string ,
  director:string ,
  releaseYear:string|number |any,
  length:string 
 }



