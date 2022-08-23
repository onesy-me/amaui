import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowOutwardRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardRoundedFilled'
      short_name='ArrowOutward'

      {...props}
    >
      <path d="m16 8.4-8.875 8.9q-.3.3-.713.3-.412 0-.712-.3t-.3-.713q0-.412.3-.712L14.6 7H7q-.425 0-.713-.287Q6 6.425 6 6t.287-.713Q6.575 5 7 5h10q.425 0 .712.287Q18 5.575 18 6v10q0 .425-.288.712Q17.425 17 17 17t-.712-.288Q16 16.425 16 16Z"/>
    </Icon>
  );
});

IconMaterialArrowOutwardRoundedFilled.displayName = 'AmauiIconMaterialArrowOutwardRoundedFilled';

export default IconMaterialArrowOutwardRoundedFilled;
