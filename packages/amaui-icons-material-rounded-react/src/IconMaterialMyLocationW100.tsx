import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMyLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MyLocationW100'

      short_name='MyLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-.15 0-.25-.1t-.1-.25v-.95q-3.125-.275-5.1-2.25-1.975-1.975-2.25-5.1h-.95q-.15 0-.25-.1T3 12q0-.15.1-.25t.25-.1h.95q.275-3.125 2.25-5.1 1.975-1.975 5.1-2.25v-.95q0-.15.1-.25T12 3q.15 0 .25.1t.1.25v.95q3.125.275 5.1 2.25 1.975 1.975 2.25 5.1h.95q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.95q-.275 3.125-2.25 5.1-1.975 1.975-5.1 2.25v.95q0 .15-.1.25T12 21Zm0-2q2.9 0 4.95-2.05Q19 14.9 19 12q0-2.9-2.05-4.95Q14.9 5 12 5 9.1 5 7.05 7.05 5 9.1 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm0-4.3q-1.125 0-1.912-.788Q9.3 13.125 9.3 12t.788-1.913Q10.875 9.3 12 9.3t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Zm0-.7q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialMyLocationW100.displayName = 'AmauiIconMaterialMyLocationW100';

export default IconMaterialMyLocationW100;
