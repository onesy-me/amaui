import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallEndRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndRoundedW100Filled'
      short_name='CallEnd'

      {...props}
    >
      <path d="M12 8.65Q14.75 8.65 17.525 9.787Q20.3 10.925 22.45 13.2Q22.525 13.325 22.525 13.475Q22.525 13.625 22.45 13.7L20.15 15.95Q20.075 16.025 19.95 16.05Q19.825 16.075 19.7 16L16.65 13.7V10.2Q15.45 9.775 14.275 9.562Q13.1 9.35 12 9.35Q10.9 9.35 9.725 9.562Q8.55 9.775 7.35 10.2V13.7L4.3 16Q4.225 16.075 4.075 16.05Q3.925 16.025 3.85 15.95L1.55 13.7Q1.425 13.575 1.45 13.45Q1.475 13.325 1.55 13.2Q3.7 10.925 6.475 9.787Q9.25 8.65 12 8.65Z"/>
    </Icon>
  );
});

IconMaterialCallEndRoundedW100Filled.displayName = 'AmauiIconMaterialCallEndRoundedW100Filled';

export default IconMaterialCallEndRoundedW100Filled;
