import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpatialAudioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialAudioFilled'

      short_name='SpatialAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M920-559q-72 0-138-27.5T665-665q-51-51-78.5-117T559-920h80q0 57 21 108t61 91q40 40 91 61.5T920-638v79Zm0-159q-41 0-77.5-15T777-777q-29-29-44-65.5T718-920h79q0 25 9.5 47.5T833-833q17 17 39.5 26t47.5 9v80ZM400-440q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H80Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioFilled.displayName = 'OnesyIconMaterialSpatialAudioFilled';

export default IconMaterialSpatialAudioFilled;
