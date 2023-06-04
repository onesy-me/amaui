import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEuroSymbolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSymbolW100Filled'

      short_name='EuroSymbol'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 20.1q-2.5 0-4.65-1.437-2.15-1.438-3.1-4.313H4.35q-.15 0-.25-.1T4 14q0-.15.1-.25t.25-.1H7.4q-.075-.3-.113-.8-.037-.5-.037-.85t.037-.812q.038-.463.113-.838H4.35q-.15 0-.25-.1T4 10q0-.15.1-.25t.25-.1H7.6q.825-2.6 2.95-4.175Q12.675 3.9 15.35 3.9q1.2 0 2.212.287 1.013.288 2.063.938.15.1.163.262.012.163-.113.288-.075.075-.187.087-.113.013-.213-.037-.95-.575-1.963-.85Q16.3 4.6 15.35 4.6q-2.6 0-4.463 1.487Q9.025 7.575 8.35 9.65h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-6.2q-.125.375-.162.838-.038.462-.038.812 0 .35.063.863.062.512.137.787h6.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.325q.875 2.575 2.85 3.813Q13.15 19.4 15.35 19.4q.95 0 1.975-.275 1.025-.275 1.9-.825.125-.075.263-.062.137.012.237.112.125.125.087.275-.037.15-.162.25-1.1.675-2.1.95-1 .275-2.2.275Z"/>
    </Icon>
  );
});

IconMaterialEuroSymbolW100Filled.displayName = 'AmauiIconMaterialEuroSymbolW100Filled';

export default IconMaterialEuroSymbolW100Filled;
