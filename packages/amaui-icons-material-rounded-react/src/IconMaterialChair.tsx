import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChair = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chair'

      short_name='Chair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.425 0-.713-.288Q4 20.425 4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-1.25.875-2.125T4 8V6q0-1.25.875-2.125T7 3h10q1.25 0 2.125.875T20 6v2q1.25 0 2.125.875T23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.712Q19.425 21 19 21t-.712-.288Q18 20.425 18 20v-1H6v1q0 .425-.287.712Q5.425 21 5 21Zm-1-4h16q.425 0 .712-.288Q21 16.425 21 16v-5q0-.425-.288-.713Q20.425 10 20 10t-.712.287Q19 10.575 19 11v4H5v-4q0-.425-.287-.713Q4.425 10 4 10t-.712.287Q3 10.575 3 11v5q0 .425.288.712Q3.575 17 4 17Zm3-4h10v-2q0-.675.275-1.225T18 8.8V6q0-.425-.288-.713Q17.425 5 17 5H7q-.425 0-.713.287Q6 5.575 6 6v2.8q.45.425.725.975Q7 10.325 7 11Zm5 0Zm0 4Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialChair.displayName = 'AmauiIconMaterialChair';

export default IconMaterialChair;
