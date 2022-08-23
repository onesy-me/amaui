import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingCartRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartRoundedW100Filled'
      short_name='ShoppingCart'

      {...props}
    >
      <path d="M7.4 20.85Q6.825 20.85 6.438 20.462Q6.05 20.075 6.05 19.5Q6.05 18.925 6.438 18.538Q6.825 18.15 7.4 18.15Q7.975 18.15 8.363 18.538Q8.75 18.925 8.75 19.5Q8.75 20.075 8.363 20.462Q7.975 20.85 7.4 20.85ZM16.6 20.85Q16.025 20.85 15.638 20.462Q15.25 20.075 15.25 19.5Q15.25 18.925 15.638 18.538Q16.025 18.15 16.6 18.15Q17.175 18.15 17.562 18.538Q17.95 18.925 17.95 19.5Q17.95 20.075 17.562 20.462Q17.175 20.85 16.6 20.85ZM7.4 15.85Q6.6 15.85 6.213 15.188Q5.825 14.525 6.2 13.85L7.75 11.1L4.05 3.35H2.625Q2.5 3.35 2.4 3.25Q2.3 3.15 2.3 3Q2.3 2.85 2.4 2.75Q2.5 2.65 2.65 2.65H4.025Q4.25 2.65 4.425 2.762Q4.6 2.875 4.7 3.075L5.45 4.65H17.95Q18.675 4.65 19.013 5.175Q19.35 5.7 19 6.3L16.35 11.15Q16.15 11.5 15.838 11.675Q15.525 11.85 15.15 11.85H8.1L6.85 14.15Q6.65 14.45 6.838 14.8Q7.025 15.15 7.4 15.15H17.625Q17.75 15.15 17.85 15.25Q17.95 15.35 17.95 15.5Q17.95 15.65 17.85 15.75Q17.75 15.85 17.6 15.85Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartRoundedW100Filled.displayName = 'AmauiIconMaterialShoppingCartRoundedW100Filled';

export default IconMaterialShoppingCartRoundedW100Filled;
