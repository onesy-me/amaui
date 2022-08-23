import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolRoundedW100Filled'
      short_name='PanTool'

      {...props}
    >
      <path d="M12.55 22Q11.925 22 11.312 21.75Q10.7 21.5 10.35 21.15L4.975 15.75Q4.7 15.475 4.725 15.062Q4.75 14.65 5 14.375Q5.275 14.05 5.663 13.987Q6.05 13.925 6.425 14.125L10.1 16.075V5.175Q10.1 4.725 10.413 4.412Q10.725 4.1 11.175 4.1Q11.625 4.1 11.938 4.412Q12.25 4.725 12.25 5.175V11.65Q12.25 11.8 12.35 11.9Q12.45 12 12.6 12Q12.75 12 12.85 11.9Q12.95 11.8 12.95 11.65V2.875Q12.95 2.425 13.263 2.112Q13.575 1.8 14.025 1.8Q14.475 1.8 14.788 2.112Q15.1 2.425 15.1 2.875V11.65Q15.1 11.8 15.2 11.9Q15.3 12 15.45 12Q15.6 12 15.7 11.9Q15.8 11.8 15.8 11.65V3.775Q15.8 3.325 16.113 3.012Q16.425 2.7 16.875 2.7Q17.325 2.7 17.637 3.012Q17.95 3.325 17.95 3.775V11.65Q17.95 11.8 18.05 11.9Q18.15 12 18.3 12Q18.45 12 18.55 11.9Q18.65 11.8 18.65 11.65V6.525Q18.65 6.075 18.963 5.762Q19.275 5.45 19.725 5.45Q20.175 5.45 20.488 5.762Q20.8 6.075 20.8 6.525V19.3Q20.8 20.425 20.013 21.212Q19.225 22 18.1 22Z"/>
    </Icon>
  );
});

IconMaterialPanToolRoundedW100Filled.displayName = 'AmauiIconMaterialPanToolRoundedW100Filled';

export default IconMaterialPanToolRoundedW100Filled;
