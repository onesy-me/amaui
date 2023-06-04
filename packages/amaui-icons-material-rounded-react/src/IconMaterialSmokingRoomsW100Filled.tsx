import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmokingRoomsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokingRoomsW100Filled'

      short_name='SmokingRooms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.1 17.9v-1.4h.7v1.4Zm-13.9 0q-.3 0-.5-.2t-.2-.5q0-.275.213-.488.212-.212.487-.212h12.9v1.4ZM18.45 15q-.15 0-.25-.1t-.1-.25v-.95q0-.875-.575-1.463-.575-.587-1.375-.587H14.6q-1.05 0-1.8-.775T12.05 9q0-.925.625-1.613.625-.687 1.575-.812.125-.025.238.075.112.1.112.25 0 .125-.1.237-.1.113-.25.138-.65.125-1.075.6Q12.75 8.35 12.75 9q0 .75.55 1.35.55.6 1.3.6h1.55q1.1 0 1.875.812.775.813.775 1.938v.95q0 .15-.1.25t-.25.1Zm1.35 2.9v-1.4h.7v1.4Zm.35-2.9q-.15 0-.25-.1t-.1-.25v-1.9q0-1.575-1.037-2.55-1.038-.975-2.613-1.1-.15-.025-.25-.113-.1-.087-.1-.237 0-.125.1-.225t.25-.15q.625-.125 1.038-.625.412-.5.412-1.15 0-.7-.412-1.225-.413-.525-1.038-.65-.15-.05-.25-.15-.1-.1-.1-.225 0-.15.113-.25.112-.1.237-.075.925.125 1.538.875.612.75.612 1.7 0 .725-.3 1.225-.3.5-.75.775 1.275.35 2.263 1.4.987 1.05.987 2.75v1.9q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialSmokingRoomsW100Filled.displayName = 'AmauiIconMaterialSmokingRoomsW100Filled';

export default IconMaterialSmokingRoomsW100Filled;
