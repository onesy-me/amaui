import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPieChartRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChartRoundedW100'
      short_name='PieChart'

      {...props}
    >
      <path d="M12.35 11.65H20Q19.85 8.525 17.663 6.325Q15.475 4.125 12.35 4ZM11.65 20V4Q8.45 4.125 6.225 6.438Q4 8.75 4 12Q4 15.25 6.225 17.562Q8.45 19.875 11.65 20ZM12.35 20Q15.475 19.875 17.663 17.675Q19.85 15.475 20 12.35H12.35ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialPieChartRoundedW100.displayName = 'AmauiIconMaterialPieChartRoundedW100';

export default IconMaterialPieChartRoundedW100;
