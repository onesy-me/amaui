import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial50mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='50mp'

      short_name='50mp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M500 556h180V316H500v240Zm60-60V376h60v120h-60ZM240 836h60V656h40v120h60V656h40v180h60V596H240v240Zm300 0h60v-60h120V596H540v240Zm60-120v-60h60v60h-60ZM120 936V216h720v720H120Zm80-80h560V296H200v560Zm0-560v560-560Zm60 260h180V416H320v-40h120v-60H260v140h120v40H260v60Z"/>
    </Icon>
  );
});

IconMaterial50mp.displayName = 'AmauiIconMaterial50mp';

export default IconMaterial50mp;
