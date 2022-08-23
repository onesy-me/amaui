import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrafficSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrafficSharpFilled'
      short_name='Traffic'

      {...props}
    >
      <path d="M12 18Q12.65 18 13.075 17.575Q13.5 17.15 13.5 16.5Q13.5 15.85 13.075 15.425Q12.65 15 12 15Q11.35 15 10.925 15.425Q10.5 15.85 10.5 16.5Q10.5 17.15 10.925 17.575Q11.35 18 12 18ZM12 13.5Q12.65 13.5 13.075 13.075Q13.5 12.65 13.5 12Q13.5 11.35 13.075 10.925Q12.65 10.5 12 10.5Q11.35 10.5 10.925 10.925Q10.5 11.35 10.5 12Q10.5 12.65 10.925 13.075Q11.35 13.5 12 13.5ZM12 9Q12.65 9 13.075 8.575Q13.5 8.15 13.5 7.5Q13.5 6.85 13.075 6.425Q12.65 6 12 6Q11.35 6 10.925 6.425Q10.5 6.85 10.5 7.5Q10.5 8.15 10.925 8.575Q11.35 9 12 9ZM7 21V18.85Q5.725 18.5 4.863 17.45Q4 16.4 4 15H7V13.85Q5.725 13.5 4.863 12.45Q4 11.4 4 10H7V8.85Q5.725 8.5 4.863 7.45Q4 6.4 4 5H7V3H17V5H20Q20 6.4 19.138 7.45Q18.275 8.5 17 8.85V10H20Q20 11.4 19.138 12.45Q18.275 13.5 17 13.85V15H20Q20 16.4 19.138 17.45Q18.275 18.5 17 18.85V21Z"/>
    </Icon>
  );
});

IconMaterialTrafficSharpFilled.displayName = 'AmauiIconMaterialTrafficSharpFilled';

export default IconMaterialTrafficSharpFilled;
