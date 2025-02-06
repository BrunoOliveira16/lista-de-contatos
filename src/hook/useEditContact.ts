import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Contact } from '../models/Contacts'
import { RootReducer } from '../store'
import { remove, edit } from '../store/reducers/contacts'
import { setEditError, resetForm } from '../store/reducers/contactFormSlice'
import {
  validateFormField,
  validateForm,
  formatPhoneNumber,
  isValidUrl,
  DEFAULT_IMAGE_URL
} from '../utils/formValidation'

const useEditContact = (initialContact: Contact) => {
  const dispatch = useDispatch()
  const { editError } = useSelector((state: RootReducer) => state.contactForm)

  const [contact, setContact] = useState<Contact>(initialContact)
  const [showEditModal, setShowEditModal] = useState(false)

  function handleEdit() {
    const hasErrors = validateForm(contact)
    dispatch(setEditError(hasErrors))

    if (Object.keys(hasErrors).length === 0) {
      console.log('URL', isValidUrl(contact.image))

      const updatedContact = {
        ...contact,
        image: isValidUrl(contact.image) ? contact.image : DEFAULT_IMAGE_URL
      }

      dispatch(edit(updatedContact))
      setShowEditModal(false)
    }
  }

  function handleRemove(id: number) {
    dispatch(remove(id))
  }

  function handleFavorite() {
    const updatedContact = { ...contact, isFavorite: !contact.isFavorite }
    dispatch(edit(updatedContact))
    setContact(updatedContact)
  }

  function handleChange(field: keyof Contact, value: string) {
    const formattedValue =
      field === 'phone' ? formatPhoneNumber(value as string) : value

    setContact((prev) => ({
      ...prev,
      [field]: formattedValue
    }))
  }

  function handleCancel(data: Contact) {
    setContact(data)
    dispatch(resetForm())
    setShowEditModal(false)
  }

  function handleBlur(field: 'name' | 'phone') {
    const error = validateFormField(field, contact[field])
    dispatch(setEditError({ ...editError, [field]: error }))
  }

  return {
    contact,
    setContact,
    showEditModal,
    setShowEditModal,
    editError,
    handleEdit,
    handleRemove,
    handleFavorite,
    handleChange,
    handleCancel,
    handleBlur
  }
}

export default useEditContact
