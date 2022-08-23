import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShareReviewsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareReviewsSharp'
      short_name='ShareReviews'

      {...props}
    >
      <path d="M14.5 15q.825 0 1.413-.588.587-.587.587-1.412t-.587-1.413Q15.325 11 14.5 11q-.375 0-.712.137-.338.138-.613.363L10.5 10.15v-.3l2.675-1.35q.275.225.613.363.337.137.712.137.825 0 1.413-.588Q16.5 7.825 16.5 7t-.587-1.412Q15.325 5 14.5 5q-.825 0-1.412.588Q12.5 6.175 12.5 7v.15L9.825 8.5q-.275-.225-.612-.363Q8.875 8 8.5 8q-.825 0-1.412.587Q6.5 9.175 6.5 10q0 .825.588 1.412Q7.675 12 8.5 12q.375 0 .713-.137.337-.138.612-.363l2.675 1.35V13q0 .825.588 1.412.587.588 1.412.588ZM2 22V2h20v16H6Zm2-4.825L5.175 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialShareReviewsSharp.displayName = 'AmauiIconMaterialShareReviewsSharp';

export default IconMaterialShareReviewsSharp;
