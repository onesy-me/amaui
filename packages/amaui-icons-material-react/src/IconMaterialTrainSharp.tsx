import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrainSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrainSharp'
      short_name='Train'

      {...props}
    >
      <path d="M4 15.5V6Q4 4.675 4.688 3.887Q5.375 3.1 6.5 2.687Q7.625 2.275 9.062 2.137Q10.5 2 12 2Q13.65 2 15.113 2.137Q16.575 2.275 17.663 2.687Q18.75 3.1 19.375 3.887Q20 4.675 20 6V15.5Q20 16.975 18.988 17.988Q17.975 19 16.5 19L18 20.5V21H16L14 19H10L8 21H6V20.5L7.5 19Q6.025 19 5.013 17.988Q4 16.975 4 15.5ZM12 4Q9.35 4 8.125 4.312Q6.9 4.625 6.45 5H17.65Q17.275 4.575 16.038 4.287Q14.8 4 12 4ZM6 10H11V7H6ZM16.5 12H7.5Q6.85 12 6.425 12Q6 12 6 12H18Q18 12 17.575 12Q17.15 12 16.5 12ZM13 10H18V7H13ZM8.5 16Q9.15 16 9.575 15.575Q10 15.15 10 14.5Q10 13.85 9.575 13.425Q9.15 13 8.5 13Q7.85 13 7.425 13.425Q7 13.85 7 14.5Q7 15.15 7.425 15.575Q7.85 16 8.5 16ZM15.5 16Q16.15 16 16.575 15.575Q17 15.15 17 14.5Q17 13.85 16.575 13.425Q16.15 13 15.5 13Q14.85 13 14.425 13.425Q14 13.85 14 14.5Q14 15.15 14.425 15.575Q14.85 16 15.5 16ZM7.5 17H16.5Q17.15 17 17.575 16.575Q18 16.15 18 15.5V12H6V15.5Q6 16.15 6.425 16.575Q6.85 17 7.5 17ZM12 5Q14.8 5 16.038 5Q17.275 5 17.65 5H6.45Q6.9 5 8.125 5Q9.35 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialTrainSharp.displayName = 'AmauiIconMaterialTrainSharp';

export default IconMaterialTrainSharp;
