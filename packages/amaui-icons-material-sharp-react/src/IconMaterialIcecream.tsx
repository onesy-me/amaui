import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIcecream = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Icecream'

      short_name='Icecream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.05 23-4.7-9q-1.775.075-3.063-1.025Q3 11.875 3 10q0-1.275.738-2.3.737-1.025 1.862-1.45.45-2.275 2.238-3.763Q9.625 1 12 1t4.163 1.487Q17.95 3.975 18.4 6.25q1.125.425 1.863 1.45Q21 8.725 21 10q0 1.875-1.325 2.975T16.7 14ZM7 12q.375 0 .737-.125.363-.125.663-.425l.55-.55.65.4q.525.35 1.138.525Q11.35 12 12 12t1.262-.175q.613-.175 1.138-.525l.65-.4.55.55q.3.3.662.425.363.125.738.125.825 0 1.413-.588Q19 10.825 19 10q0-.75-.475-1.312Q18.05 8.125 17.3 8l-.75-.1-.05-.8q-.125-1.725-1.425-2.912Q13.775 3 12 3q-1.775 0-3.075 1.188Q7.625 5.375 7.5 7.1l-.05.8-.75.15q-.75.15-1.225.675Q5 9.25 5 10q0 .825.588 1.412Q6.175 12 7 12Zm5.05 6.65 2.7-5.25q-.6.3-1.3.45-.7.15-1.45.15-.675 0-1.362-.15-.688-.15-1.338-.45ZM12 7.5Z"/>
    </Icon>
  );
});

IconMaterialIcecream.displayName = 'AmauiIconMaterialIcecream';

export default IconMaterialIcecream;
