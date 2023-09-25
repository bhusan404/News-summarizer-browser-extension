document.addEventListener('DOMContentLoaded', function () {
    const summarizeButton = document.getElementById('summarizeButton');
    const articleText = document.getElementById('articleText');
    const summaryDiv = document.getElementById('summary');
  
    summarizeButton.addEventListener('click', function () {
      const text = articleText.value;
      
      // Replace this with your summarization algorithm or API call
      const summary = simplifyText(text, { percent: 20 }); // Example: Simplify-text library
      
      summaryDiv.textContent = summary;
    });
  });
  