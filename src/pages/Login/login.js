import React, { useState } from "react";
import "./LoginStyles.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import { Form, Container, Row } from "react-bootstrap";
import CustomButton from "components/Common/Button";
import AlertMessage from "components/Common/Alert";
import FormInput from "components/Auth/LoginInput";
import FormPrompt from "components/Common/FromPrompt";
import AnchorLink from "components/Common/AnchorLink";
import Routes from "utils/routes";
import texts from "../../assets/texts.json";
import { isLoginButtonDisabled } from "utils/helpers";
import { handleLogin } from "utils/helpers";

const LoginPage = () => {
  const history = useHistory();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formErrors, setFormErrors] = useState([]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    setFormErrors([]);

    await handleLogin(email, password, login, history, setFormErrors);
  };

  const buttonDisabled = isLoginButtonDisabled(password);

  return (
    <Container className="login-container mx-auto mt-5">
      <Form onSubmit={onSubmit} className="login-form">
        <FormPrompt
          title={texts.proLogin}
          infoText={texts.noAccount}
          infoLink={Routes.HOME}
          infoLinkText={texts.signUp}
          position="above"
        />
        <FormInput
          label={texts.email}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          isInvalid={!!errors.email}
          errorMessage={errors.email}
        />
        <FormInput
          label={texts.password}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          showToggleIcon={true}
          showPassword={showPassword}
          onTogglePassword={togglePasswordVisibility}
        />
        <AnchorLink href={Routes.HOME} text={texts.forgotPassword} />
        {formErrors.length > 0 && (
          <AlertMessage
            variant="danger"
            message={formErrors.join(" ")}
            showInitially={true}
          />
        )}
        <Container className="mt-4">
          <Row>
            <CustomButton onClick={onSubmit} disabled={buttonDisabled}>
              {texts.loginMessage}
            </CustomButton>
          </Row>
        </Container>
        <FormPrompt
          policyText={texts.agreePolicy}
          policyLink={Routes.HOME}
          policyLinkText={texts.privacyPolicy}
          forgotPasswordLink={Routes.HOME}
          position="below"
        />
      </Form>
    </Container>
  );
};

export default LoginPage;
