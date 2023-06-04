import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReceiptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptW100'

      short_name='Receipt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.8V3.225h.05q.05 0 .125.075l.85.9q.075.075.175.087.1.013.175-.062l.95-.95Q6.7 3.2 6.8 3.2q.1 0 .175.075l.95.95Q8 4.3 8.1 4.3q.1 0 .175-.075l.95-.95Q9.3 3.2 9.4 3.2q.1 0 .175.075l.95.95q.075.075.175.075.1 0 .175-.075l.95-.95Q11.9 3.2 12 3.2q.1 0 .175.075l.95.95q.075.075.175.075.1 0 .175-.075l.95-.95Q14.5 3.2 14.6 3.2q.1 0 .175.075l.95.95q.075.075.175.075.1 0 .175-.075l.95-.95Q17.1 3.2 17.2 3.2q.1 0 .175.075l.95.95q.075.075.175.062.1-.012.175-.087l.85-.9q.075-.075.125-.075h.05V20.8l-.05-.012q-.05-.013-.125-.088l-.85-.9q-.075-.075-.175-.088-.1-.012-.175.063l-.95.95q-.075.075-.175.075-.1 0-.175-.075l-.95-.95Q16 19.7 15.9 19.7q-.1 0-.175.075l-.95.95q-.075.075-.175.075-.1 0-.175-.075l-.95-.95Q13.4 19.7 13.3 19.7q-.1 0-.175.075l-.95.95Q12.1 20.8 12 20.8q-.1 0-.175-.075l-.95-.95Q10.8 19.7 10.7 19.7q-.1 0-.175.075l-.95.95Q9.5 20.8 9.4 20.8q-.1 0-.175-.075l-.95-.95Q8.2 19.7 8.1 19.7q-.1 0-.175.075l-.95.95Q6.9 20.8 6.8 20.8q-.1 0-.175-.075l-.95-.95Q5.6 19.7 5.5 19.712q-.1.013-.175.088l-.85.9q-.075.075-.125.088l-.05.012ZM7 15.55h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3.2h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3.2h10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM5 19.1h14V4.9H5ZM5 4.9v14.2Z"/>
    </Icon>
  );
});

IconMaterialReceiptW100.displayName = 'AmauiIconMaterialReceiptW100';

export default IconMaterialReceiptW100;
