import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrushSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrushSharpFilled'
      short_name='Brush'

      {...props}
    >
      <path d="M6 21Q4.875 21 3.775 20.45Q2.675 19.9 2 19Q2.65 19 3.325 18.488Q4 17.975 4 17Q4 15.75 4.875 14.875Q5.75 14 7 14Q8.25 14 9.125 14.875Q10 15.75 10 17Q10 18.65 8.825 19.825Q7.65 21 6 21ZM6 19Q6.825 19 7.412 18.413Q8 17.825 8 17Q8 16.575 7.713 16.288Q7.425 16 7 16Q6.575 16 6.287 16.288Q6 16.575 6 17Q6 17.575 5.863 18.05Q5.725 18.525 5.5 18.95Q5.625 19 5.75 19Q5.875 19 6 19ZM11.75 15 9 12.25 18.65 2.6 21.4 5.35ZM6 19Q5.875 19 5.75 19Q5.625 19 5.5 18.95Q5.725 18.525 5.863 18.05Q6 17.575 6 17Q6 16.575 6.287 16.288Q6.575 16 7 16Q7.425 16 7.713 16.288Q8 16.575 8 17Q8 17.825 7.412 18.413Q6.825 19 6 19Z"/>
    </Icon>
  );
});

IconMaterialBrushSharpFilled.displayName = 'AmauiIconMaterialBrushSharpFilled';

export default IconMaterialBrushSharpFilled;
