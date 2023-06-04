import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImportContactsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportContactsW100Filled'

      short_name='ImportContacts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 17.4q1.25-.725 2.525-1.037 1.275-.313 2.625-.313.9 0 1.575.1.675.1 1.125.25.3.125.55-.038.25-.162.25-.512V7.1q0-.225-.125-.4-.125-.175-.425-.3-.825-.275-1.437-.363Q18.4 5.95 17.5 5.95q-1.35 0-2.7.412-1.35.413-2.45 1.238Zm-.35.75q-.2 0-.362-.05-.163-.05-.313-.125-1.125-.6-2.337-.913-1.213-.312-2.488-.312-.7 0-1.375.087-.675.088-1.325.313-.55.2-1.025-.162Q2.3 16.625 2.3 16V7.05q0-.4.213-.738.212-.337.587-.462.8-.325 1.663-.463.862-.137 1.737-.137 1.475 0 2.875.438 1.4.437 2.625 1.262 1.225-.825 2.625-1.262 1.4-.438 2.875-.438.875 0 1.738.137.862.138 1.662.463.375.125.588.462.212.338.212.738V16q0 .625-.525.962-.525.338-1.125.138-.625-.2-1.262-.275-.638-.075-1.288-.075-1.275 0-2.487.312-1.213.313-2.338.913-.15.075-.312.125-.163.05-.363.05Z"/>
    </Icon>
  );
});

IconMaterialImportContactsW100Filled.displayName = 'AmauiIconMaterialImportContactsW100Filled';

export default IconMaterialImportContactsW100Filled;
