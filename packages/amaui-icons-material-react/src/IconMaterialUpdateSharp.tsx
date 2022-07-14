import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpdateSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateSharp'
      short_name='Update'

      {...props}
    >
      <path d="M14.8 16.2 11 12.4V7H13V11.6L16.2 14.8ZM12 21Q10.125 21 8.488 20.288Q6.85 19.575 5.638 18.362Q4.425 17.15 3.712 15.512Q3 13.875 3 12Q3 10.125 3.712 8.487Q4.425 6.85 5.638 5.637Q6.85 4.425 8.488 3.712Q10.125 3 12 3Q14.05 3 15.888 3.875Q17.725 4.75 19 6.35V4H21V10H15V8H17.75Q16.725 6.6 15.225 5.8Q13.725 5 12 5Q9.075 5 7.038 7.037Q5 9.075 5 12Q5 14.925 7.038 16.962Q9.075 19 12 19Q14.625 19 16.587 17.3Q18.55 15.6 18.9 13H20.95Q20.575 16.425 18.013 18.712Q15.45 21 12 21Z"/>
    </Icon>
  );
});

export default IconMaterialUpdateSharp;
