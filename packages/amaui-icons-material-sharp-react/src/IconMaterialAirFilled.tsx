import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirFilled'

      short_name='Air'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 20q-1.25 0-2.125-.875T8.5 17h2q0 .425.288.712.287.288.712.288t.713-.288q.287-.287.287-.712t-.287-.712Q11.925 16 11.5 16H2v-2h9.5q1.25 0 2.125.875T14.5 17q0 1.25-.875 2.125T11.5 20ZM2 10V8h13.5q.65 0 1.075-.425Q17 7.15 17 6.5q0-.65-.425-1.075Q16.15 5 15.5 5q-.65 0-1.075.425Q14 5.85 14 6.5h-2q0-1.475 1.012-2.488Q14.025 3 15.5 3t2.488 1.012Q19 5.025 19 6.5t-1.012 2.487Q16.975 10 15.5 10Zm16.5 8v-2q.65 0 1.075-.425Q20 15.15 20 14.5q0-.65-.425-1.075Q19.15 13 18.5 13H2v-2h16.5q1.475 0 2.488 1.012Q22 13.025 22 14.5t-1.012 2.488Q19.975 18 18.5 18Z"/>
    </Icon>
  );
});

IconMaterialAirFilled.displayName = 'AmauiIconMaterialAirFilled';

export default IconMaterialAirFilled;
