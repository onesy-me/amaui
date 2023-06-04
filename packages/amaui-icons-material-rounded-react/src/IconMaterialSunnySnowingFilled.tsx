import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSunnySnowingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SunnySnowingFilled'

      short_name='SunnySnowing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 13.325q-.425 0-.713-.288Q6 12.75 6 12.325V12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12v.325q0 .425-.288.712-.287.288-.712.288t-.712-.288Q16 12.75 16 12.325V12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12v.325q0 .425-.287.712-.288.288-.713.288ZM6 19q-.425 0-.713-.288Q5 18.425 5 18t.287-.712Q5.575 17 6 17t.713.288Q7 17.575 7 18t-.287.712Q6.425 19 6 19Zm12 0q-.425 0-.712-.288Q17 18.425 17 18t.288-.712Q17.575 17 18 17t.712.288Q19 17.575 19 18t-.288.712Q18.425 19 18 19Zm-9 4q-.425 0-.712-.288Q8 22.425 8 22t.288-.712Q8.575 21 9 21t.713.288Q10 21.575 10 22t-.287.712Q9.425 23 9 23Zm3-4q-.425 0-.712-.288Q11 18.425 11 18t.288-.712Q11.575 17 12 17t.713.288Q13 17.575 13 18t-.287.712Q12.425 19 12 19Zm3 4q-.425 0-.712-.288Q14 22.425 14 22t.288-.712Q14.575 21 15 21t.713.288Q16 21.575 16 22t-.287.712Q15.425 23 15 23ZM12 5q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm4.95 2.05q-.275-.275-.275-.688 0-.412.275-.712l1.4-1.425q.3-.3.712-.3.413 0 .713.3.275.275.275.7 0 .425-.275.7L18.35 7.05q-.275.275-.7.275-.425 0-.7-.275ZM20 13q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275.425 0 .7.275L7.05 5.65q.275.275.275.7 0 .425-.275.7-.3.275-.7.275-.4 0-.7-.275ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Z"/>
    </Icon>
  );
});

IconMaterialSunnySnowingFilled.displayName = 'AmauiIconMaterialSunnySnowingFilled';

export default IconMaterialSunnySnowingFilled;
