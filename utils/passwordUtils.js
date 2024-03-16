import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (dbPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(dbPassword, hashedPassword);
  return isMatch;
};
