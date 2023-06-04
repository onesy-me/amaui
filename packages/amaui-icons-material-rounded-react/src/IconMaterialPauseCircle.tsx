import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPauseCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseCircle'

      short_name='PauseCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 16q.425 0 .713-.288Q11 15.425 11 15V8.975q0-.425-.287-.7Q10.425 8 10 8t-.712.287Q9 8.575 9 9v6.025q0 .425.288.7Q9.575 16 10 16Zm4 0q.425 0 .713-.288Q15 15.425 15 15V8.975q0-.425-.287-.7Q14.425 8 14 8t-.712.287Q13 8.575 13 9v6.025q0 .425.288.7.287.275.712.275Zm-2 6q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialPauseCircle.displayName = 'AmauiIconMaterialPauseCircle';

export default IconMaterialPauseCircle;
