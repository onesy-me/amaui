import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAir = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Air'

      short_name='Air'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 20q-.825 0-1.512-.413Q9.3 19.175 8.9 18.5q-.275-.5-.05-1 .225-.5.85-.5.25 0 .5.15t.525.5q.125.175.337.263.213.087.438.087.425 0 .713-.288.287-.287.287-.712t-.287-.712Q11.925 16 11.5 16H3q-.425 0-.712-.288Q2 15.425 2 15t.288-.713Q2.575 14 3 14h8.5q1.25 0 2.125.875T14.5 17q0 1.25-.875 2.125T11.5 20ZM3 10q-.425 0-.712-.288Q2 9.425 2 9t.288-.713Q2.575 8 3 8h12.5q.65 0 1.075-.425Q17 7.15 17 6.5q0-.65-.425-1.075Q16.15 5 15.5 5q-.425 0-.762.188-.338.187-.538.537-.2.375-.475.575-.275.2-.55.2-.525 0-.825-.375-.3-.375-.15-.8.35-1.05 1.238-1.688Q14.325 3 15.5 3q1.475 0 2.488 1.012Q19 5.025 19 6.5t-1.012 2.487Q16.975 10 15.5 10Zm16.95 7.7q-.525.225-.988-.037-.462-.263-.462-.863 0-.275.2-.538.2-.262.575-.462.35-.2.537-.538.188-.337.188-.762 0-.65-.425-1.075Q19.15 13 18.5 13H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h15.5q1.475 0 2.488 1.012Q22 13.025 22 14.5q0 1.075-.562 1.925-.563.85-1.488 1.275Z"/>
    </Icon>
  );
});

IconMaterialAir.displayName = 'AmauiIconMaterialAir';

export default IconMaterialAir;
