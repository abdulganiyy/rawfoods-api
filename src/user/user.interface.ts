interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  role: string;
  password: string;
  isAdmin: boolean;
}

export default User;
