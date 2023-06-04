import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForward10W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward10W100Filled'

      short_name='Forward10'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.55 15.6v-4.5H8.2v-.7h2.05v5.2Zm3.2 0q-.425 0-.712-.288-.288-.287-.288-.712v-3.2q0-.425.288-.712.287-.288.712-.288h1.7q.425 0 .713.288.287.287.287.712v3.2q0 .425-.287.712-.288.288-.713.288Zm0-.7h1.7q.15 0 .225-.075.075-.075.075-.225v-3.2q0-.15-.075-.225-.075-.075-.225-.075h-1.7q-.15 0-.225.075-.075.075-.075.225v3.2q0 .15.075.225.075.075.225.075ZM12 20.7q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6h.45l-1.7-1.7.5-.5 2.55 2.525-2.5 2.525-.5-.5L12.45 6H12Q9.075 6 7.038 8.037 5 10.075 5 13q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13h.7q0 1.6-.6 3t-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialForward10W100Filled.displayName = 'AmauiIconMaterialForward10W100Filled';

export default IconMaterialForward10W100Filled;
