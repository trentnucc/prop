import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Building, Phone } from 'lucide-react';
import { submitDemoRequest } from '../../services/demoService';
import { DemoRequest } from '../../types/demo';

export function DemoForm() {
  const [formData, setFormData] = useState<DemoRequest>({
    name: '',
    email: '',
    company: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await submitDemoRequest(formData);
      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          date: '',
          time: '',
          notes: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Disable past dates
  const minDate = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <User className="w-4 h-4 mr-2" />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Mail className="w-4 h-4 mr-2" />
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Building className="w-4 h-4 mr-2" />
            Company
          </label>
          <input
            type="text"
            name="company"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Phone className="w-4 h-4 mr-2" />
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            required
            pattern="[0-9\-\+\(\)\s]+"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Calendar className="w-4 h-4 mr-2" />
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            required
            min={minDate}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Clock className="w-4 h-4 mr-2" />
            Preferred Time
          </label>
          <input
            type="time"
            name="time"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="flex items-start text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          name="notes"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Tell us about your needs..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg">
          Demo request submitted successfully! We'll contact you shortly.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
          There was an error submitting your request. Please try again.
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors flex items-center ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Scheduling...
            </>
          ) : (
            'Schedule Demo'
          )}
        </button>
      </div>
    </form>
  );
}