import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBungalowRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowRoundedW100Filled'
      short_name='Bungalow'

      {...props}
    >
      <path d="M12 14Q12.275 14 12.488 13.787Q12.7 13.575 12.7 13.3Q12.7 13.025 12.488 12.812Q12.275 12.6 12 12.6Q11.725 12.6 11.513 12.812Q11.3 13.025 11.3 13.3Q11.3 13.575 11.513 13.787Q11.725 14 12 14ZM9.05 19.7Q8.725 19.7 8.512 19.487Q8.3 19.275 8.3 18.95V12.725L7.25 14.4Q7.175 14.525 7.038 14.55Q6.9 14.575 6.775 14.5Q6.65 14.425 6.625 14.287Q6.6 14.15 6.675 14.025L11.35 6.475Q11.475 6.3 11.65 6.213Q11.825 6.125 12 6.125Q12.2 6.125 12.35 6.213Q12.5 6.3 12.625 6.475L17.325 14.025Q17.4 14.15 17.363 14.287Q17.325 14.425 17.2 14.5Q17.075 14.575 16.938 14.55Q16.8 14.525 16.725 14.4L15.7 12.75V18.95Q15.7 19.275 15.488 19.487Q15.275 19.7 14.95 19.7H12.7V17Q12.7 16.725 12.488 16.513Q12.275 16.3 12 16.3Q11.7 16.3 11.5 16.513Q11.3 16.725 11.3 17V19.7Z"/>
    </Icon>
  );
});

IconMaterialBungalowRoundedW100Filled.displayName = 'AmauiIconMaterialBungalowRoundedW100Filled';

export default IconMaterialBungalowRoundedW100Filled;
