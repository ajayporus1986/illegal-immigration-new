export type IdentityTier = 'Tier 1' | 'Tier 2' | 'Tier 3';

export interface LocationCoords {
  latitude: number;
  longitude: number;
}

export interface EvidenceFile {
  file: File;
  hash: string;
  timestamp?: Date;
}

export interface BrowserMetadata {
    userAgent: string;
    platform: string;
    language: string;
    vendor: string;
    cookiesEnabled: boolean;
    doNotTrack: string | null;
    screenResolution: string;
    colorDepth: number;
    pixelDepth: number;
    deviceMemory: string | number;
    hardwareConcurrency: string | number;
    connectionType: string;
}

export interface ReportData {
  caseId: string;
  reportType: 'Illegal Immigrant' | 'Suspicious Person';
  priority: 'LOW' | 'HIGH';
  credibilityScore: number;
  submissionTimestamp: Date;
  reporter: {
    tier: IdentityTier;
    name?: string; // Added for verified reporters
    phone?: string; // Added for verified reporters
    phoneHash?: string; // Stored hash, not the number itself
    ipAddress: string; // Faked for simulation
    deviceFingerprint: string;
    browserMetadata: BrowserMetadata;
  };
  suspect: {
    name: string;
    age: string;
    gender: 'Male' | 'Female' | 'Other' | '';
    skinColor: string;
    eyeColor: string;
    height: string;
    clothing: string;
    language: string;
    facialDetails: string;
    visibleMarks: string;
    distinguishingFeatures: string;
    vehicleDetails: string;
  };
  location: {
    autoGps: LocationCoords | null;
    state: string;
    city: string;
    pincode: string;
    manualAddress: string;
    landmarkPhoto: EvidenceFile | null;
    dateTime: Date;
    description: string;
  };
  evidencePhotos: EvidenceFile[];
  riskFactors: string[];
  triageStatus: 'Pending' | 'Under Review' | 'Escalated';
  reportStatus: 'Pending' | 'Verified' | 'False Alarm';
}