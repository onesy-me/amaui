import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckedBagQuestion = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckedBagQuestion'

      short_name='CheckedBagQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-720h120q0-26-17-43t-43-17q-26 0-43 17t-17 43Zm-140 80h-40v280h40v-280ZM120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h324q5 24 9 40t15 40H120Zm220-520v280h128q-11 24-15 40t-9 40H240q-33 0-56.5-23.5T160-360v-280q0-33 23.5-56.5T240-720h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-640v132q-23-6-39.5-9t-40.5-3v-120h-40v124q-18 3-30 5.5t-30 8.5v-138H340Zm380 200q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Zm0 320q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120ZM280-640h60-60Zm0 0h-40 40Zm60 0h280-280Zm280 0h60-60Zm60 0h40-40Zm40 280q-19 0-35 9.5T659-325q-4 6-1 12.5t10 9.5q6 3 12 0t11-8q5-7 12.5-11t16.5-4q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14q0 8 5 13t13 5q8 0 13-5t5-13q0-8 6-16t14-16q14-12 22-23t8-31q0-29-19-46.5T720-360Z"/>
    </Icon>
  );
});

IconMaterialCheckedBagQuestion.displayName = 'OnesyIconMaterialCheckedBagQuestion';

export default IconMaterialCheckedBagQuestion;
