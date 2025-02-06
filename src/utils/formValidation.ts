export const DEFAULT_IMAGE_URL =
  'https://img.freepik.com/vetores-gratis/circulos-de-utilizadores-definidos_78370-4704.jpg?w=360'

export function validateFormField(
  field: FormFields,
  value: string
): string | undefined {
  if (field === 'name' && value === '') {
    return 'Nome é obrigatório'
  }

  if (field === 'phone' && value === '') {
    return 'Telefone é obrigatório'
  }

  if (field === 'phone') {
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/

    if (!phoneRegex.test(value)) {
      return 'Formato inválido. Ex: (XX) XXXXX-XXXX'
    }
  }

  return undefined
}

export function validateForm(form: {
  name: string
  phone: string
}): FormErrors {
  const errors: FormErrors = {}

  Object.entries(form).forEach(([field, value]) => {
    const error = validateFormField(field as 'name' | 'phone', value)
    if (error) {
      errors[field as 'name' | 'phone'] = error
    }
  })

  return errors
}

export function isValidUrl(url: string) {
  try {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:'
  } catch {
    return false
  }
}

export function formatPhoneNumber(value: string): string {
  return value
    .replace(/\D/g, '') // Remove tudo que não for número
    .slice(0, 11) // Limita a 11 dígitos
    .replace(/^(\d{2})(\d{5})(\d{4})?/, '($1) $2-$3') // Aplica a máscara (XX) XXXXX-XXXX
    .trim()
}
