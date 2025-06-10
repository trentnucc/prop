import React from 'react';
import { StoredDemoRequest } from '../../types/demo';
import { supabase } from '../../lib/supabase';
import { formatDate } from '../../utils/date';

interface DemoRequestTableProps {
  requests: StoredDemoRequest[];
  loading: boolean;
  onStatusUpdate: () => void;
}

export function DemoRequestTable({ requests, loading, onStatusUpdate }: DemoRequestTableProps) {
  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from('demo_requests')
      .update({ status })
      .eq('id', id);

    if (!error) {
      onStatusUpdate();
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Company</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                      {request.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {request.company}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {formatDate(request.preferred_date)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${request.status === 'scheduled' ? 'bg-green-100 text-green-800' :
                          request.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'}`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <select
                        value={request.status}
                        onChange={(e) => updateStatus(request.id, e.target.value)}
                        className="rounded-md border-gray-300 text-sm focus:ring-sky-500 focus:border-sky-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}