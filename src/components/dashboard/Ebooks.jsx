import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getAllBooks } from '../../utils/api';

const Ebooks = () => {
  const [key, setKey] = useState('');
  const [ebooks, setEbooks] = useState([]);
  const { id } = useParams();

  const getAllEbooks = async () => {
    const newArray = [];
    const snapshot = await getAllBooks(id);
    snapshot.forEach((doc) => {
      doc.data().books.map((book) => {
        return newArray.push(book);
      });
      return newArray;
    });

    setEbooks(newArray);
  };

  const filteredBooks = ebooks.filter(
    (book) =>
      book?.title?.toLowerCase().includes(key.toLowerCase()) ||
      book?.writer?.toLowerCase().includes(key.toLowerCase())
  );
  console.log(key);
  console.log(filteredBooks);

  useEffect(() => {
    getAllEbooks();
  }, []);
  console.log(ebooks);
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
          }}
          aria-label='Default'
          aria-describedby='inputGroup-sizing-default'
        />
      </InputGroup>
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
        <tbody>
          {key.length > 1 &&
            filteredBooks?.sort()?.map((book, index) => {
              // const date = new Date(book?.time?.seconds * 1000);
              return (
                <tr key={index}>
                  <td>{index}</td>
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
                      {' '}
                      Download{' '}
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Ebooks;
