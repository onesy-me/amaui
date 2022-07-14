import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirPurifierGenSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifierGenSharp'
      short_name='AirPurifierGen'

      {...props}
    >
      <path d="M3 21V6q0-1.25.875-2.125T6 3h4q1.25 0 2.125.875T13 6v15Zm7-6h1v-5h-1v5Zm-5 4h6v-2h-1q-.825 0-1.412-.587Q8 15.825 8 15v-5q0-.825.588-1.413Q9.175 8 10 8h1V6q0-.425-.287-.713Q10.425 5 10 5H6q-.425 0-.713.287Q5 5.575 5 6Zm12.2-5.425q-.65 0-1.275-.175-.625-.175-1.225-.45l.625-1.9q.5.225.987.375.488.15.913.15.3 0 .6-.1t.625-.3q.6-.425 1.2-.575.6-.15 1.15-.15.625 0 1.287.162.663.163 1.238.438l-.625 1.9q-.575-.2-1.062-.35-.488-.15-.838-.15-.3 0-.662.112-.363.113-.763.388-.525.35-1.063.488-.537.137-1.112.137Zm.025-3.9q-.65 0-1.3-.175T14.7 9.05l.625-1.9q.65.275 1.1.4.45.125.8.125.3 0 .6-.087.3-.088.625-.313.625-.425 1.213-.575.587-.15 1.137-.15.625 0 1.25.163.625.162 1.275.437l-.625 1.9q-.65-.225-1.1-.362-.45-.138-.8-.138-.325 0-.662.1-.338.1-.763.4-.45.325-1.012.475-.563.15-1.138.15Zm0 7.8q-.65 0-1.287-.175-.638-.175-1.238-.45l.625-1.9q.55.25 1.025.387.475.138.875.138.3 0 .6-.088.3-.087.625-.312.575-.4 1.225-.563.65-.162 1.15-.162.625 0 1.275.175.65.175 1.225.425l-.625 1.9q-.65-.225-1.113-.362-.462-.138-.787-.138-.35 0-.712.112-.363.113-.713.388-.425.3-.988.462-.562.163-1.162.163ZM5 19h6-6Z"/>
    </Icon>
  );
});

export default IconMaterialAirPurifierGenSharp;
