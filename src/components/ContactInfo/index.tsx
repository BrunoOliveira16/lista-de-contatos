import * as S from './styles'

interface ContactInfoProps {
  title: string
  value: string
}

const ContactInfo = ({ title, value }: ContactInfoProps) => {
  return (
    <S.Text>
      {title}: <span>{value}</span>
    </S.Text>
  )
}

export default ContactInfo
