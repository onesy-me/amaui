import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDayTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayTwoTone'
      short_name='ViewDay'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10h15v4H4z" opacity=".3"/><path d="M2 18h19v2H2zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6H4v-4h15v4zM2 4h19v2H2z"/>
    </Icon>
  );
});

export default IconMaterialViewDayTwoTone;
