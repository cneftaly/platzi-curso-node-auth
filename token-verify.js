const jwt = require('jsonwebtoken');

const secret = 'R49i8ud-3-/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0NTY1MzU3M30.v7IP97r3BGrW3T-IgLBXsBw4tHsDrPhiOaEBEfvjFlc';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
