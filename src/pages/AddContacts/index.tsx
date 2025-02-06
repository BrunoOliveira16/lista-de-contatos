import { useDispatch } from 'react-redux'
import { RiAddLine } from 'react-icons/ri'
import { IoHome } from 'react-icons/io5'
import { MdOutlineStar, MdStarBorder } from 'react-icons/md'

import Hero from '../../components/Hero'
import InputText from '../../components/Input'
import Button from '../../components/Button'

import useContactForm from '../../hook/useContactForm'
import { resetForm } from '../../store/reducers/contactFormSlice'

import * as S from './styles'

const AddContacts = () => {
  const dispatch = useDispatch()

  const { form, formError, handleSubmit, handleBlur, handleChange } =
    useContactForm()

  return (
    <S.ContainerAddContact>
      <Hero
        title="Adicionar contatos"
        Icon={RiAddLine}
        IconLink={IoHome}
        titleIcon="Home"
        to="/"
        onPress={() => dispatch(resetForm())}
      />

      <S.ContainerContacts>
        <div>
          <InputText
            value={form.name.toString()}
            placeholder="nome"
            label="Nome"
            onChangeText={(value) => handleChange('name', value)}
            onBlur={() => handleBlur('name')}
            hasError={!!formError.name}
          />
          {formError.name && <S.ErrorMessage>{formError.name}</S.ErrorMessage>}
        </div>

        <InputText
          value={form.image.toString()}
          placeholder="URL Imagem"
          label="URL Imagem"
          onChangeText={(value) => handleChange('image', value)}
        />

        <S.ContainerPhoneAndEmail>
          <div>
            <InputText
              value={form.phone.toString()}
              placeholder="(xx) xxxxx-xxxx"
              label="Telefone"
              onChangeText={(value) => handleChange('phone', value)}
              onBlur={() => handleBlur('phone')}
              hasError={!!formError.phone}
            />
            {formError.phone && (
              <S.ErrorMessage>{formError.phone}</S.ErrorMessage>
            )}
          </div>

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
