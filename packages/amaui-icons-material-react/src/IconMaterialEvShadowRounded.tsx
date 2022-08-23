import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEvShadowRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadowRounded'
      short_name='EvShadow'

      {...props}
    >
      <path d="M12 21Q10.125 21 8.488 20.288Q6.85 19.575 5.638 18.362Q4.425 17.15 3.712 15.512Q3 13.875 3 12Q3 10.125 3.712 8.487Q4.425 6.85 5.638 5.637Q6.85 4.425 8.488 3.712Q10.125 3 12 3Q13.875 3 15.513 3.712Q17.15 4.425 18.363 5.637Q19.575 6.85 20.288 8.487Q21 10.125 21 12Q21 13.875 20.288 15.512Q19.575 17.15 18.363 18.362Q17.15 19.575 15.513 20.288Q13.875 21 12 21ZM9.125 18.375Q8.075 17.1 7.538 15.375Q7 13.65 7 11.7Q7 10.05 7.4 8.575Q7.8 7.1 8.55 5.9Q6.9 6.85 5.95 8.475Q5 10.1 5 12Q5 14.075 6.113 15.8Q7.225 17.525 9.125 18.375ZM9.175 13.675 16.325 6.5Q16.075 6.3 15.838 6.137Q15.6 5.975 15.325 5.825L9 12.15Q9.025 12.55 9.062 12.925Q9.1 13.3 9.175 13.675ZM9.175 9.875 13.8 5.225Q13.425 5.125 13.05 5.075Q12.675 5.025 12.3 5Q11.075 5.725 10.275 6.975Q9.475 8.225 9.175 9.875ZM10.175 16.375 18.05 8.5Q17.9 8.25 17.75 8.012Q17.6 7.775 17.4 7.55L9.625 15.3Q9.75 15.575 9.887 15.838Q10.025 16.1 10.175 16.375ZM12.025 18.35 18.975 11.4Q18.925 11.05 18.875 10.688Q18.825 10.325 18.7 9.975L11.1 17.575Q11.3 17.8 11.538 17.988Q11.775 18.175 12.025 18.35ZM13.7 18.8Q15.575 18.325 16.95 16.95Q18.325 15.575 18.8 13.7Z"/>
    </Icon>
  );
});

IconMaterialEvShadowRounded.displayName = 'AmauiIconMaterialEvShadowRounded';

export default IconMaterialEvShadowRounded;
