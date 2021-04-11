import people from './people.json';

people.forEach((person) => {
  const { name, email, phone } = person;
  const names = name.split(' ');
  const [firstName, lastName] = names;

  console.log(`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nPhone number: ${phone}\n`);
});
