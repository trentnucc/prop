import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { StoredDemoRequest } from '../../types/demo';
import { DemoRequestTable } from '../../components/admin/DemoRequestTable';
import { AdminHeader } from '../../components/admin/AdminHeader';

export default function DemoRequests() {
  const [requests, setRequests] = useState<StoredDemoRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDemoRequests();
  }, []);

  async function fetchDemoRequests() {
    const { data, error } = await supabase
      .from('demo_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching demo requests:', error);
      return;
    }

    setRequests(data || []);
    setLoading(false);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AdminHeader title="Demo Requests" />
      <DemoRequestTable
        requests={requests}
        loading={loading}
        onStatusUpdate={fetchDemoRequests}
      />
    </div>
  );
}