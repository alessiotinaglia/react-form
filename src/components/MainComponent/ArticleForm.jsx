import { useState } from 'react';

function ArticleForm({ addArticle }) {
  const [articleTitle, setArticleTitle] = useState("");

  const inputChange = (event) => {
    setArticleTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (articleTitle) {
      addArticle(articleTitle);  
      setArticleTitle("");  
    }
  };

  return (
    <div className="container mt-5 p-5">
      <h2>Aggiungi un Titolo Articolo</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="articleTitleInput" className="form-label">Titolo Articolo</label>
          <input 
            type="text" 
            className="form-control"
            id="articleTitleInput" 
            value={articleTitle} 
            onChange={inputChange} 
            placeholder="Inserisci il titolo dell'articolo"            
          />
        </div>
        <button type="submit" className="btn btn-primary">Aggiungi Articolo</button>
      </form>
    </div>
  );
}

export default ArticleForm;
