import React from 'react';

import { PathOptions } from '../svg-dict';

export const path = (props: PathOptions) =>
    <svg fill="none">
        <path d="M8.3873 13.646L8.46539 13.6321V13.3193L8.46626 6.64233C8.46626 6.16566 8.67712 5.84758 9.06673 5.71758C9.72447 5.49831 10.3432 5.89352 10.3527 6.55826C10.364 7.46395 10.3562 8.3705 10.3562 9.27618V10.6941C10.3562 10.9055 10.3891 11.1144 10.6824 11.117C10.9749 11.1196 11.0122 10.9185 11.0122 10.7027C11.0104 8.96937 11.0104 7.23601 11.0113 5.50264C11.0113 5.00083 11.2525 4.65763 11.689 4.53716C12.2305 4.38809 12.7928 4.70269 12.8813 5.2097C12.9012 5.32497 12.8986 5.44544 12.8986 5.56331C12.9004 7.22734 12.8986 8.89137 12.8986 10.5563V10.6741C12.9047 10.8908 12.9229 11.1222 13.2379 11.1179C13.5538 11.1135 13.5598 10.8813 13.559 10.6646C13.559 9.14878 13.5555 7.63122 13.5642 6.11539C13.565 5.92385 13.5989 5.71671 13.6813 5.54338C13.8349 5.21837 14.2384 5.0407 14.6185 5.0797C15.0098 5.12217 15.3413 5.39691 15.4194 5.75831C15.4445 5.87272 15.4454 5.99232 15.4454 6.11105C15.4471 7.77509 15.4454 9.43912 15.4471 11.1031C15.4471 11.221 15.4211 11.358 15.4775 11.4516C15.5383 11.5556 15.6797 11.683 15.7864 11.6821C15.8888 11.6821 16.0164 11.546 16.0841 11.4429C16.1326 11.3684 16.104 11.2505 16.104 11.1525L16.1023 7.90249C16.1023 7.21174 16.4737 6.78967 17.0681 6.8018C17.6625 6.81567 18.0009 7.22561 18 7.90162C17.9957 10.3439 17.9957 12.7862 17.9957 15.2286C17.9957 15.8734 17.9158 16.5043 17.6468 17.1084C17.1626 18.1917 16.3045 18.912 15.0766 19.2422C13.677 19.6192 12.2669 19.5672 10.8768 19.1876C9.79136 18.9019 8.84028 18.2457 8.18859 17.3329C7.22194 16.0025 6.24835 14.6756 5.2869 13.3418C5.16976 13.1797 5.06997 12.9951 5.02658 12.807C4.91378 12.3191 5.16889 11.8624 5.62271 11.6717C6.09736 11.4724 6.71258 11.6058 7.05447 12.0106C7.51002 12.5479 7.94389 13.1 8.38817 13.646H8.3873Z" fill={props.iconPrimary} />
    </svg>



export const viewBox = '0 0 24 24';