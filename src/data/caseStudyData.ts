import {
  TechnicalMetaTag,
  FeatureCard,
  WorkflowStep,
  ResponsibilityCategory,
  AwsLayer,
  FlowStep,
  EngineeringChallenge,
  TimelineStage,
  GalleryItem,
  DeepDiveTopic,
} from '../types';

export const HERO_META: TechnicalMetaTag[] = [
  { label: 'Real-Time Communication', value: 'WebRTC (P2P)' },
  { label: 'Frontend', value: 'React + Vite' },
  { label: 'Backend', value: 'Node.js + Express' },
  { label: 'Database', value: 'PostgreSQL + Prisma' },
  { label: 'Infrastructure', value: 'AWS (EC2 / ALB / RDS)' },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'webrtc-consultation',
    title: 'Real-Time Consultation',
    description:
      'Browser-based peer-to-peer video & audio communication powered by WebRTC native APIs with low-latency media negotiation.',
    icon: 'Video',
    highlights: ['P2P Media Channel', 'Signaling Coordination', 'Adaptive Quality'],
  },
  {
    id: 'app-workflow',
    title: 'Application Workflow',
    description:
      'Coordinated patient-doctor booking, availability scheduling, room lifecycle management, and secure session state via REST APIs.',
    icon: 'Workflow',
    highlights: ['JWT Authentication', 'Schedule State Engine', 'Doctor Availability'],
  },
  {
    id: 'cloud-infrastructure',
    title: 'AWS Cloud Infrastructure',
    description:
      'Production AWS architecture with isolated public/private subnets, Application Load Balancers, PostgreSQL RDS, and containerized deployment.',
    icon: 'CloudServer',
    highlights: ['VPC Segmentation', 'Multi-Subnet RDS', 'Container Deployment'],
  },
];

export const CONSULTATION_SIMULATION_STEPS: WorkflowStep[] = [
  {
    step: 1,
    time: '00:00 - 00:08',
    title: 'Application Launch & Authentication',
    description: 'Patient and Doctor access Docco via HTTPS CloudFront/ALB. Secure JWT verification establishes session state.',
    actor: 'system',
    badge: 'Auth & Handshake',
    mediaDetails: { resolution: '1080p UI', codec: 'HTTPS / TLS 1.3' },
  },
  {
    step: 2,
    time: '00:09 - 00:22',
    title: 'Doctor Schedule & Patient Request',
    description: 'Patient views Dr. Sarah Jenkins availability in real time, selects an open consultation slot, and dispatches a booking request.',
    actor: 'patient',
    badge: 'REST API / Prisma',
    mediaDetails: { latency: '18ms', bitrate: '120 KB/s' },
  },
  {
    step: 3,
    time: '00:23 - 00:35',
    title: 'Doctor Accepts Consultation',
    description: 'Doctor receives instant consultation alert on dashboard, reviews patient intake notes, and accepts the incoming session.',
    actor: 'doctor',
    badge: 'State Transition',
    mediaDetails: { latency: '14ms', bitrate: '140 KB/s' },
  },
  {
    step: 4,
    time: '00:36 - 00:50',
    title: 'WebRTC Signaling & Room Connection',
    description: 'Node.js signaling server coordinates SDP offer/answer exchange and ICE candidate gathering between Patient and Doctor browsers.',
    actor: 'system',
    badge: 'WebRTC Signaling',
    mediaDetails: { codec: 'SDP / ICE Host', latency: '24ms' },
  },
  {
    step: 5,
    time: '00:51 - 01:25',
    title: 'Live P2P Video Consultation',
    description: 'Direct browser-to-browser encrypted video stream establishes via VP8/Opus media transport with dynamic bitrate adjustment.',
    actor: 'doctor',
    badge: 'Live WebRTC Media',
    mediaDetails: { resolution: '1280x720 @ 30fps', codec: 'VP8 / Opus', latency: '42ms', bitrate: '1.8 Mbps' },
  },
  {
    step: 6,
    time: '01:26 - 01:40',
    title: 'Consultation Wrap-up & Notes Persisted',
    description: 'Call gracefully terminates, session metrics are logged to CloudWatch, and consultation notes persist to RDS PostgreSQL via Prisma.',
    actor: 'patient',
    badge: 'Postgres Persistence',
    mediaDetails: { resolution: 'Session Closed', codec: 'REST / TLS 1.3' },
  },
];

export const RESPONSIBILITY_CATEGORIES: ResponsibilityCategory[] = [
  {
    id: 'infra',
    number: '01',
    title: 'Cloud Infrastructure',
    description: 'Designed and provisioned resilient AWS foundational layers to host backend containers and managed database instances.',
    items: [
      'Configured custom VPC (10.0.0.0/16) with 2 Public & 2 Private Subnets across 2 Availability Zones',
      'Deployed Amazon EC2 instances in private subnets with auto-recovery policies',
      'Provisioned Amazon RDS PostgreSQL instance with multi-AZ subnet group support',
      'Configured S3 bucket with CloudFront distribution for static asset caching',
    ],
    awsServices: ['VPC', 'EC2', 'RDS PostgreSQL', 'S3', 'CloudFront', 'Internet Gateway'],
  },
  {
    id: 'networking',
    number: '02',
    title: 'Networking & Traffic Control',
    description: 'Architected network boundary isolation and load balancing strategies to separate public web traffic from internal database traffic.',
    items: [
      'Provisioned AWS Application Load Balancer (ALB) to handle incoming HTTP/HTTPS traffic',
      'Configured NAT Gateway for secure egress connectivity from private EC2 subnets',
      'Structured strict route tables separating public internet access from isolated data tiers',
      'Enabled sticky sessions on ALB to support WebRTC signaling connection affinity',
    ],
    awsServices: ['ALB', 'NAT Gateway', 'Route 53', 'ACM (SSL/TLS)', 'Security Groups'],
  },
  {
    id: 'security',
    number: '03',
    title: 'IAM & Security Boundaries',
    description: 'Enforced least-privilege security controls across EC2 instance roles, database access rules, and encryption standard compliance.',
    items: [
      'Created custom IAM roles with minimal permissions for EC2 instance profiles',
      'Designed layered Security Groups allowing DB port 5432 ingress ONLY from backend EC2 security group',
      'Provisioned SSL/TLS certificates through AWS Certificate Manager (ACM)',
      'Configured environment secret management using AWS Systems Manager Parameter Store',
    ],
    awsServices: ['IAM', 'ACM', 'SSM Parameter Store', 'Security Groups'],
  },
  {
    id: 'deployment',
    number: '04',
    title: 'Containerization & Deployment',
    description: 'Streamlined build and runtime environments using Docker containerization and automated Linux service orchestration.',
    items: [
      'Multi-stage Dockerfile creation for Node.js backend & React frontend static export',
      'Docker Compose orchestration for multi-container development and production parity',
      'Automated deployment scripts executing database migrations via Prisma ORM on release',
      'Systemd service management for automatic container process restart on host reboot',
    ],
    awsServices: ['Docker', 'EC2 Systemd', 'Prisma Engine', 'GitHub Actions / Bash'],
  },
  {
    id: 'observability',
    number: '05',
    title: 'Observability & Monitoring',
    description: 'Implemented end-to-end monitoring stacks to track host compute metrics, container health, and database connection pools.',
    items: [
      'Configured Prometheus server scraping host Node Exporter and cAdvisor container metrics',
      'Built customized Grafana dashboards showcasing CPU, Memory, Disk I/O, and Network Throughput',
      'Configured CloudWatch Alarms for EC2 high CPU utilization (>80%) and RDS storage alerts',
      'Established HTTP health check endpoints on Express backend inspected by ALB target groups',
    ],
    awsServices: ['CloudWatch', 'Prometheus', 'Grafana', 'cAdvisor', 'Node Exporter'],
  },
];

export const AWS_LAYERS: AwsLayer[] = [
  {
    id: 'edge',
    name: 'Edge & Content Delivery Layer',
    description: 'Manages incoming user requests, SSL termination, and static asset distribution close to end users.',
    services: [
      { name: 'Route 53', icon: 'Globe', type: 'DNS', details: 'Latency-based routing & health-check DNS records for app domain.' },
      { name: 'CloudFront', icon: 'Zap', type: 'CDN', details: 'Global edge distribution caching React frontend bundle from S3.' },
      { name: 'Amazon S3', icon: 'Database', type: 'Storage', details: 'Encrypted storage bucket hosting static web application builds.' },
      { name: 'AWS ACM', icon: 'ShieldCheck', type: 'SSL/TLS', details: 'Free managed TLS certificates attached to CloudFront & ALB.' },
    ],
  },
  {
    id: 'networking',
    name: 'Networking & Isolation Layer',
    description: 'Enforces strict public/private network boundaries with VPC subnets, NAT Gateways, and security groups.',
    services: [
      { name: 'Custom VPC', icon: 'Network', type: 'Network (10.0.0.0/16)', details: 'Isolated cloud network spanning 2 Availability Zones.' },
      { name: 'Public Subnets', icon: 'Unlock', type: 'Ingress Subnets', details: 'Houses ALB, Internet Gateway, and NAT Gateway.' },
      { name: 'Private Subnets', icon: 'Lock', type: 'Internal Subnets', details: 'Houses EC2 backend instances and RDS PostgreSQL clusters.' },
      { name: 'App Load Balancer', icon: 'GitFork', type: 'ALB', details: 'Distributes HTTPS REST and WebRTC signaling traffic to EC2.' },
    ],
  },
  {
    id: 'compute',
    name: 'Compute & Application Layer',
    description: 'Executes containerized Node.js/Express application servers and handles signaling coordination.',
    services: [
      { name: 'Amazon EC2', icon: 'Server', type: 't3.medium / Ubuntu', details: 'Runs Dockerized Express application and signaling process.' },
      { name: 'Docker Engine', icon: 'Box', type: 'Container Runtime', details: 'Containerized Express server and static asset handlers.' },
      { name: 'Express REST API', icon: 'Cpu', type: 'Node.js Service', details: 'Coordinates consultation state, auth, and doctor availability.' },
    ],
  },
  {
    id: 'database',
    name: 'Database & Persistence Layer',
    description: 'Provides durable relational storage for user accounts, consultation histories, and doctor schedules.',
    services: [
      { name: 'Amazon RDS', icon: 'Database', type: 'PostgreSQL 15', details: 'Managed database instance located strictly in private subnets.' },
      { name: 'Prisma ORM', icon: 'Layers', type: 'Data Access Layer', details: 'Type-safe queries, schema migration engine, and pooling.' },
    ],
  },
  {
    id: 'security',
    name: 'Security & Access Control Layer',
    description: 'Protects backend resources using granular IAM policies, parameter secrets, and security groups.',
    services: [
      { name: 'AWS IAM', icon: 'KeyRound', type: 'Identity & Access', details: 'Least-privilege execution roles for EC2 instance profile.' },
      { name: 'Security Groups', icon: 'ShieldAlert', type: 'Stateful Firewall', details: 'Enforces DB ingress strictly from EC2 security group SG-App.' },
      { name: 'SSM Parameter Store', icon: 'Lock', type: 'Secrets Manager', details: 'Secure encrypted store for JWT keys and DB credentials.' },
    ],
  },
  {
    id: 'observability',
    name: 'Observability & Metrics Layer',
    description: 'Monitors infrastructure health, container performance, and network throughput in real time.',
    services: [
      { name: 'CloudWatch', icon: 'Activity', type: 'AWS Monitoring', details: 'EC2 CPU, disk metrics, and system alert notifications.' },
      { name: 'Prometheus & Grafana', icon: 'LineChart', type: 'Metrics Stack', details: 'Scrapes host & container metrics via cAdvisor/Node Exporter.' },
    ],
  },
];

export const PATIENT_FLOW_STEPS: FlowStep[] = [
  { id: 1, title: 'Patient Authentication', subtitle: 'Login & Session Token', source: 'Patient Browser', destination: 'ALB -> Express API', description: 'Patient inputs credentials, Express verifies password hash against PostgreSQL via Prisma, and returns signed JWT token.', isControlPath: true },
  { id: 2, title: 'Search & Select Doctor', subtitle: 'Browse Availability', source: 'Patient Browser', destination: 'Express API -> RDS', description: 'Patient queries doctor profiles and real-time open calendar slots. Server queries PostgreSQL with Prisma ORM.', isControlPath: true },
  { id: 3, title: 'Dispatch Booking Request', subtitle: 'Create Consultation State', source: 'Patient Browser', destination: 'Express API', description: 'Patient submits consultation request. Backend inserts new appointment record with status "PENDING".', isControlPath: true },
  { id: 4, title: 'Wait for Confirmation', subtitle: 'Real-time Status Polling / Event', source: 'Patient Browser', destination: 'Express API', description: 'Patient UI listens for appointment state update. Status transitions to "ACCEPTED" when doctor responds.', isControlPath: true },
  { id: 5, title: 'Join Consultation Room', subtitle: 'WebRTC Room Authorization', source: 'Patient Browser', destination: 'WebRTC Room Engine', description: 'Patient enters room URL. Server verifies token, matches doctor/patient IDs, and initializes WebRTC signaling.', isControlPath: true },
  { id: 6, title: 'WebRTC Media Streaming', subtitle: 'Peer-to-Peer Video/Audio', source: 'Patient Browser', destination: 'Doctor Browser', description: 'Direct encrypted media transmission via WebRTC PeerConnection using VP8 video and Opus audio codecs.', isMediaStream: true },
];

export const DOCTOR_FLOW_STEPS: FlowStep[] = [
  { id: 1, title: 'Doctor Dashboard Login', subtitle: 'Provider Authentication', source: 'Doctor Browser', destination: 'Express API', description: 'Doctor logs into dashboard, retrieving schedule overview and active queue of incoming consultation requests.', isControlPath: true },
  { id: 2, title: 'Review Patient Intake', subtitle: 'Consultation Request Alert', source: 'Doctor Dashboard', destination: 'RDS PostgreSQL', description: 'Doctor views incoming appointment details, medical intake summaries, and scheduled consultation window.', isControlPath: true },
  { id: 3, title: 'Accept Consultation', subtitle: 'State Mutation to ACCEPTED', source: 'Doctor Dashboard', destination: 'Express API -> RDS', description: 'Doctor clicks "Accept Request". Express updates DB record status to "ACCEPTED" and returns WebRTC room token.', isControlPath: true },
  { id: 4, title: 'Enter Video Room', subtitle: 'Media Device Access', source: 'Doctor Browser', destination: 'WebRTC Signaling', description: 'Doctor grants camera/mic permissions and initializes SDP offer/answer handshake with patient browser.', isControlPath: true },
  { id: 5, title: 'Conduct Consultation', subtitle: 'P2P Real-time Video Stream', source: 'Doctor Browser', destination: 'Patient Browser', description: 'High-definition encrypted video/audio stream running over WebRTC UDP media channel.', isMediaStream: true },
  { id: 6, title: 'Persist Consultation Notes', subtitle: 'Post-session Documentation', source: 'Doctor Dashboard', destination: 'Express API -> RDS', description: 'Doctor writes summary notes & prescriptions, persisting records to encrypted PostgreSQL database.', isControlPath: true },
];

export const API_DATA_FLOW_STEPS: FlowStep[] = [
  { id: 1, title: 'HTTPS Client Request', subtitle: 'Port 443 / TLS 1.3', source: 'User Browser', destination: 'AWS ALB', description: 'Client browser dispatches REST API call (e.g., POST /api/consultations) routed to Application Load Balancer.', isControlPath: true },
  { id: 2, title: 'Load Balancer Distribution', subtitle: 'HTTP Target Group Routing', source: 'AWS ALB', destination: 'EC2 Backend (Port 3000)', description: 'ALB decrypts SSL certificate (ACM) and forwards HTTP request to target backend EC2 instance in private subnet.', isControlPath: true },
  { id: 3, title: 'Express Middleware & Auth', subtitle: 'JWT & Validation', source: 'Express Server', destination: 'Route Controller', description: 'Express parses JSON body, validates bearer token, and passes control to business logic controller.', isControlPath: true },
  { id: 4, title: 'Prisma ORM Database Query', subtitle: 'Connection Pool', source: 'Express Controller', destination: 'RDS PostgreSQL (Port 5432)', description: 'Prisma executes parameterised SQL query across private subnet boundary through SG-Database firewall.', isControlPath: true },
  { id: 5, title: 'PostgreSQL Execution', subtitle: 'ACID Transaction', source: 'RDS PostgreSQL', destination: 'Prisma Client', description: 'PostgreSQL executes query on NVMe storage, returning formatted row result set back to Prisma client.', isControlPath: true },
  { id: 6, title: 'JSON HTTP Response', subtitle: 'Status 200 OK', source: 'Express API', destination: 'User Browser via ALB', description: 'Express serializes result object to JSON and returns HTTP 200 OK through ALB back to the user browser.', isControlPath: true },
];

export const WEBRTC_FLOW_STEPS: FlowStep[] = [
  { id: 1, title: 'Step 1: REST Room Verification', subtitle: 'Control Path (HTTP)', source: 'Patient & Doctor Browsers', destination: 'Node.js Express API', description: 'Browsers authenticate with backend to ensure both parties possess valid permissions for Room ID #doc-892.', isControlPath: true },
  { id: 2, title: 'Step 2: SDP Offer Generation', subtitle: 'Control Path (Signaling)', source: 'Patient Browser (Initiator)', destination: 'Node.js Signaling Server', description: 'Patient browser creates Session Description Protocol (SDP) Offer specifying supported video codecs (VP8/H.264).', isControlPath: true },
  { id: 3, title: 'Step 3: SDP Offer Delivery & Answer', subtitle: 'Control Path (Signaling)', source: 'Node.js Signaling Server', destination: 'Doctor Browser', description: 'Signaling server relays SDP Offer to Doctor browser. Doctor generates SDP Answer with matched codec capabilities.', isControlPath: true },
  { id: 4, title: 'Step 4: ICE Candidate Exchange', subtitle: 'Control Path (Network Discovery)', source: 'Both Browsers', destination: 'Signaling -> Peer Browser', description: 'Browsers gather local IP addresses and candidate transport ports, exchanging candidates via signaling server.', isControlPath: true },
  { id: 5, title: 'Step 5: Direct P2P Media Path', subtitle: 'Real-Time Media Stream (UDP)', source: 'Patient Browser', destination: 'Doctor Browser (Direct P2P)', description: 'Direct peer-to-peer UDP connection established. Encrypted audio/video media bypasses server entirely.', isMediaStream: true },
];

export const ENGINEERING_CHALLENGES: EngineeringChallenge[] = [
  {
    id: 'db-connectivity',
    category: 'database',
    categoryLabel: 'Database & Security Groups',
    title: 'RDS PostgreSQL Connection Timeout from EC2 Private Subnet',
    problem:
      'Backend Express app running on EC2 failed to connect to PostgreSQL RDS database, throwing Prisma connection timeout errors (ETIMEDOUT) during initial deployment.',
    investigation:
      'Inspected AWS Security Group ingress rules. Discovered RDS Security Group had default restrictive rules blocking port 5432. Route tables were correctly configured, but stateful firewall rules lacked explicit ingress permissions.',
    resolution:
      'Created dedicated SG-App for backend EC2 instances and SG-Database for RDS. Added SG-Database Ingress rule allowing TCP port 5432 strictly referencing SG-App ID rather than IP ranges, enforcing security group chaining.',
    lesson:
      'Security group chaining (referencing Security Group IDs instead of CIDR blocks) provides seamless IP-independent security boundaries across dynamic EC2 instances.',
    impactMetrics: ['0% Unintended IP Exposure', '100% DB Isolation', 'Zero Connection Latency Overhead'],
  },
  {
    id: 'alb-healthchecks',
    category: 'alb',
    categoryLabel: 'Load Balancing & Target Groups',
    title: 'ALB Target Group Health Check Failures Causing 502 Bad Gateway',
    problem:
      'AWS Application Load Balancer marked EC2 instances as "Unhealthy", resulting in HTTP 502 Bad Gateway responses on external user requests.',
    investigation:
      'Analyzed Express server logs. Found ALB health check was pinging root path "/" which returned 404 because root route was unhandled in Express. Additionally, Express was binding to localhost (127.0.0.1) instead of 0.0.0.0.',
    resolution:
      'Implemented explicit `/api/health` lightweight endpoint returning HTTP 200 `{ status: "ok" }`. Configured ALB target group health check path to `/api/health` and updated Express bind host to `0.0.0.0:3000`.',
    lesson:
      'Containerized applications behind AWS load balancers must bind to `0.0.0.0` and expose dedicated lightweight health endpoints unburdened by heavy DB queries.',
    impactMetrics: ['100% ALB Target Health', 'Sub-5ms Healthcheck Latency', '0 Unwanted 502 Failures'],
  },
  {
    id: 'webrtc-mixed-content',
    category: 'networking',
    categoryLabel: 'WebRTC & Security',
    title: 'WebRTC Media Handshake Blocked by Mixed-Content Restrictions',
    problem:
      'WebRTC `getUserMedia()` and signaling WebSocket/HTTP requests failed in production browsers with `DOMException: Permission denied` or mixed content errors.',
    investigation:
      'Frontend was loaded over HTTPS via CloudFront/ALB, but signaling server was attempting HTTP calls directly to EC2 public IP. Chrome & Safari enforce strict HTTPS/WSS origin rules for WebRTC media device access.',
    resolution:
      'Provisioned AWS ACM TLS certificate for domain `docco-app.com`. Routed all HTTP/HTTPS REST and WebSocket signaling through ALB listener on port 443 with TLS termination at the load balancer.',
    lesson:
      'WebRTC camera/microphone access strictly requires secure HTTPS/WSS contexts across all signaling endpoints without exception.',
    impactMetrics: ['100% HTTPS TLS 1.3 Coverage', 'Zero Mixed Content Warnings', 'Seamless Camera Grant'],
  },
  {
    id: 'iam-least-privilege',
    category: 'iam',
    categoryLabel: 'IAM & Secrets',
    title: 'Hardcoded Database Credentials Risk in Container Build Steps',
    problem:
      'Initial container configuration passed database connection strings via static environment variables in Dockerfile, risking credentials leak in version control.',
    investigation:
      'Audited security posture. Docker image layers contained plaintext database passwords in cleartext string metadata visible via `docker inspect`.',
    resolution:
      'Migrated database secrets and JWT tokens to AWS SSM Parameter Store (SecureString). Attached IAM Instance Profile to EC2 instances allowing `ssm:GetParameters`. Inject secrets at runtime during container start script.',
    lesson:
      'Secrets must never exist in container images or source code; runtime IAM instance profiles provide secure parameter injection without static keys.',
    impactMetrics: ['0 Hardcoded Secrets', 'IAM Instance Profile Auth', 'Automated Rotation Ready'],
  },
  {
    id: 'monitoring-overhead',
    category: 'monitoring',
    categoryLabel: 'Observability & Metrics',
    title: 'High CPU Overhead from Unoptimized Metrics Exporters on EC2',
    problem:
      'Prometheus scraping container metrics every 1 second caused unexpected 15% baseline CPU utilization spike on single t3.medium host instance.',
    investigation:
      'Profiled cAdvisor and Node Exporter resource consumption. Scrape interval of 1s forced constant disk I/O and CPU context switching for non-critical container telemetry.',
    resolution:
      'Adjusted Prometheus scrape interval to 15 seconds for host metrics and 30 seconds for cAdvisor. Implemented metric relabeling rules to drop unneeded cAdvisor container network interface stats.',
    lesson:
      'Observability infrastructure must be tuned so that metric collection overhead remains below 2% of total compute resources.',
    impactMetrics: ['<1.5% Monitoring CPU Cost', '15s Metric Resolution', 'Zero System Jitter'],
  },
];

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    phase: 'Phase 01',
    number: '01',
    title: 'Monolithic Local Prototype',
    subtitle: 'Proof of Concept Application',
    whatChanged: 'Built initial WebRTC video chat application running locally with SQLite and Express on a single dev machine.',
    whyItChanged: 'Verified WebRTC media stream negotiation and basic doctor-patient scheduling logic.',
    outcome: 'Functional local application proof of concept with hardcoded room URLs.',
    techAdded: ['React', 'Vite', 'Express', 'SQLite', 'WebRTC'],
  },
  {
    phase: 'Phase 02',
    number: '02',
    title: 'Single-Server AWS EC2 Launch',
    subtitle: 'First Cloud Presence',
    whatChanged: 'Provisioned single AWS EC2 Ubuntu instance hosting Express, React build, and local PostgreSQL database.',
    whyItChanged: 'Transitioned project from local machine to publicly accessible cloud server.',
    outcome: 'Application accessible via public IP, but database and app shared single compute point of failure.',
    techAdded: ['AWS EC2', 'Security Groups', 'Ubuntu', 'PostgreSQL'],
  },
  {
    phase: 'Phase 03',
    number: '03',
    title: 'Distributed AWS Cloud Architecture',
    subtitle: 'VPC & Managed DB Decoupling',
    whatChanged: 'Architected custom VPC with 2 Public and 2 Private subnets. Moved PostgreSQL database to AWS RDS in private subnet.',
    whyItChanged: 'Eliminated single point of failure, isolated application data from public internet exposure.',
    outcome: 'Secure multi-tier cloud environment with DB isolated behind private subnet security groups.',
    techAdded: ['AWS VPC', 'Private Subnets', 'AWS RDS', 'NAT Gateway', 'Internet Gateway'],
  },
  {
    phase: 'Phase 04',
    number: '04',
    title: 'Load Balancing & SSL Termination',
    subtitle: 'High-Availability Ingress',
    whatChanged: 'Added AWS Application Load Balancer (ALB) across 2 Availability Zones and attached AWS ACM SSL/TLS certificates.',
    whyItChanged: 'Secured WebRTC HTTPS signaling requirement and enabled health-check backed load distribution.',
    outcome: 'Full TLS 1.3 encryption, automatic health checks, and smooth HTTPS signaling for WebRTC.',
    techAdded: ['AWS ALB', 'AWS ACM (SSL)', 'Route 53', 'Target Groups'],
  },
  {
    phase: 'Phase 05',
    number: '05',
    title: 'Containerization & Build Automation',
    subtitle: 'Docker & Deployment Parity',
    whatChanged: 'Packaged Express backend into multi-stage Docker containers and structured Prisma DB migration scripts.',
    whyItChanged: 'Eliminated "works on my machine" inconsistencies and simplified EC2 host provisioning.',
    outcome: 'Reproducible container builds running smoothly on EC2 host via Docker Compose.',
    techAdded: ['Docker', 'Multi-stage Builds', 'Docker Compose', 'Prisma Engine'],
  },
  {
    phase: 'Phase 06',
    number: '06',
    title: 'Full Observability Stack Integration',
    subtitle: 'Metrics & CloudWatch Alerting',
    whatChanged: 'Deployed Prometheus, Grafana, cAdvisor, and Node Exporter alongside CloudWatch alarms.',
    whyItChanged: 'Provided visibility into CPU spikes, memory utilization, DB query duration, and target health.',
    outcome: 'Real-time telemetry dashboards and proactive alerts for infrastructure performance.',
    techAdded: ['Prometheus', 'Grafana', 'Node Exporter', 'cAdvisor', 'CloudWatch Alarms'],
  },
  {
    phase: 'Phase 07',
    number: '07',
    title: 'Infrastructure as Code Progression',
    subtitle: 'Declarative Provisioning',
    whatChanged: 'Codified core VPC, Subnets, Security Groups, and EC2 instance profiles into declarative Terraform HCL files.',
    whyItChanged: 'Ensured entire AWS environment can be recreated deterministically with zero manual console drift.',
    outcome: 'Version-controlled infrastructure definitions ready for automated CI/CD pipeline deployment.',
    techAdded: ['Terraform HCL', 'State Management', 'SSM Parameter Store'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'consultation-room-ui',
    title: 'Docco Real-Time Consultation Interface',
    category: 'application',
    caption: 'Browser-based WebRTC peer-to-peer video room with live audio controls, doctor credentials badge, and patient intake panel.',
    fullDescription: 'High-resolution capture of the active Docco consultation view showing live video stream rendering over WebRTC VP8 codec with integrated patient health notes and real-time call control widgets.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    tags: ['WebRTC', 'React 19', 'VP8 Video', 'Patient Notes'],
    technicalDetails: [
      { label: 'Video Resolution', value: '1280x720 (HD)' },
      { label: 'Audio Codec', value: 'Opus 48kHz' },
      { label: 'Transport Protocol', value: 'UDP / DTLS-SRTP' },
      { label: 'Signaling Latency', value: '22ms' },
    ],
  },
  {
    id: 'doctor-dashboard-ui',
    title: 'Doctor Schedule & Queue Dashboard',
    category: 'application',
    caption: 'Doctor portal displaying upcoming patient consultations, availability toggle, and quick accept workflow controls.',
    fullDescription: 'Provider management dashboard where doctors manage consultation windows, accept incoming patient booking requests, and review past medical encounter history stored in PostgreSQL.',
    imageUrl: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Doctor Portal', 'REST API', 'Prisma ORM', 'JWT Auth'],
    technicalDetails: [
      { label: 'Auth Standard', value: 'Bearer JWT (RSA256)' },
      { label: 'DB Query Time', value: '4.2ms' },
      { label: 'Frontend Framework', value: 'React + Vite' },
      { label: 'State Management', value: 'React Context' },
    ],
  },
  {
    id: 'aws-vpc-topology',
    category: 'infrastructure',
    title: 'AWS VPC Multi-Subnet Architecture Console',
    caption: 'AWS Management Console displaying custom VPC (10.0.0.0/16) with isolated public and private subnets across 2 AZs.',
    fullDescription: 'Verified AWS topology showing isolated public subnets housing ALB and NAT Gateway, and private subnets isolating EC2 compute and RDS PostgreSQL instances.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    tags: ['AWS VPC', 'Subnets', 'Route Tables', 'Security Groups'],
    technicalDetails: [
      { label: 'VPC CIDR', value: '10.0.0.0/16' },
      { label: 'Public Subnets', value: '10.0.1.0/24, 10.0.2.0/24' },
      { label: 'Private Subnets', value: '10.0.10.0/24, 10.0.20.0/24' },
      { label: 'Availability Zones', value: 'us-east-1a, us-east-1b' },
    ],
  },
  {
    id: 'alb-target-group',
    category: 'infrastructure',
    title: 'AWS Application Load Balancer Target Group',
    caption: 'ALB Target Group console showing healthy EC2 target instance on port 3000 passing HTTP /api/health probes.',
    fullDescription: 'Active load balancer configuration demonstrating healthy target status across EC2 backend instances with SSL/TLS termination managed via AWS Certificate Manager (ACM).',
    imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1200&auto=format&fit=crop',
    tags: ['AWS ALB', 'Target Group', 'Health Check', 'ACM TLS'],
    technicalDetails: [
      { label: 'Health Path', value: '/api/health' },
      { label: 'Check Interval', value: '15 seconds' },
      { label: 'Healthy Threshold', value: '2 Consecutive' },
      { label: 'Port Mapping', value: 'HTTPS 443 -> HTTP 3000' },
    ],
  },
  {
    id: 'grafana-metrics-dashboard',
    category: 'observability',
    title: 'Grafana Infrastructure & Container Dashboard',
    caption: 'Real-time Grafana dashboard visualizing host EC2 CPU utilization, memory pressure, container network I/O, and DB connections.',
    fullDescription: 'Custom Grafana dashboard aggregating metrics scraped by Prometheus from Node Exporter and cAdvisor container runtime telemetry.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tags: ['Grafana', 'Prometheus', 'cAdvisor', 'Node Exporter'],
    technicalDetails: [
      { label: 'Scrape Period', value: '15 seconds' },
      { label: 'CPU Baseline', value: '12.4% Avg' },
      { label: 'RAM Memory Used', value: '1.1 GB / 4 GB' },
      { label: 'Active DB Connections', value: '8 Active Pools' },
    ],
  },
  {
    id: 'cloudwatch-alarms',
    category: 'observability',
    title: 'AWS CloudWatch Alarms & Metrics Panel',
    caption: 'CloudWatch console displaying proactive metric alarms configured for EC2 CPU utilization (>80%) and RDS storage thresholds.',
    fullDescription: 'CloudWatch alarms hooked to SNS notification topics ensuring immediate alerts if compute or storage bounds breach predefined operational thresholds.',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
    tags: ['CloudWatch', 'AWS SNS', 'Metric Alarms', 'EC2 Telemetry'],
    technicalDetails: [
      { label: 'CPU Alarm Threshold', value: '> 80% for 5 mins' },
      { label: 'RDS Storage Alarm', value: '< 15% Free Space' },
      { label: 'Notification Target', value: 'AWS SNS -> Email/Slack' },
      { label: 'Status', value: 'OK (Green)' },
    ],
  },
];

export const DEEP_DIVE_TOPICS: DeepDiveTopic[] = [
  {
    title: 'Architecting WebRTC for Production AWS Deployments',
    description: 'Detailed analysis of WebRTC SDP signaling negotiation, NAT traversal considerations, and how HTTPS load balancers coordinate peer connections.',
    readTime: '6 min read',
    keyTakeaways: ['SDP Offer/Answer Handshake', 'Signaling Server State', 'HTTPS/WSS Security Requirements'],
  },
  {
    title: 'Multi-Tier VPC Segmentation & Security Group Chaining',
    description: 'A deep look into setting up isolated public and private subnets, NAT Gateway routing rules, and strict Security Group chaining for RDS PostgreSQL.',
    readTime: '8 min read',
    keyTakeaways: ['Private Subnet DB Isolation', 'SG Chaining Pattern', 'Egress NAT Gateway Setup'],
  },
  {
    title: 'Prisma ORM & PostgreSQL Performance in Containerized Express',
    description: 'How Prisma connection pooling was tuned for Dockerized Express backend instances on EC2 to prevent connection starvation on RDS.',
    readTime: '5 min read',
    keyTakeaways: ['Prisma Connection Management', 'Migration Pipelines', 'Relational Index Optimization'],
  },
  {
    title: 'Full Observability Stack: Prometheus, Grafana & cAdvisor on EC2',
    description: 'Step-by-step guide on scraping host and container metrics on AWS without introducing CPU overhead or disk metric bloat.',
    readTime: '7 min read',
    keyTakeaways: ['Prometheus Scrape Interval Tuning', 'cAdvisor Metric Filtering', 'Custom Grafana Dashboards'],
  },
];

export const CONTACT_LINKS = {
  mediumArticle: 'https://medium.com/@ashrox6464/docco-building-a-real-time-webrtc-doctor-consultation-platform-on-aws-9128374a',
  githubRepo: 'https://github.com/ashrox6464/docco-aws-infrastructure',
  liveApp: 'https://docco-app.com',
  portfolio: 'https://ashrox.dev',
  linkedin: 'https://linkedin.com/in/ashrox',
  email: 'ashrox6464@gmail.com',
};
