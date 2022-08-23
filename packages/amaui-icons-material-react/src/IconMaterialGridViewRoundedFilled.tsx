import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridViewRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewRoundedFilled'
      short_name='GridView'

      {...props}
    >
      <path d="M5 11Q4.175 11 3.587 10.412Q3 9.825 3 9V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9Q9.825 3 10.413 3.587Q11 4.175 11 5V9Q11 9.825 10.413 10.412Q9.825 11 9 11ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V15Q3 14.175 3.587 13.587Q4.175 13 5 13H9Q9.825 13 10.413 13.587Q11 14.175 11 15V19Q11 19.825 10.413 20.413Q9.825 21 9 21ZM15 11Q14.175 11 13.588 10.412Q13 9.825 13 9V5Q13 4.175 13.588 3.587Q14.175 3 15 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V9Q21 9.825 20.413 10.412Q19.825 11 19 11ZM15 21Q14.175 21 13.588 20.413Q13 19.825 13 19V15Q13 14.175 13.588 13.587Q14.175 13 15 13H19Q19.825 13 20.413 13.587Q21 14.175 21 15V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialGridViewRoundedFilled.displayName = 'AmauiIconMaterialGridViewRoundedFilled';

export default IconMaterialGridViewRoundedFilled;
