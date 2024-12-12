import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrunchDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDiningW100'

      short_name='BrunchDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-28h480v28H132Zm0-128v-28h160v-36h160v36h160v28H132Zm608 128v-250q-26-21-45-55.5T676-514v-314h152v314q0 42-17 76.5T768-382v222h60v28h-88Zm-36-488h96v-180h-96v180Zm50 210q18-12 32-41.5t14-62.5v-78h-96v78q0 33 16 62.5t34 41.5Zm-2 0Z"/>
    </Icon>
  );
});

IconMaterialBrunchDiningW100.displayName = 'OnesyIconMaterialBrunchDiningW100';

export default IconMaterialBrunchDiningW100;
