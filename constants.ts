import { Experience, Project, SkillCategory, Education } from './types';

export const PERSONAL_INFO = {
  name: "Vidhun V Warrier",
  title: "Senior Software Engineer",
  email: "vidhunvwarrier@gmail.com",
  phone: "+91 8592802540",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/vidhun-v-warrier-2310b3128/",
  medium: "https://medium.com/@vidhunvwarrier",
  github: "https://github.com/vidhunvwarrier",
  summary: "Senior Robotics Engineer with 3+ years of experience designing, integrating, and deploying autonomous robotic systems across ground, marine, and automotive platforms. Specialized in ROS2 middleware architecture, navigation systems (Nav2), multi-sensor fusion, and real-time C++ system design. Proven track record of taking robotics solutions from simulation to production hardware, including on-vehicle and field deployments. Passionate about building scalable autonomy stacks and perception-driven robotic systems operating in real-world environments."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "KPIT Technologies",
    client: "Mercedes-Benz R&D India",
    role: "Senior Software Engineer - ROS Consultant",
    period: "11/2025 - Present",
    location: "Bengaluru, India",
    bullets: [
      "Led end-to-end ROS2 integration on a real vehicle platform, coordinating perception, localization, planning, and vehicle control subsystems into a unified autonomy stack.",
      "Designed middleware architecture using ROS2, structuring communication across all subsystems for modularity and maintainability.",
      "Implemented WebSocket-based bidirectional communication between ROS2 and the motion management module, enabling reliable real-time control and telemetry exchange.",
      "Developed a custom encoder-based localization module in ROS2 for accurate pose estimation in GPS-denied parking environments.",
      "Built a C++ camera interface package for image acquisition and publishing to ROS topics, forming the base of the perception pipeline.",
      "Integrated object detection outputs (YOLO-based) into the ROS ecosystem to enable perception-driven planning and control inputs.",
      "Tuned Hybrid A*-based global path planning and MPC-based local planning modules for smooth trajectory generation and stable vehicle control.",
      "Containerized the full system using Docker, ensuring reproducible builds and consistent deployment across development machines and vehicle hardware.",
      "Led system-level on-vehicle testing, validation, and performance tuning, directly improving reliability and system behavior.",
      "Improved ROS-based data recomputation pipelines for replaying recorded rosbag workflows, enhancing debugging and validation capabilities.",
      "Proposed and implemented architectural enhancements to ROS communication structure, improving system modularity."
    ]
  },
  {
    company: "IROV Technologies Pvt Ltd",
    role: "Senior Robotics Engineer",
    period: "07/2022 - 08/2025",
    location: "Kochi, India",
    bullets: [
      "Designed and deployed a ROS2-based autonomy stack for an Autonomous Surface Vehicle (ASV) using Nav2, validated in both Gazebo simulations and real-world marine environments.",
      "Integrated 2D/3D LiDAR, GPS, and IMU sensors with EKF-based fusion, significantly improving localization robustness and obstacle avoidance reliability.",
      "Developed and integrated C++-based ros2_control interfaces for real-time actuator control, enhancing motion stability and responsiveness on marine platforms.",
      "Built perception pipelines using OpenCV and real-time RTSP streaming with telemetry overlays, enabling low-latency monitoring during field operations.",
      "Architected a web-based control interface (React + ROS backend) for underwater drones, integrating multiple payload systems and joystick-based teleoperation.",
      "Integrated advanced underwater payloads including DVL, USBL, and robotic arms, ensuring seamless communication across heterogeneous hardware systems.",
      "Worked across UART, TCP, UDP, and MQTT protocols to ensure reliable inter-device communication in constrained marine environments.",
      "Delivered on-site R&D troubleshooting and system validation, resolving complex integration issues across software, hardware, and payload subsystems."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Robotics Middleware & Frameworks",
    skills: [
      { name: "ROS1 & ROS2", level: 5 },
      { name: "ROS2 Control", level: 4 },
      { name: "MAVLink", level: 4 },
      { name: "RViz2", level: 4 },
      { name: "rqt_graph", level: 3 },
      { name: "URDF", level: 4 },
      { name: "XACRO", level: 4 },
      { name: "Custom Messages & Services", level: 4 },
      { name: "Gazebo Classic", level: 4 },
      { name: "Isaac Sim", level: 3 }
    ]
  },
  {
    category: "Hardware & Embedded Integration",
    skills: [
      { name: "NVIDIA Jetson Platforms", level: 4 },
      { name: "NVIDIA DriveWorks", level: 3 },
      { name: "2D & 3D LiDAR", level: 5 },
      { name: "GPS, IMU, DVL, USBL", level: 4 },
      { name: "PCB Designing & 3D Modeling (Fusion 360)", level: 3 },
      { name: "UART, SPI, I2C, MQTT", level: 4 }
    ]
  },
  {
    category: "Navigation & Perception",
    skills: [
      { name: "Nav2 (Navigation Stack)", level: 5 },
      { name: "Waypoint Navigation", level: 4 },
      { name: "Mission Planning", level: 4 },
      { name: "OpenCV", level: 4 },
      { name: "YOLO v8", level: 3 },
      { name: "Camera Calibration & FoV Alignment", level: 4 },
      { name: "SLAM", level: 5 },
      { name: "EKF-based Sensor Fusion", level: 4 },
      { name: "Robot Localization", level: 4 },
      { name: "Path Planning (A*, Dijkstra's)", level: 4 },
      { name: "Dynamic Obstacle Avoidance", level: 4 }
    ]
  },
  {
    category: "Software & Systems Engineering",
    skills: [
      { name: "C++", level: 5 },
      { name: "Python", level: 5 },
      { name: "Embedded C", level: 4 },
      { name: "Linux", level: 4 },
      { name: "Bash Scripting", level: 4 },
      { name: "Docker", level: 4 },
      { name: "CMake", level: 4 },
      { name: "Colcon", level: 4 },
      { name: "Flask (REST APIs)", level: 3 },
      { name: "React", level: 3 },
      { name: "RTSP", level: 3 },
      { name: "WebRTC", level: 3 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Autonomous Frontier Mapping Robot (Ackermann) - Built from Scratch",
    subtitle: "Personal Project",
    period: "04/2026 - Present",
    description: "Designed and implemented a fully autonomous mapping robot for unknown-environment exploration using frontier-based exploration without Nav2 or pre-built planners. Built in NVIDIA Isaac Sim with a hospital-scale map, integrating SLAM, LiDAR + camera perception, custom planning, reactive obstacle avoidance, and Ackermann control in C++.",
    tech: ["ROS2", "slam_toolbox", "Isaac Sim", "C++", "LiDAR + Camera", "Ackermann"]
  },
  {
    title: "Human-to-Robot Motion Mapping with MediaPipe and ROS2",
    subtitle: "Personal Project",
    period: "03/2026 - Present",
    description: "Developed a ROS2-based system that tracks human arm motion using MediaPipe Pose and maps shoulder and elbow movements to control a Franka Panda robot in Isaac Sim. The pipeline converts webcam input into joint angles and publishes JointState commands for real-time robot motion.",
    tech: ["ROS2", "MediaPipe", "Isaac Sim", "JointState"]
  },
  {
    title: "Autonomous Surface Vehicle",
    subtitle: "EyeROV Product Development",
    period: "08/2024 - 08/2025",
    description: "Developed a ROS2-based autonomous boat with Nav2 for GPS and IMU-based navigation. Integrated 2D/3D LiDAR for dynamic obstacle avoidance. Simulated in Gazebo and validated on real hardware.",
    image: "assets/projects/autonomous-surface-vehicle.png",
    tech: ["ROS2", "Nav2", "LiDAR", "Gazebo"]
  },
  {
    title: "Autonomous Home Assistant Robot",
    subtitle: "M.Tech Major Project",
    period: "08/2021 - 06/2022",
    description: "Developed a home service robot for elderly care using ROS1 with SLAM and MoveIt. Enabled autonomous navigation, object pickup, and voice command functionality via Alexa.",
    image: "assets/projects/home-assistant.png",
    tech: ["ROS1", "SLAM", "MoveIt", "Alexa Skills"]
  },
  {
    title: "AgroBot",
    subtitle: "B.Tech Major Project",
    period: "01/2019 - 01/2021",
    description: "Developed an autonomous farming robot to automate planting and irrigation processes to enhance agriculture efficiency.",
    image: "assets/projects/farmbot.png",
    tech: ["Embedded C", "Robotics", "Agriculture Tech"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Tech in Robotics and Automation",
    institution: "Amrita Viswavidyapeetham",
    period: "2020 - 05/2022",
    location: "Kollam",
    score: "CGPA: 9.01"
  },
  {
    degree: "B.Tech in Electronics and Communication",
    institution: "College of Engineering Kidangoor",
    period: "2015 - 2019",
    location: "Kottayam",
    score: "CGPA: 7.26"
  }
];

export const BLOG_POSTS = [
  {
    title: "Indoor vs Outdoor Autonomous Navigation (My Experience)",
    date: "Feb 6, 2026",
    excerpt: "A practical comparison of indoor and outdoor autonomous navigation using ROS, covering AMCL, GPS/RTK-GPS, dual-EKF localization, and the different planning challenges that appear outside controlled indoor environments.",
    tags: ["Medium", "Navigation", "ROS", "AMR"],
    link: "https://medium.com/@vidhunvwarrier/indoor-vs-outdoor-autonomous-navigation-my-experience-ff2276b1249b"
  },
  {
    title: "From Fusion 360 to Isaac Sim: Simulating an Ackermann Drive Robot with ROS 2",
    date: "May 2026",
    excerpt: "A walkthrough of designing an Ackermann robot in Fusion 360, exporting it to URDF, importing it into Isaac Sim, wiring an Action Graph controller, and driving it in real time through ROS 2.",
    tags: ["Medium", "Isaac Sim", "ROS2", "Ackermann"],
    link: "https://medium.com/p/4e2b4b6975f4?postPublishedType=initial"
  },
  {
    title: "An Autonomous Home Assistant Robot for Elderly Care",
    date: "Nov 24, 2022",
    excerpt: "Published in the International Conference on Robotics, Control, Automation and Artificial Intelligence, covering the design and development of an autonomous home assistant robot for elderly care.",
    tags: ["Publication", "Robotics", "Elderly Care"],
    link: "https://scholar.google.com/scholar?q=An+Autonomous+Home+Assistant+Robot+for+Elderly+Care"
  }
];
