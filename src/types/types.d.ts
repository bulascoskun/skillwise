type BookInfo = {
  _id: any;
  img: string;
  name: string;
  price: number;
  stars: number;
  author: string;
};

type Teacher = {
  id: number;
  img: string;
  name: string;
  bio: string;
  subjects: string[];
};

type ExploreLink = {
  title: string;
  info: string;
  href: string;
};

type Book = {
  _id: any;
  img: string;
  name: string;
  author: string;
  price: number;
  stars: number;
};

type Course = {
  _id: any;
  img: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  lecturer: string;
};

type SelectInput = {
  value: string;
  title: string;
}[];

type BookSearchValues = {
  category: string;
  search: string;
  sort: string;
};
