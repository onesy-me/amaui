import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDecimalIncreaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalIncreaseFilled'

      short_name='DecimalIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.175 19H13q-.425 0-.712-.288Q12 18.425 12 18t.288-.712Q12.575 17 13 17h5.175l-.875-.875q-.275-.3-.287-.713Q17 15 17.3 14.7t.7-.3q.4 0 .7.3l2.6 2.6q.3.3.3.7 0 .4-.3.7l-2.6 2.6q-.3.3-.7.3-.4 0-.7-.3-.3-.3-.287-.713.012-.412.287-.712ZM4 13H3q-.425 0-.712-.288Q2 12.425 2 12v-1q0-.425.288-.713Q2.575 10 3 10h1q.2 0 .388.075.187.075.325.212.137.138.212.325Q5 10.8 5 11v1q0 .2-.075.387-.075.188-.212.325-.138.138-.325.213Q4.2 13 4 13Zm5.5 0q-1.45 0-2.475-1.025Q6 10.95 6 9.5v-4q0-1.45 1.025-2.475Q8.05 2 9.5 2q1.45 0 2.475 1.025Q13 4.05 13 5.5v4q0 1.45-1.025 2.475Q10.95 13 9.5 13Zm9 0q-1.45 0-2.475-1.025Q15 10.95 15 9.5v-4q0-1.45 1.025-2.475Q17.05 2 18.5 2q1.45 0 2.475 1.025Q22 4.05 22 5.5v4q0 1.45-1.025 2.475Q19.95 13 18.5 13Zm-9-2q.625 0 1.062-.438Q11 10.125 11 9.5v-4q0-.625-.438-1.062Q10.125 4 9.5 4t-1.062.438Q8 4.875 8 5.5v4q0 .625.438 1.062Q8.875 11 9.5 11Zm9 0q.625 0 1.062-.438Q20 10.125 20 9.5v-4q0-.625-.438-1.062Q19.125 4 18.5 4t-1.062.438Q17 4.875 17 5.5v4q0 .625.438 1.062.437.438 1.062.438Z"/>
    </Icon>
  );
});

IconMaterialDecimalIncreaseFilled.displayName = 'AmauiIconMaterialDecimalIncreaseFilled';

export default IconMaterialDecimalIncreaseFilled;
