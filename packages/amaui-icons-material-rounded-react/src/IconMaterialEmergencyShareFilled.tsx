import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyShareFilled'

      short_name='EmergencyShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.25 23.35Q8.6 21 7.3 18.95 6 16.9 6 15.15q0-2.575 1.75-4.363Q9.5 9 12 9t4.25 1.787Q18 12.575 18 15.15q0 1.75-1.3 3.8t-3.95 4.4q-.3.275-.75.275t-.75-.275ZM12 16.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 13.5 12 13.5t-1.062.438Q10.5 14.375 10.5 15t.438 1.062q.437.438 1.062.438ZM12 6q-.75 0-1.462.2-.713.2-1.338.625-.35.225-.762.212-.413-.012-.688-.287-.3-.3-.287-.7.012-.4.337-.65.9-.675 1.975-1.038Q10.85 4 12 4q1.15 0 2.225.362Q15.3 4.725 16.2 5.4q.325.25.338.65.012.4-.288.7-.275.275-.688.287-.412.013-.762-.212-.625-.425-1.337-.625Q12.75 6 12 6Zm0-4q-1.55 0-2.975.5T6.4 3.95q-.325.275-.738.262-.412-.012-.712-.287-.3-.3-.288-.713.013-.412.338-.687Q6.5 1.3 8.275.65 10.05 0 12 0q1.95 0 3.725.65Q17.5 1.3 19 2.525q.325.275.35.687.025.413-.275.713-.275.3-.7.312-.425.013-.75-.262-1.2-.95-2.637-1.463Q13.55 2 12 2Z"/>
    </Icon>
  );
});

IconMaterialEmergencyShareFilled.displayName = 'AmauiIconMaterialEmergencyShareFilled';

export default IconMaterialEmergencyShareFilled;
