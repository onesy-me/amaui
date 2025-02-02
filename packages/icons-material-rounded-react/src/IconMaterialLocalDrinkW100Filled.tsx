import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalDrinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkW100Filled'

      short_name='LocalDrink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M305-132q-23.25 0-40.12-15Q248-162 245-185l-69-606q-2-15 8.34-26T210-828h540q15.32 0 25.66 11t8.34 26l-68 606q-3 23-19.87 38-16.88 15-40.13 15H305Zm-82-488h515l18-180H203l20 180Zm256.96 374q37.04 0 62.54-25.42Q568-296.83 568-333.8q0-36.2-22-70.7t-42.31-62.26q-4.36-6.53-10.52-9.38Q487-479 480-479t-13.17 2.86q-6.16 2.85-10.52 9.38Q436-439 414-404.5q-22 34.5-22 70.7 0 36.97 25.46 62.38Q442.93-246 479.96-246Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkW100Filled.displayName = 'OnesyIconMaterialLocalDrinkW100Filled';

export default IconMaterialLocalDrinkW100Filled;
