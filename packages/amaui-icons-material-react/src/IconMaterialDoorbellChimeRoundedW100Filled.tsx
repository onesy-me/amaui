import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorbellChimeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellChimeRoundedW100Filled'
      short_name='DoorbellChime'

      {...props}
    >
      <path d="m21.6 16.25-.5-.5q.75-.75 1.15-1.725.4-.975.4-2.025 0-1.05-.4-2.025-.4-.975-1.125-1.725l.475-.5q.85.85 1.3 1.95.45 1.1.45 2.3 0 1.2-.45 2.3-.45 1.1-1.3 1.95Zm-2.675-2-.525-.5q.35-.35.55-.8.2-.45.2-.95 0-.5-.2-.95-.2-.45-.55-.8l.525-.5q.45.45.688 1.025.237.575.237 1.225 0 .65-.237 1.225-.238.575-.688 1.025ZM12 21.35q-1.825 0-3.087-1.263Q7.65 18.825 7.65 17V7q0-1.825 1.263-3.088Q10.175 2.65 12 2.65q1.825 0 3.088 1.262Q16.35 5.175 16.35 7v10q0 1.825-1.262 3.087Q13.825 21.35 12 21.35Zm0-3.5q.775 0 1.312-.538.538-.537.538-1.312t-.538-1.312q-.537-.538-1.312-.538t-1.312.538q-.538.537-.538 1.312t.538 1.312q.537.538 1.312.538Zm0-.7q-.525 0-.837-.362-.313-.363-.313-.788 0-.425.313-.788.312-.362.837-.362.525 0 .838.312.312.313.312.838 0 .425-.312.788-.313.362-.838.362Zm0-7.3q.775 0 1.312-.538.538-.537.538-1.312t-.538-1.313Q12.775 6.15 12 6.15t-1.312.537Q10.15 7.225 10.15 8q0 .775.538 1.312.537.538 1.312.538Z"/>
    </Icon>
  );
});

IconMaterialDoorbellChimeRoundedW100Filled.displayName = 'AmauiIconMaterialDoorbellChimeRoundedW100Filled';

export default IconMaterialDoorbellChimeRoundedW100Filled;
