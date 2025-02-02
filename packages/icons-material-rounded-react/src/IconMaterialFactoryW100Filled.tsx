import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactoryW100Filled'

      short_name='Factory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-24.75 0-42.37-17.63Q132-167.25 132-192v-294q0-18.38 9.5-33.69Q151-535 168-542l98-41q15-6 28.5 2.25T308-556v33l159-64q15-6 28 3.07 13 9.06 13 24.93v51h320v316q0 24.75-17.62 42.37Q792.75-132 768-132H192Zm260-132h56v-112h-56v112Zm-160 0h56v-112h-56v112Zm320 0h56v-112h-56v112Zm212-272h-94l34-237q1-7 6.14-11 5.15-4 11.86-4 5 0 8.67 3.43 3.66 3.43 4.33 8.57l29 240Z"/>
    </Icon>
  );
});

IconMaterialFactoryW100Filled.displayName = 'OnesyIconMaterialFactoryW100Filled';

export default IconMaterialFactoryW100Filled;
