import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovingBedsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingBedsW100'

      short_name='MovingBeds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.1 20.7q-.625 0-1.062-.438Q3.6 19.825 3.6 19.2V4.8q0-.625.438-1.063Q4.475 3.3 5.1 3.3h7.4q.625 0 1.062.437Q14 4.175 14 4.8v14.4q0 .625-.438 1.062-.437.438-1.062.438Zm-.8-8.525q.375-.425.888-.65Q5.7 11.3 6.3 11.3h5q.6 0 1.113.225.512.225.887.65V4.8q0-.35-.225-.575Q12.85 4 12.5 4H5.1q-.35 0-.575.225Q4.3 4.45 4.3 4.8ZM8.8 9q-.575 0-.962-.387-.388-.388-.388-.963t.388-.962Q8.225 6.3 8.8 6.3t.962.388q.388.387.388.962t-.388.963Q9.375 9 8.8 9ZM5.1 20h7.4q.35 0 .575-.225.225-.225.225-.575V14q0-.825-.587-1.413Q12.125 12 11.3 12h-5q-.825 0-1.412.587Q4.3 13.175 4.3 14v5.2q0 .35.225.575Q4.75 20 5.1 20Zm3.35-3.65V18q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-1.65h1.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9.15V14q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.65H6.8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM5.1 20H4.3h9H12.5Zm13.5-5.65q-.125-.1-.112-.25.012-.15.112-.25l1.5-1.5h-3.75q-.15 0-.25-.1T16 12q0-.15.1-.25t.25-.1h3.75l-1.5-1.5q-.1-.1-.112-.25-.013-.15.112-.25.1-.1.25-.088.15.013.25.113l1.8 1.8q.225.225.225.525 0 .3-.225.525l-1.825 1.825q-.1.1-.238.1-.137 0-.237-.1Z"/>
    </Icon>
  );
});

IconMaterialMovingBedsW100.displayName = 'AmauiIconMaterialMovingBedsW100';

export default IconMaterialMovingBedsW100;
