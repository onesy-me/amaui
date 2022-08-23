import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHighlightRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightRoundedFilled'
      short_name='Highlight'

      {...props}
    >
      <path d="M4.95 7.325 4.225 6.6Q3.9 6.3 3.888 5.9Q3.875 5.5 4.2 5.2Q4.5 4.9 4.912 4.887Q5.325 4.875 5.625 5.175L6.35 5.9Q6.625 6.175 6.638 6.588Q6.65 7 6.35 7.3Q6.075 7.575 5.662 7.587Q5.25 7.6 4.95 7.325ZM12 5Q11.575 5 11.288 4.712Q11 4.425 11 4V3Q11 2.575 11.288 2.287Q11.575 2 12 2Q12.425 2 12.713 2.287Q13 2.575 13 3V4Q13 4.425 12.713 4.712Q12.425 5 12 5ZM17.7 7.325Q17.4 7.025 17.4 6.6Q17.4 6.175 17.7 5.875L18.4 5.175Q18.675 4.9 19.087 4.9Q19.5 4.9 19.8 5.2Q20.075 5.475 20.075 5.9Q20.075 6.325 19.8 6.6L19.1 7.3Q18.8 7.6 18.4 7.612Q18 7.625 17.7 7.325ZM11 22Q10.175 22 9.588 21.413Q9 20.825 9 20V17L6.575 14.575Q6.3 14.3 6.15 13.938Q6 13.575 6 13.175V10Q6 9.575 6.287 9.287Q6.575 9 7 9H17Q17.425 9 17.712 9.287Q18 9.575 18 10V13.175Q18 13.575 17.85 13.938Q17.7 14.3 17.425 14.575L15 17V20Q15 20.825 14.413 21.413Q13.825 22 13 22Z"/>
    </Icon>
  );
});

IconMaterialHighlightRoundedFilled.displayName = 'AmauiIconMaterialHighlightRoundedFilled';

export default IconMaterialHighlightRoundedFilled;
