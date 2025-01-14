import { useDispatch } from 'react-redux'
import { MdOutlineStar, MdStarBorder } from 'react-icons/md'

import { Contact } from '../../models/Contacts'
import { remove } from '../../store/reducers/contacts'

import Button from '../Button'

import * as S from './styles'

interface ContactBarProps {
  data: Contact
}

const ContactBar = ({ data }: ContactBarProps) => {
  const dispatch = useDispatch()

  function handleEdit(id: number) {
    console.log('Editar contato', id)
  }

  function handleRemove(id: number) {
    dispatch(remove(id))
  }

  function handleFavorite(id: number) {
    console.log('Tratar favorito', id)
  }

  return (
    <S.ContainerBar>
      <S.ContainerImage>
        <img src={data.image} alt="foto" />
      </S.ContainerImage>
      <S.ContainerInfo>
        <S.ContainerTitle>
          <S.Text>
            Nome: <span>{data.name}</span>
          </S.Text>
          {data.isFavorite ? (
            <MdOutlineStar onClick={() => handleFavorite(data.id)} />
          ) : (
            <MdStarBorder onClick={() => handleFavorite(data.id)} />
          )}
        </S.ContainerTitle>

        <div>
          <S.Text>
            Tel: <span>{data.phone}</span>
          </S.Text>
          <S.Text>
            E-mail: <span>{data.email}</span>
          </S.Text>
        </div>

        <S.ContainerEdit>
          <Button
            title="Editar"
            kind="primary"
            onPress={() => handleEdit(data.id)}
          />
          <Button
            title="Remover"
            kind="danger"
            onPress={() => handleRemove(data.id)}
          />
        </S.ContainerEdit>
      </S.ContainerInfo>
    </S.ContainerBar>
  )
}

export default ContactBar
