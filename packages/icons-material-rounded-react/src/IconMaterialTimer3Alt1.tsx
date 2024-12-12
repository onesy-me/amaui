import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer3Alt1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3Alt1'

      short_name='Timer3Alt1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-270q35 0 57.5-25t22.5-55v-30q0-23-17-41.5T540-440q26 0 43-18.5t17-41.5v-30q0-30-22.5-55T520-610H400q-17 0-28.5 11.5T360-570q0 17 11.5 28.5T400-530h120v50h-80q-17 0-28.5 11.5T400-440q0 17 11.5 28.5T440-400h80v50H400q-17 0-28.5 11.5T360-310q0 17 11.5 28.5T400-270h120ZM400-840q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 760q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialTimer3Alt1.displayName = 'OnesyIconMaterialTimer3Alt1';

export default IconMaterialTimer3Alt1;
