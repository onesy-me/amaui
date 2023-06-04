import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGestureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GestureW100Filled'

      short_name='Gesture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.9 20.4q-1.2 0-1.9-.75t-.7-1.925q0-.9.425-1.713.425-.812 1.175-1.45.75-.637 1.75-1.037 1-.4 2.15-.475-.125-1.55-.625-2.275-.5-.725-1.55-.725-1.35 0-2.425 1.025-1.075 1.025-2.075 2.225-.975 1.2-1.975 2.175-1 .975-2.275.975-1.025 0-1.625-.712-.6-.713-.6-1.938 0-1.425.675-2.725T5.8 8.65q.575-.825.987-1.55.413-.725.413-1.325 0-.425-.212-.6Q6.775 5 6.425 5q-.275 0-.587.125-.313.125-.663.45-.2.175-.437.175-.238 0-.413-.175t-.187-.438q-.013-.262.187-.412.55-.5 1.075-.713.525-.212 1.025-.212.9 0 1.438.55.537.55.537 1.425t-.512 1.8Q7.375 8.5 6.725 9.45 6 10.5 5.425 11.575 4.85 12.65 4.85 13.8q0 .725.263 1.087.262.363.762.363.8 0 1.563-.762.762-.763 1.637-1.813 1.125-1.35 2.45-2.588 1.325-1.237 3.1-1.237 1.525 0 2.413 1.1.887 1.1.962 3.1h1.75q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175H18q-.15 2.825-1.262 4.487Q15.625 20.4 13.9 20.4Zm0-1.2q1.225 0 2.025-1.375.8-1.375.875-3.575-1.75.1-3.025 1.137-1.275 1.038-1.275 2.338 0 .7.387 1.087.388.388 1.013.388Z"/>
    </Icon>
  );
});

IconMaterialGestureW100Filled.displayName = 'AmauiIconMaterialGestureW100Filled';

export default IconMaterialGestureW100Filled;
