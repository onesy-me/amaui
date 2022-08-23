import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkRoundedW100Filled'
      short_name='Link'

      {...props}
    >
      <path d="M7 15.8Q5.425 15.8 4.312 14.688Q3.2 13.575 3.2 12Q3.2 10.425 4.312 9.312Q5.425 8.2 7 8.2H10.15Q10.3 8.2 10.4 8.3Q10.5 8.4 10.5 8.55Q10.5 8.7 10.4 8.8Q10.3 8.9 10.15 8.9H7Q5.725 8.9 4.812 9.812Q3.9 10.725 3.9 12Q3.9 13.275 4.812 14.188Q5.725 15.1 7 15.1H10.15Q10.3 15.1 10.4 15.2Q10.5 15.3 10.5 15.45Q10.5 15.6 10.4 15.7Q10.3 15.8 10.15 15.8ZM9 12.35Q8.85 12.35 8.75 12.25Q8.65 12.15 8.65 12Q8.65 11.85 8.75 11.75Q8.85 11.65 9 11.65H15Q15.15 11.65 15.25 11.75Q15.35 11.85 15.35 12Q15.35 12.15 15.25 12.25Q15.15 12.35 15 12.35ZM13.85 15.8Q13.7 15.8 13.6 15.7Q13.5 15.6 13.5 15.45Q13.5 15.3 13.6 15.2Q13.7 15.1 13.85 15.1H17Q18.275 15.1 19.188 14.188Q20.1 13.275 20.1 12Q20.1 10.725 19.188 9.812Q18.275 8.9 17 8.9H13.85Q13.7 8.9 13.6 8.8Q13.5 8.7 13.5 8.55Q13.5 8.4 13.6 8.3Q13.7 8.2 13.85 8.2H17Q18.575 8.2 19.688 9.312Q20.8 10.425 20.8 12Q20.8 13.575 19.688 14.688Q18.575 15.8 17 15.8Z"/>
    </Icon>
  );
});

IconMaterialLinkRoundedW100Filled.displayName = 'AmauiIconMaterialLinkRoundedW100Filled';

export default IconMaterialLinkRoundedW100Filled;
