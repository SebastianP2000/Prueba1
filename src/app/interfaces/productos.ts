export interface Productos {
  id:	Number;
  title:	String;
  description:	String;
  price:	Number;
  discountPercentage:	Number;
  rating:	Number;
  stock:	Number;
  brand:	String;
  category:	String;
  thumbnail:	String;
  images:	String[];
}

export interface rProducto{
  products:	Productos[];
  total:	Number;
  skip:	Number | null;
  limit:	number;
}
