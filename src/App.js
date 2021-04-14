import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown , setMarkdown] = useState('## markdown preview');
  return <main>
    <section class="markdown">
      <textarea className="input" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
      <article class="result">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </section>
  </main>
}

export default App
