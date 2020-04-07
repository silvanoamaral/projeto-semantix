import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Page1 from '../view/Page1'
import Page2 from '../view/Page2'
import NotFound from '../view/NotFound'

export default () => (
  <>
    <Switch>
      <Route path="/" exact component={Page1} />
      <Route path="/time-data" component={Page2} />
      <Route path="*" component={NotFound} />
    </Switch>
  </>
)
