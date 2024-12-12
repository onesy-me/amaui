import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStadium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stadium'

      short_name='Stadium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-712v-96q0-11 9.5-17t19.5-1l95 48q11 5 11 18t-11 18l-95 48q-10 5-19.5-1t-9.5-17Zm600 0v-96q0-11 9.5-17t19.5-1l95 48q11 5 11 18t-11 18l-95 48q-10 5-19.5-1t-9.5-17Zm-280-40v-96q0-11 9.5-17t19.5-1l95 48q11 5 11 18t-11 18l-95 48q-10 5-19.5-1t-9.5-17ZM406-81q-140-8-233-41.5T80-200v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 45-93.5 78T553-81q-14 1-23.5-8.5T520-113v-127h-80v126q0 14-10 24t-24 9Zm74-439q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520ZM360-166v-74q0-33 23.5-56.5T440-320h80q33 0 56.5 23.5T600-240v74q80-8 131-23.5t69-27.5v-271q-55 22-138 35t-182 13q-99 0-182-13t-138-35v271q18 12 69 27.5T360-166Zm120-161Z"/>
    </Icon>
  );
});

IconMaterialStadium.displayName = 'OnesyIconMaterialStadium';

export default IconMaterialStadium;
