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

      // TODO: this is not necessary, or at least here
      const data = await response.json();

      if (!response.ok) {
        // TODO: may be like this?  const errorData = await response.json();
        //  return { success: false, data: errorData };
        return { success: false };
      }
  
      return { success: true };
    } catch (error) {
        return { success: false, data: { message: error.message } };
    }
  };
  