import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestMiniRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMiniRoundedFilled'
      short_name='NestMini'

      {...props}
    >
      <path d="M8.5 14q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q8.925 12 8.5 12t-.712.287Q7.5 12.575 7.5 13t.288.712Q8.075 14 8.5 14Zm3 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q11.925 12 11.5 12t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm3 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q14.925 12 14.5 12t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm3 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 12 17.5 12t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM13 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.925-2.85Q4 14.875 4 13q0-3.5 2.3-6.038Q8.6 4.425 12 4.05V1q0-.425.288-.713Q12.575 0 13 0t.713.287Q14 .575 14 1v3.05q3.4.375 5.7 2.912Q22 9.5 22 13q0 1.875-.712 3.512-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q14.875 22 13 22Z"/>
    </Icon>
  );
});

IconMaterialNestMiniRoundedFilled.displayName = 'AmauiIconMaterialNestMiniRoundedFilled';

export default IconMaterialNestMiniRoundedFilled;
