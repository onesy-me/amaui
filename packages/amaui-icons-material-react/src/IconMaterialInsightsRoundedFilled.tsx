import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInsightsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsightsRoundedFilled'
      short_name='Insights'

      {...props}
    >
      <path d="M3 20Q2.175 20 1.588 19.413Q1 18.825 1 18Q1 17.175 1.588 16.587Q2.175 16 3 16Q3.15 16 3.263 16Q3.375 16 3.5 16.05L8.05 11.5Q8 11.375 8 11.262Q8 11.15 8 11Q8 10.175 8.588 9.587Q9.175 9 10 9Q10.825 9 11.413 9.587Q12 10.175 12 11Q12 11.05 11.95 11.5L14.5 14.05Q14.625 14 14.738 14Q14.85 14 15 14Q15.15 14 15.262 14Q15.375 14 15.5 14.05L19.05 10.5Q19 10.375 19 10.262Q19 10.15 19 10Q19 9.175 19.587 8.587Q20.175 8 21 8Q21.825 8 22.413 8.587Q23 9.175 23 10Q23 10.825 22.413 11.412Q21.825 12 21 12Q20.85 12 20.738 12Q20.625 12 20.5 11.95L16.95 15.5Q17 15.625 17 15.738Q17 15.85 17 16Q17 16.825 16.413 17.413Q15.825 18 15 18Q14.175 18 13.588 17.413Q13 16.825 13 16Q13 15.85 13 15.738Q13 15.625 13.05 15.5L10.5 12.95Q10.375 13 10.262 13Q10.15 13 10 13Q9.95 13 9.5 12.95L4.95 17.5Q5 17.625 5 17.738Q5 17.85 5 18Q5 18.825 4.412 19.413Q3.825 20 3 20ZM15 9 14.05 6.95 12 6 14.05 5.05 15 3 15.95 5.05 18 6 15.95 6.95ZM4 9.975 3.375 8.625 2.025 8 3.375 7.375 4 6.025 4.625 7.375 5.975 8 4.625 8.625Z"/>
    </Icon>
  );
});

IconMaterialInsightsRoundedFilled.displayName = 'AmauiIconMaterialInsightsRoundedFilled';

export default IconMaterialInsightsRoundedFilled;
