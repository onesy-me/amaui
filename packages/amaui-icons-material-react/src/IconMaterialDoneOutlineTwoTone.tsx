import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneOutlineTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineTwoTone'
      short_name='DoneOutline'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z"/>
    </Icon>
  );
});

export default IconMaterialDoneOutlineTwoTone;
