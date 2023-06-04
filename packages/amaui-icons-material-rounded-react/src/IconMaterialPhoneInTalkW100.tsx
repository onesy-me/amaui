import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneInTalkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneInTalkW100'

      short_name='PhoneInTalk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.45 11.3q-.15 0-.25-.1t-.125-.25q-.325-2.575-2.162-4.413Q15.075 4.7 12.5 4.375q-.15-.025-.25-.125t-.1-.25q0-.15.1-.25t.25-.075q2.9.3 4.938 2.337 2.037 2.038 2.337 4.938.025.15-.075.25t-.25.1Zm-4.075 0q-.125 0-.212-.075-.088-.075-.138-.2-.275-.95-.963-1.663-.687-.712-1.637-.962-.125-.05-.2-.138-.075-.087-.075-.212 0-.175.112-.275.113-.1.288-.05Q13.725 8 14.575 8.85q.85.85 1.15 2.05.05.175-.062.288-.113.112-.288.112Zm3.075 8.25q-2.425 0-4.962-1.3-2.538-1.3-4.6-3.363-2.063-2.062-3.375-4.587Q4.2 7.775 4.2 5.35q0-.45.3-.75t.75-.3h2q.45 0 .763.262.312.263.412.688l.45 2.05q.075.4-.012.725-.088.325-.363.55L6.4 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.05-2.15q.275-.275.562-.363.288-.087.638-.012l1.7.35q.425.1.688.413.262.312.262.762v1.95q0 .45-.3.75t-.75.3Zm-12.4-9.7 2-1.8q.125-.1.163-.275Q8.25 7.6 8.2 7.45L7.75 5.4q-.05-.2-.175-.3Q7.45 5 7.25 5h-2Q5.1 5 5 5.1t-.1.25q0 1.025.313 2.175.312 1.15.837 2.325Zm12.4 9q.15 0 .25-.1t.1-.25v-1.95q0-.2-.1-.325t-.3-.175l-1.7-.35q-.15-.05-.262-.012-.113.037-.238.162l-1.95 2q1.025.525 2.213.763 1.187.237 1.987.237Zm-4.2-1Zm-8.2-8Z"/>
    </Icon>
  );
});

IconMaterialPhoneInTalkW100.displayName = 'AmauiIconMaterialPhoneInTalkW100';

export default IconMaterialPhoneInTalkW100;
