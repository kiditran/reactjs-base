import React from 'react'

const Login = React.lazy(() => import('./pages/login/Login'))
const Terms = React.lazy(() => import('./pages/terms/TermConditions'))
const Register = React.lazy(() => import('./pages/register/Register'))
const Elements = React.lazy(() => import('./pages/elements/Elements'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/login', exact: false, component: Login },
  { path: '/terms', exact: false, component: Terms },
  { path: '/register', exact: false, component: Register },
  { path: '/elements', exact: false, component: Elements },
]

export default routes
