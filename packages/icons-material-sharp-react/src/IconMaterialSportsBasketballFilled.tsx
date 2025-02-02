import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsBasketballFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBasketballFilled'

      short_name='SportsBasketball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M82-521q5-51 21-96.5t44-85.5q35 36 58.5 83.5T236-521H82Zm642 0q7-51 30-98t59-83q28 39 44 85t21 96H724ZM147-258q-28-39-44-84.5T82-439h154q-7 51-30.5 98T147-258Zm666 0q-36-36-59-83t-30-98h154q-5 50-21 96t-44 85ZM317-521q-8-72-39-133t-81-110q48-48 109.5-77T439-878v357H317Zm204 0v-357q71 8 132.5 37T763-764q-51 48-81.5 109.5T643-521H521ZM439-82q-72-8-133-37.5T197-197q51-48 81.5-109T317-439h122v357Zm82 0v-357h122q8 72 38.5 133.5T763-196q-48 48-109.5 77T521-82Z"/>
    </Icon>
  );
});

IconMaterialSportsBasketballFilled.displayName = 'OnesyIconMaterialSportsBasketballFilled';

export default IconMaterialSportsBasketballFilled;
