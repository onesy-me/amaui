import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentWorried = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentWorried'

      short_name='SentimentWorried'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M452-240h56q55 0 93.5-35t38.5-85q0-50-38.5-85T508-480h-56q-55 0-93.5 35T320-360q0 50 38.5 85t93.5 35Zm0-60q-30 0-51-17.5T380-360q0-25 21-42.5t51-17.5h56q30 0 51 17.5t21 42.5q0 25-21 42.5T508-300h-56ZM320-560q42 0 75.5-24t41.5-65q2-12-6-21.5t-21-9.5q-11 0-20 5.5T376-658q-7 17-22 27.5T320-620h-50q-13 0-21.5 8.5T240-590q0 13 8.5 21.5T270-560h50Zm320 0h50q13 0 21.5-8.5T720-590q0-13-8.5-21.5T690-620h-50q-19 0-34-10.5T584-658q-5-11-14-16.5t-20-5.5q-13 0-21 9t-6 21q8 41 41.5 65.5T640-560ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialSentimentWorried.displayName = 'OnesyIconMaterialSentimentWorried';

export default IconMaterialSentimentWorried;
