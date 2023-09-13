    function showSection(sectionId) {
     
      const sections = document.querySelectorAll('main section');
      sections.forEach((section) => {
        section.style.display = 'none';
      });

   
      const selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
        selectedSection.style.display = 'block';

       
        if (sectionId === 'about') {
          document.getElementById('copyright').style.display = 'block';
        } else {
          document.getElementById('copyright').style.display = 'none';
        }
      }
    }
