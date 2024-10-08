import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../models/Contacts'
import { contacts } from '../../mock/index'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: contacts
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((item) => item.id !== action.payload)
      ]
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const isRegisterContact = state.items.find(
        (item) => item.phone === action.payload.phone
      )

      if (isRegisterContact) {
        alert('Já existe um contato registrado com esse número')
      } else {
        const lastContact = state.items[state.items.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    }
  }
})

export const { remove, register } = contactSlice.actions

export default contactSlice.reducer
