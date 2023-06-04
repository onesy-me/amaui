import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabResearchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabResearchFilled'

      short_name='LabResearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22q-2.075 0-3.537-1.462Q3 19.075 3 17V8q-.825 0-1.412-.588Q1 6.825 1 6V4q0-.825.588-1.413Q2.175 2 3 2h10q.825 0 1.413.587Q15 3.175 15 4v2q0 .825-.587 1.412Q13.825 8 13 8v3.025q-1.05.675-1.787 1.687-.738 1.013-1.038 2.288H9q-.425 0-.712-.288Q8 14.425 8 14t.288-.713Q8.575 13 9 13h2v-1H9q-.425 0-.712-.288Q8 11.425 8 11t.288-.713Q8.575 10 9 10h2V8H5v9q0 1.25.875 2.125T8 20q.75 0 1.375-.325t1.05-.9q.2.5.45.95.25.45.6.875-.675.65-1.562 1.025Q9.025 22 8 22Zm2.175-4H9q-.425 0-.712-.288Q8 17.425 8 17t.288-.712Q8.575 16 9 16h1.025q-.05.5-.012 1 .037.5.162 1Zm6.325 1q1.05 0 1.775-.725Q19 17.55 19 16.5q0-1.05-.725-1.775Q17.55 14 16.5 14q-1.05 0-1.775.725Q14 15.45 14 16.5q0 1.05.725 1.775Q15.45 19 16.5 19Zm0 2q-1.875 0-3.188-1.312Q12 18.375 12 16.5q0-1.875 1.312-3.188Q14.625 12 16.5 12q1.875 0 3.188 1.312Q21 14.625 21 16.5q0 .65-.175 1.25T20.3 18.9l2 2q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-2-2q-.55.35-1.15.525-.6.175-1.25.175Z"/>
    </Icon>
  );
});

IconMaterialLabResearchFilled.displayName = 'AmauiIconMaterialLabResearchFilled';

export default IconMaterialLabResearchFilled;
