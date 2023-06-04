import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBloodPressure = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodPressure'

      short_name='BloodPressure'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 456V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v180q0 17-11.5 28.5T840 556q-17 0-28.5-11.5T800 516V336H160v120H80Zm200 320q-11 0-21-5.5T244 754l-68-138h-55q-17 0-28.5-11.5T81 576q0-17 11.5-28.5T121 536h80q11 0 20.5 6t14.5 16l44 88 124-248q5-10 15-15t21-5q11 0 21 5t15 15l67 134q-18 11-34.5 23T478 582l-38-76-124 248q-5 11-15 16.5t-21 5.5Zm147 120H160q-33 0-56.5-23.5T80 816V696h80v120h243q3 21 9 41t15 39Zm53-320Zm200 400q-83 0-141.5-58.5T480 776q0-83 58.5-141.5T680 576q83 0 141.5 58.5T880 776q0 83-58.5 141.5T680 976Zm85-257q6-6 6-14t-6-14q-6-6-14-6t-14 6l-63 62q-6 6-6 14.5t6 14.5q6 6 14.5 6t14.5-6l62-63Z"/>
    </Icon>
  );
});

IconMaterialBloodPressure.displayName = 'AmauiIconMaterialBloodPressure';

export default IconMaterialBloodPressure;
