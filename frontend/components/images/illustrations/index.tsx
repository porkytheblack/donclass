import { isUndefined } from 'lodash'
import Image from 'next/image'
import React from 'react'


function Illustration({img, cus}:{img: string, cus?: {width: string | number, height: string | number}}) {
  return (
    <Image alt={img} src={`/illustrations/${img}.svg`} width={ isUndefined(cus) ?400 : cus.width} height={ isUndefined(cus) ?450 : cus.height} />
  )
}

export default Illustration