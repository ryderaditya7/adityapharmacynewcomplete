import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>आदित्य आयुर्वेदिक फार्मेसी एण्ड क्लिनिक</h1>
      </header>
      <main className="App-main">
        <section className="doctor-info">
          <h2>डा. सिद्धार्थ ठाकुर (एम.डी., बी.एच.यू.)</h2>
          <p>पेट, जोर्नी, यौन तथा मानसिक समस्यामा अनुभवी चिकित्सकबाट परामर्श लिनुहोस्।</p>
        </section>
        <section className="services">
          <h2>सेवाहरू</h2>
          <ul>
            <li>आयुर्वेदिक औषधिहरू</li>
            <li>व्यक्तिगत परामर्श सेवा</li>
            <li>नेपालभरि डेलिभरी सुविधा</li>
          </ul>
        </section>
        <section className="contact">
          <h2>सम्पर्क</h2>
          <p>📞 ९८४२६२१३९३ / ९८४२६९४८९८</p>
          <p>📍 थाना रोड, दमक, नेपाल</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2025 आदित्य आयुर्वेदिक फार्मेसी एण्ड क्लिनिक</p>
      </footer>
    </div>
  );
}

export default App;