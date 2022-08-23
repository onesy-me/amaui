import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoTransferSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferSharp'
      short_name='NoTransfer'

      {...props}
    >
      <path d="M20.475 23.3 17.15 20H19.15V21H16V19H8V21H5V17.95Q4.55 17.45 4.275 16.837Q4 16.225 4 15.5V6.825L0.675 3.5L2.1 2.075L21.9 21.875ZM8 17H14.175L9.175 12H6V15Q6 15.825 6.588 16.413Q7.175 17 8 17ZM19.725 16.85 18 15.125V12H14.875L12.875 10H18V7H9.875L7.875 5H17.65Q17.275 4.575 16.038 4.287Q14.8 4 12.05 4Q10.275 4 9.163 4.15Q8.05 4.3 7.4 4.525L5.875 3Q6.85 2.5 8.363 2.25Q9.875 2 12 2Q16.3 2 18.15 2.925Q20 3.85 20 6V15.5Q20 15.85 19.925 16.188Q19.85 16.525 19.725 16.85ZM8.5 16Q9.125 16 9.562 15.562Q10 15.125 10 14.5Q10 13.875 9.562 13.438Q9.125 13 8.5 13Q7.875 13 7.438 13.438Q7 13.875 7 14.5Q7 15.125 7.438 15.562Q7.875 16 8.5 16ZM6 10H7.175L6 8.825ZM7.875 5Q8.15 5 9.213 5Q10.275 5 12.05 5Q14.8 5 16.038 5Q17.275 5 17.65 5ZM9.175 12Q9.175 12 9.175 12Q9.175 12 9.175 12ZM14.875 12Z"/>
    </Icon>
  );
});

IconMaterialNoTransferSharp.displayName = 'AmauiIconMaterialNoTransferSharp';

export default IconMaterialNoTransferSharp;
