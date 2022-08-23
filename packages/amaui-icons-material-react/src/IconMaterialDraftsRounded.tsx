import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsRounded'
      short_name='Drafts'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V8.15Q2 7.625 2.25 7.15Q2.5 6.675 2.95 6.4L10.975 1.6Q11.225 1.45 11.475 1.387Q11.725 1.325 12 1.325Q12.275 1.325 12.525 1.387Q12.775 1.45 13.025 1.6L21.05 6.4Q21.5 6.675 21.75 7.15Q22 7.625 22 8.15V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM12 12.475Q12.125 12.475 12.25 12.45Q12.375 12.425 12.5 12.35L19.8 8L12.5 3.65Q12.375 3.575 12.25 3.55Q12.125 3.525 12 3.525Q11.875 3.525 11.75 3.55Q11.625 3.575 11.5 3.65L4.2 8L11.5 12.35Q11.625 12.425 11.75 12.45Q11.875 12.475 12 12.475ZM4 19H20Q20 19 20 19Q20 19 20 19V10.2L13.025 14.375Q12.775 14.525 12.525 14.6Q12.275 14.675 12 14.675Q11.725 14.675 11.475 14.6Q11.225 14.525 10.975 14.375L4 10.2V19Q4 19 4 19Q4 19 4 19ZM4 19Q4 19 4 19Q4 19 4 19H10.975Q11.225 19 11.475 19Q11.725 19 12 19Q12.275 19 12.525 19Q12.775 19 13.025 19H20Q20 19 20 19Q20 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialDraftsRounded.displayName = 'AmauiIconMaterialDraftsRounded';

export default IconMaterialDraftsRounded;
