import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeapSnapshotLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotLarge'

      short_name='HeapSnapshotLarge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M580 836q25 0 42.5-17.5T640 776q0-25-17.5-42.5T580 716q-25 0-42.5 17.5T520 776q0 25 17.5 42.5T580 836Zm-230-30q11 11 28 11t28-11l204-204q11-11 11-28t-11-28q-11-11-28-11t-28 11L350 750q-11 11-11 28t11 28Zm30-170q25 0 42.5-17.5T440 576q0-25-17.5-42.5T380 516q-25 0-42.5 17.5T320 576q0 25 17.5 42.5T380 636ZM240 976q-33 0-56.5-23.5T160 896V256q0-33 23.5-56.5T240 176h320l240 240v480q0 33-23.5 56.5T720 976H240Zm280-600V256H240v640h480V456H600q-33 0-56.5-23.5T520 376ZM240 256v200-200 640-640Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotLarge.displayName = 'AmauiIconMaterialHeapSnapshotLarge';

export default IconMaterialHeapSnapshotLarge;
