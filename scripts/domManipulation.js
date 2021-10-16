/* eslint-disable comma-dangle */
const staff = [
  {
    picture: 'images/Ariel-Camus.png',
    alt: 'picture of ariel camus',
    name: 'Ariel Camus',
    job: 'microverse founder + CEO',
    bio: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye, a travel app with 1MM+ users acquired by Lonely Planet. He is famous for his bad jokes and Argentinian asados.',
  },
  {
    picture: 'images/Anne-Lore.png',
    alt: 'picture of Anne-Lore',
    name: 'Anne-Lore De Vreese',
    job: 'student success',
    bio: 'Anne-Lore is originally from Belgium and has lived in 5 countries in North America, Asia, and Europe. Her background is in tech recruitment and her passion lies in getting more underrepresented communities in the tech world. Outside of work you’ll often find her cooking new dishes or spending time in nature.',
  },
  {
    picture: 'images/Andrea-Funda.png',
    alt: 'picture of Andrea Funda',
    name: 'Andrea Funda',
    job: 'student success',
    bio: 'As an avid traveler, Andrea believes no road trip is successful without getting lost at least once. Professionally though, she loves helping people find their way. Her background is in process, project, and people management. Outside of work, she can usually be found playing board games, hiking, or mastering new recipes.',
  },
  {
    picture: 'images/Gaby-Suarez.png',
    alt: 'picture of Gaby Suarez',
    name: 'Gaby Suarez',
    job: 'Admissions',
    bio: 'Gaby is a native Salvadoran, Spanglish-speaking, dog (and sushi) lover. Her background is in managerial consulting for large tech companies, but her professional passion lies in helping companies with strong social missions solve complex problems.',
  },
  {
    picture: 'images/Geogory-Barrett.png',
    alt: 'picture of Geogory Barrett',
    name: 'Geogory Barrett',
    job: 'Operations',
    bio: "Greg is a lover of travel and has lived in Asia, North America and his native Europe. His background is in technology and education and he is passionate about working remotely. Outside of work, you'll find him in a garden center buying more plants for the small jungle he is growing on his balcony.",
  },
  {
    picture: 'images/Nicolas-Kneler.png',
    alt: 'picture of Nicolas Kneler',
    name: 'Nicolas Kneler',
    job: 'Admissions',
    bio: "Born and raised in Argentina, Nico developed a music collaboration platform right after college and has been designing product strategies for startups ever since. When not working you'll find him walking about or looking for original furniture in flea markets.",
  },
];

const staffContainerWrapper = document.querySelector(
  '.staff-container-wrapper'
);

function addStaffMember(staffMember) {
  const staffContainer = document.createElement('article');
  const staffInformation = document.createElement('div');
  const profilePicture = document.createElement('img');
  const staffIntroduction = document.createElement('div');
  const staffName = document.createElement('h4');
  const jobTitle = document.createElement('span');
  const bio = document.createElement('p');

  staffContainer.className = 'staff-container';
  staffInformation.className = 'staff-information';
  staffIntroduction.className = 'staff-introduction';
  staffName.className = 'staff-name';
  jobTitle.className = 'job-title';
  bio.className = 'bio';

  profilePicture.src = staffMember.picture;
  profilePicture.alt = staffMember.alt;
  staffName.textContent = staffMember.name;
  jobTitle.textContent = staffMember.job;
  bio.textContent = staffMember.bio;

  staffInformation.appendChild(profilePicture);
  staffIntroduction.appendChild(staffName);
  staffIntroduction.appendChild(jobTitle);
  staffIntroduction.appendChild(bio);
  staffContainer.appendChild(staffInformation);
  staffContainer.appendChild(staffIntroduction);
  staffContainerWrapper.appendChild(staffContainer);
}

staff.forEach((staffMember) => {
  addStaffMember(staffMember);
});
