import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSocialDistanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialDistanceFilled'

      short_name='SocialDistance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 7q-.825 0-1.412-.588Q4 5.825 4 5t.588-1.413Q5.175 3 6 3t1.412.587Q8 4.175 8 5q0 .825-.588 1.412Q6.825 7 6 7Zm-4 4v-.575q0-.6.325-1.1.325-.5.9-.75.65-.275 1.337-.425Q5.25 8 6 8t1.438.15q.687.15 1.337.425.575.25.9.75.325.5.325 1.1V11Zm16-4q-.825 0-1.413-.588Q16 5.825 16 5t.587-1.413Q17.175 3 18 3q.825 0 1.413.587Q20 4.175 20 5q0 .825-.587 1.412Q18.825 7 18 7Zm-4 4v-.575q0-.6.325-1.1.325-.5.9-.75.65-.275 1.337-.425Q17.25 8 18 8t1.438.15q.687.15 1.337.425.575.25.9.75.325.5.325 1.1V11Zm-8.7 9.3-2.6-2.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l2.625-2.625Q5.6 13.4 6 13.4t.7.3q.275.275.275.7 0 .425-.275.7l-.9.9h12.4l-.925-.925Q17 14.8 17 14.4t.3-.7q.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.625 2.625Q18.4 20.6 18 20.6t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l.9-.9H5.8l.925.925Q7 19.2 7 19.6t-.3.7q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialSocialDistanceFilled.displayName = 'AmauiIconMaterialSocialDistanceFilled';

export default IconMaterialSocialDistanceFilled;
