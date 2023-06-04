import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentContentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentContentFilled'

      short_name='SentimentContent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M390 716h180q13 0 21.5-8.5T600 686q0-13-8.5-21.5T570 656H390q-13 0-21.5 8.5T360 686q0 13 8.5 21.5T390 716Zm90 260q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976ZM340 436q-25 0-47 11t-39 29q-8 9-6.5 21t12.5 19q10 7 22 5t22-10q8-7 17-10.5t19-3.5q10 0 19 4t17 10q10 8 22 9.5t22-5.5q11-7 13-18.5t-6-19.5q-17-18-39.5-29.5T340 436Zm280 0q-25 0-47.5 11T533 477q-8 8-6 20t13 19q10 7 22 5.5t22-9.5q8-6 17-10t19-4q11 0 20 4t17 10q10 8 21.5 9.5T700 516q11-7 13-19t-6-20q-17-19-39.5-30T620 436Z"/>
    </Icon>
  );
});

IconMaterialSentimentContentFilled.displayName = 'AmauiIconMaterialSentimentContentFilled';

export default IconMaterialSentimentContentFilled;
