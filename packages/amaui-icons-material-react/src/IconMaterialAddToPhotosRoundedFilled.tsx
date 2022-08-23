import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToPhotosRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotosRoundedFilled'
      short_name='AddToPhotos'

      {...props}
    >
      <path d="M14 14Q14.425 14 14.713 13.712Q15 13.425 15 13V11H17Q17.425 11 17.712 10.712Q18 10.425 18 10Q18 9.575 17.712 9.287Q17.425 9 17 9H15V7Q15 6.575 14.713 6.287Q14.425 6 14 6Q13.575 6 13.288 6.287Q13 6.575 13 7V9H11Q10.575 9 10.288 9.287Q10 9.575 10 10Q10 10.425 10.288 10.712Q10.575 11 11 11H13V13Q13 13.425 13.288 13.712Q13.575 14 14 14ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V7Q2 6.575 2.288 6.287Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17Q17.425 20 17.712 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialAddToPhotosRoundedFilled.displayName = 'AmauiIconMaterialAddToPhotosRoundedFilled';

export default IconMaterialAddToPhotosRoundedFilled;
