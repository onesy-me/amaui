import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransformRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformRoundedW100Filled'
      short_name='Transform'

      {...props}
    >
      <path d="M16 21.8Q15.85 21.8 15.725 21.75Q15.6 21.7 15.475 21.575L13.125 19.225Q13.025 19.125 13.025 19Q13.025 18.875 13.15 18.75Q13.275 18.625 13.4 18.637Q13.525 18.65 13.65 18.75L15.65 20.7V16.35H9.15Q8.5 16.35 8.075 15.925Q7.65 15.5 7.65 14.85V8.35H2.975Q2.85 8.35 2.75 8.25Q2.65 8.15 2.65 8Q2.65 7.85 2.75 7.75Q2.85 7.65 3 7.65H7.65V3.3L5.625 5.275Q5.525 5.375 5.4 5.375Q5.275 5.375 5.15 5.25Q5.025 5.125 5.025 5Q5.025 4.875 5.15 4.75L7.475 2.425Q7.6 2.3 7.725 2.25Q7.85 2.2 8 2.2Q8.15 2.2 8.275 2.25Q8.4 2.3 8.525 2.425L10.875 4.775Q10.975 4.875 10.975 5Q10.975 5.125 10.85 5.25Q10.725 5.375 10.6 5.362Q10.475 5.35 10.35 5.25L8.35 3.3V14.85Q8.35 15.15 8.6 15.4Q8.85 15.65 9.15 15.65H21.025Q21.15 15.65 21.25 15.75Q21.35 15.85 21.35 16Q21.35 16.15 21.25 16.25Q21.15 16.35 21 16.35H16.35V20.7L18.375 18.725Q18.475 18.625 18.6 18.625Q18.725 18.625 18.85 18.75Q18.975 18.875 18.975 19Q18.975 19.125 18.85 19.25L16.525 21.575Q16.4 21.7 16.275 21.75Q16.15 21.8 16 21.8ZM15.65 13.65V9.15Q15.65 8.85 15.4 8.6Q15.15 8.35 14.85 8.35H10.35V7.65H14.85Q15.5 7.65 15.925 8.075Q16.35 8.5 16.35 9.15V13.65Z"/>
    </Icon>
  );
});

IconMaterialTransformRoundedW100Filled.displayName = 'AmauiIconMaterialTransformRoundedW100Filled';

export default IconMaterialTransformRoundedW100Filled;
