import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorCoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorCoRoundedFilled'
      short_name='DetectorCo'

      {...props}
    >
      <path d="M8.5 15q-.625 0-1.062-.438Q7 14.125 7 13.5t.438-1.062Q7.875 12 8.5 12t1.062.438Q10 12.875 10 13.5t-.438 1.062Q9.125 15 8.5 15Zm3.5 3q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062Q11.375 15 12 15t1.062.438q.438.437.438 1.062t-.438 1.062Q12.625 18 12 18Zm-3.5 3q-.625 0-1.062-.438Q7 20.125 7 19.5t.438-1.062Q7.875 18 8.5 18t1.062.438Q10 18.875 10 19.5t-.438 1.062Q9.125 21 8.5 21Zm7-6q-.625 0-1.062-.438Q14 14.125 14 13.5t.438-1.062Q14.875 12 15.5 12t1.062.438Q17 12.875 17 13.5t-.438 1.062Q16.125 15 15.5 15Zm0 6q-.625 0-1.062-.438Q14 20.125 14 19.5t.438-1.062Q14.875 18 15.5 18t1.062.438Q17 18.875 17 19.5t-.438 1.062Q16.125 21 15.5 21Zm3.5-3q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062Q18.375 15 19 15t1.062.438q.438.437.438 1.062t-.438 1.062Q19.625 18 19 18ZM5 18q-.625 0-1.062-.438Q3.5 17.125 3.5 16.5t.438-1.062Q4.375 15 5 15t1.062.438q.438.437.438 1.062t-.438 1.062Q5.625 18 5 18ZM8.4 8h7.2l.3-1H8.1l.3 1Zm0 2q-.65 0-1.175-.387Q6.7 9.225 6.5 8.6L6 7H5q-.825 0-1.413-.588Q3 5.825 3 5V2h18v3q0 .825-.587 1.412Q19.825 7 19 7h-1l-.65 1.7q-.225.575-.725.937-.5.363-1.125.363Z"/>
    </Icon>
  );
});

IconMaterialDetectorCoRoundedFilled.displayName = 'AmauiIconMaterialDetectorCoRoundedFilled';

export default IconMaterialDetectorCoRoundedFilled;
