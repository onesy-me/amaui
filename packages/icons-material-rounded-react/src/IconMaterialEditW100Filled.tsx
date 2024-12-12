import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditW100Filled'

      short_name='Edit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-172q-12.75 0-21.37-8.63Q172-189.25 172-202v-25q0-12.44 5-23.72T190-270l509-510q4.39-3.83 9.7-5.91Q714-788 719.68-788q5.67 0 11 1.5Q736-785 741-780l39 39q5 5 6.5 10.41t1.5 10.82q0 5.77-1.91 11.07-1.92 5.31-6.09 9.7L270-190q-8 8-19.28 13-11.28 5-23.72 5h-25Zm497-487 61-60-41-41-60 61 40 40Z"/>
    </Icon>
  );
});

IconMaterialEditW100Filled.displayName = 'OnesyIconMaterialEditW100Filled';

export default IconMaterialEditW100Filled;
