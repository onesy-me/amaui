import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeapSnapshotLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotLargeW100Filled'

      short_name='HeapSnapshotLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M579.88-246q14.12 0 24.12-9.88 10-9.88 10-24T604.12-304q-9.88-10-24-10T556-304.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM378-259l223-223-19-19-223 223 19 19Zm1.88-187q14.12 0 24.12-9.88 10-9.88 10-24T404.12-504q-9.88-10-24-10T356-504.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM212-132v-696h374l162 162v534H212Zm360-520h148L572-800v148Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotLargeW100Filled.displayName = 'OnesyIconMaterialHeapSnapshotLargeW100Filled';

export default IconMaterialHeapSnapshotLargeW100Filled;
