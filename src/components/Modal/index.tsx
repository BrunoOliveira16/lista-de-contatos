import Button from '../Button'

import * as S from './styles'

type ModalProps = {
  title: string
  children?: JSX.Element
  handleSubmit: () => void
  handleCancel: () => void
}

const Modal = ({ title, children, handleSubmit, handleCancel }: ModalProps) => {
  return (
    <S.Overlay>
      <S.Container>
        <S.Title>{title}</S.Title>

        <S.Separator />

        {children}

        <S.ContainerButtons>
          <Button title="Salvar" kind="primary" onPress={handleSubmit} />
          <Button title="Cancelar" kind="danger" onPress={handleCancel} />
        </S.ContainerButtons>
      </S.Container>
    </S.Overlay>
  )
}

export default Modal
