import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicrobiologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrobiologyFilled'

      short_name='Microbiology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M600 976q-17 0-28.5-11.5T560 936v-43q-23-4-43.5-11.5T478 861l-40 40q-12 11-28.5 11.5T381 901q-12-12-12-28.5t12-28.5l41-41q-3-5-6-10.5t-6-10.5l-27-53-49 49q-12 11-28 11.5T278 778q-12-12-12-28t12-28l49-50-53-26q-5-2-9-4.5t-9-5.5l-36 36q-12 11-28.5 11.5T163 672q-12-12-12-28t12-28l35-35q-14-19-22.5-40.5T163 496h-43q-17 0-28.5-11.5T80 456q0-17 11.5-28.5T120 416h45q5-19 12-36t18-33l-35-35q-12-12-12-28t12-28q12-12 28-12t28 12l35 35q16-11 33-18t36-12v-45q0-17 11.5-28.5T360 176q17 0 28.5 11.5T400 216v43q24 4 45.5 13t40.5 23l35-35q12-12 28.5-12t28.5 12q12 12 12 28t-12 28l-37 37q2 4 4.5 8t4.5 9l25 50 46-46q12-12 28.5-12t28.5 12q12 12 12 28.5T678 431l-48 47 56 28q6 3 12.5 6.5T710 520l40-40q12-12 28-12t28 12q12 12 12 28.5T806 537l-40 39q12 18 19.5 38t11.5 42h43q17 0 28.5 11.5T880 696q0 17-11.5 28.5T840 736h-45q-5 19-12 35.5T765 804l34 34q12 12 12 28.5T799 895q-12 11-28.5 11.5T742 895l-33-34q-16 11-33 18t-36 12v45q0 17-11.5 28.5T600 976ZM380 516q25 0 42.5-17.5T440 456q0-25-17.5-42.5T380 396q-25 0-42.5 17.5T320 456q0 25 17.5 42.5T380 516Zm200 250q21 0 35.5-14.5T630 716q0-21-14.5-35.5T580 666q-21 0-35.5 14.5T530 716q0 21 14.5 35.5T580 766Z"/>
    </Icon>
  );
});

IconMaterialMicrobiologyFilled.displayName = 'AmauiIconMaterialMicrobiologyFilled';

export default IconMaterialMicrobiologyFilled;
