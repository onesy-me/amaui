import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3dRotationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3dRotationFilled'

      short_name='3dRotation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 2.1q.375-.05.75-.075Q11.625 2 12 2q3.925 0 6.75 2.6t3.2 6.4q.05.4-.238.7-.287.3-.712.3-.4 0-.7-.288-.3-.287-.35-.712-.325-2.575-2.075-4.463-1.75-1.887-4.325-2.387l.75.75q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-2.8-2.8q-.45-.45-.325-.875T10.5 2.1Zm3 19.8q-.375.05-.75.075Q12.375 22 12 22q-3.925 0-6.75-2.6T2.05 13q-.05-.4.238-.7.287-.3.712-.3.4 0 .7.287.3.288.35.713.325 2.575 2.075 4.462 1.75 1.888 4.325 2.388l-.75-.75q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.8 2.8q.45.45.325.875t-.725.525Zm-1-6.9V9h3q.425 0 .712.287.288.288.288.713v4q0 .425-.288.712-.287.288-.712.288Zm1.5-1.5h1v-3h-1ZM8.25 15q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.538.212-.212.537-.212H10v-1H9q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15h1v-1H8.25q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.538Q7.925 9 8.25 9h2.25q.425 0 .713.287.287.288.287.713v4q0 .425-.287.712-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterial3dRotationFilled.displayName = 'AmauiIconMaterial3dRotationFilled';

export default IconMaterial3dRotationFilled;
