import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalance'

      short_name='AccountBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17q-.425 0-.713-.288Q5 16.425 5 16v-5.025q0-.425.287-.7Q5.575 10 6 10t.713.287Q7 10.575 7 11v5.025q0 .425-.287.7Q6.425 17 6 17Zm6 0q-.425 0-.712-.288Q11 16.425 11 16v-5.025q0-.425.288-.7Q11.575 10 12 10t.713.287Q13 10.575 13 11v5.025q0 .425-.287.7Q12.425 17 12 17Zm-9.025 4q-.425 0-.7-.288Q2 20.425 2 20t.288-.712Q2.575 19 3 19h18.025q.425 0 .7.288.275.287.275.712t-.288.712Q21.425 21 21 21ZM18 17q-.425 0-.712-.288Q17 16.425 17 16v-5.025q0-.425.288-.7Q17.575 10 18 10t.712.287Q19 10.575 19 11v5.025q0 .425-.288.7Q18.425 17 18 17ZM12.9 1.45l8.425 4.2q.325.175.5.487.175.313.175.688 0 .5-.362.837-.363.338-.863.338H3.25q-.5 0-.875-.338Q2 7.325 2 6.825q0-.375.163-.688.162-.312.512-.462L11.1 1.45q.425-.2.9-.2.475 0 .9.2ZM6.45 6h11.1Zm0 0h11.1L12 3.25Z"/>
    </Icon>
  );
});

IconMaterialAccountBalance.displayName = 'AmauiIconMaterialAccountBalance';

export default IconMaterialAccountBalance;
