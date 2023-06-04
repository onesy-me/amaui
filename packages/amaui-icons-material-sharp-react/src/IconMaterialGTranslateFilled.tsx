import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGTranslateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GTranslateFilled'

      short_name='GTranslate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 22-1-3H4q-.825 0-1.412-.587Q2 17.825 2 17V4q0-.825.588-1.413Q3.175 2 4 2h6l.875 3H20q.875 0 1.438.562Q22 6.125 22 7v13q0 .825-.562 1.413Q20.875 22 20 22Zm-4.85-7.4q1.725 0 2.838-1.112Q11.1 12.375 11.1 10.6q0-.2-.012-.363-.013-.162-.063-.337h-3.95v1.55H9.3q-.2.7-.763 1.087-.562.388-1.362.388-.975 0-1.675-.7-.7-.7-.7-1.725 0-1.025.7-1.725.7-.7 1.675-.7.45 0 .85.162.4.163.725.488L9.975 7.55Q9.45 7 8.713 6.7q-.738-.3-1.563-.3-1.675 0-2.862 1.187Q3.1 8.775 3.1 10.5q0 1.725 1.188 2.912Q5.475 14.6 7.15 14.6Zm6.7.5.55-.525q-.35-.425-.637-.825-.288-.4-.563-.85Zm1.25-1.275q.7-.825 1.063-1.575.362-.75.487-1.175h-3.975l.3 1.05h1q.2.375.475.813.275.437.65.887ZM13 21h7q.45 0 .725-.288Q21 20.425 21 20V7q0-.45-.275-.725Q20.45 6 20 6h-8.825l1.175 4.05h1.975V9h1.025v1.05H19v1.025h-1.275q-.25.95-.75 1.85-.5.9-1.175 1.675l2.725 2.675L17.8 18l-2.7-2.7-.9.925L15 19Z"/>
    </Icon>
  );
});

IconMaterialGTranslateFilled.displayName = 'AmauiIconMaterialGTranslateFilled';

export default IconMaterialGTranslateFilled;
