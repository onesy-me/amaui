import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWineBarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarFilled'

      short_name='WineBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-.425 0-.712-.288Q8 20.425 8 20t.288-.712Q8.575 19 9 19h2v-4.1q-2.15-.35-3.575-2Q6 11.25 6 9V4q0-.425.287-.713Q6.575 3 7 3h10q.425 0 .712.287Q18 3.575 18 4v5q0 2.25-1.425 3.9T13 14.9V19h2q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 21 15 21ZM8 8h8V5H8Z"/>
    </Icon>
  );
});

IconMaterialWineBarFilled.displayName = 'AmauiIconMaterialWineBarFilled';

export default IconMaterialWineBarFilled;
