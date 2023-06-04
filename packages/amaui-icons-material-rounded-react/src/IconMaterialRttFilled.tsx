import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRttFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RttFilled'

      short_name='Rtt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.6 21q-.525 0-.9-.375t-.375-.9q0-.525.375-.9t.9-.375h1.25l2.05-12.9h-2.5l-.55 3.4q-.075.475-.437.787-.363.313-.863.313-.6 0-.988-.463-.387-.462-.287-1.062l.6-3.85q.125-.725.687-1.2Q10.125 3 10.85 3h8.925q.925 0 1.525.7.6.7.45 1.625l-.575 3.625q-.075.475-.437.787-.363.313-.863.313-.6 0-1-.45t-.3-1.05l.475-3h-2.5l-2.05 12.9h.85q.525 0 .9.375t.375.9q0 .525-.375.9t-.9.375ZM4.9 7q-.425 0-.7-.287-.275-.288-.275-.713t.288-.713Q4.5 5 4.925 5h2.9L7.5 7Zm-.625 4q-.425 0-.7-.288Q3.3 10.425 3.3 10t.288-.713Q3.875 9 4.3 9h2.9l-.325 2Zm-1.25 8q-.425 0-.713-.288-.287-.287-.287-.712t.287-.712Q2.6 17 3.025 17h5.4l-.3 2Zm.625-4q-.425 0-.7-.288-.275-.287-.275-.712t.288-.713Q3.25 13 3.675 13h5.4l-.325 2Z"/>
    </Icon>
  );
});

IconMaterialRttFilled.displayName = 'AmauiIconMaterialRttFilled';

export default IconMaterialRttFilled;
