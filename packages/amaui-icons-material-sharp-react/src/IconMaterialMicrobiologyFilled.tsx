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
      <path d="m409 928-56-55 69-70q-3-5-6-10.5t-6-10.5l-27-53-78 77-56-56 78-78-53-26q-5-2-9-4.5t-9-5.5l-65 64-56-56 63-63q-14-19-22.5-40.5T163 496H80v-80h85q5-19 12-36t18-33l-63-63 56-56 63 63q16-11 33-18t36-12v-85h80v83q24 4 45.5 13t40.5 23l63-63 57 56-65 65q2 4 4.5 8t4.5 9l25 50 74-74 57 57-76 75 56 28q6 3 12.5 6.5T710 520l68-68 56 57-68 67q12 18 19.5 38t11.5 42h83v80h-85q-5 19-12 35.5T765 804l62 63-57 55-61-61q-16 11-33 18t-36 12v85h-80v-83q-23-4-43.5-11.5T478 861l-69 67Zm-29-412q25 0 42.5-17.5T440 456q0-25-17.5-42.5T380 396q-25 0-42.5 17.5T320 456q0 25 17.5 42.5T380 516Zm200 250q21 0 35.5-14.5T630 716q0-21-14.5-35.5T580 666q-21 0-35.5 14.5T530 716q0 21 14.5 35.5T580 766Z"/>
    </Icon>
  );
});

IconMaterialMicrobiologyFilled.displayName = 'AmauiIconMaterialMicrobiologyFilled';

export default IconMaterialMicrobiologyFilled;
