import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotorcycleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotorcycleFilled'

      short_name='Motorcycle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19q-2.075 0-3.537-1.462Q0 16.075 0 14q0-2.075 1.463-3.538Q2.925 9 5 9h11.6l-2-2H12q-.425 0-.712-.287Q11 6.425 11 6t.288-.713Q11.575 5 12 5h2.975q.2 0 .388.075.187.075.337.225l3.75 3.75q1.95.15 3.25 1.575T24 14q0 2.075-1.462 3.538Q21.075 19 19 19q-2.075 0-3.537-1.462Q14 16.075 14 14q0-.45.062-.888.063-.437.238-.862l-2.175 2.175q-.275.275-.637.425-.363.15-.763.15H9.9q-.35 1.75-1.725 2.875T5 19Zm14-2q1.25 0 2.125-.875T22 14q0-1.25-.875-2.125T19 11q-1.25 0-2.125.875T16 14q0 1.25.875 2.125T19 17ZM5 17q.95 0 1.713-.55Q7.475 15.9 7.8 15H6q-.425 0-.713-.288Q5 14.425 5 14t.287-.713Q5.575 13 6 13h1.8q-.325-.9-1.087-1.45Q5.95 11 5 11q-1.25 0-2.125.875T2 14q0 1.25.875 2.125T5 17Z"/>
    </Icon>
  );
});

IconMaterialMotorcycleFilled.displayName = 'AmauiIconMaterialMotorcycleFilled';

export default IconMaterialMotorcycleFilled;
