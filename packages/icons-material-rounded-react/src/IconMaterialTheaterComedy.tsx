import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTheaterComedy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheaterComedy'

      short_name='TheaterComedy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-660q17 0 28.5-11.5T800-700q0-17-11.5-28.5T760-740q-17 0-28.5 11.5T720-700q0 17 11.5 28.5T760-660Zm-160 0q17 0 28.5-11.5T640-700q0-17-11.5-28.5T600-740q-17 0-28.5 11.5T560-700q0 17 11.5 28.5T600-660Zm80 60q-29 0-55.5 11.5T586-551q-5 10 2.5 18.5T608-524h144q12 0 19.5-8.5T774-551q-12-26-38.5-37.5T680-600ZM280-80q-100 0-170-70T40-320v-200q0-33 23.5-56.5T120-600h320q33 0 56.5 23.5T520-520v200q0 100-70 170T280-80Zm0-80q66 0 113-47t47-113v-200H120v200q0 66 47 113t113 47Zm640-640v200q0 102-70 171t-171 69q-17 0-33.5-2t-32.5-7q-16-5-23-20t-2-31q5-16 20-23.5t31-2.5q11 3 21 4.5t21 1.5q66 0 112.5-47T840-600v-200H520v100q0 17-11.5 28.5T480-660q-17 0-28.5-11.5T440-700v-100q0-33 23.5-56.5T520-880h320q33 0 56.5 23.5T920-800ZM200-380q17 0 28.5-11.5T240-420q0-17-11.5-28.5T200-460q-17 0-28.5 11.5T160-420q0 17 11.5 28.5T200-380Zm160 0q17 0 28.5-11.5T400-420q0-17-11.5-28.5T360-460q-17 0-28.5 11.5T320-420q0 17 11.5 28.5T360-380Zm-80 136q28 0 53-11t39-35q5-11-1-20.5t-17-9.5H206q-11 0-17 9.5t-1 20.5q14 24 39 35t53 11Zm0-96Zm390-280Z"/>
    </Icon>
  );
});

IconMaterialTheaterComedy.displayName = 'OnesyIconMaterialTheaterComedy';

export default IconMaterialTheaterComedy;
