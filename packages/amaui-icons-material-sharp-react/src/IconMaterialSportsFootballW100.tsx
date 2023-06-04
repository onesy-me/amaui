import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsFootballW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsFootballW100'

      short_name='SportsFootball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12Zm-2.05 6.85-4.8-4.8q-.175 1-.162 2.412Q5 17.875 5.2 18.75q.725.225 2.275.263 1.55.037 2.475-.163Zm.85-.15q1.5-.225 2.95-.912 1.45-.688 2.4-1.638.9-.9 1.588-2.325.687-1.425.962-2.975L13.15 5.3q-1.425.225-2.862.937-1.438.713-2.313 1.588-.875.875-1.587 2.312Q5.675 11.575 5.3 13.2Zm-.9-4.1-.5-.5 4.7-4.7.5.5Zm8.95-4.6q.175-1.125.163-2.525Q19 6.075 18.8 5.25q-.725-.225-2.275-.263-1.55-.037-2.475.163ZM7.975 19.7q-1.15 0-2.175-.138-1.025-.137-1.175-.287-.125-.15-.225-1.075-.1-.925-.1-1.925 0-2.75.813-5.075.812-2.325 2.287-3.8 1.475-1.475 3.813-2.288Q13.55 4.3 16.325 4.3q1.075 0 1.913.112.837.113 1.012.263.225.175.338 1.062.112.888.112 1.938 0 2.85-.8 5.187-.8 2.338-2.25 3.788-1.45 1.45-3.762 2.25-2.313.8-4.913.8Z"/>
    </Icon>
  );
});

IconMaterialSportsFootballW100.displayName = 'AmauiIconMaterialSportsFootballW100';

export default IconMaterialSportsFootballW100;
