import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDepartureBoardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DepartureBoardW100'

      short_name='DepartureBoard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.15 8.65.5-.5-1.8-1.8v-2.7h-.7v3ZM6.5 16.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q6.925 14.5 6.5 14.5t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288Zm7 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM5 20.7v-2.2q-.5-.125-1.1-.837-.6-.713-.6-1.663V7q0-.65.388-1.188.387-.537 1.337-.912T7.6 4.362Q9.225 4.2 11.7 4.3q-.075.175-.125.337-.05.163-.1.363-4.2-.125-5.737.375Q4.2 5.875 4 6.7h7.3q0 .175.025.35l.05.35H4v4.9h11.3q.275.125.725.237.45.113.675.113V16q0 .95-.6 1.663-.6.712-1.1.837v2.2h-.7v-2H5.7v2Zm9-7.7H4h12-2Zm3.5-2.8q-1.55 0-2.625-1.075T13.8 6.5q0-1.55 1.075-2.625T17.5 2.8q1.55 0 2.625 1.075T21.2 6.5q0 1.55-1.075 2.625T17.5 10.2ZM6 18h8q.825 0 1.413-.587Q16 16.825 16 16v-3H4v3q0 .825.588 1.413Q5.175 18 6 18Zm5.3-11.3H4 11.3Z"/>
    </Icon>
  );
});

IconMaterialDepartureBoardW100.displayName = 'AmauiIconMaterialDepartureBoardW100';

export default IconMaterialDepartureBoardW100;
