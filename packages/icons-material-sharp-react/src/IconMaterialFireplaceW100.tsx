import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireplaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireplaceW100'

      short_name='Fireplace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-230q13 11 27.5 15.5T480-210q29 0 52.5-18.5T560-282q5-47-29-69.5T480-410q-5 14-5 26t3 26q3 17 7 32t1 32q-5 18-22 37t-40 27Zm-292 98v-696h696v696H132Zm348-56q50 0 85-35t35-85q0-26-10-42t-28-28q-38-27-63.5-56.5T458-494q-44 35-71 79.5T360-310q0 35 36 78.5t84 43.5Zm-320 28h116v-28h128q-32-21-52-55.5T332-310q0-40 11-73.5t30-62q19-28.5 45-52t56-42.5q12 42 37.5 75.5T582-398q23 18 34.5 41t11.5 49q0 32-14.5 64T566-188h118v28h116v-640H160v640Zm320-28Z"/>
    </Icon>
  );
});

IconMaterialFireplaceW100.displayName = 'OnesyIconMaterialFireplaceW100';

export default IconMaterialFireplaceW100;
