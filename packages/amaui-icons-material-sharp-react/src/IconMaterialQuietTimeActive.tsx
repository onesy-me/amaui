import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuietTimeActive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActive'

      short_name='QuietTimeActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.15 18.125 18.725 16.7q.425-.4.775-.862.35-.463.625-.963-1.2-.125-2.35-.45-1.15-.325-2.2-.875L10.4 8.375q-.55-1.05-.875-2.187Q9.2 5.05 9.1 3.85q-.5.275-.963.625-.462.35-.862.775l-1.4-1.4q1.075-1.1 2.437-1.825Q9.675 1.3 11.25 1q-.45 2.475.275 4.837.725 2.363 2.5 4.138t4.138 2.5q2.362.725 4.837.275-.275 1.575-1.012 2.938-.738 1.362-1.838 2.437Zm-.775 4.925-2.7-2.7q-.85.325-1.737.487Q14.05 21 13.1 21q-2.1 0-3.938-.8-1.837-.8-3.199-2.162-1.363-1.363-2.163-3.2Q3 13 3 10.9q0-.95.163-1.838.162-.887.487-1.737L.975 4.65 2.4 3.225l18.4 18.4ZM13.1 19q.5 0 1-.062.5-.063.975-.188l-4.925-4.925-4.9-4.9q-.125.5-.188.987Q5 10.4 5 10.9q0 3.375 2.363 5.737Q9.725 19 13.1 19Zm-2.95-5.175Zm2.85-2.85Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActive.displayName = 'AmauiIconMaterialQuietTimeActive';

export default IconMaterialQuietTimeActive;
