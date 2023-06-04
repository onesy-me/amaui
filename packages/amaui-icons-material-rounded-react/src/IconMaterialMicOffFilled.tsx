import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOffFilled'

      short_name='MicOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.75 14.95 16.3 13.5q.225-.375.388-.775.162-.4.237-.825.075-.375.363-.638.287-.262.637-.262.475 0 .775.325.3.325.225.75-.125.8-.425 1.512-.3.713-.75 1.363Zm-2.95-3L9 6.15V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 .275-.062.5-.063.225-.138.45Zm4.3 9.95-17-17q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM11 20v-2.1q-2.325-.3-3.95-1.925t-1.975-3.9q-.075-.425.225-.75T6.1 11q.35 0 .625.262.275.263.35.638.325 1.75 1.7 2.925Q10.15 16 12 16q.85 0 1.613-.262.762-.263 1.387-.738l1.425 1.425q-.725.575-1.587.962-.863.388-1.838.513V20q0 .425-.287.712Q12.425 21 12 21t-.712-.288Q11 20.425 11 20Z"/>
    </Icon>
  );
});

IconMaterialMicOffFilled.displayName = 'AmauiIconMaterialMicOffFilled';

export default IconMaterialMicOffFilled;
