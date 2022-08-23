import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVrpanoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoRoundedW100Filled'
      short_name='Vrpano'

      {...props}
    >
      <path d="M7.475 14.65Q8.575 14.55 9.688 14.5Q10.8 14.45 12 14.45Q13.2 14.45 14.312 14.5Q15.425 14.55 16.525 14.65Q16.75 14.675 16.825 14.525Q16.9 14.375 16.775 14.2L14.3 11.225Q14.175 11.075 14 11.075Q13.825 11.075 13.7 11.225L11.375 13.975L9.675 11.95Q9.55 11.8 9.375 11.8Q9.2 11.8 9.075 11.95L7.225 14.175Q7.1 14.325 7.175 14.5Q7.25 14.675 7.475 14.65ZM4.25 18.3Q3.875 18.425 3.588 18.263Q3.3 18.1 3.3 17.65V6.4Q3.3 5.95 3.588 5.787Q3.875 5.625 4.25 5.75Q5.425 6.075 7.4 6.438Q9.375 6.8 12 6.8Q14.65 6.8 16.588 6.45Q18.525 6.1 19.7 5.75Q20.075 5.625 20.388 5.787Q20.7 5.95 20.7 6.4V17.65Q20.7 18.1 20.388 18.263Q20.075 18.425 19.7 18.3Q18.525 17.95 16.588 17.575Q14.65 17.2 12 17.2Q9.375 17.2 7.4 17.575Q5.425 17.95 4.25 18.3Z"/>
    </Icon>
  );
});

IconMaterialVrpanoRoundedW100Filled.displayName = 'AmauiIconMaterialVrpanoRoundedW100Filled';

export default IconMaterialVrpanoRoundedW100Filled;
