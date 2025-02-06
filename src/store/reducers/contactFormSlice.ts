import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContactFormState {
  form: FormState
  error: FormErrors
}

const initialState: ContactFormState = {
  form: {
    name: '',
    image: '',
    phone: '',
    email: '',
    isFavorite: false
  },
  error: {
    name: false,
    phone: false
  }
}

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    updateForm(state, action: PayloadAction<Partial<FormState>>) {
      state.form = { ...state.form, ...action.payload }
    },
    setError(state, action: PayloadAction<FormErrors>) {
      state.error = action.payload
    },
    resetForm(state) {
      state.form = initialState.form
      state.error = initialState.error
    }
  }
})

export const { updateForm, setError, resetForm } = contactFormSlice.actions
export default contactFormSlice.reducer
