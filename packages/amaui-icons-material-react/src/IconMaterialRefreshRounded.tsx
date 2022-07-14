import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRefreshRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RefreshRounded'
      short_name='Refresh'

      {...props}
    >
      <path d="M12 20Q8.65 20 6.325 17.675Q4 15.35 4 12Q4 8.65 6.325 6.325Q8.65 4 12 4Q13.725 4 15.3 4.713Q16.875 5.425 18 6.75V5Q18 4.575 18.288 4.287Q18.575 4 19 4Q19.425 4 19.712 4.287Q20 4.575 20 5V10Q20 10.425 19.712 10.712Q19.425 11 19 11H14Q13.575 11 13.288 10.712Q13 10.425 13 10Q13 9.575 13.288 9.287Q13.575 9 14 9H17.2Q16.4 7.6 15.013 6.8Q13.625 6 12 6Q9.5 6 7.75 7.75Q6 9.5 6 12Q6 14.5 7.75 16.25Q9.5 18 12 18Q13.725 18 15.188 17.087Q16.65 16.175 17.375 14.65Q17.5 14.375 17.788 14.188Q18.075 14 18.375 14Q18.95 14 19.238 14.4Q19.525 14.8 19.3 15.3Q18.35 17.425 16.375 18.712Q14.4 20 12 20Z"/>
    </Icon>
  );
});

export default IconMaterialRefreshRounded;
