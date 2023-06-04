import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRelax = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Relax'

      short_name='Relax'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M479 974 163 656h113l204 204 274-275q23-23 35-54.5t12-64.5q-2-69-46-118.5T645 298q-31 0-59.5 12T536 345l-56 61-57-61q-21-23-49-36t-60-13q-54 0-93.5 34.5T167 416H85q17-85 79.5-142.5T314 216q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880 466q0 49-17 94t-51 80L479 974Zm-4-398H80v-80h555q17 0 28.5-11.5T675 456q0-17-11.5-28.5T635 416q-14 0-25 7.5T596 445l-77-21q11-39 43-63.5t73-24.5q50 0 85 35t35 85q0 50-35 85t-85 35h-47q3 10 5 19.5t2 20.5q0 50-35 85t-85 35q-41 0-73-24.5T359 648l77-21q3 14 14 21.5t25 7.5q17 0 28.5-11.5T515 616q0-17-11.5-28.5T475 576Zm6 2Z"/>
    </Icon>
  );
});

IconMaterialRelax.displayName = 'AmauiIconMaterialRelax';

export default IconMaterialRelax;
