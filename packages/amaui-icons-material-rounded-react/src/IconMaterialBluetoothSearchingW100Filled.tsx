import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothSearchingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothSearchingW100Filled'

      short_name='BluetoothSearching'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.25 12.9-.625-.625Q15.5 12.15 15.5 12q0-.15.125-.275l.625-.625q.2-.2.413-.15.212.05.262.325.05.2.063.362Q17 11.8 17 12q0 .2-.012.362-.013.163-.063.363-.05.275-.262.325-.213.05-.413-.15Zm2.175 2.175q-.075-.075-.1-.175-.025-.1.025-.2.3-.65.475-1.313Q19 12.725 19 12t-.175-1.388Q18.65 9.95 18.35 9.3q-.05-.1-.025-.2t.1-.175q.125-.125.287-.113.163.013.263.188.35.7.538 1.45.187.75.187 1.55t-.187 1.55q-.188.75-.538 1.45-.1.175-.263.188-.162.012-.287-.113ZM10.05 12.85l-5 5q-.1.1-.238.112-.137.013-.262-.112t-.125-.25q0-.125.125-.25L9.9 12 4.55 6.65q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l5 5V3.5q0-.2.1-.3.1-.1.25-.1.1 0 .2.05t.175.125l3.9 3.9q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L10.9 12l3.775 3.775q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-3.9 3.9q-.075.075-.175.125-.1.05-.2.05-.15 0-.25-.1t-.1-.3Zm.7-1.7L14.2 7.7l-3.45-3.45Zm0 8.6 3.45-3.45-3.45-3.45Z"/>
    </Icon>
  );
});

IconMaterialBluetoothSearchingW100Filled.displayName = 'AmauiIconMaterialBluetoothSearchingW100Filled';

export default IconMaterialBluetoothSearchingW100Filled;
