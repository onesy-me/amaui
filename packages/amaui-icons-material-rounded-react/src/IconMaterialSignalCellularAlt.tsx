import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt'

      short_name='SignalCellularAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.5 20q-.625 0-1.062-.438Q17 19.125 17 18.5v-13q0-.625.438-1.062Q17.875 4 18.5 4t1.062.438Q20 4.875 20 5.5v13q0 .625-.438 1.062Q19.125 20 18.5 20Zm-12 0q-.3 0-.575-.113-.275-.112-.487-.325-.213-.212-.325-.487Q5 18.8 5 18.5v-3q0-.625.438-1.062Q5.875 14 6.5 14t1.062.438Q8 14.875 8 15.5v3q0 .3-.112.575-.113.275-.326.487-.212.213-.487.325Q6.8 20 6.5 20Zm6 0q-.625 0-1.062-.438Q11 19.125 11 18.5v-8q0-.625.438-1.062Q11.875 9 12.5 9t1.062.438Q14 9.875 14 10.5v8q0 .625-.438 1.062Q13.125 20 12.5 20Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt.displayName = 'AmauiIconMaterialSignalCellularAlt';

export default IconMaterialSignalCellularAlt;
