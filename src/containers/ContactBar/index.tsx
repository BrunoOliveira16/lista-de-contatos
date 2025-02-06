import { MdOutlineStar, MdStarBorder } from 'react-icons/md'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import InputText from '../../components/Input'
import ContactInfo from '../../components/ContactInfo'

import { Contact } from '../../models/Contacts'
import useEditContact from '../../hook/useEditContact'

import * as S from './styles'

interface ContactBarProps {
  data: Contact
}

const ContactBar = ({ data }: ContactBarProps) => {
  const {
    contact,
    showEditModal,
    editError,
    setShowEditModal,
    handleEdit,
    handleRemove,
    handleFavorite,
    handleChange,
    handleCancel,
    handleBlur
  } = useEditContact(data)

  function renderContactEdit() {
    return (
      <S.ContainerContactEdit>
        <div>
          <InputText
            value={contact.name}
            placeholder="nome"
            label="Nome"
            onChangeText={(value) => handleChange('name', value)}
            onBlur={() => handleBlur('name')}
            hasError={!!editError.name}
          />
          {editError.name && <S.ErrorMessage>{editError.name}</S.ErrorMessage>}
        </div>

        <InputText
          value={contact.image}
          placeholder="URL imagem"
          label="Imagem"
          onChangeText={(value) => handleChange('image', value)}
        />

        <div>
          <InputText
            value={contact.phone}
            placeholder="(XX) XXXXX-XXXX"
            label="Telefone"
            onChangeText={(value) => handleChange('phone', value)}
            onBlur={() => handleBlur('phone')}
            hasError={!!editError.phone}
          />
          {editError.phone && (
            <S.ErrorMessage>{editError.phone}</S.ErrorMessage>
          )}
        </div>

        <InputText
          value={contact.email}
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
          handleCancel={() => handleCancel(data)}
        >
          {renderContactEdit()}
        </Modal>
      )}
    </div>
  )
}

export default ContactBar
