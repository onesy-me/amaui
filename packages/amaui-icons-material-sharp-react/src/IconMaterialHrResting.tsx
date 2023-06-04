import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHrResting = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HrResting'

      short_name='HrResting'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936v-80h720v80H120Zm97-384q-29-27-42.5-64T161 412q0-81 55.5-138.5T352 216q36 0 69 13t59 38q26-25 59-38t69-13q81 0 136.5 58T800 413q0 39-14.5 74.5T744 551L480 807 217 552Zm56-56 207 200 208-201q17-16 25-37.5t8-44.5q0-48-32.5-82T609 297q-22 0-42.5 8.5T531 330l-51 52-50-52q-16-16-35.5-25t-42.5-9q-47 0-79.5 34T240 412q0 23 8 45t25 39Zm207 0Z"/>
    </Icon>
  );
});

IconMaterialHrResting.displayName = 'AmauiIconMaterialHrResting';

export default IconMaterialHrResting;
