import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaVerticalRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalRounded'
      short_name='PanoramaVertical'

      {...props}
    >
      <path d="M5 22Q4.575 22 4.287 21.712Q4 21.425 4 21Q4 20.575 4.75 18.275Q5.5 15.975 5.5 12Q5.5 8 4.75 5.712Q4 3.425 4 3Q4 2.575 4.287 2.287Q4.575 2 5 2H19Q19.425 2 19.712 2.287Q20 2.575 20 3Q20 3.425 19.25 5.712Q18.5 8 18.5 12Q18.5 15.975 19.25 18.275Q20 20.575 20 21Q20 21.425 19.712 21.712Q19.425 22 19 22ZM17.65 20Q17.075 18.05 16.788 16.038Q16.5 14.025 16.5 12Q16.5 9.975 16.788 7.962Q17.075 5.95 17.65 4H6.375Q6.95 5.95 7.225 7.962Q7.5 9.975 7.5 12Q7.5 14.025 7.225 16.038Q6.95 18.05 6.375 20ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalRounded.displayName = 'AmauiIconMaterialPanoramaVerticalRounded';

export default IconMaterialPanoramaVerticalRounded;
