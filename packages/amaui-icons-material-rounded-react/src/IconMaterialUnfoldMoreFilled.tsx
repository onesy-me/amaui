import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreFilled'

      short_name='UnfoldMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.225 8.325Q7.95 8.05 7.95 7.6q0-.45.275-.725L11.3 3.8q.15-.15.325-.213.175-.062.375-.062t.388.062q.187.063.312.213l3.1 3.1q.275.275.262.712-.012.438-.287.713-.275.275-.725.275-.45 0-.725-.275L12 6 9.65 8.35q-.275.275-.712.263-.438-.013-.713-.288ZM12 20.575q-.2 0-.375-.075t-.325-.2l-3.075-3.075q-.275-.275-.275-.725 0-.45.275-.725.275-.275.725-.275.45 0 .725.275L12 18.1l2.35-2.35q.275-.275.712-.262.438.012.713.287.275.275.275.725 0 .45-.275.725L12.7 20.3q-.125.125-.312.2-.188.075-.388.075Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreFilled.displayName = 'AmauiIconMaterialUnfoldMoreFilled';

export default IconMaterialUnfoldMoreFilled;
