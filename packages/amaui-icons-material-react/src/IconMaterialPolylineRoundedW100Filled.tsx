import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolylineRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineRoundedW100Filled'
      short_name='Polyline'

      {...props}
    >
      <path d="M16.35 21.35Q16.075 21.35 15.863 21.138Q15.65 20.925 15.65 20.65V19.1L8 15.275Q7.925 15.325 7.838 15.337Q7.75 15.35 7.65 15.35H4.35Q4.075 15.35 3.863 15.137Q3.65 14.925 3.65 14.65V11.35Q3.65 11.075 3.863 10.862Q4.075 10.65 4.35 10.65H7.6Q7.6 10.65 7.6 10.65Q7.6 10.65 7.6 10.65L10.75 7.025Q10.7 6.95 10.675 6.862Q10.65 6.775 10.65 6.65V3.35Q10.65 3.075 10.863 2.862Q11.075 2.65 11.35 2.65H14.65Q14.925 2.65 15.138 2.862Q15.35 3.075 15.35 3.35V6.65Q15.35 6.925 15.138 7.137Q14.925 7.35 14.65 7.35H11.4Q11.4 7.35 11.4 7.35Q11.4 7.35 11.4 7.35L8.25 10.975Q8.325 11.1 8.338 11.188Q8.35 11.275 8.35 11.35V14.65Q8.35 14.65 8.35 14.65Q8.35 14.65 8.35 14.65L15.65 18.3V17.35Q15.65 17.075 15.863 16.862Q16.075 16.65 16.35 16.65H19.65Q19.925 16.65 20.138 16.862Q20.35 17.075 20.35 17.35V20.65Q20.35 20.925 20.138 21.138Q19.925 21.35 19.65 21.35Z"/>
    </Icon>
  );
});

IconMaterialPolylineRoundedW100Filled.displayName = 'AmauiIconMaterialPolylineRoundedW100Filled';

export default IconMaterialPolylineRoundedW100Filled;
