export interface category{
  id:string,
  name:string
}
export interface Product {
  id:string,
  title:string,
  price:number,
  images:string[],
  description:string,
  category:category;
}

export interface productDTO extends Omit<Product,'id'|'category'>{
  categoryId:number
}
export interface updateProductDTO extends Partial<Product>{}
