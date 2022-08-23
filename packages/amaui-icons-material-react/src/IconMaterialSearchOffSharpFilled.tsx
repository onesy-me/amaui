import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSearchOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchOffSharpFilled'
      short_name='SearchOff'

      {...props}
    >
      <path d="M7 22Q4.925 22 3.463 20.538Q2 19.075 2 17Q2 14.925 3.463 13.462Q4.925 12 7 12Q9.075 12 10.538 13.462Q12 14.925 12 17Q12 19.075 10.538 20.538Q9.075 22 7 22ZM5.225 19.475 7 17.7 8.75 19.475 9.475 18.775 7.7 17 9.475 15.225 8.775 14.525 7 16.3 5.225 14.525 4.525 15.225 6.3 17 4.525 18.775ZM20.6 21 14.2 14.6Q14.2 14.6 14.2 14.6Q14.2 14.6 14.2 14.6Q13.9 14.275 13.562 13.938Q13.225 13.6 12.9 13.3Q13.85 12.7 14.425 11.7Q15 10.7 15 9.5Q15 7.625 13.688 6.312Q12.375 5 10.5 5Q8.625 5 7.312 6.312Q6 7.625 6 9.5Q6 9.65 6.013 9.787Q6.025 9.925 6.05 10.075Q5.6 10.125 5.062 10.275Q4.525 10.425 4.1 10.625Q4.05 10.35 4.025 10.075Q4 9.8 4 9.5Q4 6.775 5.888 4.887Q7.775 3 10.5 3Q13.225 3 15.113 4.887Q17 6.775 17 9.5Q17 10.575 16.663 11.537Q16.325 12.5 15.725 13.3L22 19.6Z"/>
    </Icon>
  );
});

IconMaterialSearchOffSharpFilled.displayName = 'AmauiIconMaterialSearchOffSharpFilled';

export default IconMaterialSearchOffSharpFilled;
