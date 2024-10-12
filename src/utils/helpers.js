import * as Yup from "yup";
import { ERROR_MESSAGES } from "./constants";
import Routes from "./routes";
import { validationSchema } from "./validation";
import { commentDetails } from "./commmentUtils";

// Checks if the login button should be disabled based on the password length.
// Returns true if the password length is less than 6 characters, otherwise false.
export const isLoginButtonDisabled = (password) => {
  return password.length < 6;
};

// Handles the login process by validating the email and password.
// If validation passes, it attempts to log in the user.
// On successful login, redirects to the dashboard; otherwise, sets error messages.
export const handleLogin = async (
  email,
  password,
  login,
  history,
  setFormErrors
) => {
  try {
    await validationSchema.validate({ email, password }, { abortEarly: false });

    const success = await login(email, password);
    if (success) {
      history.push(Routes.DASHBOARD);
    } else {
      setFormErrors((prev) => [...prev, ERROR_MESSAGES.INVALID_CREDENTIALS]);
    }
  } catch (err) {
    handleValidationError(err, setFormErrors);
  }
};

// Handles validation errors returned from the Yup validation schema.
// If the error is a Yup.ValidationError, it extracts the messages and updates form errors.
// If an unexpected error occurs, it sets a general error message.
const handleValidationError = (err, setFormErrors) => {
  if (err instanceof Yup.ValidationError) {
    const formattedErrors = {};
    err.inner.forEach((error) => {
      formattedErrors[error.path] = error.message;
      setFormErrors((prev) => [...prev, error.message]);
    });
  } else {
    setFormErrors((prev) => [...prev, ERROR_MESSAGES.UNEXPECTED_ERROR]);
  }
};

// Checks if the user is authenticated. If not, redirects to the login page.
export const checkUserAuthentication = (user, history) => {
  if (!user) {
    history.push(Routes.LOGIN);
  }
};

// Increases the current count of comments displayed by 5.
export const loadMoreComments = (currentCount, setCurrentCount) => {
  setCurrentCount((prevCount) => prevCount + 5);
};

// Copies the details of a comment to the clipboard and displays a toast message.
export const handleCopyToClipboard = (
  comment,
  setShowToast,
  TOAST_CLOSE_TIMEOUT
) => {
  if (comment) {
    const textToCopy = commentDetails(comment)
      .map((detail) => `${detail.label}: ${detail.value}`)
      .join("\n");

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), TOAST_CLOSE_TIMEOUT);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
};
