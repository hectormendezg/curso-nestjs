/* 
Custom provider
Definicion de lo necesario para una clase adaptadora
* Patron adaptador
*/

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}
