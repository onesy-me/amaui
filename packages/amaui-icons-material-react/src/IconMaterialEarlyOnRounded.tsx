import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEarlyOnRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarlyOnRounded'
      short_name='EarlyOn'

      {...props}
    >
      <path d="M17 19q-1.25 0-2.125-.875T14 16q0-1.25.875-2.125T17 13q1.25 0 2.125.875T20 16q0 1.25-.875 2.125T17 19Zm0-9q.325 0 .538.212.212.213.212.538v.5q0 .325-.212.537Q17.325 12 17 12q-.325 0-.538-.213-.212-.212-.212-.537v-.5q0-.325.212-.538Q16.675 10 17 10Zm0 10q.325 0 .538.212.212.213.212.538v.5q0 .325-.212.538Q17.325 22 17 22q-.325 0-.538-.212-.212-.213-.212-.538v-.5q0-.325.212-.538Q16.675 20 17 20Zm4.25-8.25q.225.225.225.525 0 .3-.225.525l-.35.35q-.225.225-.525.213-.3-.013-.525-.213-.225-.225-.225-.538 0-.312.225-.537l.35-.35q.225-.225.525-.213.3.013.525.238Zm-7.075 7.075q.225.225.225.525 0 .3-.225.525l-.375.375q-.225.225-.525.225-.3 0-.525-.225-.225-.225-.225-.525 0-.3.225-.525l.375-.375q.225-.225.525-.225.3 0 .525.225ZM23 16q0 .325-.212.538-.213.212-.538.212h-.5q-.325 0-.538-.212Q21 16.325 21 16q0-.325.212-.538.213-.212.538-.212h.5q.325 0 .538.212.212.213.212.538Zm-10 0q0 .325-.212.538-.213.212-.538.212h-.5q-.325 0-.537-.212Q11 16.325 11 16q0-.325.213-.538.212-.212.537-.212h.5q.325 0 .538.212.212.213.212.538Zm6.85 2.825q.225-.225.525-.212.3.012.525.212l.35.35q.225.225.238.525.012.3-.213.525-.225.225-.537.225-.313 0-.538-.225l-.35-.35q-.2-.225-.212-.525-.013-.3.212-.525Zm-7.1-7.075q.225-.225.525-.213.3.013.525.213l.35.35q.125.1.175.237.05.138.062.288.013.15-.037.275-.05.125-.175.25-.225.225-.537.225-.313 0-.538-.225l-.35-.35q-.2-.225-.212-.525-.013-.3.212-.525ZM5 20q-.825 0-1.413-.587Q3 18.825 3 18V4q0-.825.587-1.413Q4.175 2 5 2h1V1q0-.425.287-.713Q6.575 0 7 0t.713.287Q8 .575 8 1v1h8V1q0-.425.288-.713Q16.575 0 17 0t.712.287Q18 .575 18 1v1h1q.825 0 1.413.587Q21 3.175 21 4v4H5v10h4v2ZM5 6h14V4H5Zm0 0V4v2Z"/>
    </Icon>
  );
});

IconMaterialEarlyOnRounded.displayName = 'AmauiIconMaterialEarlyOnRounded';

export default IconMaterialEarlyOnRounded;
