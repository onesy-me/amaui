import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolicyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyW100Filled'

      short_name='Policy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.13-139q-6.13 0-12.13-1-6-1-11.02-3Q344-188 278-291.5 212-395 212-516v-166q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v166q0 59-17 113t-45 105L568-416q9-14 14.5-30.27T588-480q0-44.55-31.72-76.28Q524.55-588 480-588t-76.27 31.72Q372-524.55 372-480t31.73 76.27Q435.45-372 480-372q19 0 36.5-6t31.5-18l121 121q-36 42-75.5 76T502-143q-5.25 2-10.5 3t-11.37 1ZM480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialPolicyW100Filled.displayName = 'OnesyIconMaterialPolicyW100Filled';

export default IconMaterialPolicyW100Filled;
