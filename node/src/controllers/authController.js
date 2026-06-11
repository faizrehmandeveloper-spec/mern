export const register = async (req, res) => {
  const { name, email, password } = req.body;
  return res.json(name);
};
