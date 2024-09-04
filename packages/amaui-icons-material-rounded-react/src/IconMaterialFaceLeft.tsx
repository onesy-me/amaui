import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceLeft'

      short_name='FaceLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-480q-17 0-28.5-11.5T300-520q0-17 11.5-28.5T340-560q17 0 28.5 11.5T380-520q0 17-11.5 28.5T340-480Zm200 0q-17 0-28.5-11.5T500-520q0-17 11.5-28.5T540-560q17 0 28.5 11.5T580-520q0 17-11.5 28.5T540-480Zm4-311q23 50 64 86.5t94 52.5q-22-51-63-87.5T544-791Zm-57-9q-66-2-123.5 30.5T273-680q66 2 123.5-30.5T487-800ZM160-560q0-134 93-227t227-93q134 0 227 93t93 227q0 72-28.5 132.5T694-322q-16 14-32 12t-27-13q-11-11-11.5-27t13.5-29q39-34 62-82t21-104q-63-11-118.5-45T508-696q-52 53-121 77.5T244-602q-2 11-3 21t-1 21q0 55 22.5 102t60.5 80q14 12 13.5 28T325-323q-11 11-27 13t-32-12q-49-45-77.5-105.5T160-560Zm313 400 35 35q11 12 11.5 28.5T508-68q-12 12-28 12t-28-12L348-172q-12-12-12-28t12-28l104-104q12-12 28-12t28 12q12 12 11.5 28.5T508-275l-35 35h127q17 0 28.5 11.5T640-200q0 17-11.5 28.5T600-160H473Zm71-631Zm-57-9Z"/>
    </Icon>
  );
});

IconMaterialFaceLeft.displayName = 'AmauiIconMaterialFaceLeft';

export default IconMaterialFaceLeft;
