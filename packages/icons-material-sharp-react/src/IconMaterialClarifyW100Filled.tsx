import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClarifyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClarifyW100Filled'

      short_name='Clarify'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-306h228v-28H266v28Zm400 0h28v-348h-28v348ZM266-466h228v-28H266v28Zm0-160h228v-28H266v28ZM132-172v-616h696v616H132Z"/>
    </Icon>
  );
});

IconMaterialClarifyW100Filled.displayName = 'OnesyIconMaterialClarifyW100Filled';

export default IconMaterialClarifyW100Filled;
