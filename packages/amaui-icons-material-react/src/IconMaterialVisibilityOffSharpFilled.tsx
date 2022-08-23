import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVisibilityOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityOffSharpFilled'
      short_name='VisibilityOff'

      {...props}
    >
      <path d="M19.8 22.6 15.6 18.45Q14.725 18.725 13.838 18.863Q12.95 19 12 19Q8.225 19 5.275 16.913Q2.325 14.825 1 11.5Q1.525 10.175 2.325 9.037Q3.125 7.9 4.15 7L1.4 4.2L2.8 2.8L21.2 21.2ZM12 16Q12.275 16 12.512 15.975Q12.75 15.95 13.025 15.875L7.625 10.475Q7.55 10.75 7.525 10.988Q7.5 11.225 7.5 11.5Q7.5 13.375 8.812 14.688Q10.125 16 12 16ZM19.3 16.45 16.125 13.3Q16.3 12.875 16.4 12.438Q16.5 12 16.5 11.5Q16.5 9.625 15.188 8.312Q13.875 7 12 7Q11.5 7 11.062 7.1Q10.625 7.2 10.2 7.4L7.65 4.85Q8.675 4.425 9.75 4.212Q10.825 4 12 4Q15.775 4 18.725 6.087Q21.675 8.175 23 11.5Q22.425 12.975 21.488 14.238Q20.55 15.5 19.3 16.45ZM14.675 11.85 11.675 8.85Q12.375 8.725 12.963 8.962Q13.55 9.2 13.975 9.65Q14.4 10.1 14.588 10.688Q14.775 11.275 14.675 11.85Z"/>
    </Icon>
  );
});

IconMaterialVisibilityOffSharpFilled.displayName = 'AmauiIconMaterialVisibilityOffSharpFilled';

export default IconMaterialVisibilityOffSharpFilled;
