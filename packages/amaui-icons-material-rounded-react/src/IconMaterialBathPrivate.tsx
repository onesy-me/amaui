import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBathPrivate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathPrivate'

      short_name='BathPrivate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M770 476q-29 0-49.5-21T700 405q0-29 20.5-49.5T770 335q29 0 49.5 20.5T840 405q0 29-20.5 50T770 476Zm-580 0q-29 0-49.5-21T120 405q0-29 20.5-49.5T190 335q29 0 49.5 20.5T260 405q0 29-20.5 50T190 476Zm173-60q-12 0-19-9.5t-6-21.5q2-23-5-43t-23-39q-27-32-38-64.5t-8-70.5q2-14 11.5-23t23.5-9q12 0 20 9.5t7 22.5q-2 29 5 52t24 44q26 31 36.5 59.5T400 384q-1 14-12 23t-25 9Zm120 0q-12 0-19-9.5t-6-21.5q2-23-5-43t-23-39q-27-32-38-64.5t-8-70.5q2-14 12-23t24-9q12 0 19.5 10t6.5 23q-2 30 5 52.5t24 42.5q26 31 36.5 59.5T520 384q-1 14-12 23t-25 9Zm120 0q-12 0-19-9.5t-6-21.5q2-23-5-43t-23-39q-27-32-38-64.5t-8-70.5q2-14 12-23t24-9q12 0 19.5 10t6.5 23q-2 30 5 52.5t24 42.5q26 31 36.5 59.5T640 384q-1 14-12 23t-25 9ZM160 976q-33 0-56.5-23.5T80 896V656q0-17 11.5-28.5T120 616v-25q0-31 21.5-53t52.5-22q16 0 30.5 7.5T250 542l45 51q6 6 12.5 12t13.5 11h318q8-5 14-11l12-12 45-51q11-11 25.5-18.5T766 516q31 0 52.5 22t21.5 53v25q17 0 28.5 11.5T880 656v240q0 33-23.5 56.5T800 976H160Zm0-200h640v-80H160v80Zm0 120h640v-40H160v40Zm320-120Zm0 80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialBathPrivate.displayName = 'AmauiIconMaterialBathPrivate';

export default IconMaterialBathPrivate;
