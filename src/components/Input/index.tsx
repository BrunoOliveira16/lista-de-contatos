import * as S from './style'

type InputTextProps = {
  label?: string
  placeholder?: string
  value?: string
  hasError?: boolean
  onChangeText: (args: string) => void
  onBlur?: () => void
}

const InputText = ({
  label,
  placeholder,
  value = '',
  hasError,
  onChangeText,
  onBlur
}: InputTextProps) => {
  return (
    <S.ContainerInput>
      <S.Label $hasError={hasError || undefined}>{label}</S.Label>
      <S.Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        onBlur={onBlur}
        $error={hasError || undefined}
      />
    </S.ContainerInput>
  )
}

export default InputText
