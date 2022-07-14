import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUlnaRadiusRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UlnaRadiusRounded'
      short_name='UlnaRadius'

      {...props}
    >
      <path d="M18 21.95q-.55 0-1.062-.213-.513-.212-.863-.562l-.112-.113-.113-.112H13.5q-1.05 0-1.775-.738Q11 19.475 11 18.425q0-.575.25-1.088.25-.512.75-.912l1-.8v-5.55l-1.55-2.2q-.225-.325-.337-.7Q11 6.8 11 6.45q0-1.05.725-1.775.725-.725 1.775-.725h5q1.05 0 1.763.712.712.713.712 1.763 0 .375-.1.725t-.325.675L19 10.075v5.6l.975.975q.5.5.763 1.087.262.588.262 1.213 0 1.25-.875 2.125T18 21.95Zm0-2q.425 0 .712-.287.288-.288.288-.713 0-.375-.212-.625l-.213-.25-.975-.975q-.3-.3-.45-.675-.15-.375-.15-.75V10.1q0-.3.087-.6.088-.3.263-.55l1.55-2.225q.05-.075.1-.3 0-.2-.15-.338-.15-.137-.35-.137h-5q-.2 0-.35.15-.15.15-.15.35 0 .075.025.137.025.063.075.138l1.55 2.225q.175.25.263.537.087.288.087.613v5.525q0 .45-.2.862-.2.413-.55.688l-1 .825q-.125.1-.188.212-.062.113-.062.263 0 .2.137.337.138.138.363.138h2.225q.45 0 .8.162.35.163.75.563.125.125.313.2.187.075.412.075Zm-9.175.7q-.275.125-.562.187-.288.063-.588.063-1.125 0-1.9-.763Q5 19.375 5 18.275v-9.1L3.25 5.5q-.125-.25-.188-.525Q3 4.7 3 4.425q0-1.05.725-1.763Q4.45 1.95 5.5 1.95H10v2q1.05 0 1.775.725.725.725.725 1.775 0 .425-.125.787-.125.363-.375.688l-1 1.35v5l1.075 1.625q.2.325.312.687.113.363.113.713 0 .725-.375 1.325t-1 .9Zm-.875-1.8 2.275-1.125q.125-.05.2-.175.075-.125.075-.25l-.1-.3-.9-1.375q-.25-.375-.375-.813Q9 14.375 9 13.95V9.6q0-.5.15-.95.15-.45.45-.85l.8-1.05q.05-.075.1-.3 0-.2-.15-.35-.15-.15-.35-.15H9q-.425 0-.712-.288Q8 5.375 8 4.95v-1H5.5q-.2 0-.35.137-.15.138-.15.338 0-.025.05.225L6.7 8.1q.15.3.225.625Q7 9.05 7 9.4v8.875q0 .275.2.463.2.187.475.187.075 0 .275-.075Zm8.05-5.9Zm-8.25-1.525Z"/>
    </Icon>
  );
});

export default IconMaterialUlnaRadiusRounded;
