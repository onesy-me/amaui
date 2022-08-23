import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriorityRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityRounded'
      short_name='Priority'

      {...props}
    >
      <path d="M9 21Q6.5 21 4.75 19.25Q3 17.5 3 15V9Q3 6.5 4.75 4.75Q6.5 3 9 3H15Q17.5 3 19.25 4.75Q21 6.5 21 9V15Q21 17.5 19.25 19.25Q17.5 21 15 21ZM11 16 17 10 15.6 8.6 11 13.2 8.8 11 7.4 12.4ZM9 19H15Q16.65 19 17.825 17.825Q19 16.65 19 15V9Q19 7.35 17.825 6.175Q16.65 5 15 5H9Q7.35 5 6.175 6.175Q5 7.35 5 9V15Q5 16.65 6.175 17.825Q7.35 19 9 19ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialPriorityRounded.displayName = 'AmauiIconMaterialPriorityRounded';

export default IconMaterialPriorityRounded;
