import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeAlert'

      short_name='DeployedCodeAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-800 243-663l237 137 237-137-237-137ZM120-321v-318q0-22 10.5-40t29.5-29l280-161q10-5 19.5-8t20.5-3q11 0 21 3t19 8l280 161q19 11 29.5 29t10.5 40v119q0 17-11.5 28.5T800-480q-17 0-28.5-11.5T760-520v-76L519-457q-19 11-40 11t-40-11L200-596v274l220 128q9 5 14.5 14t5.5 20q0 23-20 34.5t-40 .5L160-252q-19-11-29.5-29T120-321ZM720-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 160q-83 0-141.5-58.5T520-200q0-83 58.5-141.5T720-400q83 0 141.5 58.5T920-200q0 83-58.5 141.5T720 0ZM480-491Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAlert.displayName = 'OnesyIconMaterialDeployedCodeAlert';

export default IconMaterialDeployedCodeAlert;
