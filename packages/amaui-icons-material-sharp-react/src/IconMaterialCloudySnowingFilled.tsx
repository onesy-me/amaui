import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudySnowingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudySnowingFilled'

      short_name='CloudySnowing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-.425 0-.713-.288Q5 18.425 5 18t.287-.712Q5.575 17 6 17t.713.288Q7 17.575 7 18t-.287.712Q6.425 19 6 19Zm12 0q-.425 0-.712-.288Q17 18.425 17 18t.288-.712Q17.575 17 18 17t.712.288Q19 17.575 19 18t-.288.712Q18.425 19 18 19Zm-9 4q-.425 0-.712-.288Q8 22.425 8 22t.288-.712Q8.575 21 9 21t.713.288Q10 21.575 10 22t-.287.712Q9.425 23 9 23Zm3-4q-.425 0-.712-.288Q11 18.425 11 18t.288-.712Q11.575 17 12 17t.713.288Q13 17.575 13 18t-.287.712Q12.425 19 12 19Zm3 4q-.425 0-.712-.288Q14 22.425 14 22t.288-.712Q14.575 21 15 21t.713.288Q16 21.575 16 22t-.287.712Q15.425 23 15 23Zm-7.5-7q-2.275 0-3.887-1.613Q2 12.775 2 10.5q0-2.075 1.375-3.625 1.375-1.55 3.4-1.825.8-1.425 2.188-2.238Q10.35 2 12 2q2.25 0 3.912 1.438 1.663 1.437 2.013 3.587 1.725.15 2.9 1.425Q22 9.725 22 11.5q0 1.875-1.312 3.188Q19.375 16 17.5 16Z"/>
    </Icon>
  );
});

IconMaterialCloudySnowingFilled.displayName = 'AmauiIconMaterialCloudySnowingFilled';

export default IconMaterialCloudySnowingFilled;
