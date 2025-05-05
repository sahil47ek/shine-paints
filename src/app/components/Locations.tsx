import LocationCard from './LocationCard';

// Branch locations data
const locations = [
  {
    name: 'Eengapuzha Branch',
    address: 'Shine Paints, Engapuzha, Kedavur, Kerala 673586',
    phone: '+91 99465 67632',
    email: 'eengapuzha@shinepaint.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.8016651665163!2d75.96598337427862!3d11.470634188711678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba66ec769d70c3f%3A0x7317dca5eafd1001!2sShine%20Paints%20Enghapuzha!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin',
  },
  {
    name: 'Thamarassery Branch',
    address: 'Shine Paints, Thamarassery, Kozhikode, Kerala',
    phone: '+91 81290 78820',
    email: 'thamarassery@shinepaint.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8675563662287!2d75.93325937507825!3d11.298824989309837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba642fd0000000f%3A0x3ba642fd0000000f!2sThamarassery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin',
  },
  {
    name: 'Koduvally Branch',
    address: '1st Floor, TK Tower, Above Chicking Restaurant, Main Road, Koduvally, Kerala 673572',
    phone: '+91 87142 09920',
    email: 'koduvally@shinepaint.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.5647010986837!2d75.90584527427775!3d11.356836588723925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6435e85c9f71f%3A0x1df7ebcf8767c07b!2sShine%20Paints%20Koduvally!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin',
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