import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideogameAssetRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetRoundedFilled'
      short_name='VideogameAsset'

      {...props}
    >
      <path d="M4 18Q3.175 18 2.588 17.413Q2 16.825 2 16V8Q2 7.175 2.588 6.588Q3.175 6 4 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM8 15Q8.425 15 8.713 14.712Q9 14.425 9 14V13H10Q10.425 13 10.713 12.712Q11 12.425 11 12Q11 11.575 10.713 11.287Q10.425 11 10 11H9V10Q9 9.575 8.713 9.287Q8.425 9 8 9Q7.575 9 7.287 9.287Q7 9.575 7 10V11H6Q5.575 11 5.287 11.287Q5 11.575 5 12Q5 12.425 5.287 12.712Q5.575 13 6 13H7V14Q7 14.425 7.287 14.712Q7.575 15 8 15ZM14.5 15Q15.125 15 15.562 14.562Q16 14.125 16 13.5Q16 12.875 15.562 12.438Q15.125 12 14.5 12Q13.875 12 13.438 12.438Q13 12.875 13 13.5Q13 14.125 13.438 14.562Q13.875 15 14.5 15ZM17.5 12Q18.125 12 18.562 11.562Q19 11.125 19 10.5Q19 9.875 18.562 9.438Q18.125 9 17.5 9Q16.875 9 16.438 9.438Q16 9.875 16 10.5Q16 11.125 16.438 11.562Q16.875 12 17.5 12Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetRoundedFilled.displayName = 'AmauiIconMaterialVideogameAssetRoundedFilled';

export default IconMaterialVideogameAssetRoundedFilled;
