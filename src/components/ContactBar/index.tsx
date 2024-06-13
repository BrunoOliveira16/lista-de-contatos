import { MdOutlineStar, MdStarBorder } from 'react-icons/md'

import Button from '../Button'

import * as S from './styles'

type ContactBarProps = {
  name: string
  email: string
  phone: string
  image: string
  isFavorite: boolean
  handleClick?: () => void
}

const ContactBar = ({
  name,
  email,
  phone,
  image,
  isFavorite,
  handleClick
}: ContactBarProps) => {
  return (
    <S.ContainerBar>
      <S.ContainerImage>
        <img src={image} alt="foto" />
      </S.ContainerImage>
      <S.ContainerInfo>
        <S.ContainerTitle>
          <S.Text>
            Nome: <span>{name}</span>
          </S.Text>
          {isFavorite ? <MdOutlineStar /> : <MdStarBorder />}
        </S.ContainerTitle>
        <div>
          <S.Text>
            Tel: <span>{phone}</span>
          </S.Text>
          <S.Text>
            E-mail: <span>{email}</span>
          </S.Text>
        </div>

        <S.ContainerEdit>
          <Button title="Editar" kind="primary" onPress={handleClick} />
          <Button title="Remover" kind="danger" onPress={handleClick} />
        </S.ContainerEdit>
      </S.ContainerInfo>
    </S.ContainerBar>
  )
}

export default ContactBar
