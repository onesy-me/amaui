import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleSharpW100Filled'
      short_name='Accessible'

      {...props}
    >
      <path d="M12.125 6.35Q11.45 6.35 10.988 5.887Q10.525 5.425 10.525 4.75Q10.525 4.075 10.988 3.612Q11.45 3.15 12.125 3.15Q12.8 3.15 13.263 3.612Q13.725 4.075 13.725 4.75Q13.725 5.425 13.263 5.887Q12.8 6.35 12.125 6.35ZM17.425 21.4V17Q17.425 16.7 17.25 16.525Q17.075 16.35 16.775 16.35H10.775V9Q10.775 8.4 11.15 8.025Q11.525 7.65 12.125 7.65Q12.4 7.65 12.725 7.825Q13.05 8 13.525 8.55Q14.925 10.175 15.925 10.775Q16.925 11.375 18.275 11.6V12.3Q16.775 12.1 15.663 11.438Q14.55 10.775 13.275 9.35V15.35H18.125V21.4ZM10.125 21.4Q8.325 21.4 7.025 20.1Q5.725 18.8 5.725 17Q5.725 15.275 6.863 14.05Q8 12.825 9.775 12.625V13.325Q8.35 13.475 7.388 14.5Q6.425 15.525 6.425 17Q6.425 18.55 7.5 19.625Q8.575 20.7 10.125 20.7Q11.6 20.7 12.625 19.737Q13.65 18.775 13.8 17.35H14.5Q14.35 19.075 13.1 20.237Q11.85 21.4 10.125 21.4Z"/>
    </Icon>
  );
});

IconMaterialAccessibleSharpW100Filled.displayName = 'AmauiIconMaterialAccessibleSharpW100Filled';

export default IconMaterialAccessibleSharpW100Filled;
