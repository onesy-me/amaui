import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileOpenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenRoundedW100Filled'
      short_name='FileOpen'

      {...props}
    >
      <path d="M21.7 21.2 18.35 17.85V20.675Q18.35 20.825 18.25 20.925Q18.15 21.025 18 21.025Q17.85 21.025 17.75 20.925Q17.65 20.825 17.65 20.675V17.4Q17.65 17.075 17.863 16.862Q18.075 16.65 18.4 16.65H21.675Q21.825 16.65 21.925 16.75Q22.025 16.85 22.025 17Q22.025 17.15 21.925 17.25Q21.825 17.35 21.675 17.35H18.825L22.2 20.725Q22.3 20.825 22.3 20.962Q22.3 21.1 22.2 21.2Q22.1 21.325 21.95 21.312Q21.8 21.3 21.7 21.2ZM15.05 7.7H18L14.3 4V6.95Q14.3 7.275 14.513 7.487Q14.725 7.7 15.05 7.7ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.35Q14.475 3.3 14.613 3.35Q14.75 3.4 14.85 3.5L18.5 7.15Q18.6 7.25 18.65 7.387Q18.7 7.525 18.7 7.65V14.65H17.15Q16.525 14.65 16.088 15.088Q15.65 15.525 15.65 16.15V20.7Z"/>
    </Icon>
  );
});

IconMaterialFileOpenRoundedW100Filled.displayName = 'AmauiIconMaterialFileOpenRoundedW100Filled';

export default IconMaterialFileOpenRoundedW100Filled;
