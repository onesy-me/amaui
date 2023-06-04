import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentFrustrated = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentFrustrated'

      short_name='SentimentFrustrated'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M391 816q17 0 32.5-6t30.5-14q6-4 12.5-7t13.5-3q8 0 26 10 15 8 30.5 14t32.5 6q50 0 80.5-35.5T680 686q0-72-49.5-111T488 536h-16q-93 0-142.5 39T280 686q0 59 30.5 94.5T391 816Zm-1-60q-24 0-37.5-18.5T339 686q0-46 32.5-68T472 596h15q68 0 100 22t32 68q0 33-13 51.5T569 756q-12 0-34-12-13-8-26.5-13t-28.5-5q-15 0-29 5t-27 13q-8 5-16.5 8.5T390 756ZM251 524q60-24 96-53t68-79l-50-32q-26 41-54.5 63T228 468l23 56Zm457 0 23-56q-53-22-81-44t-55-64l-50 32q32 50 68 78.5t95 53.5ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialSentimentFrustrated.displayName = 'AmauiIconMaterialSentimentFrustrated';

export default IconMaterialSentimentFrustrated;
