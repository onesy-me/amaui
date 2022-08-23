import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatRoundedW100Filled'
      short_name='Chat'

      {...props}
    >
      <path d="M7 13.35H13.025Q13.15 13.35 13.25 13.25Q13.35 13.15 13.35 13Q13.35 12.85 13.25 12.75Q13.15 12.65 13 12.65H6.975Q6.85 12.65 6.75 12.75Q6.65 12.85 6.65 13Q6.65 13.15 6.75 13.25Q6.85 13.35 7 13.35ZM7 10.35H17.025Q17.15 10.35 17.25 10.25Q17.35 10.15 17.35 10Q17.35 9.85 17.25 9.75Q17.15 9.65 17 9.65H6.975Q6.85 9.65 6.75 9.75Q6.65 9.85 6.65 10Q6.65 10.15 6.75 10.25Q6.85 10.35 7 10.35ZM7 7.35H17.025Q17.15 7.35 17.25 7.25Q17.35 7.15 17.35 7Q17.35 6.85 17.25 6.75Q17.15 6.65 17 6.65H6.975Q6.85 6.65 6.75 6.75Q6.65 6.85 6.65 7Q6.65 7.15 6.75 7.25Q6.85 7.35 7 7.35ZM3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialChatRoundedW100Filled.displayName = 'AmauiIconMaterialChatRoundedW100Filled';

export default IconMaterialChatRoundedW100Filled;
