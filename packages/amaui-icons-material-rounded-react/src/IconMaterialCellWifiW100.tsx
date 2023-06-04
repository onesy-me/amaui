import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCellWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellWifiW100'

      short_name='CellWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.95 20.7q-.5 0-.687-.463-.188-.462.162-.812l9-9.05q.35-.35.813-.15.462.2.462.7v9.025q0 .325-.212.537-.213.213-.538.213ZM18 20h2v-9.2l-2 2ZM7.625 8.825Q7.5 8.7 7.513 8.562q.012-.137.137-.237.8-.575 1.688-.875.887-.3 1.762-.3.85 0 1.725.275.875.275 1.625.825.125.1.138.262.012.163-.113.288-.1.1-.225.112-.125.013-.25-.087-.65-.5-1.412-.738-.763-.237-1.488-.237t-1.525.25q-.8.25-1.475.75-.125.075-.25.075t-.225-.1Zm-2.55-2.6Q4.95 6.1 4.95 5.95q0-.15.125-.25Q6.4 4.575 7.95 4.062 9.5 3.55 11.1 3.55q1.6 0 3.125.512 1.525.513 2.85 1.638.125.1.125.25t-.125.275q-.1.1-.225.1t-.25-.075q-1.2-.95-2.637-1.475-1.438-.525-2.863-.525t-2.875.525Q6.775 5.3 5.55 6.25q-.125.075-.25.075t-.225-.1ZM11.05 12.1q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287t.713.287q.287.288.287.713t-.287.712q-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialCellWifiW100.displayName = 'AmauiIconMaterialCellWifiW100';

export default IconMaterialCellWifiW100;
