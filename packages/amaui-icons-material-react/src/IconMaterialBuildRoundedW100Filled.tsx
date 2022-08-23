import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBuildRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildRoundedW100Filled'
      short_name='Build'

      {...props}
    >
      <path d="M18.5 20.275Q18.175 20.275 17.888 20.163Q17.6 20.05 17.35 19.8L11.3 13.75Q10.725 14.025 10.125 14.188Q9.525 14.35 8.85 14.35Q6.625 14.35 5.062 12.787Q3.5 11.225 3.5 9Q3.5 8.425 3.612 7.887Q3.725 7.35 3.95 6.85L7.45 10.3L10.15 7.6L6.75 4.15Q7.25 3.925 7.763 3.787Q8.275 3.65 8.85 3.65Q11.075 3.65 12.638 5.212Q14.2 6.775 14.2 9Q14.2 9.725 14.05 10.325Q13.9 10.925 13.6 11.45L19.65 17.5Q19.9 17.75 20.013 18.038Q20.125 18.325 20.125 18.65Q20.125 18.975 20.013 19.263Q19.9 19.55 19.65 19.8Q19.4 20.05 19.113 20.163Q18.825 20.275 18.5 20.275Z"/>
    </Icon>
  );
});

IconMaterialBuildRoundedW100Filled.displayName = 'AmauiIconMaterialBuildRoundedW100Filled';

export default IconMaterialBuildRoundedW100Filled;
