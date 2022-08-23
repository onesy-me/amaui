import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPreviewRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewRoundedW100Filled'
      short_name='Preview'

      {...props}
    >
      <path d="M12 15Q13.125 15 14.113 14.475Q15.1 13.95 15.825 13Q15.1 12.05 14.113 11.525Q13.125 11 12 11Q10.875 11 9.887 11.525Q8.9 12.05 8.175 13Q8.9 13.95 9.887 14.475Q10.875 15 12 15ZM12 15.7Q10.5 15.7 9.288 14.95Q8.075 14.2 7.425 13Q8.075 11.8 9.288 11.05Q10.5 10.3 12 10.3Q13.5 10.3 14.713 11.05Q15.925 11.8 16.575 13Q15.925 14.2 14.713 14.95Q13.5 15.7 12 15.7ZM12 14Q11.575 14 11.288 13.712Q11 13.425 11 13Q11 12.575 11.288 12.287Q11.575 12 12 12Q12.425 12 12.713 12.287Q13 12.575 13 13Q13 13.425 12.713 13.712Q12.425 14 12 14ZM5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H18.2Q18.825 4.3 19.263 4.737Q19.7 5.175 19.7 5.8V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7ZM5.8 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2V7H5V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19Z"/>
    </Icon>
  );
});

IconMaterialPreviewRoundedW100Filled.displayName = 'AmauiIconMaterialPreviewRoundedW100Filled';

export default IconMaterialPreviewRoundedW100Filled;
