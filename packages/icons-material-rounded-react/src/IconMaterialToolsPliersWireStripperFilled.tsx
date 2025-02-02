import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsPliersWireStripperFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPliersWireStripperFilled'

      short_name='ToolsPliersWireStripper'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-20-40-30-98t-10-118q0-99 22-163.5T320-520v-200l120-200h20v206q-10 5-15 14t-5 20q0 17 11.5 28.5T480-640q17 0 28.5-11.5T520-680q0-11-5-20t-15-14v-206h20l120 200v200q37 36 58.5 100.5T720-256q0 60-10 118t-30 98q-42-13-67-47.5T589-166q0-25 5.5-54t5.5-58q0-58-31.5-122T480-520q-56 56-88 120t-32 122q0 29 6 58t7 54q0 44-25.5 79T280-40Z"/>
    </Icon>
  );
});

IconMaterialToolsPliersWireStripperFilled.displayName = 'OnesyIconMaterialToolsPliersWireStripperFilled';

export default IconMaterialToolsPliersWireStripperFilled;
