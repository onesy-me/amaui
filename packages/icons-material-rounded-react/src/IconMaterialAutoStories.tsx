import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoStories = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStories'

      short_name='AutoStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-178q-11 0-21.5-3t-19.5-8q-41-25-86-38t-93-13q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740v484q51-32 107-48t113-16q36 0 70.5 6t69.5 18v-480q15 5 29.5 10.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-48 0-93 13t-86 38q-9 5-19.5 8t-21.5 3Zm113-212q-10 9-21.5 3.5T560-405v-327q0-4 1.5-7.5t4.5-6.5l160-160q10-10 22-5t12 19v343q0 5-2 8.5t-5 6.5L593-390Zm-193 95v-396q-33-14-68.5-21.5T260-720q-37 0-72 7t-68 21v397q35-13 69.5-19t70.5-6q36 0 70.5 6t69.5 19Zm0 0v-396 396Z"/>
    </Icon>
  );
});

IconMaterialAutoStories.displayName = 'OnesyIconMaterialAutoStories';

export default IconMaterialAutoStories;
