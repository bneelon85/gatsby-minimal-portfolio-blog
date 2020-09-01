import React from 'react'
import {FaBaseballBall} from 'react-icons/fa'
import {GiOilPump, GiOilRig} from 'react-icons/gi'

import Image1 from './../assets/images/image1.jpg'
import Image2 from './../assets/images/image2.jpg'
import Image3 from './../assets/images/image3.jpg'

const data = [
  {
    date: '2009-20014',
    headline: 'Teacher and Coach',
    description: `I taught High School Math and coached Baseball, Football, and Basketball, helping lead multiple teams to the state quarter finals.`,
    image: Image1,
    icon: <FaBaseballBall />,
  },
  {
    date: '2014-2017',
    headline: 'ConocoPhillips',
    description: `As a Reservoir Engineering Technician, ConocoPhillips was my first introduction to Oil and Gas and Data Analytics.`,
    image: Image2,
    icon: <GiOilPump />,
  },

  {
    date: '2017-2019',
    headline: 'Reservoir Data Systems',
    description: `As Software Architect and member of the Executive Team, I learned a ton about business, completions engineering, and software development.`,
    image: Image3,
    icon: <GiOilRig />,
  },
]

export default data
