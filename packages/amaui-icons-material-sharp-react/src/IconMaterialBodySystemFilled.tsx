import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBodySystemFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodySystemFilled'

      short_name='BodySystem'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m316 816 76-364-72 28v96h-80V428l202-85q14-6 29.5-7.5T501 339q14 5 26.5 14t20.5 23l40 64q28 45 73.5 70.5T760 536v80q-70 0-125.5-28T540 516l-24 60 84 80v160h-80V694l-78-72-42 194h-84Zm224-500q-33 0-56.5-23.5T460 236q0-33 23.5-56.5T540 156q33 0 56.5 23.5T620 236q0 33-23.5 56.5T540 316Zm-60 660q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-119 61.5-214T302 218l36 71q-79 39-128.5 115.5T160 576q0 134 93 227t227 93q134 0 227-93t93-227h80q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialBodySystemFilled.displayName = 'AmauiIconMaterialBodySystemFilled';

export default IconMaterialBodySystemFilled;
