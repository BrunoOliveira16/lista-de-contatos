import { useSelector } from 'react-redux'
import { RiContactsFill } from 'react-icons/ri'
import { IoHome } from 'react-icons/io5'

import { RootReducer } from '../../store'

import Hero from '../../components/Hero'
import ContactBar from '../../components/ContactBar'

import * as S from './styles'

const MyContacts = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)

  function renderMyContacts() {
    if (!items) {
      return <p>Você não possui Contatos</p>
    }

    return items.map((item) => (
      <ContactBar
        name={item.name}
        phone={item.phone}
        email={item.email}
        image={item.image}
        isFavorite={item.isFavorite}
        key={item.id}
      />
    ))
  }

  return (
    <S.ContainerMyContact>
      <Hero
        title="Meus contatos"
        Icon={RiContactsFill}
        IconLink={IoHome}
        titleIcon="Home"
        to="/"
      />
      <S.ContainerContacts>{renderMyContacts()}</S.ContainerContacts>
    </S.ContainerMyContact>
  )
}

export default MyContacts
