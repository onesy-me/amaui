import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarW100'

      short_name='TableBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 15.725 7.8 18.5q-.05.1-.125.163-.075.062-.2.062-.2 0-.3-.15-.1-.15-.025-.325l1.1-2.75q.1-.2.287-.338.188-.137.413-.137h2.7v-5.05q-3.3-.05-5.538-.775-2.237-.725-2.237-1.7 0-1.05 2.35-1.763 2.35-.712 5.775-.712 3.425 0 5.775.712 2.35.713 2.35 1.763 0 1-2.25 1.712-2.25.713-5.525.763v5.05h2.7q.225 0 .413.137.187.138.287.338l1.1 2.75q.05.075.038.163-.013.087-.063.162-.05.075-.125.113-.075.037-.175.037-.125 0-.2-.062-.075-.063-.125-.163l-1.1-2.775Zm3.1-6.45q2.775 0 4.938-.525 2.162-.525 2.487-1.25-.325-.725-2.487-1.25-2.163-.525-4.938-.525t-4.938.525Q4.9 6.775 4.575 7.5q.325.725 2.487 1.25 2.163.525 4.938.525ZM12 7.5Z"/>
    </Icon>
  );
});

IconMaterialTableBarW100.displayName = 'AmauiIconMaterialTableBarW100';

export default IconMaterialTableBarW100;
