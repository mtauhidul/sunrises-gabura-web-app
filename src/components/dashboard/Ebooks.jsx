import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getAllBooks } from '../../utils/api';
import styles from './Ebooks.module.css';

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
