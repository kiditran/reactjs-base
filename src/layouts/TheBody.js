import React from 'react'
import routes from '../routes'
import { Switch, Route } from 'react-router-dom'

const loading = (
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
)
const TheBody = () => {
  return (
    <main className="lc-body">
      <div className="container">
        <React.Suspense fallback={loading}>
          <Switch>
            {routes.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  exact={item.exact}
                  component={item.component}
                />
              )
            })}
          </Switch>
        </React.Suspense>
      </div>
    </main>
  )
}

export default TheBody
