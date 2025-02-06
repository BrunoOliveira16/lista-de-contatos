import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Contact } from '../models/Contacts'
import { remove, edit } from '../store/reducers/contacts'

const useEditContact = (initialContact: Contact) => {
  const dispatch = useDispatch()

  const [contact, setContact] = useState<Contact>(initialContact)
  const [showEditModal, setShowEditModal] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})

  function validateFields() {
    let isValid = true
    const newErrors: { name?: string; phone?: string } = {}

    if (!contact.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
      isValid = false
    }

    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/
    if (!phoneRegex.test(contact.phone)) {
      newErrors.phone = 'Formato inválido. Ex: (XX) XXXXX-XXXX'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  function handleEdit() {
    if (!validateFields()) return
    dispatch(edit(contact))
    setShowEditModal(false)
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
    setContact((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  function handleCancel(data: Contact) {
    setContact(data)
    setErrors({})
    setShowEditModal(false)
  }

  return {
    contact,
    setContact,
    showEditModal,
    setShowEditModal,
    errors,
    handleEdit,
    handleRemove,
    handleFavorite,
    handleChange,
    handleCancel
  }
}

export default useEditContact
