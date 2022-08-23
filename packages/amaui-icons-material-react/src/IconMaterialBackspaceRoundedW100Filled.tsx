import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackspaceRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceRoundedW100Filled'
      short_name='Backspace'

      {...props}
    >
      <path d="M9.65 17.7Q9.075 17.7 8.613 17.425Q8.15 17.15 7.8 16.7L5.075 12.875Q4.8 12.475 4.8 12Q4.8 11.525 5.075 11.125L7.8 7.25Q8.125 6.8 8.613 6.55Q9.1 6.3 9.65 6.3H18.05Q18.675 6.3 19.113 6.738Q19.55 7.175 19.55 7.8V16.2Q19.55 16.825 19.113 17.262Q18.675 17.7 18.05 17.7ZM10.7 14.85Q10.825 14.975 10.95 14.975Q11.075 14.975 11.2 14.85L13.55 12.5L15.9 14.85Q16.025 14.975 16.15 14.975Q16.275 14.975 16.4 14.85Q16.525 14.725 16.525 14.6Q16.525 14.475 16.4 14.35L14.05 12L16.4 9.65Q16.525 9.525 16.525 9.4Q16.525 9.275 16.4 9.15Q16.275 9.025 16.15 9.025Q16.025 9.025 15.9 9.15L13.55 11.5L11.2 9.15Q11.075 9.025 10.95 9.025Q10.825 9.025 10.7 9.15Q10.575 9.275 10.575 9.4Q10.575 9.525 10.7 9.65L13.05 12L10.7 14.35Q10.575 14.475 10.575 14.6Q10.575 14.725 10.7 14.85Z"/>
    </Icon>
  );
});

IconMaterialBackspaceRoundedW100Filled.displayName = 'AmauiIconMaterialBackspaceRoundedW100Filled';

export default IconMaterialBackspaceRoundedW100Filled;
