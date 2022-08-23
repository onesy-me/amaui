import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridViewRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewRoundedW100Filled'
      short_name='GridView'

      {...props}
    >
      <path d="M5 11Q4.725 11 4.513 10.787Q4.3 10.575 4.3 10.3V5Q4.3 4.725 4.513 4.512Q4.725 4.3 5 4.3H10.3Q10.575 4.3 10.788 4.512Q11 4.725 11 5V10.3Q11 10.575 10.788 10.787Q10.575 11 10.3 11ZM5 19.7Q4.725 19.7 4.513 19.487Q4.3 19.275 4.3 19V13.7Q4.3 13.425 4.513 13.212Q4.725 13 5 13H10.3Q10.575 13 10.788 13.212Q11 13.425 11 13.7V19Q11 19.275 10.788 19.487Q10.575 19.7 10.3 19.7ZM13.7 11Q13.425 11 13.213 10.787Q13 10.575 13 10.3V5Q13 4.725 13.213 4.512Q13.425 4.3 13.7 4.3H19Q19.275 4.3 19.488 4.512Q19.7 4.725 19.7 5V10.3Q19.7 10.575 19.488 10.787Q19.275 11 19 11ZM13.7 19.7Q13.425 19.7 13.213 19.487Q13 19.275 13 19V13.7Q13 13.425 13.213 13.212Q13.425 13 13.7 13H19Q19.275 13 19.488 13.212Q19.7 13.425 19.7 13.7V19Q19.7 19.275 19.488 19.487Q19.275 19.7 19 19.7Z"/>
    </Icon>
  );
});

IconMaterialGridViewRoundedW100Filled.displayName = 'AmauiIconMaterialGridViewRoundedW100Filled';

export default IconMaterialGridViewRoundedW100Filled;
