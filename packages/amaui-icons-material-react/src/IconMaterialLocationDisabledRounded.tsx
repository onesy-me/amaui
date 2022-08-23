import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationDisabledRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationDisabledRounded'
      short_name='LocationDisabled'

      {...props}
    >
      <path d="M19.6 16.8 18.15 15.35Q18.575 14.6 18.788 13.75Q19 12.9 19 12Q19 9.1 16.95 7.05Q14.9 5 12 5Q11.1 5 10.25 5.213Q9.4 5.425 8.65 5.85L7.2 4.4Q8.075 3.875 9.013 3.525Q9.95 3.175 11 3.05V2.05Q11 1.625 11.288 1.337Q11.575 1.05 12 1.05Q12.425 1.05 12.713 1.337Q13 1.625 13 2.05V3.05Q16.125 3.4 18.363 5.637Q20.6 7.875 20.95 11H21.95Q22.375 11 22.663 11.287Q22.95 11.575 22.95 12Q22.95 12.425 22.663 12.712Q22.375 13 21.95 13H20.95Q20.825 14.05 20.475 14.987Q20.125 15.925 19.6 16.8ZM12 22.95Q11.575 22.95 11.288 22.663Q11 22.375 11 21.95V20.95Q7.875 20.6 5.638 18.363Q3.4 16.125 3.05 13H2.05Q1.625 13 1.337 12.712Q1.05 12.425 1.05 12Q1.05 11.575 1.337 11.287Q1.625 11 2.05 11H3.05Q3.175 9.95 3.525 9.012Q3.875 8.075 4.4 7.2L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.475 20.475Q20.775 20.775 20.775 21.175Q20.775 21.575 20.475 21.875Q20.175 22.175 19.763 22.175Q19.35 22.175 19.05 21.875L16.8 19.6Q15.925 20.125 14.988 20.475Q14.05 20.825 13 20.95V21.95Q13 22.375 12.713 22.663Q12.425 22.95 12 22.95ZM12 19Q12.9 19 13.75 18.788Q14.6 18.575 15.35 18.15L5.85 8.65Q5.425 9.4 5.213 10.25Q5 11.1 5 12Q5 14.9 7.05 16.95Q9.1 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialLocationDisabledRounded.displayName = 'AmauiIconMaterialLocationDisabledRounded';

export default IconMaterialLocationDisabledRounded;
