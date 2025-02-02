import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewComfyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyW100'

      short_name='ViewComfy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-272v-416q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688v416q0 24.75-17.62 42.37Q792.75-212 768-212H192q-24.75 0-42.37-17.63Q132-247.25 132-272Zm668-222v-194q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v194h640ZM368-240h400q14 0 23-9t9-23v-194H368v226Zm-176 0h148v-226H160v194q0 14 9 23t23 9Z"/>
    </Icon>
  );
});

IconMaterialViewComfyW100.displayName = 'OnesyIconMaterialViewComfyW100';

export default IconMaterialViewComfyW100;
