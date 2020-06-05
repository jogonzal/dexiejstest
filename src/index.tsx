import { initializeIcons } from '@uifabric/icons'
import * as React from 'react'
import { render } from 'react-dom'
import { Home } from './components/Home'

initializeIcons()

render((
  <Home />
), document.getElementById('root'))
