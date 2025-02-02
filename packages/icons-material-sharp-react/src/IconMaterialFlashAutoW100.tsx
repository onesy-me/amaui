import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoW100'

      short_name='FlashAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-336 170-247H311l63-217H180v320h100v144Zm-28 92v-208H152v-376h259l-63 217h155L252-244Zm28-236H180h100Zm302-40 142-360h14l144 360h-32l-44-108H656l-44 108h-30Zm84-134h130l-64-164h-4l-62 164Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoW100.displayName = 'OnesyIconMaterialFlashAutoW100';

export default IconMaterialFlashAutoW100;
