import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWoundsInjuriesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WoundsInjuriesFilled'

      short_name='WoundsInjuries'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.6 19.8-1.475 1.5q-.3.3-.712.3-.413 0-.713-.3t-.3-.713q0-.412.3-.712L4.2 18.4l-1.225-.325q-.4-.125-.625-.475-.225-.35-.1-.75t.475-.613q.35-.212.75-.087l1.225.325-.325-1.25q-.125-.4.088-.75.212-.35.612-.475t.75.1q.35.225.475.625l.35 1.225 3.425-3.425L8.85 12.2q-.4-.125-.612-.475-.213-.35-.088-.75t.475-.625q.35-.225.75-.1l1.2.325-.325-1.225q-.125-.4.1-.738.225-.337.625-.462t.75.087q.35.213.475.613l.325 1.225L15.95 6.65l-1.225-.35q-.4-.125-.625-.475-.225-.35-.1-.75t.475-.613q.35-.212.75-.087l1.25.325-.35-1.225q-.125-.4.1-.75t.625-.475q.4-.125.75.1t.475.625L18.4 4.2l1.475-1.5q.3-.3.712-.3.413 0 .713.3t.3.712q0 .413-.3.713L19.8 5.6l1.225.325q.4.125.625.475.225.35.1.75t-.475.612q-.35.213-.75.088L19.3 7.525l.325 1.25q.125.4-.087.75-.213.35-.613.475t-.75-.1q-.35-.225-.475-.625l-.35-1.225-3.425 3.425 1.225.325q.4.125.613.475.212.35.087.75t-.475.625q-.35.225-.75.1l-1.2-.325.325 1.225q.125.4-.1.737-.225.338-.625.463t-.75-.088q-.35-.212-.475-.612l-.325-1.225L8.05 17.35l1.225.35q.4.125.625.475.225.35.1.75t-.475.613q-.35.212-.75.087l-1.25-.325.35 1.225q.125.4-.1.75t-.625.475q-.4.125-.75-.1t-.475-.625Z"/>
    </Icon>
  );
});

IconMaterialWoundsInjuriesFilled.displayName = 'AmauiIconMaterialWoundsInjuriesFilled';

export default IconMaterialWoundsInjuriesFilled;
