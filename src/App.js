import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './pages/Layout'
import Error from './pages/Error'
import Inbox from './pages/Inbox'


function App() {
  return (
    <main className='container-fluid'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="inbox/:userName/:group" element={<Inbox />} /> {/* www.csb.com/inbox/user/group */}
            <Route path="*" element={<Error />} /> {/* any invalid routes */}
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
