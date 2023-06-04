import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalFloristW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalFloristW100Filled'

      short_name='LocalFlorist'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.5q0-1.275.613-2.525.612-1.25 1.612-2.25t2.25-1.612Q17.725 13.5 19 13.5q0 1.275-.612 2.525-.613 1.25-1.613 2.25t-2.25 1.612q-1.25.613-2.525.613Zm0 0q0-1.275-.613-2.525-.612-1.25-1.612-2.25t-2.25-1.612Q6.275 13.5 5 13.5q0 1.275.613 2.525.612 1.25 1.612 2.25t2.25 1.612q1.25.613 2.525.613Zm0-10.525q.85 0 1.413-.563.562-.562.562-1.412 0-.85-.562-1.413-.563-.562-1.413-.562-.85 0-1.412.562-.563.563-.563 1.413 0 .85.563 1.412.562.563 1.412.563Zm0 3.2q-.65 0-1.25-.438-.6-.437-.8-1.112h-.625q-.875 0-1.487-.6-.613-.6-.613-1.475 0-.35.175-.775.175-.425.475-.775-.275-.35-.45-.775Q7.25 6.8 7.25 6.45q0-.875.6-1.475.6-.6 1.475-.6h.625q.2-.675.8-1.113.6-.437 1.25-.437t1.25.437q.6.438.8 1.113h.625q.875 0 1.475.6.6.6.6 1.475 0 .35-.163.775-.162.425-.462.775.275.325.45.762.175.438.175.788 0 .875-.6 1.475-.6.6-1.475.6h-.625q-.2.675-.8 1.112-.6.438-1.25.438Z"/>
    </Icon>
  );
});

IconMaterialLocalFloristW100Filled.displayName = 'AmauiIconMaterialLocalFloristW100Filled';

export default IconMaterialLocalFloristW100Filled;
