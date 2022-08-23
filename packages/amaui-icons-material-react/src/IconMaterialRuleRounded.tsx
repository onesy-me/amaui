import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRuleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleRounded'
      short_name='Rule'

      {...props}
    >
      <path d="M16.525 8.175 20.075 4.625Q20.375 4.325 20.775 4.337Q21.175 4.35 21.475 4.65Q21.75 4.95 21.75 5.35Q21.75 5.75 21.475 6.05L17.25 10.3Q16.95 10.6 16.55 10.6Q16.15 10.6 15.85 10.3L13.7 8.15Q13.425 7.875 13.425 7.45Q13.425 7.025 13.7 6.75Q13.975 6.475 14.4 6.475Q14.825 6.475 15.1 6.75ZM3 9Q2.575 9 2.288 8.712Q2 8.425 2 8Q2 7.575 2.288 7.287Q2.575 7 3 7H10Q10.425 7 10.713 7.287Q11 7.575 11 8Q11 8.425 10.713 8.712Q10.425 9 10 9ZM17 17.4 15.1 19.3Q14.825 19.575 14.4 19.575Q13.975 19.575 13.7 19.3Q13.425 19.025 13.425 18.6Q13.425 18.175 13.7 17.9L15.6 16L13.7 14.1Q13.425 13.825 13.425 13.4Q13.425 12.975 13.7 12.7Q13.975 12.425 14.4 12.425Q14.825 12.425 15.1 12.7L17 14.6L18.9 12.7Q19.175 12.425 19.6 12.425Q20.025 12.425 20.3 12.7Q20.575 12.975 20.575 13.4Q20.575 13.825 20.3 14.1L18.4 16L20.3 17.9Q20.575 18.175 20.575 18.6Q20.575 19.025 20.3 19.3Q20.025 19.575 19.6 19.575Q19.175 19.575 18.9 19.3ZM3 17Q2.575 17 2.288 16.712Q2 16.425 2 16Q2 15.575 2.288 15.287Q2.575 15 3 15H10Q10.425 15 10.713 15.287Q11 15.575 11 16Q11 16.425 10.713 16.712Q10.425 17 10 17Z"/>
    </Icon>
  );
});

IconMaterialRuleRounded.displayName = 'AmauiIconMaterialRuleRounded';

export default IconMaterialRuleRounded;
