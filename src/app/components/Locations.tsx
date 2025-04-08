import LocationCard from './LocationCard';

// Move the locations data outside the component to ensure consistent rendering
const locations = [
  {
    name: 'Main Showroom',
    address: '123 Paint Street, Colorful City, ST 12345',
    phone: '(555) 123-4567',
    email: 'main@shinepaint.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155720644!2d-73.987844924164!3d40.757985971389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  },
  {
    name: 'North Branch',
    address: '456 Color Avenue, Paint Town, ST 67890',
    phone: '(555) 234-5678',
    email: 'north@shinepaint.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155720644!2d-73.987844924164!3d40.757985971389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  },
  {
    name: 'South Branch',
    address: '789 Shade Road, Hue City, ST 34567',
    phone: '(555) 345-6789',
    email: 'south@shinepaint.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155720644!2d-73.987844924164!3d40.757985971389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  },
] as const;

export default function Locations() {
  return (
    <div className="space-y-6">
      {locations.map((location) => (
        <LocationCard
          key={location.name}
          {...location}
        />
      ))}
    </div>
  );
} 