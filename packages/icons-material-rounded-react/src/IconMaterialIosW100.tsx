import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosW100'

      short_name='Ios'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202.96-306q-5.96 0-9.96-4.02-4-4.03-4-9.98v-200q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v200q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM369-306q-24.75 0-42.37-17.63Q309-341.25 309-366v-228q0-24.75 17.63-42.38Q344.25-654 369-654h68q24.75 0 42.38 17.62Q497-618.75 497-594v228q0 24.75-17.62 42.37Q461.75-306 437-306h-68Zm0-28h68q14 0 23-9t9-23v-228q0-14-9-23t-23-9h-68q-14 0-23 9t-9 23v228q0 14 9 23t23 9Zm234 28q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h114q14 0 23-9t9-23v-68q0-14-9-23t-23-9h-68q-24.75 0-42.37-17.63Q589-501.25 589-526v-68q0-24.75 17.63-42.38Q624.25-654 649-654h114q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H649q-14 0-23 9t-9 23v68q0 14 9 23t23 9h68q24.75 0 42.38 17.62Q777-458.75 777-434v68q0 24.75-17.62 42.37Q741.75-306 717-306H603ZM203-614q-8.5 0-14.25-5.75T183-634q0-8.5 5.75-14.25T203-654q8.5 0 14.25 5.75T223-634q0 8.5-5.75 14.25T203-614Z"/>
    </Icon>
  );
});

IconMaterialIosW100.displayName = 'OnesyIconMaterialIosW100';

export default IconMaterialIosW100;
