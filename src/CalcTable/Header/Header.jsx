/** @module Header
 *  @desc Header element
 *  @since 2020.09.17, 20:44
 *  @changed 2020.09.17, 20:44
 */

import React from 'react'
import { cn } from '@bem-react/classname'

import './Header.pcss'

const cnCalcTable = cn('CalcTable')

export default ({ greeting, name }) => (
  <h1 className={cnCalcTable('Header')}>{greeting}, {name}!</h1>
)
