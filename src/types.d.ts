declare type ContactDataProps = {
  id: number
  name: string
  phone: string
  email: string
  image: string
  isFavorite: boolean
}

declare type FormFields = 'name' | 'phone' | 'image' | 'email' | 'isFavorite'

declare type FormErrors = {
  name: boolean
  phone: boolean
}

declare type FormState = {
  name: string
  phone: string
  image: string
  email: string
  isFavorite: boolean
}
