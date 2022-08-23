import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHighQualityRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualityRounded'
      short_name='HighQuality'

      {...props}
    >
      <path d="M6.75 15Q7.075 15 7.287 14.787Q7.5 14.575 7.5 14.25V13H9.5V14.25Q9.5 14.575 9.713 14.787Q9.925 15 10.25 15Q10.575 15 10.788 14.787Q11 14.575 11 14.25V9.75Q11 9.425 10.788 9.212Q10.575 9 10.25 9Q9.925 9 9.713 9.212Q9.5 9.425 9.5 9.75V11.5H7.5V9.75Q7.5 9.425 7.287 9.212Q7.075 9 6.75 9Q6.425 9 6.213 9.212Q6 9.425 6 9.75V14.25Q6 14.575 6.213 14.787Q6.425 15 6.75 15ZM15.5 16.5Q15.825 16.5 16.038 16.288Q16.25 16.075 16.25 15.75V15H17Q17.425 15 17.712 14.712Q18 14.425 18 14V10Q18 9.575 17.712 9.287Q17.425 9 17 9H14Q13.575 9 13.288 9.287Q13 9.575 13 10V14Q13 14.425 13.288 14.712Q13.575 15 14 15H14.75V15.75Q14.75 16.075 14.963 16.288Q15.175 16.5 15.5 16.5ZM14.5 13.5Q14.5 13.5 14.5 13.5Q14.5 13.5 14.5 13.5V10.5Q14.5 10.5 14.5 10.5Q14.5 10.5 14.5 10.5H16.5Q16.5 10.5 16.5 10.5Q16.5 10.5 16.5 10.5V13.5Q16.5 13.5 16.5 13.5Q16.5 13.5 16.5 13.5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialHighQualityRounded.displayName = 'AmauiIconMaterialHighQualityRounded';

export default IconMaterialHighQualityRounded;
