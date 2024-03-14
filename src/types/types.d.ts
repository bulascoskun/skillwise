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
  sold: number;
  category: string;
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

type CourseSearchValues = {
  category: string;
  search: string;
};

type CourseCatalogueData = {
  courses: Course[];
  currentPage: number;
  numOfPages: number;
};

type User = {
  name: string;
  username: string;
  email: string;
  location: string;
  role: string;
};

type SingleBookLoader = {
  data: Book;
};

type MyCourse = {
  _id: string;
  createdAt: string;
  course_info: { _id: string; title: string };
}[];

interface ShoppingCartType {
  itemsList: ItemListItem[];
}

interface ItemListItem {
  itemId: string;
  author: string;
  img: string;
  name: string;
  price: number;
  singleItemCount: number;
}

interface AddItemType {
  itemId: string;
  author: string;
  img: string;
  name: string;
  price: number;
}

type OrderDataItem = {
  items: {
    _id: string;
    name: string;
    price: number;
    singleItemCount: number;
  }[];
  totalValue: number;
  userId: string;
  createdAt: string;
};

type OrderData = OrderDataItem[];
