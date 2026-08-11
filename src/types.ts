export interface TechnicalMetaTag {
  label: string;
  value: string;
  icon?: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface WorkflowStep {
  step: number;
  time: string;
  title: string;
  description: string;
  actor: 'patient' | 'doctor' | 'system';
  badge?: string;
  mediaDetails?: {
    resolution?: string;
    codec?: string;
    latency?: string;
    bitrate?: string;
  };
}

export interface ResponsibilityCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
  awsServices: string[];
}

export interface AwsLayer {
  id: 'edge' | 'networking' | 'compute' | 'database' | 'security' | 'observability';
  name: string;
  description: string;
  services: {
    name: string;
    icon: string;
    type: string;
    details: string;
    specs?: string[];
  }[];
}

export type FlowType = 'patient' | 'doctor' | 'api' | 'webrtc';

export interface FlowStep {
  id: number;
  title: string;
  subtitle: string;
  protocol?: string;
  source: string;
  destination: string;
  description: string;
  isControlPath?: boolean;
  isMediaStream?: boolean;
}

export interface EngineeringChallenge {
  id: string;
  category: 'networking' | 'iam' | 'deployment' | 'alb' | 'database' | 'monitoring';
  categoryLabel: string;
  title: string;
  problem: string;
  investigation: string;
  resolution: string;
  lesson: string;
  impactMetrics: string[];
}

export interface TimelineStage {
  phase: string;
  number: string;
  title: string;
  subtitle: string;
  whatChanged: string;
  whyItChanged: string;
  outcome: string;
  techAdded: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'application' | 'infrastructure' | 'observability';
  caption: string;
  fullDescription: string;
  imageUrl: string;
  tags: string[];
  technicalDetails: { label: string; value: string }[];
}

export interface DeepDiveTopic {
  title: string;
  description: string;
  readTime: string;
  keyTakeaways: string[];
}
