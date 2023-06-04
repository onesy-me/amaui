import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlakyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlakyW100'

      short_name='Flaky'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.025 16.025 2.25-2.225q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-2.325 2.325q-.175.175-.4.175-.225 0-.4-.175l-1.2-1.2q-.1-.1-.112-.225-.013-.125.112-.25.1-.1.25-.1t.25.1Zm-5.3-6.775L9.9 10.425q.1.1.25.087.15-.012.25-.112t.1-.238q0-.137-.1-.237l-1.15-1.15L10.425 7.6q.1-.1.087-.25-.012-.15-.112-.25t-.237-.1q-.138 0-.238.1l-1.15 1.15L7.6 7.075q-.1-.1-.25-.088Q7.2 7 7.1 7.1t-.1.237q0 .138.1.238l1.15 1.15L7.075 9.9q-.1.1-.087.25.012.15.112.25t.238.1q.137 0 .237-.1ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.325 0 5.663-2.337Q20 15.325 20 12q0-1.65-.625-3.1-.625-1.45-1.725-2.55l-11.3 11.3q1.1 1.1 2.55 1.725Q10.35 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialFlakyW100.displayName = 'AmauiIconMaterialFlakyW100';

export default IconMaterialFlakyW100;
