import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStormSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StormSharpFilled'
      short_name='Storm'

      {...props}
    >
      <path d="M18.15 22Q18.775 20.425 19.025 18.812Q19.275 17.2 19.15 15.55Q18.2 17.6 16.25 18.8Q14.3 20 12 20Q9.9 20 8.2 19.012Q6.5 18.025 5.3 16.375Q4.1 14.725 3.45 12.587Q2.8 10.45 2.8 8.15Q2.8 6.575 3.013 5.037Q3.225 3.5 3.75 2H5.85Q5.25 3.55 4.988 5.175Q4.725 6.8 4.85 8.45Q5.825 6.375 7.763 5.188Q9.7 4 12 4Q14.1 4 15.8 4.987Q17.5 5.975 18.7 7.612Q19.9 9.25 20.55 11.387Q21.2 13.525 21.2 15.85Q21.2 17.425 20.988 18.962Q20.775 20.5 20.25 22ZM12 16Q13.65 16 14.825 14.825Q16 13.65 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialStormSharpFilled.displayName = 'AmauiIconMaterialStormSharpFilled';

export default IconMaterialStormSharpFilled;
