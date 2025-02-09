export type Store = {
  id: string;
  name: string;
  image?: string;
  location: string;
};

export type Item = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  available: number;
};

export type Category = {
  id: string;
  icon: string;
  name: string;
};

export type ItemSold = {
  id: string;
  name: string;
  category: string;
  price: number;
  timestamp: number;
};
