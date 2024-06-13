import { RiContactsFill } from 'react-icons/ri'
import { IoHome } from 'react-icons/io5'

import { contactsData } from '../../data/data'

import Hero from '../../components/Hero'
import ContactBar from '../../components/ContactBar'

import * as S from './styles'

const MyContacts = () => {
  function renderMyContacts() {
    if (!contactsData) {
      return <p>Você não possui Contatos</p>
    }

    return contactsData.map((item) => (
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
