import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHowToReg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToReg'

      short_name='HowToReg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20q-.425 0-.712-.288Q2 19.425 2 19v-1.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q8.075 13 10 13q.75 0 1.463.075.712.075 1.387.225l-1.75 1.75q-.275-.05-.538-.05H10q-1.775 0-3.188.425-1.412.425-2.312.925-.225.125-.362.35-.138.225-.138.5v.8h6.25l2 2Zm12.55-.025q-.2 0-.375-.062-.175-.063-.325-.213l-2.05-2.05q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.35 1.35 4.35-4.35q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-5.05 5.05q-.15.15-.325.213-.175.062-.375.062ZM10 12q-1.65 0-2.825-1.175Q6 9.65 6 8q0-1.65 1.175-2.825Q8.35 4 10 4q1.65 0 2.825 1.175Q14 6.35 14 8q0 1.65-1.175 2.825Q11.65 12 10 12Zm.25 6ZM10 10q.825 0 1.413-.588Q12 8.825 12 8t-.587-1.412Q10.825 6 10 6q-.825 0-1.412.588Q8 7.175 8 8t.588 1.412Q9.175 10 10 10Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialHowToReg.displayName = 'AmauiIconMaterialHowToReg';

export default IconMaterialHowToReg;
