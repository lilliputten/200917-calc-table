/** @module demo
 *  @desc Main app entry point
 *  @since 2020.05.19, 17:16
 *  @changed 2020.07.21, 16:44
 */

import 'es5-shim/es5-shim'
import 'es5-shim/es5-sham'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import { render } from 'react-dom'

import config from 'config'

import CalcTable from './CalcTable'

// Demo app styles
import './index.pcss'

const name = config.constants.defaultUser || 'Name'

const demoContent = (
  <div className="demo">
    <CalcTable greeting="CalcTable" name={name} />
    {/* Add here some service blocks: action buttons etc... */}
  </div>
)

// Create app dom entry
render(demoContent, document.getElementById('root'))
