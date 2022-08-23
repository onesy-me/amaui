import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSearchOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchOffRounded'
      short_name='SearchOff'

      {...props}
    >
      <path d="M7 22Q4.925 22 3.463 20.538Q2 19.075 2 17Q2 14.925 3.463 13.462Q4.925 12 7 12Q9.075 12 10.538 13.462Q12 14.925 12 17Q12 19.075 10.538 20.538Q9.075 22 7 22ZM4.875 19.125Q5.025 19.275 5.225 19.275Q5.425 19.275 5.575 19.125L7 17.7L8.4 19.125Q8.55 19.275 8.75 19.275Q8.95 19.275 9.1 19.125Q9.25 18.975 9.25 18.763Q9.25 18.55 9.1 18.4L7.7 17L9.125 15.575Q9.275 15.425 9.275 15.225Q9.275 15.025 9.125 14.875Q8.975 14.725 8.775 14.725Q8.575 14.725 8.425 14.875L7 16.3L5.575 14.875Q5.425 14.725 5.225 14.725Q5.025 14.725 4.875 14.875Q4.725 15.025 4.725 15.225Q4.725 15.425 4.875 15.575L6.3 17L4.875 18.425Q4.725 18.575 4.725 18.775Q4.725 18.975 4.875 19.125ZM19.9 20.3 14.2 14.6Q14.2 14.6 14.2 14.6Q14.2 14.6 14.2 14.6Q13.9 14.275 13.562 13.938Q13.225 13.6 12.9 13.3Q13.85 12.7 14.425 11.7Q15 10.7 15 9.5Q15 7.625 13.688 6.312Q12.375 5 10.5 5Q8.625 5 7.312 6.312Q6 7.625 6 9.5Q6 9.65 6.013 9.787Q6.025 9.925 6.05 10.075Q5.6 10.125 5.062 10.275Q4.525 10.425 4.1 10.625Q4.05 10.35 4.025 10.075Q4 9.8 4 9.5Q4 6.775 5.888 4.887Q7.775 3 10.5 3Q13.225 3 15.113 4.887Q17 6.775 17 9.5Q17 10.575 16.663 11.537Q16.325 12.5 15.725 13.3L21.3 18.9Q21.575 19.175 21.575 19.6Q21.575 20.025 21.3 20.3Q21.025 20.575 20.6 20.575Q20.175 20.575 19.9 20.3Z"/>
    </Icon>
  );
});

IconMaterialSearchOffRounded.displayName = 'AmauiIconMaterialSearchOffRounded';

export default IconMaterialSearchOffRounded;
