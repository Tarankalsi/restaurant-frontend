import React, { useState } from 'react';
import Card from './common/Card';
import Input from './common/Input';
import Dropdown from './common/Dropdown';
import Button from './common/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import axios from 'axios';

const ReservationForm: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [guests, setGuests] = useState<string>("2");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM",
    "8:30 PM", "9:00 PM",
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "10+"];

  const timeOptions = timeSlots.map(time => ({
    value: time,
    label: time
  }));

  const guestDropdownOptions = guestOptions.map(guest => ({
    value: guest,
    label: `${guest} ${parseInt(guest) === 1 ? "Guest" : "Guests"}`
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://restaurant-backend-uvwx.onrender.com/api/reservations', {
        date,
        time,
        guests,
        name,
        email,
        phoneNumber: phone,
      });
      if (response.data.success) {
        setShowPopup(true);
      } else {
        setError('No availability for the selected slot.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 fade-in-up ${isIntersecting ? 'animate' : ''}`}>
              Make a Reservation
            </h2>
            <p className={`text-xl text-gray-600 fade-in-up ${isIntersecting ? 'animate' : ''} stagger-1`}>
              Book your table and experience culinary excellence
            </p>
          </div>

          <Card padding="lg" shadow="lg" className={`fade-in-up ${isIntersecting ? 'animate' : ''} stagger-2`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="tel"
                  label="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <Input
                  type="date"
                  label="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Dropdown
                  label="Time"
                  options={timeOptions}
                  value={time}
                  onChange={setTime}
                  placeholder="Select time"
                />
                <Dropdown
                  label="Guests"
                  options={guestDropdownOptions}
                  value={guests}
                  onChange={setGuests}
                  placeholder="Select guests"
                />
              </div>

              {error && <div className="text-red-500">{error}</div>}

              <Button variant="primary" size="lg" className="w-full" type="submit" disabled={loading}>
                {loading ? 'Checking...' : 'Book Reservation'}
              </Button>
            </form>
          </Card>

          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
              <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
                <div className="mb-4 text-green-600 font-bold text-2xl">
                  🎉 Reservation Confirmed!
                </div>
                <div className="mb-6 text-gray-700">
                  Thank you, <span className="font-semibold">{name}</span>!<br />
                  Your table for <span className="font-semibold">{guests}</span> at <span className="font-semibold">{time}</span> on <span className="font-semibold">{date}</span> is reserved.<br />
                  A confirmation has been sent to <span className="font-semibold">{email}</span>.
                </div>
                <Button variant="primary" onClick={() => setShowPopup(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;