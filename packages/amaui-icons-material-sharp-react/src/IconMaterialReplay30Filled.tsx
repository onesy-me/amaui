import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplay30Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay30Filled'

      short_name='Replay30'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13h2q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.15l1.55 1.55L12 9 8 5l4-4 1.4 1.45L11.85 4H12q1.875 0 3.513.713 1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Zm-4.5-6v-1.5H10v-1H8.5v-1H10v-1H7.5V10h3q.425 0 .713.287.287.288.287.713v4q0 .425-.287.712-.288.288-.713.288Zm6 0q-.425 0-.712-.288-.288-.287-.288-.712v-4q0-.425.288-.713.287-.287.712-.287h2q.425 0 .712.287.288.288.288.713v4q0 .425-.288.712-.287.288-.712.288Zm.5-1.5h1v-3h-1v3Z"/>
    </Icon>
  );
});

IconMaterialReplay30Filled.displayName = 'AmauiIconMaterialReplay30Filled';

export default IconMaterialReplay30Filled;
