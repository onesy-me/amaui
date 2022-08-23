import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSupportRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupportRoundedW100Filled'
      short_name='Support'

      {...props}
    >
      <path d="M19.45 9.1Q18.85 7.525 17.663 6.337Q16.475 5.15 14.9 4.55L13.1 8.9Q13.775 9.2 14.3 9.7Q14.825 10.2 15.1 10.9ZM9.15 4.5Q7.525 5.125 6.325 6.325Q5.125 7.525 4.5 9.15L8.9 10.95Q9.1 10.2 9.663 9.688Q10.225 9.175 10.95 8.9ZM4.5 14.85Q5.1 16.45 6.3 17.65Q7.5 18.85 9.1 19.45L11 15.15Q10.25 14.9 9.7 14.35Q9.15 13.8 8.9 13.05ZM14.9 19.45Q16.475 18.85 17.663 17.663Q18.85 16.475 19.45 14.9L15.15 13Q14.925 13.725 14.375 14.275Q13.825 14.825 13.1 15.1ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM12 14.6Q13.075 14.6 13.838 13.837Q14.6 13.075 14.6 12Q14.6 10.925 13.838 10.162Q13.075 9.4 12 9.4Q10.925 9.4 10.163 10.162Q9.4 10.925 9.4 12Q9.4 13.075 10.163 13.837Q10.925 14.6 12 14.6Z"/>
    </Icon>
  );
});

IconMaterialSupportRoundedW100Filled.displayName = 'AmauiIconMaterialSupportRoundedW100Filled';

export default IconMaterialSupportRoundedW100Filled;
