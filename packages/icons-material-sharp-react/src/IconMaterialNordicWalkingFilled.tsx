import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNordicWalkingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NordicWalkingFilled'

      short_name='NordicWalking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-40 80-360h61L221-40h-61Zm120 0 112-564-72 28v136h-80v-188l202-86q29-12 59-2.5t47 36.5l40 64q26 42 70.5 69T760-520v80q-66 0-123.5-27.5T540-540l-24 120 84 80v300h-80v-240l-84-80-72 320h-84Zm260-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740ZM700-40v-360h60v360h-60Z"/>
    </Icon>
  );
});

IconMaterialNordicWalkingFilled.displayName = 'OnesyIconMaterialNordicWalkingFilled';

export default IconMaterialNordicWalkingFilled;
