import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { firebaseConfig } from './firebase.config';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// Toast Functions
const success = () => toast.success('Success');
const errorToast = () => toast.error('Error');
const loading = () => toast.loading('Loading...');
const dismiss = () => toast.dismiss();

// Data Saving Function (POST)
export const addData = async (type, data) => {
  loading();
  const userRef = db.collection(type);
  try {
    const res = await userRef.add(data);
    dismiss();
    success();
    console.log(res);
    return res;
  } catch (error) {
    dismiss();
    errorToast();
    return error.message;
  }
};

// Login Function (GET + PUT)
export const login = async (type, data) => {
  loading();
  try {
    const snapshot = await db.collection(type).get();
    dismiss();
    success();
    return snapshot;
  } catch (error) {
    dismiss();
    errorToast();
    return error.message;
  }
};

// Fetch Data (GET)
export const getData = async (type, id) => {
  try {
    const snapshot = await db
      .collection(type === 'user' ? 'users' : 'authors')
      .doc(id)
      .get();
    return snapshot.data();
  } catch (error) {
    return error.message;
  }
};

// Update Data (PUT)
export const updateData = async (type, data) => {
  loading();
  const updateRef = db.collection(type).doc(data.id);
  try {
    const response = await updateRef.update(data);
    dismiss();
    success();
    return response;
  } catch (error) {
    dismiss();
    errorToast();
    return error.message;
  }
};

// Fetch Data (GET)
export const getAllBooks = async () => {
  try {
    const snapshot = await db.collection('author').get();
    return snapshot;
  } catch (error) {
    return error.message;
  }
};

// Get A Single document
export const getEbook = async (type, id) => {
  const docRef = doc(db, type, id);

  try {
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    return error.message;
  }
};

// Admin API's
export const getAllUsers = async () => {
  try {
    const snapshot = await firebase.firestore().collection('user').get();
    const documents = [];
    snapshot.forEach((doc) => {
      delete doc.data().Password;
      const data = doc.data();
      data.id = doc.id;
      documents.push(data);
      return documents;
    });
    return documents;
  } catch (error) {
    return error.message;
  }
};

export const getAllAuthors = async () => {
  try {
    const snapshot = await firebase.firestore().collection('author').get();
    const documents = [];
    snapshot.forEach((doc) => {
      delete doc.data().Password;
      const data = doc.data();
      data.id = doc.id;
      documents.push(data);
      return documents;
    });
    return documents;
  } catch (error) {
    return error.message;
  }
};

export const getAllVolunteers = async () => {
  try {
    const snapshot = await firebase.firestore().collection('volunteer').get();
    const documents = [];
    snapshot.forEach((doc) => {
      delete doc.data().Password;
      const data = doc.data();
      data.id = doc.id;
      documents.push(data);
      return documents;
    });
    return documents;
  } catch (error) {
    return error.message;
  }
};

export const getAllMessages = async () => {
  try {
    const snapshot = await firebase.firestore().collection('contact').get();
    const documents = [];
    snapshot.forEach((doc) => {
      delete doc.data().Password;
      const data = doc.data();
      data.id = doc.id;
      documents.push(data);
      return documents;
    });
    return documents;
  } catch (error) {
    return error.message;
  }
};

// Delete doc from collection
export const deleteData = async (collection, id) => {
  loading();
  try {
    const response = await deleteDoc(doc(db, collection, id));
    dismiss();
    success();
    return response;
  } catch (error) {
    dismiss();
    errorToast();
    return error.message;
  }
};

// Add new Contact
export const newContact = async (data) => {
  loading();
  const userRef = db.collection('contact');
  try {
    const res = await userRef.add(data);
    dismiss();
    success();
    return res;
  } catch (error) {
    dismiss();
    errorToast();
    return error.message;
  }
};
