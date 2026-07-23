export interface UserResult {
  results: User[];
  info: Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface User {
  name: Name;
  location: Location;
  dob: Dob;
  picture: Picture;
  email: string;
  phone: string;
  cell: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
