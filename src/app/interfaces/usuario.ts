export interface Usuario {
  username: string;
  password: string;
}

export interface auth{
  id:	string;
  username:	string;
  email:	string;
  firstName:	string;
  lastName:	string;
  gender:	'male' | 'female';
  token: string;
}
