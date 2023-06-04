import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThunderstormW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormW100'

      short_name='Thunderstorm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.975 23.35 1.975-2.225-2-1 2.15-2.475h.925l-1.975 2.225 2 1-2.15 2.475Zm-6 0 1.975-2.225-2-1L9.1 17.65h.925L8.05 19.875l2 1L7.9 23.35Zm.525-8q-2.025 0-3.438-1.412Q2.65 12.525 2.65 10.5q0-1.9 1.288-3.275Q5.225 5.85 7.175 5.65q.725-1.4 1.988-2.2 1.262-.8 2.837-.8 2.125 0 3.638 1.425 1.512 1.425 1.737 3.55 1.875.1 2.925 1.237Q21.35 10 21.35 11.5q0 1.6-1.125 2.725T17.5 15.35Zm0-.7h10q1.3 0 2.225-.925t.925-2.225q0-1.3-.925-2.225T17.5 8.35h-.85V8q0-1.925-1.362-3.288Q13.925 3.35 12 3.35q-1.4 0-2.55.762-1.15.763-1.725 2.038l-.075.2h-.2q-1.7.05-2.9 1.25t-1.2 2.9q0 1.725 1.212 2.938Q5.775 14.65 7.5 14.65ZM12 9Z"/>
    </Icon>
  );
});

IconMaterialThunderstormW100.displayName = 'AmauiIconMaterialThunderstormW100';

export default IconMaterialThunderstormW100;
