import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDinnerDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DinnerDiningFilled'

      short_name='DinnerDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.225 21q-.1 0-.188-.038-.087-.037-.162-.112l-1-1q-.25-.25-.125-.55.125-.3.475-.3h17.6q.35 0 .475.3t-.125.55l-1 1q-.075.075-.162.112-.088.038-.188.038Zm-1.2-3q.15-.45.4-.85.25-.4.6-.75V9h-.25q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.537.212-.213.537-.213h.25v-.75h-.25q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.537.212-.213.537-.213h.25V4.5h-.25q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.538Q3.45 3 3.775 3h6q.95 0 1.6.65.65.65.65 1.6h8.25q.325 0 .537.213.213.212.213.537 0 .325-.213.537-.212.213-.537.213h-8.25q0 .95-.65 1.6-.65.65-1.6.65h-1.75v6.1q.375.05.713.15.337.1.637.3.6-1.55 1.988-2.55 1.387-1 3.162-1 2.425 0 4.05 1.775t1.4 4.225Zm5-12.75h2V4.5h-2Zm0 2.25h2v-.75h-2Zm-2.5-2.25h1V4.5h-1Zm0 2.25h1v-.75h-1Zm0 7.85q.225-.125.475-.188.25-.062.525-.112V9h-1Z"/>
    </Icon>
  );
});

IconMaterialDinnerDiningFilled.displayName = 'AmauiIconMaterialDinnerDiningFilled';

export default IconMaterialDinnerDiningFilled;
