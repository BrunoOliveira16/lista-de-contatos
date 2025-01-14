import * as S from './style'

type InputTextProps = {
  label?: string
  placeholder?: string
  value?: string
  isError?: boolean
  onChangeText: (args: string) => void
  onBlur?: () => void
}

const InputText = ({
  label,
  placeholder,
  value = '',
  isError,
  onChangeText,
  onBlur
}: InputTextProps) => {
  return (
    <S.ContainerInput>
      <S.Label isError={isError}>{label}</S.Label>
      <S.Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        onBlur={onBlur}
        isError={isError}
      />
    </S.ContainerInput>
  )
}

export default InputText
