
export interface Service {
  name: string;
  duration: string;
  localPrice: string; // e.g. "750,000 XAF"
  internationalPrice: string; // e.g. "$1,800"
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  colorClass: string;
  accentColor: string;
  services: Service[];
}

export enum LocationType {
  LOCAL = 'Local',
  INTERNATIONAL = 'International'
}
