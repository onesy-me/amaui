import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunctionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsFilled'

      short_name='Functions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20v-2l6.5-6L6 6V4h12v3h-7.225l5.375 5-5.375 5H18v3Z"/>
    </Icon>
  );
});

IconMaterialFunctionsFilled.displayName = 'AmauiIconMaterialFunctionsFilled';

export default IconMaterialFunctionsFilled;
