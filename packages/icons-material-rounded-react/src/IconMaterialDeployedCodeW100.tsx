import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeW100'

      short_name='DeployedCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-168v-304L200-626v286q0 8 4 15t12 12l250 145Zm28 0 250-145q8-5 12-12t4-15v-286L494-472v304Zm-14-328 263-152-247-143q-8-5-16-5t-16 5L217-648l263 152ZM202-288q-14-8-22-22t-8-30v-280q0-16 8-30t22-22l248-143q14-8 30-8t30 8l248 143q14 8 22 22t8 30v280q0 16-8 30t-22 22L510-145q-14 8-30 8t-30-8L202-288Zm278-192Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeW100.displayName = 'OnesyIconMaterialDeployedCodeW100';

export default IconMaterialDeployedCodeW100;
