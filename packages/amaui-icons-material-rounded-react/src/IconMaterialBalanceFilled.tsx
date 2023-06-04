import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBalanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalanceFilled'

      short_name='Balance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21q-.425 0-.712-.288Q2 20.425 2 20t.288-.712Q2.575 19 3 19h8V7.825q-.65-.225-1.125-.7T9.175 6H6l2.7 6.3q.15.35.212.775.063.425-.012.675-.3.975-1.238 1.613Q6.725 16 5.5 16q-1.225 0-2.162-.637Q2.4 14.725 2.1 13.75q-.075-.25-.013-.675.063-.425.213-.775L5 6H4q-.425 0-.712-.287Q3 5.425 3 5t.288-.713Q3.575 4 4 4h5.175q.3-.875 1.075-1.438Q11.025 2 12 2t1.75.562q.775.563 1.075 1.438H20q.425 0 .712.287Q21 4.575 21 5t-.288.713Q20.425 6 20 6h-1l2.7 6.3q.15.35.213.775.062.425-.013.675-.3.975-1.237 1.613Q19.725 16 18.5 16q-1.225 0-2.162-.637-.938-.638-1.238-1.613-.075-.25-.012-.675.062-.425.212-.775L18 6h-3.175q-.225.65-.7 1.125t-1.125.7V19h8q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 21 21 21Zm13.625-8h3.75L18.5 8.65Zm-13 0h3.75L5.5 8.65ZM12 6q.425 0 .713-.287Q13 5.425 13 5t-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5t.288.713Q11.575 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialBalanceFilled.displayName = 'AmauiIconMaterialBalanceFilled';

export default IconMaterialBalanceFilled;
