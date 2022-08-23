import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveDoneRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveDoneRoundedW100'
      short_name='RemoveDone'

      {...props}
    >
      <path d="M21.425 20.55 15.025 14.15 12.8 16.375Q12.675 16.5 12.55 16.55Q12.425 16.6 12.275 16.6Q12.125 16.6 12 16.55Q11.875 16.5 11.75 16.375L7.775 12.4Q7.65 12.275 7.65 12.15Q7.65 12.025 7.775 11.9Q7.9 11.775 8.025 11.775Q8.15 11.775 8.275 11.9L12.275 15.9L14.475 13.65L4.575 3.75Q4.45 3.625 4.45 3.5Q4.45 3.375 4.575 3.25Q4.7 3.125 4.825 3.125Q4.95 3.125 5.075 3.25L21.925 20.1Q22.05 20.225 22.038 20.35Q22.025 20.475 21.925 20.575Q21.8 20.675 21.675 20.675Q21.55 20.675 21.425 20.55ZM16.925 12.25 16.425 11.75 21.225 6.95Q21.35 6.825 21.475 6.825Q21.6 6.825 21.725 6.95Q21.85 7.075 21.85 7.2Q21.85 7.325 21.725 7.45ZM14.075 9.45 13.575 8.95 15.575 6.95Q15.7 6.825 15.825 6.825Q15.95 6.825 16.075 6.95Q16.2 7.075 16.2 7.2Q16.2 7.325 16.075 7.45ZM6.625 16.6Q6.475 16.6 6.35 16.55Q6.225 16.5 6.1 16.375L2.125 12.4Q2 12.275 2 12.15Q2 12.025 2.125 11.9Q2.25 11.775 2.375 11.775Q2.5 11.775 2.625 11.9L6.625 15.9L7.525 15L8.025 15.5L7.15 16.375Q7.025 16.5 6.9 16.55Q6.775 16.6 6.625 16.6Z"/>
    </Icon>
  );
});

IconMaterialRemoveDoneRoundedW100.displayName = 'AmauiIconMaterialRemoveDoneRoundedW100';

export default IconMaterialRemoveDoneRoundedW100;
