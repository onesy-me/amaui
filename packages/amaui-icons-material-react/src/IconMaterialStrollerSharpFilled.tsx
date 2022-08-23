import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStrollerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrollerSharpFilled'
      short_name='Stroller'

      {...props}
    >
      <path d="M16 22Q15.175 22 14.588 21.413Q14 20.825 14 20Q14 19.175 14.588 18.587Q15.175 18 16 18Q16.825 18 17.413 18.587Q18 19.175 18 20Q18 20.825 17.413 21.413Q16.825 22 16 22ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20Q4 19.175 4.588 18.587Q5.175 18 6 18Q6.825 18 7.412 18.587Q8 19.175 8 20Q8 20.825 7.412 21.413Q6.825 22 6 22ZM5.275 17 16.2 4.175Q16.7 3.6 17.312 3.3Q17.925 3 18.65 3Q20.075 3 21.038 3.963Q22 4.925 22 6.35V7H20V6.35Q20 5.775 19.613 5.387Q19.225 5 18.65 5Q18.375 5 18.163 5.1Q17.95 5.2 17.775 5.4L17 6.275V17ZM9.6 9.6 4.725 4.725Q5.85 3.925 7.175 3.462Q8.5 3 10 3Q11.175 3 12.263 3.287Q13.35 3.575 14.3 4.1Z"/>
    </Icon>
  );
});

IconMaterialStrollerSharpFilled.displayName = 'AmauiIconMaterialStrollerSharpFilled';

export default IconMaterialStrollerSharpFilled;
