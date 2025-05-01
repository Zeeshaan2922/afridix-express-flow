
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.930561353626!2d54.515415115446826!3d24.42029998425882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4409dbe0a551%3A0xfafd4386e9aaff64!2sOmair%20Bin%20Yousuf%20Properties%20-%20Office%20No.%20B%20%E2%80%93%20M25%20-%20Musaffah%20-%20M15%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1589364011757!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Afridi Express Transport LLC Office Location"
      />
    </div>
  );
};

export default GoogleMap;
