import { Contact } from '../models/Contacts'

export const contacts: Contact[] = [
  {
    id: 1,
    name: 'Batman',
    phone: '2199999999',
    email: 'bruce@email.com',
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-the-batman-face-is-standing-on-a-dark-background-image_2573605.jpg',
    isFavorite: true
  },
  {
    id: 2,
    name: 'Homen-Aranha',
    phone: '2199999888',
    email: 'peter@email.com',
    image:
      'https://i.pinimg.com/550x/9c/ba/8b/9cba8bd121fac637e1b4b0b49d18c91e.jpg',
    isFavorite: false
  },
  {
    id: 3,
    name: 'Superman',
    phone: '2188899999',
    email: 'clark@email.com',
    image:
      'https://rollingstone.uol.com.br/media/_versions/2024/03/james-gunn-revela-primeira-imagem-e-anuncia-novo-titulo-de-superman-legacy-foto-reproducaodc-comics_widelg.jpg',
    isFavorite: true
  }
]
