/** @module Image
 *  @desc Image element
 *  @since 2020.05.19, 17:16
 *  @changed 2020.05.27, 22:58
 */

import React from 'react'
import { cn } from '@bem-react/classname'
// import config from 'config'

import ImageFile from './img/LockColor2.svg'

import './Image.pcss'

const cnTable = cn('Table')

export default () => {
  return (
    <div className={cnTable('Image')}>
      <img src={ImageFile} />
    </div>
  )
}
