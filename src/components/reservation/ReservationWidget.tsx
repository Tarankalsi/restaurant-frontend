import React from 'react';
import Card from '../common/Card';
import ReservationForm from './ReservationForm';

interface ReservationWidgetProps {
  date: string;
  setDate: (date: string) => void;
  time: string;
  setTime: (time: string) => void;
  guests: string;
  setGuests: (guests: string) => void;
}

const ReservationWidget: React.FC<ReservationWidgetProps> = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
}) => {
  return (
    <div className="w-full lg:w-80">
      <Card padding="lg" shadow="lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Make a Reservation
        </h3>
        <ReservationForm
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          guests={guests}
          setGuests={setGuests}
        />
      </Card>
    </div>
  );
};

export default ReservationWidget; 