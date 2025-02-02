import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNatureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureW100'

      short_name='Nature'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-126v-28h214v-198H360q-62 0-105-43t-43-105q0-51 35-89t83-59q8-80 48-120t102-40q62 0 102 40t48 120q49 19 83.5 58t34.5 90q0 62-43 105t-105 43H494v198h214v28H252Zm108-254h240q50 0 85-35t35-85q0-43-29-74.5T620-622l-16-6-2-20q-7-68-39-100t-83-32q-51 0-83 32t-39 100l-2 20-24 10q-38 16-65 46.5T240-500q0 50 35 85t85 35Zm120-200Z"/>
    </Icon>
  );
});

IconMaterialNatureW100.displayName = 'OnesyIconMaterialNatureW100';

export default IconMaterialNatureW100;
