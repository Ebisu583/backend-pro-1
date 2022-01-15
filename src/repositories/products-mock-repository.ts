import { Product } from '../interfaces/product.interface';
import { ProductsRepository } from './products-repository.interface';
import shortid from 'shortid';
export class ProductsMockRepository implements ProductsRepository {
  private products: Array<Product> = [];

  getAllItems(): Array<Product>{
    return this.products;
  }
  getItemById(id: string): Product {
    console.log(id);
    console.log(this.products);
    console.log(this.products.find((product) => product.id == id));
    
    
    return this.products.find((product) => product.id == id);
  }
  findProductByName(name: string): Product {
    return this.products.find((product) => product.name == name);
  }
  deleteItem(id: string): boolean {
    const product = this.products.find((product) => product.id == id);
    if(product) {
      const productsIds = this.products.map((product) => product.id);
      const indexToDelete = productsIds.indexOf(id);
      this.products.splice(indexToDelete, 1);
      // this.products = this.products.filter((product) => product.id != id);
      return true;
    }
    else {
      return false;
    }
  }
  addItem(item: Product): Product {
      item.id = shortid.generate();
      item.createdAt = new Date();
      item.updatedAt = new Date();
      this.products.push(item);
      return item;
  }

  updateItem(id: string, item: Product): Product {
      this.products = this.products.map(i => {
          if (i.id === id) {
              return {
                  ...item,
                  id: i.id,
                  createdAt: i.createdAt,
                  updatedAt: new Date()
              };
          }

          return i;
      });

      return this.getItemById(id);
  }
}