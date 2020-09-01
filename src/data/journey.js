import React from 'react'
import { FaAward, FaPaperPlane, FaBaseballBall } from 'react-icons/fa'

import Image1 from './../assets/images/image1.jpg'
import Image2 from './../assets/images/image2.jpg'
import Image3 from './../assets/images/image3.jpg'

const data = [
  {
    date: '2009-20014',
    headline: 'Teacher and Coach',
    description: `I taught High School Math and coached Baseball, Football, and Basketball helping lead multiple teams to the regional tournament`,
    image: Image1,
    icon: <FaBaseballBall />,
  },
  {
    date: 'November 26th 2011',
    headline: 'Milestone 2',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaPaperPlane />,
  },

  {
    date: 'June 6th 2011',
    headline: 'Milestone 3',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image3,
    icon: <FaPaperPlane />,
  },
]

export default data
