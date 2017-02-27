import React from 'react'

// =====COMPONENTS=====
import componentIndex from '../components'

// =====PAGES==========
import Index from '../pages'

import { Router, Route, IndexRoute, BrowserHistory, useRouterHistory } from "react-router"

export default(
  <Route path="/" component={ Index } >
    <IndexRoute component={ componentIndex } />
  </Route>
)
