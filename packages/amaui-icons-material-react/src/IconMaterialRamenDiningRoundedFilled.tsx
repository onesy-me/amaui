import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRamenDiningRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningRoundedFilled'
      short_name='RamenDining'

      {...props}
    >
      <path d="M8.975 22Q8.55 22 8.263 21.712Q7.975 21.425 7.975 21V20.25Q5.575 19.3 3.988 17.438Q2.4 15.575 2.05 13.15Q2 12.7 2.312 12.35Q2.625 12 3.125 12H3.975V4.9Q3.975 4.525 4.237 4.237Q4.5 3.95 4.875 3.9L21.15 2.1Q21.5 2.05 21.738 2.262Q21.975 2.475 21.975 2.825Q21.975 3.1 21.788 3.312Q21.6 3.525 21.325 3.575L10.475 4.8V6.5H21.225Q21.55 6.5 21.763 6.713Q21.975 6.925 21.975 7.25Q21.975 7.575 21.763 7.787Q21.55 8 21.225 8H10.475V12H20.825Q21.325 12 21.638 12.35Q21.95 12.7 21.9 13.15Q21.55 15.575 19.962 17.438Q18.375 19.3 15.975 20.25V21Q15.975 21.425 15.688 21.712Q15.4 22 14.975 22ZM7.975 6.5H8.975V4.95L7.975 5.05ZM5.475 6.5H6.475V5.25L5.475 5.35ZM7.975 12H8.975V8H7.975ZM5.475 12H6.475V8H5.475Z"/>
    </Icon>
  );
});

export default IconMaterialRamenDiningRoundedFilled;
