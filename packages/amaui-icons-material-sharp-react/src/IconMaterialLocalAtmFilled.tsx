import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalAtmFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmFilled'

      short_name='LocalAtm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h2v-1h2v-5h-4v-1h4V8h-2V7h-2v1H9v5h4v1H9v2h2Zm-9 3V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialLocalAtmFilled.displayName = 'AmauiIconMaterialLocalAtmFilled';

export default IconMaterialLocalAtmFilled;
