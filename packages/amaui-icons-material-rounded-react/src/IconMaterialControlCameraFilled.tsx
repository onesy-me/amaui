import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialControlCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCameraFilled'

      short_name='ControlCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q-1.25 0-2.125-.875T9 12q0-1.25.875-2.125T12 9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15Zm0 4.15 2.15-2.125q.3-.275.7-.275.4 0 .7.3.275.275.275.7 0 .425-.275.7L12.7 21.3q-.3.3-.7.3-.4 0-.7-.3l-2.85-2.85q-.275-.275-.287-.687-.013-.413.287-.713.275-.275.687-.275.413 0 .713.275ZM4.85 12l2.125 2.15q.275.3.275.7 0 .4-.3.7-.275.275-.7.275-.425 0-.7-.275L2.7 12.7q-.3-.3-.3-.7 0-.4.3-.7l2.85-2.85q.275-.275.688-.288.412-.012.712.288.275.275.275.687 0 .413-.275.713ZM12 4.85 9.85 6.975q-.3.275-.7.275-.4 0-.7-.3-.275-.275-.275-.7 0-.425.275-.7L11.3 2.7q.3-.3.7-.3.4 0 .7.3l2.85 2.85q.275.275.288.687.012.413-.288.713-.275.275-.687.275-.413 0-.713-.275ZM19.15 12l-2.125-2.15q-.275-.3-.275-.7 0-.4.3-.7.275-.275.7-.275.425 0 .7.275l2.85 2.85q.3.3.3.7 0 .4-.3.7l-2.85 2.85q-.275.275-.687.287-.413.013-.713-.287-.275-.275-.275-.687 0-.413.275-.713Z"/>
    </Icon>
  );
});

IconMaterialControlCameraFilled.displayName = 'AmauiIconMaterialControlCameraFilled';

export default IconMaterialControlCameraFilled;
