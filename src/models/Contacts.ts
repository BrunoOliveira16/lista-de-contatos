export class Contact {
  id: number
  name: string
  phone: string
  email: string
  image: string
  isFavorite: boolean

  constructor(
    id: number,
    name: string,
    phone: string,
    email: string,
    image: string,
    isFavorite: boolean
  ) {
    this.id = id
    this.name = name
    this.phone = phone
    this.email = email
    this.image = image
    this.isFavorite = isFavorite
  }
}
