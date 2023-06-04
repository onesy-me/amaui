import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraswitchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraswitchW100Filled'

      short_name='Cameraswitch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.8 15.7q-.625 0-1.062-.438Q7.3 14.825 7.3 14.2V9.8q0-.625.438-1.063Q8.175 8.3 8.8 8.3h.7l1-1h3l1 1h.7q.625 0 1.062.437.438.438.438 1.063v4.4q0 .625-.438 1.062-.437.438-1.062.438Zm3.2-2.45q.525 0 .887-.363.363-.362.363-.887t-.363-.887q-.362-.363-.887-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363ZM22.325 11q-.125 0-.225-.088-.1-.087-.125-.212-.5-3.75-3.35-6.225Q15.775 2 11.95 2l1.8 1.8q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-2.2-2.2q-.3-.3-.212-.538.087-.237.512-.262h.6q4.1 0 7.125 2.65Q22.1 6.6 22.65 10.625q.025.15-.063.262-.087.113-.262.113ZM12.05 22.7q-4.1 0-7.125-2.65Q1.9 17.4 1.35 13.375q-.025-.15.063-.262Q1.5 13 1.675 13q.125 0 .225.087.1.088.125.213.5 3.75 3.35 6.225Q8.225 22 12.05 22l-1.8-1.8q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2.2 2.2q.3.3.213.538-.088.237-.513.262h-.6Z"/>
    </Icon>
  );
});

IconMaterialCameraswitchW100Filled.displayName = 'AmauiIconMaterialCameraswitchW100Filled';

export default IconMaterialCameraswitchW100Filled;
