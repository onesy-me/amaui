import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial15mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='15mpFilled'

      short_name='15mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 11.5H10v-6H7V7h1.5Zm3.5 0h4.5V8h-3V7h3V5.5H12V9h3v1h-3ZM3 21V3h18v18Zm3-2.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15Z"/>
    </Icon>
  );
});

IconMaterial15mpFilled.displayName = 'AmauiIconMaterial15mpFilled';

export default IconMaterial15mpFilled;
