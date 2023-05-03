import {
  HttpClient,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, productDTO, updateProductDTO } from '../interfaces/product';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  url = 'https://young-sands-07814.herokuapp.com/api/products/';

  getData() {
    return this.http.get<Product[]>(this.url);
  }

  getDataForPage(limit: number, offset: number) {
    return this.http.get<Product[]>(this.url, { params: { limit, offset } });
  }
  getDataDetail(id: string) {
    return this.http.get<Product>(this.url + id).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === HttpStatusCode.Conflict) {
          return throwError(() => new Error('error interno'));
        }
        if (err.status === HttpStatusCode.NotFound) {
          return throwError(() => new Error('producto no encontrado'));
        }
        if (err.status === HttpStatusCode.Unauthorized) {
          return throwError(
            () => new Error('No tiene permisos para este archivo')
          );
        }
        return throwError(() => new Error('ups Algo salio mal'));
      })
    );
  }
  createProduct(newProd: productDTO) {
    return this.http.post<Product>(this.url, newProd);
  }
  updateProduct(id: string, dto: updateProductDTO) {
    return this.http.put<Product>(`${this.url}${id}`, dto);
  }
  deleteProduct(id: string) {
    return this.http.delete<boolean>(this.url + id);
  }

  getCategory(id:string){
    const url = `https://young-sands-07814.herokuapp.com/api/categories/${id}/products/`;
    return this.http.get<Product[]>(url)
  }
}
