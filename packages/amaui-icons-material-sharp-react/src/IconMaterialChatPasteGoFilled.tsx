import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatPasteGoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatPasteGoFilled'

      short_name='ChatPasteGo'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m720 936-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160ZM280 496h320v-80H280v80Zm0 160h200v-80H280v80ZM120 936V256h640v283q-10-2-20-2.5t-20-.5q-101 0-170.5 70T480 776q0 10 .5 20t2.5 20H240L120 936Z"/>
    </Icon>
  );
});

IconMaterialChatPasteGoFilled.displayName = 'AmauiIconMaterialChatPasteGoFilled';

export default IconMaterialChatPasteGoFilled;
