import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexWrapFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexWrapFilled'

      short_name='FlexWrap'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 936V656q0-17 11.5-28.5T80 616h160q17 0 28.5 11.5T280 656v280q0 17-11.5 28.5T240 976H80q-17 0-28.5-11.5T40 936Zm320 0V656q0-17 11.5-28.5T400 616h160q17 0 28.5 11.5T600 656v280q0 17-11.5 28.5T560 976H400q-17 0-28.5-11.5T360 936Zm320 0V656q0-17 11.5-28.5T720 616h160q17 0 28.5 11.5T920 656v280q0 17-11.5 28.5T880 976H720q-17 0-28.5-11.5T680 936Zm-240-40h80V696h-80v200ZM40 496V216q0-17 11.5-28.5T80 176h160q17 0 28.5 11.5T280 216v280q0 17-11.5 28.5T240 536H80q-17 0-28.5-11.5T40 496Zm320 0V216q0-17 11.5-28.5T400 176h160q17 0 28.5 11.5T600 216v280q0 17-11.5 28.5T560 536H400q-17 0-28.5-11.5T360 496Zm320 0V216q0-17 11.5-28.5T720 176h160q17 0 28.5 11.5T920 216v280q0 17-11.5 28.5T880 536H720q-17 0-28.5-11.5T680 496Zm-560-40h80V256h-80v200Zm640 0h80V256h-80v200Z"/>
    </Icon>
  );
});

IconMaterialFlexWrapFilled.displayName = 'AmauiIconMaterialFlexWrapFilled';

export default IconMaterialFlexWrapFilled;
