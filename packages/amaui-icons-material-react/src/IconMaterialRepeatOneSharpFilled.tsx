import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepeatOneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOneSharpFilled'
      short_name='RepeatOne'

      {...props}
    >
      <path d="M11.5 15V10.5H10V9H13V15ZM7 22 3 18 7 14 8.4 15.45 6.85 17H17V13H19V19H6.85L8.4 20.55ZM5 11V5H17.15L15.6 3.45L17 2L21 6L17 10L15.6 8.55L17.15 7H7V11Z"/>
    </Icon>
  );
});

IconMaterialRepeatOneSharpFilled.displayName = 'AmauiIconMaterialRepeatOneSharpFilled';

export default IconMaterialRepeatOneSharpFilled;
