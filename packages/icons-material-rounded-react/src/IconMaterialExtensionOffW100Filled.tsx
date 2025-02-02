import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExtensionOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffW100Filled'

      short_name='ExtensionOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-172q-11 0-19.5-8.5T172-200v-160q30-13 49-40t19-60q0-33-19-60t-49-40v-170q0-6 2-11t6-9l570 570q-4 4-9 6t-11 2H560q-13-30-40-49t-60-19q-33 0-60 19t-40 49H200Zm548-152L324-748h36q14-32 40.5-50t59.5-18q33 0 59.5 18t40.5 50h160q12 0 20 8t8 20v160q32 14 50 40.5t18 59.5q0 33-18 59.5T748-360v36Zm36 188L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffW100Filled.displayName = 'OnesyIconMaterialExtensionOffW100Filled';

export default IconMaterialExtensionOffW100Filled;
