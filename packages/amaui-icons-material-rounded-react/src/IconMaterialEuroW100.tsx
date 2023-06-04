import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEuroW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroW100'

      short_name='Euro'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 19.65q-2.4 0-4.475-1.4-2.075-1.4-2.925-4.2H4.35q-.15 0-.25-.1T4 13.7q0-.15.1-.25t.25-.1h3.1q-.075-.3-.112-.65-.038-.35-.038-.7t.012-.663q.013-.312.088-.687H4.35q-.15 0-.25-.1T4 10.3q0-.15.1-.25t.25-.1h3.2q.775-2.6 2.8-4.125T15 4.3q1.325 0 2.462.412 1.138.413 2.263 1.238.15.125.163.275.012.15-.113.275-.075.075-.187.1-.113.025-.213-.05-.95-.725-2.063-1.138Q16.2 5 15 5q-2.475 0-4.275 1.45-1.8 1.45-2.425 3.5h6.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.15q-.125.375-.138.687Q8 11.65 8 12q0 .35.038.712.037.363.112.638h6.95q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.325q.725 2.35 2.638 3.625Q12.875 18.95 15 18.95q1.2 0 2.262-.363 1.063-.362 1.963-.987.125-.075.263-.062.137.012.237.112.125.125.087.275-.037.15-.162.25-.925.625-2.1 1.05-1.175.425-2.55.425Z"/>
    </Icon>
  );
});

IconMaterialEuroW100.displayName = 'AmauiIconMaterialEuroW100';

export default IconMaterialEuroW100;
