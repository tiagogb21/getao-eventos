function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
// (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
// (?=.*[0-9])	The string must contain at least 1 numeric character
// (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
// (?=.{8,})	The string must be eight characters or longer

function validatePassword(password) {
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return strongRegex.test(password);
}

const verifyFullName = (req, res, next) => {
  const { full_name } = req.body;
  if (!full_name)
    return res.status(401).json({ message: "Full Name required!" });
  next();
};

const verifyEmail = (req, res, next) => {
  const { user_email } = req.body;
  if (!user_email)
    return res.status(401).json({ message: "Email is required!" });
  if (!validateEmail(user_email))
    return res.status(401).json({ message: "Invalid email" });
  next();
};

const verifyPassword = (req, res, next) => {
  const { user_password } = req.body;
  if (!user_password)
    return res.status(401).json({ message: "Password is required!" });
  if (!validatePassword(user_password))
    return res.status(401).json({ message: "Invalid password" });
  next();
};

module.exports = { verifyFullName, verifyEmail, verifyPassword };
