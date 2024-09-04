import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeLaneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeLaneFilled'

      short_name='BikeLane'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-160q33 0 56.5-23.5T800-240q0-33-23.5-56.5T720-320q-33 0-56.5 23.5T640-240q0 33 23.5 56.5T720-160Zm0 80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T720-80ZM600-620q-29 0-49.5-20.5T530-690q0-29 20.5-49.5T600-760q29 0 49.5 20.5T670-690q0 29-20.5 49.5T600-620ZM440-460l68 68q6 6 9 13.5t3 15.5v123q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-107l-93-77q-26-23-27.5-58t24.5-59l80-77q23-23 56-22.5t56 23.5l63 56q20 15 42 24.5t46 13.5q17 2 27 15t8 30q-2 17-14.5 27t-29.5 8q-48-7-90-30t-74-58l-74 71ZM240-160q33 0 56.5-23.5T320-240q0-33-23.5-56.5T240-320q-33 0-56.5 23.5T160-240q0 33 23.5 56.5T240-160Zm-68-554-18-18q-9-9-21.5-9t-21.5 9q-9 9-9 21t9 21l32 32q12 12 28 12t28-12l90-89q9-9 9-21t-9-21q-9-9-21-9t-21 9l-75 75Zm68 634q-66 0-113-47T80-240q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T240-80Zm-39-444q-7 0-13.5-1.5T174-529q-59-25-96.5-82.5T40-738v-92q0-12 7-22.5T65-868l106-41q14-5 29-5t29 5l106 41q11 5 18 15.5t7 22.5v92q0 69-37.5 126.5T226-529q-6 2-12 3.5t-13 1.5Z"/>
    </Icon>
  );
});

IconMaterialBikeLaneFilled.displayName = 'AmauiIconMaterialBikeLaneFilled';

export default IconMaterialBikeLaneFilled;
