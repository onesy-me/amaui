import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloodFilled'

      short_name='Flood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M347-260q-57 0-77-20t-56-20q-28 0-45 13.5T120-265q-16 4-28-7t-12-28q0-17 12-29.5t27-20.5q17-9 36-19.5t58-10.5q6 0 12 .5t11 1.5l-38-140-31 40q-10 13-26 15.5t-29-8.5q-14-11-15.5-27.5T106-528l248-307q17-20 42-26.5t49 2.5l370 141q15 6 22 21t1 30q-6 16-21.5 22.5t-31.5.5l-46-19 81 301q6 3 11.5 6t10.5 6q15 8 26.5 20.5T880-300q0 17-12 28t-28 7q-32-8-48-21.5T747-300q-38 0-56 20t-77 20q-57 0-77.5-20T480-300q-38 0-56 20t-77 20Zm0 100q38 0 56-20t77-20q57 0 77.5 20t56.5 20q38 0 56-20t77-20q39 0 58 10.5t36 19.5q15 8 27 20.5t12 29.5q0 17-12 28t-28 7q-32-8-48-21.5T747-120q-37 0-56 20t-77 20q-58 0-77.5-20T480-120q-38 0-56 20t-77 20q-59 0-77-20t-56-20q-29 0-45 13.5T121-85q-16 4-28.5-7T80-120q0-17 11.5-29.5T118-170q17-9 36.5-19.5T214-200q59 0 77 20t56 20Zm271-181-51-193q-2-8-9-12t-15-2l-117 31q-8 2-12 9t-2 15l32 117q8-2 16.5-3t19.5-1q57 0 81.5 22t56.5 17Z"/>
    </Icon>
  );
});

IconMaterialFloodFilled.displayName = 'OnesyIconMaterialFloodFilled';

export default IconMaterialFloodFilled;
