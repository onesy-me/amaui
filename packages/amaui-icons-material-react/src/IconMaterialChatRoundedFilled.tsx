import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatRoundedFilled'
      short_name='Chat'

      {...props}
    >
      <path d="M7 14H13.025Q13.45 14 13.725 13.712Q14 13.425 14 13Q14 12.575 13.713 12.287Q13.425 12 13 12H6.975Q6.55 12 6.275 12.287Q6 12.575 6 13Q6 13.425 6.287 13.712Q6.575 14 7 14ZM7 11H17.025Q17.45 11 17.725 10.712Q18 10.425 18 10Q18 9.575 17.712 9.287Q17.425 9 17 9H6.975Q6.55 9 6.275 9.287Q6 9.575 6 10Q6 10.425 6.287 10.712Q6.575 11 7 11ZM7 8H17.025Q17.45 8 17.725 7.713Q18 7.425 18 7Q18 6.575 17.712 6.287Q17.425 6 17 6H6.975Q6.55 6 6.275 6.287Q6 6.575 6 7Q6 7.425 6.287 7.713Q6.575 8 7 8ZM2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

IconMaterialChatRoundedFilled.displayName = 'AmauiIconMaterialChatRoundedFilled';

export default IconMaterialChatRoundedFilled;
