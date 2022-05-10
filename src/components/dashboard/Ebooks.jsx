import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getAllBooks } from '../../utils/api';
import styles from './Ebooks.module.css';

const depts = [
  'Accounting',
  'Agricultural Credit',
  'Agricultural Economics',
  'Agricultural Products',
  'Agriculture',
  'America',
  'Animals',
  'Anthropology',

  'Arabic History',

  'Architecture',

  'Art and Photography',

  'Astronomy',

  'Auditing',

  'Autobiography',

  'Automobile mechanics',

  'Bangabandhu',

  'Bangla Encyclopedia',

  'Bangla Folk-Literature',

  'Bangla Language',

  'Bangla Literature',

  'Bangla Rachanabali',

  'Bangla Story',

  'Bangla Upanyas samagra',

  'Bangla-Child Literature',

  'Bangla-Detective Fiction',

  'Bangla-Kabita',

  'Bangla-Natok',

  'Bangla-Prabandha',

  'Bangla-Science Fiction',

  'Bangla-Translated Literature',

  'Bangla-Upanyas Samagra',

  'Bangladesh',

  'Bangladesh Bank',

  'Bangladesh Economics',

  'Bangladesh service Rules',

  'Bangladeshi Jurnal',

  'Bangladeshi Jurnel',

  'Banking Diploma',

  'Banking Law',

  'Banks and Banking',

  'Banks and banking, International',

  'Bibliographies of works from specific subjects',

  'Biochemistry',

  'Biography',

  'Biography-Bangla Sahityik',

  'Biology',

  'Botany',

  'Budgeting - Public',

  'Business',

  'Business Communication',

  'Business enterprises',

  'Business Law',

  'Business Statistics',

  'Calculus',

  'Central Banking and Reports',

  'CFA - Chartered Financial Analyst',

  'Chemistry',

  'Children Literature',

  'Civil Service',

  'Coins',

  'Commercial Bank',

  'Computer Programming',

  'Computer Science',

  'Constitutional law',

  'Cooking',

  'Corporate Governance',

  'Cost Accounting',

  'Credit',

  'Criminal Law',

  'Criminology',

  'Debt Management',

  'Decective, mystery, spy fiction',

  'Development',

  'Dictionary - Encyclopedia',

  'Drama',

  'e-Books',

  'E-Commerce',

  'Earth Sciences',

  'Ecology',

  'Econometrics',

  'Economic Development and Growth',

  'Economics',

  'Education',

  'Education',

  'Engineering',

  'English Language',

  'English Story',

  'English Story',

  'Entertainment and Recreation',

  'Entrepreneurship',

  'Environment',

  'Ethics and morality',

  'Film',

  'Finance',

  'Financial Economics',

  'Financial Management',

  'First World War',

  'Food',

  'Food',

  'Foreign exchange',

  'Foreign Trade and Foreign Remittance',

  'Galpa-Bangla',

  'Game',

  'General encyclopedic works in other languages',

  'General Knowledge',

  'Generalities',

  'Geography and Travel',

  'Geology',

  'Geophysics',

  'Geopraphy Of Bangladesh',

  'Globalization',

  'Grantha',

  'Hadith',

  'Hindu Religion',

  'History and Culture',

  'History of Ancient World',

  'History of Dhaka',

  'Home economics and family living',

  'Human Resource Management',

  'Hunting, fishing, conservation',

  'India',

  'Industry',

  'Insurance',

  'International development and growth',

  'International Economics',

  'International Politics and Relations',

  'International trade',

  'International Trade and Foreign Exchange',

  'Investment and Market',

  'IR Collections',

  'Islam',

  'Islam and Economics',

  'Islami Banking',

  'Jokes Bangla',

  'Journalism',

  'Kabita',

  'Knowledge',

  'Labour Economics',

  'Land economics',

  'Language',

  'Language Movement',

  'Law',

  'Lecture of Political Leaders',

  'Letters',

  'Liberation war - Bangladesh',

  'Library operations',

  'Library Science',

  'Literary Criticism - Bangla',

  'Literature',

  'Macroeconomics',

  'Management',

  'Managerial economics',

  'Map Atlas',

  'Marketing',

  'Married Life',

  'Mathematical Economics',

  'Mathematical Statistics',

  'Mathematics',

  'Media',

  'Medical Science',

  'Merchant Banking',

  'Microeconomics',

  'Mobile Banking',

  'Money',

  'Muhammad (S.) -',

  'Music',

  'Nari Andolon',

  'Natural Science',

  'Non-profit organization',

  'Novel',

  'Online Banking',

  'Online Database',

  'Personal Names',

  'Personnel administration',

  'Philosophy and philosophical History',

  'Physics',

  'Poem',

  'Political Science: Politics and Government',

  'Politics: Bangladesh and foreign Policy',

  'Population',

  'Poverty',

  'Probabilities and applied mathematics',

  'Production',

  'Programming Language',

  'Project Management',

  'Psychology',

  'Public Administration',

  'Public Expenditure',

  'Public Finance',

  'Quran',

  'Rabindranath',

  'Rachanabali Bangla',

  'Religion',

  'Research',

  'Risk Management',

  'River and Port',

  'Sampling Techniques',

  'Science',

  'Science and Technology',

  'Science Fiction',

  'Short Stories',

  'Small Medium Entrepreneurs',

  'Social Economics',

  'Social Group',

  'Social Problems and Services; Associations',

  'Social Science',

  'Social Speech',

  'Sociology and Anthropology',

  'Song bangla',

  'Space and Astronomy',

  'Specialised Bank',

  'Statistics',

  'Sylhet History',

  'Systems',

  'Technology',

  'Theology and Ethics',

  'Tourism',

  'Trade',

  'Translated Literature-Bangla',

  'Travel',

  'Travel and Tours-Bangladesh',

  'Travels and Tours - India',

  'Upanyas-Bangla',

  'Women Empowerment',

  'Zoology and Animal Science',
];

const Ebooks = () => {
  const [key, setKey] = useState('');
  const [cat, setCat] = useState('');
  const [ebooks, setEbooks] = useState([]);
  const { id } = useParams();

  const getAllEbooks = async () => {
    const response = await getAllBooks(id);
    setEbooks(response);
  };

  const categorizedBooks = ebooks.filter((book) => book?.category === cat);

  const filteredBooks = ebooks.filter(
    (book) =>
      book?.title?.toLowerCase().includes(key.toLowerCase()) ||
      book?.writer?.toLowerCase().includes(key.toLowerCase())
  );

  useEffect(() => {
    getAllEbooks();
  }, []);
  return (
    <Container fluid style={{ minHeight: '87vh' }}>
      <br />
      <InputGroup
        style={{ maxWidth: '80%', minWidth: '300px', margin: '0 auto' }}
        className='mb-3'>
        <InputGroup.Text id='inputGroup-sizing-default'>
          Search E-Books
        </InputGroup.Text>
        <FormControl
          onChange={(e) => {
            setKey(e.target.value);
            setCat('');
          }}
          aria-label='Default'
          aria-describedby='inputGroup-sizing-default'
        />
      </InputGroup>
      <div className={styles.selectWrapper}>
        <label style={{ marginRight: '20px' }} htmlFor=''>
          Select category
        </label>
        <div className={styles.selectDropdown}>
          <select
            style={{ height: '30px' }}
            onChange={(e) => {
              setCat(e.target.value);
              setKey('');
            }}
            name='category'>
            <option value='Arts'>Arts</option>
            <option value='Astronomy'>Astronomy</option>
            <option value='Biography & Autobiography'>
              Biography & Autobiography
            </option>
            <option value='Biology and Other Natural Sciences'>
              Biology and Other Natural Sciences
            </option>
            <option value='Business and Economics'>
              Business and Economics
            </option>
            <option value='Chemistry'>Chemistry</option>
            <option value="Children's Books">Children's Books</option>
            <option value='Comics and Graphic Novels'>
              Comics and Graphic Novels
            </option>
            <option value='Computers'>Computers</option>
            <option value='Crime, Thrillers and Mystery'>
              Crime, Thrillers and Mystery
            </option>
            <option value='Education Studies and Teaching'>
              Education Studies and Teaching
            </option>
            <option value='Engineering'>Engineering</option>
            <option value='Fiction'>Fiction</option>
            <option value='Earth Sciences'>Earth Sciences</option>
            <option value='History'>History</option>
            <option value='Housekeeping and Leisure'>
              Housekeeping and Leisure
            </option>
            <option value='Jurisprudence and Law'>Jurisprudence and Law</option>
            <option value='Languages'>Languages</option>
            <option value='Linguistics'>Linguistics</option>
            <option value='Mathematics'>Mathematics</option>
            <option value='Medicine'>Medicine</option>
            <option value='Nature, Animal and Pets'>
              Nature, Animal and Pets
            </option>
            <option value='Others'>Others</option>
            <option value='Physics'>Physics</option>
            <option value='Poetry'>Poetry</option>
            <option value='Psychology'>Psychology</option>
            <option value='Reference'>Reference</option>
            <option value='Science'>Science</option>
            <option value='Science Fiction and Fantasy'>
              Science Fiction and Fantasy
            </option>
            <option value='Self-help, Relationships & Lifestyle'>
              Self-help, Relationships & Lifestyle
            </option>
            <option value='Society, Politics & Philosophy'>
              'Society, Politics & Philosophy
            </option>
            <option value='Sports, Hobbies & Games'>
              'Sports, Hobbies & Games
            </option>
            <option value='Technique'>Technique</option>
            <option value='Travel'>Travel</option>
            {depts.map((dept, index) => {
              return (
                <option key={index} value={dept}>
                  {dept}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <br />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Category</th>
            <th>Size</th>
            <th>Get</th>
          </tr>
        </thead>
        {cat && (
          <tbody>
            {cat.length > 1 &&
              categorizedBooks?.sort()?.map((book, index) => {
                console.log(book);
                // const date = new Date(book?.time?.seconds * 1000);
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{book?.title?.slice(0, -4)}</td>
                    <td>{book?.writer}</td>
                    <td>{book?.category}</td>
                    <td>{(book?.size / 1024).toFixed(3) + ' KB'}</td>
                    <td>
                      <a
                        target='_blank'
                        href={book?.url}
                        download
                        rel='noreferrer'>
                        Download
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        )}
        {key && (
          <tbody>
            {key.length > 1 &&
              filteredBooks?.sort()?.map((book, index) => {
                // const date = new Date(book?.time?.seconds * 1000);
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{book?.title?.slice(0, -4)}</td>
                    <td>{book?.writer}</td>
                    <td>{book?.Category}</td>
                    <td>{(book?.size / 1024).toFixed(3) + ' KB'}</td>
                    <td>
                      <a
                        target='_blank'
                        href={book?.url}
                        download
                        rel='noreferrer'>
                        Download
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        )}
      </Table>
    </Container>
  );
};

export default Ebooks;
