import { RiContactsFill } from 'react-icons/ri'
import { IoHome } from 'react-icons/io5'

import Hero from '../../components/Hero'
import ContactBar from '../../components/ContactBar'

import * as S from './styles'

const MyContacts = () => {
  return (
    <S.ContainerMyContact>
      <Hero
        title="Meus contatos"
        Icon={RiContactsFill}
        IconLink={IoHome}
        titleIcon="Home"
        to="/"
      />
      <S.ContainerContacts>
        <ContactBar
          name="Bruno Oliveira"
          email="bruno@email.com"
          phone="(00) 99876-5432"
          image="https://placehold.co/200x200"
        />
        <ContactBar
          name="Bruno"
          email="bruno@email.com"
          phone="(00) 99876-5432"
          image="https://placehold.co/200x200"
        />
        <ContactBar
          name="Bruno Oliveira"
          email="bruno@email.com"
          phone="(00) 99876-5432"
          image="https://placehold.co/200x200"
        />
      </S.ContainerContacts>
    </S.ContainerMyContact>
  )
}

export default MyContacts
