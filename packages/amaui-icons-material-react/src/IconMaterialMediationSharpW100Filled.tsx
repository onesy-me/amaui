import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMediationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediationSharpW100Filled'
      short_name='Mediation'

      {...props}
    >
      <path d="M5.125 22.35Q4.15 22.35 3.463 21.663Q2.775 20.975 2.775 20Q2.775 19.025 3.463 18.337Q4.15 17.65 5.125 17.65Q5.85 17.65 6.413 18.025Q6.975 18.4 7.275 19.05Q9.125 18 10.3 16.238Q11.475 14.475 11.775 12.35H7.475Q7.325 13.225 6.662 13.787Q6 14.35 5.125 14.35Q4.15 14.35 3.463 13.662Q2.775 12.975 2.775 12Q2.775 11.025 3.463 10.337Q4.15 9.65 5.125 9.65Q6 9.65 6.662 10.212Q7.325 10.775 7.475 11.65H11.775Q11.475 9.525 10.3 7.787Q9.125 6.05 7.275 4.95Q6.975 5.6 6.413 5.975Q5.85 6.35 5.125 6.35Q4.15 6.35 3.463 5.662Q2.775 4.975 2.775 4Q2.775 3.025 3.463 2.337Q4.15 1.65 5.125 1.65Q6.175 1.65 6.888 2.45Q7.6 3.25 7.475 4.35Q9.6 5.4 10.9 7.337Q12.2 9.275 12.475 11.65H19.875L17.625 9.4L18.125 8.9L21.225 12L18.125 15.1L17.625 14.6L19.875 12.35H12.475Q12.2 14.725 10.9 16.663Q9.6 18.6 7.475 19.65Q7.6 20.75 6.888 21.55Q6.175 22.35 5.125 22.35Z"/>
    </Icon>
  );
});

IconMaterialMediationSharpW100Filled.displayName = 'AmauiIconMaterialMediationSharpW100Filled';

export default IconMaterialMediationSharpW100Filled;
