import { supabase } from '../lib/supabase';
import { DemoRequest } from '../types/demo';

export async function submitDemoRequest(demoData: DemoRequest): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('demo_requests')
      .insert([{
        name: demoData.name,
        email: demoData.email,
        company: demoData.company,
        phone: demoData.phone,
        preferred_date: demoData.date,
        preferred_time: demoData.time,
        notes: demoData.notes
      }]);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Failed to submit demo request:', error);
    return false;
  }
}