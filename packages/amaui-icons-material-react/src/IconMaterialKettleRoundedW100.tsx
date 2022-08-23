import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKettleRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KettleRoundedW100'
      short_name='Kettle'

      {...props}
    >
      <path d="M7.3 17.7V6.425L4.95 3.3H17.2v2.35h2q.625 0 1.063.437.437.438.437 1.063v4.7q0 .625-.437 1.062-.438.438-1.063.438h-2v4.35ZM8 17h8.5V4H6.325L8 6.175Zm9.2-4.35h2q.35 0 .575-.225Q20 12.2 20 11.85v-4.7q0-.35-.225-.575-.225-.225-.575-.225h-2ZM13 15h1.5V6H13Zm-8.7 5.7V20h15.4v.7ZM8 17h8.5Z"/>
    </Icon>
  );
});

IconMaterialKettleRoundedW100.displayName = 'AmauiIconMaterialKettleRoundedW100';

export default IconMaterialKettleRoundedW100;
