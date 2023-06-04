import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shower'

      short_name='Shower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 18q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16t.713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Zm4 0q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm4 0q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16t.712.288Q17 16.575 17 17t-.288.712Q16.425 18 16 18ZM5 14v-2q0-2.65 1.7-4.6Q8.4 5.45 11 5.1V3h2v2.1q2.6.35 4.3 2.3Q19 9.35 19 12v2Zm2-2h10q0-2.075-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12Zm1 9q-.425 0-.713-.288Q7 20.425 7 20t.287-.712Q7.575 19 8 19t.713.288Q9 19.575 9 20t-.287.712Q8.425 21 8 21Zm4 0q-.425 0-.712-.288Q11 20.425 11 20t.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20t-.287.712Q12.425 21 12 21Zm4 0q-.425 0-.712-.288Q15 20.425 15 20t.288-.712Q15.575 19 16 19t.712.288Q17 19.575 17 20t-.288.712Q16.425 21 16 21Zm-4-9Z"/>
    </Icon>
  );
});

IconMaterialShower.displayName = 'AmauiIconMaterialShower';

export default IconMaterialShower;
