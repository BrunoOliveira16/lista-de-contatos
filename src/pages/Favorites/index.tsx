import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IoHome } from 'react-icons/io5'
import { MdFavorite } from 'react-icons/md'

import { RootReducer } from '../../store'

import Hero from '../../components/Hero'
import ContactBar from '../../components/ContactBar'

import * as S from './styles'

const Favorites = () => {
  const [favoritesData, setFavoritesData] = useState<ContactDataProps[]>([])

  const { items } = useSelector((state: RootReducer) => state.contacts)

  useEffect(() => {
    getFavorites()
  }, [])

  function getFavorites() {
    const favorites = items.filter((contact) => contact.isFavorite)
    setFavoritesData(favorites)
  }

  function renderFavorites() {
    if (favoritesData.length === 0) {
      return <p>Você não possui favoritos</p>
    }

    return favoritesData.map((item) => <ContactBar key={item.id} data={item} />)
  }

  return (
    <S.ContainerFavorites>
      <Hero
        title="Favoritos"
        Icon={MdFavorite}
        IconLink={IoHome}
        titleIcon="Home"
        to="/"
      />
      <S.ContainerContacts>{renderFavorites()}</S.ContainerContacts>
    </S.ContainerFavorites>
  )
}

export default Favorites
