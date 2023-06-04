import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTranslateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranslateW100Filled'

      short_name='Translate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.075 20q-.475 0-.687-.312-.213-.313-.038-.738l2.95-7.775q.125-.325.45-.55.325-.225.7-.225.325 0 .65.225t.45.55l2.95 7.8q.175.425-.038.725-.212.3-.687.3-.225 0-.425-.15-.2-.15-.275-.35l-.675-1.95h-3.9l-.675 1.925q-.075.2-.287.362-.213.163-.463.163ZM15 16.15h2.85l-1.4-3.95h-.05ZM8.1 9.175q.325.575.688 1.075.362.5.862 1.05.9-.975 1.488-1.975.587-1 .962-2.125H4.05q-.35 0-.575-.225Q3.25 6.75 3.25 6.4t.225-.575Q3.7 5.6 4.05 5.6h4.8v-.8q0-.35.225-.575Q9.3 4 9.65 4t.575.225q.225.225.225.575v.8h4.8q.35 0 .575.225.225.225.225.575t-.225.575q-.225.225-.575.225H13.7q-.425 1.4-1.138 2.738-.712 1.337-1.762 2.512l1.9 1.95-.6 1.65-2.45-2.45-3.425 3.425q-.25.25-.575.25-.325 0-.575-.25-.25-.25-.25-.575 0-.325.25-.575L8.55 12.4q-.55-.6-.988-1.225-.437-.625-.787-1.3-.225-.425-.012-.75.212-.325.712-.325.175 0 .35.112.175.113.275.263Z"/>
    </Icon>
  );
});

IconMaterialTranslateW100Filled.displayName = 'AmauiIconMaterialTranslateW100Filled';

export default IconMaterialTranslateW100Filled;
