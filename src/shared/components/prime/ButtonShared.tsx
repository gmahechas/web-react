import React from 'react'

import { Button } from 'primereact/button';

function ButtonShared(props: any) {
  return (
    <div>
      <Button label={props.label} />
    </div>
  )
}

export default ButtonShared;
