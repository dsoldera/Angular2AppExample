/**
 * This is a FormData Model
 */

export class formData {
  constructor(
    public nome: string,
    public email: string,
    public telefone: string,
    public cidade: string,
    public estado: string,
    public agree: boolean,
    public items: string,
    public comida: string
  ) {

  }
}