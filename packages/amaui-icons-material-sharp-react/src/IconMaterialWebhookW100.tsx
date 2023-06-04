import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebhookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebhookW100'

      short_name='Webhook'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20.35q-1.8 0-3.075-1.275Q2.65 17.8 2.65 16q0-1.375.75-2.463.75-1.087 1.95-1.562v.775q-.875.45-1.437 1.325Q3.35 14.95 3.35 16q0 1.5 1.075 2.575Q5.5 19.65 7 19.65q1.5 0 2.575-1.075Q10.65 17.5 10.65 16v-.35h5.25q.125-.35.425-.575.3-.225.675-.225.475 0 .812.338.338.337.338.812 0 .475-.338.812-.337.338-.812.338-.4 0-.688-.212-.287-.213-.412-.588h-4.55q-.2 1.875-1.487 2.938Q8.575 20.35 7 20.35Zm0-3.2q-.475 0-.812-.338-.338-.337-.338-.812 0-.5.388-.875.387-.375 1.037-.25L9.9 10.5q-.875-.65-1.312-1.562Q8.15 8.025 8.15 7q0-1.8 1.275-3.075Q10.7 2.65 12.5 2.65q1.8 0 3.075 1.275Q16.85 5.2 16.85 7h-.7q0-1.5-1.075-2.575Q14 3.35 12.5 3.35q-1.5 0-2.575 1.075Q8.85 5.5 8.85 7q0 1.05.525 1.887.525.838 1.475 1.388L7.875 15.25q.125.15.2.35.075.2.075.4 0 .475-.338.812-.337.338-.812.338Zm10 3.2q-.95 0-1.787-.388-.838-.387-1.513-1.112h1.025q.425.35 1.025.575.6.225 1.25.225 1.5 0 2.575-1.075Q20.65 17.5 20.65 16q0-1.5-1.075-2.575Q18.5 12.35 17 12.35q-.425 0-.788.088-.362.087-.712.237l-2.725-4.55q-.525.125-.975-.213-.45-.337-.45-.912 0-.475.338-.813.337-.337.812-.337.475 0 .812.337.338.338.338.813 0 .2-.075.4t-.2.325L15.8 11.8q.275-.05.563-.1.287-.05.637-.05 1.8 0 3.075 1.275Q21.35 14.2 21.35 16q0 1.8-1.275 3.075Q18.8 20.35 17 20.35Z"/>
    </Icon>
  );
});

IconMaterialWebhookW100.displayName = 'AmauiIconMaterialWebhookW100';

export default IconMaterialWebhookW100;
