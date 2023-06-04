import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentSadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentSadFilled'

      short_name='SentimentSad'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 556q65 0 112 44t56 109q2 12 11 19.5t21 7.5q12 0 21.5-8t7.5-20q-10-90-74.5-151T480 496q-90 0-154.5 61T251 708q-2 12 7.5 20t21.5 8q12 0 21-7.5t11-19.5q9-65 56-109t112-44Zm-58-159q9-8 8.5-20.5T420 356q-10-8-22-7t-22 9q-16 14-33.5 23.5T305 398q-12 5-19.5 15t-5.5 23q2 13 12 20t21 3q30-10 58-25.5t51-36.5Zm116 0q23 21 50 36t57 25q12 4 22.5-2.5T680 436q2-13-6-23t-20-15q-19-7-36.5-17T584 358q-10-8-22-9t-22 7q-10 8-10.5 20.5T538 397Zm-58 579q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialSentimentSadFilled.displayName = 'AmauiIconMaterialSentimentSadFilled';

export default IconMaterialSentimentSadFilled;
