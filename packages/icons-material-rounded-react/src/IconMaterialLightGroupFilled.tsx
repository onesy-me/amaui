import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightGroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupFilled'

      short_name='LightGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-17 0-28.5-11.5T120-120q0-17 11.5-28.5T160-160h240q17 0 28.5 11.5T440-120q0 17-11.5 28.5T400-80H160Zm520-40q-33 0-56.5-23.5T600-200H480q-17 0-28.5-11.5T440-240q-2-90 56-156t144-80v-364q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v364q87 14 144.5 80T920-240q0 17-11.5 28.5T880-200H760q0 33-23 56.5T680-120Zm-400-80q-17 0-28.5-11.5T240-240v-280H80q-20 0-31.5-15.5T42-570l75-280q4-13 14.5-21.5T156-880h249q14 0 24.5 8.5T444-850l75 280q5 19-6.5 34.5T481-520H320v280q0 17-11.5 28.5T280-200Z"/>
    </Icon>
  );
});

IconMaterialLightGroupFilled.displayName = 'OnesyIconMaterialLightGroupFilled';

export default IconMaterialLightGroupFilled;
