import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRingVolumeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeFilled'

      short_name='RingVolume'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.425 20.4-2.3-2.25q-.275-.275-.275-.7 0-.425.275-.7 2.125-2.3 4.95-3.525T12.025 12q3.125 0 5.95 1.238 2.825 1.237 4.95 3.512.275.275.275.7 0 .425-.275.7l-2.3 2.25q-.275.275-.637.3-.363.025-.663-.2l-2.9-2.2q-.2-.15-.3-.35-.1-.2-.1-.45v-2.85q-.975-.325-1.975-.488-1-.162-2.025-.162T10 14.162q-1 .163-1.975.488v2.85q0 .25-.1.45t-.3.35l-2.9 2.2q-.3.225-.663.2-.362-.025-.637-.3ZM12.05 7.05q-.425 0-.712-.288-.288-.287-.288-.712v-3q0-.425.288-.713.287-.287.712-.287t.713.287q.287.288.287.713v3q0 .425-.287.712-.288.288-.713.288Zm4.85 2.1q-.275-.3-.287-.7-.013-.4.287-.7l2.125-2.125q.3-.3.713-.288.412.013.712.313.275.3.288.7.012.4-.288.7l-2.125 2.125q-.3.3-.712.287-.413-.012-.713-.312Zm-11.225.025L3.55 7.05q-.3-.3-.287-.7.012-.4.287-.7.3-.3.713-.313.412-.012.712.288L7.1 7.75q.3.3.288.7-.013.4-.288.7-.3.3-.712.312-.413.013-.713-.287Z"/>
    </Icon>
  );
});

IconMaterialRingVolumeFilled.displayName = 'AmauiIconMaterialRingVolumeFilled';

export default IconMaterialRingVolumeFilled;
