import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeapSnapshotMultiple = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotMultiple'

      short_name='HeapSnapshotMultiple'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M450 556q21 0 35.5-14.5T500 506q0-21-14.5-35.5T450 456q-21 0-35.5 14.5T400 506q0 21 14.5 35.5T450 556Zm36 151 166-166q12-12 12-28.5T652 484q-12-12-28.5-12T595 484L428 651q-12 12-11.5 28t12.5 28q12 12 28.5 12t28.5-12Zm144 29q21 0 35.5-14.5T680 686q0-21-14.5-35.5T630 636q-21 0-35.5 14.5T580 686q0 21 14.5 35.5T630 736Zm130 120H320q-33 0-56.5-23.5T240 776V216q0-33 23.5-56.5T320 136h247q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v367q0 33-23.5 56.5T760 856Zm0-440H620q-25 0-42.5-17.5T560 356V216H320v560h440V416Zm-600 600q-33 0-56.5-23.5T80 936V416q0-17 11.5-28.5T120 376q17 0 28.5 11.5T160 416v520h400q17 0 28.5 11.5T600 976q0 17-11.5 28.5T560 1016H160Zm160-800v200-200 560-560Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotMultiple.displayName = 'AmauiIconMaterialHeapSnapshotMultiple';

export default IconMaterialHeapSnapshotMultiple;
