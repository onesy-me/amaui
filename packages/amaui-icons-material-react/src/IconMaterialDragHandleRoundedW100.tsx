import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDragHandleRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleRoundedW100'
      short_name='DragHandle'

      {...props}
    >
      <path d="M5 10.35Q4.85 10.35 4.75 10.25Q4.65 10.15 4.65 10Q4.65 9.85 4.75 9.75Q4.85 9.65 5 9.65H19Q19.15 9.65 19.25 9.75Q19.35 9.85 19.35 10Q19.35 10.15 19.25 10.25Q19.15 10.35 19 10.35ZM5 14.35Q4.85 14.35 4.75 14.25Q4.65 14.15 4.65 14Q4.65 13.85 4.75 13.75Q4.85 13.65 5 13.65H19Q19.15 13.65 19.25 13.75Q19.35 13.85 19.35 14Q19.35 14.15 19.25 14.25Q19.15 14.35 19 14.35Z"/>
    </Icon>
  );
});

export default IconMaterialDragHandleRoundedW100;
