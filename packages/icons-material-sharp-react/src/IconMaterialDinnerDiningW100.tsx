import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDinnerDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DinnerDiningW100'

      short_name='DinnerDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m188-148-56-56h696l-56 56H188Zm-16-106q7-14 17.5-25.5T212-302v-322h-40v-28h40v-40h-40v-28h40v-40h-40v-28h298v68h318v28H470v68H340v282q26 3 51 13t45 27q6-59 51-97t105-38q64.7 0 110.35 44.96Q748-347.07 748-282v28H172Zm290-28h258q0-54-37.5-90.5T591-409q-54 0-91.5 36.5T462-282ZM340-720h102v-40H340v40Zm0 68h102v-40H340v40Zm-100-68h72v-40h-72v40Zm0 68h72v-40h-72v40Zm0 331q17-9 35-14t37-7.33V-624h-72v303Zm351 39Z"/>
    </Icon>
  );
});

IconMaterialDinnerDiningW100.displayName = 'OnesyIconMaterialDinnerDiningW100';

export default IconMaterialDinnerDiningW100;
