import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRamenDiningRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningRoundedW100Filled'
      short_name='RamenDining'

      {...props}
    >
      <path d="M9.25 20.7Q8.925 20.7 8.713 20.487Q8.5 20.275 8.5 19.95V19.35Q6.4 18.55 4.913 17.15Q3.425 15.75 2.85 14.025Q2.75 13.75 2.913 13.525Q3.075 13.3 3.4 13.3H4V5.975Q4 5.7 4.2 5.487Q4.4 5.275 4.675 5.225L20.675 3.5Q20.825 3.475 20.938 3.587Q21.05 3.7 21.05 3.85Q21.05 3.975 20.962 4.062Q20.875 4.15 20.75 4.175L9.1 5.45V7.6H20.85Q21 7.6 21.1 7.7Q21.2 7.8 21.2 7.95Q21.2 8.1 21.1 8.2Q21 8.3 20.85 8.3H9.1V13.3H19.05Q19.375 13.3 19.538 13.525Q19.7 13.75 19.6 14.025Q19.025 15.75 17.5 17.15Q15.975 18.55 13.9 19.35V19.95Q13.9 20.275 13.688 20.487Q13.475 20.7 13.15 20.7ZM6.9 7.6H8.4V5.55L6.9 5.7ZM4.7 7.6H6.2V5.75L4.7 5.9ZM6.9 13.3H8.4V8.3H6.9ZM4.7 13.3H6.2V8.3H4.7Z"/>
    </Icon>
  );
});

export default IconMaterialRamenDiningRoundedW100Filled;
