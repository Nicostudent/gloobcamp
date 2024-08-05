// src/services/ContactUsService.jsx

export const sendForm = async (values) => {
    try {
      const response = await fetch('https://formspree.io/f/mblrobdj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false };
      }
  
      return { success: true };
    } catch (error) {
        return { success: false, data: { message: error.message } };
    }
  };
  