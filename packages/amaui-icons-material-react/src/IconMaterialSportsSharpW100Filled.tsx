import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsSharpW100Filled'
      short_name='Sports'

      {...props}
    >
      <path d="M9.725 17.55Q7.85 17.55 6.513 16.212Q5.175 14.875 5.175 13Q5.175 12.625 5.238 12.262Q5.3 11.9 5.375 11.7Q5.25 11.75 5.15 11.75Q5.05 11.75 4.975 11.75Q4.25 11.75 3.763 11.262Q3.275 10.775 3.275 10.05Q3.275 9.325 3.75 8.837Q4.225 8.35 4.95 8.35Q5.6 8.35 6.075 8.738Q6.55 9.125 6.625 9.7Q7.2 9.1 8.05 8.775Q8.9 8.45 9.725 8.45H20.725V9.85H14.275V13Q14.275 14.9 12.95 16.225Q11.625 17.55 9.725 17.55ZM4.975 11.05Q5.4 11.05 5.688 10.762Q5.975 10.475 5.975 10.05Q5.975 9.625 5.688 9.337Q5.4 9.05 4.975 9.05Q4.55 9.05 4.263 9.337Q3.975 9.625 3.975 10.05Q3.975 10.475 4.263 10.762Q4.55 11.05 4.975 11.05ZM9.725 14.5Q10.35 14.5 10.788 14.062Q11.225 13.625 11.225 13Q11.225 12.375 10.788 11.938Q10.35 11.5 9.725 11.5Q9.1 11.5 8.662 11.938Q8.225 12.375 8.225 13Q8.225 13.625 8.662 14.062Q9.1 14.5 9.725 14.5Z"/>
    </Icon>
  );
});

IconMaterialSportsSharpW100Filled.displayName = 'AmauiIconMaterialSportsSharpW100Filled';

export default IconMaterialSportsSharpW100Filled;
