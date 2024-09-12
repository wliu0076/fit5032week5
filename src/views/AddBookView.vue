<template>
    <div>
      <h1>Books with ISBN &gt; 1000</h1>
      <div v-if="loading">Loading books...</div>
      <div v-if="error">{{ error }}</div>
      <ul v-if="!loading && !error">
        <li v-for="book in books" :key="book.id">
          {{ book.name }} - ISBN: {{ book.isbn }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { db } from '../firebase/init.js'; // Corrected import
  import { collection, query, where, getDocs } from 'firebase/firestore';
  
  export default {
    setup() {
      const books = ref([]);
      const loading = ref(true);
      const error = ref(null);
  
      const fetchBooks = async () => {
        try {
          const q = query(collection(db, 'books'), where('isbn', '>', 1000));
          const querySnapshot = await getDocs(q);
          const booksArray = [];
          querySnapshot.forEach((doc) => {
            booksArray.push({ id: doc.id, ...doc.data() });
          });
          books.value = booksArray;
        } catch (err) {
          error.value = 'Error fetching books: ' + err.message;
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(() => {
        fetchBooks();
      });
  
      return { books, loading, error };
    },
  };
  </script>
  
  