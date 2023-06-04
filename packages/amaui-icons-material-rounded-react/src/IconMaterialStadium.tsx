import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStadium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stadium'

      short_name='Stadium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.725 6.65q-.25.125-.488-.025Q3 6.475 3 6.2V3.8q0-.275.237-.425.238-.15.488-.025L6.1 4.55q.125.075.2.2.075.125.075.25t-.075.25q-.075.125-.2.2Zm15 0q-.25.125-.487-.025Q18 6.475 18 6.2V3.8q0-.275.238-.425.237-.15.487-.025l2.375 1.2q.125.075.2.2.075.125.075.25t-.075.25q-.075.125-.2.2Zm-7-1q-.25.125-.487-.025Q11 5.475 11 5.2V2.8q0-.275.238-.425.237-.15.487-.025l2.375 1.2q.125.075.2.2.075.125.075.25t-.075.25q-.075.125-.2.2ZM11 22q-1.9-.05-3.537-.312-1.638-.263-2.85-.663-1.213-.4-1.913-.925T2 19v-9q0-.625.788-1.163.787-.537 2.137-.95 1.35-.412 3.175-.65Q9.925 7 12 7t3.9.237q1.825.238 3.175.65 1.35.413 2.137.95Q22 9.375 22 10v9q0 .575-.7 1.1-.7.525-1.912.925-1.213.4-2.85.663Q14.9 21.95 13 22v-4h-2Zm1-11q2.425 0 4.188-.288 1.762-.287 2.812-.662 0-.125-1.9-.588Q15.2 9 12 9q-3.2 0-5.1.462-1.9.463-1.9.588 1.05.375 2.813.662Q9.575 11 12 11Zm-3 8.85V18q0-.825.588-1.413Q10.175 16 11 16h2q.825 0 1.413.587Q15 17.175 15 18v1.85q2-.2 3.275-.588 1.275-.387 1.725-.687V11.8q-1.375.55-3.45.875Q14.475 13 12 13q-2.475 0-4.55-.325Q5.375 12.35 4 11.8v6.775q.45.3 1.725.687Q7 19.65 9 19.85Zm3-4.025Z"/>
    </Icon>
  );
});

IconMaterialStadium.displayName = 'AmauiIconMaterialStadium';

export default IconMaterialStadium;
