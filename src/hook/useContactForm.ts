import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../store'
import { register } from '../store/reducers/contacts'
import {
  updateForm,
  setFormError,
  resetForm
} from '../store/reducers/contactFormSlice'
import {
  validateFormField,
  validateForm,
  isValidUrl,
  formatPhoneNumber,
  DEFAULT_IMAGE_URL
} from '../utils/formValidation'

const useContactForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { form, formError } = useSelector(
    (state: RootReducer) => state.contactForm
  )

  function handleSubmit() {
    const hasErrors = validateForm(form)
    dispatch(setFormError(hasErrors))

    if (Object.keys(hasErrors).length === 0) {
      const contactImage = isValidUrl(form.image)
        ? form.image
        : DEFAULT_IMAGE_URL

      dispatch(register({ ...form, image: contactImage }))
      dispatch(resetForm())

      navigate('/myContacts')
    }
  }

  function handleBlur(field: 'name' | 'phone') {
    const error = validateFormField(field, form[field])
    dispatch(setFormError({ ...formError, [field]: error }))
  }

  function handleChange(field: keyof typeof form, value: string | boolean) {
    const formattedValue =
      field === 'phone' ? formatPhoneNumber(value as string) : value
    dispatch(updateForm({ [field]: formattedValue }))
  }

  return {
    form,
    formError,
    handleSubmit,
    handleBlur,
    handleChange
  }
}

export default useContactForm
