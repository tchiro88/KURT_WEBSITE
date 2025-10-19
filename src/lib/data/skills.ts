import type { SkillCategory } from '@/lib/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'control-systems',
    name: 'Control Systems & Programming',
    description: 'Industrial control system design and implementation',
    skills: [
      { name: 'Rockwell Allen-Bradley', level: 'expert', yearsOfExperience: 10 },
      { name: 'Schneider Electric', level: 'advanced', yearsOfExperience: 8 },
      { name: 'Siemens S7', level: 'advanced', yearsOfExperience: 6 },
      { name: 'Ladder Logic', level: 'expert', yearsOfExperience: 10 },
      { name: 'Structured Text', level: 'advanced', yearsOfExperience: 8 },
      { name: 'Function Block Diagram', level: 'advanced', yearsOfExperience: 7 },
    ],
  },
  {
    id: 'scada-hmi',
    name: 'SCADA & HMI Systems',
    description: 'Supervisory control and human-machine interface development',
    skills: [
      { name: 'Ignition SCADA', level: 'advanced', yearsOfExperience: 5 },
      { name: 'PlantPAX', level: 'advanced', yearsOfExperience: 6 },
      { name: 'Wonderware', level: 'intermediate', yearsOfExperience: 4 },
      { name: 'HMI Design', level: 'expert', yearsOfExperience: 10 },
    ],
  },
  {
    id: 'iiot-modern',
    name: 'IIoT & Modern Automation',
    description: 'Industry 4.0 technologies and edge computing',
    skills: [
      { name: 'Node-RED', level: 'expert', yearsOfExperience: 4 },
      { name: 'MQTT / Sparkplug B', level: 'advanced', yearsOfExperience: 3 },
      { name: 'InfluxDB', level: 'advanced', yearsOfExperience: 3 },
      { name: 'Grafana', level: 'advanced', yearsOfExperience: 3 },
      { name: 'Docker', level: 'advanced', yearsOfExperience: 4 },
      { name: 'Edge Computing', level: 'advanced', yearsOfExperience: 3 },
    ],
  },
  {
    id: 'protocols',
    name: 'Industrial Protocols',
    description: 'Communication protocols and networking',
    skills: [
      { name: 'Modbus/TCP', level: 'expert', yearsOfExperience: 10 },
      { name: 'Ethernet/IP', level: 'expert', yearsOfExperience: 10 },
      { name: 'OPC-UA', level: 'advanced', yearsOfExperience: 5 },
      { name: 'DNP3', level: 'intermediate', yearsOfExperience: 3 },
      { name: 'Industrial Ethernet', level: 'expert', yearsOfExperience: 10 },
    ],
  },
  {
    id: 'development',
    name: 'Software Development',
    description: 'Programming and development tools',
    skills: [
      { name: 'Python', level: 'advanced', yearsOfExperience: 5 },
      { name: 'JavaScript', level: 'advanced', yearsOfExperience: 4 },
      { name: 'SQL', level: 'advanced', yearsOfExperience: 6 },
      { name: 'Git/GitHub', level: 'advanced', yearsOfExperience: 5 },
      { name: 'Linux', level: 'advanced', yearsOfExperience: 6 },
    ],
  },
]
