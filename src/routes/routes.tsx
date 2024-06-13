import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import MyContacts from '../pages/MyContacts'
import AddContacts from '../pages/AddContacts'

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/myContacts" element={<MyContacts />} />
    <Route path="/addContacts" element={<AddContacts />} />
  </Routes>
)
