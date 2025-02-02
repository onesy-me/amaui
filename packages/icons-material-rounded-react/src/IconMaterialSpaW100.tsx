import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaW100'

      short_name='Spa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-139q-55-11-111-36.5t-100.5-71Q210-292 182-358.5T154-518v-6q0-10 6-16t16-6h4q39 0 97.5 22t96.5 52q3-65 26-136.5T461-736q8-11 19-11t19 11q38 56 61 128.5T586-470q35-27 91.5-50T778-546l8-1q9-1 15.5 5.5T807-526l-1 10q-7 67-24.5 124t-50 103.5Q699-242 649-206t-121 62q-13 5-31 6t-31-1Zm32-23q-11-165-99.5-250.5T182-518q-2 0 0 0 11 169 102.5 254T498-162q2 1 0 .5t0-.5Zm-96-288q23 19 43.5 47.5T480-348q13-26 34-54.5t44-47.5q0-62-20.5-131T480-712v.5-.5q-37 62-57.5 130.5T402-450Zm92 138q12 32 19.5 63t12.5 75q49-17 93-44.5t77.5-69q33.5-41.5 55.5-98T778-518q0-2 0 0-98 14-175 70T494-312Z"/>
    </Icon>
  );
});

IconMaterialSpaW100.displayName = 'OnesyIconMaterialSpaW100';

export default IconMaterialSpaW100;
