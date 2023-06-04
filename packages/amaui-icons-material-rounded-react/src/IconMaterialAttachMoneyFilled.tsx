import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachMoneyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachMoneyFilled'

      short_name='AttachMoney'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 21q-.425 0-.713-.288-.287-.287-.287-.712v-1.15Q9.9 18.6 9.05 17.975q-.85-.625-1.375-1.75-.175-.35-.013-.737.163-.388.588-.563.35-.15.725.013.375.162.575.537.425.75 1.075 1.138.65.387 1.6.387 1.025 0 1.738-.462.712-.463.712-1.438 0-.875-.55-1.388-.55-.512-2.55-1.162-2.15-.675-2.95-1.612-.8-.938-.8-2.288 0-1.625 1.05-2.525 1.05-.9 2.15-1.025V4q0-.425.287-.713Q11.6 3 12.025 3t.713.287q.287.288.287.713v1.1q.95.15 1.65.613.7.462 1.15 1.137.225.325.088.725-.138.4-.563.575-.35.15-.725.012-.375-.137-.7-.487-.325-.35-.762-.538-.438-.187-1.088-.187-1.1 0-1.675.488-.575.487-.575 1.212 0 .825.75 1.3.75.475 2.6 1 1.725.5 2.613 1.587.887 1.088.887 2.513 0 1.775-1.05 2.7-1.05.925-2.6 1.15V20q0 .425-.287.712-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialAttachMoneyFilled.displayName = 'AmauiIconMaterialAttachMoneyFilled';

export default IconMaterialAttachMoneyFilled;
