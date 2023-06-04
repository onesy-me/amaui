import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroups = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups'

      short_name='Groups'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 18q-.425 0-.712-.288Q0 17.425 0 17v-.575q0-1.1 1.1-1.763Q2.2 14 4 14q.325 0 .613.025.287.025.562.075-.35.5-.513 1.075Q4.5 15.75 4.5 16.4V18Zm6 0q-.425 0-.713-.288Q6 17.425 6 17v-.6q0-1.625 1.663-2.638Q9.325 12.75 12 12.75q2.7 0 4.35 1.012Q18 14.775 18 16.4v.6q0 .425-.288.712Q17.425 18 17 18Zm12.5 0v-1.6q0-.65-.175-1.225-.175-.575-.5-1.075.275-.05.563-.075Q19.675 14 20 14q1.8 0 2.9.662 1.1.663 1.1 1.763V17q0 .425-.288.712Q23.425 18 23 18ZM12 14.75q-1.425 0-2.55.387-1.125.388-1.325.863h7.75q-.225-.5-1.337-.875-1.113-.375-2.538-.375ZM4 13q-.825 0-1.412-.588Q2 11.825 2 11t.588-1.413Q3.175 9 4 9t1.412.587Q6 10.175 6 11q0 .825-.588 1.412Q4.825 13 4 13Zm16 0q-.825 0-1.413-.588Q18 11.825 18 11t.587-1.413Q19.175 9 20 9q.825 0 1.413.587Q22 10.175 22 11q0 .825-.587 1.412Q20.825 13 20 13Zm-8-1q-1.25 0-2.125-.875T9 9q0-1.25.875-2.125T12 6q1.25 0 2.125.875T15 9q0 1.25-.875 2.125T12 12Zm0-4q-.425 0-.712.287Q11 8.575 11 9t.288.712Q11.575 10 12 10t.713-.288Q13 9.425 13 9t-.287-.713Q12.425 8 12 8Zm0 8Zm0-7ZM1 18q-.425 0-.712-.288Q0 17.425 0 17v-.575q0-1.1 1.1-1.763Q2.2 14 4 14q.325 0 .613.025.287.025.562.075-.35.5-.513 1.075Q4.5 15.75 4.5 16.4V18Zm6 0q-.425 0-.713-.288Q6 17.425 6 17v-.6q0-1.625 1.663-2.638Q9.325 12.75 12 12.75q2.7 0 4.35 1.012Q18 14.775 18 16.4v.6q0 .425-.288.712Q17.425 18 17 18Zm12.5 0v-1.6q0-.65-.175-1.225-.175-.575-.5-1.075.275-.05.563-.075Q19.675 14 20 14q1.8 0 2.9.662 1.1.663 1.1 1.763V17q0 .425-.288.712Q23.425 18 23 18ZM12 14.75q-1.425 0-2.55.387-1.125.388-1.325.863h7.75q-.225-.5-1.337-.875-1.113-.375-2.538-.375ZM4 13q-.825 0-1.412-.588Q2 11.825 2 11t.588-1.413Q3.175 9 4 9t1.412.587Q6 10.175 6 11q0 .825-.588 1.412Q4.825 13 4 13Zm16 0q-.825 0-1.413-.588Q18 11.825 18 11t.587-1.413Q19.175 9 20 9q.825 0 1.413.587Q22 10.175 22 11q0 .825-.587 1.412Q20.825 13 20 13Zm-8-1q-1.25 0-2.125-.875T9 9q0-1.25.875-2.125T12 6q1.25 0 2.125.875T15 9q0 1.25-.875 2.125T12 12Zm0-4q-.425 0-.712.287Q11 8.575 11 9t.288.712Q11.575 10 12 10t.713-.288Q13 9.425 13 9t-.287-.713Q12.425 8 12 8Zm0 8Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialGroups.displayName = 'AmauiIconMaterialGroups';

export default IconMaterialGroups;
