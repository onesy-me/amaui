import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewTimelineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimelineW100Filled'

      short_name='ViewTimeline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M282-306h156q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H282q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm120-160h156q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H402q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm120-160h156q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H522q-5.95 0-9.97 4.04-4.03 4.03-4.03 10 0 5.96 4.03 9.96 4.02 4 9.97 4ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialViewTimelineW100Filled.displayName = 'OnesyIconMaterialViewTimelineW100Filled';

export default IconMaterialViewTimelineW100Filled;
