import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertTextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertTextW100'

      short_name='InsertText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-612H360q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494v278q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-278ZM112-142v-88q0-12.75 8.63-21.38Q129.25-260 142-260h30v-440h-30.18q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-88q0-12.75 8.63-21.38Q129.25-848 142-848h88q12.75 0 21.38 8.62Q260-830.75 260-818v30h440v-30.18q0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h88q12.75 0 21.38 8.62Q848-830.75 848-818v88q0 12.75-8.62 21.37Q830.75-700 818-700h-30v440h30.18q12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v88q0 12.75-8.62 21.37Q830.75-112 818-112h-88q-12.75 0-21.37-8.63Q700-129.25 700-142v-30H260v30.18q0 12.82-8.62 21.32-8.63 8.5-21.38 8.5h-88q-12.75 0-21.37-8.63Q112-129.25 112-142Zm148-58h440v-30.18q0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h30v-440h-30.18q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-30H260v30.18q0 12.82-8.62 21.32-8.63 8.5-21.38 8.5h-30v440h30.18q12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v30ZM140-728h92v-92h-92v92Zm588 0h92v-92h-92v92Zm0 588h92v-92h-92v92Zm-588 0h92v-92h-92v92Zm92-588Zm496 0Zm0 496Zm-496 0Z"/>
    </Icon>
  );
});

IconMaterialInsertTextW100.displayName = 'OnesyIconMaterialInsertTextW100';

export default IconMaterialInsertTextW100;
