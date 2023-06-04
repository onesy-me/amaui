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
      <path d="M580 836q25 0 42.5-17.5T640 776q0-25-17.5-42.5T580 716q-25 0-42.5 17.5T520 776q0 25 17.5 42.5T580 836Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440 576q0-25-17.5-42.5T380 516q-25 0-42.5 17.5T320 576q0 25 17.5 42.5T380 636ZM160 976V176h400l240 240v560H160Zm360-520V256H240v640h480V456H520ZM240 256v200-200 640-640Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotLarge.displayName = 'AmauiIconMaterialHeapSnapshotLarge';

export default IconMaterialHeapSnapshotLarge;
