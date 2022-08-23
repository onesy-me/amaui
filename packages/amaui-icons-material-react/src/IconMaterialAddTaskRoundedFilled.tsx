import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddTaskRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTaskRoundedFilled'
      short_name='AddTask'

      {...props}
    >
      <path d="M11.975 22Q9.9 22 8.075 21.212Q6.25 20.425 4.9 19.075Q3.55 17.725 2.775 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q13.2 2 14.388 2.3Q15.575 2.6 16.7 3.175Q17.075 3.375 17.163 3.787Q17.25 4.2 16.975 4.55Q16.725 4.875 16.325 4.975Q15.925 5.075 15.575 4.875Q14.725 4.45 13.825 4.225Q12.925 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Q12.725 20 13.375 19.887Q14.025 19.775 14.625 19.55Q14.95 19.425 15.263 19.538Q15.575 19.65 15.825 19.925Q16.15 20.3 16.013 20.763Q15.875 21.225 15.375 21.425Q14.6 21.7 13.75 21.85Q12.9 22 11.975 22ZM9.9 15.9 7.025 13.025Q6.75 12.75 6.763 12.337Q6.775 11.925 7.05 11.65Q7.325 11.375 7.75 11.375Q8.175 11.375 8.45 11.65L10.6 13.8L19.925 4.45Q20.2 4.175 20.613 4.187Q21.025 4.2 21.3 4.475Q21.575 4.75 21.575 5.175Q21.575 5.6 21.3 5.875L11.3 15.9Q11.025 16.175 10.6 16.175Q10.175 16.175 9.9 15.9ZM20 20Q19.575 20 19.288 19.712Q19 19.425 19 19V17H17Q16.575 17 16.288 16.712Q16 16.425 16 16Q16 15.575 16.288 15.287Q16.575 15 17 15H19V13Q19 12.575 19.288 12.287Q19.575 12 20 12Q20.425 12 20.712 12.287Q21 12.575 21 13V15H23Q23.425 15 23.712 15.287Q24 15.575 24 16Q24 16.425 23.712 16.712Q23.425 17 23 17H21V19Q21 19.425 20.712 19.712Q20.425 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialAddTaskRoundedFilled.displayName = 'AmauiIconMaterialAddTaskRoundedFilled';

export default IconMaterialAddTaskRoundedFilled;
