import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIcecreamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IcecreamW100'

      short_name='Icecream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 19.3q-.2 0-.375-.1t-.3-.3L8.1 12.45q-1.275.65-2.538-.163Q4.3 11.475 4.3 10q0-.875.563-1.662Q5.425 7.55 6.75 7.2q.275-2.35 1.825-3.625Q10.125 2.3 12 2.3q1.875 0 3.425 1.275Q16.975 4.85 17.25 7.2q1.325.35 1.888 1.138.562.787.562 1.662 0 1.5-1.187 2.262-1.188.763-2.513.188l-3.275 6.45q-.125.2-.3.3-.175.1-.375.1ZM7 12q.375 0 .737-.125.363-.125.663-.425l.55-.55.65.4q.525.35 1.138.525Q11.35 12 12 12t1.262-.175q.613-.175 1.138-.525l.65-.4.55.55q.3.3.662.425.363.125.738.125.825 0 1.413-.588Q19 10.825 19 10q0-.75-.475-1.312Q18.05 8.125 17.3 8l-.75-.1-.05-.8q-.125-1.725-1.425-2.912Q13.775 3 12 3q-1.775 0-3.075 1.188Q7.625 5.375 7.5 7.1l-.05.8-.75.15q-.75.15-1.225.675Q5 9.25 5 10q0 .825.588 1.412Q6.175 12 7 12Zm5.05 6.65 3.35-6.55-.35-.3q-.825.425-1.612.662-.788.238-1.438.238-.575 0-1.35-.2-.775-.2-1.6-.7l-.35.3ZM12 7.5Z"/>
    </Icon>
  );
});

IconMaterialIcecreamW100.displayName = 'AmauiIconMaterialIcecreamW100';

export default IconMaterialIcecreamW100;
