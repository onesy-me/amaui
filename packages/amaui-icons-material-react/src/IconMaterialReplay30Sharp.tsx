import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplay30Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay30Sharp'
      short_name='Replay30'

      {...props}
    >
      <path d="M7.5 16V14.5H10V13.5H8.5V12.5H10V11.5H7.5V10H10.5Q10.925 10 11.213 10.287Q11.5 10.575 11.5 11V15Q11.5 15.425 11.213 15.712Q10.925 16 10.5 16ZM13.5 16Q13.075 16 12.788 15.712Q12.5 15.425 12.5 15V11Q12.5 10.575 12.788 10.287Q13.075 10 13.5 10H15.5Q15.925 10 16.212 10.287Q16.5 10.575 16.5 11V15Q16.5 15.425 16.212 15.712Q15.925 16 15.5 16ZM14 14.5H15Q15 14.5 15 14.5Q15 14.5 15 14.5V11.5Q15 11.5 15 11.5Q15 11.5 15 11.5H14Q14 11.5 14 11.5Q14 11.5 14 11.5V14.5Q14 14.5 14 14.5Q14 14.5 14 14.5ZM12 22Q10.125 22 8.488 21.288Q6.85 20.575 5.638 19.362Q4.425 18.15 3.712 16.512Q3 14.875 3 13H5Q5 15.925 7.038 17.962Q9.075 20 12 20Q14.925 20 16.962 17.962Q19 15.925 19 13Q19 10.075 16.962 8.037Q14.925 6 12 6H11.85L13.4 7.55L12 9L8 5L12 1L13.4 2.45L11.85 4H12Q13.875 4 15.513 4.713Q17.15 5.425 18.363 6.637Q19.575 7.85 20.288 9.487Q21 11.125 21 13Q21 14.875 20.288 16.512Q19.575 18.15 18.363 19.362Q17.15 20.575 15.513 21.288Q13.875 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialReplay30Sharp.displayName = 'AmauiIconMaterialReplay30Sharp';

export default IconMaterialReplay30Sharp;
