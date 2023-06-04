import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueryStatsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueryStatsW100'

      short_name='QueryStats'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.325 21.825 18.05 18.6q-.425.325-.925.5t-1.05.175q-1.35 0-2.275-.925-.925-.925-.925-2.275 0-1.35.925-2.275.925-.925 2.275-.925 1.35 0 2.275.925.925.925.925 2.275 0 .575-.187 1.088-.188.512-.538.937l3.275 3.225q.125.1.125.237 0 .138-.125.263-.1.1-.237.1-.138 0-.263-.1Zm-5.25-3.25q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775-.725-.725-1.775-.725-1.05 0-1.775.725-.725.725-.725 1.775 0 1.05.725 1.775.725.725 1.775.725ZM2.15 17.025q-.125-.075-.15-.213-.025-.137.05-.262l3.475-5.575q.2-.325.588-.35.387-.025.637.25L9.075 13.6 12.4 8.2q.225-.35.638-.363.412-.012.637.338l1.2 1.825q-.2.05-.362.087-.163.038-.338.088L13.05 8.5l-3.3 5.4q-.2.325-.587.35-.388.025-.638-.25l-2.35-2.75-3.525 5.675q-.075.125-.225.162-.15.038-.275-.062Zm15.65-6.9q-.175-.05-.338-.088-.162-.037-.337-.062L21.35 3.25q.075-.125.225-.163.15-.037.275.063.125.075.15.212.025.138-.05.263Z"/>
    </Icon>
  );
});

IconMaterialQueryStatsW100.displayName = 'AmauiIconMaterialQueryStatsW100';

export default IconMaterialQueryStatsW100;
