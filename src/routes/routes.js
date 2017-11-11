import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Containers/Home/Home'

import Search from '../Containers/Search/Search'

export default props=>(
    <span>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/Search' component={Search}/>
      </Switch>
    </span>
)
