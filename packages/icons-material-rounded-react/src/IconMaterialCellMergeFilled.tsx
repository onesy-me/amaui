import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCellMergeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellMergeFilled'

      short_name='CellMerge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-600q-17 0-28.5-11.5T120-640v-120q0-33 23.5-56.5T200-840h120q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760H200v120q0 17-11.5 28.5T160-600Zm640 0q-17 0-28.5-11.5T760-640v-120H640q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840h120q33 0 56.5 23.5T840-760v120q0 17-11.5 28.5T800-600ZM645-355l-97-97q-12-12-12-28t12-28l97-97q12-12 28.5-12t28.5 12q12 12 12 28.5T702-548l-29 28h167q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H673l29 28q12 12 12 28.5T702-355q-12 12-28.5 12T645-355Zm-386 0q-12-12-12.5-28.5T258-412l29-28H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h167l-29-28q-12-12-11.5-28.5T259-605q12-12 28-12t28 12l97 97q12 12 12 28t-12 28l-97 97q-12 12-28 12t-28-12Zm-59 235q-33 0-56.5-23.5T120-200v-120q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320v120h120q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H200Zm440 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200h120v-120q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320v120q0 33-23.5 56.5T760-120H640Z"/>
    </Icon>
  );
});

IconMaterialCellMergeFilled.displayName = 'OnesyIconMaterialCellMergeFilled';

export default IconMaterialCellMergeFilled;
