import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartPlus'

      short_name='HeartPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/>
    </Icon>
  );
});

IconMaterialHeartPlus.displayName = 'OnesyIconMaterialHeartPlus';

export default IconMaterialHeartPlus;
