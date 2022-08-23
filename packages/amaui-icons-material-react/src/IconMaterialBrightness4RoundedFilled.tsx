import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness4RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4RoundedFilled'
      short_name='Brightness4'

      {...props}
    >
      <path d="M8.625 20H5.975Q5.15 20 4.562 19.413Q3.975 18.825 3.975 18V15.35L2.075 13.425Q1.5 12.85 1.5 12Q1.5 11.15 2.075 10.575L3.975 8.65V6Q3.975 5.175 4.562 4.588Q5.15 4 5.975 4H8.625L10.55 2.1Q11.125 1.525 11.975 1.525Q12.825 1.525 13.4 2.1L15.325 4H17.975Q18.8 4 19.388 4.588Q19.975 5.175 19.975 6V8.65L21.875 10.575Q22.45 11.15 22.45 12Q22.45 12.85 21.875 13.425L19.975 15.35V18Q19.975 18.825 19.388 19.413Q18.8 20 17.975 20H15.325L13.4 21.9Q12.825 22.475 11.975 22.475Q11.125 22.475 10.55 21.9ZM12.2 17Q14.325 17 15.8 15.537Q17.275 14.075 17.275 12Q17.275 9.925 15.8 8.475Q14.325 7.025 12.2 7.025Q11.875 7.025 11.613 7.062Q11.35 7.1 11.125 7.15Q10.975 7.2 10.888 7.312Q10.8 7.425 10.8 7.55Q10.8 7.6 11.025 7.95Q12.05 8.625 12.575 9.712Q13.1 10.8 13.1 12Q13.1 13.275 12.55 14.35Q12 15.425 11 16.075Q10.925 16.125 10.775 16.45Q10.775 16.6 10.875 16.712Q10.975 16.825 11.125 16.875Q11.45 16.95 11.713 16.975Q11.975 17 12.2 17Z"/>
    </Icon>
  );
});

IconMaterialBrightness4RoundedFilled.displayName = 'AmauiIconMaterialBrightness4RoundedFilled';

export default IconMaterialBrightness4RoundedFilled;
