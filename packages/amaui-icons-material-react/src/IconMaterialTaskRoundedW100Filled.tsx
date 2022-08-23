import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTaskRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskRoundedW100Filled'
      short_name='Task'

      {...props}
    >
      <path d="M10.425 16Q10.55 16.125 10.675 16.175Q10.8 16.225 10.95 16.225Q11.1 16.225 11.225 16.175Q11.35 16.125 11.475 16L15.475 12Q15.575 11.9 15.575 11.775Q15.575 11.65 15.45 11.525Q15.325 11.4 15.2 11.4Q15.075 11.4 14.95 11.525L10.95 15.525L9.025 13.6Q8.925 13.5 8.8 13.5Q8.675 13.5 8.55 13.625Q8.425 13.75 8.425 13.875Q8.425 14 8.55 14.125ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.025Q14.325 3.3 14.6 3.412Q14.875 3.525 15.1 3.75L18.25 6.9Q18.475 7.125 18.587 7.4Q18.7 7.675 18.7 7.975V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM15.05 7.7H18L14.3 4V6.95Q14.3 7.275 14.513 7.487Q14.725 7.7 15.05 7.7Z"/>
    </Icon>
  );
});

IconMaterialTaskRoundedW100Filled.displayName = 'AmauiIconMaterialTaskRoundedW100Filled';

export default IconMaterialTaskRoundedW100Filled;
