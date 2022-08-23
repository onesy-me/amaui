import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAnchorRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnchorRoundedW100'
      short_name='Anchor'

      {...props}
    >
      <path d="M12 20.85Q10.325 20.85 8.888 20.363Q7.45 19.875 6.4 19.025Q5.35 18.175 4.75 17.012Q4.15 15.85 4.15 14.5V13.85Q4.15 13.6 4.375 13.488Q4.6 13.375 4.8 13.525L6.15 14.55Q6.3 14.675 6.3 14.85Q6.3 15.025 6.175 15.15L5.15 16.175Q5.875 17.975 7.575 19.013Q9.275 20.05 11.65 20.15V11.1H9Q8.85 11.1 8.75 11Q8.65 10.9 8.65 10.75Q8.65 10.6 8.75 10.5Q8.85 10.4 9 10.4H11.65V7.825Q10.8 7.65 10.225 7.012Q9.65 6.375 9.65 5.5Q9.65 4.525 10.338 3.837Q11.025 3.15 12 3.15Q12.975 3.15 13.663 3.837Q14.35 4.525 14.35 5.5Q14.35 6.375 13.775 7.012Q13.2 7.65 12.35 7.825V10.4H15Q15.15 10.4 15.25 10.5Q15.35 10.6 15.35 10.75Q15.35 10.9 15.25 11Q15.15 11.1 15 11.1H12.35V20.15Q14.725 20.05 16.438 19.013Q18.15 17.975 18.85 16.175L17.825 15.15Q17.7 15.025 17.7 14.85Q17.7 14.675 17.85 14.55L19.2 13.525Q19.4 13.375 19.625 13.488Q19.85 13.6 19.85 13.85V14.5Q19.85 15.85 19.25 17.012Q18.65 18.175 17.6 19.025Q16.55 19.875 15.113 20.363Q13.675 20.85 12 20.85ZM12 7.15Q12.675 7.15 13.163 6.662Q13.65 6.175 13.65 5.5Q13.65 4.825 13.163 4.337Q12.675 3.85 12 3.85Q11.325 3.85 10.838 4.337Q10.35 4.825 10.35 5.5Q10.35 6.175 10.838 6.662Q11.325 7.15 12 7.15Z"/>
    </Icon>
  );
});

IconMaterialAnchorRoundedW100.displayName = 'AmauiIconMaterialAnchorRoundedW100';

export default IconMaterialAnchorRoundedW100;
