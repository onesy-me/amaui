import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCottageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CottageRoundedW100Filled'
      short_name='Cottage'

      {...props}
    >
      <path d="M5.625 6Q5.5 6 5.4 5.9Q5.3 5.8 5.325 5.675Q5.425 4.975 5.9 4.512Q6.375 4.05 7.3 4.05Q7.9 4.05 8.2 3.787Q8.5 3.525 8.575 3.1Q8.6 2.975 8.7 2.887Q8.8 2.8 8.925 2.8Q9.1 2.8 9.2 2.912Q9.3 3.025 9.275 3.175Q9.15 3.85 8.663 4.3Q8.175 4.75 7.3 4.75Q6.725 4.75 6.413 4.987Q6.1 5.225 6.025 5.625Q5.975 5.8 5.875 5.9Q5.775 6 5.625 6ZM6.05 19.7Q5.725 19.7 5.513 19.487Q5.3 19.275 5.3 18.95V10.625L3.6 11.95Q3.475 12.05 3.35 12.025Q3.225 12 3.125 11.875Q3.025 11.75 3.038 11.625Q3.05 11.5 3.175 11.4L5.3 9.75V7.6Q5.3 7.45 5.4 7.35Q5.5 7.25 5.65 7.25Q5.8 7.25 5.9 7.35Q6 7.45 6 7.6V9.2L11.55 4.975Q11.65 4.9 11.762 4.862Q11.875 4.825 12 4.825Q12.125 4.825 12.238 4.862Q12.35 4.9 12.45 4.975L20.825 11.4Q20.95 11.5 20.963 11.625Q20.975 11.75 20.875 11.875Q20.775 12 20.65 12.025Q20.525 12.05 20.4 11.95L18.7 10.625V18.95Q18.7 19.275 18.488 19.487Q18.275 19.7 17.95 19.7H13.5V15.5Q13.5 14.875 13.062 14.438Q12.625 14 12 14Q11.375 14 10.938 14.438Q10.5 14.875 10.5 15.5V19.7Z"/>
    </Icon>
  );
});

IconMaterialCottageRoundedW100Filled.displayName = 'AmauiIconMaterialCottageRoundedW100Filled';

export default IconMaterialCottageRoundedW100Filled;
