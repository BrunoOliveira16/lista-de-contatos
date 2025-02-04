import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RiAddLine } from 'react-icons/ri'
import { IoHome } from 'react-icons/io5'
import { MdOutlineStar, MdStarBorder } from 'react-icons/md'

import { register } from '../../store/reducers/contacts'

import Hero from '../../components/Hero'
import InputText from '../../components/Input'
import Button from '../../components/Button'

import * as S from './styles'

const DEFAULT_IMAGE_URL =
  'https://img.freepik.com/vetores-gratis/circulos-de-utilizadores-definidos_78370-4704.jpg?w=360'

const AddContacts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialFormState: FormState = {
    name: '',
    image: '',
    phone: '',
    email: '',
    isFavorite: false
  }

  const [form, setForm] = useState<FormState>(initialFormState)
  const [error, setError] = useState<FormErrors>({ name: false, phone: false })

  function isValidUrl(url: string) {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  function handleSubmit() {
    const hasErrors: FormErrors = {
      name: form.name === '',
      phone: form.phone === ''
    }

    setError(hasErrors)

    if (!hasErrors.name && !hasErrors.phone) {
      const contactImage = isValidUrl(form.image)
        ? form.image
        : DEFAULT_IMAGE_URL

      dispatch(
        register({
          ...form,
          image: contactImage
        })
      )

      navigate('/myContacts')
    }

    setForm(initialFormState)
  }

  function handleBlur(field: 'name' | 'phone') {
    setError((prev) => ({
      ...prev,
      [field]: form[field].toString().trim() === ''
    }))
  }

  function handleChange(field: FormFields, value: string | boolean) {
    setForm((prevForm) => {
      if (field === 'isFavorite') {
        return { ...prevForm, [field]: value as boolean }
      }

      return { ...prevForm, [field]: value as string }
    })
  }

  function handlePhoneChange(value: string) {
    const formattedValue = value
      .replace(/\D/g, '') // Remove qualquer caractere não numérico
      .slice(0, 11) // Limita o número de caracteres a 11 (DDD + número)
      .replace(/^(\d{2})(\d{5})(\d{4})?/, '($1) $2-$3') // Aplica o formato (99) 99999-9999

    setForm((prevForm) => ({ ...prevForm, phone: formattedValue.trim() }))
  }

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
