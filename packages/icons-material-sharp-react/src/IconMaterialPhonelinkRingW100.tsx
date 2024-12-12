import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkRingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingW100'

      short_name='PhonelinkRing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m700-386-20-20q17-14 28-33t11-41q0-22-11-41t-28-33l20-20q21 18 34 42t13 52q0 28-13 52t-34 42Zm82 82-20-20q31-31 47.5-71.5T826-480q0-44-16.5-84.5T762-636l20-20q35 35 53.5 80.5T854-480q0 50-18.5 95.5T782-304ZM252-92v-776h456v184h-28v-62H280v532h400v-62h28v184H252Zm28-94v66h400v-66H280Zm0-588h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingW100.displayName = 'OnesyIconMaterialPhonelinkRingW100';

export default IconMaterialPhonelinkRingW100;
