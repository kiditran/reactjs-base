import React from 'react'

const Login = React.lazy(() => import('./pages/login/Login'))
const Register = React.lazy(() => import('./pages/register/Register'))
const Elements = React.lazy(() => import('./pages/elements/Elements'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/login', exact: false, component: Login },
  { path: '/register', exact: false, component: Register },
  { path: '/elements', exact: false, component: Elements },
]

export default routes
