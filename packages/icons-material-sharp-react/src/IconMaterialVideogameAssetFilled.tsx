import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideogameAssetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetFilled'

      short_name='VideogameAsset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-480h800v480H80Zm200-120h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm300 0q25 0 42.5-17.5T640-420q0-25-17.5-42.5T580-480q-25 0-42.5 17.5T520-420q0 25 17.5 42.5T580-360Zm120-120q25 0 42.5-17.5T760-540q0-25-17.5-42.5T700-600q-25 0-42.5 17.5T640-540q0 25 17.5 42.5T700-480Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetFilled.displayName = 'OnesyIconMaterialVideogameAssetFilled';

export default IconMaterialVideogameAssetFilled;
