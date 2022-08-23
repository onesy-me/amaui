import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublicSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublicSharpW100Filled'
      short_name='Public'

      {...props}
    >
      <path d="M11 19.95V18Q10.175 18 9.588 17.413Q9 16.825 9 16V15L4.2 10.2Q4.125 10.65 4.062 11.1Q4 11.55 4 12Q4 15.025 5.988 17.3Q7.975 19.575 11 19.95ZM17.9 17.4Q18.925 16.275 19.462 14.887Q20 13.5 20 12Q20 9.525 18.65 7.487Q17.3 5.45 15 4.55V5Q15 5.825 14.413 6.412Q13.825 7 13 7H11V9Q11 9.425 10.713 9.712Q10.425 10 10 10H8V12H14Q14.425 12 14.713 12.287Q15 12.575 15 13V16H16Q16.65 16 17.175 16.387Q17.7 16.775 17.9 17.4ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialPublicSharpW100Filled.displayName = 'AmauiIconMaterialPublicSharpW100Filled';

export default IconMaterialPublicSharpW100Filled;
