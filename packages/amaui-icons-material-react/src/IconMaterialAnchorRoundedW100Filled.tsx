import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAnchorRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnchorRoundedW100Filled'
      short_name='Anchor'

      {...props}
    >
      <path d="M11.5 20.85Q9.825 20.85 8.388 20.363Q6.95 19.875 5.9 19.025Q4.85 18.175 4.25 17.012Q3.65 15.85 3.65 14.5V13.85Q3.65 13.6 3.875 13.488Q4.1 13.375 4.3 13.525L5.65 14.55Q5.8 14.675 5.8 14.85Q5.8 15.025 5.675 15.15L4.65 16.175Q5.375 17.975 7.075 19.013Q8.775 20.05 11.15 20.15V11.1H8.5Q8.35 11.1 8.25 11Q8.15 10.9 8.15 10.75Q8.15 10.6 8.25 10.5Q8.35 10.4 8.5 10.4H11.15V7.825Q10.3 7.65 9.725 7.012Q9.15 6.375 9.15 5.5Q9.15 4.525 9.838 3.837Q10.525 3.15 11.5 3.15Q12.475 3.15 13.163 3.837Q13.85 4.525 13.85 5.5Q13.85 6.375 13.275 7.012Q12.7 7.65 11.85 7.825V10.4H14.5Q14.65 10.4 14.75 10.5Q14.85 10.6 14.85 10.75Q14.85 10.9 14.75 11Q14.65 11.1 14.5 11.1H11.85V20.15Q14.225 20.05 15.938 19.013Q17.65 17.975 18.35 16.175L17.325 15.15Q17.2 15.025 17.2 14.85Q17.2 14.675 17.35 14.55L18.7 13.525Q18.9 13.375 19.125 13.488Q19.35 13.6 19.35 13.85V14.5Q19.35 15.85 18.75 17.012Q18.15 18.175 17.1 19.025Q16.05 19.875 14.613 20.363Q13.175 20.85 11.5 20.85ZM11.5 7.15Q12.175 7.15 12.663 6.662Q13.15 6.175 13.15 5.5Q13.15 4.825 12.663 4.337Q12.175 3.85 11.5 3.85Q10.825 3.85 10.338 4.337Q9.85 4.825 9.85 5.5Q9.85 6.175 10.338 6.662Q10.825 7.15 11.5 7.15Z"/>
    </Icon>
  );
});

export default IconMaterialAnchorRoundedW100Filled;
