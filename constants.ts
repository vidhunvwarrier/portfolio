
import { Experience, Project, SkillCategory, Education } from './types';

export const PERSONAL_INFO = {
  name: "Vidhun V Warrier",
  title: "Senior Robotics Engineer",
  email: "vidhunvwarrier@gmail.com",
  phone: "+91 8592802540",
  location: "Kottayam, Kerala",
  linkedin: "https://linkedin.com/in/vidhunvwarrier",
  summary: "Senior Robotics Engineer with 3+ years of hands-on experience designing, integrating, and deploying robotic systems across ground, marine, and automotive platforms. Strong expertise in ROS1/ROS2, autonomous navigation, sensor fusion, and real-world hardware integration. Proven ability to take systems from simulation to on-vehicle / field deployment, working closely with sensors, ECUs, and production-grade hardware. Passionate about building scalable robotics middleware and perception-enabled autonomous systems."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "KPIT Technologies",
    client: "Mercedes-Benz R&D India",
    role: "Senior Software Engineer",
    period: "11/2025 – Present",
    location: "Bengaluru, India",
    bullets: [
      "Led the integration of ROS on production-grade vehicle hardware, enabling modular and scalable communication for robotics and ADAS applications.",
      "Designed and implemented ROS publisher–subscriber pipelines within motion and perception-related applications to improve data flow and system observability.",
      "Interfaced camera and ultrasonic sensors with ROS using NVIDIA DriveWorks, bridging automotive sensor stacks with robotics middleware.",
      "Conducted camera calibration and Field-of-View (FoV) alignment for multi-camera systems, supporting Bird’s-Eye View (BEV) and perception use cases.",
      "Performed sensor data collection using vehicle-mounted cameras to support parking slot and environment perception algorithm development.",
      "Worked hands-on with real vehicle hardware and target ECUs, validating software behavior in on-vehicle testing environments.",
      "Utilized automotive and robotics debugging tools to monitor signals, data pipelines, and system health during integration and testing."
    ]
  },
  {
    company: "IROV Technologies Pvt Ltd",
    role: "Senior Robotics Engineer",
    period: "07/2022 – 08/2025",
    location: "Kochi, India",
    bullets: [
      "Developed a web-based control interface for underwater drones, integrating various payloads via ROS.",
      "Implemented autonomous navigation using ROS2 and Nav2 for an Autonomous Surface Vehicle (ASV).",
      "Integrated diverse sensors including 2D/3D LiDAR, GPS and IMU, using EKF-based sensor fusion.",
      "Enhanced real-time video monitoring using OpenCV and RTSP with low-latency telemetry overlays.",
      "Designed custom PCBs resulting in a 25% improvement in system reliability.",
      "Integrated ros2_control for real-time actuator integration on marine platforms.",
      "Delivered on-site R&D support with a 95% client satisfaction rate."
    ]
  },
  {
    company: "IROV Technologies Pvt Ltd",
    role: "Embedded System Engineer Intern",
    period: "05/2022 – 06/2022",
    location: "Kochi, India",
    bullets: [
      "Assisted in ROS-based robotic system development, focusing on sensor integration and firmware development."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Robotics & Software",
    skills: [
      { name: "ROS1 & ROS2", level: 4 },
      { name: "SLAM", level: 5 },
      { name: "Sensor Fusion", level: 4 },
      { name: "Navigation Stack & Nav2", level: 4 },
      { name: "Path Planning", level: 4 },
      { name: "A*, Dijkstra's", level: 3 },
      { name: "URDF, XACRO", level: 4 }
    ]
  },
  {
    category: "Programming & Tools",
    skills: [
      { name: "C++", level: 4 },
      { name: "Python", level: 5 },
      { name: "Embedded C", level: 4 },
      { name: "Linux & Bash", level: 4 },
      { name: "OpenCV", level: 4 },
      { name: "PyQt", level: 4 },
      { name: "Flask", level: 3 }
    ]
  },
  {
    category: "Hardware & Vision",
    skills: [
      { name: "PCB Design (Fusion 360)", level: 4 },
      { name: "Nvidia Jetson Orin/Nano", level: 4 },
      { name: "YOLO V8", level: 3 },
      { name: "2D & 3D LiDAR", level: 5 },
      { name: "UART, SPI, I2C, MQTT", level: 4 },
      { name: "ArduPilot / MAVLink", level: 4 },
      { name: "RTSP / WebRTC", level: 4 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "IMU-Based EKF Localizer",
    subtitle: "Personal Project",
    period: "01/2026 – Present",
    description: "Implementation of localization using IMU with Extended Kalman Filter (EKF).",
    tech: ["C++", "ROS2", "EKF"]
  },
  {
    title: "Autonomous Surface Vehicle",
    subtitle: "EyeROV Product Development",
    period: "08/2024 – 08/2025",
    description: "Developed a ROS2-based autonomous boat with Nav2 for GPS and IMU-based navigation. Integrated LiDAR for dynamic obstacle avoidance.",
    tech: ["ROS2", "Nav2", "LiDAR", "GPS"]
  },
  {
    title: "iControlHub",
    subtitle: "EyeROV Product Development",
    period: "05/2023 – 08/2025",
    description: "Built control software for underwater drones using React (frontend) and ROS (backend), integrating payloads and joystick configuration.",
    tech: ["React", "ROS", "Qt", "Python"]
  },
  {
    title: "Autonomous Home Assistant Robot",
    subtitle: "M.Tech Major Project",
    period: "08/2021 – 06/2022",
    description: "Home service robot for elderly care using ROS1 with SLAM and MoveIt. Enabled autonomous navigation, object pickup, and voice command via Alexa.",
    tech: ["ROS1", "SLAM", "MoveIt", "Alexa Skills"]
  },
  {
    title: "AgroBot",
    subtitle: "B.Tech Major Project",
    period: "01/2019 – 01/2021",
    description: "Autonomous farming robot to automate planting and irrigation processes to enhance agriculture efficiency.",
    tech: ["Embedded C", "Robotics", "Agriculture Tech"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Tech in Robotics and Automation",
    institution: "Amrita Viswavidyapeetham",
    period: "2020 – 05/2022",
    location: "Kollam",
    score: "CGPA: 9.01"
  },
  {
    degree: "Advanced PG Diploma in Embedded Systems",
    institution: "SMEC Labs",
    period: "09/2019 – 12/2019",
    location: "Kochi"
  },
  {
    degree: "B.Tech in Electronics and Communication",
    institution: "College of Engineering Kidangoor",
    period: "2015 – 2019",
    location: "Kottayam",
    score: "CGPA: 7.26"
  }
];

export const BLOG_POSTS = [
  {
    title: "Indoor vs. Outdoor Autonomous Navigation: My Experience",
    date: "Oct 27, 2024",
    excerpt: "Exploring the distinct technical hurdles and sensor requirements for navigating autonomous systems in structured indoor environments vs. unpredictable outdoor terrains.",
    tags: ["Navigation", "SLAM", "Field Robotics"],
    link: "https://medium.com/@vidhunvwarrier/indoor-vs-outdoor-autonomous-navigation-my-experience-ff2276b1249b"
  },
  {
    title: "Integrating ROS2 with Automotive ECUs",
    date: "Feb 10, 2025",
    excerpt: "A technical dive into bridging high-performance robotics middleware with production vehicle hardware and real-time networking protocols.",
    tags: ["ROS2", "Automotive", "Middleware"],
    link: "https://medium.com/@vidhunvwarrier"
  },
  {
    title: "The Future of Edge Computing in Robotics",
    date: "Dec 15, 2024",
    excerpt: "Why NVIDIA Jetson and similar edge devices are revolutionizing real-time autonomous navigation and perception pipelines.",
    tags: ["NVIDIA", "Edge AI", "Computer Vision"],
    link: "https://medium.com/@vidhunvwarrier"
  }
];
