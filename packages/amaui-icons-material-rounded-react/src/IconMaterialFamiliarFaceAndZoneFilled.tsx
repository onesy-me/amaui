import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamiliarFaceAndZoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamiliarFaceAndZoneFilled'

      short_name='FamiliarFaceAndZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-3.35 0-5.675-2.325Q4 15.35 4 12q0-3.35 2.325-5.675Q8.65 4 12 4q3.35 0 5.675 2.325Q20 8.65 20 12q0 3.35-2.325 5.675Q15.35 20 12 20Zm0-2q2.5 0 4.25-1.75T18 12q0-.425-.062-.838-.063-.412-.188-.812-.375.075-.75.112-.375.038-.75.038-1.575 0-3-.6T10.7 8.15q-.7 1.425-1.925 2.475T6 12.15q.075 2.45 1.812 4.15Q9.55 18 12 18Zm-2.5-4q-.425 0-.712-.288Q8.5 13.425 8.5 13t.288-.713Q9.075 12 9.5 12t.713.287q.287.288.287.713t-.287.712Q9.925 14 9.5 14Zm5 0q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q14.075 12 14.5 12t.713.287q.287.288.287.713t-.287.712Q14.925 14 14.5 14ZM5 3H3v2q0 .425-.287.713Q2.425 6 2 6t-.712-.287Q1 5.425 1 5V3q0-.825.588-1.413Q2.175 1 3 1h2q.425 0 .713.287Q6 1.575 6 2t-.287.712Q5.425 3 5 3ZM3 23q-.825 0-1.412-.587Q1 21.825 1 21v-2q0-.425.288-.712Q1.575 18 2 18t.713.288Q3 18.575 3 19v2h2q.425 0 .713.288Q6 21.575 6 22t-.287.712Q5.425 23 5 23Zm18 0h-2q-.425 0-.712-.288Q18 22.425 18 22t.288-.712Q18.575 21 19 21h2v-2q0-.425.288-.712Q21.575 18 22 18t.712.288Q23 18.575 23 19v2q0 .825-.587 1.413Q21.825 23 21 23ZM19 3q-.425 0-.712-.288Q18 2.425 18 2t.288-.713Q18.575 1 19 1h2q.825 0 1.413.587Q23 2.175 23 3v2q0 .425-.288.713Q22.425 6 22 6t-.712-.287Q21 5.425 21 5V3Z"/>
    </Icon>
  );
});

IconMaterialFamiliarFaceAndZoneFilled.displayName = 'AmauiIconMaterialFamiliarFaceAndZoneFilled';

export default IconMaterialFamiliarFaceAndZoneFilled;
