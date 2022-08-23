import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSnowshoeingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowshoeingSharpFilled'
      short_name='Snowshoeing'

      {...props}
    >
      <path d="M14.5 5.5Q15.325 5.5 15.913 4.912Q16.5 4.325 16.5 3.5Q16.5 2.675 15.913 2.087Q15.325 1.5 14.5 1.5Q13.675 1.5 13.088 2.087Q12.5 2.675 12.5 3.5Q12.5 4.325 13.088 4.912Q13.675 5.5 14.5 5.5ZM12 23V21.5H14V16.975L11.9 14.975L11 18.2L7.575 20.625L7.65 20.725Q7.875 21.025 8.163 21.225Q8.45 21.425 8.8 21.55Q9.025 21.675 9.15 21.812Q9.275 21.95 9.275 22.225Q9.275 22.55 9.05 22.775Q8.825 23 8.5 23Q8.05 23 7.413 22.525Q6.775 22.05 6.375 21.55L4 18.5L5.175 17.55L6.325 19.025L9.2 17L10.8 8.875L9 9.575V13H7V8.275L11.125 6.55Q11.925 6.2 12.3 6.1Q12.675 6 13 6Q13.525 6 13.963 6.275Q14.4 6.55 14.7 7L15.7 8.575Q16.35 9.6 17.462 10.3Q18.575 11 20 11V13Q18.35 13 16.913 12.3Q15.475 11.6 14.5 10.475L13.9 13.475L16 15.475V21.5Q16.375 21.475 16.712 21.375Q17.05 21.275 17.35 21.1Q17.45 21.05 17.538 21.025Q17.625 21 17.725 21Q18.075 21 18.288 21.238Q18.5 21.475 18.5 21.75Q18.5 21.95 18.413 22.112Q18.325 22.275 18.125 22.4Q17.625 22.7 17.062 22.85Q16.5 23 15.875 23Z"/>
    </Icon>
  );
});

IconMaterialSnowshoeingSharpFilled.displayName = 'AmauiIconMaterialSnowshoeingSharpFilled';

export default IconMaterialSnowshoeingSharpFilled;
