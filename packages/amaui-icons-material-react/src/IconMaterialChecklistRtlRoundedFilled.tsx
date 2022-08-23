import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChecklistRtlRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtlRoundedFilled'
      short_name='ChecklistRtl'

      {...props}
    >
      <path d="M3 9Q2.575 9 2.288 8.712Q2 8.425 2 8Q2 7.575 2.288 7.287Q2.575 7 3 7H10Q10.425 7 10.713 7.287Q11 7.575 11 8Q11 8.425 10.713 8.712Q10.425 9 10 9ZM3 17Q2.575 17 2.288 16.712Q2 16.425 2 16Q2 15.575 2.288 15.287Q2.575 15 3 15H10Q10.425 15 10.713 15.287Q11 15.575 11 16Q11 16.425 10.713 16.712Q10.425 17 10 17ZM15.675 10.3 13.525 8.15Q13.25 7.875 13.25 7.45Q13.25 7.025 13.525 6.75Q13.8 6.475 14.225 6.475Q14.65 6.475 14.925 6.75L16.35 8.175L19.9 4.625Q20.2 4.325 20.6 4.337Q21 4.35 21.3 4.65Q21.575 4.95 21.575 5.35Q21.575 5.75 21.3 6.05L17.075 10.3Q16.775 10.6 16.375 10.6Q15.975 10.6 15.675 10.3ZM15.675 18.3 13.525 16.15Q13.25 15.875 13.25 15.45Q13.25 15.025 13.525 14.75Q13.8 14.475 14.225 14.475Q14.65 14.475 14.925 14.75L16.35 16.175L19.9 12.625Q20.2 12.325 20.6 12.337Q21 12.35 21.3 12.65Q21.575 12.95 21.575 13.35Q21.575 13.75 21.3 14.05L17.075 18.3Q16.775 18.6 16.375 18.6Q15.975 18.6 15.675 18.3Z"/>
    </Icon>
  );
});

IconMaterialChecklistRtlRoundedFilled.displayName = 'AmauiIconMaterialChecklistRtlRoundedFilled';

export default IconMaterialChecklistRtlRoundedFilled;
