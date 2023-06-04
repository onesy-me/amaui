import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignEnd'

      short_name='AlignEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 976v-80h800v80H80Zm200-440V416h400v120H280Zm0 240V656h400v120H280Z"/>
    </Icon>
  );
});

IconMaterialAlignEnd.displayName = 'AmauiIconMaterialAlignEnd';

export default IconMaterialAlignEnd;
