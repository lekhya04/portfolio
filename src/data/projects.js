import staffSphereImage from '../assets/images/staffsphere/dashboard.png'
import vivaBotImage from '../assets/images/vivabot/dashboard.png'
import librareaseImage from '../assets/images/librarease/dashboard.png'

export const projects = [
  {
    title: 'StaffSphere',
    shortName: 'SS',
    status: 'Featured Project',
    description: 'A faculty management web application with role-based access, approval workflows, password recovery, data management and analytics.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: staffSphereImage,
    github: 'https://github.com/lekhya04/StaffSphere',
    demo: '',
  },
  {
    title: 'VivaBot',
    shortName: 'VB',
    status: 'Academic Project',
    description: 'An automated viva and assessment system combining Flask, MySQL, Excel-based student data, computer vision and automated result delivery.',
    tech: ['Python', 'Flask', 'MySQL', 'OpenCV'],
    image: vivaBotImage,
    github: 'https://github.com/lekhya04/vivabot',
    demo: '',
  },
  {
    title: 'Librarease',
    shortName: 'LB',
    status: 'Academic Project',
    description: 'A library management system designed to simplify book management, user access, borrowing and library operations',
    tech: ['HTML', 'CSS', 'PHP'],
    image: librareaseImage,
    github: 'https://github.com/lekhya04/librarease',
    demo: '',
  },
]
