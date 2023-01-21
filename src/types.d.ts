export type User = {
  email: string;
  full_name: string;
  id: number;
  image_url: string;
  info: string;
  username: string;
};

interface NewUser {
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
}
