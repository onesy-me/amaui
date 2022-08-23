import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKebabDiningSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KebabDiningSharpFilled'
      short_name='KebabDining'

      {...props}
    >
      <path d="M6.25 23V19H5.5Q4.45 19 3.725 18.275Q3 17.55 3 16.5Q3 15.45 3.725 14.725Q4.45 14 5.5 14H6.25V13H3V8H6.25V7H5.5Q4.45 7 3.725 6.275Q3 5.55 3 4.5Q3 3.45 3.725 2.725Q4.45 2 5.5 2H6.25V1H7.75V2H8.5Q9.55 2 10.275 2.725Q11 3.45 11 4.5Q11 5.55 10.275 6.275Q9.55 7 8.5 7H7.75V8H11V13H7.75V14H8.5Q9.55 14 10.275 14.725Q11 15.45 11 16.5Q11 17.55 10.275 18.275Q9.55 19 8.5 19H7.75V23ZM16.25 23V19H15.5Q14.45 19 13.725 18.275Q13 17.55 13 16.5Q13 15.45 13.725 14.725Q14.45 14 15.5 14H16.25V13H13V8H16.25V7H15.5Q14.45 7 13.725 6.275Q13 5.55 13 4.5Q13 3.45 13.725 2.725Q14.45 2 15.5 2H16.25V1H17.75V2H18.5Q19.55 2 20.275 2.725Q21 3.45 21 4.5Q21 5.55 20.275 6.275Q19.55 7 18.5 7H17.75V8H21V13H17.75V14H18.5Q19.55 14 20.275 14.725Q21 15.45 21 16.5Q21 17.55 20.275 18.275Q19.55 19 18.5 19H17.75V23Z"/>
    </Icon>
  );
});

IconMaterialKebabDiningSharpFilled.displayName = 'AmauiIconMaterialKebabDiningSharpFilled';

export default IconMaterialKebabDiningSharpFilled;
