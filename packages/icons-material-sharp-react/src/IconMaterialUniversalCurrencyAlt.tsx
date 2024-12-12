import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUniversalCurrencyAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalCurrencyAlt'

      short_name='UniversalCurrencyAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-320h160v-160h-60v100H600v60Zm-120-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM200-480h60v-100h100v-60H200v160ZM80-200v-560h800v560H80Zm80-80h640v-400H160v400Zm0 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialUniversalCurrencyAlt.displayName = 'OnesyIconMaterialUniversalCurrencyAlt';

export default IconMaterialUniversalCurrencyAlt;
