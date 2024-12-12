import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAodWatch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodWatch'

      short_name='AodWatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-500q-13 0-21.5-8.5T360-530q0-13 8.5-21.5T390-560h180q13 0 21.5 8.5T600-530q0 13-8.5 21.5T570-500H390Zm40 120q-13 0-21.5-8.5T400-410q0-13 8.5-21.5T430-440h100q13 0 21.5 8.5T560-410q0 13-8.5 21.5T530-380H430ZM420-80q-26 0-47.5-15.5T343-137l-37-125q-48-38-77-95t-29-123q0-66 29-123t77-95l37-125q8-26 29.5-41.5T420-880h120q26 0 47.5 15.5T617-823l37 125q48 38 77 95t29 123q0 66-29 123t-77 95l-37 125q-8 26-29.5 41.5T540-80H420Zm60-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-76-470q20-5 38.5-8t37.5-3q19 0 37.5 3t38.5 8l-16-50H420l-16 50Zm16 590h120l16-50q-20 5-38.5 7.5T480-200q-19 0-37.5-2.5T404-210l16 50Zm-16-640h152-152Zm16 640h-16 152-136Z"/>
    </Icon>
  );
});

IconMaterialAodWatch.displayName = 'OnesyIconMaterialAodWatch';

export default IconMaterialAodWatch;
