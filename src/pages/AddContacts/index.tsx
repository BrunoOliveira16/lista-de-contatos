import { RiAddLine } from 'react-icons/ri'
import { IoHome } from 'react-icons/io5'
import { MdOutlineStar, MdStarBorder } from 'react-icons/md'

import Hero from '../../components/Hero'
import InputText from '../../components/Input'
import Button from '../../components/Button'

import useContactForm from '../../hook/useContactForm'

import * as S from './styles'

const AddContacts = () => {
  const {
    form,
    error,
    handleSubmit,
    handleBlur,
    handleChange,
    handlePhoneChange
  } = useContactForm()

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
          value={form.name.toString()}
          placeholder="nome"
          label="Nome"
          onChangeText={(value) => handleChange('name', value)}
          onBlur={() => handleBlur('name')}
          isError={error.name}
        />
        <InputText
          value={form.image.toString()}
          placeholder="URL Imagem"
          label="URL Imagem"
          onChangeText={(value) => handleChange('image', value)}
        />

        <S.ContainerPhoneAndEmail>
          <InputText
            value={form.phone.toString()}
            placeholder="(xx) xxxxx-xxxx"
            label="Telefone"
            onChangeText={handlePhoneChange}
            onBlur={() => handleBlur('phone')}
            isError={error.phone}
          />
          <InputText
            value={form.email.toString()}
            placeholder="e-mail"
            label="E-mail"
            onChangeText={(value) => handleChange('email', value)}
          />
        </S.ContainerPhoneAndEmail>
      </S.ContainerContacts>

      <S.ContainerButtons>
        <Button title="Salvar" onPress={handleSubmit} kind="primary" />

        <span>
          {form.isFavorite ? (
            <MdOutlineStar
              onClick={() => handleChange('isFavorite', !form.isFavorite)}
            />
          ) : (
            <MdStarBorder
              onClick={() => handleChange('isFavorite', !form.isFavorite)}
            />
          )}
        </span>
      </S.ContainerButtons>
    </S.ContainerAddContact>
  )
}

export default AddContacts
