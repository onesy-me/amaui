import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerifiedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedRoundedFilled'
      short_name='Verified'

      {...props}
    >
      <path d="M6.7 19.3 3.95 18.7Q3.575 18.625 3.35 18.312Q3.125 18 3.175 17.625L3.45 14.8L1.575 12.65Q1.325 12.375 1.325 12Q1.325 11.625 1.575 11.35L3.45 9.2L3.175 6.375Q3.125 6 3.35 5.688Q3.575 5.375 3.95 5.3L6.7 4.7L8.15 2.25Q8.35 1.925 8.7 1.825Q9.05 1.725 9.4 1.85L12 2.95L14.6 1.85Q14.95 1.725 15.3 1.825Q15.65 1.925 15.85 2.25L17.3 4.7L20.05 5.3Q20.425 5.375 20.65 5.688Q20.875 6 20.825 6.375L20.55 9.2L22.425 11.35Q22.675 11.625 22.675 12Q22.675 12.375 22.425 12.65L20.55 14.8L20.825 17.625Q20.875 18 20.65 18.312Q20.425 18.625 20.05 18.7L17.3 19.3L15.85 21.75Q15.65 22.075 15.3 22.175Q14.95 22.275 14.6 22.15L12 21.05L9.4 22.15Q9.05 22.275 8.7 22.175Q8.35 22.075 8.15 21.75ZM10.25 14.85Q10.525 15.125 10.95 15.125Q11.375 15.125 11.65 14.85L15.9 10.6Q16.2 10.3 16.2 9.887Q16.2 9.475 15.9 9.175Q15.6 8.875 15.188 8.875Q14.775 8.875 14.475 9.175L10.95 12.7L9.5 11.275Q9.2 11 8.788 11.012Q8.375 11.025 8.1 11.3Q7.825 11.575 7.825 12Q7.825 12.425 8.1 12.7Z"/>
    </Icon>
  );
});

export default IconMaterialVerifiedRoundedFilled;
