import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountTreeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeRoundedW100Filled'
      short_name='AccountTree'

      {...props}
    >
      <path d="M16.35 20.35Q16.075 20.35 15.863 20.138Q15.65 19.925 15.65 19.65V17.35H12.35Q12.075 17.35 11.863 17.138Q11.65 16.925 11.65 16.65V7.35H8.35V9.65Q8.35 9.925 8.137 10.137Q7.925 10.35 7.65 10.35H3.35Q3.075 10.35 2.863 10.137Q2.65 9.925 2.65 9.65V4.35Q2.65 4.075 2.863 3.862Q3.075 3.65 3.35 3.65H7.65Q7.925 3.65 8.137 3.862Q8.35 4.075 8.35 4.35V6.65H15.65V4.35Q15.65 4.075 15.863 3.862Q16.075 3.65 16.35 3.65H20.65Q20.925 3.65 21.138 3.862Q21.35 4.075 21.35 4.35V9.65Q21.35 9.925 21.138 10.137Q20.925 10.35 20.65 10.35H16.35Q16.075 10.35 15.863 10.137Q15.65 9.925 15.65 9.65V7.35H12.35V16.65H15.65V14.35Q15.65 14.075 15.863 13.862Q16.075 13.65 16.35 13.65H20.65Q20.925 13.65 21.138 13.862Q21.35 14.075 21.35 14.35V19.65Q21.35 19.925 21.138 20.138Q20.925 20.35 20.65 20.35Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeRoundedW100Filled.displayName = 'AmauiIconMaterialAccountTreeRoundedW100Filled';

export default IconMaterialAccountTreeRoundedW100Filled;
