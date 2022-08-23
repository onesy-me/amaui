import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenTwoTone'
      short_name='Straighten'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 12h-2V8h-2v4h-2V8h-2v4H9V8H7v4H5V8H3v8h18V8h-2z" opacity=".3"/><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"/>
    </Icon>
  );
});

IconMaterialStraightenTwoTone.displayName = 'AmauiIconMaterialStraightenTwoTone';

export default IconMaterialStraightenTwoTone;
