import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlowsheet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flowsheet'

      short_name='Flowsheet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-560v320-480 160Zm400 440q17 0 28.5-11.5T600-160q0-17-11.5-28.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120Zm240-400q17 0 28.5-11.5T840-560q0-17-11.5-28.5T800-600q-17 0-28.5 11.5T760-560q0 17 11.5 28.5T800-520Zm-400 0q17 0 28.5-11.5T440-560q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520h120Zm0 160q17 0 28.5-11.5T440-400q0-17-11.5-28.5T400-440H280q-17 0-28.5 11.5T240-400q0 17 11.5 28.5T280-360h120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h680q17 0 28.5 11.5T880-760q0 17-11.5 28.5T840-720H160v480h160q17 0 28.5 11.5T360-200q0 17-11.5 28.5T320-160H160ZM560-40q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87q0-17 11.5-28.5T560-400h200v-47q-35-12-57.5-43T680-560q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T840-447v87q0 17-11.5 28.5T800-320H600v47q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialFlowsheet.displayName = 'OnesyIconMaterialFlowsheet';

export default IconMaterialFlowsheet;
