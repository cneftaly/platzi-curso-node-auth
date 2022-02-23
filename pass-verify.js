const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123.654';
  const originalHash = '$2b$10$dDxb.o3XF9V5UFZWfylgxeU5JvRNFIfUZUm1dWhFJ3jR1lJi4YiSq';
  const isMatch = await bcrypt.compare(myPassword, originalHash);
  console.log(isMatch);
}

verifyPassword();
