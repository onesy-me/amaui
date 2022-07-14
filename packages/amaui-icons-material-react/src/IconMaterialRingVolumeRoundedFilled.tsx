import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRingVolumeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeRoundedFilled'
      short_name='RingVolume'

      {...props}
    >
      <path d="M3.425 20.4 1.125 18.15Q0.85 17.875 0.85 17.45Q0.85 17.025 1.125 16.75Q3.25 14.45 6.075 13.225Q8.9 12 12.025 12Q15.15 12 17.975 13.238Q20.8 14.475 22.925 16.75Q23.2 17.025 23.2 17.45Q23.2 17.875 22.925 18.15L20.625 20.4Q20.35 20.675 19.988 20.7Q19.625 20.725 19.325 20.5L16.425 18.3Q16.225 18.15 16.125 17.95Q16.025 17.75 16.025 17.5V14.65Q15.05 14.325 14.05 14.162Q13.05 14 12.025 14Q11 14 10 14.162Q9 14.325 8.025 14.65V17.5Q8.025 17.75 7.925 17.95Q7.825 18.15 7.625 18.3L4.725 20.5Q4.425 20.725 4.062 20.7Q3.7 20.675 3.425 20.4ZM12.05 7.05Q11.625 7.05 11.338 6.762Q11.05 6.475 11.05 6.05V3.05Q11.05 2.625 11.338 2.337Q11.625 2.05 12.05 2.05Q12.475 2.05 12.763 2.337Q13.05 2.625 13.05 3.05V6.05Q13.05 6.475 12.763 6.762Q12.475 7.05 12.05 7.05ZM16.9 9.15Q16.625 8.85 16.613 8.45Q16.6 8.05 16.9 7.75L19.025 5.625Q19.325 5.325 19.738 5.337Q20.15 5.35 20.45 5.65Q20.725 5.95 20.738 6.35Q20.75 6.75 20.45 7.05L18.325 9.175Q18.025 9.475 17.613 9.462Q17.2 9.45 16.9 9.15ZM5.675 9.175 3.55 7.05Q3.25 6.75 3.263 6.35Q3.275 5.95 3.55 5.65Q3.85 5.35 4.263 5.337Q4.675 5.325 4.975 5.625L7.1 7.75Q7.4 8.05 7.388 8.45Q7.375 8.85 7.1 9.15Q6.8 9.45 6.388 9.462Q5.975 9.475 5.675 9.175Z"/>
    </Icon>
  );
});

export default IconMaterialRingVolumeRoundedFilled;
