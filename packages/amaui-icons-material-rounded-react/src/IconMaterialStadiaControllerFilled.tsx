import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStadiaControllerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StadiaControllerFilled'

      short_name='StadiaController'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.725 20q-1.575 0-2.6-1.1Q1.1 17.8 1.05 16.325q0-.2.025-.45t.075-.45l2.1-8.4Q3.6 5.7 4.688 4.85 5.775 4 7.125 4h9.75q1.35 0 2.437.85 1.088.85 1.438 2.175l2.1 8.4q.05.225.088.462.037.238.037.463 0 1.5-1.062 2.575Q20.85 20 19.275 20q-1.05 0-1.95-.55-.9-.55-1.35-1.5l-.7-1.45q-.125-.275-.362-.387-.238-.113-.538-.113h-4.75q-.3 0-.537.113-.238.112-.363.387l-.7 1.45q-.45.95-1.35 1.5-.9.55-1.95.55Zm.075-2q.425 0 .813-.225.387-.225.637-.7l.7-1.425q.375-.775 1.087-1.212Q8.75 14 9.625 14h4.75q.85 0 1.575.45t1.125 1.2l.7 1.425q.25.475.638.7.387.225.812.225.65 0 1.175-.45t.55-1.175v-.238q0-.112-.05-.237l-2.1-8.375q-.175-.675-.7-1.1Q17.575 6 16.875 6h-9.75q-.7 0-1.237.425-.538.425-.688 1.1L3.1 15.9q-.05.15-.05.45 0 .725.55 1.188.55.462 1.2.462Zm8.7-7q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q13.075 9 13.5 9t.713.287q.287.288.287.713t-.287.712Q13.925 11 13.5 11Zm2-2q-.425 0-.712-.288Q14.5 8.425 14.5 8t.288-.713Q15.075 7 15.5 7t.712.287q.288.288.288.713t-.288.712Q15.925 9 15.5 9Zm0 4q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q15.075 11 15.5 11t.712.287q.288.288.288.713t-.288.712Q15.925 13 15.5 13Zm2-2q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q17.075 9 17.5 9t.712.287q.288.288.288.713t-.288.712Q17.925 11 17.5 11Zm-9 1.5q-.3 0-.525-.225-.225-.225-.225-.525v-1h-1q-.3 0-.525-.225Q6 10.3 6 10q0-.3.225-.525.225-.225.525-.225h1v-1q0-.3.225-.525Q8.2 7.5 8.5 7.5q.3 0 .525.225.225.225.225.525v1h1q.3 0 .525.225Q11 9.7 11 10q0 .3-.225.525-.225.225-.525.225h-1v1q0 .3-.225.525-.225.225-.525.225Z"/>
    </Icon>
  );
});

IconMaterialStadiaControllerFilled.displayName = 'AmauiIconMaterialStadiaControllerFilled';

export default IconMaterialStadiaControllerFilled;
