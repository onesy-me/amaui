import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalSeeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalSeeW100'

      short_name='LocalSee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-260q48 0 84-27.5t50-70.5q-6-5.29-12-11.14-6-5.86-12-10.86-7 40-37.46 66-30.45 26-72.54 26-48 0-80-32t-32-79.5q0-47.5 31-79t77-33.5q-5-7-9.12-13.61-4.13-6.6-7.88-13.39-51 8-85 46.5T340-400q0 59 40.5 99.5T480-260Zm-98-488h28q-1 7-1.5 13.5T408-720h-14l-74 80H160v480h640v-173q7-6.08 14-12.66 7-6.59 14-13.34v227H132v-536h176l74-80Zm-14 348h112-112Zm352 3q128-118 170-183t42-134q0-100.14-64.06-159.07-64.06-58.93-148-58.93T572-873.07Q508-814.14 508-714q0 69 42 134t170 183Zm0-37Q600-546 568-603.5T536-713q0-94 58.11-142t126-48Q788-903 846-855t58 142q0 52-32 109.5T720-434Zm-55-196 21-68-56-45h68.25L720-810l21.75 67H810l-55 45 21 68-56-42-55 42Zm55-39Z"/>
    </Icon>
  );
});

IconMaterialLocalSeeW100.displayName = 'OnesyIconMaterialLocalSeeW100';

export default IconMaterialLocalSeeW100;
