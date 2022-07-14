import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreSharp'
      short_name='More'

      {...props}
    >
      <path d="M9.5 13Q9.925 13 10.213 12.712Q10.5 12.425 10.5 12Q10.5 11.575 10.213 11.287Q9.925 11 9.5 11Q9.075 11 8.788 11.287Q8.5 11.575 8.5 12Q8.5 12.425 8.788 12.712Q9.075 13 9.5 13ZM13 13Q13.425 13 13.713 12.712Q14 12.425 14 12Q14 11.575 13.713 11.287Q13.425 11 13 11Q12.575 11 12.288 11.287Q12 11.575 12 12Q12 12.425 12.288 12.712Q12.575 13 13 13ZM16.5 13Q16.925 13 17.212 12.712Q17.5 12.425 17.5 12Q17.5 11.575 17.212 11.287Q16.925 11 16.5 11Q16.075 11 15.787 11.287Q15.5 11.575 15.5 12Q15.5 12.425 15.787 12.712Q16.075 13 16.5 13ZM7.95 19 3 12 7.95 5H21V19ZM9 17H19V7H9L5.45 12ZM19 17V12V7Z"/>
    </Icon>
  );
});

export default IconMaterialMoreSharp;
