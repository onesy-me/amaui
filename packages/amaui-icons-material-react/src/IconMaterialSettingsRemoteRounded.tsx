import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsRemoteRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsRemoteRounded'
      short_name='SettingsRemote'

      {...props}
    >
      <path d="M15 23H9Q8.575 23 8.288 22.712Q8 22.425 8 22V10Q8 9.575 8.288 9.287Q8.575 9 9 9H15Q15.425 9 15.713 9.287Q16 9.575 16 10V22Q16 22.425 15.713 22.712Q15.425 23 15 23ZM12 14.25Q12.525 14.25 12.887 13.887Q13.25 13.525 13.25 13Q13.25 12.475 12.887 12.113Q12.525 11.75 12 11.75Q11.475 11.75 11.113 12.113Q10.75 12.475 10.75 13Q10.75 13.525 11.113 13.887Q11.475 14.25 12 14.25ZM12 6Q11.2 6 10.5 6.225Q9.8 6.45 9.2 6.85Q8.85 7.075 8.438 7.05Q8.025 7.025 7.75 6.75Q7.45 6.45 7.475 6.05Q7.5 5.65 7.825 5.4Q8.7 4.75 9.75 4.375Q10.8 4 12 4Q13.2 4 14.25 4.375Q15.3 4.75 16.175 5.4Q16.5 5.65 16.525 6.05Q16.55 6.45 16.25 6.75Q15.975 7.025 15.575 7.05Q15.175 7.075 14.825 6.85Q14.225 6.45 13.513 6.225Q12.8 6 12 6ZM12 2Q10.4 2 8.988 2.512Q7.575 3.025 6.425 3.95Q6.075 4.225 5.65 4.225Q5.225 4.225 4.925 3.925Q4.625 3.625 4.65 3.188Q4.675 2.75 5.025 2.475Q6.45 1.325 8.225 0.662Q10 0 12 0Q14.025 0 15.812 0.688Q17.6 1.375 19.025 2.575Q19.35 2.85 19.35 3.25Q19.35 3.65 19.05 3.95Q18.75 4.25 18.337 4.237Q17.925 4.225 17.575 3.95Q16.425 3.025 15.013 2.512Q13.6 2 12 2ZM10 21H14V11H10ZM10 21H14Z"/>
    </Icon>
  );
});

IconMaterialSettingsRemoteRounded.displayName = 'AmauiIconMaterialSettingsRemoteRounded';

export default IconMaterialSettingsRemoteRounded;
