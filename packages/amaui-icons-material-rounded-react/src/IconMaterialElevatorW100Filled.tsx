import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElevatorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorW100Filled'

      short_name='Elevator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 17.35h.2q.325 0 .538-.212.212-.213.212-.538v-3h.25q.325 0 .538-.213.212-.212.212-.537V11q0-.575-.387-.963-.388-.387-.963-.387h-1q-.575 0-.962.387-.388.388-.388.963v1.85q0 .325.213.537.212.213.537.213h.25v3q0 .325.213.538.212.212.537.212Zm.1-8.6q.425 0 .713-.288Q10 8.175 10 7.75t-.287-.713Q9.425 6.75 9 6.75t-.712.287Q8 7.325 8 7.75t.288.712q.287.288.712.288Zm5.65 1.6h1.2q.25 0 .362-.2.113-.2-.012-.4l-.6-.975q-.025-.05-.35-.2-.1 0-.2.05t-.15.15l-.6.975q-.125.2-.012.4.112.2.362.2Zm.6 5.075q.1 0 .2-.05t.15-.15l.6-.975q.125-.2.012-.4-.112-.2-.362-.2h-1.2q-.25 0-.362.2-.113.2.012.4l.6.975q.025.05.35.2ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialElevatorW100Filled.displayName = 'AmauiIconMaterialElevatorW100Filled';

export default IconMaterialElevatorW100Filled;
