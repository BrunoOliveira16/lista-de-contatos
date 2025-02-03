import { useDispatch } from 'react-redux'
import { MdOutlineStar, MdStarBorder } from 'react-icons/md'

import { Contact } from '../../models/Contacts'
import { remove, edit } from '../../store/reducers/contacts'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import InputText from '../../components/Input'

import * as S from './styles'
import { useState } from 'react'
import ContactInfo from '../../components/ContactInfo'

interface ContactBarProps {
  data: Contact
}

const ContactBar = ({ data }: ContactBarProps) => {
  const dispatch = useDispatch()

  const [showEditModal, setShowEditModal] = useState(false)
  const [editedContact, setEditedContact] = useState<Contact>(data)

  function handleEdit() {
    dispatch(edit(editedContact))
    setShowEditModal(false)
  }

  function handleRemove(id: number) {
    dispatch(remove(id))
  }

  function handleFavorite() {
    const updatedContact = { ...data, isFavorite: !data.isFavorite }
    dispatch(edit(updatedContact))
    setEditedContact(updatedContact)
  }

  function handleChange(field: keyof Contact, value: string) {
    setEditedContact((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  function renderContactEdit() {
    return (
      <S.ContainerContactEdit>
        <InputText
          value={editedContact.name}
          placeholder="nome"
          label="Nome"
          onChangeText={(value) => handleChange('name', value)}
        />

        <InputText
          value={editedContact.image}
          placeholder="URL imagem"
          label="Imagem"
          onChangeText={(value) => handleChange('image', value)}
        />

        <InputText
          value={editedContact.phone}
          placeholder="(XX) XXXXX-XXXX"
          label="Telefone"
          onChangeText={(value) => handleChange('phone', value)}
        />

        <InputText
          value={editedContact.email}
          placeholder="E-mail"
          label="E-mail"
          onChangeText={(value) => handleChange('email', value)}
        />
      </S.ContainerContactEdit>
    )
  }

  return (
    <div>
      <S.ContainerBar>
        <S.ContainerImage>
          <img src={data.image} alt="foto" />
        </S.ContainerImage>
        <S.ContainerInfo>
          <S.ContainerTitle>
            <ContactInfo title="Nome" value={data.name} />

            {data.isFavorite ? (
              <MdOutlineStar onClick={handleFavorite} />
            ) : (
              <MdStarBorder onClick={handleFavorite} />
            )}
          </S.ContainerTitle>

          <S.ContainerPhoneAndEmail>
            <ContactInfo title="Telefone" value={data.phone} />
            <ContactInfo title="E-mail" value={data.email} />
          </S.ContainerPhoneAndEmail>

          <S.ContainerEdit>
            <Button
              title="Editar"
              kind="primary"
              onPress={() => setShowEditModal(true)}
            />
            <Button
              title="Remover"
              kind="danger"
              onPress={() => handleRemove(data.id)}
            />
          </S.ContainerEdit>
        </S.ContainerInfo>
      </S.ContainerBar>

      {showEditModal && (
        <Modal
          title="Editar Contato"
          handleSubmit={handleEdit}
          handleCancel={() => {
            setShowEditModal(false)
            setEditedContact(data)
          }}
        >
          {renderContactEdit()}
        </Modal>
      )}
    </div>
  )
}

export default ContactBar
