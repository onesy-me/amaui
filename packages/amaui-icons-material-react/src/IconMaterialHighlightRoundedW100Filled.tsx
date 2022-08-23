import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHighlightRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightRoundedW100Filled'
      short_name='Highlight'

      {...props}
    >
      <path d="M6.4 7.9 5.15 6.65Q5.05 6.55 5.038 6.412Q5.025 6.275 5.15 6.15Q5.275 6.025 5.4 6.025Q5.525 6.025 5.65 6.15L6.9 7.4Q7 7.5 7.013 7.637Q7.025 7.775 6.9 7.9Q6.775 8.025 6.65 8.025Q6.525 8.025 6.4 7.9ZM12 6.15Q11.85 6.15 11.75 6.05Q11.65 5.95 11.65 5.8V4Q11.65 3.85 11.75 3.75Q11.85 3.65 12 3.65Q12.15 3.65 12.25 3.75Q12.35 3.85 12.35 4V5.8Q12.35 5.95 12.25 6.05Q12.15 6.15 12 6.15ZM17.1 7.9Q16.975 7.775 16.975 7.65Q16.975 7.525 17.1 7.4L18.35 6.15Q18.45 6.05 18.587 6.037Q18.725 6.025 18.85 6.15Q18.975 6.275 18.975 6.4Q18.975 6.525 18.85 6.65L17.6 7.9Q17.5 8 17.363 8.012Q17.225 8.025 17.1 7.9ZM11.8 20.7Q11.175 20.7 10.738 20.262Q10.3 19.825 10.3 19.2V16.45L7.75 13.9Q7.55 13.7 7.425 13.412Q7.3 13.125 7.3 12.825V11.05Q7.3 10.725 7.513 10.512Q7.725 10.3 8.05 10.3H15.95Q16.275 10.3 16.488 10.512Q16.7 10.725 16.7 11.05V12.825Q16.7 13.125 16.575 13.412Q16.45 13.7 16.25 13.9L13.7 16.45V19.2Q13.7 19.825 13.263 20.262Q12.825 20.7 12.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialHighlightRoundedW100Filled.displayName = 'AmauiIconMaterialHighlightRoundedW100Filled';

export default IconMaterialHighlightRoundedW100Filled;
