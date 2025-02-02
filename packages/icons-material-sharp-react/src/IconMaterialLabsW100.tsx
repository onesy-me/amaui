import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabsW100'

      short_name='Labs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-68.89 0-117.45-47Q314-226 314-294v-364h-62v-170h456v170h-63v379q-6 63-53.5 105T480-132ZM280-686h400v-114H280v114Zm200 526q57.08 0 97.04-38.5Q617-237 617-294v-39H487v-28h130v-124H487v-28h130v-145H342v364q0 57 40.25 95.5T480-160ZM280-686v-114 114Z"/>
    </Icon>
  );
});

IconMaterialLabsW100.displayName = 'OnesyIconMaterialLabsW100';

export default IconMaterialLabsW100;
