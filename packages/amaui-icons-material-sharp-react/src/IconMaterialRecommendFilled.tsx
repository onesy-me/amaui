import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecommendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecommendFilled'

      short_name='Recommend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 10.425V18h8.45L18 12.075V10h-5.6l.6-3.4V6l-1-1ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialRecommendFilled.displayName = 'AmauiIconMaterialRecommendFilled';

export default IconMaterialRecommendFilled;
