import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBook2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book2W100Filled'

      short_name='Book2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-132q-38.94 0-66.47-27.53T212-226v-488q0-48 33-81t81-33h362q24.75 0 42.38 17.62Q748-792.75 748-768v461q0 5.71-4 10.36-4 4.64-9 5.64-23 5-38 23.14T682-226q0 22.8 14.5 40.9Q711-167 734-161q7 2 10.5 6.14 3.5 4.13 3.5 8.86 0 5.8-4.03 9.9-4.02 4.1-9.97 4.1H306Zm48.04-188q5.96 0 9.96-4.02 4-4.03 4-9.98v-452q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v452q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM306-160h375q-13-13-20-29.71-7-16.7-7-36.29 0-19 7-36t20-30H306q-28 0-47 19.25T240-226q0 28 19 47t47 19Z"/>
    </Icon>
  );
});

IconMaterialBook2W100Filled.displayName = 'OnesyIconMaterialBook2W100Filled';

export default IconMaterialBook2W100Filled;
