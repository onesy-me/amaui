import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChecklistRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRoundedFilled'
      short_name='Checklist'

      {...props}
    >
      <path d="M14 9Q13.575 9 13.288 8.712Q13 8.425 13 8Q13 7.575 13.288 7.287Q13.575 7 14 7H21Q21.425 7 21.712 7.287Q22 7.575 22 8Q22 8.425 21.712 8.712Q21.425 9 21 9ZM14 17Q13.575 17 13.288 16.712Q13 16.425 13 16Q13 15.575 13.288 15.287Q13.575 15 14 15H21Q21.425 15 21.712 15.287Q22 15.575 22 16Q22 16.425 21.712 16.712Q21.425 17 21 17ZM4.85 10.3 2.7 8.15Q2.425 7.875 2.425 7.45Q2.425 7.025 2.7 6.75Q2.975 6.475 3.4 6.475Q3.825 6.475 4.1 6.75L5.525 8.175L9.075 4.625Q9.375 4.325 9.775 4.337Q10.175 4.35 10.475 4.65Q10.75 4.95 10.75 5.35Q10.75 5.75 10.475 6.05L6.25 10.3Q5.95 10.6 5.55 10.6Q5.15 10.6 4.85 10.3ZM4.85 18.3 2.7 16.15Q2.425 15.875 2.425 15.45Q2.425 15.025 2.7 14.75Q2.975 14.475 3.4 14.475Q3.825 14.475 4.1 14.75L5.525 16.175L9.075 12.625Q9.375 12.325 9.775 12.337Q10.175 12.35 10.475 12.65Q10.75 12.95 10.75 13.35Q10.75 13.75 10.475 14.05L6.25 18.3Q5.95 18.6 5.55 18.6Q5.15 18.6 4.85 18.3Z"/>
    </Icon>
  );
});

IconMaterialChecklistRoundedFilled.displayName = 'AmauiIconMaterialChecklistRoundedFilled';

export default IconMaterialChecklistRoundedFilled;
