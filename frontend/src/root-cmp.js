import { Route, Switch } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { routes } from './routes'

export function App() {
  return <div className="app main-layout">
    <AppHeader />
    <main>
      <Switch>
        {routes.map(route => <Route key={route.path} path={route.path} component={route.component} />)}
      </Switch>
    </main>
  </div>
}


