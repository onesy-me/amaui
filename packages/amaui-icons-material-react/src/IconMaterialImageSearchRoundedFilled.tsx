import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageSearchRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSearchRoundedFilled'
      short_name='ImageSearch'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H10V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V13.65L21 15.65V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM20.85 12.7 18.45 10.3Q17.925 10.65 17.325 10.825Q16.725 11 16.05 11Q14.2 11 12.9 9.688Q11.6 8.375 11.6 6.5Q11.6 4.625 12.913 3.312Q14.225 2 16.1 2Q17.975 2 19.288 3.312Q20.6 4.625 20.6 6.5Q20.6 7.175 20.4 7.8Q20.2 8.425 19.9 8.95L22.25 11.3Q22.525 11.575 22.525 12Q22.525 12.425 22.25 12.7Q21.975 12.975 21.55 12.975Q21.125 12.975 20.85 12.7ZM16.1 9Q17.15 9 17.875 8.275Q18.6 7.55 18.6 6.5Q18.6 5.45 17.875 4.725Q17.15 4 16.1 4Q15.05 4 14.325 4.725Q13.6 5.45 13.6 6.5Q13.6 7.55 14.325 8.275Q15.05 9 16.1 9ZM7 17Q6.7 17 6.55 16.725Q6.4 16.45 6.6 16.2L8.6 13.525Q8.75 13.325 9 13.325Q9.25 13.325 9.4 13.525L11.25 16L13.85 12.525Q14 12.325 14.25 12.325Q14.5 12.325 14.65 12.525L17.4 16.2Q17.6 16.45 17.45 16.725Q17.3 17 17 17Z"/>
    </Icon>
  );
});

IconMaterialImageSearchRoundedFilled.displayName = 'AmauiIconMaterialImageSearchRoundedFilled';

export default IconMaterialImageSearchRoundedFilled;
