import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSharp'
      short_name='Photo'

      {...props}
    >
      <path d="M6 17H18L14.25 12L11.25 16L9 13ZM3 21V3H21V21ZM5 19H19V5H5ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterialPhotoSharp.displayName = 'AmauiIconMaterialPhotoSharp';

export default IconMaterialPhotoSharp;
