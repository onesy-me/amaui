import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSprinklerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SprinklerFilled'

      short_name='Sprinkler'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q-.425 0-.712-.288Q11 11.425 11 11t.288-.713Q11.575 10 12 10t.713.287Q13 10.575 13 11t-.287.712Q12.425 12 12 12Zm0-4q-.425 0-.712-.287Q11 7.425 11 7t.288-.713Q11.575 6 12 6t.713.287Q13 6.575 13 7t-.287.713Q12.425 8 12 8Zm0-4q-.425 0-.712-.288Q11 3.425 11 3t.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3t-.287.712Q12.425 4 12 4Zm3 10q-.425 0-.712-.288Q14 13.425 14 13t.288-.713Q14.575 12 15 12t.713.287Q16 12.575 16 13t-.287.712Q15.425 14 15 14Zm2.825-2.85q-.425 0-.712-.288-.288-.287-.288-.712t.288-.712q.287-.288.712-.288t.713.288q.287.287.287.712t-.287.712q-.288.288-.713.288Zm2.825-2.8q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287t.713.287q.287.288.287.713t-.287.712q-.288.288-.713.288ZM9 14q-.425 0-.712-.288Q8 13.425 8 13t.288-.713Q8.575 12 9 12t.713.287Q10 12.575 10 13t-.287.712Q9.425 14 9 14Zm-2.825-2.85q-.425 0-.712-.288-.288-.287-.288-.712t.288-.712q.287-.288.712-.288t.713.288q.287.287.287.712t-.287.712q-.288.288-.713.288ZM3.35 8.35q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287t.712.287q.288.288.288.713t-.288.712q-.287.288-.712.288ZM12 22q-.425 0-.712-.288Q11 21.425 11 21v-3H8q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16h8q.425 0 .712.288.288.287.288.712t-.288.712Q16.425 18 16 18h-3v3q0 .425-.287.712Q12.425 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialSprinklerFilled.displayName = 'AmauiIconMaterialSprinklerFilled';

export default IconMaterialSprinklerFilled;
