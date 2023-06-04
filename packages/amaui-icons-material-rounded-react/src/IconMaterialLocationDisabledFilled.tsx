import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationDisabledFilled'

      short_name='LocationDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 16.8-1.45-1.45q.425-.75.638-1.6Q19 12.9 19 12q0-2.9-2.05-4.95Q14.9 5 12 5q-.9 0-1.75.213-.85.212-1.6.637L7.2 4.4q.875-.525 1.813-.875.937-.35 1.987-.475v-1q0-.425.288-.713.287-.287.712-.287t.713.287q.287.288.287.713v1q3.125.35 5.363 2.587Q20.6 7.875 20.95 11h1q.425 0 .713.287.287.288.287.713t-.287.712q-.288.288-.713.288h-1q-.125 1.05-.475 1.987-.35.938-.875 1.813ZM12 22.95q-.425 0-.712-.287Q11 22.375 11 21.95v-1q-3.125-.35-5.362-2.587Q3.4 16.125 3.05 13h-1q-.425 0-.713-.288-.287-.287-.287-.712t.287-.713Q1.625 11 2.05 11h1q.125-1.05.475-1.988.35-.937.875-1.812L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l16.975 16.975q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3L16.8 19.6q-.875.525-1.812.875-.938.35-1.988.475v1q0 .425-.287.713-.288.287-.713.287ZM12 19q.9 0 1.75-.212.85-.213 1.6-.638l-9.5-9.5q-.425.75-.637 1.6Q5 11.1 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialLocationDisabledFilled.displayName = 'AmauiIconMaterialLocationDisabledFilled';

export default IconMaterialLocationDisabledFilled;
