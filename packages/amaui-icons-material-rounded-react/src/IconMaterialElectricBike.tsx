import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricBike = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBike'

      short_name='ElectricBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17q-2.125 0-3.562-1.438Q0 14.125 0 12t1.463-3.562Q2.925 7 5 7q1.925 0 3.238 1.15Q9.55 9.3 9.9 11h.65l-1.8-5H8q-.425 0-.713-.287Q7 5.425 7 5t.287-.713Q7.575 4 8 4h3q.425 0 .713.287Q12 4.575 12 5t-.287.713Q11.425 6 11 6h-.1l.35 1h4.8L14.6 3H13q-.425 0-.712-.288Q12 2.425 12 2t.288-.713Q12.575 1 13 1h1.6q.65 0 1.163.35.512.35.737.95l1.7 4.65h.8q2.075 0 3.538 1.462Q24 9.875 24 11.95q0 2.1-1.45 3.575T19 17q-1.8 0-3.162-1.125Q14.475 14.75 14.1 13H9.9q-.35 1.725-1.7 2.863Q6.85 17 5 17Zm0-2q1.025 0 1.763-.562Q7.5 13.875 7.8 13H6q-.425 0-.713-.288Q5 12.425 5 12t.287-.713Q5.575 11 6 11h1.8q-.3-.9-1.037-1.45Q6.025 9 5 9q-1.275 0-2.138.863Q2 10.725 2 12q0 1.25.862 2.125Q3.725 15 5 15Zm7.7-4h1.4q.125-.575.338-1.075.212-.5.562-.925h-3.05Zm6.3 4q1.275 0 2.138-.875Q22 13.25 22 12q0-1.275-.862-2.137Q20.275 9 19 9h-.1l.65 1.7q.15.4-.05.775t-.55.525q-.4.175-.775-.013-.375-.187-.525-.587l-.6-1.7q-.5.425-.775 1T16 12q0 1.25.863 2.125Q17.725 15 19 15Zm-6 8-6-3h4v-2l6 3h-4Z"/>
    </Icon>
  );
});

IconMaterialElectricBike.displayName = 'AmauiIconMaterialElectricBike';

export default IconMaterialElectricBike;
