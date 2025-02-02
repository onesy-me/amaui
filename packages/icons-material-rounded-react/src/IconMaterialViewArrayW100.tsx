import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewArrayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayW100'

      short_name='ViewArray'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-295v-370q0-17.92 12.56-30.46t30.5-12.54q17.94 0 30.44 12.54T258-665v370q0 17.92-12.56 30.46T214.94-252q-17.94 0-30.44-12.54T172-295Zm189 43q-17.92 0-30.46-12.54T318-295v-370q0-17.92 12.54-30.46T361-708h238q17.92 0 30.46 12.54T642-665v370q0 17.92-12.54 30.46T599-252H361Zm341-43v-370q0-17.92 12.56-30.46t30.5-12.54q17.94 0 30.44 12.54T788-665v370q0 17.92-12.56 30.46T744.94-252q-17.94 0-30.44-12.54T702-295Zm-341 15h238q6 0 10.5-4.5T614-295v-370q0-6-4.5-10.5T599-680H361q-6 0-10.5 4.5T346-665v370q0 6 4.5 10.5T361-280Zm119-200Z"/>
    </Icon>
  );
});

IconMaterialViewArrayW100.displayName = 'OnesyIconMaterialViewArrayW100';

export default IconMaterialViewArrayW100;
