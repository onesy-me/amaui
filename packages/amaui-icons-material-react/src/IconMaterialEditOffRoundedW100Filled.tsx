import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffRoundedW100Filled'
      short_name='EditOff'

      {...props}
    >
      <path d="M18.925 20.8 12.05 13.925 6.65 19.325Q6.525 19.45 6.4 19.5Q6.275 19.55 6.125 19.55H5.2Q4.875 19.55 4.662 19.337Q4.45 19.125 4.45 18.8V17.875Q4.45 17.725 4.5 17.6Q4.55 17.475 4.675 17.35L10.075 11.95L2.925 4.8Q2.8 4.675 2.8 4.55Q2.8 4.425 2.925 4.3Q3.05 4.175 3.175 4.175Q3.3 4.175 3.425 4.3L19.425 20.3Q19.55 20.425 19.55 20.55Q19.55 20.675 19.425 20.8Q19.3 20.925 19.175 20.925Q19.05 20.925 18.925 20.8ZM17.9 8.075 15.925 6.1 17.1 4.925Q17.3 4.725 17.6 4.725Q17.9 4.725 18.1 4.925L19.075 5.9Q19.275 6.1 19.275 6.4Q19.275 6.7 19.075 6.9ZM13.95 12.025 11.975 10.05 15.425 6.6 17.4 8.575Z"/>
    </Icon>
  );
});

export default IconMaterialEditOffRoundedW100Filled;
