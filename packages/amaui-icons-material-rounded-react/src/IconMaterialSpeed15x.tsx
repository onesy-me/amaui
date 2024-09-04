import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed15x = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed15x'

      short_name='Speed15x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-600H80q-17 0-28.5-11.5T40-640q0-17 11.5-28.5T80-680h80q17 0 28.5 11.5T200-640v320q0 17-11.5 28.5T160-280q-17 0-28.5-11.5T120-320v-280Zm660 187-70 116q-5 8-12.5 12.5T681-280q-20 0-30.5-17.5t.5-34.5l89-148-89-148q-11-17-.5-34.5T681-680q9 0 16.5 4.5T710-663l70 116 70-116q5-8 12.5-12.5T879-680q20 0 30.5 17.5T909-628l-89 148 89 148q11 17 .5 34.5T879-280q-9 0-16.5-4.5T850-297l-70-116ZM500-280H400q-17 0-28.5-11.5T360-320q0-17 11.5-28.5T400-360h100v-80H400q-17 0-28.5-11.5T360-480v-160q0-17 11.5-28.5T400-680h140q17 0 28.5 11.5T580-640q0 17-11.5 28.5T540-600H440v80h60q33 0 56.5 23.5T580-440v80q0 33-23.5 56.5T500-280Zm-220 0q-17 0-28.5-11.5T240-320q0-17 11.5-28.5T280-360q17 0 28.5 11.5T320-320q0 17-11.5 28.5T280-280Z"/>
    </Icon>
  );
});

IconMaterialSpeed15x.displayName = 'AmauiIconMaterialSpeed15x';

export default IconMaterialSpeed15x;
