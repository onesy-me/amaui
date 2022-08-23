import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSupportAgentSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupportAgentSharp'
      short_name='SupportAgent'

      {...props}
    >
      <path d="M11 21V19H19V11.9Q19 10.45 18.45 9.175Q17.9 7.9 16.95 6.95Q16 6 14.725 5.45Q13.45 4.9 12 4.9Q10.55 4.9 9.275 5.45Q8 6 7.05 6.95Q6.1 7.9 5.55 9.175Q5 10.45 5 11.9V17.775H2V12.225H3L3.075 10.95Q3.3 9.125 4.113 7.65Q4.925 6.175 6.138 5.15Q7.35 4.125 8.863 3.562Q10.375 3 12 3Q13.65 3 15.163 3.562Q16.675 4.125 17.875 5.162Q19.075 6.2 19.888 7.662Q20.7 9.125 20.925 10.925L21 12.225H22V17.775H21V21ZM9 14Q8.575 14 8.288 13.712Q8 13.425 8 13Q8 12.575 8.288 12.287Q8.575 12 9 12Q9.425 12 9.713 12.287Q10 12.575 10 13Q10 13.425 9.713 13.712Q9.425 14 9 14ZM15 14Q14.575 14 14.288 13.712Q14 13.425 14 13Q14 12.575 14.288 12.287Q14.575 12 15 12Q15.425 12 15.713 12.287Q16 12.575 16 13Q16 13.425 15.713 13.712Q15.425 14 15 14ZM6.025 12.45Q5.925 10.975 6.438 9.775Q6.95 8.575 7.812 7.737Q8.675 6.9 9.8 6.45Q10.925 6 12.05 6Q14.325 6 15.988 7.438Q17.65 8.875 18 11.025Q15.65 11 13.75 9.762Q11.85 8.525 10.875 6.55Q10.475 8.575 9.188 10.137Q7.9 11.7 6.025 12.45Z"/>
    </Icon>
  );
});

IconMaterialSupportAgentSharp.displayName = 'AmauiIconMaterialSupportAgentSharp';

export default IconMaterialSupportAgentSharp;
