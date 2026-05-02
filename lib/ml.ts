export const ML_ENGINE_URL = process.env.ML_ENGINE_URL || 'http://localhost:8000';

export async function fetchML(endpoint: string, data: any) {
  try {
    const response = await fetch(`${ML_ENGINE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `ML Engine responded with ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`ML Engine Error [${endpoint}]:`, error);
    throw error;
  }
}
