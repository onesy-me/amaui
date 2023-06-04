import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GrassW100Filled'

      short_name='Grass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18v-.7h4.6q-.425-1.7-1.662-2.937Q5.7 13.125 4 12.7q.4-.1.788-.15.387-.05.812-.05 2.675 0 4.537 1.412Q12 15.325 12 18Zm8.7 0q0-.35-.037-.763-.038-.412-.163-.837.75-1.575 2.225-2.738Q16.2 12.5 18.4 12.5q.425 0 .812.05.388.05.788.15-1.7.425-2.925 1.663Q15.85 15.6 15.4 17.3H20v.7Zm-.4-2.325q-.275-1.625.05-3.025t1.125-2.45q.8-1.05 2.013-1.713 1.212-.662 2.687-.762-1.65 1.05-2.45 2.412-.8 1.363-1.075 2.713-.725.4-1.462 1.25-.738.85-.888 1.575Zm-.75-1.225q-.35-.5-.925-1-.575-.5-1.175-.775.075-.225.112-.563.038-.337.038-.662 0-1.525-.487-2.875Q8.625 7.225 7.75 6.1q1.475.6 2.65 1.95 1.175 1.35 1.6 3.4-.275.65-.375 1.475-.1.825-.075 1.525Z"/>
    </Icon>
  );
});

IconMaterialGrassW100Filled.displayName = 'AmauiIconMaterialGrassW100Filled';

export default IconMaterialGrassW100Filled;
