import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHowToReg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToReg'

      short_name='HowToReg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-32q0-33 17-62t47-44q51-26 115-44t141-18q8 0 18 .5t18 1.5q16 2 26.5 15t8.5 29q-2 14-12 24t-27 10h-32q-71 0-127.5 17T180-306q-9 5-14.5 14t-5.5 20v32h270q17 0 28.5 11.5T470-200q0 17-11.5 28.5T430-160H160Zm462-96 174-174q11-11 28-11t28 11q11 11 11 28t-11 28L650-172q-12 12-28 12t-28-12l-82-82q-11-11-11-28t11-28q11-11 28-11t28 11l54 54ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm10 240Zm-10-320q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialHowToReg.displayName = 'OnesyIconMaterialHowToReg';

export default IconMaterialHowToReg;
