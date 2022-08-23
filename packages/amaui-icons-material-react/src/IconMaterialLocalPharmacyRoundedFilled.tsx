import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPharmacyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPharmacyRoundedFilled'
      short_name='LocalPharmacy'

      {...props}
    >
      <path d="M4.625 21Q3.95 21 3.475 20.525Q3 20.05 3 19.375Q3 19.225 3.038 19.013Q3.075 18.8 3.125 18.65L5 13L3.125 7.35Q3.075 7.2 3.038 7Q3 6.8 3 6.625Q3 5.95 3.475 5.475Q3.95 5 4.625 5H15.7L16.725 2.175Q16.9 1.7 17.363 1.462Q17.825 1.225 18.325 1.425Q18.825 1.625 19.038 2.075Q19.25 2.525 19.075 3.025L18.35 5H19.375Q20.05 5 20.525 5.475Q21 5.95 21 6.625Q21 6.775 20.962 6.987Q20.925 7.2 20.875 7.35L19 13L20.875 18.65Q20.925 18.8 20.962 19Q21 19.2 21 19.375Q21 20.05 20.525 20.525Q20.05 21 19.375 21ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16V14H15Q15.425 14 15.713 13.712Q16 13.425 16 13Q16 12.575 15.713 12.287Q15.425 12 15 12H13V10Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10V12H9Q8.575 12 8.288 12.287Q8 12.575 8 13Q8 13.425 8.288 13.712Q8.575 14 9 14H11V16Q11 16.425 11.288 16.712Q11.575 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialLocalPharmacyRoundedFilled.displayName = 'AmauiIconMaterialLocalPharmacyRoundedFilled';

export default IconMaterialLocalPharmacyRoundedFilled;
