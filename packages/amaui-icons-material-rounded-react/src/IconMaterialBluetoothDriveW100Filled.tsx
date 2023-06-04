import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothDriveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDriveW100Filled'

      short_name='BluetoothDrive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.85 15.6q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm9.2 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm3.475-5.125q-.125-.05-.2-.175-.075-.125-.075-.25v-3.2l-2.2 2.2q-.1.1-.238.112-.137.013-.262-.112t-.125-.25q0-.125.125-.25L18.1 6l-2.55-2.55q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2.2 2.2v-3.2q0-.125.075-.25t.2-.175q.125-.05.25-.038.125.013.225.113l1.975 1.975q.125.125.125.275 0 .15-.125.275L19.1 6l1.875 1.875q.125.125.125.275 0 .15-.125.275L19 10.4q-.1.1-.225.112-.125.013-.25-.037Zm.425-5.325 1.3-1.3-1.3-1.3Zm0 4.3 1.3-1.3-1.3-1.3ZM3.1 19.7q-.15 0-.25-.1t-.1-.25V12.2L4.7 6.65q.05-.175.2-.263.15-.087.35-.087h9.2V7h-9.1l-1.6 4.5h10.7q0 .275.213.487.212.213.487.213h3v7.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V17.7h-14v1.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDriveW100Filled.displayName = 'AmauiIconMaterialBluetoothDriveW100Filled';

export default IconMaterialBluetoothDriveW100Filled;
