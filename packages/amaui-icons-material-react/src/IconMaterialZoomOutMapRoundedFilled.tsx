import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialZoomOutMapRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutMapRoundedFilled'
      short_name='ZoomOutMap'

      {...props}
    >
      <path d="M4 9Q3.575 9 3.288 8.712Q3 8.425 3 8V4Q3 3.575 3.288 3.287Q3.575 3 4 3H8Q8.425 3 8.713 3.287Q9 3.575 9 4Q9 4.425 8.713 4.712Q8.425 5 8 5H6.4L8.825 7.425Q9.1 7.7 9.1 8.1Q9.1 8.5 8.8 8.8Q8.525 9.075 8.1 9.075Q7.675 9.075 7.4 8.8L5 6.4V8Q5 8.425 4.713 8.712Q4.425 9 4 9ZM15.2 8.8Q14.925 8.525 14.925 8.1Q14.925 7.675 15.2 7.4L17.6 5H16Q15.575 5 15.288 4.712Q15 4.425 15 4Q15 3.575 15.288 3.287Q15.575 3 16 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4V8Q21 8.425 20.712 8.712Q20.425 9 20 9Q19.575 9 19.288 8.712Q19 8.425 19 8V6.4L16.575 8.825Q16.3 9.1 15.9 9.1Q15.5 9.1 15.2 8.8ZM16 21Q15.575 21 15.288 20.712Q15 20.425 15 20Q15 19.575 15.288 19.288Q15.575 19 16 19H17.6L15.175 16.575Q14.9 16.3 14.9 15.9Q14.9 15.5 15.2 15.2Q15.475 14.925 15.9 14.925Q16.325 14.925 16.6 15.2L19 17.6V16Q19 15.575 19.288 15.287Q19.575 15 20 15Q20.425 15 20.712 15.287Q21 15.575 21 16V20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V16Q3 15.575 3.288 15.287Q3.575 15 4 15Q4.425 15 4.713 15.287Q5 15.575 5 16V17.6L7.425 15.175Q7.7 14.9 8.1 14.9Q8.5 14.9 8.8 15.2Q9.075 15.475 9.075 15.9Q9.075 16.325 8.8 16.6L6.4 19H8Q8.425 19 8.713 19.288Q9 19.575 9 20Q9 20.425 8.713 20.712Q8.425 21 8 21Z"/>
    </Icon>
  );
});

export default IconMaterialZoomOutMapRoundedFilled;
