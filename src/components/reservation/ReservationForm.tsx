import React, { useState } from 'react';
import axios from 'axios';
import Input from '../common/Input';
import Dropdown from '../common/Dropdown';
import Button from '../common/Button';

interface ReservationFormProps {
  date: string;
  setDate: (date: string) => void;
  time: string;
  setTime: (time: string) => void;
  guests: string;
  setGuests: (guests: string) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [available, setAvailable] = useState(false);

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

  const handleCheckAvailability = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`https://restaurant-backend-uvwx.onrender.com/api/reservations/check-availability`, {
        date,
        time,
        guests
      });

      console.log('Availability response:', response.data);
      // Show popup if available
      if (response.data.data.available) {
        setAvailable(true);
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
    <div className="space-y-4">
      <Input
        type="date"
        label="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
      />

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

      {error && <div className="text-red-500">{error}</div>}
      {available && (
        <div className="text-green-600 font-bold">
          Table is available for your selected time!
        </div>
      )}
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={handleCheckAvailability}
        disabled={loading}
      >
        {loading ? 'Checking...' : 'Check Availability'}
      </Button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <div className="mb-4 text-green-600 font-bold text-lg">
              Table is available!
            </div>
            <Button variant="primary" onClick={() => setShowPopup(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;