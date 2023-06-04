import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentWorriedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentWorriedFilled'

      short_name='SentimentWorried'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M452 816h56q55 0 93.5-35t38.5-85q0-50-38.5-85T508 576h-56q-55 0-93.5 35T320 696q0 50 38.5 85t93.5 35Zm0-60q-30 0-51-17.5T380 696q0-25 21-42.5t51-17.5h56q30 0 51 17.5t21 42.5q0 25-21 42.5T508 756h-56ZM320 496q43 0 76.5-27.5T438 399q2-10-7-16.5t-21-6.5q-11 0-20 5.5T376 398q-7 17-22 27.5T320 436h-50q-13 0-21.5 8.5T240 466q0 13 8.5 21.5T270 496h50Zm320 0h50q13 0 21.5-8.5T720 466q0-13-8.5-21.5T690 436h-50q-19 0-34-10.5T584 398q-5-11-14-16.5t-20-5.5q-12 0-21 6.5t-7 16.5q8 42 41.5 69.5T640 496ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialSentimentWorriedFilled.displayName = 'AmauiIconMaterialSentimentWorriedFilled';

export default IconMaterialSentimentWorriedFilled;
