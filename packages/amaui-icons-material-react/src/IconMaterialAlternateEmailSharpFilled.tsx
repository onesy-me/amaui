import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlternateEmailSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlternateEmailSharpFilled'
      short_name='AlternateEmail'

      {...props}
    >
      <path d="M12 22Q9.95 22 8.125 21.212Q6.3 20.425 4.938 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 9.925 2.788 8.113Q3.575 6.3 4.938 4.938Q6.3 3.575 8.125 2.787Q9.95 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12V13.45Q22 14.925 20.988 15.962Q19.975 17 18.5 17Q17.6 17 16.825 16.6Q16.05 16.2 15.55 15.55Q14.875 16.225 13.963 16.613Q13.05 17 12 17Q9.925 17 8.463 15.537Q7 14.075 7 12Q7 9.925 8.463 8.462Q9.925 7 12 7Q14.075 7 15.538 8.462Q17 9.925 17 12V13.45Q17 14.175 17.45 14.587Q17.9 15 18.5 15Q19.1 15 19.55 14.587Q20 14.175 20 13.45V12Q20 8.725 17.637 6.362Q15.275 4 12 4Q8.725 4 6.362 6.362Q4 8.725 4 12Q4 15.275 6.362 17.637Q8.725 20 12 20H17V22ZM12 15Q13.25 15 14.125 14.125Q15 13.25 15 12Q15 10.75 14.125 9.875Q13.25 9 12 9Q10.75 9 9.875 9.875Q9 10.75 9 12Q9 13.25 9.875 14.125Q10.75 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialAlternateEmailSharpFilled.displayName = 'AmauiIconMaterialAlternateEmailSharpFilled';

export default IconMaterialAlternateEmailSharpFilled;
