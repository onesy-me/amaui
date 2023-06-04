import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsBaseball = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBaseball'

      short_name='SportsBaseball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.6 16.8q1.125-.875 1.763-2.125Q8 13.425 8 12q0-1.425-.637-2.675Q6.725 8.075 5.6 7.2q-.775 1.05-1.188 2.275Q4 10.7 4 12q0 1.3.412 2.525Q4.825 15.75 5.6 16.8ZM12 20q1.375 0 2.663-.438Q15.95 19.125 17 18.25q-1.425-1.15-2.212-2.787Q14 13.825 14 12q0-1.825.788-3.463Q15.575 6.9 17 5.75q-1.05-.875-2.337-1.312Q13.375 4 12 4q-1.375 0-2.662.438Q8.05 4.875 7 5.75 8.425 6.9 9.213 8.537 10 10.175 10 12q0 1.825-.787 3.463Q8.425 17.1 7 18.25q1.05.875 2.338 1.312Q10.625 20 12 20Zm6.4-3.2q.775-1.05 1.187-2.275Q20 13.3 20 12q0-1.3-.413-2.525Q19.175 8.25 18.4 7.2q-1.125.875-1.762 2.125Q16 10.575 16 12q0 1.425.638 2.675.637 1.25 1.762 2.125ZM12 12Zm0 10q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialSportsBaseball.displayName = 'AmauiIconMaterialSportsBaseball';

export default IconMaterialSportsBaseball;
