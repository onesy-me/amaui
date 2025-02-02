import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloodW100'

      short_name='Flood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-159v-29q32-8 47.5-22.5T214-225q50 0 70 20t63 20q43 0 63-20t70-20q49 0 70.5 20t63.5 20q43 0 63-20t70-20q45 0 60 14.5t47 22.5v29q-32-6-51-22t-56-16q-42 0-63 20t-70 20q-49 0-70.5-20T480-197q-43 0-63 20t-70 20q-50 0-70-20t-63-20q-37 0-56 16t-52 22Zm241-127q-48 0-69.5-20T214-326q-35 0-55.5 16T106-288v-29q32-8 47.5-22.5T214-354q21 0 39 5.5t50 24.5l-64-242-63 78-22-17 253-313 376 144-10 26-93-36 88 331q23 1 43 15.5t43 20.5v28q-32-6-51-21.5T747-326q-43 0-63 20t-70 20q-49 0-70.5-20T480-326q-43 0-63 20t-70 20Zm0-28q35 0 53.5-14.5T451-351l-44-161 155-41 63 238q35-3 53-20t60-19l-91-342-231-88-155 191 74 278q4 1 7 1h5Zm153-235Z"/>
    </Icon>
  );
});

IconMaterialFloodW100.displayName = 'OnesyIconMaterialFloodW100';

export default IconMaterialFloodW100;
