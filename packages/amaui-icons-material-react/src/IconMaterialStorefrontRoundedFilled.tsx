import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStorefrontRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorefrontRoundedFilled'
      short_name='Storefront'

      {...props}
    >
      <path d="M5.025 21Q4.2 21 3.613 20.413Q3.025 19.825 3.025 19V11.05Q2.45 10.525 2.138 9.7Q1.825 8.875 2.125 7.9L3.175 4.5Q3.375 3.85 3.888 3.425Q4.4 3 5.075 3H18.975Q19.65 3 20.15 3.412Q20.65 3.825 20.875 4.5L21.925 7.9Q22.225 8.875 21.913 9.675Q21.6 10.475 21.025 11.05V19Q21.025 19.825 20.438 20.413Q19.85 21 19.025 21ZM14.225 10Q14.9 10 15.25 9.537Q15.6 9.075 15.525 8.5L14.975 5H13.025V8.7Q13.025 9.225 13.375 9.613Q13.725 10 14.225 10ZM9.725 10Q10.3 10 10.663 9.613Q11.025 9.225 11.025 8.7V5H9.075L8.525 8.5Q8.425 9.1 8.788 9.55Q9.15 10 9.725 10ZM5.275 10Q5.725 10 6.062 9.675Q6.4 9.35 6.475 8.85L7.025 5H5.075Q5.075 5 5.075 5Q5.075 5 5.075 5L4.075 8.35Q3.925 8.85 4.237 9.425Q4.55 10 5.275 10ZM18.775 10Q19.5 10 19.825 9.425Q20.15 8.85 19.975 8.35L18.925 5Q18.925 5 18.925 5Q18.925 5 18.925 5H17.025L17.575 8.85Q17.65 9.35 17.988 9.675Q18.325 10 18.775 10Z"/>
    </Icon>
  );
});

IconMaterialStorefrontRoundedFilled.displayName = 'AmauiIconMaterialStorefrontRoundedFilled';

export default IconMaterialStorefrontRoundedFilled;
