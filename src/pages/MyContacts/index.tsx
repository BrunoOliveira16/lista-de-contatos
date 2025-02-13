import { useSelector } from 'react-redux'
import { RiContactsFill } from 'react-icons/ri'
import { IoHome } from 'react-icons/io5'

import { RootReducer } from '../../store'

import Hero from '../../components/Hero'
import ContactBar from '../../containers/ContactBar'

import * as S from './styles'

const MyContacts = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)

  function renderMyContacts() {
    if (items.length === 0) {
      return <S.Title>Você não possui Contatos</S.Title>
    }

    return items.map((item) => <ContactBar key={item.id} data={item} />)
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
