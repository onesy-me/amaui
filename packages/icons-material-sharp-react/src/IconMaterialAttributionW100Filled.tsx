import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttributionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttributionW100Filled'

      short_name='Attribution'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-248h68v-160h50v-188H396v188h50v160Zm33.68 116q-71.68 0-135.04-27.34-63.36-27.34-110.66-74.64t-74.64-110.66Q132-408 132-479.68q0-72.56 27.5-135.94Q187-679 234-726q47-47 110.61-74.5T479.68-828q72.32 0 135.82 27.5T726-726q47 47 74.5 110.38Q828-552.24 828-479.68q0 71.68-27.5 135.18T726-234q-47 47-110.38 74.5Q552.24-132 479.68-132Zm.32-492q18 0 31-13t13-31q0-18-13-31t-31-13q-18 0-31 13t-13 31q0 18 13 31t31 13Z"/>
    </Icon>
  );
});

IconMaterialAttributionW100Filled.displayName = 'OnesyIconMaterialAttributionW100Filled';

export default IconMaterialAttributionW100Filled;
