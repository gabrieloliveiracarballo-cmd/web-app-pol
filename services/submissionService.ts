import { SubmissionData } from '../types';

export const submitInstagramHandle = async (handle: string): Promise<boolean> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const data: SubmissionData = {
    instagramHandle: handle,
    timestamp: new Date().toISOString()
  };

  // In a real app, integrate EmailJS or Firebase here.
  // Example for EmailJS:
  // emailjs.send('service_id', 'template_id', { instagram: handle }, 'user_id');
  
  console.log("Submitting to backend:", data);
  
  return true; // Return success
};