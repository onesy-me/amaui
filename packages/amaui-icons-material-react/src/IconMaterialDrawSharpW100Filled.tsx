import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDrawSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawSharpW100Filled'
      short_name='Draw'

      {...props}
    >
      <path d="M13.65 20.35V19.65H14Q15.5 19.65 16.575 19.038Q17.65 18.425 17.65 17.5Q17.65 16.775 16.95 16.2Q16.25 15.625 14.975 15.3L15.55 14.75Q16.925 15.15 17.638 15.875Q18.35 16.6 18.35 17.5Q18.35 18.85 16.975 19.6Q15.6 20.35 14 20.35ZM6.025 13.225Q4.825 12.825 4.238 12.237Q3.65 11.65 3.65 11Q3.65 10.225 4.325 9.625Q5 9.025 6.825 8.225Q8.475 7.5 9.062 7.037Q9.65 6.575 9.65 6Q9.65 5.325 8.938 4.837Q8.225 4.35 7 4.35Q6.075 4.35 5.438 4.612Q4.8 4.875 4.65 5.225H3.85Q4.05 4.575 4.863 4.112Q5.675 3.65 7 3.65Q8.475 3.65 9.413 4.325Q10.35 5 10.35 6Q10.35 6.8 9.675 7.438Q9 8.075 7.1 8.875Q5.525 9.55 4.938 10.025Q4.35 10.5 4.35 11Q4.35 11.475 4.9 11.912Q5.45 12.35 6.575 12.7ZM18.025 8.725 15.95 6.65 17.5 5.1 19.575 7.175ZM5.075 19.6V17.525L14.175 8.425L16.25 10.5L7.15 19.6Z"/>
    </Icon>
  );
});

IconMaterialDrawSharpW100Filled.displayName = 'AmauiIconMaterialDrawSharpW100Filled';

export default IconMaterialDrawSharpW100Filled;
