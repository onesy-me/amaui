import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBubbleChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleChart'

      short_name='BubbleChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18q-1.65 0-2.825-1.175Q3 15.65 3 14q0-1.65 1.175-2.825Q5.35 10 7 10q1.65 0 2.825 1.175Q11 12.35 11 14q0 1.65-1.175 2.825Q8.65 18 7 18Zm0-2q.825 0 1.412-.588Q9 14.825 9 14t-.588-1.413Q7.825 12 7 12t-1.412.587Q5 13.175 5 14q0 .825.588 1.412Q6.175 16 7 16Zm9.5-2q-2.3 0-3.9-1.6T11 8.5q0-2.3 1.6-3.9T16.5 3q2.3 0 3.9 1.6T22 8.5q0 2.3-1.6 3.9T16.5 14Zm-2 7q-1.25 0-2.125-.875T11.5 18q0-1.25.875-2.125T14.5 15q1.25 0 2.125.875T17.5 18q0 1.25-.875 2.125T14.5 21Zm2-9q1.475 0 2.488-1.012Q20 9.975 20 8.5t-1.012-2.488Q17.975 5 16.5 5t-2.488 1.012Q13 7.025 13 8.5t1.012 2.488Q15.025 12 16.5 12Zm-2 7q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q14.925 17 14.5 17t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm2-10.5ZM7 14Zm7.5 4Z"/>
    </Icon>
  );
});

IconMaterialBubbleChart.displayName = 'AmauiIconMaterialBubbleChart';

export default IconMaterialBubbleChart;
