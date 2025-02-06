import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'
import {
  updateForm,
  setError,
  resetForm
} from '../store/reducers/contactFormSlice'
import { register } from '../store/reducers/contacts'
import { useNavigate } from 'react-router-dom'

const DEFAULT_IMAGE_URL =
  'https://img.freepik.com/vetores-gratis/circulos-de-utilizadores-definidos_78370-4704.jpg?w=360'

export function useContactForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { form, error } = useSelector((state: RootReducer) => state.contactForm)

  function isValidUrl(url: string) {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  function handleSubmit() {
    const hasErrors = {
      name: form.name === '',
      phone: form.phone === ''
    }

    dispatch(setError(hasErrors))

    if (!hasErrors.name && !hasErrors.phone) {
      const contactImage = isValidUrl(form.image)
        ? form.image
        : DEFAULT_IMAGE_URL

      dispatch(register({ ...form, image: contactImage }))
      dispatch(resetForm())

      navigate('/myContacts')
    }
  }

  function handleBlur(field: 'name' | 'phone') {
    dispatch(setError({ ...error, [field]: form[field].trim() === '' }))
  }

  function handleChange(field: keyof typeof form, value: string | boolean) {
    dispatch(updateForm({ [field]: value }))
  }

  function handlePhoneChange(value: string) {
    const formattedValue = value
      .replace(/\D/g, '')
      .slice(0, 11)
      .replace(/^(\d{2})(\d{5})(\d{4})?/, '($1) $2-$3')

    dispatch(updateForm({ phone: formattedValue.trim() }))
  }

  return {
    form,
    error,
    handleSubmit,
    handleBlur,
    handleChange,
    handlePhoneChange
  }
}
