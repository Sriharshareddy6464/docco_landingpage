
### 1. Application Workflow

**How the user interacts with Docco**

```text
Patient
  ↓
Register / Login
  ↓
Browse Doctors
  ↓
Select Doctor
  ↓
Request Consultation
  ↓
Doctor Accepts
  ↓
Consultation Room
  ↓
WebRTC Video Consultation
  ↓
Digital Prescription
  ↓
Prescription Saved to Patient Profile
  ↓
Consultation History
```

**Doctor side:**

```text
Doctor
  ↓
Register / Login
  ↓
Doctor Profile
  ↓
Receive Consultation Request
  ↓
Accept Request
  ↓
Join Consultation
  ↓
Conduct Consultation
  ↓
Issue Digital Prescription
  ↓
Consultation Completed
```

---

### 2. Development Workflow

**How you built Docco**

```text
Requirement
    ↓
System Design
    ↓
Frontend Development
React + Vite
    ↓
Backend Development
Node.js + Express
    ↓
Database Design
PostgreSQL + Prisma
    ↓
WebRTC Integration
    ↓
API Integration
    ↓
Local Testing
    ↓
Integration Testing
    ↓
Dockerization
    ↓
Production Preparation
```

---

### 3. Deployment Workflow

**How Docco reaches production**

```text
Developer
   ↓
Git Repository
   ↓
Build / Test
   ↓
Docker Image
   ↓
AWS Infrastructure
   ↓
Frontend → S3 → CloudFront
   ↓
Backend → EC2
   ↓
ALB
   ↓
RDS PostgreSQL
   ↓
Monitoring
CloudWatch / Prometheus / Grafana
   ↓
Production
```


