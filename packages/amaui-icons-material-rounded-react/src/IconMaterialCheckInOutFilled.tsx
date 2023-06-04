import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckInOutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckInOutFilled'

      short_name='CheckInOut'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M261 856q-51 0-85-34t-34-85q0-51 34-85.5t85-34.5q51 0 85 34t34 85q0 51-34 85.5T261 856Zm-82-321q-11 0-18.5-7t-7.5-18V321q0-11 7.5-18t18.5-7q11 0 18 7t7 18v189q0 11-7 18t-18 7Zm82 275q31 0 51-21t20-53q0-32-19.5-52.5T261 663q-31 0-51 20.5T190 736q0 32 20 53t51 21Zm14-275q-11 0-18-7t-7-18V320q0-10 7-17t17-7h18q7 0 12.5 3.5t8.5 8.5l83 140-2-38v-89q0-11 7-18t18-7q11 0 18 7t7 18v192q0 9-6.5 15.5T422 535h-17q-6 0-10.5-3t-7.5-8l-90-150 3 38v98q0 11-7 18t-18 7Zm237 321q-42 0-67-27t-25-72V641q0-10 7-17t18-7q11 0 17.5 6.5T469 641v119q0 21 12.5 35t30.5 14q18 0 30-14t12-35V641q0-10 7-17t18-7q11 0 17.5 6.5T603 641v116q0 45-25 72t-66 27Zm219 0q-11 0-18-7t-7-18V664h-41q-10 0-16.5-7t-6.5-17q0-10 6.5-16.5T665 617h130q10 0 16.5 6.5T818 640q0 10-6.5 17t-16.5 7h-40v168q0 10-6.5 17t-17.5 7Z"/>
    </Icon>
  );
});

IconMaterialCheckInOutFilled.displayName = 'AmauiIconMaterialCheckInOutFilled';

export default IconMaterialCheckInOutFilled;
