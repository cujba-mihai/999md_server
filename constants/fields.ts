const fields = `
email
  string,email,required
name
  string
lastName
  string
password
  string,min[6],max[18],required`;

export default fields;
