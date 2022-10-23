import { useState } from "react";
import SuccessMessage from "./SuccessMessage";

export default function RequestDialog({ handleClose }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [send, setSend] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // send the message to the server and return the response object
  const sendPayload = async () => {
    const res = await fetch(
      "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName, email: email }),
      }
    );
    return res;
  };

  // handle the submit function of the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSend(true);
    const res = await sendPayload();
    if (res.status == 200) {
      setSend(false);
      setSuccess(true);
    } else {
      const resMessage = await res.json();
      setErrorMessage(`Error Message: ${resMessage.errorMessage}`);
      setSend(false);
      setError(true);
    }
  };

  // check whether email and confirm email field match, if not send an error message
  const checkConfirmEmail = (value) => {
    const inp = document.getElementById("confirm-email-field");
    if (email != value) {
      inp.setCustomValidity("Confirm Email field does not match Email field");
    } else {
      inp.setCustomValidity("");
    }
  };

  // check whether email is in vaid format
  const checkEmail = (value) => {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const inp = document.getElementById("email-field");
    if (value.match(emailFormat)) {
      inp.setCustomValidity("");
    } else {
      inp.setCustomValidity("Email is not valid");
    }
  };

  return (
    <div className="absolute flex h-screen w-screen flex-col items-center justify-center ">
      <div
        onClick={handleClose}
        className="absolute h-full w-full bg-gray-500 opacity-50 hover:cursor-pointer"
      ></div>
      {success ? (
        <SuccessMessage handleClose={handleClose} />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="z-10 flex h-[60%] w-[90%] flex-col items-center justify-start gap-[2.5%] border-2 border-gray-500 bg-white xl:w-[40%]"
        >
          <div className="flex h-[20%] flex-col items-center justify-center italic">
            <div className="text-xl font-bold text-gray-500">
              Request on Invite
            </div>
            <div className="w-8 border-b-2 border-gray-500"></div>
          </div>
          <input
            className="h-[10%] w-[90%] rounded border-2 border-gray-500 pl-2"
            placeholder="Full Name"
            required
            minLength={3}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="off"
          />
          <input
            id="email-field"
            className="h-[10%] w-[90%] rounded border-2 border-gray-500 pl-2"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              checkEmail(e.target.value);
            }}
            autoComplete="off"
          />
          <input
            id="confirm-email-field"
            className="h-[10%] w-[90%] rounded border-2 border-gray-500 pl-2"
            placeholder="Confirm Email"
            required
            value={confirmEmail}
            onChange={(e) => {
              setConfirmEmail(e.target.value);
              checkConfirmEmail(e.target.value);
            }}
            type="email"
            autoComplete="off"
          />
          <div className="h-[5%]"></div>
          {send && (
            <input
              className="h-[10%] w-[90%] rounded border-2 border-gray-500 text-center"
              placeholder="Sending, please wait..."
              disabled
            />
          )}
          {!send && (
            <input
              className="h-[10%] w-[90%] rounded border-2 border-gray-500 pl-2 text-gray-500 hover:cursor-pointer"
              value="Send"
              type="submit"
            />
          )}
          {error && (
            <div
              data-testid="error-message"
              className="w-[90%] text-center italic text-gray-500"
            >
              {errorMessage}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
