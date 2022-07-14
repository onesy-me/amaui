import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropSquareTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareTwoTone'
      short_name='CropSquare'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"/>
    </Icon>
  );
});

export default IconMaterialCropSquareTwoTone;
