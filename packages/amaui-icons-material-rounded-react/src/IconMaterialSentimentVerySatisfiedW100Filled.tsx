import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentVerySatisfiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentVerySatisfiedW100Filled'

      short_name='SentimentVerySatisfied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.55 10.2q.125.125.25.125t.25-.125l.85-.85.85.85q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25l-.825-.825Q9.3 8.75 9.175 8.7q-.125-.05-.275-.05-.15 0-.275.05-.125.05-.25.175L7.55 9.7q-.1.1-.112.238-.013.137.112.262Zm6.2 0q.125.125.25.125t.25-.125l.85-.85.85.85q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25l-.825-.825q-.125-.125-.25-.175-.125-.05-.275-.05-.15 0-.275.05-.125.05-.25.175l-.825.825q-.1.1-.113.238-.012.137.113.262ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-4q1.1 0 2.163-.512 1.062-.513 1.787-1.663.125-.2.038-.363Q15.9 14 15.65 14h-7.3q-.25 0-.338.162-.087.163.038.363.725 1.15 1.788 1.663Q10.9 16.7 12 16.7Z"/>
    </Icon>
  );
});

IconMaterialSentimentVerySatisfiedW100Filled.displayName = 'AmauiIconMaterialSentimentVerySatisfiedW100Filled';

export default IconMaterialSentimentVerySatisfiedW100Filled;
