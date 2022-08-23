import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditRoadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoadRounded'
      short_name='EditRoad'

      {...props}
    >
      <path d="M16 13.05V5Q16 4.575 16.288 4.287Q16.575 4 17 4Q17.425 4 17.712 4.287Q18 4.575 18 5V11.05ZM5 20Q4.575 20 4.287 19.712Q4 19.425 4 19V5Q4 4.575 4.287 4.287Q4.575 4 5 4Q5.425 4 5.713 4.287Q6 4.575 6 5V19Q6 19.425 5.713 19.712Q5.425 20 5 20ZM11 8Q10.575 8 10.288 7.713Q10 7.425 10 7V5Q10 4.575 10.288 4.287Q10.575 4 11 4Q11.425 4 11.713 4.287Q12 4.575 12 5V7Q12 7.425 11.713 7.713Q11.425 8 11 8ZM11 14Q10.575 14 10.288 13.712Q10 13.425 10 13V11Q10 10.575 10.288 10.287Q10.575 10 11 10Q11.425 10 11.713 10.287Q12 10.575 12 11V13Q12 13.425 11.713 13.712Q11.425 14 11 14ZM11 20Q10.575 20 10.288 19.712Q10 19.425 10 19V17Q10 16.575 10.288 16.288Q10.575 16 11 16Q11.425 16 11.713 16.288Q12 16.575 12 17V19Q12 19.425 11.713 19.712Q11.425 20 11 20ZM22.125 14 22.85 13.275Q23.125 13 23.125 12.575Q23.125 12.15 22.85 11.875L22.125 11.15Q21.85 10.875 21.425 10.875Q21 10.875 20.725 11.15L20 11.875ZM14.5 20Q14.3 20 14.15 19.85Q14 19.7 14 19.5V18.075Q14 18.025 14.15 17.725L19.3 12.575L21.425 14.7L16.275 19.85Q16.225 19.9 15.925 20Z"/>
    </Icon>
  );
});

IconMaterialEditRoadRounded.displayName = 'AmauiIconMaterialEditRoadRounded';

export default IconMaterialEditRoadRounded;
