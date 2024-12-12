import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlobeAsia = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeAsia'

      short_name='GlobeAsia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M472-159q-33 0-56.5-24T392-240q0-33 23.5-56.5T472-320l24-23q8-8 18.5-12.5T536-360q23 0 39.5 17t16.5 40v17q0 20 13 33t33 13q15 0 27-9t17-23l12-33q9-24 29-39.5t46-15.5q11-28 17.5-58t6.5-62q0-89-44.5-162.5T632-758v38q0 33-23.5 56.5T552-640h-40v80q0 17-11.5 28.5T472-520h-40v68q0 22-15 37t-37 15q-14 0-25.5-6T336-423l-64-97h-40v40q0 31-21 53t-50 26q26 104 112.5 173T472-159Zm80-241q-17 0-28.5-11.5T512-440q0-17 11.5-28.5T552-480h40q17 0 28.5 11.5T632-440q0 17-11.5 28.5T592-400h-40Zm93-120q-20 0-31.5-15.5T608-570l15-44q4-12 14-19t22-7q20 0 31.5 15.5T696-590l-15 44q-4 12-14 19t-22 7ZM472-80q-83 0-156-31.5T189-197q-54-54-85.5-127T72-480q0-83 31.5-156T189-763q54-54 127-85.5T472-880q83 0 156 31.5T755-763q54 54 85.5 127T872-480q0 83-31.5 156T755-197q-54 54-127 85.5T472-80Z"/>
    </Icon>
  );
});

IconMaterialGlobeAsia.displayName = 'OnesyIconMaterialGlobeAsia';

export default IconMaterialGlobeAsia;
