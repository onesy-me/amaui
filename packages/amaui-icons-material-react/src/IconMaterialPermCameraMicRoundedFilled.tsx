import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermCameraMicRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMicRoundedFilled'
      short_name='PermCameraMic'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L8.35 3.65Q8.625 3.35 9.025 3.175Q9.425 3 9.85 3H14.1Q14.525 3 14.887 3.162Q15.25 3.325 15.55 3.625L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21H13V17.9Q14.9 17.6 16.25 16.25Q17.6 14.9 17.9 13.1Q17.95 12.675 17.65 12.337Q17.35 12 16.9 12Q16.55 12 16.288 12.25Q16.025 12.5 15.925 12.85Q15.55 14.25 14.475 15.125Q13.4 16 12 16Q10.6 16 9.525 15.125Q8.45 14.25 8.1 12.85Q8 12.5 7.725 12.25Q7.45 12 7.1 12Q6.625 12 6.325 12.337Q6.025 12.675 6.1 13.125Q6.4 14.9 7.75 16.25Q9.1 17.6 11 17.9V21ZM12 14Q12.825 14 13.413 13.412Q14 12.825 14 12V8Q14 7.175 13.413 6.588Q12.825 6 12 6Q11.175 6 10.588 6.588Q10 7.175 10 8V12Q10 12.825 10.588 13.412Q11.175 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMicRoundedFilled.displayName = 'AmauiIconMaterialPermCameraMicRoundedFilled';

export default IconMaterialPermCameraMicRoundedFilled;
