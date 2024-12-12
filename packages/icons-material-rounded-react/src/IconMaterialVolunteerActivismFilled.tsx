import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolunteerActivismFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolunteerActivismFilled'

      short_name='VolunteerActivism'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M535-87q11 3 25.5 2.5T585-89l295-111q0-34-24-57t-56-23H526q-3 0-7-.5t-6-1.5l-59-21q-8-3-11-10t-1-15q2-7 10-11t16-1l45 17q4 2 6.5 2.5t7.5.5h105q19 0 33.5-13t14.5-34q0-14-8.5-27T649-412L372-515q-7-2-14-3.5t-14-1.5h-64v361l255 72ZM40-160q0 33 23.5 56.5T120-80q33 0 56.5-23.5T200-160v-280q0-33-23.5-56.5T120-520q-33 0-56.5 23.5T40-440v280Zm600-312q-15 0-29.5-5.5T584-494L474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L696-494q-12 11-26.5 16.5T640-472Z"/>
    </Icon>
  );
});

IconMaterialVolunteerActivismFilled.displayName = 'OnesyIconMaterialVolunteerActivismFilled';

export default IconMaterialVolunteerActivismFilled;
