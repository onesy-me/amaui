import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGardenCartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GardenCartRoundedFilled'
      short_name='GardenCart'

      {...props}
    >
      <path d="M7.3 21q-.95 0-1.625-.688Q5 19.625 5 18.675V9.4L3.175 5H2q-.425 0-.712-.288Q1 4.425 1 4t.288-.713Q1.575 3 2 3h1.85q.3 0 .55.175.25.175.375.45L6.175 7H20.95q.575 0 .875.475.3.475.025.975L19 14.025q1.275.2 2.138 1.175.862.975.862 2.3 0 1.45-1.012 2.475Q19.975 21 18.525 21q-1.475 0-2.487-1.025-1.013-1.025-1.013-2.475 0-.5.125-.925.125-.425.35-.825l-3.275-.3-3 4.5q-.325.5-.838.775Q7.875 21 7.3 21Zm.025-2.025q.05 0 .225-.125l2.425-3.6q-1.225-.125-1.925-.588Q7.35 14.2 7 13.7v5q0 .125.1.2.1.075.225.075ZM18.5 19q.65 0 1.075-.438Q20 18.125 20 17.5q0-.65-.425-1.075Q19.15 16 18.5 16q-.625 0-1.062.425Q17 16.85 17 17.5q0 .625.438 1.062.437.438 1.062.438Z"/>
    </Icon>
  );
});

export default IconMaterialGardenCartRoundedFilled;
