export interface DemoRequest {
  name: string;
  email: string;
  company: string;
  phone: string;
  date: string;
  time: string;
  notes?: string;
}

export interface StoredDemoRequest extends DemoRequest {
  id: number;
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
}