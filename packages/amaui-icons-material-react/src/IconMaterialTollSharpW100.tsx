import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTollSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollSharpW100'
      short_name='Toll'

      {...props}
    >
      <path d="M15 18.7Q12.2 18.7 10.25 16.75Q8.3 14.8 8.3 12Q8.3 9.2 10.25 7.25Q12.2 5.3 15 5.3Q17.8 5.3 19.75 7.25Q21.7 9.2 21.7 12Q21.7 14.8 19.75 16.75Q17.8 18.7 15 18.7ZM7 18.4Q4.85 17.825 3.575 16.038Q2.3 14.25 2.3 12Q2.3 9.75 3.575 7.963Q4.85 6.175 7 5.6V6.35Q5.2 6.975 4.1 8.525Q3 10.075 3 12Q3 13.925 4.1 15.475Q5.2 17.025 7 17.65ZM15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12ZM15 18Q17.5 18 19.25 16.25Q21 14.5 21 12Q21 9.5 19.25 7.75Q17.5 6 15 6Q12.5 6 10.75 7.75Q9 9.5 9 12Q9 14.5 10.75 16.25Q12.5 18 15 18Z"/>
    </Icon>
  );
});

IconMaterialTollSharpW100.displayName = 'AmauiIconMaterialTollSharpW100';

export default IconMaterialTollSharpW100;
