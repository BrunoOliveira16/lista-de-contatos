import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContactFormState {
  form: FormState
  formError: FormErrors
  editError: FormErrors
}

const initialState: ContactFormState = {
  form: {
    name: '',
    image: '',
    phone: '',
    email: '',
    isFavorite: false
  },
  formError: {},
  editError: {}
}

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    updateForm(state, action: PayloadAction<Partial<FormState>>) {
      state.form = { ...state.form, ...action.payload }
    },
    setFormError(state, action: PayloadAction<FormErrors>) {
      state.formError = action.payload
    },
    setEditError(state, action: PayloadAction<FormErrors>) {
      state.editError = action.payload
    },
    resetForm(state) {
      state.form = initialState.form
      state.formError = initialState.formError
      state.editError = initialState.editError
    }
  }
})

export const { updateForm, setFormError, setEditError, resetForm } =
  contactFormSlice.actions
export default contactFormSlice.reducer
