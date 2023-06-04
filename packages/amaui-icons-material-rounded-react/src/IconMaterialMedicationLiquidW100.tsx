import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicationLiquidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationLiquidW100'

      short_name='MedicationLiquid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 5.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM9 17q.425 0 .713-.288Q10 16.425 10 16v-1.5h1.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287H10V11q0-.425-.287-.713Q9.425 10 9 10t-.712.287Q8 10.575 8 11v1.5H6.5q-.425 0-.713.287-.287.288-.287.713t.287.712q.288.288.713.288H8V16q0 .425.288.712Q8.575 17 9 17Zm-4.2 2.7q-.625 0-1.063-.438Q3.3 18.825 3.3 18.2V8.8q0-.625.437-1.063Q4.175 7.3 4.8 7.3h8.4q.625 0 1.063.437.437.438.437 1.063v9.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h8.4q.35 0 .575-.225Q14 18.55 14 18.2V8.8q0-.35-.225-.575Q13.55 8 13.2 8H4.8q-.35 0-.575.225Q4 8.45 4 8.8v9.4q0 .35.225.575Q4.45 19 4.8 19Zm14.25.7q-.15 0-.25-.1t-.1-.25v-5.375q-.875-.425-1.438-1.3-.562-.875-.562-2.025 0-1.425.687-2.388.688-.962 1.663-.962.975 0 1.663.962.687.963.687 2.388 0 1.15-.562 2.025-.563.875-1.438 1.3v5.375q0 .15-.1.25t-.25.1Zm0-6.4q.5 0 1.075-.713.575-.712.575-1.937t-.575-1.938Q19.55 8 19.05 8t-1.075.712q-.575.713-.575 1.938t.575 1.937q.575.713 1.075.713ZM9 13.5Zm10.05-2.85Z"/>
    </Icon>
  );
});

IconMaterialMedicationLiquidW100.displayName = 'AmauiIconMaterialMedicationLiquidW100';

export default IconMaterialMedicationLiquidW100;
