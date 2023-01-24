export interface SingUp {
  name: string,
  password: string,
  email: string,
  // image: File 
}
export interface LogIn {
  email: string,
  password: string
}
export interface product {
  name: string,
  price: number,
  type: string,
  color: string,
  description: string,
  image: string,
  id:number
}
