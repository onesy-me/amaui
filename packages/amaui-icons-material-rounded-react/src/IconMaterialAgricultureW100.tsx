import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAgricultureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AgricultureW100'

      short_name='Agriculture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.6 9.35q-.15 0-.25-.1T3.25 9q0-.15.1-.25t.25-.1h3.15q.375 0 .688.2.312.2.512.5Zm2.05 8.95q1.375 0 2.338-.963.962-.962.962-2.337 0-1.375-.962-2.338-.963-.962-2.338-.962t-2.338.962Q2.35 13.625 2.35 15t.962 2.337q.963.963 2.338.963Zm13.85 0q.875 0 1.513-.637.637-.638.637-1.513 0-.875-.637-1.513Q20.375 14 19.5 14q-.875 0-1.512.637-.638.638-.638 1.513 0 .875.638 1.513.637.637 1.512.637ZM5.65 16q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q5.225 14 5.65 14t.713.287q.287.288.287.713t-.287.712Q6.075 16 5.65 16Zm14.3-2.675.35.087q.15.038.35.138V8.5q0-.625-.437-1.062Q19.775 7 19.15 7h-4.8L13.3 5.9l1.05-1.05q.15-.15.15-.35 0-.2-.15-.35Q14.2 4 14 4q-.2 0-.35.15l-2.825 2.825q-.15.15-.15.363 0 .212.175.362.15.15.35.15.2 0 .35-.15l1.05-1.05 1.05 1.05V9q0 1.225-.875 2.113Q11.9 12 10.65 12H8.3q.2.2.325.35.125.15.3.35h1.725q1.55 0 2.625-1.075T14.35 9V7.7h4.8q.35 0 .575.225.225.225.225.575Zm-3.2 2.025q.075-.2.137-.35.063-.15.188-.35h-7.45q.025.2.025.35 0 .15-.025.35ZM19.5 19q-1.2 0-2.025-.825t-.825-2.025q0-1.2.825-2.025T19.5 13.3q1.2 0 2.025.825t.825 2.025q0 1.2-.825 2.025T19.5 19ZM5.65 19Q4 19 2.825 17.825 1.65 16.65 1.65 15q0-1.65 1.175-2.825Q4 11 5.65 11q1.65 0 2.825 1.175Q9.65 13.35 9.65 15q0 1.65-1.175 2.825Q7.3 19 5.65 19Zm9.2-7.825Z"/>
    </Icon>
  );
});

IconMaterialAgricultureW100.displayName = 'AmauiIconMaterialAgricultureW100';

export default IconMaterialAgricultureW100;
