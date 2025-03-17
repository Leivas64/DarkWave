    
    function scrollar(sectionNumber) {
    // Gera o ID da seção com base no número passado
    const sectionId = `section${sectionNumber}`;
    
    // Seleciona a seção correspondente
    const section = document.getElementById(sectionId);
    
    // Verifica se a seção existe antes de tentar rolar
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Rola suavemente
        block: 'center'      // Alinha ao topo
      });
    } else {
      console.error(`Seção com ID '${sectionId}' não encontrada.`);
    }
  }
function email() {
  window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=eventos@darkwave.com.br');
  }
  function whatsapp() {
    window.open('https://wa.me/+5519996216366');
  }