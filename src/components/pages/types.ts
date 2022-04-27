interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export interface IPost {
  id:number;
  title: number;
  body: number;
  userId: number;
}
export interface IComment {
  postId: number;
  id: number;
  email: string;
  body: string;
}
