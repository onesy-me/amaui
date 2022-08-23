import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepeatRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatRoundedFilled'
      short_name='Repeat'

      {...props}
    >
      <path d="M17 17V14Q17 13.575 17.288 13.287Q17.575 13 18 13Q18.425 13 18.712 13.275Q19 13.55 19 13.975V18Q19 18.425 18.712 18.712Q18.425 19 18 19H6.85L7.675 19.825Q7.975 20.125 7.988 20.55Q8 20.975 7.7 21.275Q7.4 21.575 6.988 21.575Q6.575 21.575 6.3 21.3L3.7 18.7Q3.425 18.425 3.425 18Q3.425 17.575 3.7 17.3L6.275 14.725Q6.575 14.425 6.988 14.425Q7.4 14.425 7.7 14.725Q8 15.025 8 15.438Q8 15.85 7.7 16.15L6.85 17ZM7 7V10Q7 10.425 6.713 10.712Q6.425 11 6 11Q5.575 11 5.287 10.725Q5 10.45 5 10.025V6Q5 5.575 5.287 5.287Q5.575 5 6 5H17.15L16.325 4.175Q16.025 3.875 16.013 3.45Q16 3.025 16.3 2.725Q16.6 2.425 17.013 2.425Q17.425 2.425 17.7 2.7L20.3 5.3Q20.575 5.575 20.575 6Q20.575 6.425 20.3 6.7L17.725 9.275Q17.425 9.575 17.013 9.575Q16.6 9.575 16.3 9.275Q16 8.975 16 8.562Q16 8.15 16.3 7.85L17.15 7Z"/>
    </Icon>
  );
});

IconMaterialRepeatRoundedFilled.displayName = 'AmauiIconMaterialRepeatRoundedFilled';

export default IconMaterialRepeatRoundedFilled;
