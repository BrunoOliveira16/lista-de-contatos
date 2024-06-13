import { useState } from 'react'
import { RiAddLine } from 'react-icons/ri'
import { IoHome } from 'react-icons/io5'
import { MdOutlineStar, MdStarBorder } from 'react-icons/md'

import Hero from '../../components/Hero'
import InputText from '../../components/Input'
import Button from '../../components/Button'

import * as S from './styles'

const AddContacts = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [favorite, setFavorite] = useState(false)

  return (
    <S.ContainerAddContact>
      <Hero
        title="Adicionar contatos"
        Icon={RiAddLine}
        IconLink={IoHome}
        titleIcon="Home"
        to="/"
      />
      <S.ContainerContacts>
        <InputText
          value={name}
          placeholder="nome"
          label="Nome"
          onChangeText={setName}
        />
        <S.ContainerPhoneAndEmail>
          <InputText
            value={phone}
            placeholder="(xx) xxxx-xxxx"
            label="Telefone"
            onChangeText={setPhone}
          />
          <InputText
            value={email}
            placeholder="e-mail"
            label="E-mail"
            onChangeText={setEmail}
          />
        </S.ContainerPhoneAndEmail>
      </S.ContainerContacts>
      <S.ContainerButtons>
        <Button title="Salvar" onPress={() => ({})} kind="primary" />
        {favorite ? (
          <MdOutlineStar onClick={() => setFavorite(!favorite)} />
        ) : (
          <MdStarBorder onClick={() => setFavorite(!favorite)} />
        )}
      </S.ContainerButtons>
    </S.ContainerAddContact>
  )
}

export default AddContacts
