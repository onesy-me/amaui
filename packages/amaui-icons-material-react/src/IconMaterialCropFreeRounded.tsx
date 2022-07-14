import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropFreeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeRounded'
      short_name='CropFree'

      {...props}
    >
      <path d="M4 9Q3.575 9 3.288 8.712Q3 8.425 3 8V5Q3 4.175 3.587 3.587Q4.175 3 5 3H8Q8.425 3 8.713 3.287Q9 3.575 9 4Q9 4.425 8.713 4.712Q8.425 5 8 5H5Q5 5 5 5Q5 5 5 5V8Q5 8.425 4.713 8.712Q4.425 9 4 9ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V16Q3 15.575 3.288 15.287Q3.575 15 4 15Q4.425 15 4.713 15.287Q5 15.575 5 16V19Q5 19 5 19Q5 19 5 19H8Q8.425 19 8.713 19.288Q9 19.575 9 20Q9 20.425 8.713 20.712Q8.425 21 8 21ZM16 21Q15.575 21 15.288 20.712Q15 20.425 15 20Q15 19.575 15.288 19.288Q15.575 19 16 19H19Q19 19 19 19Q19 19 19 19V16Q19 15.575 19.288 15.287Q19.575 15 20 15Q20.425 15 20.712 15.287Q21 15.575 21 16V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM20 9Q19.575 9 19.288 8.712Q19 8.425 19 8V5Q19 5 19 5Q19 5 19 5H16Q15.575 5 15.288 4.712Q15 4.425 15 4Q15 3.575 15.288 3.287Q15.575 3 16 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V8Q21 8.425 20.712 8.712Q20.425 9 20 9Z"/>
    </Icon>
  );
});

export default IconMaterialCropFreeRounded;
