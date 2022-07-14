import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSanitizerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SanitizerSharpFilled'
      short_name='Sanitizer'

      {...props}
    >
      <path d="M17 8Q16.375 8 15.938 7.562Q15.5 7.125 15.5 6.5Q15.5 6.075 15.925 5.375Q16.35 4.675 17 4Q17.65 4.675 18.075 5.375Q18.5 6.075 18.5 6.5Q18.5 7.125 18.062 7.562Q17.625 8 17 8ZM19.5 15Q18.45 15 17.725 14.275Q17 13.55 17 12.5Q17 11.625 17.775 10.337Q18.55 9.05 19.5 8Q20.45 9.05 21.225 10.337Q22 11.625 22 12.5Q22 13.55 21.275 14.275Q20.55 15 19.5 15ZM9 18H11V16H13V14H11V12H9V14H7V16H9ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V12Q4 9.75 5.425 8.1Q6.85 6.45 9 6.1V4H7V2H13Q13.85 2 14.6 2.262Q15.35 2.525 16 3L14.55 4.45Q14.2 4.25 13.812 4.125Q13.425 4 13 4H11V6.1Q13.15 6.45 14.575 8.1Q16 9.75 16 12V20Q16 20.825 15.413 21.413Q14.825 22 14 22Z"/>
    </Icon>
  );
});

export default IconMaterialSanitizerSharpFilled;
