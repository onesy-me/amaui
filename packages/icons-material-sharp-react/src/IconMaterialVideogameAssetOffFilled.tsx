import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideogameAssetOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetOffFilled'

      short_name='VideogameAssetOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-481h159l361 361H486L55-791l57-57 736 736-57 57-185-185H80Zm274-480h526v475h-51L354-720Zm346 120q-25 0-42.5 17.5T640-540q0 25 17.5 42.5T700-480q25 0 42.5-17.5T760-540q0-25-17.5-42.5T700-600ZM280-360h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetOffFilled.displayName = 'OnesyIconMaterialVideogameAssetOffFilled';

export default IconMaterialVideogameAssetOffFilled;
