import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFluid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fluid'

      short_name='Fluid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-40H440v-163q-103-14-171.5-92.5T200-480v-440h560v440q0 106-68.5 184.5T520-203v83h240v80ZM550-440h126q2-10 3-19.5t1-20.5v-40H520v-80h160v-80H480v-80h200v-80H280v320h110q33 0 62.5 15t49.5 41q8 11 21 17.5t27 6.5Zm-70 160q49 0 91-21.5t69-58.5h-90q-33 0-62.5-15T438-416q-8-11-21-17.5t-27-6.5H284q14 69 68.5 114.5T480-280Zm-42-160Z"/>
    </Icon>
  );
});

IconMaterialFluid.displayName = 'OnesyIconMaterialFluid';

export default IconMaterialFluid;
