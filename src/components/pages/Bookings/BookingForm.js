import { useState } from "react";
import FormField from "./FormField";

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
  const minimumDate = new Date().toISOString().split("T")[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ["Birthday", "Anniversary"];

  // Error messages
  const invalidDateErrorMessage = "Please choose a valid date";
  const invalidTimeErrorMessage = "Please choose a valid time";
  const invalidOccasionErrorMessage = "Please choose a valid occasion";
  const invalidNumberOfGuestsErrorMessage =
    "Please enter a number between 1 and 10";
  const invalidFirstNameErrorMessage = "First name is required";
  const invalidLastNameErrorMessage = "Last name is required";
  const invalidEmailErrorMessage = "Enter a valid email address";
  const invalidMobileErrorMessage = "Enter a valid 10-digit mobile number";

  // Field values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  // Touched states
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [mobileTouched, setMobileTouched] = useState(false);
  const [dateTouched, setDateTouched] = useState(false);
  const [timeTouched, setTimeTouched] = useState(false);
  const [guestsTouched, setGuestsTouched] = useState(false);
  const [occasionTouched, setOccasionTouched] = useState(false);

  // Validation
  const isFirstNameValid = () => firstName.trim().length > 0;
  const isLastNameValid = () => lastName.trim().length > 0;
  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isMobileValid = () => /^[0-9]{10}$/.test(mobile);
  const isDateValid = () => date !== "";
  const isTimeValid = () => time !== "";
  const isNumberOfGuestsValid = () =>
    numberOfGuests !== "" &&
    numberOfGuests >= minimumNumberOfGuests &&
    numberOfGuests <= maximumNumberOfGuests;
  const isOccasionValid = () => occasion !== "";

  const areAllFieldsValid = () =>
    isFirstNameValid() &&
    isLastNameValid() &&
    isEmailValid() &&
    isMobileValid() &&
    isDateValid() &&
    isTimeValid() &&
    isNumberOfGuestsValid() &&
    isOccasionValid();

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (areAllFieldsValid()) {
      submitData({
        firstName,
        lastName,
        email,
        mobile,
        date,
        time,
        numberOfGuests,
        occasion,
      });
    }
  };

  const Required = () => <span style={{ color: "red" }}>*</span>;

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Table reservation</h2>
      <FormField
        label={
          <>
            <span>First Name</span> <Required />
          </>
        }
        htmlFor='first-name'
        hasError={firstNameTouched && !isFirstNameValid()}
        errorMessage={invalidFirstNameErrorMessage}
      >
        <input
          type='text'
          id='first-name'
          name='first-name'
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={() => setFirstNameTouched(true)}
        />
      </FormField>

      <FormField
        label={
          <>
            <span>Last Name</span> <Required />
          </>
        }
        htmlFor='last-name'
        hasError={lastNameTouched && !isLastNameValid()}
        errorMessage={invalidLastNameErrorMessage}
      >
        <input
          type='text'
          id='last-name'
          name='last-name'
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
          onBlur={() => setLastNameTouched(true)}
        />
      </FormField>

      <FormField
        label={
          <>
            <span>Email</span> <Required />
          </>
        }
        htmlFor='email'
        hasError={emailTouched && !isEmailValid()}
        errorMessage={invalidEmailErrorMessage}
      >
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
        />
      </FormField>

      <FormField
        label={
          <>
            <span>Mobile Number</span> <Required />
          </>
        }
        htmlFor='mobile'
        hasError={mobileTouched && !isMobileValid()}
        errorMessage={invalidMobileErrorMessage}
      >
        <input
          type='tel'
          id='mobile'
          name='mobile'
          value={mobile}
          required
          placeholder='10-digit mobile number'
          onChange={(e) => setMobile(e.target.value)}
          onBlur={() => setMobileTouched(true)}
        />
      </FormField>

      <FormField
        label={
          <>
            <span>Date</span> <Required />
          </>
        }
        htmlFor='booking-date'
        hasError={dateTouched && !isDateValid()}
        errorMessage={invalidDateErrorMessage}
      >
        <input
          type='date'
          id='booking-date'
          name='booking-date'
          min={minimumDate}
          value={date}
          required
          onChange={handleDateChange}
          onBlur={() => setDateTouched(true)}
        />
      </FormField>

      <FormField
        label={
          <>
            <span>Time</span> <Required />
          </>
        }
        htmlFor='booking-time'
        hasError={timeTouched && !isTimeValid()}
        errorMessage={invalidTimeErrorMessage}
      >
        <select
          id='booking-time'
          name='booking-time'
          value={time}
          required
          onChange={(e) => setTime(e.target.value)}
          onBlur={() => setTimeTouched(true)}
        >
          <option value='' disabled>
            Select a time
          </option>
          {availableTimes.map((times) => (
            <option data-testid='booking-time-option' key={times} value={times}>
              {times}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        label={
          <>
            <span>Number of guests</span> <Required />
          </>
        }
        htmlFor='booking-number-guests'
        hasError={guestsTouched && !isNumberOfGuestsValid()}
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input
          type='number'
          id='booking-number-guests'
          name='booking-number-guests'
          value={numberOfGuests}
          min={minimumNumberOfGuests}
          max={maximumNumberOfGuests}
          required
          placeholder='Enter number of guests'
          onChange={(e) => setNumberGuests(parseInt(e.target.value, 10))}
          onBlur={() => setGuestsTouched(true)}
        />
      </FormField>

      <FormField
        label={
          <>
            <span>Occasion</span> <Required />
          </>
        }
        htmlFor='booking-occasion'
        hasError={occasionTouched && !isOccasionValid()}
        errorMessage={invalidOccasionErrorMessage}
      >
        <select
          id='booking-occasion'
          name='booking-occasion'
          value={occasion}
          required
          onChange={(e) => setOccasion(e.target.value)}
          onBlur={() => setOccasionTouched(true)}
        >
          <option value='' disabled>
            Select occasion
          </option>
          {occasions.map((occasion) => (
            <option
              data-testid='booking-occasion-option'
              key={occasion}
              value={occasion}
            >
              {occasion}
            </option>
          ))}
        </select>
      </FormField>

      <button
        className='button-primary'
        type='submit'
        disabled={!areAllFieldsValid()}
      >
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
