import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConversionPathSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConversionPathSharp'
      short_name='ConversionPath'

      {...props}
    >
      <path d="M19 21Q18.025 21 17.25 20.438Q16.475 19.875 16.175 19H11Q9.35 19 8.175 17.825Q7 16.65 7 15Q7 13.35 8.175 12.175Q9.35 11 11 11H13Q13.825 11 14.413 10.412Q15 9.825 15 9Q15 8.175 14.413 7.587Q13.825 7 13 7H7.825Q7.5 7.875 6.738 8.438Q5.975 9 5 9Q3.75 9 2.875 8.125Q2 7.25 2 6Q2 4.75 2.875 3.875Q3.75 3 5 3Q5.975 3 6.738 3.562Q7.5 4.125 7.825 5H13Q14.65 5 15.825 6.175Q17 7.35 17 9Q17 10.65 15.825 11.825Q14.65 13 13 13H11Q10.175 13 9.588 13.587Q9 14.175 9 15Q9 15.825 9.588 16.413Q10.175 17 11 17H16.175Q16.5 16.125 17.263 15.562Q18.025 15 19 15Q20.25 15 21.125 15.875Q22 16.75 22 18Q22 19.25 21.125 20.125Q20.25 21 19 21ZM5 7Q5.425 7 5.713 6.713Q6 6.425 6 6Q6 5.575 5.713 5.287Q5.425 5 5 5Q4.575 5 4.287 5.287Q4 5.575 4 6Q4 6.425 4.287 6.713Q4.575 7 5 7Z"/>
    </Icon>
  );
});

IconMaterialConversionPathSharp.displayName = 'AmauiIconMaterialConversionPathSharp';

export default IconMaterialConversionPathSharp;
