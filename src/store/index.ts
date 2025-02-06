import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contacts'
import contactsFormReducer from './reducers/contactFormSlice'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    contactForm: contactsFormReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
