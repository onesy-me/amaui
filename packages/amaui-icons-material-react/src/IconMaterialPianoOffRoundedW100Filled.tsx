import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOffRoundedW100Filled'
      short_name='PianoOff'

      {...props}
    >
      <path d="M19.6 20.6 18.65 19.65Q18.525 19.675 18.425 19.688Q18.325 19.7 18.2 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.675 4.312 5.575Q4.325 5.475 4.35 5.35L3.4 4.4Q3.3 4.3 3.288 4.162Q3.275 4.025 3.4 3.9Q3.525 3.775 3.65 3.775Q3.775 3.775 3.9 3.9L20.1 20.1Q20.2 20.2 20.213 20.337Q20.225 20.475 20.1 20.6Q19.975 20.725 19.85 20.725Q19.725 20.725 19.6 20.6ZM19.7 16.9 19 16.2V5.8Q19 5.45 18.775 5.225Q18.55 5 18.2 5H16.475V13.3Q16.475 13.375 16.462 13.462Q16.45 13.55 16.425 13.625L13.275 10.475V5H10.725V7.925L7.1 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8ZM5.8 19H8.775V14.1H8.325Q7.975 14.1 7.75 13.875Q7.525 13.65 7.525 13.3V8.525L5 6V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19ZM9.475 19H14.525V15.525L10.725 11.725Q10.725 12.15 10.763 13.125Q10.8 14.1 9.925 14.1H9.475ZM15.225 19H18L15.225 16.225Z"/>
    </Icon>
  );
});

IconMaterialPianoOffRoundedW100Filled.displayName = 'AmauiIconMaterialPianoOffRoundedW100Filled';

export default IconMaterialPianoOffRoundedW100Filled;
