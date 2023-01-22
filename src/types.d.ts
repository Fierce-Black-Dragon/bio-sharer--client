export type User = {
  email: string;
  full_name: string;
  id: number;
  image_url: string;
  info: string;
  username: string;
  links: Array;
};

export type NewUser = {
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
};

export type linkType = {
  id: number|null;
  title: string;
  url: string;
  created_at: string;
  updated_at: string;
  user_id: number;
};

export type CurrentUser = {
  email: string;
  full_name: string;
  id: number;
  avatar: Blob | MediaSource | null;
  image_url: string;
  info: string;
  username: string;
  links: Array;
};
