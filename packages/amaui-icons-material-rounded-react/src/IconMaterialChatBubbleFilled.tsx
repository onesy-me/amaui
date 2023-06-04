import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatBubbleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleFilled'

      short_name='ChatBubble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleFilled.displayName = 'AmauiIconMaterialChatBubbleFilled';

export default IconMaterialChatBubbleFilled;
