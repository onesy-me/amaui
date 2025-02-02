import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVariableRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableRemoveFilled'

      short_name='VariableRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v42q0 17-13.5 28.5T795-560h-15q-91 0-155.5 64T560-340v15q2 18-9.5 31.5T522-280H160Zm620-3-56 55q-11 11-27.5 11.5T668-228q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11.5T892-452q11 11 11 28t-11 28l-55 56 55 56q11 11 11.5 27.5T892-228q-11 11-28 11t-28-11l-56-55Z"/>
    </Icon>
  );
});

IconMaterialVariableRemoveFilled.displayName = 'OnesyIconMaterialVariableRemoveFilled';

export default IconMaterialVariableRemoveFilled;
