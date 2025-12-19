import { SubmissionData } from '../types';

export const submitInstagramHandle = async (handle: string): Promise<boolean> => {
  const payload = {
    instagram: handle,
    timestamp: new Date().toISOString()
  };

  try {
    // Send data to the webhook
    const response = await fetch('https://app.next-barber.com/webhook/pol-ligon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Error submitting to webhook:", response.status, response.statusText);
      // Even if the webhook fails, we might want to show success to the user 
      // or handle it differently. For now, let's return false on failure.
      return false;
    }

    return true;
  } catch (error) {
    console.error("Network error submitting to webhook:", error);
    return false;
  }
};