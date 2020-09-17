/** @module Table
 *  @desc Table demo component
 *  @since 2020.05.19, 17:16
 *  @changed 2020.05.27, 22:58
 */

import React from 'react'
import { cn } from '@bem-react/classname'
import config from 'config'

import './Table.pcss'

import Title from './Title'
import Image from './Image'

const cnTable = cn('Table')

const { defaultGreeting, defaultName } = config.constants

const Table = ({ greeting = defaultGreeting, name = defaultName }) => {
  return (
    <div className={cnTable()}>
      <Title greeting={greeting} name={name} />
      <Image />
    </div>
  )
}

export default Table
