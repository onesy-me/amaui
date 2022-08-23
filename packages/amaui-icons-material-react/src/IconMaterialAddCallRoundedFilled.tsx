import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCallRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCallRoundedFilled'
      short_name='AddCall'

      {...props}
    >
      <path d="M17 10.95Q16.575 10.95 16.288 10.662Q16 10.375 16 9.95V7.95H14Q13.575 7.95 13.288 7.662Q13 7.375 13 6.95Q13 6.525 13.288 6.237Q13.575 5.95 14 5.95H16V3.95Q16 3.525 16.288 3.237Q16.575 2.95 17 2.95Q17.425 2.95 17.712 3.237Q18 3.525 18 3.95V5.95H20Q20.425 5.95 20.712 6.237Q21 6.525 21 6.95Q21 7.375 20.712 7.662Q20.425 7.95 20 7.95H18V9.95Q18 10.375 17.712 10.662Q17.425 10.95 17 10.95ZM19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L7 10.9Q8.05 12.7 9.625 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialAddCallRoundedFilled.displayName = 'AmauiIconMaterialAddCallRoundedFilled';

export default IconMaterialAddCallRoundedFilled;
