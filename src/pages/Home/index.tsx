import { RiContactsFill, RiAddLine } from 'react-icons/ri'
import { MdFavorite } from 'react-icons/md'

import GuideBar from '../../components/GuideBar'

import * as S from './styles'

const Home = () => {
  return (
    <S.Home>
      <GuideBar
        title="Meus Contatos"
        route="/myContacts"
        Icon={RiContactsFill}
      />
      <GuideBar title="Adicionar" route="/addContacts" Icon={RiAddLine} />
      <GuideBar title="Favoritos" route="/favorites" Icon={MdFavorite} />
    </S.Home>
  )
}

export default Home
