<template>
    <div>
      <h2>Book List</h2>
      <ul>
        <li v-for="book in books" :key="book.isbn">
          {{ book.name }} (ISBN: {{ book.isbn }})
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookList',
    data() {
      return {
        books: [
          { name: 'Book One', isbn: '1234567890' },
          { name: 'Book Two', isbn: '0987654321' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: #333;
  }
  </style>
  