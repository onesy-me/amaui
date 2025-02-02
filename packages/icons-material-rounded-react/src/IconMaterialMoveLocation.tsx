import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveLocation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveLocation'

      short_name='MoveLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M777-240H650q-17 0-28.5-11.5T610-280q0-17 11.5-28.5T650-320h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L798-148q-11 11-27.5 11.5T742-148q-11-11-11-28t11-28l35-36ZM400-360q56 0 101-27.5t71-72.5q-35-29-79-44.5T400-520q-49 0-93 15.5T228-460q26 45 71 72.5T400-360Zm0-200q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0 67Zm0 386q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T80-552q0-150 96.5-239T400-880q127 0 223.5 89T720-552q0 9-.5 18.5T717-514h-81q2-10 3-19.5t1-18.5q0-109-69.5-178.5T400-800q-101 0-170.5 69.5T160-552q0 71 59 162.5T400-186q23-20 42.5-40t37.5-39l9 9 19.5 19.5q10.5 10.5 19 19.5l8.5 9q-23 24-46 46.5T453-127q-11 10-25 15t-28 5Z"/>
    </Icon>
  );
});

IconMaterialMoveLocation.displayName = 'OnesyIconMaterialMoveLocation';

export default IconMaterialMoveLocation;
