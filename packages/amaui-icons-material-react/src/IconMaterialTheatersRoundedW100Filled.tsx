import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTheatersRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheatersRoundedW100Filled'
      short_name='Theaters'

      {...props}
    >
      <path d="M5 20.35Q4.85 20.35 4.75 20.25Q4.65 20.15 4.65 20V4Q4.65 3.85 4.75 3.75Q4.85 3.65 5 3.65Q5.15 3.65 5.25 3.75Q5.35 3.85 5.35 4V5.65H8.65V4.4Q8.65 4.075 8.863 3.862Q9.075 3.65 9.4 3.65H14.6Q14.925 3.65 15.138 3.862Q15.35 4.075 15.35 4.4V5.65H18.65V4Q18.65 3.85 18.75 3.75Q18.85 3.65 19 3.65Q19.15 3.65 19.25 3.75Q19.35 3.85 19.35 4V20Q19.35 20.15 19.25 20.25Q19.15 20.35 19 20.35Q18.85 20.35 18.75 20.25Q18.65 20.15 18.65 20V18.35H15.35V19.6Q15.35 19.925 15.138 20.138Q14.925 20.35 14.6 20.35H9.4Q9.075 20.35 8.863 20.138Q8.65 19.925 8.65 19.6V18.35H5.35V20Q5.35 20.15 5.25 20.25Q5.15 20.35 5 20.35ZM5.35 17.65H8.65V14.35H5.35ZM5.35 13.65H8.65V10.35H5.35ZM5.35 9.65H8.65V6.35H5.35ZM15.35 17.65H18.65V14.35H15.35ZM15.35 13.65H18.65V10.35H15.35ZM15.35 9.65H18.65V6.35H15.35Z"/>
    </Icon>
  );
});

IconMaterialTheatersRoundedW100Filled.displayName = 'AmauiIconMaterialTheatersRoundedW100Filled';

export default IconMaterialTheatersRoundedW100Filled;
