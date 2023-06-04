import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestTagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestTagFilled'

      short_name='NestTag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.925 0-4.962-2.038Q5 17.925 5 15q0-2.4 1.4-4.225Q7.8 8.95 10 8.3V3q0-.425.288-.713Q10.575 2 11 2h2q.425 0 .713.287Q14 2.575 14 3v5.3q2.2.65 3.6 2.475Q19 12.6 19 15q0 2.925-2.038 4.962Q14.925 22 12 22Zm0-2q2.075 0 3.538-1.462Q17 17.075 17 15q0-2.075-1.462-3.538Q14.075 10 12 10q-2.075 0-3.537 1.462Q7 12.925 7 15q0 2.075 1.463 3.538Q9.925 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialNestTagFilled.displayName = 'AmauiIconMaterialNestTagFilled';

export default IconMaterialNestTagFilled;
