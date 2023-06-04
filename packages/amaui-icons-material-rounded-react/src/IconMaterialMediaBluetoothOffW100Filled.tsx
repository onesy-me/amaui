import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOffW100Filled'

      short_name='MediaBluetoothOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.35 7.5-.7-.7v-.75q0-.625.438-1.063.437-.437 1.062-.437h2q.425 0 .738.312.312.313.312.738t-.312.737q-.313.313-.738.313h-2.8Zm10.3 10.3-6.2-6.15q-.125-.1-.125-.238 0-.137.125-.262t.25-.125q.125 0 .25.125l2.75 2.75V9.5q0-.175.225-.238.225-.062.35.063l2.35 2.35q.125.125.163.25.037.125.037.275 0 .15-.05.275-.05.125-.175.25l-2.05 2.025 2.075 2.025q.125.125.175.25.05.125.05.275 0 .15-.05.287-.05.138-.15.213Zm-2.25-3.9 1.75-1.7-1.75-1.75Zm1.25 6.75-3.5-3.5L15 18.3q-.1.1-.238.113-.137.012-.237-.088-.125-.125-.138-.263-.012-.137.113-.262l1.15-1.15-5.3-5.3v5.4q0 1.175-.8 1.938-.8.762-1.9.762-1.1 0-1.9-.75-.8-.75-.8-1.95 0-1.125.788-1.913.787-.787 1.912-.787.725 0 1.225.275.5.275.775.625v-4.3l-5.9-5.9q-.1-.1-.112-.238-.013-.137.112-.262T4 4.125q.125 0 .25.125l15.9 15.9q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOffW100Filled.displayName = 'AmauiIconMaterialMediaBluetoothOffW100Filled';

export default IconMaterialMediaBluetoothOffW100Filled;
