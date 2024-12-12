import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPizzaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPizzaFilled'

      short_name='LocalPizza'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 80-680q85-72 186.5-116T480-840q112 0 213.5 43.5T880-680L480-80ZM380-560q25 0 42.5-17.5T440-620q0-25-17.5-42.5T380-680q-25 0-42.5 17.5T320-620q0 25 17.5 42.5T380-560Zm100 200q25 0 42.5-17.5T540-420q0-25-17.5-42.5T480-480q-25 0-42.5 17.5T420-420q0 25 17.5 42.5T480-360Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaFilled.displayName = 'OnesyIconMaterialLocalPizzaFilled';

export default IconMaterialLocalPizzaFilled;
