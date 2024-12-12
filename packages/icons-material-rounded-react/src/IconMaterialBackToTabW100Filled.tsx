import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackToTabW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackToTabW100Filled'

      short_name='BackToTab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-700v146q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-164q0-12.75 8.63-21.38Q149.25-748 162-748h164q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H179l227 226q4.62 4.09 4.81 9.55Q411-479 406-474q-5 5-10 5t-10-5L160-700Zm32 488q-26 0-43-17t-17-43v-154q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v154q0 14 9 23t23 9h262q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H192Zm621.96-240q-5.96 0-9.96-4.02-4-4.03-4-9.98v-222q0-14-9-23t-23-9H454q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h314q26 0 43 17t17 43v222q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM598-212q-12.75 0-21.37-8.63Q568-229.25 568-242v-80q0-12.75 8.63-21.38Q585.25-352 598-352h200q12.75 0 21.38 8.62Q828-334.75 828-322v80q0 12.75-8.62 21.37Q810.75-212 798-212H598Z"/>
    </Icon>
  );
});

IconMaterialBackToTabW100Filled.displayName = 'OnesyIconMaterialBackToTabW100Filled';

export default IconMaterialBackToTabW100Filled;
