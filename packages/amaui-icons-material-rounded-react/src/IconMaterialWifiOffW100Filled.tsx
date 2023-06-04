import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiOffW100Filled'

      short_name='WifiOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.25q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm9.55-9.5q-1.9-1.775-4.337-2.763Q14.775 7 12 7q-.525 0-1.05.037-.525.038-.95.113l-.9-.9q.525-.125 1.225-.188Q11.025 6 12 6q3 0 5.613 1.062 2.612 1.063 4.637 2.988.15.125.15.337 0 .213-.15.363t-.35.137q-.2-.012-.35-.137Zm-3.65 4.3-.338-.338-.337-.337L15.6 12.75q.425.175 1.075.55.65.375 1.3.95.15.125.163.337.012.213-.138.363l-.05.05-.05.05Zm1.8 5.7L12 13q-1.5 0-2.887.525Q7.725 14.05 6.7 15q-.15.125-.35.137-.2.013-.35-.137-.15-.15-.15-.35 0-.2.15-.325 1-.9 2.312-1.538 1.313-.637 2.738-.737l-4.1-4.1q-1.075.375-2.288 1.137-1.212.763-2.212 1.688-.15.125-.35.125-.2 0-.325-.15t-.125-.35q0-.2.15-.325 1.025-.95 2.163-1.725Q5.1 7.575 6.15 7.15l-2.1-2.1q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l15.675 15.675q.125.125.125.263 0 .137-.125.262t-.262.125q-.138 0-.263-.125Z"/>
    </Icon>
  );
});

IconMaterialWifiOffW100Filled.displayName = 'AmauiIconMaterialWifiOffW100Filled';

export default IconMaterialWifiOffW100Filled;
